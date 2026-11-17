---
title: Een KISS-bestand voor fabricagesoftware exporteren
summary: Stuur de stuklijst als KISS 1.1-bestand naar een programma voor fabricagebeheer (MIS): samenstellingen, onderdelen, fasen als volgordes, gaten, copings en lassen.
keywords: kiss, kss, mis, fabricagebeheer, productiebeheer, calculatie, stuklijst, bom, export, fabtrol, volgorde
from: 30cf3951
---

In de groep {{ui:Uitvoer}} opent u {{ui:Meer}} en kiest u {{ui:KISS-bestand voor fabricagesoftware}}. DetailCraft downloadt `<name>.kss`, een KISS-bestand ("Keep It Simple, Steel", versie 1.1), het platte-tekstformaat waaruit de meeste programma's voor fabricagebeheer een stuklijst importeren.

## Wat erin zit

- De kop: een opdrachtnummer (de eerste acht letters en cijfers van de modelnaam), de modelnaam, de datum en tijd, en of de maten metrisch zijn.
- Voor elke samenstellingsmarkering: het hoofdonderdeel (hoeveelheid = hoeveel van de samenstelling), een tekeningregel (A-B1 enzovoort, het nummer van de samenstellingstekening), een samenstellingsregel (naam, type, gewicht, totale lengte, diepte en breedte), één volgorderegel per [fase](topic:phases) waarin de samenstelling zit, en arbeidsregels: gaten (hoeveel, diameter, dikte doorheen), copings en lassen.
- Dan elk onderdeel dat eraan vastzit, met de **totale** hoeveelheid (per samenstelling × samenstellingen), zoals de norm vraagt.
- Losse bouten en ankerstaven op tekening BOLTS, samenstelling FIELD.
- Elke regel geeft het type (W, C, L, HSS, PL, of MI voor een eigen profiel), maat, staalkwaliteit, afsnedelengte in millimeters, onderdeelnaam en gewicht.

## Imperiaal of metrisch

In [DetailCraft-instellingen](topic:settings) kiest **KISS-bestandsmaten**:

- **Automatisch** (de standaard): imperiaal wanneer elke staaf een AISC-profiel is, anders metrisch.
- **Imperiaal**: profielen met hun AISC-aanduiding (W 16X26, HSS 4X4X.250); platen en bouten, die DetailCraft in millimeters bewaart, tot de dichtstbijzijnde 1/16 in; gewichten in pond.
- **Metrisch**: Europese profielen met hun naam (IPE300), platen als dikte X breedte in millimeters; gewichten in kilogram.

Lengten zijn altijd in millimeters met twee decimalen, ongeacht de instelling: de KISS-norm vraagt dat, en het ontvangende programma rekent ze om.

:::note
Kwaliteiten worden afgekapt tot de acht tekens van de norm: A572 Gr 50 wordt A572-50. Komma's in namen worden spaties (het formaat kent geen aanhalingstekens). Controleer één import in uw programma voordat u erop vertrouwt: de KISS-bestanden van DetailCraft zijn hier getoetst aan de norm, nog niet in een fabricageprogramma.
:::
