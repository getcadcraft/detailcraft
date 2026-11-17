---
title: Katalogi ya wasifu
summary: Kila ukubwa wa chuma uliojengewa ndani, jinsi majina ya wasifu yanavyoandikwa, vyanzo vya vipimo, na jinsi bamba na sehemu maalum zinavyopewa majina.
keywords: wasifu, sehemu, katalogi, ukubwa, w shapes, wide flange, s shapes, chaneli, pembe, hss, mrija, pipe, ipe, hea, heb, upn, uk, british, ub, uc, pfc, ea, uea, pembe isiyo sawa, shs, rhs, chs, cold formed, hot finished, blue book, bamba, aisc, en 10365, kutaja majina
from: cd9b2bc3
---

DetailCraft ina ukubwa 2,311 uliojengewa ndani, kila moja imenakiliwa kutoka jedwali lililochapishwa na kukaguliwa na majaribio ya programu: eneo lililokokotolewa kutoka vipimo lazima lilingane na eneo lililochapishwa, na uzito uliochapishwa lazima ulingane na eneo hilo mara msongamano wa chuma. Bamba na wasifu maalum hutengenezwa kutoka vipimo vyake.

## Kutaja majina

- **Umbo za Marekani** huandikwa kama AISC Manual inavyoziandika, kwa x ndogo: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Kuandika hakujali herufi kubwa au ndogo.
- **Bomba** huandikwa kama katika hifadhidata ya AISC: Pipe4STD, Pipe4XS, Pipe4XXS (kawaida, nzito, nzito sana).
- **Umbo za Ulaya** huandikwa kama EN 10365: IPE200, HEA240, HEB300, UPN200 (bila nafasi).
- **Umbo za Uingereza** huandikwa kwa familia kwanza, kisha ukubwa wa Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Sehemu za mashimo zilizoundwa kwa baridi huanza na CF: CFSHS100x100x5.0. Kuandika kama michoro mara nyingi inavyosema pia kunafanya kazi: 305x165x40 UB, L100x100x10, SHS100x5.
- **Bamba** ni `PL<unene>x<upana>` kwa milimita: PL20x200 ni nene 20 mm na pana 200 mm. Ukubwa wowote kutoka zana ya {{ui:Bamba}} unafanya kazi.
- **Wasifu maalum** una jina lolote unalolipa, mradi si jina la katalogi na halionekani kama jina la bamba.

Kwenye orodha za {{ui:Wasifu}}, kichwa cha kila kikundi kinataja chanzo chake, kwa mfano "W shapes — AISC Shapes Database v16.0".

## Vyanzo

| Kundi | Chanzo | Maelezo |
|---|---|---|
| W shapes, S shapes, Channels (C), Angles (L), HSS, Pipe | AISC Shapes Database v16.0 | Vipimo vilibadilishwa kutoka inchi hadi milimita kwa usahihi kamili; uzito kwa mita kutoka lb/ft iliyochapishwa |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimita na kg/m kama zilivyochapishwa |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), jedwali v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimita na kg/m kama zilivyochapishwa |
| Bamba | Parametriki | Uzito kutoka eneo × 7850 kg/m³ |
| Maalum | Vipimo vyako | Uzito kutoka eneo × 7850 kg/m³ |

Jinsi umbo zinavyochorwa:

- **W shapes:** hifadhidata ya AISC haitoi radius ya kona ya ndani, kwa hiyo DetailCraft huchora radius kama r = kdes − tf.
- **S shapes na chaneli (C, UPN):** flensi sambamba zenye unene wa wastani uliochapishwa, kona za mraba (flensi halisi ina mteremko).
- **Pembe:** kona za mraba.
- **HSS ya mstatili:** unene wa ukuta wa muundo (0.93 × ule wa kawaida, kama AISC 360-22 B4.2 inavyoruhusu) na radius ya kona ya nje mara mbili yake.
- **HSS ya duara na Bomba:** unene wa ukuta wa muundo (0.93 × wa kawaida).
- **IPE, HEA, HEB, UB, UC:** radius ya mzizi iliyochapishwa.
- **PFC, EA, UEA:** kona za mraba (eneo na uzito vilivyochapishwa bado vinajumuisha radii).
- **SHS, RHS, CHS:** ukuta wa kawaida. Kona za kumaliza kwa moto: nje 1.5 t, ndani t. Zilizoundwa kwa baridi: nje 2 t, ndani t hadi 6 mm; 2.5 t na 1.5 t hadi 10 mm; 3 t na 2 t zaidi ya hapo.

