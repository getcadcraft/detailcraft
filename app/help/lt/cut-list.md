---
title: Pjovimo sąrašas
summary: Išdėliokite sijas, kolonas, įstrižines sijas ir laiptų skersinius į standartinio ilgio profilius su pjovimo plyša ir matykite, kiek strypų reikia nupirkti ir kiek lieka atliekų.
keywords: pjovimo sąrašas, išdėstymas, standartinis ilgis, strypas, pjovimo plyša, pjūklas, likutis, atraiža, atliekos, jungimas, pirkimas, keli
from: 81d06ce5
---

Skirtukas {{ui:Pjovimo sąrašas}}, esantis po vaizdu, apskaičiuoja, kaip pjauti modelio tiesiųjų elementų strypus iš standartinių ilgių: kiek kiekvieno ilgio strypų nupirkti kiekvienam profiliui ir medžiagai, kas tenka kiekvienam strypui ir kokios atliekos.

## Nustatykite sandėlio ilgius

Skirtuko viršuje:

- **Standartiniai ilgiai (mm):** ilgiai, kuriuos galite nupirkti, atskirti tarpais, pavyzdžiui `6000 12000`, arba 20 ft ir 40 ft strypai kaip `6096 12192`. Iki aštuonių.
- **Pjovimo plyša (mm):** kiek kiekvienas pjūvis pašalina (pradžioje 3).
- **Galo apkarpymas (mm):** nupjaunamas kiekvieno strypo galas prieš pirmąją detalę (pradžioje 0).
- **Likučius laikyti nuo (mm):** likutis, kuris yra bent tokio ilgio, grąžinamas į sandėlį; trumpesnis laikomas laužu (pradžioje 500).

Šios reikšmės saugomos šioje naršyklėje, kaip ir kiti [parametrai](topic:settings).

## Kaip išdėliojama

- Kiekviena sija, kolona, įstrižinė sija ir laiptų skersinis, pagal elemento žymenį ir kiekį; plokštės pjaunamos iš lakšto ir čia neišdėliojamos.
- Kiekvienas profilis ir medžiaga atskirai.
- Ilgiausios detalės pirmiausia, kiekviena į pirmą strypą, kuriame ji telpa; naujas strypas pradedamas nuo ilgiausio standartinio ilgio. Tada kiekvienas strypas perkertamas kaip trumpiausias standartinis ilgis, kuriame dar telpa jo pjūviai.
- Kiekvienas pjūvis atima pjovimo plyšą (po pjūvio, kuris baigiasi tiksliai strypo gale, plyšos nėra); kiekvienas strypas netenka galo apkarpymo.
- Detalė, ilgesnė už bet kurį standartinį ilgį, rodoma skiltyje **Ilgesnis nei bet koks sandėlio ilgis** ir neišdėliojama: ją sujunkite (žr. [Sujungimai](topic:splices)) arba pridėkite ilgesnį standartinį ilgį.

## Kaip skaityti

- **Suvestinė:** pagal profilį ir medžiagą – detalės, strypai, kuriuos reikia nupirkti (pavyzdžiui, „2 × 12000, 1 × 6000“), nupirkti ir panaudoti metrai bei atliekos.
- **Strypai ir jų pjūviai:** kiekvienas strypas, jo standartinis ilgis, jo pjūviai kaip elemento žymuo ir ilgis, bei likutis – išsaugomas arba laužas.

{{ui:Atsisiųsti CSV}} įrašo abi lenteles kaip `<name> cut list.csv`.

DetailCraft neišdėlioja plokščių į lakštus ir nemaišo profilių ar medžiagų viename strype.
