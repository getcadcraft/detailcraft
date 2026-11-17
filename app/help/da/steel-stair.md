---
title: Generator for ståltrapper
summary: En ståltrappe ud fra etagehøjden, løbelængden og bredden: stighøjde og trinddybde efter et regelsæt du vælger, repos, rækværk og balustre, værkstedstegninger og en tilskæringsliste med vægte.
keywords: ståltrappe, trappegenerator, trappevange, trin, riflet plade, riste, foldet bakke, repos, håndliste, balustre, stighøjde, trinddybde, osha, ibc, approved document k, tilskæringsliste, vægte, værkstedstegning
from: a4f0a985
---

Trappegeneratoren laver en hel ståltrappe ud fra få tal: trappevangerne, trinene, reposer når løbet er for højt, håndlister med stolper og balustre, befæstelseshullerne i trappevangerne, en tilskæringsliste med vægte og værkstedstegningerne. Den starter fra værktøjet {{ui:Trappe}}, ligesom den enkle trappe (se Trapper), med én kontakt tilføjet.

## Placér en ståltrappe

1. Vælg {{ui:Trappe}} i gruppen {{ui:Placér}}, eller tryk {{key:S}}.
2. Til højre sættes flueben i {{ui:Brug generatoren for ståltrapper}}.
3. Vælg **regelsættet** for hvor trappen bygges, **stighøjden** (gulv til gulv; 0 = op til næste niveau), **den tilgængelige løbelængde** (0 = lad reglen bestemme), det **frie mål** og **trintypen**: riflet plade, riste eller foldet pladebakke.
4. Angiv trappevangens profil, reposerne (efter reglen, eller et tal), håndlisterne (begge sider, én, ingen), listehøjden og balustermellemrummet.
5. Klik på et akseskæringspunkt: det er foden af det første stigtrin.

Vælg trappen (klik på en trappevange, et trin eller en liste) for at ændre en indstilling; egenskaberne viser stigtrin, trinddybde, hældning, løb og repos, stålet i den, tilskæringslisten og regelsættets kilder.

## Regelsættene

Regelsættet begrænser trappens form: stighøjden og trinddybden, 2 × stigtrin + trinddybde, hældningen, reposet, listehøjden og den største åbning. DetailCraft tilbyder dem nedenfor; regionen er en indstilling, ikke et gæt. Åbn **Hvor regelsættets tal kommer fra** i egenskaberne: hvert tal nævner sin kilde og siger, hvor godt det er kontrolleret.

- **International Building Code 2021**: stigtrin 4 til 7 in., trin mindst 11 in., lister 34 til 38 in. Den 12 ft grænse mellem reposer vises som *ikke læst*, og listetallene som læst i håndbøger, der citerer reglen: bekræft dem, før du stoler på dem.
- **OSHA 29 CFR 1910.25 og 1910.29** (industrielle standardtrapper): 30° til 50°, stigtrin højst 9.5 in., trin mindst 9.5 in., mindst 22 in. bred, reposer lige så brede som trappen og 30 in. dybe, en øverste liste brugt som håndliste 36 til 38 in. Disse er læst i selve forskriften.
- **Approved Document K 2013, England** (generelle adgangs- og hjælpetrapper): stighøjde- og trinddybdeintervallerne og 2 × stigtrin + trinddybde 550 til 700 mm, læst i den regeringsbestilte rapport, der tabulerer dem. Dokumentet giver DetailCraft ingen listehøjde, så den højde du angiver, bruges, og listen Problemer siger det.

Et regelsæt, der ikke er her, gættes ikke: trappen følger så den simple komfortregel på 600 til 650 mm og siger, at den ikke har nogen regel.

## Hvad den udregner

- **Stigtrin og trinddybde.** De færreste stigtrin, hvis 2 × stigtrin + trinddybde ligger midt i reglens interval, uden at trinddybden falder under reglens minimum. Med en løbelængde angivet er trinddybden løbelængden fordelt på trinene, og alt uden for reglen siges.
- **Løb og repos.** Et løb højere end reglen tillader, deles med et repos lige så bredt som trappen og ikke smallere end reglens minimum; du kan også bede om repos. Et repos er en ramme af to sidebjælker og to tværvinkler under en dæksel, på to stolper.
- **Trin.** Riflet plade er en svejst plade (6 mm som standard; mønsteret tælles ikke med i vægten). En foldet pladebakke har en omvending ved næsingen og er boltet gennem trappevangens liv: to huller 2 mm større end bolten ved 0.3 og 0.7 af dybden. Riste tegnes som en plade med samme vægt (bærestangens dybde × tykkelse ÷ afstand); tværstængerne og båndene tælles ikke med, og tilskæringslisten siger det.
- **Lister.** En rørliste øverst på stolper langs hvert løb og hvert repos, og et balustermellemrum som ingen kugle større end reglens åbning passerer (højst 100 mm som standard).

## Tegninger, tilskæringsliste, eksport

- Løbet er én samling; listerne er en anden (begge sider er samme samling, lavet to gange). Hver har sin samlingstegning, og trappevangens tegning viser dens huller.
- **Trappearket** (ST-…) viser hver løbs trappevange lige med hulstationerne skrevet fra den nedre ende, og trindetaljen: snit, næsing, omvending og endeflangen med dens huller.
- {{ui:Tilskæringsliste og vægte}} i egenskaberne lister hvert profil og hver længde med antal og kilogram; {{ui:Hent tilskæringslisten (CSV)}} gemmer den.
- Alt går til stykliste, NC-filer og IFC som almindelige dele (IfcMember, IfcColumn, IfcPlate).

## Godt at vide

- Dette er et udgangspunkt, ikke en konstruktion. Intet kontrolleres for styrke eller nedbøjning; regelsættet begrænser kun formen.
- Trappevangernes ender mod etagerne skæres vinkelret og detaljeres ikke; reposstolper står ned til etagen under og har ingen fodplader.
- At placere trappen som ét element i BimCraft er endnu ikke forbundet.
