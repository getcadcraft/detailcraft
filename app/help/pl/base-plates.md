---
title: Dodawanie blach podstaw i prętów kotwiących
summary: Ustaw spawaną blachę podstawy z czterema prętami kotwiącymi pod słupem, ustaw jej wymiary i skopiuj ją na każdy podobny słup.
keywords: blacha podstawy, płyta podstawy, pręty kotwiące, kotwy, śruby fundamentowe, podstawa słupa, śruby kotwiące, podobne
from: 619ebc64
---

Połączenie z blachą podstawy umieszcza blachę pod słupem, skraca słup o grubość blachy, spawa je ze sobą i dodaje cztery pręty kotwiące przechodzące przez otwory w blasze.

:::warning
Wymiary są wartościami startowymi, a nie projektem. DetailCraft nie sprawdza nacisku, wytrzymałości prętów ani głębokości zakotwienia.
:::

## Dodawanie blachy podstawy

1. Wybierz {{ui:Zaznacz}} ({{key:V}}) i kliknij słup. Musi być pionowy.
2. Wybierz {{ui:Blacha podstawy}} w grupie {{ui:Połącz}} lub {{ui:Dodaj blachę podstawy}} w panelu {{ui:Właściwości}}.
3. Pasek stanu pokazuje: "Dodano blachę podstawy z czterema prętami kotwiącymi." Nowe połączenie zostaje zaznaczone.

Słup może mieć jedną blachę podstawy. Jeśli już ją ma, pasek stanu pokazuje: "Ten słup ma już blachę podstawy."

## Zmiana blachy

Zaznacz blachę podstawy (kliknij blachę lub pręt). W sekcji {{ui:Blacha, śruby i spoina (mm)}}:

| Ustawienie | Domyślnie | Co robi |
|---|---|---|
| Grubość blachy | 25 | O tyle skracany jest słup |
| Długość blachy | 450 | Wzdłuż głębokości słupa |
| Szerokość blachy | 400 | W poprzek słupa |
| Średnica pręta | 20 | Rozmiar pręta kotwiącego |
| Średnica otworu | 33 | Otwór w blasze |
| Klasa śruby | F1554 Gr 36 | Klasa pręta, jako tekst |
| Rozstaw prętów (wzdłuż głębokości) | 350 | Między osiami prętów, wzdłuż długości blachy |
| Rozstaw prętów (w poprzek) | 300 | Między osiami prętów, w poprzek |
| Wystawanie pręta ponad blachę | 100 | Od góry blachy do góry pręta |
| Zakotwienie pręta poniżej blachy | 450 | Od spodu blachy w dół, w beton |
| Rozmiar spoiny pachwinowej | 8 | Dookoła podstawy słupa |
| Materiał blachy | A36 | Tekst |
| Szczelina na zaprawę | 0 | Odstęp między górą betonu a spodem blachy |
| Żebra usztywniające | Brak | Wybierz Brak, 2 (w linii środnika) lub 4 (także prostopadle do niego); patrz niżej |
| Grubość, wysokość żebra | 12, 150 | |
| Głębokość zęba ścinającego | 0 | Jak daleko ząb sięga pod blachę; 0 = brak zęba |
| Grubość, szerokość zęba ścinającego | 25, 150 | |
| Podkładki płytowe | Brak | Na każdym pręcie lub brak |
| Rozmiar podkładki, grubość | 0, 0 | 0 = minimum z AISC Design Guide 1 dla pręta |

Długość pręta = zakotwienie + szczelina na zaprawę + grubość blachy + wystawanie. Przy wartościach domyślnych wynosi to 575 mm.

## Szczegóły podstawy: zaprawa, żebra, ząb ścinający, podkładki

Wszystkie cztery są wyłączone w nowej blasze podstawy oraz w blachach z modeli zapisanych przed DetailCraft 0.4.

- **Szczelina na zaprawę.** Blacha leży tyle nad górą betonu, a pręty są o tyle dłuższe. AISC Design Guide 1 (2.10) sugeruje 1 in. na gotowej posadzce i 1½ do 2 in. na ławie lub słupie fundamentowym; więcej przy dużych blachach i blachach z zębem ścinającym.
- **Żebra usztywniające.** Pionowe blachy przyspawane do słupa i blachy, od powierzchni słupa do krawędzi blachy, jako prostokąty (na razie bez fazki ani zwężenia). **2** stoją w linii środnika, poza każdą półką; **4** dodają dwa prostopadłe do środnika, między półkami, do boków blachy. Na słupie rurowym stoją w środku każdej ściany. Każde jest przyspawane do słupa i blachy z obu stron.
- **Ząb ścinający.** Blacha przyspawana dookoła pod blachą podstawy, w linii głębokości słupa, wyśrodkowana. DetailCraft ostrzega, jeśli nie jest głębszy niż szczelina na zaprawę. Nie wycina kieszeni w ławie; dlatego [sprawdzenie kolizji](topic:clash-check) pomija ząb i ławę.
- **Podkładki płytowe.** Kwadratowa podkładka na każdym pręcie, leżąca na blasze podstawy, wymieniona w zespole słupa jako luźna (dostarczana ze słupem, nie spawana: Design Guide 1, 2.6). Przy rozmiarze i grubości 0 DetailCraft bierze minimalną podkładkę z AISC Design Guide 1, wydanie 2, tabela 2.3, dla danego pręta; pręt metryczny otrzymuje następny rozmiar w calach (pręt M20 dostaje wiersz 7/8 in.: 2½ in. × 5/16 in.). Panel właściwości pokazuje użyty rozmiar. Otwór podkładki to średnica pręta + 1/16 in.: to wybór DetailCraft, tabela go nie podaje. DetailCraft ostrzega, gdy pręty mogą nie wystawać na tyle, by zmieścić podkładkę i nakrętkę (wystawanie mniejsze niż grubość podkładki + średnica pręta).

Design Guide 1, tabela 2.3, zaleca też otwór pod pręt w blasze: 1-5/16 in. dla pręta ¾ in., 1-9/16 in. dla ⅞ in., 1-13/16 in. dla 1 in. DetailCraft nie zmienia rozmiaru otworu.

Ostrzeżenia pojawiają się także wtedy, gdy otwory na pręty są bliżej krawędzi blachy niż 1,2 × średnica otworu, gdy pręty leżą w obrysie słupa albo gdy blacha jest mniejsza od słupa.

## Kopiowanie na podobne słupy

1. Zaznacz blachę podstawy.
2. Wybierz {{ui:Zastosuj do podobnych (n)}} albo {{ui:Podobne}} w menu {{ui:Więcej}} grupy {{ui:Połącz}}.
3. Każdy pionowy słup o tym samym przekroju, bez blachy podstawy i niestojący na innym słupie, dostaje kopię.

## Blachy podstaw a ławy

Blacha podstawy nie wymaga ławy, a ława nie wie o blasze nad nią: pręty kotwiące nie są wiązane z prętami zbrojenia ławy. Umieszczaj ławy poleceniem {{ui:Ława}}; zob. [Umieszczanie ław ze zbrojeniem](topic:footings-and-rebar).
