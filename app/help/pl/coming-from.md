---
title: Przechodzenie z innego oprogramowania do detalowania
summary: Jak nawyki z pełnego pakietu do detalowania przekładają się na DetailCraft oraz różnice, które zaskakują doświadczonych detalistów.
keywords: przechodzenie, migracja, znajome, przepływ pracy, porównanie, różnice, numeracja, komponenty, katalog, rysunki, nawyki
from: 39639a5d
---

Jeśli detalujesz w Tekla Structures, większość DetailCraft będzie ci znajoma: siatki, poziomy, profile z katalogu, części i zestawy, połączenia, numeracja, pliki NC, IFC. Skala jest zupełnie inna: Tekla Structures to pełny system produkcyjny, a DetailCraft to mała, wczesna aplikacja przeglądarkowa, która wykonuje kilka zadań od początku do końca. Ta strona pokazuje, gdzie twoje nawyki się przenoszą, a gdzie nie.

:::tip
Jeśli twoje ręce znają wstążkę Tekla Structures, wybierz styl menu {{ui:Wstążka stalowa}} w {{ui:Ustawienia}} › {{ui:DetailCraft}} › {{ui:Menu, klawisze i mysz}}: karty Modelowanie, Detalowanie, Edycja, Rysunki, Produkcja i Widok, a środkowy przycisk przesuwa widok. Jeśli przychodzisz z AutoCAD i lubisz wpisywać polecenia, {{ui:Klasyczne kreślenie}} dodaje wiersz poleceń (BEAM, COLUMN, ENDPLATE, ZOOM …). Zob. [Menu, klawisze i mysz](topic:menus-keys-and-mouse).
:::

## Szybka mapa

| Do czego jesteś przyzwyczajony | W DetailCraft |
|---|---|
| Tworzenie siatek ze współrzędnymi w oknie siatki | {{ui:Siatki}} w lewym panelu: etykiety i odstępy między liniami, a nie współrzędne bezwzględne. Linie numerowane biegną w jednym kierunku, linie literowe w drugim |
| Poziomy jako współrzędne Z siatki | Osobna lista {{ui:Poziomy}}: nazwa i rzędna w każdym wierszu, stosowana przyciskiem {{ui:Zastosuj poziomy}} |
| Wskazywanie punktów gdziekolwiek za pomocą przyciągania | Kliknięcia przyciągają tylko do przecięć siatki. Punkty poza siatką wpisuje się w {{ui:Końce (x, y, z mm)}} elementu |
| Polecenia słupa, belki i blachy | {{ui:Słup}} ({{key:C}}), {{ui:Belka}} ({{key:B}}), {{ui:Stężenie}} ({{key:R}}), {{ui:Blacha}} ({{key:P}}), {{ui:Ława}} ({{key:F}}) |
| Okno właściwości części (dwuklik na części) | Jedno kliknięcie: panel {{ui:Właściwości}} po prawej jest zawsze aktywny; nie ma okna ani przycisków Modyfikuj czy Zastosuj |
| Położenie na płaszczyźnie, obrót i ustawienia głębokości | {{ui:Położenie}} (góra stali, wyśrodkowanie lub spód na linii) i {{ui:Obrót (°)}}. Brak osobnych przesunięć poziomych |
| Katalog profili | Stała lista 2 311 opublikowanych rozmiarów (AISC W, S, C, L, HSS, Pipe; europejskie IPE, HEA, HEB, UPN; brytyjskie UB, UC, PFC, EA, UEA, SHS, RHS, CHS i profile zimnogięte), plus parametryczne blachy i własne przekroje {{ui:Profil niestandardowy}} |
| Katalog materiałów | Siedem gatunków na liście: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Zastosowanie komponentu połączenia i jego okna | Zaznacz belkę, wybierz {{ui:Blachy czołowe}}. Ustawienia pojawiają się w panelu {{ui:Właściwości}}. Istnieją tylko dwa połączenia (blacha czołowa do półki słupa, blacha podstawy) |
| Automatyczne łączenie albo kopiowanie węzła na podobne węzły | Zaznacz połączenie, wybierz {{ui:Zastosuj do podobnych (n)}} |
| Numerowanie z seriami i numerami początkowymi | Brak polecenia: znaczniki aktualizują się same po każdej zmianie, ze stałymi prefiksami c, b, br, p oraz C, B, BR, P |
| Okna śrub i otworów | Otwory wpisuje się według powierzchni i położenia. Śruby pochodzą tylko z połączeń |
| Narzędzia wycinania, dopasowania i wycinania wielokątem | Wycięcia (góra lub dół, na jednym z końców) tylko na dwuteownikach. Przycięcia przy połączeniach są automatyczne |
| Raporty i szablony | Trzy stałe raporty w kartach na dole oraz pobieranie CSV |
| Tworzenie rysunków i lista rysunków | Jeden rysunek warsztatowy na znacznik części, wszystkie robione naraz, podglądane, a potem pobierane jako jeden PDF lub arkusz po arkuszu. Nic nie jest zapisywane ani edytowane |
| Eksport plików NC | {{ui:Pliki NC}}: jeden plik DSTV na znacznik części, tylko dwuteowniki i blachy, spakowane w zip |
| Eksport IFC | {{ui:IFC}}: IFC4 całego modelu, ze zbrojeniem |
| Zbrojenie w dowolnym elemencie betonowym | Zbrojenie tylko w prostokątnych stopach fundamentowych, rozmiary prętów US, z dolną siatką i prętami startowymi |
| Model zapisany w folderze projektu, wielu użytkowników | Jeden plik `.detailcraft.json`, który pobierasz. Jeden użytkownik, na twoim komputerze |
| Historia cofania | {{key:Mod+Z}} i {{key:Mod+Y}}, do 200 kroków, zachowywane do otwarcia lub rozpoczęcia innego modelu |

