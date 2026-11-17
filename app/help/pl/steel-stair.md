---
title: Generator schodów stalowych
summary: Schody stalowe z wysokości między kondygnacjami, biegu i szerokości: podstopnice i głębokość stopnicy wg wybranego zestawu reguł, spoczniki, poręcze i słupki, rysunki warsztatowe oraz lista cięcia z ciężarami.
keywords: schody stalowe, generator schodów, policzek, stopnica, blacha ryflowana, krata pomostowa, gięta blacha wannowa, spocznik, poręcz, słupki, podstopnica, głębokość stopnicy, osha, ibc, approved document k, lista cięcia, ciężary, rysunek warsztatowy
from: a4f0a985
---

Generator schodów wykonuje cały stalowy bieg schodów z kilku liczb: policzki, stopnice, spoczniki, gdy bieg jest za wysoki, poręcze ze stojakami i słupkami, otwory mocujące w policzkach, listę cięcia z ciężarami i rysunki warsztatowe. Startuje z narzędzia {{ui:Schody}}, jak prosta klatka (zob. Schody), z jednym dodatkowym przełącznikiem.

## Umieść schody stalowe

1. Wybierz {{ui:Schody}} w grupie {{ui:Umieść}} albo naciśnij {{key:S}}.
2. Po prawej zaznacz {{ui:Użyj generatora schodów stalowych}}.
3. Wybierz **zestaw reguł** dla miejsca budowy, **wysokość** (od stropu do stropu; 0 = do następnego poziomu), **dostępny bieg** (0 = niech reguła zdecyduje), **szerokość w świetle** i **typ stopnicy**: blacha ryflowana, krata lub gięta blacha wannowa.
4. Ustaw przekrój policzka, spoczniki (wg reguły lub liczbę), poręcze (po obu stronach, po jednej lub bez), wysokość poręczy i szczelinę między słupkami.
5. Kliknij przecięcie siatki: to podstawa pierwszej podstopnicy.

Zaznacz schody (kliknij policzek, stopnicę lub poręcz), aby zmienić dowolne ustawienie; właściwości pokazują podstopnice, głębokość stopnicy, nachylenie, biegi i spoczniki, stal w nich, listę cięcia oraz źródła zestawu reguł.

## Zestawy reguł

Zestaw reguł ogranicza kształt schodów: wysokość i głębokość stopnicy, 2 × podstopnica + głębokość stopnicy, nachylenie, spocznik, wysokość poręczy i największy otwór. DetailCraft oferuje te poniżej; region jest ustawieniem, a nie zgadywaniem. Otwórz **Skąd pochodzą liczby tego zestawu reguł** w panelu właściwości: każda liczba podaje swoje źródło i mówi, jak dobrze została sprawdzona.

- **International Building Code 2021**: podstopnica 4–7 in., stopnica co najmniej 11 in., poręcze 34–38 in. Limit 12 ft między spocznikami jest pokazany jako *nieodczytany*, a liczby poręczy jako odczytane z materiałów przytaczających przepis: przed poleganiem na nich potwierdź je.
- **OSHA 29 CFR 1910.25 i 1910.29** (przemysłowe schody standardowe): 30°–50°, podstopnica co najwyżej 9,5 in., stopnica co najmniej 9,5 in., co najmniej 22 in. szerokości, spoczniki tak szerokie jak schody i 30 in. głębokości, górna poręcz używana jako poręcz 36–38 in. Odczytano je z samego rozporządzenia.
- **Approved Document K 2013, Anglia** (ogólne schody dostępu i użytkowe): zakresy wysokości i głębokości stopnicy oraz 2 × podstopnica + głębokość stopnicy 550–700 mm, odczytane z raportu zleconego przez rząd, który je zestawia. Dokument nie podaje DetailCraft wysokości poręczy, więc używana jest wysokość, którą ustawisz, a lista Problemy o tym mówi.

Zestawu reguł, którego tu nie ma, nie zgaduje się: schody wtedy stosują prostą zasadę wygody 600–650 mm i zgłaszają brak reguły.

## Co wylicza

- **Podstopnice i głębokość stopnicy.** Najmniejsza liczba podstopnic, przy której 2 × podstopnica + głębokość stopnicy mieści się w środku zakresu reguły, bez spadania głębokości stopnicy poniżej minimum reguły. Gdy podano długość biegu, głębokość stopnicy to ta długość podzielona przez stopnice, a wszystko, co wypada poza regułą, jest zgłaszane.
- **Biegi i spoczniki.** Bieg wyższy, niż dopuszcza reguła, jest dzielony spocznikiem tak szerokim jak schody i nie węższym niż minimum reguły; możesz też zażądać spoczników. Spocznik to rama z dwóch bocznych belek i dwóch poprzecznych kątowników pod pokryciem, na dwóch stojakach.
- **Stopnice.** Blacha ryflowana to spawana blacha (domyślnie 6 mm; wzór nie jest dodawany do ciężaru). Gięta blacha wannowa ma zawinięcie na nosku i jest przykręcona przez środnik policzka: dwa otwory o 2 mm większe od śruby, na 0,3 i 0,7 głębokości. Krata jest rysowana jako blacha o równym ciężarze (głębokość pręta nośnego × grubość ÷ rozstaw); pręty poprzeczne i obwódki nie są liczone, a lista cięcia to mówi.
- **Poręcze.** Rurowa poręcz górna na stojakach wzdłuż każdego biegu i każdego spocznika oraz szczelina między słupkami, której nie przechodzi kula większa niż otwór z reguły (domyślnie najwyżej 100 mm).

## Rysunki, lista cięcia, eksport

- Bieg to jeden zespół; poręcze to inny (obie strony to ten sam zespół, wykonany dwa razy). Każdy ma swój rysunek zespołu, a rysunek policzka pokazuje jego otwory.
- **Arkusz schodów** (ST-…) pokazuje każdy policzek biegu prosto, z pozycjami otworów zapisanymi od dolnego końca, oraz szczegół stopnicy: przekrój, nosek, zawinięcie i kołnierz końcowy z jego otworami.
- {{ui:Lista cięcia i ciężary}} w panelu właściwości wypisuje każdy przekrój i długość z ilościami i kilogramami; {{ui:Pobierz listę cięcia (CSV)}} ją zapisuje.
- Wszystko trafia do zestawienia materiałów, plików NC i IFC jako zwykłe elementy (IfcMember, IfcColumn, IfcPlate).

## Warto wiedzieć

- To punkt wyjścia, a nie projekt. Nic nie jest sprawdzane pod kątem wytrzymałości ani ugięcia; zestaw reguł tylko ogranicza kształt.
- Końce policzków przy stropach są cięte prostopadle i nie są detalowane; słupy spoczników stoją do stropu poniżej i nie mają blach podstaw.
- Umieszczanie schodów jako jednego elementu w BimCraft nie jest jeszcze połączone.
