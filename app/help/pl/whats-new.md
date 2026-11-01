---
title: Co nowego w 0.7
summary: Sprawdzenia projektowe stalowych kształtowników dwuteowych z kombinacjami obciążeń według ASCE 7 lub EN 1990 i sprawdzeniem elementów według AISC 360 lub EN 1993-1-1, eksport USD modelu stalowego, narzędzie asystenta dla USD, wstążka Stal z dużymi i małymi przyciskami, panele, które się chowają, i okna dialogowe, które się przesuwają.
keywords: co nowego, nowości, informacje o wydaniu, lista zmian, zmiany, 0.7, wersja, nowe funkcje, sprawdzenia projektowe, projektowanie stali, wytężenie, kombinacje obciążeń, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokod, załącznik krajowy, obciążenie użytkowe dachu, graniczne ugięcie, usd, usda, usdc, usdz, openusd, asystent, mcp, wstążka stal, wstążka, przycisk dzielony, jednostki, zwarta, panele, okna dialogowe, portugalski
from: 17d1e0bb
---

To zmieniło się w DetailCraft 0.7 w porównaniu z 0.6. Analiza ramy z 0.6 ma teraz drugi krok: sprawdzanie elementów stalowych według normy projektowej.

## Nowe

### Połączenia ukośne (0.7.1)

- **Dwa kształtowniki dwuteowe spotykające się pod kątem**, na przykład naroże ramy portalowej lub kalenica: zaznacz oba, wybierz {{ui:Połączenie ukośne}} w menu {{ui:Więcej}} grupy {{ui:Połącz}}, a oba końce zostaną ucięte w płaszczyźnie dzielącej kąt na pół. Skręcane blachy czołowe i żebra środnika to pola wyboru w nowym oknie Połączenie ukośne, którego ponumerowane pola odpowiadają rysunkowi Twojego węzła tworzonemu w trakcie wpisywania. Połączenie ukośne podąża za elementami, gdy się przesuwają, i przechodzi do rysunków, plików NC (cięcia skośne), IFC i zestawienia materiałów. Zobacz [Połączenia ukośne](topic:mitres).

### Sprawdzenia projektowe

