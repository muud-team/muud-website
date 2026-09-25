import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import JsonLd from "@/components/JsonLd";
import { alternatesFor, buildOpenGraph } from "@/lib/seo";
import { graph, webPageSchema } from "@/lib/structured-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.eula" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: buildOpenGraph({
      locale,
      title: t("ogTitle"),
      description: t("ogDescription"),
      path: "eula",
      ogImagePath: "",
    }),
    alternates: alternatesFor(locale, "eula"),
    robots: { index: false, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function EulaPage() {
  const t = useTranslations("eula");
  const locale = useLocale();
  const tMeta = useTranslations("metadata.eula");

  const jsonLd = graph(
    webPageSchema({
      locale,
      path: "eula",
      name: tMeta("title"),
      description: tMeta("description"),
    })
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav sectionLinks={[]} />

      <main id="top">
        <section className="sec sec-paper" style={{ paddingTop: 160 }}>
          <div className="wrap legal-wrap">
            <div className="legal-header">
              <h1>{t("title")}</h1>
              <p className="legal-updated">{t("lastUpdated")}: 9 de abril de 2025</p>
            </div>

            <div className="legal-body">
              <p><strong>IMPORTANTE – LEA DETENIDAMENTE</strong></p>
              <p>Este Acuerdo de Licencia de Usuario Final (&quot;Acuerdo&quot;) es un contrato legal entre usted y MUUD SpA que regula el uso de la Aplicación Licenciada, la cual incluye la aplicación de software, su contenido y cualquier actualización o servicio relacionado.</p>

              <h2>1. Reconocimiento</h2>
              <p>Usted y el Usuario Final reconocen que este Acuerdo se celebra únicamente entre usted y el Usuario Final, y no con Apple. Apple no es responsable de la Aplicación Licenciada ni de su contenido. Este Acuerdo no puede entrar en conflicto con los Términos y Condiciones de los Servicios de Medios de Apple, los cuales usted ha tenido la oportunidad de revisar.</p>

              <h2>2. Alcance de la Licencia</h2>
              <p>La licencia otorgada al Usuario Final es una licencia no transferible para usar la Aplicación Licenciada en cualquier producto de marca Apple que el Usuario Final posea o controle, y según lo permitido por las Reglas de Uso establecidas en los Términos y Condiciones de los Servicios de Medios de Apple. La Aplicación Licenciada puede ser accedida y utilizada por otras cuentas asociadas con el comprador a través de Compartir en Familia o compras por volumen, según corresponda.</p>

              <h2>3. Mantenimiento y Soporte</h2>
              <p>Usted es el único responsable de proporcionar mantenimiento y soporte para la Aplicación Licenciada. Apple no tiene ninguna obligación de proporcionar servicios de mantenimiento o soporte respecto de la Aplicación Licenciada.</p>

              <h2>4. Garantía</h2>
              <p>Usted es el único responsable de cualquier garantía relacionada con la Aplicación Licenciada, ya sea expresa o implícita, en la medida en que no haya sido excluida. En caso de que la Aplicación Licenciada no cumpla con alguna garantía aplicable, el Usuario Final podrá notificar a Apple, y Apple podrá reembolsar el precio de compra de la Aplicación Licenciada. En la máxima medida permitida por la ley aplicable, Apple no tendrá ninguna otra obligación de garantía, y cualquier reclamo, pérdida o responsabilidad será responsabilidad exclusiva suya.</p>

              <h2>5. Reclamaciones sobre el Producto</h2>
              <p>Usted, y no Apple, es responsable de atender cualquier reclamación del Usuario Final o de terceros relacionada con la Aplicación Licenciada o con la posesión y/o uso de esta por parte del Usuario Final. Esto incluye, entre otras: (i) reclamaciones de responsabilidad por productos; (ii) reclamaciones de incumplimiento de requisitos legales o normativos; y (iii) reclamaciones derivadas de leyes de protección al consumidor o privacidad, incluyendo aquellas relacionadas con el uso de los frameworks HealthKit o HomeKit, si corresponde.</p>

              <h2>6. Derechos de Propiedad Intelectual</h2>
              <p>En caso de que un tercero reclame que la Aplicación Licenciada o su uso por parte del Usuario Final infringe derechos de propiedad intelectual, usted, y no Apple, será el único responsable de la investigación, defensa, resolución y liberación de cualquier reclamo de este tipo.</p>

              <h2>7. Cumplimiento Legal</h2>
              <p>El Usuario Final declara y garantiza que: (i) no se encuentra en un país sujeto a embargo por parte del Gobierno de los EE. UU. o que haya sido designado por el Gobierno de los EE. UU. como país que apoya el terrorismo; y (ii) no figura en ninguna lista del Gobierno de los EE. UU. de personas o partes restringidas o prohibidas.</p>

              <h2>8. Nombre y Dirección del Desarrollador</h2>
              <p>
                Desarrollador: MUUD SpA<br />
                Dirección: Av. Presidente Kennedy 5600, Of. 507, Vitacura, Chile<br />
                Contacto: Soporte<br />
                Correo electrónico: soporte@muud.app<br />
                Teléfono: +56 9 2691 3974
              </p>
              <p>Por favor, contáctenos ante cualquier duda, queja o reclamo con respecto a la Aplicación Licenciada.</p>

              <h2>9. Términos de Terceros</h2>
              <p>El Usuario Final debe cumplir con todos los términos aplicables de terceros al utilizar la Aplicación Licenciada. Por ejemplo, si la Aplicación Licenciada utiliza servicios de VoIP, el Usuario Final no debe violar su contrato de servicio de datos móviles al utilizarla.</p>

              <h2>10. Tercero Beneficiario</h2>
              <p>Usted y el Usuario Final reconocen y aceptan que Apple y sus subsidiarias son terceros beneficiarios de este Acuerdo y que, al aceptar el Usuario Final los términos de este Acuerdo, Apple tendrá el derecho (y se considerará que ha aceptado dicho derecho) de hacer cumplir este Acuerdo contra el Usuario Final como tercero beneficiario.</p>

              <h2>11. Recolección y Uso de Datos</h2>
              <p>Usted acepta que podemos recopilar información técnica sobre su dispositivo, sistema y uso para mejorar la Aplicación Licenciada, de conformidad con nuestra Política de Privacidad.</p>

              <h2>12. Terminación</h2>
              <p>Este Acuerdo tendrá vigencia hasta que sea terminado por cualquiera de las partes. Sus derechos bajo esta licencia se terminarán automáticamente sin previo aviso si usted incumple alguno de los términos de este Acuerdo.</p>

              <h2>13. Legislación Aplicable</h2>
              <p>Este Acuerdo se regirá por las leyes de Santiago, Chile, sin perjuicio de sus principios sobre conflicto de leyes.</p>

              <p style={{ marginTop: 48, color: "var(--muted)", fontSize: "0.9rem" }}>© 2023 MUUD SpA, Todos los Derechos Reservados</p>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="general" />
    </>
  );
}
