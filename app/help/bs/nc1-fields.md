---
title: Polja NC datoteke
summary: Šta DetailCraft zapisuje u svaku DSTV NC datoteku, polje po polje, i kako se mjere strane i koordinate.
keywords: nc1, dstv, nc datoteka, blok ST, ak, bo, zaglavlje, strane, koordinate, cnc, format
from: 1b676fc1
---

Svaka `.nc1` datoteka opisuje jednu oznaku dijela. Redovi završavaju sa CR LF. Tekstualna polja sadrže običan ASCII; ostali znakovi postaju "?". Drugi red je komentar, `** DetailCraft <mark>.nc1`.

## Zaglavlje (ST)

| Polje | I-profil, kanal | Ugao | Pravougaoni HSS | Okrugli HSS | Lim |
|---|---|---|---|---|---|
| Narudžba | Naziv modela | ← | ← | ← | ← |
| Crtež, komad | Oznaka dijela | ← | ← | ← | ← |
| Faza | Faza dijela, ili 1 | ← | ← | ← | ← |
| Kvalitet čelika | Kvalitet materijala | ← | ← | ← | ← |
| Količina | Broj dijelova sa ovom oznakom | ← | ← | ← | ← |
| Profil | Naziv profila, na primjer W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Šifra profila | I ili U (kanal) | L | M | RO | B |
| Dužina | Dužina reza | ← | ← | ← | Dužina |
| Visina | Dubina d | Krak | Visina | Prečnik | Širina lima |
| Širina pojasnice | bf | Krak | Širina | Prečnik | 0 |
| Debljina pojasnice | tf | t | Debljina zida t | Debljina zida t | 0 |
| Debljina rebra | tw | t | Debljina zida t | Debljina zida t | Debljina lima |
| Radijus | Radijus zaobljenja (0 za AISC kanale) | 0 | Vanjski radijus ugla | 0 | 0 |
| Masa po metru | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Površina premaza po metru | Vanjski obim, m²/m | ← | ← | ← | 2 (obje strane, m²/m²) |
| Uglovi piljenja (4 polja) | 0 (pravi ugao) | ← | ← | ← | ← |
| Tekstualna polja (4) | `-` | ← | ← | ← | ← |

Limovi slijede kolonu standarda „za limove“. Standard nema kolonu za okrugle cijevi: DetailCraft zapisuje prečnik kao visinu i širinu pojasnice, a debljinu zida kao obje debljine.

## Vanjski konturi (AK)

- **I-profili i kanali:** rebro (v), sa pravougaonim zarezom za svaki izrez; svaka pojasnica (o i u), skraćena na kraju gdje je izrez barem jednako dubok kao pojasnica.
- **Pravougaoni HSS:** oba bočna zida (v i h), zarezana za izreze, te gornji i donji zid (o i u).
- **Uglovi:** jedan pravougaonik po kraku (v i u). Izrezi na uglovima se ne zapisuju: takav dio se navodi kao nezapisan. Dijagonala od ugla pričvršćena za [ugaonu ploču](topic:brace-gussets) ima rupe na kraku koji je pričvršćen: v za krak uz u dijela, u za krak uz v dijela.
- **Okrugli HSS:** jedan pravougaonik na v, cijev gledana sa prednje strane (dužina × prečnik).
- **Limovi:** jedan pravougaonik na strani v.

Svaki kontur je zatvoren (prva tačka se ponavlja na kraju) i ide u smjeru suprotnom od kazaljke na satu.

## Rupe (BO)

Jedan red po rupi: strana, x, y, prečnik, dubina 0 (kroz). Uključene su sve rupe, one koje ste unijeli i one koje su napravile veze. Rupa kroz bočne zidove pravougaonog HSS-a zapisuje se dva puta, jednom na v i jednom na h.

## Strane i koordinate

Svaki profil je postavljen kako ga crta slika položaja profila u standardu (DSTV 1998, str. 7): x duž dijela, Y poprijeko, Z gore od zadnje strane, sa nultom tačkom na vanjskom uglu. DetailCraft nikad ne zrcali dio da bi odgovarao slici.

| Strana | I-profil | Kanal | Ugao | Pravougaoni HSS | Lim |
|---|---|---|---|---|---|
| v | Rebro, sprijeda | Rebro, gledano sa strane vrhova pojasnica | Krak uz u dijela | Bočni zid na −u | Površina lima |
| h | | | | Bočni zid na +u | |
| o | Gornja pojasnica | **Donja** pojasnica | | Gornji zid | |
| u | Donja pojasnica | **Gornja** pojasnica | Krak uz v dijela | Donji zid | |

- **x** ide duž dijela od početka reza.
- **I-profili i pravougaoni HSS:** y na rebru ili bočnim zidovima od donje strane profila; y na pojasnici ili na gornjem i donjem zidu od njene ivice na zadnjoj strani (strana +u dijela).
- **Kanali** leže na leđima sa vrhovima pojasnica prema gore, kao na slici standarda. Zato y na rebru ide od vanjske strane gornje pojasnice nadolje, gornja pojasnica je strana u, a donja pojasnica strana o, a y na pojasnici ide od zadnje strane rebra prema vrhu pojasnice.
- **Uglovi:** y na svakom kraku od pete.
- **Limovi:** y od ivice −u lima.

Provjeri kako softver tvoje mašine čita strane kanala prije rezanja: neki programi okreću kanale naopako.

## Nije zapisano

Zakošenja, unutrašnji konturi, oznake (SI), uglovi piljenja osim pravog ugla, rupe u obliku proreza, rupe u okruglim cijevima (DetailCraft ih nema), te izrezi na uglovima i okruglim cijevima.
