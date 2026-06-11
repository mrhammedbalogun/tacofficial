import { LegalLayout } from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy | TAC",
  description: "How The Arete Connoisseurs (TAC®) Limited collects, uses, and protects personal data, including NDPA/NDPR compliance.",
};

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="[Effective date — to be set on publication]"
      intro="This Privacy Policy explains how The Arete Connoisseurs (TAC®) Limited (“TAC”, “we”, “us”) collects, uses, discloses, and safeguards personal data when you visit this website or engage our services. We are committed to handling personal data lawfully, fairly, and transparently."
    >
      <h2>1. Who we are</h2>
      <p>
        The Arete Connoisseurs (TAC®) Limited is a healthcare accreditation and quality infrastructure firm
        registered in Nigeria, with offices in Lagos, Nigeria [insert full registered address]. For any privacy
        matter you can contact us at <a href="mailto:hello@theareteconnoisseurs.org">hello@theareteconnoisseurs.org</a>.
      </p>

      <h2>2. Scope</h2>
      <p>
        This policy applies to personal data we process through this website and in the course of providing advisory,
        standards, training, and accreditation-management services. It does not apply to third-party websites we may
        link to, which have their own privacy practices.
      </p>

      <h2>3. Information we collect</h2>
      <ul>
        <li><strong>Information you provide:</strong> when you submit an inquiry, we collect your name, email address, role, organisation, country, phone number (if provided), inquiry type, services of interest, preferred contact method, and the details of your message.</li>
        <li><strong>Technical and usage data:</strong> standard information your browser sends, such as IP address, device and browser type, and pages visited, used to operate and secure the site.</li>
      </ul>

      <h2>4. How we use personal data</h2>
      <ul>
        <li>To respond to inquiries and provide the services you request;</li>
        <li>To communicate with you about engagements, proposals, and related matters;</li>
        <li>To operate, maintain, secure, and improve this website;</li>
        <li>To comply with legal, regulatory, and contractual obligations.</li>
      </ul>

      <h2>5. Lawful basis for processing</h2>
      <p>
        We process personal data on one or more of the following lawful bases under the Nigeria Data Protection Act 2023
        (NDPA) and the Nigeria Data Protection Regulation 2019 (NDPR): your consent; the performance of a contract or
        steps taken at your request prior to a contract; compliance with a legal obligation; and our legitimate
        interests in operating and growing our practice, balanced against your rights.
      </p>

      <h2>6. Sharing and disclosure</h2>
      <p>
        We do not sell personal data. We may share it with trusted service providers who support our operations (for
        example, email and hosting providers) under appropriate confidentiality and data-protection terms, and where
        required by law or competent authority. [List of key data processors to be confirmed.]
      </p>

      <h2>7. International transfers</h2>
      <p>
        Some of our service providers may process data outside Nigeria. Where personal data is transferred across
        borders, we take steps to ensure an adequate level of protection consistent with the NDPA/NDPR.
      </p>

      <h2>8. Data retention</h2>
      <p>
        We retain personal data only for as long as necessary to fulfil the purposes set out in this policy, including
        legal, accounting, or reporting requirements, after which it is securely deleted or anonymised.
      </p>

      <h2>9. Data security</h2>
      <p>
        We apply appropriate technical and organisational measures to protect personal data against unauthorised access,
        loss, or misuse. No method of transmission or storage is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>10. Your rights</h2>
      <p>Subject to applicable law, you have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>request correction of inaccurate or incomplete data;</li>
        <li>request deletion of your data;</li>
        <li>object to or restrict certain processing;</li>
        <li>withdraw consent where processing is based on consent;</li>
        <li>request data portability; and</li>
        <li>lodge a complaint with the Nigeria Data Protection Commission (NDPC).</li>
      </ul>
      <p>To exercise any of these rights, contact us at <a href="mailto:hello@theareteconnoisseurs.org">hello@theareteconnoisseurs.org</a>.</p>

      <h2>11. NDPA / NDPR compliance statement</h2>
      <p>
        TAC processes personal data in accordance with the Nigeria Data Protection Act 2023 and the Nigeria Data
        Protection Regulation 2019. We uphold the data-protection principles of lawfulness, fairness, and transparency;
        purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; and
        accountability. [Designate a Data Protection Officer / contact and insert details. Confirm any NDPC filing or
        Data Protection Compliance Organisation engagement.]
      </p>

      <h2>12. Cookies</h2>
      <p>
        This website uses only the minimal cookies necessary for it to function and, where applicable, privacy-friendly
        analytics. [Confirm analytics tooling and update this section accordingly.]
      </p>

      <h2>13. Children</h2>
      <p>
        This website is intended for a professional audience and is not directed at children. We do not knowingly
        collect personal data from children.
      </p>

      <h2>14. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The “last updated” date above reflects the most recent revision.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about this policy or our data practices can be sent to{" "}
        <a href="mailto:hello@theareteconnoisseurs.org">hello@theareteconnoisseurs.org</a> or by post to our Lagos office
        [insert full registered address].
      </p>

      <p className="text-sm text-gray-500 border-t border-gray-100 pt-6 mt-10">
        This document is a draft starting point and must be reviewed and approved by qualified legal counsel, with all
        bracketed fields completed, before publication. It does not constitute legal advice.
      </p>
    </LegalLayout>
  );
}
