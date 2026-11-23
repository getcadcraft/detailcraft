---
title: Sprawdzanie spoin w miejscach styku elementów
summary: Po sprawdzeniu projektowym sprawdź spoiny pachwinowe i czołowe dookoła każdego elementu tam, gdzie styka się z innym elementem lub podporą, według AISC 360-16 rozdział J lub EN 1993-1-8, i zobacz, która grupa spoin jest najbardziej wykorzystana i w jakiej kombinacji. Pomoc do czasu sprawdzenia przez inżyniera.
keywords: spoina, spoiny, sprawdzenie spoin, spoina pachwinowa, spoina czołowa, pełny przetop, AISC 360, EN 1993-1-8, grupa spoin, wykorzystanie, nośność, węzeł, połączenie, konstrukcyjny, inżynier
from: e8eebbe6
---

Blok {{ui:Sprawdzenie spoin}} w karcie {{ui:Analiza}}, pod {{ui:Sprawdzenia projektowe}}, przyjmuje siły z ostatnio rozwiązanej ramy oraz utworzone przez Ciebie kombinacje nośności i sprawdza spoinę dookoła każdego elementu w każdym węźle: tam, gdzie element styka się z innym elementem albo stoi na podporze.

:::warning
To jest **pomoc do czasu sprawdzenia przez inżyniera**. Sprawdza spoinę poprowadzoną dookoła przekroju, jako jedną grupę, na podstawie własnych sił końcowych ramy. Nie odczytuje rozmiaru ani długości spoin, które narysowałeś na rysunkach warsztatowych, i nie sprawdza śrub, blach, docisku, ścinania bloku ani odginania (prying). Jej wyniki nie są pieczątką.
:::

## Uruchom

1. Rozwiąż ramę w karcie {{ui:Analiza}}, wybierz {{ui:Norma projektowa}} w {{ui:Sprawdzenia projektowe}}, a potem naciśnij {{ui:Utwórz kombinacje}} (sprawdzenie spoin wymaga tych samych kombinacji nośności).
2. W {{ui:Sprawdzenie spoin}} ustaw {{ui:Katet spoiny pachwinowej (mm, 0 = ścianka, najwyżej 8)}}. 0 oznacza, że katet idzie za cieńszą ścianką przekroju, do 8 mm. Według normy AISC {{ui:Wytrzymałość metalu spoiny F_EXX (MPa)}} to wytrzymałość metalu spoiny (482.6 MPa to elektroda E70). Według EN 1993 gatunek stali określa wytrzymałość metalu spoiny i współczynnik korelacji.
3. Naciśnij {{ui:Sprawdź spoiny}}.

Każdy wiersz tabeli to jedna grupa spoin (jeden koniec elementu w węźle). Liczby to: **wykorzystanie** jej miarodajnego sprawdzenia, stan (przechodzi lub nie przechodzi) oraz które sprawdzenie i która klauzula były miarodajne w jakiej kombinacji. Grupa, której sprawdzenie nie może ocenić, podaje powód (brak gatunku stali, brak współczynnika korelacji dla gatunku w tabeli 4.1 EN 1993-1-8, brak spoiny na tym przekroju) zamiast liczby.

Zmiana katetu lub metalu spoiny albo edycja modelu czyści tabelę, bo była ona dla starych wartości. Naciśnij {{ui:Sprawdź spoiny}} ponownie.

## Co jest sprawdzane

- **ASCE 7 + AISC 360:** metal spoiny pachwinowej (kąt obciążenia względem spoiny się liczy, J2.4), ścinanie metalu podstawy (J4.2) i spoiny czołowe z pełnym przetopem (tabela J2.5).
- **EN 1990 + EN 1993:** spoiny pachwinowe uproszczoną metodą EN 1993-1-8 4.5.3.3 i spoiny czołowe z 4.7.1.
- Ostrzeżenia konstrukcyjne względem minimalnego i maksymalnego katetu oraz minimalnej długości, z podaniem wartości, z którą je porównano.

Grupa spoin jest traktowana jak przekrój liniowy i obciążona metodą wektorów sprężystych: każdy punkt spoiny przenosi siłę osiową elementu, oba ścinania, skręcanie i oba momenty zginające, dodane jako wektory.

## Czego nie sprawdzono

Spoiny z częściowym przetopem, spoiny ukośne, spoiny grzybkowe i rowkowe, spoiny przerywane, metoda środka chwilowego, metoda kierunkowa EN, zmęczenie i ścinanie bloku metalu podstawy nie są zbudowane. Niektóre stałe norm zapisano na podstawie norm i nie porównano ich jeszcze z wydrukiem; raport podaje, skąd pochodzi każda liczba ({{ui:Raport (PDF)}} zyskuje tabele spoin, gdy już sprawdziłeś). Zobacz [Sprawdzanie elementów stalowych](topic:design-checks) i [Jeszcze nie zbudowano](topic:not-built-yet).
