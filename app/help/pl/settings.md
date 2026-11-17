---
title: Ustawienia DetailCraft
summary: Ustaw, czy nowe elementy startują jako profile amerykańskie czy europejskie, jak daleko Duplikuj przesuwa kopię, czy kopie zabierają swoje połączenia oraz czy pokazywać śruby w widoku 3D.
keywords: ustawienia, preferencje, format arkusza, rozmiar papieru, rysunki, opcje, stal, aisc, en, profile europejskie, profile amerykańskie, profile metryczne, domyślny profil, gatunek, s355, a992, przesunięcie duplikowania, przesunięcie wklejania, kopiuj połączenia, śruby, pręty kotwiące, ukryj śruby, resetuj
from: e46cea57
---

Otwórz {{ui:Ustawienia}} przez koło zębate na pasku aplikacji albo {{key:Mod+,}}. Pierwsza karta, {{ui:DetailCraft}}, zawiera ustawienia należące do tej aplikacji; {{ui:Ogólne}} zawiera te, które wspólnie mają wszystkie aplikacje CadCraft (motyw, pasek narzędzi, panele). Ustawienia DetailCraft istnieją tylko w aplikacji: zmieniasz je tutaj, działają od razu, a ta przeglądarka je zapamiętuje. Nie są zapisywane w pliku modelu.

## Nowe elementy

Od jakich profili i gatunków zaczynają narzędzia umieszczania:

| Narzędzie | Profile US (AISC), A992 | Profile europejskie (EN), S355 |
|---|---|---|
| {{ui:Belka}} | W16x26, A992 | IPE300, S355 |
| {{ui:Słup}} | W12x50, A992 | HEB200, S355 |
| {{ui:Stężenie}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Blacha}} | A36 | S355 |

Startowo są to profile US. Wybór europejski używa HEA160 dla stężeń, ponieważ katalog EN w DetailCraft nie ma jeszcze przekrojów zamkniętych ([Katalog profili](topic:profile-catalog)). Nadal możesz wybrać dowolny profil i gatunek dla następnej części w panelu {{ui:Właściwości}}, gdy narzędzie umieszczania jest włączone. Elementy już obecne w modelu zachowują swój profil i gatunek.

## Duplikowanie i wklejanie

- **Przesunięcie (mm)**: x, y i z. {{ui:Duplikuj}} ({{key:Mod+D}}) umieszcza kopię tak daleko od oryginału, a formularz {{ui:Wklej z przesunięciem (mm, od oryginału)}} zaczyna się od niego. Startuje od 6000, 0, 0: jedno przęsło 6 m wzdłuż ponumerowanych siatek. Ustaw je na rozstaw przęseł albo na wysokość kondygnacji w z, aby skopiować piętro wyżej.
- **Kopiuj blachy czołowe i podstaw razem z ich elementami** (włączone na starcie): połączenie idzie z kopią tylko wtedy, gdy skopiowane są wszystkie elementy, które łączy. Wyłącz, aby kopiować elementy i ławy bez ich połączeń, na przykład by wypróbować inne połączenie na kopii.

Zobacz [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

## Widok 3D

**Pokazuj śruby i pręty kotwiące** (włączone na starcie). Odznacz, aby je ukryć w widoku i zobaczyć otwory oraz blachy zatłoczonego węzła. Ukryte śruby nie da się kliknąć; kliknij blachę, aby zaznaczyć połączenie. Zestawienie materiałów, rysunki i każdy eksport nadal zawierają wszystkie śruby i pręty.

## Wskaźnik narożny

Co pokazuje się w rogu widoku 3D: **Kostka widoku** (startowo; prawy górny róg — kliknij ścianę, krawędź lub narożnik, aby spojrzeć stamtąd, przeciągnij, aby obracać wokół, przeciągnij pierścień kompasu, aby obrócić model), **Ikona osi** (mały znacznik X, Y, Z w lewym dolnym rogu, który obraca się z widokiem: X czerwony, Y zielony, Z niebieski) albo **Brak**. Tylko w {{ui:3D}}; {{ui:Rzut}} i {{ui:Elewacja}} nie pokazują żadnego z nich. Zobacz [Kostka widoku](topic:view-cube).

## Resetowanie

{{ui:Resetuj ustawienia DetailCraft}} na dole okna przywraca je do wartości początkowych (profile US, przesunięcie 6000, 0, 0, połączenia kopiowane, śruby pokazywane), a także te z {{ui:Ogólne}}.

## Rysunki

**Format arkusza**: arkusze rysunków i rysunki warsztatowe są tworzone w orientacji poziomej: A4, A3 (startowo), A2, A1, ANSI B, ANSI C lub ANSI D. Okna {{ui:Rysunki}} i rysunków warsztatowych mają tę samą listę. Zobacz [Rysunki ogólne i złożeniowe](topic:drawings).

## Zbrojenie

- **Nazwy prętów ASTM**: #3 do #11 albo miękkie metrycznie #10 do #36 dla tych samych prętów.
- **Kody kształtów zestawienia gięcia**: S, L, U DetailCraft; typy ACI 315; albo kody kształtów BS 8666. Zobacz [Dane referencyjne zbrojenia](topic:rebar-reference).

## Przeciąganie do zaznaczania

**Prostokąt** (jak dotąd) albo **Lasso**: linia odręczna, a {{key:Space}} przełącza między wnętrzem, dotykaniem i płotem w trakcie przeciągania. Zobacz [Zaznaczanie oknem](topic:select-and-change#select-with-a-window).
