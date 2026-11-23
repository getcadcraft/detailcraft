---
title: Mpya katika 0.9 (ya awali)
summary: Ukubwa wa chuma wa Blue Book ya Uingereza na pembe zisizo sawa, michoro ya warsha kwa kila sehemu katika seti moja ya PDF, Wasifu Wangu kwa sehemu maalum, P-Delta na masafa asilia, mizigo ya upepo ya ASCE 7, eneo la tetemeko na michanganyiko, na kiteuzi hai na Fuata.
keywords: mpya 0.9, toleo la awali, mpya, nini kipya, maelezo ya toleo, kumbukumbu za mabadiliko, 0.9, chuma cha uingereza, blue book, ub, uc, pfc, shs, rhs, chs, pembe isiyo sawa, mchoro wa warsha, michoro ya warsha, seti ya karatasi, alama ya sehemu, pdf, wasifu wangu, wasifu maalum, p-delta, mpangilio wa pili, masafa asilia, vipengele vya kikomo, urefu wa upepo, asce 7, tetemeko, daraja la eneo, usgs, michanganyiko ya mizigo, lrfd, asd, moja kwa moja, viteuzi, fuata, watu, vidokezo, mpya, maelezo ya toleo, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, ufungaji, korongo, chati ya mzigo, filamu, rubani wa kiotomatiki, miunganisho, nondo, msongamano, msingi, msingi wa zege, kutulia, fremu, mbao, chuma nyepesi, orodha ya kukata, ujenzi, ufikiaji wa weld, msambazaji, hisa, muda wa kusubiri, kinachovunjika kwanza, zege, tetemeko, bamba, lugha, msaidizi
from: ab0c7f05
---

Hiki ndicho kilichobadilika katika DetailCraft 0.9, ikilinganishwa na 0.8.1. 0.9 inaleta ukubwa wa chuma wa Uingereza, mchoro wa warsha kwa kila sehemu kwa mara moja, kichupo kikubwa zaidi cha {{ui:Analysis}} kwa fremu, na mwonekano wa viteuzi vya kila mmoja mnapofanya kazi pamoja.

## Mpya

### Chuma cha Uingereza na michoro ya warsha

- **Ukubwa wa chuma wa Uingereza.** Orodha za wasifu sasa zina ukubwa 976 kutoka Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS na RHS, huku sehemu tupu zilizoundwa kwa baridi zikitengwa (majina yao huanza na CF). Majina yanaandikwa familia kwanza, kama UB305x165x40 au SHS100x100x5.0, na kuyaandika kama michoro inavyosema pia kunafanya kazi: 305x165x40 UB, L100x100x10, SHS100x5. Tazama [Katalogi ya wasifu](topic:profile-catalog).
- **Pembe zisizo sawa.** Pembe za UEA zinahifadhi miguu yote miwili kupitia IFC ndani na nje na kupitia faili za NC, na kioo kinageuza kipande ncha kwa ncha.
- **Michoro yote ya warsha mara moja.** Chagua {{ui:Shop drawing}} katika kundi la {{ui:Output}} bila kuchagua chochote. Dirisha linaorodhesha kila alama ya sehemu, linaonyesha hakikisho la yoyote kati yao, na {{ui:Pakua zote}} huhifadhi PDF moja yenye ukurasa kwa kila alama, kila moja likiwa na kichwa "Karatasi 3 kati ya 42". {{ui:Download this sheet}} huhifadhi ile unayoiona. Chaneli, pembe na sehemu tupu sasa pia zinapata karatasi. Tazama [Tengeneza michoro ya warsha](topic:shop-drawings).
- **Wasifu Wangu.** Wasifu maalum sasa unaweza kuhifadhiwa kwa kila modeli mpya. Katika fomu ya Wasifu maalum, acha {{ui:Keep in My profiles}} imewekwa alama; orodha ya {{ui:My profiles}} chini yake ina {{ui:Keep}}, {{ui:Use here}} na {{ui:Remove}}. Orodha inahifadhiwa kwenye kivinjari hiki (hadi 200), si kwenye akaunti yako. Tazama [Bamba na wasifu](topic:plates-and-profiles).

### Uchanganuzi

