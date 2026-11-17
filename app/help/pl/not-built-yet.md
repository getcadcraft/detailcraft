---
title: Jeszcze nie zbudowano
summary: Czego ta wczesna wersja DetailCraft nie potrafi i co zrobić zamiast tego na dziś.
keywords: ograniczenia, brak, plan rozwoju, nieobsługiwane, wkrótce, planowane, obejście, todo
from: ea411885
---

DetailCraft to wczesna wersja. Ta strona wymienia to, czego nie robi jeszcze, abyś mógł to uwzględnić w planowaniu. Nic tutaj nie jest obietnicą terminu.

## Modelowanie

| Jeszcze nie | Zamiast tego, na dziś |
|---|---|
| Przeciąganie jednego końca elementu (rozciąganie) | Edytuj {{ui:Początek}} lub {{ui:Koniec}} w polu {{ui:Końce (x, y, z mm)}} w panelu {{ui:Właściwości}} |
| Filtr zaznaczenia (tylko belki, tylko jeden profil) | Zaznacz oknem, a następnie {{key:Shift}}+kliknięcie, aby wyjąć elementy |
| Macierz zaznaczenia; obrót wokół pochylonej osi; odbicie w pochylonej płaszczyźnie | Skopiuj i wklej z przesunięciem albo użyj {{ui:Duplikuj}}; obrót i odbicie działają w rzucie ([Zaznacz oknem, przesuń, obróć, odbij, zmień wiele](topic:select-and-change)) |
| Punkty poza siatką przy klikaniu | Umieść na siatce, a następnie wpisz współrzędne końców |
| Elewacje wzdłuż ponumerowanych linii siatki; zapisane widoki; płaszczyzny robocze | Użyj {{ui:3D}} lub {{ui:Dodaj według siatki}} |
| Otwory rysowane jako rzeczywiste cięcia w widoku 3D | Otwory widać jako ciemne zatyczki; są rzeczywiste we wszystkich eksportach |
| Zaokrąglone lub skośne wycięcia, inne cięcia i okucia | Tylko proste wycięcia na dwuteownikach |
| Otwory dodawane do kątowników i okrągłych rur | Otwory kątowników pochodzą wyłącznie z [blach węzłowych stężeń](topic:brace-gussets) |
| Dane wejściowe w calach | Wpisuj milimetry (25,4 na cal) |
| Edycja lub usuwanie własnego profilu | Dodaj poprawiony profil pod nową nazwą |

## Schody

| Jeszcze nie | Zamiast tego, na dziś |
|---|---|
| Poręcze, spoczniki, listwy krawężnikowe, stopnie kratowe, schody kręcone i dwubiegowe | Tylko proste biegi; zobacz [Schody](topic:stairs) |
| Cięcia końców policzków przy stropach | Policzki z cięciem prostopadłym; wytnij je w swoim programie warsztatowym |

## Połączenia

DetailCraft buduje sześć połączeń: blachę węzłową stężenia (zobacz [Blachy węzłowe stężeń](topic:brace-gussets)); łączenie śrubowe między dwoma częściami jednego dwuteownika (zobacz [Łączenia](topic:splices)); narożnik na ukos między dwoma dwuteownikami zbiegającymi się pod kątem, tylko cięty albo z przykręconymi blachami czołowymi (zobacz [Połączenia na ukos](topic:mitres)); przykręconą blachę czołową równą lub wysuniętą, od poziomej, pionowej belki dwuteowej do pasa lub środnika słupa dwuteowego; blachę ścinającą od belki (prostopadłej, skośnej lub pochylonej) do pasa lub środnika słupa; oraz blachę podstawy słupa z czterema kotwami.

