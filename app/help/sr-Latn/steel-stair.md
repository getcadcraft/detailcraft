---
title: Generator čeličnih stepenica
summary: Čelična stepenica iz visine poda do poda, gaza i širine: visine i gaz po skupu pravila koji biraš, podesti, rukohvati i balustri, radionički crteži i lista sečenja sa težinama.
keywords: čelična stepenica, generator stepenica, kosnik, gazište, rebrasti lim, rešetka, savijeni lim, podest, rukohvat, balustri, visina stepenika, gaz, osha, ibc, approved document k, lista sečenja, težine, radionički crtež
from: a4f0a985
---

Generator stepenica pravi celu čeličnu stepenicu iz nekoliko brojeva: kosnike, gazišta, podeste kada je krak previsok, rukohvate sa stubićima i balustrima, rupe za pričvršćenje u kosnicima, listu sečenja sa težinama i radioničke crteže. Kreće od alata {{ui:Stepenište}}, kao obična stepenica (videti Stepenice), uz jedan dodatni prekidač.

## Postavljanje čelične stepenice

1. Izaberi {{ui:Stepenište}} u grupi {{ui:Postavi}}, ili pritisni {{key:S}}.
2. Desno, označi {{ui:Koristi generator čeličnih stepenica}}.
3. Izaberi **skup pravila** za mesto gde se stepenica gradi, **visinu** (od poda do poda; 0 = do sledećeg nivoa), **raspoloživi gaz** (0 = neka pravilo odluči), **svetlu širinu** i **tip gazišta**: rebrasti lim, rešetka ili savijeni lim.
4. Podesi presek kosnika, podeste (po pravilu ili brojem), rukohvate (sa obe strane, sa jedne, bez), visinu rukohvata i razmak balustera.
5. Klikni na presek mreže: to je podnožje prvog stepenika.

Izaberi stepenicu (klikni na kosnik, gazište ili rukohvat) da promeniš bilo koje podešavanje; svojstva prikazuju visine stepenika, gaz, nagib, krakove i podeste, čelik u njoj, listu sečenja i izvore skupa pravila.

## Skupovi pravila

Skup pravila ograničava oblik stepenice: visinu i gaz, 2 × visina stepenika + gaz, nagib, podest, visinu rukohvata i najveći otvor. DetailCraft nudi dole navedene; region je podešavanje, a ne pretpostavka. Otvori **Odakle dolaze brojevi ovog skupa pravila** na svojstvima: svaki broj imenuje svoj izvor i kaže koliko je dobro proveren.

- **International Building Code 2021**: visina stepenika 4 do 7 in., gazište najmanje 11 in., rukohvati 34 do 38 in. Ograničenje od 12 ft između podesta prikazano je kao *nije pročitano*, a brojevi za rukohvate kao pročitani u materijalima koji citiraju propis: potvrdi ih pre oslanjanja na njih.
- **OSHA 29 CFR 1910.25 i 1910.29** (industrijske standardne stepenice): 30° do 50°, visina stepenika najviše 9.5 in., gazište najmanje 9.5 in., najmanje 22 in. širine, podesti široki koliko i stepenica i 30 in. duboki, gornji rukohvat koji služi kao rukohvat 36 do 38 in. Ovo je pročitano u samom propisu.
- **Approved Document K 2013, Engleska** (opšte pristupne i pomoćne stepenice): opsezi visine i gaza i 2 × visina stepenika + gaz 550 do 700 mm, pročitano u izveštaju koji je naručila vlada i u kojem su tabelarno prikazani. Dokument ne daje DetailCraft-u visinu rukohvata, pa se koristi visina koju podesiš i lista {{ui:Problemi}} to kaže.

Skup pravila koji nije ovde ne pogađa se: stepenica tada prati obično pravilo udobnosti od 600 do 650 mm i kaže da nema pravila.

## Šta izračunava

- **Visine i gaz.** Najmanji broj visina čiji 2 × visina + gaz leži u sredini opsega pravila, bez da gaz padne ispod najmanjeg dozvoljenog po pravilu. Kada je dat raspoloživi gaz, gaz je taj ukupni gaz podeljen gazištima, a sve što je van pravila se navodi.
- **Krakovi i podesti.** Krak viši nego što pravilo dozvoljava deli se podestom širokim koliko i stepenica i ne manjim od najmanjeg po pravilu; možeš zatražiti i podeste. Podest je ram od dve bočne grede i dva poprečna uglovnika ispod poklopca, na dva stuba.
- **Gazišta.** Rebrasti lim je zavaren lim (podrazumevano 6 mm, uzorak se ne dodaje težini). Savijeni lim ima povratak na istaku i pričvršćen je zavrtnjima kroz hrbat kosnika: dve rupe 2 mm veće od zavrtnja na 0.3 i 0.7 dubine. Rešetka se crta kao lim jednake težine (dubina nosećeg štapa × debljina ÷ korak); poprečni štapovi i obrubi se ne broje, a lista sečenja to kaže.
- **Rukohvati.** Gornji rukohvat od cevi na stubićima duž svakog kraka i svakog podesta, sa razmakom balustera kroz koji ne prolazi kugla veća od otvora po pravilu (najviše 100 mm podrazumevano).

## Crteži, lista sečenja, izvoz

- Krak je jedan sklop; rukohvati su drugi (obe strane su isti sklop, napravljen dvaput). Svaki ima sklopni crtež, a crtež kosnika prikazuje njegove rupe.
- **List stepenice** (ST-…) prikazuje kosnik svakog kraka pravo, sa položajima rupa ispisanim od donjeg kraja, i detalj gazišta: presek, istak, povratak i krajnju prirubnicu sa rupama.
- {{ui:Lista sečenja i težine}} na svojstvima navodi svaki presek i dužinu sa količinama i kilogramima; {{ui:Preuzmi listu sečenja (CSV)}} je čuva.
- Sve ide u spisak materijala, NC datoteke i IFC kao obični delovi (IfcMember, IfcColumn, IfcPlate).

## Dobro je znati

- Ovo je polazna tačka, a ne projekat. Ništa se ne proverava na čvrstoću ni na savijanje; skup pravila samo ograničava oblik.
- Krajevi kosnika prema podovima sečeni su pod pravim uglom i nisu detaljisani; stubovi podesta stoje do poda ispod i nemaju bazne limove.
- Postavljanje stepenice kao jednog elementa u BimCraft još nije povezano.
