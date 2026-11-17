---
title: Verbind balke aan kolomme met eindplate
summary: Voeg geboute eindplate by waar 'n balk 'n kolomflens of -lyf ontmoet, stel die plaat, boute en sweislas, en kopieer die verbinding na elke soortgelyke verbinding.
keywords: eindplate, momentverbinding, geboute verbinding, verbinding, boute, sweislas, verlengde eindplate, gelykvlak, soortgelyk, kopieer verbinding, komponent
from: 21e028b2
---

'n Eindplate-verbinding sweis 'n plaat aan die balkeinde en bout dit aan die kolomflens of -lyf. DetailCraft plaas die plaat, sny die balk terug, boor passende gate in die plaat en die kolomflens, voeg die boute en die sweislas by, en kontroleer randafstande en spasiëring.

:::warning
DetailCraft ontwerp nie verbindings nie. Die instellings is beginwaardes wat jy kan verander; niks kontroleer sterkte nie. Die rand- en spasiëringswaarskuwings gebruik die minimums van EN 1993-1-8 Tabel 3.3, wat kan verskil van die reëls waarvolgens jy werk.
:::

## Wat dit kan verbind

- 'n **horisontale** balk (albei eindes op dieselfde hoogte), regop (rotasie 0), met 'n I-vormprofiel.
- In die **flens** of die **lyf** van 'n **vertikale** I-vormkolom, haaks daarop.
- Die balkeinde moet op die kolom se lyn sit, tussen die kolom se onderkant en bokant.

Skeef of hellende balke en nie-I-snitte word met 'n rede geweier: gebruik [skuiflappe](topic:shear-tabs) vir dié. By 'n lyf moet die plaat en die balkflense tussen die kolomflense pas; DetailCraft waarsku wanneer hulle nie pas nie.

:::tip
By rotasie 0 wys 'n kolom se flense langs die genommerde roosterrigting (x). 'n Balk wat van A na B loop, ontmoet die lyf, en kry 'n eindplate op die lyf.
:::

## Voeg eindplate by 'n balk

1. Kies {{ui:Kies}} ({{key:V}}) en klik op die balk.
2. Kies {{ui:Eindplate}} in die {{ui:Koppel}}-groep, of {{ui:Voeg eindplate by}} in die {{ui:Eienskappe}}-paneel.
3. Elke vrye einde van die balk wat 'n kolomflens of -lyf haaks ontmoet, kry 'n plaat. Die statusbalk sê "2 eindplate bygevoeg. Kies een om sy plaat, boute en sweislas te verander; Soortgelyk kopieer dit na soortgelyke verbindings."
4. Die eerste nuwe eindplate word gekies en sy instellings is in die {{ui:Eienskappe}}-paneel.

As niks gebeur nie, lees die statusbalk:

- "Hierdie balk eindig nie op 'n kolomlyn nie. Eindplate gaan waar 'n balkeinde 'n vertikale kolom ontmoet."
- "Hierdie balk ontmoet 'n kolom teen 'n hoek of hel: eindplate is gebou vir haakse, horisontale verbindings. Gebruik Skuiflappe."
- "Albei eindes het reeds verbindings."

## Verander die plaat, boute en sweislas

Klik op die eindplate (of op een van sy boute) om die verbinding te kies. Onder {{ui:Plaat, boute en sweislas (mm)}}:

