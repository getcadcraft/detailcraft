---
title: Łączenie belek ze słupami za pomocą blach czołowych
summary: Dodaj przykręcane blachy czołowe tam, gdzie belka styka się z pasem lub środnikiem słupa, ustaw blachę, śruby i spoinę, a połączenie skopiuj do każdego podobnego węzła.
keywords: blacha czołowa, blacha czołowa, połączenie sztywne, połączenie śrubowe, węzeł, śruby, spoina, wydłużona blacha czołowa, lico, podobne, kopiowanie połączenia, komponent
from: 21e028b2
---

Połączenie na blachę czołową przyspawuje blachę do końca belki i przykręca ją do pasa lub środnika słupa. DetailCraft ustawia blachę, przycina belkę, wierci pasujące otwory w blasze i w pasie słupa, dodaje śruby i spoinę oraz sprawdza odległości od krawędzi i rozstawy.

:::warning
DetailCraft nie projektuje połączeń. Ustawienia są wartościami wyjściowymi do zmiany przez Ciebie; nic nie sprawdza nośności. Ostrzeżenia dotyczące krawędzi i rozstawów używają minimów z EN 1993-1-8 tabela 3.3, które mogą różnić się od reguł, według których pracujesz.
:::

## Co można połączyć

- Belkę **poziomą** (oba końce na tej samej wysokości), pionową (obrót 0), z profilem dwuteowym.
- Z **pasem** lub **środnikiem** **pionowego** słupa dwuteowego, prostopadle do niego.
- Koniec belki musi leżeć na osi słupa, między dolną a górną krawędzią słupa.

Belki skośne lub pochylone oraz przekroje niedwuteowe są odrzucane z podaniem przyczyny: do nich użyj [łączników blachowych](topic:shear-tabs). Na środniku blacha i pasy belki muszą zmieścić się między pasami słupa; DetailCraft ostrzega, gdy tak nie jest.

:::tip
Przy obrocie 0 pasy słupa są zwrócone wzdłuż kierunku osi numerowanych (x). Belka biegnąca od A do B styka się ze środnikiem i dostaje blachę czołową na środniku.
:::

## Dodawanie blach czołowych do belki

1. Wybierz {{ui:Zaznacz}} ({{key:V}}) i kliknij belkę.
2. Wybierz {{ui:Blachy czołowe}} w grupie {{ui:Połącz}} albo {{ui:Dodaj blachy czołowe}} w panelu {{ui:Właściwości}}.
3. Każdy wolny koniec belki, który prostopadle styka się z pasem lub środnikiem słupa, dostaje blachę. Pasek stanu mówi: „Dodano 2 blachy czołowe. Zaznacz jedną, aby zmienić jej blachę, śruby i spoinę; Podobne kopiuje ją do podobnych węzłów.”
4. Pierwsza nowa blacha czołowa jest zaznaczona, a jej ustawienia są w panelu {{ui:Właściwości}}.

Jeśli nic się nie dzieje, przeczytaj pasek stanu:

- „Ta belka nie kończy się na osi słupa. Blachy czołowe umieszcza się tam, gdzie koniec belki styka się z pionowym słupem.”
- „Ta belka styka się ze słupem pod kątem lub jest pochylona: blachy czołowe są przeznaczone dla prostopadłych, poziomych węzłów. Użyj Łączników blachowych.”
- „Oba końce mają już połączenia.”

## Zmiana blachy, śrub i spoiny

Kliknij blachę czołową (lub jedną z jej śrub), aby zaznaczyć połączenie. W sekcji {{ui:Blacha, śruby i spoina (mm)}}:

