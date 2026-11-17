---
title: Wind-, seismiese terrein- en ASCE 7-kombinasies
summary: Maak windlasgevalle vir 'n ingeslote, starre gebou, bereken die seismiese ontwerpwaardes vir 'n terrein, en maak die ASCE 7-kombinasies, op die Ontleding-oortjie.
keywords: wind, windlas, asce 7, rigtingprosedure, blootstelling, omhulling, seismies, terreinklas, ss, s1, sds, sd1, usgs, ontwerpspektrum, lastkombinasies, lrfd, asd, kzt, kd, windstoot
from: 676fcbf3
---

Drie blokke op die {{ui:Ontleding}}-oortjie maak die wind- en seismiese insette van 'n raam en kombineer dit: {{ui:Windlaste (ASCE 7 rigtingprosedure)}}, {{ui:Seismiese terrein en stelsel (ASCE 7)}} en {{ui:ASCE 7-lastkombinasies}}. Hulle is hulpmiddels: **nie 'n kodetoets nie; jou ingenieur hersien die resultate.**

## Wat jy sal doen

Maak windlasgevalle vir 'n ingeslote, starre gebou, neem die seismiese waardes vir 'n terrein, en maak die kombinasies wat dit gebruik. Die model het vloere nodig, so laat die ontleding eers loop (sien [Kragte, reaksies en deurbuigings](topic:frame-analysis)).

## Stappe

1. Open die {{ui:Ontleding}}-oortjie en kies {{ui:Laat loop}}, sodat die vloere en die grootte van die gebou bekend is. As 'n blok sê daar is geen vloere nie, kies {{ui:Vind vloere}} daarin.
2. In {{ui:Windlaste (ASCE 7 rigtingprosedure)}}, kies die {{ui:Uitgawe}}, tik die {{ui:Basiese windspoed V}} uit jou windkaart en kies sy {{ui:Spoedeenheid}}, dan die {{ui:Blootstelling}} en die {{ui:Omhulling}}. Kzt, Kd, G, die grondhoogte, die lykant-Cp, die eksentrisiteit en die rigting is ook daar.
3. Lees die druk op elke vloer en die krag op elke vloer in die tabel, kies dan {{ui:Maak windgevalle}}. Die gevalle is +X, -X, +Y en -Y.
4. In {{ui:Seismiese terrein en stelsel (ASCE 7)}}, kies die uitgawe en tik Ss en S1 (SMS, SM1 en S1 vir ASCE 7-22), die terreinklas A tot D, die risikokategorie en die seismiese kragweerstandstelsel. Of tik die breedte- en lengtegraad en kies {{ui:Soek op by USGS (aanlyn)}}; dit vra die aanlynDiens eers wanneer jy dit druk.
5. Lees Fa, Fv, SDS en SD1, R, Cd en Omega0 en die ontwerpspektrum, kies dan {{ui:Gebruik in die Seismiese blok}}. Druk {{ui:Maak seismiese gevalle}} in die seismiese blok (sien [Kontroleer betonlede en maak seismiese laste](topic:concrete-and-seismic)).
6. In {{ui:ASCE 7-lastkombinasies}}, kies die {{ui:Metode}} (LRFD of ASD) en kies {{ui:Maak ASCE 7-kombinasies}}. Laat die ontleding weer loop.

## Dinge om te weet

- Wind: slegs 'n ingeslote, starre gebou, die rigtingprosedure. 'n Buigsame gebou benodig 'n windstootfaktor uit die standaard, wat DetailCraft nie maak nie.
- Terreinklas E en F benodig 'n terreinstudie en is nie gebou nie.
- 'n Bronlys onderaan die blokke sê waar elke getal vandaan kom en wat weggelaat is.
- Die USGS-opsoek is op 'n plaasvervanger getoets, nie op die lewendige diens nie.
