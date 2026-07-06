# Toleo Website

Modernisierte Single-Page-Website für die Toleo GmbH, gebaut mit Next.js App Router,
React, Framer Motion und Resend.

## Struktur

- `app/(de)/*` und `app/en/*` sind die beiden Sprach-Roots (eigene Root-Layouts,
  gemeinsame Komponenten). Es gibt bewusst kein `app/page.tsx` auf oberster Ebene.
- `components/site/localized-home.tsx` komponiert den Onepager pro Sprache.
- `components/sections/*` enthält die großen Onepager-Abschnitte.
- `components/site/*` enthält Site-Bausteine wie Header, Footer und ScrollManager.
- `components/motion/*` enthält Motion-Helfer (Reveal, ScrollProgress).
- `components/brand/*` enthält markennahe Komponenten wie das animierte Toleo-Logo.
- `components/legal/legal-shell.tsx` kapselt das Layout der rechtlichen Seiten.
- `lib/site-content.ts` enthält sämtliche Texte und Inhalte für DE und EN.
- `app/api/contact/route.ts` ist die serverseitige Resend-Route für das Kontaktformular.
- `app/globals.css` enthält globale Design Tokens, Layout-Styles und responsive Regeln.
- `app/sitemap.ts`, `app/robots.ts` und die `opengraph-image.tsx`-Dateien erzeugen
  Sitemap, robots.txt und Social-Preview-Bilder zur Build-Zeit.

## Design Tokens

Die Farbwelt ist aus dem Logo abgeleitet:

- Ink: `#181716`
- Blue: `#3060a8`
- Red: `#e00810`
- Paper: `#ffffff`

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
CONTACT_TO_EMAIL=hrumscheidt@toleo.biz
CONTACT_FROM_EMAIL=tickets@lws98.de
```

`CONTACT_FROM_EMAIL` muss bei Resend verifiziert sein. Ohne `RESEND_API_KEY` zeigt
das Formular bewusst eine Konfigurationsmeldung an.

## Rechtliche Seiten

- `/impressum` bzw. `/en/legal-notice`
- `/datenschutz` bzw. `/en/privacy`

Die Inhalte sind auf eine deutsche Website vorbereitet, sollten vor Livegang aber
juristisch final geprüft werden.
