---
title: Etapy
summary: Podziel model na etapy (kolejność montażu lub dostawy), pokazuj lub ukrywaj każdy etap, umieszczaj w nim elementy i numeruj znaczniki w ramach etapu.
keywords: etap, etapy, menedżer etapów, kolejność montażu, dostawa, partia, sekwencja, ukryj etap, pokaż etap, filtr, numeracja, prefiks znacznika, na etap
from: bae506f5
---

Etap to grupa elementów wytwarzanych, dostarczanych lub montowanych razem: kolejność montażu, dostawa, partia. Każdy słup, belka i stopa fundamentowa jest w jednym etapie. Połączenie jest w etapie swojego głównego elementu: belka dla blachy czołowej, słup dla blachy podstawy. Nowy model ma jeden etap.

## Panel Etapy

Sekcja {{ui:Etapy}} panelu {{ui:Model}} wymienia wszystkie etapy:

- pole wyboru pokazuje lub ukrywa etap w widoku;
- numer oraz nazwę, którą można wpisać (puste = „Etap 2” itd.);
- liczbę elementów w nim;
- przycisk {{ui:×}} usuwa etap. Usunąć można tylko pusty etap: najpierw przenieś jego elementy do innego etapu.

{{ui:Dodaj etap}} dodaje kolejny numer i ustawia go jako etap, do którego trafiają nowe elementy.

## Umieszczanie elementów w etapie

- **Nowe elementy:** {{ui:Nowe części trafiają do}} wybiera etap, do którego trafia każdy element konstrukcyjny i każda stopa fundamentowa umieszczana od teraz.
- **Jeden element:** zaznacz go i zmień {{ui:Etap}} w panelu {{ui:Właściwości}}.
- **Wiele elementów:** zaznacz je (oknem, {{key:Shift}}+kliknięcie, {{key:Mod+A}}) i zmień {{ui:Etap}} u góry panelu {{ui:Właściwości}}. Pokazuje **Różne**, gdy są w różnych etapach. Jedna zmiana to jeden krok cofnięcia.

Kopie zachowują etap elementu, z którego je skopiowano, także po wklejeniu do innego modelu (etap zostaje tam dodany).

## Pokazywanie i ukrywanie etapów

Ukryty etap nie jest rysowany w widoku, nie można go kliknąć ani złapać oknem zaznaczenia, a {{key:Mod+A}} go pomija. Nadal jest w {{ui:Zestawienie materiałów}}, raportach, rysunkach i każdym eksporcie. Ukrywanie dotyczy tylko widoku: nie jest zapisywane i nie ma cofnięcia.

## Znaczniki w ramach etapu

Gdy opcja **Numeruj znaczniki według etapu** jest włączona (domyślnie jest) i elementy są w więcej niż jednym etapie, każdy etap numerowany jest osobno, a znaczniki zaczynają się od numeru etapu: znaczniki elementów 1-b1, 2-b1, znaczniki zespołów 2-B1, stopy 2-F1. Dwie identyczne belki w różnych etapach mają wtedy różne znaczniki, ponieważ są wytwarzane i wysyłane w różnym czasie. Gdy używany jest jeden etap, znaczniki nie mają prefiksu. Wyłącz opcję, aby ponumerować cały model jako jeden; wtedy identyczne elementy mają wspólny znacznik, niezależnie od etapu.

Etap jest zapisywany w eksporcie IFC (zestaw właściwości DetailCraft, Phase).

:::note
Modele z etapami są zapisywane w formacie plików DetailCraft 2. Wydanie 0.3 DetailCraft nie może ich otworzyć; ta wersja otwiera starsze pliki, z każdym elementem w etapie 1.
:::
