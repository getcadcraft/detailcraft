---
title: Ongeza sahani za msingi na fimbo za nanga
summary: Weka sahani ya msingi iliyochomelewa yenye fimbo nne za nanga chini ya nguzo, weka vipimo vyake, kisha inakili kwenye kila nguzo inayofanana.
keywords: sahani ya msingi, baseplate, fimbo za nanga, bolti za nanga, bolti za kushikilia chini, msingi wa nguzo, bolti za msingi, zinazofanana
from: 619ebc64
---

Muunganisho wa sahani ya msingi huweka bamba chini ya nguzo, hukata nguzo fupi kwa unene wa bamba, huchomelea vipande viwili pamoja, na huongeza fimbo nne za nanga zinazopitia matundu kwenye bamba.

:::warning
Vipimo ni thamani za kuanzia, si muundo. DetailCraft haikagui shinikizo la kubeba, nguvu ya fimbo wala urefu wa kuzikwa.
:::

## Ongeza sahani ya msingi

1. Chagua {{ui:Chagua}} ({{key:V}}) kisha ubofye nguzo. Ni lazima iwe wima.
2. Chagua {{ui:Base plate}} katika kikundi cha {{ui:Unganisha}}, au {{ui:Add base plate}} katika kidirisha cha {{ui:Sifa}}.
3. Upau wa hali unasema "Sahani ya msingi imeongezwa pamoja na fimbo nne za nanga." Muunganisho mpya unachaguliwa.

Nguzo moja inaweza kuwa na sahani moja ya msingi. Ikiwa tayari ina moja, upau wa hali unasema "Nguzo hii tayari ina sahani ya msingi."

## Badilisha

Chagua sahani ya msingi (bofya bamba au fimbo). Chini ya {{ui:Bamba, bolti na uchomeleaji (mm)}}:

| Mpangilio | Chaguo-msingi | Kazi yake |
|---|---|---|
| Unene wa bamba | 25 | Nguzo inafupishwa kwa kiasi hiki |
| Urefu wa bamba | 450 | Kando ya kina cha nguzo |
| Upana wa bamba | 400 | Kuvuka nguzo |
| Kipenyo cha fimbo | 20 | Ukubwa wa fimbo ya nanga |
| Kipenyo cha tundu | 33 | Tundu katika bamba |
| Daraja la bolti | F1554 Gr 36 | Daraja la fimbo, kama maandishi |
| Nafasi ya fimbo (kando ya kina) | 350 | Kati ya vituo vya fimbo, kando ya urefu wa bamba |
| Nafasi ya fimbo (kuvuka) | 300 | Kati ya vituo vya fimbo, kuvuka |
| Makadirio ya fimbo juu ya bamba | 100 | Kutoka juu ya bamba hadi juu ya fimbo |
| Kuzikwa kwa fimbo chini ya bamba | 450 | Kutoka chini ya bamba hadi ndani ya zege |
| Ukubwa wa uchomeleaji wa pembe | 8 | Kuzunguka msingi wote wa nguzo |
| Nyenzo ya bamba | A36 | Maandishi |
| Pengo la grauti | 0 | Nafasi kati ya juu ya zege na chini ya bamba |
| Viimarisho | Hakuna | Chagua Hakuna, 2 (sambamba na ubavu) au 4 (pia kwa pembe za kulia); angalia hapa chini |
| Unene, urefu wa kiimarisho | 12, 150 | |
| Kina cha lagi ya kukata | 0 | Lagi inafika umbali gani chini ya bamba; 0 = hakuna lagi |
| Unene, upana wa lagi ya kukata | 25, 150 | |
| Washer za bamba | Hakuna | Kwenye kila fimbo, au hakuna |
| Ukubwa, unene wa washer | 0, 0 | 0 = kiwango cha chini kutoka AISC Design Guide 1 kwa fimbo |

Urefu wa fimbo = kuzikwa + pengo la grauti + unene wa bamba + makadirio. Kwa chaguo-msingi ni 575 mm.

## Maelezo ya msingi: grauti, viimarisho, lagi ya kukata, washer

