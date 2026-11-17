---
title: Proveri IFC izvoz prema IDS-u klijenta
summary: Učitaj .ids datoteku koju si dobio i pogledaj u Problemima svaki izvezeni deo koji joj ne odgovara, pre slanja IFC-a.
keywords: ids, specifikacija isporuke informacija, buildingsmart, zahtevi, isporuka, provera, validacija, kontrola kvaliteta, ifc izvoz, svojstvo, materijal, nabavka
from: 50d0f785
---

## Šta ćeš uraditi

IDS (Information Delivery Specification, standard buildingSMART) je spisak onoga što IFC mora da sadrži. DetailCraft proverava IFC koji bi izvezao (istu datoteku koju piše {{ui:IFC}}) prema IDS-u koji si dobio i navodi svaki deo koji ne ispunjava uslove.

## Koraci

1. Otvori ili nacrtaj model.
2. Klikni {{ui:Proveri prema IDS…}} u grupi {{ui:Izlaz}} na traci sa alatkama.
3. Klikni {{ui:Učitaj .ids datoteku…}} i izaberi datoteku. Ništa se ne otprema.
4. Pročitaj rezultat: svaku specifikaciju sa {{ui:Prolazi}} ili {{ui:Ne prolazi}} i koliko elemenata se na nju odnosi.
5. Otvori {{ui:Problemi}} ({{key:Ctrl+Shift+M}}) i klikni neuspeh: element, spoj, stepenište ili temelj iz kog potiče biće izabran, a prikaz će se uvećati na njega.

## Šta treba da vidiš

- Jedno upozorenje za svaki izvezeni element i zahtev koji ne ispunjava, sa imenom specifikacije, onim što IDS traži i onim što izvoz ima.
- Izveštaj provere (u Problemima) počinje IDS-om: naslov, verzija, autor i brojevi za svaku specifikaciju.

## Dobro je znati

- IDS se čuva u datoteci modela, pa se ponovo proverava kada otvoriš model. Učitavanje ili zaboravljanje je jedan korak koji možeš da opozoveš.
- Svaka promena se ponovo proverava malo kasnije; na velikom modelu provera čeka malo duže između pokretanja.
- GlobalId-jevi izvoza dolaze iz imena modela i brojeva delova unutar DetailCraft-a, pa ostaju isti od jedne provere do sledeće. Preimenovanje modela daje svakom elementu nove GlobalId-jeve.
- Brojevi se porede u SI jedinicama (izvoz je u milimetrima; dužine se prvo pretvaraju u metre).
- Obrasci u IDS-u čitaju se kao cela vrednost. `^` na početku i `$` na kraju takođe se tumače kao „cela vrednost“, kao što ih većina IDS datoteka i misli.

## Dalje

- [Izvezi IFC](topic:ifc-export)
