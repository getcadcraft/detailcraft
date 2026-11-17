---
title: NC-Dateien an die Werkstatt senden
summary: DSTV-NC-Dateien für jede Positionsnummer exportieren (I-Profile, U-Profile, Winkel, Hohlprofile, Bleche), als ZIP-Datei zusammenfassen und vor der Übergabe an eine Maschine prüfen.
keywords: NC, NC1, DSTV, CNC, Maschine, Trägerlinie, Bohrlinie, Blechzuschnitt, Export, Fertigung, ZIP
from: 598b6091
---

DetailCraft schreibt für jede Positionsnummer eine DSTV-NC-Datei (`.nc1`), für I-Profile, U-Profile, Winkel, Rechteck- und Rund-Hohlprofile sowie Bleche, und fasst sie in einer ZIP-Datei zusammen. Trägerlinien und Blechmaschinen lesen diese Dateien zum Sägen, Bohren und Schneiden.

## Export

1. Leeren Sie zuerst die Registerkarte {{ui:Probleme}}: Eine Verbindung, die nicht erstellt werden konnte, fügt keine Löcher hinzu.
2. Speichern Sie das Modell ({{key:Mod+S}}), damit die NC-Dateien zu einem gespeicherten Modell passen.
3. Wählen Sie {{ui:NC-Dateien}} in der Gruppe {{ui:Ausgabe}}.
4. Der Browser lädt `<name> NC.zip` herunter. Die Statusleiste zeigt an, wie viele Dateien enthalten sind, und listet alle Marken auf, für die keine Datei geschrieben wurde (ein Winkel oder ein Rundrohr mit Ausklinkung).

In der ZIP-Datei ist jede Datei nach ihrer Positionsnummer benannt: `b1.nc1`, `c1.nc1`, `p1.nc1` … Die ZIP-Datei ist nicht komprimiert und lässt sich mit jedem ZIP-Programm öffnen.

Wenn das Modell keine Bauteile hat, zeigt die Statusleiste das an.

## Inhalt jeder Datei

- **Kopfzeile (ST):** der Modellname als Auftrag, die Positionsnummer als Zeichnung und Teil, Phase 1, die Werkstoffgüte, die Menge, das Profil und seine Abmessungen, Masse je Meter und Anstrichfläche je Meter. Sägeschnitte sind rechtwinklig.
- **Außenkonturen (AK):** der Steg mit allen Ausklinkungen, und jeder Flansch, der an einem Ende gekürzt ist, wo eine Ausklinkung ihn entfernt.
- **Löcher (BO):** jedes Loch mit Seite, Position und Durchmesser, einschließlich der Löcher von Stirnplatten und Fußplatten.

Feld für Feld, mit den Regeln für Seiten und Koordinaten: [NC-Datei-Felder](topic:nc1-fields).

## Was nicht geschrieben wird

- Winkel und Rundrohre mit Ausklinkung: keine NC-Datei. Ihre Positionsnummern stehen in der Statusleiste.
- Löcher in Rundrohren (DetailCraft erstellt keine).
- Fasen, Innenkonturen, Teilemarkierungen (Anreißen) und andere Sägewinkel als rechtwinklig.
- Langlöcher (DetailCraft kennt nur runde Löcher).

## Vor der Bearbeitung prüfen

Die NC-Dateien von DetailCraft werden von der eigenen Testsuite zurückgelesen, sie wurden aber nicht auf den Maschinen Ihrer Werkstatt ausgeführt.

1. Öffnen Sie die Dateien im NC-Viewer Ihrer Werkstatt oder in der Maschinensoftware und vergleichen Sie sie mit den Werkstattzeichnungen.
2. Prüfen Sie ein Teil jeder Art an der Maschine, bevor Sie eine Serie starten.
3. Prüfen Sie, wie Ihre Software die y-Koordinaten der Flansche und die Seiten von U-Profilen liest: DetailCraft misst das y eines Flansches ab der Rückseite und legt U-Profile auf den Rücken, wie die Norm sie zeichnet (siehe [NC-Datei-Felder](topic:nc1-fields#faces-and-coordinates)).
