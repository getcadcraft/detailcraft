---
title: Čvorni limovi dijagonala
summary: Poveži kraj dijagonale sa stubom ili gredom čvornim limom: uglovnici i ravne trake pričvršćeni vijcima, cijevi useljene i zavarene.
keywords: čvorni lim, dijagonala, spreg, vertikalni spreg, uglovna dijagonala, ravna traka, traka, HSS dijagonala, nožasti lim, useljena cijev, povezivanje
from: 22f6598d
---

Čvorni lim dijagonale je ploča zavarena u radionici za stub (ili gredu) na koji dijagonala naliježe, u ravni dijagonale. DetailCraft skraćuje dijagonalu tako da na spoju ništa ne smeta, postavlja i dimenzioniše čvorni lim i spaja dijagonalu s njim: **uglovnik** ili **ravna traka** jednim redom vijaka, ili **cijev** (kvadratna, pravougaona ili okrugla HSS) useljena preko čvornog lima i zavarena.

## Gdje radi

- Kraj dijagonale leži na liniji stuba ili grede (unutar 1 mm), a dijagonala nije skoro paralelna toj liniji. Stub je oslonac tamo gdje postoji; inače greda.
- Čvorni lim leži u ravni dijagonale i liniji oslonca. **Uglovnik** mora imati jedan krak u toj ravni, a **ravna traka** svoju površinu: okreni dijagonalu (njena {{ui:Rotacija (°)}}) dok to ne bude. Ako su krakovi uglovnika pod 45° u odnosu na ravan, DetailCraft to kaže i ništa ne gradi.
- I-profili i U-profili kao dijagonale se ne povezuju.

## Dodaj čvorne limove

1. Odaberi jednu ili više dijagonala.
2. Izaberi {{ui:Čvorni lim}} u meniju {{ui:Više}} grupe {{ui:Povezivanje}}.
3. Svaki kraj odabranih dijagonala koji naliježe na stub ili gredu i nema čvorni lim dobija ga.

Odaberi čvorni lim (klikni na ploču) da promijeniš njegove postavke. {{ui:Primijeni na slične (n)}} kopira ga na svaki slobodan kraj dijagonale sa istim profilima dijagonale i oslonca.

## Šta DetailCraft izračunava

- **Skraćivanje.** Dijagonala se na tom kraju skraćuje dok uglovi ne budu slobodni za {{ui:Razmak dijagonale}} (25), svaki element na spoju (pored nje, ili preko njenog kraja kad element tu završava) i temeljnu ploču ispod stuba.
- **Vijci (uglovnici, trake).** {{ui:Vijci}} (3) u jednom redu duž dijagonale, prvi na {{ui:Razmak vijka do kraja}} (40) od presječenog kraja, na {{ui:Korak vijaka}} (75). Kod uglovnika prolaze kroz krak u ravni čvornog lima, na {{ui:Razmak linija vijaka}} od pete (0 = sredina kraka); kod ravne trake na njenoj središnjoj liniji (ili pomaknuti za razmak). Obuhvat vijka = krak ili traka + čvorni lim.
- **Čvorni lim.** Pravougaonik: od lica oslonca preko posljednjeg vijka za razmak do kraja, i duž oslonca koliko vijci traže. Naliježe na leđa kraka uglovnika (ili na lice trake). Kod cijevi ide kroz sredinu cijevi, a preklop cijevi na čvornom limu je {{ui:Preklop cijevi na rebru}} (200) cijevi, uz prostor za varove.
- **Spojevi.** Na dnu stuba čvorni lim se spušta na temeljnu ploču. Tamo gdje greda prelazi preko spoja (dijagonala gore do ugla greda-stub), čvorni lim ostaje ispod ili iznad grede. Ako time vijci ili preklop ostanu bez razmaka do kraja, DetailCraft upozorava.
- **Varovi.** Čvorni lim za oslonac, s obje strane. Cijev za čvorni lim, četiri linije duž preklopa.

## Dobro je znati

- Čvorni lim pripada sklopu oslonca (zavaren u radionici). Dijagonala se isporučuje s izbušenim rupama i ide u vlastitu NC datoteku.
- Useljenje cijevi nije isječeno u modelu; [provjera sudara](topic:clash-check) ostavlja dijagonalu i njen čvorni lim na miru.
- Čvorni lim se ne vari za gredu koju dodiruje, a čvorni limovi zavareni i za gredu i za stub, skošeni uglovi i raspored radne tačke za spoj po metodi Uniform Force Method još nisu urađeni.
- DetailCraft ne projektuje čvorni lim ni vijke (nema provjere čvrstoće); upozorenja se odnose na razmake i uklapanje.
