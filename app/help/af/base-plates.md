---
title: Voeg basisplate en ankerstawe by
summary: Plaas 'n gesweisde basisplaat met vier ankerstawe onder 'n kolom, stel die afmetings en kopieer dit na elke soortgelyke kolom.
keywords: basisplaat, basisplate, ankerstawe, ankerbouts, verankeringsbouts, kolombasis, fondasiebouts, soortgelyk
from: 619ebc64
---

'n Basisplaatverbinding plaas 'n plaat onder die kolom, sny die kolom korter met die plaatdikte, sweis die twee saam en voeg vier ankerstawe by deur gate in die plaat.

:::warning
Die afmetings is beginwaardes, nie 'n ontwerp nie. DetailCraft toets nie druk, staafsterkte of inbedding nie.
:::

## Voeg 'n basisplaat by

1. Kies die {{ui:Select}}-instrument ({{key:V}}) en klik op 'n kolom. Dit moet vertikaal wees.
2. Kies {{ui:Base plate}} in die {{ui:Connect}}-groep, of {{ui:Add base plate}} in die {{ui:Properties}}-paneel.
3. Die statusbalk sê "Basisplaat bygevoeg met vier ankerstawe." Die nuwe verbinding is gekies.

'n Kolom kan een basisplaat hê. As dit reeds een het, sê die statusbalk "Hierdie kolom het reeds 'n basisplaat."

## Verander dit

Kies die basisplaat (klik op die plaat of 'n staaf). Onder {{ui:Plate, bolts and weld (mm)}}:

| Instelling | Verstek | Wat dit doen |
|---|---|---|
| Plaatdikte | 25 | Die kolom word met soveel ingekort |
| Plaatlengte | 450 | Langs die kolomdiepte |
| Plaatbreedte | 400 | Dwars oor die kolom |
| Staafdeursnee | 20 | Grootte van die ankerstaaf |
| Gatdeursnee | 33 | Gat in die plaat |
| Boutgraad | F1554 Gr 36 | Die staafgraad, as teks |
| Staafafstand (langs diepte) | 350 | Tussen staafmiddelpunte, langs die plaatlengte |
| Staafafstand (dwars) | 300 | Tussen staafmiddelpunte, dwars |
| Staafuitsteek bo plaat | 100 | Van die plaat se bopkant tot die staaf se bopkant |
| Staafinbedding onder plaat | 450 | Van die plaat se onderkant af in die beton af |
| Filletsweislasgrootte | 8 | Rondom die kolombasis |
| Plaatmateriaal | A36 | Teks |
| Gietspleet | 0 | Ruimte tussen die bopkant van die beton en die plaat se onderkant |
| Versterkers | Geen | Kies Geen, 2 (in lyn met die lyf) of 4 (ook vierkant daarteen); sien hieronder |
| Versterkerdikte, hoogte | 12, 150 | |
| Skuiflipdiepte | 0 | Hoe ver die lip onder die plaat reik; 0 = geen lip |
| Skuiflipdikte, breedte | 25, 150 | |
| Plaatringe | Geen | Op elke staaf, of geen |
| Ringgrootte, dikte | 0, 0 | 0 = die minimum uit AISC Design Guide 1 vir die staaf |

Staaflengte = inbedding + gietspleet + plaatdikte + uitsteek. Met die verstekwaardes is dit 575 mm.

## Basisbesonderhede: gietsel, versterkers, skuiflip, ringe

Al vier is af op 'n nuwe basisplaat, en op basisplate uit modelle wat voor DetailCraft 0.4 gemaak is.

- **Gietspleet.** Die plaat sit so ver bo die betonbopkant, en die stawe word dieselfde hoeveelheid langer. AISC Design Guide 1 (2.10) stel 1 in. op 'n afgewerkte vloer en 1½ tot 2 in. op 'n fondasie of pilaar voor; meer vir groot plate en plate met 'n skuiflip.
- **Versterkers.** Vertikale plate wat aan die kolom en die plaat gesweis is, vanaf die kolomvlak tot by die plaatrand, as reghoeke (nog geen skuinsing of taps nie). **2** staan in lyn met die lyf, verby elke flens; **4** voeg twee vierkant teen die lyf by, tussen die flense, tot by die plaatkante. Op 'n buiskolom staan hulle in die middel van elke vlak. Elkeen is aan albei kante aan die kolom en die plaat gesweis.
- **Skuiflip.** 'n Plaat wat rondom onder die basisplaat gesweis is, in lyn met die kolomdiepte, gesentreer. DetailCraft waarsku as dit nie dieper is as die gietspleet nie. Dit sny nie die holte in die fondasie nie; die [botsingskontrole](topic:clash-check) laat die lip en die fondasie daarom uit.
- **Plaatringe.** 'n Vierkantige plaatring op elke staaf, op die basisplaat, gelys in die kolom se samestelling as los (saam met die kolom verskeep, nie gesweis nie: Design Guide 1, 2.6). Met grootte en dikte 0 neem DetailCraft die minimum ring uit AISC Design Guide 1, 2de uitg., Tabel 2.3 vir die staaf; 'n metrieke staaf neem die volgende duimgrootte ('n M20-staaf kry die 7/8 in.-ry: 2½ in. × 5/16 in.). Die eienskappe-paneel wys die grootte wat gebruik is. Die ring se gat is die staafdeursnee + 1/16 in.: dit is DetailCraft se keuse, want die tabel gee nie een nie. DetailCraft waarsku wanneer die staaf dalk nie ver genoeg uitsteek vir die ring en 'n moer nie (uitsteek minder as ringdikte + staafdeursnee).

Design Guide 1, Tabel 2.3, beveel ook die staafgat in die plaat aan: 1-5/16 in. vir 'n ¾ in.-staaf, 1-9/16 in. vir ⅞ in., 1-13/16 in. vir 1 in. DetailCraft verander nie jou gatgrootte nie.

Waarskuwings verskyn ook wanneer die staafgate nader as 1,2 × die gatdeursnee aan die plaatrand is, wanneer die stawe binne die kolomomtrek val, of wanneer die plaat kleiner as die kolom is.

## Kopieer dit na soortgelyke kolomme

1. Kies die basisplaat.
2. Kies {{ui:Pas op soortgelyke (n) toe}}, of {{ui:Similar}} in die {{ui:More}}-kieslys van die {{ui:Connect}}-groep.
3. Elke vertikale kolom met dieselfde profiel wat geen basisplaat het nie en nie op 'n ander kolom staan nie, kry 'n kopie.

## Basisplate en fondasies

'n Basisplaat het nie 'n fondasie nodig nie, en 'n fondasie weet nie van die basisplaat bo dit nie: die ankerstawe is nie aan die fondasie se staaf vasgemaak nie. Plaas fondasies met {{ui:Footing}}; sien [Plaas fondasies met wapening](topic:footings-and-rebar).
