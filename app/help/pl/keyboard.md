---
title: Klawisze i działania myszy
summary: Każdy skrót klawiszowy oraz działania myszą, gładzikiem i dotykiem w DetailCraft, z kodu.
keywords: klawiatura, skróty, klawisze, mysz, gładzik, dotyk, ctrl, command, ściągawka
from: 05a2dea0
---

Jak klawisze są zapisane w tej pomocy: [Klawisze, myszy i gładziki](common:keys). Na Macu {{key:Mod}} to Command; w pozostałych systemach to Ctrl.

## Narzędzia

Działają, gdy kursor nie jest w polu tekstowym ani liczbowym.

| Klawisz | Działanie |
|---|---|
| {{key:V}} | {{ui:Zaznacz}} |
| {{key:B}} | {{ui:Belka}} |
| {{key:C}} | {{ui:Słup}} |
| {{key:R}} | {{ui:Stężenie}} |
| {{key:P}} | {{ui:Blacha}} |
| {{key:F}} | {{ui:Ława}} |
| {{key:S}} | {{ui:Schody}} |
| {{key:M}} | Przesuń zaznaczenie, wskazując dwa przecięcia siatek ([Zaznacz oknem, przesuń, obróć, odbij i zmień wiele](topic:select-and-change)) |
| {{key:Esc}} | Porzuć przeciągane okno zaznaczenia albo wróć przeciągnięte elementy na miejsce; anuluj przesunięcie, pierwszy punkt belki, stężenia lub blachy albo wklejanie; naciśnij ponownie, aby wrócić do {{ui:Zaznacz}}; w {{ui:Zaznacz}} wyczyść zaznaczenie. Gdy menu {{ui:Więcej}} jest otwarte, zamknij je |
| {{key:Delete}} lub {{key:Backspace}} | Usuń zaznaczenie (wszystko, co zaznaczone, w jednym kroku cofnięcia) |

## Plik i edycja

| Klawisz | Działanie |
|---|---|
| {{key:Mod+S}} | Zapisz model (pobranie). Działa nawet podczas wpisywania w polu |
| {{key:Mod+O}} | Otwórz model. Działa nawet podczas wpisywania w polu |
| {{key:Mod+Z}} | Cofnij (poza polami tekstowymi; w polu cofa wpisywanie) |
| {{key:Mod+Y}} lub {{key:Mod+Shift+Z}} | Ponów |

## Kopiowanie i wklejanie

Działają, gdy kursor nie jest w polu tekstowym ani liczbowym (tam kopiują, wklejają i zaznaczają tekst jak zwykle). Każde wklejenie, wycięcie, duplikowanie lub usunięcie to jeden krok cofnięcia. Więcej: [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

| Klawisz | Działanie |
|---|---|
| {{key:Mod+C}} | {{ui:Kopiuj}} zaznaczone elementy i ławy (z ich otworami, wycięciami i połączeniami) |
| {{key:Mod+X}} | {{ui:Wytnij}}: skopiuj zaznaczenie, a potem je usuń |
| {{key:Mod+V}} | {{ui:Wklej}}: kopia podąża za wskaźnikiem; kliknij przecięcie siatki, aby ją umieścić |
| {{key:Mod+Shift+V}} | {{ui:Wklej w miejscu}}: we współrzędnych, z których została skopiowana |
| {{key:Mod+D}} | {{ui:Duplikuj}}: natychmiastowa kopia, przesunięta o odsunięcie z [ustawień DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Zaznacz wszystko}}: każdy element, połączenie i ława |
| {{key:Esc}} | {{ui:Odznacz wszystko}} |

Jeśli zaznaczysz tekst na stronie (na przykład w tabeli raportu), a nic w modelu, {{key:Mod+C}} kopiuje tekst, jak zwykle.

{{ui:Nowy}}, {{ui:Przykład}} i eksporty nie mają klawiszy; użyj paska narzędzi.

Żaden z tych klawiszy nie działa, gdy otwarte jest okno dialogowe (podgląd rysunku warsztatowego lub pytanie).

## Pola i panele

| Klawisz | Działanie |
|---|---|
| {{key:Enter}} lub {{key:Tab}} | Zastosuj wpisaną wartość (każda zmiana to jeden krok cofnięcia) |
| {{key:Enter}} w polu {{ui:Siatki}}, {{ui:Poziomy}}, {{ui:Profil niestandardowy}}, otworu lub wycięcia | To samo, co naciśnięcie przycisku tego formularza |
| {{key:Left}} {{key:Right}} | Przechodzi między kartami {{ui:Problemy}}, {{ui:Zestawienie materiałów}} i {{ui:Zestawienie gięcia}}, gdy karta ma fokus |
| {{key:Esc}} | Zamyka podgląd rysunku warsztatowego lub okno pytania (tak samo jak {{ui:Anuluj}}) |

## Ekran i pomoc

