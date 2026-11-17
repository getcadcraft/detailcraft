---
title: Knotenbleche für Aussteifungen
summary: Ein Aussteifungsende mit einem Knotenblech an eine Stütze oder einen Träger anschließen: Winkel und Flachstahl verschraubt, Rohre geschlitzt und geschweißt.
keywords: Knotenblech, Knotenbleche, Aussteifung, Verband, vertikaler Verband, Winkelaussteifung, Flachstahl, Band, HSS-Aussteifung, Messerplatte, geschlitztes Rohr, anschließen
from: 22f6598d
---

Ein Knotenblech für Aussteifungen ist eine Platte, die werkseitig an die Stütze (oder den Träger) geschweißt wird, auf der die Aussteifung ansetzt, in der Ebene der Aussteifung. DetailCraft kürzt die Aussteifung an der Verbindung, setzt das Knotenblech und bemisst es und verbindet die Aussteifung damit: ein **Winkel** oder ein **Flachstahl** mit einer Schraubenreihe, ein **Rohr** (Quadrat-, Rechteck- oder Rund-HSS), das über das Knotenblech geschlitzt und verschweißt wird.

## Einsatzbereich

- Das Ende der Aussteifung liegt auf der Linie einer Stütze oder eines Trägers (auf 1 mm genau), und die Aussteifung verläuft nicht annähernd parallel zu dieser Linie. Eine Stütze ist das Auflager, sofern vorhanden; sonst der Träger.
- Das Knotenblech liegt in der Ebene der Aussteifung und der Linie des Auflagers. Ein **Winkel** muss mit einem Schenkel in dieser Ebene liegen, ein **Flachstahl** mit seiner Fläche: Drehen Sie die Aussteifung (ihre {{ui:Rotation (°)}}), bis das zutrifft. Liegen die Schenkel des Winkels in 45° zur Ebene, meldet DetailCraft das und baut nichts.
- I-Profile und U-Profile als Aussteifungen werden nicht angeschlossen.

## Knotenbleche hinzufügen

1. Wählen Sie eine oder mehrere Aussteifungen.
2. Wählen Sie {{ui:Gusset}} im Menü {{ui:More}} der Gruppe {{ui:Connect}}.
3. Jedes Ende der ausgewählten Aussteifungen, das auf einer Stütze oder einem Träger liegt und noch kein Knotenblech hat, erhält eines.

Wählen Sie ein Knotenblech (klicken Sie auf die Platte), um seine Einstellungen zu ändern. {{ui:Apply to similar (n)}} kopiert es auf jedes freie Aussteifungsende mit denselben Profilen für Aussteifung und Auflager.

## Was DetailCraft berechnet

- **Zurückschneiden.** Die Aussteifung wird an diesem Ende so weit gekürzt, bis ihre Ecken frei sind: um {{ui:Brace clearance}} (25), um jedes Stabelement an der Verbindung (daneben oder über sein Ende hinaus, wenn das Element dort endet) und um eine Fußplatte unter der Stütze.
- **Schrauben (Winkel, Flachstahl).** {{ui:Bolts}} (3) in einer Reihe entlang der Aussteifung, die erste im Abstand {{ui:Bolt end distance}} (40) vom geschnittenen Ende, im Abstand {{ui:Bolt pitch}} (75). Bei einem Winkel gehen sie durch den Schenkel in der Ebene des Knotenblechs, im Abstand {{ui:Bolt gauge}} von der Winkelecke (0 = Mitte des Schenkels); bei einem Flachstahl auf seiner Mittellinie (oder versetzt um das Wurzelmaß). Klemmlänge = Schenkel oder Flachstahl + Knotenblech.
- **Das Knotenblech.** Ein Rechteck: von der Fläche des Auflagers nach außen, über die letzte Schraube hinaus um den Endabstand, und entlang des Auflagers, so weit wie die Schrauben es brauchen. Es liegt an der Rückseite des Winkelschenkels (oder der Fläche des Flachstahls) an. Bei einem Rohr verläuft es durch die Mitte des Rohrs, unter {{ui:Tube lap on the gusset}} (200) des Rohrs, mit Platz für die Schweißnähte.
- **Anschlüsse.** An einem Stützenfuß wird das Knotenblech bis auf die Fußplatte geführt. Quert ein Träger die Verbindung (eine Aussteifung hinauf zu einer Träger-Stützen-Ecke), bleibt das Knotenblech unter oder über dem Träger. Verlieren dadurch die Schrauben oder die Überlappung ihren Endabstand, warnt DetailCraft.
- **Schweißnähte.** Das Knotenblech an seinem Auflager, beidseitig. Ein Rohr am Knotenblech: vier Linien entlang der Überlappung.

## Gut zu wissen

- Das Knotenblech gehört zur Baugruppe des Auflagers (werkseitig geschweißt). Die Aussteifung wird mit gebohrten Löchern geliefert und erhält ihre eigene NC-Datei.
- Der Schlitz eines Rohrs wird im Modell nicht geschnitten; die [Kollisionsprüfung](topic:clash-check) lässt Aussteifung und Knotenblech außen vor.
- Das Knotenblech wird nicht an einen Träger geschweißt, den es berührt. Eckknotenbleche, die sowohl an Träger als auch an Stütze geschweißt sind, abgeschrägte Ecken und das Arbeitspunkt-Layout einer Uniform-Force-Method-Verbindung sind noch nicht umgesetzt.
- DetailCraft bemisst das Knotenblech und die Schrauben nicht (keine Festigkeitsprüfungen); die Warnungen betreffen Abstände und Passung.
