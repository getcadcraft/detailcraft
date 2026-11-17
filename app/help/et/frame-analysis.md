---
title: Raamistiku analüüs
summary: Talade, postide ja diagonaalide jõud, toereaktsioonid ja läbindid nii, nagu need on joonistatud, sinu seatud koormusjuhtude ja kombinatsioonide järgi. Analüüsi abivahend, mitte normikontroll; projekteerimiskontrollid on eraldi samm.
keywords: analüüs, konstruktsioonianalüüs, raamistiku analüüs, jäikusmeetod, koormused, koormusjuht, kombinatsioon, püsikoormus, muutuv koormus, omakaal, toereaktsioonid, paindemoment, nihe, normaaljõud, läbind, deformeerunud kuju, toed, liigendatud, jäik, vabastus, aruanne, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Vahekaart {{ui:Analüüs}} all leiab mudeli iga talas, postis ja diagonaalis olevad jõud, posti aluste reaktsioonid ning selle, kui palju elemendid painduvad, sinu antud koormuste jaoks.

:::warning
See on **analüüsi abivahend, mitte normikontroll**. Analüüs ei rakenda ühtegi projekteerimisnormi: ta ei mõõtmesta elemente, ei kontrolli kandevõimet ega liiteid ega vali koormustegureid. Insener kontrollib mudelit, selle koormusi ja toetusi ning otsustab, mida arvud tähendavad. Elementide kontrollid normide ASCE 7 / AISC 360 või EN 1990 / EN 1993-1-1 järgi on vt [Terasjärgede kontroll projekteerimisnormi järgi](topic:design-checks), eraldi samm, mis on samuti abivahend.
:::

## Käivita analüüs

1. Ava vahekaart {{ui:Analüüs}}.
2. Vali vaates üks või mitu elementi, vali {{ui:Juhtum}}, {{ui:Koormus}} ja {{ui:Suund}}, sisesta väärtus ja vajuta {{ui:Lisa koormus}}. Elemendi pikkuselt jaotatud koormus on kN/m, punktkoormus kN. Tavaliselt kasutatakse {{ui:Allapoole (raskusjõud)}}.
3. Vajuta {{ui:Käivita analüüs}}.

Tabelis on iga elemendi suurim normaaljõud N, nihked Vz ja Vy, paindemomendid My ja Mz, väändemoment T ning läbind; suurim moment on esimesena. Elemendi nimel klõpsates valitakse element. Allpool on iga toe reaktsioonid. {{ui:Mudelil}} joonistab deformeerunud kuju või ühe suuruse diagrammina iga elemendi kõrvale, kusjuures suurim väärtus on kirjutatud selle kohale. Tulemused aeguvad kohe, kui mudel muutub: käivita analüüs uuesti.

Iga koormus, juhtum ja seade on üks tagasivõtmise samm ({{key:Mod+Z}}) ning salvestatakse mudelifaili.

## Koormusjuhud ja kombinatsioonid

Analüüs algab kolmega: **Püsi** (elementide enda kaal, nende joonistatud profiilidest ja 7850 kg/m³), **Muutuv** (tühi) ja **Püsi + muutuv**. Lisa oma juhud (tuul, lumi jne) ja kombinatsioonid: kombinatsioon liidab juhud kokku sinu sisestatud teguritega. Analüüs on lineaarne, seega lahendatakse iga juht üks kord ning kombinatsioonid on summad. Sisesta tegurid ise või vali projekteerimisnorm ja lase nupul {{ui:Koosta kombinatsioonid}} koostada selle normi kombinatsioonid ([Terasjärgede kontroll projekteerimisnormi järgi](topic:design-checks)).

## Millest raamistik koosneb

- Talad, postid ja diagonaalid, igaüks oma töörea peal (joon, mille sa joonistasid), kusjuures profiili tegelikud omadused arvutatakse selle kontuurist. Plaadid, trepid, vundamendid ja poldid raamistiku osa ei ole.
- Element jaotatakse siis, kui teise elemendi ots jääb sellele peale; nii liitub tala posti külge kõrguse keskel, kui see sinna toetub.
- **Postide alused**: jäigad (algus) või liigendatud (paigal ja väände vastu hoitud, kuid vabalt pööratav). Alusplaat teeb alati toe.
- **Talaotsad**: otsaplaat on jäik, nihkeplaat liigendatud. {{ui:Talaotsad ilma liiteta}} määrab ülejäänud. **Diagonaalid** on mõlemast otsast liigendatud.
- Vali üks element, et anda selle otstele või posti alusele oma reegel.
- Teras kõikjal: E = 200 GPa, G = 77 GPa.

