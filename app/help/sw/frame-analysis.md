---
title: Chambua fremu
summary: Nguvu, miitikio na mikengeuko ya mihimili, nguzo na viimarisho kama vilivyochorwa, chini ya kesi za mizigo na michanganyiko unayoweka. Msaada wa uchambuzi, si ukaguzi wa kanuni; ukaguzi wa usanifu ni hatua tofauti.
keywords: uchambuzi, uchambuzi wa kimuundo, uchambuzi wa fremu, njia ya ugumu, mizigo, kesi ya mzigo, mchanganyiko, mzigo wa kudumu, mzigo hai, uzito binafsi, uzito wenyewe, miitikio, momenti ya kupinda, nguvu ya kukata, nguvu ya mhimili, mkengeuko, umbo lililokengeuka, viegemeo, bawaba, imebanwa, kuachia, ripoti, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Kichupo cha {{ui:Uchanganuzi}} chini kinatafuta nguvu katika kila boriti, nguzo na kiimarisho cha modeli, miitikio kwenye misingi ya nguzo, na umbali ambao vipengele vinapinda, kwa mizigo unayotoa.

:::warning
Ni **msaada wa uchambuzi, si ukaguzi wa kanuni**. Uchambuzi hautumii kanuni yoyote ya usanifu: hauchagui ukubwa wa vipengele, haukagui uwezo wa vipengele au miunganisho, wala hauchagui vizidisho vya mzigo. Mhandisi anakagua modeli, mizigo na viegemeo vyake, na kuamua maana ya namba hizo. Kwa ukaguzi wa vipengele vya chuma kulingana na ASCE 7 / AISC 360 au EN 1990 / EN 1993-1-1, tazama [Kagua vipengele vya chuma kwa kanuni ya usanifu](topic:design-checks), hatua tofauti ambayo pia ni msaada.
:::

## Endesha

1. Fungua kichupo cha {{ui:Uchanganuzi}}.
2. Chagua kipengele kimoja au zaidi kwenye mwonekano, chagua {{ui:Kesi}}, {{ui:Mzigo}} na {{ui:Mwelekeo}}, andika thamani, kisha bonyeza {{ui:Ongeza mzigo}}. Mzigo uliosambazwa kando ya kipengele ni kN/m, mzigo wa nukta ni kN. {{ui:Chini (mvuto)}} ndio unaotumika zaidi.
3. Bonyeza {{ui:Endesha uchanganuzi}}.

Jedwali linaorodhesha nguvu kubwa zaidi ya mhimili N ya kila kipengele, nguvu za kukata Vz na Vy, momenti za kupinda My na Mz, mzunguko T na mkengeuko wake, huku momenti kubwa zaidi ikiwa ya kwanza. Bofya jina la kipengele ili kukichagua. Chini yake kuna miitikio kwenye kila kiegemeo. {{ui:Kwenye modeli}} inachora umbo lililokengeuka, au kitendo kimoja kama mchoro kando ya kila kipengele, huku thamani yake kubwa zaidi ikiandikwa mahali pake. Matokeo yanapitwa na wakati modeli inapobadilika: endesha tena.

Kila mzigo, kesi na mpangilio ni hatua moja ya kutendua ({{key:Mod+Z}}) na huhifadhiwa kwenye faili la modeli.

## Kesi za mizigo na michanganyiko

Uchambuzi unaanza na tatu: **Kudumu** (uzito wa vipengele wenyewe, kutoka sehemu zilizochorwa na 7850 kg/m³), **Hai** (tupu), na **Kudumu + hai**. Ongeza kesi zako mwenyewe (upepo, theluji …) na michanganyiko: mchanganyiko unajumlisha kesi kwa vizidisho unavyoandika. Uchambuzi ni wa mstari, kwa hiyo kila kesi inatatuliwa mara moja na michanganyiko ni jumla. Andika vizidisho mwenyewe, au chagua kanuni ya usanifu na uache {{ui:Tengeneza michanganyiko}} iandike ile ya kanuni hiyo ([Kagua vipengele vya chuma kwa kanuni ya usanifu](topic:design-checks)).

## Fremu imejengwa na nini

- Mihimili, nguzo na viimarisho, kila kimoja kwenye mstari wake wa kazi (mstari uliochora), na sifa halisi za sehemu zinazokokotolewa kutoka muhtasari wake. Bamba, ngazi, misingi na bolti si sehemu ya fremu.
- Kipengele kinagawanywa pale ncha ya kipengele kingine inapoangukia juu yake, kwa hiyo boriti inayoingia kwenye nguzo katikati ya urefu wake inaungana na nguzo pale.
- **Chini ya nguzo**: imebanwa (mwanzo) au yenye bawaba (imeshikiliwa mahali na dhidi ya kujipinda, huru kugeuka). Bamba la msingi daima hufanya kiegemeo.
- **Ncha za mihimili**: bamba la ncha ni gumu, kichupo cha kukata chenye bawaba. {{ui:Ncha za boriti zisizo na muunganisho}} huweka zilizobaki. **Viimarisho** vina bawaba kwenye ncha zote mbili.
- Chagua kipengele kimoja ili kupa ncha zake, au chini ya nguzo, kanuni yake mwenyewe.
- Chuma kila mahali: E = 200 GPa, G = 77 GPa.

