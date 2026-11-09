---
title: Nini kipya katika 0.8 na 0.8.1
summary: Filamu ya ufungaji kutoka chati ya mzigo ya kreni, rubani wa muunganisho, ramani ya msongamano wa nondo, ukaguzi wa msingi, paneli za fremu za mbao na chuma chepesi, ukaguzi wa ujengwaji na ufikiaji wa uchomeleaji, hisa za msambazaji, kinachovunjika kwanza, hesabu ya moja kwa moja, ukaguzi zaidi wa zege na marekebisho ya 0.8.1.
keywords: nini kipya, madokezo ya toleo, mabadiliko, orodha ya mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, ufungaji, kreni, chati ya mzigo, filamu, rubani, muunganisho, nondo, msongamano, msingi, fremu, mbao, ukaguzi, uchomeleaji, msambazaji, hisa, muda wa kuletwa, zege, lugha, msaidizi
from: 6e33e052
---

Haya ndiyo yaliyobadilika katika DetailCraft 0.8 (1 Novemba 2026) na 0.8.1 (2 Novemba 2026), ikilinganishwa na 0.7. 0.7 ilikagua vipengele vya chuma; 0.8 inapanga kuinua, inapendekeza miunganisho, inakagua misingi na nondo, na inaunda fremu za kuta, sakafu na paa za mbao na chuma chepesi.

## Mpya

### Ufungaji

- **Erection plan and movie.** Kwenye kichupo cha {{ui:Erection}}, eleza kreni (inasimama wapi, ndoano yake ya juu kabisa, na vifaa vya kuunganisha visivyo kwenye chati) kisha uandike safu za chati yake ya mzigo. DetailCraft inainua modeli mkusanyiko mmoja kwa wakati, kwa mpangilio wa awamu na daraja kwa daraja, na inakagua kila kuinua dhidi ya chati kwenye radius yake na dhidi ya ukingo wa usalama ulioweka. {{ui:Save movie}} inaandika faili moja ya HTML inayocheza nje ya mtandao kwenye kivinjari chochote, hata kwenye simu. Kuinua kulioko juu ya chati, nje yake au juu mno kuko kwenye {{ui:Problems}}. Ni mpango kutoka kwenye namba zako, si mpango wa kuinua. Angalia [Mpango wa ufungaji na filamu](topic:erection-movie).

### Miunganisho

- **Connection autopilot.** Kichupo cha {{ui:Autopilot}} kinatazama kila kiungio kisicho na muunganisho na kupendekeza kimoja kulingana na maumbo: sahani za msingi, vichupo vya kukata, sahani za mwisho kwa mihimili uliyoiweka alama kama mihimili ya momenti, viunganishi na gusset. Toa mzigo sawa au kukata kwa ncha moja, na idadi ya bolti inafuata nguvu ya usanifu ya bolti. {{ui:Add them all}} inaongeza mapendekezo kama hatua moja ya kutendua. Ni thamani za kuanzia za kukagua, si usanifu wa muunganisho.
- **Constructability checks.** {{ui:Problems}} kwa bolti ambayo ufunguo hauwezi kuifikia, bolti zilizo karibu mno kwa soketi, welds za fillet nje ya mipaka yao ya ukubwa, na sehemu tupu zinazoshika maji. Ufikiaji wa uchomeleaji ni mpya: uchomeleaji wa fillet wa pande zote ambao tochi ya mchomeleaji haiwezi kuufikia unaorodheshwa pamoja na sehemu iliyo njiani na sehemu ya uchomeleaji iliyoathirika. Angalia [Ukaguzi wa ujengwaji](topic:constructability).

### Misingi na nondo

- **Foundation checks.** Kichupo cha {{ui:Foundation}} kinakagua misingi, misingi iliyounganishwa na mikeka kwenye udongo unaoueleza: kubeba, kuteleza na kupinduka kutokana na mizigo ya huduma; kupinda, kukata, kupenya, urefu wa kufungwa na chuma cha chini kutokana na mizigo iliyozidishwa (ACI 318-19). Nguzo karibu na ukingo au kona inakaguliwa kwa sehemu iliyokatwa na ukingo wa msingi. Kutulia kunatokana na moduli ya udongo, mkeka unaonyumbulika unatatuliwa kwenye springs kutoka moduli ya subgrade, na vikundi vya marundo na kuta za kubakiza vina paneli zao. Mizigo ya nguzo inaweza kuandikwa au kuchukuliwa kutoka {{ui:Analysis}}. Angalia [Ukaguzi wa msingi](topic:foundation-checks).
- **Rebar congestion map.** Kichupo cha {{ui:Congestion}} kinachora ramani ya joto ya kila msingi kama unavyouona kutoka juu: pale ambapo nondo zinaacha nafasi ndogo mno kwa zege kushuka chini, dhidi ya kanuni ya nafasi safi na, ukiyatoa, agregeti kubwa zaidi na kichwa cha vibrator. Angalia [Ramani ya msongamano wa nondo](topic:rebar-congestion).

### Fremu na ugavi

