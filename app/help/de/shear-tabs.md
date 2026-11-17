---
title: Anschlusslaschen
summary: Den Steg eines Trägers an ein im Werk an einen Stützenflansch oder -steg geschweißtes Blech schrauben, auch wo der Träger im Grundriss schief oder geneigt auf die Stütze trifft.
keywords: Anschlusslasche, Einfachlasche, Fin-Plate, einfache Verbindung, Stegverbindung, schiefwinklig, Schiefe, geneigt, schräg, angewinkelter Träger, verschraubt, verbinden
from: 18afc8ab
---

Eine Anschlusslasche (Einfachlasche, Fin-Plate) ist ein Blech, das im Werk an die Stütze geschweißt wird; auf der Baustelle wird der Trägersteg mit einer vertikalen Schraubenreihe daran verschraubt. DetailCraft platziert die Lasche, schneidet den Träger frei von der Stütze zurück, bohrt die Löcher in die Lasche und den Trägersteg, ergänzt die Schrauben und die Schweißnaht und warnt vor Randabständen und Passung.

## Wo es funktioniert

- Ein Träger (I-Profil oder U-Profil), dessen Ende auf der Linie einer **vertikalen** I-Profil-Stütze liegt und an deren **Flansch** oder **Steg** anschließt.
- **Rechtwinklig, im Grundriss schief oder geneigt**: Die Lasche folgt dem Trägersteg, und der Träger wird so zurückgeschnitten, dass seine nächste Ecke den Abstand zur Stütze hält. Ein Träger, der um mehr als 60° ansteigt oder abfällt, wird abgelehnt.

## Anschlusslaschen hinzufügen

1. Wählen Sie den Träger.
2. Öffnen Sie in der Gruppe {{ui:Anschlüsse}} {{ui:Mehr}} und wählen Sie {{ui:Anschlusslaschen}} (oder wählen Sie im Bereich {{ui:Eigenschaften}} {{ui:Anschlusslaschen hinzufügen}}).
3. Jedes freie Trägerende, das an eine Stütze stößt, erhält eine Lasche. Jedes Trägerende hat genau eine Verbindung: eine Anschlusslasche oder eine Kopfplatte.

Wählen Sie eine Lasche (klicken Sie darauf oder auf eine Schraube), um ihre Einstellungen zu sehen und zu ändern. {{ui:Auf ähnliche anwenden}} kopiert sie als Anschlusslasche auf jeden gleichartigen Knoten, der noch keine Verbindung hat.

## Einstellungen (mm)

| Einstellung | Startwert | Bedeutung |
|---|---|---|
| {{ui:Blechdicke (mm)}} | 10 | Die Dicke der Lasche |
| {{ui:Blechbreite (mm)}} | 115 | Wie weit die Lasche von der Stützenfläche entlang des Trägers ausragt |
| Schraubendurchmesser, Lochdurchmesser, Schraubenfestigkeit | 20, 22, A325 | Wie bei Kopfplatten |
| Schraubenreihen, Reihenabstand | 3, 75 | Die Schrauben in der vertikalen Reihe |
| Randabstand (obere und untere Schrauben) | 38 | Von den oberen und unteren Schrauben bis zu den Enden der Lasche; die Lasche ist Reihen × Abstand + 2 × dieser Wert tief |
| Schraubengruppe angehoben um | 0 | 0 zentriert die Schrauben auf die Trägerhöhe |
| Abstand zur Stütze | 13 | Lichter Abstand zwischen Stütze und der nächsten Ecke des Trägers |
| Schraubenlinie ab Stützenfläche | 65 | Entlang des Trägers, von der Stützenfläche bis zu den Schrauben |
| Zugabe Schraubenlänge | 30 | Zur Klemmlänge (Lasche + Trägersteg) addiert, auf 5 mm aufgerundet |
| Kehlnahtdicke | 6 | Beidseitig der Lasche zur Stütze |

## Gut zu wissen

- Die Lasche gehört zur Baugruppe der Stütze (im Werk geschweißt); die Baugruppe des Trägers hat nur die Löcher.
- Ein schiefer oder geneigter Träger wird weiter zurückgeschnitten als ein rechtwinkliger, damit seine nächste Ecke den Abstand hält. DetailCraft schneidet Träger rechtwinklig: Der Fertiger schneidet das Ende passend zu. Die Kante der Lasche an der Stütze wird ebenfalls rechtwinklig gezeichnet.
- DetailCraft prüft die Tragfähigkeit nicht. Warnungen verwenden die Mindestwerte aus EN 1993-1-8 Tabelle 3.3 für Randabstände und Abstand und melden, wenn die Lasche tiefer ist als der Trägersteg zwischen seinen Ausrundungen, oder wenn die Schrauben zu nah am geschnittenen Trägerende sitzen.
- Die [Kollisionsprüfung](topic:clash-check) lässt eine Lasche und die Stäbe, die sie verbindet, unberücksichtigt: Sie sollen sich treffen.
