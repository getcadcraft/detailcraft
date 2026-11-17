---
title: Co nowego w wersji 0.9
summary: Brytyjskie rozmiary stali z katalogu Blue Book i nierówne kątowniki, rysunki warsztatowe dla każdej części w jednym zestawie PDF, Moje profile dla niestandardowych przekrojów, P-Delta i częstości drgań własnych, obciążenia wiatrem ASCE 7, miejsce sejsmiczne i kombinacje, oraz kursory na żywo z funkcją Podążaj.
keywords: co nowego, informacje o wydaniu, dziennik zmian, 0.9, stal brytyjska, blue book, ub, uc, pfc, shs, rhs, chs, nierówny kątownik, rysunek warsztatowy, rysunki warsztatowe, zestaw arkuszy, znak elementu, pdf, moje profile, profil niestandardowy, P-Delta, drugi rząd, częstość drgań własnych, elementy skończone, masa modalna, obciążenie wiatrem, ASCE 7, sejsmika, klasa gruntu, USGS, kombinacje obciążeń, LRFD, ASD, live, kursory, podążaj, osoby, podpowiedzi, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, montaż, dźwig, tabela obciążeń, film, autopilot, połączenia, zbrojenie, zagęszczenie, fundamenty, fundament, osiadanie, szkielety, drewno, lekka rama stalowa, lista cięcia, łatwość wykonania, dostęp do spoiny, dostawca, zapasy, czas dostawy, co pęknie pierwsze, beton, sejsmika, płyta, języki, asystent
from: 4c95a2de
---

To jest zestawienie zmian w DetailCraft 0.9 w porównaniu z 0.8.1. Wersja 0.9 wprowadza brytyjskie rozmiary stali, rysunek warsztatowy dla każdej części za jednym razem, większą kartę {{ui:Analiza}} dla ram oraz podgląd kursorów innych osób, gdy pracujecie razem.

## Nowe

### Stal brytyjska i rysunki warsztatowe

- **Brytyjskie rozmiary stali.** Listy profili zawierają teraz 976 rozmiarów z katalogu Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, z przekrojami zimnogiętymi oddzielonymi (ich nazwy zaczynają się od CF). Nazwy są zapisywane najpierw według rodziny, na przykład UB305x165x40 lub SHS100x100x5.0, a wpisanie ich tak, jak podają rysunki, też działa: 305x165x40 UB, L100x100x10, SHS100x5. Zobacz [Katalog profili](topic:profile-catalog).
- **Nierówne kątowniki.** Kątowniki UEA zachowują oba ramiona przy imporcie i eksporcie IFC oraz w plikach NC, a odbicie lustrzane odwraca element od końca do końca.
- **Wszystkie rysunki warsztatowe naraz.** Wybierz {{ui:Rysunek warsztatowy}} w grupie {{ui:Wyjście}}, gdy nic nie jest zaznaczone. Okno wymienia każdy znak elementu, pozwala podejrzeć dowolny z nich, a {{ui:Pobierz wszystkie}} zapisuje jeden PDF ze stroną dla każdego znaku, każda z tytułem „Arkusz 3 z 42”. {{ui:Pobierz PDF}} zapisuje ten, który oglądasz. Kanały, kątowniki i profile zamknięte też mają teraz arkusze. Zobacz [Tworzenie rysunków warsztatowych](topic:shop-drawings).
- **Moje profile.** Własny profil można teraz zachować dla każdego nowego modelu. W formularzu Profil niestandardowy zostaw zaznaczone **Zachowaj w „Moje profile”**; lista {{ui:Moje profile}} pod nim ma przyciski {{ui:Zachowaj}}, {{ui:Użyj tutaj}} i {{ui:Usuń}}. Lista jest przechowywana w tej przeglądarce (do 200 pozycji), a nie na Twoim koncie. Zobacz [Blachy i profile](topic:plates-and-profiles).

### Analiza

