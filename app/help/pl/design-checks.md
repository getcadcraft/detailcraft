---
title: Sprawdzanie elementów stalowych według normy projektowej
summary: Twórz kombinacje obciążeń według ASCE 7 lub EN 1990, sprawdzaj każdy dwuteownik stalowy według AISC 360 lub EN 1993-1-1 i zobacz, jaką część nośności wykorzystuje każdy element. Pomoc do czasu sprawdzenia przez inżyniera.
keywords: projektowanie, sprawdzenie projektowe, projektowanie stali, wykorzystanie, nośność, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, Eurokod, kombinacje obciążeń, LRFD, załącznik krajowy, wyboczenie, zwichrzenie, ścinanie, zginanie, interakcja, konstrukcyjny, studenci, inżynier
from: 15685c4e
---

Po uruchomieniu analizy blok {{ui:Sprawdzenia projektowe}} w karcie {{ui:Analiza}} zamienia jej siły na werdykt dla każdego elementu stalowego: jaką część nośności wykorzystuje najbardziej niekorzystna kombinacja.

:::warning
To jest **pomoc do czasu sprawdzenia przez inżyniera**. Używa wyłącznie sił z analizy pierwszego rzędu (bez efektów drugiego rzędu), nie sprawdza skręcania, smukłych części (klasy 4), elementów spawanych ani połączeń, a to, czego nie może sprawdzić, pomija i o tym informuje. Nie zastępuje sprawdzenia przez inżyniera, a jej wyniki nie są pieczątką.
:::

## Wybierz normę

{{ui:Norma projektowa}} jest zapisywana razem z modelem; wybierz jedną z dwóch rodzin:

- **ASCE 7 + AISC 360** (USA, LRFD): kombinacje obciążeń z ASCE 7-16 §2.3.1 i sprawdzenia elementów z ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinacje z EN 1990 (wz. 6.10 lub 6.10a i 6.10b) i sprawdzenia elementów z EN 1993-1-1.

Następnie wybierz {{ui:Gatunek stali}} (A992, A36 i inne; albo S235 do S450, z mniejszą granicą plastyczności powyżej 40 mm).

## Utwórz kombinacje

Nadaj każdemu przypadkowi obciążenia jego **rodzaj** (stałe, użytkowe, dachowe użytkowe, śnieg, wiatr, sejsmiczne) na liście przypadków, a następnie naciśnij {{ui:Utwórz kombinacje}}. DetailCraft zapisuje kombinacje normy jako kombinacje Twoich przypadków: wszystkie kombinacje nośności, jakie norma podaje dla rodzajów, które masz, oraz kombinacje użytkowalności dla ugięć. Kombinacje wpisane przez Ciebie zostają; nie są sprawdzane według normy. Przypadek rodzaju {{ui:Inne}} nie jest łączony.

Dla Eurokodu współczynniki to **wartości zalecane** z załącznika A1 do EN 1990 (γG 1.35, γQ 1.5, wartości ψ dla obciążeń użytkowych, śniegiem i wiatrem) oraz z EN 1993-1-1 (γM0 = γM1 = 1.0). Załącznik krajowy Twojego kraju zmienia niektóre z nich: otwórz {{ui:Wartości z załącznika krajowego}}, wpisz swoje i utwórz kombinacje ponownie. Są one zapisywane w modelu.

## Sprawdź elementy

Naciśnij {{ui:Sprawdź elementy}}. Dla każdego dwuteownika stalowego tabela pokazuje jego **wykorzystanie** (oddziaływanie podzielone przez nośność: 100 % to granica), czy przechodzi, które sprawdzenie jest miarodajne i która kombinacja. Elementy są pokolorowane na modelu: niebieski – mało wykorzystane, zielony – około połowy, ochrowy – blisko granicy, czerwony – powyżej granicy, szary – nie sprawdzone. Kliknij nazwę elementu, aby go zaznaczyć.

Sprawdzenia, wraz z klauzulą, której każde z nich dotyczy (są wymienione w raporcie):

- rozciąganie, ściskanie z wyboczeniem giętnym i skrętnym, zginanie względem obu osi ze zwichrzeniem, ścinanie oraz zginanie ze siłą osiową;
- ugięcie kombinacji użytkowalności względem {{ui:Granica ugięcia}}, którą ustawiasz (na początek L/360; wartość projektowa, a nie wartość normy).

**Długości.** Długość przesztywniona to udział każdego analizowanego odcinka (1 = nieprzesztywniony); przesztywnienia są przyjmowane jako równomiernie rozmieszczone od początku. Współczynniki K mnożą długość do wyboczenia. Węzeł, w którym dochodzi inny element, dzieli element, a każdy odcinek jest sprawdzany na własnej długości, jako przesztywniony w tym miejscu.

## Czego nie sprawdzono

Element pokazuje **nie sprawdzono** z podaniem przyczyny, zamiast liczby, gdy jego przekrój nie jest kształtem znanym sprawdzeniom (kątowniki, ceowniki; rury prostokątne i okrągłe są sprawdzane, gdy ich ścianki są zwarte), gdy jest to kształt niestandardowy (spawany) albo gdy część jest smukła (AISC) lub klasy 4 (Eurokod) przy zginaniu. Smukła część przy ściskaniu wyłącza sprawdzenia ściskania, a element pokazuje *przechodzi, częściowo sprawdzony*. Spoiny w węzłach mają [własne sprawdzenie](topic:weld-checks). Nie zbudowano też: efektów drugiego rzędu, skręcania, wyboczenia przy ścinaniu łącznie ze zginaniem, połączeń śrubowych, zmęczenia, pożaru i szczegółowania sejsmicznego. Elementy betonowe i obciążenia sejsmiczne mają [własne sprawdzenia](topic:concrete-and-seismic). Zobacz [Jeszcze nie zbudowano](topic:not-built-yet).

## Raport

{{ui:Raport (PDF)}} i {{ui:Raport (CSV)}} zyskują tabele projektowe, gdy już sprawdziłeś: wydania norm, ustawienia i wartości załącznika krajowego, wykorzystanie według elementów, każdą użytą klauzulę oraz dla każdego elementu oddziaływanie, nośność i wykorzystanie każdego sprawdzenia w jego miarodajnej kombinacji.
