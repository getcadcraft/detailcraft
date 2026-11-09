---
title: Ukuhamba esikrinini
summary: Yonke ibha, iphaneli nethebhu ku-DetailCraft ngegama layo esikrinini, nokuthi yini eyenzelwe yona.
keywords: isikrini, isakhiwo, ithuluzi, amaphaneli, izakhiwo, ibha yesimo, imibiko, isixhumi-sisebenzi, ui, amathebhu
from: 94f81073
---

I-DetailCraft igcwalisa iwindi lesiphequluli ngaphansi kwebha yohlelo. Kusuka phezulu kuya phansi: ithuluzi, bese kuba amakholomu amathathu (iphaneli ethi {{ui:Model}}, ukubuka, iphaneli ethi {{ui:Properties}}), bese kuba amathebhu emibiko, bese kuba ibha yesimo.

## Ibha yohlelo

Ibha encane esingeni eliphezulu ingeyesayithi ye-CadCraft, hhayi yemodeli. Ibonisa igama lohlelo nenguqulo, isixhumanisi esiya ku-{{ui:Mayelana ne-DetailCraft}}, {{ui:Help}} (noma {{key:F1}}) usizo lwalolu lwazi, {{ui:Save for offline}}, inkinobho yemodi yesikrini kanye neswishi ethi {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} igcina i-DetailCraft, ububonakalo bayo be-3D nalo usizo esiphequluleni ukuze ivuleke ingaxhunyiwe. Ifunda {{ui:Offline ready}} uma seyilondoloziwe; chofoza kuyo ngalesi sikhathi ukuze uthole {{ui:Save again (get the newest version)}} noma {{ui:Remove the offline copy}}. Bheka [Ukusebenza ngaphandle kwe-inthanethi](common:offline).
- {{ui:Paper}} inika isikrini esikhanyayo, ne-{{ui:Model}} esimnyama. Ububonakalo be-3D bushintsha masinyane; akukho okushintshayo emodelini yakho.
- Inkinobho yemodi yesikrini ne-{{key:Ctrl+Shift+F}} zihamba phakathi kokujwayelekile, isikrini esigcwele, nesikrini esigcwele nezibhaha ezifihliwe. {{key:Ctrl+Shift+F}} isebenzisa inkinobho ethi Control kuyo yonke ikhompyutha, nakwi-Mac. Ngezibhaha ezifihliwe, beka isikhombi emphethelweni ophezulu wesikrini (noma uthinte) ukuze zibuye. {{key:Esc}} iphuma kwisikrini esigcwele.

## Ithuluzi

Ithuluzi linamaqembu amahlanu. Hambisa isikhombi phezu kwenkinobho ukuze ubone ukuthi yenzani nokhiye wayo.

