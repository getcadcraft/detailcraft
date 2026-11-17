---
title: Plan montażu i film montażowy
summary: Wprowadź dźwig i jego tabelę nośności, zobacz, jak każde podniesienie jest sprawdzane względem tabeli w kolejności faz, i zapisz film montażowy, który odtwarza się offline na każdym telefonie.
keywords: montaż, dźwig, podniesienie, tabela nośności, wysięg, nośność, osprzęt, kolejność, film, animacja, telefon, offline, plan podnoszenia
from: fa7b0133
---

Karta {{ui:Montaż}} przekształca model w zlecenie montażu i sprawdza każde podniesienie względem opisanego dźwigu. Planuje na podstawie liczb, które wpisujesz. Nie jest to plan podnoszenia: ten wykonują zawiesiarz i operator dźwigu.

## Opis dźwigu

Wybierz {{ui:Dodaj dźwig}}, a następnie uzupełnij:

- **Środek dźwigu X i Y:** miejsce, w którym stoi dźwig, w milimetrach.
- **Najwyższe położenie haka:** najwyżej, na ile może wznieść się hak, w milimetrach. 0 oznacza, że nie sprawdza się limitu.
- **Krążek haka i osprzęt nieuwzględnione w tabeli:** kilogramy odejmowane od tabeli przed dodaniem obciążenia, gdy Twoja tabela tego już nie robi.
- **Tabela nośności:** jeden wiersz w jednej linii, wysięg w metrach, a następnie nośność w kilogramach. Skopiuj wiersze z własnej tabeli dźwigu.

Tabela jest odczytywana tak, jak odczytuje się tabelę nośności: nośność podana dla wysięgu obowiązuje aż do tego wysięgu. Obciążenie na wysięgu między dwoma wierszami otrzymuje nośność **dalszego** wiersza, nigdy wartość pomiędzy nimi. Wewnątrz pierwszego wiersza obowiązuje nośność pierwszego wiersza. Poza ostatnim wierszem dźwig w ogóle nie może podnosić. Wysięg liczący się dla podniesienia to większy z wysięgu podjęcia i wysięgu ustawienia.

Drugi dźwig dodaje się w ten sam sposób. Każde podniesienie trafia do pierwszego dźwigu, który może je wykonać w ramach Twojego marginesu.

## Co robi plan

- Jedno podniesienie na zespół: belka z blachami czołowymi, słup z blachą podstawy, schody.
- Kolejność wynika najpierw z faz, a potem poziom po poziomie: słupy, belki, które niosą, stężenia, blachy, schody. Element nigdy nie jest podnoszony przed tym, co go podpiera.
- Każde podniesienie pokazuje swoją masę (brutto masę modelu plus {{ui:Osprzęt doliczany do każdej masy}}), swój wysięg, udział tabeli, którego używa, oraz minutę rozpoczęcia.
- {{ui:Największy udział tabeli dla podniesienia}} to Twój margines bezpieczeństwa. Podniesienie powyżej niego jest oznaczone jako **Powyżej marginesu**; powyżej tabeli — **Powyżej tabeli**; za ostatnim wysięgiem tabeli — **Poza tabelą**; a element wyższy niż hak — **Hak za nisko**.

Otworów i wycięć nie odejmuje się od mas, a śruby są uwzględnione w procencie osprzętu.

## Problemy

Każde podniesienie, które jest powyżej, poza tabelą, zbyt wysokie lub ustawione przed tym, co je podpiera, pojawia się w panelu {{ui:Problemy}}. Belka bez połączenia, które by ją podtrzymywało, jest wymieniona jako wymagająca tymczasowego podparcia.

## Zapisywanie filmu

{{ui:Zapisz film}} zapisuje jeden plik HTML. Otwórz go w dowolnej przeglądarce, także na telefonie, bez sieci i bez konta: odtwarzaj i wstrzymuj, przeciągnij pasek do dowolnej minuty, obracaj model palcem, szczypnij, aby powiększyć. Podpis nazywa każde podniesienie, jego masę, wysięg i udział tabeli. Model jest narysowany jako proste bryły: pokazuje kolejność i podniesienia, a nie rzeczywiste profile.

Ta sama tabela zapisuje się jako CSV przyciskiem {{ui:CSV}}. Dźwig i tabela są zapisane w pliku modelu, a każda zmiana to jeden krok cofnięcia.
