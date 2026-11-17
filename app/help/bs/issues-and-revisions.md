---
title: Izdanja, revizije i dnevnik promjena crteža
summary: Vodite jednu historiju izdanja zajedno s modelom arhitekte: učitajte izdanja, bilježite uputstva za gradilište, radioničke crteže i povezane modele uz izdanje, te čitajte dnevnik promjena crteža.
keywords: izdanje, revizija, revizije, dnevnik promjena, dnevnik promjena crteža, registar crteža, uputstvo za gradilište, radionički crtež, povezani model, tender, građenje, historija izdanja, radionički crteži, izrada
from: 4b9a1b7b
---

## Šta ćete uraditi

Radite na istoj historiji izdanja kao ostatak tima. Pogledajte koji su listovi izašli u kojoj reviziji i bilježite ono što se događa na gradilištu uz izdanje kojem pripada.

## Koraci

1. Otvorite **Izdanja i revizije**.
2. Izaberite **Pročitaj historiju izdanja** i odaberite datoteku `.issues.json` snimljenu iz BimCraft-a ili druge aplikacije. Njena izdanja i zapisi se dodaju vašim. Ništa se ne zamjenjuje.
3. Izaberite **Dodaj zapis** za uputstvo za gradilište, radionički crtež, skup označavanja, povezani model ili bilješku. Odaberite izdanje na koje se odnosi i njegov status. Odabrana datoteka se bilježi prema svom nazivu, veličini i SHA-256; datoteka ostaje tamo gdje jeste.
4. **Dnevnik promjena crteža** prikazuje jedan red za svaki list i jednu kolonu za svako izdanje. Revizija u zagradama je ponovo izdana bez promjena.
5. **Preuzmi dnevnik promjena (CSV)** sprema izdanja, tabelu listova i zapise. **Spasi historiju izdanja** upisuje datoteku koju čitaju druge aplikacije.

## Dobro je znati

- Listovi se i dalje izdaju iz Crteža, list po list. Ta izdanja se pojavljuju ovdje: listovi izdani istog datuma s jednom bilješkom čine jedno izdanje.
- Zapisi i izdanja koja pročitate spremaju se u datoteku modela. Svaka promjena je jedan korak Poništi.
- Čitanje iste datoteke dva puta ništa ne dodaje dvaput. Kada dvije kopije sadrže isti zapis, zadržava se novija.
