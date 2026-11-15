---
title: Co nowego w wersjach 0.8 i 0.8.1
summary: Film montażu z tabeli udźwigu żurawia, autopilot połączeń, mapa zagęszczenia zbrojenia, sprawdzenia fundamentów, panele szkieletów z drewna i z cienkościennych profili, sprawdzenia wykonawcze i dostępu do spoin, stan magazynowy dostawcy, co pęknie jako pierwsze, przeliczanie na żywo, więcej sprawdzeń betonu oraz poprawki 0.8.1.
keywords: co nowego, what's new, informacje o wydaniu, changelog, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, montaż, żuraw, tabela udźwigu, film, autopilot, połączenia, zbrojenie, zagęszczenie, fundament, stopa, mata, osiadanie, szkielet, drewno, cienkościenne, lista cięcia, wykonawcze, dostęp do spoiny, dostawca, magazyn, czas dostawy, co pęknie pierwsze, na żywo, beton, sejsmika, płyta, języki, asystent
from: 6e33e052
---

To jest lista zmian w DetailCraft 0.8 (1 listopada 2026) i 0.8.1 (2 listopada 2026) w porównaniu z 0.7. Wersja 0.7 sprawdzała elementy stalowe; wersja 0.8 planuje podnoszenia, proponuje połączenia, sprawdza fundamenty i zbrojenie oraz tworzy szkielety drewnianych i lekkich ścian, stropów i dachów.

## Nowości

### Montaż

- **Plan montażu i film.** W karcie {{ui:Erection}} opisz żuraw (gdzie stoi, jego najwyższy hak, osprzęt, którego nie ma w tabeli) i wpisz wiersze jego tabeli udźwigu. DetailCraft podnosi model zespół po zespole, w kolejności faz i piętro po piętrze, i sprawdza każde podniesienie względem tabeli przy jego wysięgu oraz względem zapasu, który ustawiłeś. {{ui:Save movie}} zapisuje jeden plik HTML, który odtwarza się offline w każdej przeglądarce, także na telefonie. Podniesienia ponad tabelą, za nią lub zbyt wysokie są w {{ui:Problems}}. To plan oparty na twoich liczbach, a nie plan podnoszenia. Zobacz [Plan montażu i film](topic:erection-movie).

### Połączenia

- **Autopilot połączeń.** Karta {{ui:Autopilot}} przegląda każdy węzeł bez połączenia i proponuje je na podstawie kształtów: blachy podstawy, blachy przyłączeniowe, blachy czołowe dla belek oznaczonych jako belki momentowe, połączenia doczołowe i blachy węzłowe. Podaj obciążenie równomierne albo siłę poprzeczną na jednym końcu, a liczba śrub wynika z nośności obliczeniowej śruby. {{ui:Add them all}} dodaje propozycje jako jeden krok cofania. To wartości startowe do sprawdzenia, a nie projekt połączenia.
- **Sprawdzenia wykonawcze.** {{ui:Problems}} zgłasza śrubę, do której nie dosięgnie klucz, śruby zbyt blisko siebie dla klucza nasadowego, spoiny pachwinowe poza ich granicami rozmiaru oraz przekroje zamknięte, w których zbiera się woda. Dostęp do spoiny jest nowy: spoina pachwinowa dookoła, do której nie dosięgnie palnik spawacza, jest wymieniona wraz z częścią, która przeszkadza, i udziałem spoiny, którego to dotyczy. Zobacz [Sprawdzenia wykonawcze](topic:constructability).

### Fundamenty i zbrojenie

- **Sprawdzenia fundamentów.** Karta {{ui:Foundation}} sprawdza stopy, stopy złożone i maty na gruncie, który opisujesz: nośność, poślizg i wywrócenie od obciążeń użytkowych; zginanie, ścinanie, przebicie, zakotwienie i minimalne zbrojenie od obciążeń obliczeniowych (ACI 318-19). Słup przy krawędzi lub narożu jest sprawdzany z przekrojem odciętym krawędzią stopy. Osiadanie wynika z modułu gruntu, elastyczna mata jest rozwiązywana na sprężynach z modułu podłoża, a grupy pali i ściany oporowe mają własne panele. Obciążenia słupów można wpisać ręcznie albo wziąć z {{ui:Analysis}}. Zobacz [Sprawdzenia fundamentów](topic:foundation-checks).
- **Mapa zagęszczenia zbrojenia.** Karta {{ui:Congestion}} rysuje mapę cieplną każdej stopy widzianej z góry: tam, gdzie pręty zostawiają za mało miejsca, by beton mógł dojść na dół, w porównaniu z regułą wolnego odstępu prętów oraz, jeśli je podasz, z największym kruszywem i głowicą wibratora. Zobacz [Mapa zagęszczenia zbrojenia](topic:rebar-congestion).

### Szkielety i dostawy

