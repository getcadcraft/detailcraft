---
title: Hlola amawelda lapho izingxenye zihlangana
summary: Ngemva kohlolo lwedizayini, hlola amawelda e-fillet namawelda e-butt zonke izungeze ingxenye ngayinye lapho ihlangana nenye ingxenye noma nesekelo, ngokuya nge-AISC 360-16 Chapter J noma i-EN 1993-1-8, bese ubona iqembu lewelda elisetshenziswa kakhulu nokuthi lisebenza ngaphansi kwenhlanganiso yini. Isisiza kuze kube yilapho injiniyela iyiphenya.
keywords: weld, amawelda, ukuhlolwa kwewelda, i-fillet weld, i-butt weld, full penetration, AISC 360, EN 1993-1-8, iqembu lewelda, utilisation, amandla, ukuxhumana, isakhiwo, injiniyela
from: e8eebbe6
---

I-{{ui:Weld checks}} kuthebhu ye-{{ui:Analysis}}, ngaphansi kwe-{{ui:Design checks}}, ithatha imiphumela yefreyimu eyixazululiwe ekugcineni namanyathelo amandla enza wona, bese ihlola iwelda izungeze ingxenye ngayinye kuwo wonke amaxhumano: lapho ingxenye ihlangana nenye ingxenye, noma imi esekelweni.

:::warning
Isisiza **kuze kube yilapho injiniyela iyiphenya**. Lihlola iwelda edwetshwe zonke izungeze isigaba, njengeqembu elilodwa, kusukela emandleni okugcina efreyimu. Alifundi usayizi noma ubude bamawelda owadweba kumidwebo yokukhiqiza, futhi alihloli amabhawodi, amapuleti, ukuthwala, i-block shear noma i-prying. Imiphumela yalo akuyona isitembu.
:::

## Yisebenzise

1. Xazulula ifreyimu kuthebhu ye-{{ui:Analysis}} bese ukhetha {{ui:Design code}} ku-{{ui:Design checks}}, bese ucindezela {{ui:Make combinations}} (ukuhlolwa kwewelda kudinga izinhlanganiso zamandla ezifanayo).
2. Ku-{{ui:Weld checks}}, setha i-{{ui:Fillet leg (mm, 0 = the wall, at most 8)}}. 0 isho ukuthi umlenze ulandela udonga oluncane lwesigaba, kuze kube ngu-8 mm. Ngaphansi kwekhodi ye-AISC, i-{{ui:Weld metal strength F_EXX (MPa)}} ingamandla wensimbi yewelda (482.6 MPa iyi-E70 electrode). Ngaphansi kwe-EN 1993, ibanga lensimbi linikeza amandla ensimbi yewelda kanye nesici sokuhambisana.
3. Cindezela {{ui:Check welds}}.

Umugqa ngamunye wethebhu ungeqembu elilodwa lewelda (ukuphela kokuxhumana kwengxenye). Izinombolo: i-**utilisation** yohlolo olubusayo, isimo (siyadlula noma siyahluleka), nokuthi yiluphi uhlolo nesigaba esibusayo ngaphansi kwayiphi inhlanganiso. Iqembu elingakwazi ukulinquma lichaza isizathu (akukho banga lensimbi, akukho sici sokuhambisana ebangeni ku-EN 1993-1-8 Table 4.1, akukho welda kuleso sigaba) esikhundleni sokukhombisa inombolo.

Ukushintsha umlenze noma insimbi yewelda, noma ukuhlela imodeli, kusula ithebhu: yayiyizinani zakudala. Cindezela {{ui:Check welds}} futhi.

## Okuhlolwayo

- **ASCE 7 + AISC 360:** insimbi yewelda ye-fillet (i-engeli yomthwalo ukuya kuwelda iyabalwa, J2.4), ukuqhekeka kokusika kwensimbi yesisekelo (J4.2), namawelda e-butt wokungena okugcwele (Table J2.5).
- **EN 1990 + EN 1993:** amawelda e-fillet ngendlela elula ye-EN 1993-1-8 4.5.3.3 namawelda e-butt kusukela ku-4.7.1.
- Izexwayiso zokwakheka ezihambisana nomlenze omncane nomkhulu kanye nobude obuncane, ngenani okuqhathaniswe nalo.

Iqembu lewelda liphathwa njengesigaba somugqa, futhi lithwalwa yindlela yevekthafi elinganayo: yonke ingxenye yewelda ithatha amandla ayo kumthwalo ophakathi wengxenye, kokubili ukusika, ukugoqa kanye nokugoba kokubili, ihlanganiswe njengamavekthafi.

## Okungahlolwanga

Amawelda angenelele ngokungaphelele, ama-fillet athambekile, amawelda ePlug nowe-slot, amawelda ahlukanisiwe, indlela ye-instantaneous-centre, indlela yenqondo ye-EN, ukukhathala kanye ne-block shear yensimbi yesisekelo akwakhiwe. Ezinye izinombolo zemigomo zabhalwa ngokusuka kumiyalo futhi azikaqhathaniswa nekhophi eshicilelwe; umbiko uveza lapho kuvela khona inani ngalinye (i-{{ui:Report (PDF)}} ithola amathebhu amawelda uma sewuhlolile). Bona [Hlola izingxenye zensimbi](topic:design-checks) kanye [Akukakwakhiwa](topic:not-built-yet).
