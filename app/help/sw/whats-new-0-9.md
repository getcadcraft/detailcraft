---
title: Kilichopya katika 0.9
summary: Ukubwa wa chuma wa UK Blue Book na pembe zisizolingana, michoro ya warsha kwa kila sehemu katika seti moja ya PDF, Wasifu Wangu kwa sehemu maalum, P-Delta na masafa asilia, mizigo ya upepo ya ASCE 7, eneo la tetemeko na michanganyiko yake, pamoja na vielekezi hai na Fuata.
keywords: kilichopya, nini kipya, maelezo ya toleo, kumbukumbu ya mabadiliko, 0.9, chuma cha uk, blue book, ub, uc, pfc, shs, rhs, chs, pembe isiyolingana, mchoro wa warsha, michoro ya warsha, seti ya karatasi, alama ya sehemu, pdf, wasifu wangu, wasifu maalum, p-delta, mpangilio wa pili, masafa asilia, vipengele vya kikomo, wingi wa modal, mzigo wa upepo, asce 7, tetemeko, darasa la eneo, usgs, michanganyiko ya mizigo, lrfd, asd, hai, vielekezi, fuata, watu, vidokezo, kumbukumbu ya mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, ufungaji, korongo, jedwali la mzigo, filamu, rubani wa kiotomatiki, miunganiko, rebar, msongamano, msingi, nyayo, mat, kutulia, fremu, mbao, chuma chembamba, orodha ya kukatwa, ujenzi, ufikiaji wa weld, msambazaji, hisa, muda wa kusubiri, kitu gani kitavunjika kwanza, zege, tetemeko, bamba, lugha, msaidizi
from: 4c95a2de
---

Hii ndiyo iliyobadilika katika DetailCraft 0.9, ikilinganishwa na 0.8.1. 0.9 inaleta ukubwa wa chuma wa Uingereza, mchoro wa warsha kwa kila sehemu kwa mara moja, kichupo kikubwa cha {{ui:Uchanganuzi}} kwa fremu, na mwonekano wa vielekezi vya wenzako mnapofanya kazi pamoja.

## Mpya

### Chuma cha Uingereza na michoro ya warsha

- **Ukubwa wa chuma wa Uingereza.** Orodha za wasifu sasa zina ukubwa 976 kutoka Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS na RHS, huku sehemu tupu zilizoundwa kwa baridi zikitenganishwa (majina yake huanza na CF). Majina yanaandikwa kwa familia kwanza, kama UB305x165x40 au SHS100x100x5.0, na pia unaweza kuandika kama michoro inavyosema: 305x165x40 UB, L100x100x10, SHS100x5. Ona [Katalogi ya wasifu](topic:profile-catalog).
- **Pembe zisizolingana.** Pembe za UEA huhifadhi miguu yote miwili kupitia IFC ndani na nje na kupitia faili za NC, na kioo hugeuza kipande ncha kwa ncha.
- **Michoro yote ya warsha kwa mara moja.** Chagua {{ui:Mchoro wa warsha}} kwenye kikundi cha {{ui:Matokeo}} bila kuchagua chochote. Dirisha linaorodhesha kila alama ya sehemu, linaonyesha hakiki ya yoyote kati yao, na {{ui:Pakua zote}} huhifadhi PDF moja yenye ukurasa kwa kila alama, kila moja ikiwa na kichwa "Karatasi 3 kati ya 42". {{ui:Pakua PDF}} huhifadhi ile unayoiona. Chaneli, pembe na sehemu tupu sasa pia zinapata karatasi. Ona [Tengeneza michoro ya warsha](topic:shop-drawings).
- **Wasifu Wangu.** Wasifu maalum sasa unaweza kuhifadhiwa kwa kila modeli mpya. Katika fomu ya Wasifu maalum, acha {{ui:Hifadhi katika Wasifu Wangu}} ikiwa imetiwa alama; orodha ya {{ui:Wasifu Wangu}} chini yake ina {{ui:Hifadhi}}, {{ui:Tumia hapa}} na {{ui:Ondoa}}. Orodha inahifadhiwa kwenye kivinjari hiki (hadi 200), si kwenye akaunti yako. Ona [Sahani na wasifu](topic:plates-and-profiles).

### Uchanganuzi

