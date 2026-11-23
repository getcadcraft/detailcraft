---
title: Co nowego w wersji 0.9 (wcześniejsze)
summary: Rozmiary stali brytyjskiej Blue Book i kątowniki nierównoramienne, rysunki warsztatowe dla każdej części w jednym zestawie PDF, Moje profile dla przekrojów niestandardowych, P-Delta i częstości drgań własnych, obciążenia wiatrem ASCE 7, miejsce sejsmiczne i kombinacje oraz kursory na żywo z funkcją Podążaj.
keywords: co nowego 0.9, wcześniejsza wersja, co nowego, informacje o wydaniu, dziennik zmian, 0.9, stal brytyjska, blue book, ub, uc, pfc, shs, rhs, chs, kątownik nierównoramienny, rysunek warsztatowy, zestaw arkuszy, znacznik elementu, pdf, moje profile, profil niestandardowy, P-Delta, drugi rząd, częstość drgań własnych, elementy skończone, masa modalna, obciążenie wiatrem, ASCE 7, sejsmika, klasa gruntu, USGS, kombinacje obciążeń, LRFD, ASD, live, kursory, podążaj, osoby, podpowiedzi, co nowego, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, montaż, dźwig, wykres nośności, film, autopilot, połączenia, zbrojenie, zagęszczenie, fundament, ława, płyta fundamentowa, osiadanie, szkielet, drewno, lekka konstrukcja, lista cięcia, konstruowalność, dostęp do spoiny, dostawca, zapas, czas dostawy, co pęka najpierw, beton, sejsmika, płyta, języki, asystent
from: ab0c7f05
---

To jest lista zmian w DetailCraft 0.9 w porównaniu z 0.8.1. Wersja 0.9 wprowadza rozmiary stali brytyjskiej, rysunek warsztatowy dla każdej części naraz, większą kartę {{ui:Analiza}} dla ram oraz podgląd kursorów innych osób, gdy pracujecie razem.

## Nowe

### Stal brytyjska i rysunki warsztatowe

- **Rozmiary stali brytyjskiej.** Listy profili zawierają teraz 976 rozmiarów z Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, przy czym przekroje zamknięte formowane na zimno są trzymane osobno (ich nazwy zaczynają się od CF). Nazwy są zapisywane od rodziny, na przykład UB305x165x40 lub SHS100x100x5.0, a wpisanie ich tak, jak zapisują je rysunki, też działa: 305x165x40 UB, L100x100x10, SHS100x5. Zobacz [Katalog profili](topic:profile-catalog).
- **Kątowniki nierównoramienne.** Kątowniki UEA zachowują obie półki przy imporcie i eksporcie IFC oraz w plikach NC, a lustro obraca element koniec na koniec.
- **Wszystkie rysunki warsztatowe naraz.** Wybierz {{ui:Rysunek warsztatowy}} w grupie {{ui:Wyjście}} bez zaznaczenia czegokolwiek. Okno wymienia każdy znacznik elementu, pozwala podejrzeć dowolny z nich, a {{ui:Pobierz wszystko}} zapisuje jeden plik PDF ze stroną na każdy znacznik, każdą zatytułowaną „Arkusz 3 z 42”. {{ui:Pobierz PDF}} zapisuje ten, który właśnie oglądasz. Ceowniki, kątowniki i przekroje zamknięte też dostają teraz arkusze. Zobacz [Tworzenie rysunków warsztatowych](topic:shop-drawings).
- **Moje profile.** Profil niestandardowy można teraz zachować dla każdego nowego modelu. W formularzu Profil niestandardowy zostaw zaznaczone {{ui:Zachowaj w Moje profile}}; lista {{ui:Moje profile}} pod nim ma przyciski {{ui:Zachowaj}}, {{ui:Użyj tutaj}} i {{ui:Usuń}}. Lista jest przechowywana w tej przeglądarce (do 200 pozycji), a nie na Twoim koncie. Zobacz [Płyty i profile](topic:plates-and-profiles).

### Analiza

