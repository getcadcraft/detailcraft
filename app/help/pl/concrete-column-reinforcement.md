---
title: Zbrojenie prostokątnego słupa żelbetowego
summary: Przykład krok po kroku szczegółowania prostokątnego słupa żelbetowego w DetailCraft: umieszczenie, pręty podłużne i strzemiona, odczyt sprawdzeń, zakład nad nim i znaczniki prętów oraz rysunek warsztatowy.
keywords: słup żelbetowy, słup prostokątny, zbrojenie słupa, pręty podłużne, pręty pionowe, strzemiona, strzemiona krzyżowe, zakład, zakład na połączenie, pręty startowe, stopień zbrojenia słupa, 1 procent, 8 procent, rozstaw strzemion, ACI 318-19 25.7.2, EN 1992-1-1 9.5, rysunek warsztatowy, znaczniki prętów, 8C1, 3C2
from: aee2a3ca
---

Ten temat prowadzi jeden kwadratowy słup od zera do sprawdzonego, narysowanego i zestawionego szczegółu. Ogólne zasady dla belek, płyt i ścian są w [Szczegółowanie zbrojenia żelbetowego](topic:reinforced-concrete); to strona słupa, z liczbami, które można odtworzyć.

:::warning
DetailCraft szczegółuje pręty, które mu podasz. Nie projektuje ich. Poniższe pręty to wartości startowe przykładu, a nie zalecenie: inżynier odpowiedzialny za projekt wybiera średnicę, liczbę i rozstaw.
:::

## Czym jest słup tutaj

Prostokątny słup ma szerokość (wzdłuż lokalnego x) i głębokość w poprzek (wzdłuż lokalnego y), otulinę netto do strzemion, pręty podłużne na każdej ścianie i zamknięte strzemiona. Obrót obraca całość; ściany pozostają „ścianą szerokości” i „ścianą głębokości”.

- Pręty podłużne podaje się jako liczbę na ścianie szerokości i liczbę na ścianie głębokości. Pręty narożne liczą się w obu, więc 3 i 3 dają 8 prętów; 4 i 4 dają 12.
- Strzemiona to zamknięte prostokąty z dwoma hakami w jednym narożu, 135° lub 90°. Pierwsze strzemię jest w ustalonej odległości nad posadzką (i pod następnym), strefy przy podporach mają gęstszy rozstaw, a środek szerszy.
- Co robią pręty na górze: przechodzą dalej z zakładem z prętami powyżej, zaginają się hakami 90° w posadzkę albo kończą się pod górą.

## Przykładowy słup

Słup 400 × 400 mm, 3600 mm między stropem powyżej i poniżej, pręty podłużne #8, strzemiona #3, otulina netto 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, słup wewnętrzny.

1. Otwórz kartę {{ui:Beton}} i ustaw linie siatki oraz poziomy, na których stoi słup (lewy panel).
2. W {{ui:Dodaj według siatki}} wybierz {{ui:Słup betonowy}}, wskaż przecięcie siatki i dwa poziomy, ustaw {{ui:Szerokość (mm)}} i {{ui:Głębokość w poprzek (mm)}} na 400 i wybierz {{ui:Dodaj}}.
3. W panelu {{ui:Właściwości}} ustaw:
   - {{ui:Otulina netto (mm)}} 40;
   - {{ui:Pręty podłużne}} #8, {{ui:Pręty na ścianie szerokości}} 3, {{ui:Pręty na ścianie głębokości}} 3;
   - {{ui:Wiązania}} #3, {{ui:Haki}} 135°, {{ui:Rozstaw między (mm)}} 300, {{ui:Długość strefy przy podporze (mm)}} 600, {{ui:Rozstaw w strefach przy podporach (mm)}} 150, {{ui:Pierwsze od lica (mm)}} 50;
   - {{ui:Pręty na górze}} {{ui:Przejście i zakład z prętami powyżej}}.

Każda zmiana to jeden krok cofnięcia.

### Co otrzymujesz

