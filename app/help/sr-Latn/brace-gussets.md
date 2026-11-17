---
title: Vezivanje dijagonala sa čvornim limovima
summary: Poveži kraj dijagonale sa stubom ili gredom čvornim limom: uglovnici i ravne trake vezani zavrtnjima, cevi useckane i zavarene.
keywords: čvorni lim, ploča čvora, dijagonala, vertikalno ukrućenje, ugaona dijagonala, ravna traka, traka, HSS dijagonala, nožasti lim, useckana cev, povezivanje
from: 22f6598d
---

Čvorni lim je lim zavaren u radionici za stub (ili gredu) na koji dijagonala naleže, u ravni dijagonale. DetailCraft skraćuje dijagonalu tako da bude slobodna od svega u spoju, postavlja i dimenzioniše čvorni lim i povezuje dijagonalu sa njim: **uglovnik** ili **ravnu traku** sa jednim redom zavrtnjeva, ili **cev** (kvadratnu, pravougaonu ili okruglu HSS) nataknutu preko čvornog lima i zavarenu.

## Gde radi

- Kraj dijagonale leži na osi stuba ili grede (u okviru 1 mm), i dijagonala nije gotovo paralelna sa tom osom. Stub je oslonac tamo gde postoji; inače greda.
- Čvorni lim leži u ravni dijagonale i na osi oslonca. **Uglovnik** mora imati jedan krak u toj ravni, a **ravna traka** svoju površinu: okreći dijagonalu (njen {{ui:Obrtanje (°)}}) dok to ne bude ispunjeno. Ako su krakovi uglovnika pod 45° u odnosu na ravan, DetailCraft to kaže i ne pravi ništa.
- I-profili i U-profili kao dijagonale se ne povezuju.

## Dodavanje čvornih limova

1. Izaberi jednu ili više dijagonala.
2. Izaberi {{ui:Čvorni lim}} u meniju {{ui:Više}} grupe {{ui:Poveži}}.
3. Svaki kraj izabranih dijagonala koji naleže na stub ili gredu i nema čvorni lim dobija ga.

Izaberi čvorni lim (klikni na lim) da promeniš njegova podešavanja. {{ui:Primeni na slične (n)}} kopira ga na svaki slobodan kraj dijagonale sa istim profilima dijagonale i oslonca.

## Šta DetailCraft izračunava

- **Skraćivanje.** Dijagonala se na tom kraju skraćuje dok ivice ne budu slobodne za {{ui:Razmak dijagonale}} (25), svaki element u spoju (pored nje, ili preko njenog kraja kada element tu završava) i bazni lim ispod stuba.
- **Zavrtnji (uglovnici, trake).** {{ui:Zavrtnji}} (3) u jednom redu duž dijagonale, prvi na {{ui:Rastojanje krajnjeg zavrtnja}} (40) od presečenog kraja, na {{ui:Korak zavrtnjeva}} (75). Kod uglovnika prolaze kroz krak u ravni čvornog lima, na {{ui:Poprečni razmak zavrtnjeva}} od pete (0 = sredina kraka); kod ravne trake na njenoj središnjoj liniji (ili pomereno za razmak). Stezanje zavrtnja = krak ili traka + čvorni lim.
- **Čvorni lim.** Pravougaonik: od lica oslonca napolje preko poslednjeg zavrtnja za rastojanje krajnjeg zavrtnja, a duž oslonca koliko zavrtnjevi traže. Leži uz zadnju stranu kraka uglovnika (ili uz površinu trake). Kod cevi prolazi kroz sredinu cevi, ispod {{ui:Preklop cevi na rebru}} (200) cevi, uz prostor za varove.
- **Spojevi.** Kod baze stuba čvorni lim se spušta na bazni lim. Gde greda preseca spoj (dijagonala ide gore u ugao greda–stub), čvorni lim ostaje ispod ili iznad grede. Ako zbog toga zavrtnjevi ili preklop nemaju svoje rastojanje krajnjeg zavrtnja, DetailCraft upozorava.
- **Varovi.** Čvorni lim za oslonac, sa obe strane. Cev za čvorni lim, četiri linije duž preklopa.

## Dobro je znati

- Čvorni lim pripada sklopu oslonca (zavaren u radionici). Dijagonala se isporučuje sa izbušenim rupama i ide u sopstvenu NC datoteku.
- Useck cevi nije sečen u modelu; [provera sudara](topic:clash-check) ostavlja dijagonalu i njen čvorni lim van provere.
- Čvorni lim se ne vari za gredu koju dodiruje, a ugaoni čvorni limovi zavareni i za gredu i za stub, ukošeni uglovi i raspored radne tačke za spoj po metodi ujednačene sile još nisu urađeni.
- DetailCraft ne projektuje čvorni lim ni zavrtnje (bez provere čvrstoće); upozorenja se tiču razmaka i naleganja.