- **Drugi rząd (P-Delta).** Zaznacz {{ui:Drugi rząd (P-Delta)}} obok przycisku Uruchom w karcie {{ui:Analiza}}, a siły osiowe działają na odkształconą ramę. Płyty i sztywne stropy pozostają w pierwszym rzędzie, z ostrzeżeniem. Zobacz [Siły, reakcje i ugięcia](topic:frame-analysis).
- **Częstości drgań własnych.** Blok {{ui:Elementy skończone: częstości drgań własnych}} pod wynikami znajduje najniższe postacie drgań tego samego modelu, z okresem i efektywną masą modalną, i pokazuje postać drgań na modelu. Zobacz [Siły, reakcje i ugięcia](topic:frame-analysis).
- **Obciążenia wiatrem i miejsce sejsmiczne.** Trzy nowe bloki w karcie {{ui:Analiza}}: {{ui:Obciążenia wiatrem (ASCE 7, procedura kierunkowa)}}, {{ui:Sejsmika: miejsce i układ (ASCE 7)}} i {{ui:Kombinacje obciążeń ASCE 7}}. Zobacz [Wiatr, miejsce sejsmiczne i kombinacje ASCE 7](topic:wind-seismic-combinations).

### Wspólna praca

- **Kursory i nazwy.** W sesji Live wskaźnik każdej osoby jest rysowany w modelu razem z jej nazwą i kolorem, a to, co dana osoba zaznaczyła, dostaje ramkę.
- **Podążaj za osobą.** Otwórz {{ui:Osoby}} w sesji i wybierz {{ui:Podążaj}} przy nazwisku; Twój widok przesuwa się razem z jej widokiem. Gospodarz może wybrać {{ui:Poproś wszystkich, aby podążali za mną}}. Zobacz [Podążanie za osobą w sesji Live](topic:follow-in-live).

### We wszystkich aplikacjach

- Podpowiedzi są podpowiedziami Bootstrap, karta startowa ma przycisk zamknięcia, paski kart przewijają się w bok, gdy się nie mieszczą, a karta przeglądarki pokazuje nazwę otwartego dokumentu, po której następuje DetailCraft i CadCraft.

## Naprawiono

- Profil niestandardowy przepadał, gdy zaczynałeś nowy model.
- Ceowniki, kątowniki i przekroje zamknięte brakowało w zestawie rysunków warsztatowych.

## Uczciwe ograniczenia

- Bloki wiatru, sejsmiki i elementów skończonych są pomocami do sprawdzania. Wyniki przegląda inżynier; nie są sprawdzeniem według normy. Wyszukiwanie USGS testowano na zastępczej usłudze, a nie na działającej usłudze.
- Elementy skończone i P-Delta sprawdzono względem obliczeń ręcznych i rozwiązań zamkniętych, a nie na rzeczywistym budynku. Analiza wyboczenia nie jest zbudowana.
- Żaden brytyjski wytwórca konstrukcji stalowych nie wypróbował jeszcze rozmiarów brytyjskich, a pliki NC dla kątowników nierównoramiennych nie były uruchamiane na maszynie.
- Zestaw rysunków warsztatowych jest tylko w formacie PDF.
- Języki inne niż angielski to wersje robocze wykonane maszynowo.
- Instalatory Windows nie są podpisane kodem (Więcej informacji, potem Uruchom mimo to); obraz dysku macOS nie jest notaryzowany (kliknij prawym przyciskiem, potem Otwórz).

Wcześniejsze zmiany są w uwagach do wersji 0.8 i 0.8.1 niżej na tej stronie.

## Wcześniej: 0.8 i 0.8.1

To jest lista zmian w DetailCraft 0.8 (1 listopada 2026) i 0.8.1 (2 listopada 2026) w porównaniu z 0.7. Wersja 0.7 sprawdzała elementy stalowe; wersja 0.8 planuje podnoszenie, proponuje połączenia, sprawdza fundamenty i zbrojenie oraz tworzy szkielety elementów drewnianych i lekkich ścian, stropów i dachów.

### Nowe

**Montaż**

