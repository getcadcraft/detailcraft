---
title: Dane referencyjne zbrojenia
summary: Średnice prętów, wymiary haków, kody kształtów, długości cięcia i kolumny zestawienia gięcia używane przez DetailCraft.
keywords: zbrojenie, średnice prętów, haki, średnica gięcia, kody kształtów, długość cięcia, zestawienie gięcia, lista prętów, astm a615, aci 318
from: 1583535e
---

## Średnice prętów

Z ASTM A615/A615M, tabela 1 (oznaczenia w systemie calowym). Milimetry i kg/m są dokładnymi przeliczeniami opublikowanych wartości w calach i lb/ft. Listy pokazują każdą średnicę w postaci, na przykład, „#5 (15.9 mm)”.

| Pręt | Średnica (mm) | Masa (kg/m) | Pole (mm²) | Wewnętrzna średnica gięcia | Ramię haka 90°, zewnątrz do zewnątrz (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

W [ustawieniach DetailCraft](topic:settings) ({{ui:Zbrojenie}}) **nazwy prętów ASTM** mogą zamiast tego pokazywać te pręty pod ich nazwami miękkiej metryki A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (te same pręty; ACI 315-99, tabela 1, podaje oba oznaczenia).

### Pręty metryczne (BS 4449)

| Pręt | Średnica (mm) | kg/m | Min. promień gięcia r (mm) | Ramię haka = wysięg końcowy P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Masa to nominalny przekrój razy 7850 kg/m³. Promień i wysięg końcowy to wartości minimalne z BS 8666:2020 (jej tabela minimalnych wymiarów; dawna średnica to 2r). Ławy na prętach BS dostają ramiona haków równe P oraz długości cięcia według poniższych wzorów BS 8666. Wybór stali europejskiej w ustawieniach rozpoczyna nowe ławy od siatek H16 i prętów startowych H20 w betonie C30/37.

## Haki

Pręty ASTM: standardowe haki 90° wg ACI 318-19, tabela 25.3.1: wewnętrzna średnica gięcia 6 db dla #3 do #8 i 8 db dla #9 do #11, z prostym odcinkiem 12 db za gięciem. Ramię haka, mierzone od zewnątrz do zewnątrz, to połowa średnicy gięcia + db + 12 db.

Jeśli hak pręta siatki nie mieści się w wysokości ławy w obrębie otuliny, DetailCraft skraca ramię, aby się zmieściło, i podaje ostrzeżenie.

## Kształty

DetailCraft przechowuje trzy kształty. Zestawienie gięcia drukuje je jako kody DetailCraft, jako typy ACI 315 albo jako kody kształtów BS 8666: wybierz **Kody kształtów zestawienia gięcia** w [ustawieniach DetailCraft](topic:settings) ({{ui:Zbrojenie}}).

| Kod | Kształt | Wymiary |
|---|---|---|
| S | Prosty | A = długość |
| L | Jedno gięcie 90° | A = ramię główne, B = ramię haka, oba od zewnątrz do zewnątrz |
| U | Dwa gięcia 90° w tę samą stronę | A = środek, B i C = dwa ramiona, od zewnątrz do zewnątrz |

Pręty siatki z włączonym {{ui:Haki na końcach}} są typu U, bez — typu S. Pręty startowe z włączonym {{ui:Hak na dole}} są typu L, bez — typu S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (rys. 10) |
|---|---|---|
| S | 00, L = A | bez numeru typu |
| L | 11, L = A + B − 0.5r − d | bez numeru typu: rysunek nie ma pręta z jednym hakiem |
| U | 21, A i C to ramiona, B środek: L = A + B + C − r − 2d | Typ 2, haki A i G, prosty B |

Przy kodach BS 8666 lub ACI 315 kolumny A, B i C zestawienia podążają za oznaczeniem danej normy (środek kształtu U to B).

## Długość cięcia

Dla prętów BS 4449 długość cięcia to wzór BS 8666 dla kodu kształtu pręta (powyżej). Dla prętów ASTM to dokładna długość osi pręta: proste odcinki oraz gięcia jako łuki o promieniu równym połowie średnicy gięcia powiększonej o połowę średnicy pręta. Nie jest wyliczana z tabeli odliczeń za gięcie, więc może różnić się o kilka milimetrów od zestawienia, które takiej tabeli używa.

## Układ

- Siatka dolna: pręty wzdłuż L tworzą dolną warstwę, pręty wzdłuż B leżą na nich. Każdy zestaw jest rozłożony równomiernie na ławie w obrębie otuliny, w podanym rozstawie lub gęściej, z co najmniej dwoma prętami.
- Pręty startowe: siatka prętów wzdłuż L i wzdłuż B w podanych rozstawach, wyśrodkowana na ławie, opierająca się na siatce i wystająca ponad górę o podany wysięg. Każdy hak jest skierowany na zewnątrz.

## Sprawdzenia

| Sprawdzenie | Reguła | Wynik |
|---|---|---|
| Miejsce na pręty | Otulina z obu stron zostawia miejsce na pręty | Odrzucane, jeśli nie |
| Głębokość na dwie warstwy | Głębokość pomniejszona o dwie otuliny mieści obie warstwy siatki | Odrzucane, jeśli nie |
| Pręty startowe mieszczą się | Siatka prętów startowych mieści się w obrębie otuliny | Odrzucane, jeśli nie |
| Wolny rozstaw | Co najmniej większa z wartości 25.4 mm i db (ACI 318-19 25.2.1; wielkość kruszywa nie jest sprawdzana) | Ostrzeżenie |
| Głębokość haka | Ramię haka mieści się w głębokości w obrębie otuliny | Ostrzeżenie, ramię skrócone |
| Haki prętów startowych | Haki pozostają poza otuliną | Ostrzeżenie |

## Kolumny zestawienia gięcia

Karta {{ui:Zestawienie gięcia}} i jej plik CSV mają te kolumny: Znacznik pręta, Rozmiar, Kształt, A (mm), B (mm), C (mm), Liczba, Długość cięcia (mm), Całkowita długość (m), kg/m, Masa jednej sztuki (kg), Masa całkowita (kg), Przeznaczenie. Ostatni wiersz sumuje liczbę, długość i masę.
