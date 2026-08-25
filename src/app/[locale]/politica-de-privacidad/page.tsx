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
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: buildOpenGraph({
      locale,
      title: t("ogTitle"),
      description: t("ogDescription"),
      path: "politica-de-privacidad",
      ogImagePath: "",
    }),
    alternates: alternatesFor(locale, "politica-de-privacidad"),
    robots: { index: false, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");
  const locale = useLocale();
  const tMeta = useTranslations("metadata.privacy");

  const jsonLd = graph(
    webPageSchema({
      locale,
      path: "politica-de-privacidad",
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
              <p className="legal-updated">{t("lastUpdated")}: August 10, 2026 &middot; Effective date: August 10, 2026</p>
            </div>

            <div className="legal-body">
              <p>This Privacy Policy explains how MUUD SpA, RUT 77.634.166-5, Av. Presidente Kennedy 5600, Of. 507, Vitacura, Santiago, Chile (&quot;MUUD&quot;, &quot;we&quot;, &quot;us&quot;), processes personal data in connection with the MUUD websites, mobile and web applications and related services (the &quot;Services&quot;). The Services are a student wellbeing platform provided primarily to schools and other educational institutions, and a team wellbeing offering for organizations. This Policy should be read together with our Terms of Service and, for institutions, the Data Processing Addendum (&quot;DPA&quot;).</p>
              <p>This Policy is drafted to comply with the data protection laws of the jurisdictions where MUUD operates, including the GDPR and UK GDPR, Spain&apos;s LOPDGDD, Brazil&apos;s LGPD, Chile&apos;s Law No. 19.628 and Law No. 21.719 (in force December 1, 2026), Mexico&apos;s LFPDPPP, Colombia&apos;s Law 1581 of 2012, Peru&apos;s Law No. 29733, Argentina&apos;s Law No. 25.326, the U.S. FERPA, COPPA and applicable state privacy and student privacy laws, and India&apos;s Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025 (collectively, &quot;Applicable Data Protection Laws&quot;).</p>

              <h2>Summary of Key Points</h2>
              <ul>
                <li>(a) When your school uses MUUD, your school controls your data. MUUD processes Student Data only as the school&apos;s processor, under its instructions, to provide the Services.</li>
                <li>(b) We collect only what the Services need. We do not collect data revealing race or ethnicity, political opinions or religious beliefs, and we do not ask for precise geolocation.</li>
                <li>(c) Wellbeing check-ins and journal entries are sensitive. They are protected with heightened confidentiality, are visible only as described in Section 5, and are never used for advertising.</li>
                <li>(d) We do not sell personal data, we do not show third-party advertising in the Services, and we do not use personal data of students or of any user for targeted advertising, offer walls, contests or similar commercial schemes.</li>
                <li>(e) Children use MUUD only through their school, with consent obtained as required in their country.</li>
                <li>(f) You have rights over your data, described in Section 11, and students and parents can also exercise them through their school.</li>
              </ul>

              <nav className="legal-toc">
                <h3>Contents</h3>
                <ol>
                  <li>Who Is Responsible for Your Data (Roles)</li>
                  <li>Information We Collect</li>
                  <li>Purposes and Legal Bases</li>
                  <li>Automated Analysis and AI Features</li>
                  <li>Wellbeing Data: Confidentiality and Visibility</li>
                  <li>De-identified and Aggregated Data</li>
                  <li>When and With Whom We Share Personal Data</li>
                  <li>International Data Transfers</li>
                  <li>Retention</li>
                  <li>Security and Breach Notification</li>
                  <li>Your Rights</li>
                  <li>Cookies and Similar Technologies</li>
                  <li>Children&apos;s Privacy</li>
                  <li>Jurisdiction-Specific Disclosures</li>
                  <li>Contact</li>
                  <li>Changes to This Policy</li>
                </ol>
              </nav>

              <h2>1. Who Is Responsible for Your Data (Roles)</h2>
              <p>1.1 <strong>School deployments.</strong> When you use the Services through a school or other institution (&quot;Institutional Customer&quot;), the institution is the data controller (responsable del tratamiento, controlador, or Data Fiduciary under the India DPDP Act) of Student Data and of the personal data of its staff processed in the platform. MUUD acts as data processor (encargado, operador, Data Processor), processing that data only on the institution&apos;s documented instructions under the DPA. Questions and rights requests concerning Student Data can be addressed to the institution or to MUUD; where MUUD receives them, we will coordinate with the institution.</p>
              <p>1.2 <strong>Individual adult users and business teams.</strong> Where MUUD offers accounts to individual adults, or wellbeing services to companies for their adult team members, MUUD is the controller of account data, and the specific controller/processor allocation for company deployments is set out in the applicable agreement.</p>
              <p>1.3 <strong>Website visitors, prospects and event participants.</strong> MUUD is the controller of personal data collected through our websites, demos, sales and marketing activities.</p>

              <h2>2. Information We Collect</h2>
              <p>2.1 <strong>Account and profile data.</strong> Name, email address, username, password (stored hashed), role (student, teacher, counselor, administrator), school, grade or course, and language. For students, accounts are provisioned by or at the direction of the school; we ask schools to provide only the minimum fields necessary.</p>
              <p>2.2 <strong>Wellbeing data (sensitive).</strong> Check-in responses (for example, mood selections and short answers), journal entries, and interactions with wellbeing content. This data may reveal information about emotional state and is treated as sensitive personal data under Applicable Data Protection Laws (including GDPR Art. 9, LGPD Arts. 5 and 11, and Chilean Law No. 21.719). Section 5 describes exactly how it is used and who can see it.</p>
              <p>2.3 <strong>Usage and device data.</strong> IP address, device and browser type, operating system, app version, language settings, log data (timestamps, features used, error reports) and approximate country/region derived from IP. We collect this to operate, secure and improve the Services. We do not collect precise GPS geolocation and we do not access your camera, microphone, contacts or photos except where a specific feature you choose to use requires it, with the operating system permission prompt, and never in the student experience without the school&apos;s configuration.</p>
              <p>2.4 <strong>Billing data.</strong> For paying customers, billing contact details, tax ID and invoicing information. Card payments for individual purchases are processed by the app stores or by our payment processors; MUUD does not store full card numbers.</p>
              <p>2.5 <strong>Support and communications.</strong> The content of your messages when you contact support, respond to surveys we run for product feedback, or attend demos and events.</p>
              <p>2.6 <strong>Data we do not collect.</strong> We do not collect or process data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic or biometric data, or data concerning sex life or sexual orientation. We do not request government identification numbers from students. We do not use social media login for the Services, and we do not receive advertising or data-broker data about users.</p>
              <p>2.7 <strong>Sources.</strong> We collect data directly from you, from your institution when it provisions and manages accounts, and automatically from your device as described in 2.3. We do not purchase personal data from third parties.</p>

              <h2>3. Purposes and Legal Bases</h2>
              <p>We process personal data only for the purposes below and only with a valid legal basis. Where MUUD acts as processor for an institution, the institution establishes the legal basis; those most commonly relied on are indicated for transparency.</p>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Purpose</th>
                      <th>Data used</th>
                      <th>Legal basis (GDPR / LGPD / Law 21.719 and equivalents)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Provide the Services: accounts, check-ins, journals, wellbeing content, staff dashboards and alerts</td>
                      <td>Account data; wellbeing data; usage data</td>
                      <td>Performance of the contract with the institution or user; for wellbeing (sensitive) data, the basis established by the controller: explicit consent of the user or parent/guardian, or another basis permitted by law for the educational and wellbeing purpose, always in the best interest of the student</td>
                    </tr>
                    <tr>
                      <td>Safety escalation: enabling designated school staff to follow up on wellbeing alerts</td>
                      <td>Wellbeing data; account data</td>
                      <td>Substantial public interest / protection of vital interests of the data subject where applicable; the institution&apos;s legal duties of care toward students; explicit consent where required</td>
                    </tr>
                    <tr>
                      <td>Security, fraud prevention, troubleshooting</td>
                      <td>Usage and device data; logs</td>
                      <td>Legitimate interest in securing the Services; legal obligation</td>
                    </tr>
                    <tr>
                      <td>Support and communications about the service (not marketing)</td>
                      <td>Account data; support messages</td>
                      <td>Performance of contract; legitimate interest</td>
                    </tr>
                    <tr>
                      <td>Billing and administration of institutional subscriptions</td>
                      <td>Billing data</td>
                      <td>Performance of contract; legal obligations (tax, accounting)</td>
                    </tr>
                    <tr>
                      <td>Product improvement and research on student wellbeing</td>
                      <td>De-identified and aggregated data only (Section 6)</td>
                      <td>Legitimate interest; not applicable to identified personal data</td>
                    </tr>
                    <tr>
                      <td>Marketing to prospective institutional customers (never to students)</td>
                      <td>Business contact data of school representatives</td>
                      <td>Legitimate interest or consent, with opt-out at any time</td>
                    </tr>
                    <tr>
                      <td>Legal compliance</td>
                      <td>As required</td>
                      <td>Legal obligation; establishment, exercise or defense of legal claims</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>We do not process personal data for third-party advertising, targeted advertising, offer walls, sweepstakes or contests, or the publication of testimonials containing personal data without specific prior consent. We do not use Student Data for marketing of any kind.</p>

              <h2>4. Automated Analysis and AI Features</h2>
              <p>4.1 The Services use software, including AI-based analysis, to organize check-in responses and, where the institution enables it, to flag patterns that may warrant human attention (for example, a sustained negative trend). These features exist to prioritize human follow-up by trained school staff. They do not produce clinical assessments or diagnoses.</p>
              <p>4.2 No decision producing legal effects or similarly significant effects on a user is taken solely by automated means. Alerts are informational and any follow-up decision is made by people at the institution. Users and institutions can request human review of, and information about, the logic of these features (GDPR Art. 22, LGPD Art. 20, Law No. 21.719 and equivalents).</p>
              <p>4.3 We do not use personal data, including wellbeing data, to train models for third parties, and we do not use identifiable Student Data to train our own models without the documented instruction of the controller and a valid legal basis; where model improvement uses data, we use de-identified and aggregated data under Section 6.</p>

              <h2>5. Wellbeing Data: Confidentiality and Visibility</h2>
              <p>5.1 <strong>Private by default.</strong> Personal journal entries are private to the user. They are not visible to school staff, other students or MUUD personnel in the ordinary course, except as strictly necessary for technical operation and support under confidentiality obligations and access logging.</p>
              <p>5.2 <strong>What the school sees.</strong> Depending on the configuration disclosed to the institution, designated school staff can see check-in results, wellbeing trends and alerts for the students under their care. The institution decides which roles have access. Visibility never extends beyond what is necessary for the wellbeing purposes of the Services, and the specific visibility rules for each feature are documented for the institution and available to users on request.</p>
              <p>5.3 <strong>Safety disclosures.</strong> If information processed in the Services indicates a serious and imminent risk to the life, safety or wellbeing of a user or of another person, the platform is designed so that the institution&apos;s designated staff are alerted and can act under the institution&apos;s own protocols and legal duties. MUUD may disclose information to competent authorities only where legally required or where necessary to protect someone&apos;s life or safety, and will document any such disclosure. MUUD is not an emergency service and does not monitor content in real time.</p>
              <p>5.4 The Services are an educational wellbeing tool. They are not a medical, clinical, psychological or psychiatric service, and the data processed is not a medical record, without prejudice to its protection as sensitive data under Applicable Data Protection Laws.</p>

              <h2>6. De-identified and Aggregated Data</h2>
              <p>We may create de-identified, aggregated statistics (for example, overall wellbeing trends across a school, with no individual identifiable) to provide reporting to institutions, improve the Services and conduct research on student wellbeing. We apply the de-identification standards of Applicable Data Protection Laws, we contractually prohibit re-identification, and where a stricter student data standard applies (for example, certain U.S. state laws), we follow the stricter standard.</p>

              <h2>7. When and With Whom We Share Personal Data</h2>
              <p>7.1 <strong>With your institution.</strong> In school deployments, Student Data and staff data are available to the institution as controller, per the visibility rules in Section 5.</p>
              <p>7.2 <strong>Subprocessors and service providers.</strong> We use vetted providers for hosting, infrastructure, communications and support (for example, cloud hosting providers). They process personal data only under contract, only on our instructions, with confidentiality and security obligations flowing down from the DPA. A current subprocessor list is available at [INSERT URL] or on request, and institutional customers receive advance notice of changes.</p>
              <p>7.3 <strong>Legal and safety.</strong> We may disclose personal data where required by law, regulation or binding order of a competent authority, or where strictly necessary to protect the life or safety of a person (Section 5.3), or to establish, exercise or defend legal claims. Where legally permitted, we will notify the affected institution before disclosing Customer Data in response to a government request and will challenge overbroad requests.</p>
              <p>7.4 <strong>Corporate transactions.</strong> If MUUD is involved in a merger, acquisition, financing or sale of assets, personal data may be transferred as part of that transaction, subject to this Policy and to Applicable Data Protection Laws. Institutional customers will be notified, protections applicable to Student Data will continue to apply, and if they do not, customers may terminate and require deletion of their data before the transfer takes effect.</p>
              <p>7.5 <strong>What we never do.</strong> We do not sell or rent personal data. We do not share personal data with advertisers, ad networks or data brokers. We do not operate offer walls, third-party advertising or social plug-ins inside the Services, and no Student Data is ever disclosed for commercial purposes unrelated to the Services.</p>

              <h2>8. International Data Transfers</h2>
              <p>8.1 The Services are hosted in [INSERT HOSTING REGION(S)]. Where personal data is transferred to a country that does not provide an adequate level of protection, we implement the safeguards required by law: the European Commission&apos;s Standard Contractual Clauses (with the UK Addendum or IDTA, and Swiss adaptations, as applicable) together with transfer impact assessments; the mechanisms of LGPD Arts. 33 to 36 for Brazil, including the ANPD&apos;s standard contractual clauses; the international transfer conditions of Chilean Law No. 21.719; and equivalent mechanisms under the laws of Mexico, Colombia, Peru, Argentina and India, including any applicable government restrictions on transfers under the India DPDP framework.</p>
              <p>8.2 We do not treat continued use of the Services as consent to international transfers. Copies of the relevant safeguards can be requested through the contacts in Section 15.</p>

              <h2>9. Retention</h2>
              <p>9.1 <strong>School deployments.</strong> We retain Customer Data, including Student Data, for the duration of the institution&apos;s subscription and as instructed by the institution, which can delete Student Data at any time using the administrative tools. Upon termination, data is available for export for at least 60 days and is then deleted from production systems within 90 days and from backups within the backup cycle, unless a longer retention is required by law. Deletion is certified on request.</p>
              <p>9.2 <strong>Individual accounts.</strong> We retain personal data while the account is active. Upon deletion of the account, personal data is deleted or irreversibly anonymized within 90 days, except data we must retain to comply with legal obligations (for example, billing records for tax purposes), to resolve disputes or to enforce agreements, which is isolated and retained only as long as legally required. Free individual accounts inactive for 24 months may be deleted after at least 30 days&apos; prior notice.</p>
              <p>9.3 <strong>Website and marketing data.</strong> Business contact data of prospects is retained while relevant to the relationship and deleted upon opt-out or after a defined period of inactivity documented in our internal retention schedule.</p>

              <h2>10. Security and Breach Notification</h2>
              <p>10.1 We apply technical and organizational measures appropriate to the sensitivity of the data, including encryption in transit (TLS) and at rest, role-based access controls, least-privilege access for personnel, access logging and monitoring, environment segregation, secure development practices, regular backups and periodic security reviews. Personnel with access to personal data are bound by confidentiality obligations and receive privacy and security training.</p>
              <p>10.2 If a personal data breach occurs, we will notify the affected institution without undue delay and in any event within 72 hours of becoming aware of it, with the information needed for the institution to meet its own obligations. Where MUUD is the controller, we will notify the competent supervisory authority (including, as applicable, the relevant EU/EEA authority, the AEPD, the ANPD, Chile&apos;s Agencia de Proteccion de Datos Personales, or India&apos;s Data Protection Board) and affected individuals, within the deadlines and with the content required by Applicable Data Protection Laws.</p>
              <p>10.3 No system is completely secure, but MUUD does not disclaim its legal responsibility for implementing and maintaining the security measures required by Applicable Data Protection Laws.</p>

              <h2>11. Your Rights</h2>
              <p>11.1 Depending on your jurisdiction, you have the rights of access, rectification, erasure (deletion), restriction of processing, objection, data portability, withdrawal of consent (without affecting prior processing), and the right not to be subject to solely automated decisions with legal or similarly significant effects. These include the ARCO rights recognized across Latin America, the rights in GDPR Arts. 15 to 22, LGPD Art. 18, Chilean Law No. 21.719 (ARCO plus portability), the rights of Data Principals under the India DPDP Act (access, correction and erasure, grievance redressal, nomination), and the rights of U.S. state privacy laws where applicable (access, correction, deletion, portability, opt-out of targeted advertising, sale and profiling; note that MUUD does not sell or share personal data or engage in targeted advertising).</p>
              <p>11.2 <strong>How to exercise your rights.</strong> Contact us at privacy@muud.app [OR INSERT ADDRESS], through in-product settings where available, or through the data request form linked in the Site footer. We will verify your identity using only the information necessary for verification, respond within the deadline set by your law (for example, one month under the GDPR, extendable as permitted; 15 days for confirmation and simplified access under the LGPD; the deadlines of Law No. 21.719 in Chile; 45 days under most U.S. state laws), and will not discriminate against you for exercising your rights. You may use an authorized agent where your law allows it, subject to proof of authorization.</p>
              <p>11.3 <strong>Students and parents.</strong> In school deployments, students, parents and guardians can exercise rights directly with the institution, which remains the point of contact under FERPA and equivalent frameworks; MUUD provides the institution with the tools to review, correct, export and delete Student Data. Parents and guardians may review and request deletion of their child&apos;s data, and may refuse to permit further collection, through the institution or through MUUD, which will coordinate with the institution.</p>
              <p>11.4 <strong>Complaints.</strong> You may lodge a complaint with your supervisory authority, including any EU/EEA data protection authority or the UK ICO, the Spanish AEPD, Brazil&apos;s ANPD, Chile&apos;s Agencia de Proteccion de Datos Personales (and consumer complaints before SERNAC), Mexico&apos;s data protection authority, Colombia&apos;s SIC, Peru&apos;s ANPD, Argentina&apos;s AAIP, the U.S. FTC or your state Attorney General, or India&apos;s Data Protection Board. We would appreciate the chance to address your concern first through the contacts in Section 15.</p>

              <h2>12. Cookies and Similar Technologies</h2>
              <p>12.1 The Site uses strictly necessary cookies (session, security, load balancing) and, with your consent where required, analytics cookies to understand aggregate usage. We do not use advertising or cross-site tracking cookies, and no advertising cookies are used in the student experience. A cookie banner and settings page allow you to accept, refuse and change your choices for non-essential cookies at any time; refusing them does not degrade core functionality.</p>
              <p>12.2 We honor opt-out preference signals such as Global Privacy Control where required by applicable law. Because we do not track users across third-party sites, browser Do-Not-Track signals do not change our practices, which already do not include such tracking.</p>

              <h2>13. Children&apos;s Privacy</h2>
              <p>13.1 Children do not create MUUD accounts on their own. Student accounts exist only under an institutional subscription, provisioned by or at the direction of the school, with the notices and consents required by the law of the student&apos;s country obtained as described in the Terms of Service: parental notice and school authorization or verifiable parental consent under COPPA in the United States; consent of holders of parental authority for children under the applicable digital consent age in the EU (Art. 8 GDPR; 14 in Spain under the LOPDGDD); processing in the best interest of children and adolescents with specific and highlighted parental consent where required in Brazil (LGPD Art. 14); the requirements of Chilean law, including Law No. 21.719 as of its entry into force; equivalent requirements in other Latin American jurisdictions; and verifiable parental or guardian consent for all users under 18 in India (DPDP Act Section 9 and Rule 10 of the DPDP Rules, 2025), except to the extent a statutory exemption applies to educational contexts.</p>
              <p>13.2 We do not track or behaviourally monitor children, do not profile children except as necessary to provide the contracted wellbeing features, and do not direct any advertising at children. If we learn that a child&apos;s personal data was collected without the required consent or authorization, we will delete it without undue delay and notify the institution.</p>

              <h2>14. Jurisdiction-Specific Disclosures</h2>
              <p>14.1 <strong>EEA, UK and Switzerland.</strong> Our legal bases are described in Section 3. Where required by Art. 27 GDPR / UK GDPR, our EU representative is [INSERT] and our UK representative is [INSERT]. Transfers are protected as per Section 8.</p>
              <p>14.2 <strong>Spain.</strong> The digital consent age is 14 (LOPDGDD Art. 7). The AEPD is the supervisory authority. Where a Spanish school is the controller, the school determines the legal basis in accordance with Spanish education regulations and AEPD guidance for educational centers.</p>
              <p>14.3 <strong>Brazil.</strong> Our encarregado (DPO) for LGPD purposes is [INSERT NAME AND CONTACT]. Data subjects may exercise LGPD Art. 18 rights through Section 11 and may petition the ANPD. Processing of children&apos;s and adolescents&apos; data follows LGPD Art. 14 and ANPD guidance.</p>
              <p>14.4 <strong>Chile.</strong> Processing is subject to Law No. 19.628 and, from December 1, 2026, Law No. 21.719, including its principles, sensitive data rules, ARCO and portability rights, breach notification and the authority of the Agencia de Proteccion de Datos Personales. This Policy is intended to operate in conformity with Law No. 21.719 as of its entry into force.</p>
              <p>14.5 <strong>Other Latin American jurisdictions.</strong> In Mexico this document serves as the aviso de privacidad integral required by the LFPDPPP; ARCO requests follow Section 11. In Colombia, processing follows Law 1581 of 2012 and Decree 1377 of 2013, and this Policy, together with the institution&apos;s authorization records, implements the required data processing policy. In Peru (Law No. 29733) and Argentina (Law No. 25.326), registered databases and local requirements are maintained as applicable, and mandatory local rules prevail over any conflicting statement in this Policy.</p>
              <p>14.6 <strong>United States.</strong> For school deployments, MUUD operates as a school official under FERPA and relies on school consent under COPPA as described in the Terms of Service; parents can review and request deletion of their child&apos;s information through the school. MUUD complies with state student privacy laws (including SOPIPA) and, where state consumer privacy laws such as the CCPA/CPRA, Virginia CDPA and similar laws apply, users have the rights listed in Section 11. MUUD does not sell or share personal information as defined by the CCPA, has not done so in the preceding 12 months, does not use or disclose sensitive personal information for purposes other than providing the Services, and does not knowingly process personal data for targeted advertising or profiling in furtherance of decisions with legal or similarly significant effects. California minors may request removal of content they posted (Cal. Bus. &amp; Prof. Code 22581) through the contacts in Section 15. Categories of personal information collected are those described in Section 2; categories of recipients are those described in Section 7. Appeals of rights decisions, where state law grants them, may be sent to privacy@muud.app and will be answered with reasons within the statutory deadline, with information on contacting your Attorney General.</p>
              <p>14.7 <strong>India.</strong> For users in India, MUUD and, where applicable, the institution as Data Fiduciary comply with the DPDP Act, 2023 and DPDP Rules, 2025: itemized notices in English or an Eighth Schedule language on request, consent as easy to withdraw as to give, verifiable parental consent for users under 18 (Section 13), no tracking, behavioural monitoring or targeted advertising directed at children, breach notification to affected Data Principals and the Data Protection Board, defined erasure timelines, and grievance redressal. Our Grievance Officer is [INSERT NAME], reachable at [INSERT EMAIL]; unresolved grievances may be escalated to the Data Protection Board of India.</p>

              <h2>15. Contact</h2>
              <p>Privacy contact / Data Protection Officer: privacy@muud.app</p>
              <p>General support: soporte@muud.app | Tel: +56 9 2691 3974</p>
              <p>Postal: MUUD SpA, Av. Presidente Kennedy 5600, Of. 507, Vitacura, Santiago, Chile</p>

              <h2>16. Changes to This Policy</h2>
              <p>We may update this Policy. Material changes will be notified at least 30 days in advance by email and/or in-product notice, identifying what changed; where a change requires renewed consent under Applicable Data Protection Laws (for example, a new purpose for sensitive data), we will obtain it before applying the change. The current version and its date are always published on the Site, and previous versions are available on request. In school deployments, changes affecting the processing of Student Data are also governed by the DPA and require the process set out there.</p>

              <p style={{ marginTop: 48, color: "var(--muted)", fontSize: "0.9rem" }}>&copy; 2026 MUUD SpA. All rights reserved.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="general" />
    </>
  );
}
