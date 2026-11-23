---
title: Kontrollér svejsningerne, hvor stålprofiler mødes
summary: Efter dimensioneringskontrollen testes kilesvejsningerne og stumsvejsningerne hele vejen rundt om hver stålprofil, hvor den møder en anden stålprofil eller en understøtning, mod AISC 360-16 kapitel J eller EN 1993-1-8. Du ser, hvilken svejsegruppe der er mest udnyttet, og under hvilken kombination. En hjælp, indtil en ingeniør har gennemgået den.
keywords: svejsning, svejsninger, svejsekontrol, kilesvejsning, stumsvejsning, fuldtrængning, AISC 360, EN 1993-1-8, svejsegruppe, udnyttelse, udnyttelsesgrad, bæreevne, forbindelse, samling, konstruktion, ingeniør
from: e8eebbe6
---

Blokken {{ui:Svejsekontrol}} i fanen {{ui:Analyse}}, under {{ui:Dimensioneringskontrol}}, bruger kræfterne fra den sidst løste ramme og de bæreevnekombinationer, du har lavet, og tester svejsningen hele vejen rundt om hver stålprofil ved hver forbindelse: hvor en stålprofil møder en anden stålprofil, eller står på en understøtning.

:::warning
Det er en **hjælp, indtil en ingeniør har gennemgået den**. Den kontrollerer en svejsning tegnet hele vejen rundt om tværsnittet, som én gruppe, ud fra rammens egne endekræfter. Den læser ikke størrelsen eller længden af de svejsninger, du har tegnet i værkstedstegningerne, og den kontrollerer ikke bolte, plader, understøtningstryk, blokforskydning eller prying. Dens resultater er ikke en godkendelse.
:::

## Sådan kører du den

1. Løs rammen i fanen {{ui:Analyse}} og vælg en {{ui:Dimensioneringsnorm}} under {{ui:Dimensioneringskontrol}}, og tryk derefter på {{ui:Lav kombinationer}} (svejsekontrollen kræver de samme bæreevnekombinationer).
2. I {{ui:Svejsekontrol}} angiver du {{ui:Kilens katet (mm, 0 = væggen, højst 8)}}. 0 betyder, at kateten følger den tyndeste væg i tværsnittet, op til 8 mm. Under AISC-normen er {{ui:Svejsemetallets styrke F_EXX (MPa)}} svejsemetallets styrke (482.6 MPa svarer til en E70-elektrode). Under EN 1993 giver ståltypen svejsemetallets styrke og korrelationsfaktoren.
3. Tryk på {{ui:Kontrollér svejsninger}}.

Hver linje i tabellen er én svejsegruppe (en forbindelsesende på en stålprofil). Tallene: **udnyttelsesgraden** for dens styrende kontrol, tilstanden (består eller fejler), og hvilken kontrol og hvilket punkt der var styrende under hvilken kombination. En gruppe, som kontrollen ikke kan vurdere, angiver årsagen (ingen ståltype, ingen korrelationsfaktor for ståltypen i EN 1993-1-8 tabel 4.1, ingen svejsning på det tværsnit) i stedet for at vise et tal.

Hvis du ændrer kateten eller svejsemetallet, eller redigerer modellen, ryddes tabellen: den gjaldt de gamle værdier. Tryk på {{ui:Kontrollér svejsninger}} igen.

## Hvad der kontrolleres

- **ASCE 7 + AISC 360:** kilesvejsningens metal (vinklen mellem lasten og svejsningen tæller, J2.4), grundmaterialets forskydningsbrud (J4.2) og fuldtrængnings-stumsvejsninger (tabel J2.5).
- **EN 1990 + EN 1993:** kilesvejsninger efter den forenklede metode i EN 1993-1-8 4.5.3.3 og stumsvejsninger fra 4.7.1.
- Advarsler om detaljering mod den mindste og største katet og den mindste længde, med den værdi, de blev sammenlignet med.

Svejsegruppen behandles som et linjetværsnit og belastes efter den elastiske vektormetode: hver del af svejsningen optager kraften fra stålprofilens normalkraft, begge forskydningskræfter, vridning og begge bøjningsmomenter, lagt sammen som vektorer.

## Hvad der ikke kontrolleres

Delvis gennemsvejsninger, skæve kilesvejsninger, prop- og slidssvejsninger, intermitterende svejsninger, metoden med det øjeblikkelige centrum, EN's retningsmetode, udmattelse og grundmaterialets blokforskydning er ikke lavet endnu. Nogle af normernes konstanter er skrevet ud fra normerne og er endnu ikke sammenlignet med en trykt udgave; rapporten angiver, hvor hver værdi kommer fra ({{ui:Rapport (PDF)}} får svejsetabellerne, når du har kontrolleret). Se [Kontrollér stålprofiler](topic:design-checks) og [Ikke lavet endnu](topic:not-built-yet).