| Jeszcze nie | Zamiast tego, na dziś |
|---|---|
| Skośne lub pochylone blachy czołowe | Użyj [blach ścinających](topic:shear-tabs), które obsługują skośne i pochylone belki |
| Kątowniki mocujące; blachy wypełniające łączeń i łączenia między różnymi rozmiarami; blachy węzłowe narożne spawane do belki i słupa, ścinane blachy węzłowe | Zaprojektuj je w innym oprogramowaniu albo dodaj blachy i otwory ręcznie jako luźne elementy; zobacz [Łączenia](topic:splices), [Blachy węzłowe stężeń](topic:brace-gussets) |
| Ścięte lub zwężane żebra blachy podstawy; otwory na zaprawę; gniazdo fundamentu dla zęba ścinającego | Prostokątne żebra; zobacz [Blachy podstawy](topic:base-plates) |
| Wzmocnienia (haunches); spawane połączenia na ukos ze spoiną czołową; żebra w linii pasów drugiego elementu | [Połączenie na ukos](topic:mitres) z blachami czołowymi i żebrami środnika albo zwykłe cięcie na ukos; inne blachy dodaj ręcznie jako luźne elementy |
| Sprawdzenia nośności połączeń | Sprawdź połączenia obliczeniami inżyniera; DetailCraft ostrzega tylko o odległości od krawędzi i rozstawie |
| Otwory podłużne | Tylko otwory okrągłe |

## Analiza

| Jeszcze nie | Zamiast tego, na dziś |
|---|---|
| Sprawdzenia projektowe poza dwuteownikami stalowymi: rury, kątowniki, ceowniki, kształty spawane, elementy smukłe lub klasy 4, skręcanie, połączenia; beton: smukłość na przechyłanie, skręcanie, detalowanie sejsmiczne, płyty i ściany | Karta {{ui:Analiza}} sprawdza dwuteowniki stalowe według AISC 360 lub EN 1993-1-1 ([Sprawdzanie elementów stalowych według normy projektowej](topic:design-checks)); reszta jest oznaczona jako „nie sprawdzono”; wszystko przegląda inżynier |
| Analiza wyboczenia, drgania | Efekty drugiego rzędu tylko P-Delta (sprężyste); brak analizy wyboczenia (modalna, widmo odpowiedzi, historia w czasie i pushover są w karcie {{ui:Analiza}}) |
| Sprawdzenia projektowe przejrzane przez inżyniera | Do tego czasu są pomocą: sprawdź dwa lub trzy elementy ręcznie albo w oprogramowaniu inżyniera, zanim na nich polegać |
| Obciążenia od podłóg, wiatru i śniegu generowane z powierzchni | Obciążenia na elementy wprowadza się ręcznie, w kN/m lub kN |
| Przesunięcia elementów, mimośrodowe połączenia, stężenia tylko rozciągane, blachy i fundamenty w ramie | Elementy analizowane są na ich liniach roboczych; stężenia przenoszą rozciąganie i ściskanie |

## Zbrojenie