| Instelling | Standaard | Wat dit doen |
|---|---|---|
| Plaatdikte | 20 | Die plaat se dikte; ook hoeveel die balk verby die flens teruggesny word |
| Plaatbreedte | 180 | Oor die verbinding |
| Verlenging bo balk | 0 | Bo die boonste flens; bo 0 maak 'n verlengde eindplate |
| Verlenging onder balk | 0 | Onder die onderste flens |
| Boutdeursnee | 20 | Nominale boutgrootte |
| Gatdeursnee | 22 | Jou speling-gat in die plaat en die kolomflens |
| Bougraad | A325 | Teks; gedruk in die materiaallys |
| Boutrye | 4 | Rye van twee boute, gesentreer op die plaathoogte |
| Ryspasiëring | 75 | Vertikale spasiëring tussen rye |
| Spoorwydte | 100 | Horisontale spasiëring tussen die twee boute van 'n ry |
| Boutlengte-toelae | 30 | Bygevoeg by die greep vir die moer, ring en draad; sien hieronder |
| Kantlasgrootte | 8 | Rondom die balkeinde |
| Plaatmateriaal | A36 | Teks |

Tik 'n nuwe waarde en druk {{key:Enter}} of {{key:Tab}}. Die plaat, gate, boute en die balk se snitlengte word dadelik bygewerk. Elke verandering is een ontdoen-stap.

Onder die instellings sien jy wat die verbinding maak:

- {{ui:Boute}}: byvoorbeeld "8 × 20 × 70 A325 (greep 36.2)".
- {{ui:Sweislas}}: grootte, waar, en sy lengte.
- {{ui:Plaat}}: sy grootte en sy onderdeelmerk.

### Hoe die getalle bereken word

- Die balk word teruggesny met die helfte van die kolomdiepte (by 'n lyf: die helfte van die lyfdikte) plus die plaatdikte, sodat die plaat op die vlak sit.
- Die plaathoogte is die balkdiepte plus die twee verlengings.
- Boutlengte = greep (plaatdikte + kolomflens- of lyfdikte) + toelae, afgerond na die volgende 5 mm.
- Die sweislengte wat gewys word, is die omtrek van die balksnit.

### Waarskuwings

Die verbinding word steeds gebou, maar hierdie verskyn onder dit en in die {{ui:Probleme}}-oortjie:

- Boutrye of boute nader aan die plaatrand as 1.2 × die gatdeursnee.
- Ryspasiëring onder 2.2 × die gatdeursnee, of spoorwydte onder 2.4 × die gatdeursnee.
- Gate wat in die kolomlyf of sy kanting loop, of van die kolomflens af.
- 'n Plaat wat breër is as die kolomflens, of (by 'n lyf) breër as die ruimte tussen die flense; balkflense wat nie tussen hulle pas nie.
- 'n Boutry te na aan 'n balkflens, of 'n spoorwydte te nou vir die balklyf en sy sweislas.

## Kopieer dit na elke soortgelyke verbinding

1. Kies die verbinding wat jy opgestel het.
2. Kies {{ui:Pas toe op soortgelyke (n)}} in die {{ui:Eienskappe}}-paneel, of {{ui:Soortgelyk}} in die {{ui:Koppel}}-groep se {{ui:Meer}}-kieslys. Die getal in hakies is hoeveel verbindings dit sal kry.
3. Elke verbinding met dieselfde balkprofiel en kolomprofiel, balk in dieselfde soort vlak, wat nog geen verbinding het nie, kry 'n kopie met dieselfde instellings. Die statusbalk sê hoeveel.

Kopieë is onafhanklik: as jy later een verander, verander dit nie die ander nie. Verbindings wat reeds 'n verbinding het, word met rus gelaat; skrap daardie eerste as jy wil hê hulle moet vervang word.

## Skuif en skrap

Verbindings word elke keer as die model verander, uit hul instellings herbou, so skuif of verander die grootte van 'n balk of kolom neem sy eindplate saam. As 'n verandering beteken die verbinding pas nie meer nie, bly die verbinding in die model en die {{ui:Probleme}}-oortjie sê waarom, byvoorbeeld "Die balkeinde is nie meer op die kolomlyn nie."

Om 'n verbinding te skrap, kies dit en druk {{key:Delete}}. As die balk of die kolom geskrap word, word sy verbindings ook geskrap.

Volgende: [Voeg basisplate en ankerstawe by](topic:base-plates).
