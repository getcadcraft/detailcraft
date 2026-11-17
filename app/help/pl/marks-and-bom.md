---
title: Sprawdzanie znaczników i zestawienia materiałów
summary: Odczytaj znaczniki elementów i zespołów nadane przez DetailCraft, sprawdź zestawienie materiałów i pobierz je jako CSV.
keywords: znaczniki, numeracja, znacznik elementu, znacznik zespołu, znacznik pozycji, bom, zestawienie materiałów, lista materiałów, ciężary, lista śrub, csv, numeracja
from: caa2ee80
---

DetailCraft nadaje znaczniki modelowi samodzielnie. Nie ma polecenia numerowania i nic nie trzeba uruchamiać: po każdej zmianie ustala, które elementy są tym samym kawałkiem stali, i nadaje im jeden znacznik.

## Gdzie widać znaczniki

- Lista {{ui:Znaczniki elementów}} w panelu {{ui:Model}}: każdy znacznik z jego profilem, długością i liczbą. Kliknij jeden, aby zaznaczyć pierwszy element z tym znacznikiem.
- Panel {{ui:Właściwości}} zaznaczonego elementu (oraz lista **Znaczniki elementów** w lewym panelu): {{ui:Znacznik}} i {{ui:Zespół}}. Nagłówek panelu też zawiera znacznik, na przykład "Belka b1".
- Zakładka {{ui:Zestawienie materiałów}}, plik CSV, nazwy plików NC, rysunki warsztatowe i eksport IFC (jako znacznik każdego elementu).

## Jak nadawane są znaczniki

- **Znaczniki elementów:** c dla słupów, b dla belek, br dla stężeń, st dla policzków schodów, p dla blach (w tym blach czołowych i blach podstaw). Potem numer: c1, c2, b1, p1 … Gdy elementy są w więcej niż jednej fazie, najpierw podawany jest numer fazy, na przykład 2-b1.
- **Znaczniki zespołów:** C, B, BR lub P. Zespół to element główny i blachy do niego przyspawane, na przykład belka z dwiema blachami czołowymi albo słup z blachą podstawy.
- Dwa elementy mają ten sam znacznik, gdy mają ten sam profil, materiał i długość cięcia oraz te same otwory i wycięcia, z dokładnością do 1 mm, nawet jeśli jeden jest obrócony wzdłuż lub do góry nogami względem drugiego.
- Numeracja idzie najpierw po słupach, potem po belkach, stężeniach i blachach; w każdej grupie według nazwy profilu, najdłuższe najpierw.

Pełne reguły, w tym to, które obroty liczą się dla ceowników i kątowników: [Reguły znaczników](topic:mark-rules).

:::warning
Znaczniki są wyliczane od nowa po każdej zmianie, więc mogą się przenumerować. Dodanie elementu, zmiana profilu lub dodanie otworu może zmienić b3 na b4. Traktuj znaczniki jako ostateczne dopiero po zakończeniu modelu i twórz zestawienie, pliki NC oraz rysunki warsztatowe z tego samego zapisanego modelu.
:::

## Odczytaj zestawienie materiałów

Otwórz zakładkę {{ui:Zestawienie materiałów}} na dole. Ma trzy tabele.

**Elementy**, z łączną masą stali w nagłówku:

| Kolumna | Znaczenie |
|---|---|
| Znacznik elementu | Kliknij, aby zaznaczyć pierwszy element z tym znacznikiem |
| Typ | belka, słup, stężenie, policzek lub blacha |
| Profil | Na przykład W16x26 lub PL20x180 |
| Materiał | Klasa, którą ustawiłeś |
| Długość (mm) | Długość cięcia po połączeniach |
| Liczba | Ile sztuk |
| Ciężar jednostkowy (kg) | Masa profilu na metr × długość |
| Ciężar całkowity (kg) | Ciężar jednostkowy × liczba |

Ostatni wiersz podaje łączną liczbę i ciężar.

**Zespoły:** każdy znacznik zespołu, jego element główny, wszystkie jego elementy (na przykład "b1 + p1 + p1"), liczba, ciężar jednostkowy i ciężar całkowity.

**Śruby i pręty kotwiące:** pogrupowane według rodzaju, średnicy, długości i klasy, z liczbą.

:::note
Ciężary są brutto: otworów i wycięć nie odejmuje się. Śruby, nakrętki, podkładki i spoiny nie są wliczone w ciężar stali.
:::

## Pobierz

Wybierz {{ui:Pobierz CSV}} w zakładce albo {{ui:Zestawienie}} w grupie {{ui:Wyjście}}. Plik `<name> BOM.csv` zawiera trzy tabele jedna po drugiej, każda pod swoim tytułem, z pustą linią między nimi. Otwiera się w każdym arkuszu kalkulacyjnym.

## Sprawdź przed wysłaniem

1. Otwórz zakładkę {{ui:Problemy}} i usuń każdą pozycję. Połączenie, którego nie udało się zbudować, nie dodaje blachy, otworów ani śrub, więc zestawienie będzie niepełne.
2. Szukaj znaczników, których się nie spodziewasz. Dwie belki, które uważasz za takie same, ale mają różne znaczniki, zwykle różnią się otworem, wycięciem lub długością cięcia; zaznacz każdą i porównaj.
3. Zapisz model, a potem wykonaj wszystkie eksporty z tego zapisanego stanu.
