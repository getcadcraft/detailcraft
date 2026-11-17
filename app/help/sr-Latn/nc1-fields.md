---
title: Polja NC datoteke
summary: Šta DetailCraft upisuje u svaku DSTV NC datoteku, polje po polje, i kako se mere strane i koordinate.
keywords: nc1, dstv, nc datoteka, ST blok, ak, bo, zaglavlje, strane, koordinate, cnc, format
from: 1b676fc1
---

Svaka `.nc1` datoteka opisuje jednu oznaku dela. Redovi se završavaju sa CR LF. Tekstualna polja sadrže običan ASCII; ostali znakovi postaju "?". Drugi red je komentar, `** DetailCraft <mark>.nc1`.

## Zaglavlje (ST)

| Polje | I-profil, U-profil | Ugao | Pravougaoni HSS | Okrugli HSS | Lim |
|---|---|---|---|---|---|
| Porudžbina | Naziv modela | ← | ← | ← | ← |
| Crtež, komad | Oznaka dela | ← | ← | ← | ← |
| Faza | Faza dela, ili 1 | ← | ← | ← | ← |
| Kvalitet čelika | Oznaka kvaliteta materijala | ← | ← | ← | ← |
| Količina | Broj delova sa ovom oznakom | ← | ← | ← | ← |
| Profil | Naziv profila, na primer W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Kod profila | I ili U (U-profil) | L | M | RO | B |
| Dužina | Dužina sečenja | ← | ← | ← | Dužina |
| Visina | Dubina d | Krak | Visina | Prečnik | Širina lima |
| Širina pojasa | bf | Krak | Širina | Prečnik | 0 |
| Debljina pojasa | tf | t | Debljina zida t | Debljina zida t | 0 |
| Debljina rebra | tw | t | Debljina zida t | Debljina zida t | Debljina lima |
| Poluprečnik | Poluprečnik zaobljenja (0 za AISC U-profile) | 0 | Spoljašnji poluprečnik ugla | 0 | 0 |
| Masa po metru | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Površina za farbanje po metru | Spoljašnji obim, m²/m | ← | ← | ← | 2 (obe strane, m²/m²) |
| Uglovi reza (4 polja) | 0 (upravan) | ← | ← | ← | ← |
| Tekstualna polja (4) | `-` | ← | ← | ← | ← |

Limovi prate kolonu standarda „za limove“. Standard nema kolonu za okrugle cevi: DetailCraft upisuje prečnik kao visinu i širinu pojasa, a zid kao obe debljine.

## Spoljašnji konturi (AK)

- **I-profili i U-profili:** rebro (v), sa pravougaonim zarezom za svaki izrez; svaki pojas (o i u) skraćen na kraju gde je izrez bar jednako dubok kao pojas.
- **Pravougaoni HSS:** oba bočna zida (v i h), sa zarezima za izreze, i gornji i donji zid (o i u).
- **Uglovi:** jedan pravougaonik po kraku (v i u). Izrezi na uglovima se ne upisuju: takav deo je naveden kao neupisan. Dijagonala od ugla vezana za [čvorni lim](topic:brace-gussets) ima rupe na kraku koji je vezan: v za krak uz u dela, u za krak uz v dela.
- **Okrugli HSS:** jedan pravougaonik na v, cev gledana sa prednje strane (dužina × prečnik).
- **Limovi:** jedan pravougaonik na strani v.

Svaki kontur je zatvoren (prva tačka se ponavlja na kraju) i ide suprotno od kazaljke na satu.

## Rupe (BO)

Jedan red po rupi: strana, x, y, prečnik, dubina 0 (kroz). Upisane su sve rupe, one koje si uneo i one koje su napravile veze. Rupa kroz bočne zidove pravougaonog HSS-a upisuje se dvaput, jednom na v i jednom na h.

## Strane i koordinate

Svaki profil je postavljen kao što standardni crtež položaja profila prikazuje (DSTV 1998, str. 7): x duž dela, Y poprečno, Z uvis od zadnje strane, sa nultom tačkom u spoljašnjem uglu. DetailCraft nikad ne preslikava deo da bi odgovarao crtežu.

| Strana | I-profil | U-profil | Ugao | Pravougaoni HSS | Lim |
|---|---|---|---|---|---|
| v | Rebro, spreda | Rebro, gledano sa strane vrhova pojasa | Krak uz u dela | Bočni zid na −u | Površina lima |
| h | | | | Bočni zid na +u | |
| o | Gornji pojas | **Donji** pojas | | Gornji zid | |
| u | Donji pojas | **Gornji** pojas | Krak uz v dela | Donji zid | |

- **x** ide duž dela od početka reza.
- **I-profili i pravougaoni HSS:** y na rebru ili bočnim zidovima meri se od donje strane profila; y na pojasu ili na gornjem i donjem zidu meri se od njegove ivice na zadnjoj strani (strana +u dela).
- **U-profili:** leže na leđima sa vrhovima pojasa okrenutim nagore, kao na crtežu standarda. Zato y na rebru ide od spoljne strane gornjeg pojasa naniže, gornji pojas je strana u, donji pojas je strana o, a y na pojasu ide od zadnje strane rebra ka vrhu pojasa.
- **Uglovi:** y na svakom kraku meri se od pete.
- **Limovi:** y se meri od −u ivice lima.

Pre sečenja proveri kako softver tvoje mašine čita strane U-profila: neki programi okreću U-profile naopako.

## Nije upisano

Skosi, unutrašnji konturi, oznake (SI), uglovi reza različiti od upravnog, duguljaste rupe, rupe u okruglim cevima (DetailCraft ih nema) i izrezi na uglovima i okruglim cevima.
