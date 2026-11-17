---
title: Zuschnittsliste
summary: Träger, Stützen, Verbände und Treppenwangen in Lagerlängen mit Sägeschnitt verschachteln und sehen, wie viele Stäbe Sie kaufen müssen und wie viel Verschnitt anfällt.
keywords: Zuschnittsliste, Verschachtelung, Lagerlänge, Stab, Sägeschnitt, Schnittfuge, Säge, Reststück, Verschnitt, Kombinieren, Einkauf, mehrere
from: 81d06ce5
---

Die Registerkarte {{ui:Cut list}} unter der Ansicht berechnet, wie die linearen Teile des Modells aus Lagerstäben geschnitten werden: wie viele Stäbe jeder Länge Sie für jedes Profil und Material kaufen müssen, was auf jeden Stab kommt und wie groß der Verschnitt ist.

## Lager festlegen

Oben auf der Registerkarte:

- **Lagerlängen (mm):** die Längen, die Sie kaufen können, durch Leerzeichen getrennt, zum Beispiel `6000 12000` oder 20-ft- und 40-ft-Stäbe als `6096 12192`. Bis zu acht.
- **Sägeschnitt (mm):** was jeder Schnitt wegnimmt (zunächst 3).
- **Endabschnitt (mm):** schneidet das Ende jedes Stabs ab, bevor das erste Teil kommt (zunächst 0).
- **Reststücke ab (mm):** ein Reststück mindestens dieser Länge geht zurück ins Lager. Kürzere sind Ausschuss (zunächst 500).

Diese Werte werden wie die anderen [Einstellungen](topic:settings) in diesem Browser gespeichert.

## Wie verschachtelt wird

- Jeder Träger, jede Stütze, jeder Verband und jede Treppenwange, nach Positionsnummer und Anzahl. Platten werden aus Blech geschnitten und sind hier nicht verschachtelt.
- Jedes Profil und Material für sich.
- Die längsten Teile zuerst, jedes in den ersten Stab, in den es passt. Ein neuer Stab beginnt mit der längsten Lagerlänge. Danach wird jeder Stab als kürzeste Lagerlänge gekauft, die seine Schnitte noch aufnimmt.
- Jeder Schnitt nimmt die Schnittfuge (keine nach einem Schnitt, der genau am Stabende endet). Jeder Stab verliert den Endabschnitt.
- Ein Teil, das länger ist als jede Lagerlänge, steht unter **Länger als jedes Lager** und wird nicht verschachtelt. Stoßen Sie es (siehe [Stöße](topic:splices)) oder fügen Sie eine längere Lagerlänge hinzu.

## Lesen

- **Zusammenfassung:** je Profil und Material die Teile, die zu kaufenden Stäbe (zum Beispiel „2 × 12000, 1 × 6000“), die gekauften und verwendeten Meter und der Verschnitt.
- **Stäbe und ihre Schnitte:** jeder Stab, seine Lagerlänge, seine Schnitte als Positionsnummer und Länge sowie das Reststück, behalten oder Ausschuss.

{{ui:Download CSV}} speichert beide Tabellen als `<name> cut list.csv`.

DetailCraft verschachtelt keine Platten in Blechtafeln und mischt auf einem Stab keine Profile oder Materialien.