- **Mpangilio wa pili (P-Delta).** Tia alama {{ui:Mpangilio wa pili (P-Delta)}} karibu na {{ui:Endesha}} kwenye kichupo cha {{ui:Uchanganuzi}}, na nguvu za mhimili zitatenda kwenye fremu iliyopinda. Sahani na sakafu ngumu zinabaki za mpangilio wa kwanza, pamoja na onyo. Ona [Nguvu, athari na mikengeuko](topic:frame-analysis).
- **Masafa asilia.** Kizuizi cha {{ui:Vipengele vya kikomo: masafa asilia}} chini ya matokeo kinatafuta modi za chini kabisa za modeli ile ile, pamoja na kipindi na wingi wa modal unaofaa, na kuonyesha modi kwenye modeli. Ona [Nguvu, athari na mikengeuko](topic:frame-analysis).
- **Mizigo ya upepo na eneo la tetemeko.** Vizuizi vitatu vipya kwenye kichupo cha {{ui:Uchanganuzi}}: {{ui:Mizigo ya upepo (mbinu ya mwelekeo ya ASCE 7)}}, {{ui:Eneo na mfumo wa tetemeko (ASCE 7)}} na {{ui:Michanganyiko ya mizigo ya ASCE 7}}. Ona [Upepo, eneo la tetemeko na michanganyiko ya ASCE 7](topic:wind-seismic-combinations).

### Kufanya kazi pamoja

- **Vielekezi na majina.** Katika kikao cha Live, kielekezi cha kila mtu kinachorwa kwenye modeli pamoja na jina na rangi yake, na alichochagua kinapata kisanduku.
- **Fuata mtu.** Fungua {{ui:Watu}} kwenye kikao kisha uchague {{ui:Fuata}} kwenye jina; mtazamo wako unasogea pamoja na wake. Mwenyeji anaweza kuchagua {{ui:Waambie wote wanifuate}}. Ona [Fuata mtu kwenye kikao cha Live](topic:follow-in-live).

### Katika kila programu

- Vidokezo ni vidokezo vya Bootstrap, kadi ya kidokezo cha kuanzia ina kitufe cha kufunga, safu za vichupo husogea kando zisipotoshea, na jina la kichupo cha kivinjari linaonyesha hati iliyo wazi likifuatiwa na DetailCraft na CadCraft.

## Imerekebishwa

- Wasifu maalum ulipotea ulipoanzisha modeli mpya.
- Chaneli, pembe na sehemu tupu zilikosekana kwenye seti ya michoro ya warsha.

## Mipaka halisi

- Vizuizi vya upepo, tetemeko na vipengele vya kikomo ni misaada ya kukagua. Mhandisi wako ndiye anakagua matokeo; si ukaguzi wa kanuni. Utafutaji wa USGS ulijaribiwa kwenye mbadala, si kwenye huduma halisi.
- Vipengele vya kikomo na P-Delta vilikaguliwa dhidi ya majibu ya kwa mkono na ya fomula kamili, si jengo halisi. Uchanganuzi wa kujipinda haujajengwa.
- Hakuna mtengenezaji wa chuma wa Uingereza ambaye bado amejaribu ukubwa wa Uingereza, na faili za NC kwa pembe zisizolingana hazijaendeshwa kwenye mashine.
- Seti ya michoro ya warsha ni PDF pekee.
- Lugha zaidi ya Kiingereza ni rasimu za mashine.
- Visakinishi vya Windows havijatiwa sahihi ya msimbo (Maelezo zaidi, kisha Endesha hata hivyo); picha ya diski ya macOS haijathibitishwa na Apple (bofya kulia, kisha Fungua).

Mabadiliko ya awali yako katika maelezo ya 0.8 na 0.8.1 chini ya ukurasa huu.

## Awali: 0.8 na 0.8.1

Hii ndiyo iliyobadilika katika DetailCraft 0.8 (1 Novemba 2026) na 0.8.1 (2 Novemba 2026), ikilinganishwa na 0.7. 0.7 ilikagua vipengele vya chuma; 0.8 inapanga kuinua, inapendekeza miunganiko, inakagua misingi na rebar, na inaunda fremu za kuta, sakafu na paa za mbao na chuma chembamba.

### Mpya

**Ufungaji**

- **Mpango wa ufungaji na filamu.** Kwenye kichupo cha {{ui:Ufungaji}}, eleza korongo (linasimama wapi, ndoano yake ya juu zaidi, na vifaa vya kufunga visivyo kwenye jedwali) kisha andika safu za jedwali lake la mzigo. DetailCraft inainua modeli mkusanyiko mmoja kwa wakati, kwa mpangilio wa awamu na ngazi kwa ngazi, na inakagua kila kuinua dhidi ya jedwali kwa radius yake na dhidi ya ukingo uliouweka. {{ui:Hifadhi filamu}} huandika faili moja ya HTML inayocheza nje ya mtandao kwenye kivinjari chochote, hata kwenye simu. Kuinua zilizozidi jedwali, zilizopita au za juu mno ziko kwenye {{ui:Matatizo}}. Ni mpango kutoka kwa namba zako, si mpango wa kuinua. Ona [Mpango wa ufungaji na filamu](topic:erection-movie).

