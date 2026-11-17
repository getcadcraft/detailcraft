---
title: Rysunki ogólne i złożeniowe
summary: Twórz rzuty, elewacje i jeden rysunek złożeniowy na każdy znacznik zespołu z modelu, na arkuszach od A4 do A1 lub ANSI B do D, wydawaj je z literami rewizji i pobieraj jako PDF, DWG lub DXF.
keywords: linie ukryte, usuwanie linii ukrytych, przerywane, chmura rewizji, chmury, trójkąt rewizji, rzut kotwi, pręty kotwiące, zestawienie prętów, zestawienie blach podstawy, wytyczenie, wydanie, rewizja, rew., tabela rewizji, ponowne wydanie, dziennik wydań, przekazanie, dwg, dxf, plik cad, eksport rysunków, rysunki, rysunek ogólny, ga, rzut, elewacja, rysunek złożeniowy, format arkusza, rozmiar papieru, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, drukuj, skala, tabliczka rysunkowa, odwołanie do modelu
from: 709f8604
---

Wybierz {{ui:Rysunki}} w grupie {{ui:Wyjście}}. DetailCraft tworzy cały zestaw z modelu w jego obecnym stanie. Nic nie jest zapisywane: zmień model, otwórz ponownie {{ui:Rysunki}}, a zestaw zostanie utworzony od nowa.

## Co zawiera zestaw

- **Rzuty**, po jednym na każdy poziom, na którym coś się znajduje, patrzące z góry.
- **Elewacje**, po jednej na każdą oś siatki, przy której znajdują się elementy w odległości do 1 m od niej.
- **Rzut kotwi**, gdy model ma blachy podstawy: każda blacha podstawy widziana z góry wraz ze słupem i prętami kotwiącymi, osie z ich wymiarami, typowy detal każdego wzoru prętów (BP1, BP2 …) z rozstawem prętów i odległościami od krawędzi oraz dwa zestawienia: prętów kotwiących według znacznika (R1, R2 …: ilość, średnica, długość, wystawanie ponad blachę, zakotwienie, gatunek) oraz blach podstawy według osi (słup, wzór, blacha, pręty, górna krawędź blachy). Słup nieleżący na osi jest opisany swoimi współrzędnymi.
- **Rysunki złożeniowe**, po jednym na każdy znacznik zespołu: widok z przodu, z góry i z końca, wymiary łańcuchowe do otworów i krawędzi blach, lista części, luźne śruby i pręty oraz uwagi o spoinach i otworach. Każda spawana blacha ma w widoku z przodu znak spoiny pachwinowej (AWS A2.4): strzałka wskazuje złącze, trójkąt pod linią odniesienia oznacza stronę strzałki, liczba po jego lewej stronie to wymiar spoiny w mm, a okrąg tam, gdzie strzałka spotyka linię, oznacza spoinę dookoła.

**Linie ukryte.** Rzuty i elewacje pomijają linie części, które są całkowicie zasłonięte przez część leżącą przed nią (belka widziana od czoła za słupem). Rysunki złożeniowe rysują blachę przerywaną tam, gdzie zasłania ją część główna: za środnikiem w widoku z przodu (patrząc od strony −u części), pod górnym pasem w widoku z góry. Części leżące na tej samej głębokości lub nakładające się na siebie w głębokości są rysowane w całości.

Każdy arkusz ma tabliczkę rysunkową z numerem rysunku, skalą, nazwą modelu, datą, numerem arkusza z jego formatem oraz odwołaniem do modelu: kodem utworzonym z zapisanego modelu, dzięki któremu wydruk można dopasować do modelu, z którego pochodzi.

## Wybór formatu arkusza

