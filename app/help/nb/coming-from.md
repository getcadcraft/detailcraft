---
title: Fra annen detaljeringsprogramvare
summary: Hvordan vanene i en fullverdig detaljeringspakke passer til DetailCraft, og forskjellene som tar erfarne detaljerere på senga.
keywords: bytte, migrere, kjent, arbeidsflyt, sammenligning, forskjeller, nummerering, komponenter, katalog, tegninger, vaner
from: 39639a5d
---

Hvis du detaljerer i Tekla Structures, vil mesteparten av DetailCraft virke kjent: rutenett, nivåer, profiler fra en katalog, deler og sammenstillinger, forbindelser, nummerering, NC-filer, IFC. Skalaen er svært forskjellig: Tekla Structures er et fullverdig produksjonssystem, og DetailCraft er en liten, tidlig nettleserapp som gjør noen få oppgaver fra start til slutt. Denne siden forteller deg hvor vanene dine overføres, og hvor de ikke gjør det.

:::tip
Hvis hendene dine kjenner båndet i Tekla Structures, velg menystilen {{ui:Stålbånd}} under {{ui:Innstillinger}} › {{ui:DetailCraft}} › {{ui:Menyer, taster og mus}}: fanene Modellering, Detaljering, Rediger, Tegninger, Fabrikasjon og Visning, og midtknappen panorerer. Hvis du kommer fra AutoCAD og liker å skrive kommandoer, legger {{ui:Klassisk tegning}} til en kommandolinje (BEAM, COLUMN, ENDPLATE, ZOOM …). Se [Menyer, taster og mus](topic:menus-keys-and-mouse).
:::

## Rask oversikt

| Du er vant til | I DetailCraft |
|---|---|
| Å lage rutenett med koordinater i en rutenettdialog | {{ui:Rutenett}} i venstre panel: etiketter og avstandene mellom linjene, ikke absolutte koordinater. Nummererte linjer går én vei, bokstavlinjer den andre |
| Nivåer som Z-koordinater i rutenettet | En egen liste {{ui:Nivåer}}, navn og kote per rad, brukt med {{ui:Bruk nivåer}} |
| Å velge punkter hvor som helst med fangst | Klikk fanger bare til rutenettskjæringer. Punkter utenfor rutenettet skrives inn i et elements {{ui:Ender (x, y, z mm)}} |
| Kommandoene for søyle, bjelke og plate | {{ui:Søyle}} ({{key:C}}), {{ui:Bjelke}} ({{key:B}}), {{ui:Avstivning}} ({{key:R}}), {{ui:Plate}} ({{key:P}}), {{ui:Fundament}} ({{key:F}}) |
| Egenskapsdialogen for en del (dobbeltklikk på en del) | Ett klikk: panelet {{ui:Egenskaper}} til høyre er alltid aktivt; det finnes ingen dialog og ingen knapp for Endre eller Bruk |
| Posisjon i plan, rotasjon og dybdeinnstillinger | {{ui:Posisjon}} (overkant stål, midtstilt eller underkant på linjen) og {{ui:Rotasjon (°)}}. Ingen egne horisontale forskyvninger |
| Profilkatalogen | En fast liste over 2 311 publiserte størrelser (AISC W, S, C, L, HSS, Pipe; europeiske IPE, HEA, HEB, UPN; britiske UB, UC, PFC, EA, UEA, SHS, RHS, CHS og kaldformede hule profiler), pluss parametriske plater og dine egne {{ui:Egendefinert profil}}-seksjoner |
| Materialkatalogen | Sju kvaliteter i en liste: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Å legge til en forbindelseskomponent og dens dialog | Velg bjelken, velg {{ui:Endeplater}}. Innstillingene vises i panelet {{ui:Egenskaper}}. Bare to forbindelser finnes (endeplate til søylens flens, fotplate) |
| Automatisk forbindelse, eller kopiering av en forbindelse til lignende forbindelser | Velg en forbindelse, velg {{ui:Bruk på lignende (n)}} |
| Nummerering med serier og startnummer | Ingen kommando: merkene oppdateres av seg selv etter hver endring, med faste prefikser c, b, br, p og C, B, BR, P |
| Bolte- og hulldialoger | Hull skrives inn etter flate og posisjon. Bolter kommer bare fra forbindelser |
| Verktøy for kutt, tilpasning og polygonkutt | Utklinkinger (øverst eller nederst, i begge ender) bare på I-profiler. Kappinger ved forbindelser er automatiske |
| Rapporter og maler | Tre faste rapporter i faner nederst, og CSV-nedlastinger |
| Tegningsoppretting og tegningslisten | Én verkstedtegning per delenummer, alle laget samtidig, forhåndsvist og deretter lastet ned som én PDF eller ark for ark. Ingenting lagres eller redigeres |
| Eksport av NC-filer | {{ui:NC-filer}}: én DSTV-fil per delenummer, bare I-profiler og plater, zippet |
| IFC-eksport | {{ui:IFC}}: IFC4 for hele modellen, med armering |
| Armering i alle betongdeler | Armering bare i rektangulære plattfundamenter, amerikanske jernstørrelser, med en nedre armeringsmatte og startjern |
| Modell lagret i en prosjektmappe, flere brukere | Én `.detailcraft.json`-fil som du laster ned. Én bruker, på din egen datamaskin |
| Angrehistorikk | {{key:Mod+Z}} og {{key:Mod+Y}}, opptil 200 steg, beholdt til du åpner eller starter en annen modell |