- **Mpangilio wa pili (P-Delta).** Weka alama {{ui:Second order (P-Delta)}} karibu na Endesha kwenye kichupo cha {{ui:Analysis}}, na nguvu za axial zinafanya kazi kwenye fremu iliyoinama. Bamba na sakafu ngumu zinabaki za mpangilio wa kwanza, pamoja na onyo. Tazama [Nguvu, athari na mikengeuko](topic:frame-analysis).
- **Masafa asilia.** Kizuizi cha {{ui:Finite elements: natural frequencies}} chini ya matokeo kinatafuta hali za chini kabisa za modeli ile ile, pamoja na kipindi na wingi wa moduli wenye ufanisi, na kuonyesha hali kwenye modeli. Tazama [Nguvu, athari na mikengeuko](topic:frame-analysis).
- **Mizigo ya upepo na eneo la tetemeko.** Vizuizi vitatu vipya kwenye kichupo cha {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} na {{ui:ASCE 7 load combinations}}. Tazama [Upepo, eneo la tetemeko na michanganyiko ya ASCE 7](topic:wind-seismic-combinations).

### Kufanya kazi pamoja

- **Viteuzi na majina.** Katika kipindi cha Moja kwa moja, kiteuzi cha kila mtu kinachorwa kwenye modeli pamoja na jina lake na rangi yake, na kile alichochagua kinapata kisanduku.
- **Fuata mtu.** Fungua {{ui:People}} kwenye kipindi na uchague {{ui:Follow}} kwenye jina; mwonekano wako unahamia pamoja na wao. Mwenyeji anaweza kuchagua {{ui:Ask everyone to follow me}}. Tazama [Fuata mtu katika kipindi cha Moja kwa moja](topic:follow-in-live).

### Katika kila programu

- Vidokezo ni vidokezo vya Bootstrap, kadi ya kidokezo cha mwanzo ina kitufe cha kufunga, safu za vichupo husogea kando zisipotoshea, na kichupo cha kivinjari kinaonyesha jina la hati iliyofunguliwa likifuatwa na DetailCraft na CadCraft.

## Imerekebishwa

- Wasifu maalum ulipotea ulipoanza modeli mpya.
- Chaneli, pembe na sehemu tupu zilikosekana kwenye seti ya michoro ya warsha.

## Mipaka halisi

- Vizuizi vya upepo, tetemeko na vipengele vya kikomo ni msaada wa ukaguzi. Mhandisi wako anakagua matokeo; si ukaguzi wa kanuni. Utafutaji wa USGS ulijaribiwa kwenye mbadala, si kwenye huduma hai.
- Vipengele vya kikomo na P-Delta vilikaguliwa dhidi ya majibu ya mkono na ya fomula, si jengo halisi. Uchanganuzi wa kujikunja haujajengwa.
- Hakuna mtengenezaji wa chuma wa Uingereza ambaye amejaribu ukubwa wa Uingereza bado, na faili za NC za pembe zisizo sawa hazijaendeshwa kwenye mashine.
- Seti ya michoro ya warsha ni PDF pekee.
- Lugha zaidi ya Kiingereza ni rasimu za mashine.
- Vifungaji vya Windows havijasainiwa kwa msimbo (Maelezo zaidi, kisha Endesha hata hivyo); picha ya diski ya macOS haijathibitishwa na Apple (bofya kulia, kisha Fungua).

Mabadiliko ya awali yako kwenye maelezo ya 0.8 na 0.8.1 chini ya ukurasa huu.

## Ya awali: 0.8 na 0.8.1

Hiki ndicho kilichobadilika katika DetailCraft 0.8 (1 Novemba 2026) na 0.8.1 (2 Novemba 2026), ikilinganishwa na 0.7. 0.7 ilikagua vipengele vya chuma; 0.8 inapanga kuinua vitu, inapendekeza miunganisho, inakagua misingi na nondo, na inaunda fremu za kuta, sakafu na paa za mbao na chuma nyepesi.

### Mpya

**Ufungaji**

- **Mpango wa ufungaji na filamu.** Kwenye kichupo cha {{ui:Erection}}, eleza korongo (linasimama wapi, ndoano yake ya juu zaidi, vifaa vya kufunga visivyo kwenye chati) na uandike safu za chati yake ya mzigo. DetailCraft inainua modeli kitu kimoja kwa wakati, kwa mpangilio wa awamu na ngazi kwa ngazi, na inakagua kila kuinua dhidi ya chati kwa radius yake na dhidi ya ukingo uliouweka. {{ui:Save movie}} huandika faili moja ya HTML inayocheza nje ya mtandao kwenye kivinjari chochote, hata kwenye simu. Kuinua kulio juu ya chati, zaidi yake au juu mno kipo kwenye {{ui:Problems}}. Ni mpango kutoka kwa nambari zako, si mpango wa kuinua. Tazama [Mpango wa ufungaji na filamu](topic:erection-movie).

