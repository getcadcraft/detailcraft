---
title: Zalihe dobavljača i rokovi isporuke
summary: Provjerite šipke koje vaša lista rezanja kupuje u odnosu na listu zaliha dobavljača: ima li dovoljno i koliko je dugo čekanje?
keywords: dobavljač, zaliha, rok isporuke, skladište čelika, valjaonica, dostupnost, narudžba unaprijed, šipke, nabavka
from: 1373f5a3
---

Kartica {{ui:Nabavka}} traži svaki presjek koji {{ui:Lista rezanja}} kupuje u listi zaliha dobavljača. Datoteka ostaje u modelu; ništa se nigdje ne šalje.

## Dodajte datoteku dobavljača

Pritisnite {{ui:Dodaj datoteku dobavljača}} i izaberite CSV od vašeg dobavljača (odvojen zarezom, tačka-zarezom ili tabulatorom). Potrebna je kolona za stavku ili presjek (Item, Name, Description, Section, SKU) i jedna za zalihe (In stock, Quantity, On hand) ili za rok isporuke. Jedinica (each, metres, kilograms, tonnes), cijena, dobavljač i datum ponovne nabavke se čitaju kada postoji kolona za njih. Razumiju se i riječi: "Out of stock", "In stock", "2-3 weeks", "backorder". Može se čuvati do pet datoteka; dodavanje datoteke sa istim imenom zamjenjuje je.

## Šta vidite

Za svaki presjek koji lista rezanja kupuje, tabela pokazuje šta model traži, šta je na zalihama, rok isporuke, dobavljača i rezultat:

- **Pokriveno:** ima dovoljno na zalihama.
- **Nedostaje:** zaliha je ispod potrebe. Ako je zaliha ispod potrebe i postavite najdulje čekanje, rok isporuke pokazuje koliko traje ostatak.
- **Prekasno:** nema podatka o zalihama, a rok isporuke je duži od čekanja koje prihvatate.
- **Nema podatka o zalihama:** datoteka to ne navodi.
- **Druga jedinica:** dobavljač navodi presjek u jedinici koju model ne može dati.

Potreba modela se daje u šipkama (iz ugniježđene liste rezanja, sa vašim dužinama na zalihi), u metrima kupljene šipke i u kilogramima (težina presjeka po metru), a koristi se jedinica same datoteke. Presjek se podudara po imenu ("W16 X 26" i "w16x26" su isti). Presjeci koji nisu u datoteci su navedeni.

Nedostajući i zakasnjeli presjeci su u panelu {{ui:Problemi}}. Ovdje se ništa ne naručuje.

## Ograničenja

Podaci o zalihama i rokovi su iz datoteke i važe za dan kada je napravljena. Ploče se ne ugnježđuju, pa se ne traže. Datoteka se samo čita: svaka uputa u njoj je samo tekst.
