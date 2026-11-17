---
title: Laiptai
summary: Įdėkite tiesius plieninius laiptus pagal pakilimą, pakopos gylį ir plotį – du stringeriai ir pakopų plokštės, viena suvirinta surinkimo detalė.
keywords: laiptai, laiptų kopėčios, stringeris, pakopa, pakyla, nuotolis, pakopos gylis, briauna, ruožas, plieniniai laiptai, ibc 1011, blondel
from: 62fa3845
---

Tiesūs plieniniai laiptai: du stringeriai (kanalai, kurių flanšų galai nukreipti į vidų, arba plokščiosios juostos ant krašto) ir plokštės pakopa kiekvienam žingsniui, suvirinta tarp jų. DetailCraft apskaičiuoja pakylų skaičių pagal pakilimą, patikrina juos pagal statybos normų ribas ir padaro laiptus viena dirbtuvių surinkimo detale.

## Įdėkite laiptus

1. Pasirinkite {{ui:Laiptai}} grupėje {{ui:Įdėti}} arba paspauskite {{key:S}}.
2. Nustatykite laiptus dešinėje: **kopimo kryptį** (0° kyla išilgai +x, 90° išilgai +y), **pakilimą** (0 = iki kito lygio), **pakopos gylį**, **švarų plotį** tarp stringerių, **didžiausią leistiną pakylą**, **stringerį**, **pakopos plokštės storį**, **briauną** ir medžiagą.
3. Spustelėkite tinklelio sankirtą: tai pirmosios pakylos pėda, laiptų ašies linijoje.

Būsenos juostoje rodoma, kiek pakylų sukurta. Pasirinkite laiptus (spustelėkite stringerį ar pakopą), kad pakeistumėte bet kurį jų nustatymą, padėtį ar fazę; savybėse rodomos ir pakylos, pakopos, horizontalus ilgis, nuolydis ir 2 × pakyla + pakopos gylis.

## Ką apskaičiuoja DetailCraft

- **Pakylos.** Kiek mažiausiai, kad kiekviena pakyla būtų ne didesnė nei didžiausia leistina: 3000 mm pakilimas esant 178 mm ar mažiau duoda 17 pakylų po 176.5 mm. Pakopų yra vienu mažiau nei pakylų (viršutinis aukštas yra paskutinis žingsnis).
- **Pakopos.** Plokštė, kurios gylis lygus pakopos gyliui + briauna (pagal numatytuosius 280 + 25 = PL6x305), o ilgis – švariam pločiui; jos viršus kiekvienos pakylos aukštyje, o priekinis kraštas (briauna) – priešais pakylos liniją.
- **Stringeriai.** Nuolydžiu nuo vietos, kur jie susitinka su žemesniu aukštu, iki vietos, kur jie susitinka su aukštesniu aukštu, tiesiai už švaraus pločio; jų viršutinis kraštas – 50 mm virš briaunų linijos. Kanalo flanšų galai nukreipti į vidų; plokščioji juosta, pavyzdžiui PL12x250, stovi ant krašto.
- **Suvirinimai.** Kiekviena pakopa prie abiejų stringerių. Pakopos ir dešinysis stringeris suvirinami prie kairiojo stringerio, todėl laiptai gauna vieną surinkimo žymą (ST1) ir savo surinkimo brėžinį; stringeriai gauna detalių žymas st…, pakopos – p….
- **Patikrinimai.** Įspėjimai, kai pakyla yra už 4–7 in. (102–178 mm) ribų arba pakopos gylis mažesnis nei 11 in. (279 mm) – IBC 2021 skyriaus 1011.5.2 ribos; kai 2 × pakyla + pakopos gylis yra už 600–650 mm ribų (įprasta patogumo taisyklė); ir kai stringeris per žemas, kad atlaikytų pakopas. Nežinomas stringerio profilis sustabdo laiptų kūrimą.

## Verta žinoti

- Perkėlimas, pasukimas, atspindys, kopijavimas, įklijavimas, trynimas ir fazės veikia su laiptais kaip su elementu. Pasukimas pasuka kopimą; atspindys nukreipia jį atspindėta kryptimi.
- Stringeriai eksportuojami į IFC kaip IfcMember, o pakopos – kaip IfcPlate; abu patenka į NC failus ir medžiagų sąrašą. [Susidūrimų patikra](topic:clash-check) nepaliečia pačių laiptų detalių (jos suvirintos tarpusavyje).
- Šie paprasti laiptai – vienas ruožas su plokštinėmis pakopomis. Aikštelėms, turėklams su balustrais, lenktoms ar grotelių pakopoms, pasirenkamam taisyklių rinkiniui, pjovimo sąrašui ir stringerių skylių brėžiniams pažymėkite {{ui:Naudoti plieninių laiptų generatorių}} laiptų įrankyje (žr. Plieninių laiptų generatorius).
- Stringeriai pjaunami statmenai: jų galų pjūviai prie aukštų neatliekami.
- DetailCraft laiptų nesuprojektuoja: stringeriai ir pakopos netikrinami dėl stiprumo ar linkio.