**Miunganisho**

- **Rubani wa miunganisho.** Kichupo cha {{ui:Autopilot}} kinatazama kila kiungo kisicho na muunganisho na kupendekeza moja kutoka kwa maumbo: bamba za msingi, vichupo vya kukata, bamba za ncha kwa mihimili uliyoweka alama kama mihimili ya momenti, viungio na gasket. Toa mzigo sawa au kukata kwa ncha moja, na idadi ya bolti inafuata nguvu ya muundo ya bolti. {{ui:Add them all}} huongeza mapendekezo kama hatua moja ya kutendua. Ni thamani za kuanzia za kukagua, si muundo wa muunganisho.
- **Ukaguzi wa ujenzi.** {{ui:Problems}} kwa bolti ambayo ufunguo hauwezi kuifikia, bolti zilizo karibu mno kwa soketi, uchomeleaji wa kona nje ya mipaka ya ukubwa wake, na sehemu tupu zinazoshika maji. Ufikiaji wa uchomeleaji ni mpya: uchomeleaji wa kona wa kuzunguka wote ambao tochi ya mchomeleaji haiwezi kuufikia unaorodheshwa pamoja na sehemu iliyo njiani na sehemu ya uchomeleaji iliyoathirika. Tazama [Ukaguzi wa ujenzi](topic:constructability).

**Misingi na nondo**

- **Ukaguzi wa msingi.** Kichupo cha {{ui:Foundation}} kinakagua misingi, misingi iliyounganishwa na mikeka kwenye udongo unaouelezea: kubeba mzigo, kuteleza na kupinduka kutoka mizigo ya huduma; kupinda, kukata, kupiga ngumi, ukuzaji na nondo ya chini kutoka mizigo iliyozidishwa (ACI 318-19). Nguzo karibu na ukingo au kona inakaguliwa kwa sehemu iliyokatwa na ukingo wa msingi. Kutulia kunatoka kwenye moduli ya udongo, mkeka unaonyumbulika unatatuliwa kwenye chemchemi kutoka moduli ya msingi, na vikundi vya nguzo na kuta za kubakiza vina paneli zao. Mizigo ya nguzo inaweza kuandikwa au kuchukuliwa kutoka {{ui:Analysis}}. Tazama [Ukaguzi wa msingi](topic:foundation-checks).
- **Ramani ya msongamano wa nondo.** Kichupo cha {{ui:Congestion}} kinachora ramani ya joto ya kila msingi kama unavyouona kutoka juu: pale ambapo nondo zinaacha nafasi ndogo mno kwa zege kushuka, dhidi ya kanuni ya nafasi safi na, kama utatoa, jiwe kubwa zaidi na kichwa cha kitetemeshi. Tazama [Ramani ya msongamano wa nondo](topic:rebar-congestion).

**Fremu na ugavi**

- **Fremu za mbao na chuma nyepesi.** Kichupo cha {{ui:Framing}} kinaunda fremu za paneli za kuta, sakafu na paa zenye kila kipande, orodha ya kukata, hisa ya kununua na michoro ya warsha kwa kipimo. {{ui:Place as members}} huweka vipande kwenye modeli, na {{ui:PDF sheets}} huhifadhi karatasi moja kwa kila paneli. Ukubwa, nafasi na vichwa ni vyako: DetailCraft haikagui kwamba vinabeba mzigo. Tazama [Paneli za fremu za mbao na chuma nyepesi](topic:framing-panels).
- **Hisa ya msambazaji na muda wa kusubiri.** Kichupo cha {{ui:Supply}} kinasoma orodha ya hisa ya msambazaji (CSV) na kuonyesha, kwa kila sehemu ambayo orodha ya kukata inanunua, kama kuna ya kutosha kwenye hisa na muda wa kusubiri ni upi. Vipande vifupi na sehemu zinazochelewa vipo kwenye {{ui:Problems}}. Hakuna kinachoagizwa. Tazama [Hisa ya msambazaji na muda wa kusubiri](topic:supplier-stock).

**Uchanganuzi na usanifu**

