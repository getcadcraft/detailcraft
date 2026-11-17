---
title: Sprawdzenia fundamentów
summary: Sprawdź ławy, ławy łączone i płyty na opisanym gruncie, osiadanie, płytę elastyczną na sprężynach, grupy pali i mury oporowe. Pomoc dla inżyniera w weryfikacji.
keywords: fundament, ława, ława łączona, płyta fundamentowa, osiadanie, moduł podłoża, sprężyny, słup przykrawędziowy, słup narożny, nośność, poślizg, wywrócenie, przebicie, ścinanie jednokierunkowe, zginanie, zakotwienie, minimalne zbrojenie, grupa pali, mur oporowy, ACI 318-19
from: 6961ad52
---

:::warning
To wstępne sprawdzenia dla inżyniera do przeglądu, a nie zatwierdzenie projektu. Dopuszczalne ciśnienie na grunt i współczynnik tarcia są Twoje: DetailCraft nie zna Twojego gruntu.
:::

Karta {{ui:Fundamenty}} sprawdza ławy w modelu względem obciążeń słupów, które im podasz.

## Opisz grunt

Wpisz {{ui:Dopuszczalne ciśnienie na grunt}} i {{ui:Współczynnik tarcia podstawy}}. Oba zaczynają się od 0, co oznacza „nie wprowadzono”: sprawdzenie pokazuje wtedy ciśnienie jako uwagę i nie stwierdza, że przechodzi. Do osiadania wpisz moduł gruntu {{ui:Es}} (MPa), jego współczynnik Poissona oraz dopuszczalne osiadanie (na początek 25 mm). Dla płyty elastycznej wpisz moduł podłoża {{ui:ks}}. Są tu też nasyp nad ławą, ciężar objętościowy gruntu, współczynniki bezpieczeństwa na poślizg i wywrócenie (na początek 1,5) oraz wytrzymałość prętów na granicę plastyczności.

## Podaj obciążenia

Każda ława ma listę obciążeń słupów. Użyj {{ui:Dodaj obciążenie słupa}} i wypełnij wiersz użytkowy (dla nośności, poślizgu i wywrócenia) oraz wiersz obliczeniowy (dla sprawdzeń wytrzymałościowych): pionowe obciążenie P w dół, poziome siły Vx i Vy na górze ławy, momenty Mx i My, położenie słupa na ławie oraz jego wymiar.

Albo otwórz kartę {{ui:Analiza}} i naciśnij {{ui:Pobierz obciążenia słupów z Analizy}}: każde podparcie stojące na ławie stanie się obciążeniem słupa, z zestawów użytkowych i obliczeniowych, które wybierzesz. Dodatni My mocniej obciąża stronę +x ławy, a dodatni Mx mocniej obciąża stronę −y.

## Co jest sprawdzane

Z obciążeń użytkowych, z dodanym ciężarem własnym ławy i nasypem:

- **Nośność:** docisk pod sztywną ławą. W środkowej trzeciej części cała podstawa jest w kontakcie; poza nią część podstawy odrywa się i szczytowe ciśnienie jest wyższe. Wypadkowa poza podstawą nie przechodzi sprawdzenia.
- **Poślizg:** tarcie razy obciążenie pionowe w porównaniu z siłą poziomą.
- **Wywrócenie:** odległość wypadkowej od krawędzi.
- **Osiadanie:** sprężyste osiadanie średniego ciśnienia na półprzestrzeni o podanym module, w środku i w narożu (rozwiązanie Timoshenki i Goodiera dla prostokąta elastycznego), w porównaniu z dopuszczalnym. Jest to górne oszacowanie dla sztywnej ławy; pomija warstwę gruntu o ograniczonej głębokości, odciążenie przez wykopany grunt oraz konsolidację. Bez modułu pokazuje ciśnienie jako uwagę.

Z samych obciążeń słupów obliczeniowych (ACI 318-19):

- **Zginanie** przy licu słupa, z minimalnym zbrojeniem (0,0018 dla prętów 420 MPa) i prętami, które narysowałeś.
- **Ścinanie jednokierunkowe** w odległości d od lica.
- **Przebicie** w odległości d/2 wokół każdego słupa, z momentem słupa. Dla słupa przy krawędzi przekrój krytyczny jest obcinany przez krawędź ławy (trzy boki przy krawędzi, dwa w narożu; ACI 318-19 22.6.4.1 oraz mniejsze αs z tabeli 22.6.5.2), a moment względem środka przekroju uwzględnia przesunięcie obciążenia.
- **Zakotwienie** prętów za licem słupa, proste lub z hakami.
- **Wysokość** ponad dolnymi prętami (150 mm).

Ława łączona lub płyta są traktowane jako sztywne, a ścinanie i moment wynikają ze statyki na przekrojach przez pełną szerokość.

## Płyta elastyczna na sprężynach

Zaznacz {{ui:Analizuj tę ławę jako elastyczną płytę na sprężynach}}, gdy ława niesie wiele słupów, a sztywna ława jest zbyt zgrubna. Ława staje się płytą z czterowęzłowych elementów na podłożu sprężystym (wpisane {{ui:ks}}, skupione w węzłach), a obciążenie każdego słupa rozkładane jest na węzłach jego własnego obrysu. Druga tabela podaje największe ciśnienie na grunt i osiadanie (oraz różnicę między największym a najmniejszym), moment zginający w obu kierunkach wraz z potrzebnym zbrojeniem, rozciąganie na górze w porównaniu z wytrzymałością zwykłego betonu (ława nie ma prętów górnych), ścinanie jednokierunkowe w odległości d od słupów oraz przebicie przy ciśnieniu z samych sprężyn. Siatka jest zagęszczana, aż słup będzie szeroki na trzy elementy; duża płyta liczy się kilka sekund. Ciężar własny płyty i grunt nad nią znoszą się i są pominięte.

Każde niespełnione sprawdzenie jest w panelu {{ui:Problemy}} wraz z odwołaniem do punktu normy.

## Grupy pali i mury oporowe

{{ui:Dodaj grupę pali}} umieszcza siatkę pali pod sztywnym oczepem: wpisz obciążenie i momenty oraz to, ile jeden pal może przenieść na ściskanie i na rozciąganie (wartości z projektu pali, a nie z tej karty). Reakcja każdego pala to P/n plus jego udział w momentach (metoda sprężysta), a największe ściskanie i wszelkie rozciąganie są sprawdzane.

{{ui:Dodaj mur oporowy}} sprawdza wspornikowy mur na poziomym zasypie, na metr bieżący: czynne parcie Rankine'a, wywrócenie względem palca, poślizg i ciśnienie pod podstawą. Parcie bierne przed palcem jest pomijane. Twój asystent może wykonać te same sprawdzenia poleceniami `pile_group_check` i `retaining_wall_check`.

Grupy pali, mury oporowe i przełącznik płyty są zapisywane w pliku modelu, a niespełnione sprawdzenie jest w {{ui:Problemy}}.
