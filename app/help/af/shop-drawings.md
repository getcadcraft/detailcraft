---
title: Maak werkswinkeltekeninge
summary: Een blad per deelmerk, almal op een slag gemaak: bekyk enige daarvan en laai een blad of die hele stel as PDF af op A4 tot A1 of ANSI B tot D, met gate, uitsnyings, afmetings en titelblok.
keywords: werkswinkeltekening, werkswinkeltekeninge, alle onderdele, groep, hele stel, enkelonderdeel-tekening, fabrikasietekening, pdf, detailtekening, stuktekening, druk
from: d25fe035
---

DetailCraft maak een blad per deelmerk, vir elke balk, kolom, diagonaal en plaat in die model, almal op een slag: jy hoef nie een vir een te kies nie. Identiese stukke deel 'n merk, so hulle deel 'n blad. Die blaaie word op die plek uit die model gemaak; hulle word nie gestoor of geredigeer nie.

## Maak die hele stel

1. Kies {{ui:Shop drawing}} in die {{ui:Output}}-groep. Niks hoef gekies te wees nie. Met 'n onderdeel gekies, open die venster op daardie onderdeel se blad. In die {{ui:Properties}}-paneel heet dieselfde knoppie {{ui:Shop drawing}} vir lede en {{ui:Plate drawing}} vir verbindings.
2. 'n Voorskou open, met die titel van die deelmerk, byvoorbeeld "Shop drawing b1". Die eerste lys langs die titel hou elke deelmerk met sy profiel, lengte en hoeveelheid: kies een om sy blad te sien. Die tweede lys verander die bladgrootte; die hele stel word op die nuwe een weer gemaak (sien [Algemene rangskikking- en samestellingstekeninge](topic:drawings#choose-the-sheet-size)).
3. Kies {{ui:Laai alles af}} (die knoppie wys die aantal blaaie) vir een PDF met 'n bladsy per deelmerk, `<name> Shop drawings.pdf`. Elke blad sê "Sheet 3 of 42" in sy titelblok. Of kies {{ui:Download this sheet}} vir die een waarna jy kyk, `<name> <mark>.pdf`.
4. Maak die voorskou toe met die × of {{key:Esc}}.

As {{ui:Shop drawing}} grys is, het die model nog geen onderdele nie.

## Wat op die blad is

Vir 'n I-profiel:

- **Aansig**, kykend na die lyf: die onderdeel met sy uitsnyings uitgesny, lyfgate as sirkels en flensgate as versteekte (stippel) lyne.
- **Boplens-plan**, van bo gesien, wanneer enige flens gate het. Onderflensgate wys stippel.
- **Snit** deur die profiel.
- **Afmetings:** geketende gatposisies langs die onderdeel plus die algehele lengte, lyfgathoogtes, die spoor, en uitsnyingsgroottes.
- **Gatlys:** elke groep gate, byvoorbeeld "8 x Ø22 in die boplens".
- **Sweislas**, wanneer die onderdeel plate het wat daaraan gesweis is.
- **Titelblok:** deelmerk, samestellingsmerk, profiel, materiaal, lengte, hoeveelheid, gewig elk en totaal, modelnaam en datum.

Vir 'n kanaal, hoek of holle profiel is die blad dieselfde, kykend na die lyf of die kant: 'n buis se wande is versteekte (stippel) lyne, en die snit gee die wanddikte.

Vir 'n plaat: die plaatvlak met sy gate, en sy rand as die snit.

## Skale

Die skaal word uit 'n lys gekies (1:1 tot 1:200) sodat die onderdeel op die blad pas. 'n Lang, vlak onderdeel sou te dun wees om by een skaal te lees, so wanneer die diepte op papier onder 30 mm sou uitkom, word die diepte op 'n groter skaal as die lengte geteken. Die aansigtitel sê dit dan, byvoorbeeld "length 1:20, depth 1:5 (not to one scale; dimensions govern)". Lees altyd groottes uit die afmetings, nie deur die blad te meet nie.

## Goed om te weet

- Die hoeveelheid is die aantal onderdele met daardie merk in die model. Merke kan na 'n verandering hernommer; sien [Kontroleer merke en die materiaallys](topic:marks-and-bom).
- Elke blad is een onderdeel op sy eie, sonder sweissimbole; samestellingstekeninge (met sweissimbole) en algemene rangskikkingstekeninge is in [Tekeninge](topic:drawings). Die blad kan nie in DetailCraft geredigeer of geannoteer word nie. Om dit te merk, maak die PDF oop in 'n PDF-merkprogram soos MarkupCraft.
- Die titelblok sê "DetailCraft lab build — millimeters".
- Teks gebruik die standaard PDF Helvetica-lettertipe. Karakters buite die Wes-Europese stel druk as "?", en die statusbalk tel hulle.

## Druk dit

Maak die afgelaaide PDF oop in jou PDF-leser en druk dit teen 100% (geen "pas by bladsy") op papier van die grootte wat jy gekies het, as jy wil hê die gestelde skale moet hou. Op 'n kleiner blad, skaal dit en steun op die afmetings.