- **Kombinacje obciążeń z normy.** Na karcie {{ui:Analiza}} nowy blok {{ui:Sprawdzenia projektowe}} ma {{ui:Norma projektowa}}: ASCE 7 + AISC 360 (USA, LRFD) lub EN 1990 + EN 1993-1-1 (Eurokod). Nadaj każdemu przypadkowi obciążenia rodzaj (stałe, użytkowe, nowe użytkowe dachu, śnieg, wiatr, sejsmiczne), naciśnij {{ui:Utwórz kombinacje}}, a DetailCraft zapisze kombinacje nośności i użytkowalności z normy dla Twoich przypadków. Kombinacje wpisane przez Ciebie zostają. Zobacz [Tworzenie kombinacji](topic:design-checks#make-the-combinations).
- **Wartości z załącznika krajowego.** W Eurokodzie współczynniki zaczynają od wartości zalecanych; {{ui:Wartości z załącznika krajowego}} pozwala wpisać wartości Twojego kraju, a są one zapisywane w modelu. Zobacz [Tworzenie kombinacji](topic:design-checks#make-the-combinations).
- **Sprawdzanie elementów.** {{ui:Sprawdź elementy}} sprawdza każdy stalowy kształtownik dwuteowy na rozciąganie, ściskanie z wyboczeniem, zginanie ze zwichrzeniem, ścinanie, zginanie z siłą osiową i ugięcie względem ustawionego {{ui:Graniczne ugięcie}}. Tabela pokazuje wytężenie każdego elementu, decydujące sprawdzenie i jego kombinację, a elementy są kolorowane na modelu (niebieski, zielony, ochra, czerwony, szary dla niesprawdzonych). Zobacz [Sprawdzanie elementów](topic:design-checks#check-the-members).
- **W raporcie.** {{ui:Raport (PDF)}} i {{ui:Raport (CSV)}} dodają wydania norm, ustawienia, wytężenie według elementów i każdy użyty punkt normy. Zobacz [Raport](topic:design-checks#the-report).
- **Pomoc, dopóki nie sprawdzi jej inżynier.** Używa tylko sił pierwszego rzędu. Rury, kątowniki, ceowniki, kształtowniki spawane oraz części smukłe lub klasy 4 są oznaczane „not checked” z powodem; skręcanie, połączenia i beton nie są sprawdzane. Zobacz [Czego nie sprawdza](topic:design-checks#what-is-not-checked).

### USD

- **Eksport modelu stalowego jako USD.** {{ui:USD}} w grupie {{ui:Wyjście}} zapisuje model jako {{ui:Tekst (.usda)}}, {{ui:Binarny (.usdc)}} lub {{ui:Paczka (.usdz)}} dla programów do renderowania i składania scen: każdy zespół zawiera swoje części, każda część to jej przekrój poprowadzony wzdłuż długości z wyciętymi cope, a każda niesie swój znacznik części, profil, gatunek, długość i masę. Otwory na śruby, śruby, spoiny i ławy nie są w siatkach USD. Zobacz [Eksport modelu stalowego jako USD](topic:usd).

### Asystenci AI

- **USD dla asystentów.** Twój własny asystent, połączony przez CadCraft Studio, może wyeksportować model jako USD (`usd_export`), a w Studio zapisać go w dozwolonym przez Ciebie folderze. Zobacz [O co może prosić asystent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Zmienione

- **Wstążka Stal** ma duże i małe przyciski: duży {{ui:Belka}} obok małych {{ui:Słup}}, {{ui:Stężenie}} i {{ui:Blacha}} w {{ui:Modelowanie}} › {{ui:Elementy}}; duży {{ui:Blachy czołowe}} w {{ui:Detalowanie}} › {{ui:Połączenia}}, z {{ui:Połączenie doczołowe}} i {{ui:Blacha węzłowa}} dzielącymi jeden przycisk dzielony; duży {{ui:Wklej}} w {{ui:Edycja}} › {{ui:Schowek}}, z {{ui:Wklej w miejscu}} i {{ui:Duplikuj}} za strzałką grupy. {{ui:Produkcja}} › {{ui:Wymiana}} ma {{ui:Eksportuj USD}} obok IFC. Pozostałe style menu wyglądają jak dotąd. Zobacz [Menu, klawisze i mysz](topic:menus-keys-and-mouse#the-three-styles).
- [Analiza ramy](topic:frame-analysis) odsyła teraz do sprawdzeń projektowych, a jej kombinacje mogą być tworzone według normy.

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma po jednej liście dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami wynikającymi z definicji jednostek (stopa geodezyjna USA jest osobną jednostką). Wyłącz jednostki, których nigdy nie używasz, a znikną z list jednostek; oznacz jedną gwiazdką, a nowa praca zacznie się w niej. Plik zawsze zachowuje własną jednostkę. Własne pola DetailCraft nie podążają jeszcze za listami: jego długości nadal wpisuje się w milimetrach. Zobacz [Jednostki, wpisywane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy panel boczny ma wąski pasek tytułu: przeciągnij go, aby zadokować lub oderwać panel, upuść na pasku innego panelu, aby dzielić jedną ramkę jako karty, przypnij, aby chował się przy krawędzi, albo ukryj go i przywołaj od krawędzi. Zobacz [Rozmieszczanie paneli](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe się przesuwają.** Przeciągnij okno dialogowe za pasek tytułu, aby usunąć je sprzed rysunku; wraca tam, gdzie je zostawisz. Kliknij dwukrotnie pasek tytułu, aby znów je wyśrodkować. Zobacz [Przesuwanie okna dialogowego](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć rozpisanych próśb do Twojego własnego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj modelowi pytania, zsumuj przedmiar, wypróbuj wariant części…), każda z wywoływanymi narzędziami i potrzebnymi uprawnieniami, i każda odtwarzana przez nasze testy. Aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. Razem z nim **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz każde słowo aplikacji, jako wersje robocze jeszcze niesprawdzone przez rodzimego użytkownika języka. Tematy pomocy na start są dostępne także w tych językach, w tym po polsku; pozostałe tematy pomocy są nadal po angielsku, o ile nie ma ich tłumaczenia.
- **CadCraft Studio** podaje, dlaczego sprawdzenie aktualizacji się nie powiodło (brak pliku dla Twojego systemu, brak sieci, zły podpis), zamiast samego „Done”, i przestaje przywracać kartę Co nowego, którą zamknięto, dopóki nie pojawi się nowsze wydanie.

## Jeszcze nie w tej wersji

- **0.7 nie jest podpisane cyfrowo.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, bo walidacja certyfikatu jeszcze nie nadeszła. Sprawdź SHA-256 obok każdego pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu za pierwszym razem kliknij CadCraft Studio prawym przyciskiem i wybierz {{ui:Otwórz}}. CadCraft Studio nie jest jeszcze w sklepie z aplikacjami i nie ma jeszcze wersji na iPada ani iPhone'a.
- Listy kątów i nachyleń w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie czyta.
- **Sprawdzenia projektowe nie zostały jeszcze sprawdzone przez inżyniera.** Nasze testy porównują je z drukowanymi wartościami z tablic i wzorami policzonymi ręcznie, jeszcze nie z przykładami z przewodników projektowych. Do czasu przeglądu są pomocą: elementy, które mają znaczenie, sprawdź ręcznie.
- Sprawdzenia projektowe używają sił pierwszego rzędu (bez efektów drugiego rzędu) i sprawdzają tylko kształtowniki dwuteowe. Niezbudowane: rury, kątowniki, ceowniki, kształtowniki spawane, części smukłe (AISC) lub klasy 4 (Eurokod) przy zginaniu, skręcanie, wyboczenie przy ścinaniu razem ze zginaniem, połączenia, zmęczenie, pożar, detale sejsmiczne i beton. Smukła część ściskana pomija sprawdzenia ściskania, a element pokazuje „passes, partly checked”.
- Analiza ramy jest nadal pierwszego rzędu i liniowa, i nie została jeszcze wypróbowana przez inżyniera na prawdziwej pracy.
- Otwory na śruby, śruby, spoiny i ławy nie są w eksporcie USD.

Wszystko inne jest w [Czego jeszcze nie zbudowano](topic:not-built-yet).
