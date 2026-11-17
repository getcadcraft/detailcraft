---
title: Ku dar saxanka aasaaska iyo rodadka angkoorka
summary: Dhig saxan aasaas oo laxaamaysan oo leh afar rod angkoor hoosta tiir, deji cabbirradiisa, oo koobiyee tiir kasta oo la mid ah.
keywords: saxanka aasaaska, baseplate, rodadka angkoorka, boolalka angkoorka, boolalka hoos u haysta, saldhigga tiirka, boolalka aasaaska, la mid ah
from: 619ebc64
---

Xidhiidhka saxanka aasaaska wuxuu dhigayaa saxan hoosta tiirka, wuxuuna gaabiyaa tiirka sida qaradda saxanka, wuxuuna isku laxaamaa labadaba, wuxuuna ku daraa afar rod angkoor oo mara godad ku jira saxanka.

:::warning
Cabbirrada waa qiyam bilow ah, ma aha naqshad. DetailCraft ma hubiso adkaynta xamuulka, xoogga rodka ama qoto-dheerida ku dhejinta.
:::

## Ku dar saxanka aasaaska

1. Dooro {{ui:Dooro}} ({{key:V}}) oo guji tiir. Waa inuu toosnaadaa.
2. Dooro {{ui:Saxanka aasaaska}} ku jira kooxda {{ui:Xidh}}, ama {{ui:Ku dar saxanka aasaaska}} ku jira daafaca {{ui:Sifooyinka}}.
3. Xaaladda bar-ka waxay leedahay "Saxanka aasaaska waa lagu daray afar rod angkoor." Xidhiidhka cusub waa la doortay.

Tiir kasta wuxuu leeyahay hal saxan aasaas oo keliya. Haddii uu horey u lahaa, bar-ka xaaladda wuxuu leeyahay "Tiirkan horey buu u lahaa saxan aasaas."

## Beddel

Dooro saxanka aasaaska (guji saxanka ama rod). Hoosta {{ui:Saxanka, boolutaha iyo laxaamadda (mm)}}:

| Dejin | Caadi | Waxa uu sameeyo |
|---|---|---|
| Dhumucda saxanka | 25 | Tiirka waxaa lagu gaabiyaa qadarkan |
| Dhererka saxanka | 450 | Dhererka tiirka dhexdiisa |
| Ballaca saxanka | 400 | Dhinaca tiirka |
| Dhexroorka rodka | 20 | Cabbirka rodka angkoorka |
| Dhexroorka godka | 33 | Godka ku jira saxanka |
| Darajada boolka | F1554 Gr 36 | Darajada rodka, qoraal ahaan |
| Fogaanta rodadka (dhererka dhexdiisa) | 350 | Inta u dhaxaysa dhexda rodadka, dhererka saxanka dhexdiisa |
| Fogaanta rodadka (ballaca dhexdiisa) | 300 | Inta u dhaxaysa dhexda rodadka, ballaca dhexdiisa |
| Rodka oo ka soo baxa sare saxanka | 100 | Sare saxanka ilaa sare rodka |
| Rodka oo hoos ugu gala saxanka | 450 | Hoosta saxanka ilaa gudaha kongireetka |
| Cabbirka laxaamadda ee geeska | 8 | Wareegga aasaaska tiirka oo dhan |
| Agabka saxanka | A36 | Qoraal |
| Farqiga grout-ka | 0 | Inta u dhaxaysa sare kongireetka iyo hoosta saxanka |
| Xoojiyeyaasha | Ma jiro | Dooro Ma jiro, 2 (toos la jirta xiridda) ama 4 (sidoo kale xagga kale); eeg hoos |
| Dhumucda, dhererka xoojiyaha | 12, 150 | |
| Qoto-dheerida lug-ka gooyaha | 0 | Inta uu lug-ku hoos u gaadho saxanka; 0 = ma jiro lug |
| Dhumucda, ballaca lug-ka gooyaha | 25, 150 | |
| Wishaarada saxanka | Ma jiro | Rod kasta, ama ma jiro |
| Cabbirka wishaarka, dhumucda | 0, 0 | 0 = ugu yar ee AISC Design Guide 1 ee rodka |

Dhererka rodka = qoto-dheerida ku dhejinta + farqiga grout-ka + dhumucda saxanka + kor u baxa. Caadiga ah waa 575 mm.

