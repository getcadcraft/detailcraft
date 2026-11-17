---
title: Zapasy dostawcy i terminy dostaw
summary: Sprawdź pręty z zapasów, które kupuje lista cięcia, względem listy zapasów dostawcy: czy jest ich wystarczająco i jak długo trwa oczekiwanie?
keywords: dostawca, zapas, termin dostawy, skład stali, huta, dostępność, zaległość, pręty, zakupy, dostawa
from: 1373f5a3
---

Karta {{ui:Dostawa}} wyszukuje każdy przekrój, który kupuje {{ui:Lista cięcia}}, na liście zapasów dostawcy. Plik pozostaje w modelu; nic nie jest nigdzie wysyłane.

## Dodawanie pliku dostawcy

Naciśnij {{ui:Dodaj plik dostawcy}} i wybierz plik CSV od dostawcy (rozdzielony przecinkami, średnikami lub tabulatorami). Potrzebna jest kolumna pozycji lub przekroju (Item, Name, Description, Section, SKU) oraz kolumna stanu (In stock, Quantity, On hand) albo terminu dostawy. Jednostka (each, metres, kilograms, tonnes), cena, dostawca i data uzupełnienia są odczytywane, gdy jest dla nich kolumna. Rozpoznawane są też słowa: „Out of stock”, „In stock”, „2-3 weeks”, „backorder”. Można zachować do pięciu plików; dodanie pliku o tej samej nazwie zastępuje go.

## Co widać

Dla każdego przekroju kupowanego przez listę cięcia tabela pokazuje, czego potrzebuje model, co jest w zapasie, termin dostawy, dostawcę i wynik:

- **Pokryte:** w zapasie jest wystarczająco.
- **Brakuje:** zapas jest poniżej potrzeb. Jeśli zapas jest poniżej potrzeb i ustawisz najdłuższe oczekiwanie, termin dostawy podaje, ile czeka reszta.
- **Za późno:** brak danych o zapasie, a termin dostawy jest dłuższy niż akceptowane oczekiwanie.
- **Brak danych o zapasie:** plik tego nie podaje.
- **Inna jednostka:** dostawca podaje przekrój w jednostce, której model nie może wyznaczyć.

Potrzeby modelu podawane są w prętach (z zagnieżdżonej listy cięcia, przy Twoich długościach zapasowych), w metrach zakupionego pręta i w kilogramach (masa przekroju na metr); używana jest jednostka samego pliku. Przekrój jest dopasowywany po nazwie („W16 X 26” i „w16x26” to to samo). Przekroje, których nie ma w pliku, są wymienione.

Braki i późne przekroje są w panelu {{ui:Problemy}}. Ten widok niczego nie zamawia.

## Ograniczenia

Dane o zapasach i terminy dostaw pochodzą z pliku i odnoszą się do dnia jego utworzenia. Blach nie zagnieżdża się, więc nie są wyszukiwane. Plik jest tylko odczytywany: każda instrukcja w nim jest zwykłym tekstem.
