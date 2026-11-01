---
title: Fungua, hifadhi na hamisha faili
summary: Faili ya modeli ya DetailCraft, kila hamisho inayoandikwa, mahali faili zinapoenda, na kinachotofautiana kwa kivinjari na muunganisho.
keywords: fungua, hifadhi, hamisha, pakua, faili, json, ifc, nc1, dstv, csv, pdf, zip, miundo, ingiza
from: bd715ea3
---

DetailCraft ina faili moja yake yenyewe, modeli, na hamisho tano. Kila hifadhi na kila hamisho ni upakuaji. Hakuna kinachopakiwa, na hakuna kinachohifadhiwa kwenye seva.

## Faili ya modeli

Modeli ya DetailCraft inahifadhiwa kama `<name>.detailcraft.json`, ambapo `<name>` ni jina la modeli kwenye kidirisha cha {{ui:Modeli}}. Ina gridi, viwango, vipengele (pamoja na mashimo na kupunguzwa kwao), miunganiko na mipangilio yake, misingi na wasifu wako maalum.

Sehemu, alama, bolti, uchomeleaji na baa hazihifadhiwi: DetailCraft huzihesabu upya kutoka kwenye modeli kila inapofunguka. Ndiyo sababu faili ya modeli ni ndogo.

### Hifadhi

1. Andika jina kwenye sehemu ya {{ui:Jina}} juu ya kidirisha cha {{ui:Modeli}}.
2. Chagua {{ui:Hifadhi}} kwenye kundi la {{ui:Faili}}, au bonyeza {{key:Mod+S}}.
3. Kivinjari kinapakua `<name>.detailcraft.json`. Upau wa hali unasema "Imehifadhiwa … (imepakuliwa)", na nukta iliyo mwanzoni mwa kichwa cha kichupo cha kivinjari inatoweka.

Kila hifadhi ni upakuaji mpya. Kivinjari hakiandiki juu ya faili uliyofungua; kulingana na mipangilio yake huongeza namba kwenye jina, kama `Frame (1).detailcraft.json`, au kuuliza mahali pa kuhifadhi. Weka matoleo yako mwenyewe kwa kubadilisha majina ya upakuaji.

:::chromium
Chrome na Edge huhifadhi kwenye folda yako ya Upakuaji isipokuwa **Uliza mahali pa kuhifadhi kila faili kabla ya kupakua** imewashwa kwenye mipangilio ya upakuaji ya kivinjari. Iwashe ikiwa unataka kuchagua folda na jina la faili kila wakati.
:::

:::firefox
Firefox huhifadhi kwenye folda yako ya Upakuaji, au huuliza kila wakati ikiwa **Uliza kila mara mahali pa kuhifadhi faili** imewashwa kwenye mipangilio yake.
:::

:::safari
Safari huhifadhi kwenye folda yako ya Upakuaji. Ili kubadilisha folda, fungua **Safari, Mipangilio, Kwa ujumla, Mahali pa kupakua faili**.
:::

### Fungua

1. Chagua {{ui:Fungua}} kwenye kundi la {{ui:Faili}}, au bonyeza {{key:Mod+O}}.
2. Chagua faili ya `.detailcraft.json`.

Au buruta faili kutoka {{pick:mac=Finder|windows=File Explorer|linux=kidhibiti chako cha faili}} na uidondoshe kwenye mwonekano. Mwonekano unasema "Dondosha modeli ya DetailCraft ili kuifungua" wakati unaburuta.

Ikiwa modeli iliyofunguliwa ina mabadiliko ambayo hayajahifadhiwa, DetailCraft inauliza kwanza: {{ui:Ghairi}}, {{ui:Ondoa mabadiliko}} au {{ui:Hifadhi kwanza}}.

DetailCraft inakagua kila sehemu ya faili kabla ya kuitumia. Chochoteisichoweza kutumia kinaachwa, na upau wa hali unasema nini, kwa mfano "Vipengele 2 si sahihi na vimeachwa." Modeli iliyohifadhiwa na DetailCraft mpya zaidi inakataliwa kwa ujumbe badala ya kufunguliwa nusu sahihi.

### Inachofungua

