---
title: Voer 'n KISS-lêer uit vir vervaardigingsagteware
summary: Stuur die materiaallys na 'n vervaardigingsbestuursprogram (MIS) as 'n KISS 1.1-lêer: samestellings, dele, fases as reekse, gate, uitsnydings en lasse.
keywords: kiss, kss, mis, vervaardigingsbestuur, produksiebeheer, beraming, materiaallys, bom, uitvoer, fabtrol, reeks
from: 30cf3951
---

In die {{ui:Uitvoer}}-groep maak {{ui:Meer}} oop en kies {{ui:KISS-lêer vir vervaardigingsagteware}}. DetailCraft laai `<name>.kss` af, 'n KISS-lêer ("Keep It Simple, Steel", weergawe 1.1), die platte-teksformaat waaruit die meeste vervaardigingsbestuursprogramme 'n materiaallys invoer.

## Wat daarin is

- Die kop: 'n werknommer (die eerste agt letters en syfers van die modelnaam), die modelnaam, die datum en tyd, en of groottes metries is.
- Vir elke samestellingsmerk: die hoofdeel (hoeveelheid = hoeveel van die samestelling), 'n tekeningreël (A-B1 en so meer, die samestellingstekening se nommer), 'n samestellingsreël (naam, tipe, gewig, algehele lengte, diepte en breedte), een reeksreël per [fase](topic:phases) waarin die samestelling is, en arbeidsreëls: gate (hoeveel, deursnee, dikte deur), uitsnydings en lasse.
- Dan elke deel daaraan geheg, met die **totale** hoeveelheid (per samestelling × samestellings), soos die standaard vra.
- Los boute en ankerstawe op tekening BOLTS, samestelling FIELD.
- Elke reël gee die tipe (W, C, L, HSS, PL, of MI vir 'n pasgemaakte profiel), grootte, graad, snylengte in millimeter, deelnaam en gewig.

## Imperiaal of metries

In [DetailCraft-instellings](topic:settings) kies **KISS-lêergroottes**:

- **Outomaties** (die begin): imperiaal wanneer elke lid 'n AISC-vorm is, andersins metries.
- **Imperiaal**: vorms volgens hul AISC-benaming (W 16X26, HSS 4X4X.250); plate en boute, wat DetailCraft in millimeter hou, tot die naaste 1/16 duim; gewigte in pond.
- **Metries**: Europese vorms volgens hul naam (IPE300), plate as dikte X breedte in millimeter; gewigte in kilogram.

Lengtes is altyd in millimeter met twee desimale, ongeag die instelling: die KISS-standaard vra dit, en die ontvangsprogram skakel hulle om.

:::note
Grade word ingekort tot die standaard se agt karakters: A572 Gr 50 word A572-50. Kommas in name word spasies (die formaat het geen aanhalingstekens nie). Kontroleer een invoer in jou program voordat jy daarop staatmaak: DetailCraft se KISS-lêers word hier teen die standaard nagegaan, nog nie in 'n vervaardigingsprogram nie.
:::
