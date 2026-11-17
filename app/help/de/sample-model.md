---
title: Den Beispielrahmen erkunden
summary: Den integrierten zweifeldrigen Rahmen öffnen und damit lernen, was DetailCraft erzeugt, von den Positionsnummern bis zu den NC-Dateien.
keywords: Beispiel, Muster, Demo, Rahmen, lernen, Rundgang, testen
from: 5c5944dd
---

Der Beispielrahmen ist ein kleines, vollständiges Modell: Jede Art von Objekt, die DetailCraft erzeugt, kommt mindestens einmal vor. Es ist der schnellste Weg, die App kennenzulernen und einen Export zu testen, bevor Sie sich darauf verlassen.

## Öffnen

1. Wählen Sie {{ui:Beispiel}} in der Gruppe {{ui:Datei}}.
2. Haben Sie an Ihrem aktuellen Modell nicht gespeicherte Änderungen, wählen Sie {{ui:Zuerst speichern}} oder {{ui:Änderungen verwerfen}}.
3. Die Statusleiste zeigt „Beispielrahmen: 6 Stützen mit Fußplatten, 4 Träger mit Kopfplatten, eine Aussteifung, 7 Fundamente mit Bewehrung.“

Das Beispiel öffnet sich als neues Modell namens „Beispielrahmen“. Es ändert sonst nichts, und es gibt nichts zurückzunehmen.

## Inhalt

- **Raster** 1, 2, 3 bei 6000 mm und A, B bei 7000 mm. **Ebenen**: Ebene 1 bei 0 und Ebene 2 bei 4000.
- **Sechs Stützen**, W12x50, von Ebene 1 bis Ebene 2 an jedem Schnittpunkt, jede auf einer 25-mm-Fußplatte mit vier Ankerstangen.
- **Vier Träger**, W16x26, auf Ebene 2 entlang der Rasterlinien A und B, Stahloberkante auf der Ebene, mit einer bündig verschraubten Kopfplatte an beiden Enden (insgesamt acht).
- **Eine Aussteifung**, HSS4x4x1/4, von A/1 auf Ebene 1 bis A/2 auf Ebene 2.
- **Sechs Einzelfundamente**, 2000 x 2000 x 600, je eines unter jeder Stütze, mit einer unteren Matte mit Haken in beide Richtungen.
- **Ein weiteres Fundament** neben dem Rahmen, 2400 x 1800 x 600, mit sechs gehakten Anschlussstäben, die für einen Betonpfeiler nach oben stehen.

## Zum Ausprobieren

1. Klicken Sie auf einen Träger. Lesen Sie seine {{ui:Positionsnr.}}, {{ui:Baugruppe}}, {{ui:Zuschnittlänge}} und {{ui:Zurückgeschnitten}}: Die Zuschnittlänge ist kürzer als der Rasterabstand von 6000 mm, weil jede Kopfplatte den Träger um die halbe Stützentiefe plus die Blechdicke zurückschneidet.
2. Klicken Sie auf eine Stütze. Unter {{ui:Bohrungen}} sind die Löcher aufgeführt, die die Kopfplatten in ihrem Flansch erzeugt haben („8 Bohrungen aus Verbindungen“; die mittleren Stützen haben 16, je einen Satz in jedem Flansch).
3. Sehen Sie in der Liste {{ui:Positionsnummern}} links, dass alle vier Träger eine Positionsnummer teilen: Es ist dasselbe Stahlteil. Auch die Eckstützen teilen sich eine Positionsnummer, obwohl ihre Löcher in entgegengesetzte Richtungen zeigen, denn eine um 180° gedrehte Stütze ist dasselbe Teil. Die mittleren Stützen mit Löchern in beiden Flanschen erhalten eine andere Positionsnummer.
4. Klicken Sie auf eine Kopfplatte (oder eine ihrer Schrauben). Der Bereich {{ui:Eigenschaften}} zeigt die Einstellungen von Blech, Schraube und Schweißnaht, die Schrauben, die sie erzeugt (mit ihrer aus der Klemmlänge berechneten Länge), und alle Warnungen zum Randabstand.
5. Öffnen Sie die Registerkarte {{ui:Stückliste}}. Teile, Baugruppen (ein Träger mit seinen beiden Kopfplatten ist eine Baugruppe) sowie Schrauben und Ankerstangen sind mit Gewichten aufgeführt. Sie sollten sechs Positionsnummern sehen: c1 (die beiden mittleren Stützen) und c2 (die vier Eckstützen), beide W12x50 bei 3975 mm; b1, vier Träger W16x26 bei 5650 mm; br1, die Aussteifung; p1, acht Kopfplatten PL20x180; und p2, sechs Fußplatten PL25x400. Die Verbindungsmittel sind 64 Schrauben 20 x 70 A325 und 24 Ankerstangen 20 x 575.
6. Öffnen Sie die Registerkarte {{ui:Biegeliste}}. Die sechs gleichen Fundamente teilen sich Positionsnummern der Stäbe; das Pfeilerfundament fügt seine eigenen hinzu.
7. Klicken Sie auf die Aussteifung und sehen Sie sich die Gruppe {{ui:Ausgabe}} an: {{ui:Werkstattzeichnung}} ist ausgegraut, weil Werkstattzeichnungen bisher nur I-Profile und Bleche abdecken.
8. Wählen Sie {{ui:NC-Dateien}}. Das ZIP-Archiv enthält eine Datei für jede Positionsnummer eines I-Profils oder Blechs; die Statusleiste führt die Positionsnummer der Aussteifung als nicht geschrieben auf.
9. Wählen Sie {{ui:IFC}} und öffnen Sie die Datei in einem beliebigen IFC-Viewer, um zu prüfen, wie Ihre andere Software sie liest.

## Als Ausgangspunkt nutzen

Das Beispiel ist ein gewöhnliches Modell. Ändern Sie es, benennen Sie es dann im Feld {{ui:Name}} um und speichern Sie es unter dem neuen Namen mit {{key:Mod+S}}.
