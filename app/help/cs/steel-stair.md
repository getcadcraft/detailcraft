---
title: Generátor ocelového schodiště
summary: Ocelové schodiště podle výšky podlaží, délky ramene a šířky: výška a hloubka stupně podle sady pravidel, podesty, madla a výplně, výkresy a seznam řezů s hmotnostmi.
keywords: ocelové schodiště, generátor schodiště, tětiva, stupnice, rošt, ohnutý plech, podesta, madlo, výplně, výška, hloubka, osha, ibc, approved document k, seznam řezů, hmotnosti, dílenský výkres
from: a4f0a985
---

Generátor schodiště vytvoří celé ocelové schodiště z několika čísel: tětivy, stupně, podesty, když je rameno příliš vysoké, madla se sloupky a výplněmi, otvory pro upevnění v tětivách, seznam řezů s hmotnostmi a dílenské výkresy. Začíná v nástroji {{ui:Schodiště}}, jako prosté schodiště (viz Schodiště), s jedním přepínačem navíc.

## Umístění ocelového schodiště

1. Zvolte {{ui:Schodiště}} ve skupině {{ui:Umístit}}, nebo stiskněte {{key:S}}.
2. Vpravo zaškrtněte {{ui:Použít generátor ocelového schodiště}}.
3. Zvolte **sadu pravidel** pro místo, kde se schodiště staví, **výšku** (podlaží na podlaží; 0 = až k další úrovni), **dostupnou délku** (0 = nechat rozhodnout pravidlo), **volnou šířku** a **typ stupně**: rýhovaný plech, rošt nebo ohnutý plechový stupeň.
4. Nastavte průřez tětivy, podesty (podle pravidla, nebo číslo), madla (oboustranně, jednostranně, žádné), výšku madla a mezeru výplní.
5. Klikněte na průsečík os: to je patka první podstupnice.

Vyberte schodiště (klikněte na tětivu, stupeň nebo madlo), chcete-li změnit jakékoli nastavení; vlastnosti ukazují podstupnice, hloubku stupně, sklon, ramena a podesty, ocel v něm, seznam řezů a zdroje sady pravidel.

## Sady pravidel

Sada pravidel omezuje tvar schodiště: výšku a hloubku stupně, 2 × podstupnice + hloubka stupně, sklon, podestu, výšku madla a největší otvor. DetailCraft nabízí níže uvedené; oblast je nastavení, ne odhad. V vlastnostech otevřete **Odkud pocházejí čísla této sady pravidel**: každé číslo uvádí svůj zdroj a říká, jak dobře bylo ověřeno.

- **International Building Code 2021**: podstupnice 4 až 7 in., stupeň alespoň 11 in., madla 34 až 38 in. Limit 12 ft mezi podestami je zobrazen jako *nepřečtený* a čísla madel jako přečtená z materiálů citujících předpis: před spolehnutím je ověřte.
- **OSHA 29 CFR 1910.25 a 1910.29** (průmyslová normová schodiště): 30° až 50°, podstupnice nejvýše 9.5 in., stupeň alespoň 9.5 in., šířka alespoň 22 in., podesty stejně široké jako schodiště a 30 in. hluboké, horní madlo použité jako zábradlí 36 až 38 in. Tyto hodnoty byly přečteny přímo v předpisu.
- **Approved Document K 2013, Anglie** (obecná přístupová a užitková schodiště): rozsahy výšky a hloubky a 2 × podstupnice + hloubka stupně 550 až 700 mm, přečteno ve vládou zadané zprávě, která je tabuluje. Dokument DetailCraft nedává výšku madla, takže se použije výška, kterou nastavíte, a seznam Problémy to uvede.

Sada pravidel, která zde není, se nehádá: schodiště pak sleduje prosté pravidlo pohodlí 600 až 650 mm a uvede, že pravidlo nemá.

## Co vypočítá

- **Podstupnice a hloubka stupně.** Nejmenší počet podstupnic, jejichž 2 × podstupnice + hloubka stupně leží uprostřed rozsahu pravidla, aniž by hloubka klesla pod minimum pravidla. Je-li zadán průběh, hloubka stupně je průběh dělený stupni a cokoli mimo pravidlo se oznámí.
- **Ramena a podesty.** Rameno vyšší, než pravidlo dovoluje, se rozdělí podestou stejně širokou jako schodiště a ne užší než minimum pravidla; podesty lze také vyžádat. Podesta je rám ze dvou bočních nosníků a dvou příčných úhelníků pod krytinou, na dvou sloupcích.
- **Stupně.** Rýhovaný plech je svařený plech (ve výchozím nastavení 6 mm, vzor se do hmotnosti nepřidává). Ohnutý plechový stupeň má zahnutí na hraně a je přišroubován skrz stojinu tětivy: dva otvory o 2 mm větší než šroub, ve 0.3 a 0.7 hloubky. Rošt se kreslí jako plech stejné hmotnosti (hloubka nosné lišty × tloušťka ÷ rozteč); příčné lišty a lemování se nepočítají a seznam řezů to uvádí.
- **Madla.** Trubkové horní madlo na sloupcích podél každého ramene a každé podesty; mezera výplní, kterou nepřejde koule větší než otvor pravidla (ve výchozím nastavení nejvýše 100 mm).

## Výkresy, seznam řezů, export

- Rameno je jedna sestava; madla jsou jiná (obě strany jsou stejná sestava, vytvořená dvakrát). Každá má svůj výkres sestavy a výkres tětivy ukazuje její otvory.
- **List schodiště** (ST-…) ukazuje rovnou tětivu každého ramene s polohami otvorů zapsanými od spodního konce, a detail stupně: řez, hranu, zahnutí a koncovou přírubu s jejími otvory.
- {{ui:Seznam řezů a hmotnosti}} ve vlastnostech vypisuje každý průřez a délku s počty a kilogramy; {{ui:Stáhnout seznam řezů (CSV)}} jej uloží.
- Vše jde do kusovníku, souborů NC a IFC jako běžné díly (IfcMember, IfcColumn, IfcPlate).

## Dobré vědět

- Toto je výchozí bod, ne návrh. Nic se nekontroluje na pevnost ani průhyb; sada pravidel omezuje jen tvar.
- Konce tětiv proti podlažím jsou řezány kolmo a nejsou detailovány; sloupky podest stojí na podlaží pod nimi a nemají patní plechy.
- Umístění schodiště jako jednoho prvku v BimCraft ještě není propojeno.
