import { LegalLayout } from "@/components/LegalLayout";

export const metadata = {
  title: "Terms of Use | TAC",
  description: "The terms governing use of the website of The Arete Connoisseurs (TAC®) Limited.",
};

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Use"
      lastUpdated="[Effective date — to be set on publication]"
      intro="These Terms of Use govern your access to and use of the website of The Arete Connoisseurs (TAC®) Limited (“TAC”, “we”, “us”). By using this website, you agree to these terms. If you do not agree, please do not use the site."
    >
      <h2>1. Acceptance of terms</h2>
      <p>
        By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by
        these Terms of Use and our Privacy Policy.
      </p>

      <h2>2. About this website</h2>
      <p>
        This website provides information about TAC and its services in healthcare accreditation, standards, quality
        systems, and related fields. Content is provided for general information only and may be updated or changed at
        any time without notice.
      </p>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>You agree not to use the site for any unlawful purpose or in any way that could damage, disable, or impair it.</li>
        <li>You agree not to attempt to gain unauthorised access to any part of the site or its underlying systems.</li>
        <li>You agree not to misuse the contact form, including submitting unlawful, misleading, or unsolicited content.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        All content on this site — including text, graphics, logos, the TAC® mark, and the design and arrangement of the
        site — is owned by or licensed to TAC and is protected by applicable intellectual-property laws. You may not
        reproduce, distribute, or create derivative works without our prior written permission.
      </p>

      <h2>5. No professional advice</h2>
      <p>
        Information on this site is general in nature and does not constitute professional, legal, medical, or
        accreditation advice. Engagements are governed by separate written agreements. You should not act on website
        content without obtaining appropriate professional advice for your circumstances.
      </p>

      <h2>6. Third-party links</h2>
      <p>
        The site may contain links to third-party websites. We are not responsible for the content, policies, or
        practices of any third-party sites, and such links do not imply endorsement.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        The site is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we
        disclaim all warranties, express or implied, including as to accuracy, completeness, fitness for a particular
        purpose, and non-infringement.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, TAC shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or any loss of data, profits, or goodwill, arising from your use of or
        inability to use this site.
      </p>

      <h2>9. Indemnity</h2>
      <p>
        You agree to indemnify and hold TAC harmless from any claims, losses, or liabilities arising from your misuse of
        the site or breach of these terms.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria, and any disputes shall be subject to
        the exclusive jurisdiction of the Nigerian courts [confirm preferred jurisdiction / dispute-resolution clause].
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        We may revise these terms from time to time. Continued use of the site after changes take effect constitutes
        acceptance of the revised terms.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:hello@theareteconnoisseurs.org">hello@theareteconnoisseurs.org</a>.
      </p>

      <p className="text-sm text-gray-500 border-t border-gray-100 pt-6 mt-10">
        This document is a draft starting point and must be reviewed and approved by qualified legal counsel, with all
        bracketed fields completed, before publication. It does not constitute legal advice.
      </p>
    </LegalLayout>
  );
}
