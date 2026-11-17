---
title: Dodawanie otworów i wycięć
summary: Wpisz otwory w środnikach, pasach i blachach oraz wytnij pasy na końcu belki, mierząc od końca cięcia elementu.
keywords: otwór, otwory, otwór na śrubę, wycięcie, wycinanie, cięcie, wycięcie narożne, wiercenie, przebicie, otwór w środniku, otwór w pasie
from: 33d12398
---

Otwory i wycięcia wpisuje się według położenia. Należą do elementu i przesuwają się razem z nim.

Otwory wykonane przez połączenia (blachy czołowe, blachy podstawy) są dodawane za Ciebie; nie wpisujesz ich ręcznie. Są wymienione jako „… otwory z połączeń (edytuj połączenie)”.

## Skąd mierzy się położenia

- **x** biegnie wzdłuż elementu od jego **początku cięcia**: końca początkowego po ewentualnym przycięciu przez połączenie. Zatem x = 0 to rzeczywisty koniec stali, a nie punkt siatki.
- **y** jest mierzone w poprzek powierzchni od środka przekroju:
   - na **środniku**: w górę (dodatnio) lub w dół od połowy wysokości;
   - na **pasie** lub **blasze**: w poprzek szerokości, od linii środkowej.
- Początek elementu to pierwszy punkt, który kliknąłeś przy jego umieszczaniu. Wiersze {{ui:Końce (x, y, z mm)}} pokazują, który koniec jest którym.

## Dodawanie otworu

1. Zaznacz element.
2. W polu {{ui:Otwory}} panelu {{ui:Właściwości}} wybierz {{ui:Powierzchnia}}: {{ui:Środnik}}, {{ui:Górny pas}} lub {{ui:Dolny pas}} (dla kształtu dwuteowego, ceownika lub prostokątnej rury) albo {{ui:Powierzchnia blachy}} (dla blachy).
3. Wpisz {{ui:x wzdłuż (mm)}}, {{ui:y w poprzek (mm)}} i {{ui:Średnica (mm)}}. Formularz startuje z x 100, y 0, średnicą 22.
4. Wybierz {{ui:Dodaj otwór}}.

Pasek stanu podaje „Dodano otwór. x liczone od początku cięcia; y od środka przekroju (środnik: w górę, pas/blacha: w poprzek).” Otwór pojawia się na liście i w widoku jako ciemna zatyczka przez powierzchnię.

Aby usunąć otwór, wybierz × przy nim na liście.

Kątowniki i rury okrągłe nie przyjmują jeszcze otworów; ich pole {{ui:Otwory}} o tym informuje.

:::note
W widoku 3D otwory są rysowane jako ciemne zatyczki, a nie wycięte w stali. Są to rzeczywiste otwory w plikach NC, rysunkach warsztatowych i w eksporcie IFC.
:::

Otwór, którego x leży poza jednym z końców elementu, pojawia się w karcie {{ui:Problemy}} jako „otwór poza końcem elementu”.

## Dodawanie wycięcia

Wycięcia dotyczą kształtów dwuteowych: wycinają górny lub dolny pas (i tę głębokość środnika) na jednym końcu, aby belka mieściła się obok innego elementu.

1. Zaznacz element o kształcie dwuteowym.
2. W polu {{ui:Wycięcia}} wybierz {{ui:Koniec}} ({{ui:Początek}} lub {{ui:Koniec}}) i {{ui:Strona}} ({{ui:Góra}} lub {{ui:Dół}}).
3. Wpisz {{ui:Długość (mm)}} (wzdłuż belki od tego końca) i {{ui:Głębokość (mm)}} (w dół od góry albo w górę od dołu). Formularz startuje od 100 x 40.
4. Wybierz {{ui:Dodaj wycięcie}}.

Widok pokazuje wycięcie wycięte w stali. Lista podaje na przykład „Góra na początku: 100 x 40”. Usuń je przyciskiem ×.

Wycięcia są prostokątne: narożnik wewnętrzny nie ma jeszcze promienia.

## Jak otwory i wycięcia wpływają na oznaczenia

Dwie części dostają to samo oznaczenie elementu tylko wtedy, gdy ich otwory i wycięcia pasują do siebie z dokładnością 1 mm, z uwzględnieniem obrócenia elementu. Dodanie otworu do jednej belki z grupy nadaje jej nowe oznaczenie. Zobacz [Zasady oznaczeń](topic:mark-rules).