## Forskjeller som lurer folk

### Merkene endrer seg av seg selv

Det finnes ikke noe nummereringstrinn. Merkene beregnes på nytt etter hver endring, så de er alltid oppdaterte, men de kan også nummereres om: legger du til en søyle, kan i går sin c3 nå være c4. Det finnes ingen «nummereringshistorikk» som beholder gamle merker. Ferdigstill modellen, og lag deretter stykkliste, NC-filer og verkstedtegninger samtidig fra én lagret fil.

### Midtknappen zoomer; den panorerer ikke

I 3D-visningen: venstredrag roterer, høyredrag panorerer, hjulet zoomer, og å dra med midtknappen zoomer også. Holder du {{key:Shift}} mens du drar med venstre knapp, panoreres det også. Hjulet zoomer mot midten av visningen, ikke mot pekeren. Det finnes ikke noe valg av rotasjonssenter: modellen roterer rundt midten av visningen. Se [Flytt rundt i 3D-visningen](topic:navigate-3d).

### Søylene vender én vei som standard

Ved rotasjon 0 vender en søyles flenser langs retningen til de nummererte rutenettlinjene. Bjelker som går mellom bokstavede rutenettlinjer kobles inn i steget, og endeplater avvises der («Bjelker som kobles inn i et søylesteg er ikke bygget ennå»). Roter disse søylene 90° før du legger til forbindelser.

### Fasader bare på bokstavede linjer

{{ui:Fasade}} ser bare langs bokstavede rutenettlinjer. Det finnes ingen visninger langs nummererte linjer, ingen lagrede visninger og ingen arbeidsplan. Bruk {{ui:3D}} eller {{ui:Legg til etter rutenett}} for rammer på nummererte linjer.

### Valg, kopiering og flytting

Velg flere deler med {{key:Shift}}+klikk eller {{key:Mod+A}}, og kopier, klipp ut, lim inn (på et rutenettskjæringspunkt, med en skrevet forskyvning, eller på samme sted) og dupliser dem, også forbindelsene ([Kopier, lim inn og dupliser](topic:copy-paste)). Det finnes ingen vindusvalg, ingen valgfilter, ingen flytt, speiling eller matrise, og egenskaper endres ett element om gangen i panelet {{ui:Egenskaper}}.

### Rutenett drar ikke med seg elementer

Elementene beholder koordinatene sine når du endrer rutenettavstanden; ingenting flytter seg med rutenettlinjene. Endre rutenettet før du plasserer stål, eller rediger endekoordinatene til hvert element etterpå.

### Forbindelser dimensjoneres ikke

De to forbindelsene plasserer plater, hull, bolter og sveiser ut fra tallene du gir. Det finnes ingen dimensjonskontroll av noe slag, bare varsler om kant- og avstand (fra EN 1993-1-8 tabell 3.3).

### Hull kuttes ikke i 3D-visningen

Hull vises som mørke propper. De er ekte hull i NC-filene, verkstedtegningene og IFC-filen. Utklinkinger kuttes i visningen.

### Vekter er brutto

Stålvekten trekker ikke fra hull eller utklinkinger, og boltvekten er ikke med.

### Bare millimeter

Alt skrives inn og vises i millimeter, også for AISC-profiler. Profilnavn beholder sin publiserte form (W12x50, HSS6x6x1/4).

### Ingen tegninger å administrere

Det finnes ingen tegningsliste, ingen tegningseditor, ingen oversiktstegninger eller sammenstillingstegninger. En verkstedtegning lages når du ber om det, og lastes ned; for å endre den, endre modellen og lag den på nytt.

### Den kjører i en nettleser

Lagring laster ned en fil. Hurtigtaster som nettleseren beholder for seg selv, kan ikke brukes. Modellene dine forlater aldri datamaskinen din: se [Hvor filene dine går](common:your-files).

## Det du bør fortsette med i programvaren du bruker i dag

I dag passer DetailCraft til små rammer, å sjekke en idé, undervisning, eller å lage NC-filer og verkstedtegninger for enkle bjelke- og søylearbeider. Behold komplekse forbindelser, oversiktstegninger, monteringstegninger, flerbrukerprosjekter og alt som står i [Hva som ikke er bygget ennå](topic:not-built-yet) i programvaren du bruker nå.
