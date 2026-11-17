---
title: Engeza amapuleti esisekelo namaseli okumisa
summary: Beka iphuleti lesisekelo elishiselwe elinezinduku ezine zokumisa ngaphansi kwensika, usethe izilinganiso zalo, bese ulikopisha kuyo yonke insika efanayo.
keywords: iphuleti lesisekelo, baseplate, izinduku zokumisa, amabhawodi okumisa, amabhawodi okubamba, isisekelo sensika, amabhawodi esisekelo, okufanayo
from: 619ebc64
---

Ukuxhumana kwephuleti lesisekelo kubeka iphuleti ngaphansi kwensika, kufinyeze insika ngobukhulu baleliphuleti, kuyishise kanye naleliphuleti, bese kwengeza izinduku ezine zokumisa ezidlula emikhawulweni yephuleti.

:::warning
Izilinganiso ziyizinqophaso zokuqala, hhayi ukuklama. I-DetailCraft ayihloli ukuxhasa, amandla enduku noma ukungena esisekelweni.
:::

## Engeza iphuleti lesisekelo

1. Khetha {{ui:Select}} ({{key:V}}) bese uchofoza insika. Kufanele ibe mi ngqo.
2. Khetha {{ui:Base plate}} eqenjini {{ui:Connect}}, noma {{ui:Add base plate}} ephaneli {{ui:Properties}}.
3. Ibha yesimo ithi "Iphuleti lesisekelo lengeziwe nezinduku zokumisa ezine." Ukuxhumana okusha kukhethiwe.

Insika ingaba nephuleti lesisekelo elilodwa. Uma inalo kakade, ibha yesimo ithi "Le nsika seyinephuleti lesisekelo."

## Shintsha kona

Khetha iphuleti lesisekelo (chofoza iphuleti noma induku). Ngaphansi kwesihloko {{ui:Plate, bolts and weld (mm)}}:

| Isilungiselelo | Okuzenzakalelayo | Okwenzayo |
|---|---|---|
| Ukuqina kwephuleti | 25 | Insika ifinyezwa ngalokhu |
| Ubude bephuleti | 450 | Ngokujula kwensika |
| Ububanzi bephuleti | 400 | Ngokuphambene nensika |
| Usayizi wenduku | 20 | Usayizi wenduku yokumisa |
| Ububanzi besimbobo | 33 | Isimbobo kuphuleti |
| Izinga lebhawodi | F1554 Gr 36 | Izinga lenduku, njengombhalo |
| Ibanga lezinduku (ngokujula) | 350 | Phakathi kwemigqa yezinduku, ngobude bephuleti |
| Ibanga lezinduku (ngokuphambene) | 300 | Phakathi kwemigqa yezinduku, ngokuphambene |
| Ukuphakama kwenduku ngaphezu kwephuleti | 100 | Kusukela phezulu kwephuleti kuya phezulu kwenduku |
| Ukungena kwenduku ngaphansi kwephuleti | 450 | Kusukela ngaphansi kwephuleti kuya ekhonkolweni |
| Usayizi wokushisela (fillet) | 8 | Konke okuzungeze isisekelo sensika |
| Impahla yephuleti | A36 | Umbhalo |
| Ibanga legrawuthi | 0 | Isikhala phakathi kwephezulu lekhonkolo nangaphansi kwephuleti |
| Izinqinisi | None | Khetha None, 2 (ngokuhambisana newebhu) noma 4 (futhi ngokuphambanisa nawo); bona ngezansi |
| Ukuqina kwezinqinisi, ukuphakama | 12, 150 | |
| Ukujula kwelagi lokumelana nokusika | 0 | Ilagi lifinyelela kangakanani ngaphansi kwephuleti; 0 = akukho lagi |
| Ukuqina kwelagi, ububanzi | 25, 150 | |
| Amawashela ephuleti | None | Kuyo yonke induku, noma akukho |
| Usayizi wewashela, ukuqina | 0, 0 | 0 = ubuncane obuvela ku-AISC Design Guide 1 wenduku |

Ubude bendunduku = ukungena + ibanga legrawuthi + ukuqina kwephuleti + ukuphakama. Ngezinkomba ezizenzakalelayo lokho kungu-575 mm.

## Imininingwane yesisekelo: igrawuthi, izinqinisi, ilagi, amawashela