Ikiwa fremu inaweza kusogea bila kupinda chochote — utaratibu, kama vile ncha zenye bawaba bila kiimarisho upande mmoja — uendeshaji unasimama na kueleza ni wapi na upande upi. Ishikilie hapo kwa kiegemeo, kiunganishi kigumu au kiimarisho.

## Ishara

N > 0 ni mvutano. My > 0 huweka upande wa −z wa ndani wa kipengele katika mvutano: boriti inayolegea chini ya mvuto ina My > 0. Mz > 0 huweka upande wa −y wa ndani katika mvutano. Mkengeuko unapimwa kutoka mstari ulionyooka kati ya ncha za kipengele. z ya ndani ya kipengele inaelekea juu (kwa nguzo: kando ya X), na mihimili yake ya ndani hugeuka pamoja na mzunguko wa kipengele.

## Ripoti

{{ui:Ripoti (PDF)}} na {{ui:Ripoti (CSV)}} zinabeba kila kitu: dhana ambazo fremu ilijengwa juu yake, sehemu, kesi na michanganyiko; kisha kwa kila kesi na mchanganyiko, miitikio (pamoja na jumla za mizigo na miitikio, ambazo zinalingana), nguvu za vipengele na mikengeuko, na bahasha ya kila kesi. {{ui:Hamisha kama CraftScript}} inaandika fremu hiyo hiyo kama hati kwa eneo la Script la PartCraft, ambapo kazi ya maktaba `frame3d` inaitatua hatua kwa hatua kwa msimbo unaosomeka.

## Mbinu

Mbinu ya moja kwa moja ya ugumu: ya mstari na ya mpangilio wa kwanza isipokuwa uweke alama ya Second order (P-Delta). Ni vipengele vya boriti-nguzo vya nodi mbili vyenye ugumu wa mhimili, mzunguko na kupinda katika pande mbili (bila deformation ya kukata, bila kujipinda), kuachia ncha kwa kufupisha kitakwimu, na mizigo kando ya vipengele kupitia kazi za umbo za vipengele vyenyewe. Majibu yake yanakaguliwa dhidi ya mifano ya kitabu cha kawaida (vibanda, mihimili rahisi, iliyobanwa na endelevu, fremu ya portal, gridi katika mzunguko, na truss).

**Mpangilio wa pili (P-Delta).** Weka alama ya *Second order (P-Delta)* karibu na Endesha: kila mchanganyiko unatatuliwa tena na nguvu za mhimili za vipengele zikifanya kazi kwenye fremu iliyokengeuka (kila kipengele kinakatwa vipande 4, ili kupinda kati ya ncha zake pia kuhesabiwe), hadi nguvu za mhimili zitulie. Mstari wa matokeo unatoa idadi ya mizunguko na kiasi ambacho kuyumba kumeongezeka. Momenti, mikengeuko, ukaguzi wa usanifu na ripoti basi vinatumia matokeo haya. Juu ya mzigo muhimu wa elastiki wa fremu, uendeshaji unasimama na kueleza hivyo. Ni ya elastiki na mizunguko midogo, ya kupinda pekee, bila kupunguza ugumu wala mizigo ya dhana (si mbinu ya AISC direct analysis yenyewe); bamba, kuta na sakafu ngumu bado ni za mpangilio wa kwanza.

**Masafa asilia (vipengele vya kikomo).** Kizuizi cha {{ui:Vipengele vya kikomo: masafa asilia}} chini ya matokeo kinatafuta hali za chini kabisa za modeli hiyo hiyo kwa injini ya vipengele vya kikomo: mihimili pamoja na kuachia ncha zake, bamba na kuta kama ganda bapa la nodi nne, sakafu ngumu, viegemeo. Chagua idadi ya hali (3, 6, 10 au 20) na kipengele cha bamba (ganda la nodi nne kwa bamba nene au nyembamba, au la bamba nyembamba), kisha bonyeza {{ui:Tafuta masafa}}. Jedwali linatoa masafa ya kila hali kwa Hz, kipindi chake kwa sekunde, na wingi wake mzuri wa modal kando ya X, Y na Z kama sehemu ya wingi unaoweza kusogea. {{ui:Onyesha kwenye modeli}} inachora hali yoyote kwa namna umbo lililokengeuka linavyochorwa. Wingi ni msongamano wa nyenzo mara ujazo: mizigo haiongezi wingi, na nyenzo isiyo na msongamano haina wingi. Ripoti (PDF, CSV) inabeba jedwali. Ni ya elastiki na ya mwendo mdogo tu, na hakuna mzigo wa tetemeko au upepo unaotengenezwa hapa kutoka kanuni yoyote. Si ukaguzi wa kanuni; mhandisi wako anakagua matokeo.

