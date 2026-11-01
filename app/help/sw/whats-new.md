---
title: Kipya katika 0.7
summary: Ukaguzi wa muundo wa maumbo-I ya chuma pamoja na michanganyiko ya mizigo kutoka ASCE 7 au EN 1990 na ukaguzi wa vipengele kwa AISC 360 au EN 1993-1-1, hamisho la USD la modeli ya chuma, zana msaidizi ya USD, utepe wa Chuma wenye vitufe vikubwa na vidogo, vidirisha vinavyojikunja na mazungumzo yanayohamishika.
keywords: kipya, nini kipya, maelezo ya toleo, mabadiliko, mabadiliko ya toleo, 0.7, toleo, vipengele vipya, ukaguzi wa muundo, muundo wa chuma, matumizi, michanganyiko ya mizigo, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Kiambatisho cha Kitaifa, mzigo hai wa paa, kikomo cha mkengeuko, usd, usda, usdc, usdz, openusd, msaidizi, mcp, utepe wa chuma, utepe, kitufe kilichogawanyika, vipimo, kubana, vidirisha, mazungumzo, kireno
from: 17d1e0bb
---

Haya ndiyo yaliyobadilika katika DetailCraft 0.7, ikilinganishwa na 0.6. Uchanganuzi wa fremu wa 0.6 sasa una hatua ya pili: kukagua vipengele vya chuma kulingana na kanuni ya muundo.

## Mpya

### Viungio vya mshazari (0.7.1)

- **Maumbo-I mawili yanayokutana kwa pembe**, kama goti la portal au kilele: chagua yote mawili, chagua {{ui:Kiungio cha mshazari}} kwenye menyu ya {{ui:Zaidi}} ya kundi la {{ui:Unganisha}}, na ncha zote mbili zinakatwa kwenye ndege inayogawanya pembe kwa nusu. Sahani za mwisho zilizofungwa pamoja na vidhibiti vya utando ni visanduku vya kuteua kwenye mazungumzo mapya ya Kiungio cha mshazari, ambayo sehemu zake zenye namba zinalingana na mchoro wa kiungo chako unaotengenezwa unapoandika. Mshazari unafuata vipengele vinapohamishwa, na unapita hadi kwenye michoro, faili za NC (kukata kwa mteremko), IFC na orodha ya vifaa. Tazama [Viungio vya mshazari](topic:mitres).

### Ukaguzi wa muundo

