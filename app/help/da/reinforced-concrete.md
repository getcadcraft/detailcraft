---
title: Detaljer armerede betonbjælker, søjler, dæk og vægge
summary: Tilføj betonbjælker, søjler, dæk og vægge efter gitter, giv dem jern, bøjler og bindere, kontrollér overlapninger og forankring mod ACI 318-19 eller EN 1992-1-1, og lav værkstedstegninger og bukkelister.
keywords: armeret beton, armering, jern, bjælke, søjle, dæk, væg, bøjler, bindere, krog, overlapning, overlapningslængde, forankring, udviklingslængde, ld, ldh, lbd, dæklag, afstand, rammejern, åbninger, net, jernmærke, bukkeliste, bbs, værkstedstegning, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC-import
from: 3835b7ec
---

Fanen {{ui:Beton}} under visningen detaljerer jernene i betonbjælker, søjler, dæk og vægge. Du angiver størrelserne og jernene; DetailCraft placerer hvert jern, nummererer det, kontrollerer overlapningerne, forankringen, dæklaget og afstandene mod den paragraf, de stammer fra, og tegner det.

:::warning
DetailCraft detaljerer de jern, du giver den. Den dimensionerer dem ikke. Alle resultater skal kontrolleres af en ingeniør.
:::

## Åbn fanen Beton

Vælg fanen {{ui:Beton}} under visningen. I en båndlayout er {{ui:Beton}} i fanen {{ui:Modellering}} ved siden af {{ui:Punktfundament}}. Med tegnestilens kommandolinje skriver du {{cmd:CONCRETE}}.

## Tilføj et element efter gitter

Betonelementer placeres på modellens gitterlinjer og niveauer, så sæt dem op først (venstre panel).

1. I {{ui:Tilføj efter gitter}} vælger du {{ui:Element}}: {{ui:Betonbjælke}}, {{ui:Betonsøjle}}, {{ui:Dæk}} eller {{ui:Væg}}.
2. Vælg gitterlinjerne og niveauerne:
   - en bjælke går fra ét gitterskæringspunkt til et andet, med sin top på niveauet;
   - en søjle står på et skæringspunkt, fra ét niveau til et andet;
   - et dæk fylder rektanglet mellem to nummererede og to bogstavede gitterlinjer, med sin top på niveauet;
   - en væg løber langs sin midterlinje fra ét skæringspunkt til et andet, fra ét niveau til et andet.
3. Angiv størrelsen og vælg {{ui:Tilføj}}. Elementet vælges, og dets felter åbnes i panelet {{ui:Egenskaber}}.

Hvert element starter med jern, der er startværdier, ikke dimensioneringer: ændr dem til ingeniørens.

## Ændr jernene

Vælg elementet (i visningen eller dets navn i fanen {{ui:Beton}}). Panelet {{ui:Egenskaber}} viser:

| Element | Hvad du angiver |
|---|---|
| Bjælke | Bredde, højde, fri dæklag; top- og bundjern (størrelse, antal, lige eller 90°-krog i enderne); sidejern; bøjler (størrelse, 135°- eller 90°-kroge, den første bøjles afstand fra understøtningsfladen, længden og afstanden i endezonen, afstanden derimellem); understøtningslængder; overlapningslængder |
| Søjle | Bredde, dybde på tværs, rotation, dæklag; længdejern på hver flade; bindere som bøjler; hvad jernene gør i toppen (overlapning med søjlen over, krog ind i etagen, eller stop) |
| Dæk | Tykkelse, størrelse, top, dæklag; bundnet og topnet i hver retning (størrelse og afstand); U-jern langs kanterne; rammejern; åbninger |
| Væg | Tykkelse, dæklag, ét eller to lag, vandrette og lodrette jern, U-jern i enderne, lodrette jern overlappet opad eller ikke, rammejern, åbninger |

Hver ændring er ét fortrydelsestrin. En ændring, der ikke kan bygges, afvises, og statuslinjen siger hvorfor, fx »Åbningen passer ikke inden for elementet med dets dæklag.«

Bøjler og bindere er lukkede, med begge kroge i det ene hjørne. En bjælkes jern løber ind i en betonsøjle i sine ender til søjlens fjerne flade minus dæklaget; hvor der ikke er nogen søjle, angiver du {{ui:Understøtningslængde i start (mm)}} og tilsvarende for enden.

## Overlapninger og forankring

Jern længere end {{ui:Lagerlængde for armeringsjern (mm)}} (12000 til at starte med) skæres i stykker af ens længde, overlappet. Tabellen {{ui:Overlapninger og forankring}} lister hver overlapning og hver forankring: hvad der kræves, med paragraffen og dens vilkår, og hvad detaljen har.

- En overlapningslængde på 0 betyder »efter behov«: længden, koden giver, rundet op til 25 mm.
- Skriv din egen overlapningslængde for at bruge den i stedet. Hvis den er kortere end nødvendigt, er det et problem (se nedenfor), og den markeres med * i tabellen.
- Forankring måles fra understøtningsfladen til jernets ende inde i understøtningen. En bjælke uden kendt understøtning siger det i stedet for at kontrollere den.
- En søjle, der står på et fundament, overlapper med fundamentets studsjern, og på en anden søjle med den søjles jern: deres overlapning kontrolleres også.

