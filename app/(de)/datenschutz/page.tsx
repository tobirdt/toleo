import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Toleo GmbH",
  description: "Datenschutzhinweise der Toleo GmbH gemäß Art. 13 DSGVO."
};

export default function DatenschutzPage() {
  return (
    <LegalShell>
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
        Ritter-Hilprand-Str. 9
        <br />
        82024 Taufkirchen
        <br />
        Deutschland
        <br />
        E-Mail: <a href="mailto:info@toleo.biz">info@toleo.biz</a>
      </p>

      <h2>2. Hosting und Server-Logdaten</h2>
      <p>
        Diese Website wird bei Vercel Inc. betrieben. Beim Aufruf der Website werden technisch
        notwendige Daten verarbeitet, damit die Seite ausgeliefert, geschützt und stabil betrieben
        werden kann. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
        aufgerufene URL, Referrer-URL, Browsertyp, Betriebssystem und technische
        Statusinformationen gehören.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der
        sicheren, stabilen und effizienten Bereitstellung der Website. Die Verarbeitung durch Vercel
        erfolgt auf Grundlage eines Vertrags zur Auftragsverarbeitung. Soweit Daten in ein Drittland
        übermittelt werden, erfolgt dies auf Grundlage geeigneter Garantien, insbesondere
        Standardvertragsklauseln.
      </p>

      <h2>3. Kontaktaufnahme und Kontaktformular</h2>
      <p>
        Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, verarbeiten wir die von
        Ihnen angegebenen Daten, insbesondere Name, E-Mail-Adresse und Nachrichtentext, um Ihre
        Anfrage zu bearbeiten. Pflichtfelder im Formular sind nur die Angaben, die wir für die
        Bearbeitung der Anfrage benötigen. Weitere Angaben erfolgen freiwillig.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf vorvertragliche
        Maßnahmen oder einen Vertrag gerichtet ist. In allen übrigen Fällen ist Rechtsgrundlage Art.
        6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der Beantwortung Ihrer Anfrage
        und der Kommunikation mit Interessenten und Geschäftspartnern.
      </p>

      <h2>4. E-Mail-Versand über Resend</h2>
      <p>
        Für die Zustellung von Nachrichten aus dem Kontaktformular setzen wir Resend, Inc. als
        E-Mail-Dienstleister ein. Dabei werden die für den Versand erforderlichen Kontakt- und
        Inhaltsdaten an Resend übermittelt. Resend verarbeitet diese Daten als Dienstleister, soweit
        dies für die Zustellung und technische Absicherung des Mailversands erforderlich ist.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der
        zuverlässigen Zustellung eingehender Kontaktanfragen. Die Verarbeitung erfolgt auf Grundlage
        eines Vertrags zur Auftragsverarbeitung. Soweit Daten in ein Drittland übermittelt werden,
        erfolgt dies auf Grundlage geeigneter Garantien, insbesondere Standardvertragsklauseln.
      </p>

      <h2>5. Cookies, Analyse und Tracking</h2>
      <p>
        Diese Website setzt keine Analyse- oder Marketing-Cookies ein und verwendet kein
        Trackingpixel. Soweit technisch notwendige Cookies oder vergleichbare Technologien für den
        Betrieb der Website oder die Sicherheit der Anfrage erforderlich sind, erfolgt dies auf
        Grundlage von § 25 Abs. 2 Nr. 2 TDDDG.
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
        Eine automatisierte Entscheidungsfindung einschließlich Profiling findet auf dieser Website
        nicht statt.
      </p>

      <p>Stand: 5. Juni 2026</p>
    </LegalShell>
  );
}
