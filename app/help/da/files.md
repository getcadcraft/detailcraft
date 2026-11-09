---
title: Åbn, gem og eksportér filer
summary: DetailCraft-modelfilen, hver eksport den skriver, hvor filerne ligger, og hvad der er forskelligt efter browser og forbindelse.
keywords: åbn, gem, eksport, download, fil, json, ifc, nc1, dstv, csv, pdf, zip, formater, importér
from: 6fbc8e8f
---

DetailCraft har én fil af sin egen, modellen, og fem eksporter. Hver gemning og hver eksport er en download. Intet bliver uploadet, og intet gemmes på en server.

## Modelfilen

En DetailCraft-model gemmes som `<name>.detailcraft.json`, hvor `<name>` er modelnavnet i panelet {{ui:Model}}. Den indeholder gitrene, niveauerne, elementerne (med deres huller og udskæringer), forbindelser og deres indstillinger, fundamenter og dine egne profiler.

Dele, mærker, bolte, svejsninger og armeringsjern gemmes ikke: DetailCraft beregner dem igen ud fra modellen, hver gang den åbnes. Derfor er en modelfil lille.

### Gem

1. Skriv et navn i feltet {{ui:Name}} øverst i panelet {{ui:Model}}.
2. Vælg {{ui:Save}} i gruppen {{ui:File}}, eller tryk {{key:Mod+S}}.
3. Browseren downloader `<name>.detailcraft.json`. Statuslinjen siger "Gemt … (downloadet)", og prikken foran browserfanens titel forsvinder.

Hver gemning er en ny download. Browseren overskriver ikke den fil, du åbnede; afhængigt af dens indstillinger tilføjer den et nummer til navnet, for eksempel `Frame (1).detailcraft.json`, eller spørger, hvor filen skal gemmes. Behold dine egne versioner ved at omdøbe downloadene.

:::chromium
Chrome og Edge gemmer i din Downloads-mappe, medmindre **Spørg, hvor hver fil skal gemmes, før den downloades** er slået til i browserens downloadindstillinger. Slå det til, hvis du vil vælge mappe og filnavn hver gang.
:::

:::firefox
Firefox gemmer i din Downloads-mappe, eller spørger hver gang, hvis **Spørg altid, hvor filer skal gemmes** er slået til i dens indstillinger.
:::

:::safari
Safari gemmer i din Downloads-mappe. For at ændre mappen skal du åbne **Safari, Indstillinger, Generelt, Filoverførslers placering**.
:::

### Åbn

1. Vælg {{ui:Open}} i gruppen {{ui:File}}, eller tryk {{key:Mod+O}}.
2. Vælg en `.detailcraft.json`-fil.

Eller træk filen fra {{pick:mac=Finder|windows=File Explorer|linux=din filhåndtering}} og slip den på visningen. Visningen siger "Slip en DetailCraft-model for at åbne den", mens du trækker.

Hvis den åbne model har ændringer, du ikke har gemt, spørger DetailCraft først: {{ui:Cancel}}, {{ui:Discard changes}} eller {{ui:Save first}}.

DetailCraft kontrollerer hvert felt i en fil, før den bruger det. Alt, den ikke kan bruge, udelades, og statuslinjen siger hvad, for eksempel "2 elementer var ikke gyldige og blev udeladt." En model gemt af en nyere DetailCraft afvises med en besked i stedet for at blive åbnet halvt forkert.

### Hvad den åbner

