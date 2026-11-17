---
title: Zaznaczanie oknem, przesuwanie, obrót, lustro, zmiana wielu elementów
summary: Przeciągnij okno, aby zaznaczyć, przeciągnij zaznaczone elementy, przesuń, obróć lub odbij zaznaczenie (albo jego kopię) albo zmień profil, materiał, położenie lub obrót wielu elementów naraz.
keywords: lasso, płot, zaznaczanie odręczne, przeciąganie, przeciągnij i upuść, przesuwanie przeciąganiem, przyciąganie, okno, przecięcie, zaznaczanie pudełkiem, przeciągnij, zaznacz wiele, przesuń, obróć, lustro, odbij, kopiuj, zmień wiele, kilka elementów, profil, materiał, położenie, obrót, różne, linia siatki
from: 50b16f9a
---

Każda z tych czynności to jeden krok cofania: jedno {{key:Mod+Z}} cofa wszystko.

## Zaznaczanie oknem

- W {{ui:Rzut}} i {{ui:Elewacja}} przeciągnij lewym przyciskiem z pustego miejsca. W {{ui:3D}} przytrzymaj {{key:Shift}} i przeciągnij (zwykłe przeciągnięcie obraca model).
- Przeciągnij **w prawo** dla okna: zabiera to, co jest w całości w środku, rysowane ciągłą krawędzią.
- Przeciągnij **w lewo** dla okna przecięcia: zabiera wszystko, czego dotyka, rysowane przerywaną linią.
- Przytrzymaj {{key:Shift}} na początku przeciągania, aby dodać do zaznaczenia zamiast je zastąpić.
- Rzut lub elewacja pokazuje tylko to, co widać: elementy odcięte nad rzutem albo dalej niż 1 m od linii siatki elewacji nie są wybierane.
- {{key:Esc}} w trakcie przeciągania porzuca okno.

### Zaznaczanie odręczne (lasso)

Wybierz **Lasso** w sekcji {{ui:Przeciąganie do zaznaczania}} w [ustawieniach DetailCraft](topic:settings), a to samo przeciągnięcie rysuje odręczną linię zamiast prostokąta.

- Jego pierwszy ruch w bok decyduje o sposobie zaznaczania: **w prawo** — to, co jest w całości w środku (linia ciągła); **w lewo** — to, czego dotyka (linia przerywana).
- Naciśnij {{key:Space}} w trakcie przeciągania, aby przełączać między wnętrzem, dotykaniem a **płotem**: otwartą linią, która zabiera wszystko, co przecina (kropkowana, pomarańczowa).
- {{key:Shift}}, aby dodać, i {{key:Esc}}, aby porzucić, działają tak jak przy oknie.

:::touch
Na ekranie dotykowym jeden palec przesuwa rzut i elewację jak dotąd; zaznaczaj elementy dotknięciem.
:::

W {{ui:Rzut}} i {{ui:Elewacja}} przesuwaj widok prawym lub środkowym przyciskiem, gdy włączone jest narzędzie {{ui:Zaznacz}}.

## Przeciąganie elementów, aby je przesunąć

1. Najpierw zaznacz elementy (kliknięciem, {{key:Shift}}+kliknięciem lub oknem).
2. Naciśnij na jednym z zaznaczonych elementów i przeciągnij. Całe zaznaczenie się przesuwa; przerywany zarys pokazuje, dokąd trafi.
3. Puść, aby położyć. {{key:Esc}} przed puszczeniem przywraca wszystko.

- W {{ui:3D}} i {{ui:Rzut}} elementy przesuwają się po poziomie. Przytrzymaj {{key:Mod}} na początku przeciągania w {{ui:3D}}, aby przesuwać je w górę i w dół.
- W {{ui:Elewacja}} przesuwają się w obrębie elewacji: wzdłuż linii siatki oraz w górę i w dół.
- Trzymany element przyciąga się do przecięcia siatki, gdy jego koniec znajdzie się kilka pikseli od niego (przecięcie się podświetla, a pasek stanu je nazywa). Poza tym ruch idzie co 10 mm.
- Naciśnięcie na element niezaznaczony nadal obraca lub przesuwa widok, więc przeciągnięcie nigdy nie przesunie czegoś przez przypadek.
- Przeciągnięcie to jeden krok cofania, jak {{ui:Przesuń}}. Połączenia podążają za swoimi elementami.

## Zmiana właściwości wielu elementów

Zaznacz dwa lub więcej elementów. Pod **Zmień we wszystkich** w panelu {{ui:Właściwości}}:

- {{ui:Przekrój}}, {{ui:Położenie}}: dla belek, słupów i stężeń wśród nich.
- {{ui:Grubość blachy (mm)}} i {{ui:Szerokość blachy (mm)}}: dla blach.
- {{ui:Materiał}} i {{ui:Obrót (°)}}: dla wszystkich.

Pole pokazuje **Różne**, gdy elementy się nie zgadzają. Wybierz lub wpisz wartość, a każdy element, którego dotyczy, ją przyjmie; pasek stanu podaje, ile zmieniono i ile zachowało swoje.

Pola liczbowe w panelu {{ui:Właściwości}} przyjmują też obliczenia: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Obliczenie, którego nie da się odczytać, zostaje odrzucone, a pasek stanu wskazuje, gdzie jest błąd.

## Przesuń, obróć lub odbij lustrzanie

Zaznacz elementy i ławy (także pojedynczy), a potem użyj **Przesuń, obróć, lustro** w panelu {{ui:Właściwości}}. Połączenia nie są przesuwane same: podążają za swoimi elementami. Jeśli przesuniesz belkę, a nie jej słup, pasek stanu podaje, ile połączeń łączy teraz przesunięty element z tym, który został, a [Problemy](topic:troubleshooting) mówi, czy już do siebie nie pasują.

- **Przesuń:** wpisz x, y i z w milimetrach i wybierz {{ui:Przesuń}}. Albo wybierz {{ui:Wskaż dwa punkty}} (lub naciśnij {{key:M}}): kliknij przecięcie siatki, z którego przesuwasz, a potem to, dokąd. Przerywany zarys podąża za wskaźnikiem.
- **Obrót w rzucie:** wpisz kąt (przeciwnie do ruchu wskazówek zegara, patrząc z góry) i wybierz, wokół czego obracać: środka zaznaczenia lub przecięcia siatki. Słupy obracają się razem z układem.
- **Lustro:** wybierz linię siatki. Odbicie lustrzane to ten sam profil obrócony w drugą stronę: dwuteownik zachowuje półki, ceownik jest zwrócony w drugą stronę (jego góra i dół zamieniają się), a otwory i wycięcia idą razem z elementem.
- Zaznacz **Zachowaj oryginał (utwórz kopię)**, aby zostawić zaznaczenie w miejscu i przesunąć, obrócić lub odbić kopię. Jej połączenia przejdą razem z nią, gdy w [ustawieniach DetailCraft](topic:settings) włączone jest {{ui:Kopiuj blachy czołowe i podstaw razem z ich elementami}}.

Obrót odbywa się wokół pionowej osi, a lustro w płaszczyźnie pionowej, więc poziomy pozostają poziome, a ławy stoją pionowo.
