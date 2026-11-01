---
title: Pierwsze kroki w DetailCraft
summary: Co DetailCraft potrafi dziś, jak go otworzyć i jak w dziesięć minut przejść od pierwszego modelu na siatkach do rysunku warsztatowego.
keywords: start, pierwszy model, wprowadzenie, detalowanie stali, zbrojenie, szybki start, samouczek, przegląd
from: 3682c0d8
---

DetailCraft to aplikacja do detalowania stali i zbrojenia w rodzinie CadCraft. Budujesz model 3D stalowej ramy na siatkach i poziomach, łączysz ją i dostajesz to, czego potrzebuje warsztat: znaczniki części i zespołów, zestawienie materiałów, rysunki warsztatowe pojedynczych części, pliki DSTV NC, model IFC i zestawienie gięcia dla ław.

To wczesna wersja. Robi starannie krótką listę rzeczy zamiast wszystkiego naraz. Zanim zaplanujesz na niej prawdziwą pracę, przeczytaj [Czego jeszcze nie zbudowano](topic:not-built-yet).

## Co potrafi dziś

- Siatki i poziomy wpisywane w milimetrach.
- Słupy, belki, stężenia i blachy z opublikowanych katalogów profili (AISC W, S, C, L, HSS i Pipe; europejskie IPE, HEA, HEB i UPN) oraz Twoje własne profile parametryczne.
- Dwa połączenia: skręcana blacha czołowa od belki do pasa słupa oraz blacha podstawy słupa z czterema prętami kotwiącymi. Każde można skopiować na każdy podobny węzeł.
- Otwory i wycięcia (cope) wpisywane według położenia.
- Prostokątne stopy fundamentowe z siatką dolną i prętami startowymi.
- Znaczniki części i zespołów, które same się aktualizują po każdej zmianie.
- Eksporty: IFC4, pliki DSTV NC (kształtowniki dwuteowe i blachy), zestawienie materiałów jako CSV, zestawienie gięcia jako CSV i PDF z rysunkiem warsztatowym jednej części.

## Otwórz DetailCraft

1. Otwórz DetailCraft w przeglądarce na komputerze: Chrome, Edge, Firefox lub Safari. Zobacz [Przeglądarki i komputery](common:browsers).
2. Poczekaj, aż ekran się wypełni. Pasek stanu na dole podaje „Ready. Open the Sample, or set grids and levels and start placing members.”

Widok modelu wymaga grafiki 3D (WebGL). Jeśli środek ekranu podaje „This browser could not start 3D graphics (WebGL)”, zobacz [Rozwiązywanie problemów](topic:troubleshooting#the-3d-view-is-missing).

:::note
Twoje modele zostają na Twoim komputerze. Otwarcie modelu odczytuje go w przeglądarce, a zapis pobiera plik. Nic nie jest wysyłane. Zapis w chmurze nie jest jeszcze dostępny. Zobacz [Dokąd trafiają Twoje pliki](common:your-files). Aby później używać DetailCraft bez połączenia, wybierz raz, będąc online, {{ui:Zapisz do pracy offline}} na pasku aplikacji; zobacz [Praca offline](common:offline).
:::

:::offline
Jesteś offline. DetailCraft działa bez połączenia tylko wtedy, gdy został wcześniej zapisany do pracy offline: przycisk {{ui:Zapisz do pracy offline}} na pasku aplikacji pokazuje wtedy {{ui:Gotowe offline}}. Zobacz [Praca offline](common:offline).
:::

## Najpierw obejrzyj przykład

Najszybszy sposób, by zobaczyć, co tworzy DetailCraft, to przykładowa rama.

1. Wybierz {{ui:Przykład}} w grupie {{ui:Plik}} paska narzędzi.
2. Widok pokazuje ramę dwunawową: sześć słupów z blachami podstawy, cztery belki z blachami czołowymi, jedno stężenie i siedem ław ze zbrojeniem.
3. Zaznacz belkę. Panel {{ui:Właściwości}} po prawej pokazuje jej znacznik części, długość cięcia, masę i otwory wykonane przez blachy czołowe.
4. Otwórz kartę {{ui:Zestawienie materiałów}} na dole, aby zobaczyć każdy znacznik części z liczbą i masą.

Przewodnik [Poznaj przykładową ramę](topic:sample-model) omawia ją element po elemencie.

## Twój pierwszy model

Nowy model ma już siatki od 1 do 3 oraz od A do B co 6000 mm i dwa poziomy: Poziom 1 na 0 i Poziom 2 na 4000.

1. Wybierz {{ui:Nowy}}. Jeśli bieżący model ma zmiany, DetailCraft zapyta, czy najpierw je zapisać.
2. Wybierz {{ui:Rzut}} nad widokiem. Lista poziomów obok wybiera Poziom 1.
3. Wybierz {{ui:Słup}} na pasku narzędzi albo naciśnij {{key:C}}.
4. Kliknij przecięcie siatek A/1. Pojawi się słup W12x50 od Poziomu 1 do Poziomu 2. Pasek stanu podaje, gdzie trafił.
5. Kliknij B/1, A/2 i B/2, aby ustawić jeszcze trzy.
6. Wybierz Poziom 2 na liście poziomów, a potem {{ui:Belka}} albo naciśnij {{key:B}}.
7. Kliknij A/1, potem A/2. Belka W16x26 łączy dwa wierzchołki słupów, górą stali na poziomie.
8. Naciśnij {{key:Esc}}, aby wrócić do {{ui:Zaznacz}}, a potem kliknij belkę.
9. Wybierz {{ui:Blachy czołowe}} w grupie {{ui:Połącz}}. Oba końce dostają skręcaną blachę czołową, belka zostaje skrócona do dopasowania, a pierwsza blacha czołowa jest teraz zaznaczona.
10. Kliknij belkę ponownie.
11. Wybierz {{ui:Rysunek warsztatowy}} w grupie {{ui:Wyjście}}. Otworzy się podgląd rysunku warsztatowego belki. Wybierz {{ui:Pobierz PDF}}.
12. Naciśnij {{key:Mod+S}}, aby zapisać model. Przeglądarka pobierze `Untitled.detailcraft.json`.

Przed zapisem zmień nazwę modelu w polu {{ui:Nazwa}} w lewym górnym rogu, aby plik i każdy eksport nosiły tę nazwę.

## Dokąd dalej

- [Przegląd ekranu](topic:workspace)
- [Przygotowanie siatek i poziomów](topic:grids-and-levels)
- [Poruszanie się w widoku 3D](topic:navigate-3d), myszą, gładzikiem lub ekranem dotykowym
- [Jeśli pracujesz w innym programie do detalowania](topic:coming-from), jeśli znasz duży pakiet do detalowania
- [Korzystanie z pomocy](common:help)
