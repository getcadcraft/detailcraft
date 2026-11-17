---
title: Bindingsverkspaneler i tre og lettstål
summary: Lag vegg-, gulv- og takpaneler i tre eller lettstål, med alle delene, en kappeliste, en verkstedtegning og lageret som må kjøpes.
keywords: bindingsverk, tre, konstruksjonstømmer, trevirke, lettstål, kaldformet, stender, bjelkelag, sperre, overligger, hovedstender, avlastningsstender, kortstender, kappeliste, verkstedtegning, panel
from: 3e38ffb9
---

Fanen {{ui:Bindingsverk}} lager bindingsverk for paneler som beskrives, og gir det et tømrerlag og en trelastforhandler trenger. Panelene lagres i modellfilen.

:::warning
Størrelsene, avstandene og overliggerne settes av brukeren. DetailCraft kontrollerer ikke at en stender med den avstanden bærer den veggen, eller at en overligger spenner over den åpningen: det er for normtabellene og ingeniøren.
:::

## Legg til et panel

Velg {{ui:Legg til en vegg}}, {{ui:Legg til et gulv}} eller {{ui:Legg til et tak}}, og fyll deretter inn målene i millimeter, materialet (tre eller lettstål) og dimensjonen på stavene. Dimensjoner i tre er de nominelle navnene med sine høvlede mål (2×4 er 38 × 89 mm). Stålstendere har navn etter dybde og tykkelse, for eksempel `C92-1.2`.

## Vegger

En vegg har en bunnsvill, én eller flere toppsvill (ett spor for stål), endestendere, stendere med avstanden som er oppgitt, og for hver åpning: to hovedstendere, to avlastningsstendere, en overligger i størrelsen og lagene som velges, og kortstendere over overliggeren (og under dørstokken til et vindu). Gi hver åpning sin avstand fra venstre ende, sin bredde, og topp og bunn for den grove åpningen, målt fra gulvunderlaget. En dør har bunn 0.

## Gulv og tak

Et gulv har bjelkelag på tvers av bredden langs spennet, randbjelker i begge ender og, hvis det er avkrysset, stiving midt i spennet. Et takpanel er en gavl: et par sperrer med avstanden som er oppgitt (lengden inkluderer takutstikket langs skråningen), og en mønebord.

## Hva som lages

Hvert panel viser delene sine på en tegning i riktig målestokk, med hver del merket, en kappeliste etter merke, og en totalsum. Tabellen {{ui:Lager å kjøpe}} nester alle kuttene i panelene inn i lagerlengder, den korteste som tar kuttene for hver stang. {{ui:Lagre verkstedtegningen (SVG)}} skriver tegningen. Knappen {{ui:CSV}} skriver alle kappelistene og lagerlisten.

## Plasser et panel i modellen

Under hvert panel angis hvor det skal plasseres (x, y, z i millimeter, og vinkelen), og trykk {{ui:Plasser som staver}}: hver del blir en stav i modellen, med den høvlede profilen i sin størrelse og vekten av materialet (ca. 500 kg/m³ for treet, stål for stenderne). En vegg går langs vinkelen fra sin nedre venstre ende, med bunnen på z. Et gulvs bjelkelag ligger med undersiden på z. Takets gavlriss går langs vinkelen, med z på toppen av veggsvillene. Hvert lag i overliggeren er en stav ved siden av. Ved nytt trykk erstattes stavene som ble plassert før, og {{ui:Fjern de plasserte stavene}} tar dem ut; hver er ett angretrinn. Analysen utelater disse stavene: de er ikke stålstaver i rammen.

## PDF-ark

{{ui:PDF-ark}} lagrer én A3-side for hvert panel: panelet i riktig målestokk med hver del merket, de totale målene, kappelisten og en tittelstripe.

Problemer i panelet {{ui:Problemer}}: en åpning for nær enden av en vegg eller en annen åpning, en overligger som ikke passer under toppsvillene, eller en del lengre enn det lengste lageret.

Panelet {{ui:Problemer}} lister også **Grensesnitt (LOD 350)** for veggpaneler og betongvegger: en åpning som går forbi enden eller toppen av veggen, to åpninger som overlapper, og en åpning i en betongvegg som er bredere enn 1000 mm uten omramingsstang. Dette er råd, de samme reglene som BimCrafts revisjon kjører. Bredden er CadCrafts startverdi, ikke en standard.
