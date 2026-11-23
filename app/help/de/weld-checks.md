---
title: Schweißnähte prüfen, wo Stäbe zusammentreffen
summary: Nach dem Nachweis die Kehlnähte und Stumpfnähte rundum an jedem Stab prüfen, wo er auf einen anderen Stab oder ein Auflager trifft, nach AISC 360-16 Kapitel J oder EN 1993-1-8. Außerdem sehen, welche Nahtgruppe am stärksten ausgelastet ist und unter welcher Kombination. Eine Hilfe, bis ein Ingenieur sie geprüft hat.
keywords: Schweißnaht, Schweißnähte, Schweißnachweis, Kehlnaht, Stumpfnaht, Durchschweißung, AISC 360, EN 1993-1-8, Nahtgruppe, Auslastung, Ausnutzung, Tragfähigkeit, Verbindung, Anschluss, Tragwerk, Ingenieur
from: e8eebbe6
---

Der Block {{ui:Schweißnachweise}} in der Registerkarte {{ui:Berechnung}}, unter {{ui:Nachweise}}, übernimmt die Schnittgrößen des zuletzt berechneten Rahmens und die Festigkeitskombinationen, die Sie gebildet haben. Er prüft die Schweißnaht rundum an jedem Stab an jeder Verbindung: dort, wo ein Stab auf einen anderen Stab trifft oder auf einem Auflager steht.

:::warning
Das ist eine **Hilfe, bis ein Ingenieur sie geprüft hat**. Die Prüfung rechnet eine Naht, die rundum am Querschnitt als eine Gruppe liegt, aus den eigenen Stabendkräften des Rahmens. Sie liest nicht die Größe oder Länge der Schweißnähte aus Ihren Werkstattzeichnungen, und sie prüft keine Schrauben, Bleche, Auflagerpressung, Blockscherversagen oder Hebelwirkung (prying). Ihre Ergebnisse sind kein Prüfstempel.
:::

## Ausführen

1. Rahmen in der Registerkarte {{ui:Berechnung}} berechnen, unter {{ui:Nachweise}} eine {{ui:Bemessungsnorm}} wählen und dann {{ui:Kombinationen bilden}} drücken. Die Schweißnachweise brauchen dieselben Festigkeitskombinationen.
2. Im Block {{ui:Schweißnachweise}} den {{ui:Kehlnahtschenkel (mm, 0 = die Wand, höchstens 8)}} festlegen. 0 bedeutet, dass der Schenkel der dünneren Wand des Querschnitts folgt, höchstens jedoch 8 mm. Nach der AISC-Norm ist {{ui:Festigkeit des Schweißguts F_EXX (MPa)}} die Festigkeit des Schweißguts (482.6 MPa entspricht einer E70-Elektrode). Nach EN 1993 geben die Stahlgüte die Festigkeit des Schweißguts und den Korrelationsbeiwert an.
3. {{ui:Schweißnähte prüfen}} drücken.

Jede Zeile der Tabelle ist eine Nahtgruppe (ein Stabende an einer Verbindung). Die Zahlen: die **Auslastung** des maßgebenden Nachweises, der Zustand (bestanden oder nicht bestanden) und welcher Nachweis mit welcher Klausel unter welcher Kombination maßgebend war. Eine Gruppe, die die Prüfung nicht beurteilen kann, nennt den Grund (keine Stahlgüte, kein Korrelationsbeiwert für die Güte in EN 1993-1-8, Tabelle 4.1, keine Naht an diesem Querschnitt), statt eine Zahl zu zeigen.

Ändern des Schenkels oder des Schweißguts oder Bearbeiten des Modells leert die Tabelle, denn sie gehörte zu den alten Werten. {{ui:Schweißnähte prüfen}} erneut drücken.

## Was geprüft wird

- **ASCE 7 + AISC 360:** Kehlnahtschweißgut (der Winkel der Last zur Naht zählt, J2.4), Scherbruch im Grundwerkstoff (J4.2) und Stumpfnähte mit voller Durchschweißung (Tabelle J2.5).
- **EN 1990 + EN 1993:** Kehlnähte nach dem vereinfachten Verfahren von EN 1993-1-8, 4.5.3.3, und Stumpfnähte nach 4.7.1.
- Konstruktionshinweise zum minimalen und maximalen Schenkel und zur minimalen Länge, jeweils mit dem Wert, mit dem sie verglichen wurden.

Die Nahtgruppe wird als Linienquerschnitt behandelt und nach dem elastischen Vektorverfahren belastet: Jeder Teil der Naht übernimmt die Kraft aus der Normalkraft des Stabes, beiden Querkräften, der Torsion und beiden Biegemomenten, als Vektoren addiert.

## Was nicht geprüft wird

Teildurchgeschweißte Nähte, schräge Kehlnähte, Lochnähte und Schlitznähte, unterbrochene Nähte, das Momentanpolverfahren, das Richtungsverfahren nach EN, Ermüdung und das Blockscherversagen des Grundwerkstoffs sind nicht umgesetzt. Einige Konstanten der Normen wurden aus den Normen übernommen und noch nicht mit einem gedruckten Exemplar verglichen. Der Bericht zeigt, woher jede Zahl stammt ({{ui:Bericht (PDF)}} bekommt die Nahttabellen, wenn Sie sie geprüft haben). Siehe [Stahlstäbe nachweisen](topic:design-checks) und [Noch nicht umgesetzt](topic:not-built-yet).
