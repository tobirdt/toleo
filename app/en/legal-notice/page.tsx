import { LegalShell } from "@/components/legal/legal-shell";
import { createLocalizedMetadata } from "@/lib/seo";

export const metadata = createLocalizedMetadata({
  title: "Legal Notice | Toleo GmbH",
  description: "Legal provider information for Toleo GmbH.",
  path: "/en/legal-notice",
  locale: "en_US",
  germanPath: "/impressum",
  englishPath: "/en/legal-notice",
});

export default function LegalNoticePage() {
  return (
    <LegalShell homeHref="/en" logoAria="Back to home" backLabel="Back to home">
      <p className="section-kicker">Legal</p>
      <h1>Legal Notice</h1>

      <h2>Information pursuant to § 5 DDG</h2>
      <p>
        Toleo GmbH
        <br />
        Ritter-Hilprand-Str. 9
        <br />
        82024 Taufkirchen
        <br />
        Germany
      </p>

      <h2>Represented by</h2>
      <p>
        <a href="/en/holger-rumscheidt">Holger Rumscheidt</a> and Nicole Rumscheidt,
        Managing Directors
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:info@toleo.biz">info@toleo.biz</a>
      </p>

      <h2>Commercial Register</h2>
      <p>
        Register court: Local Court of Munich
        <br />
        Registration number: HRB 249991
      </p>

      <h2>VAT ID</h2>
      <p>VAT identification number pursuant to § 27a German VAT Act: DE325896137</p>

      <h2>Responsible for Content</h2>
      <p>
        Responsible pursuant to § 18 (2) MStV:
        <br />
        Holger Rumscheidt, Ritter-Hilprand-Str. 9, 82024 Taufkirchen, Germany
      </p>

      <h2>Consumer Dispute Resolution</h2>
      <p>
        We are neither willing nor obliged to participate in dispute resolution proceedings before a
        consumer arbitration board.
      </p>

      <h2>Liability for Content</h2>
      <p>
        As a service provider, we are responsible for our own content on these pages in accordance
        with general laws. Obligations to remove or block the use of information under general laws
        remain unaffected.
      </p>

      <h2>Liability for Links</h2>
      <p>
        This website may contain links to external third-party websites over whose content we have no
        influence. We therefore accept no liability for such third-party content. The respective
        provider or operator of the linked pages is always responsible for their content.
      </p>

      <p>Last updated: June 5, 2026</p>
    </LegalShell>
  );
}