- **Plan montażu i film.** W karcie {{ui:Montaż}} opisz dźwig (gdzie stoi, jego najwyższy hak, osprzęt, którego nie ma na wykresie) i wpisz wiersze jego wykresu nośności. DetailCraft podnosi model po jednym zespole, w kolejności faz i poziom po poziomie, i sprawdza każde podniesienie względem wykresu przy jego promieniu oraz względem zapasu, który ustawiłeś. {{ui:Zapisz film}} zapisuje jeden plik HTML, który odtwarza się offline w każdej przeglądarce, także na telefonie. Podniesienia przekraczające wykres, wychodzące poza niego lub zbyt wysokie są w {{ui:Problemy}}. To plan z Twoich liczb, a nie plan podnoszenia. Zobacz [Plan montażu i film](topic:erection-movie).

**Połączenia**

- **Autopilot połączeń.** Karta {{ui:Autopilot}} przegląda każdy węzeł bez połączenia i proponuje je na podstawie kształtów: blachy podstawy, blachy ścinane, blachy czołowe dla belek oznaczonych jako belki momentowe, łączniki i blachy węzłowe. Podaj obciążenie równomierne lub jedno ścinanie na końcu, a liczba śrub wynika z nośności obliczeniowej śruby. {{ui:Dodaj wszystkie}} dodaje propozycje jako jeden krok cofnięcia. To wartości początkowe do przejrzenia, a nie projekt połączenia.
- **Sprawdzenia konstruowalności.** {{ui:Problemy}} dla śruby, do której nie dosięgnie klucz, śrub zbyt blisko siebie dla nasadki, spoin pachwinowych poza ich limitami rozmiaru oraz przekrojów zamkniętych, które zbierają wodę. Dostęp do spoiny jest nowy: spoina pachwinowa dookoła, do której nie dosięgnie palnik spawacza, jest wymieniona wraz z elementem, który przeszkadza, i udziałem spoiny, którego to dotyczy. Zobacz [Sprawdzenia konstruowalności](topic:constructability).

**Fundamenty i zbrojenie**

- **Sprawdzenia fundamentów.** Karta {{ui:Fundament}} sprawdza stopy, stopy połączone i płyty fundamentowe na gruncie, który opisujesz: nośność, poślizg i wywrócenie od obciążeń użytkowych; zginanie, ścinanie, przebicie, zakotwienie i minimalne zbrojenie od obciążeń zwiększonych (ACI 318-19). Słup blisko krawędzi lub narożnika jest sprawdzany z przekrojem odciętym przez krawędź stopy. Osiadanie wynika z modułu gruntu, elastyczna płyta jest rozwiązywana na sprężynach z modułu podłoża, a grupy pali i ściany oporowe mają własne panele. Obciążenia słupów można wpisać ręcznie lub pobrać z {{ui:Analiza}}. Zobacz [Sprawdzenia fundamentów](topic:foundation-checks).
- **Mapa zagęszczenia zbrojenia.** Karta {{ui:Zagęszczenie}} rysuje mapę cieplną każdej stopy widzianej z góry: tam, gdzie pręty zostawiają zbyt mało miejsca, aby beton mógł dotrzeć na dół, względem reguły czystego rozstawu oraz, jeśli je podasz, największego kruszywa i głowicy wibratora. Zobacz [Mapa zagęszczenia zbrojenia](topic:rebar-congestion).

**Szkielety i dostawy**

- **Szkielety z drewna i lekkiej konstrukcji.** Karta {{ui:Szkielety}} tworzy panele ścian, stropów i dachów z każdym elementem, listą cięcia, zapasem do kupienia i rysunkiem warsztatowym w skali. {{ui:Umieść jako elementy}} wstawia elementy do modelu, a {{ui:Arkusze PDF}} zapisuje jeden arkusz dla każdego panelu. Rozmiary, rozstawy i nadproża są Twoje: DetailCraft nie sprawdza, czy przenoszą obciążenie. Zobacz [Panele szkieletowe z drewna i lekkiej konstrukcji](topic:framing-panels).
- **Zapas dostawcy i czasy dostawy.** Karta {{ui:Dostawa}} odczytuje listę zapasów dostawcy (CSV) i pokazuje dla każdego przekroju, który kupuje lista cięcia, czy jest go dość w magazynie i jak długie jest oczekiwanie. Braki i opóźnione przekroje są w {{ui:Problemy}}. Nic nie jest zamawiane. Zobacz [Zapas dostawcy i czasy dostawy](topic:supplier-stock).

