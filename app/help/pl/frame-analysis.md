---
title: Analiza ramy
summary: Siły, reakcje i ugięcia belek, słupów i stężeń w postaci narysowanej, przy przypadkach obciążeń i kombinacjach, które ustawisz. Pomoc analityczna, a nie sprawdzenie według normy; sprawdzenia elementów to osobny krok.
keywords: analiza, analiza konstrukcji, analiza ramy, metoda sztywności, obciążenia, przypadek obciążenia, kombinacja, ciężar stały, obciążenie użytkowe, ciężar własny, obciążenie własne, reakcje, moment zginający, ścinanie, siła osiowa, ugięcie, kształt odkształcony, podpory, przegubowe, utwierdzone, zwolnienie, raport, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Karta {{ui:Analiza}} na dole wyznacza siły w każdej belce, słupie i stężeniu modelu, reakcje u podstaw słupów oraz to, jak bardzo elementy się uginają, dla obciążeń, które podasz.

:::warning
To **pomoc analityczna, a nie sprawdzenie według normy**. Analiza nie stosuje żadnej normy projektowej: nie dobiera przekrojów, nie sprawdza nośności ani połączeń i nie wybiera współczynników obciążeń. Inżynier sprawdza model, jego obciążenia i podpory oraz decyduje, co oznaczają wyniki. Sprawdzenia elementów stalowych według ASCE 7 / AISC 360 lub EN 1990 / EN 1993-1-1 opisano w [Sprawdzanie elementów stalowych według normy projektowej](topic:design-checks); to osobny krok, również mający charakter pomocniczy.
:::

## Uruchamianie

1. Otwórz kartę {{ui:Analiza}}.
2. Zaznacz jeden lub więcej elementów w widoku, wybierz {{ui:Przypadek}}, {{ui:Obciążenie}} i {{ui:Kierunek}}, wpisz wartość i naciśnij {{ui:Dodaj obciążenie}}. Obciążenie rozłożone wzdłuż elementu podaje się w kN/m, a siła skupiona w kN. Najczęściej używa się {{ui:W dół (ciężar)}}.
3. Naciśnij {{ui:Uruchom analizę}}.

Tabela wymienia dla każdego elementu największą siłę osiową N, siły tnące Vz i Vy, momenty zginające My i Mz, skręcanie T oraz jego ugięcie, zaczynając od największego momentu; kliknij nazwę elementu, aby go zaznaczyć. Poniżej są reakcje w każdym podparciu. {{ui:Na modelu}} rysuje kształt odkształcony albo jedno działanie jako wykres obok każdego elementu z jego największą wartością w miejscu opisu. Wyniki tracą aktualność, gdy tylko model się zmieni: uruchom analizę ponownie.

Każde obciążenie, przypadek i ustawienie to jeden krok cofnięcia ({{key:Mod+Z}}) i jest zapisywane w pliku modelu.

## Przypadki obciążeń i kombinacje

Analiza zaczyna od trzech: **Stałe** (ciężar własny elementów, z narysowanych przekrojów i 7850 kg/m³), **Użytkowe** (puste) oraz **Stałe + użytkowe**. Dodaj własne przypadki (wiatr, śnieg …) i kombinacje: kombinacja sumuje przypadki z wpisanymi przez Ciebie współczynnikami. Analiza jest liniowa, więc każdy przypadek jest rozwiązywany raz, a kombinacje są sumami. Współczynniki wpisz samodzielnie albo wybierz normę projektową i pozwól, by {{ui:Utwórz kombinacje}} zapisał jej kombinacje ([Sprawdzanie elementów stalowych według normy projektowej](topic:design-checks)).

## Z czego składa się rama

- Belki, słupy i stężenia, każdy na swojej linii roboczej (linii, którą narysowałeś), z rzeczywistymi właściwościami przekroju wyliczonymi z jego obrysu. Płyty, schody, ławy i śruby nie są częścią ramy.
- Element jest dzielony tam, gdzie koniec innego elementu na nim trafia, więc belka dochodząca do słupa w połowie wysokości łączy się z nim właśnie tam.
- **Podstawy słupów**: utwierdzona (na początku) albo przegubowa (zablokowana w miejscu i przed skręceniem, swobodna w obrocie). Blacha podstawy zawsze tworzy podparcie.
- **Końce belek**: blacha czołowa jest sztywna, a blacha ścinana jest przegubowa. {{ui:Końce belek bez połączenia}} ustawia resztę. **Stężenia** są przegubowe na obu końcach.
- Zaznacz jeden element, aby nadać jego końcom lub podstawie słupa własną regułę.
- Stal wszędzie: E = 200 GPa, G = 77 GPa.