- **Nini kinavunjika kwanza?** Kwenye kichupo cha {{ui:Analysis}}, kitufe kinatafuta mchanganyiko wa nguvu unaotawala, kipengele dhaifu zaidi, mizigo inaweza kukua kwa kiasi gani kabla kipengele cha kwanza hakijafikia kikomo chake, na bamba dhaifu zaidi ya ncha au kichupo cha kukata pale ambapo nguvu ya kukata ya bolti zake inajulikana. Kinahitaji michanganyiko na kanuni ya muundo kwanza. Kubeba mzigo, kukata kwa kizuizi, uchomeleaji na kupinda hayakaguliwi. Msaidizi wako aliyeunganishwa anaweza kuuliza vilevile.
- **Moja kwa moja.** Weka alama {{ui:Live: solve again after each edit}} na fremu inatatuliwa tena baada ya kila mabadiliko.
- **Zege, zaidi.** Safu nyembamba katika fremu isiyo ya kuyumba inaundwa kwa momenti yake iliyokuzwa (ACI 318-19 6.6.4.5). Kipindi cha tetemeko kinaweza kuchukuliwa kutoka kwa uchanganuzi kwa mbinu ya Rayleigh. Sakafu iliyotengenezwa kwa bamba inapata chuma ambacho kila tabaka linahitaji kutoka kwa momenti zake, na kukata kwa njia moja. Tazama [Kagua vipengele vya zege na tengeneza mizigo ya tetemeko](topic:concrete-and-seismic).
- **Kwa mhandisi kukagua.** Matokeo ya msingi, zege na Nini kinavunjika kwanza ni msaada. Mizigo ya upepo haijajengwa.

**Katika kila programu**

- **Lugha.** Msaada uko katika lugha 54. Zile zaidi ya Kiingereza ni rasimu za mashine hadi mzungumzaji wa asili azisome; kumi ni mpya (Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili, Kiuzbeki).
- **Safu za upau wa zana.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} huchagua kufunga mistari, safu 2 au safu 1. Upau ambao tayari unatoshea unabaki jinsi ulivyo; mengine husogea kando.
- **Gridi ya sifa.** Sehemu za msingi zinatumia gridi ya pamoja: kategoria zinazokunjwa na msongamano mdogo. Hesabu iliyoandikwa kama 2*450 bado inafanya kazi.
- **Vifaa vya kuingiza.** Trackpad, kalamu, kipanya cha 3D, kidhibiti na MIDI vinaweza kuendesha programu. Tazama [Sogeza katika 3D](topic:navigate-3d).
- **Kidirisha cha Matatizo.** Maonyo ya ukaguzi mpya hapo juu yanaonekana kwenye kidirisha kile kile cha {{ui:Problems}} kama awali.
- **Unganisha AI yako.** Msaidizi wako mwenyewe, aliyeunganishwa kupitia CadCraft Studio, anafanya kazi na programu zote nane na anaona tu kile unachoruhusu. Muunganisho wa kubofya mara moja, kiunganishi kilichopangishwa na ufunguo wako wa API kwenye Studio bado vinakuja. Tazama [Tumia DetailCraft na msaidizi wa AI](topic:use-with-ai-assistants).

### Imerekebishwa katika 0.8.1

- **Lugha katika Studio.** Studio na matoleo yaliyofungashwa yanaweza kubadilisha lugha wakati wa kuendesha; kabla ya hapo yalikuwa Kiingereza pekee. Bado hayajajaribiwa kwenye kila jukwaa: tuambie lugha isipobadilika.
- **Uchaguzi wa dirisha linalovuka.** Vifungaji vya 0.8.1 vina tabia ya kuchagua kwa dirisha ambayo tayari ilikuwa sahihi kwenye toleo la wavuti la 0.8; kifungaji cha zamani hakikuwa nayo.
- **Kompyuta kibao wima.** Nafasi ya ziada ya gridi inaenda kwenye turubai, na mpangilio wa karatasi unaanza kwa 760 px au chini.

### Bado kwenye toleo hili

- **Kutuma NC kwa mashine** bado hakijatolewa.
- **Mizigo ya upepo** kwa zege bado haijajengwa, na ukaguzi wa zege na wa msingi ni wa mhandisi kukagua.
- **Kusaini msimbo.** Vifungaji vya Windows na .dmg ya macOS havijasainiwa, hivyo Windows inaweza kuonya na macOS inaomba kubofya kulia, kisha Fungua.

Mabadiliko ya awali yako katika [Mpya katika 0.7](topic:whats-new-0-7).
