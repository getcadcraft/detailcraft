---
title: Athugaðu IFC-útflutninginn gegn IDS verkkaupa
summary: Hlaðaðu inn .ids-skránni sem þú fékkst og sjáðu í Vandamálum alla útflutta hluta sem uppfylla hana ekki, áður en þú sendir IFC.
keywords: ids, information delivery specification, buildingsmart, kröfur, afhending, athugun, staðfesting, gæðaeftirlit, ifc-útflutningur, eiginleiki, efni, innkaup
from: 50d0f785
---

## Það sem þú gerir

IDS (Information Delivery Specification, staðall frá buildingSMART) er listinn yfir það sem IFC-skrá verður að innihalda. DetailCraft athugar IFC-skrána sem hún myndi flytja út (sömu skrá og {{ui:IFC}} skrifar) gegn IDS-skránni sem þú fékkst, og skráir alla hluti sem standast hana ekki.

## Skref

1. Opnaðu eða teiknaðu líkanið.
2. Smelltu á {{ui:Athuga gegn IDS…}} í hópnum {{ui:Útkoma}} á tækjastikunni.
3. Smelltu á {{ui:Hlaða inn .ids-skrá…}} og veldu skrána. Ekkert er sent upp.
4. Lestu niðurstöðuna: hverja lýsingu með {{ui:Stenst}} eða {{ui:Fellur}} og hversu mörg frumefni hún nær til.
5. Opnaðu {{ui:Vandamál}} ({{key:Ctrl+Shift+M}}) og smelltu á bilun: hluturinn, tengingin, stiginn eða undirstaðan sem hún kemur frá er valin og sýnin aðdráttast að henni.

## Það sem þú átt að sjá

- Ein viðvörun fyrir hvert útflutt frumefni og hverja kröfu sem það uppfyllir ekki, með heiti lýsingarinnar, því sem IDS krefst og því sem útflutningurinn hefur.
- Athugunarskýrslan (í Vandamálum) byrjar á IDS: titli hennar, útgáfu, höfundi og fjölda hverrar lýsingar.

## Gott að vita

- IDS er vistuð í líkanskránni, þannig að hún er athuguð aftur þegar þú opnar líkanið. Að hlaða henni inn eða gleyma henni er eitt skref sem hægt er að afturkalla.
- Sérhver breyting er athuguð aftur örlítið síðar; í stóru líkani bíður athugunin aðeins lengur á milli keyrslna.
- GlobalIds útflutningsins koma frá heiti líkansins og hlutanúmerum innan DetailCraft, þannig að þau haldast þau sömu milli athugana. Ef líkaninu er endurnefnt fær sérhvert frumefni ný GlobalIds.
- Tölur eru bornar saman í SI-einingum (útflutningurinn er í millimetrum; lengdir eru fyrst breyttar í metra).

- Mynstur í IDS eru lesin sem allt gildið. `^` í upphafi og `$` í lok eru líka túlkuð sem „allt gildið“, eins og flestar IDS-skrár ætla.

## Næst

- [Flytja út IFC](topic:ifc-export)
