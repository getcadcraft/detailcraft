---
title: Hlola izingxenye zensimbi ngekhodi yedizayini
summary: Yenza izinhlanganisela zemithwalo ngokusuka ku-ASCE 7 noma i-EN 1990, hlola ngayinye yensimbi yesimo se-I ngokusuka ku-AISC 360 noma i-EN 1993-1-1, bese ubona ukuthi lilisebenzisa kangakanani amandla alo. Ingxenye yokusiza kuze kubhekwe injiniyela.
keywords: idizayini, ukuhlola idizayini, idizayini yensimbi, ukusetshenziswa, utilisation, amandla, capacity, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, izinhlanganisela zemithwalo, LRFD, National Annex, ukugoba, buckling, lateral-torsional buckling, ukuqunjelwa, shear, ukugoba, bending, ukusebenzisana, interaction, wesakhiwo, structural, abafundi, students, injiniyela, engineer
from: 66b6d545
---

Ngemva kokwenza ukuhlaziya, ibhlokhi ethi {{ui:Izinhlolo zedizayini}} kuthebhu ethi {{ui:Ukuhlaziya}} iguqula imiphumela yayo ibe yisinqumo sawo wonke amalunga ensimbi: ukuthi inhlanganisela enzima kunazo zonke isebenzisa kangakanani amandla alo.

:::warning
Ingxenye yokusiza **kuze kubhekwe injiniyela**. Isebenzisa amandla okuqala kuphela (akukho imiphumela yesibili), ayihloli ukujikeleza, izingxenye ezincane (ikilasi 4), izingxenye ezishisiwe noma izixhumanisi, futhi itshela ngokusobala lokho engakushiyile. Ayithathi indawo yokuhlolwa yinjiniyela, futhi imiphumela yayo ayiyona isitembu esigunyaziwe.
:::

## Khetha ikhodi

{{ui:Ikhodi yedizayini}} iyalondolozwa kanye nemodeli; khetha omunye wemindeni emibili:

- **ASCE 7 + AISC 360** (i-US, LRFD): izinhlanganisela zemithwalo ze-ASCE 7-16 §2.3.1 nezihlolo zamalunga ze-ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): izinhlanganisela ze-EN 1990 (Eq. 6.10, noma 6.10a no-6.10b) nezihlolo zamalunga ze-EN 1993-1-1.

Bese ukhetha {{ui:Ibanga lensimbi}} (A992, A36 nezinye; noma S235 kuya ku-S450, nendawo ephansi yamandla okuvuvuka ngaphezu kwe-40 mm).

## Yenza izinhlanganisela

Nika ngayinye yamacala emithwalo **uhlobo** (dead, live, roof live, snow, wind, seismic) ohlwini lwamacala, bese ucindezela {{ui:Dala izinhlanganisela}}. I-DetailCraft ibhala izinhlanganisela zekhodi njengezinhlanganisela zamacala akho: zonke izinhlanganisela zamandla ekhodi ezidweba izinhlobo ozinazo, nezinhlanganisela zokusebenza zokuhla. Ezizithayipha wena zihlala; azihlolwa ngekhodi. Icala lohlobo {{ui:Okunye}} alixubanisi.

Kwe-Eurocode izinto zokuphindaphinda ziyizinani **ezincomekayo** ze-EN 1990 Annex A1 (γG 1.35, γQ 1.5, amanani ψ womthwalo ophoqelelwe, weqhwa nomoya) ne-EN 1993-1-1 (γM0 = γM1 = 1.0). I-National Annex yezwe lakho iyashintsha ezinye zazo: vula {{ui:Amanani e-National Annex}}, uthayiphe awakho, bese wenza izinhlanganisela futhi. Ayalondolozwa kumodeli.

## Hlola amalunga

Cindezela {{ui:Hlola izingxenye}}. Ngayinye yensimbi yesimo se-I, ithebula likhombisa i-**utilisation** (ukufuna ngaphezu kwamandla: 100 % umkhawulo), ukuthi iyadlula yini, ukuhlola okubusayo, nokuthi iyiphi inhlanganisela. Amalunga akhishwa kumodeli: mbala omncane usetshenziswa, luhlaza cishe ingxenye, okhilimu eduze komkhawulo, obomvu udlula, ongwadlazi akuhlolwanga. Chofoza igama lelunga ukuzeulikhethe.

Izihlolo, nesigatshana ngasinye esilandelayo (zidwetshwe kumbiko):

- ukuqina (tension), ukucindezeleka nokugoba nokujikeleza, ukugoba ngazo zombili izimbazo nokugoba okuhlangene nokujikeleza, ukuqunjelwa, nokugoba kanye nomthwalo ojwayelekile;
- ukuhla kwezinhlanganisela zokusebenza ngokumelene ne-{{ui:Umkhawulo wokuhla}} oyisethile (L/360 ekuqaleni; inani leprojekthi, hhayi leyekhodi).

**Ubude.** Ubude obubanjiwe yisabelo sengxenye ngayinye ehlaziywayo (1 = akubanjiwe); izinkapha zithathwa zilingana kusukela ekuqaleni. Izinombolo ze-K ziphindaphinda ubude ukuze kubalwe ukugoba. Ihlanganiso lapho elinye ilunga lifika lihlukanisa ilunga, futhi ingxenye ngayinye ihlolwa ngobude bayo, njengoba ibanjiwe khona.

## Okungahlolwanga

Ilunga libonisa **not checked**, nesizathu, esikhundleni senombolo uma isigaba singesona isimo se-I esaziwa yizihlolo (amathubhu, ama-angle, amachannel), uma seyisimo esakhiwe ngokushisela, noma uma ingxenye ingumncane (AISC) noma ingeyikilasi 4 (Eurocode) ekugobeni. Ingxenye emincane ekucindezelekeni ishiya izihlolo zokucindezeleka zingasebenzi futhi ilunga lifunda *passes, partly checked*. Okungakakhiwa futhi: imiphumela yesibili, ukujikeleza, ukuqunjelwa okuhlangene nokugoba, izixhumanisi, ukukhathala, umlilo nokwakhiwa kwezinyikazi. Amalunga okhonkolo nemithwalo yokunyikazi kunezihlolo zawo [ezizimele](topic:concrete-and-seismic). Bheka [Okungakakhiwa](topic:not-built-yet).

## Umbiko

{{ui:Umbiko (PDF)}} no-{{ui:Umbiko (CSV)}} athola amathebula edizayini uma usuhlolile: izinguqulo zamakhodi, izilungiselelo nezinani ze-National Annex, ukusetshenziswa ngelunga ngalinye, zonke izigatshana ezisetshenziswe, nangelunga ngalinye ukufuna, amandla nokusetshenziswa kwesihlolo ngasinye ekuhlanganisweni okubusayo.
