---
title: Kontroller stålstaver mot en dimensjoneringsstandard
summary: Lag lastkombinasjoner etter ASCE 7 eller EN 1990, kontroller hver stål-I-profil mot AISC 360 eller EN 1993-1-1, og se hvor mye av kapasiteten hver stav bruker. Et hjelpemiddel inntil en ingeniør har gjennomgått det.
keywords: dimensjonering, dimensjonskontroll, stålkonstruksjon, utnyttelse, utilisation, utilization, kapasitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, lastkombinasjoner, LRFD, nasjonalt tillegg, knekking, sideveis vipping, skjær, bøyning, samvirke, konstruksjon, studenter, ingeniør
from: 15685c4e
---

Etter at du har kjørt analysen, gjør {{ui:Dimensjoneringskontroller}}-blokken i {{ui:Analyse}}-fanen kreftene om til en vurdering for hver stålstav: hvor mye av kapasiteten den verste kombinasjonen bruker.

:::warning
Det er et **hjelpemiddel inntil en ingeniør har gjennomgått det**. Det bruker bare førsteordens krefter (ingen annenordenseffekter), kontrollerer ikke torsjon, slanke deler (klasse 4), sveisede profiler eller forbindelser, og utelater det det ikke kan kontrollere, og sier fra om det. Det erstatter ikke en ingeniørs kontroll, og resultatene er ikke et godkjenningsstempel.
:::

## Velg en standard

{{ui:Dimensjoneringsstandard}} lagres sammen med modellen. Velg én av to familier:

- **ASCE 7 + AISC 360** (USA, LRFD): lastkombinasjonene i ASCE 7-16 §2.3.1 og stavkontrollene i ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): kombinasjonene i EN 1990 (likn. 6.10, eller 6.10a og 6.10b) og stavkontrollene i EN 1993-1-1.

Velg deretter {{ui:Stålkvalitet}} (A992, A36 og andre; eller S235 til S450, med nedre flytegrense over 40 mm).

## Lag kombinasjonene

Gi hvert lasttilfelle sin **type** (egenlast, nyttelast, takbelastning, snø, vind, jordskjelv) i lasttilfellelisten, og trykk {{ui:Lag kombinasjoner}}. DetailCraft skriver standardens kombinasjoner som kombinasjoner av dine lasttilfeller: alle bruddgrensekombinasjonene standarden lister for typene du har, og bruksgrensekombinasjonene for nedbøyning. De du selv skrev inn, blir stående; de kontrolleres ikke mot standarden. Et lasttilfelle av typen {{ui:Annet}} kombineres ikke.

For Eurocode er faktorene de **anbefalte verdiene** i EN 1990 vedlegg A1 (γG 1.35, γQ 1.5, ψ-verdiene for nyttelast, snø og vind) og EN 1993-1-1 (γM0 = γM1 = 1.0). Ditt lands nasjonale tillegg endrer noen av dem: åpne {{ui:Verdier fra nasjonalt tillegg}}, skriv inn dine, og lag kombinasjonene på nytt. De lagres i modellen.

## Kontroller stavene

Trykk {{ui:Kontroller staver}}. For hver stålprofil i I-form viser tabellen dens **utnyttelse** (last delt på kapasitet: 100 % er grensen), om den består, hvilken kontroll som styrer, og hvilken kombinasjon. Stavene farges i modellen: blå lite brukt, grønn omtrent halvparten, okker nær grensen, rød over grensen, grå ikke kontrollert. Klikk på navnet til en stav for å velge den.

Kontrollene, med klausulen hver følger (de står i rapporten):

- strekk, trykk med bøyningsknekking og torsjonsknekking, bøyning om begge akser med sideveis vipping, skjær, og bøyning med aksialkraft;
- nedbøyning for bruksgrensekombinasjonene mot {{ui:Nedbøyningsgrense}} du satte (L/360 til å begynne med; en prosjektverdi, ikke en standardverdi).

**Lengder.** Den avstivede lengden er en andel av hver analysert del (1 = ikke avstivet). Avstivningene antas jevnt fordelt fra starten. K-faktorer multipliserer lengden ved knekking. Et knutepunkt der en annen stav møter, deler en stav, og hver del kontrolleres på sin egen lengde, som avstivet der.

## Hva som ikke kontrolleres

En stav viser **ikke kontrollert**, med årsaken, i stedet for et tall når tverrsnittet ikke er en profil kontrollene kjenner (vinkeljern, U-profiler; rektangulære og runde rør kontrolleres når veggene er kompakte), når det er en spesialprofil (sveiset), eller når en del er slank (AISC) eller klasse 4 (Eurocode) ved bøyning. En slank del ved trykk fjerner trykkontrollene, og staven viser *består, delvis kontrollert*. Sveisene i knutepunktene har [sin egen kontroll](topic:weld-checks). Også ikke bygget: annenordenseffekter, torsjon, skjærknekking sammen med bøyning, boltede forbindelser, utmatting, brann og seismisk detaljering. Betongstaver og jordskjelvlaster har [egne kontroller](topic:concrete-and-seismic). Se [Ikke bygget ennå](topic:not-built-yet).

## Rapporten

{{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} får dimensjoneringstabellene når du har kontrollert: utgavene av standardene, innstillingene og verdiene fra det nasjonale tillegget, utnyttelse per stav, hver klausul som er brukt, og for hver stav lasten, kapasiteten og utnyttelsen for hver kontroll i den styrende kombinasjonen.
