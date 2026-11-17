---
title: Weka misingi wa pedi wenye nondo
summary: Weka misingi ya pedi ya mstatili yenye wavu wa chini na nondo za kuanzia, uikague, kisha pakua ratiba ya kupinda.
keywords: msingi, msingi wa pedi, nondo, uimarishaji, wavu, nondo za kuanzia, nondo za kuunganisha, ratiba ya kupinda, orodha ya nondo, zege, ndoano, kifuniko
from: 41a048be
---

Mada hii inahusu misingi ya pedi ya mstatili. Mihimili, nguzo, bamba na kuta ziko katika [Maelezo ya zege iliyoimarishwa](topic:reinforced-concrete). Kila msingi unapata wavu wa chini pande zote mbili na, ukitaka, nondo za kuanzia zinazosimama kutoka juu yake. Nondo ni za ukubwa wa US #3 hadi #11.

## Weka msingi

1. Chagua {{ui:Mpango}} kisha uchague kiwango cha juu cha msingi.
2. Chagua {{ui:Msingi}} katika kundi la {{ui:Mahali}}, au bonyeza {{key:F}}.
3. Weka msingi kwenye paneli ya {{ui:Sifa}} (tazama hapa chini), au acha thamani chaguo-msingi.
4. Bofya mahali gridi zinapokutana. Msingi unawekwa katikati yake, ncha yake ya juu ikiwa kwenye kiwango. Upau wa hali unasema, kwa mfano, "Msingi 2000 x 2000 x 600 chini ya A/1."

Unaweza pia kutumia fomu ya {{ui:Ongeza kwa gridi}} chini ya paneli.

Msingi unachorwa wazi ili uweze kuona nondo zake, ambazo zinachorwa kama mirija imara.

## Mipangilio ya msingi

| Sehemu | Chaguo-msingi | Maelezo |
|---|---|---|
| Urefu L (mm) | 2000 | Kando ya x; 300 hadi 50000 |
| Upana B (mm) | 2000 | Kando ya y; 300 hadi 50000 |
| Kina H (mm) | 600 | 150 hadi 10000 |
| Zege | 4000 psi | Maandishi, yanayochapishwa kwenye usafirishaji wa IFC |

**Wavu wa chini**

| Sehemu | Chaguo-msingi | Maelezo |
|---|---|---|
| Nondo ndefu | #5 | Nondo zinazopita kando ya L, safu ya chini |
| Nafasi (mm) | 250 | Nafasi kubwa zaidi inayoruhusiwa; nondo zinasambazwa sawasawa kwa nafasi hii au ndogo zaidi |
| Nondo fupi | #5 | Nondo zinazopita kando ya B, zikiwekwa juu ya nondo ndefu |
| Nafasi (mm) | 250 | Kama hapo juu |
| Kifuniko (mm) | 75 | Kifuniko safi kwenye kila uso |
| Ndoano za mwisho | Imewashwa | Inageuza ncha zote mbili za kila nondo ya wavu kuwa ndoano ya kawaida ya 90° (umbo U); ikizimwa, hutoa nondo zilizonyooka (umbo S) |

**Nondo za kuanzia**

| Sehemu | Chaguo-msingi | Maelezo |
|---|---|---|
| Nondo za kuanzia | Imewashwa | Zizime kwa msingi usio na nondo za kuanzia |
| Nondo | #6 | |
| Nondo kando ya L / Nondo kando ya B | 2 / 2 | Gridi ya nondo, katikati ya msingi |
| Nafasi kando ya L / Nafasi kando ya B | 250 / 250 | Kati ya vituo vya nondo |
| Makadirio juu ya ncha ya juu | 600 | Nondo zinasimama umbali gani juu ya ncha ya juu ya msingi |
| Ndoano chini | Imewashwa | Ndoano ya 90° inayoelekea nje, ikikaa juu ya wavu (umbo L) |

Chini ya sehemu hizi, DetailCraft inaonyesha mguu wa ndoano kwa nondo ndefu, kwa mfano "Mguu wa ndoano kwa #5: 254 mm nje hadi nje."

