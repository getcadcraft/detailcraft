---
title: Terasdetailide kontroll projekteerimisnormi järgi
summary: Koosta koormuskombinatsioonid normi ASCE 7 või EN 1990 järgi, kontrolli iga terast I-profiili normi AISC 360 või EN 1993-1-1 järgi ja vaata, kui suure osa oma kandevõimest iga element kasutab. Abivahend, kuni insener on selle üle vaadanud.
keywords: projekteerimine, projekteerimiskontroll, terasprojekteerimine, kasutusaste, kandevõime, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, koormuskombinatsioonid, LRFD, rahvuslik lisa, kallutuskeeris, nihe, paine, koosmõju, konstruktsioon, üliõpilased, insener
from: 66b6d545
---

Pärast analüüsi teisendab jaotis {{ui:Projekteerimiskontrollid}} vahekaardil {{ui:Analüüs}} jõud iga teraselemendi kohta hinnanguks: kui suure osa oma kandevõimest kasutab kõige ebasoodsam kombinatsioon.

:::warning
See on **abivahend, kuni insener on selle üle vaadanud**. See kasutab ainult esimese järgu jõude (teise järgu mõjusid ei arvesta), ei kontrolli väänet, saledaid (4. klassi) osi, keevitatud profiile ega ühendusi ning jätab välja need, mida ei saa kontrollida, ja ütleb seda. See ei asenda insenerikontrolli ja selle tulemused ei ole kinnitus.
:::

## Vali norm

{{ui:Projekteerimisnorm}} salvestatakse koos mudeliga; vali üks kahest perekonnast:

- **ASCE 7 + AISC 360** (USA, LRFD): ASCE 7-16 §2.3.1 koormuskombinatsioonid ja ANSI/AISC 360-16 elementide kontrollid.
- **EN 1990 + EN 1993-1-1** (Eurocode): EN 1990 kombinatsioonid (valem 6.10 või 6.10a ja 6.10b) ning EN 1993-1-1 elementide kontrollid.

Seejärel vali {{ui:Terase klass}} (A992, A36 ja teised; või S235 kuni S450, kusjuures 40 mm kohal on kehtiv madalam voolavuspiir).

## Koosta kombinatsioonid

Anna igale koormusjuhule **liik** (püsikoormus, muutuv koormus, katuse muutuv koormus, lumi, tuul, seismiline) juhtude loendis ning vajuta {{ui:Koosta kombinatsioonid}}. DetailCraft kirjutab normi kombinatsioonid sinu juhtude kombinatsioonidena: iga tugevuskombinatsiooni, mida norm loetleb sinu liikidele, ning kasutuskombinatsioonid läbipainde jaoks. Kombinatsioonid, mille ise sisestasid, jäävad alles; neid ei kontrollita normi vastu. Juhtu liigiga {{ui:Muu}} ei kombineerita.

Eurocode'i puhul on tegurid EN 1990 lisa A1 **soovitatud väärtused** (γG 1,35, γQ 1,5, lisakoormuste, lume ja tuule ψ-väärtused) ja EN 1993-1-1 (γM0 = γM1 = 1,0). Sinu riigi rahvuslik lisa muudab osa neist: ava {{ui:Rahvusliku lisa väärtused}}, sisesta oma väärtused ja koosta kombinatsioonid uuesti. Need salvestatakse mudelisse.

## Kontrolli elemente

Vajuta {{ui:Kontrolli elemendid}}. Iga terase I-profiili kohta näitab tabel tema **kasutusastet** (koormus kandevõime suhtes: 100 % on piir), kas ta läbib, millist kontrolli see määrab ja millist kombinatsiooni. Elemendid värvitakse mudelil: sinine – vähe kasutatud, roheline – umbes pool, okreline – piiri lähedal, punane – piiri ületav, hall – ei kontrollitud. Elemendi nime klõpsamine valib selle.

Kontrollid koos normi punktiga, mida nad järgivad (need on loetletud aruandes):

- tõmme, survevastupidavus paindumise ja väände kadudega, paine mõlema telje ümber koos külgmise väändumisega, nihe ja paine koos normaaljõuga;
- kasutuskombinatsioonide läbipaine võrreldes sinu seatud {{ui:Läbipainde piirang}}ga (algselt L/360; see on projektiväärtus, mitte normiväärtus).

**Pikkused.** Tõkestatud pikkus on iga analüüsitud tüki osa (1 = tõkestamata); tõkestused võetakse võrdsete vahedega algusest. K-tegurid korrutavad pikkust kadude arvutamiseks. Liitekoht, kuhu jõuab teine element, jagab elemendi, ja iga tükk kontrollitakse oma pikkusel, nagu see seal oleks tõkestatud.

## Mida ei kontrollita

Element näitab **ei kontrollitud** koos põhjusega numbri asemel, kui tema lõik ei ole I-profiil, mida kontrollid tunnevad (torud, nurgikud, U-profiilid), kui see on kohandatud (keevitatud) kuju või kui osa on paindes saled (AISC) või 4. klassi (Eurocode). Saled osa surves jätab survekontrollid välja ja element loetakse *läbib, osaliselt kontrollitud*. Veel ei ole realiseeritud: teise järgu mõjud, väänded, nihkekadu koos paindega, ühendused, väsimus, tulekindlus ja seismiline detailide koostamine. Betoonelemendid ja seismilised koormused on [omaette kontrollid](topic:concrete-and-seismic). Vt [Veel pole realiseeritud](topic:not-built-yet).

## Aruanne

{{ui:Aruanne (PDF)}} ja {{ui:Aruanne (CSV)}} saavad projekteerimistabelid, kui oled kontrolli teinud: normi versioonid, sätted ja rahvusliku lisa väärtused, kasutusaste elemendi kaupa, iga kasutatud punkt ning iga elemendi puhul koormus, kandevõime ja iga kontrolli kasutusaste selle määravas kombinatsioonis.
