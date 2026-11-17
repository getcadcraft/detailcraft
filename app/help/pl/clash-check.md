---
title: Sprawdzanie kolizji
summary: Znajdź elementy, blachy i ławy, które wchodzą w siebie, pomijając części, które połączenie ma spotykać, i przejdź do każdej kolizji.
keywords: kolizja, sprawdzanie kolizji, zderzenie, interferencja, nakładanie, przecinanie, twarda kolizja, koordynacja, sprawdzanie modelu
from: 04d72d3b
---

Otwórz kartę {{ui:Kolizje}} pod widokiem i wybierz {{ui:Sprawdź teraz}}. DetailCraft sprawdza każdą parę części w pokazanych fazach: stal z stalą oraz stal z ławą. Karta wypisuje każdą kolizję, od najgłębszej, z:

- dwiema częściami, po znaczniku części (lub znaczniku ławy) i profilu;
- **Nakładanie (mm)**: jak głęboko punkt jednej części jest w drugiej, do najbliższej powierzchni;
- **Blisko**: przecięcie siatki i poziom, na którym jest, albo jego współrzędne;
- {{ui:Pokaż}}: zaznacza obie części i przesuwa miejsce na środek widoku.

Tytuł karty pokazuje, ile kolizji znalazło ostatnie sprawdzenie. Sprawdzenie nie działa samo: po zmianie modelu lista to mówi, a {{ui:Sprawdź teraz}} uruchamia je ponownie.

## Czego nie traktuje się jako kolizji

- Części, które się tylko stykają: blacha przy półce, blacha podstawy na ławie, dwa elementy koniec w koniec. **Tolerancja (mm)** określa, o ile dwie części mogą wejść w siebie, zanim to się policzy (na początek 1 mm; do 50).
- Części łączone przez połączenie: blacha czołowa z belką i z półką słupa, do której jest przykręcona, belka i słup tego węzła, blachy złącza z obiema częściami, stężenie z blachą węzłową (wycięcie w rurze nie jest wycinane w modelu). Połączenie zakłada, że mają się spotkać.
- Ząb ścinający blachy podstawy w ławie pod nią (leży w kieszeni z zaprawą).
- Śruby i pręty kotwiące (przechodzą przez otwory) oraz zbrojenie.
- Części w ukrytych fazach. Zob. [Fazy](topic:phases).

Stężenie lub belka, która wchodzi w słup bez połączenia między nimi, **jest** kolizją: ten węzeł nadal wymaga połączenia. Stężenie w przykładowej ramie to pokazuje, bo nie ma blachy węzłowej. Zaznacz je i wybierz {{ui:Blacha węzłowa}} ([Blachy węzłowe stężeń](topic:brace-gussets)), a jego kolizje znikną.

## Warto wiedzieć

- Nakładanie mierzy głębokość wejścia w materiał, więc element wchodzący w cienki środnik lub półkę słupa pokazuje tylko kilka milimetrów, nawet gdy wchodzi daleko.
- Części są sprawdzane tak, jak są przycięte: uwzględniane są wycięcia (copes) i przycięcie belki przy blachach czołowych. Otworów się nie uwzględnia.
