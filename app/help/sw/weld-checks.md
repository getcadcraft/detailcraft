---
title: Kagua uchomeleaji mahali vipengele vinapokutana
summary: Baada ya ukaguzi wa muundo, jaribu uchomeleaji wa kona na wa tundu kamili kuzunguka kila kipengele mahali kinapokutana na kipengele kingine au msaada, dhidi ya AISC 360-16 Sura J au EN 1993-1-8, na uone kikundi cha uchomeleaji kinachotumika zaidi na chini ya mchanganyiko upi. Ni msaada hadi mhandisi aikague.
keywords: weld, uchomeleaji, ukaguzi wa weld, weld ya kona, weld ya tundu kamili, AISC 360, EN 1993-1-8, kikundi cha weld, matumizi, utumiaji, uwezo, kiungo, muunganiko, muundo, mhandisi
from: e8eebbe6
---

Kizuizi cha {{ui:Weld checks}} katika kichupo cha {{ui:Analysis}}, chini ya {{ui:Design checks}}, huchukua nguvu za fremu iliyotatuliwa mwisho na michanganyiko ya nguvu uliyotengeneza, na kujaribu uchomeleaji kuzunguka kila kipengele kwenye kila kiungo: mahali kipengele kinapokutana na kipengele kingine, au kinaposimama juu ya msaada.

:::warning
Ni **msaada hadi mhandisi aikague**. Inakagua uchomeleaji uliochorwa kuzunguka sehemu nzima, kama kikundi kimoja, kutoka kwa nguvu za ncha za fremu yenyewe. Haisomi ukubwa wala urefu wa welds ulizochora kwenye michoro ya warsha, na haikagui bolti, bamba, kubeba mzigo, kukata kwa kizuizi wala kukatika kwa kupinda. Matokeo yake si muhuri.
:::

## Iendeshe

1. Tatua fremu kwenye kichupo cha {{ui:Analysis}} na chagua {{ui:Design code}} katika {{ui:Design checks}}, kisha bonyeza {{ui:Make combinations}} (ukaguzi wa uchomeleaji unahitaji michanganyiko ile ile ya nguvu).
2. Katika {{ui:Weld checks}}, weka {{ui:Fillet leg (mm, 0 = the wall, at most 8)}}. 0 inamaanisha mguu unafuata ukuta mwembamba wa sehemu, hadi 8 mm. Chini ya kanuni ya AISC, {{ui:Weld metal strength F_EXX (MPa)}} ni nguvu ya metali ya uchomeleaji (482.6 MPa ni elektrodi ya E70). Chini ya EN 1993, daraja la chuma hutoa nguvu ya metali ya uchomeleaji na kipengele cha uunganisho.
3. Bonyeza {{ui:Check welds}}.

Kila mstari wa jedwali ni kikundi kimoja cha uchomeleaji (ncha moja ya kipengele kwenye kiungo). Nambari: **matumizi** ya ukaguzi wake unaotawala, hali (inapita au inashindwa), na ukaguzi na kifungu kipi kilitawala chini ya mchanganyiko upi. Kikundi ambacho ukaguzi hauwezi kukihukumu kinasema sababu (hakuna daraja la chuma, hakuna kipengele cha uunganisho kwa daraja hilo katika EN 1993-1-8 Jedwali 4.1, hakuna uchomeleaji kwenye sehemu hiyo) badala ya kuonyesha nambari.

Kubadilisha mguu au metali ya uchomeleaji, au kuhariri modeli, kunafuta jedwali: lilikuwa kwa thamani za zamani. Bonyeza {{ui:Check welds}} tena.

## Kinachokaguliwa

- **ASCE 7 + AISC 360:** metali ya uchomeleaji wa kona (pembe ya mzigo kwa uchomeleaji inahesabiwa, J2.4), kukatika kwa kukata kwa metali ya msingi (J4.2), na welds za tundu kamili (Jedwali J2.5).
- **EN 1990 + EN 1993:** welds za kona kwa mbinu iliyorahisishwa ya EN 1993-1-8 4.5.3.3 na welds za tundu kutoka 4.7.1.
- Maonyo ya maelezo dhidi ya mguu wa chini na wa juu na urefu wa chini, pamoja na thamani iliyolinganishwa nayo.

Kikundi cha uchomeleaji kinachukuliwa kama sehemu ya mstari, na kinapakiwa kwa mbinu ya vekta ya elastiki: kila sehemu ya uchomeleaji inachukua nguvu ya axial ya kipengele, shear zote mbili, msokoto na momenti zote mbili za kupinda, zikiongezwa kama vekta.

## Kisichokaguliwa

Uchomeleaji wa kupenya kwa sehemu, kona zilizopinda, welds za tundu na nafasi, welds za vipindi, mbinu ya kituo cha papo hapo, mbinu ya mwelekeo ya EN, uchovu wa chuma, na kukata kwa kizuizi kwa metali ya msingi havijajengwa. Baadhi ya vigezo vya viwango viliandikwa kutoka viwango wenyewe na bado havijalinganishwa na nakala iliyochapishwa; ripoti inaorodhesha kila nambari inatoka wapi ({{ui:Report (PDF)}} hupata jedwali za uchomeleaji baada ya kukagua). Tazama [Kagua vipengele vya chuma](topic:design-checks) na [Bado hakijajengwa](topic:not-built-yet).
