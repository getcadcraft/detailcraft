---
title: Åbn, gem og eksportér filer
summary: DetailCraft-modelfilen, hver eksport den skriver, hvor filerne havner, og hvad der er forskelligt efter browser og forbindelse.
keywords: åbn, gem, eksport, download, fil, json, ifc, nc1, dstv, csv, pdf, zip, formater, import
from: bd715ea3
---

DetailCraft har én fil af sin egen, modellen, og fem eksporter. Hver gemning og hver eksport er en download. Der uploades intet, og intet opbevares på en server.

## Modelfilen

En DetailCraft-model gemmes som `<navn>.detailcraft.json`, hvor `<navn>` er modellens navn i panelet {{ui:Model}}. Den rummer gitrene, niveauerne, stålprofilerne (med deres huller og udskæringer), forbindelserne og deres indstillinger, fundamenterne og dine egne profiler.

Dele, positionsnumre, bolte, svejsninger og stænger gemmes ikke: DetailCraft regner dem ud igen fra modellen, hver gang den åbnes. Det er derfor, en modelfil er lille.

### Gem

1. Skriv et navn i feltet {{ui:Navn}} øverst i panelet {{ui:Model}}.
2. Vælg {{ui:Gem}} i gruppen {{ui:Fil}}, eller tryk på {{key:Mod+S}}.
3. Browseren downloader `<navn>.detailcraft.json`. Statuslinjen siger "Saved … (downloaded)", og prikken i begyndelsen af browserfanens titel forsvinder.

Hver gemning er en ny download. Browseren overskriver ikke den fil, du åbnede; afhængigt af dens indstillinger tilføjer den et tal til navnet, som `Frame (1).detailcraft.json`, eller spørger, hvor der skal gemmes. Behold dine egne versioner ved at omdøbe downloadene.

:::chromium
Chrome og Edge gemmer i din mappe Downloads, medmindre **Spørg, hvor hver fil skal gemmes, før den downloades** er slået til i browserens indstillinger for downloads. Slå den til, hvis du vil vælge en mappe og et filnavn hver gang.
:::

:::firefox
Firefox gemmer i din mappe Downloads eller spørger hver gang, hvis **Spørg altid, hvor filer skal gemmes** er slået til i dens indstillinger.
:::

:::safari
Safari gemmer i din mappe Downloads. For at ændre mappen åbner du **Safari, Indstillinger, Generelt, Placering af filhentning**.
:::

### Åbn

1. Vælg {{ui:Åbn}} i gruppen {{ui:Fil}}, eller tryk på {{key:Mod+O}}.
2. Vælg en `.detailcraft.json`-fil.

Eller træk filen fra {{pick:mac=Finder|windows=Stifinder|linux=filhåndteringen}} og slip den på visningen. Visningen siger "Slip en DetailCraft-model for at åbne den", mens du trækker.

Hvis den åbne model har ugemte ændringer, spørger DetailCraft først: {{ui:Annuller}}, {{ui:Kassér ændringer}} eller {{ui:Gem først}}.

DetailCraft kontrollerer hvert felt i en fil, før den bruger den. Alt, den ikke kan bruge, udelades, og statuslinjen siger hvad, for eksempel "2 members were not valid and left out." En model gemt af en nyere DetailCraft afvises med en besked i stedet for at blive åbnet halvt rigtigt.

### Det den åbner