**Miunganiko**

- **Rubani wa miunganiko.** Kichupo cha {{ui:Rubani wa kiotomatiki}} kinaangalia kila kiungio kisicho na muunganiko na kupendekeza moja kutoka kwa maumbo: sahani za msingi, vichupo vya kukata, sahani za mwisho kwa mihimili uliyoweka alama kama mihimili ya momenti, viunganishi na gusset. Toa mzigo sawa au nguvu ya kukata ncha moja, na idadi ya bolti itafuata nguvu ya muundo wa bolti. {{ui:Ongeza zote}} huongeza mapendekezo kama hatua moja ya kutendua. Ni thamani za kuanzia za kukagua, si muundo wa muunganiko.
- **Ukaguzi wa ujenzi.** {{ui:Matatizo}} kwa bolti ambayo spana haiwezi kuifikia, bolti zilizo karibu mno kwa soketi, michomeleo ya fillet nje ya mipaka yake ya ukubwa, na sehemu tupu zinazoshika maji. Ufikiaji wa weld ni mpya: michomeleo ya fillet ya pande zote ambayo tochi ya mchomeleaji haiwezi kuifikia inaorodheshwa pamoja na sehemu iliyo njiani na sehemu ya michomeleo inayoathirika. Ona [Ukaguzi wa ujenzi](topic:constructability).

**Misingi na rebar**

- **Ukaguzi wa msingi.** Kichupo cha {{ui:Msingi}} hukagua nyayo, nyayo zilizounganishwa na mat kwenye udongo unaouelezea: kubeba, kuteleza na kupinduka kutoka mizigo ya huduma; kupinda, kukata, kutoboa, urefu wa kuunganisha na chuma cha chini kabisa kutoka mizigo iliyozidishwa (ACI 318-19). Nguzo karibu na ukingo au kona inakaguliwa kwa sehemu iliyokatwa na ukingo wa nyayo. Kutulia kunatokana na modulus ya udongo, mat inayonyumbulika inatatuliwa kwenye chemchemi kutoka modulus ya msingi, na vikundi vya nguzo na kuta za kuzuia zina paneli zao. Mizigo ya nguzo inaweza kuandikwa au kuchukuliwa kutoka {{ui:Uchanganuzi}}. Ona [Ukaguzi wa msingi](topic:foundation-checks).
- **Ramani ya msongamano wa rebar.** Kichupo cha {{ui:Msongamano}} kinachora ramani ya joto ya kila nyayo kama inavyoonekana kutoka juu: pale baa zinaacha nafasi ndogo mno kwa zege kushuka chini, dhidi ya kanuni ya nafasi safi na, ukiwapa, chembe kubwa zaidi ya mkusanyiko na kichwa cha kitetemeshi. Ona [Ramani ya msongamano wa rebar](topic:rebar-congestion).

**Fremu na ugavi**

- **Fremu za mbao na chuma chembamba.** Kichupo cha {{ui:Fremu}} hutengeneza paneli za kuta, sakafu na paa kwa kila kipande, orodha ya kukatwa, hisa ya kununua na mchoro wa warsha kwa kipimo. {{ui:Weka kama vipengele}} huweka vipande kwenye modeli, na {{ui:Laha za PDF}} huhifadhi karatasi moja kwa kila paneli. Ukubwa, nafasi na vichwa ni vyako: DetailCraft haikagui kama vinabeba mzigo. Ona [Paneli za fremu za mbao na chuma chembamba](topic:framing-panels).
- **Hisa ya msambazaji na muda wa kusubiri.** Kichupo cha {{ui:Ugavi}} husoma orodha ya hisa ya msambazaji (CSV) na kuonyesha, kwa kila sehemu ambayo orodha ya kukatwa inanunua, kama kuna hisa ya kutosha na muda wa kusubiri ni upi. Vipande vifupi na sehemu zilizochelewa ziko kwenye {{ui:Matatizo}}. Hakuna kinachoagizwa. Ona [Hisa ya msambazaji na muda wa kusubiri](topic:supplier-stock).

**Uchanganuzi na muundo**

