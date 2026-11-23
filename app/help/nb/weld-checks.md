---
title: Kontroller sveisene der stavene møtes
summary: Etter dimensjoneringskontrollen, test kjeve- og stumpsveisene rundt hver stav der den møter en annen stav eller en understøtning, mot AISC 360-16 kapittel J eller EN 1993-1-8, og se hvilken sveisegruppe som er mest brukt og under hvilken kombinasjon. Et hjelpemiddel inntil en ingeniør har gjennomgått det.
keywords: sveis, sveiser, sveisekontroll, kjeveveis, stumpsveis, fullgjennomsveiset, AISC 360, EN 1993-1-8, sveisegruppe, utnyttelse, utilisation, utilization, kapasitet, knutepunkt, forbindelse, konstruksjon, ingeniør
from: e8eebbe6
---

Blokken {{ui:Sveisekontroller}} i {{ui:Analyse}}-fanen, under {{ui:Dimensjoneringskontroller}}, tar kreftene fra den sist løste rammen og lastkombinasjonene du laget, og tester sveisen rundt hver stav i hvert knutepunkt: der en stav møter en annen stav, eller står på en understøtning.

:::warning
Det er et **hjelpemiddel inntil en ingeniør har gjennomgått det**. Den kontrollerer en sveis tegnet rundt hele tverrsnittet, som én gruppe, ut fra rammens egne endekrefter. Den leser ikke størrelsen eller lengden på sveisene du tegnet i verkstedtegningene, og den kontrollerer ikke bolter, plater, lagertrykk, blokkskjærbrudd eller lirkning. Resultatene er ikke et godkjenningsstempel.
:::

## Kjør den

1. Løs rammen i {{ui:Analyse}}-fanen, velg en {{ui:Dimensjoneringsstandard}} under {{ui:Dimensjoneringskontroller}}, og trykk deretter {{ui:Lag kombinasjoner}} (sveisekontrollen trenger de samme bruddgrensekombinasjonene).
2. I {{ui:Sveisekontroller}}, sett {{ui:Kjeveveis katet (mm, 0 = veggen, høyst 8)}}. 0 betyr at kateten følger den tynneste veggen i tverrsnittet, opptil 8 mm. Under AISC-standarden er {{ui:Sveisemetallets styrke F_EXX (MPa)}} sveisemetallets styrke (482.6 MPa er en E70-elektrode). Under EN 1993 gir stålkvaliteten sveisemetallets styrke og korrelasjonsfaktoren.
3. Trykk {{ui:Kontroller sveiser}}.

Hver linje i tabellen er én sveisegruppe (en knutepunktsende av en stav). Tallene: **utnyttelsen** av den styrende kontrollen, tilstanden (består eller feiler), og hvilken kontroll og klausul som styrte under hvilken kombinasjon. En gruppe kontrollen ikke kan vurdere, sier hvorfor (ingen stålkvalitet, ingen korrelasjonsfaktor for kvaliteten i EN 1993-1-8 tabell 4.1, ingen sveis på den profilen) i stedet for å vise et tall.

Endrer du kateten eller sveisemetallet, eller redigerer modellen, tømmes tabellen: den gjaldt de gamle verdiene. Trykk {{ui:Kontroller sveiser}} på nytt.

## Hva kontrolleres

- **ASCE 7 + AISC 360:** kjeveveismetall (vinkelen mellom lasten og sveisen teller, J2.4), skjærbrudd i grunnmaterialet (J4.2), og fullgjennomsveisede stumpsveiser (tabell J2.5).
- **EN 1990 + EN 1993:** kjeveveiser etter den forenklede metoden i EN 1993-1-8 4.5.3.3, og stumpsveiser fra 4.7.1.
- Detaljeringsadvarsler mot minste og største katet og minste lengde, med verdien de ble sammenlignet med.

Sveisegruppen behandles som et linjeformet snitt og belastes etter den elastiske vektormetoden: hver del av sveisen tar kraften fra stavens aksialkraft, begge skjærkreftene, torsjon og begge bøyningsmomentene, lagt sammen som vektorer.

## Hva som ikke kontrolleres

Delvis gjennomsveiste sveiser, skjeve kjeveveiser, plugg- og sporsveiser, intermitterende sveiser, momentsenter-metoden, EN-ens retningsmetode, utmatting og grunnmaterialets blokkskjærbrudd er ikke bygget. Noen av standardens konstanter er skrevet ut fra standardene og er ikke sammenlignet med et trykt eksemplar ennå. Rapporten viser hvor hvert tall kommer fra ({{ui:Rapport (PDF)}} får sveisetabellene når du har kontrollert). Se [Kontroller stålstaver](topic:design-checks) og [Ikke bygget ennå](topic:not-built-yet).
