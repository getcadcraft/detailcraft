---
title: Kontroller stålstaver mot en dimensjoneringsstandard
summary: Lag lastkombinasjoner etter ASCE 7 eller EN 1990, kontroller hver stålprofil mot AISC 360 eller EN 1993-1-1, og se hvor stor del av kapasiteten hver stav bruker. Et hjelpemiddel inntil en ingeniør har gjennomgått det.
keywords: dimensjonering, dimensjonskontroll, stålkonstruksjon, utnyttelse, utnyttelsesgrad, kapasitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokode, lastkombinasjoner, LRFD, nasjonalt tillegg, knekking, sideveis vridningsknekking, skjær, bøying, samvirke, konstruksjon, studenter, ingeniør
from: 66b6d545
---

Etter at du har kjørt analysen, omgjør {{ui:Dimensjoneringskontroller}}-blokken i {{ui:Analyse}}-fanen kreftene til en vurdering for hver stålstav: hvor stor del av kapasiteten den verste kombinasjonen bruker.

:::warning
Det er et **hjelpemiddel inntil en ingeniør har gjennomgått det**. Det bruker bare førsteordens krefter (ingen annenordenseffekter), kontrollerer ingen torsjon, ingen slanke deler (klasse 4), ingen sveisede profiler og ingen forbindelser, og det utelater det det ikke kan kontrollere og sier fra om det. Det erstatter ikke en ingeniørs kontroll, og resultatene er ikke et godkjenningsstempel.
:::

## Velg en standard

{{ui:Dimensjoneringsstandard}} lagres med modellen; velg én av to familier:

- **ASCE 7 + AISC 360** (USA, LRFD): kombinasjonene i ASCE 7-16 §2.3.1 og stavkontrollene i ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokode): kombinasjonene i EN 1990 (ligning 6.10, eller 6.10a og 6.10b) og stavkontrollene i EN 1993-1-1.

Velg deretter {{ui:Stålkvalitet}} (A992, A36 og andre; eller S235 til S450, med lavere flytegrense over 40 mm).

## Lag kombinasjonene

Gi hvert lasttilfelle sin **type** (egenlast, nyttelast, takbelastning, snø, vind, seismisk) i lasttilfellelisten, og trykk {{ui:Lag kombinasjoner}}. DetailCraft skriver standardens kombinasjoner som kombinasjoner av lasttilfellene dine: alle styrkekombinasjonene standarden lister for typene du har, og bruksgrensekombinasjoner for nedbøyning. Kombinasjonene du skrev selv, beholdes; de kontrolleres ikke mot standarden. Et lasttilfelle av type {{ui:Annet}} kombineres ikke.

For Eurokode er faktorene de **anbefalte verdiene** i EN 1990 vedlegg A1 (γG 1.35, γQ 1.5, ψ-verdiene for nyttelast, snø og vind) og EN 1993-1-1 (γM0 = γM1 = 1.0). Landets nasjonale tillegg endrer noen av dem: åpne {{ui:Verdier fra nasjonalt tillegg}}, skriv inn dine, og lag kombinasjonene på nytt. De lagres i modellen.

## Kontroller stavene

Trykk {{ui:Kontroller staver}}. For hver stålprofil viser tabellen dens **utnyttelse** (krav over kapasitet: 100 % er grensen), om den består, hvilken kontroll som styrer, og hvilken kombinasjon. Stavene farges i modellen: blå lite brukt, grønn omtrent halvparten, okker nær grensen, rød over den, grå ikke kontrollert. Klikk på en stavs navn for å velge den.

Kontrollene, med klausulen hver følger (de listes i rapporten):

- strekk, trykk med bøyningsknekking og torsjonsknekking, bøying om begge akser med sideveis vridningsknekking, skjær, og bøying med aksialkraft;
- nedbøyning for bruksgrensekombinasjonene mot {{ui:Nedbøyningsgrense}} du angir (L/360 til å begynne med; en prosjektverdi, ikke en standardverdi).

**Lengder.** Den avstivede lengden er en andel av hver analysert del (1 = uavstivet); avstivningene antas jevnt fordelt fra starten. K-faktorer multipliserer lengden for knekking. Et knutepunkt der en annen stav møter, deler en stav, og hver del kontrolleres på sin egen lengde, som avstivet der.

## Det som ikke kontrolleres

En stav viser **ikke kontrollert**, med grunn, i stedet for et tall når tverrsnittet ikke er en I-profil som kontrollene kjenner (rør, vinkler, U-profiler), når det er en egendefinert (sveiset) form, eller når en del er slank (AISC) eller klasse 4 (Eurokode) i bøying. En slank del i trykk utelater trykkontrollene, og stavene viser *består, delvis kontrollert*. Heller ikke bygget: annenordenseffekter, torsjon, skjærknekking sammen med bøying, forbindelser, utmatting, brann og seismisk detaljering. Betongelementer og seismiske laster har [egne kontroller](topic:concrete-and-seismic). Se [Ikke bygget ennå](topic:not-built-yet).

## Rapporten

{{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} får dimensjoneringstabellene når du har kontrollert: standardutgavene, innstillingene og verdiene fra nasjonalt tillegg, utnyttelsen per stav, hver brukt klausul, og for hver stav kravet, kapasiteten og utnyttelsen for hver kontroll i den styrende kombinasjonen.