- **Kitu gani kitavunjika kwanza?** Kwenye kichupo cha {{ui:Uchanganuzi}}, kitufe hutafuta mchanganyiko wa nguvu unaotawala, kipengele dhaifu zaidi, mizigo inaweza kukua kwa kiasi gani kabla kipengele cha kwanza hakijafikia kikomo chake, na sahani dhaifu zaidi au kichupo cha kukata ambapo nguvu ya kukata ya bolti zake inajulikana. Inahitaji michanganyiko na kanuni ya usanifu kwanza. Kubeba, kuzuia-kukata, michomeleo na kuvuta hakukaguliwi. Msaidizi wako aliyeunganishwa anaweza kuomba jambo hilo hilo.
- **Hai.** Tia alama {{ui:Vipengele vya kikomo: masafa asilia}} na fremu itatatuliwa tena baada ya kila mabadiliko. Hapo mwanzo ilikuwa {{ui:Hai: tatua tena baada ya kila mabadiliko}}.
- **Zege, zaidi.** Nguzo nyembamba katika fremu isiyotikisika imeundwa kwa momenti yake iliyokuzwa (ACI 318-19 6.6.4.5). Kipindi cha tetemeko kinaweza kuchukuliwa kutoka uchanganuzi kwa mbinu ya Rayleigh. Slab iliyotengenezwa kwa sahani hupata chuma kinachohitajika na kila safu kutoka momenti zake, pamoja na kukata kwa mwelekeo mmoja. Ona [Kagua vipengele vya zege na tengeneza mizigo ya tetemeko](topic:concrete-and-seismic).
- **Kwa mhandisi kukagua.** Matokeo ya msingi, zege na Kitu gani kitavunjika kwanza ni misaada. Mizigo ya upepo haijajengwa.

**Katika kila programu**

- **Lugha.** Msaada uko katika lugha 54. Zile zaidi ya Kiingereza ni rasimu za mashine hadi mzungumzaji asilia azisome; kumi ni mpya (Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili, Kiuzbeki).
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Safu za upau wa zana}} huchagua kufunga mstari, safu 2 au safu 1. Upau ambao tayari unatoshea unabaki jinsi ulivyo; zingine husogea kando.
- **Gridi ya sifa.** Sehemu za msingi zinatumia gridi ya pamoja: kategoria zinazokunjika na msongamano mdogo. Hesabu iliyoandikwa kama 2*450 bado inafanya kazi.
- **Vifaa vya kuingiza.** Padi ya kugusa, kalamu, kipanya cha 3D, kidhibiti na MIDI vinaweza kuendesha programu. Ona [Sogea katika 3D](topic:navigate-3d).
- **Paneli ya matatizo.** Onyo za ukaguzi mpya hapo juu zinaonekana kwenye paneli ile ile ya {{ui:Matatizo}} kama awali.
- **Unganisha AI yako.** Msaidizi wako mwenyewe, aliyeunganishwa kupitia CadCraft Studio, anafanya kazi na programu zote nane na anaona tu kile unachoruhusu. Kuunganisha kwa mbofyo mmoja, kiunganishi kinachohudumiwa, na ufunguo wako wa API ndani ya Studio bado vinakuja. Ona [Tumia DetailCraft na msaidizi wa AI](topic:use-with-ai-assistants).

### Imerekebishwa katika 0.8.1

- **Lugha katika Studio.** Studio na matoleo yaliyofungwa vinaweza kubadilisha lugha wakati wa kuendesha; awali vilikuwa Kiingereza pekee. Bado hakijajaribiwa kwenye kila jukwaa: tuambie kama lugha haibadiliki.
- **Uchaguzi wa dirisha linalovuka.** Visakinishi vya 0.8.1 vina tabia ya kuchagua kwa dirisha ambayo tayari ilikuwa sahihi kwenye toleo la wavuti la 0.8; kisakinishi cha zamani hakikuwa nayo.
- **Kompyuta kibao wima.** Urefu wa gridi uliobaki unakwenda kwenye turubai, na mpangilio wa karatasi huanza kwa 760 px au chini.

### Bado haipatikani katika toleo hili

- **Kutuma NC kwenye mashine** bado hakijatolewa.
- **Mizigo ya upepo** kwa zege bado haijajengwa, na ukaguzi wa zege na msingi ni kwa mhandisi kukagua.
- **Kutiwa sahihi kwa msimbo.** Visakinishi vya Windows na .dmg ya macOS havijatiwa sahihi, kwa hiyo Windows inaweza kuonya na macOS inaomba bofya kulia, kisha Fungua.

Mabadiliko ya awali yako katika [Kilichopya katika 0.7](topic:whats-new-0-7).
