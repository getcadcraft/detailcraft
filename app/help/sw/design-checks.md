---
title: Kagua vipengele vya chuma kwa kanuni ya muundo
summary: Tengeneza michanganyiko ya mizigo kutoka ASCE 7 au EN 1990, kagua kila sehemu ya chuma ya I dhidi ya AISC 360 au EN 1993-1-1, na uone kiasi cha uwezo wake kila kipengele kinachotumia. Msaada tu hadi mhandisi aikague.
keywords: usanifu, ukaguzi wa muundo, usanifu wa chuma, matumizi, uwezo, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, michanganyiko ya mizigo, LRFD, Kiambatisho cha Kitaifa, kujipinda, kujipinda kando na mzunguko, kukata, kupinda, mwingiliano, muundo, wanafunzi, mhandisi
from: 66b6d545
---

Baada ya kuendesha uchanganuzi, kizuizi cha {{ui:Design checks}} kwenye kichupo cha {{ui:Analysis}} kinageuza nguvu zake kuwa hukumu kwa kila kipengele cha chuma: kiasi cha uwezo wake ambacho mchanganyiko mbaya zaidi unatumia.

:::warning
Ni **msaada hadi mhandisi aikague**. Inatumia nguvu za mpangilio wa kwanza tu (bila athari za mpangilio wa pili), haikagui mzunguko, sehemu nyembamba (daraja la 4), maumbo yaliyochomelewa wala miunganisho, na inaacha nje kile isichoweza kukagua na inasema hivyo. Haichukui nafasi ya ukaguzi wa mhandisi, na matokeo yake si muhuri.
:::

## Chagua kanuni

{{ui:Design code}} inahifadhiwa pamoja na modeli; chagua familia moja kati ya mbili:

- **ASCE 7 + AISC 360** (Marekani, LRFD): michanganyiko ya mizigo ya ASCE 7-16 §2.3.1 na ukaguzi wa vipengele wa ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): michanganyiko ya EN 1990 (Eq. 6.10, au 6.10a na 6.10b) na ukaguzi wa vipengele wa EN 1993-1-1.

Kisha chagua {{ui:Steel grade}} (A992, A36 na nyingine; au S235 hadi S450, na nguvu ya mavuno ya chini zaidi ya 40 mm).

## Tengeneza michanganyiko

Mpe kila kesi ya mzigo **aina** yake (ya kudumu, hai, paa hai, theluji, upepo, tetemeko) kwenye orodha ya kesi, kisha bonyeza {{ui:Make combinations}}. DetailCraft inaandika michanganyiko ya kanuni kama michanganyiko ya kesi zako: kila mchanganyiko wa nguvu ambao kanuni inaorodhesha kwa aina ulizonazo, na michanganyiko ya huduma kwa mkengeuko. Zile ulizoandika mwenyewe zinabaki; hazikaguliwi dhidi ya kanuni. Kesi ya aina ya {{ui:Other}} haijachanganywa.

Kwa Eurocode, vipengele ni **thamani zinazopendekezwa** za EN 1990 Kiambatisho A1 (γG 1.35, γQ 1.5, thamani za ψ za mizigo ya kuwekwa, theluji na upepo) na EN 1993-1-1 (γM0 = γM1 = 1.0). Kiambatisho cha Kitaifa cha nchi yako kinabadilisha baadhi yake: fungua {{ui:National Annex values}}, andika zako, kisha tengeneza michanganyiko tena. Zinahifadhiwa kwenye modeli.

## Kagua vipengele

Bonyeza {{ui:Check members}}. Kwa kila sehemu ya chuma ya I, jedwali linaonyesha **matumizi** yake (mahitaji juu ya uwezo: 100 % ndiyo kikomo), kama inapita, ukaguzi upi unaoongoza, na mchanganyiko upi. Vipengele vinapakwa rangi kwenye modeli: bluu kwa vilivyotumika kidogo, kijani karibu nusu, ocha karibu na kikomo, nyekundu juu yake, kijivu visivyokaguliwa. Bofya jina la kipengele ili kukichagua.

Ukaguzi, pamoja na kifungu kinachofuatwa na kila moja (zimeorodheshwa kwenye ripoti):

- mvutano, mbano pamoja na kujipinda kwa kupinda na kwa mzunguko, kupinda kuhusu shoka zote mbili pamoja na kujipinda kando na mzunguko, kukata, na kupinda pamoja na nguvu ya mhimili;
- mkengeuko wa michanganyiko ya huduma dhidi ya {{ui:Deflection limit}} uliyoweka (L/360 mwanzoni; thamani ya mradi, si thamani ya kanuni).

**Urefu.** Urefu uliofungwa ni sehemu ya kila kipande kilichochanganuliwa (1 = bila kufungwa); mifungo inachukuliwa kuwa na nafasi sawa kuanzia mwanzo. Vipengele vya K vinazidisha urefu kwa kujipinda. Mahali ambapo kipengele kingine kinatua, kipengele kinagawanywa, na kila kipande kinakaguliwa kwa urefu wake, kama kilivyofungwa hapo.

## Kisichokaguliwa

Kipengele kinaonyesha **haijakaguliwa**, pamoja na sababu, badala ya nambari, pale sehemu yake si umbo la I ambalo ukaguzi unalijua (mirija, pembe, chaneli), pale ni umbo maalum (lililochomelewa), au pale sehemu fulani ni nyembamba (AISC) au daraja la 4 (Eurocode) katika kupinda. Sehemu nyembamba katika mbano inaondoa ukaguzi wa mbano na kipengele kinasomeka *inapita, imekaguliwa kwa sehemu*. Pia havijajengwa: athari za mpangilio wa pili, mzunguko, kukata pamoja na kupinda, miunganisho, uchovu, moto na ubunifu wa tetemeko. Vipengele vya zege na mizigo ya tetemeko vina [ukaguzi wao](topic:concrete-and-seismic). Angalia [Bado havijajengwa](topic:not-built-yet).

## Ripoti

{{ui:Report (PDF)}} na {{ui:Report (CSV)}} zinapata majedwali ya usanifu mara tu umekagua: matoleo ya kanuni, mipangilio na thamani za Kiambatisho cha Kitaifa, matumizi kwa kipengele, kila kifungu kilichotumika, na kwa kila kipengele mahitaji, uwezo na matumizi ya kila ukaguzi katika mchanganyiko wake unaoongoza.
