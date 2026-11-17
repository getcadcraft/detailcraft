---
title: Zalihe dobavljača i rokovi isporuke
summary: Provjerite šipke koje vaša lista za rezanje kupuje u popisu zaliha dobavljača: ima li dovoljno i koliko se čeka?
keywords: dobavljač, zaliha, rok isporuke, čeličana, proizvođač, dostupnost, čekanje, šipke, nabava, opskrba
from: 1373f5a3
---

Kartica {{ui:Nabava}} pretražuje svaki presjek koji {{ui:Popis za rezanje}} kupuje u popisu zaliha dobavljača. Datoteka ostaje u modelu; ništa se nigdje ne šalje.

## Dodajte datoteku dobavljača

Pritisnite {{ui:Dodaj datoteku dobavljača}} i odaberite CSV od svog dobavljača (odvojen zarezom, točkom sa zarezom ili tabulatorom). Potreban je stupac za stavku ili presjek (Item, Name, Description, Section, SKU) i jedan za zalihe (In stock, Quantity, On hand) ili za rok isporuke. Jedinica (each, metres, kilograms, tonnes), cijena, dobavljač i datum ponovne opskrbe čitaju se kada postoji stupac za njih. Prepoznaju se i riječi: "Out of stock", "In stock", "2-3 weeks", "backorder". Može se čuvati do pet datoteka; dodavanje datoteke s istim imenom zamjenjuje je.

## Što vidite

Za svaki presjek koji lista za rezanje kupuje, tablica prikazuje što model traži, što je na zalihi, rok isporuke, dobavljača i rezultat:

- **Pokriveno:** dovoljno na zalihi.
- **Nedostaje:** zaliha je ispod potrebe. Ako je zaliha ispod potrebe i postavite najdulje čekanje, rok isporuke pokazuje koliko traje ostatak.
- **Prekasno:** nema podatka o zalihi, a rok isporuke je dulji od čekanja koje prihvaćate.
- **Nema podatka o zalihi:** datoteka to ne navodi.
- **Druga jedinica:** dobavljač navodi presjek u jedinici koju model ne može dati.

Što model traži daje se u šipkama (iz popisa za rezanje s nestingom, s vašim duljinama zaliha), u metrima kupljene šipke i u kilogramima (masa presjeka po metru), a koristi se jedinica datoteke. Presjek se podudara prema imenu ("W16 X 26" i "w16x26" su isti). Presjeci koji nisu u datoteci navode se.

Nedostaci i prekasni presjeci nalaze se na ploči {{ui:Problemi}}. Ovdje se ništa ne naručuje.

## Ograničenja

Brojke zaliha i rokovi isporuke su datoteke i vrijede od dana kada je napravljena. Ploče se ne slažu, pa se ne traže. Datoteka se samo čita: svaka uputa u njoj je samo tekst.
