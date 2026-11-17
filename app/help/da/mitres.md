---
title: Geringssamlinger
summary: Forbind to I-profilbjælker, der mødes i en vinkel: begge ender skåret i planen, der halverer vinklen, med endeplader, bolte og stivere, hvis du ønsker dem.
keywords: gering, geringssamling, miter, knæ, hunch, portalramme, rygning, hjørne, vinkelskæring, skæv skæring, endeplade, boltet endeplade, stiver, forbind
from: cd8380d4
---

En gering forbinder to I-profilbjælker, hvis ender mødes i en vinkel, fx knæet i en portalramme, en rygning eller to bjælker, der drejer et hjørne i planen. DetailCraft skærer begge ender i planen, der halverer vinklen mellem dem, så de to skårne flader passer sammen. Hvis du vil, tilføjer den en endeplade til hver skåret ende, bolter de to plader sammen og sætter et par livstivere i hver bjælke.

## Hvor den virker

- To **I-profiler** (IPE, HEA, HEB, W og lignende), hvis **ender mødes i samme knudepunkt**. Begge bjælker kan tegnes i begge retninger.
- Vinklen mellem bjælkerne skal være mindst 15°. Bjælker i linje afvises: brug et [stød](topic:splices).
- Den simple skæring (uden plader) virker uanset, hvordan bjælkerne mødes. **Endeplader** kræver, at de to bjælker mødes i planen af deres lived, som ved et portalknæ eller en rygning. To bjælker, der drejer et hjørne i planen, mødes i planen af deres flanger og får derfor kun den simple skæring.
- Bjælker af forskellig størrelse samles, men med en advarsel: deres skårne flader passer ikke sammen.

## Tilføj en gering

1. Vælg de to bjælker: klik på den ene, derefter {{key:Shift}}+klik på den anden.
2. Vælg {{ui:Geringssamling}} i gruppen {{ui:Forbind}}s menu {{ui:Mere}}. Dialogboksen Geringssamling åbnes.
3. Indstil de nummererede felter. Tegningen ved siden af dannes af dine tal, mens du skriver, og dens nummererede cirkler viser, hvad hvert felt angiver.
4. Vælg {{ui:Tilføj geringen}}. Hvis du valgte mere end to bjælker, får hver fri samling imellem dem den samme gering.

For at ændre en gering senere skal du vælge den (klik på en af dens plader) og vælge {{ui:Geringsdialog med forhåndsvisning}} i højre panel, eller ændre dens indstillinger direkte dér. En simpel skæring har ingen plader at klikke på: vælg dens to bjælker og vælg {{ui:Geringssamling}} igen, så åbnes dialogboksen på den gering. {{ui:Anvend på lignende (n)}} kopierer den til hver fri samling mellem bjælker af de samme to profiler i samme vinkel.

## De nummererede felter (mm)

| Nr. | Indstilling | Standard | Hvad den gør |
|---|---|---|---|
| 1 | Mellemrum mellem pladerne (eller de skårne ender) | 0 | Fri spalte i samlingen. Hver side beholder halvdelen af den |
| 2 | Endeplader, pladetykkelse | til, 20 | En endeplade svejst hele vejen rundt om hver skåret ende. Fravælg for en simpel skæring |
| 3 | Boltrækker, rækkeafstand, gauge, yderste række | 4, 0, 0, fra | Rækkeafstand 0 fordeler rækkerne jævnt mellem flangerne. Gauge 0 = halv pladebredde, mindst 2.4 × hullet. Den yderste række placeres i pladens forlængelse ud over den yderste flange |
| 4 | Plade ud over den yderste flange | 0 | Hvor langt pladerne rækker ud over den yderste flange, langs skæringen |
| 5 | Plade ud over den inderste flange | 0 | Det samme på inderside |
| 6 | Livstivere, afstand ud over skæringen | fra, 50 | Et par i hver bjælke, på begge sider af livet, vinkelret på bjælken, så langt ud over dens fjerne ende af skæringen |
| 7 | Stivertykkelse | 10 | |

Under {{ui:Bolte}}: boltdiameter, hul, styrkeklasse og længdetillæg (20, 22, A325, 30), som ved endeplader. Under {{ui:Plader og svejsninger}}: pladebredde (0 = flangebredden), kilesvejsstørrelse (8) og pladematerialet (A36).

## Hvad du får

- **Skæringerne.** Hver bjælkes ende skæres på sit plan. Dens længde i lister, tegninger og NC-filer er den **samlede længde**, fra dens lige ende til det yderste punkt af skæringen.
- **Pladerne** hører til deres egen bjælke: hver bjælkes samling er bjælken, dens endeplade og dens stivere. Boltene er monteringsbolte for samlingen: stykklisten tæller dem én gang, og hver bjælkes samlingstegning lister dem som løse bolte.
- **Tegninger** viser de skrå ender og pladerne; værkstedstegningen for en geringsbjælke angiver hver skæres vinkel fra vinkelret.
- **NC-filer** (DSTV) bærer skævskæringsvinklerne i hovedet, som standarden kræver, og konturer der følger skæringen. Kontrollér dem i jeres værksteds egen NC-viser før skæring, som for alle NC-filer.
- **IFC** beskærer hver bjælkes udtrækning efter dens skæreplan, så andre programmer viser den rigtige skæring.
- **Mærker:** en geringsbjælke er en anden brik end en lige skåret bjælke af samme længde. To bjælker med samme skæringer deler et mærke, som de to sparrer i en rygning gør.

## Godt at vide

- Geringen forbliver levende. Flyt eller ændr størrelsen på en af bjælkerne, og skæringen, pladerne og boltene følger med. Slet en af bjælkerne, så forsvinder geringen, og den anden bjælkes ende er igen lige.
- Advarsler bruger de samme EN 1993-1-8-minimumsværdier som de andre forbindelser (ende- og kantafstand 1.2 × hullet, rækkeafstand 2.2 × hullet, gauge 2.4 × hullet), plus boltrækker for tæt på en flange, plader smallere end flangerne og stivere uden plads.
- Værdierne er startværdier, ikke en dimensionering. DetailCraft kontrollerer ikke forbindelsens styrke, og den laver ingen hunch, ingen svejst gering med stumpsvejsning og ingen stivere på linje med den anden bjælkes flanger.
