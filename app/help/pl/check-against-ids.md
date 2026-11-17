---
title: Sprawdzanie eksportu IFC według IDS klienta
summary: Wczytaj otrzymany plik .ids i zobacz w Problemach każdą wyeksportowaną część, która go nie spełnia, zanim wyślesz IFC.
keywords: ids, information delivery specification, buildingsmart, wymagania, dostawa, sprawdzanie, walidacja, qa, eksport ifc, właściwość, materiał, zamówienia
from: 50d0f785
---

## Co zrobisz

IDS (Information Delivery Specification, standard buildingSMART) to lista tego, co musi zawierać IFC. DetailCraft sprawdza IFC, który by wyeksportował (ten sam plik, który zapisuje {{ui:IFC}}), według otrzymanego IDS i wypisuje każdy element, który nie spełnia wymagań.

## Kroki

1. Otwórz lub narysuj swój model.
2. Kliknij {{ui:Sprawdź według IDS…}} w grupie {{ui:Wyjście}} paska narzędzi.
3. Kliknij {{ui:Wczytaj plik .ids…}} i wybierz plik. Nic nie jest wysyłane.
4. Przeczytaj wynik: każda specyfikacja z {{ui:Spełnia}} lub {{ui:Nie spełnia}} i liczba elementów, których dotyczy.
5. Otwórz {{ui:Problemy}} ({{key:Ctrl+Shift+M}}) i kliknij niespełnienie: element, połączenie, schody lub ławę, z których pochodzi, zostaje zaznaczony, a widok przybliża się do niego.

## Co powinno być widoczne

- Jedno ostrzeżenie na każdy wyeksportowany element i wymaganie, którego nie spełnia, z nazwą specyfikacji, tym, czego żąda IDS, i tym, co ma eksport.
- Raport sprawdzenia (w Problemach) zaczyna się od IDS: tytuł, wersja, autor i liczby dla każdej specyfikacji.

## Warto wiedzieć

- IDS jest zapisany w pliku modelu, więc jest sprawdzany ponownie po otwarciu modelu. Wczytanie lub usunięcie go to jeden krok, który można cofnąć.
- Każda zmiana jest sprawdzana ponownie chwilę później; w dużym modelu sprawdzanie czeka trochę dłużej między przebiegami.
- GlobalId w eksporcie pochodzą z nazwy modelu i numerów części w DetailCraft, więc nie zmieniają się między sprawdzeniami. Zmiana nazwy modelu nadaje każdemu elementowi nowe GlobalId.
- Liczby są porównywane w jednostkach SI (eksport jest w milimetrach; długości są najpierw zamieniane na metry).

- Wzorce w IDS są odczytywane jako cała wartość. `^` na początku i `$` na końcu również są traktowane jako „cała wartość”, tak jak zwykle oznaczają je pliki IDS.

## Dalej

- [Eksport IFC](topic:ifc-export)
