---
title: Poruszanie się po widoku 3D
summary: Obracaj, przesuwaj i powiększaj myszą, gładzikiem lub ekranem dotykowym i dowiedz się, kiedy zamiast tego użyć Rzutu i Elewacji.
keywords: orbita, obrót, przesuwanie, powiększanie, nawigacja, widok, kamera, gładzik, dotyk, rzut, elewacja, dopasuj, mysz
from: 02c9c7b9
---

Widok ma trzy tryby, wybierane na pasku widoku nad nim: {{ui:3D}}, {{ui:Rzut}} i {{ui:Elewacja}}. Przyciski myszy działają w 3D inaczej niż w rzucie i elewacji, więc przeczytaj obie tabele.

## W 3D

:::mouse
| Aby | Zrób to |
|---|---|
| Obrócić model | Przeciągnij lewym przyciskiem |
| Przesunąć widok | Przeciągnij prawym przyciskiem albo przytrzymaj {{key:Shift}} i przeciągnij lewym |
| Powiększyć | Obróć kółko albo przeciągnij w górę i w dół środkowym przyciskiem (z wciśniętym kółkiem) |
| Zaznaczyć element | Kliknij go (kliknięcie, które przesuwa mniej niż kilka pikseli) |
| Zobaczyć cały model | Przycisk dopasowania na prawym końcu paska widoku |
:::

:::touch
| Aby | Zrób to |
|---|---|
| Obrócić model | Przeciągnij jednym palcem |
| Przesunąć widok | Przeciągnij dwoma palcami |
| Powiększyć | Szczypnij dwoma palcami |
| Zaznaczyć element | Stuknij go |
| Zobaczyć cały model | Przycisk dopasowania na prawym końcu paska widoku |
:::

Kostka widoku w prawym górnym rogu (pod paskiem widoku) obraca się razem z modelem: kliknij ścianę, krawędź lub narożnik, aby spojrzeć stamtąd, przeciągnij ją, aby obrócić, albo kliknij jej przycisk domu, aby wrócić do startu. Zobacz [Kostka widoku](topic:view-cube).

Model obraca się wokół środka widoku, a kółko powiększa w stronę środka widoku, nie w stronę wskaźnika. Aby przyjrzeć się dokładnie jednemu narożnikowi, najpierw przesuń go na środek, a potem powiększ.

## W rzucie i elewacji

Te widoki patrzą prosto na model i nie można ich obracać.

:::mouse
| Aby | Zrób to |
|---|---|
| Przesunąć widok | Przeciągnij lewym lub prawym przyciskiem |
| Powiększyć | Obróć kółko albo przeciągnij w górę i w dół środkowym przyciskiem |
| Zaznaczyć element | Kliknij go |
:::

:::touch
| Aby | Zrób to |
|---|---|
| Przesunąć widok | Przeciągnij jednym palcem |
| Powiększyć | Szczypnij dwoma palcami (przeciąganie dwoma palcami też przesuwa widok) |
| Zaznaczyć element | Stuknij go |
:::

## Na gładziku Maca

:::mac
- **Powiększanie:** przesuń dwoma palcami w górę lub w dół albo szczypnij. Oba trafiają do widoku jako powiększanie.
- **Obrót (3D):** naciśnij gładzik i przeciągnij jednym palcem. Jeśli używasz stuknięcia zamiast kliknięcia, działa też dwukrotne stuknięcie i przeciągnięcie, gdy przeciąganie jest włączone w Ustawieniach systemowych: Dostępność, Sterowanie wskaźnikiem, Opcje gładzika.
- **Przesunięcie (3D):** przytrzymaj {{key:Shift}} i przeciągnij. Przytrzymanie {{key:Ctrl}} albo {{key:Mod}} podczas przeciągania też przesuwa widok. Kliknięcie dwoma palcami to kliknięcie prawym, ale przeciąganie nim na gładziku jest niewygodne.
- **Przesunięcie (rzut i elewacja):** wystarczy przeciągnąć.
- Magic Mouse nie ma środkowego przycisku: użyj przeciągania z {{key:Shift}}, aby przesunąć, a przesunięcia palcem po jego powierzchni, aby powiększyć.
:::

Więcej o kliknięciu prawym przyciskiem i przesuwaniu bez myszy: [Klawisze, myszy i gładziki](common:keys).

## Rzut i elewacja ułatwiają umieszczanie

W {{ui:3D}} przecięcia na różnych poziomach mogą leżeć jedno na drugim na ekranie, a kliknięcie trafia do najbliższej kropki. W {{ui:Rzut}} i {{ui:Elewacja}} można wskazać tylko kropki poziomu albo linii siatki, na którą patrzysz.

1. Wybierz {{ui:Rzut}}, potem poziom z listy obok przycisków. Widok patrzy w dół na ten poziom; wszystko powyżej 1.5 m nad nim jest wycięte.
2. Albo wybierz {{ui:Elewacja}}, potem literowaną linię siatki („Siatka A”, „Siatka B” …). Widok patrzy prosto na tę linię; pokazywana jest tylko stal w odległości 1 m od niej.

Elewacje są tylko na literowanych liniach siatki. Aby pracować nad linią ponumerowanych siatek (rama od A do B), użyj {{ui:3D}} albo umieszczaj elementy, wpisując współrzędne w formularzu {{ui:Dodaj według siatki}}. Zobacz [Umieszczanie słupów, belek i stężeń](topic:place-members#place-by-grid-without-clicking).

## Zaznaczanie

- Kliknij element, aby go zaznaczyć. Podświetla się kolorem zaznaczenia, a panel {{ui:Właściwości}} go pokazuje.
- Kliknij puste miejsce albo naciśnij {{key:Esc}}, aby wyczyścić zaznaczenie.
- Stal wygrywa z betonem: kliknięcie słupa w przeźroczystej ławie zaznacza słup. Kliknij ławę z dala od słupa albo na jednym z jej prętów, aby zaznaczyć ławę.
- Kliknięcie śruby lub blachy czołowej zaznacza jej połączenie.
- W rzucie i elewacji elementy odcięte nie mogą być klikane.
- Przytrzymaj {{key:Shift}} (albo {{key:Ctrl}}, albo {{key:Mod}}) i kliknij, aby dodać element do zaznaczenia lub go usunąć; {{key:Mod+A}} zaznacza wszystko. Zaznaczania oknem (przeciągnięciem ramki) jeszcze nie ma. Co można zrobić z kilkoma elementami naraz: [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

Możesz też zaznaczać z list: kliknij znacznik na liście {{ui:Znaczniki elementów}} po lewej, znacznik elementu w karcie {{ui:Zestawienie materiałów}} albo {{ui:Zaznacz}} obok wiersza w {{ui:Problemy}}.

## Gdy widok wygląda źle

- Zgubiłeś model? Wybierz przycisk dopasowania.
- Widok jest pusty albo szary z komunikatem o WebGL: zobacz [Rozwiązywanie problemów](topic:troubleshooting#the-3d-view-is-missing).
- Wszystko nadal działa bez widoku 3D, poza klikaniem w nim: panele, raporty i eksporty działają, a {{ui:Dodaj według siatki}} umieszcza elementy przez wpisywanie.
