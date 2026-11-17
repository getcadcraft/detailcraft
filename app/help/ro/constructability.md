---
title: Verificări de constructibilitate
summary: Probleme pentru lucrurile pe care un detaliator le observă cu ochiul: un șurub la care cheia nu ajunge, șuruburi prea apropiate pentru cheie tubulară, suduri de colț în afara limitelor de dimensiune, suduri la care aparatul nu ajunge și țevi care țin apă.
keywords: constructibilitate, cheie, cheie tubulară, acces la șuruburi, strângere, dimensiune sudură, sudură de colț, sudură minimă, sudură maximă, apă, gaură de aerisire, gaură de scurgere, galvanizare, secțiune tubulară, probleme
from: 72315151
---

DetailCraft caută patru feluri de probleme pe care nicio verificare de rezistență nu le găsește și le listează în panoul {{ui:Probleme}}. Sunt avertismente și note de privit, nu erori: modelul se construiește oricum.

## Un șurub la care cheia nu ajunge

Pentru fiecare șurub, DetailCraft pune o cheie tubulară peste cap și peste piuliță. Cheia este un cilindru la fel de lat ca piulița pe diagonală, plus un perete de 4 mm, lung de 60 mm. Dacă inima unei grinzi, o talpă, o placă sau o contravântuire stă în interiorul acelui cilindru, problema numește racordul, câte șuruburi, ce piesă stă în cale și la ce distanță este de șurub.

Cheia este o cheie cu impact tipică. O cheie fixă are nevoie de mai puțin spațiu, o unealtă mai mare are nevoie de mai mult. Cereți asistentului conectat să ruleze `constructability_check` cu alt `socketLength`, ca să vedeți cum se schimbă răspunsul.

## Șuruburi prea apropiate pentru cheie

Cheia pusă peste un șurub nu trebuie să atingă capul următorului. Șuruburile unui racord care sunt mai apropiate decât lățimea cheii plus capul vecinului sunt listate cu distanța găsită și cu distanța necesară.

## Dimensiuni ale sudurilor de colț

AISC 360-16 Tabelul J2.4 stabilește cea mai mică sudură de colț după grosimea piesei mai subțiri (3 mm până la 6.35 mm grosime, 5 mm până la 12.7, 6 mm până la 19.05, 8 mm peste), iar J2.2b cea mai mare de-a lungul unei margini de material: nu mai mare decât materialul când acesta este mai subțire de 6.35 mm, altfel cu 1.6 mm mai puțin. Racordurile cu aceeași dimensiune pe aceeași grosime sunt listate ca o singură problemă.

Grosimea folosită este cea mai subțire piesă numită de sudură, deci o sudură de 8 mm pe tot conturul unei grinzi cu inimă de 6.35 mm este listată.

## Apă și aerisiri

- Un **capăt superior deschis** al unei secțiuni tubulare care stă vertical sau este înclinat cu mai mult de 10° lasă ploaia să intre.
- O secțiune tubulară **închisă la ambele capete** are nevoie de o gaură de aerisire și una de scurgere; galvanizarea la cald și presiunea aerului încălzit cer amândouă.

## Poate sudorul să ajungă?

O sudură de colț se face cu aparatul la jumătatea distanței dintre cele două fețe pe care le unește. Pentru fiecare sudură de colț pe tot conturul (o placă de capăt, o placă de bază, o placă de înclinare), verificarea ia conturul secțiunii elementului la placă și, din 20 în 20 mm, trasează o cale a aparatului spre exterior, la 45°, de unde duza sa (rază de 10 mm la început) eliberează întâi ambele fețe, pe încă 30 mm. Dacă această cale atinge propria talpă a grinzii sau altă piesă, acea parte din sudură este listată cu piesa și distanța. Aceste numere sunt tipice, nu ale unui standard: cereți fabricantului procesul și duza. Sudurile de-a lungul a două margini (o placă de forfecare) nu sunt localizate și nu sunt verificate.
