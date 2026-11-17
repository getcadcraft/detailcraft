---
title: Hlola izisekelo
summary: Hlola izisekelo, izisekelo ezihlanganisiwe nemata ngobumba obuchazwe yiwe, ukuhla, umata othambile emithonjeni, amaqembu wamapali nezindonga zokuqinisa. Isisizo senjiniyela ukuthi ihlole.
keywords: isisekelo, isisekelo, isisekelo esihlanganisiwe, umata, ukuhla, ukuqina kobumba, imithonjana, insika yomphetho, insika yekhona, ukwesekwa, ukushelela, ukugingqika, ukuphambana, ukuqina, ukuthuthuka, ukugoba, isiqinisekiso esincane, iqembu lamapali, udonga oluqinisa umhlaba, ACI 318-19
from: 6961ad52
---

:::warning
Lokhu kungokuhlolwa kokuqala okuhlose ukubhekwa yinjiniyela, hhayi ukuvunyelwa kwedizayini. Ingcindezi yokwesekwa evumelekile nesilinganiso sokungqubuzana yizinto ezingokwakho: i-DetailCraft ayazi ubumba bakho.
:::

Ithebhu {{ui:Isisekelo}} ihlola izisekelo emodelini ngokuya ngemithwalo yensika oyinikeza yona.

## Chaza ubumba

Bhala {{ui:Ingcindezi yokwesekwa evumelekile}} ne-{{ui:Isilinganiso sokungqubuzana kwesisekelo}}. Zombili ziqala ku-0, okusho ukuthi azikafakwa: ngakho ukuhlola kubonisa ingcindezi njengephuzu nje futhi akusho ukuthi iyadlula. Ukuhla, bhala imodulasi yobumba {{ui:Es}} (MPa), isilinganiso sikaPoisson kanye nokuhla okuvunyelwayo (25 mm ukuqala). Ophahleni olunwebeke, bhala imodulasi yokwesekwa {{ui:ks}}. Ukugcwala phezu kwesisekelo, isisindo sendawo yobumba, izinto zokuphepha zokushelela nokugingqika (1.5 ukuqala), kanye namandla okuvuna wamabha nawo atholakala lapha.

## Nikeza imithwalo

Isisekelo ngasinye sinohlu lwemithwalo yensika. Sebenzisa {{ui:Engeza umthwalo wekholomu}} ugcwalise umugqa wesevisi (wokwesekwa, ukushelela nokugingqika) nomugqa ophindwe (wokuhlola amandla): umthwalo ongaphansi P ohlangothini olungaphansi, amandla angeqondile Vx no Vy phezulu kwesisekelo, imizamo Mx no My, indawo yensika esisekelweni kanye nobukhulu bayo.

Noma sebenzisa ithebhu {{ui:Ukuhlaziya}} bese ucindezela {{ui:Thatha imithwalo yekholomu ku-Analysis}}: wonke amasekelo amise phezu kwesisekelo aba yimithwalo yensika, ngokusuka ezethini zesevisi nezophindwe ozikhethayo. Umzamo omuhle we-My ulayisha uhlangothi lwe-+x lwesisekelo kakhulu; umzamo omuhle we-Mx ulayisha uhlangothi lwe −y kakhulu.

## Okuhlolwayo

Kusukela emithwalweni yesevisi, kuhlanganiswa nesisindo sesisekelo ngokwaso nesendawo egcwele:

- **Ukwesekwa:** ingcindezi ngaphansi kwesisekelo esiqinile. Ngaphakathi kwesigaba sesithathu esiphakathi wonke umbheki uthintana nesisekelo; ngaphandle kwaso, ingxenye yesisekelo iphakama futhi ingcindezi ephezulu iba mkhulu. Umphumela ongaphandle kwesisekelo uyehluleka.
- **Ukushelela:** ukungqubuzana okuphindwe ngomthwalo oqondile kuya kumandla angeqondile.
- **Ukugingqika:** ibanga lomphumela kusuka emphethweni.
- **Ukuhla:** ukuhla okuthambile kwengcindezi ephakathi kwebhaki ngemodulasi oyinikeze, phakathi nendawo nasekhoneni (isixazululo sikaTimoshenko noGoodier ophaphathekile ocijile), kuqhathaniswe nomkhawulo. Ingumkhawulo ophezulu wesisekelo esiqinile futhi ayifaki izendlalelo zobumba ezijulile ezinomkhawulo, ukuphinyiselwa yibumba elimbiwe kanye nokuqina. Uma ungenamodulasi ibonisa ingcindezi njengephuzu.