| Klawisz | Działanie |
|---|---|
| {{key:Ctrl+Shift+F}} | Przełącza kolejno: tryb normalny, pełny ekran, pełny ekran z ukrytymi paskami. Ctrl na każdym komputerze, także na Macu |
| {{key:Mod+,}} | Otwórz {{ui:Ustawienia}} ([ustawienia DetailCraft](topic:settings)) |
| {{key:Esc}} | Wyjdź z pełnego ekranu |
| {{key:F1}} | Otwórz tę pomoc |

## Mysz

| Działanie | W 3D | W rzucie i elewacji |
|---|---|---|
| Kliknięcie | Zaznacz element albo umieść go w najbliższym przecięciu, gdy włączone jest narzędzie umieszczania (albo wklej tam, gdy wklejasz) | To samo |
| {{key:Shift}}, {{key:Ctrl}} lub {{key:Mod}} i kliknięcie | Dodaj element do zaznaczenia albo usuń go z zaznaczenia | To samo |
| Naciśnij na zaznaczonym elemencie i przeciągnij | Przesuń zaznaczenie w poziomie; z przytrzymanym {{key:Mod}} — w górę i w dół | Przesuń zaznaczenie (w elewacji: wzdłuż niej oraz w górę i w dół) |
| Przeciągnij lewym przyciskiem | Obróć model | Przy {{ui:Zaznacz}}: okno zaznaczenia (w prawo: w całości wewnątrz; w lewo: dotykające). Podczas umieszczania: przesuń widok |
| {{key:Shift}} i przeciągnij lewym przyciskiem | Przy {{ui:Zaznacz}}: okno zaznaczenia, dodawane do zaznaczenia. Podczas umieszczania: przesuń widok | Przy {{ui:Zaznacz}}: okno zaznaczenia, dodawane do zaznaczenia |
| {{key:Ctrl}} lub {{key:Mod}} i przeciągnij lewym przyciskiem | Przesuń widok | Nic |
| Przeciągnij prawym przyciskiem | Przesuń widok | Przesuń widok |
| Kółko | Powiększ w stronę środka widoku | Powiększ |
| Przeciągnij środkowym przyciskiem | Powiększ | Przy {{ui:Zaznacz}}: przesuń widok. W przeciwnym razie powiększ |
| Upuść plik `.detailcraft.json` na aplikację | Otwórz go | Otwórz go |

Kliknięcie liczy się tylko wtedy, gdy wskaźnik przesunie się między naciśnięciem a puszczeniem o mniej niż około 5 pikseli; dłuższy ruch to przeciągnięcie.

## Gładzik

| Działanie | Co robi |
|---|---|
| Dwa palce w górę lub w dół albo szczypnięcie | Powiększ |
| Naciśnij i przeciągnij | Obróć (3D) lub przesuń (rzut i elewacja) |
| {{key:Shift}} i naciśnij, i przeciągnij | Przesuń w 3D |
| Kliknięcie dwoma palcami | Kliknięcie prawym przyciskiem (w widoku nie ma menu) |

## Dotyk

Na tablecie lub ekranie dotykowym:

| Działanie | Co robi |
|---|---|
| Stuknięcie | Zaznacz element albo umieść go w najbliższym przecięciu siatki, gdy włączone jest narzędzie umieszczania (stuknięcie w odległości około szerokości palca się liczy) |
| Długie przytrzymanie na elemencie | Dodaj go do zaznaczenia albo usuń (to, co {{key:Shift}}+kliknięcie robi myszą) |
| Jeden palec na zaznaczonym elemencie, potem przeciągnięcie | Przesuń zaznaczenie, przyciągając do przecięć siatki |
| Jeden palec gdzie indziej | Obróć model (3D) lub przesuń (rzut i elewacja) |
| Dwa palce | Szczypnięcie, aby powiększyć; przesunięcie razem, aby przesunąć widok |

Przyciski, listy i pola są większe, gdy ekran obsługuje tylko dotyk. Okna zaznaczenia wymagają myszy; palcami stuknij i przytrzymaj.

## Klawisze, które zachowuje przeglądarka

Niektóre skróty należą do przeglądarki i żadna strona ich nie użyje, na przykład {{key:Mod+W}} (zamknij kartę), {{key:Mod+T}} (nowa karta) i {{key:Mod+N}} (nowe okno). Jeśli {{key:Mod+Y}} otwiera historię przeglądarki zamiast ponawiać, użyj {{key:Mod+Shift+Z}}.

Skróty docierają do DetailCraft tylko wtedy, gdy strona ma klawiaturę. Jeśli klawisz nic nie robi albo działa przeglądarka, najpierw kliknij pusty fragment okna DetailCraft (na przykład po wpisaniu czegoś w pasku adresu).

## Gdzie jest przesuwanie

Nie ma polecenia Przesuń: zaznacz element i przeciągnij go po poziomie (przytrzymaj {{key:Mod}}, aby przeciągać w górę i w dół) albo edytuj jego {{ui:Początek}} i {{ui:Koniec}} w {{ui:Właściwości}}.