Faili zake za modeli (`.json`, hadi 50 MB) na faili za IFC (`.ifc`, IFC2X3 au IFC4, hadi 200 MB). Faili ya IFC, iliyofunguliwa au kuingizwa kwa {{ui:Ingiza IFC}}, inakuwa modeli mpya ya mihimili yake, nguzo, vipengele, bamba, gridi na viwango, pamoja na mashimo na kupunguzwa vilivyokatwa ndani yake na bolti zake kama bolti zilizolegea; ripoti inaorodhesha kilichoachwa. Tazama [Hamisha IFC](topic:ifc-export#import). Bado haifungui DWG, DXF wala modeli yoyote ya programu nyingine ya uchoraji wa kina; kujaribu kunaonyesha "DetailCraft inafungua modeli zake (.detailcraft.json) na faili za IFC (.ifc)."

## Kazi iliyopotea, faili za hivi karibuni, programu ya eneo-kazi

- Wakati modeli ina mabadiliko ambayo hujayahifadhi, DetailCraft huweka nakala katika kivinjari hiki. Ikiwa kichupo au kivinjari kitasimama kabla hujahifadhi, mara ijayo utakapofungua DetailCraft itauliza **Rejesha kazi yako?**: rejesha nakala, au iache. Tazama [Rejesha kazi yako](common:recover).
- Modeli ulizofungua hivi karibuni zimeorodheshwa kwenye skrini ya kuanza kivinjari kinaporuhusu DetailCraft kuzifungua tena; bofya moja ili kuifungua upya.
- Kwenye programu ya eneo-kazi, {{ui:Hifadhi}} huandika modeli upya kwenye faili uliyofungua (kwenye kivinjari hupakua nakala), na kubofya mara mbili modeli ya DetailCraft au faili ya IFC kunaifungua kwenye DetailCraft.

## Hamisho

Hamisho zote hutumia jina la modeli. Zichague kwenye kundi la {{ui:Matokeo}}.

| Kitufe | Faili | Kilichomo ndani yake |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: ghorofa, gridi, kila sehemu ya chuma kama umbo la wasifu lililosukumwa pamoja na mashimo na kupunguzwa kwake, mikusanyiko, bolti na vijiti vya kutia nanga, misingi na kila baa. Tazama [Hamisha IFC](topic:ifc-export). |
| {{ui:Faili za NC}} | `<name> NC.zip` | Faili moja ya DSTV `.nc1` kwa kila alama ya sehemu. Tazama [Tuma faili za NC kwenye warsha](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Jedwali tatu kwenye faili moja: sehemu, mikusanyiko, na bolti na vijiti vya kutia nanga. Tazama [Alama na orodha ya vifaa](topic:marks-and-bom). |
| {{ui:Kupinda}} | `<name> bending schedule.csv` | Kila alama ya baa kwenye misingi. Tazama [Misingi na chuma cha kuimarisha](topic:footings-and-rebar). |
| {{ui:Mchoro wa warsha}} | `<name> <mark>.pdf` | Karatasi moja (A3 isipokuwa umechagua ukubwa mwingine) kwa sehemu iliyochaguliwa (maumbo-I na bamba). Tazama [Tengeneza mchoro wa warsha](topic:shop-drawings). |
| {{ui:Michoro}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` au `.dxf`, kadhaa kwenye `<name> drawings DWG.zip` (au `DXF.zip`) | Mipango, mwinuko na michoro ya mikusanyiko kwenye ukubwa wa karatasi uliochagua; DWG na DXF kwa ukubwa kamili, kitengo 1 = 1 mm kwenye karatasi. Tazama [Michoro ya mpangilio wa jumla na mikusanyiko](topic:drawings). |

### Vidokezo kuhusu faili za CSV

- Zinaanza na alama ya mpangilio wa baiti ili programu za lahajedwali zisome herufi zenye lafudhi ipasavyo.
- Kisanduku kinachoanza na `=`, `+`, `-` au `@` (na si namba tupu) hupata alama ya nukuu moja mwanzoni, ili lahajedwali lisiwahi kukitekeleza kama fomula.
- Urefu ni milimita na uzito ni kilogramu.

### Vidokezo kuhusu PDF

Maandishi kwenye PDF hutumia fonti ya kawaida ya Helvetica. Herufi ambazo haina (nje ya seti ya Ulaya Magharibi) huchapishwa kama "?", na upau wa hali unakuambia ni ngapi.

## Vipimo

DetailCraft inafanya kazi kwa milimita kote: gridi, viwango, viwianishi, wasifu, mashimo na kila hamisho. Majina ya wasifu yanabaki katika umbo lao lililochapishwa (W12x50 ni jina la Marekani hata ingawa vipimo vyake vinaonyeshwa kwa mm). Bado hakuna ingizo la vipimo vya imperial.

## Mtandaoni na nje ya mtandao

Kufungua, kuhifadhi na kuhamisha vyote hufanyika kwenye kivinjari chako, kwa hiyo vinafanya kazi vivyo hivyo kukiwa na muunganisho au bila, mara DetailCraft inapokuwa imeshapakia.

Ili kutumia DetailCraft bila muunganisho baadaye, chagua {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu ukiwa mtandaoni. Kitufe kinahesabu kwenda juu ("Inahifadhi 3 kati ya 20") kisha kinasoma {{ui:Tayari kwa matumizi ya nje ya mtandao}}. Nakala iliyohifadhiwa inajumuisha maktaba ya picha za 3D (takriban 2.6 MB) na msaada huu, kwa hiyo mara inapohifadhiwa, mwonekano wa 3D, kila hamisho na msaada vyote vinafanya kazi nje ya mtandao. Maelezo, na kinachohitaji bado muunganisho: [Kufanya kazi nje ya mtandao](common:offline).

:::offline
Uko nje ya mtandao. Ikiwa upau wa programu unaonyesha {{ui:Tayari kwa matumizi ya nje ya mtandao}}, kufungua, kuhifadhi na kuhamisha kunafanya kazi kama kawaida. Ikiwa haionyeshi, weka kichupo hiki wazi, usikipakie upya hadi urudi mtandaoni, na uhifadhi modeli yako sasa.
:::

Kuhifadhi kwenye wingu bado hakupatikani, na bado hakuna matoleo ya eneo-kazi. Hifadhi nakala ya faili zako za `.detailcraft.json` kama unavyohifadhi nakala ya faili nyingine yoyote ya kazi. Zaidi katika [Faili zako zinakwenda wapi](common:your-files).

## Kazi ambayo haijahifadhiwa

DetailCraft inaweka modeli kwenye kichupo kilicho wazi pekee. Ukifunga au kupakia upya kichupo chenye mabadiliko ambayo hujahifadhi, kivinjari kinauliza kama uondoke kwenye ukurasa; maneno yake ni ya kivinjari chenyewe. Hifadhi mara kwa mara kwa {{key:Mod+S}}.
