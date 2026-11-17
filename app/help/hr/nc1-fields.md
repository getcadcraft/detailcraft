---
title: Polja NC datoteke
summary: Što DetailCraft zapisuje u svaku DSTV NC datoteku, polje po polje, i kako se mjere plohe i koordinate.
keywords: nc1, dstv, nc datoteka, ST blok, ak, bo, zaglavlje, plohe, koordinate, cnc, format
from: 1b676fc1
---

Svaka `.nc1` datoteka opisuje jednu oznaku pozicije. Retci završavaju s CR LF. Tekstualna polja sadrže običan ASCII; ostali znakovi postaju "?". Drugi redak je komentar, `** DetailCraft <mark>.nc1`.

## Zaglavlje (ST)

| Polje | I-profil, U-profil | Kutnik | Pravokutni HSS | Okrugli HSS | Ploča |
|---|---|---|---|---|---|
| Narudžba | Naziv modela | ← | ← | ← | ← |
| Crtež, komad | Oznaka pozicije | ← | ← | ← | ← |
| Faza | Faza dijela, ili 1 | ← | ← | ← | ← |
| Kvaliteta čelika | Oznaka kvalitete materijala | ← | ← | ← | ← |
| Količina | Broj dijelova s ovom oznakom | ← | ← | ← | ← |
| Profil | Naziv profila, npr. W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Kod profila | I ili U (U-profil) | L | M | RO | B |
| Duljina | Duljina rezanja | ← | ← | ← | Duljina |
| Visina | Visina d | Krak | Visina | Promjer | Širina ploče |
| Širina pojasa | bf | Krak | Širina | Promjer | 0 |
| Debljina pojasa | tf | t | Stijenka t | Stijenka t | 0 |
| Debljina hrpta | tw | t | Stijenka t | Stijenka t | Debljina ploče |
| Polumjer | Polumjer zaobljenja (0 za AISC U-profile) | 0 | Vanjski polumjer kuta | 0 | 0 |
| Masa po metru | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Površina za bojanje po metru | Vanjski opseg, m²/m | ← | ← | ← | 2 (obje plohe, m²/m²) |
| Kutovi pile (4 polja) | 0 (okomito) | ← | ← | ← | ← |
| Tekstualna polja (4) | `-` | ← | ← | ← | ← |

Ploče slijede stupac norme „za limove“. Norma nema stupac za okrugle cijevi: DetailCraft upisuje promjer kao visinu i širinu pojasa, a stijenku kao obje debljine.

## Vanjske konture (AK)

- **I-profili i U-profili:** hrbat (v), s pravokutnim izrezom za svaki izrez; svaki pojas (o i u), skraćen na kraju gdje je izrez barem jednako dubok kao pojas.
- **Pravokutni HSS:** obje bočne stijenke (v i h), s izrezima, te gornja i donja stijenka (o i u).
- **Kutnici:** jedan pravokutnik po kraku (v i u). Izrezi na kutnicima se ne zapisuju: takav dio navodi se kao nezapisan. Kutni spreg pričvršćen na [čvornu ploču](topic:brace-gussets) ima provrte na kraku koji je pričvršćen: v za krak uz u dijela, u za krak uz v dijela.
- **Okrugli HSS:** jedan pravokutnik na v, cijev gledana sprijeda (duljina × promjer).
- **Ploče:** jedan pravokutnik na plohi v.

Svaka kontura je zatvorena (prva točka ponavlja se na kraju) i teče suprotno smjeru kazaljke na satu.

## Provrti (BO)

Jedan redak po provrtu: ploha, x, y, promjer, dubina 0 (prolazni). Uključeni su svi provrti, oni koje ste upisali i oni koje su izradile veze. Provrt kroz bočne stijenke pravokutnog HSS-a zapisuje se dvaput, jednom na v i jednom na h.

## Plohe i koordinate

Svaki profil postavljen je onako kako ga crta slika položaja profila u normi (DSTV 1998, str. 7): x duž dijela, Y poprijeko, Z prema gore od stražnje plohe, a nulta točka je na vanjskom kutu. DetailCraft nikada ne zrcali dio da bi odgovarao slici.

| Ploha | I-profil | U-profil | Kutnik | Pravokutni HSS | Ploča |
|---|---|---|---|---|---|
| v | Hrbat, sprijeda | Hrbat, gledano sa strane krakova | Krak uz u dijela | Bočna stijenka pri −u | Ploha ploče |
| h | | | | Bočna stijenka pri +u | |
| o | Gornji pojas | **Donji** pojas | | Gornja stijenka | |
| u | Donji pojas | **Gornji** pojas | Krak uz v dijela | Donja stijenka | |

- **x** teče duž dijela od početka reza.
- **I-profili i pravokutni HSS:** y na hrptu ili bočnim stijenkama od donje strane profila; y na pojasu ili na gornjoj i donjoj stijenci od njegovog ruba sa stražnje strane (strana +u dijela).
- **U-profili** leže na leđima s krakovima prema gore, kao na slici norme. Stoga y na hrptu teče od vanjske strane gornjeg pojasa prema dolje, gornji pojas je ploha u, donji pojas ploha o, a y na pojasu teče od stražnje strane hrpta prema kraku.
- **Kutnici:** y na svakom kraku od pete.
- **Ploče:** y od ruba ploče pri −u.

Prije rezanja provjerite kako softver vašeg stroja čita plohe U-profila: neki programi okreću U-profile naopako.

## Nije zapisano

Skošenja, unutarnje konture, označavanja (SI), kutovi pile različiti od okomitih, provrti s utorom, provrti u okruglim cijevima (DetailCraft ih nema) te izrezi na kutnicima i okruglim cijevima.
