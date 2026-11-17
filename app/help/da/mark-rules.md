---
title: Mærkeregler
summary: Præcis hvornår to dele eller to samlinger deler et mærke, hvordan mærker nummereres, og hvordan fundament- og armeringsmærker virker.
keywords: mærker, nummerering, positionsnummer, samlingsmærke, stykmærke, præfiks, tolerance, ens dele, armeringsmærker, fundamentsmærker
from: ce02c98e
---

DetailCraft genberegner alle mærker efter hver ændring. Intet gemmes, så mærkerne beskriver altid modellen, som den er nu. Se [Kontrollér mærker og stykliste](topic:marks-and-bom) for, hvordan du bruger dem.

## Positionsnumre

To dele deler et positionsnummer, når alle disse stemmer overens:

1. Delens type (bjælke, søjle, afstivning eller plade).
2. Profilnavnet (ikke versalfølsomt).
3. Materialet (ikke versalfølsomt).
4. Skærelængden, inden for 1 mm.
5. Hvert hul: side, position langs og på tværs, inden for 1 mm, og diameter inden for 0.1 mm.
6. Hver udskæring: ende, side, længde og dybde, inden for 1 mm.

Bjælkens {{ui:Navn}} tæller ikke. Det gør heller ikke dens placering i modellen, dens rotation eller hvilken vej den blev tegnet, så længe selve delen er den samme.

### Vendte dele

En del sammenlignes på alle de måder, den kan vendes på, og som afbilder dens snit på sig selv. Hvis en af dem gør den lig en anden del, deler de et mærke.

| Form | Vendinger der tæller |
|---|---|
| I-profiler, rektangulære HSS, plader | Ende for ende (om den lodrette akse), ende for ende (om den vandrette akse) og vendt på hovedet om sin egen længdeakse |
| U-profiler | Ende for ende om den vandrette akse alene, så livet bliver på samme side |
| Vinkelprofiler, runde HSS | Ingen: sammenlignes som placeret |

En bjælke med et hul nær sin venstre ende svarer således til en bjælke med det samme hul nær sin højre ende, og en søjle med huller i den ene flange svarer til en søjle med de samme huller i den anden flange.

### Nummerering

| Type | Præfiks for del | Præfiks for samling |
|---|---|---|
| Søjle | c | C |
| Bjælke | b | B |
| Afstivning | br | BR |
| Plade (placeret, endeplade eller fodplade) | p | P |

Mærker nummereres fra 1 inden for hvert præfiks. Rækkefølgen er: søjler, derefter bjælker, afstivninger og plader; inden for en type efter profilnavn i naturlig rækkefølge (W8x10 før W12x26); derefter de længste dele først.

Fordi nummereringen følger den rækkefølge, kan tilføjelse eller ændring af én del flytte andre delers numre.

## Samlingsmærker

- Hver del, der ikke er svejst til en anden del, er hoveddelen i sin egen samling.
- Endeplader svejses til deres bjælke og fodplader til deres søjle, så de hører til den pågældende samlings emne.
- To samlinger deler et mærke, når deres hoveddele deler et positionsnummer, og deres tilhørende dele har de samme mærker på de samme steder (inden for 1 mm), og der tillades de samme vendinger som for hoveddelen.
- Samlingspræfikset følger hoveddelen: en bjælke med to endeplader er en B-samling.

Plader, du placerer med værktøjet {{ui:Plade}}, er ikke svejst til noget, så hver er sin egen P-samling.

## Fundamentsmærker

Fundamenter med samme længde, bredde, dybde, betonangivelse, bundnet og startarmering deler et mærke: F1, F2 … i den rækkefølge de blev placeret. Position og rotation tæller ikke.

## Armeringsmærker

Armeringsjern med samme størrelse, form og mål A, B og C (rundet til millimeter) deler et mærke på tværs af alle fundamenter. Mærket er jernnummeret, F og en tæller pr. jernstørrelse: 5F1, 5F2, 6F1. Et langsgående jern og et tværgående jern i et kvadratisk fundament er det samme jern og deler et mærke; listens kolonne {{ui:Bruges til}} viser begge anvendelser.
