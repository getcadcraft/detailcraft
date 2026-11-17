---
title: Sehemu za data za faili la NC
summary: Kile DetailCraft huandika katika kila faili la DSTV NC, sehemu kwa sehemu, na jinsi nyuso na viwianishi vinavyopimwa.
keywords: nc1, dstv, faili la nc, kizuizi cha ST, ak, bo, kichwa, nyuso, viwianishi, cnc, muundo
from: 1b676fc1
---

Kila faili la `.nc1` linaelezea alama moja ya sehemu. Mistari inaishia kwa CR LF. Maandishi yana ASCII tupu; herufi nyingine hugeuka kuwa "?". Mstari wa pili ni maoni, `** DetailCraft <mark>.nc1`.

## Kichwa (ST)

| Sehemu ya data | I-shape, chaneli | Pembe | HSS ya mstatili | HSS ya duara | Bamba |
|---|---|---|---|---|---|
| Oda | Jina la modeli | ← | ← | ← | ← |
| Mchoro, kipande | Alama ya sehemu | ← | ← | ← | ← |
| Awamu | Awamu ya sehemu, au 1 | ← | ← | ← | ← |
| Daraja la chuma | Daraja la nyenzo | ← | ← | ← | ← |
| Kiasi | Idadi ya sehemu zenye alama hii | ← | ← | ← | ← |
| Wasifu | Jina la wasifu, kwa mfano W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Msimbo wa wasifu | I au U (chaneli) | L | M | RO | B |
| Urefu | Urefu wa kukatwa | ← | ← | ← | Urefu |
| Kimo | Kina d | Mguu | Kimo | Kipenyo | Upana wa bamba |
| Upana wa flensi | bf | Mguu | Upana | Kipenyo | 0 |
| Unene wa flensi | tf | t | Ukuta t | Ukuta t | 0 |
| Unene wa ukuta (web) | tw | t | Ukuta t | Ukuta t | Unene wa bamba |
| Radius | Radius ya kona ya ndani (0 kwa chaneli za AISC) | 0 | Radius ya kona ya nje | 0 | 0 |
| Uzito kwa mita | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Eneo la rangi kwa mita | Mzunguko wa nje, m²/m | ← | ← | ← | 2 (nyuso zote mbili, m²/m²) |
| Pembe za msumeno (sehemu 4) | 0 (mraba) | ← | ← | ← | ← |
| Sehemu za maandishi (4) | `-` | ← | ← | ← | ← |

Bamba zinafuata safu ya "for the sheets" ya kiwango, yaani safu ya karatasi. Kiwango hakina safu ya mirija ya duara: DetailCraft huandika kipenyo kama kimo na kama upana wa flensi, na ukuta kama unene wa pande zote mbili.

## Mikondo ya nje (AK)

- **I-shapes na chaneli:** ukuta (v), wenye mkato wa mstatili kwa kila mkato wa kona; kila flensi (o na u), ikifupishwa mwishoni mahali ambapo mkato wa kona una kina angalau sawa na flensi.
- **HSS ya mstatili:** kuta zote mbili za pembeni (v na h), zikiwa na mikato ya kona, pamoja na kuta za juu na chini (o na u).
- **Pembe:** mstatili mmoja kwa kila mguu (v na u). Mikato ya kona kwenye pembe haiandikwi: sehemu kama hiyo huorodheshwa kuwa haijaandikwa. Mshikio wa pembe uliofungwa kwa [gusseti](topic:brace-gussets) una matundu kwenye mguu uliofungwa: v kwa mguu unaoenda kando ya u ya sehemu, u kwa mguu unaoenda kando ya v yake.
- **HSS ya duara:** mstatili mmoja kwenye v, bomba likionekana kutoka mbele (urefu × kipenyo).
- **Bamba:** mstatili mmoja kwenye uso v.

Kila mkondo umefungwa (nukta ya kwanza inarudiwa mwishoni) na unakwenda kinyume cha saa.

## Matundu (BO)

Mstari mmoja kwa kila tundu: uso, x, y, kipenyo, kina 0 (kupitia). Matundu yote yanajumuishwa, yale uliyoandika na yale ambayo miunganisho imeyatengeneza. Tundu linalopita kwenye kuta za pembeni za HSS ya mstatili linaandikwa mara mbili, mara moja kwenye v na mara moja kwenye h.

## Nyuso na viwianishi

Kila wasifu huwekwa kama mchoro wa nafasi za wasifu wa kiwango unavyouchora (DSTV 1998, uk. 7): x kando ya sehemu, Y kuvuka, Z juu kutoka uso wa nyuma, na nukta sifuri kwenye kona ya nje. DetailCraft haigeuzi sehemu kama kioo ili itoshee mchoro.

| Uso | I-shape | Chaneli | Pembe | HSS ya mstatili | Bamba |
|---|---|---|---|---|---|
| v | Ukuta, mbele | Ukuta, ukionekana kutoka upande wa vidole | Mguu kando ya u ya sehemu | Ukuta wa pembeni kwenye −u | Uso wa bamba |
| h | | | | Ukuta wa pembeni kwenye +u | |
| o | Flensi ya juu | **Flensi ya chini** | | Ukuta wa juu | |
| u | Flensi ya chini | **Flensi ya juu** | Mguu kando ya v ya sehemu | Ukuta wa chini | |

- **x** inaenda kando ya sehemu kutoka mwanzo wa kukata.
- **I-shapes na HSS ya mstatili:** y kwenye ukuta au kuta za pembeni ni kutoka chini ya wasifu; y kwenye flensi au kwenye kuta za juu na chini ni kutoka ukingo wake upande wa nyuma (upande wa +u wa sehemu).
- **Chaneli** zimelala migongoni zikiwa vidole vinaelekea juu, kama kwenye mchoro wa kiwango. Kwa hiyo y kwenye ukuta inaanza kutoka nje ya flensi ya juu na kushuka chini, flensi ya juu ni uso u na flensi ya chini ni uso o, na y kwenye flensi inaenda kutoka nyuma ya ukuta kuelekea kidole.
- **Pembe:** y kwenye kila mguu ni kutoka kisigino.
- **Bamba:** y kutoka ukingo wa −u wa bamba.

Kabla ya kukata, angalia jinsi programu ya mashine yako inavyosoma nyuso za chaneli: baadhi ya programu huzigeuza upande wa pili.

## Kisichoandikwa

Mikato ya pembe (bevels), mikondo ya ndani, alama (SI), pembe za msumeno zisizo za mraba, matundu yenye nafasi ndefu, matundu kwenye mirija ya duara (DetailCraft haina), na mikato ya kona kwenye pembe na mirija ya duara.