- **Szkielety z drewna i lekkich profili.** Karta {{ui:Framing}} tworzy panele szkieletów ścian, stropów i dachów ze wszystkimi elementami, listą cięcia, materiałem do kupienia i rysunkiem warsztatowym w skali. {{ui:Place as members}} wstawia elementy do modelu, a {{ui:PDF sheets}} zapisuje jeden arkusz dla każdego panelu. Wymiary, rozstawy i nadproża są twoje: DetailCraft nie sprawdza, czy udźwigną obciążenie. Zobacz [Panele szkieletów z drewna i lekkich profili](topic:framing-panels).
- **Stan magazynowy dostawcy i czasy dostaw.** Karta {{ui:Supply}} wczytuje listę magazynową dostawcy (CSV) i pokazuje dla każdego przekroju z listy cięcia, czy jest go wystarczająco w magazynie i jak długie jest oczekiwanie. Braki i spóźnione przekroje są w {{ui:Problems}}. Nic nie jest zamawiane. Zobacz [Stan magazynowy dostawcy i czasy dostaw](topic:supplier-stock).

### Analiza i projektowanie

- **Co pęknie jako pierwsze?** W karcie {{ui:Analysis}} przycisk znajduje decydującą kombinację obciążeń, najsłabszy element, o ile mogą wzrosnąć obciążenia, zanim pierwszy element osiągnie swoją granicę, oraz najsłabszą blachę czołową lub przyłączeniową, gdy znana jest nośność na ścinanie jej śrub. Najpierw potrzebuje kombinacji i normy projektowej. Docisk, ścinanie blokowe, spoiny i podważanie (prying) nie są sprawdzane. Twój podłączony asystent może zapytać o to samo.
- **Na żywo.** Zaznacz {{ui:Live: solve again after each edit}}, a rama jest przeliczana po każdej zmianie.
- **Beton i więcej.** Smukły słup w ramie bez przemieszczeń bocznych jest projektowany na moment powiększony (ACI 318-19 6.6.4.5). Okres sejsmiczny może być wzięty z analizy metodą Rayleigha. Płyta utworzona z blach otrzymuje zbrojenie potrzebne w każdej warstwie z jej momentów oraz ścinanie jednokierunkowe. Zobacz [Sprawdzanie elementów betonowych i obciążenia sejsmiczne](topic:concrete-and-seismic).
- **Do sprawdzenia przez inżyniera.** Wyniki fundamentów, betonu i „Co pęknie jako pierwsze” są pomocą. Obciążenia od wiatru nie są jeszcze zbudowane.

### We wszystkich aplikacjach

- **Języki.** Pomoc jest dostępna w 54 językach. Te poza angielskim to maszynowe wersje robocze, dopóki rodzimy użytkownik ich nie przeczyta; dziesięć jest nowych (litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili, uzbecki).
- **Wiersze paska narzędzi.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wybiera zawijanie, 2 wiersze lub 1 wiersz. Pasek, który już się mieści, zostaje bez zmian; reszta przewija się w bok.
- **Siatka właściwości.** Pola stopy korzystają ze wspólnej siatki: zwijane kategorie i zwarta gęstość. Wpisane działania, takie jak 2*450, nadal działają.
- **Urządzenia wejściowe.** Gładzik, pióro, mysz 3D, kontroler i MIDI mogą sterować aplikacjami. Zobacz [Nawigacja w 3D](topic:navigate-3d).
- **Panel problemów.** Ostrzeżenia nowych sprawdzeń opisanych wyżej pojawiają się w tym samym panelu {{ui:Problems}} co wcześniej.
- **Podłącz swoją AI.** Twój własny asystent, połączony przez CadCraft Studio, działa ze wszystkimi ośmioma aplikacjami i widzi tylko to, na co pozwolisz. Połączenie jednym kliknięciem, łącznik hostowany i twój własny klucz API w Studio są jeszcze przed nami. Zobacz [Korzystanie z DetailCraft z asystentem AI](topic:use-with-ai-assistants).

## Poprawki w wersji 0.8.1

- **Języki w Studio.** Studio i spakowane wydania mogą zmieniać język w czasie działania; wcześniej były tylko po angielsku. Nie zostało jeszcze przetestowane na każdej platformie: daj nam znać, jeśli język się nie zmienia.
- **Zaznaczanie przez przecięcie.** Instalatory 0.8.1 mają już poprawne zachowanie zaznaczania przez okno z wersji 0.8 w przeglądarce; starszy instalator tego nie miał.
- **Tablety w pionie.** Wolna wysokość siatki trafia na płótno, a układ arkusza zaczyna się od 760 px lub mniej.

## Jeszcze nie w tej wersji

- **Wysyłanie NC do maszyny** nie zostało wydane.
- **Obciążenia wiatrem** dla betonu nie są jeszcze zbudowane, a sprawdzenia betonu i fundamentów są do przeglądu przez inżyniera.
- **Podpisywanie kodu.** Instalatory Windows i pliki .dmg dla macOS nie są podpisane, więc Windows może ostrzegać, a macOS wymaga kliknięcia prawym przyciskiem, a potem Otwórz.

Wcześniejsze zmiany są opisane w [Co nowego w wersji 0.7](topic:whats-new-0-7).
