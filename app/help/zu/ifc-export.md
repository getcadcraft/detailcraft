---
title: Thumela i-IFC ukuze kuhlanganiswe
summary: Bhala ifayela le-IFC4 lemodeli yonke, insimbi, amabhawodi, izisekelo nensimbi yokuqinisa, ukuze wabelane nabaklami, ababoni nezinye izinhlelo zesofthiwe.
keywords: ifc, ifc4, ifc2x3, bim, thumela, ngenisa, ngenisa i-ifc, izimbobo, amabhawodi, amabhawodi angaqinile, izimbobo ezivulekile, izinxhobo, ukuhlanganisa, ukuthuthwa kwemodeli, step, openbim, ukungqubuzana, isibukeli
from: cfcb0cd6
---

Ukuthumela kwe-IFC kubhala imodeli yonke njengefayela elilodwa le-IFC4 esingavulwa yisofthiwe ye-BIM nabasebenzisi be-IFC.

## Thumela

1. Khetha {{ui:IFC}} eqenjini {{ui:Output}}.
2. Isiphequluli sidawuniloda i-`<name>.ifc`. Ibha yesimo ithi okufana nalokhu: "I-IFC4 ithunyelwe: izingxenye ezingu-25, izinxhobo ezingu-88, izisekelo ezingu-7, izinti ezingu-132."

Uma imodeli ingenazingxenye, izisekelo noma izinti, ibha yesimo ithi "Akukho okuthunyelwayo okwamanje."

## Okusefayelini

| Ku-DetailCraft | Kufayela le-IFC |
|---|---|
| Ilevula ngayinye | Isitezi sesakhiwo (IfcBuildingStorey), ngaphansi kwephrojekthi, isayithi nesakhiwo esisodwa |
| Amagridi | IfcGrid nama-axes awo namalebula |
| Izinsika, amabhimu, izinqinisi | IfcColumn, IfcBeam, IfcMember (isiqinisi), ngayinye iyisakhiwo esikwa profile esijwayelekile nezilinganiso zawo zangempela |
| Amaphuleti, amaphuleti omphetho, amaphuleti esisekelo | IfcPlate |
| Izimbobo nezikhefu | Izimbobo (IfcOpeningElement) ezisikwe kwisingxenye |
| Into nemaphuleti ayo ashiselwe | Inhlanganisela (IfcElementAssembly) ebhalwe ngamamaki enhlanganisela |
| Amabhawodi nezinduku zokumisa | IfcMechanicalFastener nobubanzi nobude |
| Izisekelo | IfcFooting (isisekelo sephedi), nombhalo wekhonkolo njengempahla yayo |
| Ibha ngayinye | IfcReinforcingBar nemaki yayo, ububanzi, indawo nobude, ihanjiswa ngomugqa wayo wangempela wasemaphakathi nezigoba zangempela emagumbini |

Uphawu lwengxenye ngayinye yimaki yayo. Into ngayinye ithwele futhi isethi yezakhiwo ethi "DetailCraft" enamamaki ayo, iphrofayili nesisindo. Into ngayinye ihlala esitezini esiphezulu esingaphansi noma ngaphezu kwephoyinti lalo eliphansi. Izinto zihlelwa ngamabanga.

## Ama-id azinzile okuthunyelwa kabusha

I-id ye-IFC yento ngayinye (GlobalId) yenziwa ngegama lemodeli nge-id yento ngokwayo emodelini. Thumela imodeli efanayo kabili, ama-id ayafana, ngakho izisofthiwe eziqhathanisa izinguqulo zingabona okushintshile.

:::warning
Ukushintshwa kwegama lemodeli kushintsha yonke i-id. Gcina igama lemodeli elifanayo phakathi kwezinguqulo zephrojekthi.
:::

## Hlola

Amafayela e-IFC e-DetailCraft ayafundwa kabusha umfundi we-IFC ozimele kwisuite yakhe yokuhlola. Izinhlelo ziyahlukana ngokufunda kwazo i-IFC, ngakho vula ifayela kusofthiwe ethimba lakho liyisebenzisayo ngaphambi kokuthembela kulo. I-BimCraft ye-CadCraft nayo ivula amafayela e-IFC.

## Akukakufiki

- Ukulethwa kwezixhumanisi, izisekelo nensimbi yokuqinisa kusuka kufayela le-IFC. {{ui:Import IFC}} iletha amabhimu, izinsika, izinqinisi, amaphuleti, amagridi, amaleveli, izimbobo, izikhefu namabhawodi, futhi ibale lokho okushiyiwe.
- Idatha yokuhlaziya kwesakhiwo noma yokuhlaziya kwe-analytical.
- Noma yini ngaphandle kwesimo sereferensi se-IFC4.

## Ngenisa

{{ui:Import IFC}} eqenjini {{ui:File}} (noma ukudonsa ifayela `.ifc` kumbono) yenza imodeli emisha kusuka kufayela le-IFC2X3 noma le-IFC4:

- **Amabhimu, izinsika, izinqinisi namaphuleti** anesakhiwo esisodwa esikhishiwe esiyaziwa yi-DetailCraft, ehlanganiswe nekhathalogi noma igcinwe njengephrofayili yesiko; **amagridi** namaleveli kusuka kugridi nezitezi zefayela.
- **Izimbobo:** zonke izimbobo ezizungezile (IfcOpeningElement evimbela ingxenye etholakale) ezingqamile kuhlangothi olulodwa lwengxenye: iwebhu noma amaflenji e-I-shape noma channel, izindonga zethubhu, ipuleti, namaflenji e-angle. Imbobo edlula ezindongeni zombili zethubhu ingena kanye.
- **Izikhefu:** ukuvulwa okunxande okuthatha ububanzi bonke be-I-shape noma channel kusukela esiphelweni esisodwa, phansi kusuka phezulu noma phezulu kusuka phansi.
- **Amabhawodi:** wonke ama-IfcMechanicalFastener noma ama-IfcFastener, nobubanzi, ubude, izinga nohlobo (ibhawodi noma induku yokumisa), njengamabhawodi **angaqinile**. Amabhawodi angaqinile avela embonweni, ohlwini lwempahla nasekuthunyelweni kwe-IFC, futhi ahlala lapho ayikhona uma uhambisa izinto. Iphaneli ye-{{ui:Properties}}, lapho kungakhethiwe lutho, iyawabala futhi inecala {{ui:Remove loose bolts}} lapho wengeza izixhumanisi.

Umbiko udweba konke okunye ngohlobo nesizathu sokushiywa: izindonga nezilabhu, izisekelo nezinti, izimbobo ezinde, izimbobo ezindongeni zethubhu elijikelezayo, izixhumanisi (ifayela le-IFC lithwala amapuleti namabhawodi azo, kodwa hhayi umthetho owazenza).
