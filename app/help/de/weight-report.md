---
title: Material- und Gewichtsbericht nach Phase
summary: Schnittlängen, Stückzahlen, Gewichte und Anstrichflächen je Phase, mit ihren Schrauben und ihrer Bewehrung, als Tabelle, CSV oder PDF.
keywords: Bericht, Gewicht, Tonnage, kg, Anstrich, Anstrichfläche, Oberfläche, Beschichtung, Schnittlänge, Materialliste, Phase, Stückliste, CSV, PDF
from: 337d6d92
---

In der Gruppe {{ui:Ausgabe}} öffnen Sie {{ui:Mehr}} und wählen {{ui:Gewichtsbericht nach Phase}}, oder Sie öffnen den Reiter {{ui:Nach Phase}} unter der Ansicht. Er zeigt:

- **Zusammenfassung nach Phase**: für jede Phase die Anzahl der Teile, das Stahlgewicht, die Anstrichfläche, die Schrauben und Ankerstangen sowie die Bewehrung; dann die Summen.
- **Eine Tabelle je Phase**: jede Teilemarke darin mit Typ, Profil, Werkstoff, Schnittlänge, Anzahl, Gewicht je Stück, Gewicht und Anstrichfläche; dann ihre Schrauben und Ankerstangen.

{{ui:CSV herunterladen}} speichert dieselben Tabellen in einer CSV-Datei (`<name> weight report.csv`). {{ui:PDF herunterladen}} erstellt einen Bericht im Blattformat aus den [DetailCraft-Einstellungen](topic:settings#drawings), mit der Zusammenfassung zuerst, danach jede Phase. Lange Tabellen werden auf die nächste Seite übernommen, und jede Seite ist nummeriert.

## So werden die Zahlen berechnet

- **Gewichte** sind Bruttogewichte, wie in der Stückliste: das Gewicht des Profils je Meter mal die Schnittlänge. Löcher und Ausklinkungen werden nicht abgezogen.
- **Anstrichfläche** ist die Außenseite des Querschnitts entlang der Schnittlänge: bei einem I-Profil jede Fläche von Gurten und Steg, bei einer Platte beide Seiten und die Kanten, bei einem Rohr nur die Außenseite. Enden und Löcher werden nicht gezählt.
- **Bewehrung** ist das Gewicht der Stäbe in den Fundamenten der Phase, aus der [Biegeliste](topic:footings-and-rebar).
- Die Platten und Schrauben eines Anschlusses zählen in der Phase seines Hauptbauteils. Siehe [Phasen](topic:phases).

Mit [Teilemarken je Phase](topic:phases#marks-per-phase) eingeschaltet hat jede Phase eigene Teilemarken (1-b1, 2-b1). Bei ausgeschalteter Option kann eine Teilemarke in mehr als einer Phase erscheinen: Jede Phase listet die Teile, die sie hat.
