---
title: Hlola amamaki nohlu lwempahla
summary: Funda amamaki engxenye namamaki enhlanganisela ayinikwa yonke into yi-DetailCraft, hlola uhlu lwempahla, bese ulilanda njenge-CSV.
keywords: amamaki, ukunombolwa, amamaki engxenye, amamaki enhlanganisela, amamaki ezingxenye, bom, uhlu lwempahla, uhlu lwezinto, izisindo, uhlu lwamabhawodi, csv
from: caa2ee80
---

I-DetailCraft imaka imodeli ngokwayo. Akukho umyalo wokunombolwa futhi akukho lapho okudingeka usebenze khona: ngemva kwawo wonke ushintsho iyabona ukuthi yiziphi izingxenye ezingumuntu wensimbi efanayo, bese iwanikeza imaki eyodwa.

## Lapho amamaki akhonjiswa khona

- Uhlu {{ui:Part marks}} ephaneli {{ui:Model}}: ngayinye imaki nephrofayili yayo, ubude nenani. Chofoza imaki ukuze ukhethe ingxenye yokuqala ngaleyo maki.
- Iphaneli {{ui:Properties}} yento ekhethiwe (nohlu **Part marks** ephaneli yangakwesobunxele): {{ui:Part mark}} no-{{ui:Assembly}}. Ikhanda lephaneli nalo liveza imaki, njengo "Ibhimu b1".
- Ithebhu {{ui:Bill of materials}}, i-CSV, amagama amafayela e-NC, imidwebo yokukhiqiza nokuthunyelwa kwe-IFC (njengethegi yento ngayinye).

## Indlela izingxenye ezimakwa ngayo

- **Amamaki engxenye:** c zezinsika, b zamabhimu, br zezinqinisi, st zezinti zesixhasi sesitebhisi, p zamaphuleti (kuhlanganise amaphuleti omphetho namaphuleti esisekelo). Bese kuba inombolo: c1, c2, b1, p1 … Uma izingxenye zisemaphasini amaningi, inombolo yesigaba iba phambili, njengo-2-b1.
- **Amamaki enhlanganisela:** C, B, BR noma P. Inhlanganisela iyinto eyinhloko namaphuleti eshiselwe kuyo, njengebhimu namaphuleti omphetho awo amabili, noma insika nephuleti layo lesisekelo.
- Izingxenye ezimbili zabelana ngemaki uma zinephrofayili, impahla nobude bokusikwa kufanayo, futhi zinezimbobo nezikhefu ezifanayo, konke ngaphakathi kwe-1 mm, noma ngabe enye iphendulwe ngokuphambene nenye noma ibhekiswe phansi.
- Ukunombolwa kuqala ngezinsika, bese kuba amabhimu, izinqinisi namaphuleti; ngaphakathi kwalokho, ngegama lephrofayili, bese kuba eyelule kakhulu kuqala.

Imithetho egcwele, kuhlanganise nokuphendulwa okubalwayo kuma-channel nama-engle: [Imithetho yamamaki](topic:mark-rules).

:::warning
Amamaki abalwa kabusha ngemva kwawo wonke ushintsho, ngakho angase aphinde abalwe. Ukungeza ingxenye, ukushintsha iphrofayili noma ukungeza imbobo kungashintsha b3 ibe b4. Thatha amamaki njengokugcina kuphela uma imodeli isiqediwe, bese wenza i-BOM, amafayela e-NC nemidwebo yokukhiqiza kusuka emodelini elondoloziwe efanayo.
:::

## Funda uhlu lwempahla

Vula ithebhu {{ui:Bill of materials}} ezansi. Inamathebhu amathathu.

**Izingxenye**, nesisindo sensimbi esiphelele ekhanda:

| Ikholomu | Incazelo |
|---|---|
| Imaki yengxenye | Chofoza ukuze ukhethe ingxenye yokuqala ngaleyo maki |
| Uhlobo | ibhimu, insika, isiqinisi, isixhasi sesitebhisi noma ipuleti |
| Iphrofayili | Isibonelo W16x26 noma PL20x180 |
| Impahla yokwakha | Izinga owalisethile |
| Ubude (mm) | Ubude besokusika, emva kokuxhumana |
| Inani | Kangaki |
| Isisindo seyunithi (kg) | Ubukhulu bephrofayili ngemitha × ubude |
| Isisindo esiphelele (kg) | Isisindo seyunithi × inani |

Umugqa wokugcina unikeza inani eliphelele nesisindo esiphelele.

**Izinhlanganisela:** ngayinye imaki yenhlanganisela, into yayo eyinhloko, zonke izingxenye zayo (isibonelo "b1 + p1 + p1"), inani, isisindo seyunithi nesisindo esiphelele.

**Amabhawodi nezinduku zokumisa:** ahlelwe ngohlobo, ububanzi, ubude nezinga, nenani.

:::note
Izisindo zigcwele: izimbobo nezikhefu aziphunyiwe. Amabhawodi, amanathi, amawashela nokushisela akufakiwe esisindweni sensimbi.
:::

## Landa kona

Khetha {{ui:Download CSV}} ethebhu, noma {{ui:BOM}} eqenjini {{ui:Output}}. Ifayela `<name> BOM.csv` libamba amathebhu amathathu elandelana, ngayinye ingaphansi kwesihloko sayo, nomugqa ongenalutho phakathi. Livula kunoma yiliphi isofthiwe yamaspredishithi.

## Hlola ngaphambi kokuthumela

1. Vula ithebhu {{ui:Problems}} bese usula yonke imigqa. Ukuxhumana okungakwazanga ukwakhiwa akungezi amapuleti, izimbobo noma amabhawodi, ngakho i-BOM izoba mfishane.
2. Bheka amamaki ongawalindele. Amabhimu amabili ocabanga ukuthi afanayo kodwa anamamaki ahlukile ngokuvamile ahluka ngembobo, ngokusikwa noma ngobude besokusika; khetha ngayinye uqhathanise.
3. Londoloza imodeli, bese wenza wonke ukuthumela kusuka kulesi simo elondoloziwe.
