---
title: Kies met 'n venster, skuif, draai, spieël, verander baie
summary: Sleep 'n venster om te kies, sleep gekose onderdele om hulle te skuif, skuif, draai of spieël die keuse (of 'n kopie daarvan), of verander die profiel, materiaal, posisie of rotasie van baie lede op een slag.
keywords: lasso, omheining, vrye handkeuse, sleep, sleep en laat val, skuif deur te sleep, vasklik, venster, kruisvenster, boksseleksie, sleepkeuse, kies baie, skuif, draai, spieël, omdraai, kopieer, verander baie, verskeie lede, profiel, materiaal, posisie, rotasie, wissel, rasterlyn
from: 50b16f9a
---

Elkeen hiervan is een ongedaan-maak-stap: een {{key:Mod+Z}} neem alles terug.

## Kies met 'n venster

- In {{ui:Plan}} en {{ui:Elevation}}, sleep met die linkerknop vanaf 'n leë plek. In {{ui:3D}}, hou {{key:Shift}} vas en sleep ('n gewone sleep draai die model).
- Sleep **na regs** vir 'n venster: dit neem wat heeltemal binne is, en word met 'n volle rand geteken.
- Sleep **na links** vir 'n kruisvenster: dit neem alles wat dit raak, en word stippellyn geteken.
- Hou {{key:Shift}} vas terwyl jy die sleep begin om by die keuse te voeg in plaas van dit te vervang.
- 'n Plan of aansig bied net aan wat dit wys: onderdele wat bo die plan afgesny is, of meer as 1 m van die aansig se rasterlyn af, word nie gekies nie.
- {{key:Esc}} terwyl jy sleep, laat die venster val.

### Lasso

Kies **Lasso** onder {{ui:Dragging to select}} in [DetailCraft-instellings](topic:settings), en dieselfde sleep teken 'n vrye lyn in plaas van 'n reghoek.

- Die eerste beweging sywaarts bepaal hoe dit kies: **na regs**, wat heeltemal binne is (volle lyn); **na links**, wat raak (stippellyn).
- Druk {{key:Space}} terwyl jy sleep om te wissel tussen binne, raak en **omheining**: 'n oop lyn wat alles neem wat dit kruis (kolletjielyn, oranje).
- {{key:Shift}} om by te voeg en {{key:Esc}} om te laat val werk soos vir die venster.

:::touch
Op 'n aanraakskerm skuif een vinger die plan en aansig soos voorheen; kies onderdele deur daarop te tik.
:::

In {{ui:Plan}} en {{ui:Elevation}}, pan met die regter- of middelknop terwyl die {{ui:Select}}-instrument aan is.

## Sleep onderdele om hulle te skuif

1. Kies eers die onderdele (klik, {{key:Shift}}+klik of 'n venster).
2. Druk op een van die gekose onderdele en sleep. Die hele keuse beweeg; 'n stippellyn-omtrek wys waarheen dit gaan.
3. Laat los om dit te plaas. {{key:Esc}} voordat jy loslaat, plaas alles terug.

- In {{ui:3D}} en {{ui:Plan}} beweeg die onderdele oor die vlak. Hou {{key:Mod}} vas terwyl jy in {{ui:3D}} die sleep begin om hulle op en af te beweeg.
- In {{ui:Elevation}} beweeg hulle binne die aansig: langs die rasterlyn en op en af.
- Die onderdeel wat jy vashou, klik vas op 'n rasterkruising wanneer sy einde binne 'n paar pixels daarvan kom (die kruising gloei en die statusbalk noem dit). Andersins gaan die skuif in stappe van 10 mm.
- Druk op 'n onderdeel wat nie gekies is nie, draai of pan die aansig steeds, sodat 'n sleep nooit per ongeluk iets skuif nie.
- Die sleep is een ongedaan-maak-stap, soos {{ui:Move}}. Verbindings volg hul lede.

## Verander 'n eienskap op baie lede

Kies twee of meer lede. Onder **Verander op almal van hulle** in die {{ui:Properties}}-paneel:

- {{ui:Profile}}, {{ui:Position}}: vir die balke, kolomme en diagonale onder hulle.
- {{ui:Plate thickness (mm)}} en {{ui:Plate width (mm)}}: vir die plate.
- {{ui:Material}} en {{ui:Rotation (°)}}: vir almal.

'n Veld wys **Wissel** wanneer die lede nie ooreenstem nie. Kies of tik 'n waarde, en elke lid waarvoor dit geld, neem dit; die statusbalk sê hoeveel verander het en hoeveel hul eie gehou het.

Getalvelde in die {{ui:Properties}}-paneel neem ook 'n berekening: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. 'n Berekening wat nie gelees kan word nie, word geweier, en die statusbalk sê waar dit verkeerd gegaan het.

## Skuif, draai of spieël

Kies lede en fondasies (een alleen werk ook), gebruik dan **Skuif, draai, spieël** in die {{ui:Properties}}-paneel. Verbindings word nie op hul eie geskuif nie: hulle volg hul lede. As jy 'n balk skuif maar nie sy kolom nie, sê die statusbalk hoeveel verbindings nou 'n geskuifde lid aan een wat gebly het, verbind, en [Probleme](topic:troubleshooting) sê as hulle nie meer pas nie.

- **Skuif:** tik x, y en z in millimeter en kies {{ui:Move}}. Of kies {{ui:Pick two points}} (of druk {{key:M}}): klik op die rasterkruising om van af te skuif, en dan die een om na toe te skuif. 'n Stippellyn-omtrek volg die aanwyser.
- **Draai in die plan:** tik die hoek (teen die klok in, gesien van bo) en kies waarom gedraai word: die keuse se middel, of 'n rasterkruising. Kolomme draai saam met die raam.
- **Spieël:** kies 'n rasterlyn. Die spieelbeeld is dieselfde profiel anders om: 'n I-profiel hou sy flense, 'n kanaal kyk die ander kant toe (sy bo en onder ruil), en gate en uitsnyings gaan saam met die onderdeel.
- Merk **Hou die oorspronklike (maak 'n kopie)** om die keuse waar dit is te laat en 'n kopie te skuif, draai of spieël. Die verbindings kom saam wanneer {{ui:Copy end plates and base plates with their members}} aan is in [DetailCraft-instellings](topic:settings).

Draai gaan om 'n vertikale lyn en spieël is in 'n vertikale vlak, so vlakke bly plat en fondasies bly regop.