| Część | Wynik |
|---|---|
| Pręty podłużne | 8 prętów #8 (pierścień 3 × 3), każdy 4375 mm długości: słup 3600 mm plus zakład 775 mm nad nim |
| Zakład | 757 mm potrzebne na zakład na ściskanie (ACI 318-19 25.5.5.1, fy 420), 775 mm zapewnione: potrzeba zaokrąglona w górę do następnych 25 mm |
| Strzemiona | 17 strzemion #3, każde o długości przecięcia około 1359 mm, rozstawionych co 150 mm w dwóch strefach przy podporach po 600 mm i co 300 mm między nimi |
| Stopień zbrojenia | 2,5% przekroju brutto (granice 1% do 8%, ACI 318-19 10.6.1.1) |
| Wolny odstęp prętów | 112 mm (wymagane co najmniej 40 mm, ACI 318-19 25.2.3) |
| Rozstaw strzemion | 300 mm (dozwolone 400 mm: najmniejsze z 16 średnic prętów, 48 średnic strzemion i mniejszego wymiaru przekroju, ACI 318-19 25.7.2.1) |
| Rozmiar strzemion | #3 (dozwolone aż do 9,5 mm, ACI 318-19 25.7.2.2) |

Wszystkie te wartości są na liście {{ui:Sprawdzenia}} elementu; zakład jest też w {{ui:Zakłady i kotwienie}}.

## Strzemiona krzyżowe

Przy jednym obwodowym strzemieniu utrzymane są tylko pręty narożne. ACI 318-19 25.7.2.3 pozwala, by pręt środkowy na ścianie był bez podparcia, jeśli leży w odległości do 150 mm w świetle od pręta narożnego. Przy 3 prętach na ścianie, jak wyżej, to jest spełnione. Przy 4 lub więcej prętach na ścianie nie jest, a DetailCraft mówi o tym ostrzeżeniem ({{ui:Sprawdzenia}} i Problemy): „strzemiona krzyżowe” są potrzebne. **Strzemion krzyżowych jeszcze nie rysuje się**: dodaj je ręcznie w rysunku albo wybierz mniej prętów na ścianie.

W przypadku EN 1992-1-1 DetailCraft sprawdza średnicę pręta (co najmniej 8 mm), liczbę prętów (co najmniej 4), pole stali (0,2% do 4% przekroju), wolny odstęp i rozstaw strzemion (9.5.2 i 9.5.3).

## Zakład, ława i słup poniżej

- Gdy **ława modelu stoi pod słupem**, słup łączy się z prętami startowymi ławy i ich zakład też jest sprawdzany.
- Gdy **inny słup modelu stoi pod nim**, łączy się z prętami tamtego słupa.
- Podaj własną {{ui:Długość zakładu (mm, 0 = wg potrzeb)}}, by ją nadpisać; krótsza niż potrzebna to problem i jest oznaczona * w tabeli.
- Domyślnie używane są zakłady na ściskanie ({{ui:Zakład na ściskanie}} w ustawieniach); wybierz {{ui:Zakład na rozciąganie}}, gdy słup może być rozciągany.

## Znaczniki, zestawienie i rysunek warsztatowy

Identyczne pręty mają wspólny znacznik: pręty podłużne słupa powyżej to 8C1, jego strzemiona 17C2 (najpierw liczba, potem litera rodzaju C dla słupa i numer kolejny). Pojawiają się w karcie {{ui:Zestawienie gięcia}} z długością przecięcia i masą oraz w CSV z {{ui:Wyjście}} › {{ui:Więcej}} › {{ui:Gięcie}}.

Wybierz {{ui:Rysunek warsztatowy}} obok słupa, aby dostać arkusz ze słupem w elewacji (każdy pręt, jego znacznik, strefy strzemion i zakład wymiarowane) oraz przekrój w środku, a za nimi arkusz gięcia prętów. Zapisz {{ui:Ten arkusz jako PDF}}.

## Czego to nie robi

- Słupy okrągłe i spiralne oraz słupy nieprostokątne: nie są jeszcze zbudowane.
- Strzemiona narożne i krzyżowe wewnątrz przekroju oraz szczegółowanie sejsmiczne (ACI 318-19 rozdział 18): nie są jeszcze zbudowane.
- Zakłady w wybranych przez ciebie miejscach lub przesunięte: wszystkie pręty łączą się w jednym przekroju.
- Czy pręty wystarczają na obciążenie: to projekt inżyniera.