Kusukela emithwalweni yekholomu ephindwe kuphela (ACI 318-19):

- **Ukugoba** endaweni yensika, nensimbi encane kakhulu (0.0018 wamabha angu-420 MPa) namabha owadweba.
- **Ukushelela okukodwa** ku-d ukusuka ebusweni.
- **Ukuphambana kokushelela** ku-d/2 ozungeze kowodwa wensika, nomzamo wensika. Kensika eseduze nomphetho, isigaba esibalulekile siyanqunywa ngumphetho wesisekelo (izinhlangothi ezintathu emaphethweni, ezimbili ekhoneni, ACI 318-19 22.6.4.1 ne-αs encane ku-Table 22.6.5.2), nomzamo ngokuhamba kwesigaba ngokwaso ufaka ukushintshwa komthwalo.
- **Ukuthuthuka** kwamabha ngaphesheya kobuso bensika, eqondile noma ngamahuku awo.
- **Ukujula** ngaphezu kwamabha asezansi (150 mm).

Isisekelo esihlanganisiwe noma umata uthathwa njengaqinile, nokushelela nomzamo kuvela ezibalweni zokuma ezinqamulweni eziphambili ngobubanzi bonke.

## Umata othambile emithonjeni

Khetha {{ui:Hlaziya lesi sisekelo njengephedi elithambile emithonjeni}} lapho isisekelo sithwele izinsika eziningi futhi isisekelo esiqinile singanembile ngokwanele. Isisekelo siba yipuleti lezakhi ezine-nodi emthonjeni wezinsimbi (i-{{ui:ks}} owayibhalile, ihlanganiswe ezinodini), umthwalo wensika ngayinye usakazwe ezinodini zesisekelo sayo. Ithebhu yesibili inikeza ingcindezi yobumba enkulu kakhulu nokuhla (nomehluko phakathi kwawo), umzamo wokugoba ngakunye nensimbi edingekayo, ukuqina ngaphezulu ngokumelene namandla ekhonkolo elula (isisekelo asinawo amabha aphezulu), ukushelela okukodwa ku-d ukusuka ezinsikeni, nokuphambana kokushelela ngengcindezi yemithonjana ngokwayo. Ukwakheka kwemesh kuthuthukiswa kuze kube yizakhi ezintathu ububanzi bensika; umata omkhulu uthatha amasekhondi ambalwa. Isisindo somata ngokwawo nobumba obungaphezulu kwawo siyaqedwa futhi asifakiwe.

Konke ukuhlola okuhluleka kukuPaneli {{ui:Izinkinga}} kanye nesigaba sakho.

## Amaqembu wamapali nezindonga zokuqinisa

{{ui:Engeza iqembu lamapali}} libeka igridi lamapali ngaphansi kwesigqoko esiqinile: bhala umthwalo nemizamo kanye nokuthi ipali elilodwa lingathwala kangakanani ekuncishisweni nasekuqineni (izinombolo zedizayini yamapali, hhayi zalelithebhu). Ukusabela kwephali ngalinye kuyi-P/n kanye nengxenye yalo yemizamo (indlela elastic), kuhlolwe ukucindezeleka okukhulu kakhulu nanoma yikuphi ukuqina.

{{ui:Engeza udonga oluqinisa umhlaba}} luhlola udonga lwecantilever ebhekene nengemuva elilingana, ngemitha: ingcindezi esebenzayo ye-Rankine, ukugingqika ngaphezu kwesihlathi, ukushelela nengcindezi yesisekelo. Ingcindezi ephambili phambi kwesihlathi ayifakiwe. Umsizi wakho wenza ukuhlola okufanayo nge-`pile_group_check` ne-`retaining_wall_check`.

Amaqembu wamapali, izindonga neswishi yomata zigcinwa efayelweni lemodeli, futhi isiqinisekiso esehlulekile sisePaneli {{ui:Izinkinga}}.
