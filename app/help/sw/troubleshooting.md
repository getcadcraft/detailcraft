---
title: Utatuzi wa matatizo
summary: Maana ya ujumbe wa DetailCraft na cha kufanya, kuanzia mwonekano wa 3D unaokosekana hadi miunganisho isiyojengeka.
keywords: tatizo, hitilafu, haifanyi kazi, msaada, rekebisha, ujumbe, imekataliwa, webgl, tupu, onyo, haiwezi, suala
from: f8c3b2b1
---

Kukataliwa mara nyingi kunaelezwa kwenye upau wa hali chini ya skrini, au kwenye kichupo cha {{ui:Matatizo}}. Soma hayo kwanza. Ujumbe ulio hapa chini umenukuliwa jinsi DetailCraft unavyouonyesha.

## Mwonekano wa 3D haupo

**"Kivinjari hiki hakikuweza kuanzisha picha za 3D (WebGL). Modeli, ripoti na hamisho bado zinafanya kazi."**

Kivinjari hakikuweza kuanzisha WebGL, picha za 3D ambazo DetailCraft huchorea nazo.

1. Sasisha kivinjari hadi toleo lake la hivi karibuni.
2. Washa kuongeza kasi kwa vifaa na uanzishe upya kivinjari (angalia hapa chini).
3. Sasisha dereva wa picha zako, au jaribu kivinjari kingine. Kompyuta za mbali na mashine pepe mara nyingi hazina WebGL.
4. Wakati huo bado unaweza kufanya kazi: weka vipengele kwa fomu ya {{ui:Ongeza kwa gridi}}, soma ripoti, na hamisha. Ni kubofya ndani ya mwonekano tu ndiko kunahitaji WebGL.

:::chromium
Ili kuwasha kuongeza kasi kwa vifaa, fungua **Mipangilio, Mfumo** kisha uwashe **Tumia kuongeza kasi ya picha inapopatikana**, kisha uanze upya.
:::

:::firefox
Ili kuwasha kuongeza kasi kwa vifaa, fungua **Mipangilio, Jumla, Utendaji**, ondoa tiki kwenye **Tumia mipangilio ya utendaji inayopendekezwa**, kisha weka tiki kwenye **Tumia kuongeza kasi ya vifaa inapopatikana**. Anzisha upya Firefox.
:::

:::safari
Safari ina WebGL imewashwa kwa chaguo-msingi. Sasisha macOS ikiwa mwonekano bado haujaanza, na uhakiki kwamba hakuna kiongezi kinachoizuia.
:::

Zaidi katika [Vivinjari na kompyuta](common:browsers).

## Kubofya ndani ya mwonekano hakufanyi kitu

- **Hakuna makutano karibu na bofya.** Zana za kuweka hunasa kwenye makutano ya gridi pekee. Kubofya mbali na kila nukta hakufanyi kitu. Sogea karibu hadi nukta iwake.
- **Zana ni {{ui:Chagua}} na umebofya nafasi tupu.** Hiyo hufuta uteuzi.
- **Umeburuta.** Kubonyeza na kuachia zikiwa mbali zaidi ya pikseli chache ni kuburuta: hugeuza au kusogeza mwonekano.
- **Sehemu imekatwa.** Katika {{ui:Mpango}} na {{ui:Mwinuko}}, chuma nje ya kata kimefichwa na hakiwezi kubofya. Badili hadi {{ui:3D}}.
- **Makutano yako kwenye kiwango kisicho sahihi.** Katika {{ui:3D}}, makutano ya viwango kadhaa yanaweza kuingiliana kwenye skrini; bofya huchukua lililo karibu zaidi. Tumia {{ui:Mpango}} au {{ui:Mwinuko}}.

## Ujumbe wa kuweka

| Ujumbe | Cha kufanya |
|---|---|
| Hakuna kiwango juu ya Kiwango 2 cha nguzo kufikia. Ongeza kiwango kwanza. | Ongeza kiwango katika {{ui:Viwango}}, au bofya kiwango cha chini |
| Chagua makutano tofauti kwa ncha nyingine. | Umebofya sehemu hiyo hiyo mara mbili |
| Ncha hizo mbili ni sehemu moja. | Katika {{ui:Ongeza kwa gridi}}, chaguo za "From" na "To" ni sawa |
| Ongeza mistari ya gridi upande wa kushoto ili kuweka vipengele. | Modeli haina mistari ya gridi upande mmoja |
| Wasifu usiojulikana "…" | Wasifu huo haupo kwenye katalogi wala wasifu maalum wa modeli. Chagua mmoja kutoka orodha |
| Andika namba. | Sehemu ya namba iliachwa tupu au ina maandishi |

## Miunganisho haijengeki

### "Boriti hii haiishii kwenye mstari wa nguzo."

Sahani za ncha zinahitaji ncha ya boriti iwe kwenye mstari wa nguzo wima hasa, kati ya chini yake na juu yake (ndani ya 1 mm). Angalia {{ui:Ncha (x, y, z mm)}} za boriti na nafasi ya nguzo.