Jeśli rama może się przesuwać, nie wyginając niczego — mechanizm, na przykład przegubowe podstawy bez usztywnienia w jednym kierunku — analiza się zatrzymuje i podaje, gdzie i w którą stronę. Przytrzymaj ją podporą, sztywnym węzłem lub stężeniem.

## Znaki

N > 0 oznacza rozciąganie. My > 0 powoduje rozciąganie lokalnej strony −z elementu: belka uginająca się pod ciężarem ma My > 0. Mz > 0 powoduje rozciąganie lokalnej strony −y. Ugięcie mierzone jest od prostej łączącej końce elementu. Lokalna oś z elementu wskazuje w górę (dla słupa: wzdłuż X); jego osie lokalne obracają się wraz z obrotem elementu.

## Raport

{{ui:Raport (PDF)}} i {{ui:Raport (CSV)}} zawierają wszystko: założenia, na których zbudowano ramę, przekroje, przypadki i kombinacje, a następnie dla każdego przypadku i kombinacji reakcje (wraz z sumami obciążeń i reakcji, które się równoważą), siły w elementach i przemieszczenia oraz obwiednię wszystkich przypadków. {{ui:Eksportuj jako CraftScript}} zapisuje tę samą ramę jako skrypt dla obszaru Skrypt w PartCraft, gdzie funkcja biblioteczna `frame3d` rozwiązuje ją krok po kroku w czytelnym kodzie.

## Metoda

Metoda sztywności bezpośredniej, liniowa i pierwszego rzędu, chyba że zaznaczysz *Drugi rząd (P-Delta)*: belko-słupy dwuwęzłowe z czterema sztywnościami — osiową, skrętną i dwiema zginającymi (bez odkształceń postaciowych, bez wypaczenia); zwolnienia końców przez kondensację statyczną; obciążenia wzdłuż elementów przez ich własne funkcje kształtu. Wyniki sprawdzono na klasycznych przykładach z podręczników (wsporniki, belki swobodnie podparte, utwierdzone i ciągłe, rama portalowa, ruszt w skręcaniu, kratownica).

**Drugi rząd (P-Delta).** Zaznacz *Drugi rząd (P-Delta)* obok przycisku {{ui:Uruchom analizę}}: każda kombinacja jest rozwiązywana ponownie, z siłami osiowymi elementów działającymi na odkształconą ramę (każdy element dzielony na 4 części, więc zginanie elementu między jego końcami też się liczy), aż siły osiowe się ustabilizują. Wiersz wyniku podaje liczbę przebiegów i to, o ile wzrosło przemieszczenie boczne; momenty, ugięcia, sprawdzenia i raport używają wtedy tych wyników. Powyżej sprężystego obciążenia krytycznego ramy analiza się zatrzymuje i to podaje. Jest to analiza sprężysta przy małych obrotach, tylko zginanie, bez redukcji sztywności i bez obciążeń zastępczych (sama w sobie nie jest metodą bezpośrednią AISC); płyty, ściany i sztywne stropy pozostają w analizie pierwszego rzędu.

**Częstości drgań własnych (elementy skończone).** Blok {{ui:Elementy skończone: częstości drgań własnych}} pod wynikami wyznacza najniższe postacie drgań tego samego modelu za pomocą silnika elementów skończonych: belki z ich zwolnieniami końców, płyty i ściany jako płaskie powłoki czterowęzłowe, sztywne stropy, podpory. Wybierz liczbę postaci (3, 6, 10 lub 20) oraz element płyty (powłokę czterowęzłową dla grubych lub cienkich płyt albo element cienkiej płyty) i naciśnij {{ui:Wyznacz częstości}}. Tabela podaje częstotliwość każdej postaci w Hz, jej okres w sekundach oraz efektywną masę modalną wzdłuż X, Y i Z jako udział masy, która może się poruszać. {{ui:Pokaż na modelu}} rysuje każdą postać tak, jak rysowany jest kształt odkształcony. Masa to gęstość materiału razy objętość: obciążenia nie dodają masy, a materiał bez gęstości jej nie ma. Raport (PDF, CSV) zawiera tę tabelę. Analiza jest sprężysta i tylko dla małych przemieszczeń; nie tworzy tu obciążenia sejsmicznego ani wiatrowego na podstawie normy. To nie jest sprawdzenie według normy; wyniki przegląda inżynier.