## Faahfaahinta aasaaska: grout, xoojiyeyaasha, lug-ka gooyaha, wishaarada

Dhammaantood waa la damiyaa saxan aasaas cusub, iyo saxanada aasaaska ee moodeelada laga sameeyay ka hor DetailCraft 0.4.

- **Farqiga grout-ka.** Saxanku wuxuu ka sarreeyaa sare kongireetka masaafadan, rodadkuna way dheeraadaan intaasi. AISC Design Guide 1 (2.10) wuxuu soo jeedinayaa 1 in. dabaqa dhammaystiran iyo 1½ ilaa 2 in. saldhigga ama tiirka; wax ka badan saxannada waaweyn iyo kuwa leh lug-ka gooyaha.
- **Xoojiyeyaasha.** Saxannada toosan ee la xidhay tiirka iyo saxanka, laga bilaabo wejiga tiirka ilaa geeska saxanka, qaab afar-geesle ah (ma jiro jeexjeex ama dhab ah ilaa hadda). **2** waxay taagan yihiin toos la jirta xiridda, dhinac kasta flange-ka dhaafsan; **4** waxay ku daraan laba oo toos u ah xiridda, udhaxeysa flange-yada, ilaa dhinacyada saxanka. Tiir tuubo ah waxay taagan yihiin dhexda wejiga kasta. Mid kasta waxaa laxaamad lagu xidhay tiirka iyo saxanka labada dhinac.
- **Lug-ka gooyaha.** Saxan la xidhay dhinac walba oo hoosta saxanka aasaaska ku jira, toos la jirta dhererka tiirka, dhexda la dhigay. DetailCraft wuu digayaa haddii uu ka qoto-dheer yahay farqiga grout-ka. Ma gooyo godka saldhigga; sidaas darteed [hubinta isku dhaca](topic:clash-check) waxay ka reebtaa lug-ka iyo saldhigga.
- **Wishaarada saxanka.** Wishaar afar-geesle ah oo saxan ah, rod kasta, oo ku fadhiya saxanka aasaaska, lagu soo sheegay tiirka isku-dhiskiisa sida loose (la soo diro tiirka, ma laxaamaysan: Design Guide 1, 2.6). Haddii cabbirka iyo dhumucdu yihiin 0, DetailCraft wuxuu qaadaa wishaarka ugu yar ee AISC Design Guide 1, 2aad ed., Table 2.3 rodka; rod metric wuxuu qaataa cabbirka inch-ka ee xiga (rod M20 wuxuu helaa safka 7/8 in.: 2½ in. × 5/16 in.). Daafaca wuxuu muujinayaa cabbirka la isticmaalay. Godka wishaarka waa dhexroorka rodka + 1/16 in.: taasi waa doorashada DetailCraft, miiska ma siiyo mid. DetailCraft wuu digayaa marka rodadka aanay ka soo bixi karin si ay ugu filan u noqdaan wishaarka iyo somanta (kor u baxa ka yar dhumucda wishaarka + dhexroorka rodka).

Design Guide 1, Table 2.3, wuxuu sidoo kale soo jeedinayaa godka rodka ee saxanka: 1-5/16 in. rod ¾ in., 1-9/16 in. ⅞ in., 1-13/16 in. 1 in. DetailCraft ma beddelo cabbirka godkaaga.

Digniinno waxay sidoo kale soo baxaan marka godadka rodka ay ka dhowyihiin 1.2 × dhexroorka godka ilaa geeska saxanka, marka rodadku ku jiraan jeexjeexda tiirka, ama marka saxanku ka yar yahay tiirka.

## Koobiyee tiirar la mid ah

1. Dooro saxanka aasaaska.
2. Dooro {{ui:Ku deji kuwa la mid ah (n)}}, ama {{ui:La mid ah}} ku jira menu-ga {{ui:Dheeraad}} ee kooxda {{ui:Xidh}}.
3. Tiir kasta oo toosan oo leh isla profile, aan lahayn saxan aasaas, aanna saarnayn tiir kale, wuxuu helaa koobi.

## Saxanada aasaaska iyo saldhigyada

Saxanka aasaaska ma u baahna saldhig, saldhiguna ma og yahay saxanka sare: rodadka angkoorka lama xidhin birta bararka saldhigga. Saldhigyada dhig {{ui:Aasaas}}; eeg [Dhig saldhigyada bir-bararka leh](topic:footings-and-rebar).
