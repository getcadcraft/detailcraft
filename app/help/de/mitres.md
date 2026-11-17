---
title: Gehrungsverbindungen
summary: Verbinden Sie zwei I-Profil-Bauteile, die in einem Winkel aufeinandertreffen: beide Enden werden auf der Ebene geschnitten, die den Winkel halbiert, mit Kopfplatten, Schrauben und Steifen, wenn Sie sie möchten.
keywords: Gehrung, Gehrungsverbindung, Knoten, Voute, Portalrahmen, First, Ecke, Winkelschnitt, schiefer Schnitt, Kopfplatte, geschraubte Kopfplatte, Steife, verbinden, Anschluss
from: cd8380d4
---

Eine Gehrung verbindet zwei I-Profil-Bauteile, deren Enden in einem Winkel zusammentreffen, etwa den Knoten eines Portalrahmens, einen First oder zwei Träger, die im Grundriss eine Ecke bilden. DetailCraft schneidet beide Enden auf der Ebene, die den Winkel zwischen ihnen halbiert, sodass die beiden Schnittflächen übereinstimmen. Wenn Sie möchten, fügt es jedem geschnittenen Ende eine Kopfplatte hinzu, verschraubt die beiden Platten miteinander und setzt in jedes Bauteil ein Paar Stegsteifen.

## Wo sie funktioniert

- Zwei **I-Profile** (IPE, HEA, HEB, W und ähnliche), deren **Enden am selben Knoten** zusammentreffen. Jedes Bauteil kann in beiden Richtungen gezeichnet sein.
- Der Winkel zwischen den Bauteilen muss mindestens 15° betragen. Bauteile in einer Linie werden abgelehnt: Verwenden Sie dafür einen [Stoß](topic:splices).
- Der einfache Schnitt (ohne Platten) funktioniert, wie auch immer die Bauteile zusammentreffen. **Kopfplatten** brauchen, dass sich die beiden Bauteile in der Ebene ihrer Stege treffen, wie an einem Portalknie oder einem First. Zwei Träger, die im Grundriss eine Ecke bilden, treffen sich in der Ebene ihrer Flansche, daher bekommen sie nur den einfachen Schnitt.
- Bauteile unterschiedlicher Größe werden verbunden, aber mit einer Warnung: Ihre Schnittflächen stimmen nicht überein.

## Eine Gehrung hinzufügen

1. Wählen Sie die beiden Bauteile: Klicken Sie auf eines, dann {{key:Shift}}+Klick auf das andere.
2. Wählen Sie {{ui:Gehrung}} im Menü {{ui:Mehr}} der Gruppe {{ui:Anschlüsse}}. Der Gehrungsdialog öffnet sich.
3. Stellen Sie die nummerierten Felder ein. Die Zeichnung daneben entsteht aus Ihren Zahlen, während Sie tippen, und ihre nummerierten Kreise zeigen, was jedes Feld festlegt.
4. Wählen Sie {{ui:Die Gehrung hinzufügen}}. Wenn Sie mehr als zwei Bauteile gewählt haben, erhält jeder freie Knoten unter ihnen dieselbe Gehrung.

Um eine Gehrung später zu ändern, wählen Sie sie aus (klicken Sie auf eine ihrer Platten) und wählen Sie {{ui:Gehrungsdialog mit Vorschau}} im rechten Bereich, oder ändern Sie die Einstellungen dort direkt. Ein einfacher Schnitt hat keine Platten zum Anklicken: Wählen Sie seine beiden Bauteile und wählen Sie {{ui:Gehrung}} erneut, dann öffnet sich der Dialog für diese Gehrung. {{ui:Auf ähnliche anwenden (n)}} kopiert sie auf jeden freien Knoten zwischen Bauteilen derselben zwei Profile im selben Winkel.

## Die nummerierten Felder (mm)

