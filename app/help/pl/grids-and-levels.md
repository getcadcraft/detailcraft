---
title: Ustawianie siatek i poziomów
summary: Wpisz linie siatki, ich rozstawy oraz poziomy, na których umieszczony jest każdy element.
keywords: siatka, siatki, osie, linie siatki, poziomy, rzędne, kondygnacje, stropy, rozstaw, konfiguracja
from: 9cad233c
---

Każdy element w DetailCraft jest umieszczony na przecięciu siatki na określonym poziomie. Ustaw najpierw siatki i poziomy; możesz je zmienić później.

## Jak działają tu siatki

- **Linie numerowane** biegną w jednym kierunku, **linie literowe** w drugim. Nazwy są tylko przyzwyczajeniem: etykieta może być dowolnym tekstem do 8 znaków (1, 2, 3 albo A1, A2, albo 10, 20).
- Wpisujesz etykiety i rozstawy między nimi, a nie współrzędne. Pierwsza linia każdego zestawu leży w 0.
- Linie numerowane to linie o stałym x; linie literowe to linie o stałym y. Zatem belka od siatki 1 do 2 biegnie wzdłuż x, a belka od A do B biegnie wzdłuż y.
- Wszystkie wartości są w milimetrach.

Nowy model zaczyna się od linii numerowanych 1 2 3 co 6000 6000, linii literowych A B co 6000 i dwóch poziomów.

## Ustawianie siatek

1. W panelu {{ui:Model}} po lewej otwórz {{ui:Siatki}}, jeśli jest zwinięty.
2. W polu {{ui:Linie numerowane}} wpisz etykiety oddzielone spacjami, na przykład `1 2 3 4 5`.
3. W polu {{ui:Rozstawy}} pod nim wpisz jeden rozstaw dla każdej przerwy, na przykład `6000 6000 7500 6000`. Cztery przerwy dla pięciu linii.
4. Zrób to samo w {{ui:Linie literowe}} i jego {{ui:Rozstawach}}, na przykład `A B C` i `8000 8000`.
5. Wybierz {{ui:Zastosuj siatki}}.

Pasek stanu podaje „Siatki zaktualizowano.”, a widok przybliża się do nowej siatki. Przecinki też działają jako separatory.

Jeśli coś się nie zgadza, nic się nie zmienia, a pasek stanu podaje powód, na przykład „Siatki numerowane: podaj jeden rozstaw między każdą parą linii (4).” Inne sprawdzenia: rozstawy muszą być dodatnie w milimetrach, etykiety muszą być różne, a linii może być co najwyżej 60 w każdym kierunku.

:::note
Elementy zachowują swoje współrzędne, gdy siatki się przesuną. Jeśli zmienisz rozstaw po umieszczeniu stali, stal pozostanie tam, gdzie była, i nie będzie już na siatce. Najpierw zmień siatkę albo przesuń elementy, edytując współrzędne ich końców.
:::

## Ustawianie poziomów

1. Otwórz {{ui:Poziomy}} w panelu {{ui:Model}}.
2. Każdy wiersz ma nazwę poziomu i jego rzędną w milimetrach. Edytuj je dowolnie.
3. Wybierz {{ui:Dodaj poziom}}, aby dodać kolejny wiersz. Otrzymuje nazwę „Poziom 3” (i tak dalej) i jest umieszczony 4000 mm powyżej najwyższego poziomu; zmień jedno i drugie, jeśli trzeba.
4. Aby usunąć poziom, wybierz przycisk × na końcu jego wiersza.
5. Wybierz {{ui:Zastosuj poziomy}}.

Nic się nie zmienia, dopóki nie wybierzesz {{ui:Zastosuj poziomy}}. Poziomy są sortowane według rzędnej po zastosowaniu. Każdy poziom potrzebuje nazwy, dwa poziomy nie mogą mieć tej samej nazwy, a musi pozostać co najmniej jeden poziom.

Poziomy mogą być poniżej zera (piwnica na `-3500`) i nie muszą być rozmieszczone równomiernie.

## Jak używa się poziomów

- Słup umieszczony na poziomie sięga do następnego poziomu albo do poziomu, który wybierzesz w {{ui:Do}}.
- Belki i blachy są umieszczane między dwoma przecięciami na poziomie, który klikniesz. Wskaż poziom, na którym chcesz je umieścić.
- Ławy są umieszczane tak, że ich góra jest na poziomie, który wskażesz.
- {{ui:Rzut}} pokazuje z góry jeden poziom naraz.
- Eksport IFC tworzy jedną kondygnację budynku dla każdego poziomu.

## Cofanie

Zmiany siatek i poziomów są edycjami jak każde inne: {{key:Mod+Z}} przywraca poprzednią siatkę.

## Dalej

[Umieszczanie słupów, belek i stężeń](topic:place-members)