| Iqembu | Izinkinobho | Yenzani |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Qala imodeli, vula ifayela elilondoloziwe le-`.detailcraft.json` noma ifayela le-IFC, londoloza elilodwa, noma vula uhlaka lwesampula |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Ithuluzi okusetshenziswa yichofo elilandelayo ebukweni |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, kanye kwi-{{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Engeza uxhumo kubhimu, insika noma ibhulaketi okukhethiwe, noma kopisha uxhumo okukhethiwe kuyo yonke indawo ehlangana ifana nalo |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Buyela emuva nphambili phakathi kokuhlelwa; kopisha okukhethiwe unamathisele. {{ui:More}} ivula imenyu enezinto ezithi {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} kanye {{ui:Select none}}, ngalinye nokhiye wayo |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, kanye kwi-{{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Landa okuthunyelwe ngaphandle, noma vula amashidi emidwebo |

Izinkinobho nezinto zemenyu ezingenakwenza okwamanje ziba mnyama, futhi uma uhambisa isikhombi phezu kwazo kuthi kusho ukuthi kungani. {{ui:End plates}} idinga ibhimu elikhethiwe, {{ui:Base plate}} insika ekhethiwe, {{ui:Similar}} uxhumo olukhethiwe, {{ui:Shop drawing}} imodeli enezingxenye, {{ui:Copy}} ingxenye noma isisekelo esikhethiwe, futhi {{ui:Paste}} into ekopishiwe. Bheka [Kopisha, namathisela nephinde](topic:copy-paste).

## Iphaneli ethi Model (ngakwesobunxele)

- {{ui:Model}}: igama lemodeli {{ui:Name}}. Liqamba ifayela ngalinye elilondolozwayo noma elithunyelwa ngaphandle.
- {{ui:Grids}}: imigqa yamagridi nokuhlukana kwayo, kanye {{ui:Apply grids}}. Bheka [Setha amagridi namazinga](topic:grids-and-levels).
- {{ui:Levels}}: umugqa ngamunye wezinga (igama nokuphakama ngo-mm), {{ui:Add level}} kanye {{ui:Apply levels}}.
- {{ui:Custom profile}}: yenza isigaba sakho sepharamitha. Ivaliwe uze uyivule.
- {{ui:Part marks}}: yonke imaki yengxenye kumodeli ngephrofayili yayo, ubude nenani. Chofoza imaki ukukhetha ingxenye yokuqala enayo.

{{ui:Grids}}, {{ui:Levels}} kanye {{ui:Custom profile}} ziyawa: chofoza izihloko zazo.

## Ukubuka (phakathi)

Ukubuka kubonisa imodeli nge-3D. Phezulu kwakho, ibha yokubuka inezinkinobho ezintathu nohlu:

- {{ui:3D}}: jikeleza imodeli ngokukhululeka.
- {{ui:Plan}}: buka ngqo phansi phezu kwezinga elilodwa. Uhlu lwamazinga luvela eduze kwezinkinobho. Konke okungaphezu kwe-1.5 m ngaphezulu kwezinga kuyasikwa ukuze ubone futhi uchofoze izinga ngokucacile.
- {{ui:Elevation}}: buka ngqo umugqa wegridi onohlamvu (Igridi A, Igridi B …). Uhlu lwamagridi anohlamvu luvela. Kukhonjiswa insimbi ekude nomugqa ngo-1 m kuphela.
- Inkinobho yokulinganisa ekugcineni kwesokudla kwebha yokubuka ikhulisa ukuze ibonise imodeli yonke.

Amachashaza amancane amaka ukuhlangana kwegridi ngayinye kuwo wonke amazinga. Lapho ithuluzi lokubeka livuliwe, ichashaza eliseduze nesikhombi liyakhanya, futhi ibha yesimo iyalitshela igama, isibonelo "A/2 ezingeni 1". Imibala ihlukanisa izinhlobo zezinto: insika, amabhimu, amabhulaketi namaphuleti ngamibala yazo, amabhawodi nezinti zokumisa ngeyabo, izisekelo zibonakala zikhanya, nezinduku zidwetshwa njengamathubhu. Izimbobo zibonakala njengamapulagi amnyama; ukusikwa kuyasikwa.

Ukujikeleza, ukuhambisa nokukhulisa: [Hambisa ububonakalo be-3D](topic:navigate-3d).

Lapho imodeli ingenalutho, ukubuka kubonisa uhlu olufushane lwe-"Qala imodeli". Ungakwazi futhi ukushiya ifayela lemodeli elilondoloziwe endaweni yokubuka ukuze liyivule.

## Iphaneli ethi Properties (ngakwesokudla)

Lephaneli ikhombisa okuncike kokwenzayo, nekhanda layo lisho ukuthi yiliphi: "Imodeli", "Beka ibhimu", "Ibhimu b2", "Uxhumo lwephleyiti lokuphela", "Ipuleti lesisekelo", "Isisekelo F1", "Okukhethiwe okungu-3" noma "Namathisela".

- **Akukho okukhethiwe:** ukufingqwa kwemodeli (izinto, izixhumo, izisekelo, izingxenye, amamaki, amabhawodi, isisindo sensimbi nezinduku, amagridi namazinga).
- **Ithuluzi lokubeka livuliwe:** izinketho zengxenye elandelayo (iphrofayili, impahla, indawo, ukujikeleza, futhi, zezinsika, {{ui:Kuze kube}}), ukufingqwa kweprofayili okukhethiwe, nefomu {{ui:Add by grid}} lokubeka ngaphandle kokuchofoza ebukweni.
- **Into ekhethiwe:** igama, iphrofayili, impahla, indawo, ukujikeleza, izincele zayo ezimbili, izimaki, ubude nesisindo esisikiwe, izimbobo nokusikwa, kanye nezinkinobho zezixhumo, komdwebo wokukhiqiza nokususa {{ui:Susa}}.
- **Uxhumo olukhethiwe:** zonke izilungiselelo zephleyiti, ibhawodi nokushisela, amabhawodi nokushisela akwenzayo, izexwayiso zawo, kanye {{ui:Sebenzisa kokufanayo}}.
- **Isisekelo esikhethiwe:** isikhundla nosayizi waso, indwangu yangezansi, izinduku zokuqala, namamaki ezinduku esizisebenzisayo.
- **Izinto eziningi ezikhethiwe:** inani lezinto ngohlobo, izixhumo nezisekelo, isisindo sazo sensimbi, kanye {{ui:Copy}}, {{ui:Duplicate}} ne-{{ui:Delete}}.
- **Ukunamathisela:** okusemanzini okukopishiwe, namafomu okunamathisela ngokushintshwa okuthayiphiwe noma endaweni yegridi oyikhethayo ohlwini.

Izinkambu zezinombolo zisebenza lapho ucindezela {{key:Enter}} noma ushiya inkambu. Ushintsho ngalunye ingxenye yesinyathelo osingahlehlisa ngaso.

## Amathebhu emibiko (ngaphansi)

- {{ui:Problems}}: konke i-DetailCraft ebingakwazi ukukwakha noma ebifuna ukuthi uhlole, nenkinobho ethi {{ui:Select}} emugqeni ngamunye. Ithebhu likhombisa inani phakathi kwamabhulaketi.
- {{ui:Bill of materials}}: izingxenye, izinhlanganisela, namabhawodi nezinti zokumisa, nezisindo, nexhumo elithi {{ui:Landa i-CSV}}. Chofoza imaki yengxenye ukuze ukhethe lelo xenye.
- {{ui:Bending schedule}}: yonke imaki yenduku kuyo yonke isisekelo, nexhumo elithi {{ui:Landa i-CSV}}.

Uma ithebhu ligxilile, {{key:Left}} ne-{{key:Right}} zihambisa phakathi kwamathebhu.

## Ibha yesimo

Ibha engaphansi inezingxenye ezintathu: igridi ngaphansi kwesikhombi lapho kubekwa, umlayezo wakamuva (okwenzeke ngokushesha, noma kungani into ingenziwanga), namanani aqhubekayo ezingxenye, amabhawodi, isisindo sensimbi nesisindo senduku. Uma isenzo sibonakala singenzi lutho, funda umlayezo kulapha kuqala.

Isihloko sethebhu yesiphequluli siqala ngechashaza (•) uma imodeli inezinguquko ongazilondolozanga.

## Esikrinini esincane

Ngaphansi kwamapikseli angu-760 ububanzi, amakholomu ayabekwa phezu kwawo: ithuluzi, ukubuka, ibha yesimo, {{ui:Properties}}, amathebhu emibiko, bese iphaneli ethi {{ui:Model}} yokugcina. Skrola ikhasi ukuze ufinyelele kuzo. I-DetailCraft ihlelelwe isikrini sedeskithophu noma selaphhu; ifoni isiza ukubuka, hhayi ukuhlela.
