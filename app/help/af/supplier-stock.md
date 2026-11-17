---
title: Verskaffer se voorraad en leweringstye
summary: Kontroleer die voorraadstawe wat jou snylys koop teen ’n verskaffer se voorraadlys: is daar genoeg, en hoe lank is die wag?
keywords: verskaffer, voorraad, leweringstyd, staalwerf, meul, beskikbaarheid, agterstand, stawe, aankoop, voorsiening
from: 1373f5a3
---

Die {{ui:Voorsiening}}-oortjie soek elke afdeling wat die {{ui:Snylys}} koop op in ’n verskaffer se voorraadlys. Die lêer bly in die model; niks word êrens gestuur nie.

## Voeg die verskaffer se lêer by

Druk {{ui:Voeg ’n verskaffer se lêer by}} en kies ’n CSV van jou verskaffer (komma-, kommapunt- of tab-geskei). Dit benodig ’n kolom vir die item of afdeling (Item, Name, Description, Section, SKU), en een vir voorraad (In stock, Quantity, On hand) of vir die leweringstyd. Die eenheid (each, metres, kilograms, tonnes), die prys, die verskaffer en ’n herbestellingsdatum word gelees wanneer daar ’n kolom daarvoor is. Woorde word ook verstaan: "Out of stock", "In stock", "2-3 weeks", "backorder". Tot vyf lêers kan bewaar word; ’n lêer met dieselfde naam vervang die bestaande een.

## Wat jy sien

Vir elke afdeling wat die snylys koop, wys die tabel wat die model nodig het, wat in voorraad is, die leweringstyd, die verskaffer en ’n uitslag:

- **Gedek:** genoeg in voorraad.
- **Kort met:** die voorraad is onder die behoefte. As die voorraad onder die behoefte is en jy ’n langste wag stel, sê die leweringstyd vir jou hoe lank die res neem.
- **Te laat:** daar is geen voorraadsyfer nie, en die leweringstyd is langer as die wag wat jy aanvaar.
- **Geen voorraadsyfer nie:** die lêer sê dit nie.
- **Ander eenheid:** die verskaffer lys die afdeling in ’n eenheid wat die model nie kan gee nie.

Wat die model nodig het, word gegee in stawe (uit die geneste snylys, met jou voorraadlengtes), in meters stawe gekoop en in kilogram (die afdeling se gewig per meter), en die lêer se eie eenheid word gebruik. ’n Afdeling word volgens sy naam gepas ("W16 X 26" en "w16x26" is dieselfde). Afdelings wat nie in die lêer is nie, word gelys.

Kort en laat afdelings is in die {{ui:Probleme}}-paneel. Niks hier bestel iets nie.

## Beperkings

Die voorraadsyfers en leweringstye is die lêer s’n, soos op die dag dat dit gemaak is. Plate word nie geneste nie, so hulle word nie opgesoek nie. Die lêer word net gelees: enige instruksie daarin is net teks.
