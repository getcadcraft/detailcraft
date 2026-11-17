---
title: Treppen
summary: Eine gerade Stahltreppe aus Steighöhe, Auftritt und Breite setzen: zwei Wangen und Trittplatten, eine geschweißte Baugruppe.
keywords: Treppe, Treppen, Treppenlauf, Wange, Trittstufe, Setzstufe, Auftritt, Lauf, Steighöhe, Stahltreppe, IBC 1011, Blondel
from: 62fa3845
---

Eine gerade Stahltreppe: zwei Wangen (U-Profile mit den Schenkeln nach innen oder Flachstähle hochkant) und eine Trittplatte an jeder Stufe, zwischen ihnen verschweißt. DetailCraft ermittelt die Anzahl der Setzstufen aus der Steighöhe, prüft sie gegen die Grenzwerte der Bauordnung und fertigt die Treppe als eine Werkstattbaugruppe.

## Treppe platzieren

1. Wählen Sie {{ui:Stair}} in der Gruppe {{ui:Place}} oder drücken Sie {{key:S}}.
2. Stellen Sie die Treppe rechts ein: die **Steigrichtung** (0° steigt entlang +x, 90° entlang +y), die **Steighöhe** (0 = bis zur nächsten Ebene), den **Auftritt**, die **lichte Breite** zwischen den Wangen, die **höchste zulässige Setzstufe**, die **Wange**, die **Dicke der Trittplatte**, die **Stufenvorderkante** und das Material.
3. Klicken Sie auf einen Rasterschnittpunkt: Das ist der Fuß der ersten Setzstufe, auf der Mittellinie der Treppe.

Die Statusleiste zeigt, wie viele Setzstufen erstellt wurden. Wählen Sie die Treppe (klicken Sie auf eine Wange oder eine Trittstufe), um eine Einstellung, ihre Position oder ihre Phase zu ändern. Die Eigenschaften zeigen außerdem die Setzstufen, Trittstufen, Lauflänge, Neigung und 2 × Setzstufe + Auftritt.

## Was DetailCraft berechnet

- **Setzstufen.** So wenige, dass jede Setzstufe höchstens so hoch wie der zulässige Höchstwert ist: Eine Höhe von 3000 mm bei höchstens 178 mm ergibt 17 Setzstufen zu je 176.5 mm. Es gibt eine Trittstufe weniger als Setzstufen (die oberste Ebene ist die letzte Stufe).
- **Trittstufen.** Eine Platte aus Auftritt + Stufenvorderkante Tiefe (standardmäßig 280 + 25 = PL6x305) und so lang wie die lichte Breite, ihre Oberkante auf jeder Setzstufenhöhe, ihre Vorderkante (die Stufenvorderkante) vor der Setzstufenlinie.
- **Wangen.** Mit der Neigung der Treppe, von dort, wo sie auf das untere Geschoss treffen, bis dort, wo sie auf das obere Geschoss treffen, knapp außerhalb der lichten Breite, ihre Oberkante 50 mm über der Linie der Stufenvorderkanten. Die Schenkel eines U-Profils zeigen in die Treppe hinein; ein Flachstahl wie PL12x250 steht hochkant.
- **Schweißnähte.** Jede Trittstufe an beiden Wangen. Die Trittstufen und die rechte Wange sind an die linke Wange geschweißt, sodass die Treppe eine Baugruppenkennzeichnung (ST1) und ihre eigene Baugruppenzeichnung erhält. Die Wangen erhalten Positionsnummern st…, die Trittstufen p….
- **Prüfungen.** Warnungen, wenn eine Setzstufe außerhalb von 4 bis 7 in. (102 bis 178 mm) liegt oder der Auftritt unter 11 in. (279 mm), den Grenzen aus IBC 2021, Abschnitt 1011.5.2; wenn 2 × Setzstufe + Auftritt außerhalb von 600 bis 650 mm liegt (eine übliche Komfortregel); und wenn die Wange zu niedrig ist, um die Trittstufen zu tragen. Ein unbekanntes Wangenprofil hält den Bau der Treppe an.

## Gut zu wissen

- Verschieben, drehen, spiegeln, kopieren, einfügen, löschen und Phasen funktionieren bei einer Treppe wie bei einem Stab. Eine Drehung dreht die Steigrichtung; eine Spiegelung schickt sie in die gespiegelte Richtung.
- Wangen werden als IfcMember und Trittstufen als IfcPlate nach IFC exportiert; beide gehen in NC-Dateien und die Stückliste. Die Kollisionsprüfung lässt die eigenen Teile einer Treppe in Ruhe (sie sind miteinander verschweißt).
- Diese einfache Treppe ist ein Lauf mit Trittplatten. Für Podeste, Handläufe mit Geländerstäben, Trittstufen aus Riffelblech, Gitterrost oder Abkantwannen, eine Auswahl an Regelsätzen, eine Zuschnittsliste und die Lochzeichnungen der Wangen aktivieren Sie im Werkzeug Treppe {{ui:Use the steel stair generator}} (siehe Stahltreppen-Generator).
- Die Wangen sind rechtwinklig abgeschnitten; ihre Endschnitte an den Geschossen werden nicht erstellt.
- DetailCraft bemisst die Treppe nicht: Wangen und Trittstufen werden nicht auf Festigkeit oder Durchbiegung geprüft.