Kui raamistik saab liikuda ilma midagi painutamata — mehhanism, näiteks liigendatud alused ilma ühesuunalise jäigastuseta —, peatub käivitus ja ütleb, kus ja mis suunas. Hoia seda kohal toe, jäiga liite või diagonaaliga.

## Märgid

N > 0 on tõmme. My > 0 paneb elemendi lokaalse −z poole tõmbesse: gravitatsiooni all vajuv tala on My > 0. Mz > 0 paneb lokaalse −y poole tõmbesse. Läbind mõõdetakse sirgest joonest elemendi otste vahel. Elemendi lokaalne z osutab üles (posti puhul: piki X); selle lokaalsed teljed pööratakse koos elemendi pööramisega.

## Aruanne

{{ui:Aruanne (PDF)}} ja {{ui:Aruanne (CSV)}} sisaldavad kõike: raami aluseks olnud eeldused, profiilid, juhud ja kombinatsioonid, seejärel iga juhu ja kombinatsiooni kohta reaktsioonid (koos koormuste ja reaktsioonide summadega, mis tasakaalustuvad), elementide jõud ja nihked ning kõigi juhtude ümbrisjoone. {{ui:Ekspordi CraftScriptina}} kirjutab sama raami skriptina PartCrafti skriptitööruumi, kus teek-funktsioon `frame3d` lahendab selle samm-sammult loetavas koodis.

## Meetod

Otsene jäikusmeetod, lineaarne ja esimest järku, kui just ei märgi valikut Teist järku (P-Delta): kahesõlmelised tala-posti elemendid aksiaalse, väände ja kahe paindejäikusega (nihkedeformatsioon ega välmimine ei ole arvestatud), elementide vabastused staatilise kondenseerimisega, koormused piki elemente elementide enda kujufunktsioonidega. Vastuseid kontrollitakse klassikaliste õpikunäidete vastu (konsoolid, lihtsad, jäigad ja pidevad talad, portaalraam, väändega ruudustik, ristlõikeline vink).

**Teist järku (P-Delta).** Märgi *Teist järku (P-Delta)* käivitamise kõrval: iga kombinatsioon lahendatakse uuesti, kusjuures elementide aksiaaljõud mõjuvad deformeerunud raamil (iga element lõigatakse 4 tükiks, et ka elemendi painutus otste vahel arvestataks), kuni aksiaaljõud stabiliseeruvad. Tulemusrida näitab käikude arvu ja seda, kui palju külgmine nihe kasvas; momendid, deformatsioonid, projekteerimiskontrollid ja aruanne kasutavad seejärel neid tulemusi. Raami elastsest kriitilisest koormusest kõrgemal peatub käivitus ja ütleb seda. Analüüs on elastne väikeste pööretega, ainult paindeline, ilma jäikuse vähendamiseta ja ilma märgiliste koormusteta (mitte AISC otsene analüüsimeetod omaette); plaadid, seinad ja jäigad põrandad jäävad esimest järku.

**Lõplikud elemendid: omavõnkesagedused.** Plokk {{ui:Lõplikud elemendid: omavõnkesagedused}} tulemuste all leiab sama mudeli madalaimad moodid lõplike elementide mootoriga: vabastustega talad, plaadid ja seinad lameda neljasõlmse kestana, jäigad põrandad ja toed. Vali modite arv (3, 6, 10 või 20) ja plaadielement (neljasõlmne kest paksudele või õhukestele plaatidele või õhukese plaadi element), ning vajuta {{ui:Leia sagedused}}. Tabel annab iga moodi sageduse hertsides, perioodi sekundites ning efektiivse modaalmassi piki X, Y ja Z kui liikuva massi osa. {{ui:Näita mudelil}} joonistab iga valitud moodi nii, nagu joonistatakse deformeerunud kuju. Mass on materjali tihedus korrutatud mahuga: koormused massi ei lisa ning materjalil ilma tiheduseta massi pole. Aruanne (PDF, CSV) sisaldab tabelit. See on ainult elastne ja väikeste liikumiste jaoks ning siin ei koostata seismilist ega tuulekoormust normi järgi. Ei ole normikontroll; insener vaatab tulemused üle.

