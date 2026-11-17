---
title: Kommer fra andet detaljeringssoftware
summary: Hvordan vanerne fra en komplet detaljeringspakke svarer til DetailCraft, og de forskelle, der overrasker erfarne detaljeringsfolk.
keywords: skift, migrering, velkendt, arbejdsgang, sammenligning, forskelle, nummerering, komponenter, katalog, tegninger, vaner
from: 39639a5d
---

Hvis du detaljerer i Tekla Structures, vil det meste af DetailCraft virke bekendt: gitre, niveauer, profiler fra et katalog, dele og samlinger, forbindelser, nummerering, NC-filer, IFC. Skalaen er meget forskellig: Tekla Structures er et komplet produktionssystem, og DetailCraft er en lille, tidlig browserapp, der klarer nogle få opgaver fra ende til anden. Denne side viser, hvor dine vaner kan bruges, og hvor de ikke kan.

:::tip
Har dine hænder kendskab til båndet i Tekla Structures, så vælg menustilen {{ui:Stålbånd}} under {{ui:Indstillinger}} › {{ui:DetailCraft}} › {{ui:Menuer, taster og mus}}: fanerne Modellering, Detaljering, Rediger, Tegninger, Fremstilling og Visning, og midterknappen panorerer. Kommer du fra AutoCAD og kan lide at skrive kommandoer, tilføjer {{ui:Tegnestil klassisk}} en kommandolinje (BEAM, COLUMN, ENDPLATE, ZOOM …). Se [Menuer, taster og mus](topic:menus-keys-and-mouse).
:::

## Hurtigt kort

| Du er vant til | I DetailCraft |
|---|---|
| At oprette gitre med koordinater i en gitterdialog | {{ui:Gitre}} i venstre panel: etiketter og afstandene mellem linjer, ikke absolutte koordinater. Nummererede linjer går den ene vej, bogstavede linjer den anden |
| Niveauer som gitterets Z-koordinater | En særskilt liste {{ui:Niveauer}}, navn og kote pr. række, anvendt med {{ui:Anvend niveauer}} |
| At vælge punkter overalt med fangsnap | Klik fanger kun til gittersnit. Punkter uden for gitteret indtastes i en dels {{ui:Ender (x, y, z mm)}} |
| Kommandoerne for søjle, bjælke og plade | {{ui:Søjle}} ({{key:C}}), {{ui:Bjælke}} ({{key:B}}), {{ui:Afstivning}} ({{key:R}}), {{ui:Plade}} ({{key:P}}), {{ui:Punktfundament}} ({{key:F}}) |
| Dialogboks med delens egenskaber (dobbeltklik på en del) | Klik én gang: panelet {{ui:Egenskaber}} til højre er altid aktivt; der er ingen dialogboks og ingen knap Ændr eller Anvend |
| Position i planet, rotation og dybdeindstillinger | {{ui:Position}} (overkant stål, centreret eller underkant på linjen) og {{ui:Rotation (°)}}. Ingen særskilte vandrette forskydninger |
| Profilkataloget | En fast liste over 2,311 publicerede størrelser (AISC W, S, C, L, HSS, Pipe; europæiske IPE, HEA, HEB, UPN; britiske UB, UC, PFC, EA, UEA, SHS, RHS, CHS og koldformede hulprofiler), plus parametriske plader og dine egne {{ui:Egen profil}}-sektioner |
| Materialekataloget | Syv kvaliteter i en liste: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| At anvende en forbindelseskomponent og dens dialogboks | Vælg bjælken, vælg {{ui:Endeplader}}. Indstillingerne vises i panelet {{ui:Egenskaber}}. Der findes kun to forbindelser (endeplade til søjleflange, fodplade) |
| Automatisk forbindelse, eller at kopiere en samling til tilsvarende samlinger | Vælg en forbindelse, vælg {{ui:Anvend på lignende (n)}} |
| Nummerering med serier og startnumre | Ingen kommando: positionsnumrene opdateres af sig selv efter hver ændring, med faste præfikser c, b, br, p og C, B, BR, P |
| Dialogbokse for bolte og huller | Huller indtastes efter flade og position. Bolte kommer kun fra forbindelser |
| Værktøjer til skæring, tilpasning og polygonskæring | Udskæringer (øverst eller nederst, i begge ender) kun på I-profiler. Tilbageskæringer ved forbindelser er automatiske |
| Rapporter og skabeloner | Tre faste rapporter i faner nederst og CSV-downloads |
| Oprettelse af tegninger og tegningslisten | Én værkstedstegning pr. positionsnummer, alle laves på én gang, forhåndsvises og downloades derefter som én PDF eller ark for ark. Intet gemmes eller redigeres |
| Eksport af NC-filer | {{ui:NC-filer}}: én DSTV-fil pr. positionsnummer, kun I-profiler og plader, zippet |
| Eksport af IFC | {{ui:IFC}}: IFC4 af hele modellen, med armering |
| Armering i alle betondele | Armering kun i rektangulære punktfundamenter, amerikanske jernstørrelser, med et bundnet og studsarmering |
| Model gemt i en projektmappe, flere brugere | Én `.detailcraft.json`-fil, som du downloader. Én bruger, på din computer |
| Fortrydelseshistorik | {{key:Mod+Z}} og {{key:Mod+Y}}, op til 200 trin, gemt indtil du åbner eller starter en anden model |

