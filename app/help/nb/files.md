---
title: Åpne, lagre og eksportere filer
summary: Modellfilen til DetailCraft, alle eksporter den skriver, hvor filene havner, og hva som er forskjellig mellom nettlesere og tilkoblinger.
keywords: åpne, lagre, eksporter, last ned, fil, json, ifc, nc1, dstv, csv, pdf, zip, formater, importer
from: 6fbc8e8f
---

DetailCraft har én fil av eget slag, modellen, og fem eksporter. Hver lagring og hver eksport er en nedlasting. Ingenting lastes opp, og ingenting lagres på en server.

## Modellfilen

En DetailCraft-modell lagres som `<name>.detailcraft.json`, der `<name>` er modellnavnet i {{ui:Modell}}-panelet. Den inneholder rutenettene, nivåene, stavene (med hull og utklinkinger), forbindelsene og innstillingene for dem, fundamentene og egendefinerte profiler.

Deler, merker, bolter, sveiser og armeringsjern lagres ikke: DetailCraft beregner dem på nytt fra modellen hver gang den åpnes. Derfor er en modellfil liten.

### Lagre

1. Skriv et navn i feltet {{ui:Navn}} øverst i {{ui:Modell}}-panelet.
2. Velg {{ui:Lagre}} i gruppen {{ui:Fil}}, eller trykk {{key:Mod+S}}.
3. Nettleseren laster ned `<name>.detailcraft.json`. Statuslinjen sier «Lagret … (lastet ned)», og prikken foran tittelen på nettleserfanen forsvinner.

Hver lagring er en ny nedlasting. Nettleseren overskriver ikke filen du åpnet; avhengig av innstillingene legger den til et nummer i navnet, for eksempel `Frame (1).detailcraft.json`, eller spør hvor filen skal lagres. Behold egne versjoner ved å gi nedlastingene nye navn.

:::chromium
Chrome og Edge lagrer i mappen Nedlastinger, med mindre **Spør hvor hver fil skal lagres før den lastes ned** er på i nettleserens innstillinger for nedlasting. Slå det på hvis du vil velge mappe og filnavn hver gang.
:::

:::firefox
Firefox lagrer i mappen Nedlastinger, eller spør hver gang hvis **Spør alltid hvor filer skal lagres** er på i innstillingene.
:::

:::safari
Safari lagrer i mappen Nedlastinger. Hvis du vil endre mappen, åpne **Safari, Innstillinger, Generelt, Plassering for filnedlasting**.
:::

### Åpne

1. Velg {{ui:Åpne}} i gruppen {{ui:Fil}}, eller trykk {{key:Mod+O}}.
2. Velg en `.detailcraft.json`-fil.

Eller dra filen fra {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren}} og slipp den på visningen. Visningen sier «Slipp en DetailCraft-modell for å åpne den» mens du drar.

Hvis den åpne modellen har ulagrede endringer, spør DetailCraft først: {{ui:Avbryt}}, {{ui:Forkast endringer}} eller {{ui:Lagre først}}.

DetailCraft sjekker hvert felt i en fil før den brukes. Det som ikke kan brukes, utelates, og statuslinjen sier hva, for eksempel «2 staver var ikke gyldige og ble utelatt.» En modell lagret av en nyere DetailCraft avvises med en melding i stedet for å åpnes halvveis riktig.

### Hva den åpner

