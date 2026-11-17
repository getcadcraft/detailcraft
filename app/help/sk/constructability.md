---
title: Kontroly konštruovateľnosti
summary: Problémy pre veci, ktoré detailér zachytí pohľadom: skrutka, ku ktorej kľúč nedosiahne, skrutky príliš blízko pre nástrčku, kútové zvary mimo ich limitov veľkosti, zvary, ku ktorým horák nedosiahne, a rúry, ktoré zadržiavajú vodu.
keywords: konštruovateľnosť, kľúč, nástrčka, prístup ku skrutke, uťahovanie, veľkosť zvaru, kútový zvar, minimálny zvar, maximálny zvar, voda, odvetrávací otvor, odvodňovací otvor, zinkovanie, dutý profil, problémy
from: 72315151
---

DetailCraft hľadá štyri druhy problémov, ktoré žiadna pevnostná kontrola nenájde, a vypíše ich na paneli {{ui:Problémy}}. Sú to upozornenia a poznámky, na ktoré sa treba pozrieť, nie chyby: model sa aj tak vytvorí.

## Skrutka, ku ktorej kľúč nedosiahne

Pre každú skrutku DetailCraft nasadí nástrčku na hlavu a na maticu. Nástrčka je valec tak široký, ako je matica cez rohy, plus stena 4 mm, dlhý 60 mm. Ak v tom valci stojí stojina nosníka, príruba, doska alebo diagonála, problém pomenuje spoj, počet skrutiek, ktorá časť je v ceste a aká je od skrutky vzdialená.

Nástrčka je typická rázová nástrčka. Očkový kľúč potrebuje menej miesta a väčší nástroj viac. Požiadajte pripojeného asistenta, aby spustil `constructability_check` s iným `socketLength`, a uvidíte, ako sa odpoveď mení.

## Skrutky príliš blízko pre nástrčku

Nástrčka nad jednou skrutkou sa nesmie dotýkať hlavy ďalšej. Skrutky spoja, ktoré sú bližšie než šírka nástrčky plus hlava susednej skrutky, sú uvedené s nájdeným rozstupom a potrebným rozstupom.

## Veľkosti kútových zvarov

AISC 360-16 tabuľka J2.4 nastavuje najmenší kútový zvar podľa hrúbky tenšej časti (3 mm do hrúbky 6.35 mm, 5 mm do 12.7, 6 mm do 19.05, 8 mm nad to), a J2.2b najväčší pozdĺž hrany materiálu: nie väčší než materiál, keď je tenší než 6.35 mm, inak o 1.6 mm menší. Spoje s rovnakou veľkosťou na rovnakej hrúbke sú uvedené ako jeden problém.

Použitá hrúbka je najtenšia časť, ktorú zvar pomenúva, takže 8 mm zvar dookola nosníka so stojinou 6.35 mm je uvedený.

## Voda a odvetrávanie

- **Otvorený horný koniec** dutého profilu, ktorý stojí zvisle alebo má sklon väčší než 10°, púšťa dažďovú vodu dnu.
- Dutý profil **uzavretý na oboch koncoch** potrebuje odvetrávací a odvodňovací otvor; vyžaduje ho ponorové zinkovanie aj tlak ohriateho vzduchu.

## Dosiahne to zvárač

Kútový zvar sa robí s horákom uprostred medzi dvoma plochami, ktoré spája. Pre každý kútový zvar dookola (čelná doska, pätná doska, zošikmená doska) kontrola vezme obrys prierezu prvku pri doske a každých 20 mm prejde dráhu horáka von pod 45° od miesta, kde jeho hubica (predvolene polomer 10 mm) prvýkrát uvoľní obe plochy, ďalších 30 mm. Ak dráha narazí na vlastnú prírubu nosníka alebo na inú časť, tento podiel zvaru sa uvedie s časťou a vzdialenosťou. Tieto čísla sú typické, nie normové: pýtajte sa svojho výrobcu na postup a hubicu. Zvary pozdĺž dvoch hrán (šmyková doska) nie sú lokalizované a nekontrolujú sa.
