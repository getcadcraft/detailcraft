---
title: Połączenia doczołowe
summary: Połącz dwa odcinki belki lub słupa czoło do czoła nakładkami na pasy i środnik, przykręconymi śrubami.
keywords: połączenie doczołowe, połączenie belki, połączenie słupa, nakładka, płyta łącząca, płyta pasa, płyta środnika, połączenie śrubowe, złącze, odcinek słupa, połącz
from: 97d141c2
---

Połączenie doczołowe na śruby łączy dwa odcinki jednego kształtownika dwuteowego czoło do czoła: nakładka po zewnętrznej stronie każdego pasa i płyta po każdej stronie środnika, przykręcone przez oba odcinki. DetailCraft przycina odcinki do szczeliny, układa cztery płyty, wierci otwory w płytach i w obu odcinkach, dodaje śruby i ostrzega o odległościach od krawędzi, rozstawie i dopasowaniu.

## Gdzie to działa

- Dwie belki lub dwa odcinki słupa o **tym samym profilu dwuteowym**, stykające się **czoło do czoła w jednej linii**: końce oddalone najwyżej o 50 mm, odcinki równoległe i na jednej prostej (z dokładnością do 1 mm). Każdy odcinek może być narysowany w dowolnym kierunku.
- Odcinki poziome, pochylone i pionowe – wszystkie działają.
- Odcinki o różnej wysokości lub szerokości pasa są odrzucane, podobnie kanały, kątowniki i rury.

## Dodawanie połączeń

1. Narysuj dwa odcinki tak, aby stykały się czoło do czoła. Aby podzielić istniejący element, narysuj go ponownie jako dwa odcinki.
2. Zaznacz jeden (lub oba) i wybierz {{ui:Połączenie doczołowe}} w menu {{ui:Więcej}} grupy {{ui:Połącz}}.
3. Każde wolne połączenie zaznaczonych odcinków z innym odcinkiem tego samego profilu dostaje połączenie doczołowe. Pasek stanu podaje, ile ich powstało.

Zaznacz połączenie (kliknij jedną z jego płyt), aby zmienić ustawienia w prawym panelu. {{ui:Zastosuj do podobnych (n)}} kopiuje je do każdego innego wolnego połączenia między odcinkami tego samego profilu.

## Ustawienia (mm)

| Ustawienie | Domyślnie | Co robi |
|---|---|---|
| Szczelina między końcami | 10 | Każdy odcinek jest przycinany o połowę tej wartości |
| Średnica śruby, otwór, gatunek, naddatek długości | 20, 22, A325, 30 | Jak dla płyt czołowych |
| Grubość płyty pasa | 12 | Płyta ma szerokość pasa |
| Rzędy śrub w pasie (z każdej strony) | 3 | Rzędy w poprzek pasa, po każdej stronie złącza |
| Rozstaw śrub w pasie | 75 | Wzdłuż elementu |
| Rozstaw poprzeczny śrub w pasie | 0 | Między dwiema liniami śrub; 0 = szerokość pasa minus 80 |
| Odległość od krawędzi pasa | 40 | Od końca elementu do pierwszej śruby i od ostatniej śruby do końca płyty |
| Grubość płyty środnika | 8 | Po jednej z każdej strony środnika |
| Rzędy śrub w środniku | 3 | W górę środnika, wyśrodkowane |
| Kolumny śrub w środniku (z każdej strony) | 2 | Wzdłuż elementu, po każdej stronie złącza |
| Rozstaw śrub w środniku, w górę środnika / wzdłuż elementu | 75, 75 | |
| Odległość od krawędzi środnika | 40 | Jak dla pasów |
| Wysokość płyty środnika | 0 | 0 = wolny środnik między zaokrągleniami minus 10 u góry i u dołu |
| Materiał płyt | A36 | Tekst |

Długości płyt wynikają ze śrub: płyta pasa = szczelina + 2 × (2 × odległość od krawędzi + (rzędy − 1) × rozstaw); płyty środnika analogicznie, z ich kolumnami. Przy wartościach domyślnych płyty pasów mają 470 mm długości.

## Warto wiedzieć

- Płyty należą do **pierwszego narysowanego odcinka** (we właściwościach nazwanego pierwszym odcinkiem): pojawiają się na jego rysunku złożeniowym i są z nim dostarczane, przykręcone, nie spawane. Rysunek złożeniowy drugiego odcinka pokazuje tylko jego otwory.
- Śruby pasów łączą pas z jego płytą; śruby środnika łączą środnik z obiema płytami środnika. Długości śrub są podane osobno we właściwościach.
- Ostrzeżenia używają tych samych minimów EN 1993-1-8, co pozostałe połączenia (odległość od krawędzi i końca 1,2 × otwór, rozstaw 2,2 × otwór wzdłuż i 2,4 × otwór w poprzek), a także ostrzeżenia, gdy płyta środnika jest głębsza niż wolny środnik oraz gdy śruby pasa są za blisko środnika na zaokrąglenie.
- DetailCraft nie projektuje połączenia (brak sprawdzenia nośności) i nie tworzy podkładek dla odcinków o różnej grubości.
- Kopiowanie obu odcinków kopiuje ich połączenie; usunięcie któregokolwiek odcinka usuwa je.
