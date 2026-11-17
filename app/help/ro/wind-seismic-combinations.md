---
title: Vânt, amplasament seismic și combinații ASCE 7
summary: Realizarea cazurilor de încărcare din vânt pentru o clădire rigidă închisă, calcularea valorilor de proiectare seismică pentru un amplasament și realizarea combinațiilor ASCE 7, în fila Analysis.
keywords: vânt, încărcare din vânt, asce 7, procedeu direcțional, expunere, închidere, seism, clasă de teren, ss, s1, sds, sd1, usgs, spectru de proiectare, combinații de încărcări, lrfd, asd, kzt, kd, rafală
from: 676fcbf3
---

Trei blocuri din fila {{ui:Analysis}} realizează datele de intrare pentru vânt și seism ale unui cadru și le combină: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} și {{ui:ASCE 7 load combinations}}. Sunt ajutoare: **nu sunt o verificare de cod; inginerul dvs. revizuiește rezultatele.**

## Ce veți face

Realizați cazuri de încărcare din vânt pentru o clădire rigidă și închisă, luați valorile seismice pentru un amplasament și realizați combinațiile care le folosesc. Modelul are nevoie de planșee, deci rulați mai întâi analiza (vezi [Forțe, reacțiuni și deformări](topic:frame-analysis)).

## Pași

1. Deschideți fila {{ui:Analysis}} și alegeți {{ui:Run}}, ca să se cunoască planșeele și dimensiunea clădirii. Dacă un bloc spune că nu există planșee, alegeți {{ui:Find floors}} în acel bloc.
2. În {{ui:Wind loads (ASCE 7 directional procedure)}}, alegeți {{ui:Edition}}, scrieți {{ui:Basic wind speed V}} de pe harta dvs. de vânt și alegeți {{ui:Speed unit}}, apoi {{ui:Exposure}} și {{ui:Enclosure}}. Kzt, Kd, G, cota terenului, Cp în aval, excentricitatea și direcția sunt și ele acolo.
3. Citiți presiunea de la fiecare planșeu și forța de pe fiecare planșeu din tabel, apoi alegeți {{ui:Make wind cases}}. Cazurile sunt +X, -X, +Y și -Y.
4. În {{ui:Seismic site and system (ASCE 7)}}, alegeți ediția și scrieți Ss și S1 (SMS, SM1 și S1 pentru ASCE 7-22), clasa terenului de la A la D, categoria de risc și sistemul seismic de rezistență la forțe. Sau scrieți latitudinea și longitudinea și alegeți {{ui:Look up from USGS (online)}}; serviciul online este întrebat doar când apăsați butonul.
5. Citiți Fa, Fv, SDS și SD1, R, Cd și Omega0 și spectrul de proiectare, apoi alegeți {{ui:Use in the Seismic block}}. Apăsați {{ui:Make seismic cases}} în blocul seismic (vezi [Verificarea elementelor din beton și realizarea încărcărilor seismice](topic:concrete-and-seismic)).
6. În {{ui:ASCE 7 load combinations}}, alegeți {{ui:Method}} (LRFD sau ASD) și alegeți {{ui:Make ASCE 7 combinations}}. Rulați din nou analiza.

## De reținut

- Vânt: doar pentru o clădire rigidă și închisă, prin procedeul direcțional. O clădire flexibilă are nevoie de un factor de rafală din standard, pe care DetailCraft nu îl realizează.
- Clasele de teren E și F necesită un studiu de amplasament și nu sunt realizate.
- O listă de surse la baza blocurilor arată de unde vine fiecare cifră și ce a fost lăsat deoparte.
- Căutarea USGS a fost testată pe un înlocuitor, nu pe serviciul live.
