---
title: Co nowego w wersji 0.7 (wcześniej)
summary: Sprawdzenia projektowe dwuteowników stalowych z kombinacjami obciążeń według ASCE 7 lub EN 1990 oraz sprawdzanie elementów według AISC 360 lub EN 1993-1-1, eksport USD modelu stalowego, narzędzie asystenta dla USD, wstążka Stal z dużymi i małymi przyciskami, panele, które się chowają, oraz okna dialogowe, które można przesuwać.
keywords: co nowego 0.7, wcześniejsze wydanie, informacje o wydaniu, dziennik zmian, zmiany, 0.7, wersja, nowe funkcje, sprawdzenia projektowe, projektowanie stali, wykorzystanie, kombinacje obciążeń, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokod, załącznik krajowy, obciążenie użytkowe dachu, limit ugięcia, usd, usda, usdc, usdz, openusd, asystent, mcp, wstążka stali, wstążka, przycisk dzielony, jednostki, zwarty, panele, okna dialogowe, portugalski
from: 54a7a8f0
---

To jest zestawienie zmian w DetailCraft 0.7 w porównaniu z 0.6. Analiza ramy z wersji 0.6 ma teraz drugi krok: sprawdzenie elementów stalowych według normy projektowej.

## Nowe

### Połączenia ukośne (0.7.1)

- **Dwa dwuteowniki spotykające się pod kątem**, na przykład narożnik portalowy lub kalenica: zaznacz oba, wybierz {{ui:Połączenie ukośne}} w menu {{ui:Więcej}} grupy {{ui:Połącz}}, a oba końce zostaną przycięte na płaszczyźnie dzielącej kąt na pół. Blachy czołowe połączone śrubami i żebra usztywniające są polami wyboru w nowym oknie dialogowym Połączenie ukośne, a jego ponumerowane pola odpowiadają rysunkowi Twojego połączenia, który powstaje podczas wpisywania. Połączenie ukośne podąża za elementami, gdy się przesuwają, i przenosi się na rysunki, pliki NC (cięcia skośne), IFC i zestawienie materiałów. Zobacz [Połączenia ukośne](topic:mitres).

### Sprawdzenia projektowe

