---
title: NC-Datei-Felder
summary: Was DetailCraft in jeder DSTV-NC-Datei Feld für Feld schreibt und wie Seiten und Koordinaten gemessen werden.
keywords: nc1, DSTV, NC-Datei, ST-Block, AK, BO, Kopfzeile, Seiten, Koordinaten, CNC, Format
from: 1b676fc1
---

Jede `.nc1`-Datei beschreibt eine Positionsnummer. Zeilen enden mit CR LF. Textfelder enthalten reines ASCII; andere Zeichen werden zu "?". Die zweite Zeile ist ein Kommentar, `** DetailCraft <mark>.nc1`.

## Kopfzeile (ST)

| Feld | I-Profil, U-Profil | Winkel | Rechteck-Hohlprofil | Rund-Hohlprofil | Blech |
|---|---|---|---|---|---|
| Auftrag | Der Modellname | ← | ← | ← | ← |
| Zeichnung, Teil | Positionsnummer | ← | ← | ← | ← |
| Phase | Die Phase des Teils, oder 1 | ← | ← | ← | ← |
| Stahlgüte | Die Werkstoffgüte | ← | ← | ← | ← |
| Menge | Anzahl der Teile mit dieser Positionsnummer | ← | ← | ← | ← |
| Profil | Der Profilname, zum Beispiel W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profilcode | I oder U (U-Profil) | L | M | RO | B |
| Länge | Zuschnittlänge | ← | ← | ← | Länge |
| Höhe | Tiefe d | Schenkel | Höhe | Durchmesser | Blechbreite |
| Flanschbreite | bf | Schenkel | Breite | Durchmesser | 0 |
| Flanschdicke | tf | t | Wanddicke t | Wanddicke t | 0 |
| Stegdicke | tw | t | Wanddicke t | Wanddicke t | Blechdicke |
| Radius | Ausrundungsradius (0 bei AISC-U-Profilen) | 0 | Außenradius der Ecke | 0 | 0 |
| Gewicht je Meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Anstrichfläche je Meter | Außenumfang, m²/m | ← | ← | ← | 2 (beide Seiten, m²/m²) |
| Sägewinkel (4 Felder) | 0 (rechtwinklig) | ← | ← | ← | ← |
| Textfelder (4) | `-` | ← | ← | ← | ← |

Bleche folgen der Spalte der Norm „für Bleche“. Die Norm hat keine Spalte für Rundrohre: DetailCraft schreibt den Durchmesser sowohl als Höhe als auch als Flanschbreite und die Wand als beide Dicken.

## Außenkonturen (AK)

- **I-Profile und U-Profile:** der Steg (v), mit einer rechteckigen Ausklinkung für jede Ausklinkung; jeder Flansch (o und u), an einem Ende gekürzt, wo eine Ausklinkung mindestens so tief ist wie der Flansch.
- **Rechteck-Hohlprofile:** beide Seitenwände (v und h), für Ausklinkungen eingeschnitten, sowie die obere und die untere Wand (o und u).
- **Winkel:** ein Rechteck je Schenkel (v und u). Ausklinkungen an Winkeln werden nicht geschrieben: Ein solches Teil wird als nicht geschrieben aufgeführt. Eine Winkel-Aussteifung, die an einem [Knotenblech](topic:brace-gussets) verschraubt ist, hat ihre Löcher am verschraubten Schenkel: v für den Schenkel entlang u des Teils, u für den Schenkel entlang seines v.
- **Rund-Hohlprofile:** ein Rechteck auf v, das Rohr von vorn gesehen (Länge × Durchmesser).
- **Bleche:** ein Rechteck auf Seite v.

Jede Kontur ist geschlossen (der erste Punkt wird am Ende wiederholt) und verläuft gegen den Uhrzeigersinn.

## Löcher (BO)

Eine Zeile je Loch: Seite, x, y, Durchmesser, Tiefe 0 (durchgehend). Alle Löcher sind enthalten, die, die Sie eingegeben haben, und die, die Verbindungen erzeugen. Ein Loch durch die Seitenwände eines Rechteck-Hohlprofils wird zweimal geschrieben, einmal auf v und einmal auf h.

## Seiten und Koordinaten

Jedes Profil wird so platziert, wie die Profil-Positionsfigur der Norm es zeichnet (DSTV 1998, S. 7): x entlang des Teils, Y quer, Z nach oben von der hinteren Seite, mit dem Nullpunkt an der äußeren Ecke. DetailCraft spiegelt ein Teil nie, um es an die Figur anzupassen.

| Seite | I-Profil | U-Profil | Winkel | Rechteck-Hohlprofil | Blech |
|---|---|---|---|---|---|
| v | Steg, vorn | Steg, von der Seite der Flanschenden gesehen | Der Schenkel entlang u des Teils | Seitenwand bei −u | Die Blechfläche |
| h | | | | Seitenwand bei +u | |
| o | Oberer Flansch | **Unterer** Flansch | | Obere Wand | |
| u | Unterer Flansch | **Oberer** Flansch | Der Schenkel entlang v des Teils | Untere Wand | |

- **x** verläuft entlang des Teils ab seinem Schnittanfang.
- **I-Profile und Rechteck-Hohlprofile:** y am Steg oder an den Seitenwänden von der Unterseite des Profils; y an einem Flansch oder an der oberen und unteren Wand von dessen Kante auf der hinteren Seite (der +u-Seite des Teils).
- **U-Profile** liegen auf dem Rücken mit den Flanschenden nach oben, wie in der Figur der Norm. Daher läuft y am Steg von der Außenseite des oberen Flansches nach unten, der obere Flansch ist Seite u und der untere Flansch Seite o, und y an einem Flansch läuft von der Rückseite des Stegs zum Flanschende.
- **Winkel:** y an jedem Schenkel von der Ferse.
- **Bleche:** y von der Kante −u des Blechs.

Prüfen Sie vor dem Schneiden, wie Ihre Maschinensoftware die Seiten von U-Profilen liest: Manche Programme drehen U-Profile anders herum.

## Nicht geschrieben

Fasen, Innenkonturen, Markierungen (SI), andere Sägewinkel als rechtwinklig, Langlöcher, Löcher in Rundrohren (DetailCraft hat keine) sowie Ausklinkungen an Winkeln und Rundrohren.
