---
title: NC-bestanden naar de werkplaats sturen
summary: DSTV NC-bestanden exporteren voor elk onderdeelmerk (I-profielen, U-profielen, hoekstaal, HSS, platen), gezipt, en ze controleren voordat ze een machine bereiken.
keywords: nc, nc1, dstv, cnc, machine, liggerlijn, boorlijn, plaatsnijden, exporteren, fabricage, zip
from: 598b6091
---

DetailCraft schrijft één DSTV NC-bestand (`.nc1`) per onderdeelmerk, voor I-profielen, U-profielen, hoekstaal, rechthoekige en ronde HSS, en platen, en zet ze samen in één zip-bestand. Liggerlijnen en plaatmachines lezen deze bestanden om te zagen, boren en snijden.

## Exporteren

1. Maak eerst het tabblad {{ui:Problemen}} leeg: een verbinding die niet gebouwd kon worden, voegt geen gaten toe.
2. Sla het model op ({{key:Mod+S}}), zodat de NC-bestanden bij een opgeslagen model horen.
3. Kies {{ui:NC-bestanden}} in de groep {{ui:Uitvoer}}.
4. De browser downloadt `<naam> NC.zip`. De statusbalk meldt hoeveel bestanden erin zitten en somt de merken op die niet zijn geschreven (een hoekstaal of een ronde buis met een coping).

Binnen de zip wordt elk bestand genoemd naar zijn onderdeelmerk: `b1.nc1`, `c1.nc1`, `p1.nc1` … De zip is niet gecomprimeerd en opent met elk zipprogramma.

Als het model geen onderdelen heeft, meldt de statusbalk dat.

## Wat elk bestand bevat

- **Kop (ST):** de modelnaam als order, het onderdeelmerk als tekening en stuk, fase 1, de staalkwaliteit, het aantal, het profiel en de afmetingen, massa per meter en verfoppervlak per meter. Zaagsneden zijn haaks.
- **Buitencontouren (AK):** het lijf met de uitgesneden copings, en elke flenscontour, korter waar een coping de flens wegneemt.
- **Gaten (BO):** elk gat met zijn vlak, positie en diameter, inclusief de gaten die door kopplaten en voetplaten worden gemaakt.

Veld voor veld, met de regels voor vlakken en coördinaten: [NC-bestandsvelden](topic:nc1-fields).

## Wat niet wordt geschreven

- Hoekstaal en ronde buizen met een coping: geen NC-bestand. Hun merken staan in de statusbalk.
- Gaten in ronde buizen (DetailCraft maakt die niet).
- Afschuiningen, binnencontouren, markeringen (scribing) en zaaghoeken anders dan haaks.
- Langgaten (DetailCraft heeft alleen ronde gaten).

## Controleren voor bewerking

De NC-bestanden van DetailCraft worden teruggelezen door de eigen testsuite, maar ze zijn niet op de machines van uw werkplaats uitgevoerd.

1. Open de bestanden in de NC-viewer van uw werkplaats of in de machinesoftware en vergelijk ze met de werkplaatstekeningen.
2. Controleer één onderdeel van elk soort op de machine voordat u een batch uitvoert.
3. Controleer hoe uw software de y-coördinaten van de flenzen en de vlakken van U-profielen leest: DetailCraft meet flens-y vanaf de achterrand, en legt U-profielen op hun rug zoals de norm ze tekent (zie [NC-bestandsvelden](topic:nc1-fields#faces-and-coordinates)).