Egne modelfiler (`.json`, op til 50 MB) og IFC-filer (`.ifc`, IFC2X3 eller IFC4, op til 200 MB). En IFC-fil, der åbnes eller hentes ind med {{ui:Import IFC}}, bliver til en ny model af sine bjælker, søjler, elementer, plader, gitre og niveauer, med hullerne og udskæringerne skåret ind og sine bolte som løse bolte; en rapport lister, hvad der blev udeladt. Se [IFC-eksport](topic:ifc-export#import). Den åbner endnu ikke DWG, DXF eller en anden detaljeringspakkes model; et forsøg viser "DetailCraft åbner sine egne modeller (.detailcraft.json) og IFC-filer (.ifc)."

## Mistet arbejde, seneste filer, desktopappen

- Mens modellen har ændringer, du ikke har gemt, gemmer DetailCraft en kopi i denne browser. Hvis fanen eller browseren stopper, før du gemmer, spørger DetailCraft næste gang, du åbner den, **Gendan dit arbejde?**: gendan kopien eller lad den gå. Se [Gendan dit arbejde](common:recover).
- Modeller, du har åbnet for nylig, vises på startskærmen, når browseren lader DetailCraft åbne dem igen; klik på en for at åbne den.
- I desktopappen skriver {{ui:Save}} modellen tilbage til den fil, du åbnede (i browseren downloader den en kopi), og et dobbeltklik på en DetailCraft-model eller IFC-fil åbner den i DetailCraft.

## Eksporter

Alle eksporter bruger modelnavnet. Vælg dem i gruppen {{ui:Output}}.

| Knap | Fil | Hvad der er i den |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: etager, gitre, hver stålde­l som en profilekstrusion med sine huller og udskæringer, samlinger, bolte og ankerbolte, fundamenter og hvert armeringsjern. Se [Eksportér IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Én DSTV `.nc1`-fil pr. positionsnummer. Se [Send NC-filer til værkstedet](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tre tabeller i én fil: dele, samlinger, og bolte og ankerbolte. Se [Mærker og stykliste](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Hvert armeringsmærke i fundamenterne. Se [Fundamenter og armering](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` indeholder ét ark pr. positionsnummer; {{ui:Download PDF}} giver det viste ark (A3, medmindre du har valgt en anden størrelse). Se [Lav værkstedstegninger](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` eller `.dxf`, flere i `<name> drawings DWG.zip` (eller `DXF.zip`) | Planer, facader og samlingstegninger på det arkformat, du valgte; DWG og DXF i fuld størrelse, 1 enhed = 1 mm på papiret. Se [Oversigts- og samlingstegninger](topic:drawings). |

### Noter om CSV-filerne

- De starter med et byte-order-mærke, så regnearksprogrammer læser tegn med accenter korrekt.
- En celle, der starter med `=`, `+`, `-` eller `@` (og ikke er et rent tal), får et foranstillet apostrof, så et regneark aldrig kører den som en formel.
- Længder er i millimeter og vægte i kilogram.

### Noter om PDF'en

Teksten i PDF'en bruger standardskrifttypen Helvetica. Tegn, den ikke har (uden for det vesteuropæiske sæt), udskrives som "?", og statuslinjen fortæller, hvor mange.

## Enheder

DetailCraft arbejder i millimeter hele vejen igennem: gitre, niveauer, koordinater, profiler, huller og alle eksporter. Profilnavne beholder deres offentliggjorte form (W12x50 er en amerikansk betegnelse, selvom dimensionerne vises i mm). Der er endnu ingen input i imperiale enheder.

## Online og offline

Åbning, gemning og eksport sker alt sammen i din browser, så de virker ens med eller uden forbindelse, når DetailCraft er indlæst.

For at bruge DetailCraft uden forbindelse senere skal du, mens du er online, vælge {{ui:Save for offline}} i appbaren. Knappen tæller op ("Gemmer 3 af 20") og viser derefter {{ui:Offline ready}}. Den gemte kopi omfatter 3D-grafikbiblioteket (ca. 2.6 MB) og denne hjælp, så når den er gemt, virker 3D-visningen, alle eksporter og hjælpen offline. Detaljer, og hvad der stadig kræver forbindelse: [Arbejd offline](common:offline).

:::offline
Du er offline. Hvis appbaren viser {{ui:Offline ready}}, virker åbning, gemning og eksport som normalt. Hvis ikke, så hold denne fane åben, genindlæs den ikke, før du er online igen, og gem din model nu.
:::

Cloudgemning er endnu ikke tilgængelig, og der findes endnu ingen desktopversioner. Tag backup af dine `.detailcraft.json`-filer, ligesom du tager backup af andre arbejdsfiler. Mere i [Hvor dine filer ligger](common:your-files).

## Ikke-gemt arbejde

DetailCraft gemmer kun modellen i den åbne fane. Hvis du lukker eller genindlæser fanen med ikke-gemte ændringer, spørger browseren, om du vil forlade siden; ordlyden er browserens egen. Gem ofte med {{key:Mod+S}}.
