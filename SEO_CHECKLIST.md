# Checklist SEO — Google y buscadores de IA (ChatGPT, Claude, Perplexity, Gemini, Copilot)

## Implementado

**El contenido está en el HTML, no solo en JS.** Cada URL se prerenderiza en el build (`vite-prerender-plugin`, `src/main.tsx`)
en su idioma. El H1, los servicios, las respuestas de la FAQ (también cerradas) y los textos legales están en el HTML inicial.

| URL | Idioma | Indexable |
|---|---|---|
| `/` | EN | sí |
| `/es/` | ES | sí |
| `/ai-central`, `/es/ia-central` | EN / ES | no, hasta `FLAGS.showAiCentralLink = true` |
| `/legal-notice`, `/privacy`, `/cookies` y `/es/aviso-legal`, `/es/privacidad`, `/es/cookies` | EN / ES | no, hasta `LEGAL.legalReviewed = true` |
| `/404.html` | EN (bajo `/es/…` se renderiza en ES en el cliente) | no |

Por cada URL (`src/lib/seo.ts`):
- `<html lang>`, title y description en su idioma.
- Canonical a sí misma.
- hreflang `en` / `es` / `x-default` → EN, solo en las páginas indexables.
- Open Graph: `og:locale` (`en_US` / `es_ES`) más `og:locale:alternate`, y una imagen OG por idioma (`public/og/*.png`, 1200×630).
- Twitter Card `summary_large_image` con título, descripción e imagen. Sin `twitter:site` ni `twitter:creator`, porque no hay cuenta de X.
- `robots` index/noindex.

**JSON-LD**:
- Home: `Organization` (legalName, taxID, address, email, url, logo, sameAs GitHub y LinkedIn, knowsAbout, areaServed Worldwide) + `WebSite` + `ProfessionalService` con un `OfferCatalog` de los 6 servicios + `FAQPage` solo con las preguntas visibles, en el idioma de cada URL.
- `/ai-central`: `SoftwareApplication` solo cuando la página esté publicada. Sin ratings, reviews, cifras ni papers en ninguna parte.

**Archivos generados en el build** (`nebulalabs/build/seo-files.ts`, a partir de la misma configuración que la app):
- `sitemap.xml`: URLs indexables con alternates `xhtml:link`. Excluye automáticamente las páginas legales, AI Central, los casos y las páginas ocultas.
- `llms-full.txt`: texto completo de la home en inglés, con enlace a la versión en español.
- `a7c3e9f14b2d4e8f9c06d5b1e2f3a4c7.txt`: archivo de verificación de IndexNow.

**Archivos estáticos** (`nebulalabs/public/`):
- `robots.txt`: permite los buscadores, la búsqueda con IA y las consultas iniciadas por usuarios (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Bingbot y Googlebot). Los crawlers de entrenamiento (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended y CCBot) están permitidos en un bloque aparte, comentado, para que puedas cambiarlos a `Disallow`. Los user-agents se comprobaron en la documentación de cada proveedor el 19-10-2026.
- `llms.txt`: las tres áreas (servicios, productos y open source), los 6 servicios, AI Central y SLR, el repo open source y el contacto. Sin papers.
- `llms.txt` y `llms-full.txt` están enlazados desde el `<head>` de cada página.

**Coherencia de entidad.** El mismo nombre ("Nebula Labs"), la misma descripción corta (la meta description de la home) y los mismos datos de contacto aparecen en las metas, el JSON-LD, llms.txt, el aviso legal y el footer (`src/config/site.ts`, `src/config/legal.ts`).

**HTML semántico.** Un solo `<h1>` por página, jerarquía de encabezados ordenada, cada `<section>` con `id` y `aria-labelledby`, enlace para saltar al contenido y `alt` descriptivos.

**Rendimiento** (Lighthouse en local, móvil, 4G lenta simulada):

| Página | Performance | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| `/` | 93 | 100 | 100 | 100 |
| `/es/` | 93 | 100 | 100 | 100 |
| `/privacy` | 95 | 100 | 100 | 69 (noindex intencionado) |
| `/ai-central` | 95–96 | 100 | 100 | 69 (noindex intencionado) |

LCP 2,7 s, CLS ≤ 0,01 y TBT ≤ 70 ms en las homes. Medidas aplicadas:
- Solo se descarga el idioma de la página.
- Los textos legales solo se cargan en las páginas legales.
- El banner de cookies se carga después de la hidratación.
- La fuente de los titulares se precarga.
- JetBrains Mono está autoalojada y solo con el subconjunto latin.
- Se eliminó Inter, que no se usaba.
- El hero se pinta sin animación de entrada.

## Verificación

```powershell
# Contenido sin JavaScript: el H1, los servicios y la FAQ deben estar en la respuesta
curl.exe -s https://nebulalabs.es/es/ | Select-String "aplicada a tu negocio|CTO externo|Cómo funciona el servicio"
curl.exe -s https://nebulalabs.es/sitemap.xml
curl.exe -s https://nebulalabs.es/robots.txt
curl.exe -s https://nebulalabs.es/llms-full.txt
```
- Rich Results Test: https://search.google.com/test/rich-results — `/` y `/es/` (FAQ y Organization).
- Validador de schema: https://validator.schema.org — `/` y `/es/`.
- PageSpeed Insights: https://pagespeed.web.dev — `/` y `/es/`, en móvil.
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector — `/` y `/es/` (imagen OG por idioma).

## IndexNow (Bing → Copilot y la búsqueda de ChatGPT)

La clave está en `src/config/site.ts` y se sirve en `https://nebulalabs.es/a7c3e9f14b2d4e8f9c06d5b1e2f3a4c7.txt`.
Después de cada despliegue que cambie contenido, haz el ping (no está automatizado):

```powershell
curl.exe -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" -d '{\"host\":\"nebulalabs.es\",\"key\":\"a7c3e9f14b2d4e8f9c06d5b1e2f3a4c7\",\"keyLocation\":\"https://nebulalabs.es/a7c3e9f14b2d4e8f9c06d5b1e2f3a4c7.txt\",\"urlList\":[\"https://nebulalabs.es/\",\"https://nebulalabs.es/es/\"]}'
```
Una respuesta `200` o `202` significa que las URLs se han aceptado.

## Acciones manuales del fundador

1. **Google Search Console.** El dominio ya tiene dos registros TXT `google-site-verification` en el DNS, así que probablemente ya está verificado. Compruébalo en GSC y envía `https://nebulalabs.es/sitemap.xml`. Si prefieres verificar con la meta etiqueta, pon el código en `SEARCH_VERIFICATION.google` (`src/config/site.ts`).
2. **Bing Webmaster Tools.** Añade el sitio (puedes importarlo desde GSC) y envía el sitemap. Para verificar con meta etiqueta, usa `SEARCH_VERIFICATION.bing`.
3. **LinkedIn.** Usa la misma descripción corta en la página de empresa (la meta description de la home).
4. **Google Business Profile** (opcional).
5. **Rich Results Test, validator.schema.org, PageSpeed Insights y LinkedIn Post Inspector** sobre producción, después de desplegar.
6. **`public/logo.svg` es blanco sobre fondo transparente.** Se usa como `Organization.logo` en el JSON-LD, y Google muestra los logos sobre fondo blanco. Conviene una versión con fondo oscuro o letras oscuras (arte pendiente).
7. Cuando revises los textos legales (`legalReviewed: true`) o publiques AI Central (`showAiCentralLink: true`), entrarán solos en el sitemap. Vuelve a enviarlo y haz ping a IndexNow.
