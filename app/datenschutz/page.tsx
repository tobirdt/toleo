import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Toleo GmbH",
  description: "Datenschutzhinweise der Toleo GmbH gemäß Art. 13 DSGVO."
};

export default function DatenschutzPage() {
  return (
    <main className="legal-main">
      <div className="legal-shell">
        <div className="legal-top">
          <a href="/" aria-label="Zur Startseite">
            <Image src="/images/toleo-logo.png" alt="Toleo Holding" width={96} height={61} priority />
          </a>
          <a className="legal-back" href="/">
            Zur Startseite
          </a>
        </div>
        <article className="legal-content">
          <p className="section-kicker">Datenschutz</p>
          <h1>Datenschutzerklärung</h1>

          <p>
            Wir freuen uns über Ihr Interesse an der Toleo GmbH. Nachfolgend informieren wir Sie
            darüber, welche personenbezogenen Daten bei der Nutzung dieser Website verarbeitet werden.
            Die Website ist bewusst datensparsam aufgebaut: Es werden keine Analyse- oder
            Marketing-Cookies eingesetzt.
          </p>

          <h2>1. Verantwortlicher</h2>
          <p>
            Toleo GmbH
            <br />
            Ritter-Hilprand Str. 9
            <br />
            82024 Taufkirchen
            <br />
            Deutschland
            <br />
            E-Mail: <a href="mailto:info@toleo.biz">info@toleo.biz</a>
          </p>

          <h2>2. Hosting und Server-Logdaten</h2>
          <p>
            Diese Website ist für den Betrieb auf Vercel vorbereitet. Beim Aufruf der Website werden
            technisch notwendige Daten verarbeitet, damit die Seite ausgeliefert und gesichert werden
            kann. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
            URL, Referrer-URL, Browsertyp, Betriebssystem und technische Statusinformationen gehören.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in
            der sicheren, stabilen und effizienten Bereitstellung der Website. Soweit Vercel als
            Dienstleister eingesetzt wird, erfolgt die Verarbeitung auf Grundlage eines Vertrags zur
            Auftragsverarbeitung und geeigneter Garantien für etwaige Drittlandübermittlungen.
          </p>

          <h2>3. Kontaktaufnahme und Kontaktformular</h2>
          <p>
            Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, verarbeiten wir die
            von Ihnen angegebenen Daten, insbesondere Name, E-Mail-Adresse und Nachrichtentext, um
            Ihre Anfrage zu bearbeiten.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf vorvertragliche
            Maßnahmen oder einen Vertrag gerichtet ist. In allen übrigen Fällen ist Rechtsgrundlage
            Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der Beantwortung Ihrer
            Anfrage und der Kommunikation mit Interessenten und Geschäftspartnern.
          </p>

          <h2>4. E-Mail-Versand über Resend</h2>
          <p>
            Für den Versand von Nachrichten aus dem Kontaktformular ist die Nutzung von Resend, Inc.
            als E-Mail-Dienstleister vorgesehen. Dabei werden die für den Versand erforderlichen
            Kontakt- und Inhaltsdaten an Resend übermittelt. Resend verarbeitet diese Daten als
            Dienstleister, soweit dies für die Zustellung und technische Absicherung des Mailversands
            erforderlich ist.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der
            zuverlässigen Zustellung eingehender Kontaktanfragen. Soweit Daten in ein Drittland
            übermittelt werden, erfolgt dies auf Grundlage geeigneter Garantien, insbesondere
            Standardvertragsklauseln, sofern erforderlich.
          </p>

          <h2>5. Cookies, Analyse und Tracking</h2>
          <p>
            Diese Website setzt keine Analyse- oder Marketing-Cookies ein und verwendet kein
            Trackingpixel. Technisch notwendige Speicherungen können nur dann erfolgen, wenn sie für
            den Betrieb der Website oder die Sicherheit der Anfrage erforderlich sind.
          </p>

          <h2>6. Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies für die genannten Zwecke
            erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Kontaktanfragen werden
            gelöscht, sobald sie abschließend bearbeitet sind und keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen folgende Rechte:</p>
          <ul>
            <li>Auskunft über die Verarbeitung Ihrer personenbezogenen Daten,</li>
            <li>Berichtigung unrichtiger Daten,</li>
            <li>Löschung oder Einschränkung der Verarbeitung,</li>
            <li>Datenübertragbarkeit,</li>
            <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen,</li>
            <li>Beschwerde bei einer Datenschutzaufsichtsbehörde.</li>
          </ul>
          <p>
            Für Unternehmen mit Sitz in Bayern ist regelmäßig das Bayerische Landesamt für
            Datenschutzaufsicht zuständig:{" "}
            <a href="https://www.lda.bayern.de/" rel="noreferrer">
              www.lda.bayern.de
            </a>
          </p>

          <h2>8. Keine automatisierte Entscheidungsfindung</h2>
          <p>
            Eine automatisierte Entscheidungsfindung einschließlich Profiling findet auf dieser
            Website nicht statt.
          </p>

          <p>Stand: 3. Juni 2026</p>
        </article>
      </div>
    </main>
  );
}
