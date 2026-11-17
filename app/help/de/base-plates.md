---
title: Fußplatten und Ankerstangen hinzufügen
summary: Eine geschweißte Fußplatte mit vier Ankerstangen unter eine Stütze setzen, ihre Maße einstellen und auf jede ähnliche Stütze kopieren.
keywords: Fußplatte, Fußplatten, Ankerstangen, Ankerschrauben, Niederhalteschrauben, Stützenfuß, Fundamentschrauben, ähnlich
from: 619ebc64
---

Ein Fußplattenanschluss setzt eine Platte unter die Stütze, kürzt die Stütze um die Plattendicke, verschweißt beide miteinander und fügt vier Ankerstangen durch Löcher in der Platte hinzu.

:::warning
Die Maße sind Startwerte, keine Bemessung. DetailCraft prüft weder Auflagerpressung, Festigkeit der Ankerstangen noch Einbindetiefe.
:::

## Fußplatte hinzufügen

1. Wählen Sie {{ui:Select}} ({{key:V}}) und klicken Sie auf eine Stütze. Sie muss senkrecht stehen.
2. Wählen Sie {{ui:Base plate}} in der Gruppe {{ui:Connect}} oder {{ui:Add base plate}} im Bereich {{ui:Properties}}.
3. Die Statusleiste meldet „Fußplatte mit vier Ankerstangen hinzugefügt.“ Der neue Anschluss ist ausgewählt.

Eine Stütze kann eine Fußplatte haben. Hat sie bereits eine, meldet die Statusleiste „Diese Stütze hat bereits eine Fußplatte.“

## Ändern

Wählen Sie die Fußplatte (klicken Sie auf die Platte oder eine Ankerstange). Unter {{ui:Plate, bolts and weld (mm)}}:

| Einstellung | Standard | Wirkung |
|---|---|---|
| Plattendicke | 25 | Die Stütze wird um diesen Betrag gekürzt |
| Plattenlänge | 450 | Entlang der Stützentiefe |
| Plattenbreite | 400 | Quer zur Stütze |
| Stangendurchmesser | 20 | Größe der Ankerstange |
| Lochdurchmesser | 33 | Loch in der Platte |
| Schraubengüte | F1554 Gr 36 | Die Güte der Stange, als Text |
| Stangenabstand (in Tiefe) | 350 | Zwischen den Stangenmitten, entlang der Plattenlänge |
| Stangenabstand (quer) | 300 | Zwischen den Stangenmitten, quer |
| Stangenüberstand über der Platte | 100 | Von der Plattenoberseite bis zur Stangenoberseite |
| Stangeneinbindung unter der Platte | 450 | Von der Plattenunterseite nach unten in den Beton |
| Kehlnahtgröße | 8 | Rundum am Stützenfuß |
| Plattenmaterial | A36 | Text |
| Vergussfuge | 0 | Abstand zwischen der Betonoberkante und der Plattenunterseite |
| Steifen | Keine | Keine, 2 (in der Flucht des Stegs) oder 4 (zusätzlich rechtwinklig dazu) wählen; siehe unten |
| Steifendicke, Höhe | 12, 150 | |
| Schubknaggentiefe | 0 | Wie weit der Knagge unter die Platte reicht; 0 = keine Knagge |
| Schubknaggendicke, Breite | 25, 150 | |
| Unterlegplatten | Keine | An jeder Stange oder keine |
| Größe, Dicke der Unterlegplatte | 0, 0 | 0 = das Mindestmaß nach AISC Design Guide 1 für die Stange |

Ankerstangenlänge = Einbindetiefe + Vergussfuge + Plattendicke + Überstand. Mit den Standardwerten sind das 575 mm.

## Details zur Fußplatte: Vergussfuge, Steifen, Schubknagge, Unterlegplatten

Alle vier sind bei einer neuen Fußplatte ausgeschaltet, ebenso bei Fußplatten aus Modellen, die vor DetailCraft 0.4 erstellt wurden.

- **Vergussfuge.** Die Platte sitzt so weit über der Betonoberkante, und die Stangen werden um dieses Maß länger. AISC Design Guide 1 (2.10) empfiehlt 1 in. auf einem fertigen Boden und 1½ bis 2 in. auf einem Fundament oder Pfeiler; mehr bei großen Platten und Platten mit einer Schubknagge.
- **Steifen.** Senkrechte Platten, die an die Stütze und an die Platte geschweißt werden, von der Stützenfläche bis zum Plattenrand, als Rechtecke (noch keine Fase oder Verjüngung). **2** stehen in der Flucht des Stegs, jenseits jedes Flansches; **4** fügen zwei rechtwinklig zum Steg hinzu, zwischen den Flanschen, bis zu den Plattenseiten. Bei einer Rohrstütze stehen sie in der Mitte jeder Fläche. Jede ist beidseitig an die Stütze und die Platte geschweißt.
- **Schubknagge.** Eine Platte, rundum unter der Fußplatte angeschweißt, in der Flucht der Stützentiefe und mittig. DetailCraft warnt, wenn sie nicht tiefer ist als die Vergussfuge. Sie schneidet keine Aussparung im Fundament aus; die [Kollisionsprüfung](topic:clash-check) lässt die Knagge und das Fundament aus diesem Grund außen vor.
- **Unterlegplatten.** Eine quadratische Unterlegplatte auf jeder Stange, auf der Fußplatte aufliegend, in der Baugruppe der Stütze als lose aufgeführt (mit der Stütze geliefert, nicht angeschweißt: Design Guide 1, 2.6). Bei Größe und Dicke 0 nimmt DetailCraft die Mindestunterlegplatte aus AISC Design Guide 1, 2. Auflage, Tabelle 2.3 für die Stange; eine metrische Stange erhält die nächstgrößere Zoll-Größe (eine M20-Stange erhält die Zeile für 7/8 in.: 2½ in. × 5/16 in.). Der Eigenschaftsbereich zeigt die verwendete Größe. Das Loch der Unterlegplatte ist der Stangendurchmesser + 1/16 in.: Das ist DetailCraft-Vorgabe, die Tabelle gibt keine vor. DetailCraft warnt, wenn die Stangen eventuell nicht weit genug über die Unterlegplatte und eine Mutter hinausragen (Überstand kleiner als Unterlegplattendicke + Stangendurchmesser).

Design Guide 1, Tabelle 2.3, empfiehlt außerdem das Stangenloch in der Platte: 1-5/16 in. für eine ¾-in.-Stange, 1-9/16 in. für ⅞ in., 1-13/16 in. für 1 in. DetailCraft ändert Ihre Lochgröße nicht.

Warnungen erscheinen auch, wenn die Stangenlöcher näher als das 1,2-Fache des Lochdurchmessers am Plattenrand liegen, wenn die Stangen innerhalb des Stützenquerschnitts liegen oder wenn die Platte kleiner als die Stütze ist.

## Auf ähnliche Stützen kopieren

1. Wählen Sie die Fußplatte.
2. Wählen Sie {{ui:Apply to similar (n)}} oder {{ui:Similar}} im Menü {{ui:More}} der Gruppe {{ui:Connect}}.
3. Jede senkrechte Stütze mit demselben Profil, die keine Fußplatte hat und nicht auf einer anderen Stütze steht, erhält eine Kopie.

## Fußplatten und Fundamente

Eine Fußplatte braucht kein Fundament, und ein Fundament kennt die Fußplatte darüber nicht: Die Ankerstangen sind nicht mit der Bewehrung des Fundaments verbunden. Platzieren Sie Fundamente mit {{ui:Footing}}; siehe [Fundamente mit Bewehrung platzieren](topic:footings-and-rebar).
