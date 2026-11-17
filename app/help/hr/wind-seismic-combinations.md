---
title: Vjetar, seizmička lokacija i kombinacije ASCE 7
summary: Izradite slučajeve opterećenja vjetrom za zatvorenu krutu zgradu, izračunajte projektne seizmičke vrijednosti za lokaciju i izradite kombinacije ASCE 7, na kartici Analiza.
keywords: vjetar, opterećenje vjetrom, asce 7, smjerni postupak, izloženost, zatvorenost, potres, seizmički, razred lokacije, Ss, S1, SDS, SD1, USGS, projektni spektar, kombinacije opterećenja, LRFD, ASD, Kzt, Kd, udar, faktor udara
from: 676fcbf3
---

Tri bloka na kartici {{ui:Analiza}} izrađuju ulazne vrijednosti vjetra i potresa za okvir i kombiniraju ih: {{ui:Opterećenje vjetrom (ASCE 7, metoda smjernog djelovanja)}}, {{ui:Seizmičko mjesto i sustav (ASCE 7)}} i {{ui:ASCE 7 kombinacije opterećenja}}. To su pomoćna sredstva: **nisu provjera prema propisu; vaš inženjer pregledava rezultate.**

## Što ćete napraviti

Izradite slučajeve opterećenja vjetrom za zatvorenu, krutu zgradu, uzmite seizmičke vrijednosti za lokaciju i izradite kombinacije koje ih koriste. Model treba etaže, pa prvo pokrenite analizu (vidi [Sile, reakcije i progibi](topic:frame-analysis)).

## Koraci

1. Otvorite karticu {{ui:Analiza}} i odaberite {{ui:Pokreni}}, kako bi etaže i veličina zgrade bile poznate. Ako blok kaže da nema etaža, u njemu odaberite {{ui:Pronađi etaže}}.
2. U {{ui:Opterećenje vjetrom (ASCE 7, metoda smjernog djelovanja)}} odaberite {{ui:Izdanje}}, upišite {{ui:Osnovna brzina vjetra V}} iz vaše karte vjetra i odaberite {{ui:Jedinica brzine}}, zatim {{ui:Izloženost}} i {{ui:Zatvorenost}}. Kzt, Kd, G, visina terena, Cp na zavjetrini, ekscentricitet i smjer također su tu.
3. Pročitajte tlak na svakoj etaži i silu na svakoj etaži u tablici, zatim odaberite {{ui:Izradi slučajeve vjetra}}. Slučajevi su +X, -X, +Y i -Y.
4. U {{ui:Seizmičko mjesto i sustav (ASCE 7)}} odaberite izdanje i upišite Ss i S1 (SMS, SM1 i S1 za ASCE 7-22), razred lokacije A do D, kategoriju rizika i seizmički sustav otpornosti na sile. Ili upišite geografsku širinu i dužinu i odaberite {{ui:Pronađi na USGS-u (na mreži)}}; usluga na mreži pita se tek kad pritisnete.
5. Pročitajte Fa, Fv, SDS i SD1, R, Cd i Omega0 te projektni spektar, zatim odaberite {{ui:Upotrijebi u seizmičkom bloku}}. Pritisnite {{ui:Izradi potresne slučajeve}} u seizmičkom bloku (vidi [Provjera betonskih elemenata i izrada potresnih opterećenja](topic:concrete-and-seismic)).
6. U {{ui:ASCE 7 kombinacije opterećenja}} odaberite {{ui:Metoda}} (LRFD ili ASD) i odaberite {{ui:Izradi ASCE 7 kombinacije}}. Ponovno pokrenite analizu.

## Što treba znati

- Vjetar: samo zatvorena kruta zgrada, smjerni postupak. Fleksibilna zgrada treba faktor udara iz norme, koji DetailCraft ne izrađuje.
- Razredi lokacije E i F zahtijevaju studiju lokacije i nisu izrađeni.
- Popis izvora na dnu blokova kaže odakle je došla svaka vrijednost i što je izostavljeno.
- Pretraga USGS-a testirana je na zamjenskoj usluzi, a ne na uživo usluzi.
