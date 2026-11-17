---
title: Pola pliku NC
summary: Co DetailCraft zapisuje w każdym pliku DSTV NC, pole po polu, oraz jak mierzy się ściany i współrzędne.
keywords: nc1, dstv, plik nc, blok st, ak, bo, nagłówek, ściany, współrzędne, cnc, format
from: 1b676fc1
---

Każdy plik `.nc1` opisuje jeden znacznik elementu. Wiersze kończą się CR LF. Pola tekstowe zawierają wyłącznie znaki ASCII; inne znaki zamieniają się na „?”. Drugi wiersz to komentarz `** DetailCraft <mark>.nc1`.

## Nagłówek (ST)

| Pole | Dwuteownik, ceownik | Kątownik | Prostokątny HSS | Okrągły HSS | Blacha |
|---|---|---|---|---|---|
| Zlecenie | Nazwa modelu | ← | ← | ← | ← |
| Rysunek, pozycja | Znacznik elementu | ← | ← | ← | ← |
| Etap | Etap elementu lub 1 | ← | ← | ← | ← |
| Gatunek stali | Gatunek materiału | ← | ← | ← | ← |
| Ilość | Liczba elementów o tym znaczniku | ← | ← | ← | ← |
| Profil | Nazwa profilu, np. W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Kod profilu | I lub U (ceownik) | L | M | RO | B |
| Długość | Długość cięcia | ← | ← | ← | Długość |
| Wysokość | Wysokość d | Ramię | Wysokość | Średnica | Szerokość blachy |
| Szerokość pasa | bf | Ramię | Szerokość | Średnica | 0 |
| Grubość pasa | tf | t | Ścianka t | Ścianka t | 0 |
| Grubość środnika | tw | t | Ścianka t | Ścianka t | Grubość blachy |
| Promień | Promień zaokrąglenia (0 dla ceowników AISC) | 0 | Promień zewnętrznego narożnika | 0 | 0 |
| Masa na metr | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Powierzchnia malowania na metr | Obwód zewnętrzny, m²/m | ← | ← | ← | 2 (obie strony, m²/m²) |
| Kąty cięcia piłą (4 pola) | 0 (prostopadłe) | ← | ← | ← | ← |
| Pola tekstowe (4) | `-` | ← | ← | ← | ← |

Blachy stosują kolumnę normy „dla blach”. Norma nie ma kolumny dla okrągłych rur: DetailCraft zapisuje średnicę jako wysokość i szerokość pasa, a ściankę jako obie grubości.

## Kontury zewnętrzne (AK)

- **Dwuteowniki i ceowniki:** środnik (v), z prostokątnym wycięciem dla każdego wycięcia; każdy pas (o i u), skrócony na końcu tam, gdzie wycięcie jest co najmniej tak głębokie jak pas.
- **Prostokątne HSS:** obie ścianki boczne (v i h), z wycięciami, oraz ścianki górna i dolna (o i u).
- **Kątowniki:** jeden prostokąt na ramię (v i u). Wycięć na kątownikach nie zapisuje się: taki element jest wymieniony jako niezapisany. Stężenie kątownikowe przykręcane do [blachy węzłowej](topic:brace-gussets) ma otwory na przykręcanym ramieniu: v dla ramienia wzdłuż u elementu, u dla ramienia wzdłuż v elementu.
- **Okrągłe HSS:** jeden prostokąt na v, rura widziana z przodu (długość × średnica).
- **Blachy:** jeden prostokąt na ścianie v.

Każdy kontur jest zamknięty (pierwszy punkt powtórzony na końcu) i biegnie przeciwnie do ruchu wskazówek zegara.

## Otwory (BO)

Jedna linia na otwór: ściana, x, y, średnica, głębokość 0 (przelotowy). Uwzględniane są wszystkie otwory: te, które wpisano, i te, które utworzyły połączenia. Otwór przechodzący przez ścianki boczne prostokątnego HSS zapisuje się dwa razy: raz na v i raz na h.

## Ściany i współrzędne

Każdy profil jest umieszczany tak, jak rysunek położenia profili w normie (DSTV 1998, s. 7): x wzdłuż elementu, Y w poprzek, Z w górę od tylnej ściany, z punktem zerowym w zewnętrznym narożniku. DetailCraft nigdy nie odbija elementu, aby pasował do rysunku.

| Ściana | Dwuteownik | Ceownik | Kątownik | Prostokątny HSS | Blacha |
|---|---|---|---|---|---|
| v | Środnik, przód | Środnik, widziany od strony krawędzi swobodnych pasów | Ramię wzdłuż u elementu | Ścianka boczna przy −u | Płaszczyzna blachy |
| h | | | | Ścianka boczna przy +u | |
| o | Pas górny | **Pas dolny** | | Ścianka górna | |
| u | Pas dolny | **Pas górny** | Ramię wzdłuż v elementu | Ścianka dolna | |

- **x** biegnie wzdłuż elementu od początku cięcia.
- **Dwuteowniki i prostokątne HSS:** y na środniku lub ściankach bocznych liczone od spodu profilu; y na pasie albo na ściankach górnej i dolnej liczone od jego krawędzi po stronie tylnej (strona +u elementu).
- **Ceowniki** leżą na grzbiecie, stopami do góry, jak na rysunku normy. Zatem y na środniku biegnie od zewnętrznej strony pasa górnego w dół, pas górny to ściana u, pas dolny to ściana o, a y na pasie biegnie od tyłu środnika w stronę krawędzi swobodnej pasa.
- **Kątowniki:** y na każdym ramieniu od pięty.
- **Blachy:** y od krawędzi −u blachy.

Przed cięciem sprawdź, jak oprogramowanie maszyny odczytuje ściany ceowników: niektóre programy obracają ceowniki do góry nogami.

## Czego nie zapisuje się

Fazki, kontury wewnętrzne, znakowania (SI), kąty cięcia inne niż prostopadłe, otwory podłużne, otwory w okrągłych rurach (DetailCraft ich nie ma) oraz wycięcia na kątownikach i okrągłych rurach.
