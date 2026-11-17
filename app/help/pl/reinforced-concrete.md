---
title: Detalowanie żelbetowych belek, słupów, płyt i ścian
summary: Dodawaj belki, słupy, płyty i ściany żelbetowe według siatki, nadawaj im pręty, strzemiona i wiązania, sprawdzaj zakłady i zakotwienie według ACI 318-19 lub EN 1992-1-1 oraz twórz rysunki warsztatowe i zestawienia gięcia prętów.
keywords: żelbet, pręty zbrojeniowe, zbrojenie, belka, słup, płyta, ściana, strzemiona, wiązania, łączniki, haki, zakłady, połączenie zakładowe, zakotwienie, długość zakotwienia, ld, ldh, lbd, otulina, rozstaw, pręty wzmacniające, otwory, siatki, znaczniki prętów, zestawienie gięcia, bbs, rysunek warsztatowy, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, import IFC
from: 3835b7ec
---

Karta {{ui:Beton}} pod widokiem opisuje pręty belek, słupów, płyt i ścian żelbetowych. Podajesz wymiary i pręty; DetailCraft rozmieszcza każdy pręt, numeruje go, sprawdza zakłady, zakotwienie, otulinę i rozstaw względem punktu normy, z którego wynikają, i rysuje go.

:::warning
DetailCraft szczegółowo opisuje pręty, które mu podasz. Nie projektuje ich. Każdy wynik służy do sprawdzenia przez inżyniera.
:::

## Otwieranie karty Beton

Wybierz kartę {{ui:Beton}} pod widokiem. W układzie wstążki {{ui:Beton}} znajduje się na karcie {{ui:Modelowanie}} obok {{ui:Ława}}. W stylu rysunkowym, z wierszem poleceń, wpisz {{cmd:CONCRETE}}.

## Dodawanie elementu według siatki

Elementy żelbetowe umieszcza się na liniach siatki i poziomach modelu, więc najpierw je ustaw (lewy panel).

1. W {{ui:Dodaj według siatki}} wybierz {{ui:Element}}: {{ui:Belka betonowa}}, {{ui:Słup betonowy}}, {{ui:Płyta}} albo {{ui:Ściana}}.
2. Wskaż linie siatki i poziomy:
   - belka biegnie od jednego przecięcia siatki do drugiego, a jej góra leży na poziomie;
   - słup stoi na przecięciu, od jednego poziomu do drugiego;
   - płyta wypełnia prostokąt między dwiema liniami numerowanymi i dwiema literowanymi, a jej góra leży na poziomie;
   - ściana biegnie wzdłuż swojej osi od jednego przecięcia do drugiego, od jednego poziomu do drugiego.
3. Podaj wymiar i wybierz {{ui:Dodaj}}. Element zostaje zaznaczony, a jego pola otwierają się w panelu {{ui:Właściwości}}.

Każdy element startuje z prętami o wartościach wyjściowych, a nie projektowych: zmień je na zgodne z projektem inżyniera.

## Zmiana prętów

Zaznacz element (w widoku albo po jego nazwie na karcie {{ui:Beton}}). Panel {{ui:Właściwości}} pokazuje:

| Element | Co ustawiasz |
|---|---|
| Belka | Szerokość, wysokość, otulina netto; pręty górne i dolne (średnica, liczba, prosty albo z hakiem 90° na końcach); pręty boczne; strzemiona (średnica, haki 135° lub 90°, odległość pierwszego strzemienia od lica podpory, długość i rozstaw strefy końcowej, rozstaw między nimi); długości podparcia; długości zakładów |
| Słup | Szerokość, głębokość w poprzek, obrót, otulina; pręty podłużne na każdej ścianie; wiązania jak strzemiona; co robią pręty u góry (zakład z słupem powyżej, hak w płycie stropowej albo zakończenie) |
| Płyta | Grubość, wymiary, poziom góry, otuliny; siatka dolna i górna w obu kierunkach (średnica i rozstaw); pręty U wokół krawędzi; pręty wzmacniające; otwory |
| Ściana | Grubość, otulina, jedna lub dwie warstwy, pręty poziome i pionowe, pręty U na końcach, pręty pionowe z zakładem powyżej lub bez, pręty wzmacniające, otwory |

