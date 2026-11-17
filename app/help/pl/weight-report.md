---
title: Raport materiałów i masy według etapu
summary: Długości cięcia, liczby, masy i pola malowania dla każdego etapu, wraz ze śrubami i prętami zbrojeniowymi, jako tabela, CSV lub PDF.
keywords: raport, masa, tonaż, kg, malowanie, pole malowania, pole powierzchni, powłoka, długość cięcia, lista materiałów, etap, zestawienie materiałów, csv, pdf
from: 337d6d92
---

W grupie {{ui:Wyjście}} otwórz {{ui:Więcej}} i wybierz {{ui:Raport masy według etapu}}, albo otwórz kartę {{ui:Według etapu}} pod widokiem. Pokazuje:

- **Podsumowanie według etapu**: dla każdego etapu liczbę części, masę stali, pole malowania, śruby i kotwy oraz pręty zbrojeniowe; następnie sumy.
- **Jedna tabela dla każdego etapu**: każdy znak części w nim z typem, profilem, materiałem, długością cięcia, liczbą, masą jednostkową, masą i polem malowania; następnie jego śruby i kotwy.

{{ui:Pobierz CSV}} zapisuje te same tabele w jednym pliku CSV (`<name> weight report.csv`). {{ui:Pobierz PDF}} tworzy raport w rozmiarze arkusza z [ustawień DetailCraft](topic:settings#drawings): najpierw podsumowanie, po nim każdy etap, długie tabele przechodzą na następną stronę, a każda strona jest ponumerowana.

## Jak obliczane są wartości

- **Masy** są brutto, jak w zestawieniu materiałów: masa profilu na metr razy długość cięcia. Otwory i wycięcia nie są odejmowane.
- **Pole malowania** to zewnętrzna powierzchnia przekroju na długości cięcia: dla dwuteownika każda ściana pasów i środnika, dla blachy obie powierzchnie i krawędzie, dla rury tylko zewnętrzna strona. Końce i otwory nie są liczone.
- **Zbrojenie** to masa prętów w fundamentach etapu, z [zestawienia gięcia](topic:footings-and-rebar).
- Płyty i śruby połączenia liczą się w etapie jego głównego elementu. Zobacz [Etapy](topic:phases).

Gdy [znaki według etapu](topic:phases#marks-per-phase) są włączone, każdy etap ma własne znaki (1-b1, 2-b1). Gdy są wyłączone, znak może pojawić się w więcej niż jednym etapie: każdy etap wymienia części, które ma.
