---
title: Poznaj przykładową ramę
summary: Otwórz wbudowaną dwuprzęsłową ramę i użyj jej, aby poznać, co wytwarza DetailCraft, od znaczników po pliki NC.
keywords: przykład, wzór, demo, rama, poznawanie, wycieczka, wypróbowanie
from: 5c5944dd
---

Przykładowa rama to mały, kompletny model: każdy rodzaj obiektu, jaki buduje DetailCraft, pojawia się co najmniej raz. To najszybszy sposób, by poznać aplikację i sprawdzić eksport, zanim na nim polegasz.

## Otwieranie

1. Wybierz {{ui:Przykład}} w grupie {{ui:Plik}}.
2. Jeśli bieżący model ma niezapisane zmiany, wybierz {{ui:Najpierw zapisz}} albo {{ui:Odrzuć zmiany}}.
3. Pasek stanu pokazuje: „Rama przykładowa: 6 słupów z blachami podstawy, 4 belki z blachami czołowymi, stężenie, 7 ław ze zbrojeniem.”

Przykład otwiera się jako nowy model o nazwie „Rama przykładowa”. Nie zmienia niczego innego i nie ma czego cofać.

## Co zawiera

- **Siatki** 1, 2, 3 co 6000 mm oraz A, B co 7000 mm. **Poziomy** Poziom 1 na 0 i Poziom 2 na 4000.
- **Sześć słupów** W12x50, od Poziomu 1 do Poziomu 2 na każdym przecięciu, każdy na blasze podstawy 25 mm z czterema prętami kotwiącymi.
- **Cztery belki** W16x26 na Poziomie 2 wzdłuż linii siatki A i B, góra stali na poziomie, z równo przykręconą blachą czołową na obu końcach (w sumie osiem).
- **Jedno stężenie** HSS4x4x1/4, od A/1 na Poziomie 1 do A/2 na Poziomie 2.
- **Sześć ław punktowych**, 2000 x 2000 x 600, po jednej pod każdym słupem, z siatką dolną z hakami w obu kierunkach.
- **Jeszcze jedna ława** obok ramy, 2400 x 1800 x 600, z sześcioma prętami startowymi z hakami, wystającymi do góry dla betonowego filara.

## Co warto wypróbować

1. Kliknij belkę. Odczytaj jej {{ui:Znacznik}}, {{ui:Zespół}}, {{ui:Długość cięcia}} i {{ui:Przycięcie}}: długość cięcia jest krótsza niż rozstaw siatki 6000 mm, ponieważ każda blacha czołowa skraca belkę o połowę wysokości słupa plus grubość blachy.
2. Kliknij słup. Pod {{ui:Otwory}} lista pokazuje otwory, które blachy czołowe wykonały w jego półce („8 otworów z połączeń”; słupy środkowe mają 16, po jednym zestawie w każdej półce).
3. Na liście {{ui:Znaczniki elementów}} po lewej zobacz, że wszystkie cztery belki mają wspólny znacznik: to ten sam kawałek stali. Słupy narożne także mają wspólny znacznik, choć ich otwory są skierowane w przeciwne strony, ponieważ słup obrócony końcami jest tym samym elementem. Słupy środkowe, z otworami w obu półkach, dostają inny znacznik.
4. Kliknij blachę czołową (albo jedną z jej śrub). Panel {{ui:Właściwości}} pokazuje ustawienia blachy, śruby i spoiny, śruby, które tworzy (z długością wyliczoną z chwytu), oraz ostrzeżenia o odległości od krawędzi.
5. Otwórz kartę {{ui:Zestawienie materiałów}}. Elementy, zespoły (belka z dwiema blachami czołowymi to jeden zespół) oraz śruby i pręty kotwiące są wymienione z masami. Powinieneś zobaczyć sześć znaczników elementów: c1 (dwa słupy środkowe) i c2 (cztery słupy narożne), oba W12x50 po 3975 mm; b1, cztery belki W16x26 po 5650 mm; br1, stężenie; p1, osiem blach czołowych PL20x180; oraz p2, sześć blach podstawy PL25x400. Łączniki to 64 śruby 20 x 70 A325 i 24 pręty kotwiące 20 x 575.
6. Otwórz kartę {{ui:Zestawienie gięcia}}. Sześć identycznych ław ma wspólne znaczniki prętów; ława filara dodaje własne.
7. Kliknij stężenie i spójrz na grupę {{ui:Wyjście}}: {{ui:Rysunek warsztatowy}} jest wyszarzony, ponieważ rysunki warsztatowe obejmują na razie tylko profile dwuteowe i blachy.
8. Wybierz {{ui:Pliki NC}}. Archiwum ZIP zawiera plik dla każdego znacznika profilu dwuteowego i blachy; pasek stanu wymienia znacznik stężenia jako niezapisany.
9. Wybierz {{ui:IFC}} i otwórz plik w dowolnej przeglądarce IFC, aby sprawdzić, jak czyta go Twoje inne oprogramowanie.

## Użyj jako punktu wyjścia

Przykład to zwyczajny model. Zmień go, następnie zmień nazwę w polu {{ui:Nazwa}} i zapisz pod nową nazwą za pomocą {{key:Mod+S}}.