- **Analiza drugiego rzędu (P-Delta).** Zaznacz {{ui:Analiza drugiego rzędu (P-Delta)}} obok {{ui:Uruchom}} na karcie {{ui:Analiza}}, a siły osiowe działają na odkształconą ramę. Blachy i sztywne stropy pozostają w analizie pierwszego rzędu, z ostrzeżeniem. Zobacz [Siły, reakcje i ugięcia](topic:frame-analysis).
- **Częstości drgań własnych.** Blok {{ui:Elementy skończone: częstości drgań własnych}} pod wynikami znajduje najniższe postacie drgań tego samego modelu, z okresem i efektywną masą modalną, i pokazuje postać drgań na modelu. Zobacz [Siły, reakcje i ugięcia](topic:frame-analysis).
- **Obciążenia wiatrem i miejsce sejsmiczne.** Na karcie {{ui:Analiza}} są trzy nowe bloki: {{ui:Obciążenia wiatrem (ASCE 7, procedura kierunkowa)}}, {{ui:Sejsmika: miejsce i układ (ASCE 7)}} oraz {{ui:Kombinacje obciążeń ASCE 7}}. Zobacz [Wiatr, miejsce sejsmiczne i kombinacje ASCE 7](topic:wind-seismic-combinations).

### Praca razem

- **Kursory i imiona.** W sesji Live wskaźnik każdej osoby jest rysowany w modelu z jej imieniem i kolorem, a to, co zaznaczyła, dostaje ramkę.
- **Podążanie za osobą.** Otwórz {{ui:Osoby}} w sesji i wybierz {{ui:Podążaj}} przy imieniu; Twój widok przesuwa się razem z jej widokiem. Gospodarz może wybrać {{ui:Poproś wszystkich, aby podążali za mną}}. Zobacz [Podążanie za osobą w sesji Live](topic:follow-in-live).

### We wszystkich aplikacjach

- Podpowiedzi są podpowiedziami Bootstrap, karta startowa ma przycisk zamknięcia, paski kart przewijają się w bok, gdy się nie mieszczą, a nazwa karty przeglądarki pokazuje otwarty dokument, a za nim DetailCraft i CadCraft.

## Naprawione

- Własny profil przepadał, gdy zaczynałeś nowy model.
- Kanały, kątowniki i profile zamknięte brakowało w zestawie rysunków warsztatowych.

## Uczciwe ograniczenia

- Bloki wiatru, sejsmiki i elementów skończonych są pomocą do sprawdzania. Wyniki przegląda Twój inżynier; nie są sprawdzeniem według normy. Wyszukiwanie w USGS sprawdzono na zastępczej usłudze, a nie na działającej usłudze.
- Elementy skończone i P-Delta sprawdzono na odpowiedziach ręcznych i zamkniętych, a nie na prawdziwym budynku. Analiza wyboczenia nie jest zbudowana.
- Żaden brytyjski wytwórca nie próbował jeszcze brytyjskich rozmiarów, a pliki NC dla nierównych kątowników nie były uruchomione na maszynie.
- Zestaw rysunków warsztatowych jest wyłącznie w PDF.
- Języki inne niż angielski są wersjami roboczymi wykonanymi maszynowo.
- Instalatory Windows nie są podpisane kodem (Więcej informacji, potem Uruchom mimo to); obraz dysku macOS nie jest notaryzowany (kliknij prawym przyciskiem, potem Otwórz).

Wcześniejsze zmiany są w notatkach 0.8 i 0.8.1 niżej na tej stronie.

## Wcześniej: 0.8 i 0.8.1

To jest zestawienie zmian w DetailCraft 0.8 (1 listopada 2026) i 0.8.1 (2 listopada 2026) w porównaniu z 0.7. Wersja 0.7 sprawdzała elementy stalowe; wersja 0.8 planuje podnoszenie, proponuje połączenia, sprawdza fundamenty i zbrojenie oraz tworzy szkielety ścian, stropów i dachów z drewna i lekkiej stali.

### Nowe

**Montaż**

