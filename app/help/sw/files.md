---
title: Fungua, hifadhi na hamisha nje faili
summary: Faili ya modeli ya DetailCraft, kila faili ya kuhamisha nje inayoandikwa, mahali faili zinapokwenda, na tofauti kulingana na kivinjari na muunganisho.
keywords: fungua, hifadhi, hamisha nje, pakua, faili, json, ifc, nc1, dstv, csv, pdf, zip, miundo, ingiza
from: 6fbc8e8f
---

DetailCraft ina faili yake yenyewe, modeli, na faili tano za kuhamisha nje. Kila hifadhi na kila kuhamisha nje ni upakuaji. Hakuna kinachopakiwa, na hakuna kinachohifadhiwa kwenye seva.

## Faili ya modeli

Modeli ya DetailCraft inahifadhiwa kama `<name>.detailcraft.json`, ambapo `<name>` ni jina la modeli kwenye paneli ya {{ui:Model}}. Ina gridi, viwango, vipengele (pamoja na matundu na mikato yake), miunganisho na mipangilio yake, misingi, na wasifu wako maalum.

Sehemu, alama, bolti, uchomeleaji na nondo hazihifadhiwi: DetailCraft huzihesabu upya kutoka kwenye modeli kila inapofunguka. Ndiyo sababu faili ya modeli ni ndogo.

### Hifadhi

1. Andika jina kwenye sehemu ya {{ui:Name}} juu ya paneli ya {{ui:Model}}.
2. Chagua {{ui:Save}} kwenye kundi la {{ui:File}}, au bonyeza {{key:Mod+S}}.
3. Kivinjari kinapakua `<name>.detailcraft.json`. Upau wa hali unasema "Imehifadhiwa … (imepakuliwa)", na nukta iliyo mwanzoni mwa kichwa cha kichupo cha kivinjari inatoweka.

Kila hifadhi ni upakuaji mpya. Kivinjari hakiandiki juu ya faili uliyofungua; kulingana na mipangilio yake, huongeza namba kwenye jina, kama `Frame (1).detailcraft.json`, au kinauliza mahali pa kuhifadhi. Weka nakala zako mwenyewe kwa kubadilisha jina la vipakuliwa.

:::chromium
Chrome na Edge huhifadhi kwenye folda yako ya Downloads isipokuwa **Ask where to save each file before downloading** imewashwa kwenye mipangilio ya upakuaji wa kivinjari. Iwashe ukitaka kuchagua folda na jina la faili kila wakati.
:::

:::firefox
Firefox huhifadhi kwenye folda yako ya Downloads, au huuliza kila wakati ikiwa **Always ask you where to save files** imewashwa kwenye mipangilio yake.
:::

:::safari
Safari huhifadhi kwenye folda yako ya Downloads. Ili kubadilisha folda, fungua **Safari, Settings, General, File download location**.
:::

### Fungua

1. Chagua {{ui:Open}} kwenye kundi la {{ui:File}}, au bonyeza {{key:Mod+O}}.
2. Chagua faili ya `.detailcraft.json`.

Au buruta faili kutoka {{pick:mac=Finder|windows=File Explorer|linux=kidhibiti chako cha faili}} na uiachie kwenye mwonekano. Mwonekano unasema "Achia modeli ya DetailCraft ili kuifungua" wakati unaiburuta.

Ikiwa modeli iliyo wazi ina mabadiliko ambayo hayajahifadhiwa, DetailCraft inauliza kwanza: {{ui:Cancel}}, {{ui:Discard changes}} au {{ui:Save first}}.

DetailCraft hukagua kila sehemu ya faili kabla ya kuitumia. Kisichoweza kutumika kinaachwa, na upau wa hali unasema kilichokuwa, kwa mfano "Vipengele 2 si sahihi na vimeachwa." Modeli iliyohifadhiwa na DetailCraft mpya zaidi inakataliwa kwa ujumbe, badala ya kufunguliwa nusu sawa.

### Inachofungua