| Ustawienie | Domyślnie | Co robi |
|---|---|---|
| Grubość blachy | 20 | Grubość blachy; także o ile belka jest cofnięta za pas |
| Szerokość blachy | 180 | W poprzek węzła |
| Wysunięcie ponad belkę | 0 | Ponad górnym pasem; powyżej 0 powstaje wydłużona blacha czołowa |
| Wysunięcie pod belkę | 0 | Pod dolnym pasem |
| Średnica śruby | 20 | Nominalny rozmiar śruby |
| Średnica otworu | 22 | Twój luz w otworze w blasze i w pasie słupa |
| Gatunek śruby | A325 | Tekst; drukowany w zestawieniu materiałów |
| Rzędy śrub | 4 | Rzędy po dwie śruby, wyśrodkowane na wysokości blachy |
| Skok rzędów | 75 | Odstęp pionowy między rzędami |
| Rozstaw | 100 | Odstęp poziomy między dwiema śrubami w rzędzie |
| Naddatek długości śruby | 30 | Dodawany do ściskanego pakietu na nakrętkę, podkładkę i gwint; zobacz niżej |
| Wymiar spoiny pachwinowej | 8 | Dookoła końca belki |
| Materiał blachy | A36 | Tekst |

Wpisz nową wartość i naciśnij {{key:Enter}} lub {{key:Tab}}. Blacha, otwory, śruby i długość cięcia belki aktualizują się od razu. Każda zmiana to jeden krok cofnięcia.

Pod ustawieniami widzisz, co tworzy połączenie:

- {{ui:Śruby}}: na przykład „8 × 20 × 70 A325 (ściskany pakiet 36,2)”.
- {{ui:Spoina}}: wymiar, miejsce i jej długość.
- {{ui:Blacha}}: jej wymiar i znacznik elementu.

### Jak liczone są wartości

- Belka jest cofnięta o połowę głębokości słupa (na środniku: o połowę grubości środnika) plus grubość blachy, tak aby blacha przylegała do lica.
- Wysokość blachy to wysokość belki plus dwa wysunięcia.
- Długość śruby = ściskany pakiet (grubość blachy + grubość pasa lub środnika słupa) + naddatek, zaokrąglony w górę do najbliższych 5 mm.
- Pokazana długość spoiny to obwód przekroju belki.

### Ostrzeżenia

Połączenie nadal się buduje, ale poniżej niego oraz w karcie {{ui:Problemy}} pojawiają się:

- rzędy śrub lub śruby bliżej krawędzi blachy niż 1,2 × średnica otworu;
- skok rzędów mniejszy niż 2,2 × średnica otworu lub rozstaw mniejszy niż 2,4 × średnica otworu;
- otwory wchodzące w środnik słupa lub jego zaokrąglenie albo wychodzące poza pas słupa;
- blacha szersza niż pas słupa lub (na środniku) szersza niż przestrzeń między pasami; pasy belki, które się między nimi nie mieszczą;
- rząd śrub zbyt blisko pasa belki albo rozstaw zbyt ciasny dla środnika belki i jej spoiny.

## Kopiowanie do każdego podobnego węzła

1. Zaznacz skonfigurowane połączenie.
2. Wybierz {{ui:Zastosuj do podobnych (n)}} w panelu {{ui:Właściwości}} albo {{ui:Podobne}} w menu {{ui:Więcej}} grupy {{ui:Połącz}}. Liczba w nawiasie to liczba węzłów, które go otrzymają.
3. Każdy węzeł z tym samym profilem belki i tym samym profilem słupa, z belką stykającą się z tym samym rodzajem powierzchni, który nie ma jeszcze połączenia, dostaje kopię z tymi samymi ustawieniami. Pasek stanu mówi, ile ich jest.

Kopie są niezależne: późniejsza zmiana jednej nie zmienia pozostałych. Węzły, które mają już połączenie, pozostają bez zmian; najpierw je usuń, jeśli chcesz, aby zostały zastąpione.

## Przesuwanie i usuwanie

Połączenia są odtwarzane z ich ustawień za każdym razem, gdy zmienia się model, więc przesunięcie lub zmiana wymiaru belki czy słupa przenosi ich blachy czołowe razem z nimi. Jeśli zmiana sprawia, że węzeł już nie pasuje, połączenie pozostaje w modelu, a karta {{ui:Problemy}} wyjaśnia dlaczego, na przykład „Koniec belki nie leży już na osi słupa.”

Aby usunąć połączenie, zaznacz je i naciśnij {{key:Delete}}. Usunięcie belki lub słupa usuwa także ich połączenia.

Dalej: [Dodawanie podstaw i kotew](topic:base-plates).
