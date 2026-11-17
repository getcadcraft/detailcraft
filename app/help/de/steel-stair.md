---
title: Stahltreppen-Generator
summary: Eine Stahltreppe aus der Geschosshöhe, dem Lauf und der Breite: Steighöhe und Auftritt nach einem Regelsatz Ihrer Wahl, Podeste, Geländer und Geländerstäbe, Werkstattzeichnungen und eine Zuschnittsliste mit Gewichten.
keywords: Stahltreppe, Treppengenerator, Wange, Trittstufe, Riffelblech, Gitterrost, Abkantwanne, Podest, Handlauf, Geländerstäbe, Steighöhe, Auftritt, osha, ibc, approved document k, Zuschnittsliste, Gewichte, Werkstattzeichnung
from: a4f0a985
---

Der Treppengenerator erstellt eine ganze Stahltreppe aus wenigen Zahlen: die Wangen, die Trittstufen, Podeste, wenn der Lauf zu hoch ist, Handläufe mit Pfosten und Geländerstäben, die Befestigungslöcher in den Wangen, eine Zuschnittsliste mit Gewichten und die Werkstattzeichnungen. Er beginnt im Werkzeug {{ui:Stair}} wie die einfache Treppe (siehe Treppen), mit einem zusätzlichen Schalter.

## Stahltreppe platzieren

1. Wählen Sie {{ui:Stair}} in der Gruppe {{ui:Place}} oder drücken Sie {{key:S}}.
2. Setzen Sie rechts den Haken bei {{ui:Use the steel stair generator}}.
3. Wählen Sie den **Regelsatz** für den Ort, an dem die Treppe gebaut wird, die **Steighöhe** (Fußboden bis Fußboden; 0 = bis zur nächsten Ebene), den **verfügbaren Lauf** (0 = der Regel überlassen), die **lichte Breite** und den **Trittstufentyp**: Riffelblech, Gitterrost oder Abkantwanne.
4. Stellen Sie das Wangenprofil, die Podeste (nach Regel oder als Zahl), die Handläufe (beidseitig, einseitig, keine), die Geländerhöhe und den Abstand der Geländerstäbe ein.
5. Klicken Sie auf einen Rasterschnittpunkt: Das ist der Fuß der ersten Setzstufe.

Wählen Sie die Treppe (klicken Sie auf eine Wange, eine Trittstufe oder ein Geländer), um eine Einstellung zu ändern. Die Eigenschaften zeigen Setzstufen, Auftritt, Neigung, Läufe und Podeste, den enthaltenen Stahl, die Zuschnittsliste und die Quellen des Regelsatzes.

## Die Regelsätze

Der Regelsatz begrenzt die Form der Treppe: die Steighöhe und den Auftritt, 2 × Setzstufe + Auftritt, die Neigung, das Podest, die Geländerhöhe und die größte Öffnung. DetailCraft bietet die folgenden an; die Region ist eine Einstellung, keine Vermutung. Öffnen Sie **Woher die Zahlen dieses Regelsatzes stammen** in den Eigenschaften: Jede Zahl nennt ihre Quelle und sagt, wie gut sie geprüft wurde.

- **International Building Code 2021**: Setzstufe 4 bis 7 in., Trittstufe mindestens 11 in., Geländer 34 bis 38 in. Der Grenzwert von 12 ft zwischen Podesten wird als *nicht gelesen* angezeigt, und die Geländerwerte gelten als aus Merkblättern gelesen, die die Vorschrift zitieren. Bestätigen Sie sie, bevor Sie sich darauf verlassen.
- **OSHA 29 CFR 1910.25 und 1910.29** (industrielle Standardtreppen): 30° bis 50°, Setzstufe höchstens 9.5 in., Trittstufe mindestens 9.5 in., mindestens 22 in. breit, Podeste so breit wie die Treppe und 30 in. tief, ein oberer Handlauf als Handlauf 36 bis 38 in. Diese Werte wurden in der Vorschrift selbst gelesen.
- **Approved Document K 2013, England** (allgemeine Zugangs- und Nebentreppen): die Bereiche für Steighöhe und Auftritt sowie 2 × Setzstufe + Auftritt von 550 bis 700 mm, gelesen im Regierungsbericht, der sie tabelliert. Das Dokument gibt DetailCraft keine Geländerhöhe, daher wird die von Ihnen eingestellte Höhe verwendet, und die Liste der Probleme sagt das.