Wybierz format z listy u góry okna {{ui:Rysunki}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) lub {{ui:ANSI D}} (22 × 34 in). Wszystkie arkusze są poziome. Zestaw jest tworzony ponownie od razu w nowym formacie, a ten sam format jest używany dla rysunków warsztatowych. Jest on także w [ustawieniach DetailCraft](topic:settings#drawings), a ta przeglądarka go zapamiętuje.

- Większy arkusz rysuje się w większej skali. Skale są zawsze standardowe (1:10, 1:20, 1:25, 1:50, 1:100 i tak dalej).
- Tekst ma taki sam rozmiar na każdym arkuszu, dzięki czemu pozostaje czytelny po wydruku.
- Na małym arkuszu długi, cienki zespół może mieć większą skalę w poprzek niż wzdłuż. Tytuł widoku podaje wtedy obie skale, a wiodące są wymiary.

## Wydawanie rysunków i rewizje

Wiersz nad podglądem mówi, w jakim stanie jest pokazany arkusz: **Jeszcze nie wydano**, **Rew. B, wydano … ; bez zmian od wydania** albo, czerwonym kolorem, **Zmieniono od rew. B: wymaga ponownego wydania**. Lista arkuszy oznacza wydane arkusze ich rewizją, a te wymagające ponownego wydania — odpowiednim oznaczeniem.

- Wpisz, do czego służy wydanie (domyślnie jest to „Wydano do wykonania”) i wybierz {{ui:Wydaj ten arkusz}} albo {{ui:Wydaj zmienione arkusze}}, aby wydać każdy arkusz nowy lub zmieniony od ostatniego wydania.
- Pierwsze wydanie arkusza to rewizja A, potem B, C i tak dalej (litery I i O są pomijane).
- Tabliczka rysunkowa pokazuje numer rysunku wraz z rewizją („A-B1  rev B”), a obok niej tabela rewizji wymienia ostatnie wydania: rewizję, datę i opis. Na małym arkuszu pokazuje tyle wpisów, ile się zmieści.
- Arkusz „zmienia się”, gdy zmienia się to, co na nim narysowano: przesunięty element, nowy otwór, przenumerowany znacznik. Data, liczba arkuszy i sama tabela rewizji się nie liczą. Zmiana formatu arkusza zmienia każdy arkusz.
- Dziennik wydań jest zapisywany w pliku modelu, a wydanie to jeden krok cofnięcia. [Plik KISS](topic:kiss-export) zawiera najnowszą rewizję każdego rysunku.

### Chmury rewizji

Od drugiego wydania arkusza każda część lub fundament, które się zmieniły, są narysowane wewnątrz chmury rewizji z trójkątem rewizji zawierającym literę.

- Dopóki arkusz zmienił się od ostatniego wydania, chmury pokazują, co zmieniło się od tego czasu, a w trójkącie znajduje się nadchodząca rewizja (wydana i zmieniona rew. B: trójkąty pokazują C).
- Po wydaniu chmury pozostają na arkuszu tej rewizji, jak w wydrukowanym zestawie, aż arkusz zmieni się ponownie.
- Każdy arkusz zakreśla tylko zmiany, które na nim pokazuje. Rzuty i elewacje nie rysują otworów ani wycięć, więc zakreślają element, który został przesunięty, obrócony lub zmieniony wymiarowo albo którego znacznik się zmienił. Rysunki złożeniowe i rzut kotwi zakreślają także nowe lub przesunięte otwory i wycięcia.
- Przenumerowany znacznik się liczy: gdy zmiana sprawia, że belka staje się nowym zespołem, belki, których znacznik przesunął się w górę (B1 na B2), są zakreślane na rzutach i elewacjach.
- Usunięta część nie zostawia nic do zakreślenia.
- Arkusze wydane przed wprowadzeniem chmur rewizji (DetailCraft 0.4) zaczynają je zakreślać od kolejnego wydania.
- Chmury są w plikach PDF, DXF i DWG do pobrania i same nigdy nie liczą się jako zmiana.

## Pobieranie

Wybierz format z listy obok przycisków, a następnie {{ui:Ten arkusz}} dla pokazanego arkusza albo {{ui:Wszystkie arkusze}} dla całego zestawu.

- **PDF**: do wydruku lub wysłania. {{ui:Wszystkie arkusze}} tworzy jeden plik PDF, po jednej stronie na arkusz, każda strona w wybranym formacie.
- **DWG**, w formacie 2018, 2013, 2010, 2007, 2004 lub 2000: do otwierania arkuszy w programie CAD. Wybierz starszy format dla starszego programu.
- **DXF (R12)**: wersja, którą otworzy niemal każdy program CAD.

Arkusz DWG lub DXF jest rysowany w pełnym rozmiarze: jedna jednostka rysunku to jeden milimetr na papierze, więc drukuje się w skali 1:1 i każdy widok zachowuje skalę podaną w swoim tytule. Każde pióro to osobna warstwa: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID i tak dalej, z jej grubością linii (DWG) i jej kreskami. Napisy są tekstem w stylu tekstu DetailCraft (Arial). Wymiary to linie i liczby, które widzisz, a nie obiekty wymiarowania. {{ui:Wszystkie arkusze}} umieszcza pliki DWG lub DXF w jednym archiwum zip, po jednym pliku na arkusz.

:::note
DXF R12 nie ma grubości linii ani wypełnień: warstwy zachowują swoje nazwy, więc ustaw pióra według warstw przy drukowaniu, a wypełnione kształty są pomijane (pasek stanu podaje, ile ich jest).
:::

Drukuj w skali 100% (bez „dopasuj do strony”) na papierze tego samego formatu, jeśli chcesz, aby podane skale się zgadzały.
