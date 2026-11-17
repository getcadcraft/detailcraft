---
title: Eksport pliku KISS dla oprogramowania do produkcji
summary: Wyślij zestawienie materiałów do programu do zarządzania produkcją (MIS) jako plik KISS 1.1: zespoły, elementy, fazy jako sekwencje, otwory, wycięcia i spoiny.
keywords: kiss, kss, mis, zarządzanie produkcją, kontrola produkcji, kosztorysowanie, zestawienie materiałów, zestawienie, eksport, fabtrol, sekwencja
from: 30cf3951
---

W grupie {{ui:Wyjście}} otwórz {{ui:Więcej}} i wybierz {{ui:Plik KISS dla oprogramowania do produkcji}}. DetailCraft pobiera `<name>.kss`, plik KISS („Keep It Simple, Steel”, wersja 1.1), czyli zwykły tekst, z którego większość programów do zarządzania produkcją importuje zestawienie materiałów.

## Co zawiera

- Nagłówek: numer zlecenia (pierwsze osiem liter i cyfr nazwy modelu), nazwę modelu, datę i godzinę oraz to, czy wymiary są metryczne.
- Dla każdego znacznika zespołu: jego główny element (ilość = ile sztuk zespołu), wiersz rysunku (A-B1 itd., numer rysunku zespołu), wiersz zespołu (nazwa, typ, masa, długość całkowita, wysokość i szerokość), jeden wiersz sekwencji dla każdej [fazy](topic:phases), w której jest zespół, oraz wiersze robocizny: otwory (ile, średnica, grubość na wylot), wycięcia i spoiny.
- Następnie każdy element przypisany do zespołu z **łączną** ilością (na zespół × liczba zespołów), zgodnie z normą.
- Luźne śruby i kotwy na rysunku BOLTS, zespół FIELD.
- Każdy wiersz podaje typ (W, C, L, HSS, PL lub MI dla profilu niestandardowego), rozmiar, gatunek, długość cięcia w milimetrach, nazwę elementu i masę.

## Cale czy metry

W [ustawieniach DetailCraft](topic:settings) **Rozmiary w pliku KISS** wybiera:

- **Automatycznie** (domyślnie): imperialne, gdy każdy element to profil AISC, w przeciwnym razie metryczne.
- **Imperialne**: profile wg oznaczenia AISC (W 16X26, HSS 4X4X.250); blachy i śruby, które DetailCraft trzyma w milimetrach, zaokrąglone do najbliższego 1/16 cala; masy w funtach.
- **Metryczne**: profile europejskie wg nazwy (IPE300), blachy jako grubość × szerokość w milimetrach; masy w kilogramach.

Długości są zawsze w milimetrach, z dwoma miejscami po przecinku, niezależnie od ustawienia: wymaga tego norma KISS, a program odbierający je przelicza.

:::note
Gatunki są skracane do ośmiu znaków normy: A572 Gr 50 staje się A572-50. Przecinki w nazwach zamieniane są na spacje (format nie obsługuje cudzysłowów). Przed poleganiem na pliku sprawdź jeden import w swoim programie: pliki KISS z DetailCraft są tutaj sprawdzane według normy, a jeszcze nie w programie do produkcji.
:::