Faili zake za modeli (`.json`, hadi 50 MB) na faili za IFC (`.ifc`, IFC2X3 au IFC4, hadi 200 MB). Faili ya IFC, iliyofunguliwa au kuletwa kwa {{ui:Import IFC}}, inakuwa modeli mpya ya mihimili, nguzo, vipengele, bamba, gridi na viwango vyake, pamoja na matundu na mikato iliyokatwa ndani yake na bolti zake kama bolti huru; ripoti inaorodhesha kilichoachwa. Angalia [Hamisha nje IFC](topic:ifc-export#import). Haifungui DWG, DXF wala modeli ya programu nyingine yoyote ya uundaji wa chuma bado; ukijaribu, inaonyesha "DetailCraft inafungua modeli zake (.detailcraft.json) na faili za IFC (.ifc) pekee."

## Kazi iliyopotea, faili za hivi karibuni, programu ya eneo-kazi

- Wakati modeli ina mabadiliko ambayo hujahifadhi, DetailCraft huweka nakala kwenye kivinjari hiki. Kichupo au kivinjari kikisimama kabla hujahifadhi, mara ijayo ukifungua DetailCraft itauliza **Recover your work?**: rejesha nakala, au iache. Angalia [Rejesha kazi yako](common:recover).
- Modeli ulizofungua hivi karibuni zimeorodheshwa kwenye skrini ya mwanzo kivinjari kikiruhusu DetailCraft kuzifungua tena; bofya moja ili kuifungua tena.
- Kwenye programu ya eneo-kazi, {{ui:Save}} huandika modeli kurudi kwenye faili uliyofungua (kwenye kivinjari inapakua nakala), na kubofya mara mbili modeli ya DetailCraft au faili ya IFC kunaifungua katika DetailCraft.

## Kuhamisha nje

Kuhamisha nje zote hutumia jina la modeli. Chagua kwenye kundi la {{ui:Output}}.

| Kitufe | Faili | Kilichomo |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: ghorofa, gridi, kila sehemu ya chuma kama mchomozo wa wasifu wenye matundu na mikato yake, mikusanyiko, bolti na vijiti vya nanga, misingi na kila nondo. Angalia [Hamisha nje IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Faili moja ya DSTV `.nc1` kwa kila alama ya sehemu. Angalia [Tuma faili za NC kwenye warsha](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Jedwali tatu kwenye faili moja: sehemu, mikusanyiko, na bolti na vijiti vya nanga. Angalia [Alama na orodha ya vifaa](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Kila alama ya nondo kwenye misingi. Angalia [Misingi na nondo](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` ina karatasi moja kwa kila alama ya sehemu; {{ui:Download this sheet}} inatoa ile inayoonyeshwa (A3 isipokuwa umechagua ukubwa mwingine). Angalia [Tengeneza michoro ya warsha](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` au `.dxf`, kadhaa kwenye `<name> drawings DWG.zip` (au `DXF.zip`) | Mipango, mwinuko na michoro ya mikusanyiko kwenye ukubwa wa karatasi uliouchagua; DWG na DXF kwa ukubwa kamili, kitengo 1 = 1 mm kwenye karatasi. Angalia [Michoro ya mpangilio wa jumla na ya mikusanyiko](topic:drawings). |

### Maelezo kuhusu faili za CSV

- Zinaanza na alama ya mpangilio wa baiti (byte-order mark) ili programu za jedwali zisome herufi zenye lafudhi kwa usahihi.
- Kisanduku kinachoanza na `=`, `+`, `-` au `@` (na si namba tupu) kinapata apostrofi mwanzoni, ili jedwali lisikiendeshe kama fomula kamwe.
- Urefu ni milimita na uzito ni kilogramu.

### Maelezo kuhusu PDF

Maandishi kwenye PDF yanatumia fonti ya kawaida ya Helvetica. Herufi isizo nayo (nje ya seti ya Ulaya Magharibi) zinachapishwa kama "?", na upau wa hali unakuambia zimekuwa ngapi.

## Vipimo

DetailCraft inafanya kazi kwa milimita kote: gridi, viwango, kuratibu, wasifu, matundu na kila uhamishaji nje. Majina ya wasifu yanabaki na umbo lake lililochapishwa (W12x50 ni uteuzi wa Marekani ingawa vipimo vyake vinaonyeshwa kwa mm). Bado hakuna ingizo la vipimo vya kifalme (imperial).

## Mtandaoni na nje ya mtandao

Kufungua, kuhifadhi na kuhamisha nje vyote hufanyika kwenye kivinjari chako, kwa hiyo vinafanya kazi vilevile ukiwa na au bila muunganisho mara DetailCraft ikishapakia.

Ili kutumia DetailCraft bila muunganisho baadaye, chagua {{ui:Save for offline}} kwenye upau wa programu ukiwa mtandaoni. Kitufe kinahesabu juu ("Inahifadhi 3 kati ya 20") kisha kinasoma {{ui:Offline ready}}. Nakala iliyohifadhiwa inajumuisha maktaba ya michoro ya 3D (takriban 2.6 MB) na msaada huu, kwa hiyo ukishahifadhiwa, mwonekano wa 3D, kila uhamishaji nje na msaada vyote hufanya kazi nje ya mtandao. Maelezo, na kile ambacho bado kinahitaji muunganisho: [Kufanya kazi nje ya mtandao](common:offline).

:::offline
Uko nje ya mtandao. Ikiwa upau wa programu unaonyesha {{ui:Offline ready}}, kufungua, kuhifadhi na kuhamisha nje kunafanya kazi kama kawaida. Ikiwa haionyeshi, weka kichupo hiki wazi, usikipakie upya hadi urudi mtandaoni, na uhifadhi modeli yako sasa.
:::

Kuhifadhi kwenye wingu bado hakupatikani, na hakuna toleo la eneo-kazi bado. Hifadhi nakala za faili zako za `.detailcraft.json` kama unavyohifadhi faili nyingine yoyote ya kazi. Zaidi katika [Faili zako zinaenda wapi](common:your-files).

## Kazi ambayo haijahifadhiwa

DetailCraft huweka modeli kwenye kichupo kilicho wazi pekee. Ukifunga au kupakia upya kichupo chenye mabadiliko ambayo hayajahifadhiwa, kivinjari kinauliza kama uondoke kwenye ukurasa; maneno yake ni ya kivinjari chenyewe. Hifadhi kwa {{key:Mod+S}} mara nyingi.
