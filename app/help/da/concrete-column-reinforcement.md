---
title: Armér en rektangulær betonsøjle
summary: Et gennemarbejdet eksempel på detaljering af en rektangulær betonsøjle i DetailCraft: placér den, giv den længdejern og bindere, læs kontrollerne, overlapningen over den og jernmærkerne, og tegn dens værkstedsark.
keywords: betonsøjle, rektangulær søjle, søjlearmering, længdejern, lodrette jern, bindere, bøjler, tværbindere, overlapningsskarv, skarv, studsarmering, søjlens armeringsprocent, 1 procent, 8 procent, bindeafstand, ACI 318-19 25.7.2, EN 1992-1-1 9.5, værkstedstegning, jernmærker, 8C1, 3C2
from: aee2a3ca
---

Dette emne tager én kvadratisk søjle fra ingenting til en kontrolleret, tegnet og opgjort detalje. De generelle regler for bjælker, plader og vægge står i [Detaljer armeret beton](topic:reinforced-concrete); dette er søjlens del af det, med tal, du kan gentage.

:::warning
DetailCraft detaljerer de jern, du giver den. Den dimensionerer dem ikke. Jernene nedenfor er startværdier til eksemplet, ikke en anbefaling: den ansvarlige ingeniør vælger størrelse, antal og afstand.
:::

## Hvad en søjle er her

En rektangulær søjle har en bredde (langs sin lokale x) og en dybde på tværs (langs sin lokale y), et frit dæklag til bindene, længdejern på hver flade og lukkede bindere. Drejer du den, drejes det hele; fladerne forbliver »bredde-flade« og »dybde-flade«.

- Længdejernene angives som antallet på en bredde-flade og antallet på en dybde-flade. Hjørnejernene tæller på begge, så 3 og 3 giver 8 jern; 4 og 4 giver 12.
- Bindene er lukkede rektangler med to kroge i det ene hjørne, 135° eller 90°. Det første bind ligger en fast afstand over gulvet (og under det næste); endezonerne har en tættere afstand, midten en bredere.
- Hvad jernene gør foroven: fortsætte og overlappe med jernene ovenfor, dreje ind med 90°-kroge i gulvet, eller stoppe under toppen.

## Den udarbejdede søjle

En 400 × 400 mm søjle, 3600 mm mellem gulvet over og gulvet under, #8 længdejern, #3 bindere, 40 mm frit dæklag, f'c 28 MPa, fy 420 MPa, ACI 318-19, indvendig.

1. Åbn fanen {{ui:Beton}} og opsæt de gitterlinjer og niveauer, søjlen står på (venstre panel).
2. I {{ui:Tilføj efter gitter}} vælges {{ui:Betonsøjle}}, gittersnittet og de to niveauer vælges, {{ui:Bredde (mm)}} og {{ui:Dybde på tværs (mm)}} sættes til 400, og {{ui:Tilføj}} vælges.
3. I panelet {{ui:Egenskaber}} sættes:
   - {{ui:Frit dæklag (mm)}} 40;
   - {{ui:Længdejern}} #8, {{ui:Jern på en bredde-side}} 3, {{ui:Jern på en dybde-side}} 3;
   - {{ui:Bindere}} #3, {{ui:Kroge}} 135°, {{ui:Afstand imellem (mm)}} 300, {{ui:Længde af endezone (mm)}} 600, {{ui:Afstand i endezonerne (mm)}} 150, {{ui:Første fra overfladen (mm)}} 50;
   - {{ui:Jern foroven}} {{ui:Fortsæt og overlap med jernene ovenfor}}.

Hver ændring er ét fortrydelsestrin.

### Hvad du får

| Del | Resultat |
|---|---|
| Længdejern | 8 jern #8 (en 3 × 3-ring), hver 4375 mm lang: den 3600 mm lange søjle plus en 775 mm overlapning ovenpå |
| Overlapning | 757 mm påkrævet for en trykoverlapning (ACI 318-19 25.5.5.1, fy 420), 775 mm angivet: det påkrævede rundet op til næste 25 mm |
| Bindere | 17 bindere #3, hver med en tilskæringslængde på ca. 1359 mm, med 150 mm afstand i de to 600 mm endezoner og 300 mm imellem |
| Armeringsprocent | 2.5 % af bruttotværsnittet (grænser 1 % til 8 %, ACI 318-19 10.6.1.1) |
| Fri afstand mellem jern | 112 mm (kræver mindst 40 mm, ACI 318-19 25.2.3) |
| Bindeafstand | 300 mm (tilladt 400 mm: det mindste af 16 jerndiametre, 48 bindediametre og den mindre side, ACI 318-19 25.7.2.1) |
| Bindestørrelse | #3 (tilladt ned til 9.5 mm, ACI 318-19 25.7.2.2) |

Alle disse står i elementets liste {{ui:Kontroller}}; overlapningen står også i {{ui:Overlapninger og forankring}}.

## Tværbindere

Med ét perimeterbind holdes kun hjørnejernene. ACI 318-19 25.7.2.3 tillader, at et midterjern på en flade står uden understøtning, hvis det er inden for 150 mm fri afstand til et hjørnejern. Med 3 jern på en flade, som ovenfor, er det opfyldt. Med 4 eller flere jern på en flade er det ikke, og DetailCraft siger det som en advarsel ({{ui:Kontroller}} og Problemer): »tværbindere« er nødvendige. **Tværbindere er ikke lavet endnu**: tilføj dem i tegningen i hånden, eller vælg færre jern på fladen.

For EN 1992-1-1 kontrollerer DetailCraft jernstørrelsen (mindst 8 mm), antallet af jern (mindst 4), stålarealet (0.2 % til 4 % af tværsnittet), den frie afstand og bindeafstanden (9.5.2 og 9.5.3).

## Overlapningen, fundamentet og søjlen under

- Hvor **et fundament i modellen står under søjlen**, overlapper søjlen med fundamentets studsarmering, og den overlapning kontrolleres også.
- Hvor **en anden søjle i modellen står under den**, overlapper den med den søjles jern.
- Angiv din egen {{ui:Overlapningslængde (mm, 0 = efter behov)}} for at overskrive; en kortere end nødvendig er et problem og markeres med * i tabellen.
- Trykoverlapninger bruges som standard ({{ui:Trykoverlapning}} i indstillingerne); vælg {{ui:Trækoverlapning}}, når søjlen kan være i træk.

## Mærker, liste og værkstedsark

Identiske jern deler ét jernmærke: søjlens længdejern over er 8C1, dens bindere 17C2 (tallet først, derefter bogstavet C for søjle og løbenummeret). De vises i fanen {{ui:Bukkeliste}} med tilskæringslængde og vægt, og i CSV-filen fra {{ui:Uddata}} › {{ui:Mere}} › {{ui:Bukning}}.

Vælg {{ui:Værkstedstegning}} ved siden af søjlen for et ark med søjlen i facade (hvert jern, dets mærke, bindezonerne og overlapningen målsat) og et snit i midten, efterfulgt af bukkearket. Gem {{ui:Dette ark som PDF}}.

## Hvad dette ikke gør

- Runde søjler og spiraler, og søjler der ikke er rektangulære: ikke lavet endnu.
- Hjørne- og tværbindere inde i tværsnittet, og seismisk detaljering (ACI 318-19 kapitel 18): ikke lavet endnu.
- Stød på positioner, du vælger, eller forskudte: alle jern overlapper ved ét snit.
- Om jernene er nok til lasten: det er ingeniørens dimensionering.