**Spektrum odpowiedzi, historia czasowa i pushover.** Pod częstościami są jeszcze trzy bloki, korzystające z tego samego modelu elementów skończonych. Masa dla wszystkich z nich to gęstość materiału plus obciążenia pionowe w dół z zaznaczonych przypadków, każde pomnożone przez wpisany współczynnik (na przykład Stałe przy 1 i Użytkowe przy udziale, który liczysz jako masę).

{{ui:Spektrum odpowiedzi}} odczytuje każdą postać z podanego spektrum (tabeli okresu i przyspieszenia albo kształtu ASCE 7 z SDS, SD1 i TL; przycisk {{ui:Użyj wartości z bloku sejsmicznego}} kopiuje je z bloku Sejsmika) i łączy postacie metodą CQC, SRSS, reguły dziesięciu procent lub sumą bezwzględną, a następnie składa kierunki X, Y i Z (100 % + 30 % albo SRSS). Podaje siłę ścinającą u podstawy, dryfty kondygnacji, siły na końcach elementów oraz tabelę postaci, która ostrzega, gdy użyte postacie niosą mniej niż 90 % masy. Wyniki możesz przeskalować współczynnikiem lub do wpisanej przez siebie siły ścinającej u podstawy; blok nigdy sam nie wylicza tej siły. Wyniki nie mają znaku.

{{ui:Historia czasowa}} przykłada przyspieszenie gruntu metodą superpozycji modalnej (dokładną dla prostych odcinków zapisu między punktami) lub przez bezpośrednie całkowanie (średnie przyspieszenie Newmarka z tłumieniem Rayleigha). Dane wejściowe to sztuczny sinus lub impuls (zawsze oznaczony jako syntetyczny), zapis, który wklejasz, albo plik tekstowy, który otwierasz (czas i przyspieszenie, jedno przyspieszenie w wierszu przy stałym kroku, albo plik w stylu PEER z nagłówkiem DT=; w g lub m/s²). Podaje przemieszczenie dachu i siłę ścinającą u podstawy w czasie, dryft każdej kondygnacji oraz obwiednię sił na końcach elementów. Modele z bardzo długim zapisem zachowują go tylko na czas sesji.

{{ui:Pushover}} przesuwa dach w bok małymi krokami (rozkład jak dla pierwszej postaci lub równomierny), z przegubami plastycznymi na końcach elementów o przekroju dwuteowym. Przegub uplastycznia się przy momencie plastycznym, który maleje wraz ze wzrostem siły osiowej (wyliczonym z narysowanego kształtu, pominięto zaokrąglenia); wzmocnienie jest opcjonalne, P-delta jest opcjonalne, a kombinację grawitacyjną można zastosować najpierw. Podaje krzywą nośności (siła ścinająca u podstawy w zależności od przemieszczenia dachu), pierwszy przegub oraz stan i obrót plastyczny każdego przegubu. {{ui:Uruchom nieliniową historię czasową}} stosuje te same przeguby do zapisu z bloku Historii czasowej na małych modelach. Przeguby powstają tylko na końcach elementów (w miejscu, gdzie ma powstać przegub wewnątrz przęsła, umieść węzeł); element zwolniony na obu końcach nie dostaje żadnego; uplastycznienie i wyboczenie stężeń nie są modelowane; płyty i ściany pozostają sprężyste; nie podano kryteriów akceptacji. To nie jest sprawdzenie według normy; wyniki przegląda inżynier. Ustawienia są zapisywane z modelem, a raport zawiera tabele.

Jeszcze nie zbudowano: analizy wyboczenia, korekty brakującej masy dla spektrum odpowiedzi, skalowania zapisów, kryteriów akceptacji dla przegubów (odpowiedź dynamiczna jest, jak wyżej), obciążeń powierzchniowych i wiatrowych generowanych automatycznie (siły sejsmiczne na stropach opisano w [Sprawdzanie betonu i tworzenie obciążeń sejsmicznych](topic:concrete-and-seismic)), mimośrodów elementów, stężeń pracujących tylko na rozciąganie. Zobacz [Jeszcze nie zbudowano](topic:not-built-yet).
