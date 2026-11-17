---
title: Provjeri izvoz IFC-a prema IDS-u klijenta
summary: Učitaj .ids datoteku koju ste dobili i vidi u Problemima svaki izvezeni dio koji je ne ispunjava, prije nego pošalješ IFC.
keywords: ids, specifikacija isporuke informacija, buildingsmart, zahtjevi, isporuka, provjera, validacija, qa, izvoz ifc, svojstvo, materijal, nabavka
from: 50d0f785
---

## Šta ćete uraditi

IDS (Information Delivery Specification, buildingSMART standard) je spisak onoga što IFC mora sadržavati. DetailCraft provjerava IFC koji bi izvezao (ista datoteka koju piše {{ui:IFC}}) prema IDS-u koji ste dobili i navodi svaki dio koji ne ispunjava zahtjeve.

## Koraci

1. Otvori ili nacrtaj svoj model.
2. Klikni {{ui:Provjeri prema IDS…}} u grupi {{ui:Izlaz}} na traci sa alatima.
3. Klikni {{ui:Učitaj .ids datoteku…}} i izaberi datoteku. Ništa se ne šalje.
4. Pročitaj rezultat: svaka specifikacija sa {{ui:Prolazi}} ili {{ui:Ne prolazi}} i koliko elemenata se na nju odnosi.
5. Otvori {{ui:Problemi}} ({{key:Ctrl+Shift+M}}) i klikni na neuspjeh: dio, spoj, stepenište ili temelj iz kojeg potiče je označen i pogled se približava.

## Šta treba da vidite

- Jedno upozorenje za svaki izvezeni element i zahtjev koji ne ispunjava, sa imenom specifikacije, šta IDS traži i šta izvoz ima.
- Izvještaj o provjeri (u Problemima) počinje IDS-om: njegov naslov, verzija, autor i brojevi za svaku specifikaciju.

## Korisno znati

- IDS se čuva u datoteci modela, pa se ponovo provjerava kada otvorite model. Učitavanje ili zaboravljanje je jedan korak koji se može poništiti.
- Svaka promjena se ponovo provjerava malo kasnije; na velikom modelu provjera čeka malo duže između pokretanja.
- GlobalId-ovi izvoza dolaze iz imena modela i oznaka dijelova unutar DetailCraft-a, pa ostaju isti od jedne provjere do druge. Preimenovanje modela daje svakom elementu nove GlobalId-ove.
- Brojevi se upoređuju u SI jedinicama (izvoz je u milimetrima; dužine se prvo pretvaraju u metre).

- Obrasci u IDS-u se čitaju kao cijela vrijednost. `^` na početku i `$` na kraju također se uzimaju kao "cijela vrijednost", kao što većina IDS datoteka to i misli.

## Dalje

- [Izvezi IFC](topic:ifc-export)
