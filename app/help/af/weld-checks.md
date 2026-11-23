---
title: Kontroleer die sweise waar lede ontmoet
summary: Na die ontwerpkontrole, toets die hoek- en stompsweise rondom elke lid waar dit 'n ander lid of 'n steun ontmoet, teen AISC 360-16 Hoofstuk J of EN 1993-1-8, en sien watter sweisgroep die meeste gebruik word en onder watter kombinasie. 'n Hulpmiddel totdat 'n ingenieur dit nagesien het.
keywords: sweis, sweise, sweiskontrole, hoeklas, stompsweis, volle deurdringing, AISC 360, EN 1993-1-8, sweisgroep, benutting, utilisation, kapasiteit, verbinding, struktureel, ingenieur
from: e8eebbe6
---

Die {{ui:Sweiskontroles}}-blok in die {{ui:Ontleding}}-oortjie, onder {{ui:Ontwerpkontroles}}, neem die kragte van die laaste opgeloste raamwerk en die sterkte-kombinasies wat jy gemaak het, en toets die sweis rondom elke lid by elke verbinding: waar 'n lid 'n ander lid ontmoet, of op 'n steun staan.

:::warning
Dit is 'n **hulpmiddel totdat 'n ingenieur dit nagesien het**. Dit kontroleer 'n sweis wat rondom die snit geteken is, as een groep, uit die raamwerk se eie eindkragte. Dit lees nie die grootte of lengte van die sweise wat jy in die werkstekeninge geteken het nie, en dit kontroleer nie boute, plate, dra, blokskuif of hefboomwerking nie. Die resultate is nie 'n seël nie.
:::

## Voer dit uit

1. Los die raamwerk in die {{ui:Ontleding}}-oortjie op en kies 'n {{ui:Ontwerpkode}} in {{ui:Ontwerpkontroles}}, en druk dan {{ui:Maak kombinasies}} (die sweiskontrole benodig dieselfde sterkte-kombinasies).
2. Stel in {{ui:Sweiskontroles}} die {{ui:Hoeklas-been (mm, 0 = die wand, hoogstens 8)}}. 0 beteken die been volg die dunner wand van die snit, tot 8 mm. Onder die AISC-kode is {{ui:Sweismetaal-sterkte F_EXX (MPa)}} die sweismetaal se sterkte (482.6 MPa is 'n E70-elektrode). Onder EN 1993 gee die staalgraad die sweismetaal se sterkte en die korrelasiefaktor.
3. Druk {{ui:Kontroleer sweise}}.

Elke reël van die tabel is een sweisgroep (een verbindingseinde van 'n lid). Die getalle: die **benutting** van sy bepalende kontrole, die toestand (slaag of faal), en watter kontrole en klousule bepalend was onder watter kombinasie. 'n Groep wat die kontrole nie kan beoordeel nie, sê hoekom (geen staalgraad nie, geen korrelasiefaktor vir die graad in EN 1993-1-8 Tabel 4.1 nie, geen sweis op daardie snit nie) in plaas van 'n getal te wys.

As jy die been of die sweismetaal verander, of die model wysig, word die tabel skoongemaak: hy was vir die ou waardes. Druk {{ui:Kontroleer sweise}} weer.

## Wat gekontroleer word

- **ASCE 7 + AISC 360:** hoeklas-sweismetaal (die hoek van die las na die sweis tel, J2.4), skuifbreuk van die basismetaal (J4.2), en volle-deurdringing-stompsweise (Tabel J2.5).
- **EN 1990 + EN 1993:** hoeklasse volgens die vereenvoudigde metode van EN 1993-1-8 4.5.3.3, en stompsweise uit 4.7.1.
- Opmerkings oor detaillering teen die minimum en maksimum been en die minimum lengte, met die waarde waarteen dit vergelyk is.

Die sweisgroep word as 'n lynsnit behandel en deur die elastiese vektormetode belas: elke deel van die sweis neem die krag van die lid se aksiale krag, albei skuiwe, wringing en albei buigmomente, bymekaargetel as vektore.

## Wat nie gekontroleer word nie

Gedeeltelike-deurdringing-sweise, skewe hoeklasse, prop- en gleufsweise, onderbroke sweise, die oombliklike-middelpuntmetode, die EN-rigtingmetode, moegheid en die basismetaal se blokskuif is nie gebou nie. Sommige van die standaarde se konstantes is uit die standaarde self geskryf en is nog nie teen 'n gedrukte afskrif vergelyk nie; die verslag lys waar elke getal vandaan kom (die {{ui:Verslag (PDF)}} kry die sweistabelle sodra jy gekontroleer het). Sien [Kontroleer staallede](topic:design-checks) en [Nog nie gebou nie](topic:not-built-yet).
