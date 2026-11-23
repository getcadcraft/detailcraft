---
title: Stahlstäbe nach einer Bemessungsnorm nachweisen
summary: Lastkombinationen nach ASCE 7 oder EN 1990 bilden, jeden Stahl-I-Querschnitt nach AISC 360 oder EN 1993-1-1 nachweisen und sehen, wie viel seiner Tragfähigkeit jeder Stab ausnutzt. Ein Hilfsmittel, bis eine Fachperson es geprüft hat.
keywords: Bemessung, Nachweis, Stahlbemessung, Ausnutzung, Utilisation, Tragfähigkeit, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, Lastkombinationen, LRFD, Nationaler Anhang, Knicken, Biegedrillknicken, Querkraft, Biegung, Interaktion, Tragwerk, Studierende, Fachperson
from: 15685c4e
---

Nachdem Sie die Berechnung ausgeführt haben, wandelt der Block {{ui:Nachweise}} in der Registerkarte {{ui:Berechnung}} die Schnittgrößen für jeden Stahlstab in ein Ergebnis um: wie viel seiner Tragfähigkeit die ungünstigste Kombination ausnutzt.

:::warning
Es ist ein **Hilfsmittel, bis eine Fachperson es geprüft hat**. Es verwendet nur Schnittgrößen nach Theorie erster Ordnung (ohne Effekte zweiter Ordnung), prüft keine Torsion, keine schlanken Querschnittsteile (Klasse 4), keine geschweißten Querschnitte und keine Anschlüsse, und es lässt aus, was es nicht prüfen kann, und sagt das. Es ersetzt keine Prüfung durch eine Fachperson, und seine Ergebnisse sind keine Freigabe.
:::

## Eine Norm wählen

{{ui:Bemessungsnorm}} wird mit dem Modell gespeichert. Wählen Sie eine von zwei Familien:

- **ASCE 7 + AISC 360** (USA, LRFD): die Lastkombinationen nach ASCE 7-16 §2.3.1 und die Stabnachweise nach ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): die Kombinationen nach EN 1990 (Gl. 6.10 bzw. 6.10a und 6.10b) und die Stabnachweise nach EN 1993-1-1.

Wählen Sie danach die {{ui:Stahlgüte}} (A992, A36 und andere; oder S235 bis S450, mit der unteren Streckgrenze oberhalb von 40 mm).

## Kombinationen bilden

Geben Sie jedem Lastfall seine **Art** (Eigenlast, Nutzlast, Dachnutzlast, Schnee, Wind, Erdbeben) in der Lastfallliste und drücken Sie dann {{ui:Kombinationen bilden}}. DetailCraft schreibt die Kombinationen der Norm als Kombinationen Ihrer Lastfälle: jede Tragfähigkeitskombination, die die Norm für die Arten auflistet, die Sie haben, und Gebrauchstauglichkeitskombinationen für die Durchbiegung. Die von Ihnen selbst eingegebenen bleiben erhalten; sie werden nicht gegen die Norm geprüft. Ein Lastfall der Art {{ui:Sonstige}} wird nicht kombiniert.

Für den Eurocode gelten die **empfohlenen Werte** nach EN 1990 Anhang A1 (γG 1.35, γQ 1.5, die ψ-Werte der Nutzlasten sowie der Schnee- und Windlasten) und EN 1993-1-1 (γM0 = γM1 = 1.0). Ihr nationaler Anhang ändert einige davon: Öffnen Sie {{ui:Werte des Nationalen Anhangs}}, geben Sie Ihre Werte ein und bilden Sie die Kombinationen erneut. Sie werden im Modell gespeichert.

## Stäbe nachweisen

Drücken Sie {{ui:Stäbe nachweisen}}. Für jeden Stahl-I-Querschnitt zeigt die Tabelle seine **Ausnutzung** (Beanspruchung zu Tragfähigkeit: 100 % ist die Grenze), ob er besteht, welcher Nachweis maßgebend ist und welche Kombination. Die Stäbe werden im Modell eingefärbt: blau wenig ausgenutzt, grün etwa die Hälfte, ocker nahe der Grenze, rot darüber, grau nicht geprüft. Klicken Sie auf den Namen eines Stabs, um ihn auszuwählen.

Die Nachweise mit der Klausel, der sie folgen (sie stehen im Bericht):

- Zug, Druck mit Biege- und Drillknicken, Biegung um beide Achsen mit Biegedrillknicken, Querkraft sowie Biegung mit Normalkraft;
- Durchbiegung der Gebrauchstauglichkeitskombinationen gegen die {{ui:Durchbiegungsgrenze}}, die Sie festgelegt haben (zunächst L/360; ein Projektwert, kein Normwert).

**Knicklängen.** Die ausgesteifte Länge ist ein Anteil jedes berechneten Teilstücks (1 = unversteift); die Aussteifungen werden ab dem Anfang gleichmäßig verteilt angenommen. K-Faktoren multiplizieren die Länge für das Knicken. Ein Knoten, an dem ein anderer Stab anschließt, teilt einen Stab, und jedes Teilstück wird auf seiner eigenen Länge nachgewiesen, und zwar so, als wäre es dort ausgesteift.

## Was nicht geprüft wird

Ein Stab zeigt anstelle eines Werts **nicht geprüft** mit dem Grund, wenn sein Querschnitt keine Form ist, die die Nachweise kennen (Winkel, U-Profile; Rechteck- und Rundrohre werden geprüft, wenn ihre Wände kompakt sind), wenn es ein benutzerdefinierter (geschweißter) Querschnitt ist oder wenn ein Teil bei Biegung schlank (AISC) oder Klasse 4 (Eurocode) ist. Ein schlankes Teil unter Druck lässt die Drucknachweise weg, und der Stab zeigt *besteht, teilweise geprüft*. Die Schweißnähte an den Knoten haben [eine eigene Prüfung](topic:weld-checks). Ebenfalls noch nicht umgesetzt sind: Effekte zweiter Ordnung, Torsion, Schubbeulen zusammen mit Biegung, geschraubte Anschlüsse, Ermüdung, Brand und die seismische Konstruktionsdurchbildung. Betonbauteile und Erdbebenlasten haben [eigene Prüfungen](topic:concrete-and-seismic). Siehe [Noch nicht umgesetzt](topic:not-built-yet).

## Der Bericht

{{ui:Bericht (PDF)}} und {{ui:Bericht (CSV)}} enthalten die Bemessungstabellen, sobald Sie nachgewiesen haben: die Normausgaben, die Einstellungen und Werte des Nationalen Anhangs, die Ausnutzung je Stab, jede verwendete Klausel und für jeden Stab Beanspruchung, Tragfähigkeit und Ausnutzung jedes Nachweises in seiner maßgebenden Kombination.
