---
title: Blachy przyłączeniowe
summary: Przykręć środnik belki do blachy przyspawanej w warsztacie do półki lub środnika słupa, także tam, gdzie belka łączy się ze słupem pod kątem w rzucie lub ma spadek.
keywords: blacha przyłączeniowa, pojedyncza blacha, blacha żebrowa, połączenie proste, połączenie środnikowe, skośna, skos, nachylona, pochylona, belka pod kątem, skręcane, połącz
from: 18afc8ab
---

Blacha przyłączeniowa (pojedyncza blacha, blacha żebrowa) to blacha przyspawana do słupa w warsztacie; na budowie środnik belki jest do niej przykręcany jednym pionowym rzędem śrub. DetailCraft umieszcza blachę, przycina belkę tak, by odsunąć ją od słupa, wierci otwory w blasze i w środniku belki, dodaje śruby i spoinę oraz ostrzega o odległościach od krawędzi i dopasowaniu.

## Gdzie działa

- Belka (profil dwuteowy lub ceownik), której koniec leży na linii **pionowego** słupa dwuteowego, łącząc się z jego **półką** albo **środnikiem**.
- **Prostopadła, skośna w rzucie albo nachylona**: blacha podąża za środnikiem belki, a belka jest przycięta tak, by jej najbliższy narożnik zachował szczelinę do słupa. Belka wznosząca się lub opadająca pod kątem większym niż 60° jest odrzucana.

## Dodawanie blach przyłączeniowych

1. Zaznacz belkę.
2. W grupie {{ui:Połącz}} otwórz {{ui:Więcej}} i wybierz {{ui:Blachy przyłączeniowe}} (albo wybierz {{ui:Dodaj blachy przyłączeniowe}} w panelu {{ui:Właściwości}}).
3. Każdy wolny koniec belki, który styka się ze słupem, dostaje blachę. Każdy koniec belki przyjmuje jedno połączenie: blachę przyłączeniową albo blachę czołową.

Zaznacz blachę (kliknij ją albo śrubę), aby zobaczyć i zmienić jej ustawienia. {{ui:Zastosuj do podobnych}} kopiuje ją jako blachę przyłączeniową do każdego podobnego węzła, który nie ma jeszcze połączenia.

## Ustawienia (mm)

| Ustawienie | Wartość początkowa | Znaczenie |
|---|---|---|
| Grubość blachy | 10 | Grubość blachy przyłączeniowej |
| Szerokość blachy | 115 | Jak daleko blacha wysuwa się od lica słupa, wzdłuż belki |
| Średnica śruby, średnica otworu, klasa śruby | 20, 22, A325 | Jak dla blach czołowych |
| Rzędy śrub, rozstaw rzędów | 3, 75 | Śruby w pionowym rzędzie |
| Odległość od krawędzi (śruby górne i dolne) | 38 | Od górnych i dolnych śrub do końców blachy; blacha ma głębokość: rzędy × rozstaw + 2 × ta wartość |
| Podniesienie grupy śrub | 0 | 0 wyśrodkowuje śruby na wysokości belki |
| Szczelina do słupa | 13 | Wolna szczelina między słupem a najbliższym narożnikiem belki |
| Linia śrub od lica słupa | 65 | Wzdłuż belki, od lica słupa do śrub |
| Naddatek długości śruby | 30 | Dodawany do chwytu (blacha + środnik belki), zaokrąglany w górę do 5 mm |
| Wymiar spoiny pachwinowej | 6 | Obustronnie między blachą a słupem |

## Warto wiedzieć

- Blacha jest częścią zespołu słupa (spawana w warsztacie); zespół belki ma tylko swoje otwory.
- Belka skośna lub nachylona jest przycinana dalej niż prostopadła, aby jej najbliższy narożnik zachował szczelinę. DetailCraft przycina belki prostopadle: wykonawca przycina koniec pod dopasowanie. Krawędź blachy przy słupie też jest rysowana prostopadle.
- DetailCraft nie sprawdza nośności. Ostrzeżenia korzystają z minimów EN 1993-1-8, tabela 3.3, dla odległości od krawędzi i rozstawu, i informują, gdy blacha jest głębsza niż środnik belki między jej zaokrągleniami albo gdy śruby leżą zbyt blisko przyciętego końca belki.
- [Sprawdzenie kolizji](topic:clash-check) pomija blachę i elementy, które łączy: mają się stykać.
