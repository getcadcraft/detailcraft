---
title: Kagua vipengele vya chuma kwa kanuni ya muundo
summary: Tengeneza michanganyiko ya mizigo kutoka ASCE 7 au EN 1990, kagua kila I-shape ya chuma dhidi ya AISC 360 au EN 1993-1-1, na uone ni kiasi gani cha uwezo wake kila kipengele kinatumia. Ni msaada hadi mhandisi aikague.
keywords: muundo, ukaguzi wa muundo, muundo wa chuma, matumizi, utumiaji, uwezo, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, michanganyiko ya mizigo, LRFD, Kiambatisho cha Kitaifa, kujikunja, kujikunja kwa kando, kukata, kupinda, mwingiliano, muundo, wanafunzi, mhandisi
from: 15685c4e
---

Baada ya kuendesha uchanganuzi, kizuizi cha {{ui:Design checks}} katika kichupo cha {{ui:Analysis}} kinageuza nguvu zake kuwa hukumu kwa kila kipengele cha chuma: ni kiasi gani cha uwezo wake mchanganyiko mbaya zaidi unatumia.

:::warning
Ni **msaada hadi mhandisi aikague**. Inatumia nguvu za mpangilio wa kwanza pekee (bila athari za mpangilio wa pili), haikagui msokoto, sehemu nyembamba (daraja la 4), maumbo yaliyochomelewa wala miunganisho, na inaacha nje kile isichoweza kukagua na inasema hivyo. Haichukui nafasi ya ukaguzi wa mhandisi, na matokeo yake si muhuri.
:::

## Chagua kanuni

{{ui:Design code}} huhifadhiwa pamoja na modeli; chagua familia moja kati ya mbili:

- **ASCE 7 + AISC 360** (US, LRFD): michanganyiko ya mizigo ya ASCE 7-16 §2.3.1 na ukaguzi wa vipengele wa ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): michanganyiko ya EN 1990 (Eq. 6.10, au 6.10a na 6.10b) na ukaguzi wa vipengele wa EN 1993-1-1.

Kisha chagua {{ui:Steel grade}} (A992, A36 na nyingine; au S235 hadi S450, yenye nguvu ndogo ya mavuno juu ya 40 mm).

## Tengeneza michanganyiko

Mpe kila kesi ya mzigo **aina** yake (mzigo wa kudumu, mzigo hai, mzigo hai wa paa, theluji, upepo, tetemeko) kwenye orodha ya kesi, kisha bonyeza {{ui:Make combinations}}. DetailCraft huandika michanganyiko ya kanuni kama michanganyiko ya kesi zako: kila michanganyiko ya nguvu ambayo kanuni inaorodhesha kwa aina ulizo nazo, na michanganyiko ya huduma kwa mkengeuko. Ile uliyoandika mwenyewe inabaki; haikaguliwi dhidi ya kanuni. Kesi ya aina {{ui:Other}} haijachanganywa.

Kwa Eurocode, vipengele ni **thamani zinazopendekezwa** za EN 1990 Kiambatisho A1 (γG 1.35, γQ 1.5, thamani za ψ za mizigo iliyowekwa, theluji na upepo) na EN 1993-1-1 (γM0 = γM1 = 1.0). Kiambatisho cha Kitaifa cha nchi yako hubadilisha baadhi yake: fungua {{ui:National Annex values}}, andika zako, kisha tengeneza michanganyiko tena. Zinahifadhiwa pamoja na modeli.

## Kagua vipengele

Bonyeza {{ui:Check members}}. Kwa kila I-shape ya chuma jedwali linaonyesha **matumizi** yake (mahitaji juu ya uwezo: 100 % ndio kikomo), kama inapita, ukaguzi upi unatawala, na mchanganyiko upi. Vipengele vinapakwa rangi kwenye modeli: bluu kinatumika kidogo, kijani karibu nusu, ocha karibu na kikomo, nyekundu kimezidi, kijivu hakijakaguliwa. Bofya jina la kipengele ili kukichagua.

Ukaguzi, pamoja na kifungu kinachofuatwa na kila moja (zimeorodheshwa kwenye ripoti):

- mvutano, mgandamizo wenye kujikunja kwa kupinda na kwa msokoto, kupinda kwenye shoka zote mbili pamoja na kujikunja kwa kando, kukata, na kupinda pamoja na nguvu ya axial;
- mkengeuko wa michanganyiko ya huduma dhidi ya {{ui:Deflection limit}} uliyoweka (L/360 kama mwanzo; thamani ya mradi, si thamani ya kanuni).

**Urefu.** Urefu uliofungwa ni sehemu ya kila kipande kilichochanganuliwa (1 = hakijafungwa); vifungo vinachukuliwa vikiwa na nafasi sawa kuanzia mwanzo. Vipengele vya K huzidisha urefu kwa ajili ya kujikunja. Kiungo ambapo kipengele kingine kinatua hugawanya kipengele, na kila kipande kinakaguliwa kwa urefu wake, kama kimefungwa hapo.

## Kisichokaguliwa

Kipengele kinaonyesha **haijakaguliwa**, pamoja na sababu, badala ya nambari, wakati sehemu yake si umbo ambalo ukaguzi unalijua (pembe, chaneli; mirija ya mstatili na ya duara inakaguliwa wakati kuta zake ni thabiti), wakati ni umbo maalum (lililochomelewa), au wakati sehemu ni nyembamba (AISC) au daraja la 4 (Eurocode) katika kupinda. Sehemu nyembamba katika mgandamizo huondoa ukaguzi wa mgandamizo, na kipengele husomeka *kinapita, kimekaguliwa kwa sehemu*. Uchomeleaji kwenye viungo una [ukaguzi wake](topic:weld-checks). Pia havijajengwa: athari za mpangilio wa pili, msokoto, kujikunja kwa kukata pamoja na kupinda, miunganisho ya bolti, uchovu, moto na ufafanuzi wa tetemeko. Vipengele vya zege na mizigo ya tetemeko vina [ukaguzi wake](topic:concrete-and-seismic). Tazama [Bado hakijajengwa](topic:not-built-yet).

## Ripoti

{{ui:Report (PDF)}} na {{ui:Report (CSV)}} hupata jedwali za muundo baada ya kukagua: matoleo ya kanuni, mipangilio na thamani za Kiambatisho cha Kitaifa, matumizi kwa kipengele, kila kifungu kilichotumika, na kwa kila kipengele mahitaji, uwezo na matumizi ya kila ukaguzi katika mchanganyiko wake unaotawala.
