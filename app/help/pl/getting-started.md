---
title: Pierwsze kroki z DetailCraft
summary: Co DetailCraft robi dziś, jak go otworzyć oraz pierwszy model, od siatek do rysunku warsztatowego, w dziesięć minut.
keywords: start, pierwszy model, wprowadzenie, detailing stali, zbrojenie, szybki start, samouczek, przegląd
from: e4f16bbe
---

DetailCraft to aplikacja do detailingu stali i zbrojenia z rodziny CadCraft. Budujesz model 3D stalowej ramy na siatkach i poziomach, łączysz ją i otrzymujesz to, czego potrzebuje warsztat: znaczniki części i zespołów, zestawienie materiałów, rysunki warsztatowe pojedynczych części, pliki NC DSTV, model IFC oraz zestawienie gięcia dla ław.

To wczesna wersja. Robi krótką listę rzeczy starannie, zamiast wszystkiego naraz. Przeczytaj [Czego jeszcze nie zbudowano](topic:not-built-yet), zanim zaplanujesz prawdziwą pracę z jej udziałem.

## Co robi dziś

- Siatki i poziomy, które wpisujesz w milimetrach.
- Słupy, belki, stężenia i blachy z opublikowanych katalogów profili (AISC W, S, C, L, HSS i Pipe; europejskie IPE, HEA, HEB i UPN; brytyjskie UB, UC, PFC, EA, UEA, SHS, RHS i CHS), a także własne profile parametryczne.
- Dwa połączenia: przykręcana blacha czołowa od belki do pasa słupa oraz blacha podstawy słupa z czterema prętami kotwiącymi. Każde można skopiować do każdego podobnego węzła.
- Otwory i wycięcia wpisywane według położenia.
- Prostokątne stopy fundamentowe z dolną matą i prętami wstępnymi.
- Znaczniki części i zespołów, które aktualizują się same po każdej zmianie.
- Eksporty: IFC4, pliki NC DSTV (dla dwuteowników i blach), zestawienie materiałów jako CSV, zestawienie gięcia jako CSV oraz PDF rysunku warsztatowego jednej części.

## Otwórz DetailCraft

1. Otwórz DetailCraft w przeglądarce na komputerze: Chrome, Edge, Firefox lub Safari. Zobacz [Przeglądarki i komputery](common:browsers).
2. Poczekaj, aż ekran się wypełni. Pasek stanu na dole mówi: „Gotowe. Otwórz Przykład albo ustaw siatki i poziomy i zacznij umieszczać elementy.”

Widok modelu wymaga grafiki 3D (WebGL). Jeśli w środku ekranu pojawi się komunikat „Ta przeglądarka nie mogła uruchomić grafiki 3D (WebGL)”, zobacz [Rozwiązywanie problemów](topic:troubleshooting#the-3d-view-is-missing).

:::note
Twoje modele zostają na twoim komputerze. Otwarcie modelu odczytuje go w przeglądarce, a zapis pobiera plik. Nic nie jest wysyłane. Zapis w chmurze nie jest jeszcze dostępny. Zobacz [Gdzie trafiają twoje pliki](common:your-files). Aby później korzystać z DetailCraft bez połączenia, wybierz raz, będąc online, {{ui:Save for offline}} w pasku aplikacji; zobacz [Praca offline](common:offline).
:::

:::offline
Jesteś offline. DetailCraft działa bez połączenia tylko wtedy, gdy wcześniej zapisano go do pracy offline: przycisk {{ui:Save for offline}} w pasku aplikacji pokazuje wtedy {{ui:Offline ready}}. Zobacz [Praca offline](common:offline).
:::

## Najpierw zobacz przykład

Najszybszy sposób, by zobaczyć, co tworzy DetailCraft, to przykładowa rama.

1. Wybierz {{ui:Sample}} w grupie {{ui:File}} na pasku narzędzi.
2. Widok pokazuje dwuprzęsłową ramę: sześć słupów z blachami podstawy, cztery belki z blachami czołowymi, jedno stężenie i siedem ław ze zbrojeniem.
3. Kliknij belkę. Panel {{ui:Properties}} po prawej pokazuje jej znacznik części, długość cięcia, masę oraz otwory wykonane przez blachy czołowe.
4. Otwórz kartę {{ui:Bill of materials}} na dole, by zobaczyć każdy znacznik części z liczbą i masą.

Przewodnik [Przeglądaj przykładową ramę](topic:sample-model) omawia ją element po elemencie.

## Twój pierwszy model

Nowy model ma już siatki 1–3 i A–B co 6000 mm oraz dwa poziomy: Level 1 na 0 i Level 2 na 4000.

1. Wybierz {{ui:New}}. Jeśli bieżący model ma zmiany, DetailCraft najpierw zapyta, czy je zapisać.
2. Wybierz {{ui:Plan}} nad widokiem. Lista poziomów obok wybiera Level 1.
3. Wybierz {{ui:Column}} na pasku narzędzi albo naciśnij {{key:C}}.
4. Kliknij przecięcie siatki A/1. Pojawi się słup W12x50 od Level 1 do Level 2. Pasek stanu pokazuje, gdzie został umieszczony.
5. Kliknij B/1, A/2 i B/2, aby postawić kolejne trzy.
6. Wybierz Level 2 na liście poziomów, a następnie {{ui:Beam}} albo naciśnij {{key:B}}.
7. Kliknij A/1, a potem A/2. Belka W16x26 łączy wierzchołki obu słupów, a jej górna powierzchnia stali leży na poziomie.
8. Naciśnij {{key:Esc}}, aby wrócić do {{ui:Select}}, a potem kliknij belkę.
9. Wybierz {{ui:End plates}} w grupie {{ui:Connect}}. Oba końce dostają przykręcaną blachę czołową, belka zostaje przycięta, by pasowała, a pierwsza blacha czołowa jest teraz zaznaczona.
10. Kliknij belkę ponownie.
11. Wybierz {{ui:Shop drawing}} w grupie {{ui:Output}}. Otworzy się podgląd rysunku warsztatowego belki. Wybierz {{ui:Download PDF}}.
12. Naciśnij {{key:Mod+S}}, aby zapisać model. Przeglądarka pobierze `Untitled.detailcraft.json`.

Zmień nazwę modelu w polu {{ui:Name}} w lewym górnym rogu przed zapisem, aby plik i każdy eksport nosiły jego nazwę.

## Dokąd dalej

- [Przegląd ekranu](topic:workspace)
- [Ustawianie siatek i poziomów](topic:grids-and-levels)
- [Poruszanie się po widoku 3D](topic:navigate-3d), za pomocą myszy, gładzika lub ekranu dotykowego
- [Przejście z innego oprogramowania do detailingu](topic:coming-from), jeśli znasz duży pakiet do detailingu
- [Korzystanie z tej pomocy](common:help)
