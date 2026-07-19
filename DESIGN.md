---
name: Toleo Website
description: Strategische Markenpräsenz für Beratung und Beteiligungen
colors:
  ink: "#181716"
  ink-mid: "#3a3835"
  muted: "#6b6966"
  soft: "#a3a09e"
  surface: "#ffffff"
  brand-blue: "#3060a8"
  brand-blue-soft: "#edf3ff"
  brand-red: "#e00810"
  brand-red-soft: "#fff1f2"
typography:
  display:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.8rem, 5.4vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 1.2rem + 2vw, 2.7rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  sm: "8px"
  md: "12px"
  pill: "999px"
spacing:
  stack-sm: "16px"
  stack-md: "24px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "48px"
  glass-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px 8px 14px"
    height: "60px"
---

# Design System: Toleo Website

## Overview

**Creative North Star: "The Strategic Signature"**

Die Toleo-Website wirkt wie eine präzise persönliche Unterschrift: charakteristisch, kontrolliert und unverwechselbar. Großzügige weiße Flächen, eine asymmetrische Komposition und die klare Inter-/Fraunces-Hierarchie schaffen Ruhe; die blauen und roten Markensignale setzen gezielte Akzente. Inhaltsseiten übernehmen diese Präsenz, bleiben aber lesefokussiert und verzichten auf lange gepinnte Inszenierungen.

Das System ist strategisch, souverän und diskret. Es lehnt generische, kartenlastige Corporate-Templates, laute Startup-Gradienten, Dashboard- oder SaaS-Ästhetik und Profilseiten im Stil sozialer Netzwerke ausdrücklich ab.

**Key Characteristics:**

- Weißer Grund mit gezielter blau-roter Aurora
- Fraunces für charaktervolle Überschriften, Inter für präzise Information
- Glas-Header als einzige dauerhaft schwebende Oberfläche
- Linien, Markenpunkte und Nummern statt austauschbarer Kartenraster
- Ruhige Inhaltsseiten mit initial sichtbaren Inhalten und klarer Querverlinkung

## Colors

Die Palette verbindet seriöses Schwarz und klares Weiß mit einem kontrollierten blauen und roten Markendialog.

### Primary

- **Toleo Blue:** Strategische Führung, Links, aktive Zustände und der erste Markenpunkt.
- **Toleo Red:** Abschlusszeichen, Kontrapunkt und der zweite Markenpunkt.

### Secondary

- **Blue Soft:** Ruhiger Hover- und Fokusgrund für helle Oberflächen.
- **Red Soft:** Sparsame atmosphärische Flächen und warme Gegenakzente.

### Neutral

- **Toleo Ink:** Überschriften, Hauptaktionen und dunkle Kapitel.
- **Ink Mid:** Einleitungen und hervorgehobene Fließtexte.
- **Muted:** Fließtext und sekundäre Information auf Weiß.
- **Soft:** Nummern, Trennsignale und untergeordnete Metadaten.
- **Surface:** Der verbindliche Dokument- und Komponentenuntergrund.

### Named Rules

**The Two-Dot Rule.** Blau und Rot treten gemeinsam als Markenabschluss auf; einzelne Akzentfarben dürfen funktional führen, aber nie dekorativ konkurrieren.

**The White-Ground Rule.** Inhaltsseiten stehen auf echtem Weiß. Papier-, Beige- oder Cremegründe sind für die Markenwebsite verboten.

## Typography

**Display Font:** Fraunces (with Georgia and Times New Roman fallback)
**Body Font:** Inter (with system-ui fallback)

**Character:** Fraunces verleiht strategischen Aussagen eine persönliche, kultivierte Stimme. Inter hält Navigation, Fakten und lange Inhalte präzise und unaufgeregt.

### Hierarchy

- **Display** (600, fluid bis 4.5rem, 1.04): H1 und prägende Aussagen; immer ausbalanciert und ohne enge Buchstabenabstände.
- **Headline** (500, fluid bis 2.7rem, 1.12): H2 und Kapitelüberschriften, häufig mit blauem oder rotem Schlusspunkt.
- **Title** (500–700, 1.05–1.3rem, 1.25): Leistungs- und Prozessbezeichnungen.
- **Body** (400, 1rem, 1.65): Fließtext mit maximal 65–75 Zeichen pro Zeile.
- **Label** (700, 0.72rem, 0.12em): Sparsam eingesetzte Kicker, Navigation und Faktenbezeichnungen.

### Named Rules

**The Visible-Content Rule.** Typografie ist im initialen HTML sichtbar; Motion darf Inhalt unterstützen, niemals freischalten.

## Elevation

Das System ist flach und tonal geschichtet. Tiefe entsteht durch Aurora, Linien, Überlagerung und einen einzigen leichten Schattenwortschatz. Der Glas-Header und echte Bildrahmen dürfen angehoben sein; redaktionelle Inhaltsblöcke bleiben flach.

### Shadow Vocabulary

- **Quiet:** Leichte Navigation- und Hoverhebung für kleine interaktive Flächen.
- **Raised:** Bildrahmen und der schwebende Header; niemals zusammen mit einem starken dekorativen Rahmen.

### Named Rules