Każda zmiana to jeden krok cofania. Zmiana, której nie da się zbudować, zostaje odrzucona, a pasek stanu podaje powód, na przykład „Otwór nie mieści się w elemencie wraz z otuliną.”

Strzemiona i wiązania są zamknięte, z oboma hakami w jednym narożu. Pręty belki wchodzą na końcach w słup betonowy do dalszej ściany słupa pomniejszonej o otulinę; tam, gdzie słupa nie ma, podaj {{ui:Długość podparcia na początku (mm)}} oraz na końcu.

## Zakłady i kotwienie

Pręty dłuższe niż {{ui:Długość pręta handlowego (mm)}} (na start 12000) są cięte na kawałki równej długości, połączone zakładem.

Tabela {{ui:Zakłady i kotwienie}} wymienia każdy zakład i każde zakotwienie: co jest wymagane, wraz z punktem normy i jego warunkami, oraz co ma detal.

- Długość zakładu równa 0 oznacza „wg potrzeb”: długość podana w normie, zaokrąglona w górę do 25 mm.
- Wpisz własną długość zakładu, aby użyć jej zamiast tej. Jeśli jest krótsza, niż wymaga norma, to problem (patrz niżej) i jest oznaczona * w tabeli.
- Zakotwienie mierzy się od lica podpory do końca pręta wewnątrz podpory. Belka bez znanej podpory zgłasza to zamiast jej sprawdzania.
- Słup stojący na ławie zakłada się z prętami startowymi ławy, a na innym słupie z prętami tego słupa; ich zakład też jest sprawdzany.

**ACI 318-19** (SI): proste pręty w rozciąganiu 25.4.2.3 (tabela, z ψt, ψe, ψg, λ), standardowe haki 25.4.3.1 (przyjmowane ψr 1.6 i ψo 1.25, o ile nie są znane inaczej), pręty w ściskaniu 25.4.9.2, zakłady przy rozciąganiu 25.5.2.1 (klasa B albo klasa A w ustawieniach), zakłady przy ściskaniu 25.5.5.1.

**EN 1992-1-1**: zakotwienie 8.4.4 z fbd z 8.4.2 (dobra lub słaba przyczepność), zakłady 8.7.3 z α6 dla każdego pręta połączonego w jednym przekroju. γc, γs i αct startują od wartości zalecanych; ustaw wartości z własnego załącznika krajowego.

## Sprawdzenia

Każde niespełnione sprawdzenie znajduje się w panelu Problemy powłoki (źródło {{ui:Sprawdzenia zbrojenia}}) oraz na liście {{ui:Sprawdzenia}} elementu:

| Sprawdzenie | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Otulina | Tabela 20.5.1.3.1, wg ekspozycji | Minimum przyczepności, tabela 4.2 (otulinę trwałościową podajesz sam) |
| Wolny rozstaw prętów | 25.2.1 (belki, płyty, ściany), 25.2.3 (słupy) | 8.2 (2) |
| Rozstaw strzemion | 9.7.6.2.2 | 9.2.2 (6) |
| Minimalne zbrojenie belki | 9.6.1.2 | 9.2.1.1 (1) |
| Pręty boczne belki powyżej 900 mm wysokości | 9.7.2.3 | nie sprawdzane |
| Stopień zbrojenia słupa, liczba prętów | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Wiązania: rozstaw, średnica, poprzeczki | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Rozstaw w płycie, minimalne zbrojenie | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Rozstaw w ścianie, minimalne zbrojenie, dwie warstwy | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Zakłady, zakotwienie | jak wyżej | jak wyżej |

Wielkość kruszywa nie jest znana, więc wolny rozstaw jest sprawdzany bez niej.

