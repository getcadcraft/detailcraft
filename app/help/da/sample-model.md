---
title: Udforsk prøverammen
summary: Åbn den indbyggede to-felts ramme og brug den til at lære, hvad DetailCraft laver, fra positionsnumre til NC-filer.
keywords: prøve, eksempel, demo, ramme, lær, rundtur, prøv
from: 5c5944dd
---

Prøverammen er en lille, komplet model: hver slags ting, DetailCraft bygger, optræder mindst én gang. Det er den hurtigste måde at lære appen at kende og at teste en eksport, før du stoler på den.

## Åbn den

1. Vælg {{ui:Eksempel}} i gruppen {{ui:Fil}}.
2. Hvis din nuværende model har ikke-gemte ændringer, vælger du {{ui:Gem først}} eller {{ui:Kassér ændringer}}.
3. Statuslinjen siger »Prøveramme: 6 søjler med fodplader, 4 bjælker med endeplader, en afstivning, 7 fundamenter med armering.«

Prøven åbnes som en ny model kaldet »Prøveramme«. Den ændrer ikke andet, og der er intet at fortryde.

## Hvad der er i den

- **Gitter** 1, 2, 3 med 6000 mm og A, B med 7000 mm. **Niveauer**: Niveau 1 på 0 og Niveau 2 på 4000.
- **Seks søjler**, W12x50, fra Niveau 1 til Niveau 2 ved hvert skæringspunkt, hver på en 25 mm fodplade med fire ankerstænger.
- **Fire bjælker**, W16x26, på Niveau 2 langs gitterlinjerne A og B, med stålets top på niveauet og en flugtende boltet endeplade i begge ender (otte i alt).
- **Én afstivning**, HSS4x4x1/4, fra A/1 på Niveau 1 op til A/2 på Niveau 2.
- **Seks punktfundamenter**, 2000 x 2000 x 600, ét under hver søjle, med et bundnet med krog i begge retninger.
- **Endnu et fundament** ved siden af rammen, 2400 x 1800 x 600, med seks krogede studsjern, der står op til en betonpille.

## Ting at prøve

1. Klik på en bjælke. Læs dens {{ui:Positionsnummer}}, {{ui:Samling}}, {{ui:Tilskæringslængde}} og {{ui:Afkortet}}: tilskæringslængden er kortere end gitterafstanden på 6000 mm, fordi hver endeplade skærer bjælken tilbage med halvdelen af søjledybden plus pladetykkelsen.
2. Klik på en søjle. Under {{ui:Huller}} lister den de huller, endepladerne har lavet i dens flanger ("8 huller fra forbindelser"; midtersøjlerne har 16, ét sæt i hver flange).
3. I listen {{ui:Positionsnumre}} til venstre ser du, at alle fire bjælker deler ét mærke: de er det samme stykke stål. Hjørnesøjlerne deler også et mærke, selvom deres huller vender modsat, fordi en søjle, der er vendt om ende for ende, er det samme stykke. Midtersøjlerne, med huller i begge flanger, får et andet mærke.
4. Klik på en endeplade (eller på en af dens bolte). Panelet {{ui:Egenskaber}} viser indstillingerne for plade, bolt og svejsning, de bolte den laver (med deres længde beregnet ud fra klemlængden), og eventuelle advarsler om kantafstand.
5. Åbn fanen {{ui:Stykliste}}. Dele, samlinger (en bjælke med sine to endeplader er én samling), bolte og ankerstænger er listet med vægte. Du bør se seks positionsmærker: c1 (de to midtersøjler) og c2 (de fire hjørnesøjler), begge W12x50 ved 3975 mm; b1, fire W16x26-bjælker ved 5650 mm; br1, afstivningen; p1, otte PL20x180-endeplader; og p2, seks PL25x400-fodplader. Forbindelsesmidlerne er 64 bolte 20 x 70 A325 og 24 ankerstænger 20 x 575.
6. Åbn fanen {{ui:Bukkeliste}}. De seks ens fundamenter deler jernmærker; pillefundamentet tilføjer sit eget.
7. Klik på afstivningen, og kig på gruppen {{ui:Uddata}}: {{ui:Værkstedstegning}} er nedtonet, fordi værkstedstegninger for nu kun dækker I-profiler og plader.
8. Vælg {{ui:NC-filer}}. Zip-filen indeholder en fil for hvert I-profil- og pladepositionsmærke; statuslinjen lister afstivningens mærke som ikke skrevet.
9. Vælg {{ui:IFC}}, og åbn filen i en vilkårlig IFC-fremviser for at kontrollere, hvordan din anden software læser den.

## Brug den som udgangspunkt

Prøven er en almindelig model. Ændr den, omdøb den i feltet {{ui:Navn}}, og gem den under det nye navn med {{key:Mod+S}}.
