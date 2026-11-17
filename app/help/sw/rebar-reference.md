---
title: Marejeo ya nondo
summary: Ukubwa wa nondo, vipimo vya ndoano, misimbo ya umbo, urefu wa kukata na safu za ratiba ya kupinda zinazotumiwa na DetailCraft.
keywords: nondo, ukubwa wa nondo, ndoano, kipenyo cha kupinda, misimbo ya umbo, urefu wa kukata, ratiba ya kupinda, orodha ya nondo, astm a615, aci 318
from: 1583535e
---

## Ukubwa wa nondo

Kutoka ASTM A615/A615M Jedwali 1 (majina ya inchi-pauni). Milimita na kg/m ni ubadilishaji sahihi wa thamani za inchi na lb/ft zilizochapishwa. Orodha zinaonyesha kila ukubwa kama, kwa mfano, "#5 (15.9 mm)".

| Nondo | Kipenyo (mm) | Uzito (kg/m) | Eneo (mm²) | Kipenyo cha ndani cha kupinda | Mguu wa ndoano wa 90°, nje hadi nje (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Katika [Mipangilio ya DetailCraft](topic:settings) ({{ui:Nondo}}), **majina ya nondo za ASTM** yanaweza kuonyesha nondo hizi kwa majina yao ya metriki laini ya A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (nondo zile zile; ACI 315-99 Jedwali 1 linaorodhesha yote mawili).

### Nondo za metriki (BS 4449)

| Nondo | Kipenyo (mm) | kg/m | Radius ya chini ya kupinda r (mm) | Mguu wa ndoano = makadirio ya ncha P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Uzito ni eneo la sehemu la kawaida likizidishwa na 7850 kg/m³. Radius na makadirio ya ncha ni vipimo vya chini vya BS 8666:2020 (jedwali lake la vipimo vya chini; kipenyo cha zamani ni 2r). Misingi yenye nondo za BS hupata miguu ya ndoano ya P na urefu wa kukata kwa fomula za BS 8666 hapa chini. Kuchagua chuma cha Ulaya katika mipangilio huanzisha mikeka mipya ya H16 kwa misingi na nondo za kuanzia za H20 kwenye zege ya C30/37.

## Ndoano

Nondo za ASTM: ndoano za kawaida za 90° kutoka ACI 318-19 Jedwali 25.3.1: kipenyo cha ndani cha kupinda 6 db kwa #3 hadi #8 na 8 db kwa #9 hadi #11, pamoja na upanuzi wa moja kwa moja wa 12 db zaidi ya kupinda. Mguu wa ndoano, unaopimwa nje hadi nje, ni nusu ya kipenyo cha kupinda + db + 12 db.

Ikiwa ndoano ya nondo ya mkeka haitoshei kina cha msingi ndani ya kifuniko, DetailCraft hufupisha mguu ili kutoshea na huorodhesha onyo.

## Maumbo

DetailCraft huhifadhi maumbo matatu. Ratiba ya kupinda huyachapisha kama misimbo ya DetailCraft, kama aina za ACI 315 au kama misimbo ya umbo ya BS 8666: chagua **Misimbo ya umbo ya ratiba ya kupinda** katika [Mipangilio ya DetailCraft](topic:settings) ({{ui:Nondo}}).

| Msimbo | Umbo | Vipimo |
|---|---|---|
| S | Moja kwa moja | A = urefu |
| L | Kupinda kimoja cha 90° | A = mguu mkuu, B = mguu wa ndoano, zote nje hadi nje |
| U | Kupinda viwili vya 90° upande mmoja | A = katikati, B na C = miguu miwili, nje hadi nje |

Nondo za mkeka zenye {{ui:Ndoano za ncha}} zimewashwa ni U; bila hizo, ni S. Nondo za kuanzia zenye {{ui:Ndoano chini}} zimewashwa ni L; bila hizo, ni S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Kielelezo 10) |
|---|---|---|
| S | 00, L = A | hakuna nambari ya aina |
| L | 11, L = A + B − 0.5r − d | hakuna nambari ya aina: kielelezo hakina nondo yenye ndoano moja |
| U | 21, A na C ni miguu, B ni katikati: L = A + B + C − r − 2d | Aina 2, ndoano A na G, B moja kwa moja |

Kwa misimbo ya BS 8666 au ACI 315, safu za A, B na C za ratiba zinafuata herufi za kiwango hicho (katikati ya U ni B).

## Urefu wa kukata

Kwa nondo za BS 4449, urefu wa kukata ni fomula ya BS 8666 ya msimbo wa umbo wa nondo (hapo juu). Kwa nondo za ASTM ni urefu halisi wa mstari wa katikati wa nondo: sehemu zilizonyooka pamoja na mipinda kama arc zenye radius ya nusu ya kipenyo cha kupinda pamoja na nusu ya kipenyo cha nondo. Haihesabiwi kutoka jedwali la punguzo za kupinda, kwa hiyo inaweza kutofautiana kwa milimita chache na ratiba inayotumia jedwali hilo.

## Mpangilio

- Mkeka wa chini: nondo zilizo kando ya L zinaunda safu ya chini, nondo zilizo kando ya B zinakaa juu yake. Kila seti inasambazwa sawasawa kwenye msingi ndani ya kifuniko, kwa nafasi unayotoa au karibu zaidi, na angalau nondo mbili.
- Nondo za kuanzia: gridi ya nondo kando ya L na kando ya B kwa nafasi unazotoa, zikiwa katikati ya msingi, zikisimama juu ya mkeka na kujitokeza juu ya sehemu ya juu kwa makadirio unayotoa. Kila ndoano inaelekea nje.

## Ukaguzi

| Ukaguzi | Kanuni | Matokeo |
|---|---|---|
| Nafasi ya nondo | Kifuniko pande zote mbili kinaacha nafasi ya nondo | Inakataliwa ikiwa haitoshi |
| Kina kwa tabaka mbili | Kina kinaondoa vifuniko viwili kinashikilia tabaka zote mbili za mkeka | Inakataliwa ikiwa haitoshi |
| Nondo za kuanzia zinatoshea | Gridi ya nondo za kuanzia inatoshea ndani ya kifuniko | Inakataliwa ikiwa haitoshi |
| Nafasi safi | Angalau kubwa kati ya 25.4 mm na db (ACI 318-19 25.2.1; ukubwa wa mkusanyiko haukaguliwi) | Onyo |
| Kina cha ndoano | Mguu wa ndoano unatoshea kina ndani ya kifuniko | Onyo, mguu umefupishwa |
| Ndoano za nondo za kuanzia | Ndoano zinabaki nje ya kifuniko | Onyo |

## Safu za ratiba ya kupinda

Kichupo cha {{ui:Ratiba ya kupinda}} na CSV yake vina safu hizi: Alama ya nondo, Ukubwa, Umbo, A (mm), B (mm), C (mm), Idadi, Urefu wa kukatwa (mm), Urefu wa jumla (m), kg/m, Uzito kila moja (kg), Uzito wa jumla (kg), Hutumika kwa. Safu ya mwisho inajumlisha idadi, urefu na uzito.
