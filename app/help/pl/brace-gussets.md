---
title: Blachy węzłowe stężeń
summary: Połącz koniec stężenia ze słupem lub belką blachą węzłową: kątowniki i płaskowniki przykręcone, rury nasunięte i spawane.
keywords: blacha węzłowa, stężenie, blacha stężenia, stężenie krzyżowe, stężenia pionowe, stężenie kątownikowe, płaskownik, pas, blacha nożowa, rura szczelinowa, rura HSS, połącz
from: 22f6598d
---

Blacha węzłowa stężenia to blacha przyspawana w zakładzie do słupa (lub belki), na którą opiera się stężenie, w płaszczyźnie stężenia. DetailCraft przycina stężenie tak, by nic w węźle go nie dotykało, umieszcza i wymiaruje blachę węzłową oraz łączy z nią stężenie: **kątownik** lub **płaskownik** z jednym rzędem śrub albo **rurę** (kwadratową, prostokątną lub okrągłą HSS) nasuniętą na blachę węzłową przez szczelinę i przyspawaną.

## Gdzie to działa

- Koniec stężenia leży na osi słupa lub belki (z dokładnością 1 mm), a stężenie nie jest prawie równoległe do tej osi. Słup jest podporą, jeśli jest; w przeciwnym razie belka.
- Blacha węzłowa leży w płaszczyźnie stężenia i osi podpory. **Kątownik** musi mieć jedną półkę w tej płaszczyźnie, a **płaskownik** swoją powierzchnię: obróć stężenie (jego {{ui:Obrót (°)}}), aż tak będzie. Gdy półki kątownika są pod 45° do płaszczyzny, DetailCraft to zgłasza i niczego nie buduje.
- Dwuteowniki i ceowniki jako stężenia nie są łączone.

## Dodawanie blach węzłowych

1. Zaznacz jedno lub więcej stężeń.
2. Wybierz {{ui:Blacha węzłowa}} w menu {{ui:Więcej}} grupy {{ui:Połącz}}.
3. Każdy zaznaczony koniec stężenia, który opiera się na słupie lub belce i nie ma blachy węzłowej, dostaje ją.

Zaznacz blachę węzłową (kliknij blachę), aby zmienić jej ustawienia. {{ui:Zastosuj do podobnych (n)}} kopiuje ją na każdy wolny koniec stężenia o tym samym profilu stężenia i podpory.

## Co wylicza DetailCraft

- **Przycięcie.** Stężenie jest na tym końcu skracane, aż jego narożniki przejdą obok wszystkiego, z odstępem {{ui:Luz stężenia}} (25): od każdego elementu w węźle (obok niego albo za jego końcem, gdy tam się kończy) i od blachy podstawy pod słupem.
- **Śruby (kątowniki, płaskowniki).** {{ui:Śruby}} (3) w jednym rzędzie wzdłuż stężenia, pierwsza w {{ui:Odległość końca śruby}} (40) od przyciętego końca, co {{ui:Rozstaw śrub}} (75). Na kątowniku przechodzą przez półkę w płaszczyźnie blachy, w {{ui:Rozstaw poprzeczny śrub}} od pięty (0 = środek półki); na płaskowniku na jego osi środkowej (lub przesunięte o rozstaw). Chwyt śruby = półka lub płaskownik + blacha węzłowa.
- **Blacha węzłowa.** Prostokąt: od powierzchni podpory na zewnątrz, za ostatnią śrubę o odległość końca, a wzdłuż podpory tyle, ile potrzeba śrubom. Przylega do tyłu półki kątownika (lub powierzchni płaskownika). Dla rury przebiega przez środek rury, pod {{ui:Zakład rury na blasze węzłowej}} (200) rury, z miejscem na spoiny.
- **Węzły.** Przy podstawie słupa blacha węzłowa jest prowadzona w dół na blachę podstawy. Gdy belka przecina węzeł (stężenie w górę do narożnika belka-słup), blacha zostaje pod lub nad belką. Jeśli to odbiera śrubom lub zakładowi ich odległość końca, DetailCraft ostrzega.
- **Spoiny.** Blacha węzłowa do podpory, z obu stron. Rura do blachy węzłowej: cztery linie wzdłuż zakładu.

## Dobrze wiedzieć

- Blacha węzłowa należy do zespołu podpory (spawana w zakładzie). Stężenie jest dostarczane z wywierconymi otworami i trafia do własnego pliku NC.
- Szczelina w rurze nie jest wycinana w modelu; [sprawdzenie kolizji](topic:clash-check) pomija stężenie i jego blachę węzłową.
- Blacha węzłowa nie jest spawana do belki, której dotyka. Narożne blachy węzłowe spawane zarówno do belki, jak i do słupa, ścięte narożniki oraz układ punktu roboczego połączenia metodą Uniform Force Method jeszcze nie są wykonywane.
- DetailCraft nie projektuje blachy węzłowej ani śrub (bez sprawdzeń wytrzymałości); ostrzeżenia dotyczą rozstawu i pasowania.