Ein Regelsatz, der hier nicht aufgeführt ist, wird nicht geraten: Die Treppe folgt dann der einfachen Komfortregel von 600 bis 650 mm und meldet, dass sie keine Regel hat.

## Was er berechnet

- **Setzstufen und Auftritt.** Die wenigsten Setzstufen, deren 2 × Setzstufe + Auftritt in der Mitte des Bereichs der Regel liegt, ohne dass der Auftritt unter das Mindestmaß der Regel fällt. Bei vorgegebenem Lauf ist der Auftritt der Lauf geteilt durch die Trittstufen, und alles außerhalb der Regel wird gemeldet.
- **Läufe und Podeste.** Ein Lauf, der höher ist, als die Regel erlaubt, wird mit einem Podest geteilt, das so breit wie die Treppe und nicht schmaler als das Mindestmaß der Regel ist; Sie können auch Podeste anfordern. Ein Podest ist ein Rahmen aus zwei Seitenträgern und zwei Querwinkeln unter einer Abdeckung, auf zwei Pfosten.
- **Trittstufen.** Riffelblech ist eine geschweißte Platte (standardmäßig 6 mm; das Muster wird nicht zum Gewicht gerechnet). Eine Abkantwanne hat eine Umkantung an der Stufenvorderkante und wird durch den Wangensteg verschraubt: zwei Löcher, 2 mm größer als die Schraube, bei 0.3 und 0.7 der Tiefe. Gitterrost wird als Platte gleichen Gewichts gezeichnet (Tragstabtiefe × Dicke ÷ Teilung). Die Querstäbe und Bandagen werden nicht gezählt, und die Zuschnittsliste sagt das.
- **Geländer.** Ein Rohr-Obergurt auf Pfosten entlang jedes Laufs und jedes Podests; ein Geländerstababstand, durch den keine Kugel passt, die größer als die Öffnung der Regel ist (standardmäßig höchstens 100 mm).

## Zeichnungen, Zuschnittsliste, Export

- Der Lauf ist eine Baugruppe; die Geländer sind eine andere (beide Seiten sind dieselbe Baugruppe, zweimal gefertigt). Jede hat ihre Baugruppenzeichnung, und die Zeichnung der Wange zeigt ihre Löcher.
- Das **Treppenblatt** (ST-…) zeigt die Wange jedes Laufs gerade, mit den Lochpositionen ab dem unteren Ende beschriftet, und das Detail der Trittstufe: Schnitt, Stufenvorderkante, Umkantung und den Endflansch mit seinen Löchern.
- {{ui:Cut list and weights}} in den Eigenschaften listet jeden Querschnitt und jede Länge mit Mengen und Kilogramm; {{ui:Download the cut list (CSV)}} speichert sie.
- Alles geht als gewöhnliche Teile in die Stückliste, die NC-Dateien und IFC (IfcMember, IfcColumn, IfcPlate).

## Gut zu wissen

- Dies ist ein Ausgangspunkt, keine Bemessung. Nichts wird auf Festigkeit oder Durchbiegung geprüft; der Regelsatz begrenzt nur die Form.
- Wangenenden an den Geschossen werden rechtwinklig geschnitten und nicht detailliert. Podeststützen stehen auf dem Boden des Geschosses darunter und haben keine Fußplatten.
- Die Platzierung der Treppe als ein Element in BimCraft ist noch nicht verbunden.