**ACI 318-19** (SI): lige jern i træk 25.4.2.3 (tabellen, med ψt, ψe, ψg, λ), standardkroge 25.4.3.1 (ψr 1.6 og ψo 1.25 anvendes, medmindre andet er kendt), jern i tryk 25.4.9.2, overlapninger i træk 25.5.2.1 (klasse B, eller klasse A i indstillingerne), overlapninger i tryk 25.5.5.1.

**EN 1992-1-1**: forankring 8.4.4 med fbd fra 8.4.2 (god eller dårlig vedhæftning), overlapninger 8.7.3 med α6 for hvert jern, der overlappes i ét snit. γc, γs og αct starter ved de anbefalede værdier; indstil dit nationale tillæg.

## Kontrollerne

Hver kontrol, der fejler, står i skallens panel {{ui:Problemer}} (kilde {{ui:Armeringskontroller}}) og i elementets liste {{ui:Kontroller}}:

| Kontrol | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Dæklag | Tabel 20.5.1.3.1, efter eksponering | Minimum for vedhæftning, tabel 4.2 (holdbarhedsdæklaget angiver du selv) |
| Fri afstand mellem jern | 25.2.1 (bjælker, dæk, vægge), 25.2.3 (søjler) | 8.2 (2) |
| Bøjleafstand | 9.7.6.2.2 | 9.2.2 (6) |
| Bjælkens minimumsstål | 9.6.1.2 | 9.2.1.1 (1) |
| Bjælkens sidejern over 900 mm dybde | 9.7.2.3 | ikke kontrolleret |
| Søjlens stålandel, antal jern | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Bindere: afstand, størrelse, tværbindere | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Dæk: afstand, minimumsstål | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Væg: afstand, minimumsstål, to lag | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Overlapninger, forankring | som ovenfor | som ovenfor |

Tilslagsstørrelsen er ikke kendt, så den frie afstand kontrolleres uden den.

## Åbninger, rammejern og kantjern

Vælg {{ui:Tilføj en åbning}} under et valgt dæk eller en valgt væg, og angiv, hvor den ligger, og dens størrelse. Jern, den krydser, stopper i dæklaget fra dens kant. Rammejern tilføjes på hver side, i samme lag, og bærer halvdelen af arealet af de skårne jern, en forankringslængde ud over åbningen. Det er DetailCraft's startregel, ikke en paragraf i en norm: ændr {{ui:Rammejern}} til ingeniørens. Hjørnejern tilføjes ikke.

U-jern langs et dæks frie kanter og i enderne af en væg har ben, der er én overlapningslængde lange.

## Jernmærker og bukkelisten

Identiske jern deler ét mærke: fundamenter beholder F-mærker (5F1), bjælker får B, søjler C, dæk S og vægge W (7B1, 8C1, 4S2). Fanen {{ui:Bukkeliste}} og dens CSV lister nu hvert jern i konstruktionen, fundamenter først. {{ui:Uddata}} › {{ui:Mere}} › {{ui:Bukning}} downloader den.

## Værkstedstegninger

Vælg {{ui:Uddata}} › {{ui:Mere}} › {{ui:Armeringstegninger}}, {{ui:Armeringstegninger}} i fanen {{ui:Beton}}, eller {{ui:Værkstedstegning}} ved siden af et element. Hvert element får et ark med et facade (en plan for et dæk), der viser hvert jern og dets mærke, bøjle- og bindezonerne og overlapningerne målsat, og et snit midt i. Derefter lister bukkearkene hvert mærke med en skitse af dets form, dets mål, antal, tilskæringslængde og vægt.

Arkene laves ud fra modellen hver gang og igen efter hver ændring, mens vinduet er åbent: tegningshovedet bærer modelreferencen. Gem {{ui:Dette ark som PDF}} eller {{ui:Alle ark som PDF}}.

## Jern fra en IFC-fil

{{ui:Fil}} › {{ui:Importér IFC}} læser nu IfcReinforcingBar: den fejede skive langs dens midterlinje kommer tilbage som lige ben og bøjninger, med sin diameter, sit mærke og det element, der holder det. Jernene beholdes, som de blev læst (de omsættes ikke til en bjælkes eller et dæks regler), vises i visningen, listes i bukkelisten og skrives ud igen med IFC-eksporten. Importrapporten siger, hvor mange jern der blev læst, af hvilke størrelser, i hvor mange elementer, og hvad der blev udeladt, og hvorfor.

En bjælke, søjle, dæk eller væg i den fil, der har jern, eller hvis materiale er beton, tages ikke for stål; rapporten siger det. DetailCraft's egen IFC-eksport bærer hvert betonelements definition, så det kommer tilbage som sig selv, og dets jern laves igen ud fra den.

:::note
Læsning af et konstruktionsprograms egne filer (ikke IFC) er ikke lavet endnu: eksportér IFC fra det.
:::

## IFC-eksporten

Betonbjælker, søjler, dæk (med åbninger) og vægge eksporteres som IfcBeam, IfcColumn, IfcSlab og IfcWall, hver med sine jern som IfcReinforcingBar (hovedjern, bøjler og bindere, kantjern) samlet under den. Hvert jern er en fejet skive langs sin midterlinje med rigtige buer i bøjningerne, og det har sit mærke og sin tilskæringslængde.
