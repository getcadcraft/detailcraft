---
title: Umieszczanie ław z prętami zbrojeniowymi
summary: Umieść prostokątne stopy punktowe z dolną siatką i prętami wypuszczonymi, sprawdź je i pobierz zestawienie gięcia.
keywords: ława, stopa fundamentowa, fundament, zbrojenie, pręty, siatka, pręty wypuszczone, kołki, zestawienie gięcia, lista prętów, beton, haki, otulina
from: 41a048be
---

Ten temat dotyczy prostokątnych stóp punktowych. Belki, słupy, płyty i ściany opisano w [Szczegóły żelbetu](topic:reinforced-concrete). Każda ława ma dolną siatkę w obu kierunkach i, jeśli chcesz, pręty wypuszczone wystające z niej do góry. Pręty mają rozmiary US od #3 do #11.

## Umieszczanie ławy

1. Wybierz {{ui:Rzut}} i wskaż poziom góry ławy.
2. Wybierz {{ui:Ława}} w grupie {{ui:Umieść}} lub naciśnij {{key:F}}.
3. Ustaw ławę w panelu {{ui:Właściwości}} (patrz niżej) albo zostaw wartości domyślne.
4. Wskaż przecięcie siatki. Ława zostanie wyśrodkowana na nim, a jej góra znajdzie się na poziomie. Pasek stanu podaje na przykład „Ława 2000 x 2000 x 600 pod A/1.”

Możesz też użyć formularza {{ui:Dodaj według siatki}} na dole panelu.

Ława jest rysowana przezroczyście, abyś widział jej pręty, które są rysowane jako pełne rury.

## Ustawienia ławy

| Pole | Domyślnie | Uwagi |
|---|---|---|
| Długość L (mm) | 2000 | Wzdłuż x; od 300 do 50000 |
| Szerokość B (mm) | 2000 | Wzdłuż y; od 300 do 50000 |
| Wysokość H (mm) | 600 | Od 150 do 10000 |
| Beton | 4000 psi | Tekst, drukowany w eksporcie IFC |

**Dolna siatka**

| Pole | Domyślnie | Uwagi |
|---|---|---|
| Pręty podłużne | #5 | Pręty biegnące wzdłuż L, warstwa dolna |
| Rozstaw (mm) | 250 | Największy dopuszczalny rozstaw; pręty rozłożone równomiernie w tym rozstawie lub mniejszym |
| Pręty poprzeczne | #5 | Pręty biegnące wzdłuż B, położone na prętach podłużnych |
| Rozstaw (mm) | 250 | Jak wyżej |
| Otulina (mm) | 75 | Czysta otulina na każdej ścianie |
| Haki na końcach | Włączone | Zagina oba końce każdego pręta siatki w standardowy hak 90° (kształt U); wyłączone daje pręty proste (kształt S) |

**Pręty wypuszczone**

| Pole | Domyślnie | Uwagi |
|---|---|---|
| Pręty wypuszczone | Włączone | Wyłącz, aby uzyskać ławę bez prętów wypuszczonych |
| Pręt | #6 | |
| Pręty wzdłuż L / Pręty wzdłuż B | 2 / 2 | Siatka prętów wyśrodkowana na ławie |
| Rozstaw wzdłuż L / Rozstaw wzdłuż B | 250 / 250 | Między osiami prętów |
| Wysunięcie ponad górę | 600 | Jak wysoko pręty wystają ponad górę ławy |
| Hak na dole | Włączone | Hak 90° skierowany na zewnątrz, opierający się na siatce (kształt L) |

Pod polami DetailCraft pokazuje ramię haka dla prętów podłużnych, na przykład „Ramię haka dla #5: 254 mm, wymiar zewnętrzny do zewnętrznego.”

## Zmiana umieszczonej ławy

Zaznacz ławę (wskaż jej beton z dala od słupa albo jeden z jej prętów). Dostaniesz te same pola oraz {{ui:Środek x}}, {{ui:Środek y}}, {{ui:Góra z}} i {{ui:Obrót (°)}}. Poniżej tabela wymienia pręty tej ławy z ich oznaczeniami, liczbami i długościami oraz objętość betonu w metrach sześciennych.

Każda zmiana jest sprawdzana przed zapisaniem. Zmiana, której nie da się zbudować, jest odrzucana, a pasek stanu podaje powód, na przykład „Otulina nie zostawia miejsca na pręty w tej ławie.”, „Ława jest za płytka na dwie warstwy prętów wewnątrz otuliny.” albo „Pręty wypuszczone nie mieszczą się w ławie przy otulinie 75 mm.”

Zmiany, które można zbudować, ale wymagają sprawdzenia, są wypisane pod ławą i w karcie {{ui:Problemy}}:

- „#11 pręty co 59.6 mm zostawiają mniej niż 35.8 mm w świetle (ACI 318-19 25.2.1).” Wolny odstęp między prętami musi wynosić co najmniej średnicę pręta i co najmniej 25,4 mm.
- „Haki #5 wymagają 254 mm głębokości; w otulinie mieści się tylko 150 mm.” Ramiona haków są wtedy przycinane, aby się zmieściły, więc nie są już standardowymi hakami.
- „Haki prętów wypuszczonych wchodzą w otulinę.”
- „Pręty wypuszczone są bliżej niż minimalny wolny rozstaw.”

## Oznaczenia prętów i zestawienie gięcia

Identyczne pręty (ten sam rozmiar, kształt i wymiary co do milimetra) mają wspólne oznaczenie we wszystkich ławach. Oznaczenia zapisuje się jako `<bar number>F<n>`: 5F1, 5F2 dla prętów #5, 6F1 dla pierwszego pręta #6 i tak dalej. Ławy o tym samym rozmiarze, betonie, siatce i prętach wypuszczonych mają wspólne oznaczenie ławy: F1, F2 …

1. Otwórz kartę {{ui:Zestawienie gięcia}} na dole. Każdy wiersz to jedno oznaczenie pręta: rozmiar, kształt, wymiary A, B i C, liczba, długość cięcia, długość całkowita, masa na metr, masa każdego pręta, masa łączna oraz do czego pręt służy.
2. Wybierz {{ui:Pobierz CSV}} w karcie lub {{ui:Gięcie}} w menu {{ui:Więcej}} grupy {{ui:Wyjście}}, aby pobrać plik `<name> bending schedule.csv`.

Kształty to własne kody DetailCraft, a nie kody z normy: S prosty, L jedno zgięcie, U dwa zgięcia. Wymiary są zewnętrzne; długość cięcia to dokładna długość osi przez zgięcia. Zobacz [Opis zbrojenia](topic:rebar-reference).

## Czego DetailCraft nie sprawdza

- Długości zakotwienia i zakładu oraz to, czy pręty wypuszczone są dostatecznie długie dla słupa powyżej.
- Część reguły wolnego rozstawu dotyczącą wielkości kruszywa (program nie zna mieszanki).
- Wszystko, co dotyczy słupa lub płyty podstawy powyżej: ławy i stal są oddzielnymi elementami.

Zobacz także [Jeszcze nie zbudowano](topic:not-built-yet).