**Reaktsioonispekter, ajalooline kulg ja lükkekatse.** Need kolm plokki asuvad sageduste all ning kasutavad sama lõplike elementide mudelit. Kõigi massi moodustavad materjali tihedus pluss märgitud juhtude allapoole suunatud koormused, kusjuures igaüks korrutatakse sinu sisestatud teguriga (näiteks Püsi 1 ja Muutuv selle osaga, mida loed massiks).

{{ui:Reaktsioonispekter}} loeb iga moodi maha sinu antud spektrilt (perioodi ja kiirenduse tabel või ASCE 7 kuju SDS, SD1 ja TL järgi; nupp {{ui:Kasuta seismilise ploki väärtusi}} kopeerib need seismilisest plokist) ning kombineerib moodid meetodi CQC, SRSS, kümne protsendi reegli või absoluutsumma abil, seejärel ühendab X, Y ja Z suunad (100 % + 30 % või SRSS). See annab aluse nihke, korruste nihked, elementide otsajõud ja modite tabeli, mis hoiatab, kui kasutatud modid kannavad alla 90 % massist. Tulemusi saab korrutada tegurist või skaleerida sisestatud aluse nihkeni; plokk ei arvuta seda aluse nihet ise. Tulemustel ei ole märki.

{{ui:Ajalooline kulg}} käivitab maapinna kiirenduse modaalse superpositsiooni teel (täpne salvestise punktide vahelistele sirgetele) või otsese integreerimise teel (Newmarki keskmise kiirenduse meetod Rayleigh'i summutusega). Sisend on väljamõeldud siinus või impulss (alati märgitud sünteetiliseks), sinu kleebitud salvestis või avatud tekstifail (aeg ja kiirendus, üks kiirendus rea kohta sammuga või PEER-stiilis fail DT= päisega; g või m/s² ühikutes). See annab katuse nihke ja aluse nihke ajas, iga korruse nihke ning elementide otsajõudude ümbrisjoone. Väga pika salvestisega mudelid hoiavad seda ainult seansi ajaks.

{{ui:Lükkekatse}} lükkab katust külgsuunas väikeste sammudega (kuju nagu esimene mood või ühtlane), plastilised liigendid on elementide otstes, millel on I-kuju. Liigend hakkab voolama plastilisel momendil, mis väheneb aksiaaljõu kasvades (arvutatud joonistatud kujust, nurgasüvendeid arvestamata); kõvenemine on valikuline, P-delta on valikuline ning enne saab rakendada gravitatsioonikombinatsiooni. See annab võimekuse kõvera (aluse nihe katuse nihke vastu), esimese liigendi ning iga liigendi oleku ja plastilise pöörde. {{ui:Käivita mittelineaarne ajaloo kulg}} käivitab samad liigendid ajaloo kulu ploki salvestise all väikestel mudelitel. Liigendid tekivad ainult elementide otstes (pane sõlm kohta, kus peaks liigend tekkima vahemiku sees); elementi, mis on mõlemast otsast vabastatud, liigend ei saa; diagonaalide voolamist ja väändumist ei modelleerita; plaadid ja seinad jäävad elastseks; aktsepteerimiskriteeriume ei anta. Ei ole normikontroll; insener vaatab tulemused üle. Seaded salvestatakse koos mudeliga ning aruanne sisaldab tabeleid.

Veel tegemata: väändumise analüüs, massi puudujäägi korrektsioon reaktsioonispektrile, salvestiste skaleerimine, liigendite aktsepteerimiskriteeriumid (dünaamiline vastus on olemas, ülal), pindade ja tuule koormused, mida sulle tehakse (põrandate seismilised jõud on [Betoonelementide kontroll ja seismiliste koormuste tegemine](topic:concrete-and-seismic)), elementide nihked, ainult tõmbel töötavad diagonaalid. Vt [Mis pole veel valmis](topic:not-built-yet).
