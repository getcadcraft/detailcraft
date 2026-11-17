---
title: Merkingareglur
summary: Nákvæmlega hvenær tveir hlutar eða tvær samsetningar deila merki, hvernig merkin eru númeruð og hvernig merki undirstaða og stanga virka.
keywords: merki, númerun, auðkenni hlutar, samsetningarmerki, hlutamerki, forskeyti, skekkjumörk, eins hlutir, stangamerki, merki undirstaða
from: ce02c98e
---

DetailCraft reiknar öll merki upp á nýtt eftir hverja breytingu. Ekkert er geymt, svo merkin lýsa alltaf líkaninu eins og það er núna. Sjá [Yfirfara merki og efnislista](topic:marks-and-bom) um hvernig á að nota þau.

## Merkingar hluta

Tveir hlutar deila auðkenni hluta þegar allt þetta passar:

1. Gerð hlutar (bitur, súla, skástífa eða plata).
2. Heiti prófílsins (án tillits til há- og lágstafa).
3. Efnið (án tillits til há- og lágstafa).
4. Skurðarlengdin, innan 1 mm.
5. Hvert gat: flötur, staða eftir lengd og þvert, innan 1 mm, og þvermál innan 0.1 mm.
6. Hvert úrtak: endi, hlið, lengd og dýpt, innan 1 mm.

{{ui:Heiti}} hlutarins telur ekki með. Staða hans í líkaninu, snúningur hans og hvernig hann var teiknaður telja heldur ekki með, svo lengi sem hluturinn sjálfur er sá sami.

### Hlutir sem eru snúnir við

Hlutur er borinn saman á alla vegu sem hægt er að snúa honum við þannig að þversniðið falli á sjálft sig. Ef einhver þeirra gerir hann eins og annan hlut, deila þeir merki.

| Lögun | Snúningar sem telja |
|---|---|
| I-prófílar, rétthyrnd HSS, plötur | Endi í endann (um lóðrétta ásinn), endi í endann (um láréttan ásinn) og á hvolf um eigin lengd |
| U-prófílar | Endi í endann um láréttan ásinn eingöngu, svo sálin er áfram á sömu hlið |
| Hornprófílar, kringlótt HSS | Engir: borið saman eins og það er lagt |

Þannig passar bitur með gat nálægt vinstri enda við bita með sama gat nálægt hægri enda, og súla með göt í öðrum flansinum passar við súlu með sömu göt í hinum flansinum.

### Númerun

| Gerð | Forskeyti hluta | Forskeyti samsetningar |
|---|---|---|
| Súla | c | C |
| Biti | b | B |
| Skástífa | br | BR |
| Plata (staðsett, endaplata eða undirplata) | p | P |

Merki eru númeruð frá 1 innan hvers forskeytis. Röðin er: súlur, síðan bitar, skástífur og plötur; innan gerðar, eftir heiti prófíls í náttúrlegri röð (W8x10 á undan W12x26); síðan lengri hlutar fyrst.

Þar sem númerunin fylgir þessari röð, getur það að bæta við eða breyta einum hluta fært númer annarra.

## Samsetningarmerki

- Sérhver hluti sem er ekki soðinn við annan hlut er aðalhluti eigin samsetningar.
- Endaplötur eru soðnar við bitann sinn og undirplötur við súluna sína, svo þær tilheyra samsetningu þess hluta.
- Tvær samsetningar deila merki þegar aðalhlutar þeirra deila auðkenni hluta og festir hlutar þeirra hafa sömu merki á sömu stöðum (innan 1 mm), með sömu snúningum og aðalhlutinn leyfir.
- Forskeyti samsetningar fylgir aðalhlutanum: bitur með tvær endaplötur er B-samsetning.

Plötur sem þú setur með verkfærinu {{ui:Plata}} eru ekki soðnar við neitt, svo hver þeirra er sín eigin P-samsetning.

## Merki undirstaða

Undirstöður með sömu lengd, breidd, dýpt, steypulýsingu, neðra neti og upphafsstöngum deila merki: F1, F2 … í þeirri röð sem þær voru settar. Staða og snúningur telja ekki með.

## Stangamerki

Stangir með sömu stærð, lögun og mál A, B og C (námundað að millimetra) deila merki yfir allar undirstöður. Merkið er stangarnúmerið, F, og teljari fyrir hverja stangarstærð: 5F1, 5F2, 6F1. Löng stöng og stutt stöng í ferhyrndri undirstöðu eru sama stöngin og deila merki; dálkurinn {{ui:Notað fyrir}} í listanum tilgreinir báðar notkunarleiðir.
