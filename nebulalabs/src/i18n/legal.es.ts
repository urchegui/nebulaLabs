// Textos legales (ES). Redacción propia en BORRADOR pendiente de revisión legal.
// Interpolaciones: {{companyName}} {{taxId}} {{address}} {{email}} {{registry}} {{privacyContact}}
// {{hosting}} {{jurisdiction}} {{web3forms}} {{site}} {{days}}

export interface LegalSection {
  id?: string;
  title: string;
  paragraphs: string[];
}

const legalEs = {
  legalNotice: {
    title: 'Aviso legal y términos de uso',
    intro:
      'Este aviso legal regula el acceso y el uso del sitio web {{site}}, en cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE).',
    sections: [
      {
        title: '1. Titular del sitio web',
        paragraphs: [
          'Razón social: {{companyName}}.',
          'NIF: {{taxId}}.',
          'Domicilio social: {{address}}.',
          'Correo electrónico de contacto: {{email}}.',
          'Datos registrales: {{registry}}.',
        ],
      },
      {
        title: '2. Objeto',
        paragraphs: [
          'El sitio web ofrece información sobre {{companyName}} (en adelante, "Nebula Labs"), sus servicios, sus productos y su actividad de investigación, y permite contactar con la empresa a través de un formulario.',
        ],
      },
      {
        id: 'terminos',
        title: '3. Términos de uso',
        paragraphs: [
          'El acceso al sitio web es gratuito y no requiere registro. Al navegar por él aceptas estos términos de uso. Si no estás de acuerdo con ellos, te pedimos que no utilices el sitio.',
          'Te comprometes a usar el sitio web de forma lícita, de acuerdo con la buena fe y sin perjudicar sus sistemas ni los derechos de Nebula Labs o de terceros. En particular, no está permitido introducir código malicioso, intentar acceder a áreas no públicas ni utilizar el formulario de contacto para enviar comunicaciones comerciales no solicitadas o contenidos ilícitos.',
          'Los contenidos del sitio tienen carácter informativo. No constituyen una oferta vinculante ni asesoramiento profesional. La prestación de cualquier servicio o el uso de cualquier producto de Nebula Labs se rige por el contrato o las condiciones específicas que se acuerden en cada caso.',
          'Nebula Labs puede modificar en cualquier momento el contenido del sitio web y estos términos. La versión vigente es la publicada en esta página.',
        ],
      },
      {
        title: '4. Propiedad intelectual e industrial',
        paragraphs: [
          'Los contenidos del sitio web (textos, diseño, logotipos, marcas, código y demás elementos) son titularidad de Nebula Labs o se utilizan con autorización de sus titulares. No está permitida su reproducción, distribución, comunicación pública ni transformación sin autorización previa y por escrito, salvo para el uso personal y privado necesario para navegar por el sitio.',
          'El software que Nebula Labs publica como código abierto se rige por la licencia indicada en cada repositorio. Por ejemplo, el repositorio Systematic-Literature-Review se distribuye bajo la licencia AGPL-3.0. Lo dispuesto en el párrafo anterior no limita los derechos que esas licencias conceden.',
        ],
      },
      {
        title: '5. Responsabilidad',
        paragraphs: [
          'Nebula Labs procura que la información del sitio sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del sitio web. En la medida en que la ley lo permita, Nebula Labs no se hace responsable de los daños derivados del uso del sitio, de interrupciones técnicas o de la presencia de elementos dañinos introducidos por terceros pese a las medidas de seguridad adoptadas.',
        ],
      },
      {
        title: '6. Enlaces a sitios de terceros',
        paragraphs: [
          'El sitio web puede incluir enlaces a sitios de terceros, como perfiles en redes sociales o repositorios de código. Nebula Labs no controla esos sitios ni responde de sus contenidos ni de sus políticas de privacidad. La inclusión de un enlace no implica ninguna relación con su titular ni la aprobación de sus contenidos.',
        ],
      },
      {
        title: '7. Protección de datos y cookies',
        paragraphs: [
          'El tratamiento de los datos personales que nos facilites se explica en la política de privacidad. El uso de cookies se explica en la política de cookies.',
        ],
      },
      {
        title: '8. Legislación aplicable y jurisdicción',
        paragraphs: [
          'Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a {{jurisdiction}}, sin perjuicio de los derechos que la normativa de consumidores reconozca a quien tenga esa condición.',
        ],
      },
    ] as LegalSection[],
  },
  privacy: {
    title: 'Política de privacidad',
    intro:
      'En esta política explicamos qué datos personales tratamos en {{site}}, para qué, con qué base jurídica, durante cuánto tiempo y cómo puedes ejercer tus derechos, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).',
    sections: [
      {
        title: '1. Responsable del tratamiento',
        paragraphs: [
          'Responsable: {{companyName}}, NIF {{taxId}}, con domicilio en {{address}}.',
          'Contacto: {{email}}.',
          'Contacto para protección de datos: {{privacyContact}}, en {{email}}.',
        ],
      },
      {
        title: '2. Qué datos tratamos',
        paragraphs: [
          'Formulario de contacto: nombre, correo electrónico, organización (opcional), tipo de necesidad, asunto y mensaje, la sección de la web desde la que nos escribes, y la aceptación de esta política con su fecha.',
          'Analítica, solo si la aceptas: identificadores de cookies de Google Analytics 4, páginas visitadas, eventos de navegación, tipo de dispositivo y navegador, y ubicación aproximada.',
          'Registros del servidor: dirección IP, fecha y hora, página solicitada y navegador, que el servidor genera automáticamente con cada visita.',
          'No pedimos categorías especiales de datos. Te rogamos que no las incluyas en tus mensajes.',
        ],
      },
      {
        title: '3. Finalidades y base jurídica',
        paragraphs: [
          'Atender tu solicitud de contacto y, en su caso, preparar una propuesta. Base jurídica: tu consentimiento, que prestas al marcar la casilla del formulario (art. 6.1.a RGPD), y, si la solicitud lleva a un contrato, la aplicación de medidas precontractuales (art. 6.1.b RGPD).',
          'Medir el uso de la web con Google Analytics 4. Base jurídica: tu consentimiento a través del panel de cookies (art. 6.1.a RGPD y art. 22.2 LSSI-CE). Sin consentimiento, Google Analytics no se carga.',
          'Garantizar la seguridad y el funcionamiento del sitio mediante los registros del servidor. Base jurídica: interés legítimo en proteger el sitio web (art. 6.1.f RGPD).',
          'No tomamos decisiones automatizadas ni elaboramos perfiles con efectos jurídicos sobre ti.',
        ],
      },
      {
        title: '4. Plazo de conservación',
        paragraphs: [
          'Datos de contacto: el tiempo necesario para atender tu solicitud y, si no se inicia una relación comercial, como máximo 12 meses. Después, se conservarán bloqueados durante los plazos de prescripción de las posibles responsabilidades legales, y solo estarán a disposición de jueces, tribunales y autoridades competentes. [DATO: confirmar plazo con el asesor legal]',
          'Datos de analítica: el periodo de retención configurado en Google Analytics 4. [DATO: periodo de retención configurado en GA4]',
          'Registros del servidor: [DATO: plazo de conservación de los logs del servidor].',
        ],
      },
      {
        title: '5. Destinatarios y encargados del tratamiento',
        paragraphs: [
          'No cedemos tus datos a terceros salvo obligación legal. Para prestar el servicio, los siguientes proveedores acceden a ellos como encargados del tratamiento:',
          'Web3Forms: recepción del formulario de contacto y reenvío a nuestro correo. {{web3forms}}',
          'Google Ireland Ltd.: correo electrónico corporativo (Google Workspace), donde recibimos los mensajes, y Google Analytics 4, solo con tu consentimiento.',
          'Alojamiento web: {{hosting}}.',
        ],
      },
      {
        title: '6. Transferencias internacionales',
        paragraphs: [
          'Google puede tratar datos fuera del Espacio Económico Europeo, en particular en Estados Unidos. Estas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. y en las cláusulas contractuales tipo aprobadas por la Comisión Europea.',
          'Web3Forms: {{web3forms}}',
        ],
      },
      {
        title: '7. Tus derechos',
        paragraphs: [
          'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento en cualquier momento, escribiendo a {{email}} con el asunto "Protección de datos". Si tenemos dudas razonables sobre tu identidad, podremos pedirte información adicional para confirmarla.',
          'Retirar el consentimiento no afecta a la licitud del tratamiento anterior. Puedes retirar el consentimiento de analítica desde "Configurar cookies", en el pie de página.',
          'Si consideras que no hemos atendido correctamente tus derechos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
        ],
      },
      {
        title: '8. Menores de edad',
        paragraphs: [
          'Este sitio web no está dirigido a menores de 14 años. Si eres menor de esa edad, no nos facilites datos personales.',
        ],
      },
      {
        title: '9. Seguridad',
        paragraphs: [
          'Aplicamos medidas técnicas y organizativas adecuadas al riesgo, como el cifrado de las comunicaciones (HTTPS) y el acceso restringido a los sistemas, para proteger tus datos frente a pérdidas, accesos no autorizados o alteraciones.',
        ],
      },
      {
        title: '10. Cambios en esta política',
        paragraphs: [
          'Podemos actualizar esta política para adaptarla a cambios legales o en nuestros tratamientos. La versión vigente es la publicada en esta página, con su fecha de última actualización.',
        ],
      },
    ] as LegalSection[],
  },
  cookies: {
    title: 'Política de cookies',
    intro:
      'Esta política explica qué cookies utiliza {{site}}, para qué sirven y cómo puedes aceptarlas, rechazarlas o retirar tu consentimiento, de acuerdo con el artículo 22.2 de la LSSI-CE y la guía sobre el uso de las cookies de la Agencia Española de Protección de Datos.',
    sections: [
      {
        title: '1. Qué son las cookies',
        paragraphs: [
          'Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información sobre tu visita. Pueden ser propias (las instala el titular del sitio) o de terceros, y técnicas (necesarias para que el sitio funcione) o de otros tipos, como las analíticas.',
        ],
      },
      {
        title: '2. Cookies que utilizamos',
        paragraphs: [
          'Técnicas: guardan tu elección sobre cookies. Son necesarias y no requieren consentimiento.',
          'Analíticas: las de Google Analytics 4 nos permiten conocer de forma agregada cómo se usa la web. Solo se instalan si las aceptas.',
          'No utilizamos cookies publicitarias ni de seguimiento con fines de publicidad. Las fuentes tipográficas se sirven desde nuestro propio servidor.',
        ],
      },
    ] as LegalSection[],
    tableTitle: '3. Detalle de las cookies',
    afterTable: [
      {
        title: '4. Cómo aceptar, rechazar o retirar el consentimiento',
        paragraphs: [
          'La primera vez que visitas la web te mostramos un aviso en el que puedes aceptar, rechazar o configurar las cookies no técnicas. Puedes cambiar tu elección en cualquier momento con el botón "Configurar cookies" de esta página o del pie de página. Si retiras el consentimiento, eliminamos las cookies analíticas de tu navegador.',
          'También puedes bloquear o borrar las cookies desde la configuración de tu navegador. Si bloqueas las cookies técnicas, te volveremos a preguntar por tu elección en cada visita.',
          'Tu elección se conserva durante {{days}} días. Pasado ese plazo, o si cambiamos esta política, te volveremos a pedir el consentimiento.',
        ],
      },
      {
        title: '5. Transferencias internacionales',
        paragraphs: [
          'Las cookies de Google Analytics pueden implicar transferencias de datos a Estados Unidos, tal como se explica en la política de privacidad.',
        ],
      },
      {
        title: '6. Actualizaciones',
        paragraphs: [
          'Podemos actualizar esta política si cambian las cookies que utilizamos. La versión vigente es la publicada en esta página.',
        ],
      },
    ] as LegalSection[],
    table: {
      name: 'Cookie',
      provider: 'Proveedor',
      party: 'Tipo',
      category: 'Finalidad',
      purpose: 'Descripción',
      duration: 'Duración',
      parties: { first: 'Propia', third: 'De terceros' },
      categories: { necessary: 'Técnica', analytics: 'Analítica' },
      purposes: {
        consent: 'Guarda tu elección sobre cookies y la versión de la política aceptada.',
        gaUser: 'Distingue a los usuarios de forma anónima para generar estadísticas.',
        gaSession: 'Mantiene el estado de la sesión para las estadísticas.',
      },
      durations: {
        days: '{{days}} días',
        twoYears: '2 años',
      },
    },
  },
};

export default legalEs;