## Otwory, pręty wzmacniające i pręty krawędziowe

Wybierz {{ui:Dodaj otwór}} pod zaznaczoną płytą lub ścianą i ustaw jego położenie oraz wymiar. Pręty, które przecina, kończą się w odległości otuliny od jego krawędzi. Pręty wzmacniające dodaje się z każdej strony, w tej samej warstwie, niosące połowę pola przeciętych prętów, jeden odcinek zakotwienia za otworem. To wyjściowa zasada DetailCraft, a nie punkt normy: {{ui:Pręty wzmacniające}} zmień na zgodne z projektem inżyniera. Pręty narożne nie są dodawane.

Pręty U wokół wolnych krawędzi płyty i na końcach ściany mają ramiona o długości jednego zakładu.

## Znaczniki prętów i zestawienie gięcia

Identyczne pręty mają wspólny znacznik: ławy zachowują znaczniki F (5F1), belki otrzymują B, słupy C, płyty S, a ściany W (7B1, 8C1, 4S2). Karta {{ui:Zestawienie gięcia}} i jej plik CSV wymieniają teraz każdy pręt konstrukcji, najpierw ławy. {{ui:Wyjście}} › {{ui:Więcej}} › {{ui:Gięcie}} pobiera je.

## Rysunki warsztatowe

Wybierz {{ui:Wyjście}} › {{ui:Więcej}} › {{ui:Rysunki zbrojenia}}, {{ui:Rysunki zbrojenia}} na karcie {{ui:Beton}} albo {{ui:Rysunek warsztatowy}} obok jednego elementu. Każdy element dostaje arkusz z elewacją (dla płyty rzut), pokazujący każdy pręt i jego znacznik, strefy strzemion lub wiązań oraz zakłady z wymiarami, oraz przekrój pośrodku; następnie arkusze zestawienia gięcia prętów wymieniają każdy znacznik ze szkicem jego kształtu, wymiarami, liczbą, długością cięcia i masą.

Arkusze powstają z modelu za każdym razem i ponownie po każdej zmianie, gdy okno jest otwarte: tabliczka rysunkowa zawiera odwołanie do modelu. Zapisz {{ui:Ten arkusz jako PDF}} albo {{ui:Wszystkie arkusze jako PDF}}.

## Pręty z pliku IFC

{{ui:Plik}} › {{ui:Importuj IFC}} odczytuje teraz IfcReinforcingBar: zamiatany okrągły przekrój wzdłuż jego osi wraca jako proste ramiona i gięcia, wraz ze średnicą, znacznikiem i elementem, który go zawiera. Pręty są zachowywane tak, jak zostały odczytane (nie są zamieniane na reguły belki ani płyty), pokazywane w widoku, wymieniane w zestawieniu gięcia i zapisywane ponownie przy eksporcie IFC. Raport importu podaje, ile prętów odczytano, o jakich średnicach, w ilu elementach, oraz co pominięto i dlaczego.

Belka, słup, płyta lub ściana z tego pliku, które zawierają pręty albo których materiałem jest beton, nie są traktowane jako stalowe; raport to podaje. Własny eksport IFC DetailCraft zawiera definicję każdego elementu żelbetowego, więc wraca jako sam siebie, a jego pręty są z niej odtwarzane.

:::note
Odczyt własnych plików programu do projektowania konstrukcji (innych niż IFC) jeszcze nie został zbudowany: wyeksportuj z niego IFC.
:::

## Eksport IFC

Belki żelbetowe, słupy, płyty (z otworami) i ściany wychodzą jako IfcBeam, IfcColumn, IfcSlab i IfcWall, każdy ze swoimi prętami jako IfcReinforcingBar (pręty główne, łączniki dla strzemion i wiązań, pręty krawędziowe) agregowanymi do niego; każdy pręt to zamiatany okrągły przekrój wzdłuż jego osi, z prawdziwymi łukami w gięciach, z własnym znacznikiem i długością cięcia.
