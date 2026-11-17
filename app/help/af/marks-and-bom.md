---
title: Kontroleer merke en die materiaallys
summary: Lees die deel- en samestellingsmerke wat DetailCraft aan elke stuk gee, kontroleer die materiaallys, en laai dit as CSV af.
keywords: merke, nommering, deelmerk, samestellingsmerk, stukmerk, bom, materiaallys, materiaallys, gewigte, boutlys, csv, nommering
from: caa2ee80
---

DetailCraft merk die model self. Daar is geen nommeringsopdrag nie en niks om te laat loop nie: na elke verandering werk dit uit watter onderdele dieselfde stuk staal is en gee hulle een merk.

## Waar merke wys

- Die lys {{ui:Part marks}} in die {{ui:Model}}-paneel: elke merk met sy profiel, lengte en aantal. Klik op een om die eerste onderdeel met daardie merk te kies.
- Die {{ui:Properties}}-paneel van 'n gekose lid (en die lys **Part marks** in die linkerpaneel): {{ui:Part mark}} en {{ui:Assembly}}. Die paneelkop dra ook die merk, byvoorbeeld "Beam b1".
- Die {{ui:Bill of materials}}-oortjie, die CSV, die NC-lêernaamme, die werkswinkeltekeninge en die IFC-uitvoer (as elke element se etiket).

## Hoe onderdele gemerk word

- **Deelmerke:** c vir kolomme, b vir balke, br vir diagonale, st vir trapbome, p vir plate (insluitend eindplate en basisplate). Dan 'n nommer: c1, c2, b1, p1 … Wanneer onderdele in meer as een fase sit, kom 'n fasenommer eerste, byvoorbeeld 2-b1.
- **Samestellingsmerke:** C, B, BR of P. 'n Samestelling is 'n hoofrlid en die plate wat daarop gesweis is, soos 'n balk met sy twee eindplate, of 'n kolom met sy basisplaat.
- Twee onderdele deel 'n merk wanneer hulle dieselfde profiel, materiaal en snylengte het, en dieselfde gate en uitsnyings, almal binne 1 mm, selfs al is een einde-tot-einde of ondertoe ten opsigte van die ander gedraai.
- Die nommering loop eers kolomme, dan balke, diagonale en plate; binne elk, volgens profielnaam, langste eerste.

Die volledige reëls, insluitend watter draaiings tel vir kanale en hoeke: [Merkreëls](topic:mark-rules).

:::warning
Merke word na elke verandering vars uitgewerk, so hulle kan hernommer. Om 'n onderdeel by te voeg, 'n profiel te verander of 'n gat by te voeg, kan b3 na b4 skuif. Beskou merke as finaal slegs wanneer die model klaar is, en maak die BOM, NC-lêers en werkswinkeltekeninge uit dieselfde gestoorde model.
:::

## Lees die materiaallys

Maak die {{ui:Bill of materials}}-oortjie onderaan oop. Dit het drie tabelle.

**Onderdele**, met die totale staalgewig in die kop:

| Kolom | Betekenis |
|---|---|
| Part mark | Klik daarop om die eerste onderdeel met hierdie merk te kies |
| Tipe | balk, kolom, diagonaal, trapboom of plaat |
| Profiel | Byvoorbeeld W16x26 of PL20x180 |
| Materiaal | Die graad wat jy gestel het |
| Lengte (mm) | Snylengte, na verbindings |
| Telling | Hoeveel |
| Eenheidsgewig (kg) | Profielmassa per meter × lengte |
| Totale gewig (kg) | Eenheidsgewig × telling |

Die laaste ry gee die totale telling en gewig.

**Samestellings:** elke samestellingsmerk, sy hoofonderdeel, al sy onderdele (byvoorbeeld "b1 + p1 + p1"), telling, eenheidsgewig en totale gewig.

**Bouts en ankerstawe:** gegroepeer volgens soort, deursnee, lengte en graad, met 'n telling.

:::note
Gewigte is bruto: gate en uitsnyings word nie afgetrek nie. Bouts, moere, ringe en sweislasse is nie in die staalgewig nie.
:::

## Laai dit af

Kies {{ui:Download CSV}} in die oortjie, of {{ui:BOM}} in die {{ui:Output}}-groep. Die lêer `<name> BOM.csv` hou die drie tabelle een na die ander, elk onder sy titel, met 'n lee lyn tussen hulle. Dit maak oop in enige sigblad-program.

## Kontroleer voor jy stuur

1. Maak die {{ui:Problems}}-oortjie oop en los elke lyn op. 'n Verbinding wat nie gebou kon word nie, voeg geen plaat, gate of bouts by nie, so die BOM sal kort wees.
2. Soek na merke wat jy nie verwag het nie. Twee balke wat jy dink dieselfde is maar met verskillende merke, verskil gewoonlik in 'n gat, 'n uitsnyding of 'n snylengte; kies elk en vergelyk.
3. Stoor die model, en maak dan elke uitvoer uit daardie gestoorde toestand.