- **Michanganyiko ya mizigo kutoka kwenye kanuni.** Kwenye kichupo cha {{ui:Uchanganuzi}}, kizuizi kipya cha {{ui:Ukaguzi wa muundo}} kina {{ui:Kanuni ya muundo}}: ASCE 7 + AISC 360 (Marekani, LRFD) au EN 1990 + EN 1993-1-1 (Eurocode). Mpe kila kesi ya mzigo aina yake (tuli, hai, mzigo hai wa paa mpya, theluji, upepo, tetemeko), bonyeza {{ui:Tengeneza michanganyiko}}, na DetailCraft inaandika michanganyiko ya nguvu na ya huduma ya kanuni kwa kesi zako. Michanganyiko uliyoandika mwenyewe inabaki. Tazama [Tengeneza michanganyiko](topic:design-checks#make-the-combinations).
- **Thamani za Kiambatisho cha Kitaifa.** Kwa Eurocode vipengele huanza kwenye thamani zilizopendekezwa; {{ui:Thamani za Kiambatisho cha Kitaifa}} inakuruhusu kuandika za nchi yako, na zinahifadhiwa kwenye modeli. Tazama [Tengeneza michanganyiko](topic:design-checks#make-the-combinations).
- **Kagua vipengele.** {{ui:Kagua vipengele}} inakagua kila umbo-I la chuma kwa mvutano, mgandamizo pamoja na kujikunja, kupinda pamoja na kujikunja kwa kando na msokoto, kukata, kupinda pamoja na nguvu ya mhimili, na mkengeuko dhidi ya {{ui:Kikomo cha mkengeuko}} unachoweka. Jedwali linaonyesha matumizi ya kila kipengele, ukaguzi unaotawala na mchanganyiko wake, na vipengele vinapakwa rangi kwenye modeli (bluu, kijani, ocha, nyekundu, kijivu kwa ambavyo havijakaguliwa). Tazama [Kagua vipengele](topic:design-checks#check-the-members).
- **Katika ripoti.** {{ui:Ripoti (PDF)}} na {{ui:Ripoti (CSV)}} zinaongeza matoleo ya kanuni, mipangilio, matumizi kwa kila kipengele na kila kifungu kilichotumika. Tazama [Ripoti](topic:design-checks#the-report).
- **Msaada hadi mhandisi aikague.** Inatumia nguvu za mpangilio wa kwanza pekee. Mirija, pembe, chaneli, maumbo yaliyochomelewa na sehemu nyembamba au za daraja la 4 zinasoma "hazijakaguliwa", pamoja na sababu; msokoto, miunganiko na zege hazijakaguliwa. Tazama [Kisichokaguliwa](topic:design-checks#what-is-not-checked).

### USD

- **Hamisha modeli ya chuma kama USD.** {{ui:USD}} kwenye kundi la {{ui:Matokeo}} inaandika modeli kama {{ui:Maandishi (.usda)}}, {{ui:Binary (.usdc)}} au {{ui:Kifurushi (.usdz)}} kwa programu za uonyeshaji na kuunganisha onyesho: kila mkusanyiko unashikilia sehemu zake, kila sehemu ni sehemu yake ya msalaba inayopita urefu wake pamoja na kupunguzwa kumekatwa, na kila moja inabeba alama yake ya sehemu, wasifu, daraja la chuma, urefu na uzito. Mashimo ya bolti, bolti, uchomeleaji na misingi havimo kwenye matundu ya USD. Tazama [Hamisha modeli ya chuma kama USD](topic:usd).

### Visaidizi vya AI

- **USD kwa visaidizi.** Msaidizi wako mwenyewe, aliyeunganishwa kupitia CadCraft Studio, anaweza kuhamisha modeli kama USD (`usd_export`), na kwenye Studio kuiandika kwenye folda uliyoruhusu. Tazama [Msaidizi anaweza kuomba nini](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Imebadilika

- **Utepe wa Chuma** una vitufe vikubwa na vidogo: {{ui:Boriti}} kubwa kando ya {{ui:Nguzo}}, {{ui:Mshikio}} na {{ui:Bamba}} vidogo kwenye {{ui:Kuunda modeli}} › {{ui:Vipengele}}; {{ui:Sahani za mwisho}} kubwa kwenye {{ui:Uchoraji wa kina}} › {{ui:Miunganiko}}, na {{ui:Kiunganishi}} na {{ui:Gusset}} vikishiriki kitufe kimoja kilichogawanyika; {{ui:Bandika}} kubwa kwenye {{ui:Hariri}} › {{ui:Ubao wa kunakili}}, na {{ui:Bandika mahali pale}} na {{ui:Nakili mara mbili}} nyuma ya mshale wa kundi. {{ui:Utengenezaji}} › {{ui:Ubadilishanaji}} ina {{ui:Hamisha USD}} kando ya IFC. Mitindo mingine ya menyu inaonekana kama ilivyokuwa. Tazama [Menyu, funguo na kipanya](topic:menus-keys-and-mouse#the-three-styles).
- [Chambua fremu](topic:frame-analysis) sasa inaelekeza kwenye ukaguzi wa muundo, na michanganyiko yake inaweza kutengenezwa kwa kanuni.

## Katika kila programu

- **Vipimo.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Vipimo}} ina orodha moja kila moja kwa urefu, eneo, ujazo, pembe na mteremko, pamoja na ukubwa kamili ambao ufafanuzi wa vipimo hutoa (futi ya utafiti ya Marekani ni kipimo chake yenyewe). Zima vipimo usivyotumia kamwe nazo zinaondoka kwenye orodha za vipimo; weka nyota kwa moja na kazi mpya inaanza nacho. Faili daima inabakiza kipimo chake. Visanduku vya DetailCraft havifuati orodha bado: urefu wake bado unaandikwa kwa milimita. Tazama [Vipimo, thamani zilizoandikwa na orodha za vipimo](common:unit-lists).
- **Mpangilio mnene zaidi na vidirisha vinavyojikunja.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Msongamano wa mpangilio}} › {{ui:Kubana}} inatoshea zaidi kwenye skrini (skrini za kugusa na simu zinabaki na vitufe vyake vikubwa). Kila kidirisha cha pembeni kina upau mwembamba wa kichwa: buruta ili kukiweka au kukielea, dondosha kwenye upau wa kidirisha kingine ili kushiriki fremu moja kama vichupo, bandika ili kiteleze hadi ukingoni, au kifiche na kukirudisha kutoka ukingoni. Tazama [Panga vidirisha](common:arrange-panels#make-the-layout-denser).
- **Mazungumzo yanahamishika.** Buruta mazungumzo kwa upau wake wa kichwa uyatoe kwenye njia ya mchoro; yanarudi pale ulipoyaacha. Bofya mara mbili upau wa kichwa ili kuyaweka katikati tena. Tazama [Hamisha mazungumzo](common:arrange-panels#move-a-dialog).
- **Mapishi kwa visaidizi vya AI.** Maombi kumi yaliyofanyiwa kazi kwa msaidizi wako mwenyewe (panga mchoro, chapisha seti, kagua michoro, uliza maswali kuhusu modeli, jumlisha ukadiriaji wa kiasi, jaribu lahaja la sehemu…), kila moja na zana inazoita na ruhusa inazohitaji, na kila moja inarudiwa na majaribio yetu. Programu hazina AI ndani yake. Tazama [Mapishi kwa visaidizi vya AI](common:assistants-recipes).
- **Lugha.** **Português (Portugal)** ni mpya katika {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Lugha}}. Yenyewe, **Português (Brasil)**, **Español (México)** na **Bahasa Indonesia** sasa zina kila neno la programu, kama rasimu ambazo bado hazijakaguliwa na mzungumzaji asilia. Mada za msaada ziko kwa Kiingereza.
- **CadCraft Studio** inasema kwa nini ukaguzi wa sasisho ulishindwa (hakuna faili ya mfumo wako bado, hakuna mtandao, sahihi mbaya) badala ya "Imekamilika" tu, na inaacha kurudisha kadi ya Kipya ulioifunga hadi kuwe na toleo jipya zaidi.

## Bado si katika toleo hili

- **0.7 haijasainiwa kidijitali.** Usainishaji, pamoja na kifurushi cha Microsoft Store, vilihamia 0.8 kwa sababu uthibitishaji wa cheti bado haujafika. Angalia SHA-256 karibu na kila faili kwenye getcadcraft.com/download. Kwenye Windows, ikiwa SmartScreen itasimamisha kisakinishi, chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, mara ya kwanza, bofya kulia CadCraft Studio na uchague {{ui:Fungua}}. CadCraft Studio bado haipo kwenye duka lolote la programu, na bado hakuna toleo la iPad wala iPhone.
- Orodha za pembe na mteremko katika {{ui:Vipimo}} zinahifadhiwa, lakini hakuna kisanduku kinazisoma bado.
- **Ukaguzi wa muundo bado haujakaguliwa na mhandisi.** Majaribio yetu yanayalinganisha na thamani za jedwali zilizochapishwa na fomula zilizofanyiwa kazi kwa mkono, si bado na mifano iliyofanyiwa kazi ya mwongozo wa muundo. Hadi ukaguzi, ni msaada tu: kagua vipengele vyenye umuhimu kwa mkono.
- Ukaguzi wa muundo unatumia nguvu za mpangilio wa kwanza (bila athari za mpangilio wa pili) na unakagua maumbo-I pekee. Havijajengwa: mirija, pembe, chaneli, maumbo yaliyochomelewa, sehemu nyembamba (AISC) au za daraja la 4 (Eurocode) katika kupinda, msokoto, kujikunja kwa kukata pamoja na kupinda, miunganiko, uchovu, moto, usanifu wa tetemeko na zege. Sehemu nyembamba iliyo chini ya mgandamizo huacha ukaguzi wa mgandamizo nje, na kipengele kinasoma "imepita, imekaguliwa kwa sehemu".
- Uchanganuzi wa fremu bado ni wa mpangilio wa kwanza na wa mstari, na bado haujajaribiwa na mhandisi kwenye kazi halisi.
- Mashimo ya bolti, bolti, uchomeleaji na misingi havimo kwenye hamisho la USD.

Kila kitu kingine kiko katika [Kisichojengwa bado](topic:not-built-yet).