## Różnice, na które ludzie się potykają

### Znaczniki zmieniają się same

Nie ma kroku numerowania. Znaczniki są przeliczane po każdej zmianie, więc zawsze są aktualne, ale mogą też zostać przenumerowane: dodasz słup i wczorajsze c3 może być teraz c4. Nie ma „historii numeracji”, która zachowałaby stare znaczniki. Skończ model, a potem wygeneruj zestawienie materiałów, pliki NC i rysunki warsztatowe razem z jednego zapisanego pliku.

### Środkowy przycisk myszy przybliża; nie przesuwa

W widoku 3D: przeciągnięcie lewym obraca, prawym przesuwa, kółko przybliża, a przeciąganie środkowym też przybliża. Przytrzymanie {{key:Shift}} podczas przeciągania lewym również przesuwa. Kółko przybliża ku środkowi widoku, a nie ku wskaźnikowi. Nie ma wyboru środka obrotu: model obraca się wokół środka widoku. Zob. [Poruszanie się w widoku 3D](topic:navigate-3d).

### Słupy domyślnie są zwrócone w jedną stronę

Przy obrocie 0 półki słupa biegną wzdłuż kierunku siatki numerowanej. Belki biegnące między liniami literowymi wchodzą w środnik, a blachy czołowe są tam odrzucane („Belki wchodzące w środnik słupa nie są jeszcze zbudowane”). Obróć te słupy o 90° przed dodaniem połączeń.

### Widoki elewacji tylko na liniach literowych

{{ui:Elewacja}} patrzy tylko wzdłuż linii siatki literowych. Nie ma widoków wzdłuż linii numerowanych, zapisanych widoków ani płaszczyzn roboczych. Użyj {{ui:3D}} lub {{ui:Dodaj według siatki}} dla ram na liniach numerowanych.

### Zaznaczanie, kopiowanie i przesuwanie

Zaznacz kilka części przez {{key:Shift}}+kliknięcie lub {{key:Mod+A}}, a potem kopiuj, wycinaj, wklejaj (na przecięciu siatki, z wpisanym przesunięciem lub w miejscu) i duplikuj, łącznie z połączeniami ([Kopiowanie, wklejanie i duplikowanie](topic:copy-paste)). Nie ma zaznaczania oknem, filtra zaznaczania, przesuwania, lustra ani macierzy, a właściwości zmienia się jednym elementem naraz w panelu {{ui:Właściwości}}.

### Siatki nie przeciągają elementów

Elementy zachowują swoje współrzędne, gdy zmienisz odstępy siatki; nic nie przesuwa się razem z liniami siatki. Zmień siatkę przed rozstawieniem stali albo potem edytuj współrzędne końców każdego elementu.

### Połączenia nie są projektowane

Dwa połączenia rozmieszczają blachy, otwory, śruby i spoiny według liczb, które podasz. Nie ma żadnego sprawdzenia projektowego, są tylko ostrzeżenia o krawędziach i rozstawie (z EN 1993-1-8 tabela 3.3).

### Otwory nie są wycinane w widoku 3D

Otwory pokazują się jako ciemne zatyczki. Są prawdziwymi otworami w plikach NC, rysunkach warsztatowych i pliku IFC. Wycięcia (copes) są wycinane w widoku.

### Masy są brutto

Masa stali nie odlicza otworów ani wycięć, a masy śrub nie są uwzględniane.

### Tylko milimetry

Wszystko jest wpisywane i pokazywane w milimetrach, nawet dla profili AISC. Nazwy profili zachowują swoją opublikowaną postać (W12x50, HSS6x6x1/4).

### Brak rysunków do zarządzania

Nie ma listy rysunków, edytora rysunków, rysunków ogólnego ustawienia ani rysunków złożeniowych. Rysunek warsztatowy powstaje, gdy o niego poprosisz, i jest pobierany; aby go zmienić, zmień model i wygeneruj go ponownie.

### Działa w przeglądarce

Zapisanie pobiera plik. Skrótów klawiszowych zarezerwowanych przez przeglądarkę nie da się użyć. Modele nigdy nie opuszczają komputera: zob. [Gdzie trafiają twoje pliki](common:your-files).

## Co dalej w obecnym oprogramowaniu

Dziś DetailCraft nadaje się do małych ram, sprawdzania pomysłu, nauczania oraz tworzenia plików NC i rysunków warsztatowych dla prostych prac z belkami i słupami. Złożone połączenia, rysunki ogólnego ustawienia, rysunki montażowe, projekty wieloosobowe i wszystko z listy [Czego jeszcze nie zbudowano](topic:not-built-yet) zostaw w oprogramowaniu, którego używasz obecnie.
