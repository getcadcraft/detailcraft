---
title: Stöße
summary: Zwei Teile eines Träger- oder Stützenendes Ende an Ende mit verschraubten Gurt- und Steglaschen verbinden.
keywords: Stoß, Trägerstoß, Stützenstoß, Deckplatte, Stoßlasche, Gurtlasche, Steglasche, verschraubter Stoß, Verbindung, Stützenabschnitt, verbinden
from: 97d141c2
---

Ein verschraubter Stoß verbindet zwei Teile eines I-Profils Ende an Ende: je eine Deckplatte außen auf jedem Gurt und je eine Lasche auf jeder Seite des Stegs, durch beide Teile verschraubt. DetailCraft schneidet die Teile auf den Spalt zurück, setzt die vier Laschen, bohrt die Löcher in die Laschen und in beide Teile, fügt die Schrauben hinzu und warnt bei Endabständen, Lochabständen und Passung.

## Wo er funktioniert

- Zwei Träger oder zwei Stützenabschnitte mit **demselben I-Profil**, die **in einer Linie Ende an Ende** stoßen: die Enden höchstens 50 mm auseinander, die Teile parallel und auf einer Linie (innerhalb 1 mm). Jedes Teil darf in jeder Richtung gezeichnet sein.
- Waagerechte, geneigte und senkrechte Teile funktionieren alle.
- Zwei Teile mit unterschiedlicher Höhe oder Gurtbreite werden abgelehnt, ebenso U-Profile, Winkel und Rohre.

## Stöße hinzufügen

1. Zeichnen Sie die zwei Teile so, dass sie Ende an Ende stoßen. Um ein bereits gezeichnetes Bauteil zu teilen, zeichnen Sie es als zwei Teile neu.
2. Wählen Sie eines (oder beide) und wählen Sie {{ui:Stoß}} im Menü {{ui:Mehr}} der Gruppe {{ui:Anschlüsse}}.
3. Jeder freie Stoß der gewählten Teile mit einem anderen Teil desselben Profils erhält einen Stoß. Die Statusleiste zeigt an, wie viele.

Wählen Sie den Stoß (klicken Sie auf eine seiner Laschen), um seine Einstellungen im rechten Bereich zu ändern. {{ui:Auf Ähnliche anwenden (n)}} kopiert ihn auf jeden anderen freien Stoß zwischen Teilen desselben Profils.

## Einstellungen (mm)

| Einstellung | Standard | Wirkung |
|---|---|---|
| Spalt zwischen den Enden | 10 | Jedes Teil wird um die Hälfte davon zurückgeschnitten |
| Schraubendurchmesser, Loch, Festigkeitsklasse, Längenzugabe | 20, 22, A325, 30 | Wie bei Stirnplatten |
| Gurtplattendicke | 12 | Die Platte ist so breit wie der Gurt |
| Schraubenreihen Gurt (je Seite) | 3 | Reihen quer über den Gurt auf jeder Seite des Stoßes |
| Lochabstand Gurt | 75 | Entlang des Bauteils |
| Wurzelmaß Gurtschrauben | 0 | Zwischen den beiden Schraubenlinien; 0 = Gurtbreite minus 80 |
| Endabstand Gurt | 40 | Bauteilende bis zur ersten Schraube, letzte Schraube bis Plattenende |
| Stegplattendicke | 8 | Eine auf jeder Seite des Stegs |
| Schraubenreihen Steg | 3 | Am Steg hoch, zentriert |
| Schraubenspalten Steg (je Seite) | 2 | Entlang des Bauteils auf jeder Seite des Stoßes |
| Lochabstand Steg, am Steg hoch / entlang des Bauteils | 75, 75 | |
| Endabstand Steg | 40 | Wie bei den Gurten |
| Stegplattenhöhe | 0 | 0 = lichter Steg zwischen den Ausrundungen minus 10 oben und unten |
| Plattenwerkstoff | A36 | Text |

Die Laschenlängen ergeben sich aus den Schrauben: Gurtlasche = Spalt + 2 × (2 × Endabstand + (Reihen − 1) × Lochabstand); die Stegplatten entsprechend mit ihren Spalten. Mit den Standardwerten sind die Gurtlaschen 470 lang.

## Gut zu wissen

- Die Laschen gehören zum **zuerst gezeichneten** der beiden Teile (in dessen Eigenschaften heißt es „erstes Teil“): sie erscheinen auf dessen Montagezeichnung und werden mit ihm geliefert, verschraubt, nicht geschweißt. Die Montagezeichnung des zweiten Teils zeigt nur seine Löcher.
- Gurtschrauben fassen Gurt und Gurtlasche; Stegschrauben fassen Steg und beide Stegplatten. Die Schraubenlängen stehen separat in den Eigenschaften.
- Warnungen verwenden dieselben Mindestwerte nach EN 1993-1-8 wie die übrigen Anschlüsse (End- und Randabstand 1.2 × Loch, Lochabstand 2.2 × Loch in Längsrichtung und 2.4 × Loch quer), dazu eine Stegplatte, die tiefer als der lichte Steg ist, und Gurtschrauben, die zu nah am Steg für die Ausrundung liegen.
- DetailCraft bemisst den Stoß nicht (keine Festigkeitsprüfung) und fertigt keine Passbleche für Teile unterschiedlicher Dicke.
- Ein Kopieren beider Teile kopiert ihren Stoß; das Löschen eines der beiden Teile löscht ihn.