Egne modellfiler (`.json`, opptil 50 MB) og IFC-filer (`.ifc`, IFC2X3 eller IFC4, opptil 200 MB). En IFC-fil, åpnet eller hentet inn med {{ui:Importer IFC}}, blir en ny modell av sine bjelker, søyler, staver, plater, rutenett og nivåer, med hull og utklinkinger skåret i dem og boltene som løse bolter. En rapport viser hva som ble utelatt. Se [IFC-eksport](topic:ifc-export#import). Den åpner ikke DWG, DXF eller modeller fra andre detaljeringsprogrammer ennå; et forsøk viser «DetailCraft åpner egne modeller (.detailcraft.json) og IFC-filer (.ifc).»

## Tapt arbeid, nylige filer, skrivebordsappen

- Mens modellen har endringer du ikke har lagret, beholder DetailCraft en kopi i denne nettleseren. Hvis fanen eller nettleseren stopper før du lagrer, spør DetailCraft neste gang du åpner den: **Gjenopprett arbeidet ditt?** Gjenopprett kopien, eller la den være. Se [Gjenopprett arbeidet ditt](common:recover).
- Modeller du nylig åpnet, vises på startskjermen når nettleseren lar DetailCraft åpne dem igjen; klikk på en for å åpne den på nytt.
- I skrivebordsappen skriver {{ui:Lagre}} modellen tilbake til filen du åpnet (i nettleseren laster den ned en kopi), og dobbeltklikk på en DetailCraft-modell eller en IFC-fil åpner den i DetailCraft.

## Eksporter

Alle eksporter bruker modellnavnet. Velg dem i gruppen {{ui:Utdata}}.

| Knapp | Fil | Hva som er med |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: etasjer, rutenett, hver stålbit som en profilekstrudering med hull og utklinkinger, sammenstillinger, bolter og ankerstenger, fundamenter og alle armeringsjern. Se [Eksporter IFC](topic:ifc-export). |
| {{ui:NC-filer}} | `<name> NC.zip` | Én DSTV `.nc1`-fil per delemerke. Se [Send NC-filer til verkstedet](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tre tabeller i én fil: deler, sammenstillinger, og bolter og ankerstenger. Se [Merker og stykkliste](topic:marks-and-bom). |
| {{ui:Bøying}} | `<name> bending schedule.csv` | Hvert armeringsmerke i fundamentene. Se [Fundamenter og armeringsjern](topic:footings-and-rebar). |
| {{ui:Verkstedtegning}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` har ett ark per delemerke; {{ui:Last ned PDF}} gir arket som vises (A3 med mindre du valgte en annen størrelse). Se [Lag verkstedtegninger](topic:shop-drawings). |
| {{ui:Tegninger}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` eller `.dxf`, flere i `<name> drawings DWG.zip` (eller `DXF.zip`) | Plan-, fasade- og sammenstillingstegningene på arkstørrelsen du valgte; DWG og DXF i full størrelse, 1 enhet = 1 mm på papiret. Se [Oversiktstegninger og sammenstillingstegninger](topic:drawings). |

### Merknader om CSV-filene

- De starter med et byte-order-merke, slik at regnearkprogrammer leser tegn med aksenter riktig.
- En celle som starter med `=`, `+`, `-` eller `@` (og som ikke er et vanlig tall), får et ledende apostrof, slik at et regneark aldri kjører den som en formel.
- Lengder er i millimeter og vekter i kilogram.

### Merknader om PDF-en

Teksten i PDF-en bruker standardskriftet Helvetica. Tegn skriften ikke har (utenfor det vesteuropeiske settet), skrives ut som «?», og statuslinjen sier hvor mange.

## Enheter

DetailCraft jobber i millimeter gjennom hele: rutenett, nivåer, koordinater, profiler, hull og alle eksporter. Profilnavn beholder sin publiserte form (W12x50 er en amerikansk betegnelse, selv om dimensjonene vises i mm). Det finnes ingen imperiske enheter ennå.

## Online og offline

Åpning, lagring og eksport skjer alle i nettleseren, så de fungerer likt med eller uten forbindelse når DetailCraft er lastet.

For å bruke DetailCraft uten forbindelse senere, velg {{ui:Lagre for frakoblet bruk}} i appfeltet mens du er tilkoblet. Knappen teller opp («Lagrer 3 av 20») og viser deretter {{ui:Klar frakoblet}}. Den lagrede kopien inkluderer 3D-grafikkbiblioteket (ca. 2,6 MB) og denne hjelpen, så når den er lagret, fungerer 3D-visningen, alle eksporter og hjelpen uten forbindelse. Detaljer, og hva som fortsatt krever forbindelse: [Arbeide offline](common:offline).

:::offline
Du er frakoblet. Hvis appfeltet viser {{ui:Klar frakoblet}}, fungerer åpning, lagring og eksport som vanlig. Hvis ikke, hold denne fanen åpen, ikke last den inn på nytt før du er tilkoblet igjen, og lagre modellen nå.
:::

Skylagring er ikke tilgjengelig ennå, og det finnes ingen skrivebordsversjoner ennå. Sikkerhetskopier `.detailcraft.json`-filene dine på samme måte som andre arbeidsfiler. Mer i [Hvor filene dine havner](common:your-files).

## Ulagret arbeid

DetailCraft beholder modellen bare i den åpne fanen. Hvis du lukker eller laster inn fanen på nytt med ulagrede endringer, spør nettleseren om du vil forlate siden; ordlyden er nettleserens egen. Lagre ofte med {{key:Mod+S}}.
