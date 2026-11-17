---
title: Izvoz KISS datoteke za softver za izradu
summary: Pošaljite spisak materijala programu za upravljanje izradom (MIS) kao KISS 1.1 datoteku: sklopove, delove, faze kao redosled, rupe, zaseke i zavare.
keywords: kiss, kss, mis, upravljanje izradom, kontrola proizvodnje, predračun, spisak materijala, bom, izvoz, fabtrol, redosled
from: 30cf3951
---

U grupi {{ui:Izlaz}} otvorite {{ui:Više}} i izaberite {{ui:KISS datoteka za softver za izradu}}. DetailCraft preuzima `<name>.kss`, KISS datoteku ("Keep It Simple, Steel", verzija 1.1), običan tekstualni format iz kog većina programa za upravljanje izradom uvozi spisak materijala.

## Šta je u njoj

- Zaglavlje: broj posla (prvih osam slova i cifara naziva modela), naziv modela, datum i vreme, i da li su mere metričke.
- Za svaku oznaku sklopa: njegov glavni deo (količina = koliko ima sklopova), red crteža (A-B1 i tako dalje, broj crteža sklopa), red sklopa (naziv, vrsta, težina, ukupna dužina, dubina i širina), jedan red redosleda za svaku [fazu](topic:phases) u kojoj je sklop, i redovi rada: rupe (koliko, prečnik, debljina kroz), zaseci i zavari.
- Zatim svaki deo pridružen njemu, sa **ukupnom** količinom (po sklopu × broj sklopova), kako standard traži.
- Slobodni zavrtnji i sidrene šipke na crtežu BOLTS, sklop FIELD.
- Svaki red daje vrstu (W, C, L, HSS, PL, ili MI za prilagođeni profil), veličinu, kvalitet, dužinu sečenja u milimetrima, naziv dela i težinu.

## Imperijalne ili metričke mere

U [Podešavanjima DetailCraft-a](topic:settings), **Veličine KISS datoteke** bira:

- **Automatski** (početno): imperijalne kada je svaki element AISC profil, inače metričke.
- **Imperijalne**: profili po AISC oznaci (W 16X26, HSS 4X4X.250); ploče i zavrtnji, koje DetailCraft čuva u milimetrima, na najbliži 1/16 in; težine u funtama.
- **Metričke**: evropski profili po nazivu (IPE300), ploče kao debljina X širina u milimetrima; težine u kilogramima.

Dužine su uvek u milimetrima sa dve decimale, bez obzira na podešavanje: standard KISS to traži, a program koji prima ih pretvara.

:::note
Kvaliteti se skraćuju na osam znakova standarda: A572 Gr 50 postaje A572-50. Zarezi u nazivima postaju razmaci (format nema navodnike). Pre nego što se oslonite na to, proverite jedan uvoz u svom programu: KISS datoteke DetailCraft-a ovde su proverene prema standardu, a još ne u programu za izradu.
:::
