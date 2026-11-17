---
title: Merkregels
summary: Precies wanneer twee onderdelen of twee samenstellingen een merk delen, hoe merken worden genummerd, en hoe funderings- en staafmerken werken.
keywords: merken, nummering, onderdeelmerk, samenstellingsmerk, stukmerk, voorvoegsel, tolerantie, identieke onderdelen, staafmerken, funderingsmerken
from: ce02c98e
---

DetailCraft berekent elk merk opnieuw na elke wijziging. Niets wordt opgeslagen, dus de merken beschrijven altijd het model zoals het nu is. Zie [Merken controleren en de stuklijst](topic:marks-and-bom) voor hoe u ze gebruikt.

## Onderdeelmerken

Twee onderdelen delen een onderdeelmerk wanneer al deze punten overeenkomen:

1. Het onderdeeltype (ligger, kolom, verband of plaat).
2. De profielnaam (niet hoofdlettergevoelig).
3. Het materiaal (niet hoofdlettergevoelig).
4. De afsnedelengte, binnen 1 mm.
5. Elk gat: zijde, positie langs en dwars, binnen 1 mm, en diameter binnen 0.1 mm.
6. Elke coping: uiteinde, zijde, lengte en diepte, binnen 1 mm.

De {{ui:Naam}} van de staaf telt niet mee. Ook de positie in het model, de rotatie en de richting waarin het is getekend tellen niet mee, zolang het onderdeel zelf hetzelfde is.

### Omgekeerde onderdelen

Een onderdeel wordt vergeleken op elke manier waarop het kan worden omgekeerd en dat zijn doorsnede op zichzelf afbeeldt. Als een van die manieren het overeen laat komen met een ander onderdeel, delen ze een merk.

| Vorm | Omkeringen die tellen |
|---|---|
| I-profielen, rechthoekige HSS, platen | Uiteinde om uiteinde (om de verticale as), uiteinde om uiteinde (om de horizontale as), en ondersteboven om de eigen lengte-as |
| Kanalen | Uiteinde om uiteinde om alleen de horizontale as, zodat het lijf aan dezelfde kant blijft |
| Hoekprofielen, ronde HSS | Geen: vergeleken zoals geplaatst |

Dus een ligger met een gat dicht bij het linkeruiteinde komt overeen met een ligger met hetzelfde gat dicht bij het rechteruiteinde, en een kolom met gaten in één flens komt overeen met een kolom met dezelfde gaten in de andere flens.

### Nummering

| Type | Voorvoegsel onderdeel | Voorvoegsel samenstelling |
|---|---|---|
| Kolom | c | C |
| Ligger | b | B |
| Verband | br | BR |
| Plaat (geplaatst, kopplaat of voetplaat) | p | P |

Merken worden genummerd vanaf 1 binnen elk voorvoegsel. De volgorde is: kolommen, dan liggers, verbanden en platen; binnen een type op profielnaam in natuurlijke volgorde (W8x10 vóór W12x26); daarna langere onderdelen eerst.

Omdat de nummering die volgorde volgt, kan het toevoegen of wijzigen van één onderdeel de nummers van andere verschuiven.

## Samenstellingsmerken

- Elk onderdeel dat niet aan een ander onderdeel is gelast, is het hoofdonderdeel van zijn eigen samenstelling.
- Kopplaten worden aan hun ligger gelast, en voetplaten aan hun kolom, dus ze horen bij de samenstelling van dat onderdeel.
- Twee samenstellingen delen een merk wanneer hun hoofdonderdelen een onderdeelmerk delen en hun bevestigde onderdelen dezelfde merken hebben op dezelfde plaatsen (binnen 1 mm), met de omkeringen die het hoofdonderdeel toestaat.
- Het voorvoegsel van de samenstelling volgt het hoofdonderdeel: een ligger met twee kopplaten is een B-samenstelling.

Platen die u plaatst met het gereedschap {{ui:Plaat}} zijn aan niets gelast, dus elk is een eigen P-samenstelling.

## Funderingsmerken

Funderingen met dezelfde lengte, breedte, diepte, betontekst, onderwapening en startstaven delen een merk: F1, F2 … in de volgorde waarin ze zijn geplaatst. Positie en rotatie tellen niet mee.

## Staafmerken

Staven met dezelfde maat, vorm en afmetingen A, B en C (afgerond op de millimeter) delen een merk over alle funderingen heen. Het merk is het staafnummer, F, en een teller per staafmaat: 5F1, 5F2, 6F1. Een staaf in de lange richting en een staaf in de korte richting van een vierkante fundering zijn dezelfde staaf en delen een merk; de kolom {{ui:Gebruikt voor}} van de staat somt beide gebruiken op.