Zote nne zimezimwa kwenye sahani mpya ya msingi, na kwenye sahani za msingi kutoka modeli zilizotengenezwa kabla ya DetailCraft 0.4.

- **Pengo la grauti.** Bamba linakaa umbali huu juu ya juu ya zege, na fimbo zinakuwa ndefu kwa kiasi hicho. AISC Design Guide 1 (2.10) inapendekeza inchi 1 kwenye sakafu iliyokamilika na inchi 1½ hadi 2 kwenye msingi au nguzo fupi; zaidi kwa mabamba makubwa na kwa sahani zenye lagi ya kukata.
- **Viimarisho.** Mabamba wima yaliyochomelewa kwenye nguzo na kwenye bamba, kutoka uso wa nguzo hadi ukingo wa bamba, kama mistatili (bila kukatwa kona wala kupunguzwa kwa mteremko bado). **2** husimama sambamba na ubavu, nje ya kila flange; **4** huongeza viwili kwa pembe za kulia na ubavu, kati ya flange, hadi kando ya bamba. Kwenye nguzo ya bomba husimama katikati ya kila uso. Kila kimoja kimechomelewa kwenye nguzo na kwenye bamba pande zote mbili.
- **Lagi ya kukata.** Bamba lililochomelewa kote chini ya sahani ya msingi, sambamba na kina cha nguzo, katikati. DetailCraft inaonya kama lina kina sawa au chini ya pengo la grauti. Haikati tundu kwenye msingi; kwa sababu hiyo [ukaguzi wa mgongano](topic:clash-check) unaacha lagi na msingi nje.
- **Washer za bamba.** Washer ya mraba kwenye kila fimbo, ikikaa juu ya sahani ya msingi, na imeorodheshwa kwenye mkusanyiko wa nguzo kama iliyolegea (inasafirishwa pamoja na nguzo, haijachomelewa: Design Guide 1, 2.6). Kwa ukubwa na unene 0, DetailCraft inachukua washer ya kiwango cha chini kutoka AISC Design Guide 1, toleo la 2, Jedwali 2.3, kwa fimbo hiyo; fimbo ya metriki inachukua ukubwa wa inchi unaofuata juu (fimbo ya M20 inapata safu ya inchi 7/8: 2½ in. × 5/16 in.). Kidirisha cha sifa kinaonyesha ukubwa uliotumika. Tundu la washer ni kipenyo cha fimbo + 1/16 in.: hilo ni chaguo la DetailCraft, jedwali halitoi moja. DetailCraft inaonya fimbo zikiweza kutotoka nje vya kutosha kwa washer na nati (makadirio chini ya unene wa washer + kipenyo cha fimbo).

Design Guide 1, Jedwali 2.3, pia inapendekeza tundu la fimbo kwenye bamba: 1-5/16 in. kwa fimbo ya ¾ in., 1-9/16 in. kwa ⅞ in., 1-13/16 in. kwa 1 in. DetailCraft haibadilishi ukubwa wa tundu lako.

Onyo pia huonekana mashimo ya fimbo yakiwa karibu kuliko mara 1.2 ya kipenyo cha tundu hadi ukingo wa bamba, fimbo zikianguka ndani ya mstari wa nguzo, au bamba likiwa dogo kuliko nguzo.

## Nakili kwenye nguzo zinazofanana

1. Chagua sahani ya msingi.
2. Chagua {{ui:Tumia kwa zinazofanana (n)}}, au {{ui:Zinazofanana}} katika menyu ya {{ui:Zaidi}} ya kikundi cha {{ui:Unganisha}}.
3. Kila nguzo wima yenye wasifu sawa, isiyo na sahani ya msingi na isiyosimama juu ya nguzo nyingine, inapata nakala.

## Sahani za msingi na misingi

Sahani ya msingi haihitaji msingi, na msingi haujui sahani ya msingi iliyo juu yake: fimbo za nanga hazifungwi kwenye nondo za msingi. Weka misingi kwa {{ui:Msingi}}; angalia [Weka misingi kwa nondo](topic:footings-and-rebar).
