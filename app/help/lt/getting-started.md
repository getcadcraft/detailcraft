---
title: Pradžia su DetailCraft
summary: Ką DetailCraft daro šiandien, kaip jį atidaryti ir pirmasis modelis nuo tinklelių iki dirbtuvių brėžinio per dešimt minučių.
keywords: pradžia, pirmasis modelis, įvadas, plieno detalizavimas, armatūra, greitas startas, pamoka, apžvalga
from: 3682c0d8
---

DetailCraft yra plieno ir armatūros detalizavimo programa CadCraft produktų šeimoje. Kuriate plieninio karkaso 3D modelį ant tinklelių ir lygių, sujungiate jį ir gaunate tai, ko reikia dirbtuvėms: detalių ir surinkimų žymenis, medžiagų sąrašą, atskirų detalių dirbtuvių brėžinius, DSTV NC failus, IFC modelį ir pamatų lenkimo žiniaraštį.

Tai ankstyva versija. Ji atlieka trumpą darbų sąrašą kruopščiai, o ne viską iš karto. Prieš planuodami tikrą darbą, perskaitykite [Kas dar neįgyvendinta](topic:not-built-yet).

## Ką jis daro šiandien

- Tinkleliai ir lygiai, kuriuos įvedate milimetrais.
- Kolonos, sijos, įstrižainės ir plokštės iš paskelbtų profilių katalogų (AISC W, S, C, L, HSS ir Pipe; europiniai IPE, HEA, HEB ir UPN), taip pat jūsų pasirinktiniai parametriniai profiliai.
- Du jungiai: varžtais tvirtinama galinė plokštė nuo sijos iki kolonos flanšo ir kolonos pagrindo plokštė su keturiais inkariniais strypais. Kiekvieną galima nukopijuoti į visas panašias jungtis.
- Skylės ir iškirpimai, įvedami pagal padėtį.
- Stačiakampiai pamatai su apatiniu armatūros tinkliu ir užvedimo strypais.
- Detalių ir surinkimų žymenys, kurie po kiekvieno pakeitimo atsinaujina patys.
- Eksportai: IFC4, DSTV NC failai (I formos profiliams ir plokštėms), medžiagų sąrašas CSV formatu, lenkimo žiniaraštis CSV formatu ir vienos detalės dirbtuvių brėžinio PDF.

## Atidarykite DetailCraft

1. Atidarykite DetailCraft darbalaukio naršyklėje: Chrome, Edge, Firefox arba Safari. Žr. [Naršyklės ir kompiuteriai](common:browsers).
2. Palaukite, kol ekranas užsipildys. Apatinėje būsenos juostoje parašyta: „Paruošta. Atidarykite pavyzdį arba nustatykite tinklelius ir lygius bei pradėkite dėti elementus.“

Modelio vaizdui reikia 3D grafikos (WebGL). Jei ekrano viduryje parašyta: „Ši naršyklė negalėjo paleisti 3D grafikos (WebGL)“, žr. [Trikčių šalinimas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Jūsų modeliai lieka jūsų kompiuteryje. Modelio atidarymas nuskaito jį naršyklėje, o įrašymas atsisiunčia failą. Nieko neįkeliama. Debesies saugojimas dar nepasiekiamas. Žr. [Kur saugomi jūsų failai](common:your-files). Norėdami vėliau naudoti DetailCraft be ryšio, būdami prisijungę vieną kartą spustelėkite {{ui:Įrašyti neprisijungus}} programos juostoje; žr. [Darbas neprisijungus](common:offline).
:::

:::offline
Jūs esate neprisijungę. DetailCraft veikia be ryšio tik tuo atveju, jei prieš tai buvo įrašytas darbui neprisijungus: mygtukas {{ui:Įrašyti neprisijungus}} programos juostoje tada rodo {{ui:Paruošta neprisijungus}}. Žr. [Darbas neprisijungus](common:offline).
:::

## Pirmiausia pažvelkite į pavyzdį

Greičiausias būdas pamatyti, ką sukuria DetailCraft, – pavyzdinis karkasas.

1. Įrankių juostos grupėje {{ui:Failas}} pasirinkite {{ui:Pavyzdys}}.
2. Vaizde rodomas dviejų angų karkasas: šeši stulpai su pagrindo plokštėmis, keturios sijos su galinėmis plokštėmis, viena įstrižainė ir septyni pamatai su armatūra.
3. Spustelėkite sijai. Dešinėje esantis {{ui:Savybės}} skydelis rodo jos detalės žymenį, pjovimo ilgį, svorį ir skyles, kurias padarė galinės plokštės.
4. Atidarykite skirtuką {{ui:Medžiagų sąrašas}} apačioje, kad pamatytumėte kiekvieną detalės žymenį su kiekiu ir svoriu.

Vadovas [Pavyzdinio karkaso apžiūra](topic:sample-model) aprašo jį detalė po detalės.

## Jūsų pirmasis modelis

Naujame modelyje jau yra tinkleliai 1–3 pagal A–B po 6000 mm ir du lygiai: Lygis 1 aukštyje 0 ir Lygis 2 – 4000.

1. Pasirinkite {{ui:Naujas}}. Jei dabartiniame modelyje yra pakeitimų, DetailCraft klausia, ar pirmiausia juos įrašyti.
2. Virš vaizdo pasirinkite {{ui:Planas}}. Šalia esantis lygių sąrašas parenka Lygį 1.
3. Įrankių juostoje pasirinkite {{ui:Kolona}} arba paspauskite {{key:C}}.
4. Spustelėkite tinklelio susikirtimą A/1. Atsiranda W12x50 kolona nuo Lygio 1 iki Lygio 2. Būsenos juostoje parašyta, kur ji įdėta.
5. Spustelėkite B/1, A/2 ir B/2, kad įdėtumėte dar tris.
6. Lygių sąraše pasirinkite Lygį 2, tada pasirinkite {{ui:Sija}} arba paspauskite {{key:B}}.
7. Spustelėkite A/1, tada A/2. W16x26 sija sujungia dviejų kolonų viršūnes, jos plieno viršus yra lygyje.
8. Paspauskite {{key:Esc}}, kad grįžtumėte į {{ui:Pasirinkti}}, tada spustelėkite sijai.
9. Grupėje {{ui:Jungti}} pasirinkite {{ui:Galinės plokštės}}. Abiejuose galuose atsiranda varžtais tvirtinama galinė plokštė, sija nukerpama, kad tilptų, o pirmoji galinė plokštė dabar pažymėta.
10. Spustelėkite sijai dar kartą.
11. Grupėje {{ui:Išvestis}} pasirinkite {{ui:Dirbtuvių brėžinys}}. Atsidaro sijos dirbtuvių brėžinio peržiūra. Pasirinkite {{ui:Atsisiųsti PDF}}.
12. Paspauskite {{key:Mod+S}}, kad įrašytumėte modelį. Naršyklė atsisiunčia `Untitled.detailcraft.json`.

Prieš įrašydami pervardykite modelį laukelyje {{ui:Pavadinimas}} viršuje kairėje, kad failas ir visi eksportai turėtų jo pavadinimą.

## Kur toliau

- [Ekrano apžvalga](topic:workspace)
- [Tinklelių ir lygių nustatymas](topic:grids-and-levels)
- [Judėjimas 3D vaizde](topic:navigate-3d), su pele, jutikliniu kilimėliu arba jutikliniu ekranu
- [Iš kitos detalizavimo programinės įrangos](topic:coming-from), jei žinote didelį detalizavimo paketą
- [Šio žinyno naudojimas](common:help)
