---
title: Aan die gang met DetailCraft
summary: Wat DetailCraft vandag doen, hoe om dit oop te maak, en 'n eerste model van roosters tot 'n werkswinkeltekening in tien minute.
keywords: begin, eerste model, inleiding, staaldetaillering, wapening, vinnige begin, handleiding, oorsig
from: 3682c0d8
---

DetailCraft is die staal- en wapeningsdetailleringsprogram in die CadCraft-familie. Jy bou 'n 3D-model van 'n staalraam op roosters en vlakke, koppel dit, en kry wat die werkswinkel nodig het: deel- en samestellingsmerke, 'n materiaallys, enkeldeel-werkswinkeltekeninge, DSTV NC-lêers, 'n IFC-model, en 'n buigskedule vir die fondasies.

Dit is 'n vroeë weergawe. Dit doen 'n kort lys dinge noukeurig eerder as alles op een keer. Lees [Wat nog nie gebou is nie](topic:not-built-yet) voordat jy werklike werk daaromheen beplan.

## Wat dit vandag doen

- Roosters en vlakke wat jy intik, in millimeter.
- Kolomme, balke, skore en plate uit gepubliseerde profielkataloë (AISC W, S, C, L, HSS en Pipe; Europese IPE, HEA, HEB en UPN), plus jou eie parametriese profiele.
- Twee verbindings: 'n geboute eindplaat vanaf 'n balk na 'n kolomflens, en 'n kolom-basisplaat met vier ankerstawe. Elk kan na elke soortgelyke gewrig gekopieer word.
- Gate en uitsnydings wat volgens posisie ingetik word.
- Reghoekige padfondasies met 'n onderste mat en beginstawe.
- Deel- en samestellingsmerke wat hulself na elke verandering bywerk.
- Uitvoere: IFC4, DSTV NC-lêers (I-profiele en plate), materiaallys as CSV, buigskedule as CSV, en 'n werkswinkeltekening-PDF van een deel.

## Maak DetailCraft oop

1. Maak DetailCraft oop in 'n rekenaarblaaier: Chrome, Edge, Firefox of Safari. Sien [Blaaiers en rekenaars](common:browsers).
2. Wag tot die skerm vul. Die statusbalk onderaan sê "Gereed. Maak die Voorbeeld oop, of stel roosters en vlakke in en begin lede plaas."

Die modelaansig het 3D-grafika (WebGL) nodig. As die middel van die skerm sê "Hierdie blaaier kon nie 3D-grafika (WebGL) begin nie", sien [Probleemoplossing](topic:troubleshooting#the-3d-view-is-missing).

:::note
Jou modelle bly op jou rekenaar. Om 'n model oop te maak, lees dit in die blaaier, en stoor laai 'n lêer af. Niks word opgelaai nie. Wolkstoor is nog nie beskikbaar nie. Sien [Waar jou lêers heen gaan](common:your-files). Om DetailCraft later sonder verbinding te gebruik, kies een keer terwyl jy aanlyn is {{ui:Stoor vir vanlyn}} in die programbalk; sien [Werk vanlyn](common:offline).
:::

:::offline
Jy is vanlyn. DetailCraft werk sonder 'n verbinding slegs as dit eers vir gebruik vanlyn gestoor is: die {{ui:Stoor vir vanlyn}}-knoppie in die programbalk lees dan {{ui:Vanlyn gereed}}. Sien [Werk vanlyn](common:offline).
:::

## Kyk eers na die voorbeeld

Die vinnigste manier om te sien wat DetailCraft maak, is die voorbeeldraam.

1. Kies {{ui:Voorbeeld}} in die {{ui:Lêer}}-groep van die nutsbalk.
2. Die aansig wys 'n raam met twee baaie: ses kolomme met basisplate, vier balke met eindplate, een skoor en sewe fondasies met wapening.
3. Klik op 'n balk. Die {{ui:Eienskappe}}-paneel aan die regterkant wys sy deelmerk, snylengte, gewig en die gate wat die eindplate gemaak het.
4. Maak die {{ui:Materiaallys}}-oortjie onderaan oop om elke deelmerk met sy telling en gewig te sien.

Die handleiding [Verken die voorbeeldraam](topic:sample-model) gaan dit stuk vir stuk deur.

## Jou eerste model

'n Nuwe model het reeds roosters 1 tot 3 by A tot B op 6000 mm en twee vlakke: Vlak 1 op 0 en Vlak 2 op 4000.

1. Kies {{ui:Nuut}}. As die huidige model veranderinge het, vra DetailCraft of hulle eers gestoor moet word.
2. Kies {{ui:Plan}} bo die aansig. Die vlaklys langs dit kies Vlak 1.
3. Kies {{ui:Kolom}} in die nutsbalk, of druk {{key:C}}.
4. Klik op die roosterkruising A/1. 'n W12x50-kolom verskyn van Vlak 1 tot Vlak 2. Die statusbalk sê waar dit gekom het.
5. Klik op B/1, A/2 en B/2 om drie meer te plaas.
6. Kies Vlak 2 in die vlaklys, kies dan {{ui:Balk}} of druk {{key:B}}.
7. Klik op A/1, dan op A/2. 'n W16x26-balk verbind die twee kolomkoppe, met sy staalbo op die vlak.
8. Druk {{key:Esc}} om terug na {{ui:Kies}} te gaan, en klik dan op die balk.
9. Kies {{ui:Eindplate}} in die {{ui:Koppel}}-groep. Albei punte kry 'n geboute eindplaat, die balk word teruggesny om te pas, en die eerste eindplaat is nou gekies.
10. Klik weer op die balk.
11. Kies {{ui:Werkswinkeltekening}} in die {{ui:Uitvoer}}-groep. 'n Voorbeeld van die balk se werkswinkeltekening maak oop. Kies {{ui:Laai PDF af}}.
12. Druk {{key:Mod+S}} om die model te stoor. Die blaaier laai `Untitled.detailcraft.json` af.

Noem die model in die {{ui:Naam}}-veld bo-links voordat jy stoor, sodat die lêer en elke uitvoer sy naam dra.

## Waar om heen te gaan

- ['n Toer van die skerm](topic:workspace)
- [Stel roosters en vlakke op](topic:grids-and-levels)
- [Beweeg rond in die 3D-aansig](topic:navigate-3d), met 'n muis, 'n trackpad of 'n aanraakskerm
- [Oorskakel vanaf ander detaillerings-sagteware](topic:coming-from), as jy 'n groot detaillerings-pakket ken
- [Hierdie hulp gebruik](common:help)
