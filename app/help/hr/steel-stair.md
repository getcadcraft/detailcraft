---
title: Generator čeličnih stubišta
summary: Čelično stubište iz visine između etaža, duljine i širine: visina uspona i gaz prema skupu pravila koji birate, podesti, ograde i balustri, radionički crteži i popis za rezanje s težinama.
keywords: čelično stubište, generator stubišta, tetiva, gazište, rebrasti lim, rešetka, savijeni lim, podest, ograda, balustri, visina uspona, gaz, osha, ibc, approved document k, popis za rezanje, težine, radionički crtež
from: a4f0a985
---

Generator stubišta izrađuje cijelo čelično stubište iz nekoliko brojeva: tetive, gazišta, podesti kad je krak previsok, ograde sa stupovima i balustrima, rupe za pričvršćenje u tetivama, popis za rezanje s težinama i radionički crteži. Polazi od alata {{ui:Stubište}}, kao i obično stubište (vidi Stubišta), uz jednu dodanu sklopku.

## Postavljanje čeličnog stubišta

1. Odaberite {{ui:Stubište}} u grupi {{ui:Postavljanje}}, ili pritisnite {{key:S}}.
2. Desno označite {{ui:Koristi generator čeličnih stubišta}}.
3. Odaberite **skup pravila** za mjesto gdje se stubište gradi, **visinu uspona** (od etaže do etaže; 0 = do sljedeće etaže), **raspoloživi hod** (0 = neka pravilo odluči), **svijetlu širinu** i **vrstu gazišta**: rebrasti lim, rešetka ili savijeni lim (pan).
4. Postavite presjek tetive, podeste (prema pravilu ili broju), ograde (s obje strane, s jedne ili nijedne), visinu ograde i razmak balustara.
5. Kliknite sjecište mreže: to je podnožje prvog čela stuba.

Odaberite stubište (kliknite tetivu, gazište ili ogradu) da promijenite bilo koju postavku. Svojstva prikazuju čela, gaz, nagib, krakove i podeste, čelik u njemu, popis za rezanje i izvore skupa pravila.

## Skupovi pravila

Skup pravila ograničava oblik stubišta: visinu uspona i gaz, 2 × čelo + gaz, nagib, podest, visinu ograde i najveći otvor. DetailCraft nudi one ispod; područje je postavka, a ne pretpostavka. Otvorite **Odakle brojevi ovog skupa pravila** na panelu svojstava: svaki broj navodi svoj izvor i kaže koliko je dobro provjeren.

- **International Building Code 2021**: čelo 4 do 7 in., gazište najmanje 11 in., ograde 34 do 38 in. Razmak od 12 ft između podesta prikazan je kao *nije pročitano*, a brojevi za ograde kao pročitani u priručnicima koji citiraju propis. Prije oslanjanja na njih provjerite.
- **OSHA 29 CFR 1910.25 i 1910.29** (industrijska standardna stubišta): 30° do 50°, čelo najviše 9.5 in., gazište najmanje 9.5 in., najmanje 22 in. širine, podesti jednako široki kao stubište i 30 in. duboki, gornja ograda kao rukohvat 36 do 38 in. Ovo je pročitano u samom propisu.
- **Approved Document K 2013, Engleska** (opća pristupna i pomoćna stubišta): raspon visine uspona i gaza te 2 × čelo + gaz 550 do 700 mm, pročitano u izvješću naručenom od vlade koje ih tablično prikazuje. Dokument DetailCraft-u ne daje visinu ograde, pa se koristi visina koju postavite, a popis Problemi to kaže.

Skup pravila koji ovdje nije naveden ne pogađa se: stubište tada slijedi jednostavno pravilo udobnosti 600 do 650 mm i kaže da nema pravila.

## Što izračunava

- **Čela i gaz.** Najmanje čela čiji 2 × čelo + gaz leži u sredini raspona pravila, bez da gaz padne ispod najmanje vrijednosti pravila. Kad je dan hod, gaz je hod podijeljen s gazištima, a sve što je izvan pravila se kaže.
- **Kraci i podesti.** Krak viši od onoga što pravilo dopušta dijeli se podestom jednako širokim kao stubište i ne užim od najmanje vrijednosti pravila; podeste možete i zatražiti. Podest je okvir od dvije bočne grede i dva poprečna kutnika pod poklopcem, na dva stupa.
- **Gazišta.** Rebrasti lim je zavarena ploča (po zadanom 6 mm; uzorak se ne dodaje težini). Savijeni lim (pan) ima povratak na istaku i pričvršćen je vijcima kroz hrbat tetive: dvije rupe 2 mm veće od vijka na 0.3 i 0.7 dubine. Rešetka se crta kao ploča iste težine (dubina nosive trake × debljina ÷ korak); poprečne šipke i obruba se ne računaju, a popis za rezanje to navodi.
- **Ograde.** Cijevna gornja ograda na stupovima duž svakog kraka i svakog podesta, s razmakom između balustara kroz koji ne prolazi nijedna kugla veća od otvora iz pravila (najviše 100 mm po zadanom).

## Radionički crteži, popis za rezanje, izvoz

- Krak je jedan sklop; ograde su drugi (obje strane su isti sklop, izrađen dvaput). Svaki ima svoj radionički crtež, a crtež tetive prikazuje njezine rupe.
- **List stubišta** (ST-…) prikazuje ravnu tetivu svakog kraka s mjestima rupa ispisanim od donjeg kraja, te detalj gazišta: presjek, istak, povratak i krajnju prirubnicu s rupama.
- {{ui:Popis za rezanje i težine}} na svojstvima navodi svaki presjek i duljinu s količinama i kilogramima; {{ui:Preuzmi popis za rezanje (CSV)}} ga sprema.
- Sve ide u sastavnicu, NC datoteke i IFC kao obični dijelovi (IfcMember, IfcColumn, IfcPlate).

## Dobro je znati

- Ovo je polazna točka, a ne projekt. Ništa se ne provjerava na čvrstoću ni progib; skup pravila samo ograničava oblik.
- Krajevi tetiva uz etaže odrezani su okomito i nisu detaljizirani; stupovi podesta stoje do etaže ispod i nemaju podložne ploče.
- Postavljanje stubišta kao jednog elementa u BimCraftu još nije izrađeno.
