# Toleo Website

Modernisierte Single-Page-Website für die Toleo GmbH, gebaut mit Next.js App Router,
React, Framer Motion und Resend.

## Struktur

- `app/page.tsx` ist bewusst nur die Seiten-Komposition.
- `components/sections/*` enthält die großen Onepager-Abschnitte.
- `components/site/*` enthält wiederverwendbare Site-Bausteine wie Header, Footer und Ticker.
- `components/motion/*` enthält Motion-Helfer.
- `components/legal/legal-shell.tsx` kapselt das Layout der rechtlichen Seiten.
- `lib/site-content.ts` enthält Navigation, Leistungsdaten, Projektlisten und Portfolio-Inhalte.
- `app/api/contact/route.ts` ist die serverseitige Resend-Route für das Kontaktformular.
- `app/globals.css` enthält globale Design Tokens, Layout-Styles und responsive Regeln.

## Design Tokens

Die Farbwelt ist aus dem Logo abgeleitet:

- Ink: `#181716`
- Blue: `#3060a8`
- Red: `#e00810`
- Paper: `#fffdfa`

Bei neuen Komponenten zuerst diese Tokens verwenden und bestehende Klassenmuster
weiterführen, statt neue Farbsysteme einzuführen.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die lokale Seite läuft standardmäßig auf `http://localhost:3000`.

## Build und Prüfung

```bash
npm run build
npm audit --omit=dev
```

## Kontaktformular

Für den Versand über Resend werden diese Environment Variables benötigt:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=info@toleo.biz
CONTACT_FROM_EMAIL=kontakt@toleo.biz
```

`CONTACT_FROM_EMAIL` muss bei Resend verifiziert sein. Ohne `RESEND_API_KEY` zeigt
das Formular bewusst eine Konfigurationsmeldung an.

## Rechtliche Seiten

- `/impressum`
- `/datenschutz`

Die Inhalte sind auf eine deutsche Website vorbereitet, sollten vor Livegang aber
juristisch final geprüft werden.
