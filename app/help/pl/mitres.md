---
title: Połączenia ukośne
summary: Połącz dwa dwuteowe elementy spotykające się pod kątem: oba końce są cięte na płaszczyźnie dzielącej kąt na pół, z blachami czołowymi, śrubami i żebrami usztywniającymi, jeśli chcesz.
keywords: połączenie ukośne, ukos, mitre, miter, kolanko, węzeł ramy, kalenica, narożnik, cięcie pod kątem, cięcie skośne, blacha czołowa, przykręcana blacha czołowa, żebro usztywniające, połącz
from: cd8380d4
---

Połączenie ukośne łączy dwa dwuteowe elementy, których końce spotykają się pod kątem, na przykład kolanko ramy portalowej, kalenicę albo dwie belki zmieniające kierunek w narożniku w rzucie. DetailCraft tnie oba końce na płaszczyźnie dzielącej kąt między nimi na pół, więc dwie powierzchnie cięcia do siebie pasują. Jeśli chcesz, dodaje blachę czołową do każdego ciętego końca, łączy obie blachy śrubami i wstawia parę żeber usztywniających w każdym elemencie.

## Gdzie działa

- Dwa **dwuteowniki** (IPE, HEA, HEB, W i podobne), których **końce spotykają się w tym samym węźle**. Każdy element może być narysowany w dowolnym kierunku.
- Kąt między elementami musi wynosić co najmniej 15°. Elementy leżące w jednej linii są odrzucane: użyj [łączenia](topic:splices).
- Samo cięcie (bez blach) działa niezależnie od tego, jak elementy się spotykają. **Blachy czołowe** wymagają, by dwa elementy spotykały się w płaszczyźnie swoich środników, jak w kolanku ramy portalowej albo w kalenicy. Dwie belki zmieniające kierunek w narożniku w rzucie spotykają się w płaszczyźnie swoich pasów, więc dostają tylko samo cięcie.
- Elementy różnych rozmiarów są łączone, ale z ostrzeżeniem: ich powierzchnie cięcia nie pasują.

## Dodaj połączenie ukośne

1. Zaznacz dwa elementy: kliknij jeden, potem {{key:Shift}}+kliknij drugi.
2. Wybierz {{ui:Połączenie ukośne}} w menu {{ui:Więcej}} grupy {{ui:Połącz}}. Otworzy się okno Połączenie ukośne.
3. Ustaw pola z numerami. Rysunek obok powstaje z Twoich liczb w miarę pisania, a jego ponumerowane kółka pokazują, co ustawia każde pole.
4. Wybierz {{ui:Dodaj połączenie ukośne}}. Jeśli zaznaczysz więcej niż dwa elementy, każde wolne złącze między nimi dostanie to samo połączenie ukośne.

Aby zmienić połączenie później, zaznacz je (kliknij jedną z jego blach) i wybierz {{ui:Okno połączenia ukośnego z podglądem}} w prawym panelu albo zmień ustawienia tam bezpośrednio. Samo cięcie nie ma blach do kliknięcia: zaznacz jego dwa elementy i ponownie wybierz {{ui:Połączenie ukośne}}, a okno otworzy się na tym połączeniu. {{ui:Zastosuj do podobnych (n)}} kopiuje je na każde wolne złącze między elementami tych samych dwóch profili pod tym samym kątem.

## Numerowane pola (mm)

| Nr | Ustawienie | Domyślnie | Co robi |
|---|---|---|---|
| 1 | Szczelina między blachami (lub końcami cięcia) | 0 | Wolna szczelina w złączu. Każda strona zachowuje połowę |
| 2 | Blachy czołowe, grubość blachy | włączone, 20 | Blacha czołowa przyspawana dookoła każdego ciętego końca. Odznacz, aby mieć samo cięcie |
| 3 | Rzędy śrub, odstęp rzędów, rozstaw poprzeczny, rząd zewnętrzny | 4, 0, 0, wyłączone | Odstęp 0 rozkłada rzędy równomiernie między pasami. Rozstaw poprzeczny 0 = połowa szerokości blachy, nie mniej niż 2,4 × otwór. Rząd zewnętrzny idzie w przedłużenie blachy poza zewnętrzny pas |
| 4 | Blacha poza zewnętrznym pasem | 0 | Jak daleko blachy sięgają poza zewnętrzny pas, wzdłuż cięcia |
| 5 | Blacha poza wewnętrznym pasem | 0 | To samo po stronie wewnętrznej |
| 6 | Żebra usztywniające, odległość poza cięciem | wyłączone, 50 | Para w każdym elemencie, po obu stronach środnika, prostopadle do elementu, tyle poza dalszym końcem jego cięcia |
| 7 | Grubość żebra | 10 | |

Pod {{ui:Śruby}}: średnica śruby, otwór, gatunek i naddatek długości (20, 22, A325, 30), tak jak dla blach czołowych. Pod {{ui:Blachy i spoiny}}: szerokość blachy (0 = szerokość pasa), wielkość spoiny pachwinowej (8) i materiał blachy (A36).

## Co dostajesz

- **Cięcia.** Koniec każdego elementu jest cięty na jego płaszczyźnie. Jego długość na listach, rysunkach i w plikach NC to **długość całkowita**, od prostego końca do najdalszego punktu cięcia.
- **Blachy** należą do własnego elementu: zespół każdego elementu to element, jego blacha czołowa i jego żebra. Śruby są śrubami montażowymi tego połączenia: zestawienie materiałów liczy je raz, a rysunek zespołu każdego elementu wymienia je jako luźne śruby.
- **Rysunki** pokazują skośne końce i blachy; rysunek warsztatowy elementu ciętego na ukos podaje kąt każdego cięcia od kąta prostego.
- **Pliki NC** (DSTV) niosą w nagłówku kąty cięć skośnych, jak wymaga norma, oraz kontury podążające za cięciem. Sprawdź je w przeglądarce NC swojego warsztatu przed cięciem, jak każdy plik NC.
- **IFC** przycina wyciągnięcie każdego elementu jego płaszczyzną cięcia, więc inne programy pokazują prawdziwe cięcie.
- **Znaczniki:** element cięty na ukos to inny kawałek niż element ścięty prostopadle o tej samej długości. Dwa elementy z tymi samymi cięciami mają wspólny znacznik, jak dwie krokwie kalenicy.

## Dobrze wiedzieć

- Połączenie ukośne pozostaje aktywne. Przesuń lub zmień rozmiar któregokolwiek elementu, a cięcie, blachy i śruby pójdą za nim. Usuń któryś element, a połączenie zniknie, a koniec drugiego elementu znów będzie prosty.
- Ostrzeżenia korzystają z tych samych minimów EN 1993-1-8 co inne połączenia (odległość końca i krawędzi 1,2 × otwór, skok 2,2 × otwór, rozstaw 2,4 × otwór), plus rzędy śrub zbyt blisko pasa, blachy węższe od pasów i żebra bez miejsca.
- Wartości są punktami wyjścia, a nie projektem. DetailCraft nie sprawdza wytrzymałości połączenia i nie tworzy ukosnika (haunch), spawanego połączenia ukośnego ze spoiną czołową ani żeber w jednej linii z pasami drugiego elementu.
