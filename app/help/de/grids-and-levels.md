---
title: Raster und Ebenen einrichten
summary: Die Rasterlinien, ihre Abstände und die Ebenen eingeben, auf denen jeder Stab platziert wird.
keywords: Raster, Achsen, Rasterlinien, Ebenen, Höhenkoten, Geschosse, Decken, Abstand, Einrichtung
from: 9cad233c
---

Jeder Stab in DetailCraft wird auf einem Rasterschnittpunkt und auf einer Ebene platziert. Richten Sie zuerst die Raster und Ebenen ein; Sie können sie später ändern.

## So funktionieren Raster hier

- **Nummerierte Linien** verlaufen in eine Richtung, **Buchstabenlinien** in die andere. Die Namen sind nur Gewohnheit: Eine Bezeichnung kann jeder Text mit bis zu 8 Zeichen sein (1, 2, 3 oder A1, A2 oder 10, 20).
- Sie geben die Bezeichnungen und die Abstände dazwischen ein, nicht Koordinaten. Die erste Linie jeder Gruppe liegt bei 0.
- Nummerierte Linien sind Linien mit konstantem x; Buchstabenlinien sind Linien mit konstantem y. Ein Träger von Raster 1 zu Raster 2 verläuft also entlang x, ein Träger von A nach B entlang y.
- Alle Werte sind in Millimetern.

Ein neues Modell beginnt mit den nummerierten Linien 1 2 3 bei 6000 6000, den Buchstabenlinien A B bei 6000 und zwei Ebenen.

## Raster einrichten

1. Öffnen Sie im Bereich {{ui:Modell}} links bei Bedarf {{ui:Raster}}.
2. Geben Sie unter {{ui:Nummerierte Linien}} die Bezeichnungen, durch Leerzeichen getrennt, ein, zum Beispiel `1 2 3 4 5`.
3. Geben Sie im Feld {{ui:Abstände}} darunter für jeden Zwischenraum einen Abstand ein, zum Beispiel `6000 6000 7500 6000`. Vier Zwischenräume für fünf Linien.
4. Gehen Sie ebenso bei {{ui:Linien mit Buchstaben}} und dessen {{ui:Abstände}} vor, zum Beispiel `A B C` und `8000 8000`.
5. Wählen Sie {{ui:Raster übernehmen}}.

Die Statusleiste zeigt „Raster aktualisiert.“, und die Ansicht zoomt auf das neue Raster. Kommas funktionieren ebenfalls als Trennzeichen.

Wenn etwas nicht aufgeht, ändert sich nichts, und die Statusleiste nennt den Grund, zum Beispiel „Nummerierte Raster: Geben Sie einen Abstand zwischen jedem Linienpaar an (4).“ Weitere Prüfungen: Abstände müssen positive Millimeterwerte sein, Bezeichnungen müssen sich unterscheiden, und es sind höchstens 60 Linien in jede Richtung möglich.

:::note
Stäbe behalten ihre Koordinaten, wenn sich die Raster verschieben. Wenn Sie einen Abstand ändern, nachdem Stahl platziert wurde, bleibt der Stahl dort, wo er war, und liegt nicht mehr auf dem Raster. Ändern Sie zuerst das Raster oder verschieben Sie die Stäbe, indem Sie ihre Endkoordinaten bearbeiten.
:::

## Ebenen einrichten

1. Öffnen Sie {{ui:Ebenen}} im Bereich {{ui:Modell}}.
2. Jede Zeile hat einen Ebenennamen und ihre Höhe in Millimetern. Bearbeiten Sie sie nach Belieben.
3. Wählen Sie {{ui:Ebene hinzufügen}} für eine weitere Zeile. Sie heißt „Ebene 3“ (und so weiter) und wird 4000 mm über der höchsten Ebene platziert; ändern Sie beides, falls nötig.
4. Um eine Ebene zu entfernen, wählen Sie die Schaltfläche × am Ende ihrer Zeile.
5. Wählen Sie {{ui:Ebenen übernehmen}}.

Nichts ändert sich, bis Sie {{ui:Ebenen übernehmen}} wählen. Ebenen werden beim Übernehmen nach Höhe sortiert. Jede Ebene braucht einen Namen, zwei Ebenen dürfen keinen gemeinsamen Namen haben, und Sie müssen mindestens eine Ebene behalten.

Ebenen können unter null liegen (ein Untergeschoss bei `-3500`) und müssen nicht gleichmäßig verteilt sein.

## Verwendung der Ebenen

- Eine auf einer Ebene platzierte Stütze reicht bis zur nächsten Ebene oder bis zu der Ebene, die Sie unter {{ui:Bis}} wählen.
- Träger und Platten werden zwischen zwei Rasterschnittpunkten auf der Ebene platziert, auf der Sie klicken.
- Fundamente werden mit ihrer Oberkante auf der Ebene platziert, auf die Sie klicken.
- {{ui:Grundriss}} blickt jeweils auf eine Ebene hinab.
- Der IFC-Export erzeugt pro Ebene ein Gebäudegeschoss.

## Rückgängig

Raster- und Ebenenänderungen sind Bearbeitungen wie alle anderen: {{key:Mod+Z}} stellt das vorherige Raster wieder her.

## Weiter

[Stützen, Träger und Aussteifungen platzieren](topic:place-members)
