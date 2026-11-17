---
title: Vjetar, seizmički lokalitet i ASCE 7 kombinacije
summary: Napravite slučajeve opterećenja vjetrom za zatvorenu, krutu zgradu, izračunajte seizmičke projektne vrijednosti za lokalitet i napravite ASCE 7 kombinacije na kartici Analiza.
keywords: vjetar, opterećenje vjetrom, wind load, asce 7, direkcijski postupak, izloženost, zatvorenost, seizmika, klasa lokaliteta, ss, s1, sds, sd1, usgs, projektni spektar, kombinacije opterećenja, lrfd, asd, kzt, kd, udar
from: 676fcbf3
---

Tri bloka na kartici {{ui:Analysis}} izrađuju ulaze za vjetar i seizmiku za okvir i kombinuju ih: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} i {{ui:ASCE 7 load combinations}}. To su pomoćna sredstva: **nije provjera prema normativu; vaš inženjer pregleda rezultate.**

## Šta ćete raditi

Pravite slučajeve opterećenja vjetrom za zatvorenu, krutu zgradu, uzimate seizmičke vrijednosti za lokalitet i pravite kombinacije koje ih koriste. Model treba etaže, pa prvo pokrenite analizu (vidi [Sile, reakcije i progibi](topic:frame-analysis)).

## Koraci

1. Otvorite karticu {{ui:Analysis}} i izaberite {{ui:Run}}, da se znaju etaže i veličina zgrade. Ako blok kaže da nema etaža, izaberite {{ui:Find floors}} u njemu.
2. U {{ui:Wind loads (ASCE 7 directional procedure)}} izaberite {{ui:Edition}}, upišite {{ui:Basic wind speed V}} iz vaše karte vjetra i izaberite njenu {{ui:Speed unit}}, zatim {{ui:Exposure}} i {{ui:Enclosure}}. Tu su također Kzt, Kd, G, nadmorska visina tla, Cp na zavjetrini, ekscentricitet i smjer.
3. Pročitajte pritisak na svakoj etaži i silu na svakoj etaži u tabeli, zatim izaberite {{ui:Make wind cases}}. Slučajevi su +X, -X, +Y i -Y.
4. U {{ui:Seismic site and system (ASCE 7)}} izaberite izdanje i upišite Ss i S1 (SMS, SM1 i S1 za ASCE 7-22), klasu lokaliteta od A do D, kategoriju rizika i seizmički sistem otpornosti na sile. Ili upišite geografsku širinu i dužinu i izaberite {{ui:Look up from USGS (online)}}; online servis se pita tek kad to pritisnete.
5. Pročitajte Fa, Fv, SDS i SD1, R, Cd i Omega0 i projektni spektar, zatim izaberite {{ui:Use in the Seismic block}}. Pritisnite {{ui:Make seismic cases}} u seizmičkom bloku (vidi [Provjera betonskih elemenata i izrada seizmičkih opterećenja](topic:concrete-and-seismic)).
6. U {{ui:ASCE 7 load combinations}} izaberite {{ui:Method}} (LRFD ili ASD) i izaberite {{ui:Make ASCE 7 combinations}}. Ponovo pokrenite analizu.

## Stvari koje treba znati

- Vjetar: samo za zatvorenu krutu zgradu, direkcijski postupak. Fleksibilna zgrada treba faktor udara iz standarda, koji DetailCraft ne pravi.
- Klase lokaliteta E i F traže studiju lokaliteta i nisu izrađene.
- Lista izvora na dnu blokova kaže odakle je došao svaki broj i šta je izostavljeno.
- Pretraga USGS-a testirana je na zamjenskom servisu, a ne na stvarnom.
