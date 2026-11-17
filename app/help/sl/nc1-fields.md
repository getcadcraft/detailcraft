---
title: Polja datotek NC
summary: Kaj DetailCraft zapiše v vsaki datoteki DSTV NC, polje za poljem, in kako se merita ploskve in koordinate.
keywords: nc1, dstv, datoteka nc, blok ST, ak, bo, glava, ploskve, koordinate, cnc, format
from: 1b676fc1
---

Vsaka datoteka `.nc1` opisuje eno oznako dela. Vrstice se končajo s CR LF. Besedilna polja vsebujejo samo ASCII; drugi znaki postanejo "?". Druga vrstica je komentar `** DetailCraft <mark>.nc1`.

## Glava (ST)

| Polje | Profil I, profil U | Kotnik | Pravokotni HSS | Okrogli HSS | Pločevina |
|---|---|---|---|---|---|
| Naročilo | Ime modela | ← | ← | ← | ← |
| Risba, kos | Oznaka dela | ← | ← | ← | ← |
| Faza | Faza dela ali 1 | ← | ← | ← | ← |
| Kakovost jekla | Razred materiala | ← | ← | ← | ← |
| Količina | Število delov s to oznako | ← | ← | ← | ← |
| Profil | Ime profila, na primer W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Koda profila | I ali U (profil U) | L | M | RO | B |
| Dolžina | Dolžina reza | ← | ← | ← | Dolžina |
| Višina | Globina d | Krak | Višina | Premer | Širina pločevine |
| Širina pasu | bf | Krak | Širina | Premer | 0 |
| Debelina pasu | tf | t | Debelina stene t | Debelina stene t | 0 |
| Debelina stojine | tw | t | Debelina stene t | Debelina stene t | Debelina pločevine |
| Polmer | Polmer zaobljenja (0 za profile U AISC) | 0 | Polmer zunanjega vogala | 0 | 0 |
| Masa na meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Površina premaza na meter | Zunanji obseg, m²/m | ← | ← | ← | 2 (obe ploskvi, m²/m²) |
| Koti žaganja (4 polja) | 0 (pravokotno) | ← | ← | ← | ← |
| Besedilna polja (4) | `-` | ← | ← | ← | ← |

Pločevine sledijo stolpcu standarda „za pločevine“. Standard nima stolpca za okrogle cevi: DetailCraft zapiše premer kot višino in širino pasu, debelino stene pa kot obe debelini.

## Zunanji obrisi (AK)

- **Profili I in U:** stojina (v), z pravokotnim zarezom za vsak izrez; vsak pas (o in u), skrajšan na enem koncu, kjer izrez sega vsaj tako globoko kot pas.
- **Pravokotni HSS:** obe stranski steni (v in h), zarezani za izreze, ter zgornja in spodnja stena (o in u).
- **Kotniki:** en pravokotnik na krak (v in u). Izrezi na kotnikih se ne zapišejo: taka oznaka je navedena kot nezapisana. Diagonala iz kotnika, privijačena na [vozliščno pločevino](topic:brace-gussets), ima izvrtine na kraku, ki je privijačen: v za krak vzdolž u dela, u za krak vzdolž v dela.
- **Okrogli HSS:** en pravokotnik na v, cev gledana od spredaj (dolžina × premer).
- **Pločevine:** en pravokotnik na ploskvi v.

Vsak obris je sklenjen (prva točka se ponovi na koncu) in teče v nasprotni smeri urnega kazalca.

## Izvrtine (BO)

Ena vrstica na izvrtino: ploskev, x, y, premer, globina 0 (skozi). Vključene so vse izvrtine, tiste, ki ste jih vnesli, in tiste, ki jih naredijo povezave. Izvrtina skozi stranski steni pravokotnega HSS se zapiše dvakrat, enkrat na v in enkrat na h.

## Ploskve in koordinate

Vsak profil je postavljen, kot ga prikazuje slika položajev profilov v standardu (DSTV 1998, str. 7): x vzdolž dela, Y prečno, Z navzgor od zadnje ploskve, z ničelno točko na zunanjem vogalu. DetailCraft nikoli ne zrcali dela, da bi ustrezal sliki.

| Ploskev | Profil I | Profil U | Kotnik | Pravokotni HSS | Pločevina |
|---|---|---|---|---|---|
| v | Stojina, spredaj | Stojina, gledana s strani konca pasov | Krak vzdolž u dela | Stranska stena pri −u | Ploskev pločevine |
| h | | | | Stranska stena pri +u | |
| o | Zgornji pas | **Spodnji** pas | | Zgornja stena | |
| u | Spodnji pas | **Zgornji** pas | Krak vzdolž v dela | Spodnja stena | |

- **x** teče vzdolž dela od začetka reza.
- **Profili I in pravokotni HSS:** y na stojini ali stranskih stenah teče od spodnje strani profila; y na pasu ali na zgornji in spodnji steni teče od njegovega roba na zadnji strani (strani +u dela).
- **Profili U** ležijo na hrbtu s konci pasov navzgor, kot na sliki v standardu. Zato y na stojini teče od zunanje strani zgornjega pasu navzdol, zgornji pas je ploskev u, spodnji pas pa ploskev o, y na pasu pa teče od hrbta stojine proti koncu pasu.
- **Kotniki:** y na vsakem kraku teče od pete.
- **Pločevine:** y teče od roba −u pločevine.

Preverite, kako vaša programska oprema obravnava ploskve profilov U, preden začnete rezati: nekateri programi obrnejo profile na glavo.

## Ni zapisano

Skosi, notranji obrisi, označbe (SI), koti žaganja, ki niso pravokotni, podolgovate izvrtine, izvrtine v okroglih votlih profilih (DetailCraft jih nima) ter izrezi na kotnikih in okroglih votlih profilih.
