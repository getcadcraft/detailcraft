---
title: Kontrolli terasest elemente projekteerimisnormi järgi
summary: Koosta koormuskombinatsioonid ASCE 7 või EN 1990 järgi, kontrolli iga terasest I-profiili AISC 360 või EN 1993-1-1 järgi ja vaata, kui suure osa kandevõimest iga element kasutab. Abivahend, kuni insener on selle üle vaadanud.
keywords: projekteerimine, projekteerimiskontroll, terasprojekteerimine, kasutusaste, kandevõime, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, koormuskombinatsioonid, LRFD, rahvuslik lisa, kumerdumine, külgpainde-väändekumerdumine, nihe, paine, koostis, konstruktsioon, üliõpilased, insener
from: 15685c4e
---

Pärast analüüsi käivitamist teeb vahekaardi {{ui:Analüüs}} plokk {{ui:Projekteerimiskontrollid}} oma jõududest otsuse iga terasest elemendi kohta: kui suure osa kandevõimest kõige ebasoodsam kombinatsioon kasutab.

:::warning
See on **abivahend, kuni insener on selle üle vaadanud**. See kasutab ainult esimest järku jõude (teist järku mõjusid ei arvestata), ei kontrolli väänet, saledaid (4. klassi) osi, keevitatud profiile ega liitekohti ning jätab välja need, mida ei suuda kontrollida, ja ütleb seda. See ei asenda insenerikontrolli ja selle tulemused ei ole kinnitus.
:::

## Vali norm

{{ui:Projekteerimisnorm}} salvestatakse koos mudeliga; vali üks kahest perekonnast:

- **ASCE 7 + AISC 360** (USA, LRFD): ASCE 7-16 §2.3.1 koormuskombinatsioonid ja ANSI/AISC 360-16 elementide kontrollid.
- **EN 1990 + EN 1993-1-1** (Eurocode): EN 1990 kombinatsioonid (valem 6.10 või 6.10a ja 6.10b) ja EN 1993-1-1 elementide kontrollid.

Seejärel vali {{ui:Terase klass}} (A992, A36 ja teised; või S235 kuni S450, kusjuures üle 40 mm paksuste osade puhul kehtib väiksem voolavuspiir).

## Koosta kombinatsioonid

Anna igale koormusjuhule **liik** (alaline, muutuv, katuse muutuv, lumi, tuul, seismiline) koormusjuhtude loendis ja vajuta {{ui:Koosta kombinatsioonid}}. DetailCraft koostab normi kombinatsioonid sinu koormusjuhtudest: iga tugevuskombinatsiooni, mille norm sinu liikide kohta loetleb, ja läbipainde kasutuspiirseisundi kombinatsioonid. Sinu käsitsi sisestatud kombinatsioonid jäävad alles; neid normi järgi ei kontrollita. Liigiga {{ui:Muu}} koormusjuhtu ei kombineerita.

Eurocode'i puhul on tegurid EN 1990 lisa A1 **soovitatud väärtused** (γG 1.35, γQ 1.5, kasuliku koormuse, lume ja tuulekoormuse ψ väärtused) ning EN 1993-1-1 (γM0 = γM1 = 1.0). Sinu riigi rahvuslik lisa muudab mõnda neist: ava {{ui:Rahvusliku lisa väärtused}}, sisesta oma väärtused ja koosta kombinatsioonid uuesti. Need salvestatakse mudelisse.

## Kontrolli elemente

Vajuta {{ui:Kontrolli elemente}}. Iga terasest I-profiili kohta näitab tabel selle **kasutusastet** (nõudlus kandevõime suhtes: 100 % on piir), kas see läbib, millist kontrolli see määrab ja millist kombinatsiooni. Elemendid värvitakse mudelil: sinine vähe kasutatud, roheline umbes pool, oker piiri lähedal, punane üle piiri, hall kontrollimata. Elemendi valimiseks mudelil klõpsa selle nimel.

Kontrollid koos paragrahviga, mida iga kontroll järgib (need on loetletud aruandes):

- tõmme, surve paindelise ja väände kumerdumisega, paine mõlema telje suhtes koos külgpainde-väändekumerdumisega, nihe ja paine koos normaaljõuga;
- kasutuspiirseisundi kombinatsioonide läbipaine võrreldes sinu seatud {{ui:Läbipainde piirang}}-ga (alguses L/360; projekti väärtus, mitte normi väärtus).

**Pikkused.** Tugipiiratud pikkus on iga analüüsitud tüki osa (1 = tugipiiramata); toed võetakse alguses võrdsete vahedega. K-tegurid korrutavad pikkust kumerdumise arvutamiseks. Liitekoht, kuhu teine element toetub, jagab elemendi ning iga tükk kontrollitakse oma pikkuse järgi, nagu seal tugipiiratud.

## Mida ei kontrollita

Element näitab numbri asemel **kontrollimata** koos põhjusega, kui tema lõik ei ole kuju, mida kontrollid tunnevad (nurgikud, U-profiilid; ristkülikukujulisi ja ümmargusi torusid kontrollitakse, kui seinad on kompaktsed), kui see on kohandatud (keevitatud) profiil või kui osa on paindes saled (AISC) või 4. klassi (Eurocode). Survel saled osa jätab survekontrollid välja ja element loetakse *läbib, osaliselt kontrollitud*. Liitekohtade keevised on [oma kontrollis](topic:weld-checks). Samuti pole veel ehitatud: teist järku mõjud, väänne, nihe koos paindega, poltühendused, väsimus, tulekindlus ja seismiline detailimine. Betoonelemendid ja seismilised koormused on [oma kontrollidega](topic:concrete-and-seismic). Vaata [Veel valmimata](topic:not-built-yet).

## Aruanne

{{ui:Aruanne (PDF)}} ja {{ui:Aruanne (CSV)}} lisavad pärast kontrollimist projekteerimistabelid: normi väljaanded, sätted ja rahvusliku lisa väärtused, kasutusaste elemendi kaupa, kõik kasutatud paragrahvid ning iga elemendi kohta iga kontrolli nõudlus, kandevõime ja kasutusaste selle määravas kombinatsioonis.
