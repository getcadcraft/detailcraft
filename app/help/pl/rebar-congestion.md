---
title: Mapa zagęszczenia zbrojenia
summary: Zobacz, jak ciasno zbrojenie zostawia każdą stopę dla dojścia betonu, przy podanym kruszywie i wibratorze.
keywords: zbrojenie, zagęszczenie, rozstaw, prześwit, układanie betonu, kruszywo, wibrator, pręty startowe, haki, stopa, płyta fundamentowa
from: 40d029e6
---

Karta {{ui:Zagęszczenie}} rysuje mapę ciepła każdej stopy widzianej z góry. Jasnoniebieski oznacza wolne miejsce; żółty i pomarańczowy oznaczają ciasno; czerwony jest ciaśniejszy, niż wymagają pręty. Ciemne komórki to same pręty.

## Co mierzy mapa

Beton opada przez stal warstwa po warstwie i może przemieszczać się w bok między warstwami. Dlatego w każdym punkcie mapa bierze najwęższy wolny prześwit w dowolnej warstwie: między prętami dolnej siatki, między kolejną warstwą prętów oraz między ramionami haków prętów startowych u góry. Pręty startowe przechodzą przez wszystkie z nich.

## Co uznaje się za ciasne

Wymagany prześwit to większa z wartości: 25 mm i średnica pręta (ACI 318-19 25.2.1), albo dla prętów BS 4449 — większa z wartości: średnica pręta i 20 mm (EN 1992-1-1 8.2). Dwa pola podwyższają tę wartość:

- {{ui:Największe kruszywo}}: wymagany prześwit staje się 4/3 wielkości kruszywa (ACI) albo kruszywem plus 5 mm (EN).
- {{ui:Głowica wibratora}}: wymagany prześwit wynosi co najmniej średnicę głowicy.

Oba pola zaczynają od 0, co oznacza nieznane: DetailCraft nie zna mieszanki ani pompy.

## Problemy

Stopa z miejscem ciaśniejszym niż wymagane jest wymieniona w panelu {{ui:Problemy}} z wykrytym i wymaganym prześwitem. {{ui:Zaznacz}} obok mapy zaznacza stopę.

Mapa nie uwzględnia strzemion, łączników mechanicznych, kanałów instalacyjnych ani prętów samego słupa.