**Analiza i projektowanie**

- **Co pęka najpierw?** W karcie {{ui:Analiza}} przycisk znajduje miarodajną kombinację nośności, najsłabszy element, o ile mogą wzrosnąć obciążenia, zanim pierwszy element osiągnie swoją granicę, oraz najsłabszą blachę czołową lub ścinaną, gdy znana jest nośność na ścinanie jej śrub. Wymaga najpierw kombinacji i normy projektowej. Docisk, ścinanie bloku, spoiny i odginanie nie są sprawdzane. Połączony asystent może zapytać o to samo.
- **Live.** Zaznacz {{ui:Live: rozwiązuj ponownie po każdej zmianie}}, a rama jest rozwiązywana ponownie po każdej zmianie.
- **Beton, dalsze zmiany.** Smukły słup w ramie bez przemieszczeń bocznych jest projektowany na moment powiększony (ACI 318-19 6.6.4.5). Okres sejsmiczny można wziąć z analizy metodą Rayleigha. Płyta z płyt dostaje zbrojenie potrzebne każdej warstwie z jej momentów oraz ścinanie jednokierunkowe. Zobacz [Sprawdzanie elementów betonowych i tworzenie obciążeń sejsmicznych](topic:concrete-and-seismic).
- **Do sprawdzenia przez inżyniera.** Wyniki fundamentów, betonu i funkcji Co pęka najpierw są pomocami. Obciążenia wiatrem nie są zbudowane.

**We wszystkich aplikacjach**

- **Języki.** Pomoc jest dostępna w 54 językach. Te inne niż angielski są wersjami roboczymi wykonanymi maszynowo, dopóki nie przeczyta ich native speaker; dziesięć jest nowych (litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili, uzbecki).
- **Rzędy pasków narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} wybiera zawijanie, 2 wiersze lub 1 wiersz. Pasek, który już się mieści, pozostaje bez zmian; reszta przewija się w bok.
- **Siatka właściwości.** Pola stopy używają wspólnej siatki: zwijane kategorie i zwarta gęstość. Wpisane działania, takie jak 2*450, nadal działają.
- **Urządzenia wejściowe.** Gładzik, pióro, mysz 3D, kontroler i MIDI mogą sterować aplikacjami. Zobacz [Poruszanie się w 3D](topic:navigate-3d).
- **Panel Problemy.** Ostrzeżenia nowych sprawdzeń wymienionych wyżej pojawiają się w tym samym panelu {{ui:Problemy}} co dotąd.
- **Połącz swój AI.** Twój własny asystent, połączony przez CadCraft Studio, działa ze wszystkimi ośmioma aplikacjami i widzi tylko to, na co pozwolisz. Połączenie jednym kliknięciem, łącznik hostowany i własny klucz API w Studio są jeszcze przed nami. Zobacz [Używanie DetailCraft z asystentem AI](topic:use-with-ai-assistants).

### Naprawiono w 0.8.1

- **Języki w Studio.** Studio i pakiety spakowane mogą zmieniać język w czasie działania; wcześniej były tylko po angielsku. Nie jest jeszcze przetestowane na każdej platformie: daj znać, jeśli język się nie zmienia.
- **Zaznaczanie oknem przecięcia.** Instalatory 0.8.1 zawierają już poprawne zachowanie zaznaczania oknem, które było w wersji webowej 0.8; starszy instalator tego nie miał.
- **Tablety w pionie.** Wolna wysokość siatki przypada płótnu, a układ arkusza zaczyna się od 760 px lub mniej.

### Jeszcze nie w tej wersji

- **Wysyłanie NC do maszyny** nie zostało wydane.
- **Obciążenia wiatrem** dla betonu nie są zbudowane, a sprawdzenia betonu i fundamentów są do przeglądu przez inżyniera.
- **Podpisywanie kodem.** Instalatory Windows i obraz .dmg dla macOS nie są podpisane, więc Windows może ostrzegać, a macOS wymaga kliknięcia prawym przyciskiem, a potem Otwórz.

Wcześniejsze zmiany są w [Co nowego w wersji 0.7](topic:whats-new-0-7).
