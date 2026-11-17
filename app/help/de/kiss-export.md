---
title: KISS-Datei für Fertigungssoftware exportieren
summary: Senden Sie die Stückliste als KISS-1.1-Datei an ein Programm für das Fertigungsmanagement (MIS): Baugruppen, Teile, Phasen als Abfolgen, Bohrungen, Ausklinkungen und Schweißnähte.
keywords: kiss, kss, mis, Fertigungsmanagement, Produktionssteuerung, Kalkulation, Stückliste, BOM, Export, Fabtrol, Abfolge
from: 30cf3951
---

Wählen Sie in der Gruppe {{ui:Ausgabe}} die Option {{ui:Mehr}} und dann {{ui:KISS-Datei für Fertigungssoftware}}. DetailCraft lädt `<name>.kss` herunter, eine KISS-Datei („Keep It Simple, Steel“, Version 1.1), das einfache Textformat, aus dem die meisten Programme für das Fertigungsmanagement ihre Stückliste importieren.

## Was enthalten ist

- Der Kopf: eine Auftragsnummer (die ersten acht Buchstaben und Ziffern des Modellnamens), der Modellname, Datum und Uhrzeit sowie ob die Maße metrisch sind.
- Für jede Baugruppen-Positionsnummer: ihr Hauptteil (Menge = wie viele von der Baugruppe), eine Zeichnungszeile (A-B1 und so weiter, die Nummer der Baugruppenzeichnung), eine Baugruppenzeile (Name, Typ, Gewicht, Gesamtlänge, Tiefe und Breite), je eine Abfolgezeile für jede [Phase](topic:phases), in der die Baugruppe liegt, sowie Arbeitszeilen: Bohrungen (wie viele, Durchmesser, Dicke durch), Ausklinkungen und Schweißnähte.
- Dann jedes Teil, das daran hängt, mit der **Gesamt**menge (je Baugruppe × Baugruppen), wie es der Standard verlangt.
- Lose Schrauben und Ankerstangen auf Zeichnung BOLTS, Baugruppe FIELD.
- Jede Zeile gibt den Typ (W, C, L, HSS, PL oder MI für ein eigenes Profil), die Größe, die Stahlgüte, die Schnittlänge in Millimetern, den Teilnamen und das Gewicht an.

## Zoll oder metrisch

In den [DetailCraft-Einstellungen](topic:settings) wählt **KISS-Dateigrößen**:

- **Automatisch** (Start): Zoll, wenn jedes Bauteil ein AISC-Profil ist, sonst metrisch.
- **Zoll**: Profile nach ihrer AISC-Bezeichnung (W 16X26, HSS 4X4X.250); Bleche und Schrauben, die DetailCraft in Millimetern führt, auf die nächsten 1/16 in; Gewichte in Pfund.
- **Metrisch**: europäische Profile nach ihrem Namen (IPE300), Bleche als Dicke × Breite in Millimetern; Gewichte in Kilogramm.

Längen sind unabhängig von der Einstellung immer in Millimetern mit zwei Nachkommastellen: Der KISS-Standard verlangt das, und das empfangende Programm rechnet sie um.

:::note
Stahlgüten werden auf die acht Zeichen des Standards gekürzt: A572 Gr 50 wird zu A572-50. Kommas in Namen werden zu Leerzeichen, denn das Format kennt kein Quoting. Prüfen Sie einen Import in Ihrem Programm, bevor Sie sich darauf verlassen: DetailCraft-KISS-Dateien werden hier gegen den Standard geprüft, noch nicht in einem Fertigungsprogramm.
:::
