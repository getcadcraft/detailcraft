---
title: Žymių taisyklės
summary: Tiksliai, kada dvi detalės ar du surinkimai turi tą pačią žymę, kaip žymės numeruojamos ir kaip veikia pamatų bei strypų žymės.
keywords: žymės, numeravimas, detalės žymė, surinkimo žymė, priešdėlis, tolerancija, identiškos detalės, strypų žymės, pamatų žymės
from: ce02c98e
---

DetailCraft perskaičiuoja kiekvieną žymę po kiekvieno pakeitimo. Žymės niekur neįrašomos, todėl visada atitinka dabartinį modelį. Kaip jas naudoti, žr. [Žymių ir medžiagų sąrašo tikrinimas](topic:marks-and-bom).

## Detalių žymės

Dvi detalės turi tą pačią detalės žymę, kai sutampa visi šie dalykai:

1. Detalės tipas (sija, kolona, įstrižainė arba plokštė).
2. Profilio pavadinimas (nepriklausomai nuo raidžių dydžio).
3. Medžiaga (nepriklausomai nuo raidžių dydžio).
4. Pjovimo ilgis, 1 mm tikslumu.
5. Kiekviena skylė: paviršius, padėtis išilgai ir skersai, 1 mm tikslumu, o skersmuo – 0,1 mm tikslumu.
6. Kiekviena išpjova: galas, šonas, ilgis ir gylis, 1 mm tikslumu.

Elemento {{ui:Name}} nesiskaito. Nesiskaito ir jo padėtis modelyje, pasukimas ar tai, kaip jis buvo nubraižytas, jei pati detalė ta pati.

### Apversti elementai

Detalė lyginama visais apvertimo būdais, kuriais jos skerspjūvis sutampa pats su savimi. Jei bent vienas iš jų daro ją atitinkančią kitą detalę, jos turi tą pačią žymę.

| Forma | Apvertimai, kurie skaičiuojami |
|---|---|
| I formos profiliai, stačiakampiai HSS, plokštės | Galas į galą (apie vertikalią ašį), galas į galą (apie horizontalią ašį) ir apversti aukštyn kojomis apie savo ilgio ašį |
| U formos profiliai (Channels) | Galas į galą tik apie horizontalią ašį, kad sienelė liktų toje pačioje pusėje |
| Kampuočiai, apvalūs HSS | Nėra: lyginama taip, kaip padėta |

Taigi sija su skyle arti kairiojo galo atitinka siją su ta pačia skyle arti dešiniojo galo, o kolona su skylėmis viename flanše atitinka koloną su tomis pačiomis skylėmis kitame flanše.

### Numeravimas

| Tipas | Detalės priešdėlis | Surinkimo priešdėlis |
|---|---|---|
| Kolona | c | C |
| Sija | b | B |
| Įstrižainė | br | BR |
| Plokštė (padėta, galinė arba pagrindo) | p | P |

Žymės numeruojamos nuo 1 kiekvienu priešdėliu. Tvarka: kolonos, tada sijos, įstrižainės ir plokštės; tipo viduje – pagal profilio pavadinimą natūralia tvarka (W8x10 prieš W12x26); tada ilgesnės detalės pirmiau.

Kadangi numeravimas seka šią tvarką, pridėjus ar pakeitus vieną detalę, gali pasikeisti kitų detalių numeriai.

## Surinkimų žymės

- Kiekviena detalė, kuri nėra suvirinta prie kitos detalės, yra savo surinkimo pagrindinė detalė.
- Galinės plokštės suvirinamos prie savo sijos, o pagrindo plokštės – prie savo kolonos, todėl priklauso tam elemento surinkimui.
- Du surinkimai turi tą pačią žymę, kai jų pagrindinės detalės turi tą pačią detalės žymę, o prijungtos detalės turi tas pačias žymes tose pačiose vietose (1 mm tikslumu), leidžiant tuos pačius apvertimus kaip pagrindinei detalei.
- Surinkimo priešdėlis seka pagrindinę detalę: sija su dviem galinėmis plokštėmis yra B surinkimas.

Plokštės, kurias padedate įrankiu {{ui:Plate}}, nesuvirinamos su nieku, todėl kiekviena yra savo P surinkimas.

## Pamatų žymės

Pamatai su tuo pačiu ilgiu, plotu, gyliu, betono tekstu, apatiniu tinklu ir pradiniais strypais turi tą pačią žymę: F1, F2 … tokia tvarka, kokia buvo padėti. Padėtis ir pasukimas nesiskaito.

## Strypų žymės

Strypai su tuo pačiu dydžiu, forma ir matmenimis A, B ir C (suapvalintais iki milimetro) turi tą pačią žymę visuose pamatuose. Žymė – strypo numeris, F ir skaitiklis pagal strypo dydį: 5F1, 5F2, 6F1. Ilgos krypties ir trumposios krypties strypas kvadratiniame pamate yra tas pats strypas ir turi tą pačią žymę; žiniaraščio stulpelis {{ui:Used for}} rodo abu panaudojimus.
