---
title: Lista cięcia
summary: Rozłóż belki, słupy, stężenia i policzki schodów na długości handlowe, uwzględniając szczelinę cięcia, i sprawdź, ile prętów kupić oraz jaki jest naddatek.
keywords: lista cięcia, rozkrój, długość handlowa, pręt, szczelina cięcia, piła, odpad, odcinek resztkowy, łączenie, zakup, wiele
from: 81d06ce5
---

Karta {{ui:Lista cięcia}}, pod widokiem, oblicza, jak ciąć liniowe elementy modelu z prętów handlowych: ile prętów każdej długości kupić dla każdego profilu i materiału, co zmieści się na każdym pręcie oraz jaki jest naddatek.

## Ustawianie materiału handlowego

Na górze karty:

- **Długości handlowe (mm):** długości, które można kupić, oddzielone spacjami, na przykład `6000 12000` albo pręty 20 ft i 40 ft jako `6096 12192`. Do ośmiu.
- **Szczelina cięcia (mm):** ile zabiera każde cięcie (na początek 3).
- **Obcięcie końca (mm):** odcięcie końca każdego pręta przed pierwszym elementem (na początek 0).
- **Zachowuj odcinki od (mm):** odcinek o co najmniej tej długości wraca do zapasu; krótszy idzie na odpad (na początek 500).

Wartości te są zapisywane w tej przeglądarce, podobnie jak inne [ustawienia](topic:settings).

## Jak działa rozkrój

- Każda belka, słup, stężenie i policzek schodów, według znacznika elementu i liczby sztuk; blachy są cięte z arkusza i nie są tutaj rozkładane.
- Każdy profil i materiał osobno.
- Najdłuższe elementy najpierw, każdy na pierwszy pręt, na który się mieści; nowy pręt zaczyna się jako najdłuższa długość handlowa. Następnie każdy pręt jest kupowany jako najkrótsza długość handlowa, która nadal mieści jego cięcia.
- Każde cięcie zabiera szczelinę (żadnej po cięciu, które kończy się dokładnie na końcu pręta); każdy pręt traci obcięcie końca.
- Element dłuższy niż wszystkie długości handlowe jest wymieniony w sekcji **Dłuższe niż jakikolwiek materiał handlowy** i nie jest rozkładany: połącz go (zobacz [Łączenia](topic:splices)) albo dodaj dłuższą długość handlową.

## Odczytywanie wyników

- **Podsumowanie:** dla każdego profilu i materiału: elementy, pręty do kupienia (na przykład „2 × 12000, 1 × 6000”), metry kupione i zużyte oraz naddatek.
- **Pręty i ich cięcia:** każdy pręt, jego długość handlowa, jego cięcia jako znacznik elementu i długość oraz odcinek resztkowy: zachowany lub na odpad.

{{ui:Pobierz CSV}} zapisuje obie tabele jako `<nazwa> cut list.csv`.

DetailCraft nie rozkłada blach na arkuszach i nie miesza profili ani materiałów na jednym pręcie.
