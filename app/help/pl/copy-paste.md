---
title: Kopiowanie, wklejanie i duplikowanie
summary: Zaznacz kilka elementów, skopiuj je wraz z ich otworami, wycięciami i połączeniami, a następnie wklej na przecięciu siatki, z przesunięciem, w miejscu lub na innej karcie. Wytnij, duplikuj, usuń i zaznacz wszystko.
keywords: kopiuj, wklej, wytnij, duplikuj, schowek, wklej w miejscu, zaznacz wszystko, odznacz wszystko, zaznaczanie wielu, Shift, kliknięcie, kilka, powtórz przęsło, kopiuj ramę, przesunięcie, usuń kilka, menu edycji, menu więcej
from: f25f1829
---

Grupa {{ui:Edycja}} na pasku narzędzi zawiera {{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}} i {{ui:Wklej}}. Jej menu {{ui:Więcej}} zawiera resztę: {{ui:Wytnij}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Wklej w miejscu}}, {{ui:Duplikuj}}, {{ui:Usuń}}, {{ui:Zaznacz wszystko}} i {{ui:Odznacz wszystko}}, każde z własnym skrótem klawiszowym. Przycisk lub pozycja menu, której nie można teraz użyć, jest wyszarzona; najedź na nią kursorem, aby przeczytać powód (na przykład „nic jeszcze nie skopiowano”).

Każde wklejenie, wycięcie, duplikowanie i usunięcie to jeden krok: jedno {{key:Mod+Z}} cofa wszystko.

## Zaznaczanie kilku elementów

- Kliknij element, aby go zaznaczyć. Przytrzymaj {{key:Shift}} (lub {{key:Ctrl}}, albo {{key:Mod}}) i kliknij kolejne elementy, aby je dodać; kliknij zaznaczony element w ten sam sposób, aby go odznaczyć.
- {{key:Mod+A}} lub {{ui:Zaznacz wszystko}} zaznacza każdy element konstrukcyjny, połączenie i fundament.
- {{key:Esc}} lub {{ui:Odznacz wszystko}} czyści zaznaczenie.

Gdy zaznaczonych jest kilka obiektów, panel {{ui:Właściwości}} ma nagłówek „4 zaznaczone” (lub inną liczbę) i wymienia elementy według typu, połączenia, fundamenty oraz brutto masę stali, a także przyciski {{ui:Kopiuj}}, {{ui:Duplikuj}} i {{ui:Usuń}}.

## Kopiowanie

1. Zaznacz elementy konstrukcyjne i fundamenty, które chcesz skopiować.
2. Wybierz {{ui:Kopiuj}} lub naciśnij {{key:Mod+C}}.

Razem z nimi kopiowane jest:

- Każdy element w całości: profil, materiał, końce, położenie, obrót, nazwa, otwory i wycięcia. Kopiowany jest także użyty przez niego profil niestandardowy.
- Każdy fundament w całości: wymiary, beton, dolna siatka zbrojenia i pręty wystające.
- Blachy czołowe i blachy podstawy, ale tylko wtedy, gdy skopiowane są wszystkie elementy, które dane połączenie łączy: blacha czołowa belki wymaga belki i jej słupa. Pasek stanu informuje, ile połączeń zostało pominiętych. Aby celowo pominąć połączenia, odznacz pole **Kopiuj blachy czołowe i blachy podstawy wraz z ich elementami** w [ustawieniach DetailCraft](topic:settings).