- **Plan montażu i film.** Na karcie {{ui:Montaż}} opisz dźwig (gdzie stoi, jego najwyższy hak, osprzęt, którego nie ma w tabeli obciążeń) i wpisz wiersze jego tabeli obciążeń. DetailCraft podnosi model jeden zespół naraz, w kolejności faz i warstwami, i sprawdza każde podniesienie względem tabeli dla jego promienia oraz względem zapasu, który ustawiłeś. {{ui:Zapisz film}} zapisuje jeden plik HTML, który odtwarza się offline w dowolnej przeglądarce, także na telefonie. Podniesienia poza tabelą, za nią lub zbyt wysokie są w {{ui:Problemy}}. To plan na podstawie Twoich liczb, a nie plan podnoszenia. Zobacz [Plan montażu i film](topic:erection-movie).

**Połączenia**

- **Autopilot połączeń.** Karta {{ui:Autopilot}} przegląda każdy węzeł bez połączenia i proponuje je na podstawie kształtów: blachy podstawy, blachy ścinane, blachy czołowe dla belek oznaczonych jako belki momentowe, połączenia doczołowe i blachy węzłowe. Podaj obciążenie równomierne lub jedną siłę poprzeczną na końcu, a liczba śrub wynika z nośności obliczeniowej śruby. {{ui:Dodaj wszystkie}} dodaje propozycje jako jeden krok cofnięcia. To wartości startowe do przeglądu, a nie projekt połączenia.
- **Sprawdzenia łatwości wykonania.** {{ui:Problemy}} dla śruby, do której nie sięga klucz, śrub zbyt blisko siebie dla nasadki, spoin pachwinowych poza ich limitami rozmiaru i profili zamkniętych, które zatrzymują wodę. Dostęp do spoiny jest nowy: obwodowa spoina pachwinowa, do której nie sięga palnik spawacza, jest wymieniona wraz z częścią, która przeszkadza, i procentem dotkniętej spoiny. Zobacz [Sprawdzenia łatwości wykonania](topic:constructability).

**Fundamenty i zbrojenie**

- **Sprawdzenia fundamentów.** Karta {{ui:Fundamenty}} sprawdza stopy, stopy połączone i płyty na gruncie, który opisujesz: nośność, poślizg i wywrócenie od obciążeń użytkowych; zginanie, ścinanie, przebicie, zakotwienie i minimalne zbrojenie od obciążeń obliczeniowych (ACI 318-19). Słup blisko krawędzi lub narożnika jest sprawdzany z przekrojem odciętym przez krawędź stopy. Osiadanie wynika z modułu gruntu, elastyczna płyta jest rozwiązywana na sprężynach z modułu podłoża, a grupy pali i ściany oporowe mają własne panele. Obciążenia słupów można wpisać lub pobrać z {{ui:Analiza}}. Zobacz [Sprawdzenia fundamentów](topic:foundation-checks).
- **Mapa zagęszczenia zbrojenia.** Karta {{ui:Zagęszczenie}} rysuje mapę cieplną każdej stopy widzianej z góry: tam, gdzie pręty zostawiają za mało miejsca na to, by beton przedostał się w dół, w porównaniu z regułą wolnego rozstawu i, jeśli je podasz, największym kruszywem i głowicą wibratora. Zobacz [Mapa zagęszczenia zbrojenia](topic:rebar-congestion).

**Szkielety i dostawy**

- **Szkielety z drewna i lekkiej stali.** Karta {{ui:Szkielety}} tworzy panele ścian, stropów i dachów z każdym elementem, listą cięcia, materiałem do kupienia i rysunkiem warsztatowym w skali. {{ui:Umieść jako elementy}} wstawia elementy do modelu, a {{ui:Arkusze PDF}} zapisuje po jednym arkuszu dla każdego panelu. Rozmiary, rozstawy i nadproża są Twoje: DetailCraft nie sprawdza, czy przenoszą obciążenie. Zobacz [Panele szkieletowe z drewna i lekkiej stali](topic:framing-panels).
- **Zapasy dostawcy i czasy dostawy.** Karta {{ui:Dostawa}} odczytuje listę zapasów dostawcy (CSV) i pokazuje dla każdego przekroju, który kupuje lista cięcia, czy jest go wystarczająco na stanie i jak długie jest oczekiwanie. Braki i opóźnione przekroje są w {{ui:Problemy}}. Nic nie jest zamawiane. Zobacz [Zapasy dostawcy i czasy dostawy](topic:supplier-stock).

