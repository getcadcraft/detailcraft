---
title: Eksport IFC do koordynacji
summary: Zapisz plik IFC4 całego modelu — stali, śrub, ław i zbrojenia — do udostępnienia architektom, inżynierom i innemu oprogramowaniu.
keywords: ifc, ifc4, ifc2x3, bim, eksport, import, importuj ifc, otwory, śruby, luźne śruby, łączniki, koordynacja, wymiana modelu, step, openbim, kolizja, przeglądarka
from: cfcb0cd6
---

Eksport IFC zapisuje cały model jako jeden plik IFC4, który mogą otworzyć programy BIM i przeglądarki IFC.

## Eksport

1. Wybierz {{ui:IFC}} w grupie {{ui:Wyjście}}.
2. Przeglądarka pobiera `<name>.ifc`. Pasek stanu pokazuje, co weszło, na przykład "IFC4 wyeksportowano: 25 elementów, 88 łączników, 7 ław, 132 pręty."

Jeśli model nie ma elementów, ław ani prętów, pasek stanu pokazuje: "Nie ma jeszcze nic do wyeksportowania."

## Co znajduje się w pliku

| W DetailCraft | W pliku IFC |
|---|---|
| Każdy poziom | Kondygnacja budynku (IfcBuildingStorey), w jednym projekcie, terenie i budynku |
| Siatki | IfcGrid z osiami i etykietami |
| Słupy, belki, stężenia | IfcColumn, IfcBeam, IfcMember (stężenie), każdy jako wyciągnięcie standardowego kształtu profilu z rzeczywistymi wymiarami |
| Blachy, blachy czołowe, blachy podstaw | IfcPlate |
| Otwory i wycięcia | Otwory (IfcOpeningElement) wycięte z elementu |
| Element i przyspawane do niego blachy | Zespół (IfcElementAssembly) oznaczony znacznikiem zespołu |
| Śruby i pręty kotwiące | IfcMechanicalFastener z średnicą i długością |
| Ławy | IfcFooting (stopa fundamentowa), z tekstem betonu jako materiałem |
| Każdy pręt | IfcReinforcingBar z jego znacznikiem, średnicą, polem przekroju i długością, poprowadzony po rzeczywistej osi z prawdziwymi łukami w zgięciach |

Znacznik każdego elementu to jego znacznik elementu. Każdy element ma też zestaw właściwości "DetailCraft" z jego znacznikami, profilem i ciężarem. Każdy element stoi na najwyższej kondygnacji na poziomie lub poniżej swojego najniższego punktu. Materiały są grupowane według klasy.

## Stałe identyfikatory przy ponownych eksportach

Identyfikator IFC (GlobalId) każdego elementu jest wyliczany z nazwy modelu i z jego własnego identyfikatora w modelu. Po wyeksportowaniu tego samego modelu dwukrotnie identyfikatory są zgodne, więc oprogramowanie porównujące wersje może wskazać, co się zmieniło.

:::warning
Zmiana nazwy modelu zmienia wszystkie identyfikatory. Zachowuj nazwę modelu taką samą między wydaniami projektu.
:::

## Sprawdź

Pliki IFC z DetailCraft są odczytywane z powrotem przez niezależny czytnik IFC w zestawie testów. Programy różnie odczytują IFC, więc otwórz plik w oprogramowaniu, którego używa twój zespół, zanim na nim polegasz. Aplikacja BimCraft firmy CadCraft również otwiera pliki IFC.

## Jeszcze nie

- Wczytywanie połączeń, ław i prętów z pliku IFC. {{ui:Importuj IFC}} wczytuje belki, słupy, elementy, blachy, siatki, poziomy, otwory, wycięcia i śruby oraz wypisuje, co pominęło.
- Dane analityczne lub konstrukcyjne do analizy.
- Cokolwiek poza widokiem referencyjnym IFC4.

## Import

{{ui:Importuj IFC}} w grupie {{ui:Plik}} (lub upuszczenie pliku `.ifc` na widok) tworzy nowy model z pliku IFC2X3 lub IFC4:

- **Belki, słupy, elementy (stężenia) i blachy**, których bryłę stanowi jeden wyciągnięty profil znany DetailCraft, dopasowane do katalogu lub zachowane jako profil niestandardowy; **siatki** i **poziomy** z siatki i kondygnacji pliku.
- **Otwory:** każdy okrągły otwór IfcOpeningElement wycinający element, który został wczytany, prostopadły do jednej z powierzchni elementu: środnika lub półek dwuteownika albo ceownika, ścianek rury, blachy, półek kątownika. Otwór przez obie ścianki rury wczytuje się raz.
- **Wycięcia (cope):** prostokątny otwór zajmujący pełną szerokość dwuteownika lub ceownika od jednego końca, od góry lub od dołu.
- **Śruby:** każdy IfcMechanicalFastener lub IfcFastener, z jego średnicą, długością, klasą i rodzajem (śruba lub pręt kotwiący), jako **luźna śruba**. Luźne śruby są widoczne w widoku, zestawieniu materiałów i eksporcie IFC i zostają tam, gdzie są, gdy przesuwasz elementy. Panel {{ui:Właściwości}}, gdy nic nie jest zaznaczone, liczy je i ma {{ui:Usuń luźne śruby}} na wypadek, gdy dodajesz połączenia zamiast nich.

Raport wymienia wszystko inne według klasy z powodem pominięcia: ściany i płyty stropowe, ławy i pręty, otwory podłużne, otwory w rurach okrągłych, połączenia (plik IFC zawiera ich blachy i śruby, ale nie regułę, która je wytworzyła).
