---
title: Wysyłanie plików NC do warsztatu
summary: Eksportuj pliki DSTV NC dla każdego znacznika elementu (dwuteowniki, ceowniki, kątowniki, HSS, blachy) jako archiwum zip i sprawdź je, zanim trafią do maszyny.
keywords: nc, nc1, dstv, cnc, maszyna, linia belek, linia wiercenia, cięcie blach, eksport, produkcja, zip
from: 598b6091
---

DetailCraft zapisuje jeden plik DSTV NC (`.nc1`) dla każdego znacznika elementu, dla dwuteowników, ceowników, kątowników, prostokątnych i okrągłych HSS oraz blach, i pakuje je razem w archiwum zip. Linie belek i maszyny do cięcia blach odczytują te pliki, aby piłować, wiercić i ciąć.

## Eksport

1. Najpierw wyczyść kartę {{ui:Problemy}}: połączenie, którego nie udało się zbudować, nie dodaje żadnych otworów.
2. Zapisz model ({{key:Mod+S}}), aby pliki NC odpowiadały zapisanemu modelowi.
3. W grupie {{ui:Wyjście}} wybierz {{ui:Pliki NC}}.
4. Przeglądarka pobiera `<name> NC.zip`. Pasek stanu podaje, ile plików zawiera, i wymienia znaczniki, których nie zapisano (kątownik lub okrągła rura z wycięciem).

Wewnątrz archiwum każdy plik nazywa się od znacznika elementu: `b1.nc1`, `c1.nc1`, `p1.nc1` … Archiwum zip nie jest kompresowane i otworzy je każde narzędzie do zip.

Jeśli model nie ma elementów, pasek stanu o tym informuje.

## Zawartość każdego pliku

- **Nagłówek (ST):** nazwa modelu jako zlecenie, znacznik elementu jako rysunek i pozycja, etap 1, gatunek materiału, ilość, profil i jego wymiary, masa na metr oraz powierzchnia malowania na metr. Cięcia piłą są prostopadłe.
- **Kontury zewnętrzne (AK):** obrys środnika z wyciętymi wycięciami oraz obrys każdego pasa, skrócony tam, gdzie wycięcie go usuwa.
- **Otwory (BO):** każdy otwór z jego ścianą, położeniem i średnicą, także otwory wykonane przez blachy czołowe i blachy podstawy.

Pole po polu, z zasadami dla ścian i współrzędnych: [Pola pliku NC](topic:nc1-fields).

## Czego nie zapisuje się

- Kątowniki i okrągłe rury z wycięciem: brak pliku NC. Ich znaczniki są wymienione na pasku stanu.
- Otwory w okrągłych rurach (DetailCraft ich nie wykonuje).
- Fazki, kontury wewnętrzne, znakowanie elementów (rysowanie) i kąty cięcia inne niż prostopadłe.
- Otwory podłużne (DetailCraft ma tylko otwory okrągłe).

## Sprawdzenie przed obróbką

Pliki NC DetailCraft są sprawdzane przez własny zestaw testów, ale nie były uruchamiane na maszynach warsztatu.

1. Otwórz pliki w przeglądarce NC warsztatu lub w oprogramowaniu maszyny i porównaj je z rysunkami warsztatowymi.
2. Przed uruchomieniem serii sprawdź na maszynie po jednym elemencie każdego rodzaju.
3. Sprawdź, jak oprogramowanie odczytuje współrzędne y pasów i ściany ceowników: DetailCraft mierzy y pasa od krawędzi tylnej i układa ceowniki na grzbiecie, tak jak rysuje je norma (zobacz [Pola pliku NC](topic:nc1-fields#faces-and-coordinates)).