Samego połączenia nie można skopiować; zamiast tego zaznacz jego elementy. Aby nadać innym węzłom to samo połączenie, użyj {{ui:Podobne}} (zobacz [Blachy czołowe](topic:end-plates#copy-it-to-every-similar-joint)).

Kopia pozostaje w tej przeglądarce, dopóki nie skopiujesz czegoś innego. Inna karta lub okno DetailCraft w tej samej przeglądarce może wkleić ją, dzięki czemu możesz skopiować ramę z jednego modelu i wkleić ją do innego.

## Wklejanie na przecięciu siatki

1. Wybierz {{ui:Wklej}} lub naciśnij {{key:Mod+V}}.
2. Przesuń wskaźnik nad widok. Przerywany kontur kopii podąża za przecięciem siatki najbliższym wskaźnikowi.
3. Kliknij przecięcie. Punkt bazowy kopii (jej najniższy narożnik: najmniejsze x, y i z ze wszystkiego, co skopiowano) zostaje tam umieszczony.

Wklejone elementy są zaznaczone po wklejeniu, więc możesz wkleić je ponownie w innym miejscu lub je zmienić. {{key:Esc}} anuluje wklejanie; kopia pozostaje w schowku. {{ui:Rzut}} i {{ui:Elewacja}} ułatwiają trafienie we właściwe przecięcie.

:::tip
Aby powtórzyć przęsło, zaznacz elementy przęsła (albo wszystko klawiszem {{key:Mod+A}}), skopiuj, wklej i kliknij przecięcie o jedno przęsło dalej od miejsca, w którym znajdował się najniższy narożnik kopii.
:::

## Wklejanie z klawiatury

Podczas wklejania panel {{ui:Właściwości}} pokazuje, co znajduje się w schowku, oraz dwa formularze:

- {{ui:Wklej z przesunięciem (mm, od oryginału)}}: wpisz x, y i z, a następnie wybierz {{ui:Wklej z tym przesunięciem}}. Początkowo używane jest przesunięcie z [ustawień DetailCraft](topic:settings).
- {{ui:Wklej na przecięcie siatki}}: wybierz oś literową, oś numeryczną i poziom, a następnie wybierz {{ui:Wklej tutaj}}. Punkt bazowy trafi właśnie tam.

## Wklejanie w miejscu

{{ui:Wklej w miejscu}} ({{key:Mod+Shift+V}}) umieszcza kopię dokładnie we współrzędnych, z których została skopiowana. Użyj tego po {{ui:Wytnij}} lub aby przenieść elementy z innego modelu w to samo miejsce. Jeśli oryginały nadal istnieją, kopia leży na nich, a pasek stanu ostrzega o tym: przesuń kopie za pomocą {{ui:Początek}} i {{ui:Koniec}} w {{ui:Właściwości}} albo cofnij operację.

## Duplikowanie

{{ui:Duplikuj}} ({{key:Mod+D}}) kopiuje zaznaczenie i od razu je wkleja, przesunięte o wartość z [ustawień DetailCraft](topic:settings) (na początku 6000 mm wzdłuż osi x). Nie zmienia to zawartości schowka. Kopie są zaznaczone po wykonaniu operacji, więc ponowne naciśnięcie {{key:Mod+D}} utworzy kolejną kopię z nich.

## Wycinanie i usuwanie

- {{ui:Wytnij}} ({{key:Mod+X}}) kopiuje zaznaczenie, a następnie je usuwa. Wklej je tam, gdzie powinno się znaleźć.
- {{ui:Usuń}} ({{key:Delete}} lub {{key:Backspace}}) usuwa zaznaczenie. Usunięcie elementu usuwa także jego połączenia.

## Znaczniki po wklejeniu

Znaczniki elementów i zespołów nie są zapisywane; DetailCraft numeruje je ponownie na podstawie modelu po każdej zmianie ([Jak nadawane są znaczniki](topic:mark-rules)). Zatem:

- Kopia, która jest tym samym elementem co oryginał (ten sam profil, gatunek, długość cięcia, otwory i wycięcia), dzieli znacznik oryginału, a liczba w {{ui:Znaczniki elementów}} oraz w zestawieniu materiałów rośnie.
- Kopia, która okaże się inna, otrzymuje własny znacznik. Belka wklejona bez swoich blach czołowych, na przykład, nie jest przycinana, więc jest innym elementem. Znaczniki są numerowane ponownie w całym modelu, więc numery innych elementów również mogą się zmienić.

Każdy wklejony element, otwór, wycięcie, połączenie i fundament otrzymuje nowy identyfikator, dzięki czemu nic w modelu nie jest współdzielone między kopią a oryginałem.

## Gdy schowek zostanie odrzucony

Zawartość schowka jest sprawdzana równie starannie jak plik modelu, który otwierasz: wszystko, co nie jest poprawnym elementem DetailCraft, zostaje odrzucone, a pasek stanu informuje, co się stało. Schowek wypełniony przez nowszą wersję DetailCraft lub przez coś innego zostaje odrzucony z komunikatem i nic nie zostaje wklejone. Jeśli okno prywatne nie może zachować kopii w pamięci przeglądarki, kopiowanie nadal działa w tej karcie.
