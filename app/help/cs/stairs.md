---
title: Schodiště
summary: Umístěte přímé ocelové schodiště podle výšky, hloubky stupně a šířky: dvě tětivy a plechové stupně, jedna svařená sestava.
keywords: schodiště, schody, tětiva, stupnice, podstupnice, hloubka stupně, hrana stupně, rameno, ocelové schodiště, ibc 1011, blondel
from: 62fa3845
---

Přímé ocelové schodiště: dvě tětivy (profily U s patkami dovnitř nebo ploché pásy na hraně) a plechová stupnice u každého schodu, svařená mezi nimi. DetailCraft spočítá počet podstupnic z výšky, zkontroluje je vůči limitům stavebního předpisu a vytvoří schodiště jako jednu dílenskou sestavu.

## Umístění schodiště

1. Zvolte {{ui:Schodiště}} ve skupině {{ui:Umístit}}, nebo stiskněte {{key:S}}.
2. Nastavte schodiště vpravo: **směr stoupání** (0° stoupá podél +x, 90° podél +y), **výšku** (0 = až k další úrovni), **hloubku stupně**, **volnou šířku** mezi tětivami, **nejvyšší povolenou podstupnici**, **tětivu**, **tloušťku plechu stupně**, **hranu stupně** a materiál.
3. Klikněte na průsečík os: to je patka první podstupnice na střední ose schodiště.

Stavový řádek uvede, kolik podstupnic vytvořil. Vyberte schodiště (klikněte na tětivu nebo stupeň), chcete-li změnit kterékoli jeho nastavení, polohu nebo fázi; vlastnosti také ukazují podstupnice, stupně, průběh, sklon a 2 × podstupnice + hloubka stupně.

## Co DetailCraft spočítá

- **Podstupnice.** Tolik, aby každá zůstala na nebo pod nejvyšší povolenou: výška 3000 mm při 178 mm nebo méně dá 17 podstupnic po 176.5 mm. Stupňů je o jeden méně než podstupnic (horní podlaží je poslední krok).
- **Stupně.** Plech hloubky stupně + hrana (280 + 25 = PL6x305 ve výchozím nastavení) a dlouhý jako volná šířka, jeho horní hrana ve výšce každé podstupnice, jeho přední hrana (hrana stupně) před čarou podstupnice.
- **Tětivy.** Ve sklonu schodiště, od místa, kde se stýkají se spodním podlažím, po místo, kde se stýkají s horním, těsně za volnou šířkou; jejich horní hrana 50 mm nad čárou hran stupňů. Patky profilu U směřují dovnitř schodiště; ploché pásy jako PL12x250 stojí na hraně.
- **Svary.** Každý stupeň k oběma tětivám. Stupně a pravá tětiva jsou svařeny k levé tětivě, takže schodiště dostane jednu značku sestavy (ST1) a vlastní výkres sestavy; tětivy dostanou označení dílů st…, stupně p….
- **Kontroly.** Varování, když je podstupnice mimo 4 až 7 in. (102 až 178 mm) nebo je hloubka stupně pod 11 in. (279 mm), což jsou limity IBC 2021, oddíl 1011.5.2; když je 2 × podstupnice + hloubka stupně mimo 600 až 650 mm (běžné pravidlo pohodlí); a když je tětiva příliš mělká, aby unesla stupně. Neznámý profil tětivy zastaví stavbu schodiště.

## Dobré vědět

- Posun, otočení, zrcadlení, kopírování, vložení, smazání a fáze fungují u schodiště jako u prutu. Otočení otáčí směr stoupání; zrcadlení jej pošle zrcadlově.
- Tětivy se exportují do IFC jako IfcMember a stupně jako IfcPlate; obojí jde do souborů NC a kusovníku. [Kontrola kolizí](topic:clash-check) nechává vlastní díly schodiště být (jsou svařeny dohromady).
- Toto prosté schodiště je jedno rameno s plechovými stupni. Pro podesty, madla s výplněmi, stupně z ohnutého plechu nebo roštu, zvolenou sadu pravidel, seznam řezů a výkresy otvorů v tětivách zaškrtněte {{ui:Použít generátor ocelového schodiště}} v nástroji Schodiště (viz Generátor ocelového schodiště).
- Tětivy jsou řezány kolmo: jejich koncové řezy proti podlažím se neprovádějí.
- DetailCraft schodiště nenavrhuje: tětivy a stupně se nekontrolují na pevnost ani průhyb.
