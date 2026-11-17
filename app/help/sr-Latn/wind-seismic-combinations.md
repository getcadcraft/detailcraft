---
title: Vetar, seizmička lokacija i kombinacije ASCE 7
summary: Pravi slučajeve opterećenja vetrom za zatvorenu krutu zgradu, određuje seizmičke projektne vrednosti za lokaciju i pravi kombinacije ASCE 7, na kartici Analysis.
keywords: vetar, opterećenje vetrom, asce 7, usmereni postupak, izloženost, zatvorenost, seizmika, klasa lokacije, ss, s1, sds, sd1, usgs, projektni spektar, kombinacije opterećenja, lrfd, asd, kzt, kd, udar vetra
from: 676fcbf3
---

Tri bloka na kartici {{ui:Analysis}} prave ulaze za vetar i seizmiku okvira i kombinuju ih: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} i {{ui:ASCE 7 load combinations}}. To su pomoćni alati: **nije provera prema propisu; inženjer pregledava rezultate.**

## Šta ćete raditi

Pravićete slučajeve opterećenja vetrom za zatvorenu, krutu zgradu, uzeti seizmičke vrednosti za lokaciju i napraviti kombinacije koje ih koriste. Model treba da ima podove, pa prvo pokrenite analizu (pogledajte [Sile, reakcije i progibi](topic:frame-analysis)).

## Koraci

1. Otvorite karticu {{ui:Analysis}} i izaberite {{ui:Run}}, da bi podovi i veličina zgrade bili poznati. Ako blok kaže da nema podova, izaberite {{ui:Find floors}} u njemu.
2. U bloku {{ui:Wind loads (ASCE 7 directional procedure)}} izaberite {{ui:Edition}}, unesite {{ui:Basic wind speed V}} sa vaše karte vetrova i izaberite {{ui:Speed unit}}, zatim {{ui:Exposure}} i {{ui:Enclosure}}. Kzt, Kd, G, visina terena, Cp na zavetrinskoj strani, ekscentricitet i pravac su takođe tu.
3. Pročitajte pritisak na svakom spratu i silu na svakom spratu u tabeli, pa izaberite {{ui:Make wind cases}}. Slučajevi su +X, -X, +Y i -Y.
4. U bloku {{ui:Seismic site and system (ASCE 7)}} izaberite izdanje i unesite Ss i S1 (SMS, SM1 i S1 za ASCE 7-22), klasu lokacije od A do D, kategoriju rizika i seizmički sistem otpornosti na sile. Ili unesite geografsku širinu i dužinu i izaberite {{ui:Look up from USGS (online)}}; onlajn servis se pita tek kad pritisnete dugme.
5. Pročitajte Fa, Fv, SDS i SD1, R, Cd i Omega0 i projektni spektar, pa izaberite {{ui:Use in the Seismic block}}. Pritisnite {{ui:Make seismic cases}} u seizmičkom bloku (pogledajte [Provera betonskih elemenata i pravljenje seizmičkih opterećenja](topic:concrete-and-seismic)).
6. U bloku {{ui:ASCE 7 load combinations}} izaberite {{ui:Method}} (LRFD ili ASD) i izaberite {{ui:Make ASCE 7 combinations}}. Ponovo pokrenite analizu.

## Šta treba znati

- Vetar: samo zatvorena kruta zgrada, usmereni postupak. Fleksibilnoj zgradi treba faktor udara vetra iz standarda, koji DetailCraft ne pravi.
- Klase lokacije E i F zahtevaju studiju lokacije i nisu urađene.
- Lista izvora na dnu blokova kaže odakle je došao svaki broj i šta je izostavljeno.
- Pretraga USGS-a je testirana na zameni, a ne na živom servisu.
