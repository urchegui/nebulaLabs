# Auditoría de seguridad — nebulalabs.es

Auditoría inicial: 19-10-2026 (comprobaciones pasivas sobre producción, el repositorio y su historial de git).
Hosting: VPS (Ubuntu 24.04). El nginx del host termina TLS y hace de proxy a un contenedor `nginx:alpine`
(`nebulalabs/nginx.conf`) que sirve el sitio estático prerenderizado. Despliegue: GitHub Actions, con cada push a `main`.

Estados: **Corregido** (en el repo, activo tras el siguiente despliegue) · **Pendiente** · **Manual** (acción del fundador).

## Hallazgos

| # | Hallazgo | Severidad | Estado | Dónde |
|---|---|---|---|---|
| S1 | Formulario de contacto roto en producción: la `access_key` de Web3Forms era `undefined` en el bundle (la clave no llegaba al build de Docker) | Crítica (funcional) | Corregido | `.github/workflows/deploy.yml`, `nebulalabs/Dockerfile` (commit del hotfix) |
| S2 | Ninguna cabecera de seguridad en producción: los `add_header` dentro de `location` anulaban los declarados a nivel `server` | Alta | Corregido | `nebulalabs/nginx.conf` |
| S3 | `npm audit`: 22 vulnerabilidades (18 altas), casi todas en tooling de desarrollo (dev server de Vite, puppeteer) | Alta → Media | Corregido: 0 vulnerabilidades. Eliminadas dependencias sin uso (`puppeteer`, `react-router-dom`, `@radix-ui/react-accordion`, `autoprefixer`) y aplicadas actualizaciones sin cambios mayores | `nebulalabs/package.json`, `package-lock.json` |
| S4 | Formulario sin honeypot, sin límites de longitud y sin validación accesible | Media | Corregido: honeypot `botcheck` de Web3Forms, `maxLength` y validación en cliente, eliminación de caracteres de control, bloqueo de 30 s tras enviar y mensajes de error genéricos | `src/components/Contact.tsx` |
| S5 | Google Analytics y Google Fonts se cargaban sin consentimiento (la IP llegaba a Google en cada visita) | Media | Corregido: GA4 solo se carga tras el consentimiento (Consent Mode v2, todo denegado por defecto). Fuentes autoalojadas; eliminada Inter, que no se usaba | `src/lib/analytics.ts`, `src/lib/consent.ts`, `src/main.tsx` |
| S6 | Soft 404: cualquier ruta (`/.env`, `/.git/config`…) devolvía 200 con la home | Media | Corregido: página 404 real (`error_page 404 /404.html`). Nunca se expuso nada sensible | `nebulalabs/nginx.conf` |
| S7 | `www.nebulalabs.es` respondía 200 en vez de redirigir al dominio raíz | Baja | Corregido (nginx del host, comandos ejecutados por el fundador) | `deploy/nginx-host.conf` |
| S8 | El nginx del host mostraba su versión (`server: nginx/1.24.0 (Ubuntu)`) | Baja | Corregido (host: `server_tokens off`; contenedor: `server_tokens off`) | `/etc/nginx/nginx.conf` en el VPS |
| S9 | Sin `security.txt` | Baja | Corregido: RFC 9116, caduca el 19-10-2027 | `public/.well-known/security.txt` |
| S10 | Sin registro DNS `CAA` | Baja | Manual | DNS (Hostinger) |
| S11 | Content-Security-Policy | Media | Desplegada en modo report-only; falta pasarla a enforce (ver abajo) | `nebulalabs/nginx.conf` |
| S12 | Restricción de la access key de Web3Forms a tu dominio | Media | Manual (no se puede comprobar desde el código) | Panel de Web3Forms |
| S13 | DMARC en `p=none` (solo monitoriza) | Baja | Manual | DNS (Hostinger) |

