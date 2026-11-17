---
title: Vėjas, seisminė vieta ir ASCE 7 deriniai
summary: Sudarykite vėjo apkrovos atvejus uždaram standžiam pastatui, apskaičiuokite seisminės projektavimo reikšmes vietai ir sudarykite ASCE 7 derinius skirtuke Analizė.
keywords: vėjas, vėjo apkrova, asce 7, krypties procedūra, ekspozicija, uždarumas, seisminis, vietos klasė, ss, s1, sds, sd1, usgs, projektinis spektras, apkrovų deriniai, lrfd, asd, kzt, kd, gūsis
from: 676fcbf3
---

Trys blokai skirtuke {{ui:Analizė}} sudaro rėmo vėjo ir seisminius įvesties duomenis bei juos sujungia: {{ui:Vėjo apkrovos (ASCE 7 krypties procedūra)}}, {{ui:Seisminė vieta ir sistema (ASCE 7)}} ir {{ui:ASCE 7 apkrovų deriniai}}. Tai pagalbinės priemonės: **ne normos patikra; rezultatus peržiūri jūsų inžinierius.**

## Ką darysite

Sudarysite vėjo apkrovos atvejus uždaram, standžiam pastatui, paimsite vietos seismines reikšmes ir sudarysite derinius, kurie jas naudoja. Modelyje turi būti perdangų, todėl pirmiausia atlikite analizę (žr. [Jėgos, reakcijos ir deformacijos](topic:frame-analysis)).

## Žingsniai

1. Atidarykite skirtuką {{ui:Analizė}} ir paspauskite {{ui:Vykdyti}}, kad būtų žinomos perdangos ir pastato dydis. Jei bloke rašoma, kad perdangų nėra, paspauskite {{ui:Rasti perdangas}}.
2. Bloke {{ui:Vėjo apkrovos (ASCE 7 krypties procedūra)}} pasirinkite {{ui:Leidimas}}, įveskite {{ui:Pagrindinis vėjo greitis V}} iš savo vėjo žemėlapio ir pasirinkite jo {{ui:Greičio vienetas}}, tada {{ui:Ekspozicija}} ir {{ui:Uždarumas}}. Čia taip pat yra Kzt, Kd, G, žemės aukštis, pavėjinio pusės Cp, ekscentriciteto ir krypties laukai.
3. Perskaitykite slėgį kiekviename aukšte ir jėgą kiekvienam aukštui lentelėje, tada paspauskite {{ui:Sukurti vėjo atvejus}}. Atvejai yra +X, -X, +Y ir -Y.
4. Bloke {{ui:Seisminė vieta ir sistema (ASCE 7)}} pasirinkite leidimą ir įveskite Ss ir S1 (SMS, SM1 ir S1 ASCE 7-22), vietos klasę nuo A iki D, rizikos kategoriją ir seisminę atsparumo sistemą. Arba įveskite platumą ir ilgumą bei paspauskite {{ui:Ieškoti USGS (internetu)}}; paslauga internete klausiama tik tada, kai paspaudžiate.
5. Perskaitykite Fa, Fv, SDS ir SD1, R, Cd ir Omega0 bei projektinį spektrą, tada paspauskite {{ui:Naudoti seisminiame bloke}}. Paspauskite {{ui:Sudaryti seisminius atvejus}} seisminiame bloke (žr. [Patikrinti betoninius elementus ir sudaryti seismines apkrovas](topic:concrete-and-seismic)).
6. Bloke {{ui:ASCE 7 apkrovų deriniai}} pasirinkite {{ui:Metodas}} (LRFD arba ASD) ir paspauskite {{ui:Sukurti ASCE 7 derinius}}. Vėl atlikite analizę.

## Verta žinoti

- Vėjas: tik uždaras standus pastatas, krypties procedūra. Lankstus pastatas reikalauja gūsio koeficiento iš standarto, kurio DetailCraft nesudaro.
- Vietos klasėms E ir F reikalingas vietos tyrimas, jos nepadarytos.
- Blokų apačioje esantis šaltinių sąrašas nurodo, iš kur paimtas kiekvienas skaičius ir kas neįtraukta.
- USGS paieška išbandyta su pakaitine paslauga, o ne su tikra gyva paslauga.
