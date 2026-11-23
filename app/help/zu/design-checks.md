---
title: Hlola izingxenye zensimbi ngekhodi yedizayini
summary: Yenza izinhlanganiso zemithwalo ngokusuka ku-ASCE 7 noma ku-EN 1990, hlola i-I-shape ngayinye yensimbi ngokuya nge-AISC 360 noma i-EN 1993-1-1, bese ubona ukuthi yimaphi amandla ayo esetshenziswa yingxenye ngayinye. Isisiza kuze kube yilapho injiniyela iyiphenya.
keywords: idizayini, ukuhlolwa kwedizayini, idizayini yensimbi, ukusetshenziswa, ukusebenza, amandla, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, izinhlanganiso zemithwalo, LRFD, National Annex, ukugoba, ukugoba okuhlangene, ukucindezela, ukusika, ukusebenzisana, isakhiwo, abafundi, injiniyela
from: 15685c4e
---

Ngemva kokuqalisa ukuhlaziya, ibhloko ye-{{ui:Design checks}} kuthebhu ye-{{ui:Analysis}} iguqula amandla ayo ibe yisinqumo sengxenye ngayinye yensimbi: amandla ayo esetshenziswa yinhlanganiso embi kakhulu.

:::warning
Isisiza **kuze kube yilapho injiniyela iyiphenya**. Lisebenzisa amandla okuqala kuphela (akukho imiphumela yesibili), alihloli ukugoqa, alihloli izingxenye ezincane (ibanga 4), alihloli izimo ezishiselwe, futhi alihloli ukuxhumana; lushiya lokho olungakwazi ukukuhlola futhi luyakutshela lokho. Alithathi indawo yokuhlolwa yinjiniyela, nemiphumela yalo akuyona isitembu.
:::

## Khetha ikhodi

{{ui:Design code}} igciniwe kanye nemodeli; khetha omunye wemindeni emibili:

- **ASCE 7 + AISC 360** (US, LRFD): izinhlanganiso zemithwalo ze-ASCE 7-16 §2.3.1 kanye nezinhlolo zezingxenye ze-ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): izinhlanganiso ze-EN 1990 (Eq. 6.10, noma 6.10a kanye no-6.10b) kanye nezinhlolo zezingxenye ze-EN 1993-1-1.

Bese ukhetha i-{{ui:Steel grade}} (A992, A36 nezinye; noma S235 kuya ku-S450, nge-amandla okukhiqiza asezansi ngaphezu kuka-40 mm).

## Yenza izinhlanganiso

Nikeza ngayinye yezimo zemithwalo **uhlobo** lwayo (dead, live, roof live, snow, wind, seismic) ohlwini lwezimo, bese ucindezela {{ui:Make combinations}}. I-DetailCraft ibhala izinhlanganiso zekhodi njengezinhlanganiso zezimo zakho: zonke izinhlanganiso zamandla ekhodi ezidweba izinhlobo onazo, kanye nezinhlanganiso zokusebenza zokuhamba. Ezo owazibhala wena zihlala; azihlolwa ngekhodi. Isimo sohlobo {{ui:Other}} asihlanganiswa.

Nge-Eurocode izinkomba ziyizinani ezincomekayo ze-EN 1990 Annex A1 (γG 1.35, γQ 1.5, amanani ψ wemithwalo ezinikeziwe, eqoqiwe nomoya) kanye ne-EN 1993-1-1 (γM0 = γM1 = 1.0). I-National Annex yezwe lakho iguqula ezinye zazo: vula {{ui:National Annex values}}, bhala zakho, bese wenza izinhlanganiso futhi. Zigciniwe kanye nemodeli.

## Hlola izingxenye

Cindezela {{ui:Check members}}. Ngayinye ye-I-shape yensimbi, ithebhu ikhombisa i-**utilisation** (isidingo ngaphezu kwamandla: 100 % ngumkhawulo), ukuthi iyadlula yini, yiluphi uhlolo olubusayo, nokuthi yiyiphi inhlanganiso. Izingxenye zibonakala ngemibala kumodeli: okuhlanganiswe kancane kuluhlaza okwesibhakabhaka, okuhlanganiswe ngesigamu kuluhlaza, okuseduze komkhawulo kuyi-ochre, okudlulele kubomvu, okungahlolwanga kuluhlaza-okuhlaza-ngemvelo. Chofoza igama lengxenye ukuze uyikhethe.

Ukuhlolwa, nesigaba ngasinye esilandelayo (zilandwe ngombiko):

- ukuhudulwa (tension), ukucindezelwa nokugoba kwe-flexural nokugoba okuphambene, ukugoba ngaxhathu lwayo kokubili, ukusika, nokugoba nomthwalo wangaphakathi;
- ukuhamba kwezinhlanganiso zokusebenza ngokumelene ne-{{ui:Deflection limit}} oyisethile (L/360 ukuqala; inani lephrojekthi, hhayi inani lekhodi).

**Ubude.** Ubude obuqinisiwe yisabelo sengxenye ngayinye ehlaziywayo (1 = akuqinisiwe); izimbambo zithathwa zihlukaniswe ngokulinganayo kusukela ekuqaleni. Izinto ze-K ziphindaphinda ubude ukuze kuhlolwe ukugoba. Uma enye ingxenye ifika kuxhumano, ingxenye iyahlukaniswa, futhi ngayinye yezingxenye ihlolwa ngobude bayo, njengoba iqinisiwe lapho.

## Okungahlolwanga

Ingxenye ibonisa **ayihlolwanga**, nesizathu, esikhundleni senombolo uma isigaba sayo singesona isimo esaziwa yihlolo (ama-angle, ama-channel; amatyubhu amakhona nezindilinga ahlolwa uma izindonga zawo zisondelene), uma kuyisimo sokwenziwe (esishiselwe), noma uma ingxenye ithile ibe yi-slender (AISC) noma ibe yibanga 4 (Eurocode) ekugobeni. Ingxenye ethile ekucindezelweni ikhipha izinhlolo zokucindezela, futhi ingxenye ibonisa *iyadlula, ihlolwe ngokuphelele kancane*. Amawelda ezixhumanweni anohlolo lwawo [wawo](topic:weld-checks). Futhi akwakhiwe: imiphumela yesibili, ukugoqa, ukusika kokugoba okuhlangene, ukuxhumana okubholtwe, ukukhathala, umlilo kanye nokwakhiwa kokunyakaza komhlaba. Izinhlobo zekhonkrithi nemithwalo yokunyakaza komhlaba zinezinhlolo zazo [ezihlukile](topic:concrete-and-seismic). Bona [Akukakwakhiwa](topic:not-built-yet).

## Umbiko

{{ui:Report (PDF)}} kanye {{ui:Report (CSV)}} zithola amathebhu edizayini uma sewuhlolile: izinguqulo zekhodi, izilungiselelo namanani e-National Annex, i-utilisation ngengxenye ngayinye, zonke izigaba zekhodi ezisetshenzisiwe, nokuthi ngengxenye ngayinye isidingo, amandla kanye ne-utilisation ngohlolo ngalunye kunhlanganiso ebusayo.
