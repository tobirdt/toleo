import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Impressum | Toleo GmbH",
  description: "Anbieterkennzeichnung der Toleo GmbH gemäß § 5 DDG."
};

export default function ImpressumPage() {
  return (
    <LegalShell>
      <p className="section-kicker">Rechtliches</p>
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        Toleo GmbH
        <br />
        Ritter-Hilprand-Str. 9
        <br />
        82024 Taufkirchen
        <br />
        Deutschland
      </p>

      <h2>Vertreten durch</h2>
      <p>Holger Rumscheidt und Nicole Rumscheidt, Geschäftsführer</p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+491702208778">+49 (170) 22 08 778</a>
        <br />
        E-Mail: <a href="mailto:info@toleo.biz">info@toleo.biz</a>
      </p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht: Amtsgericht München
        <br />
        Registernummer: HRB 249991
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE325896137</p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Verantwortlich nach § 18 Abs. 2 MStV:
        <br />
        Holger Rumscheidt, Ritter-Hilprand-Str. 9, 82024 Taufkirchen
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir
        keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte
        der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich.
      </p>

      <p>Stand: 5. Juni 2026</p>
    </LegalShell>
  );
}
