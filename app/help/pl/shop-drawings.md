---
title: Tworzenie rysunków warsztatowych
summary: Jeden arkusz na znacznik elementu, tworzony naraz: podgląd dowolnego z nich oraz pobranie jednego arkusza lub całego zestawu jako PDF w formacie od A4 do A1 lub ANSI B do D, z otworami, wycięciami, wymiarami i tabliczką rysunkową.
keywords: rysunek warsztatowy, rysunki warsztatowe, wszystkie elementy, partia, cały zestaw, rysunek pojedynczego elementu, rysunek wykonawczy, pdf, rysunek szczegółowy, rysunek elementu, drukuj
from: d25fe035
---

DetailCraft tworzy jeden arkusz na znacznik elementu, dla każdej belki, słupa, stężenia i blachy w modelu, naraz: nie musisz zaznaczać ich pojedynczo. Identyczne elementy mają ten sam znacznik, więc dzielą arkusz. Arkusze są tworzone na miejscu z modelu; nie są zapisywane ani edytowane.

## Utwórz cały zestaw

1. Wybierz {{ui:Rysunek warsztatowy}} w grupie {{ui:Wyjście}}. Nic nie musi być zaznaczone. Gdy element jest zaznaczony, okno otwiera jego arkusz. W panelu {{ui:Właściwości}} ten sam przycisk nazywa się {{ui:Rysunek warsztatowy}} dla elementów, a {{ui:Rysunek blachy}} dla połączeń.
2. Otwiera się podgląd z tytułem znacznika elementu, na przykład "Rysunek warsztatowy b1". Pierwsza lista obok tytułu zawiera każdy znacznik elementu z jego profilem, długością i ilością: wybierz jeden, aby zobaczyć jego arkusz. Druga lista zmienia rozmiar arkusza; cały zestaw jest tworzony od nowa w tym rozmiarze (zob. [Rysunki ogólne i zespołów](topic:drawings#choose-the-sheet-size)).
3. Wybierz {{ui:Pobierz wszystkie}} (przycisk pokazuje liczbę arkuszy), aby pobrać jeden PDF ze stroną na każdy znacznik elementu: `<name> Shop drawings.pdf`. Każdy arkusz ma w tabliczce napis "Arkusz 3 z 42". Albo wybierz {{ui:Pobierz PDF}}, aby pobrać ten, który oglądasz: `<name> <mark>.pdf`.
4. Zamknij podgląd krzyżykiem × lub {{key:Esc}}.

Jeśli {{ui:Rysunek warsztatowy}} jest wyszarzony, model nie ma jeszcze żadnych elementów.

## Co jest na arkuszu

Dla dwuteownika:

- **Elewacja**, patrząc na środnik: element z wyciętymi wycięciami, otwory w środniku jako okręgi, a otwory w półkach jako linie ukryte (przerywane).
- **Rzut półki górnej**, widziany z góry, gdy jakakolwiek półka ma otwory. Otwory w dolnej półce są przerywane.
- **Przekrój** przez profil.
- **Wymiary:** łańcuchowe położenia otworów wzdłuż elementu oraz całkowita długość, wysokości otworów w środniku, rozstaw i rozmiary wycięć.
- **Lista otworów:** każda grupa otworów, na przykład "8 x Ø22 w półce górnej".
- **Spoina**, gdy element ma przyspawane blachy.
- **Tabliczka rysunkowa:** znacznik elementu, znacznik zespołu, profil, materiał, długość, ilość, ciężar każdego i łączny, nazwa modelu i data.

Dla ceownika, kątownika lub profilu zamkniętego arkusz jest taki sam, patrząc na środnik lub bok: ścianki rury są liniami ukrytymi (przerywanymi), a przekrój podaje grubość ścianki.

Dla blachy: powierzchnia blachy z otworami i jej krawędź jako przekrój.

## Skale

Skala jest wybierana z listy (od 1:1 do 1:200), tak aby element zmieścił się na arkuszu. Długi, niski element byłby zbyt cienki, by czytać go w jednej skali, więc gdy głębokość wyszłaby poniżej 30 mm na papierze, głębokość jest rysowana w większej skali niż długość. Tytuł widoku mówi wtedy o tym, na przykład "długość 1:20, głębokość 1:5 (nie w jednej skali; wymiary mają pierwszeństwo)". Zawsze czytaj wymiary, a nie mierz arkusza.

## Warto wiedzieć

- Ilość to liczba elementów o tym znaczniku w modelu. Znaczniki mogą się przenumerować po zmianie; zob. [Sprawdzanie znaczników i zestawienia materiałów](topic:marks-and-bom).
- Każdy arkusz to jeden element osobno, bez symboli spoin; rysunki zespołów (z symbolami spoin) i rysunki ogólne są w [Rysunkach](topic:drawings). Arkusza nie można edytować ani opisywać w DetailCraft. Aby go opisać, otwórz PDF w aplikacji do adnotacji PDF, takiej jak MarkupCraft.
- Tabliczka rysunkowa mówi "DetailCraft — wersja laboratoryjna, milimetry".
- Tekst używa standardowej czcionki PDF Helvetica. Znaki spoza zestawu znaków Europy Zachodniej drukują się jako "?", a pasek stanu je liczy.

## Wydruk

Otwórz pobrany PDF w przeglądarce PDF i drukuj w skali 100% (bez "dopasuj do strony") na papierze wybranego rozmiaru, jeśli chcesz, by podane skale się zgadzały. Na mniejszym arkuszu przeskaluj go i polegaj na wymiarach.
