---
title: Sprawdzanie elementów żelbetowych i obciążeń sejsmicznych
summary: Ustaw zbrojenie belek i słupów żelbetowych, sprawdź je według ACI 318-19, wyznacz zastępcze siły poziome według ASCE 7-22 na sztywnych stropach i zobacz dryf kondygnacji. Pomoc dla inżyniera do sprawdzenia.
keywords: żelbet, beton zbrojony, ACI 318, ACI 318-19, zbrojenie, belka, słup, ścinanie, strzemiona, sejsmika, trzęsienie ziemi, zastępcza siła boczna, ELF, ASCE 7-22, dryf, dryf kondygnacji, stropy, sztywna tarcza, ciężar kondygnacji, wykorzystanie, konstrukcja, inżynier
from: 94d3001d
---

Bloki {{ui:Elementy żelbetowe}} i {{ui:Obciążenia sejsmiczne}} w karcie {{ui:Analiza}} sprawdzają żelbetowe belki i słupy oraz wyznaczają poziome siły trzęsienia ziemi na stropach ramy. Oba idą za przebiegiem karty {{ui:Analiza}} i są zapisywane z modelem.

:::warning
Wyniki są **do sprawdzenia przez inżyniera**: to pomoc, dopóki ktoś ich nie przejrzy. Sprawdzenia betonu używają sił pierwszego rzędu, z wyjątkiem słupa w ramie nazwanej nieprzesuwną, który projektuje się na moment powiększony, bez powiększenia od przesuwu, bez projektowania skręcania, bez szczegółowania sejsmicznego (rozdział 18 ACI) i bez szczegółowania strzemion. Obciążenia sejsmiczne pomijają współczynnik redundancji, pionowy efekt sejsmiczny, wzmocnienie skrętne i efekty P-delta. Obciążenia wiatrem nie są jeszcze zbudowane.
:::

## Narysuj elementy

Rysuj elementy betonowe jako prostokąty: profil {{ui:Blacha}}, taki jak `PL400x400` dla słupa i `PL300x600` dla belki, daje przekrój. Słupy i belki są umieszczane jak każdy inny element.

## Ustaw przekroje

Blok {{ui:Elementy żelbetowe}} wypisuje każdy przekrój, którego używają elementy. Naciśnij {{ui:Ustaw jako żelbet…}} przy tych, które są betonowe. DetailCraft odczytuje szerokość **b** (wzdłuż własnej osi y elementu) i wysokość **h** (wzdłuż z) z narysowanego profilu, a potem pyta o:

- **otulinę** do środka prętów oraz **górne**, **dolne** i **boczne** pręty (ile i jakiej średnicy) dla belki albo **klatkę słupa** (pręty wzdłuż b i wzdłuż h, jaka średnica, strzemiona spiralne) dla słupa;
- **strzemiona**: ramiona, średnicę i rozstaw;
- jak element **działa**: jako belka, słup albo rozstrzygane z jego sił (element pionowy albo przenoszący więcej niż 0,10 f′c Ag jest słupem).

Ustaw f′c, granicę plastyczności prętów fy, granicę plastyczności strzemion fyt (przy ścinaniu liczy się najwyżej 420 MPa), K oraz to, czy rama jest przesuwna czy nieprzesuwna. Przekrój ustawiony jako żelbet jest analizowany jako żelbet: E = 4700 √f′c, 2400 kg/m³, domyślnie z **przekrojami zarysowanymi** (słupy 0,70 Ig, belki 0,35 Ig; ACI 318-19 tabela 6.6.3.1.1(a)). Wybierz {{ui:Przekroje brutto}}, aby to wyłączyć.

## Utwórz kombinacje i sprawdź

Nadaj przypadkom obciążeń ich rodzaj, potem {{ui:Utwórz kombinacje}}: ACI 318-19 przyjmuje kombinacje nośności z ASCE 7 (§5.3.1). Naciśnij {{ui:Sprawdź żelbet}}, a każdy element dostanie wykorzystanie, pokolorowane na modelu jak sprawdzenia stali: zginanie i minimalne zbrojenie (22.2, 9.6.1.2), odkształcenie sterowane rozciąganiem (9.3.3.1), ścinanie ze strzemionami (22.5, 9.6.3), rozstaw strzemion oraz siła osiowa z momentem dla słupów (22.4, z metodą Bresler dla zginania dwukierunkowego). Element, którego narysowany przekrój różni się od wpisanego b × h, jest oznaczony jako *częściowo sprawdzony*, podobnie jak smukły słup albo skręcanie powyżej progu: tych się nie projektuje.

Elementy przekraczające nośność są wypisane w {{ui:Problemy}}; zaakceptuj jeden z powodem albo popraw przekrój.

## Stropy i obciążenia sejsmiczne