Zonke ezine zivalekile ephuleni lesisekelo elisha, nakumaphuleti esisekelo emamodeli adalwe ngaphambi kwe-DetailCraft 0.4.

- **Ibanga legrawuthi.** Iphuleti lihlala lephakama kangaka ngaphezu kwephezulu lekhonkolo, futhi izinduku zolula ngalokho. I-AISC Design Guide 1 (2.10) incoma i-1 in. esakhiweni esiqedile nango-1½ kuya ku-2 in. esisekelweni noma ekhonkolweni; kakhulu kumaphuleti amakhulu nalawo anelagi lokumelana nokusika.
- **Izinqinisi.** Amaphuleti aqondile ashiselwe insika nephuleti, asuka ebusweni bensika aye emphethelweni wephuleti, njengamakhonco (akukho ukuhleka noma ukuncipha okwamanje). **2** zimi ngokuhambisana newebhu, ngaphesheya kwamaflenji ngalinye; **4** zengeza ezimbili eziphambene nowebhu, phakathi kwamaflenji, zifike ezinhlangothini zephuleti. Kusikhwama sethubhu zimi phakathi kobuso ngabunye. Ngayinye ishiselwe insika nephuleti ngakuzo zozibili izinhlangothi.
- **Ilagi lokumelana nokusika.** Iphuleti eliseceleni lephuleti lesisekelo, lihambisana nobude bensika, liphakathi. I-DetailCraft iyaxwayisa uma lingajulile kunebanga legrawuthi. Ayisiki ikhefu esisekelweni; ngalesi sizathu [ukuhlola ukungqubuzana](topic:clash-check) ishiya ilagi nesisekelo ngaphandle.
- **Amawashela ephuleti.** Iwashela elilingana eninduku ngayinye, lihlezi phezu kwephuleti lesisekelo, lidwetshwa ohlwini lwensika njengelingaqinile (lilethwa nensika, alishiselwe: Design Guide 1, 2.6). Uma usayizi nokuqina kungu-0, i-DetailCraft ithatha iwashela elincane kakhulu kusuka ku-AISC Design Guide 1, umhlangano wesi-2, Ithebula 2.3 ngenduku; indunduku ye-metric ithatha usayizi we-inch olandelayo (indunduku ye-M20 ithola umugqa we-7/8 in.: 2½ in. × 5/16 in.). Iphaneli yezakhiwo likhombisa usayizi osetshenzisiwe. Isimbobo sewashela singububanzi bendunduku + 1/16 in.: lokho kuwukukhetha kwe-DetailCraft, ithebula alinikezi lutho. I-DetailCraft iyaxwayisa uma izinduku zingaphumi ngokwanele ukuze kwengezwe iwashela nenathi (ukuphakama okuncane kunokuqina kwewashela + ububanzi bendunduku).

Ithebula 2.3 le-Design Guide 1 lincoma nesimbobo sendunduku ephuleti: 1-5/16 in. ye-¾ in. induku, 1-9/16 in. ye-⅞ in., 1-13/16 in. ye-1 in. I-DetailCraft ayishintshi usayizi wesimbobo sakho.

Izexwayiso zivela futhi uma izimbobo zezinduku zisondele kakhulu kunokuba ziyi-1.2 × ububanzi besimbobo emphethelweni wephuleti, uma izinduku zisendaweni yomugqa wensika, noma uma iphuleti lincane kunensika.

## Kopisha kuzinsika ezifanayo

1. Khetha iphuleti lesisekelo.
2. Khetha {{ui:Apply to similar (n)}}, noma {{ui:Similar}} eqenjini {{ui:Connect}} kumenyu {{ui:More}}.
3. Yonke insika emi ngqo enephrofayili efanayo, engenaphuleti lesisekelo futhi ingami phezu kwenye insika, ithola ikhophi.

## Amapuleti esisekelo nezisekelo

Iphuleti lesisekelo alidingi isisekelo, futhi isisekelo asazi ngephuleti elingaphezulu kwaso: izinduku zokumisa azixhunyiwe ezinsimbeni zesisekelo. Beka izisekelo usebenzisa {{ui:Footing}}; bona [Beka izisekelo ngensimbi yokuqinisa](topic:footings-and-rebar).
