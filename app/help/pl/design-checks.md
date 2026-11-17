---
title: Sprawdzanie elementów stalowych według normy projektowej
summary: Twórz kombinacje obciążeń wg ASCE 7 lub EN 1990, sprawdzaj każdy stalowy kształtownik dwuteowy wg AISC 360 lub EN 1993-1-1 i zobacz, jaką część jego nośności wykorzystuje każdy element. Pomoc do czasu sprawdzenia przez inżyniera.
keywords: projekt, sprawdzenie projektowe, projektowanie stali, wykorzystanie, nośność, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, kombinacje obciążeń, LRFD, załącznik krajowy, wyboczenie, zwichrzenie, ścinanie, zginanie, interakcja, konstrukcyjny, studenci, inżynier
from: 66b6d545
---

Po przeprowadzeniu analizy blok {{ui:Sprawdzenia projektowe}} w karcie {{ui:Analiza}} przekształca jej siły w wynik dla każdego stalowego elementu: jaką część nośności wykorzystuje najbardziej niekorzystna kombinacja.

:::warning
To jest **pomoc do czasu sprawdzenia przez inżyniera**. Używa wyłącznie sił z analizy I rzędu (bez efektów drugiego rzędu), nie sprawdza skręcania, smukłych elementów klasy 4, kształtów spawanych ani połączeń, a to, czego nie może sprawdzić, pomija i o tym informuje. Nie zastępuje sprawdzenia przez inżyniera, a jego wyniki nie są pieczątką.
:::

## Wybór normy

{{ui:Norma projektowa}} jest zapisywana razem z modelem; wybierz jedną z dwóch rodzin:

- **ASCE 7 + AISC 360** (USA, LRFD): kombinacje obciążeń z ASCE 7-16 §2.3.1 oraz sprawdzenia elementów z ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): kombinacje z EN 1990 (wzór 6.10, albo 6.10a i 6.10b) oraz sprawdzenia elementów z EN 1993-1-1.

Następnie wybierz {{ui:Gatunek stali}} (A992, A36 i inne; albo S235 do S450, przy czym dolna granica plastyczności powyżej 40 mm).

## Tworzenie kombinacji

Nadaj każdemu przypadkowi obciążenia jego **rodzaj** (stałe, użytkowe, użytkowe dachu, śnieg, wiatr, sejsmiczne) na liście przypadków, a następnie naciśnij {{ui:Utwórz kombinacje}}. DetailCraft zapisuje kombinacje normy jako kombinacje Twoich przypadków: każdą kombinację nośności, jaką norma podaje dla posiadanych rodzajów, oraz kombinacje użytkowalności do ugięć. Kombinacje wpisane przez Ciebie samodzielnie pozostają; nie są sprawdzane względem normy. Przypadek rodzaju {{ui:Inne}} nie jest łączony.

Dla Eurocode współczynniki to **wartości zalecane** z EN 1990 załącznik A1 (γG 1,35, γQ 1,5, wartości ψ obciążeń użytkowych, śniegu i wiatru) oraz EN 1993-1-1 (γM0 = γM1 = 1,0). Załącznik krajowy Twojego kraju zmienia niektóre z nich: otwórz {{ui:Wartości z załącznika krajowego}}, wpisz własne i utwórz kombinacje ponownie. Są one zapisywane w modelu.

## Sprawdzanie elementów

Naciśnij {{ui:Sprawdź elementy}}. Dla każdego stalowego kształtownika dwuteowego tabela pokazuje jego **wykorzystanie** (oddziaływanie do nośności: 100 % to granica), czy przechodzi, które sprawdzenie jest dominujące i która kombinacja. Elementy są pokolorowane na modelu: na niebiesko mało wykorzystane, na zielono około połowy, na ochrowo blisko granicy, na czerwono przekroczona, na szaro niesprawdzone. Kliknij nazwę elementu, aby go zaznaczyć.

Sprawdzenia, z podaniem punktu normy, któremu każde z nich odpowiada (są wymienione w raporcie):

- rozciąganie, ściskanie z wyboczeniem giętnym i skrętnym, zginanie względem obu osi ze zwichrzeniem, ścinanie oraz zginanie z siłą osiową;
- ugięcie kombinacji użytkowalności względem {{ui:Limit ugięcia}}, który ustawiasz (na początek L/360; jest to wartość projektowa, a nie wartość normy).

**Długości.** Długość usztywniona to udział każdego analizowanego fragmentu (1 = nieusztywniony); stężenia przyjmowane są równomiernie rozmieszczone od początku. Współczynniki K mnożą długość przy wyboczeniu. Węzeł, w którym trafia inny element, dzieli element, a każdy fragment jest sprawdzany według własnej długości, jako usztywniony w tym miejscu.

## Czego nie sprawdzono

Element pokazuje **nie sprawdzono** wraz z przyczyną zamiast liczby, gdy jego przekrój nie jest kształtownikiem dwuteowym, który znają sprawdzenia (rury, kątowniki, ceowniki), gdy jest to kształt niestandardowy (spawany) albo gdy część jest smukła (AISC) lub klasy 4 (Eurocode) przy zginaniu. Smukła część przy ściskaniu wyłącza sprawdzenia ściskania, a element pokazuje *przechodzi, częściowo sprawdzony*. Również nie zbudowano: efektów drugiego rzędu, skręcania, wyboczenia przy ścinaniu razem z zginaniem, połączeń, zmęczenia, ognia i szczegółów sejsmicznych. Elementy żelbetowe i obciążenia sejsmiczne mają [własne sprawdzenia](topic:concrete-and-seismic). Zobacz [Jeszcze nie zbudowano](topic:not-built-yet).

## Raport

{{ui:Raport (PDF)}} i {{ui:Raport (CSV)}} zyskują tabele projektowe po wykonaniu sprawdzenia: wersje normy, ustawienia i wartości załącznika krajowego, wykorzystanie według elementów, każdy użyty punkt normy oraz dla każdego elementu oddziaływanie, nośność i wykorzystanie każdego sprawdzenia w jego dominującej kombinacji.