Strop to poziom, na którym rama jest związana sztywną płytą (**sztywna tarcza**). W bloku {{ui:Obciążenia sejsmiczne}} naciśnij {{ui:Znajdź kondygnacje}}: bierze poziomy, na których spotyka się dwie lub więcej belek. Potem nadaj każdemu stropowi jego **ciężar sejsmiczny**, wpisany lub odczytany. {{ui:Weź ciężary z przypadków}} sumuje pionowe obciążenia przypadków, którym nadano współczynnik (ciężar stały ma 1; dodaj 0,25 do użytkowego przypadku magazynowego albo śniegu na płaskim dachu, jak wymaga ASCE 7-22 12.7.2). Pionowe obciążenie każdego węzła trafia do stropu na nim lub powyżej, więc słup między dwoma stropami oddaje połowę swojego ciężaru każdemu.

Wpisz wartości projektowe: SDS, SD1, S1, R, Ie, Cd, TL, układ konstrukcyjny (dla okresu) i kategorię ryzyka. {{ui:Utwórz przypadki sejsmiczne}} wylicza wtedy okres z wysokości budynku (12.8.2.1), siłę podstawy V = Cs W (12.8.1), rozkłada ją na stropy (12.8.3) i zapisuje cztery przypadki obciążeń, w X i Y, z przypadkowym skrętem 5% w każdą stronę (12.8.4.2). Siły kondygnacji i sprawdzenie dryfu kondygnacji (12.8.6, tabela 12.12-1, dryf Cd δxe / Ie względem 0,020 hsx) pojawiają się po przebiegu; dryf powyżej limitu to także problem. Naciśnij ponownie {{ui:Utwórz kombinacje}}, aby włączyć przypadki sejsmiczne do kombinacji.

**Okres z analizy.** Przybliżony okres Ta wynika z wysokości budynku. Gdy uruchomiłeś analizę z przypadkami sejsmicznymi, {{ui:Przyjmij okres z analizy}} odczytuje, o ile każdy strop przesunął się pod siłami, i wylicza okres metodą Rayleigha, T = 2π √(Σ w δ² / (g Σ f δ)), raz dla X i raz dla Y; przypadki sejsmiczne są wtedy tworzone ponownie. Używany okres nigdy nie przekracza Cu·Ta (ASCE 7-22 12.8.2), więc miękki model nie obniży siły podstawy poniżej tej wartości. Przyjmij okres ponownie po drugim przebiegu: ustala się w kroku lub dwóch. Odznacz {{ui:Okres z analizy}}, aby wrócić do Ta.

**Smukłe słupy (ACI 318-19 6.6.4.5).** Dla ramy nazwanej nieprzesuwną słup, którego k·ℓu/r przekracza 34 + 12·M1/M2 (najwyżej 40), jest projektowany na moment powiększony Mc = δns · M2: δns = Cm / (1 − Pu / 0,75 Pc), Pc = π² (EI)eff / (k ℓu)² przy (EI)eff = 0,4 Ec Ig / (1 + βdns), a minimalny moment to Pu (15 + 0,03 h). βdns (na początek 0,6) to udział trwałego obciążenia osiowego w obciążeniu współczynnikowym: wpisz własną wartość. Słup, którego Pu osiąga 0,75 Pc, nie przechodzi własnego sprawdzenia. Raport wypisuje liczby każdego smukłego słupa. W ramie **przesuwnej** smukły słup nadal jest „częściowo sprawdzony”: jego powiększenie wymaga analizy drugiego rzędu, która nie jest jeszcze zbudowana.

**Płyty.** Gdy model ma blachy, blok {{ui:Zbrojenie płyt}} bierze momenty płyt z każdej kombinacji nośności i, regułą Wooda–Armera (zginanie i skręcanie razem), wylicza stal, którą każda warstwa potrzebuje na metr: dolną i górną, w x i w y. Podajesz grubość, otulinę i pręty; tabela pokazuje potrzebne przy podanych oraz ścinanie jednokierunkowe względem φVc. Warstwa, która nie wystarcza, jest problemem z podaniem jej punktu normy. Ugięcia, przebicie przy słupach i pręty obwodowe przy otworach nie są objęte, a moment nad podporą zbiega się wolno przy czterowęzłowych blachach.

Każdy wymieniony strop staje się w analizie sztywną tarczą: jego belki nie przenoszą siły osiowej z ruchu stropu. Eksport CraftScript nie jest przygotowany dla modelu ze stropami.

## Raport

{{ui:Raport (PDF)}} i {{ui:Raport (CSV)}} dostają tabele betonu (założenia, wykorzystanie według elementu, każdy punkt normy), parametry sejsmiczne i siłę podstawy, siły na stropach oraz tabelę dryfu.
