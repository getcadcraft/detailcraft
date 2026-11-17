---
title: Ekspordi KISS-fail valmistamistarkvarale
summary: Saada materjalinimekiri valmistuse haldustarkvarasse (MIS) KISS 1.1 failina: koosted, detailid, etapid järjestustena, augud, väljalõiked ja keevised.
keywords: kiss, kss, mis, valmistuse haldus, tootmise juhtimine, kalkulatsioon, materjalinimekiri, bom, eksport, fabtrol, järjestus
from: 30cf3951
---

Grupis {{ui:Väljund}} ava {{ui:Veel}} ja vali {{ui:KISS-fail valmistamistarkvarale}}. DetailCraft laadib alla `<name>.kss`, KISS-faili („Keep It Simple, Steel“, versioon 1.1), lihtteksti vormingu, millest enamik valmistuse haldusprogramme materjalinimekirja impordib.

## Mis selles on

- Päis: tööumber (mudeli nime esimesed kaheksa tähte ja numbrit), mudeli nimi, kuupäev ja kellaaeg ning see, kas mõõdud on meetermõõdustikus.
- Iga koosteimärgise kohta: selle põhidetail (kogus = mitu koostet), joonisrida (A-B1 jne, koostejoonise number), koostrida (nimi, tüüp, kaal, üldpikkus, sügavus ja laius), üks järjestusrida iga [etapi](topic:phases) kohta, kus koost on, ning tööjõuread: augud (kui palju, läbimõõt, paksus läbi), väljalõiked ja keevised.
- Seejärel iga selle külge kinnitatud detail **kogu** kogusega (koostes × koosted), nagu standard nõuab.
- Lahtised poldid ja ankrutangid joonisel BOLTS, koosteil FIELD.
- Iga rida annab tüübi (W, C, L, HSS, PL või MI kohandatud profiili puhul), suuruse, klassi, lõikepikkuse millimeetrites, detaili nime ja kaalu.

## Inglise või meetermõõdustik

[DetailCraft'i sätetes](topic:settings) valib **KISS-faili mõõdud**:

- **Automaatne** (algseis): inglise mõõdustik, kui iga liige on AISC profiil, muidu meetermõõdustik.
- **Inglise mõõdustik**: profiilid AISC tähisega (W 16X26, HSS 4X4X.250); plaadid ja poldid, mida DetailCraft hoiab millimeetrites, lähima 1/16 tolli täpsusega; kaalud naelades.
- **Meetermõõdustik**: Euroopa profiilid nime järgi (IPE300), plaadid paksus × laius millimeetrites; kaalud kilogrammides.

Pikkused on alati millimeetrites kahe komakohaga, olenemata sättest: KISS-standard nõuab seda ja vastuvõttev programm teisendab need.

:::note
Klassid lõigatakse standardi kaheksa märgini: A572 Gr 50 muutub A572-50-ks. Nimedes olevad komad muutuvad tühikuteks, sest formaat ei toeta jutumärke. Enne kui sõltud, kontrolli üht importi oma programmis: DetailCraft'i KISS-failid on siin kontrollitud standardi vastu, mitte veel valmistusprogrammis.
:::
