---
title: Wiatr, miejsce sejsmiczne i kombinacje ASCE 7
summary: Utwórz przypadki obciążeń wiatrem dla zamkniętego, sztywnego budynku, wyznacz wartości projektowe sejsmiczne dla miejsca i utwórz kombinacje ASCE 7 na karcie Analiza.
keywords: wiatr, obciążenie wiatrem, ASCE 7, procedura kierunkowa, ekspozycja, obudowa, sejsmika, klasa gruntu, Ss, S1, SDS, SD1, USGS, widmo projektowe, kombinacje obciążeń, LRFD, ASD, Kzt, Kd, poryw
from: 676fcbf3
---

Trzy bloki na karcie {{ui:Analiza}} tworzą dane wejściowe wiatru i sejsmiki dla ramy i je łączą: {{ui:Obciążenia wiatrem (ASCE 7, procedura kierunkowa)}}, {{ui:Sejsmika: miejsce i układ (ASCE 7)}} oraz {{ui:Kombinacje obciążeń ASCE 7}}. To pomoc: **nie jest to sprawdzenie według normy; wyniki przegląda Twój inżynier.**

## Co zrobisz

Utworzysz przypadki obciążeń wiatrem dla zamkniętego, sztywnego budynku, pobierzesz wartości sejsmiczne dla miejsca i utworzysz kombinacje, które ich używają. Model potrzebuje stropów, więc najpierw uruchom analizę (zobacz [Siły, reakcje i ugięcia](topic:frame-analysis)).

## Kroki

1. Otwórz kartę {{ui:Analiza}} i wybierz {{ui:Uruchom}}, aby znane były stropy i wymiary budynku. Jeśli blok mówi, że nie ma stropów, wybierz w nim {{ui:Znajdź kondygnacje}}.
2. W bloku {{ui:Obciążenia wiatrem (ASCE 7, procedura kierunkowa)}} wybierz {{ui:Wydanie}}, wpisz {{ui:Podstawowa prędkość wiatru V}} z mapy wiatrów i wybierz {{ui:Jednostka prędkości}}, a potem {{ui:Ekspozycja}} i {{ui:Obudowa}}. Kzt, Kd, G, rzędna terenu, współczynnik Cp po stronie zawietrznej, mimośród i kierunek też są tutaj.
3. Odczytaj ciśnienie na każdym stropie i siłę na każdym stropie w tabeli, a potem wybierz {{ui:Utwórz przypadki wiatru}}. Przypadki to +X, -X, +Y i -Y.
4. W bloku {{ui:Sejsmika: miejsce i układ (ASCE 7)}} wybierz wydanie i wpisz Ss oraz S1 (SMS, SM1 i S1 dla ASCE 7-22), klasę gruntu od A do D, kategorię ryzyka i system przenoszenia obciążeń sejsmicznych. Możesz też wpisać szerokość i długość geograficzną i wybrać {{ui:Wyszukaj w USGS (online)}}; usługa online jest wywoływana dopiero po naciśnięciu.
5. Odczytaj Fa, Fv, SDS i SD1, R, Cd i Omega0 oraz widmo projektowe, a potem wybierz {{ui:Użyj w bloku sejsmicznym}}. Naciśnij {{ui:Utwórz przypadki sejsmiczne}} w bloku sejsmicznym (zobacz [Sprawdzenie elementów betonowych i tworzenie obciążeń sejsmicznych](topic:concrete-and-seismic)).
6. W bloku {{ui:Kombinacje obciążeń ASCE 7}} wybierz {{ui:Metoda}} (LRFD lub ASD) i wybierz {{ui:Utwórz kombinacje ASCE 7}}. Uruchom analizę ponownie.

## Warto wiedzieć

- Wiatr: tylko zamknięty, sztywny budynek, procedura kierunkowa. Budynek podatny wymaga współczynnika porywów z normy, którego DetailCraft nie tworzy.
- Klasy gruntu E i F wymagają badania podłoża i nie są zbudowane.
- Lista źródeł na dole bloków mówi, skąd pochodzi każda liczba i co pominięto.
- Wyszukiwanie w USGS sprawdzono na zastępczej usłudze, a nie na działającej usłudze.