**Wigo wa mwitikio, historia ya wakati na pushover.** Vizuizi vitatu zaidi vipo chini ya masafa, vikitumia modeli ile ile ya vipengele vya kikomo. Wingi wa vyote ni msongamano wa nyenzo pamoja na mizigo ya chini ya kesi unazozichagua, kila moja ikizidishwa na kipengele unachoandika (kwa mfano Kudumu kwa 1 na Hai kwa sehemu unayohesabu kama wingi).

{{ui:Wigo wa mwitikio}} unasoma kila hali kutoka wigo unaoutoa (jedwali la kipindi na kasi, au umbo la ASCE 7 kutoka SDS, SD1 na TL; kitufe cha Tumia thamani za kizuizi cha Seismic kinanakili thamani hizo kutoka kizuizi cha Seismic), na kuchanganya hali kwa CQC, SRSS, kanuni ya asilimia kumi au jumla kamili, kisha kuunganisha mielekeo ya X, Y na Z (100 % + 30 % au SRSS). Inatoa nguvu ya msingi ya kukata, mteremko wa ngazi, nguvu za ncha za vipengele, na jedwali la hali linaloonya hali zinapotumika zikibeba chini ya 90 % ya wingi. Unaweza kupima matokeo kwa kipengele au hadi nguvu ya msingi ya kukata uliyoandika; kizuizi hakikokotoi nguvu hiyo ya msingi chenyewe. Matokeo hayana ishara.

{{ui:Historia ya wakati}} inaendesha kuongeza kasi ya ardhini kwa mseto wa modal (sahihi kwa mistari iliyonyooka ya rekodi kati ya pointi) au kwa ujumuishaji wa moja kwa moja (wastani wa kuongeza kasi wa Newmark na unyevu wa Rayleigh). Ingizo ni sine au pigo lililoundwa (daima huandikwa kuwa la kubuniwa), rekodi unayobandika, au faili la maandishi unalofungua (wakati na kasi, kasi moja kwa kila mstari pamoja na hatua, au faili la mtindo wa PEER lenye kichwa cha DT=; kwa g au m/s²). Inatoa mkengeuko wa paa na nguvu ya msingi ya kukata kwa muda, mteremko wa kila ngazi, na bahasha ya nguvu za ncha za vipengele. Modeli zenye rekodi ndefu sana huhifadhi rekodi kwa kipindi cha kazi hiyo tu.

{{ui:Pushover}} inasukuma paa kando kwa hatua ndogo (muundo kama hali ya kwanza, au sawa), kwa bawaba za plastiki kwenye ncha za vipengele vyenye umbo la I. Bawaba hutoa mavuno kwenye momenti ya plastiki, ambayo hupungua nguvu ya mhimili inapoongezeka (inakokotolewa kutoka umbo lililochorwa, mikunjo ikipuuzwa). Ugumu wa kuimarika ni hiari, P-delta ni hiari, na mchanganyiko wa mvuto unaweza kutumika kwanza. Inatoa mkunjo wa uwezo (nguvu ya msingi ya kukata dhidi ya mkengeuko wa paa), bawaba ya kwanza, na hali pamoja na mzunguko wa plastiki wa kila bawaba. {{ui:Endesha historia ya wakati isiyo ya mstari}} inaendesha bawaba hizo hizo chini ya rekodi ya kizuizi cha Historia ya wakati kwenye modeli ndogo. Bawaba zinaundwa kwenye ncha za vipengele tu (weka nodi pale unapotaka bawaba iundwe ndani ya span); kipengele kilichoachiwa pande zote mbili hakipati chochote, na mavuno na kujikunja kwa viimarisho havijaigwa; bamba na kuta zinabaki za elastiki; hakuna vigezo vya kukubalika vinavyotolewa. Si ukaguzi wa kanuni; mhandisi wako anakagua matokeo. Mipangilio inahifadhiwa na modeli, na ripoti inabeba majedwali.

Bado hakijajengwa: uchambuzi wa kujikunja, marekebisho ya wingi uliokosekana kwa wigo wa mwitikio, kupima rekodi, vigezo vya kukubalika kwa bawaba (mwitikio wa nguvu upo, hapo juu), eneo na mizigo ya upepo iliyotengenezwa kwa ajili yako (nguvu za tetemeko kwenye sakafu ziko katika [Kagua zege na tengeneza mizigo ya tetemeko](topic:concrete-and-seismic)), kukabiliana kwa vipengele, na viimarisho vya mvutano pekee. Tazama [Kisichojengwa bado](topic:not-built-yet).