- **Timber and light-gauge framing.** Kichupo cha {{ui:Framing}} kinaunda fremu za paneli za kuta, sakafu na paa kwa kila kipande, orodha ya kukata, hisa ya kununua na mchoro wa warsha kwa kipimo. {{ui:Place as members}} inaweka vipande kwenye modeli, na {{ui:PDF sheets}} inahifadhi karatasi moja kwa kila paneli. Ukubwa, nafasi na vichwa vya fremu ni vyako: DetailCraft haikagui kama vinabeba mzigo. Angalia [Paneli za fremu za mbao na chuma chepesi](topic:framing-panels).
- **Supplier stock and lead times.** Kichupo cha {{ui:Supply}} kinasoma orodha ya hisa ya msambazaji (CSV) na kinaonyesha, kwa kila sehemu ambayo orodha ya kukata inanunua, kama iko ya kutosha kwenye hisa na muda wa kusubiri ni kiasi gani. Upungufu na sehemu zilizochelewa ziko kwenye {{ui:Problems}}. Hakuna kinachoagizwa. Angalia [Hisa ya msambazaji na muda wa kuletwa](topic:supplier-stock).

### Uchanganuzi na usanifu

- **Kinachovunjika kwanza?** Kwenye kichupo cha {{ui:Analysis}}, kitufe kinatafuta mchanganyiko wa nguvu unaotawala, mwanachama dhaifu zaidi, mizigo inaweza kukua kwa kiasi gani kabla mwanachama wa kwanza hajafikia kikomo chake, na sahani ya mwisho dhaifu zaidi au kichupo cha kukata pale nguvu ya kukata ya bolti zake inapojulikana. Inahitaji mchanganyiko na kanuni ya usanifu kwanza. Kubeba, block shear, welds na prying havikaguliwi. Msaidizi wako aliyeunganishwa anaweza kuuliza vilevile.
- **Live.** Weka alama {{ui:Live: solve again after each edit}} na fremu inatatuliwa tena baada ya kila mabadiliko.
- **Concrete, more.** Nguzo nyembamba katika fremu isiyoyumba inasanifiwa kwa momenti yake iliyokuzwa (ACI 318-19 6.6.4.5). Kipindi cha mtetemo cha mzigo wa tetemeko kinaweza kuchukuliwa kutoka kwenye uchanganuzi kwa mbinu ya Rayleigh. Slab iliyotengenezwa kwa bamba inapata chuma ambacho kila tabaka linahitaji kutokana na momenti zake, pamoja na kukata kwa mwelekeo mmoja. Angalia [Kagua vipengele vya zege na tengeneza mizigo ya tetemeko](topic:concrete-and-seismic).
- **For an engineer to check.** Matokeo ya misingi, zege na Kinachovunjika kwanza ni misaada tu. Mizigo ya upepo bado haijajengwa.

### Katika kila programu

- **Languages.** Msaada uko katika lugha 54. Zile zaidi ya Kiingereza ni rasimu za mashine hadi mzawa asome; kumi ni mpya (Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili, Kiuzbeki).
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} inachagua wrap, safu 2 au safu 1. Upau unaotoshea tayari unabaki kama ulivyo; zilizobaki zinasogezwa kando.
- **Property grid.** Sehemu za msingi zinatumia gridi ya pamoja: makundi yanayokunjika na msongamano mdogo. Hesabu iliyoandikwa kama 2*450 bado inafanya kazi.
- **Input devices.** Trackpad, kalamu, kipanya cha 3D, kidhibiti na MIDI vinaweza kuendesha programu. Angalia [Zunguka kwenye 3D](topic:navigate-3d).
- **Problems panel.** Maonyo ya ukaguzi mpya hapo juu yanaonekana kwenye paneli ile ile ya {{ui:Problems}} kama awali.
- **Connect your AI.** Msaidizi wako mwenyewe, aliyeunganishwa kupitia CadCraft Studio, anafanya kazi na programu zote nane na anaona tu kile unachoruhusu. Kuunganisha kwa mbofyo mmoja, kiunganishi kilichopangishwa, na ufunguo wako wa API katika Studio bado vinakuja. Angalia [Tumia DetailCraft pamoja na msaidizi wa AI](topic:use-with-ai-assistants).

## Vilivyorekebishwa katika 0.8.1

- **Languages in Studio.** Studio na matoleo yaliyofungashwa yanaweza kubadilisha lugha wakati wa kuendesha; kabla yalikuwa Kiingereza pekee. Bado haijajaribiwa kwenye kila jukwaa: tuambie lugha isipobadilika.
- **Crossing-window select.** Visakinishi vya 0.8.1 vinabeba tabia ya kuchagua kwa dirisha linalovuka ambayo tayari ilikuwa sahihi kwenye toleo la wavuti la 0.8; kisakinishi cha zamani hakikuwa nayo.
- **Tablets in portrait.** Nafasi ya gridi iliyobaki inaenda kwenye turubai, na mpangilio wa karatasi unaanza kwenye 760 px au chini.

## Bado haipo katika toleo hili

- **Send NC to a machine** haijatolewa.
- **Wind loads** kwa zege bado hazijajengwa, na ukaguzi wa zege na msingi ni wa mhandisi kukagua.
- **Code signing.** Visakinishi vya Windows na .dmg ya macOS havijasainiwa, kwa hiyo Windows inaweza kuonya na macOS inauliza bonyeza-kulia, kisha Open.

Mabadiliko ya awali yako katika [Nini kipya katika 0.7](topic:whats-new-0-7).
