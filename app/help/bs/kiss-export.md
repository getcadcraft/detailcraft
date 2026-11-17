---
title: Izvezi KISS datoteku za softver za izradu
summary: Pošaljite spisak materijala programu za upravljanje izradom (MIS) kao KISS 1.1 datoteku: sklopovi, dijelovi, faze kao sekvence, rupe, izrezi i zavari.
keywords: kiss, kss, mis, upravljanje izradom, kontrola proizvodnje, procjena, spisak materijala, bom, izvoz, fabtrol, sekvenca
from: 30cf3951
---

U grupi {{ui:Izlaz}} otvorite {{ui:Više}} i izaberite {{ui:KISS datoteka za softver za izradu}}. DetailCraft preuzima `<name>.kss`, KISS datoteku ("Keep It Simple, Steel", verzija 1.1), obični tekstualni format iz kojeg većina programa za upravljanje izradom uvozi spisak materijala.

## Šta je u njoj

- Zaglavlje: broj posla (prvih osam slova i cifara naziva modela), naziv modela, datum i vrijeme, i da li su dimenzije metričke.
- Za svaku oznaku sklopa: njegov glavni dio (količina = koliko ih ima u sklopu), red crteža (A-B1 i tako dalje, broj crteža sklopa), red sklopa (naziv, tip, težina, ukupna dužina, visina i širina), jedan red sekvence za svaku [fazu](topic:phases) u kojoj je sklop, te redove rada: rupe (koliko, prečnik, debljina kroz koju), izrezi i zavari.
- Zatim svaki dio vezan za njega, sa **ukupnom** količinom (po sklopu × broj sklopova), kako standard traži.
- Slobodni vijci i sidreni štapovi na crtežu BOLTS, sklop FIELD.
- Svaki red daje tip (W, C, L, HSS, PL, ili MI za prilagođeni profil), dimenziju, klasu, dužinu reza u milimetrima, naziv dijela i težinu.

## Imperijalne ili metričke mjere

U [Postavkama DetailCraft-a](topic:settings), **Dimenzije KISS datoteke** bira:

- **Automatski** (početno): imperijalne kada je svaki element AISC profil, inače metričke.
- **Imperijalne**: profili prema AISC oznaci (W 16X26, HSS 4X4X.250); limovi i vijci, koje DetailCraft čuva u milimetrima, na najbliži 1/16 in; težine u funtama.
- **Metričke**: evropski profili prema nazivu (IPE300), limovi kao debljina X širina u milimetrima; težine u kilogramima.

Dužine su uvijek u milimetrima s dvije decimale, bez obzira na postavku: KISS standard to traži, a program primalac ih pretvara.

:::note
Klase čelika se skraćuju na osam znakova standarda: A572 Gr 50 postaje A572-50. Zarezi u nazivima postaju razmaci (format nema navodnike). Provjerite jedan uvoz u svom programu prije nego se oslonite na njega: KISS datoteke DetailCraft-a su ovdje provjerene prema standardu, a još ne u programu za izradu.
:::
