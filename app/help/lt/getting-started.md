---
title: Pradžia su DetailCraft
summary: Ką DetailCraft daro šiandien, kaip jį atidaryti ir kaip per dešimt minučių sukurti pirmąjį modelį nuo tinklelių iki dirbtuvių brėžinio.
keywords: pradžia, pirmas modelis, įvadas, plieno detalizavimas, armatūra, greita pradžia, pamoka, apžvalga
from: e4f16bbe
---

DetailCraft yra plieno ir armatūros detalizavimo programa, priklausanti CadCraft šeimai. Kuriate plieninio karkaso 3D modelį su tinkleliais ir lygiais, sujungiate jį ir gaunate tai, ko reikia dirbtuvėms: detalių ir surinkimų žymenis, medžiagų sąrašą, atskirų detalių dirbtuvių brėžinius, DSTV NC failus, IFC modelį ir pamatų armatūros žiniaraštį.

Tai ankstyva versija. Ji atlieka trumpą darbų sąrašą kruopščiai, o ne viską iš karto. Prieš planuodami tikrą darbą, perskaitykite [Kas dar neįgyvendinta](topic:not-built-yet).

## Ką daro šiandien

- Tinkleliai ir lygiai, įvedami milimetrais.
- Kolonos, sijos, įstrižainės ir plokštės iš paskelbtų profilių katalogų (AISC W, S, C, L, HSS ir Pipe; europiniai IPE, HEA, HEB ir UPN; JK UB, UC, PFC, EA, UEA, SHS, RHS ir CHS), taip pat jūsų pačių parametriniai profiliai.
- Dvi jungtys: varžtinė galinė plokštė nuo sijos iki kolonos flanšo ir kolonos pagrindo plokštė su keturiais kotvų strypais. Kiekvieną galima nukopijuoti į visas panašias sujungimo vietas.
- Skylės ir iškirpimai, įvedami pagal padėtį.
- Stačiakampiai plokšti pamatai su apatiniu tinkleliu ir įleidžiamais strypais.
- Detalių ir surinkimų žymenys, kurie atsinaujina patys po kiekvieno pakeitimo.
- Eksportai: IFC4, DSTV NC failai (dvitėjai ir plokštės), medžiagų sąrašas CSV, lenkimo žiniaraštis CSV ir vienos detalės dirbtuvių brėžinio PDF.

## Atidarykite DetailCraft

1. Atidarykite DetailCraft darbalaukio naršyklėje: Chrome, Edge, Firefox arba Safari. Žr. [Naršyklės ir kompiuteriai](common:browsers).
2. Palaukite, kol ekranas užsipildys. Apatinėje būsenos juostoje rašoma: „Pasiruošta. Atidarykite pavyzdį arba nustatykite tinklelius ir lygius bei pradėkite dėti elementus.“

Modelio vaizdui reikalinga 3D grafika (WebGL). Jei ekrano viduryje rodoma „Šioje naršyklėje nepavyko paleisti 3D grafikos (WebGL)“, žr. [Trikčių šalinimas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Jūsų modeliai lieka jūsų kompiuteryje. Modelio atidarymas nuskaito jį naršyklėje, o įrašymas atsisiunčia failą. Nieko neįkeliama. Debesies įrašymas dar neprieinamas. Žr. [Kur keliauja jūsų failai](common:your-files). Norėdami vėliau naudoti DetailCraft be ryšio, būdami prisijungę kartą programos juostoje pasirinkite {{ui:Įrašyti neprisijungus}}; žr. [Darbas neprisijungus](common:offline).
:::

:::offline
Esate neprisijungę. DetailCraft veikia be ryšio tik tuo atveju, jei prieš tai buvo įrašytas darbui neprisijungus: mygtukas {{ui:Įrašyti neprisijungus}} programos juostoje tada rodo {{ui:Paruošta neprisijungus}}. Žr. [Darbas neprisijungus](common:offline).
:::

## Pirmiausia pažiūrėkite pavyzdį

Greičiausias būdas pamatyti, ką sukuria DetailCraft, yra pavyzdinis rėmas.

1. Įrankių juostos grupėje {{ui:Failas}} pasirinkite {{ui:Pavyzdys}}.
2. Vaizde rodomas dviejų laukų rėmas: šešios kolonos su pagrindo plokštėmis, keturios sijos su galinėmis plokštėmis, viena įstrižainė ir septyni pamatai su armatūra.
3. Spustelėkite sijos. Dešinėje esantis skydelis {{ui:Savybės}} rodo jos detalės žymenį, pjovimo ilgį, svorį ir skyles, kurias padarė galinės plokštės.
4. Apačioje atidarykite skirtuką {{ui:Medžiagų sąrašas}}, kad pamatytumėte kiekvieną detalės žymenį su kiekiu ir svoriu.

Vadovas [Pavyzdinio rėmo apžvalga](topic:sample-model) aprašo jį dalis po dalies.

## Jūsų pirmasis modelis

Naujame modelyje jau yra tinkleliai 1–3 pagal A–B po 6000 mm ir du lygiai: 1 lygis nuo 0 ir 2 lygis nuo 4000.

1. Pasirinkite {{ui:Naujas}}. Jei dabartiniame modelyje yra pakeitimų, DetailCraft klausia, ar juos pirmiausia įrašyti.
2. Virš vaizdo pasirinkite {{ui:Planas}}. Šalia esantis lygių sąrašas parenka 1 lygį.
3. Įrankių juostoje pasirinkite {{ui:Kolona}} arba paspauskite {{key:C}}.
4. Spustelėkite tinklelio susikirtimą A/1. Atsiranda kolona W12x50 nuo 1 lygio iki 2 lygio. Būsenos juostoje rodoma, kur ji įdėta.
5. Spustelėkite B/1, A/2 ir B/2, kad įdėtumėte dar tris.
6. Pasirinkite 2 lygį lygių sąraše, tada pasirinkite {{ui:Sija}} arba paspauskite {{key:B}}.
7. Spustelėkite A/1, tada A/2. Atsiranda sija W16x26, jungianti dvi kolonų viršūnes, jos plieno viršus yra lygyje.
8. Paspauskite {{key:Esc}}, kad grįžtumėte į {{ui:Pasirinkti}}, tada spustelėkite sijos.
9. Grupėje {{ui:Jungti}} pasirinkite {{ui:Galinės plokštės}}. Abiejuose galuose atsiranda varžtinė galinė plokštė, sija nupjaunama pagal vietą, o pirmoji galinė plokštė dabar pažymėta.
10. Vėl spustelėkite sijos.
11. Grupėje {{ui:Išvestis}} pasirinkite {{ui:Dirbtuvių brėžinys}}. Atsidaro sijos dirbtuvių brėžinio peržiūra. Pasirinkite {{ui:Atsisiųsti PDF}}.
12. Paspauskite {{key:Mod+S}}, kad įrašytumėte modelį. Naršyklė atsisiunčia `Untitled.detailcraft.json`.

Prieš įrašydami pervardykite modelį lauke {{ui:Pavadinimas}} viršuje kairėje, kad failas ir kiekvienas eksportas turėtų jo vardą.

## Kur eiti toliau

- [Ekrano apžvalga](topic:workspace)
- [Tinklelių ir lygių nustatymas](topic:grids-and-levels)
- [Judėjimas 3D vaizde](topic:navigate-3d) su pele, jutikliniu kilimėliu ar jutikliniu ekranu
- [Iš kitos detalizavimo programinės įrangos](topic:coming-from), jei dirbate su kuria nors dideliu detalizavimo paketu
- [Šio žinyno naudojimas](common:help)
