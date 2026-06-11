import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.terms" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "/terminos-y-condiciones",
    },
    alternates: { canonical: "/terminos-y-condiciones" },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function TermsPage() {
  const t = useTranslations("terms");

  return (
    <>
      <Nav sectionLinks={[]} />

      <main id="top">
        <section className="sec sec-paper" style={{ paddingTop: 160 }}>
          <div className="wrap legal-wrap">
            <div className="legal-header">
              <h1>{t("title")}</h1>
              <p className="legal-updated">{t("lastUpdated")}: 20 de julio de 2023</p>
            </div>

            <div className="legal-body">
              <h2>Aceptación de nuestras condiciones legales</h2>
              <p>Somos MUUD SpA (&quot;Compañía&quot;, &quot;nosotros&quot;, &quot;nos&quot;, &quot;nuestro&quot;), empresa registrada en Chile en Av. Presidente Kennedy 5600, Of. 507, Vitacura, Santiago 7650724.</p>
              <p>Operamos el sitio web http://www.muud.app (el &quot;Sitio&quot;), la aplicación móvil MUUD (la &quot;App&quot;), así como cualquier otro producto y servicio relacionado que haga referencia o enlace a estos términos legales (los &quot;Términos Legales&quot;) (colectivamente, los &quot;Servicios&quot;).</p>
              <p>Proporcionamos una plataforma de aprendizaje socio-emocional en la que alumnos y profesores pueden realizar comprobaciones de su estado de ánimo, llevar un diario y encontrar motivación diaria para comprender mejor su yo interior.</p>
              <p>Puede contactarnos por teléfono al +56 9 2691 3974, por correo electrónico a soporte@muud.app, o por correo postal a Av. Presidente Kennedy 5600, Of. 507, Vitacura, Santiago 7650724, Chile.</p>
              <p>Estas Condiciones constituyen un acuerdo legalmente vinculante entre usted, ya sea personalmente o en nombre de una entidad (&quot;usted&quot;), y MUUD SpA en relación con su acceso y uso de los Servicios. Usted acepta que, al acceder a los Servicios, ha leído, comprendido y aceptado quedar vinculado por estas Condiciones Legales. SI USTED NO ESTÁ DE ACUERDO CON TODOS ESTOS TÉRMINOS LEGALES, ENTONCES TIENE EXPRESAMENTE PROHIBIDO EL USO DE LOS SERVICIOS, Y DEBE INTERRUMPIR SU USO INMEDIATAMENTE.</p>
              <p>Le avisaremos con antelación de cualquier cambio programado en los Servicios que esté utilizando. Las Condiciones legales modificadas entrarán en vigor en el momento de su publicación o notificación a través de soporte@muud.app. Al continuar utilizando los Servicios después de la fecha de entrada en vigor de cualquier cambio, usted acepta quedar vinculado por los términos modificados.</p>
              <p>Los Servicios están destinados a usuarios mayores de 13 años. Todos los usuarios que sean menores de edad en la jurisdicción en la que residen (generalmente menores de 18 años) deben tener permiso y ser supervisados directamente por sus padres o tutores para utilizar los Servicios. Si usted es menor de edad, debe hacer que su padre, madre o tutor lea y acepte estas Condiciones Legales antes de utilizar los Servicios.</p>

              <nav className="legal-toc">
                <h3>Índice</h3>
                <ol>
                  <li>Nuestros servicios</li>
                  <li>Derechos de propiedad intelectual</li>
                  <li>Representaciones del usuario</li>
                  <li>Registro de usuarios</li>
                  <li>Productos</li>
                  <li>Compras y pagos</li>
                  <li>Política de reembolsos</li>
                  <li>Software</li>
                  <li>Actividades prohibidas</li>
                  <li>Contribuciones generadas por los usuarios</li>
                  <li>Licencia de contribución</li>
                  <li>Directrices para las revisiones</li>
                  <li>Licencia de aplicación móvil</li>
                  <li>Medios de comunicación social</li>
                  <li>Sitios web y contenidos de terceros</li>
                  <li>Gestión de servicios</li>
                  <li>Política de privacidad</li>
                  <li>Infracciones de los derechos de autor</li>
                  <li>Duración y rescisión</li>
                  <li>Modificaciones e interrupciones</li>
                  <li>Derecho aplicable</li>
                  <li>Resolución de conflictos</li>
                  <li>Correcciones</li>
                  <li>Descargo de responsabilidad</li>
                  <li>Descargo de responsabilidad sanitaria</li>
                  <li>Limitaciones de responsabilidad</li>
                  <li>Indemnización</li>
                  <li>Datos del usuario</li>
                  <li>Comunicaciones, transacciones y firmas electrónicas</li>
                  <li>Usuarios y residentes de California</li>
                  <li>Varios</li>
                  <li>Contacto</li>
                </ol>
              </nav>

              <h2>1. Nuestros servicios</h2>
              <p>La información proporcionada al utilizar los Servicios no está destinada a ser distribuida o utilizada por ninguna persona o entidad en ninguna jurisdicción o país donde dicha distribución o uso sea contrario a la ley o a la normativa o que nos someta a cualquier requisito de registro en dicha jurisdicción o país. En consecuencia, las personas que decidan acceder a los Servicios desde otros lugares lo hacen por iniciativa propia y son las únicas responsables del cumplimiento de la legislación local, en la medida en que ésta sea aplicable.</p>
              <p>Los Servicios no están diseñados para cumplir las normativas específicas del sector (Ley de Portabilidad y Responsabilidad de los Seguros Médicos (HIPAA), Ley Federal de Gestión de la Seguridad de la Información (FISMA), etc.), por lo que si sus interacciones estuvieran sujetas a dichas leyes, no podrá utilizar los Servicios. Además, no podrá utilizar los Servicios de forma que infrinja la Ley Gramm-Leach-Bliley (GLBA).</p>
              <p>La empresa ofrece licencias de suscripción y no suscripción para aplicaciones móviles a un posible licenciatario. No vendemos las Apps y la propiedad la mantiene MUUD en todo momento. Al descargar una de las aplicaciones, el usuario se convierte por defecto en titular de una licencia de aplicación sin suscripción.</p>

              <h2>2. Derechos de propiedad intelectual</h2>
              <h3>Nuestra propiedad intelectual</h3>
              <p>Somos el propietario o el licenciatario de todos los derechos de propiedad intelectual de nuestros Servicios, incluido todo el código fuente, las bases de datos, la funcionalidad, el software, los diseños de sitios web, el audio, el vídeo, el texto, las fotografías y los gráficos de los Servicios (colectivamente, el &quot;Contenido&quot;), así como las marcas comerciales, las marcas de servicio y los logotipos que contienen (las &quot;Marcas&quot;).</p>
              <p>Nuestro Contenido y Marcas están protegidos por leyes de derechos de autor y marcas registradas y tratados en Chile y en todo el mundo.</p>
              <p>El Contenido y las Marcas se proporcionan en o a través de los Servicios &quot;TAL CUAL&quot; para su uso personal, no comercial o con fines empresariales internos exclusivamente.</p>
              <h3>Su uso de nuestros Servicios</h3>
              <p>Sujeto al cumplimiento por su parte de las presentes Condiciones Legales, incluida la sección &quot;ACTIVIDADES PROHIBIDAS&quot;, le concedemos una licencia no exclusiva, intransferible y revocable para acceder a los Servicios, y descargar o imprimir una copia de cualquier parte del Contenido al que haya accedido correctamente únicamente para su uso personal, no comercial o con fines empresariales internos.</p>
              <p>Salvo lo dispuesto en esta sección o en cualquier otra parte de nuestras Condiciones Legales, ninguna parte de los Servicios ni ningún Contenido o Marca podrán copiarse, reproducirse, agregarse, republicarse, cargarse, enviarse, mostrarse públicamente, codificarse, traducirse, transmitirse, distribuirse, venderse, licenciarse o explotarse de cualquier otro modo con fines comerciales, sin nuestro permiso expreso previo por escrito.</p>
              <p>Si desea utilizar los Servicios, Contenidos o Marcas de forma distinta a la establecida en esta sección, dirija su solicitud a: soporte@muud.app. Nos reservamos todos los derechos no concedidos expresamente a usted sobre los Servicios, el Contenido y las Marcas. Cualquier infracción de estos Derechos de Propiedad Intelectual constituirá un incumplimiento material de nuestras Condiciones Legales.</p>
              <h3>Sus propuestas y contribuciones</h3>
              <p>Envíos: Al enviarnos directamente cualquier pregunta, comentario, sugerencia, idea, opinión u otra información sobre los Servicios (&quot;Envíos&quot;), usted acepta cedernos todos los derechos de propiedad intelectual sobre dicho Envío. Usted acepta que seremos propietarios de este Envío y tendremos derecho a su uso y difusión sin restricciones para cualquier fin lícito, comercial o de otro tipo, sin reconocimiento o compensación para usted.</p>
              <p>Contribuciones: Los Servicios pueden invitarle a chatear, contribuir o participar en blogs, tablones de mensajes, foros en línea y otras funcionalidades durante las cuales puede crear, enviar, publicar, mostrar, transmitir, publicar, distribuir o difundir Contenido y materiales (colectivamente, &quot;Contribuciones&quot;). Al publicar cualquier Contribución, nos concede un derecho y una licencia sin restricción, ilimitados, irrevocables, perpetuos, no exclusivos, transferibles, libres de regalías, totalmente pagados, en todo el mundo para usar, copiar, reproducir, distribuir, vender, publicar, ejecutar públicamente, mostrar públicamente, traducir, extractar y explotar sus Contribuciones para cualquier propósito.</p>

              <h2>3. Representaciones del usuario</h2>
              <p>Al utilizar los Servicios, usted declara y garantiza que:</p>
              <ul>
                <li>Toda la información de registro que envíe será verdadera, exacta, actual y completa.</li>
                <li>Usted mantendrá la exactitud de dicha información y actualizará puntualmente dicha información de registro cuando sea necesario.</li>
                <li>Tiene capacidad legal y acepta cumplir estas Condiciones legales.</li>
                <li>No tiene menos de 13 años.</li>
                <li>Usted no es menor de edad en la jurisdicción en la que reside o, si lo es, ha recibido permiso paterno para utilizar los Servicios.</li>
                <li>Usted no accederá a los Servicios a través de medios automatizados o no humanos, ya sea a través de un bot, script, o de otra manera.</li>
                <li>No utilizará los Servicios con fines ilegales o no autorizados.</li>
                <li>Su uso de los Servicios no infringirá ninguna ley o normativa aplicable.</li>
              </ul>
              <p>Supongamos que nos proporciona información falsa, inexacta, no actualizada o incompleta. En ese caso, tendremos derecho a suspender o cancelar su cuenta y a rechazar cualquier uso actual o futuro de los Servicios.</p>

              <h2>4. Registro de usuarios</h2>
              <p>Es posible que tenga que registrarse para utilizar los Servicios. Usted se compromete a mantener la confidencialidad de su contraseña y será responsable de todo el uso que haga de su cuenta y contraseña. Nos reservamos el derecho a eliminar, reclamar o cambiar un nombre de usuario que usted seleccione si determinamos, a nuestra entera discreción, que dicho nombre de usuario es inapropiado, obsceno o censurable por cualquier otro motivo.</p>

              <h2>5. Productos</h2>
              <p>Todos los productos están sujetos a disponibilidad. Nos reservamos el derecho a retirar cualquier producto en cualquier momento y por cualquier motivo. Los precios de todos los productos están sujetos a cambios.</p>

              <h2>6. Compras y pagos</h2>
              <p>Aceptamos las siguientes formas de pago: Visa, Mastercard, American Express.</p>
              <p>Usted se compromete a proporcionar información actual, completa y precisa sobre la compra y la cuenta para todas las compras realizadas a través de los Servicios. Asimismo, se compromete a actualizar puntualmente la información de la cuenta y de pago, incluida la dirección de correo electrónico, el método de pago y la fecha de caducidad de la tarjeta de pago. El impuesto sobre las ventas se añadirá al precio de compra según lo consideremos necesario. Podemos modificar los precios en cualquier momento. Todos los pagos se efectuarán en dólares estadounidenses.</p>
              <p>Usted se compromete a pagar todos los cargos a los precios vigentes en ese momento para sus compras y cualquier gasto de envío aplicable, y nos autoriza a cargar a su proveedor de pago elegido dichos importes al realizar su pedido. Nos reservamos el derecho a corregir cualquier error o equivocación en los precios, aunque ya hayamos solicitado o recibido el pago. En caso de impago, la licencia de una aplicación de suscripción puede ser suspendida o cancelada.</p>

              <h2>7. Política de reembolsos</h2>
              <p>Las compras son definitivas, la empresa no efectuará reembolsos. Al proceder a la compra y aceptar las Condiciones, el titular de la licencia de la App consiente en la ejecución inmediata del contrato y renuncia a su derecho de desistimiento. Las compras realizadas a través de Apple o Google Play Store están sujetas a la política de pagos de Apple o Google Play.</p>

              <h2>8. Software</h2>
              <p>Podemos incluir software para su uso en relación con nuestros Servicios. Si dicho software va acompañado de un contrato de licencia de usuario final (&quot;CLUF&quot;), los términos del CLUF regirán el uso que usted haga del software. Si no va acompañado de un CLUF, le concedemos una licencia no exclusiva, revocable, personal e intransferible para utilizar dicho software únicamente en relación con nuestros servicios. El software y la documentación relacionada se proporcionan &quot;TAL CUAL&quot;, sin garantía de ningún tipo. Usted no puede reproducir ni redistribuir ningún software salvo lo dispuesto en el CLUF o en las presentes Condiciones Legales.</p>

              <h2>9. Actividades prohibidas</h2>
              <p>No podrá acceder a los Servicios ni utilizarlos para fines distintos de aquellos para los que los ponemos a su disposición. Como usuario de los Servicios, usted se compromete a no:</p>
              <ul>
                <li>Recuperar sistemáticamente datos u otros Contenidos de los Servicios para crear o compilar una colección, compilación, base de datos o directorio sin nuestro permiso por escrito.</li>
                <li>Engañar, defraudar o inducir a error a otros usuarios y a nosotros, especialmente en cualquier intento de obtener información confidencial de la cuenta.</li>
                <li>Eludir, desactivar o interferir con las funciones de los Servicios relacionadas con la seguridad.</li>
                <li>Desprestigiar, empañar o perjudicar a nosotros y/o a los Servicios.</li>
                <li>Utilizar cualquier información de los Servicios para acosar, abusar o dañar a otra persona.</li>
                <li>Utilizar indebidamente nuestros servicios de asistencia o presentar informes falsos de abusos o mala conducta.</li>
                <li>Utilizar los Servicios de forma contraria a las leyes o normativas aplicables.</li>
                <li>Cargar o transmitir virus, troyanos u otro material que interfiera en el uso de los Servicios.</li>
                <li>Participar en cualquier sistema automatizado, como el uso de secuencias de comandos, minería de datos, robots o herramientas similares.</li>
                <li>Eliminar el aviso de copyright u otros derechos de propiedad de cualquier Contenido.</li>
                <li>Intentar suplantar a otro usuario o persona o utilizar el nombre de usuario de otro usuario.</li>
                <li>Interferir, interrumpir o crear una carga indebida en los Servicios o en las redes conectadas a los Servicios.</li>
                <li>Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes.</li>
                <li>Intentar eludir cualquier medida de los Servicios diseñada para impedir o restringir el acceso.</li>
                <li>Copiar o adaptar el software de los Servicios.</li>
                <li>Descifrar, descompilar, desensamblar o aplicar ingeniería inversa a cualquier software de los Servicios.</li>
                <li>Hacer cualquier uso no autorizado de los Servicios, incluida la recopilación de datos de usuarios por medios electrónicos para enviar correos no solicitados.</li>
                <li>Utilizar los Servicios para competir con nosotros o para cualquier esfuerzo generador de ingresos o empresa comercial.</li>
                <li>Realizar actividades que puedan sobrecargar excesivamente los recursos de la aplicación.</li>
                <li>Cualquier intento de pirateo, interrupción o acceso no autorizado a los sistemas de la aplicación.</li>
                <li>Hacerse pasar por otros o participar en cualquier forma de usurpación de identidad.</li>
                <li>Publicar o compartir Contenido explícito, violento o inapropiado.</li>
                <li>Participar en ciberacoso, trolling o cualquier comportamiento dirigido a provocar y molestar a otros.</li>
                <li>Incurrir en acoso, hostigamiento o intimidación hacia otras personas en la plataforma.</li>
                <li>Compartir o distribuir materiales protegidos por derechos de autor sin la debida autorización.</li>
              </ul>

              <h2>10. Contribuciones generadas por los usuarios</h2>
              <p>Los Servicios pueden invitarle a chatear, contribuir o participar en blogs, tablones de mensajes, foros en línea y otras funcionalidades. Las Contribuciones pueden ser vistas por otros usuarios de los Servicios y a través de sitios web de terceros. Al crear o poner a disposición cualquier Contribución, usted declara y garantiza que:</p>
              <ul>
                <li>La creación, distribución, transmisión, exhibición pública de sus Contribuciones no infringen los derechos de propiedad, incluidos derechos de autor, patentes, marcas comerciales o derechos morales de terceros.</li>
                <li>Usted es el creador y propietario o tiene las licencias y permisos necesarios para utilizar y autorizarnos a utilizar sus Contribuciones.</li>
                <li>Usted cuenta con el consentimiento escrito de cada persona identificable en sus Contribuciones.</li>
                <li>Sus Contribuciones no son falsas, inexactas o engañosas.</li>
                <li>Sus Contribuciones no son publicidad no solicitada, materiales promocionales, esquemas piramidales, spam u otras formas de solicitud.</li>
                <li>Sus Contribuciones no son obscenas, lascivas, violentas, acosadoras, difamatorias o censurables.</li>
                <li>Sus Contribuciones no ridiculizan, se burlan, menosprecian, intimidan ni maltratan a nadie.</li>
                <li>Sus Contribuciones no se utilizan para acosar o amenazar a ninguna otra persona ni para promover la violencia.</li>
                <li>Sus Contribuciones no infringen ninguna ley, reglamento o norma aplicable.</li>
                <li>Sus Contribuciones no violan los derechos de privacidad o publicidad de terceros.</li>
                <li>Sus Contribuciones no infringen ninguna ley relativa a la pornografía infantil o destinada a proteger la salud o el bienestar de los menores.</li>
                <li>Sus Contribuciones no incluyen comentarios ofensivos relacionados con la raza, el origen nacional, el sexo, las preferencias sexuales o la discapacidad.</li>
              </ul>
              <p>Cualquier uso de los Servicios que infrinja lo anterior infringe estas Condiciones Legales y puede dar lugar a la rescisión o suspensión de sus derechos de uso de los Servicios.</p>

              <h2>11. Licencia de contribución</h2>
              <p>Al publicar sus Contribuciones en cualquier parte de los Servicios, usted concede automáticamente un derecho y una licencia sin restricciones, ilimitados, irrevocables, perpetuos, no exclusivos, transferibles, libres de regalías, totalmente pagados, en todo el mundo, para alojar, utilizar, copiar, reproducir, divulgar, vender, publicar, emitir, almacenar, ejecutar públicamente, mostrar públicamente, traducir, transmitir y distribuir dichas Contribuciones para cualquier propósito.</p>
              <p>No hacemos valer ninguna propiedad sobre sus Contribuciones. Usted conserva la plena propiedad de todas sus Contribuciones y de cualquier derecho de propiedad intelectual asociado. No somos responsables de ninguna declaración o representación en sus Contribuciones.</p>
              <p>Tenemos derecho, a nuestra entera y absoluta discreción, a editar, redactar o modificar las Contribuciones, re-categorizarlas para colocarlas en lugares más apropiados, y pre-seleccionar o eliminar cualquier Contribución en cualquier momento y por cualquier motivo sin previo aviso.</p>

              <h2>12. Directrices para las revisiones</h2>
              <p>Podemos proporcionar áreas en los Servicios para dejar reseñas o valoraciones. Al publicar una reseña, debe cumplir los siguientes criterios:</p>
              <ol>
                <li>Debe tener experiencia de primera mano con la persona/entidad objeto de la evaluación.</li>
                <li>Sus reseñas no deben contener palabras malsonantes ni lenguaje abusivo, racista, ofensivo o que incite al odio.</li>
                <li>Sus reseñas no deben contener referencias discriminatorias por motivos de religión, raza, sexo, nacionalidad, edad, estado civil, orientación sexual o discapacidad.</li>
                <li>Sus reseñas no deben contener referencias a actividades ilegales.</li>
                <li>No debe estar afiliado a la competencia si publica reseñas negativas.</li>
                <li>No debe sacar conclusiones sobre la legalidad de la conducta.</li>
                <li>No puede publicar declaraciones falsas o engañosas.</li>
                <li>No puede organizar una campaña animando a otros a publicar críticas positivas o negativas.</li>
              </ol>
              <p>Podemos aceptar, rechazar o eliminar opiniones a nuestra entera discreción. No estamos obligados a examinar las opiniones ni a eliminarlas, aunque alguien las considere censurables o inexactas.</p>

              <h2>13. Licencia de aplicación móvil</h2>
              <h3>Licencia de uso</h3>
              <p>Le concedemos un derecho revocable, no exclusivo, intransferible y limitado a instalar y utilizar la App en dispositivos electrónicos inalámbricos de su propiedad o bajo su control. Usted no podrá: descompilar o aplicar ingeniería inversa a la App; realizar modificaciones, adaptaciones o trabajos derivados; infringir las leyes aplicables; eliminar avisos de propiedad; utilizar la App para actividades comerciales no previstas; hacer la App disponible a través de redes que permitan acceso por múltiples dispositivos; utilizar la App para crear un producto competidor; utilizar la App para enviar consultas automáticas o correos no solicitados.</p>
              <h3>Dispositivos Apple y Android</h3>
              <p>Al utilizar la App obtenida de Apple Store o Google Play: la licencia se limita a una licencia intransferible para utilizar la aplicación en un dispositivo que utilice los sistemas operativos Apple iOS o Android; nosotros somos responsables de prestar cualquier servicio de mantenimiento y asistencia respecto a la App; usted declara y garantiza que no se encuentra en un país sometido a embargo por el gobierno de EE.UU.; debe cumplir las condiciones contractuales aplicables de terceros; y reconoce que los Distribuidores de la Aplicación son terceros beneficiarios de estos términos.</p>

              <h2>14. Medios de comunicación social</h2>
              <p>Como parte de la funcionalidad de los Servicios, usted puede vincular su cuenta con cuentas en línea que tenga con terceros proveedores de servicios (&quot;Cuenta de terceros&quot;). Al concedernos acceso a cualquier Cuenta de terceros, usted entiende que podemos acceder, poner a disposición y almacenar cualquier contenido que usted haya proporcionado y almacenado en su Cuenta de terceros. Usted puede desactivar la conexión entre su cuenta en los Servicios y sus Cuentas de Terceros en cualquier momento. SU RELACIÓN CON LOS TERCEROS PROVEEDORES DE SERVICIOS SE RIGE EXCLUSIVAMENTE POR SU(S) ACUERDO(S) CON DICHOS TERCEROS PROVEEDORES DE SERVICIOS.</p>

              <h2>15. Sitios web y contenidos de terceros</h2>
              <p>Los Servicios pueden contener enlaces a otros sitios web (&quot;Sitios web de terceros&quot;), así como artículos, fotografías, texto, gráficos y otros contenidos pertenecientes a terceros (&quot;Contenidos de terceros&quot;). No investigamos, supervisamos ni comprobamos la exactitud de dichos Sitios web y Contenidos de terceros. No nos hacemos responsables de los Sitios Web de Terceros a los que se acceda a través de los Servicios. Si decide abandonar los Servicios y acceder a Sitios Web de Terceros, lo hará por su cuenta y riesgo, y estas Condiciones Legales ya no rigen.</p>

              <h2>16. Gestión de servicios</h2>
              <p>Nos reservamos el derecho, pero no la obligación, de: supervisar los Servicios para detectar infracciones de estas Condiciones Legales; tomar las medidas legales oportunas contra cualquier persona que infrinja la ley o estas Condiciones; rechazar, restringir el acceso, limitar la disponibilidad o desactivar cualquiera de sus Contribuciones; eliminar de los Servicios o inutilizar todos los archivos y Contenidos que tengan un tamaño excesivo o que supongan una carga para nuestros sistemas; y gestionar los Servicios de forma que se protejan nuestros derechos y propiedad.</p>

              <h2>17. Política de privacidad</h2>
              <p>Nos preocupamos por la privacidad y la seguridad de los datos. Al utilizar los Servicios, usted acepta someterse a nuestra Política de Privacidad publicada en los Servicios. Los Servicios están alojados en Estados Unidos y Chile. Si usted accede a los Servicios desde cualquier otra región del mundo, a través de su uso continuado está transfiriendo sus datos a Estados Unidos y Chile, y consiente expresamente que sus datos sean transferidos y procesados en dichos países.</p>

              <h2>18. Infracciones de los derechos de autor</h2>
              <p>Respetamos los derechos de propiedad intelectual de terceros. Si cree que algún material disponible en los Servicios infringe algún derecho de autor que usted posea o controle, notifíquenoslo inmediatamente utilizando la información de contacto proporcionada a continuación. Se enviará una copia de su Notificación a la persona que publicó o almacenó el material. Tenga en cuenta que puede ser considerado responsable de daños y perjuicios si incurre en falsedades materiales en una Notificación.</p>

              <h2>19. Duración y rescisión</h2>
              <p>Estas Condiciones Legales permanecerán en pleno vigor y efecto mientras usted utilice los Servicios. NOS RESERVAMOS EL DERECHO, A NUESTRA ENTERA DISCRECIÓN Y SIN PREVIO AVISO NI RESPONSABILIDAD, A DENEGAR EL ACCESO Y EL USO DE LOS SERVICIOS A CUALQUIER PERSONA POR CUALQUIER MOTIVO. PODEMOS PONER FIN A SU USO O PARTICIPACIÓN EN LOS SERVICIOS O ELIMINAR SU CUENTA Y CUALQUIER CONTENIDO O INFORMACIÓN QUE HAYA PUBLICADO EN CUALQUIER MOMENTO, SIN PREVIO AVISO, A NUESTRA ENTERA DISCRECIÓN. Si cancelamos o suspendemos su cuenta, se le prohíbe registrarse y crear una nueva cuenta con su nombre, un nombre falso o prestado, o el nombre de un tercero.</p>

              <h2>20. Modificaciones e interrupciones</h2>
              <p>Nos reservamos el derecho a cambiar, modificar o eliminar el contenido de los Servicios en cualquier momento o por cualquier motivo, a nuestra entera discreción y sin previo aviso. No obstante, no tenemos obligación alguna de actualizar la información de nuestros Servicios. No seremos responsables ante usted ni ante terceros por ninguna modificación, cambio de precio, suspensión o interrupción de los Servicios.</p>
              <p>No podemos garantizar que los Servicios estén disponibles en todo momento. Podemos experimentar problemas de hardware, software o de otro tipo, o necesitar realizar tareas de mantenimiento relacionadas con los Servicios. Usted acepta que no tenemos responsabilidad alguna por cualquier pérdida, daño o inconveniente causado por su incapacidad para acceder o utilizar los Servicios durante cualquier tiempo de inactividad.</p>

              <h2>21. Derecho aplicable</h2>
              <p>Estas Condiciones Legales se regirán y definirán de acuerdo a las leyes de Chile. MUUD SpA y usted consienten irrevocablemente que los tribunales de Chile tendrán jurisdicción exclusiva para resolver cualquier disputa que pueda surgir en relación con estos Términos Legales.</p>

              <h2>22. Resolución de conflictos</h2>
              <p>Usted acepta someter irrevocablemente todas las controversias relacionadas con estas Condiciones Legales o con la relación jurídica establecida por estas Condiciones Legales a la jurisdicción de los tribunales chilenos. MUUD SpA mantendrá también el derecho de entablar acciones ante los tribunales del país en que usted resida o, si estas Condiciones Legales se celebran en el curso de su comercio o profesión, el estado de su principal lugar de negocios.</p>

              <h2>23. Correcciones</h2>
              <p>Puede haber información en los Servicios que contenga errores tipográficos, inexactitudes u omisiones. Nos reservamos el derecho a corregir cualquier error, inexactitud u omisión y a modificar o actualizar la información de los Servicios en cualquier momento sin previo aviso.</p>

              <h2>24. Descargo de responsabilidad</h2>
              <p>LOS SERVICIOS SE PRESTAN &quot;TAL CUAL&quot; Y &quot;SEGÚN DISPONIBILIDAD&quot;. USTED ACEPTA QUE EL USO QUE HAGA DE LOS SERVICIOS SERÁ POR SU CUENTA Y RIESGO. EN LA MEDIDA EN QUE LA LEY LO PERMITA, RENUNCIAMOS A TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, EN RELACIÓN CON LOS SERVICIOS Y EL USO QUE USTED HAGA DE LOS MISMOS, INCLUIDAS LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO Y NO INFRACCIÓN. NO GARANTIZAMOS NI DECLARAMOS LA EXACTITUD O INTEGRIDAD DEL CONTENIDO DE LOS SERVICIOS. NOS ESFORZAMOS POR AYUDAR AL USUARIO A MEJORAR SU SALUD, SU PRODUCTIVIDAD Y LA GESTIÓN DE SU TIEMPO Y SUS HÁBITOS. NO OBSTANTE, MUUD NO OFRECE NINGUNA DECLARACIÓN NI GARANTÍA DE QUE SE VAYAN A PRODUCIR DICHAS MEJORAS. NOS RESERVAMOS EL DERECHO EXCLUSIVO DE LLEVAR A CABO ACTUALIZACIONES DE LA APLICACIÓN.</p>

              <h2>25. Descargo de responsabilidad sanitaria</h2>
              <p>LA APP NO DEBE CONSIDERARSE UN SUSTITUTO DE LA TERAPIA U OTRO TRATAMIENTO PSICOLÓGICO O PSIQUIÁTRICO, NI DE UN DIAGNÓSTICO O CONSEJO MÉDICO. A PESAR DE LA INVESTIGACIÓN CIENTÍFICA SOBRE EL DIARIO, LA EMPRESA NO DECLARA NI GARANTIZA QUE LA SALUD MENTAL DEL USUARIO VAYA A MEJORAR. LA CONFIANZA DEPOSITADA EN LAS APLICACIONES ES ESTRICTAMENTE POR CUENTA Y RIESGO DEL USUARIO. NO DECLARAMOS NI GARANTIZAMOS QUE LAS APPS PREVENGAN, CUREN O TRATEN ENFERMEDADES, TRASTORNOS O AFECCIONES. NO AFIRMAMOS QUE NINGUNA DE LAS APLICACIONES CONSTITUYA UN DISPOSITIVO MÉDICO. LA EMPRESA HA DISEÑADO LA APLICACIÓN ÚNICAMENTE CON FINES DE INFORMACIÓN GENERAL. LA APLICACIÓN NO DEBE CONSIDERARSE UN SUSTITUTO DE LOS PROGRAMAS DE ADICCIÓN O REHABILITACIÓN.</p>

              <h2>26. Limitaciones de responsabilidad</h2>
              <p>EN NINGÚN CASO NOSOTROS O NUESTROS DIRECTORES, EMPLEADOS O AGENTES SEREMOS RESPONSABLES ANTE USTED O CUALQUIER TERCERO POR DAÑOS DIRECTOS, INDIRECTOS, CONSECUENTES, EJEMPLARES, INCIDENTALES, ESPECIALES O PUNITIVOS, INCLUYENDO LUCRO CESANTE, PÉRDIDA DE INGRESOS, PÉRDIDA DE DATOS U OTROS DAÑOS QUE SURJAN DE SU USO DE LOS SERVICIOS. NUESTRA RESPONSABILIDAD ANTE USTED POR CUALQUIER CAUSA SE LIMITARÁ EN TODO MOMENTO AL IMPORTE PAGADO, EN SU CASO, POR USTED A NOSOTROS DURANTE EL PERÍODO DE SEIS (6) MESES ANTERIOR A LA APARICIÓN DE CUALQUIER CAUSA DE ACCIÓN.</p>

              <h2>27. Indemnización</h2>
              <p>Usted se compromete a defendernos, indemnizarnos y eximirnos de toda responsabilidad, incluidas nuestras subsidiarias, filiales y todos nuestros respectivos directivos, agentes, socios y empleados, frente a cualquier pérdida, daño, responsabilidad, reclamación o demanda, incluidos los honorarios razonables de abogados, interpuesta por terceros debido a: (1) sus Contribuciones; (2) el uso de los Servicios; (3) el incumplimiento de estas Condiciones legales; (4) cualquier incumplimiento de sus declaraciones y garantías; (5) su violación de los derechos de un tercero; o (6) cualquier acto perjudicial manifiesto hacia cualquier otro usuario de los Servicios.</p>

              <h2>28. Datos del usuario</h2>
              <p>Conservaremos determinados datos que usted transmita a los Servicios para gestionar el funcionamiento de los mismos. Aunque realizamos copias de seguridad rutinarias de los datos, usted es el único responsable de todos los datos que transmita o que estén relacionados con cualquier actividad que haya realizado utilizando los Servicios. Usted acepta que no tendremos ninguna responsabilidad ante usted por cualquier pérdida o corrupción de dichos datos.</p>
              <p>Las cuentas gratuitas que no hayan tenido actividad en un plazo superior a 180 días serán eliminadas de forma automática de nuestros registros, eliminando todos los datos del usuario.</p>
              <p>De manera opcional, el usuario podrá solicitar eliminar su cuenta completando el formulario disponible en: https://forms.gle/UHQWPFUvzDZLKPud9.</p>

              <h2>29. Comunicaciones, transacciones y firmas electrónicas</h2>
              <p>La visita a los Servicios, el envío de correos electrónicos y la cumplimentación de formularios en línea constituyen comunicaciones electrónicas. Usted da su consentimiento para recibir comunicaciones electrónicas y acepta que todos los acuerdos, avisos, divulgaciones y otras comunicaciones que le proporcionemos electrónicamente satisfacen cualquier requisito legal de que dicha comunicación sea por escrito. USTED ACEPTA EL USO DE FIRMAS ELECTRÓNICAS, CONTRATOS, PEDIDOS Y OTROS REGISTROS, ASÍ COMO LA ENTREGA ELECTRÓNICA DE NOTIFICACIONES, POLÍTICAS Y REGISTROS DE TRANSACCIONES.</p>

              <h2>30. Usuarios y residentes de California</h2>
              <p>Supongamos que una reclamación con nosotros no se resuelve satisfactoriamente. En ese caso, puede ponerse en contacto con la Unidad de Asistencia para Reclamaciones de la División de Servicios al Consumidor del Departamento de Asuntos del Consumidor de California por escrito en 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 o por teléfono en (800) 952-5210 o (916) 445-1254.</p>

              <h2>31. Varios</h2>
              <p>Las presentes Condiciones Legales y cualesquiera políticas o normas de funcionamiento publicadas por nosotros en los Servicios o relativas a los Servicios constituyen la totalidad del acuerdo y entendimiento entre usted y nosotros. El hecho de que no ejerzamos o hagamos valer cualquier derecho o disposición de estas Condiciones Legales no constituirá una renuncia a dicho derecho o disposición. Estas Condiciones Legales se aplican en la máxima medida permitida por la ley. Podemos ceder cualquiera o todos nuestros derechos y obligaciones a terceros en cualquier momento. No se crea ninguna relación de empresa conjunta, asociación, empleo o agencia entre usted y nosotros como resultado de estas Condiciones Legales.</p>

              <h2>32. Contacto</h2>
              <p>Para resolver una queja relativa a los Servicios o para recibir más información sobre el uso de los Servicios, no dude en ponerse en contacto con nosotros en:</p>
              <p>
                MUUD SpA<br />
                Av. Presidente Kennedy 5600, Of. 507<br />
                Vitacura, Santiago, 7650724 Chile<br />
                Tel: +56 9 2691 3974<br />
                Email: soporte@muud.app
              </p>
              <p style={{ marginTop: 48, color: "var(--muted)", fontSize: "0.9rem" }}>© 2023 MUUD SpA, Todos los Derechos Reservados</p>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="general" />
    </>
  );
}
