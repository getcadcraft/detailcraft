---
title: Kontroleer die IFC-uitvoer teen 'n kliënt se IDS
summary: Laai die .ids-lêer wat jy gekry het en sien onder Probleme elke uitgevoerde onderdeel wat daaraan nie voldoen nie, voordat jy die IFC stuur.
keywords: ids, inligtingsleweringspesifikasie, buildingsmart, vereistes, aflewering, kontrole, validering, qa, ifc-uitvoer, eienskap, materiaal, verkryging
from: 50d0f785
---

## Wat jy sal doen

'n IDS (Information Delivery Specification, 'n buildingSMART-standaard) is die lys van wat 'n IFC moet bevat. DetailCraft kontroleer die IFC wat dit sou uitvoer (dieselfde lêer wat {{ui:IFC}} skryf) teen die IDS wat jy gekry het, en lys elke onderdeel wat tekortskiet.

## Stappe

1. Maak jou model oop of teken dit.
2. Klik op {{ui:Kontroleer teen IDS…}} in die {{ui:Uitvoer}}-groep van die nutsbalk.
3. Klik op {{ui:Laai 'n .ids-lêer…}} en kies die lêer. Niks word opgelaai nie.
4. Lees die resultaat: elke spesifikasie met {{ui:Slaag}} of {{ui:Faal}} en hoeveel elemente dit geld.
5. Maak Probleme oop ({{key:Ctrl+Shift+M}}) en klik op 'n fout: die lid, verbinding, trap of fondasie waarvandaan dit kom, word gekies en die aansig zoem daarna.

## Wat jy behoort te sien

- Een waarskuwing per uitgevoerde element en vereiste wat dit mis, met die spesifikasie se naam, wat die IDS vra en wat die uitvoer het.
- Die kontroleverslag (in Probleme) begin met die IDS: sy titel, weergawe, outeur en elke spesifikasie se tellings.

## Goed om te weet

- Die IDS word in die modellêer gestoor, so dit word weer nagegaan wanneer jy die model oopmaak. Laai of vergeet dit is een stap wat jy kan ontdoen.
- Elke verandering word 'n oomblik later weer nagegaan; op 'n groot model wag die kontrole 'n bietjie langer tussen loopbeurte.
- Die uitvoer se GlobalIds kom uit die modelnaam en die onderdeelnommers binne DetailCraft, so hulle bly dieselfde van een kontrole na die volgende. As jy die model hernoem, kry elke element nuwe GlobalIds.
- Getalle word in SI-eenhede vergelyk (die uitvoer is in millimeter; lengtes word eers na meter omgeskakel).

- Patrone in die IDS word as die hele waarde gelees. 'n `^` aan die begin en 'n `$` aan die einde word ook as "die hele waarde" geneem, soos die meeste IDS-lêers dit bedoel.

## Volgende

- [Voer IFC uit](topic:ifc-export)