**The Flat-by-Default Rule.** Keine Kombination aus dekorativer Outline und breitem Weichschatten auf Inhaltskarten.

## Components

### Buttons

- **Shape:** Kontrolliert gerundet (8px), mindestens 48px hoch.
- **Primary:** Toleo Ink auf Weiß; Hover wechselt zu Toleo Blue, Icon bewegt sich diagonal.
- **Hover / Focus:** 140–260ms mit ruhigem Ease-out; Fokus immer als deutlich sichtbare blaue Outline.
- **Secondary:** Weiße oder transparente Fläche mit feiner Linie; nie als generischer Outline-Knopf ohne Hierarchie.

### Cards / Containers

- **Corner Style:** Kleine bis mittlere Rundung (8–12px).
- **Background:** Surface oder dunkles Toleo Ink für ein bewusstes Kapitel.
- **Shadow Strategy:** Flach im Inhalt; Schatten nur für Header und Bildrahmen.
- **Border:** Haarlinien strukturieren Listen und Fakten.
- **Internal Padding:** 16–24px in kleinen Elementen, fluid 28–52px in Hauptflächen.

### Navigation

Der schwebende Glas-Header ist auf allen Marken- und SEO-Seiten identisch. Aktive Ziele werden durch Textkontrast und einen blauen Punkt markiert. Beim Scrollen legt sich hinter dem Header eine bis in die mobile Safe Area reichende Fokus-Linse über den Seiteninhalt: auf Mobilgeräten 28px Blur, reduzierte Sättigung und eine fast deckende weiße Statusleisten-Zone halten Uhrzeit, Browser-Chrome und Navigation klar vom vorbeiziehenden Inhalt getrennt; Desktop bleibt mit 18px zurückhaltender. Mobil öffnet ein kompaktes Overlay-Menü mit Escape-Schließen und Body-Lock. Der Sprachwechsel führt auf die äquivalente Route.

### Page Hero

Ein kompakter Hero verbindet Aurora, Breadcrumb, H1 und Lead mit einem seitenspezifischen Markenmotiv: Firmenfoto, animierte Toleo-Signatur oder das verbundene Leistungsspektrum.

### Process Line

Fünf nummerierte Phasen werden durch eine blau-rote Linie verbunden. Auf Inhaltsseiten ist die Linie statisch und vollständig sichtbar.

### Main-page Scrollytelling

Die Hauptseite nutzt auf Desktop gemessene, gepinnte Scroll-Stages mit 85–110svh aktiver Animationsstrecke. Einheitliche Haltephasen von 8 % am Anfang und 16 % am Ende erweitern die gesamte Zusatzstrecke auf rund 112–145svh, ohne die eigentliche Choreografie zu beschleunigen; die Dienstleistungs-Stage hält ihr vollständiges Abschlussbild gezielt 22 %. Das Portfolio übersetzt die reale horizontale Trackbreite mit einem Faktor von 2 in vertikalen Scrollweg und verwendet die regulären Haltephasen. Unter 1051px und bei `prefers-reduced-motion` bleiben alle Abschnitte statisch und sofort sichtbar.

### Mobile Chapter Motion

Bis 700px strukturiert ein weiches `scroll-snap: proximity` die Hauptseite in Kapitel, ohne längere Abschnitte festzuhalten. Die Kapitel bleiben normal hoch und vollständig responsiv; kurze Landscape-Viewports und `prefers-reduced-motion` schalten das Snapping ab. Kapitelüberschriften reagieren auf ihren Abschnitt, die tieferen Portfolio-Kacheln, Leistungszeilen, Projektspalten, Prozessschritte, Investitionspunkte und die Kontaktfläche jedoch jeweils auf ihr eigenes Sichtfeld. Dadurch bleibt die Choreografie auch in langen Abschnitten sichtbar. Text bleibt selbst im vorbereiteten Zustand lesbar; ohne JavaScript wird die unveränderte Endfassung ausgeliefert.

## Do's and Don'ts

### Do:

- **Do** echte Markenkomponenten und die gemeinsame Breite `--inner` verwenden.
- **Do** Blau und Rot als gezielte Blickführung, Schlusspunkt oder Verbindung einsetzen.
- **Do** Inhaltsseiten ohne Pinning und mit sofort sichtbarem HTML gestalten.
- **Do** Links mit klarer primärer oder sekundärer Hierarchie und Arrow-Up-Right-Icon auszeichnen.
- **Do** lange deutsche und englische Überschriften bei 360–1440px auf Umbruch und Überlauf prüfen.

### Don't:

- **Don't** generische, kartenlastige Corporate-Templates verwenden.
- **Don't** laute Startup-Gradienten und dekorative Effekte ohne inhaltliche Funktion einsetzen.
- **Don't** Dashboard- oder SaaS-Ästhetik auf redaktionelle Inhaltsseiten übertragen.
- **Don't** Profilseiten wie ein soziales Netzwerk oder einen externen Lebenslauf gestalten.
- **Don't** lange, gepinnte Scroll-Inszenierungen auf SEO-Unterseiten einsetzen.
- **Don't** Papier-, Beige- oder Cremeflächen als Dokumenthintergrund verwenden.
- **Don't** Inhalte durch Scroll-Reveals initial ausblenden.