- **Kombinacje obciążeń z normy.** Na karcie {{ui:Analiza}} nowy blok {{ui:Sprawdzenia projektowe}} ma pole {{ui:Norma projektowa}}: ASCE 7 + AISC 360 (USA, LRFD) lub EN 1990 + EN 1993-1-1 (Eurokod). Nadaj każdemu przypadkowi obciążenia rodzaj (stały, użytkowy, nowe obciążenie użytkowe dachu, śnieg, wiatr, sejsmika), naciśnij {{ui:Utwórz kombinacje}}, a DetailCraft zapisze kombinacje normy dla nośności i stanów użytkowalności z Twoich przypadków. Kombinacje wpisane przez Ciebie pozostają. Zobacz [Utwórz kombinacje](topic:design-checks#make-the-combinations).
- **Wartości z załącznika krajowego.** Dla Eurokodu współczynniki zaczynają się od wartości zalecanych; {{ui:Wartości z załącznika krajowego}} pozwala wpisać wartości Twojego kraju, które są zapisywane w modelu. Zobacz [Utwórz kombinacje](topic:design-checks#make-the-combinations).
- **Sprawdź elementy.** {{ui:Sprawdź elementy}} sprawdza każdy dwuteownik stalowy na rozciąganie, ściskanie z wyboczeniem, zginanie ze zwichrzeniem, ścinanie, zginanie z siłą osiową oraz ugięcie względem ustawionego {{ui:Limit ugięcia}}. Tabela pokazuje wykorzystanie każdego elementu, sprawdzenie rządzące i jego kombinację, a elementy są kolorowane na modelu (niebieski, zielony, ochrowy, czerwony, szary dla niesprawdzonych). Zobacz [Sprawdź elementy](topic:design-checks#check-the-members).
- **W raporcie.** {{ui:Raport (PDF)}} i {{ui:Raport (CSV)}} dodają wydania normy, ustawienia, wykorzystanie według elementów oraz każdy użyty punkt normy. Zobacz [Raport](topic:design-checks#the-report).
- **Pomoc do czasu przeglądu przez inżyniera.** Wyniki używają wyłącznie sił z analizy pierwszego rzędu. Rury, kątowniki, ceowniki, profile spawane oraz smukłe lub klasy 4 części są oznaczone jako „nie sprawdzono” wraz z powodem; skręcanie, połączenia i beton nie są sprawdzane. Zobacz [Czego nie sprawdzono](topic:design-checks#what-is-not-checked).

### USD

- **Eksport modelu stalowego jako USD.** {{ui:Eksportuj USD}} w grupie {{ui:Wyjście}} zapisuje model jako {{ui:Tekst (.usda)}}, {{ui:Binarny (.usdc)}} lub {{ui:Paczka (.usdz)}} dla programów do renderowania i składania scen: każdy zespół zawiera swoje części, każda część to jej przekrój poprowadzony wzdłuż długości z wyciętymi wycięciami, a każda ma znak elementu, profil, gatunek, długość i masę. Otwory na śruby, śruby, spoiny i stopy fundamentowe nie są w siatkach USD. Zobacz [Eksport modelu stalowego jako USD](topic:usd).

### Asystenci AI

- **USD dla asystentów.** Twój własny asystent, połączony przez CadCraft Studio, może wyeksportować model jako USD (`usd_export`), a w Studio zapisać go do folderu, na który zezwolisz. Zobacz [Czego asystent może zażądać](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Zmienione

- **Wstążka Stal** ma duże i małe przyciski: duża {{ui:Belka}} obok małych {{ui:Słup}}, {{ui:Stężenie}} i {{ui:Blacha}} na {{ui:Modelowanie}} › {{ui:Elementy}}; duże {{ui:Blachy czołowe}} na {{ui:Detalowanie}} › {{ui:Połączenia}}, przy czym {{ui:Połączenie doczołowe}} i {{ui:Blacha węzłowa}} dzielą jeden przycisk dzielony; duża {{ui:Wklej}} na {{ui:Edycja}} › {{ui:Schowek}}, a {{ui:Wklej w miejscu}} i {{ui:Duplikuj}} za strzałką grupy. {{ui:Produkcja}} › {{ui:Wymiana}} ma {{ui:Eksportuj USD}} obok IFC. Pozostałe style menu wyglądają tak jak dotychczas. Zobacz [Menu, klawisze i mysz](topic:menus-keys-and-mouse#the-three-styles).
- [Analiza ramy](topic:frame-analysis) wskazuje teraz na sprawdzenia projektowe, a jej kombinacje mogą być tworzone według normy.

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma osobną listę dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami podanymi w definicjach jednostek (stopa z geodezji USA jest osobną jednostką). Wyłącz jednostki, których nigdy nie używasz, a znikną z list; oznacz gwiazdką jedną, a nowa praca zacznie się w niej. Plik zawsze zachowuje własną jednostkę. Pola DetailCraft jeszcze nie korzystają z list: jego długości nadal wpisuje się w milimetrach. Zobacz [Jednostki, wpisywane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści na ekranie więcej (ekrany dotykowe i telefony zachowują duże przyciski). Każdy boczny panel ma smukły pasek tytułu: przeciągnij go, aby zadokować lub odłączyć panel, upuść na pasku innego panelu, aby dzielić jedną ramkę jako karty, przypnij, aby chował się do krawędzi, albo ukryj go i przywołaj z krawędzi. Zobacz [Ułożenie paneli](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe się przesuwają.** Przeciągnij okno dialogowe za pasek tytułu poza rysunek; wróci tam, gdzie je zostawiłeś. Kliknij dwukrotnie pasek tytułu, aby ponownie je wyśrodkować. Zobacz [Przesuwanie okna dialogowego](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć gotowych próśb do Twojego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj modelowi pytania, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, które wywołuje, i uprawnieniami, których wymaga, a każda sprawdzona w naszych testach. Aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. Ten język, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz wszystkie słowa aplikacji, jako wersje robocze, które nie zostały jeszcze sprawdzone przez native speakera. Tematy pomocy są w języku angielskim.
- **CadCraft Studio** podaje, dlaczego sprawdzenie aktualizacji się nie powiodło (brak pliku dla Twojego systemu, brak sieci, zły podpis), zamiast samego „Gotowe”, i przestaje przywracać kartę Co nowego, którą zamknąłeś, dopóki nie pojawi się nowsze wydanie.

## Jeszcze nie w tej wersji

- **Wersja 0.7 nie jest podpisana kodem.** Podpisywanie oraz pakiet Microsoft Store przeniesiono do wersji 0.8, ponieważ walidacja certyfikatu jeszcze nie przyszła. Sprawdź sumę SHA-256 przy każdym pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a następnie {{ui:Uruchom mimo to}}. Na Macu przy pierwszym uruchomieniu kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. CadCraft Studio nie jest jeszcze w sklepie z aplikacjami, a nie ma jeszcze wersji dla iPada ani iPhone'a.
- Listy kątów i nachyleń w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie odczytuje.
- **Sprawdzenia projektowe nie zostały jeszcze sprawdzone przez inżyniera.** Nasze testy porównują je z wartościami z wydrukowanych tablic i ręcznie wykonanymi wzorami, a nie jeszcze z przykładami rozwiązanymi w poradniku projektowym. Do czasu przeglądu są pomocą: sprawdzaj ręcznie elementy, które mają znaczenie.
- Sprawdzenia projektowe używają sił pierwszego rzędu (bez efektów drugiego rzędu) i sprawdzają wyłącznie dwuteowniki. Nie zbudowano: rur, kątowników, ceowników, profili spawanych, smukłych części (AISC) lub części klasy 4 (Eurokod) przy zginaniu, skręcaniu, wyboczeniu przy ścinaniu razem ze zginaniem, połączeń, zmęczenia, pożaru, detalowania sejsmicznego i betonu. Smukła część w ściskaniu pomija sprawdzenia ściskania, a element otrzymuje wynik „spełnia, częściowo sprawdzony”.
- Analiza ramy nadal jest liniowa i pierwszego rzędu i nie została jeszcze wypróbowana przez inżyniera na prawdziwym projekcie.
- Otwory na śruby, śruby, spoiny i stopy fundamentowe nie są w eksporcie USD.

Wszystko inne znajdziesz w [Czego jeszcze nie zbudowano](topic:not-built-yet).
