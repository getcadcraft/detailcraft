---
title: Izdanja, revizije i dnevnik promjena crteža
summary: Držite jednu povijest izdanja uz arhitektov model, učitavajte izdanja, zapisujte upute za gradilište, radioničke crteže i povezane modele uz izdanje te čitajte dnevnik promjena crteža.
keywords: izdanje, revizija, revizije, dnevnik promjena, dnevnik promjena crteža, registar crteža, uputa za gradilište, radionički crtež, povezani model, natječaj, građenje, povijest izdanja, radionički crteži, izrada
from: 4b9a1b7b
---

## Što ćete raditi

Radite iz iste povijesti izdanja kao i ostatak tima. Pogledajte koji su listovi izdani u kojoj reviziji i zabilježite što se događa na gradilištu uz izdanje kojem pripada.

## Koraci

1. Otvorite **Izdanja i revizije**.
2. Odaberite **Učitaj povijest izdanja** i odaberite datoteku `.issues.json` spremljenu iz BimCraft-a ili druge aplikacije. Njezina izdanja i zapisi dodaju se vašima. Ništa se ne zamjenjuje.
3. Odaberite **Dodaj zapis** za uputu za gradilište, radionički crtež, skup oznaka, povezani model ili napomenu. Odaberite izdanje na koje se odnosi i njegov status. Datoteka koju odaberete bilježi se prema nazivu, veličini i SHA-256; datoteka ostaje gdje jest.
4. **Dnevnik promjena crteža** prikazuje jedan redak za svaki list i jedan stupac za svako izdanje. Revizija u zagradama ponovno je izdana bez promjena.
5. **Preuzmi dnevnik promjena (CSV)** sprema izdanja, tablicu listova i zapise. **Spremi povijest izdanja** zapisuje datoteku koju čitaju ostale aplikacije.

## Dobro je znati

- Listovi se i dalje izdaju iz {{ui:Crteži}}, list po list. Ta izdanja pojavljuju se ovdje: listovi izdani istog datuma s istom napomenom čine jedno izdanje.
- Zapisi i izdanja koje učitate spremaju se u datoteku modela. Svaka promjena je jedan korak {{ui:Poništi}}.
- Ponovno učitavanje iste datoteke ništa ne dodaje dvaput. Kad dvije kopije sadrže isti zapis, zadržava se novija.
