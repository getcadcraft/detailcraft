---
title: Kilichopya katika 0.7 (cha awali)
summary: Ukaguzi wa muundo wa wasifu wa I wa chuma kwa michanganyiko ya mizigo kutoka ASCE 7 au EN 1990, na ukaguzi wa vipengele kwa AISC 360 au EN 1993-1-1. Pia usafirishaji wa modeli ya chuma kwenda USD, zana ya msaidizi kwa USD, utepe wa Chuma wenye vitufe vikubwa na vidogo, paneli zinazojificha kwa nadhifu, na mazungumzo yanayoweza kuhamishwa.
keywords: kilichopya 0.7, toleo la awali, maelezo ya toleo, kumbukumbu ya mabadiliko, mabadiliko, 0.7, toleo, vipengele vipya, ukaguzi wa muundo, usanifu wa chuma, matumizi, michanganyiko ya mizigo, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Kiambatisho cha Kitaifa, mzigo hai wa paa, kikomo cha kupinda, usd, usda, usdc, usdz, openusd, msaidizi, mcp, utepe wa chuma, utepe, kitufe mseto, vipimo, kubana, paneli, mazungumzo, kireno
from: 54a7a8f0
---

Hii ndiyo iliyobadilika katika DetailCraft 0.7, ikilinganishwa na 0.6. Uchanganuzi wa fremu wa 0.6 sasa una hatua ya pili: kukagua vipengele vya chuma kwa kanuni ya usanifu.

## Mpya

### Viungio vya mshazari (0.7.1)

- **Wasifu wa I mbili zinazokutana kwa pembe**, kama goti la portal au ukingo wa paa: chagua zote mbili, kisha chagua {{ui:Kiungio cha mshazari}} kwenye menyu ya {{ui:Zaidi}} ya kikundi cha {{ui:Unganisha}}. Ncha zote mbili zitakatwa kwenye ndege inayogawanya pembe kwa nusu. Sahani za mwisho zilizofungwa pamoja na mishikio ya wavuti ni visanduku vya kuteua kwenye kidirisha kipya cha Mitre, ambacho sehemu zake zenye namba zinalingana na mchoro wa kiungio chako unaochorwa unapoandika. Mshazari hufuata vipengele vinapohamishwa, na unaendelea kwenye michoro, faili za NC (kupunguzwa kwa mshazari), IFC na orodha ya vifaa. Ona [Viungio vya mshazari](topic:mitres).

### Ukaguzi wa muundo