### "Boriti hii inakutana na wavuti ya nguzo au kwa pembe"

Au katika {{ui:Matatizo}}: "Boriti zinazoingia kwenye wavuti ya nguzo bado hazijajengwa: geuza nguzo 90° au tumia muunganisho mwingine."

Boriti inaingia kwenye wavuti ya nguzo. Chagua nguzo na weka {{ui:Mzunguko (°)}} kuwa 90, kisha jaribu tena. Viungo vilivyopinda havijengwi.

### "Sahani za ncha zinajengwa kwa boriti zilizo sawa tu (boriti hii inateremka)."

Ncha zote mbili za boriti lazima ziwe kwenye urefu uleule.

### "Sahani za ncha zinahitaji boriti iwe wima (mzunguko 0)."

Rudisha {{ui:Mzunguko (°)}} wa boriti kuwa 0.

### "Sahani za ncha zinahitaji boriti ya umbo la I." / "Sahani za ncha zinahitaji nguzo ya umbo la I."

Umbo la I tu (W, IPE, HEA, HEB au I maalum) hupokea sahani za ncha.

### "Ncha ya boriti haipo tena kwenye mstari wa nguzo."

Umehamisha boriti au nguzo baada ya kuongeza muunganisho. Irudishe, au futa muunganisho.

### "Miunganisho imekata kipengele hiki hadi kisibaki chochote."

Miunganisho kwenye ncha zote mbili imekata kipengele nyuma zaidi ya urefu wake, kwa mfano boriti fupi sana kati ya nguzo mbili zenye kina. Angalia ncha za kipengele na unene wa sahani.

### "Hakuna viungo vingine kama hiki … visivyo na muunganisho."

{{ui:Zinazofanana}} hunakili tu kwenye viungo vyenye wasifu uleule wa boriti, wasifu uleule wa nguzo na aina ileile ya muunganisho, boriti kuingia kwenye flensi, ambavyo bado havina muunganisho.

### "Ncha zote mbili tayari zina miunganisho." / "Nguzo hii tayari ina sahani ya msingi."

Chagua muunganisho uliopo ili kuubadilisha, au kwanza ufute.

## Maonyo kwenye kichupo cha Matatizo

Maonyo hayazuii muunganisho au msingi usijengwe; yanakuomba uukague. Yale ya ukingo na nafasi yanatumia viwango vya chini vya EN 1993-1-8 Jedwali 3.3 (ukingo 1.2 × tundu, nafasi 2.2 × tundu, upana 2.4 × tundu). Ikiwa mradi wako unatumia kanuni nyingine, onyo huenda lisitumike; DetailCraft haibuni miunganisho.

"tundu liko nje ya ncha ya kipande" linamaanisha x ya tundu ni chini ya 0 au zaidi ya urefu wa kukata. Kumbuka kwamba x inahesabiwa kutoka mwanzo wa kukata, baada ya miunganisho kukata kipande nyuma.

## Mabadiliko ya msingi yanakataliwa

| Ujumbe | Cha kufanya |
|---|---|
| Kifuniko hakiacha nafasi ya baa kwenye msingi huu. | Fanya msingi kuwa mkubwa au kifuniko kiwe kidogo |
| Msingi ni mfupi mno kwa tabaka mbili za baa ndani ya kifuniko. | Fanya uwe wa kina zaidi au punguza kifuniko |
| Baa za kuanzia haziingii ndani ya msingi wenye kifuniko cha 75 mm. | Baa chache za kuanzia, nafasi ndogo zaidi, au msingi mkubwa |
| Nafasi ya baa lazima iwe 50–1000 mm. | Andika nafasi ndani ya kiwango hicho |
| Urefu lazima uwe 300–50000 mm. | Ukubwa wa msingi una mipaka: urefu na upana 300 hadi 50000, kina 150 hadi 10000 |

## Gridi na viwango vinakataliwa

| Ujumbe | Cha kufanya |
|---|---|
| Gridi zenye namba: toa nafasi moja kati ya kila jozi ya mistari (4). | Hesabu nafasi zako: mistari mitano inahitaji nafasi nne |
| Gridi zenye herufi: nafasi lazima ziwe milimita chanya. | Hakuna sifuri, hasi wala maandishi |
| Gridi zenye namba: lebo za gridi lazima ziwe tofauti. | Mistari miwili ina lebo sawa |
| Mistari ya gridi isiyozidi 60 kila upande. | Gawanya modeli |
| Weka angalau kiwango kimoja. | Umeondoa safu zote za viwango |
| Kila kiwango kinahitaji jina. / Viwango viwili vinaitwa "…". | Pa kila kiwango jina tofauti |

## Kufungua faili kunashindwa

