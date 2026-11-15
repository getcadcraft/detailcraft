---
title: Ukuvula, ukulondoloza nokuthumela amafayela ngaphandle
summary: Ifayela lemodeli ye-DetailCraft, zonke izinto ezithunyelwa ngaphandle ezibhalayo, lapho amafayela aya khona, nokuthi yini ehluka ngesiphequluli nangokuxhumeka.
keywords: vula, londoloza, thumela ngaphandle, landa, ifayela, json, ifc, nc1, dstv, csv, pdf, zip, izifomethi, ngenisa
from: 6fbc8e8f
---

I-DetailCraft inefayela layo lodwa, imodeli, nokuthunyelwa ngaphandle okuhlanu. Ukulondoloza ngakunye nokuthumela ngaphandle ngakunye kuyidawunilodi. Akukho okulayishwayo, futhi akukho okugcinwa kuseva.

## Ifayela lemodeli

Imodeli ye-DetailCraft ilondolozwa njenge-`<name>.detailcraft.json`, lapho `<name>` kuyigama lemodeli kuphaneli ethi {{ui:Model}}. Igcina amagridi, amazinga, izinto (namaholo nokusikwa kwazo), izixhumo nezilungiselelo zazo, izisekelo namaphrofayili wakho wezifiso.

Izingxenye, amamaki, amabhawodi, ukushisela nezinduku azigcinwa: i-DetailCraft iyazibala kabusha kusuka emodelini njalo lapho ivulwa. Yingakho ifayela lemodeli lincane.

### Londoloza

1. Thayipha igama enkambweni ethi {{ui:Name}} phezulu kuphaneli ethi {{ui:Model}}.
2. Khetha {{ui:Save}} eqenjini ethi {{ui:File}}, noma cindezela {{key:Mod+S}}.
3. Isiphequluli silanda `<name>.detailcraft.json`. Ibha yesimo ithi "Kulondoloziwe … (kulandiwe)", futhi iqhezu elisemaphethelweni esihloko sethebhu yesiphequluli liyanyamalala.

Ukulondoloza ngakunye kuyidawunilodi entsha. Isiphequluli asibhali phezu kwefayela owavula; kuye ngezilungiselelo zaso sengeza inombolo egameni, njengo-`Frame (1).detailcraft.json`, noma sibuze ukuthi ulondoloze kuphi. Gcina izinguqulo zakho ngokuqamba kabusha okulandiwe.

:::chromium
Chrome ne-Edge zilondoloza efolidini lakho lokulanda, ngaphandle uma **Buza ukuthi ulondoloze kuphi ifayela ngalinye ngaphambi kokulanda** ivuliwe ezilungiselelweni zokulanda zesiphequluli. Yivule uma ufuna ukukhetha ifolda negama lefayela njalo.
:::

:::firefox
Firefox ilondoloza efolidini lakho lokulanda, noma ibuze njalo uma **Buza njalo ukuthi ulondoloze kuphi amafayela** ivuliwe ezilungiselelweni zayo.
:::

:::safari
Safari ilondoloza efolidini lakho lokulanda. Ukushintsha leyo folda, vula **Safari, Izilungiselelo, Okujwayelekile, Indawo yokulanda amafayela**.
:::

### Vula

1. Khetha {{ui:Open}} eqenjini ethi {{ui:File}}, noma cindezela {{key:Mod+O}}.
2. Khetha ifayela le-`.detailcraft.json`.

Noma udonse ifayela usuka ku-{{pick:mac=Finder|windows=File Explorer|linux=isiphathi-mafayela sakho}} ulishiye ebukweni. Ibukwa lithi "Shiya imodeli ye-DetailCraft ukuze uyivule" ngenkathi udonsa.

Uma imodeli evuliwe inezinguquko ongakalondolozi, i-DetailCraft iyakubuza kuqala: {{ui:Cancel}}, {{ui:Discard changes}} noma {{ui:Save first}}.

I-DetailCraft ihlola yonke insimu yefayela ngaphambi kokuyisebenzisa. Okungasetshenziseki kushiywa, futhi ibha yesimo ithi kusho ini, isibonelo "Izinto ezi-2 zazingavumelekile zashiywa." Imodeli elondolozwe yi-DetailCraft entsha yenqatshwa ngomlayezo, kunokuba ivulwe ingaphelele.

### Okuvulayo

