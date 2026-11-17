---
title: Preverjanje oznak in kosovnice
summary: Preberite oznake delov in sestavov, ki jih DetailCraft dodeli vsakemu kosu, preverite kosovnico in jo prenesite kot CSV.
keywords: oznake, številčenje, oznaka dela, oznaka sestava, oznaka kosa, kosovnica, seznam materiala, teže, seznam vijakov, csv, številčenje
from: caa2ee80
---

DetailCraft označi model sam. Ni ukaza za številčenje in ničesar ni treba zagnati: po vsaki spremembi ugotovi, kateri deli so isti kos jekla, in jim da eno oznako.

## Kje se oznake prikažejo

- Seznam {{ui:Oznake delov}} v podoknu {{ui:Model}}: vsaka oznaka z njenim profilom, dolžino in količino. Kliknite eno, da izberete prvi del s to oznako.
- Podokno {{ui:Lastnosti}} izbranega elementa (in seznam **Oznake delov** v levem podoknu): {{ui:Oznaka dela}} in {{ui:Sestav}}. Naslov podokna prav tako nosi oznako, na primer „Nosilec b1“.
- Zavihek {{ui:Kosovnica}}, CSV, imena datotek NC, delavniške risbe in izvoz IFC (kot oznaka vsakega elementa).

## Kako so deli označeni

- **Oznake delov:** c za stebre, b za nosilce, br za diagonale, st za tetive stopnic, p za plošče (vključno s čelnimi in podložnimi ploščami). Sledi številka: c1, c2, b1, p1 … Ko deli sodijo v več faz, je prej številka faze, na primer 2-b1.
- **Oznake sestavov:** C, B, BR ali P. Sestav je glavni element in plošče, zavarjene nanj, na primer nosilec z obema čelnima ploščama ali steber s podložno ploščo.
- Dva dela imata isto oznako, če imata enak profil, material in dolžino reza ter enake luknje in zareze, vse v okviru 1 mm, tudi če je eden obrnjen s koncem na konec ali na glavo glede na drugega.
- Številčenje teče najprej stebri, nato nosilci, diagonale in plošče; znotraj vsake skupine po imenu profila, najdaljši najprej.

Vsa pravila, vključno s tem, kateri obrati štejejo pri U-profilih in kotnikih: [Pravila označevanja](topic:mark-rules).

:::warning
Oznake se po vsaki spremembi izračunajo znova, zato se lahko oštevilčijo. Dodajanje dela, spreminjanje profila ali dodajanje luknje lahko premakne b3 v b4. Oznake štejte za dokončne šele, ko je model končan, in kosovnico, datoteke NC ter delavniške risbe izdelajte iz istega shranjenega modela.
:::

## Branje kosovnice

Odprite zavihek {{ui:Kosovnica}} spodaj. Ima tri preglednice.

**Deli**, s skupno težo jekla v naslovu:

| Stolpec | Pomen |
|---|---|
| Oznaka dela | Kliknite jo, da izberete prvi del s to oznako |
| Vrsta | nosilec, steber, diagonala, tetiva ali plošča |
| Profil | Na primer W16x26 ali PL20x180 |
| Material | Kakovost, ki ste jo nastavili |
| Dolžina (mm) | Dolžina reza po povezavah |
| Količina | Koliko |
| Teža enote (kg) | Masa profila na meter × dolžina |
| Skupna teža (kg) | Teža enote × količina |

Zadnja vrstica prikazuje skupno količino in težo.

**Sestavi:** vsaka oznaka sestava, njegov glavni del, vsi njegovi deli (na primer „b1 + p1 + p1“), količina, teža enote in skupna teža.

**Vijaki in sidrne palice:** združeni po vrsti, premeru, dolžini in kakovosti, s količino.

:::note
Teže so bruto: luknje in zarezi se ne odštejejo. Vijaki, matice, podložke in vari niso v teži jekla.
:::

## Prenos

Izberite {{ui:Prenesi CSV}} v zavihku ali {{ui:Kosovnica}} v skupini {{ui:Izhod}}. Datoteka `<name> BOM.csv` vsebuje tri preglednice druga za drugo, vsako pod njenim naslovom, z prazno vrstico vmes. Odpre se v katerem koli preglednični program.

## Preverjanje pred pošiljanjem

1. Odprite zavihek {{ui:Težave}} in odpravite vsako vrstico. Povezava, ki je ni bilo mogoče izdelati, ne doda plošče, lukenj ali vijakov, zato bo kosovnica prekratka.
2. Poiščite oznake, ki jih niste pričakovali. Dva nosilca, za katera mislite, da sta enaka, a imata različni oznaki, se običajno razlikujeta po luknji, zarezu ali dolžini reza; izberite vsakega in primerjajte.
3. Shranite model, nato naredite vse izvoze iz tega shranjenega stanja.
