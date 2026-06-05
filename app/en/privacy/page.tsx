import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | Toleo GmbH",
  description: "Privacy information for Toleo GmbH pursuant to Art. 13 GDPR."
};

export default function PrivacyPage() {
  return (
    <LegalShell homeHref="/en" logoAria="Back to home" backLabel="Back to home">
      <p className="section-kicker">Privacy</p>
      <h1>Privacy Policy</h1>

      <p>
        Thank you for your interest in Toleo GmbH. Below we explain which personal data is processed
        when you use this website. The website is deliberately data-minimal: no analytics or
        marketing cookies are used.
      </p>

      <h2>1. Controller</h2>
      <p>
        Toleo GmbH
        <br />
        Ritter-Hilprand-Str. 9
        <br />
        82024 Taufkirchen
        <br />
        Germany
        <br />
        Email: <a href="mailto:info@toleo.biz">info@toleo.biz</a>
      </p>

      <h2>2. Hosting and Server Log Data</h2>
      <p>
        This website is hosted by Vercel Inc. When the website is accessed, technically necessary
        data is processed so that the page can be delivered, protected and operated reliably. This
        may include the IP address, date and time of access, requested URL, referrer URL, browser
        type, operating system and technical status information.
      </p>
      <p>
        The legal basis is Art. 6 (1) lit. f GDPR. Our legitimate interest is the secure, stable and
        efficient provision of the website. Processing by Vercel is carried out on the basis of a
        data processing agreement. Where data is transferred to a third country, this is done on the
        basis of appropriate safeguards, in particular standard contractual clauses.
      </p>

      <h2>3. Contact and Contact Form</h2>
      <p>
        If you contact us by email or via the contact form, we process the data you provide,
        especially your name, email address and message text, in order to respond to your request.
        Required fields in the form are limited to the information we need to process the inquiry.
        Additional information is provided voluntarily.
      </p>
      <p>
        The legal basis is Art. 6 (1) lit. b GDPR where your request relates to pre-contractual
        measures or a contract. In all other cases, the legal basis is Art. 6 (1) lit. f GDPR; our
        legitimate interest is responding to your request and communicating with prospects and
        business partners.
      </p>

      <h2>4. Email Delivery via Resend</h2>
      <p>
        We use Resend, Inc. as an email service provider to deliver messages from the contact form.
        The contact and content data required for delivery is transmitted to Resend. Resend processes
        this data as a service provider to the extent necessary for delivery and technical protection
        of email transmission.
      </p>
      <p>
        The legal basis is Art. 6 (1) lit. f GDPR. Our legitimate interest is the reliable delivery
        of incoming contact requests. Processing is carried out on the basis of a data processing
        agreement. Where data is transferred to a third country, this is done on the basis of
        appropriate safeguards, in particular standard contractual clauses.
      </p>

      <h2>5. Cookies, Analytics and Tracking</h2>
      <p>
        This website does not use analytics or marketing cookies and does not use tracking pixels. If
        technically necessary cookies or comparable technologies are required for website operation
        or request security, this is based on § 25 (2) No. 2 TDDDG.
      </p>

      <h2>6. Retention Period</h2>
      <p>
        Personal data is stored only for as long as necessary for the purposes described above or as
        required by statutory retention obligations. Contact requests are deleted once they have been
        finally processed and no statutory retention obligations prevent deletion.
      </p>

      <h2>7. Your Rights</h2>
      <p>Subject to the statutory requirements, you have the following rights:</p>
      <ul>
        <li>access to information about the processing of your personal data,</li>
        <li>rectification of inaccurate data,</li>
        <li>erasure or restriction of processing,</li>
        <li>data portability,</li>
        <li>objection to processing based on legitimate interests,</li>
        <li>complaint to a data protection supervisory authority.</li>
      </ul>
      <p>
        For companies based in Bavaria, the Bavarian State Office for Data Protection Supervision is
        usually responsible:{" "}
        <a href="https://www.lda.bayern.de/" rel="noreferrer">
          www.lda.bayern.de
        </a>
      </p>

      <h2>8. No Automated Decision-Making</h2>
      <p>
        Automated decision-making, including profiling, does not take place on this website.
      </p>

      <p>Last updated: June 5, 2026</p>
    </LegalShell>
  );
}
