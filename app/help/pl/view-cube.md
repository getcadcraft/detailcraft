---
title: Kostka widoku
summary: Kliknij ścianę, krawędź lub narożnik kostki w rogu widoku, aby patrzeć stamtąd; przeciągnij ją, aby obracać, obróć pierścień kompasu, przesuwaj się wokół widoku czołowego i wróć do widoku domowego.
keywords: kostka widoku, viewcube, kostka, kompas, północ, widok domowy, widoki standardowe, góra, przód, prawo, iso, narożnik, krawędź, orbita, obracanie widoku, ikona osi, wskaźnik narożnika, nawigacja
from: 3666ea8a
---

Kostka widoku znajduje się w prawym górnym rogu widoku 3D, pod paskiem widoku (tylko w {{ui:3D}}: {{ui:Rzut}} i {{ui:Elewacja}} już patrzą prosto na model). Obraca się razem z widokiem, więc zawsze pokazuje, w którą stronę patrzysz: {{ui:Góra}} jest u góry, {{ui:Przód}} jest zwrócony na południe (stronę, z której widać siatki literowe w {{ui:Elewacja}}), {{ui:Prawo}} jest zwrócone na wschód, wzdłuż siatek numerowanych. Dopóki na nią nie wskażesz, jest półprzezroczysta.

## Patrzenie z boku, krawędzi lub narożnika

1. Wskaż kostkę. Część pod wskaźnikiem się podświetla: środek ściany, krawędź (podświetla się na obu ścianach, które ją tworzą) albo narożnik (na wszystkich trzech ścianach).
2. Kliknij ją. Widok obraca się, patrząc stamtąd, zachowując ten sam środek i powiększenie.

Jest 26 miejsc do kliknięcia: 6 ścian ({{ui:Góra}}, {{ui:Dół}}, {{ui:Przód}}, {{ui:Tył}}, {{ui:Lewo}}, {{ui:Prawo}}), 12 krawędzi i 8 narożników. Narożnik daje klasyczny widok trzyczwartkowy; krawędź wygląda jak połowa drogi między dwiema ścianami.

Widok ściany kostki jest widokiem 3D, a nie {{ui:Rzut}} ani {{ui:Elewacja}}: nic nie jest odcinane i model nadal można obracać.

## Orbitowanie przez przeciąganie kostki

Przeciągnij kostkę, aby obrócić widok, tak samo jak orbitowanie w samym widoku. Przeciągnięcie nigdy nie jest traktowane jako kliknięcie, więc kostkę możesz chwycić w dowolnym miejscu.

## Pierścień kompasu

Pod kostką jest pierścień z oznaczeniami N, E, S i W.

- **Przeciągnij pierścień**, aby obrócić model wokół osi pionowej, jak na obrotnicy. Pierścień podąża za wskaźnikiem.
- **Kliknij literę**, aby patrzeć z tej strony, zachowując kąt patrzenia w dół. W widoku z góry wybrana litera trafia na dół ekranu.

## Widoki czołowe: strzałki

Gdy patrzysz prosto na ścianę, wokół kostki pojawiają się małe strzałki:

- Cztery **trójkąty** przenoszą ścianę z tej strony na przód: trójkąt nad kostką pokazuje ścianę, która była na górze, i tak dalej.
- Dwie **zakrzywione strzałki** w prawym górnym rogu obracają obraz o ćwierć obrotu zgodnie lub przeciwnie do ruchu wskazówek zegara, bez zmiany ściany, na którą patrzysz. Użyj ich, aby obrócić rzut tak, by długa ściana biegła w poprzek ekranu.

## Widok domowy

Przycisk domu w lewym górnym rogu kostki wraca do początkowego widoku trzyczwartkowego i dopasowuje cały model, tak samo jak przycisk dopasowania. {{key:Home}} robi to samo, gdy kostka ma fokus klawiatury.

## Klawiatura

Przejdź na kostkę klawiszem {{key:Tab}}, a następnie:

| Klawisz | Działanie |
|---|---|
| {{key:left}} / {{key:right}} | wybiera ścianę, krawędź lub narożnik wokół kostki, co ósmą część obrotu (czytniki ekranu podają, który) |
| {{key:up}} / {{key:down}} | wybiera wyższy lub niższy, aż do {{ui:Góra}} lub w dół do {{ui:Dół}} |
| {{key:Enter}} lub {{key:Space}} | patrzy z wybranego miejsca |
| {{key:Shift+left}} / {{key:Shift+right}} | obraca widok o ćwierć obrotu wokół osi pionowej |
| {{key:Home}} | widok domowy |
| {{key:Esc}} | opuszcza kostkę |

Klawisze naciśnięte na kostce pozostają przy kostce: nie uruchamiają narzędzi DetailCraft.

## Ikona osi lub brak

Otwórz {{ui:Ustawienia}} ({{key:Mod+,}}), kartę {{ui:DetailCraft}} i ustaw **Wskaźnik narożnika** na {{ui:Kostka widoku}} (domyślnie), {{ui:Ikona osi}} (mały znacznik X, Y, Z w lewym dolnym rogu: X czerwony, Y zielony, Z niebieski) lub {{ui:Brak}}. Ta przeglądarka zapamiętuje wybór. Zobacz [Ustawienia DetailCraft](topic:settings#corner-indicator).
