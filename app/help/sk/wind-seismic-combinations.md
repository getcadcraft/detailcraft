---
title: Vietor, seizmická lokalita a kombinácie ASCE 7
summary: Vytvorte prípady zaťaženia vetrom pre uzavretú tuhú budovu, určte návrhové seizmické hodnoty pre lokalitu a vytvorte kombinácie ASCE 7 na karte Analýza.
keywords: vietor, zaťaženie vetrom, asce 7, smerová metóda, expozícia, uzavretie, seizmické, trieda lokality, ss, s1, sds, sd1, usgs, návrhové spektrum, kombinácie zaťažení, lrfd, asd, kzt, kd, poryv
from: 676fcbf3
---

Tri bloky na karte {{ui:Analýza}} pripravia vstupy vetra a seizmicity pre rám a skombinujú ich: {{ui:Zaťaženie vetrom (smerová metóda ASCE 7)}}, {{ui:Seizmická lokalita a systém (ASCE 7)}} a {{ui:Kombinácie zaťažení ASCE 7}}. Sú to pomôcky: **nie je to kontrola podľa normy; výsledky overí váš inžinier.**

## Čo budete robiť

Vytvoríte prípady zaťaženia vetrom pre uzavretú tuhú budovu, odoberiete seizmické hodnoty pre lokalitu a vytvoríte kombinácie, ktoré ich používajú. Model potrebuje podlažia, preto najprv spustite analýzu (pozri [Sily, reakcie a priehyby](topic:frame-analysis)).

## Postup

1. Otvorte kartu {{ui:Analýza}} a zvoľte {{ui:Spustiť}}, aby sa zistili podlažia a veľkosť budovy. Ak blok hlási, že podlažia nie sú, zvoľte v ňom {{ui:Nájsť podlažia}}.
2. V bloku {{ui:Zaťaženie vetrom (smerová metóda ASCE 7)}} vyberte {{ui:Vydanie}}, zadajte {{ui:Základná rýchlosť vetra V}} z vašej mapy vetra a zvoľte {{ui:Jednotka rýchlosti}}, potom {{ui:Expozícia}} a {{ui:Uzavretie}}. Kzt, Kd, G, nadmorská výška terénu, závetrný Cp, excentricita a smer sú tam tiež.
3. Prečítajte tlak na každom podlaží a silu na každom podlaží v tabuľke, potom zvoľte {{ui:Vytvoriť prípady vetra}}. Prípady sú +X, -X, +Y a -Y.
4. V bloku {{ui:Seizmická lokalita a systém (ASCE 7)}} vyberte vydanie a zadajte Ss a S1 (pre ASCE 7-22 SMS, SM1 a S1), triedu lokality A až D, kategóriu rizika a seizmický systém so silovým odolávaním. Alebo zadajte zemepisnú šírku a dĺžku a zvoľte {{ui:Vyhľadať v USGS (online)}}; online služba sa dopytuje, až keď stlačíte tlačidlo.
5. Prečítajte Fa, Fv, SDS a SD1, R, Cd a Omega0 a návrhové spektrum, potom zvoľte {{ui:Použiť v bloku seizmicity}}. Stlačte {{ui:Vytvoriť seizmické prípady}} v seizmickom bloku (pozri [Kontrola betónových prvkov a tvorba seizmických zaťažení](topic:concrete-and-seismic)).
6. V bloku {{ui:Kombinácie zaťažení ASCE 7}} vyberte {{ui:Metóda}} (LRFD alebo ASD) a zvoľte {{ui:Vytvoriť kombinácie ASCE 7}}. Spustite analýzu znova.

## Čo treba vedieť

- Vietor: iba uzavretá tuhá budova, smerová metóda. Pružná budova potrebuje súčiniteľ poryvu z normy, ktorý DetailCraft netvorí.
- Trieda lokality E a F vyžaduje štúdiu lokality a ešte nie je hotová.
- Zoznam zdrojov na spodku blokov hovorí, odkiaľ pochádza každé číslo a čo bolo vynechané.
- Vyhľadávanie v USGS bolo otestované na náhradnej službe, nie na živej službe.
