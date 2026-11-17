---
title: Fases
summary: Verdeel die model in fases (opbou-reekse of leweringe), wys of verberg elke fase, plaas dele in 'n fase, en nommer merke per fase.
keywords: fase, fases, fasebestuurder, opbou-reeks, lewering, lading, reeks, verberg fase, wys fase, filter, nommering, merkvoorvoegsel, per fase
from: bae506f5
---

'n Fase is 'n groep dele wat saam gemaak, gelewer of opgebou word: 'n opbou-reeks, 'n lewering, 'n lading. Elke lid en fondasie is in een fase. 'n Verbinding is in die fase van sy hoofelement: die balk van 'n eindplaat, die kolom van 'n basisplaat. 'n Nuwe model het een fase.

## Die Fases-paneel

Die {{ui:Fases}}-afdeling van die {{ui:Model}}-paneel lys elke fase:

- die blokkie wys of verberg die fase in die aansig;
- die nommer, en 'n naam wat jy kan tik (leeg = "Fase 2" ensovoorts);
- hoeveel dele daarin is;
- die {{ui:×}}-knoppie verwyder 'n fase. Net 'n leë fase kan gaan: plaas eers sy dele in 'n ander fase.

{{ui:Voeg fase by}} voeg die volgende nommer by en maak dit die fase waarin nuwe dele gaan.

## Plaas dele in 'n fase

- **Nuwe dele:** {{ui:Nuwe dele gaan in}} kies die fase waarin elke lid en fondasie wat jy van nou af plaas, gaan.
- **Een deel:** kies dit en verander {{ui:Fase}} in die {{ui:Eienskappe}}-paneel.
- **Baie dele:** kies hulle ('n venster, {{key:Shift}}+klik, {{key:Mod+A}}) en verander {{ui:Fase}} bo in die {{ui:Eienskappe}}-paneel. Dit wys **Wissel** wanneer hulle in verskillende fases is. Een verandering is een ontdoen-stap.

Kopieë hou die fase van die deel waarvan hulle gekopieer is, ook wanneer hulle in 'n ander model geplak word (die fase word daar bygevoeg).

## Wys en verberg fases

'n Verborge fase word nie in die aansig geteken nie, kan nie geklik of deur 'n keuse-venster gevang word nie, en {{key:Mod+A}} laat dit uit. Dit is steeds in die materiaallys, die verslae, die tekeninge en elke uitvoer. Verberg is net vir die aansig: dit word nie gestoor nie en het geen ontdoen nie.

## Merke per fase

Met **Nommer merke per fase** aan (dit begin aan) en dele in meer as een fase, word elke fase op sy eie genommer en sy merke begin met die fasenommer: deelmerke 1-b1, 2-b1, samestellingsmerke 2-B1, fondasies 2-F1. Twee identiese balke in verskillende fases het dan verskillende merke, omdat hulle op verskillende tye gemaak en gestuur word. Met een fase in gebruik het merke geen voorvoegsel nie. Skakel dit af om die hele model as een te nommer, sodat identiese stukke 'n merk deel, ongeag hul fase.

Die fase word in die IFC-uitvoer geskryf (eiendomstel DetailCraft, Phase).

:::note
Modelle met fases word in DetailCraft se lêerformaat 2 gestoor. Die 0.3-vrystelling van DetailCraft kan hulle nie oopmaak nie; hierdie een open ouer lêers, met elke deel in fase 1.
:::