## Ukubwa

Kila ukubwa ambao jedwali zinaorodhesha katika vikundi hivi, mdogo kwanza:

| Kundi | Ukubwa |
|---|---|
| W shapes (289) | W4x13 hadi W44x408 |
| S shapes (28) | S3x5.7 hadi S24x121 |
| Channels (32) | C3x3.5 hadi C15x50 |
| Pembe, miguu sawa (61) | L2x2x1/8 hadi L12x12x1-3/8 |
| HSS, ya mstatili na ya mraba (525) | HSS1-1/2x1-1/2x1/8 hadi HSS34x10x1 |
| HSS, ya duara (189) | HSS1.660x0.140 hadi HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD hadi Pipe26XS |
| IPE (18) | IPE80 hadi IPE600 |
| HEA (24) | HEA100 hadi HEA1000 |
| HEB (24) | HEB100 hadi HEB1000 |
| UPN (18) | UPN50 hadi UPN400 |
| Pembe, miguu isiyo sawa (76) | L2-1/2x1-1/2x3/16 hadi L8x6x1 |
| UB (107) | UB127x76x13 hadi UB1016x305x584 |
| UC (46) | UC152x152x23 hadi UC356x406x1299 |
| PFC (16) | PFC100x50x10 hadi PFC430x100x64 |
| EA (42) | EA20x20x3.0 hadi EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 hadi UEA200x150x18.0 |
| SHS, zilizomalizwa kwa moto (123) | SHS40x40x3.2 hadi SHS400x400x17.5 |
| RHS, zilizomalizwa kwa moto (161) | RHS50x30x3.2 hadi RHS500x300x17.5 |
| CHS, zilizomalizwa kwa moto (103) | CHS42.4x3.2 hadi CHS508.0x17.5 |
| CFSHS, zilizoundwa kwa baridi (96) | CFSHS25x25x2.0 hadi CFSHS400x400x12.5 |
| CFRHS, zilizoundwa kwa baridi (137) | CFRHS50x25x2.0 hadi CFRHS500x300x12.5 |
| CFCHS, zilizoundwa kwa baridi (106) | CFCHS33.7x3.0 hadi CFCHS508.0x16.0 |

Pembe isiyo sawa iliyoakisiwa ni kipande kile kile kilichogeuzwa ncha kwa ncha, kama warsha inavyotengeneza mkono wa kinyume: matundu yake, mikato yake na gusseti yake vinaenda nayo.

Chagua zana ya kuweka kisha uchague ukubwa ili kuona kina, upana wa flensi, unene wa ukuta na flensi, radius ya kona ya ndani, eneo (cm²), uzito (kg/m) na chanzo katika kisanduku cha {{ui:Wasifu}} cha paneli ya {{ui:Sifa}}.

## Kila umbo linaweza kufanya nini

| Umbo | Matundu | Mikato | Bamba za ncha na bamba za msingi | Faili la NC | Mchoro wa warsha |
|---|---|---|---|---|---|
| I-shapes (W, S, IPE, HEA, HEB, UB, UC, I maalum) | Ukuta, flensi ya juu, flensi ya chini | Ndiyo | Bamba za ncha: boriti na nguzo. Bamba za msingi: ndiyo | Ndiyo | Ndiyo |
| Chaneli (C, UPN, PFC) | Ukuta, flensi ya juu, flensi ya chini | Hapana | Bamba za msingi pekee | Ndiyo | Ndiyo |
| HSS ya mstatili, SHS, RHS | Ukuta wa pembeni (ukuta), juu, chini | Hapana | Bamba za msingi pekee | Ndiyo | Ndiyo |
| HSS ya duara, Pipe, CHS | Bado | Hapana | Bamba za msingi pekee | Ndiyo | Ndiyo |
| Pembe (L, EA, UEA) | Bado | Hapana | Bamba za msingi pekee | Ndiyo | Ndiyo |
| Bamba na upau bapa maalum | Uso wa bamba | Hapana | Hapana | Ndiyo | Ndiyo |

Kwa mrija wa mstatili, tundu kwenye uso wa "ukuta" hupita kwenye kuta zote mbili za pembeni. Kile kila faili la NC linashikilia kiko katika [Sehemu za data za faili la NC](topic:nc1-fields).

## Unahitaji ukubwa mwingine?

Iongeze kama [wasifu maalum](topic:plates-and-profiles#add-a-custom-profile). Orodha iliyojengewa ndani haiwezi kuhaririwa kutoka kwenye programu bado.
