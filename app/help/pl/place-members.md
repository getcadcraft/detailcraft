---
title: Umieszczanie słupów, belek i stężeń
summary: Wybierz przekrój, materiał i położenie, a następnie kliknij przecięcia siatki lub wpisz je, aby umieścić elementy stalowe.
keywords: słup, belka, stężenie, element, umieść, przekrój, materiał, obrót, położenie, odsunięcie, wstaw, dodaj według siatki
from: d6db0dc1
---

Elementy umieszcza się na przecięciach siatki: słup na jednym, belkę lub stężenie między dwoma. Najpierw ustaw [siatki i poziomy](topic:grids-and-levels).

## Wybierz narzędzie i jego opcje

1. W grupie {{ui:Umieść}} wybierz {{ui:Słup}} ({{key:C}}), {{ui:Belka}} ({{key:B}}) lub {{ui:Stężenie}} ({{key:R}}).
2. Panel {{ui:Właściwości}} po prawej zmienia się w „Umieść słup” (lub belkę, lub stężenie) i pokazuje opcje następnego elementu:
   - {{ui:Przekrój}}: wybierz z listy. Rozmiary są pogrupowane według katalogu (kształty W, ceowniki, kątowniki, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS oraz profile niestandardowe). Zobacz [Katalog profili](topic:profile-catalog).
   - {{ui:Materiał}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 lub S355.
   - {{ui:Położenie}}: gdzie przekrój leży względem linii między dwoma punktami: {{ui:Góra stali na linii}}, {{ui:Wyśrodkowany na linii}} lub {{ui:Dół na linii}}.
   - {{ui:Obrót (°)}}: obraca przekrój wokół własnej osi elementu.
   - {{ui:Do}} (tylko słupy): {{ui:Następny poziom w górę}} albo nazwa poziomu.
3. Pod opcjami pole {{ui:Przekrój}} wymienia wymiary wybranego przekroju, pole, masę na metr i katalog, z którego pochodzi.

Domyślnie są to W12x50 w A992 dla słupów (wyśrodkowany), W16x26 w A992 dla belek (góra stali na linii) i HSS6x6x1/4 w A500 Gr C dla stężeń (wyśrodkowany). Opcje pozostają ustawione, dopóki ich nie zmienisz.

## Umieszczanie przez kliknięcie

### Słup

1. Wybierz {{ui:Rzut}} i poziom, na którym zaczyna się słup.
2. Wybierz {{ui:Słup}}.
3. Przesuń wskaźnik w pobliże przecięcia. Najbliższa kropka się podświetla, a pasek stanu ją nazywa.
4. Kliknij. Słup biegnie od tego poziomu do następnego w górę (albo do poziomu {{ui:Do}}). Pasek stanu podaje na przykład: „Słup W12x50 na A/1, poziom 1 do poziomu 2.”
5. Klikaj dalej, aby umieścić kolejne. Gdy skończysz, naciśnij {{key:Esc}}.

Jeśli nie ma poziomu powyżej klikniętego, pasek stanu pokazuje: „Brak poziomu powyżej poziomu 2, do którego słup mógłby sięgnąć. Najpierw dodaj poziom.”

### Belka

1. Wybierz {{ui:Rzut}} i poziom belki.
2. Wybierz {{ui:Belka}}.
3. Kliknij pierwsze przecięcie. Pasek stanu pokazuje: „Od A/1 na poziomie 2. Teraz kliknij drugi koniec (Esc anuluje).” Za wskaźnikiem podąża linia przerywana.
4. Kliknij drugie przecięcie. Belka się pojawia.
5. Kliknij ponownie, aby zacząć kolejną belkę, lub naciśnij {{key:Esc}}.

{{key:Esc}} po pierwszym kliknięciu anuluje tylko ten punkt; drugie {{key:Esc}} odkłada narzędzie.

### Stężenie

Stężenie biegnie między dwoma przecięciami na różnych poziomach, więc najłatwiej je umieścić w {{ui:Elewacja}}.

1. Wybierz {{ui:Elewacja}} i linię siatki z literą, na której leży stężenie.
2. Wybierz {{ui:Stężenie}}.
3. Kliknij dolny koniec, a potem górny.

Elewacje istnieją tylko dla linii siatki z literami. Dla stężenia w ramie wzdłuż linii z numerem (od A do B) użyj {{ui:3D}} albo formularza {{ui:Dodaj według siatki}} poniżej.

:::touch
Na ekranie dotykowym stuknij blisko przecięcia: stuknięcie wybiera najbliższą kropkę w niewielkiej odległości, a jeśli żadna nie jest blisko, nic się nie dzieje. Przed stuknięciem nie ma podświetlenia, więc po każdym stuknięciu sprawdź komunikat na pasku stanu. Przeciąganie jednym palcem obraca lub przesuwa widok zamiast umieszczać.
:::

## Umieszczanie według siatki, bez klikania

Każde narzędzie umieszczania ma formularz {{ui:Dodaj według siatki}} na dole panelu {{ui:Właściwości}}. Działa samą klawiaturą i nie wymaga widoku 3D.

1. Wybierz narzędzie, na przykład {{ui:Belka}}.
2. W {{ui:Dodaj według siatki}} wybierz {{ui:Od siatki (litera)}}, {{ui:Od siatki (liczba)}} i {{ui:Od poziomu}}.
3. Wybierz {{ui:Do siatki (litera)}}, {{ui:Do siatki (liczba)}} i {{ui:Do poziomu}}.
4. Wybierz {{ui:Dodaj}}.

Dla słupa lub stopy formularz ma tylko jeden punkt: {{ui:Siatka (litera)}}, {{ui:Siatka (liczba)}} i {{ui:Poziom}}.

## Zmiana elementu po umieszczeniu

1. Naciśnij {{key:Esc}} (albo wybierz {{ui:Zaznacz}}, {{key:V}}) i kliknij element.
2. W panelu {{ui:Właściwości}} zmień {{ui:Nazwa}}, {{ui:Przekrój}}, {{ui:Materiał}}, {{ui:Położenie}} lub {{ui:Obrót (°)}}.
3. Aby go przesunąć, edytuj x, y i z dla {{ui:Początek}} lub {{ui:Koniec}} w polu {{ui:Końce (x, y, z mm)}}. Nazwa siatki każdego końca pokazuje się pod spodem, a gdy jest poza siatką, jego współrzędne.

Każda zmiana to jeden krok cofnięcia. Pod polami wyświetlane są: {{ui:Znacznik}}, {{ui:Zespół}}, {{ui:Długość cięcia}}, {{ui:Masa}} (brutto: otworów i wycięć nie odejmuje się) oraz katalog, z którego pochodzi przekrój.

Elementów nie można jeszcze przeciągać ani układać w macierz. Aby utworzyć podobny element, skopiuj i wklej go albo zduplikuj ({{key:Mod+D}}): zobacz [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

## Usuwanie elementu

Zaznacz go i naciśnij {{key:Delete}} lub {{key:Backspace}}, albo wybierz {{ui:Usuń}}. Połączenia na nim też znikają. {{key:Mod+Z}} przywraca wszystko.

## Warto wiedzieć

- **W którą stronę zwrócony jest słup.** Przy {{ui:Obrót (°)}} 0 pasy słupa są zwrócone wzdłuż x, w stronę sąsiednich ponumerowanych linii siatki. Belka od siatki 1 do siatki 2 łączy się z pasem; belka od A do B łączy się ze środnikiem. Blachy czołowe buduje się tylko do pasów, więc jeśli belki biegną od A do B, ustaw tym słupom obrót 90.
- **Belki na poziomie wiszą poniżej niego** przy domyślnym {{ui:Góra stali na linii}}. Wybierz {{ui:Wyśrodkowany na linii}}, jeśli poziomy są osiami elementów.
- **Słupy biegną od poziomu do poziomu.** Dla słupa na dwie kondygnacje ustaw {{ui:Do}} na wyższy poziom.
- **Pochylone belki** są dozwolone (końce na różnych poziomach), ale blach czołowych na nich jeszcze nie buduje się.

Dalej: [Łączenie belek ze słupami za pomocą blach czołowych](topic:end-plates).