| Ujumbe | Sababu |
|---|---|
| DetailCraft hufungua modeli zake (.detailcraft.json). Kuingiza IFC bado hakujajengwa. | Faili si faili ya `.json` |
| Hii si modeli ya DetailCraft (si JSON). | Faili imeharibika au ni JSON nyingine |
| Hii si modeli ya DetailCraft. | Faili ya JSON kutoka programu nyingine |
| Modeli hii ilihifadhiwa na DetailCraft mpya zaidi (umbizo 2). | Ifungue kwenye DetailCraft mpya zaidi iliyoihifadhi |
| Faili hiyo ni kubwa mno kuwa modeli ya DetailCraft. | Zaidi ya 50 MB |

Faili inapofunguka na maonyo kama "2 members were not valid and left out.", sehemu nyingine ya modeli iko sawa. Usihifadhi juu ya asili hadi uwe umekagua kilichoachwa.

## Hamisho

| Ujumbe | Sababu |
|---|---|
| Hakuna cha kuhamisha bado. | {{ui:IFC}} ikiwa na modeli tupu |
| Hakuna sehemu za umbo la I au sahani za kuandikia faili za NC. | Modeli ina chaneli, pembe au mirija tu |
| Haijaandikwa (umbo la I na sahani pekee kwa sasa): … | Alama hizo si umbo la I wala sahani; zilizobaki zimeandikwa |
| Hakuna misingi, kwa hiyo hakuna baa za kupangia ratiba. | {{ui:Kupinda}} bila misingi |
| Herufi … nje ya fonti ya PDF huchapishwa kama "?". | Jina la modeli au daraja lina herufi ambazo fonti ya PDF haina |

{{ui:Mchoro wa warsha}} imefifia: modeli bado haina sehemu.

## Upakuaji hauonekani

Kila hifadhi na hamisho ni upakuaji wa kivinjari. Angalia orodha ya upakuaji ya kivinjari chako. Kivinjari kikiuliza kabla ya kupakua faili kadhaa, au kikizuia upakuaji kutoka tovuti hii, ruhusu. Katika Safari, angalia kitufe cha upakuaji kwenye upau wa zana.

## Vitufe havifanyi kazi

- Kiashiria kiko kwenye sehemu ya maandishi au namba: vitufe vya zana na {{key:Delete}} vinapuuzwa hapo ili uweze kuandika. Bonyeza {{key:Tab}} au bofya mwonekano.
- Kidirisha kimefunguliwa: kifunge kwanza.
- Kivinjari kina kibodi (kwa mfano upau wa anwani): bofya ndani ya DetailCraft.
- {{key:Ctrl+Shift+F}} hutumia Control hata kwenye Mac.

## Matatizo ya nje ya mtandao

Kitufe cha {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu kinaonyesha hali ya nakala ya nje ya mtandao. Jinsi hifadhi inavyofanya kazi: [Kufanya kazi nje ya mtandao](common:offline).

| Kitufe kinasoma | Maana yake | Cha kufanya |
|---|---|---|
| {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} | Bado hakuna nakala ya nje ya mtandao kwenye kivinjari hiki | Ichague ukiwa mtandaoni |
| Inahifadhi 5 kati ya 20 | Hifadhi inaendelea | Subiri {{ui:Tayari kwa matumizi ya nje ya mtandao}}; weka kichupo wazi |
| {{ui:Tayari kwa matumizi ya nje ya mtandao}} | DetailCraft, mwonekano wake wa 3D, hamisho zote na msaada huu zinafanya kazi bila muunganisho | Hakuna. Bofya kwa {{ui:Hifadhi tena (pata toleo la hivi karibuni)}} au {{ui:Ondoa nakala ya nje ya mtandao}} |
| {{ui:Imeshindwa kuhifadhi}} | Baadhi ya faili hazikupakuliwa | Angalia muunganisho wako na ubofye tena ujaribu |
| {{ui:Matumizi ya nje ya mtandao hayapatikani}} | Dirisha hili haliwezi kuhifadhi nakala ya nje ya mtandao: madirisha ya faragha na baadhi ya kompyuta zinazosimamiwa huizuia | Tumia dirisha la kawaida, au fanya kazi ukiwa mtandaoni |

Ukiwa nje ya mtandao na kitufe hakisomi {{ui:Tayari kwa matumizi ya nje ya mtandao}}, usipakie upya wala kufunga kichupo: kilichokwisha kupakiwa kinaendelea kufanya kazi. Hifadhi modeli yako kwa {{key:Mod+S}} kisha subiri hadi uwe mtandaoni tena.

## Kazi ambayo haijahifadhiwa

Kivinjari kikiuliza kama utaondoka kwenye ukurasa, DetailCraft ina mabadiliko ambayo hayajahifadhiwa. Chagua kubaki, kisha bonyeza {{key:Mod+S}}. DetailCraft haiwezi kurejesha modeli baada ya kichupo kufungwa.

## Bado umekwama

Andika ulichofanya na ujumbe kamili, kisha tuambie kupitia [ukurasa wa msaada](https://getcadcraft.com/support).
