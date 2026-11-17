---
title: Menu, klawisze i mysz
summary: Wybierz styl menu pasujący do Twojego sposobu pracy, przypisz dowolnemu poleceniu własny klawisz, przenoś polecenia między kartami wstążki i ustaw, co robi kółko oraz przyciski myszy.
keywords: styl menu, menu, wstążka, pasek narzędzi, wiersz poleceń, skróty klawiszowe, klawisze, dostosuj, przypisz ponownie, mysz, kółko, odwróć, kierunek powiększania, środkowy przycisk, prawy przycisk, przesuń, obróć, eksport, import, przełączanie, klasyczne kreślenie, wstążka stalowa
from: 4132c6e5
---

Polecenia DetailCraft działają tak samo, niezależnie od tego, jak do nich dotrzesz. **Styl menu** decyduje tylko o tym, gdzie leżą na ekranie, jak się nazywają i jakimi klawiszami się je uruchamia. Wybierz go w {{ui:Ustawienia}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menu, klawisze i mysz}}; zmiana działa od razu, a ta przeglądarka ją zapamiętuje.

## Trzy style

| Styl | Co dostajesz |
|---|---|
| {{ui:DetailCraft}} | Własny pasek narzędzi DetailCraft (Plik, Umieść, Połącz, Edycja, Wyjście) i jednoliterowe klawisze: {{key:V}} zaznacz, {{key:B}} belka, {{key:C}} słup, {{key:R}} stężenie, {{key:P}} blacha, {{key:F}} ława, {{key:S}} schody. Start. |
| {{ui:Klasyczne kreślenie}} | Dla osób, które wpisują polecenia: mała wstążka ({{ui:Start}}, {{ui:Widok}}, {{ui:Wyjście}}) i wiersz poleceń. Wpisz BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (Cofnij), ZOOM, PLAN, 3D, DRAWINGS, NC lub HELP i naciśnij {{key:Enter}}; {{key:Enter}} na pustym polu powtarza ostatnie polecenie, {{key:Esc}} je czyści. Zacznij pisać gdziekolwiek, a litery trafią do wiersza poleceń. Środkowy przycisk przesuwa widok; w 3D {{key:Shift}} i środkowy przycisk obracają. |
| {{ui:Wstążka stalowa}} | Karty ułożone tak, jak w programach do detalowania stali: {{ui:Modelowanie}} (elementy, beton, schody), {{ui:Detalowanie}} (połączenia), {{ui:Edycja}}, {{ui:Rysunki}} (rysunki i raporty), {{ui:Produkcja}} (pliki NC, IFC) oraz {{ui:Widok}}, z menu {{ui:Plik}} i szybkimi przyciskami po prawej. Klawisze jednoliterowe zostają. Środkowy przycisk przesuwa widok; w 3D lewy przycisk obraca model. |

Każdy styl zachowuje {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} i {{key:Mod+A}}. Wstążki zawierają też {{ui:3D}}, {{ui:Rzut}}, {{ui:Elewacja}} i {{ui:Dopasuj}} z paska widoku.

:::tip
Klawisz należący do układu DetailCraft, ale przypisany w Twoim stylu innemu poleceniu, nic nie robi, a wiersz stanu mówi, dokąd trafiło jego polecenie (na przykład: W „Moja wstążka stalowa” Słup to Ctrl+Alt+C). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strzałki zawsze zachowują swoje znaczenie, a gdy element jest w połowie umieszczania albo kopia podąża za wskaźnikiem, litery należą do DetailCraft.
:::

## Dostosuj do siebie

1. Wybierz styl najbliższy temu, czego chcesz, potem kliknij {{ui:Dostosuj…}}.
2. Na {{ui:Klawisze i menu}} znajdź polecenie (pomaga pole wyszukiwania). Kliknij {{ui:Dodaj klawisz}} i naciśnij klawisz albo dwa klawisze pod rząd dla klawisza dwuliterowego. Kliknij klawisz, aby go usunąć.
3. W stylu z wstążką {{ui:Gdzie jest}} przenosi polecenie do innej karty i panelu, do menu {{ui:Plik}} albo do {{ui:Tylko klawisze}}.
4. Na {{ui:Mysz}} ustaw kółko, przyciski przesuwające rzut i elewację oraz to, co robi każdy przycisk w widoku 3D.
5. Nadaj nazwę i kliknij {{ui:Zapisz}}.

Zapisanie wbudowanego stylu tworzy Twoją własną kopię („Moja wstążka stalowa”); wbudowany styl się nie zmienia. Klawisz przypisany do dwóch poleceń jest pokazywany na czerwono i trzeba go poprawić, zanim da się zapisać.

## Mysz

- **Kółko myszy**: {{ui:Przewinięcie w górę powiększa}} (start) albo {{ui:Przewinięcie w górę pomniejsza}}, oraz jak szybko. Szczypnięcie na gładziku zawsze powiększa zgodnie z ruchem palców.
- **Przesuwanie rzutu i elewacji przyciskiem**: środkowym, prawym lub obydwoma. Przy narzędziu {{ui:Zaznacz}} lewy przycisk zawsze rysuje okno zaznaczenia.
- **Przeciąganie w widoku 3D**: {{ui:Każdego widoku osobno}} zachowuje przyciski DetailCraft (lewy obraca, środkowy powiększa, prawy przesuwa). Albo ustaw każdy przycisk na obrót, przesuwanie, powiększanie lub nic; {{key:Shift}} z przyciskiem, który obraca lub przesuwa, zamienia te dwa działania miejscami.

## Zabierz ze sobą

{{ui:Eksport}} zapisuje używany styl jako mały plik `.ccinput.json`; {{ui:Importuj…}} dodaje taki plik z innego komputera albo od kolegi. Zaimportowany plik może wskazywać wyłącznie polecenia DetailCraft: wszystko inne jest pomijane i liczone w wierszu stanu. {{ui:Usuń ten styl}} usuwa jeden z Twoich własnych.

:::note
Te ustawienia zostają w tej przeglądarce. {{ui:Używaj tego stylu we wszystkich aplikacjach}} pod kartami stylów sprawia, że każda aplikacja otwiera się w pasującym jej stylu (własnym pasku narzędzi, wstążce lub klasycznym kreśleniu), z zmianami, które wprowadziłeś w każdej z nich. DetailCraft nie ma stylu z paskiem menu: gdy pasek menu innej aplikacji zostanie wybrany dla wszystkich aplikacji, DetailCraft zachowuje własny pasek narzędzi.
:::

Powiązane: [Klawiatura i mysz](topic:keyboard) · [Ustawienia DetailCraft](topic:settings) · [Przejście z innego oprogramowania do detalowania](topic:coming-from)
