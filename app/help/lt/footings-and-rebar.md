---
title: Pamatų su armatūra įdėjimas
summary: Įdėkite stačiakampius plokštinius pamatus su apatiniu tinklu ir laukiamaisiais strypais, patikrinkite juos ir atsisiųskite lenkimo žiniaraštį.
keywords: pamatas, plokštinis pamatas, pamatai, armatūra, armavimas, strypai, tinklas, laukiamieji strypai, kaiščiai, lenkimo žiniaraštis, strypų sąrašas, betonas, lenkimai, danga
from: 41a048be
---

Šis skyrius skirtas stačiakampiams plokštiniams pamatams. Sijos, kolonos, perdangos ir sienos aprašytos [Detail reinforced concrete](topic:reinforced-concrete). Kiekvienas pamatas gauna apatinį tinklą abiem kryptimis ir, jei norite, laukiamuosius strypus, stūksančius iš jo. Strypų dydžiai – JAV pagal #3–#11.

## Pamato įdėjimas

1. Pasirinkti {{ui:Planas}} ir nurodyti pamato viršaus lygį.
2. Pasirinkti {{ui:Pamatas}} grupėje {{ui:Įdėti}} arba paspausti {{key:F}}.
3. Nustatyti pamatą skydelyje {{ui:Savybės}} (žr. toliau) arba palikti numatytuosius.
4. Spustelėti tinklelio sankirtą. Pamatas centruojamas joje, o jo viršus – lygyje. Būsenos juostoje rodoma, pavyzdžiui, „Pamatas 2000 x 2000 x 600 po A/1.“

Taip pat galima naudoti formą {{ui:Pridėti pagal ašis}} skydelio apačioje.

Pamatas nubraižomas permatomas, kad matytumėte jo strypus, kurie vaizduojami kaip vientisi vamzdžiai.

## Pamato parametrai

| Laukas | Numatytoji reikšmė | Pastabos |
|---|---|---|
| Ilgis L (mm) | 2000 | Išilgai x; nuo 300 iki 50000 |
| Plotis B (mm) | 2000 | Išilgai y; nuo 300 iki 50000 |
| Gylis H (mm) | 600 | Nuo 150 iki 10000 |
| Betonas | 4000 psi | Tekstas, įrašomas į IFC eksportą |

**Apatinis tinklas**

| Laukas | Numatytoji reikšmė | Pastabos |
|---|---|---|
| Ilgieji strypai | #5 | Strypai išilgai L, apatinis sluoksnis |
| Žingsnis (mm) | 250 | Didžiausias leistinas žingsnis; strypai išdėstomi tolygiai šiuo ar mažesniu žingsniu |
| Trumpieji strypai | #5 | Strypai išilgai B, uždedami ant ilgųjų strypų |
| Žingsnis (mm) | 250 | Kaip aukščiau |
| Danga (mm) | 75 | Grynoji danga kiekviename paviršiuje |
| Galiniai lenkimai | Įjungta | Abu kiekvieno tinklo strypo galai užlenkiami standartiniu 90° lenkimu (forma U); išjungus gaunami tiesūs strypai (forma S) |

**Laukiamieji strypai**

| Laukas | Numatytoji reikšmė | Pastabos |
|---|---|---|
| Laukiamieji strypai | Įjungta | Išjunkite pamatui be laukiamųjų strypų |
| Strypas | #6 | |
| Strypai išilgai L / Strypai išilgai B | 2 / 2 | Strypų tinklelis, centruotas pamate |
| Žingsnis išilgai L / Žingsnis išilgai B | 250 / 250 | Tarp strypų ašių |
| Iškyša virš viršaus | 600 | Kiek strypai stūkso virš pamato viršaus |
| Lenkimas apačioje | Įjungta | 90° lenkimas, nukreiptas į išorę, guli ant tinklo (forma L) |

Po laukais DetailCraft rodo ilgųjų strypų lenkimo kojelę, pavyzdžiui: „#5 lenkimo kojelė: 254 mm išorė iki išorės.“

## Įdėto pamato keitimas

Pasirinkite pamatą (spustelėkite jo betoną toliau nuo bet kurios kolonos arba vieną iš jo strypų). Gausite tuos pačius laukus ir dar {{ui:Centras x}}, {{ui:Centras y}}, {{ui:Viršus z}} ir {{ui:Pasukimas (°)}}. Žemiau pateikta lentelė su šio pamato strypais, jų žymėmis, kiekiais ir ilgiais bei betono tūris kubiniais metrais.

Kiekvienas pakeitimas tikrinamas prieš jį išsaugant. Pakeitimas, kurio negalima įgyvendinti, atmetamas, o būsenos juostoje nurodoma priežastis, pavyzdžiui: „Danga nepalieka vietos strypams šiame pamate.“, „Pamatas per seklus dviem strypų sluoksniams dangos viduje.“ arba „Laukiamieji strypai netelpa pamate su 75 mm danga.“

Pakeitimai, kuriuos galima įgyvendinti, bet kuriuos reikia peržiūrėti, išvardijami po pamatu ir skirtuke {{ui:Problemos}}:

- „#11 strypai, išdėstyti po 59.6 mm, palieka mažiau nei 35.8 mm laisvo tarpo (ACI 318-19 25.2.1).“ Laisvas tarpas tarp strypų turi būti bent strypo skersmuo ir bent 25.4 mm.
- „#5 lenkimams reikia 254 mm gylio; dangos viduje telpa tik 150 mm.“ Lenkimo kojelės tuomet nukerpamos, kad tilptų, todėl jos nebėra standartiniai lenkimai.
- „Laukiamųjų strypų lenkimai įsiremia į dangą.“
- „Laukiamieji strypai yra arčiau nei mažiausias laisvas tarpas.“

## Strypų žymės ir lenkimo žiniaraštis

Vienodi strypai (tas pats dydis, forma ir matmenys iki milimetro) visuose pamatuose turi tą pačią strypo žymę. Žymės rašomos `<strypo numeris>F<n>`: 5F1, 5F2 – #5 strypams, 6F1 – pirmajam #6 strypui ir t. t. Pamatai su tuo pačiu dydžiu, betonu, tinklu ir laukiamaisiais strypais turi tą pačią pamato žymę: F1, F2 …

1. Atidaryti apačioje esantį skirtuką {{ui:Lenkimo žiniaraštis}}. Kiekviena eilutė – viena strypo žymė: dydis, forma, matmenys A, B ir C, kiekis, pjovimo ilgis, bendras ilgis, masė vienam metrui, kiekvieno svoris, bendras svoris ir kam strypas naudojamas.
2. Pasirinkti skirtuke {{ui:Atsisiųsti CSV}} arba grupės {{ui:Išvestis}} meniu {{ui:Daugiau}} – {{ui:Lenkimas}}, kad gautumėte `<name> bending schedule.csv`.

Formos – DetailCraft savi kodai, o ne standarto: S – tiesi, L – vienas lenkimas, U – du lenkimai. Matmenys matuojami iš išorės iki išorės; pjovimo ilgis – tikslus ašies ilgis per lenkimus. Žr. [Rebar reference](topic:rebar-reference).

## Ko DetailCraft netikrina

- Įtvirtinimo ir persiklojimo ilgiai bei ar laukiamieji strypai pakankamai ilgi kolonai virš jų.
- Laisvo tarpo taisyklės užpildo dydžio dalis (ji nežino mišinio).
- Viskas, kas susiję su kolona ar pagrindo plokšte virš: pamatai ir plienas yra atskiri.

Taip pat žr. [What is not built yet](topic:not-built-yet).
