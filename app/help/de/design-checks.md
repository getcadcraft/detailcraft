---
title: Stahlstäbe nach einer Bemessungsnorm nachweisen
summary: Lastkombinationen nach ASCE 7 oder EN 1990 bilden, jeden Stahl-I-Querschnitt nach AISC 360 oder EN 1993-1-1 nachweisen und sehen, wie viel seiner Tragfähigkeit jeder Stab ausnutzt. Eine Hilfe, bis ein Ingenieur sie geprüft hat.
keywords: Bemessung, Bemessungsnachweis, Stahlbemessung, Ausnutzung, Tragfähigkeit, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, Lastkombinationen, LRFD, Nationaler Anhang, Knicken, Biegedrillknicken, Querkraft, Biegung, Interaktion, Tragwerk, Studierende, Ingenieur
from: 66b6d545
---

Nach der Berechnung wandelt der Block {{ui:Design checks}} in der Registerkarte {{ui:Analysis}} die Schnittgrößen in ein Urteil für jeden Stahlstab um: wie viel seiner Tragfähigkeit die ungünstigste Kombination ausnutzt.

:::warning
Es ist eine **Hilfe, bis ein Ingenieur sie geprüft hat**. Sie verwendet nur Schnittgrößen nach Theorie I. Ordnung (ohne Effekte nach Theorie II. Ordnung), prüft keine Torsion, keine schlanken Querschnittsteile (Klasse 4), keine geschweißten Querschnitte und keine Anschlüsse. Was sie nicht prüfen kann, lässt sie aus, und sie sagt das. Sie ersetzt nicht die Prüfung durch einen Ingenieur, und ihre Ergebnisse sind kein Prüfvermerk.
:::

## Norm wählen

{{ui:Design code}} wird mit dem Modell gespeichert. Wählen Sie eine von zwei Familien:

- **ASCE 7 + AISC 360** (USA, LRFD): die Lastkombinationen von ASCE 7-16 §2.3.1 und die Stabnachweise von ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): die Kombinationen von EN 1990 (Gl. 6.10 bzw. 6.10a und 6.10b) und die Stabnachweise von EN 1993-1-1.

Wählen Sie danach die {{ui:Steel grade}} (A992, A36 und andere; oder S235 bis S450, bei der Streckgrenze unten über 40 mm).

## Kombinationen bilden

Geben Sie jedem Lastfall seine **Art** (Eigengewicht, Nutzlast, Dachnutzlast, Schnee, Wind, Erdbeben) in der Lastfallliste und drücken Sie {{ui:Make combinations}}. DetailCraft schreibt die Kombinationen der Norm als Kombinationen Ihrer Lastfälle: jede Tragfähigkeitskombination, die die Norm für die Arten angibt, die Sie haben, und Gebrauchstauglichkeitskombinationen für die Durchbiegung. Die selbst eingegebenen bleiben erhalten. Sie werden nicht gegen die Norm geprüft. Ein Lastfall der Art {{ui:Other}} wird nicht kombiniert.

Für den Eurocode sind die Faktoren die **Empfehlungswerte** von EN 1990 Anhang A1 (γG 1.35, γQ 1.5, die ψ-Werte für Nutzlasten, Schnee und Wind) und EN 1993-1-1 (γM0 = γM1 = 1.0). Der Nationale Anhang Ihres Landes ändert einige davon. Öffnen Sie {{ui:National Annex values}}, geben Sie Ihre Werte ein und bilden Sie die Kombinationen erneut. Sie werden im Modell gespeichert.

## Stäbe nachweisen

Drücken Sie {{ui:Check members}}. Für jeden Stahl-I-Querschnitt zeigt die Tabelle seine **Ausnutzung** (Beanspruchung zu Tragfähigkeit: 100 % ist die Grenze), ob er besteht, welcher Nachweis maßgebend ist und welche Kombination. Die Stäbe werden am Modell eingefärbt: Blau wenig ausgenutzt, Grün etwa halb, Ocker nahe der Grenze, Rot darüber, Grau nicht geprüft. Klicken Sie auf den Namen eines Stabs, um ihn zu wählen.

Die Nachweise, mit der Klausel, der jeder folgt (sie stehen im Bericht):

- Zug, Druck mit Biege- und Drillknicken, Biegung um beide Achsen mit Biegedrillknicken, Querkraft und Biegung mit Normalkraft;
- Durchbiegung der Gebrauchstauglichkeitskombinationen gegen die {{ui:Deflection limit}}, die Sie festlegen (zunächst L/360; ein Projektwert, kein Normwert).

**Längen.** Die seitlich gehaltene Länge ist ein Anteil jedes berechneten Teilstücks (1 = ungehalten). Halterungen werden gleichmäßig vom Anfang aus verteilt. K-Faktoren multiplizieren die Länge für das Knicken. An einem Knoten, an dem ein anderer Stab anschließt, wird ein Stab geteilt. Jedes Teilstück wird auf seiner eigenen Länge nachgewiesen, als dort gehalten.

## Was nicht geprüft wird

Ein Stab zeigt statt einer Zahl **nicht geprüft** mit dem Grund, wenn sein Querschnitt kein I-Profil ist, das die Nachweise kennen (Rohre, Winkel, U-Profile), wenn er ein benutzerdefinierter (geschweißter) Querschnitt ist oder wenn ein Querschnittsteil bei Biegung schlank (AISC) bzw. Klasse 4 (Eurocode) ist. Ein schlankes Teil bei Druck lässt die Druckprüfungen aus, und der Stab erscheint als *besteht, teilweise geprüft*. Ebenfalls noch nicht umgesetzt sind: Effekte nach Theorie II. Ordnung, Torsion, Schubbeulen zusammen mit Biegung, Anschlüsse, Ermüdung, Brand und seismische Konstruktionsregeln. Betonstäbe und Erdbebenlasten haben [eigene Nachweise](topic:concrete-and-seismic). Siehe [Noch nicht umgesetzt](topic:not-built-yet).

## Der Bericht

{{ui:Report (PDF)}} und {{ui:Report (CSV)}} enthalten die Nachweistabellen, sobald Sie geprüft haben: die Normausgaben, die Einstellungen und Werte des Nationalen Anhangs, die Ausnutzung je Stab, jede verwendete Klausel und für jeden Stab die Beanspruchung, Tragfähigkeit und Ausnutzung jedes Nachweises in seiner maßgebenden Kombination.