| Nr. | Einstellung | Standard | Was es tut |
|---|---|---|---|
| 1 | Spalt zwischen den Platten (oder den Schnittenden) | 0 | Freier Spalt am Knoten. Jede Seite behält die Hälfte davon |
| 2 | Kopfplatten, Plattendicke | an, 20 | Eine Kopfplatte, rundum an jedes geschnittene Ende geschweißt. Abwählen für einen einfachen Schnitt |
| 3 | Schraubenreihen, Reihenabstand, Wurzelmaß, äußere Reihe | 4, 0, 0, aus | Teilung 0 verteilt die Reihen gleichmäßig zwischen den Flanschen. Wurzelmaß 0 = halbe Plattenbreite, mindestens 2.4 × die Bohrung. Die äußere Reihe liegt in der Verlängerung der Platte über den äußeren Flansch hinaus |
| 4 | Platte über den äußeren Flansch hinaus | 0 | Wie weit die Platten über den äußeren Flansch hinausreichen, entlang des Schnitts |
| 5 | Platte über den inneren Flansch hinaus | 0 | Dasselbe nach innen |
| 6 | Stegsteifen, Abstand über den Schnitt hinaus | aus, 50 | Ein Paar in jedes Bauteil, auf beiden Seiten des Stegs, rechtwinklig zum Bauteil, so weit über das ferne Ende seines Schnitts hinaus |
| 7 | Dicke der Steife | 10 | |

Unter {{ui:Schrauben}}: Schraubendurchmesser, Bohrung, Güte und Längenzugabe (20, 22, A325, 30), wie bei Kopfplatten. Unter {{ui:Platten und Schweißnähte}}: Plattenbreite (0 = Flanschbreite), Kehlnahtgröße (8) und Plattenmaterial (A36).

## Was Sie erhalten

- **Die Schnitte.** Das Ende jedes Bauteils wird auf seiner Ebene geschnitten. Seine Länge in Listen, Zeichnungen und NC-Dateien ist die **Gesamtlänge**, vom rechtwinkligen Ende bis zum entferntesten Punkt des Schnitts.
- **Die Platten** gehören zu ihrem eigenen Bauteil: Die Baugruppe jedes Bauteils ist das Bauteil, seine Kopfplatte und seine Steifen. Die Schrauben sind Baustellenschrauben der Verbindung: Die Stückliste zählt sie einmal, und die Baugruppenzeichnung jedes Bauteils listet sie als lose Schrauben.
- **Zeichnungen** zeigen die schrägen Enden und die Platten; die Werkstattzeichnung eines gehrten Bauteils vermerkt den Winkel jedes Schnitts gegenüber der Rechtwinkligkeit.
- **NC-Dateien** (DSTV) führen die Schrägschnittwinkel im Kopf, wie der Standard es verlangt, und Konturen, die dem Schnitt folgen. Prüfen Sie sie vor dem Schneiden in der NC-Anzeige Ihrer Werkstatt, wie bei jeder NC-Datei.
- **IFC** schneidet die Extrusion jedes Bauteils an seiner Schnittebene, sodass andere Programme den echten Schnitt zeigen.
- **Positionsnummern:** Ein gehrtes Bauteil ist ein anderes Stück als ein rechtwinklig geschnittenes derselben Länge. Zwei Bauteile mit denselben Schnitten teilen sich eine Nummer, wie die beiden Sparren eines Firsts.

## Gut zu wissen

- Die Gehrung bleibt aktiv. Verschieben oder ändern Sie die Größe eines der Bauteile, dann folgen Schnitt, Platten und Schrauben. Löschen Sie eines der Bauteile, verschwindet die Gehrung, und das Ende des anderen Bauteils ist wieder rechtwinklig.
- Warnungen verwenden dieselben Mindestwerte nach EN 1993-1-8 wie die anderen Verbindungen (End- und Randabstand 1.2 × Bohrung, Teilung 2.2 × Bohrung, Wurzelmaß 2.4 × Bohrung), dazu Schraubenreihen zu nah an einem Flansch, Platten schmaler als die Flansche und Steifen ohne Platz.
- Die Werte sind Ausgangswerte, keine Bemessung. DetailCraft prüft die Tragfähigkeit der Verbindung nicht, und es erstellt keine Voute, keine geschweißte Gehrung mit Stumpfnaht und keine Steifen in Flucht mit den Flanschen des anderen Bauteils.
