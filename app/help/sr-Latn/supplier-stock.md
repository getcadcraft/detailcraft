---
title: Zalihe dobavljača i rokovi isporuke
summary: Proverite šipke koje vaša lista sečenja kupuje u spisku zaliha dobavljača: ima li dovoljno i koliko se čeka?
keywords: dobavljač, zaliha, rok isporuke, čeličana, proizvođač, dostupnost, nedostatak, šipke, nabavka, snabdevanje
from: 1373f5a3
---

Kartica {{ui:Snabdevanje}} proverava svaki presek koji {{ui:Lista sečenja}} kupuje u spisku zaliha dobavljača. Datoteka ostaje u modelu; ništa se nigde ne šalje.

## Dodaj datoteku dobavljača

Pritisnite {{ui:Dodaj datoteku dobavljača}} i izaberite CSV od svog dobavljača (odvojen zarezom, tačka-zarezom ili tabom). Potrebna je kolona za stavku ili presek (Item, Name, Description, Section, SKU) i jedna za zalihu (In stock, Quantity, On hand) ili za rok isporuke. Jedinica (each, metres, kilograms, tonnes), cena, dobavljač i datum ponovnog snabdevanja se čitaju kada postoji kolona za njih. Razumeju se i reči: "Out of stock", "In stock", "2-3 weeks", "backorder". Može se čuvati do pet datoteka; dodavanje datoteke istog naziva zamenjuje postojeću.

## Šta vidite

Za svaki presek koji lista sečenja kupuje, tabela prikazuje šta model traži, šta ima na zalihi, rok isporuke, dobavljača i rezultat:

- **Pokriveno:** dovoljno na zalihi.
- **Nedostaje:** zaliha je ispod potrebne količine. Ako je zaliha ispod potrebne količine i postavite najduže čekanje, rok isporuke pokazuje koliko traje ostatak.
- **Prekasno:** nema podatka o zalihi, a rok isporuke je duži od čekanja koje prihvatate.
- **Nema podatka o zalihi:** datoteka to ne navodi.
- **Druga jedinica:** dobavljač navodi presek u jedinici koju model ne može da da.

Potrebna količina se izražava u šipkama (iz ugnježdene liste sečenja, sa vašim dužinama zaliha), u metrima kupljene šipke i u kilogramima (težina preseka po metru), a koristi se jedinica same datoteke. Presek se uparuje po nazivu ("W16 X 26" i "w16x26" su isto). Preseci koji nisu u datoteci su navedeni.

Nedostajući i zakasneli preseci su u panelu {{ui:Problemi}}. Ovde se ništa ne naručuje.

## Ograničenja

Podaci o zalihama i rokovi isporuke su iz datoteke, onako kako su važili na dan kada je napravljena. Limovi se ne raspoređuju, pa se ne traže. Datoteka se samo čita: svako uputstvo u njoj je samo tekst.