| Jeszcze nie | Zamiast tego, na dziś |
|---|---|
| Okrągłe słupy, spirale, pochylone lub zakrzywione belki, płyty inne niż prostokątne, ściany, które nie są proste | Prostokątne belki, słupy, płyty i ściany ([Szczegółowe projektowanie zbrojenia żelbetu](topic:reinforced-concrete)) |
| Pręty wygięte w zakład, przesunięte zakłady, zakłady układane w dowolnym miejscu | Zakłady w równych odstępach, wszystkie pręty zakładane w jednym przekroju (ACI klasa B, EN α6 = 1,5) |
| Pręty narożne przy otworach, zbrojenie na przebicie, detalowanie sejsmiczne (ACI 318-19, rozdział 18) | Obrzeża z każdej strony otworu; resztę sprawdź samodzielnie |
| Odczyt własnych plików programu do projektowania konstrukcji | Wyeksportuj IFC z tego programu: jego IfcReinforcingBar wczytują się jako pręty ([Pręty z pliku IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Kody kształtów poza prostym, jednym gięciem i U; typy ACI 315 dla prostych i jednohakowych prętów | Trzy kształty drukują się jako BS 8666 00, 11, 21 lub ACI Type 2; zobacz [Dokumentacja zbrojenia](topic:rebar-reference) |
| Pręty metryczne inne niż BS 4449 H8–H40 (np. CSA 10M–35M) | Nazwy ASTM soft-metric #10–#36 lub pręty BS |

## Rysunki i eksporty

| Jeszcze nie | Zamiast tego, na dziś |
|---|---|
| Arkusze pionowe, A0 i arkusze o własnym formacie; widoki ogólne na skośnych siatkach | Poziome A4 do A1 oraz ANSI B do D ([Rysunki ogólnego ustawienia i zestawieniowe](topic:drawings)); przeskaluj PDF, aby wydrukować w innym formacie |
| Oznaczenia spoin na rysunkach warsztatowych pojedynczych części; oznaczenia inne niż pachwinowe | Rysunki zestawieniowe mają oznaczenia spoin pachwinowych; rysunek warsztatowy podaje spoinę jako tekst |
| Edycja rysunku w aplikacji | Zmień model i wygeneruj rysunek ponownie; oznacz PDF w aplikacji do PDF, np. MarkupCraft |
| Rysunki jako DWG z obiektami wymiarów albo model w skali 1:1 w przestrzeni modelu z arkuszami jako układami | Każdy arkusz to DWG lub DXF w rozmiarze papieru, wymiary jako linie i liczby ([Rysunki ogólnego ustawienia i zestawieniowe](topic:drawings#download)) |
| Otwory okrągłych rur w plikach NC, wycięcia na kątownikach i okrągłych rurach w plikach NC | Nie są zapisywane; zobacz [Pola pliku NC](topic:nc1-fields) |
| Fazki, znakowania i kontury wewnętrzne w plikach NC | Na dziś brak |
| Otwory na śruby, śruby, spoiny i fundamenty w eksporcie USD | Są w wynikach IFC, NC i BOM; zobacz [Eksport modelu stalowego do USD](topic:usd) |
| Wczytywanie połączeń, fundamentów, otworów podłużnych lub prostokątnych oraz otworów w okrągłych rurach z pliku IFC | {{ui:Importuj IFC}} wczytuje belki, słupy, elementy, blachy, siatki, poziomy, okrągłe otwory, wycięcia, śruby i pręty zbrojeniowe, a jego raport wymienia to, co pominięto |
| Własne układy raportów | Trzy pliki CSV |

## Panele

| Jeszcze nie | Zamiast tego, na dziś |
|---|---|
| Przesuwanie raportów na dole ({{ui:Problemy}}, {{ui:Zestawienie materiałów}}, {{ui:Zestawienie gięcia}}) | Przesuwają się tylko panele {{ui:Model}} i {{ui:Właściwości}}. Zobacz [Ułóż panele](common:arrange-panels) |

## Współpraca i zapis

| Jeszcze nie | Zamiast tego, na dziś |
|---|---|
| Zapis w chmurze i synchronizacja między komputerami | Zapisuj pliki `.detailcraft.json` i udostępniaj je jak każdy plik. Zapis w chmurze nie jest jeszcze dostępny |
| Kursory innych osób i etykiety „edytuje” w sesji Live TeamWork; siatki, poziomy i etapy scalane element po elemencie | Edycje nadal się scalają (siatki, poziomy i etapy przechodzą w całości, wygrywa późniejsza zmiana); zobacz [Szczegółowo projektuj jedną konstrukcję wspólnie, na żywo](topic:work-live) |
| Linki zaproszeń do sesji Live TeamWork przez internet | Dołącz za pomocą krótkiego kodu w tej samej sieci |

## Platformy

- DetailCraft jest przeznaczony na ekran komputera stacjonarnego, laptopa lub tabletu. Działa też na telefonie: model zachowuje ekran i panele, a raporty otwierają się jako arkusze z paska na dole, ale na panele jest mało miejsca.
- Do pracy offline trzeba najpierw zapisać DetailCraft do pracy offline, przyciskiem {{ui:Zapisz do pracy offline}} na pasku aplikacji; gdy pojawi się napis {{ui:Gotowe offline}}, wszystko w tej wersji działa bez połączenia. Zobacz [Praca offline](common:offline).

Jeśli któraś z tych luk blokuje pracę, napisz do nas przez [stronę wsparcia](https://getcadcraft.com/support); pomoże nam to zdecydować, co zbudować dalej.
