---
title: Izvoz KISS datoteke za softver za izradu
summary: Pošaljite sastavnicu programu za upravljanje izradom (MIS) kao KISS 1.1 datoteku: sklopovi, dijelovi, faze kao slijedovi, provrti, izrezi i zavari.
keywords: kiss, kss, mis, upravljanje izradom, upravljanje proizvodnjom, procjena, sastavnica, bom, izvoz, fabtrol, slijed
from: 30cf3951
---

U grupi {{ui:Izlaz}} otvorite {{ui:Više}} i odaberite {{ui:KISS datoteka za softver za izradu}}. DetailCraft preuzima `<name>.kss`, KISS datoteku ("Keep It Simple, Steel", verzija 1.1), tekstualni format iz kojeg većina programa za upravljanje izradom uvozi sastavnicu.

## Što je u njoj

- Zaglavlje: broj projekta (prvih osam slova i znamenki naziva modela), naziv modela, datum i vrijeme te jesu li mjere metričke.
- Za svaku oznaku sklopa: njegov glavni dio (količina = koliko sklopova), redak crteža (A-B1 i slično, broj crteža sklopa), redak sklopa (naziv, vrsta, težina, ukupna duljina, visina i širina), jedan redak slijeda za svaku [fazu](topic:phases) u kojoj je sklop, te retke rada: provrti (koliko, promjer, debljina kroz), izrezi i zavari.
- Zatim svaki dio pridružen tom sklopu, s **ukupnom** količinom (po sklopu × sklopova), kako norma traži.
- Slobodni vijci i sidreni vijci na crtežu BOLTS, sklop FIELD.
- Svaki redak daje vrstu (W, C, L, HSS, PL ili MI za prilagođeni profil), veličinu, razred, duljinu rezanja u milimetrima, naziv dijela i težinu.

## Imperijalne ili metričke mjere

U [postavkama DetailCraft](topic:settings), **Veličine KISS datoteke** određuje:

- **Automatski** (početno): imperijalne kad su svi štapovi AISC profili, inače metričke.
- **Imperijalne**: profili prema AISC oznaci (W 16X26, HSS 4X4X.250); ploče i vijci, koje DetailCraft čuva u milimetrima, na najbliži 1/16 in; težine u funtama.
- **Metričke**: europski profili prema svom nazivu (IPE300), ploče kao debljina X širina u milimetrima; težine u kilogramima.

Duljine su uvijek u milimetrima s dvije decimale, bez obzira na postavku: norma KISS to traži, a program primatelj ih pretvara.

:::note
Oznake razreda skraćuju se na osam znakova norme: A572 Gr 50 postaje A572-50. Zarezi u nazivima pretvaraju se u razmake (format nema navodnike). Provjerite jedan uvoz u svom programu prije nego se oslonite na njega: KISS datoteke DetailCraft-a ovdje se provjeravaju prema normi, a još ne u programu za izradu.
:::
