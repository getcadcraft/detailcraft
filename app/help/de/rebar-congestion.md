---
title: Bewehrungsdichte-Karte
summary: Sehen Sie, wie viel Platz die Bewehrung in jedem Fundament für den Beton lässt, mit der Größtkorn-Angabe und dem Rüttler, die Sie angeben.
keywords: Bewehrung, Dichte, Abstand, lichter Abstand, Betonieren, Größtkorn, Rüttler, Anschlussbewehrung, Haken, Fundament, Matte
from: 40d029e6
---

Die Registerkarte {{ui:Bewehrungsdichte}} zeichnet eine Wärmekarte jedes Fundaments von oben. Hellblau ist offen; Gelb und Orange werden eng; Rot ist enger, als die Stäbe verlangen. Dunkle Zellen sind die Stäbe selbst.

## Was die Karte misst

Beton geht Schicht für Schicht durch den Stahl und kann sich zwischen den Schichten seitlich bewegen. Deshalb nimmt die Karte an jedem Punkt den engsten freien Abstand in einer einzelnen Lage: zwischen den Stäben der unteren Lage, zwischen der nächsten Lage Stäbe und zwischen den Hakenschenkeln der Anschlussstäbe oben. Die Anschlussstäbe stehen durch alle hindurch.

## Was als eng gilt

Der Bedarf ist der größere Wert von 25 mm und dem Stabdurchmesser (ACI 318-19 25.2.1), oder bei BS-4449-Stäben der größere Wert von Stabdurchmesser und 20 mm (EN 1992-1-1 8.2). Zwei Felder erhöhen ihn:

- {{ui:Größtkorn}}: der Bedarf wird zu 4/3 der Korngröße (ACI) oder Korngröße plus 5 mm (EN).
- {{ui:Rüttlerkopf}}: der Bedarf beträgt mindestens den Durchmesser des Kopfes.

Beide beginnen bei 0, was „nicht bekannt“ bedeutet: DetailCraft kennt Ihre Mischung und Ihre Pumpe nicht.

## Probleme

Ein Fundament mit einer Stelle, die enger ist als der Bedarf, wird im Panel {{ui:Probleme}} aufgelistet, mit der gefundenen und der benötigten Öffnung. {{ui:Wählen}} neben einer Karte wählt das Fundament aus.

Die Karte sieht keine Bügel, Muffen, Leitungen oder die eigenen Stäbe der Stütze.