- **Michanganyiko ya mizigo kutoka kanuni.** Kwenye kichupo cha {{ui:Uchanganuzi}}, kizuizi kipya cha {{ui:Ukaguzi wa muundo}} kina {{ui:Kanuni ya muundo}}: ASCE 7 + AISC 360 (Marekani, LRFD) au EN 1990 + EN 1993-1-1 (Eurocode). Ipe kila kesi ya mzigo aina yake (tuli, hai, mzigo hai mpya wa paa, theluji, upepo, tetemeko), bonyeza {{ui:Tengeneza michanganyiko}}, na DetailCraft itaandika michanganyiko ya nguvu na ya huduma ya kanuni kutoka kesi zako. Michanganyiko uliyoandika mwenyewe itabaki. Ona [Tengeneza michanganyiko](topic:design-checks#make-the-combinations).
- **Thamani za Kiambatisho cha Kitaifa.** Kwa Eurocode vipengele huanza kwenye thamani zilizopendekezwa. {{ui:Thamani za Kiambatisho cha Kitaifa}} hukuruhusu kuandika za nchi yako, na zinahifadhiwa kwenye modeli. Ona [Tengeneza michanganyiko](topic:design-checks#make-the-combinations).
- **Kagua vipengele.** {{ui:Kagua vipengele}} hukagua kila wasifu wa I wa chuma kwa mvutano, mgandamizo wenye kujipinda, kupinda chenye kujipinda kwa pembeni, kukata, kupinda pamoja na nguvu ya mhimili, na kupinda dhidi ya {{ui:Kikomo cha kupinda}} unachoweka. Jedwali linaonyesha matumizi ya kila kipengele, ukaguzi unaotawala na mchanganyiko wake, na vipengele vinapakwa rangi kwenye modeli (bluu, kijani, ochre, nyekundu, kijivu kwa visivyokaguliwa). Ona [Kagua vipengele](topic:design-checks#check-the-members).
- **Kwenye ripoti.** {{ui:Ripoti (PDF)}} na {{ui:Ripoti (CSV)}} huongeza matoleo ya kanuni, mipangilio, matumizi kwa kila kipengele, na kila kifungu kilichotumika. Ona [Ripoti](topic:design-checks#the-report).
- **Msaada hadi mhandisi akague.** Hutumia nguvu za mpangilio wa kwanza tu. Mirija, pembe, chaneli, maumbo yaliyochomeleywa na sehemu nyembamba au za darasa la 4 husomeka "haijakaguliwa", pamoja na sababu. Msokoto, miunganiko na zege hazikaguliwi. Ona [Visivyokaguliwa](topic:design-checks#what-is-not-checked).

### USD

- **Hamisha modeli ya chuma kama USD.** {{ui:USD}} kwenye kikundi cha {{ui:Matokeo}} huandika modeli kama {{ui:Maandishi (.usda)}}, {{ui:Binary (.usdc)}} au {{ui:Kifurushi (.usdz)}} kwa programu za kutengeneza picha na kukusanya eneo: kila mkusanyiko hubeba sehemu zake, kila sehemu ni wasifu wake uliopanuliwa kwa urefu wake pamoja na kupunguzwa kwa kona, na kila moja hubeba alama ya sehemu, wasifu, daraja, urefu na uzito. Matundu ya bolti, bolti, michomeleo na misingi havimo kwenye matundu ya USD. Ona [Hamisha modeli ya chuma kama USD](topic:usd).

### Misaidizi wa AI

- **USD kwa misaidizi.** Msaidizi wako mwenyewe, aliyeunganishwa kupitia CadCraft Studio, anaweza kuhamisha modeli kama USD (`usd_export`), na katika Studio kuiandika kwenye folda uliyoruhusu. Ona [Anachoweza kuomba msaidizi](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Kimebadilika

- **Utepe wa Chuma** una vitufe vikubwa na vidogo: {{ui:Boriti}} kubwa kando ya {{ui:Nguzo}}, {{ui:Mshikio}} na {{ui:Bamba}} ndogo kwenye {{ui:Kuunda modeli}} › {{ui:Vipengele}}; {{ui:Sahani za mwisho}} kubwa kwenye {{ui:Uchoraji wa kina}} › {{ui:Miunganiko}}, huku {{ui:Kiunganishi}} na {{ui:Gusset}} vikishiriki kitufe kimoja mseto; {{ui:Bandika}} kubwa kwenye {{ui:Hariri}} › {{ui:Ubao wa kunakili}}, huku {{ui:Bandika mahali pale}} na {{ui:Nakili mara mbili}} vikiwa nyuma ya mshale wa kikundi. {{ui:Utengenezaji}} › {{ui:Ubadilishanaji}} ina {{ui:Hamisha USD}} kando ya IFC. Mitindo mingine ya menyu inaonekana kama ilivyokuwa. Ona [Menyu, vitufe na kipanya](topic:menus-keys-and-mouse#the-three-styles).
- [Chambua fremu](topic:frame-analysis) sasa inaelekeza kwenye ukaguzi wa muundo, na michanganyiko yake inaweza kutengenezwa na kanuni.

## Katika kila programu

- **Vipimo.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Vipimo}} ina orodha moja kila moja kwa urefu, eneo, ujazo, pembe na mteremko, zikiwa na ukubwa halisi kutoka ufafanuzi wa vipimo hivyo (futi ya uchunguzi ya Marekani ni kipimo chake yenyewe). Zima vipimo usivyotumia na vitatoweka kwenye orodha; weka nyota moja na kazi mpya itaanza nacho. Faili daima huhifadhi kipimo chake. Visanduku vya DetailCraft havifuati orodha bado: urefu wake bado huandikwa kwa milimita. Ona [Vipimo, thamani zilizoandikwa na orodha za vipimo](common:unit-lists).
- **Mpangilio wenye msongamano na paneli zinazojificha kwa nadhifu.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Msongamano wa mpangilio}} › {{ui:Kubana}} hutoshea vitu zaidi kwenye skrini (skrini za kugusa na simu zinabaki na vitufe vyake vikubwa). Kila paneli ya kando ina upau mwembamba wa kichwa: uburute ili ibandikwe au itoke kama kipande huru, uiachie juu ya upau wa paneli nyingine ili kushiriki fremu moja kama vichupo, uibandike ili iteleze hadi ukingoni, au uifiche na uirudishe kutoka ukingoni. Ona [Panga paneli](common:arrange-panels#make-the-layout-denser).
- **Mazungumzo yanahamishika.** Buruta mazungumzo kwa upau wake wa kichwa uyatoe njiani mwa mchoro; yatarudi mahali ulipoyaacha. Bofya mara mbili upau wa kichwa ili kuyarudisha katikati. Ona [Hamisha mazungumzo](common:arrange-panels#move-a-dialog).
- **Mapishi kwa misaidizi wa AI.** Maombi kumi yaliyokamilika kwa msaidizi wako mwenyewe (kupanga mchoro, kuchapisha seti, kukagua michoro, kuuliza modeli maswali, kujumlisha orodha ya kiasi, kujaribu toleo la sehemu…), kila moja ikiwa na zana inazoita na ruhusa inazohitaji, na kila moja ikichezwa tena na majaribio yetu. Programu hazina AI ndani yake. Ona [Mapishi kwa misaidizi wa AI](common:assistants-recipes).
- **Lugha.** **Português (Portugal)** ni mpya katika {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Lugha}}. Yenyewe, **Português (Brasil)**, **Español (México)** na **Bahasa Indonesia** sasa zina kila neno la programu, kama rasimu ambazo bado hazijakaguliwa na mzungumzaji asilia. Kurasa za msaada ziko kwa Kiingereza.
- **CadCraft Studio** inaeleza kwa nini ukaguzi wa sasisho ulishindwa (hakuna faili ya mfumo wako bado, hakuna mtandao, sahihi mbovu) badala ya kuandika "Imekamilika" tu, na haionyeshi tena kadi ya Kilichopya ulioifunga hadi kutolewe toleo jipya.

## Bado haipatikani katika toleo hili

- **0.7 haijatiwa sahihi ya msimbo.** Usainishaji, na kifurushi cha Microsoft Store, vimehamishwa hadi 0.8 kwa sababu uthibitishaji wa cheti bado haujakamilika. Kagua SHA-256 iliyo karibu na kila faili kwenye getcadcraft.com/download. Kwenye Windows, SmartScreen ikisimamisha kisakinishi, chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, mara ya kwanza, bofya kulia CadCraft Studio na uchague {{ui:Fungua}}. CadCraft Studio bado haipo kwenye duka la programu, na bado hakuna toleo la iPad wala iPhone.
- Orodha za pembe na mteremko katika {{ui:Vipimo}} zimehifadhiwa, lakini bado hakuna kisanduku kinachozisoma.
- **Ukaguzi wa muundo bado haujakaguliwa na mhandisi.** Majaribio yetu yanalinganisha matokeo na thamani za jedwali zilizochapishwa na fomula zilizohesabiwa kwa mkono, si bado na mifano iliyokamilika ya mwongozo wa usanifu. Hadi ukaguzi, ni msaada tu: kagua kwa mkono vipengele vinavyojali.
- Ukaguzi wa muundo unatumia nguvu za mpangilio wa kwanza (bila athari za mpangilio wa pili) na unakagua wasifu wa I tu. Haujajengwa: mirija, pembe, chaneli, maumbo yaliyochomeleywa, sehemu nyembamba (AISC) au za darasa la 4 (Eurocode) katika kupinda, msokoto, kujipinda kwa kukata pamoja na kupinda, miunganiko, uchovu, moto, usanifu wa tetemeko na zege. Kipengele chembamba kilichobanwa huacha ukaguzi wa mgandamizo nje, na kipengele kinasomeka "imepita, imekaguliwa kwa sehemu".
- Uchanganuzi wa fremu bado ni wa mpangilio wa kwanza na wa mstari, na mhandisi hajaujaribu kwenye kazi halisi bado.
- Matundu ya bolti, bolti, michomeleo na misingi havimo kwenye usafirishaji wa USD.

Kila kitu kingine kiko katika [Bado hakijajengwa](topic:not-built-yet).