## Forskelle, der fanger folk

### Positionsnumrene ændrer sig af sig selv

Der er ingen nummereringsfase. Positionsnumrene genberegnes efter hver ændring, så de altid er aktuelle, men de kan også nummereres om: tilføjer du en søjle, kan gårsdagens c3 nu være c4. Der er ingen »nummereringshistorik« til at beholde gamle positionsnumre. Færdiggør modellen, og udsted derefter stykliste, NC-filer og værkstedstegninger samlet fra én gemt fil.

### Midterknappen zoomer; den panorerer ikke

I 3D-visningen: venstretræk drejer, højretræk panorerer, hjulet zoomer, og træk med midterknappen zoomer også. Holder du {{key:Shift}} nede, mens du venstretrækker, panoreres der også. Hjulet zoomer mod midten af visningen, ikke mod markøren. Der er intet valg af rotationscenter: modellen drejer om midten af visningen. Se [Flyt rundt i 3D-visningen](topic:navigate-3d).

### Søjler vender én vej som standard

Ved rotation 0 peger en søjles flanger langs den nummererede gitterretning. Bjælker, der løber mellem bogstavede gitterlinjer, går ind i steget, og endeplader afvises der: »Bjælker, der går ind i en søjles steg, er ikke lavet endnu«. Drej disse søjler 90°, før du tilføjer forbindelser.

### Facader kun på bogstavede linjer

{{ui:Facade}} ser kun langs bogstavede gitterlinjer. Der er ingen visninger langs nummererede linjer, ingen gemte visninger og ingen arbejdsplaner. Brug {{ui:3D}} eller {{ui:Tilføj efter gitter}} til rammer på nummererede linjer.

### Markering, kopiering og flytning

Vælg flere dele med {{key:Shift}}+klik eller {{key:Mod+A}}, og kopiér, klip, sæt ind (på et gittersnit, med en indtastet forskydning eller på samme sted) og duplikér dem, forbindelser inklusive ([Kopiér, sæt ind og duplikér](topic:copy-paste)). Der er ingen vinduesmarkering, ingen valgfilter, ingen flytning, spejling eller array, og egenskaber ændres ét element ad gangen i panelet {{ui:Egenskaber}}.

### Gitre trækker ikke dele med

Dele beholder deres koordinater, når du ændrer gitterafstanden; intet flyttes med gitterlinjerne. Ændr gitteret, før du placerer stål, eller rediger hver dels endekoordinater bagefter.

### Forbindelser designes ikke

De to forbindelser placerer plader, huller, bolte og svejsninger ud fra de tal, du angiver. Der er ingen form for designkontrol, kun advarsler om kant- og afstand (fra EN 1993-1-8 tabel 3.3).

### Huller skæres ikke i 3D-visningen

Huller vises som mørke propper. De er rigtige huller i NC-filerne, værkstedstegningerne og IFC-filen. Udskæringer skæres i visningen.

### Vægte er brutto

Stålvægten fratrækker ikke huller eller udskæringer, og boltvægten er ikke medregnet.

### Kun millimeter

Alt indtastes og vises i millimeter, selv for AISC-profiler. Profilnavne beholder deres publicerede form (W12x50, HSS6x6x1/4).

### Ingen tegninger at administrere

Der er ingen tegningsliste, ingen tegningseditor, ingen placeringstegninger og ingen samlingstegninger. En værkstedstegning laves, når du beder om den, og downloades; for at ændre den, ændrer du modellen og laver den igen.

### Den kører i en browser

Gemning downloader en fil. Tastaturgenveje, som browseren selv bruger, kan ikke bruges. Dine modeller forlader aldrig din computer: se [Hvor dine filer går hen](common:your-files).

## Hvad du skal blive ved med at gøre i din nuværende software

I dag egner DetailCraft sig til små rammer, til at afprøve en idé, til undervisning, eller til at lave NC-filer og værkstedstegninger for simpelt bjælke- og søjlearbejde. Behold komplekse forbindelser, placeringstegninger, montagetegninger, projekter med flere brugere og alt, der er listet under [Det, der ikke er lavet endnu](topic:not-built-yet), i den software du bruger nu.
