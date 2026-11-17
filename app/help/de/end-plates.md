---
title: Träger mit Kopfplatten an Stützen anschließen
summary: Geschraubte Kopfplatten dort hinzufügen, wo ein Träger auf einen Stützenflansch oder Steg trifft, Platte, Schrauben und Schweißnaht einstellen und den Anschluss auf jede ähnliche Anschlussstelle kopieren.
keywords: Kopfplatte, Endplatte, biegesteifer Anschluss, geschraubter Anschluss, Anschlussstelle, Schrauben, Schweißnaht, verlängerte Kopfplatte, bündig, ähnlich, Anschluss kopieren, Komponente
from: 21e028b2
---

Ein Kopfplattenanschluss verschweißt eine Platte mit dem Trägerende und verschraubt sie mit dem Stützenflansch oder -steg. DetailCraft setzt die Platte, schneidet den Träger zurück, bohrt passende Löcher in die Platte und den Stützenflansch, fügt die Schrauben und die Schweißnaht hinzu und prüft Randabstände und Abstände.

:::warning
DetailCraft bemisst keine Anschlüsse. Die Einstellungen sind Ausgangswerte, die Sie ändern sollen. Nichts prüft die Tragfähigkeit. Die Warnungen zu Rand- und Abständen verwenden die Mindestwerte von EN 1993-1-8 Tabelle 3.3, die von den Regeln abweichen können, nach denen Sie arbeiten.
:::

## Was es verbinden kann

- Ein **waagerechter** Träger (beide Enden auf gleicher Höhe), aufrecht (Drehung 0), mit I-Profil.
- In den **Flansch** oder den **Steg** einer **senkrechten** I-Profil-Stütze, rechtwinklig dazu.
- Das Trägerende muss auf der Achse der Stütze liegen, zwischen Unterkante und Oberkante der Stütze.

Schräge oder geneigte Träger und Nicht-I-Querschnitte werden mit Angabe des Grundes abgelehnt. Verwenden Sie dafür [Anschlusslaschen](topic:shear-tabs). Bei einem Steg müssen Platte und Trägerflansche zwischen den Stützenflanschen Platz finden. DetailCraft warnt, wenn das nicht der Fall ist.

:::tip
Bei Drehung 0 liegen die Flansche einer Stütze in Richtung des nummerierten Rasters (x). Ein Träger von A nach B trifft auf den Steg und erhält eine Kopfplatte am Steg.
:::

## Kopfplatten an einen Träger hinzufügen

1. Wählen Sie {{ui:Select}} ({{key:V}}) und klicken Sie auf den Träger.
2. Wählen Sie {{ui:End plates}} in der Gruppe {{ui:Connect}} oder {{ui:Add end plates}} im Panel {{ui:Properties}}.
3. Jedes freie Trägerende, das rechtwinklig auf einen Stützenflansch oder -steg trifft, erhält eine Platte. Die Statusleiste sagt „2 Kopfplatten hinzugefügt. Wählen Sie eine aus, um ihre Platte, Schrauben und Schweißnaht zu ändern; Ähnlich kopiert sie auf ähnliche Anschlussstellen.“
4. Die erste neue Kopfplatte ist ausgewählt, und ihre Einstellungen stehen im Panel {{ui:Properties}}.

Passiert nichts, lesen Sie die Statusleiste:

- „Dieser Träger endet nicht auf einer Stützenachse. Kopfplatten werden dort gesetzt, wo ein Trägerende auf eine senkrechte Stütze trifft.“
- „Dieser Träger trifft eine Stütze schräg oder ist geneigt. Kopfplatten sind für rechtwinklige, waagerechte Anschlüsse gebaut. Verwenden Sie Anschlusslaschen.“
- „Beide Enden haben bereits Anschlüsse.“

## Platte, Schrauben und Schweißnaht ändern

Klicken Sie auf die Kopfplatte (oder eine ihrer Schrauben), um den Anschluss zu wählen. Unter {{ui:Plate, bolts and weld (mm)}}:

