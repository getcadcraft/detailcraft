---
title: Schody
summary: Umieść prostą stalową klatkę schodową z wysokości, biegu i szerokości: dwa policzki i blaszane stopnice, jeden spawany zespół warsztatowy.
keywords: schody, klatka schodowa, policzek, stopnica, podstopnica, nosek, bieg, stalowe schody, ibc 1011, blondel
from: 62fa3845
---

Prosta stalowa klatka: dwa policzki (ceowniki stopami do wewnątrz albo płaskowniki na ostrzu) i blaszana stopnica na każdym stopniu, spawane między nimi. DetailCraft wylicza liczbę podstopnic z wysokości, sprawdza je względem limitów przepisów budowlanych i wykonuje schody jako jeden zespół warsztatowy.

## Umieść schody

1. Wybierz {{ui:Schody}} w grupie {{ui:Umieść}} albo naciśnij {{key:S}}.
2. Ustaw schody po prawej: **kierunek wejścia** (0° wspina się wzdłuż +x, 90° wzdłuż +y), **wysokość** (0 = do następnego poziomu), **długość biegu**, **szerokość w świetle** między policzkami, **najwyższą dozwoloną podstopnicę**, **policzek**, **grubość blachy stopnicy**, **nosek** i materiał.
3. Kliknij przecięcie siatki: to podstawa pierwszej podstopnicy, na osi schodów.

Pasek stanu mówi, ile podstopnic powstało. Zaznacz schody (kliknij policzek lub stopnicę), aby zmienić dowolne ustawienie, ich położenie lub fazę; właściwości pokazują też podstopnice, stopnice, długość biegu, nachylenie oraz 2 × podstopnica + głębokość stopnicy.

## Co wylicza DetailCraft

- **Podstopnice.** Tyle, ile trzeba, aby każda była nie wyższa niż najwyższa dozwolona: wysokość 3000 mm przy 178 mm lub mniej daje 17 podstopnic po 176,5 mm. Stopnic jest o jedną mniej niż podstopnic (ostatni poziom jest ostatnim krokiem).
- **Stopnice.** Blacha o głębokości równej głębokości stopnicy + nosek (domyślnie 280 + 25 = PL6x305) i długości równej szerokości w świetle, jej górna powierzchnia na wysokości każdej podstopnicy, a przednia krawędź (nosek) przed linią podstopnicy.
- **Policzki.** Pod nachyleniem schodów, od miejsca, gdzie stykają się z dolnym stropem, do miejsca styku z górnym, tuż poza szerokością w świetle, ich górna krawędź 50 mm nad linią nosków. Stopy ceownika zwrócone są do wnętrza schodów; płaskownik, na przykład PL12x250, stoi na ostrzu.
- **Spoiny.** Każda stopnica do obu policzków. Stopnice i prawy policzek są przyspawane do lewego policzka, więc schody dostają jeden znacznik zespołu (ST1) i własny rysunek zespołu; policzki dostają znaczniki elementów st…, a stopnice p….
- **Kontrole.** Ostrzeżenia, gdy podstopnica jest poza zakresem 4–7 in. (102–178 mm) lub gdy głębokość stopnicy jest mniejsza niż 11 in. (279 mm), czyli limity IBC 2021, sekcja 1011.5.2; gdy 2 × podstopnica + głębokość stopnicy wypada poza 600–650 mm (typowa zasada wygody); oraz gdy policzek jest zbyt płytki, by nieść stopnice. Nieznany profil policzka uniemożliwia wykonanie schodów.

## Dobrze wiedzieć

- Przesuwanie, obracanie, odbicie, kopiowanie, wklejanie, usuwanie i fazy działają na schodach tak jak na elemencie. Obrót obraca kierunek wejścia; odbicie wysyła go w odbitą stronę.
- Policzki są eksportowane do IFC jako IfcMember, a stopnice jako IfcPlate; oba trafiają do plików NC i zestawienia materiałów. [Sprawdzenie kolizji](topic:clash-check) pomija własne części schodów (są ze sobą spawane).
- Ta prosta klatka to jeden bieg ze stopnicami blaszanymi. Dla spoczników, poręczy ze słupkami, stopnic wannowych lub kratowych, wybranego zestawu reguł, listy cięcia i rysunków otworów w policzkach zaznacz {{ui:Użyj generatora schodów stalowych}} w narzędziu Schody (zob. Generator schodów stalowych).
- Policzki są cięte prostopadle: ich cięcia końcowe przy stropach nie są wykonywane.
- DetailCraft nie projektuje schodów: policzki i stopnice nie są sprawdzane pod kątem wytrzymałości ani ugięcia.