**Analiza i projektowanie**

- **Co pęknie pierwsze?** Na karcie {{ui:Analiza}} przycisk znajduje kombinację nośności, która rządzi, najsłabszy element, o ile mogą wzrosnąć obciążenia, zanim pierwszy element osiągnie swój limit, oraz najsłabszą blachę czołową lub blachę ścinaną, jeśli znana jest nośność śrub na ścinanie. Najpierw potrzebuje kombinacji i normy projektowej. Docisk, ścinanie blokowe, spoiny i podważanie nie są sprawdzane. Połączony asystent może zapytać o to samo.
- **Live.** Zaznacz {{ui:Live: rozwiązuj ponownie po każdej zmianie}}, a rama jest rozwiązywana ponownie po każdej zmianie.
- **Beton i więcej.** Smukły słup w ramie bez przesuwu jest projektowany na swój moment powiększony (ACI 318-19 6.6.4.5). Okres sejsmiczny może być pobrany z analizy metodą Rayleigha. Płyta złożona z blach dostaje stal potrzebną każdej warstwie z jej momentów oraz ze ścinania jednokierunkowego. Zobacz [Sprawdzenie elementów betonowych i tworzenie obciążeń sejsmicznych](topic:concrete-and-seismic).
- **Do sprawdzenia przez inżyniera.** Wyniki fundamentów, betonu i Co pęknie pierwsze są pomocą. Obciążenia wiatrem nie są zbudowane.

**We wszystkich aplikacjach**

- **Języki.** Pomoc jest dostępna w 54 językach. Te inne niż angielski są wersjami roboczymi wykonanymi maszynowo, dopóki nie przeczyta ich native speaker; dziesięć jest nowych (litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili, uzbecki).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} wybiera zawijanie, 2 wiersze lub 1 wiersz. Pasek, który już się mieści, zostaje bez zmian; reszta przewija się w bok.
- **Siatka właściwości.** Pola stopy korzystają ze wspólnej siatki: zwijane kategorie i zwarta gęstość. Wpisane działania, na przykład 2*450, nadal działają.
- **Urządzenia wejściowe.** Gładzik, pióro, mysz 3D, kontroler i MIDI mogą sterować aplikacjami. Zobacz [Nawigacja w 3D](topic:navigate-3d).
- **Panel Problemy.** Ostrzeżenia nowych sprawdzeń wymienionych wyżej pojawiają się w tym samym panelu {{ui:Problemy}} co dotąd.
- **Połącz swojego asystenta AI.** Twój własny asystent, połączony przez CadCraft Studio, działa ze wszystkimi ośmioma aplikacjami i widzi tylko to, na co zezwolisz. Połączenie jednym kliknięciem, hostowany łącznik i własny klucz API w Studio są jeszcze przed nami. Zobacz [Używanie DetailCraft z asystentem AI](topic:use-with-ai-assistants).

### Naprawione w 0.8.1

- **Języki w Studio.** Studio i pakiety mogą zmieniać język w czasie działania; wcześniej były tylko po angielsku. Nie jest jeszcze przetestowane na każdej platformie: daj nam znać, jeśli język się nie zmienia.
- **Zaznaczanie oknem.** Instalatory 0.8.1 mają już poprawne zachowanie zaznaczania oknem z wersji internetowej 0.8; starszy instalator tego nie miał.
- **Tablety w pionie.** Wolna wysokość siatki trafia do płótna, a układ arkusza zaczyna się przy 760 px lub mniej.

### Jeszcze nie w tej wersji

- **Wysyłanie NC do maszyny** nie zostało wydane.
- **Obciążenia wiatrem** dla betonu nie są zbudowane, a sprawdzenia betonu i fundamentów są do przeglądu przez inżyniera.
- **Podpisywanie kodem.** Instalatory Windows i plik .dmg macOS nie są podpisane, więc Windows może ostrzegać, a macOS wymaga kliknięcia prawym przyciskiem, potem Otwórz.

Wcześniejsze zmiany są w [Co nowego w wersji 0.7](topic:whats-new-0-7).
