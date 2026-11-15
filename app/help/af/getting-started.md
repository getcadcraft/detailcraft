---
title: Aan die gang met DetailCraft
summary: Wat DetailCraft vandag doen, hoe om dit oop te maak, en ’n eerste model van roosters tot ’n werkswinkeltekening in tien minute.
keywords: begin, eerste model, inleiding, staaldetaillering, wapening, vinnige begin, tutoriaal, oorsig
from: e4f16bbe
---

DetailCraft is die staal- en wapeningdetailleringsprogram in die CadCraft-familie. Jy bou ’n 3D-model van ’n staalraamwerk op roosters en vlakke, verbind dit, en kry wat die werkswinkel nodig het: onderdeel- en samestellingsmerke, ’n materiaallys, enkeldeel-werkswinkeltekeninge, DSTV NC-lêers, ’n IFC-model, en ’n buigskedule vir die fondasies.

Dit is ’n vroeë weergawe. Dit doen ’n kort lys dinge noukeurig in plaas daarvan om alles tegelyk te doen. Lees [Wat nog nie gebou is nie](topic:not-built-yet) voordat jy werklike werk daarom beplan.

## Wat dit vandag doen

- Roosters en vlakke wat jy in millimeter intik.
- Kolomme, balke, skoorte en plate uit gepubliseerde profielkataloë (AISC W, S, C, L, HSS en Pipe; Europese IPE, HEA, HEB en UPN; Britse UB, UC, PFC, EA, UEA, SHS, RHS en CHS), plus jou eie parametriese profiele.
- Twee verbindings: ’n geboute eindplaat van ’n balk na ’n kolomflens, en ’n kolom-basisplaat met vier ankerstawe. Elk kan na elke soortgelyke knoop gekopieer word.
- Gate en uitsnydings wat volgens posisie ingetik word.
- Reghoekige plaatfondasies met ’n onderste mat en beginstawe.
- Onderdeel- en samestellingsmerke wat na elke verandering self opdateer.
- Uitvoere: IFC4, DSTV NC-lêers (I-profiele en plate), materiaallys as CSV, buigskedule as CSV, en ’n werkswinkeltekening-PDF van een deel.

## Maak DetailCraft oop

1. Maak DetailCraft oop in ’n rekenaarblaaier: Chrome, Edge, Firefox of Safari. Sien [Blaaiers en rekenaars](common:browsers).
2. Wag tot die skerm vol is. Die statusbalk onderaan sê "Gereed. Maak die Voorbeeld oop, of stel roosters en vlakke in en begin lede plaas."

Die modelaansig benodig 3D-grafika (WebGL). As die middel van die skerm sê "Hierdie blaaier kon nie 3D-grafika (WebGL) begin nie", sien [Foutoplossing](topic:troubleshooting#the-3d-view-is-missing).

:::note
Jou modelle bly op jou rekenaar. Om ’n model oop te maak, lees dit in die blaaier, en stoor laai ’n lêer af. Niks word opgelaai nie. Wolkstoor is nog nie beskikbaar nie. Sien [Waar jou lêers gaan](common:your-files). Om DetailCraft later sonder ’n verbinding te gebruik, kies {{ui:Stoor vir vanlyn}} een keer in die programbalk terwyl jy aanlyn is; sien [Werk vanlyn](common:offline).
:::

:::offline
Jy is vanlyn. DetailCraft werk sonder ’n verbinding net as dit eerste vir vanlyn gebruik gestoor is: die {{ui:Stoor vir vanlyn}}-knoppie in die programbalk lees dan {{ui:Vanlyn gereed}}. Sien [Werk vanlyn](common:offline).
:::

## Kyk eers na die voorbeeld

Die vinnigste manier om te sien wat DetailCraft maak, is die voorbeeldraamwerk.

1. Kies {{ui:Voorbeeld}} in die {{ui:Lêer}}-groep van die nutsbalk.
2. Die aansig wys ’n raamwerk met twee baaie: ses kolomme met basisplate, vier balke met eindplate, een skoor en sewe fondasies met wapening.
3. Klik op ’n balk. Die {{ui:Eienskappe}}-paneel aan die regterkant wys sy onderdeelmerk, snylengte, gewig en die gate wat die eindplate gemaak het.
4. Maak die {{ui:Materiaallys}}-oortjie onderaan oop om elke onderdeelmerk met sy telling en gewig te sien.

Die stap-vir-stap-gids [Verken die voorbeeldraamwerk](topic:sample-model) gaan dit stuk vir stuk deur.

## Jou eerste model

’n Nuwe model het reeds roosters 1 tot 3 by A tot B op 6000 mm en twee vlakke, Vlak 1 op 0 en Vlak 2 op 4000.

1. Kies {{ui:Nuut}}. As die huidige model veranderinge het, vra DetailCraft eers of dit gestoor moet word.
2. Kies {{ui:Plan}} bo die aansig. Die vlaklys langs dit kies Vlak 1.
3. Kies {{ui:Kolom}} in die nutsbalk, of druk {{key:C}}.
4. Klik op die roosterkruising A/1. ’n W12x50-kolom verskyn van Vlak 1 tot Vlak 2. Die statusbalk sê waar dit gegaan het.
5. Klik op B/1, A/2 en B/2 om nog drie te plaas.
6. Kies Vlak 2 in die vlaklys, en kies dan {{ui:Balk}} of druk {{key:B}}.
7. Klik op A/1, en dan op A/2. ’n W16x26-balk verbind die twee kolomtoppe, met sy staalbo op die vlak.
8. Druk {{key:Esc}} om terug te gaan na {{ui:Kies}}, en klik dan op die balk.
9. Kies {{ui:Eindplate}} in die {{ui:Koppel}}-groep. Albei punte kry ’n geboute eindplaat, die balk word teruggesny om te pas, en die eerste eindplaat is nou gekies.
10. Klik weer op die balk.
11. Kies {{ui:Werkswinkeltekening}} in die {{ui:Uitvoer}}-groep. ’n Voorskou van die balk se werkswinkeltekening maak oop. Kies {{ui:Laai PDF af}}.
12. Druk {{key:Mod+S}} om die model te stoor. Die blaaier laai `Untitled.detailcraft.json` af.

Hernoem die model in die {{ui:Naam}}-veld links bo voordat jy stoor, sodat die lêer en elke uitvoer sy naam dra.

## Waarheen om daarna te gaan

- [’n Rondleiding deur die skerm](topic:workspace)
- [Stel roosters en vlakke op](topic:grids-and-levels)
- [Beweeg rond in die 3D-aansig](topic:navigate-3d), met ’n muis, ’n aanraakpaneel of ’n aanraakskerm
- [Van ander detailleringsagteware af](topic:coming-from), as jy ’n groot detailleringspakket ken
- [Hierdie hulp gebruik](common:help)
