---
title: Generator čeličnih stepenica
summary: Čelične stepenice iz visine između podova, dužine kraka i širine: uspon i gaz prema skupu pravila koji biraš, podesti, ograde i balusteri, radionički crteži i spisak rezanja sa težinama.
keywords: čelične stepenice, generator stepenica, kosnik, gazište, šahovski lim, rešetka, savijeni lim, podest, rukohvat, balusteri, uspon, gaz, osha, ibc, approved document k, spisak rezanja, težine, radionički crtež
from: a4f0a985
---

Generator stepenica iz nekoliko brojeva pravi cijele čelične stepenice: kosnike, gazišta, podeste kad je krak previsok, rukohvate sa stubovima i balusterima, rupe za pričvršćivanje u kosnicima, spisak rezanja sa težinama i radioničke crteže. Kreće iz alata {{ui:Stepenice}}, kao obične stepenice (vidi Stepenice), s jednim prekidačem više.

## Postavi čelične stepenice

1. Izaberi {{ui:Stepenice}} u grupi {{ui:Postavljanje}}, ili pritisni {{key:S}}.
2. Desno označi {{ui:Koristi generator čeličnih stepenica}}.
3. Izaberi **skup pravila** za mjesto gdje se stepenice prave, **uspon** (od poda do poda; 0 = do sljedećeg nivoa), **raspoloživi hod** (0 = neka odluči pravilo), **svijetlu širinu** i **vrstu gazišta**: šahovski lim, rešetka ili savijeni lim.
4. Postavi presjek kosnika, podeste (prema pravilu ili brojem), rukohvate (s obje strane, s jedne, nijedan), visinu ograde i razmak balustera.
5. Klikni presjek mreže: to je podnožje prve stupnice.

Odaberi stepenice (klikni kosnik, gazište ili ogradu) da promijeniš bilo koju postavku; svojstva prikazuju stupnice, gaz, nagib, krakove i podeste, čelik u njima, spisak rezanja i izvore skupa pravila.

## Skupovi pravila

Skup pravila ograničava oblik stepenica: uspon i gaz, 2 × stupnica + gaz, nagib, podest, visinu ograde i najveći otvor. DetailCraft nudi ispod navedene; oblast je postavka, a ne pretpostavka. Otvori **Odakle dolaze brojevi ovog skupa pravila** u svojstvima: svaki broj navodi svoj izvor i kaže koliko je dobro provjeren.

- **International Building Code 2021**: stupnica 4 do 7 in., gazište najmanje 11 in., ograde 34 do 38 in. Granica od 12 ft između podesta prikazana je kao *nije pročitana*, a brojevi za ograde kao pročitani u materijalima koji citiraju pravilnik: potvrdi ih prije oslanjanja na njih.
- **OSHA 29 CFR 1910.25 i 1910.29** (industrijske standardne stepenice): 30° do 50°, stupnica najviše 9.5 in., gazište najmanje 9.5 in., najmanje 22 in. širine, podesti jednaki širini stepenica i 30 in. dubine, gornji rukohvat kao ograda 36 do 38 in. Ovo je pročitano u samom propisu.
- **Approved Document K 2013, England** (opšte pristupne i pomoćne stepenice): opsezi uspona i gaza i 2 × stupnica + gaz 550 do 700 mm, pročitano u izvještaju koji je naručila vlada i u kojem su tabelarno prikazani. Dokument ne daje DetailCraft-u visinu ograde, pa se koristi visina koju postaviš, a spisak problema to kaže.

Skup pravila koji ovdje nije naveden se ne pogađa: stepenice tada slijede običnu udobnu granicu 600 do 650 mm i kažu da nemaju pravilo.

## Šta izračunava

- **Stupnice i gaz.** Najmanje stupnica čiji 2 × stupnica + gaz pada u sredinu opsega pravila, bez da gaz padne ispod najmanjeg iz pravila. Kad je zadat hod, gaz je hod podijeljen brojem gazišta, a sve što je izvan pravila se kaže.
- **Krakovi i podesti.** Krak viši nego što pravilo dozvoljava dijeli se podestom širine stepenica i ne manje od najmanjeg iz pravila; podeste možeš i zatražiti. Podest je okvir od dvije bočne grede i dva poprečna uglovnika ispod poklopca, na dva stuba.
- **Gazišta.** Šahovski lim je zavarena ploča (podrazumijevano 6 mm; uzorak se ne dodaje u težinu). Gazište od savijenog lima ima povratak na istaku i pričvršćeno je vijcima kroz hrbat kosnika: dvije rupe 2 mm veće od vijka na 0.3 i 0.7 dubine. Rešetka se crta kao ploča iste težine (dubina nosive šipke × debljina ÷ korak); poprečne šipke i obrub se ne računaju, a spisak rezanja to kaže.
- **Ograde.** Cijevni gornji rukohvat na stubovima duž svakog kraka i svakog podesta, sa razmakom balustera kroz koji ne prolazi kugla veća od otvora iz pravila (najviše 100 mm podrazumijevano).

## Crteži, spisak rezanja, izvoz

- Krak je jedan sklop; ograde su drugi (obje strane su isti sklop, napravljen dva puta). Svaki ima svoj sklopni crtež, a crtež kosnika prikazuje njegove rupe.
- **List stepenica** (ST-…) prikazuje kosnik svakog kraka prav, sa položajima rupa ispisanim od donjeg kraja, i detalj gazišta: presjek, istak, povratak i krajnju prirubnicu s rupama.
- {{ui:Lista rezanja i težine}} u svojstvima navodi svaki presjek i dužinu s količinama i kilogramima; {{ui:Preuzmi listu rezanja (CSV)}} je snima.
- Sve ide u spisak materijala, NC datoteke i IFC kao obični dijelovi (IfcMember, IfcColumn, IfcPlate).

## Dobro je znati

- Ovo je polazna tačka, a ne projekat. Ništa se ne provjerava na čvrstoću ni na progib; skup pravila samo ograničava oblik.
- Krajevi kosnika uz podove isječeni su pod pravim uglom i nisu detaljisani; stubovi podesta stoje do poda ispod i nemaju temeljne ploče.
- Postavljanje stepenica kao jednog elementa u BimCraft-u još nije povezano.