Sine egne modelfiler (`.json`, op til 50 MB) og IFC-filer (`.ifc`, IFC2X3 eller IFC4, op til 200 MB). En IFC-fil, åbnet eller hentet ind med {{ui:Importér IFC}}, bliver til en ny model af sine bjælker, søjler, stålprofiler, plader, gitre og niveauer, med hullerne og udskæringerne skåret i dem og dens bolte som løse bolte; en rapport viser, hvad der blev udeladt. Se [IFC-eksport](topic:ifc-export#import). Den åbner ikke DWG, DXF eller noget andet detaljeringsprograms model endnu; hvis du prøver, vises "DetailCraft opens its own models (.detailcraft.json) and IFC files (.ifc)."

## Tabt arbejde, seneste filer, skrivebordsappen

- Mens modellen har ændringer, du ikke har gemt, beholder DetailCraft en kopi i denne browser. Hvis fanen eller browseren stopper, før du gemmer, spørger DetailCraft **Gendan dit arbejde?** næste gang, du åbner den: gendan kopien, eller lad den gå. Se [Gendan dit arbejde](common:recover).
- Modeller, du har åbnet for nylig, står på startskærmen, når browseren lader DetailCraft åbne dem igen; klik på en for at åbne den igen.
- I skrivebordsappen skriver {{ui:Gem}} modellen tilbage til den fil, du åbnede (i browseren downloader den en kopi), og et dobbeltklik på en DetailCraft-model eller en IFC-fil åbner den i DetailCraft.

## Eksporter

Alle eksporter bruger modellens navn. Vælg dem i gruppen {{ui:Uddata}}.

| Knap | Fil | Hvad der er i den |
|---|---|---|
| {{ui:IFC}} | `<navn>.ifc` | IFC4: etager, gitre, hver ståldel som en profilekstrudering med sine huller og udskæringer, samlinger, bolte og ankerbolte, fundamenter og hver stang. Se [Eksportér IFC](topic:ifc-export). |
| {{ui:NC-filer}} | `<navn> NC.zip` | Én DSTV `.nc1`-fil pr. positionsnummer. Se [Send NC-filer til værkstedet](topic:nc-export). |
| {{ui:Stykliste}} | `<navn> BOM.csv` | Tre tabeller i én fil: dele, samlinger og bolte og ankerbolte. Se [Positionsnumre og styklisten](topic:marks-and-bom). |
| {{ui:Bukning}} | `<navn> bending schedule.csv` | Hvert jernmærke i fundamenterne. Se [Fundamenter og armering](topic:footings-and-rebar). |
| {{ui:Værkstedstegning}} | `<navn> <mærke>.pdf` | Ét ark (A3, medmindre du valgte en anden størrelse) for den markerede del (I-profiler og plader). Se [Lav en værkstedstegning](topic:shop-drawings). |
| {{ui:Tegninger}} | `<navn> drawings.pdf`, `<navn> <ark>.pdf`; `<navn> <ark>.dwg` eller `.dxf`, flere i `<navn> drawings DWG.zip` (eller `DXF.zip`) | Planer, facader og samlingstegninger i den arkstørrelse, du valgte; DWG og DXF i fuld størrelse, 1 enhed = 1 mm på papiret. Se [Hovedtegninger og samlingstegninger](topic:drawings). |

### Bemærkninger om CSV-filerne

- De begynder med et byte-order mark, så regnearksprogrammer læser tegn med accent rigtigt.
- En celle, der begynder med `=`, `+`, `-` eller `@` (og ikke er et almindeligt tal), får en indledende apostrof, så et regneark aldrig kører den som en formel.
- Længder er i millimeter og vægte i kilogram.

### Bemærkninger om PDF'en

Tekst i PDF'en bruger standardskrifttypen Helvetica. Tegn, den ikke har (uden for det vesteuropæiske sæt), udskrives som "?", og statuslinjen fortæller dig hvor mange.

## Enheder

DetailCraft arbejder i millimeter overalt: gitre, niveauer, koordinater, profiler, huller og hver eksport. Profilnavne beholder deres offentliggjorte form (W12x50 er en amerikansk betegnelse, selv om dens mål vises i mm). Der er endnu ingen imperial indtastning.

## Online og offline

At åbne, gemme og eksportere sker alt sammen i din browser, så det virker på samme måde med eller uden forbindelse, når DetailCraft først er indlæst.

For at bruge DetailCraft uden forbindelse senere vælger du {{ui:Gem til offline brug}} i appfeltet, mens du er online. Knappen tæller op ("Saving 3 of 20") og siger derefter {{ui:Klar offline}}. Den gemte kopi indeholder 3D-grafikbiblioteket (omkring 2,6 MB) og denne hjælp, så når den er gemt, virker 3D-visningen, hver eksport og hjælpen alle sammen offline. Detaljer og hvad der stadig kræver forbindelse: [Arbejd offline](common:offline).

:::offline
Du er offline. Hvis appfeltet viser {{ui:Klar offline}}, virker det at åbne, gemme og eksportere som sædvanligt. Hvis ikke, så hold denne fane åben, genindlæs den ikke, før du er online igen, og gem din model nu.
:::

Gemning i skyen er der ikke endnu, og der er ingen skrivebordsbuilds endnu. Tag sikkerhedskopi af dine `.detailcraft.json`-filer, som du gør med enhver anden arbejdsfil. Mere i [Hvor dine filer havner](common:your-files).

## Ugemt arbejde

DetailCraft beholder kun modellen i den åbne fane. Hvis du lukker eller genindlæser fanen med ugemte ændringer, spørger browseren, om du vil forlade siden; dens ordlyd er browserens egen. Gem ofte med {{key:Mod+S}}.
