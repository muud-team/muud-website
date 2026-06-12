import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "/politica-de-privacidad",
    },
    alternates: { canonical: "/politica-de-privacidad" },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");

  return (
    <>
      <Nav sectionLinks={[]} />

      <main id="top">
        <section className="sec sec-paper" style={{ paddingTop: 160 }}>
          <div className="wrap legal-wrap">
            <div className="legal-header">
              <h1>{t("title")}</h1>
              <p className="legal-updated">{t("lastUpdated")}: 20 de julio de 2024</p>
            </div>

            <div className="legal-body">
              <p>Este aviso de privacidad de MUUD SpA (&quot;Empresa&quot;, &quot;nosotros&quot;, &quot;nos&quot; o &quot;nuestro&quot;) describe cómo y por qué podemos recopilar, almacenar, utilizar y/o compartir (&quot;procesar&quot;) su información cuando usted utiliza nuestros servicios (&quot;Servicios&quot;), como cuando usted:</p>
              <ul>
                <li>Visite nuestro sitio web en https://www.muud.app o cualquier sitio web que enlace con este aviso de privacidad.</li>
                <li>Descargue y utilice nuestra aplicación móvil (MUUD) o cualquier otra aplicación que conecte con este aviso de privacidad.</li>
                <li>Participar con nosotros en actividades relacionadas, como ventas, marketing o eventos.</li>
              </ul>
              <p><strong>¿Preguntas o dudas?</strong> La lectura de este aviso de privacidad le ayudará a comprender sus derechos y opciones en materia de privacidad. Si no está de acuerdo con nuestras políticas y prácticas, no utilice nuestros Servicios. Si sigue teniendo preguntas o dudas, póngase en contacto con nosotros en soporte@muud.app.</p>

              <h2>Resumen de los puntos clave</h2>
              <p><em>Este resumen proporciona los puntos clave de nuestro aviso de privacidad, pero puede encontrar más detalles sobre cualquiera de estos temas haciendo click en el enlace que sigue a cada punto clave o utilizando nuestro índice para encontrar la sección que busca.</em></p>
              <p><strong>¿Qué información personal procesamos?</strong> Cuando visita, utiliza o navega por nuestros Servicios, podemos procesar información personal dependiendo de cómo interactúe con MUUD SpA y los Servicios, de sus elecciones y de los productos y funciones que utilice.</p>
              <p><strong>¿Tratamos información personal sensible?</strong> Podemos procesar información personal sensible cuando sea necesario con su consentimiento o según lo permita la legislación aplicable.</p>
              <p><strong>¿Recibimos información de terceros?</strong> No aceptamos información de terceros.</p>
              <p><strong>¿Cómo procesamos su información?</strong> Procesamos su información para prestar, mejorar y administrar nuestros Servicios, comunicarnos con usted por motivos de seguridad y prevención del fraude, y para cumplir la ley. También podemos procesar su información para otros fines con su consentimiento. No obstante, sólo procesamos sus datos por motivos legales válidos.</p>
              <p><strong>¿En qué situaciones y con qué terceros compartimos información personal?</strong> Podemos compartir información en situaciones específicas y con terceros específicos.</p>
              <p><strong>¿Cómo mantenemos segura su información?</strong> Disponemos de procesos y procedimientos organizativos y técnicos para proteger su información personal. Sin embargo, no se puede garantizar al 100% la seguridad de ninguna transmisión electrónica por Internet ni de ninguna tecnología de almacenamiento de información.</p>
              <p><strong>¿Cuáles son sus derechos?</strong> Dependiendo de dónde se encuentre geográficamente, la ley de privacidad aplicable puede significar que usted tiene ciertos derechos con respecto a su información personal.</p>
              <p><strong>¿Cómo puede ejercer sus derechos?</strong> La forma más sencilla de ejercer sus derechos es presentando una solicitud de acceso a los datos o poniéndose en contacto con nosotros. Tendremos en cuenta cualquier solicitud y actuaremos conforme a la legislación aplicable en materia de protección de datos.</p>

              <nav className="legal-toc">
                <h3>Índice</h3>
                <ol>
                  <li>¿Qué información recogemos?</li>
                  <li>¿Cómo procesamos su información?</li>
                  <li>¿Cuándo y con quién compartimos sus datos personales?</li>
                  <li>¿Utilizamos cookies y otras tecnologías de seguimiento?</li>
                  <li>¿Cómo gestionamos sus accesos sociales?</li>
                  <li>¿Cuánto tiempo conservamos sus datos?</li>
                  <li>¿Cómo mantenemos segura su información?</li>
                  <li>¿Cuáles son sus derechos de privacidad?</li>
                  <li>Requisito de edad</li>
                  <li>Controles para las funciones &quot;Do-Not-Track&quot;</li>
                  <li>¿Tienen los residentes en California derechos específicos en materia de privacidad?</li>
                  <li>¿Tienen los residentes en Virginia derechos específicos en materia de privacidad?</li>
                  <li>¿Realizamos actualizaciones de este aviso?</li>
                  <li>¿Cómo puede ponerse en contacto con nosotros en relación con este aviso?</li>
                  <li>¿Cómo puede revisar, actualizar o eliminar los datos que recopilamos sobre usted?</li>
                </ol>
              </nav>

              <h2>1. ¿Qué información recogemos?</h2>
              <h3>Los datos personales que nos comunique</h3>
              <p><em>En resumen: recopilamos la información personal que usted nos proporciona.</em></p>
              <p>Recopilamos información personal que usted nos proporciona voluntariamente cuando se registra en los Servicios, expresa su interés en obtener información sobre nosotros o nuestros productos y Servicios al participar en actividades en los Servicios, o de otro modo cuando se pone en contacto con nosotros.</p>
              <p><strong>Información personal proporcionada por usted.</strong> La información personal que recopilamos depende del contexto de sus interacciones con nosotros y con los Servicios, de sus elecciones y de los productos y funciones que utilice. La información personal que recopilamos puede incluir lo siguiente:</p>
              <ul>
                <li>nombres</li>
                <li>números de teléfono</li>
                <li>direcciones de correo electrónico</li>
                <li>nombres de usuario</li>
                <li>contraseñas</li>
              </ul>
              <p><strong>Información sensible.</strong> Cuando es necesario, con su consentimiento o según lo permita la legislación aplicable, procesamos las siguientes categorías de información sensible:</p>
              <ul>
                <li>información que revele la raza o el origen étnico</li>
                <li>información que revele opiniones políticas</li>
                <li>informar sobre creencias religiosas o filosóficas</li>
              </ul>
              <p>La App utiliza tecnología de reconocimiento emocional para analizar y comprender su estado emocional basándose en los datos que usted proporciona voluntariamente. Al utilizar la App, usted reconoce y acepta el análisis y tratamiento de sus datos emocionales para prestarle servicios relacionados con el reconocimiento emocional.</p>
              <p><strong>Datos de pago.</strong> Podemos recopilar los datos necesarios para procesar su pago si realiza compras, como el número de su instrumento de pago y el código de seguridad asociado a su instrumento de pago. Todos los datos de pago se almacenan en Apple Store y Android. Puede encontrar los enlaces a sus avisos de privacidad aquí: https://www.apple.com/legal/privacy/data/en/app-store/ y https://policies.google.com/privacy.</p>
              <p><strong>Datos de inicio de sesión en redes sociales.</strong> Es posible que le permitamos registrarse con nosotros utilizando los datos de su cuenta de redes sociales, como Facebook, Twitter u otras cuentas de redes sociales. Si se registra de esta forma, recopilaremos la información descrita en la sección &quot;¿CÓMO MANEJAMOS SUS DATOS DE ACCESO A LAS REDES SOCIALES?&quot; que figura a continuación.</p>
              <p><strong>Datos de la aplicación.</strong> Si utiliza nuestra(s) aplicación(es), también podemos recopilar la siguiente información si decide proporcionarnos acceso o permiso:</p>
              <ul>
                <li><em>Información de geolocalización.</em> Podemos solicitar acceso o permiso para rastrear información basada en la ubicación de su dispositivo móvil de forma continua o mientras utiliza nuestra(s) aplicación(es) móvil(es) para proporcionar determinados servicios basados en la ubicación. Puede hacerlo en la configuración de su dispositivo para cambiar el acceso o los permisos.</li>
                <li><em>Acceso a dispositivos móviles.</em> Podemos solicitar acceso o permiso a determinadas funciones de su dispositivo móvil, como la cámara, el micrófono, las cuentas de redes sociales, el almacenamiento y otras funciones. Puede hacerlo en la configuración de su dispositivo para cambiar el acceso o los permisos.</li>
                <li><em>Datos del dispositivo móvil.</em> Recopilamos automáticamente información sobre el dispositivo (como el identificador, el modelo y el fabricante de su dispositivo móvil), el sistema operativo, la información sobre la versión y la configuración del sistema, los números de identificación del dispositivo y de la aplicación, el tipo y la versión del navegador, el modelo de hardware, el proveedor de servicios de Internet y/o el operador de telefonía móvil, y la dirección del protocolo de Internet (IP) (o del servidor proxy). Si está utilizando nuestra(s) aplicación(es), también podemos recopilar información sobre la red telefónica asociada a su dispositivo móvil, el sistema operativo o la plataforma de su dispositivo móvil, el tipo de dispositivo móvil que utiliza, el identificador único de dispositivo de su dispositivo móvil e información sobre las funciones de nuestra(s) aplicación(es) a las que ha accedido.</li>
                <li><em>Notificaciones push.</em> Podemos solicitarle que nos envíe notificaciones push relativas a su cuenta o a funciones específicas de su(s) aplicación(es). Si no desea recibirlas, puede desactivarlas en la configuración de su dispositivo.</li>
              </ul>
              <p>Esta información es necesaria principalmente para mantener la seguridad y el funcionamiento de nuestra(s) aplicación(es), para la resolución de problemas y para nuestros análisis internos y la elaboración de informes.</p>
              <p>Toda la información personal que proporcione debe ser verdadera, completa y exacta, y debe notificarnos cualquier cambio en dicha información personal.</p>

              <h3>Información recopilada automáticamente</h3>
              <p><em>En resumen: algunos datos — como su dirección de Protocolo de Internet (IP) y/o las características de su navegador y dispositivo — se recogen automáticamente cuando visita nuestros servicios.</em></p>
              <p>Recogemos automáticamente cierta información cuando usted visita, utiliza o navega por los servicios. Esta información no revela su identidad específica (como su nombre o información de contacto). Sin embargo, puede incluir información sobre el dispositivo y el uso, como su dirección IP, características del navegador y del dispositivo, sistema operativo, preferencias de idioma, URL de referencia, nombre del dispositivo, país, ubicación, información sobre cómo y cuándo utiliza nuestros Servicios y otros detalles técnicos. Esta información es necesaria principalmente para mantener la seguridad y el funcionamiento de nuestros Servicios y para nuestros análisis internos y la elaboración de informes.</p>
              <p>Como muchas empresas, también recopilamos información a través de cookies y tecnologías similares.</p>
              <p>La información que recopilamos incluye lo siguiente:</p>
              <ul>
                <li><em>Datos de registro y uso.</em> Los datos de registro y uso son información relacionada con el servicio, el diagnóstico, el uso y el rendimiento que nuestros servidores recopilan automáticamente cuando usted accede a nuestros Servicios o los utiliza, y que registramos en archivos de registro. Dependiendo de cómo interactúe con nosotros, estos datos de registro pueden incluir su dirección IP, información del dispositivo, tipo de navegador y configuración e información sobre su actividad en los Servicios (como las marcas de fecha/hora asociadas con su uso, páginas y archivos vistos, búsquedas y otras acciones que realice, como las funciones que utiliza), información de eventos del dispositivo (como actividad del sistema, informes de errores y configuración del hardware).</li>
              </ul>

              <h2>2. ¿Cómo procesamos su información?</h2>
              <p><em>En pocas palabras: procesamos su información para prestar, mejorar y administrar nuestros servicios, comunicarnos con usted por motivos de seguridad y prevención del fraude, y para cumplir la ley. También podemos procesar su información para otros fines con su consentimiento.</em></p>
              <h3>Tratamos su información personal por diversas razones, dependiendo de cómo interactúe con nuestros Servicios, entre ellas:</h3>
              <ul>
                <li><strong>Para facilitar la creación y autenticación de cuentas y gestionar de otro modo las cuentas de usuario.</strong> Podemos procesar su información para que pueda crear e iniciar sesión en su cuenta, así como para mantener su cuenta en funcionamiento.</li>
                <li><strong>Prestar y facilitar la prestación de servicios al usuario.</strong> Podemos procesar su información para prestarle el servicio solicitado.</li>
                <li><strong>Para responder a las consultas de los usuarios/ofrecerles asistencia.</strong> Podemos procesar su información para responder a sus preguntas y resolver cualquier posible problema que pueda tener con el servicio solicitado.</li>
                <li><strong>Para enviarle información administrativa.</strong> Podemos procesar su información para enviarle detalles sobre nuestros productos y servicios, cambios en nuestras condiciones y políticas, y otra información similar.</li>
                <li><strong>Para cumplir y gestionar sus pedidos.</strong> Podemos procesar su información para cumplir y gestionar sus pedidos, pagos, devoluciones y cambios realizados a través de los Servicios.</li>
                <li><strong>Para permitir las comunicaciones entre usuarios.</strong> Podemos procesar su información si utiliza cualquiera de nuestras ofertas para comunicarse con otro usuario.</li>
                <li><strong>Para solicitar opiniones.</strong> Podemos procesar su información cuando sea necesario para solicitar su opinión y ponernos en contacto con usted sobre el uso de nuestros Servicios.</li>
                <li><strong>Para enviarle comunicaciones promocionales y de marketing.</strong> Podemos procesar la información personal que nos envíe, siguiendo sus preferencias de marketing. Puede darse de baja de nuestros correos electrónicos de marketing en cualquier momento.</li>
                <li><strong>Para ofrecerle publicidad personalizada.</strong> Podemos procesar su información para desarrollar y mostrar contenidos personalizados y publicidad adaptada a sus intereses, ubicación, etc.</li>
                <li><strong>Publicar testimonios.</strong> Publicamos testimonios en nuestros Servicios que pueden contener información personal.</li>
                <li><strong>Para proteger nuestros Servicios.</strong> Podemos procesar su información como parte de nuestros esfuerzos para mantener nuestros Servicios seguros y protegidos, incluyendo la supervisión y prevención del fraude.</li>
                <li><strong>Para administrar sorteos y concursos.</strong> Podemos procesar su información para administrar sorteos y concursos.</li>
                <li><strong>Para evaluar y mejorar nuestros Servicios, productos, marketing y su experiencia.</strong> Podemos procesar su información cuando sea necesario para identificar tendencias de uso, determinar la eficacia de nuestras campañas promocionales y evaluar y mejorar nuestros Servicios, productos, marketing y su experiencia.</li>
                <li><strong>Para identificar tendencias de uso.</strong> Podemos procesar información sobre cómo utiliza nuestros Servicios para comprender mejor cómo se utilizan y así poder mejorarlos.</li>
                <li><strong>Para determinar la eficacia de nuestras campañas de marketing y promoción.</strong> Podemos procesar su información para comprender mejor cómo ofrecerle las campañas de marketing y promoción más relevantes para usted.</li>
                <li><strong>Para cumplir con nuestras obligaciones legales.</strong> Podemos procesar su información para cumplir con nuestras obligaciones legales, responder a solicitudes legales y ejercer, establecer o defender nuestros derechos legales.</li>
              </ul>

              <h2>3. ¿Cuándo y con quién compartimos sus datos personales?</h2>
              <p><em>En resumen: Podemos compartir información en situaciones específicas descritas en esta sección y/o con los siguientes terceros.</em></p>
              <p>Es posible que tengamos que compartir su información personal en las siguientes situaciones:</p>
              <ul>
                <li><strong>Transferencias empresariales.</strong> Podemos compartir o transferir su información en relación con o durante las negociaciones de cualquier fusión, venta de activos de la empresa, financiación o adquisición de la totalidad o parte de nuestro negocio a otra empresa.</li>
                <li><strong>Filiales.</strong> Podemos compartir su información con nuestras filiales, en cuyo caso exigiremos a dichas filiales que respeten este aviso de privacidad. Las filiales incluyen nuestra empresa matriz y cualquier filial, empresa conjunta u otras empresas que controlemos o que estén bajo control común.</li>
                <li><strong>Socios comerciales.</strong> Podemos compartir su información con nuestros socios comerciales para ofrecer determinados productos, servicios o promociones.</li>
                <li><strong>Otros usuarios.</strong> Cuando usted comparte información personal (por ejemplo, mediante la publicación de comentarios, contribuciones u otros contenidos en los Servicios) o interactúa de otro modo con áreas públicas de los Servicios, dicha información personal puede ser vista por todos los usuarios y estar disponible públicamente fuera de los Servicios a perpetuidad. Si interactúa con otros usuarios de nuestros Servicios y se registra en nuestros servicios a través de una red social (como Facebook), sus contactos en la red social verán su nombre, foto de perfil y descripciones de su actividad. Del mismo modo, otros usuarios pueden ver sus informes de actividad, comunicarse con usted dentro de nuestros Servicios y ver su perfil.</li>
                <li><strong>Muro de ofertas.</strong> Nuestra(s) aplicación(es) puede(n) mostrar un &quot;muro de ofertas&quot; alojado por terceros. Dicho muro de ofertas permite a los anunciantes de terceros ofrecer a los usuarios moneda virtual, regalos u otros artículos a cambio de la aceptación y finalización de una oferta publicitaria. Al hacer clic en un muro de ofertas, accederá a un sitio web externo perteneciente a otras personas y abandonará nuestra(s) aplicación(es). Se compartirá un identificador único, como su ID de usuario, con el proveedor del muro de ofertas para evitar fraudes y acreditar adecuadamente en su cuenta la recompensa correspondiente.</li>
                <li><strong>Marco terapéutico.</strong> Priorizamos la confidencialidad y privacidad de la información que nos facilitas en la aplicación. Tus datos emocionales e información personal serán tratados con la máxima confidencialidad y sólo tendrá acceso a ellos el personal autorizado implicado en el funcionamiento y mejora de la Aplicación. Sin embargo, tenga en cuenta que en determinadas circunstancias en las que exista un riesgo para su bienestar físico o psicológico o el de otras personas, podemos vernos obligados a revelar la información pertinente a las autoridades competentes o a terceros. Esto incluye situaciones que impliquen un daño inminente, amenazas de violencia o cualquier obligación legal que requiera la divulgación de dicha información. Nos comprometemos a mantener su privacidad y sólo revelaremos información cuando sea necesario para proteger su seguridad y la de los demás.</li>
              </ul>

              <h2>4. ¿Utilizamos cookies y otras tecnologías de seguimiento?</h2>
              <p><em>En resumen: podemos utilizar cookies y otras tecnologías de seguimiento para recopilar y almacenar su información.</em></p>
              <p>Podemos utilizar cookies y tecnologías de seguimiento similares (como balizas web y píxeles) para acceder a la información o almacenarla. Nuestro Aviso sobre cookies proporciona información específica sobre cómo utilizamos dichas tecnologías y cómo puede rechazar determinadas cookies.</p>

              <h2>5. ¿Cómo gestionamos sus accesos sociales?</h2>
              <p><em>En resumen: si decide registrarse o iniciar sesión en nuestros Servicios utilizando una cuenta de redes sociales, podemos tener acceso a cierta información sobre usted.</em></p>
              <p>Nuestros servicios le permiten registrarse e iniciar sesión utilizando los datos de su cuenta de redes sociales (como Facebook o Twitter). Si decide hacerlo, recibiremos de su proveedor de redes sociales determinada información sobre su perfil. La información de perfil que recibimos puede variar en función del proveedor de redes sociales de que se trate, pero a menudo incluirá su nombre, dirección de correo electrónico, lista de amigos, foto de perfil y otra información que usted decida hacer pública en dichas plataformas de redes sociales.</p>
              <p>Utilizaremos la información que recibamos únicamente para los fines descritos en este aviso de privacidad o que se le indiquen claramente en los Servicios correspondientes. Tenga en cuenta que no controlamos, ni somos responsables de, otros usos de su información personal por parte de su proveedor externo de redes sociales. Le recomendamos que consulte su aviso de privacidad para saber cómo recopilan, utilizan y comparten su información personal y cómo puede configurar sus preferencias de privacidad en sus sitios y aplicaciones.</p>

              <h2>6. ¿Cuánto tiempo conservamos sus datos?</h2>
              <p><em>En resumen: conservamos su información durante el tiempo necesario para cumplir los fines descritos en este aviso de privacidad, a menos que la ley exija lo contrario.</em></p>
              <p>Sólo conservaremos su información personal durante el tiempo que sea necesario para los fines establecidos en este aviso de privacidad, a menos que la ley exija o permita un período de conservación más prolongado (como requisitos fiscales, contables u otros requisitos legales). Ninguna de las finalidades previstas en este aviso nos obligará a conservar sus datos personales durante más de tres (3) meses una vez finalizada la cuenta del usuario.</p>
              <p>Cuando ya no tengamos ninguna necesidad comercial legítima de procesar su información personal, eliminaremos o anonimizaremos dicha información o, si esto no es posible (por ejemplo, porque sus datos se han almacenado en archivos de copia de seguridad), almacenaremos de forma segura su información personal y la aislaremos de cualquier procesamiento posterior hasta que sea posible eliminarla.</p>

              <h2>7. ¿Cómo mantenemos segura su información?</h2>
              <p><em>En resumen: nuestro objetivo es proteger su información personal mediante medidas de seguridad organizativas y técnicas.</em></p>
              <p>Hemos implantado medidas de seguridad técnicas y organizativas adecuadas y razonables, diseñadas para proteger la seguridad de cualquier información personal que procesemos. Sin embargo, a pesar de nuestras salvaguardas y esfuerzos por asegurar su información, no se puede garantizar que ninguna transmisión electrónica por Internet o tecnología de almacenamiento de información sea 100% segura, por lo que no podemos prometer ni garantizar que piratas informáticos, ciber delincuentes u otros terceros no autorizados no puedan burlar nuestra seguridad y recopilar, acceder, robar o modificar indebidamente su información. Aunque haremos todo lo posible para proteger su información personal, la transmisión de información personal hacia y desde nuestros Servicios corre por su cuenta y riesgo. Por lo tanto, sólo debe acceder a los servicios dentro de un entorno seguro.</p>

              <h2>8. ¿Cuáles son sus derechos de privacidad?</h2>
              <p><em>En resumen: puede revisar, modificar o cancelar su cuenta en cualquier momento.</em></p>
              <p>Supongamos que se encuentra en el EEE o en el Reino Unido y cree que estamos tratando ilegalmente sus datos personales. En ese caso, también tiene derecho a reclamar ante la autoridad de protección de datos de su Estado miembro o del Reino Unido.</p>
              <p>Si se encuentra en Suiza, puede ponerse en contacto con el Comisario Federal de Protección de Datos e Información.</p>
              <p><strong>Retirada de su consentimiento:</strong> Si nos basamos en su consentimiento para procesar su información personal, tiene derecho a retirar su consentimiento en cualquier momento. Puede retirar su consentimiento en cualquier momento poniéndose en contacto con nosotros a través de los datos de contacto facilitados en la sección &quot;¿CÓMO PUEDE CONTACTAR CON NOSOTROS EN RELACIÓN CON ESTE AVISO?&quot; más abajo.</p>
              <p>No obstante, tenga en cuenta que esto no afectará a la legalidad del tratamiento anterior a su retirada ni, cuando la legislación aplicable lo permita, afectará al tratamiento de su información personal realizado sobre la base de motivos legales de tratamiento distintos del consentimiento.</p>
              <p><strong>Darse de baja de las comunicaciones promocionales y de marketing:</strong> Puede darse de baja de nuestras comunicaciones promocionales y de marketing en cualquier momento haciendo clic en el enlace para darse de baja que aparece en los correos electrónicos que le enviamos o poniéndose en contacto con nosotros. En ese caso, será eliminado de las listas de marketing. No obstante, podremos seguir comunicándonos con usted, por ejemplo, para enviarle mensajes relacionados con el servicio necesarios para la administración y el uso de su cuenta, responder a solicitudes de servicio o con otros fines no comerciales.</p>

              <h3>Información sobre la cuenta</h3>
              <p>Si en cualquier momento desea revisar o modificar la información de su cuenta o cancelarla, puede hacerlo:</p>
              <ul>
                <li>Póngase en contacto con nosotros utilizando la información de contacto facilitada.</li>
              </ul>
              <p>Cuando solicite la cancelación de su cuenta, desactivaremos o eliminaremos su cuenta e información de nuestras bases de datos activas. No obstante, es posible que conservemos algunos datos en nuestros archivos para evitar fraudes, solucionar problemas, ayudar en investigaciones, hacer cumplir nuestras condiciones legales y/o cumplir los requisitos legales aplicables.</p>
              <p><strong>Cookies y tecnologías similares:</strong> La mayoría de los navegadores web están configurados para aceptar cookies por defecto. Normalmente puede configurar su navegador para eliminar y rechazar las cookies. Si decide eliminar o rechazar las cookies, esto podría afectar a determinadas funciones o servicios de nuestros Servicios. También puede optar por no recibir publicidad basada en sus intereses por parte de anunciantes en nuestros Servicios.</p>
              <p>Si tiene preguntas o comentarios sobre sus derechos de privacidad, envíenos un correo electrónico a soporte@muud.app.</p>

              <h2>9. Requisito de edad</h2>
              <p>Debe tener al menos 13 años de edad para utilizar cualquiera de las Aplicaciones.</p>

              <h2>10. Controles para las funciones &quot;Do-Not-Track&quot;</h2>
              <p>La mayoría de los navegadores web, sistemas operativos para móviles y aplicaciones para móviles incluyen una función o configuración Do-Not-Track (&quot;DNT&quot;) que usted puede activar para señalar su preferencia de privacidad y que no se controlen ni recopilen datos sobre sus actividades de navegación en línea. Sin embargo, no se ha ultimado ninguna norma tecnológica uniforme para reconocer y aplicar las señales DNT. Por ello, actualmente no respondemos a las señales DNT del navegador ni a ningún otro mecanismo que comunique automáticamente su decisión de no ser rastreado en línea. Si en el futuro se adopta una norma para el seguimiento en línea que debamos seguir, le informaremos sobre dicha práctica en una versión revisada de este aviso de privacidad.</p>

              <h2>11. ¿Tienen los residentes en California derechos específicos en materia de privacidad?</h2>
              <p><em>En pocas palabras: Sí, si usted reside en California, se le conceden derechos específicos en relación con el acceso a su información personal.</em></p>
              <p>El artículo 1798.83 del Código Civil de California, también conocido como la ley &quot;Shine The Light&quot;, permite a nuestros usuarios residentes en California solicitar y obtener de nosotros, una vez al año y de forma gratuita, información sobre las categorías de datos personales (en su caso) que hayamos revelado a terceros con fines de marketing directo y los nombres y direcciones de todos los terceros con los que hayamos compartido información personal en el año natural inmediatamente anterior. Si es usted residente en California y desea realizar dicha solicitud, envíenosla por escrito utilizando la información de contacto que se facilita a continuación.</p>
              <p>Si es menor de 18 años, reside en California y tiene una cuenta registrada en los Servicios, tiene derecho a solicitar la eliminación de los datos no deseados que publique en los Servicios. Para solicitar la eliminación de dichos datos, no dude en ponerse en contacto con nosotros utilizando la información de contacto que figura a continuación. Incluya la dirección de correo electrónico asociada a su cuenta y una declaración de que reside en California. Nos aseguraremos de que los datos no se muestren públicamente en los Servicios, pero tenga en cuenta que es posible que los datos se eliminen parcialmente de todos nuestros sistemas (por ejemplo, copias de seguridad, etc.).</p>

              <h3>Aviso de confidencialidad de la CCPA</h3>
              <p>El Código Normativo de California define &quot;residente&quot; como:</p>
              <ol>
                <li>todo individuo que se encuentre en el Estado de California con un propósito que no sea temporal o transitorio y</li>
                <li>toda persona física domiciliada en el Estado de California que se encuentre fuera del Estado de California con carácter temporal o transitorio</li>
              </ol>
              <p>Todas las demás personas se definen como &quot;no residentes&quot;.</p>
              <p>Si esta definición de &quot;residente&quot; se aplica a usted, debemos respetar determinados derechos y obligaciones en relación con su información personal.</p>

              <h3>¿Qué categorías de información personal recogemos?</h3>
              <p>Hemos recopilado las siguientes categorías de información personal en los últimos doce (12) meses:</p>
              <p>Utilizaremos y conservaremos la información personal recopilada según sea necesario para prestar los servicios o para la Categoría L (información personal sensible) — mientras el usuario tenga una cuenta con nosotros.</p>
              <p>La información de categoría L puede utilizarse o divulgarse a un proveedor de servicios o contratista para fines adicionales específicos. Usted tiene derecho a limitar el uso o la divulgación de su información personal sensible.</p>
              <p>También podemos recopilar otra información personal fuera de estas categorías a través de instancias en las que usted interactúa con nosotros en persona, en línea, o por teléfono o correo en el contexto de:</p>
              <ul>
                <li>Recibir ayuda a través de nuestros canales de atención al cliente;</li>
                <li>Participación en encuestas o concursos de clientes.</li>
                <li>Facilitar la prestación de nuestros Servicios y responder a sus consultas.</li>
              </ul>

              <h3>¿Cómo utilizamos y compartimos su información personal?</h3>
              <p>Encontrará más información sobre nuestras prácticas de recopilación e intercambio de datos en este aviso de privacidad.</p>
              <p>Puede ponerse en contacto con nosotros por correo electrónico en soporte@muud.app o consultando los datos de contacto que figuran al final de este documento.</p>
              <p>Si utiliza un agente autorizado para ejercer su derecho de exclusión voluntaria, podemos denegar una solicitud si el agente autorizado no presenta pruebas de que ha sido autorizado válidamente para actuar en su nombre.</p>

              <h3>¿Se compartirán sus datos con otras personas?</h3>
              <p>Podemos revelar su información personal a nuestros proveedores de servicios de acuerdo con un contrato escrito entre nosotros y cada proveedor de servicios. Cada proveedor de servicios es una entidad con ánimo de lucro que procesa la información en nuestro nombre, siguiendo las mismas estrictas obligaciones de protección de la privacidad exigidas por la CCPA.</p>
              <p>Podemos utilizar su información personal para nuestros fines comerciales, como la realización de investigaciones internas para el desarrollo tecnológico y la demostración. Lo anterior no se considera &quot;venta&quot; de su información personal.</p>
              <p>MUUD SpA no ha revelado, vendido o compartido ninguna información personal a terceros con fines empresariales o comerciales en los últimos doce (12) meses. Además, MUUD SpA no venderá ni compartirá datos personales pertenecientes a visitantes del sitio web, usuarios y otros consumidores en el futuro.</p>

              <h3>Sus derechos en relación con sus datos</h3>
              <p><strong>Derecho a solicitar la supresión de los datos — Solicitud de supresión</strong></p>
              <p>Puede solicitar la eliminación de su información personal completando el siguiente formulario: https://forms.gle/UHQWPFUvzDZLKPud9. En ese caso, respetaremos su solicitud y borraremos su información personal, salvo en determinadas excepciones previstas por la ley. Cabe destacar que en caso de que su cuenta no presente uso durante más de 180 días en su versión gratuita, esta puede ser eliminada de forma automática por nuestros servidores.</p>
              <p><strong>Derecho a ser informado — Solicitud de información</strong></p>
              <p>Según las circunstancias, tiene derecho a saber:</p>
              <ul>
                <li>si recopilamos y utilizamos su información personal;</li>
                <li>las categorías de información personal que recopilamos;</li>
                <li>los fines para los que se utiliza la información personal recopilada;</li>
                <li>si vendemos o compartimos información personal con terceros;</li>
                <li>las categorías de datos personales que vendimos, compartimos o divulgamos con fines comerciales;</li>
                <li>las categorías de terceros a los que se vendió, compartió o divulgó la información personal con fines comerciales;</li>
                <li>la finalidad empresarial o comercial de la recogida, venta o intercambio de información privada; y</li>
                <li>los datos personales concretos que hemos recopilado sobre usted.</li>
              </ul>
              <p>De acuerdo con la legislación aplicable, no estamos obligados a proporcionar o eliminar información del consumidor que esté des-identificada en respuesta a una solicitud del consumidor o a volver a identificar datos individuales para verificar una solicitud del consumidor.</p>
              <p><strong>Derecho a la no discriminación por el ejercicio del derecho a la intimidad del consumidor.</strong> No le discriminaremos si ejerce su derecho a la intimidad.</p>
              <p><strong>Derecho a limitar el uso y la divulgación de datos personales sensibles.</strong> Si la empresa recaba alguna de las siguientes cantidades:</p>
              <ul>
                <li>datos de la seguridad social, carnés de conducir, documentos de identidad estatales, números de pasaporte</li>
                <li>información de acceso a la cuenta</li>
                <li>números de tarjetas de crédito, información de cuentas financieras o credenciales que permitan acceder a dichas cuentas</li>
                <li>geolocalización precisa</li>
                <li>origen racial o étnico, creencias religiosas o filosóficas, afiliación sindical</li>
                <li>el contenido del correo electrónico y los mensajes de texto, a menos que la empresa sea el destinatario de la comunicación</li>
                <li>datos genéticos, biométricos y sanitarios</li>
                <li>datos relativos a la orientación sexual y la vida sexual</li>
              </ul>
              <p>Usted tiene derecho a ordenar a dicha empresa que limite el uso de su información personal sensible a la necesaria para prestar los Servicios.</p>
              <p>Para ejercer su derecho a limitar el uso y la divulgación de información personal sensible, envíe un correo electrónico a soporte@muud.app o presente una solicitud de acceso a los datos.</p>

              <p><strong>Proceso de verificación</strong></p>
              <p>Al recibir su solicitud, tendremos que verificar su identidad para determinar si es usted la misma persona de la que tenemos la información en nuestro sistema. Sólo utilizaremos la información personal facilitada en su solicitud para verificar su identidad o su autoridad para realizar la solicitud.</p>

              <h3>Otros derechos de privacidad</h3>
              <ul>
                <li>Puede oponerse al tratamiento de sus datos personales.</li>
                <li>Puede solicitar la rectificación de sus datos si son incorrectos o han dejado de ser pertinentes, o pedir que se restrinja el tratamiento de la información.</li>
                <li>Puede designar a un agente autorizado para que solicite la CCPA en su nombre.</li>
                <li>Puede solicitar que no se vendan ni compartan sus datos personales con terceros en el futuro. Cuando recibamos una solicitud de exclusión voluntaria, la atenderemos lo antes posible, en un plazo de quince (15) días a partir de la fecha de presentación de la solicitud.</li>
              </ul>
              <p>Para ejercer estos derechos, puede ponerse en contacto con nosotros por correo electrónico en la dirección soporte@muud.app o consultando los datos de contacto que figuran al final de este documento.</p>

              <h2>12. ¿Tienen los residentes en Virginia derechos específicos en materia de privacidad?</h2>
              <p><em>En pocas palabras: Sí, si usted es residente en Virginia, se le pueden conceder derechos específicos en relación con el acceso y el uso de su información personal.</em></p>

              <h3>Aviso de privacidad de la CDPA de Virginia</h3>
              <p>En virtud de la Ley de Protección de Datos de los Consumidores de Virginia (CDPA):</p>
              <p>&quot;Consumidor&quot;: persona física residente en la Commonwealth que actúa únicamente en un contexto individual o doméstico. No incluye a las personas físicas que actúen en un contexto comercial o laboral.</p>
              <p>&quot;Datos personales&quot; significa cualquier información vinculada o razonablemente vinculable a una persona física identificable. &quot;Datos personales&quot; no incluye los datos des-identificados ni la información públicamente disponible.</p>
              <p>&quot;Venta de datos personales&quot;: intercambio de datos personales a cambio de una contraprestación económica.</p>
              <p>Si esta definición de &quot;consumidor&quot; se aplica a usted, debemos respetar determinados derechos y obligaciones en relación con sus datos.</p>
              <p>La información que recopilamos, utilizamos y revelamos sobre usted variará en función de cómo interactúe con MUUD SpA y nuestros Servicios.</p>

              <p><strong>Sus derechos en relación con sus datos:</strong></p>
              <ul>
                <li>Derecho a ser informado de si estamos tratando sus datos o no.</li>
                <li>Derecho de acceso a sus datos.</li>
                <li>Derecho a corregir inexactitudes en sus datos.</li>
                <li>Derecho a solicitar la supresión de sus datos.</li>
                <li>Derecho a obtener una copia de los datos personales que nos ha comunicado anteriormente.</li>
                <li>Derecho a oponerse al tratamiento de sus datos si se utilizan para publicidad dirigida, venta de datos personales o elaboración de perfiles.</li>
              </ul>
              <p>MUUD SpA no ha vendido datos personales a terceros con fines empresariales o comerciales. Además, MUUD SpA no venderá en el futuro datos personales pertenecientes a visitantes del sitio web, usuarios y otros consumidores.</p>

              <p><strong>Ejercer los derechos que le otorga la CDPA de Virginia.</strong></p>
              <p>Puede ponerse en contacto con nosotros por correo electrónico en soporte@muud.app, enviando una solicitud de acceso a los datos o consultando los datos de contacto que figuran al final de este documento.</p>
              <p>Si utiliza un agente autorizado para ejercer sus derechos, podemos denegar una solicitud si el agente autorizado no presenta pruebas de que ha sido autorizado válidamente para actuar en su nombre.</p>

              <p><strong>Proceso de verificación</strong></p>
              <p>Podemos pedirle que nos proporcione la información adicional razonablemente necesaria para verificar su solicitud y la de su consumidor.</p>
              <p>Una vez recibida su solicitud, responderemos sin demora indebida, pero en todos los casos, dentro de los cuarenta y cinco (45) días siguientes a la recepción. El plazo de respuesta podrá prorrogarse una vez por cuarenta y cinco (45) días adicionales cuando sea razonablemente necesario.</p>

              <p><strong>Derecho de recurso</strong></p>
              <p>Si nos negamos a tomar medidas en relación con su solicitud, le informaremos de nuestra decisión y de sus motivos. Si desea apelar nuestra decisión, envíenos un correo electrónico a soporte@muud.app. En un plazo de sesenta (60) días a partir de la recepción del recurso, le informaremos por escrito de las medidas adoptadas o no adoptadas en respuesta al recurso, incluida una explicación por escrito de los motivos de las decisiones. Puede ponerse en contacto con el Fiscal General para presentar una queja si se deniega su recurso.</p>

              <h2>13. ¿Realizamos actualizaciones de este aviso?</h2>
              <p><em>En pocas palabras: Sí, actualizaremos este aviso para cumplir la legislación pertinente.</em></p>
              <p>Podemos actualizar este aviso de privacidad de vez en cuando. La versión actualizada se indicará mediante una fecha &quot;Revisada&quot; actualizada, y la versión actualizada entrará en vigor tan pronto como sea accesible. Además, si realizamos cambios sustanciales en este aviso de privacidad, podremos notificárselo mediante la publicación destacada de un aviso de dichos cambios o enviándole directamente una notificación. Por lo tanto, le recomendamos que revise este aviso de privacidad con frecuencia para estar informado de cómo protegemos su información.</p>

              <h2>14. ¿Cómo puede ponerse en contacto con nosotros en relación con este aviso?</h2>
              <p>Si tiene preguntas o comentarios sobre este aviso, puede enviarnos un correo electrónico a soporte@muud.app o ponerse en contacto con nosotros por correo postal en:</p>
              <p>
                MUUD SpA<br />
                Av. Pdte. Kennedy 5600, Of 507<br />
                Vitacura, Región Metropolitana, Chile
              </p>

              <h2>15. ¿Cómo puede revisar, actualizar o eliminar los datos que recopilamos sobre usted?</h2>
              <p>En función de la legislación aplicable en su país, puede tener derecho a solicitar el acceso a la información personal que recopilamos sobre usted, a modificar dicha información o a eliminarla. Para solicitar la revisión, actualización o eliminación de su información personal, rellene y envíe una solicitud de acceso a los datos.</p>

              <p style={{ marginTop: 48, color: "var(--muted)", fontSize: "0.9rem" }}>© 2023 MUUD SpA, Todos los Derechos Reservados</p>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="general" />
    </>
  );
}