Amafayela emodeli ayo (`.json`, kuya kuma-50 MB) namafayela e-IFC (`.ifc`, IFC2X3 noma IFC4, kuya kuma-200 MB). Ifayela le-IFC, elivulwe noma eliletshwe nge-{{ui:Import IFC}}, liba imodeli entsha yamabhimu, izinsika, izinto, amaphuleti, amagridi namazinga, kanye nezimbobo nokusikwa okusikwe kuwo, namabhawodi awo njengamabhawodi akhululekile; umbiko ubala okushiywe. Bheka [Ukuthumela i-IFC ngaphandle](topic:ifc-export#import). Ayikavuli i-DWG, i-DXF noma imodeli yanoma yiluphi olunye uhlelo lokuhlela; uma uzama, kuvela: "I-DetailCraft ivula amamodeli ayo (.detailcraft.json) namafayela e-IFC (.ifc)."

## Umsebenzi olahlekile, amafayela akamuva, uhlelo lwedeskithophu

- Ngenkathi imodeli inezinguquko ongazilondolozanga, i-DetailCraft igcina ikopi kulesi siphequluli. Uma ithebhu noma isiphequluli simi ngaphambi kokuthi ulondoloze, ngesikhathi esilandelayo uvula i-DetailCraft ibuza **Buyisa umsebenzi wakho?**: buyisa ikopi, noma uyilahle. Bheka [Buyisa umsebenzi wakho](common:recover).
- Amamodeli owavula muva ahlelwe ohlwini lwesikrini sokuqala uma isiphequluli sivumela i-DetailCraft ukuthi iwavule futhi; chofoza enye ukuze uyivule kabusha.
- Kuhlelo lwedeskithophu, {{ui:Save}} ibhala imodeli emuva kwifayela owavula (kusiphequluli ilanda ikopi), futhi ukuchofoza kabili imodeli ye-DetailCraft noma ifayela le-IFC kuyivula ku-DetailCraft.

## Ukuthumela ngaphandle

Konke ukuthumela ngaphandle kusebenzisa igama lemodeli. Zikhethe eqenjini ethi {{ui:Output}}.

| Inkinobho | Ifayela | Okukuwo |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: izitezi, amagridi, yonke ingxenye yensimbi njengokukhishwa kwephrofayili ngezimbobo nokusikwa kwayo, izinhlanganisela, amabhawodi namatshe okumisa, izisekelo nazo zonke izinduku. Bheka [Thumela i-IFC ngaphandle](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Ifayela le-DSTV `.nc1` ngalinye lemaki yengxenye. Bheka [Thumela amafayela e-NC esitolo](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Amathebhu amathathu kwifayela elilodwa: izingxenye, izinhlanganisela, namabhawodi namatshe okumisa. Bheka [Amamaki nohlu lwempahla](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Yonke imaki yenduku ezisekelweni. Bheka [Izisekelo nezinduku zokuqinisa](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` iqukethe ishidi ngalinye lemaki yengxenye; {{ui:Download this sheet}} inikeza elibonisiwe (i-A3 uma ungakhethanga esinye isayizi). Bheka [Yenza imidwebo yokukhiqiza](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` noma `.dxf`, eziningi ku-`<name> drawings DWG.zip` (noma `DXF.zip`) | Amapulani, ukubukeka kohlangothi nemidwebo yokuhlanganisa ngesayizi leshidi okhethile; i-DWG ne-DXF ngesayizi eliphelele, iyunithi 1 = 1 mm ephepheni. Bheka [Imidwebo yokuhlelwa jikelele nokuhlanganisa](topic:drawings). |

### Amanothi ngamafayela e-CSV

- Aqala ngophawu lwe-byte-order ukuze izinhlelo zamashidi ezifunde kahle izinhlamvu ezinamachashaza.
- Iseli eliqala nge-`=`, `+`, `-` noma `@` (futhi lingesona inombolo elula) lithola isinqamuleli esiphezulu, ukuze ishidi lingalisebenzisi njengefomula.
- Ubude buba ngo-mm nesisindo ngo-kg.

### Amanothi nge-PDF

Umbhalo ku-PDF usebenzisa ifonti ejwayelekile i-Helvetica. Izinhlamvu ezingekho kuyo (ngaphandle kwesethi yaseNtshonalanga Yurophu) zikhishwa njenge-"?", futhi ibha yesimo ikutshela ukuthi zingaki.

## Amayunithi

I-DetailCraft isebenza ngamamilimitha kukho konke: amagridi, amazinga, izixhumanisi, amaphrofayili, izimbobo nakho konke okuthunyelwa ngaphandle. Amagama amaphrofayili agcina ifomu lawo elishicilelwe (i-W12x50 iyisibizo sase-US nakuba izilinganiso zikhonjiswa ngo-mm). Akukatholakali ukufaka ngamayunithi e-imperial okwamanje.

## Okuxhunyiwe nokungaxhunyiwe

Ukuvula, ukulondoloza nokuthumela ngaphandle konke kwenzeka kusiphequluli sakho, ngakho kusebenza ngendlela efanayo noma ngaphandle kokuxhumeka, uma i-DetailCraft seyilayishiwe.

Ukuze usebenzise i-DetailCraft ngaphandle kokuxhumeka ngesikhathi esizayo, khetha {{ui:Save for offline}} kubha yohlelo ngenkathi uxhunyiwe. Inkinobho iyakhuphuka ibale ("Iyalondoloza 3 kwezi-20") bese ithi {{ui:Offline ready}}. Ikopi elondoloziwe ifaka imitapo yokubonakala kwe-3D (cishe ngo-2.6 MB) nalo usizo, ngakho uma seliloziwe, ibonakala le-3D, konke okuthunyelwa ngaphandle nosizo konke kusebenza ngaphandle kokuxhumeka. Imininingwane, nokuthi yini edinga ukuxhumeka: [Ukusebenza ngaphandle kwe-inthanethi](common:offline).

:::offline
Awuxhunyiwe. Uma ibha yohlelo ibonisa {{ui:Offline ready}}, ukuvula, ukulondoloza nokuthumela ngaphandle kusebenza njengokujwayelekile. Uma ingabonisi lokho, gcina leli thebhu livulekile, ungalilayishi kabusha uze ubuyele ku-inthanethi, bese ulondoloza imodeli yakho manje.
:::

Ukulondoloza efwini (cloud) akukatholakali okwamanje, futhi azikho izinguqulo zedeskithophu okwamanje. Gcinela emuva amafayela akho e-`.detailcraft.json` njengoba ugcinela noma yimaphi amanye amafayela womsebenzi. Okwengeziwe ku-[Lapho amafayela akho aya khona](common:your-files).

## Umsebenzi ongalondolozwanga

I-DetailCraft igcina imodeli ethebhini evulekile kuphela. Uma uvala noma uvuselela ithebhu ngezinguquko ezingalondolozwanga, isiphequluli sibuza ukuthi ufuna ukushiya ikhasi yini; amazwi alo angawesiphequluli ngokwaso. Londoloza nge-{{key:Mod+S}} njalo.