| Einstellung | Vorgabe | Wirkung |
|---|---|---|
| Plattendicke | 20 | Dicke der Platte; außerdem, wie weit der Träger über den Flansch zurückgeschnitten wird |
| Plattenbreite | 180 | Quer zur Verbindung |
| Verlängerung über dem Träger | 0 | Über dem oberen Flansch; über 0 entsteht eine verlängerte Kopfplatte |
| Verlängerung unter dem Träger | 0 | Unter dem unteren Flansch |
| Schraubendurchmesser | 20 | Nenngröße der Schraube |
| Lochdurchmesser | 22 | Ihr Bohrungsspiel in der Platte und im Stützenflansch |
| Schraubengüte | A325 | Text; wird in der Stückliste ausgegeben |
| Schraubenreihen | 4 | Reihen mit je zwei Schrauben, auf die Plattenhöhe zentriert |
| Reihenabstand | 75 | Senkrechter Abstand zwischen den Reihen |
| Querabstand | 100 | Waagerechter Abstand zwischen den beiden Schrauben einer Reihe |
| Schraubenlängenzugabe | 30 | Zur Klemmlänge für Mutter, Scheibe und Gewinde addiert; siehe unten |
| Kehlnahtgröße | 8 | Ringsum am Trägerende |
| Plattenwerkstoff | A36 | Text |

Geben Sie einen neuen Wert ein und drücken Sie {{key:Enter}} oder {{key:Tab}}. Die Platte, die Löcher, die Schrauben und die Schnittlänge des Trägers werden sofort aktualisiert. Jede Änderung ist ein Rückgängig-Schritt.

Unter den Einstellungen sehen Sie, was der Anschluss erzeugt:

- {{ui:Bolts}}: zum Beispiel „8 × 20 × 70 A325 (Klemmlänge 36.2)“.
- {{ui:Weld}}: Größe, Ort und Länge.
- {{ui:Plate}}: ihre Abmessung und ihre Positionsnummer.

### So werden die Zahlen berechnet

- Der Träger wird um die halbe Stützentiefe (am Steg: die halbe Stegdicke) plus die Plattendicke zurückgeschnitten, damit die Platte auf der Fläche sitzt.
- Die Plattenhöhe ist die Trägerhöhe plus die beiden Verlängerungen.
- Schraubenlänge = Klemmlänge (Plattendicke + Dicke des Stützenflansches oder -stegs) + Zugabe, auf die nächsten 5 mm aufgerundet.
- Die angezeigte Schweißnahtlänge ist der Umfang des Trägerquerschnitts.

### Warnungen

Der Anschluss wird trotzdem gebaut. Diese Warnungen erscheinen darunter und im Register {{ui:Problems}}:

- Schraubenreihen oder Schrauben näher am Plattenrand als das 1.2-Fache des Lochdurchmessers.
- Reihenabstand unter 2.2 × Lochdurchmesser oder Querabstand unter 2.4 × Lochdurchmesser.
- Löcher, die in den Stützensteg oder dessen Ausrundung oder über den Stützenflansch hinaus reichen.
- Eine Platte, die breiter ist als der Stützenflansch, oder (am Steg) breiter als der Raum zwischen den Flanschen. Trägerflansche, die dazwischen nicht passen.
- Eine Schraubenreihe zu nah an einem Trägerflansch oder ein Querabstand, der für den Trägersteg und seine Schweißnaht zu eng ist.

## Auf jede ähnliche Anschlussstelle kopieren

1. Wählen Sie den Anschluss, den Sie eingerichtet haben.
2. Wählen Sie {{ui:Auf ähnliche anwenden (n)}} im Panel {{ui:Properties}} oder {{ui:Similar}} im Menü {{ui:More}} der Gruppe {{ui:Connect}}. Die Zahl in Klammern ist, wie viele Anschlussstellen ihn erhalten.
3. Jede Anschlussstelle mit demselben Trägerprofil und Stützenprofil, mit dem Träger an derselben Art Fläche, die noch keinen Anschluss hat, erhält eine Kopie mit denselben Einstellungen. Die Statusleiste sagt, wie viele.

Kopien sind unabhängig: Eine spätere Änderung an einer ändert die anderen nicht. Anschlussstellen, die bereits einen Anschluss haben, bleiben unberührt. Löschen Sie diese zuerst, wenn Sie sie ersetzen wollen.

## Verschieben und Löschen

Anschlüsse werden bei jeder Änderung des Modells aus ihren Einstellungen neu erstellt. Daher nehmen Verschieben oder Größenänderung eines Trägers oder einer Stütze ihre Kopfplatten mit. Bedeutet eine Änderung, dass die Anschlussstelle nicht mehr passt, bleibt der Anschluss im Modell. Das Register {{ui:Problems}} sagt, warum, zum Beispiel „Das Trägerende liegt nicht mehr auf der Stützenachse.“

Zum Löschen eines Anschlusses wählen Sie ihn und drücken {{key:Delete}}. Das Löschen des Trägers oder der Stütze löscht auch seine Anschlüsse.

Weiter: [Fußplatten und Ankerstangen hinzufügen](topic:base-plates).
