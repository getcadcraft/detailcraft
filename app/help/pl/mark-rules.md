---
title: Reguły znaczników
summary: Dokładnie kiedy dwa elementy lub dwa zespoły mają ten sam znacznik, jak numerowane są znaczniki oraz jak działają znaczniki ław i prętów.
keywords: znaczniki, numeracja, znacznik elementu, znacznik zespołu, prefiks, tolerancja, identyczne elementy, znaczniki prętów, znaczniki ław
from: ce02c98e
---

DetailCraft przelicza każdy znacznik po każdej zmianie. Nic nie jest zapisywane, więc znaczniki zawsze opisują model w jego obecnym stanie. Jak z nich korzystać: [Sprawdzanie znaczników i zestawienia materiałów](topic:marks-and-bom).

## Znaczniki elementów

Dwa elementy mają wspólny znacznik elementu, gdy zgadzają się wszystkie poniższe warunki:

1. Typ elementu (belka, słup, stężenie lub blacha).
2. Nazwa profilu (bez względu na wielkość liter).
3. Materiał (bez względu na wielkość liter).
4. Długość cięcia, z dokładnością do 1 mm.
5. Każdy otwór: strona, położenie wzdłuż i w poprzek, z dokładnością do 1 mm, a średnica z dokładnością do 0.1 mm.
6. Każde wycięcie: koniec, bok, długość i głębokość, z dokładnością do 1 mm.

{{ui:Nazwa}} elementu się nie liczy. Nie liczy się też jego położenie w modelu, obrót ani to, w jaki sposób został narysowany, o ile sam element jest ten sam.

### Elementy obrócone

Element jest porównywany we wszystkich obrotach, które odwzorowują jego przekrój na siebie. Jeśli którykolwiek z nich dopasuje go do innego elementu, mają wspólny znacznik.

| Kształt | Obroty, które się liczą |
|---|---|
| Dwuteowniki, prostokątne HSS, blachy | Koniec na koniec (wokół osi pionowej), koniec na koniec (wokół osi poziomej) oraz do góry nogami wokół własnej długości |
| Ceowniki | Koniec na koniec wokół osi poziomej wyłącznie, tak by środnik pozostał po tej samej stronie |
| Kątowniki, okrągłe HSS | Brak: porównywane w położeniu, w jakim leżą |

Belka z otworem blisko lewego końca pasuje więc do belki z tym samym otworem blisko prawego końca, a słup z otworami w jednym pasie pasuje do słupa z tymi samymi otworami w drugim pasie.

### Numeracja

| Typ | Prefiks elementu | Prefiks zespołu |
|---|---|---|
| Słup | c | C |
| Belka | b | B |
| Stężenie | br | BR |
| Blacha (położona, blacha czołowa lub blacha podstawy) | p | P |

Znaczniki są numerowane od 1 w obrębie każdego prefiksu. Kolejność jest taka: najpierw słupy, potem belki, stężenia i blachy; w obrębie typu według nazwy profilu w porządku naturalnym (W8x10 przed W12x26); dalej dłuższe elementy najpierw.

Ponieważ numeracja idzie tą kolejnością, dodanie lub zmiana jednego elementu może przesunąć numery innych.

## Znaczniki zespołów

- Każdy element, który nie jest przyspawany do innego elementu, jest głównym elementem własnego zespołu.
- Blachy czołowe są przyspawane do swojej belki, a blachy podstawy do swojego słupa, więc należą do zespołu tego elementu.
- Dwa zespoły mają wspólny znacznik, gdy ich główne elementy mają wspólny znacznik elementu, a przypisane do nich elementy mają te same znaczniki w tych samych miejscach (z dokładnością do 1 mm), przy zachowaniu tych samych obrotów co dla głównego elementu.
- Prefiks zespołu zależy od głównego elementu: belka z dwiema blachami czołowymi to zespół B.

Blachy umieszczone narzędziem {{ui:Blacha}} nie są do niczego przyspawane, więc każda z nich jest osobnym zespołem P.

## Znaczniki ław

Ławy o tej samej długości, szerokości, głębokości, tekście betonu, dolnej siatce zbrojenia i prętach wyprowadzenia mają wspólny znacznik: F1, F2 … w kolejności umieszczenia. Położenie i obrót się nie liczą.

## Znaczniki prętów

Pręty o tej samej średnicy, kształcie i wymiarach A, B i C (zaokrąglonych do milimetra) mają wspólny znacznik we wszystkich ławach. Znacznik to numer pręta, litera F i licznik dla danej średnicy: 5F1, 5F2, 6F1. Pręt wzdłuż dłuższego boku i pręt wzdłuż krótszego boku kwadratowej ławy są tym samym prętem i mają wspólny znacznik; kolumna {{ui:Używany do}} w zestawieniu wymienia oba zastosowania.
