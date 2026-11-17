---
title: Tinklelių ir lygių nustatymas
summary: Įveskite tinklelio linijas, jų atstumus ir lygius, kuriuose įdedamas kiekvienas elementas.
keywords: tinklelis, tinkleliai, ašys, tinklelio linijos, lygiai, aukščiai, aukštai, perdangos, atstumai, nustatymas
from: 9cad233c
---

Kiekvienas DetailCraft elementas įdedamas tinklelio sankirtoje tam tikrame lygyje. Pirmiausia nustatykite tinklelius ir lygius; vėliau juos galima keisti.

## Kaip čia veikia tinkleliai

- **Numeruotos linijos** eina viena kryptimi, **raidinės linijos** – kita. Pavadinimai – tik įprotis: žymė gali būti bet koks tekstas iki 8 simbolių (1, 2, 3 arba A1, A2, arba 10, 20).
- Įvedate žymes ir atstumus tarp jų, o ne koordinates. Pirmoji kiekvieno rinkinio linija yra 0.
- Numeruotos linijos – pastovaus x linijos; raidinės linijos – pastovaus y linijos. Taigi sija nuo tinklelio 1 iki 2 eina išilgai x, o sija nuo A iki B – išilgai y.
- Visos reikšmės – milimetrais.

Naujas modelis prasideda nuo numeruotų linijų 1 2 3 su 6000 6000, raidinių linijų A B su 6000 ir dviejų lygių.

## Tinklelių nustatymas

1. Kairėje esančiame skydelyje {{ui:Modelis}} atidaryti {{ui:Tinkleliai}}, jei jis sutrauktas.
2. Lauke {{ui:Numeruotos linijos}} įveskite žymes, atskirtas tarpais, pavyzdžiui `1 2 3 4 5`.
3. Lauke {{ui:Atstumai}} po juo įveskite po vieną atstumą kiekvienam tarpui, pavyzdžiui `6000 6000 7500 6000`. Keturi tarpai penkioms linijoms.
4. Tą patį atlikite {{ui:Raidinės linijos}} ir jų {{ui:Atstumai}} laukuose, pavyzdžiui `A B C` ir `8000 8000`.
5. Pasirinkti {{ui:Taikyti tinklelius}}.

Būsenos juostoje rodoma „Tinkleliai atnaujinti.“ ir vaizdas priartėja prie naujo tinklelio. Kableliai taip pat veikia kaip skirtukai.

Jei kas nors nesutampa, niekas nekeičiama, o būsenos juostoje nurodoma priežastis, pavyzdžiui: „Numeruoti tinkleliai: nurodykite po vieną atstumą tarp kiekvienos linijų poros (4).“ Kiti tikrinimai: atstumai turi būti teigiami milimetrai, žymės turi skirtis, o kiekviena kryptimi gali būti ne daugiau kaip 60 linijų.

:::note
Elementai išlaiko savo koordinates, kai tinkleliai perkeliami. Jei pakeisite atstumą įdėję plieną, plienas lieka ten, kur buvo, ir nebėra tinklelyje. Pirmiausia keiskite tinklelį arba perkelkite elementus redaguodami jų galų koordinates.
:::

## Lygių nustatymas

1. Atidaryti {{ui:Lygiai}} skydelyje {{ui:Modelis}}.
2. Kiekvienoje eilutėje yra lygio pavadinimas ir jo aukštis milimetrais. Redaguokite pagal poreikį.
3. Pasirinkti {{ui:Pridėti lygį}}, kad pridėtumėte dar vieną eilutę. Ji pavadinama „3 lygis“ (ir taip toliau) ir įdedama 4000 mm virš aukščiausio lygio; prireikus pakeiskite abu.
4. Norėdami pašalinti lygį, pasirinkite × mygtuką eilutės gale.
5. Pasirinkti {{ui:Taikyti lygius}}.

Nieko nepasikeičia, kol nepasirinksite {{ui:Taikyti lygius}}. Taikant lygiai surikiuojami pagal aukštį. Kiekvienas lygis turi turėti pavadinimą, du lygiai negali turėti to paties pavadinimo, o bent vienas lygis turi likti.

Lygiai gali būti žemiau nulio (rūsys ties `-3500`) ir nebūtina, kad jie būtų vienodai nutolę.

## Kaip naudojami lygiai

- Kolona, įdėta lygyje, tęsiasi iki kito lygio arba iki lygio, pasirinkto lauke {{ui:Iki}}.
- Sijos ir plokštės įdedamos tarp dviejų sankirtų lygyje, kurį spustelėjate.
- Pamatai įdedami taip, kad jų viršus būtų spustelėtame lygyje.
- {{ui:Planas}} žiūri žemyn į vieną lygį vienu metu.
- IFC eksportas kiekvienam lygiui sukuria vieną pastato aukštą.

## Atšaukimas

Tinklelio ir lygių pakeitimai yra kaip ir bet kurie kiti pakeitimai: {{key:Mod+Z}} grąžina ankstesnį tinklelį.

## Toliau

[Place columns, beams and braces](topic:place-members)