## Badilisha msingi uliowekwa

Chagua msingi (bofya zege yake mbali na nguzo yoyote, au mojawapo ya nondo zake). Unapata sehemu zile zile pamoja na {{ui:Kituo x}}, {{ui:Kituo y}}, {{ui:Juu z}} na {{ui:Mzunguko (°)}}. Chini yake kuna jedwali linaloorodhesha nondo za msingi huu pamoja na alama zao, idadi na urefu, pamoja na ujazo wa zege kwa mita za ujazo.

Kila mabadiliko yanakaguliwa kabla ya kuhifadhiwa. Badiliko linaloshindwa kujengwa linakataliwa, na upau wa hali unaeleza kwa nini, kwa mfano "Kifuniko hakiachi nafasi ya nondo katika msingi huu.", "Msingi ni mfupi mno kwa safu mbili za nondo ndani ya kifuniko." au "Nondo za kuanzia hazitoshi ndani ya msingi zikiwa na kifuniko cha 75 mm."

Mabadiliko yanayoweza kujengwa lakini yanahitaji kuangaliwa yameorodheshwa chini ya msingi na kwenye kichupo cha {{ui:Matatizo}}:

- "Nondo za #11 kwa 59.6 mm zinaacha pengo safi chini ya 35.8 mm (ACI 318-19 25.2.1)." Pengo safi kati ya nondo lazima liwe angalau kipenyo cha nondo na angalau 25.4 mm.
- "Ndoano za #5 zinahitaji 254 mm ya kina; ni 150 mm tu inayotoshea ndani ya kifuniko." Miguu ya ndoano inakatwa fupi ili itoshe, kwa hiyo si ndoano za kawaida tena.
- "Ndoano za kuanzia zinafikia ndani ya kifuniko."
- "Nondo za kuanzia ziko karibu kuliko nafasi safi ya chini kabisa."

## Alama za nondo na ratiba ya kupinda

Nondo zinazofanana (ukubwa, umbo na vipimo sawa hadi milimita) hushiriki alama moja ya nondo katika misingi yote. Alama zinaandikwa `<namba ya nondo>F<n>`: 5F1, 5F2 kwa nondo za #5, 6F1 kwa nondo ya kwanza ya #6, na kadhalika. Misingi yenye ukubwa, zege, wavu na nondo za kuanzia zinazofanana hushiriki alama moja ya msingi: F1, F2 …

1. Fungua kichupo cha {{ui:Ratiba ya kupinda}} chini. Kila safu ni alama moja ya nondo: ukubwa, umbo, vipimo A, B na C, idadi, urefu wa kukata, urefu wa jumla, uzito kwa mita, uzito wa kila nondo, uzito wa jumla, na matumizi ya nondo hiyo.
2. Chagua {{ui:Pakua CSV}} kwenye kichupo, au {{ui:Kupinda}} kwenye menyu ya {{ui:Zaidi}} ya kundi la {{ui:Matokeo}}, ili kupata `<name> bending schedule.csv`.

Maumbo ni misimbo ya DetailCraft yenyewe, si ya kiwango chochote: S ni moja kwa moja, L ni kupinda mara moja, U ni kupinda mara mbili. Vipimo ni kutoka nje hadi nje; urefu wa kukata ni urefu kamili wa mstari wa katikati kupitia mipinda. Tazama [Marejeo ya nondo](topic:rebar-reference).

## Ambayo DetailCraft haikagui

- Urefu wa maendelezo na urefu wa kuingiliana (lap), na kama nondo za kuanzia ni ndefu vya kutosha kwa nguzo iliyo juu.
- Sehemu ya ukubwa wa mkusanyiko katika kanuni ya nafasi safi (haijui mchanganyiko wa zege).
- Chochote kuhusu nguzo au bamba la msingi lililo juu: misingi na chuma ni vitu tofauti.

Tazama pia [Kisichojengwa bado](topic:not-built-yet).