Revisado sin hallazgos:
- **Secretos**: nada en el código ni en el historial de git (`git log -p --all` con patrones de clave, token, secret y clave privada). `.env` está en `.gitignore`. No están instalados gitleaks ni trufflehog; conviene ejecutar uno de ellos una vez.
- **Source maps**: no se publican (`build.sourcemap: false`; `/assets/*.js.map` devuelve 404).
- **TLS**: http → https con 301, certificado Let's Encrypt válido para el dominio raíz y www (renovación con certbot), sin mixed content.
- **Enlaces externos**: todos los `target="_blank"` llevan `rel="noopener noreferrer"` (`ExternalLink` en `src/components/ui.tsx`).
- **SRI**: no aporta nada útil aquí. gtag.js cambia con el tiempo y las fuentes ya están autoalojadas.
- **Formulario**: ningún dato viaja en la URL (POST JSON con `fetch`) y los errores no revelan información del servidor.

## Cabeceras de seguridad (nginx del contenedor)

| Cabecera | Valor |
|---|---|
| Strict-Transport-Security | `max-age=31536000` (sin `includeSubDomains` hasta confirmar que todos los subdominios son solo HTTPS; sin `preload`) |
| X-Content-Type-Options | `nosniff` |
| X-Frame-Options | `SAMEORIGIN` (más `frame-ancestors 'self'` en la CSP) |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | cámara, micrófono, geolocalización, pagos, USB e interest-cohort desactivados |
| Cross-Origin-Opener-Policy | `same-origin` |
| Content-Security-Policy-Report-Only | ver abajo |

Lista mínima de orígenes permitidos en la CSP:
- `script-src 'self' https://www.googletagmanager.com` (GA4, solo tras el consentimiento)
- `connect-src 'self' https://api.web3forms.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com`
- `img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com` (`data:` porque el logo va incrustado)
- `style-src 'self' 'unsafe-inline'` (React y framer-motion usan atributos `style`)
- `font-src 'self'`, `frame-ancestors 'self'`, `base-uri 'self'`, `form-action 'self'`, `object-src 'none'`, `upgrade-insecure-requests`

El build no contiene scripts inline ejecutables; solo el bloque de datos JSON-LD, que la CSP no ejecuta.

### Pasar la CSP a modo enforce
No hay entorno de preview (solo local, y `vite preview` no aplica las cabeceras de nginx), así que el modo report-only se prueba en producción:
1. Tras desplegar, abre la web con DevTools → Console, acepta las cookies, recorre todas las páginas y envía un formulario de prueba.
2. Si no aparece ningún mensaje `[Report Only]` de CSP, cambia en `nebulalabs/nginx.conf` el nombre de la cabecera
   de `Content-Security-Policy-Report-Only` a `Content-Security-Policy`, haz commit y despliega.
3. Repite el paso 1 ya en modo enforce.

## Cómo verificarlo

```powershell
# Cabeceras (deben aparecer las 6 de arriba y la CSP)
curl.exe -sI https://nebulalabs.es
# 404 real (debe devolver 404)
curl.exe -s -o NUL -w "%{http_code}`n" https://nebulalabs.es/.env
# www -> raíz y http -> https (debe devolver 301 a https://nebulalabs.es/)
curl.exe -sI https://www.nebulalabs.es | Select-String "HTTP|location"
# security.txt
curl.exe -s https://nebulalabs.es/.well-known/security.txt
```

- https://securityheaders.com/?q=nebulalabs.es — nota esperada A (A+ al pasar la CSP a enforce).
- https://developer.mozilla.org/en-US/observatory — analiza nebulalabs.es.
- Cookies: abre la web en una ventana privada → DevTools → Application → Cookies. No debe haber `_ga*` antes de aceptar, ni después de rechazar.

## Acciones manuales del fundador

1. **Web3Forms**: en el panel, restringe la access key al dominio `nebulalabs.es`, si tu plan lo permite.
2. **DMARC**: añade informes y, tras unas semanas sin fallos, endurece la política:
   TXT `_dmarc` → `v=DMARC1; p=none; rua=mailto:hello@nebulalabs.es` → más adelante `p=quarantine`.
3. **CAA** (opcional): `nebulalabs.es CAA 0 issue "letsencrypt.org"`, para que solo Let's Encrypt pueda emitir certificados.
4. **CSP**: pásala a enforce (pasos de arriba).
5. **HSTS `includeSubDomains`**: cuando confirmes que slr, hookmanagement y realtime-lz solo funcionan por HTTPS.
6. Ejecuta una vez `gitleaks detect` (o trufflehog) sobre el repositorio.
