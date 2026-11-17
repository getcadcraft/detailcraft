---
title: Izdanja, revizije i dnevnik promena crteža
summary: Vodite jednu istoriju izdanja zajedno sa modelom arhitekte: učitajte izdanja, beležite uputstva sa gradilišta, radioničke crteže i povezane modele uz izdanje i čitajte dnevnik promena crteža.
keywords: izdanje, revizija, revizije, dnevnik promena, registar crteža, uputstvo sa gradilišta, radionički crtež, povezani model, tender, građenje, istorija izdanja, radionički crteži, izrada
from: 4b9a1b7b
---

## Šta ćete uraditi

Radite sa istom istorijom izdanja kao ostatak tima. Pogledajte koji su listovi poslati u kojoj reviziji i vodite evidenciju o tome šta se dešava na gradilištu uz izdanje kome to pripada.

## Koraci

1. Otvorite **{{ui:Izdanja i revizije}}**.
2. Izaberite **Pročitaj istoriju izdanja** i izaberite datoteku `.issues.json` sačuvanu iz BimCraft-a ili druge aplikacije. Njena izdanja i zapisi se dodaju vašima. Ništa se ne zamenjuje.
3. Izaberite **Dodaj zapis** za uputstvo sa gradilišta, radionički crtež, skup označavanja, povezani model ili napomenu. Izaberite izdanje kome pripada i njegov status. Datoteka koju izaberete beleži se po nazivu, veličini i SHA-256; datoteka ostaje tamo gde jeste.
4. **Dnevnik promena crteža** prikazuje jedan red za svaki list i jednu kolonu za svako izdanje. Revizija u zagradama je ponovo izdata bez promena.
5. **Preuzmi dnevnik promena (CSV)** čuva izdanja, tabelu listova i zapise. **Sačuvaj istoriju izdanja** upisuje datoteku koju čitaju druge aplikacije.

## Dobro je znati

- Listovi se i dalje izdaju iz Crteža, list po list. Ta izdanja se pojavljuju ovde: listovi izdati istog datuma uz jednu napomenu čine jedno izdanje.
- Zapisi i izdanja koje učitate čuvaju se u datoteci modela. Svaka promena je jedan korak {{ui:Opozovi}}.
- Čitanje iste datoteke dvaput ništa ne dodaje dvaput. Kada dve kopije sadrže isti zapis, zadržava se novija.
