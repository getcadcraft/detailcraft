---
title: Om du kommer från annan konstruktionsprogramvara
summary: Hur vanorna i ett fullt detaljprojekteringspaket motsvaras i DetailCraft, och skillnaderna som överraskar erfarna detaljkonstruktörer.
keywords: byte, migrering, bekant, arbetsflöde, jämförelse, skillnader, numrering, komponenter, katalog, ritningar, vanor
from: 39639a5d
---

Om du detaljprojekterar i Tekla Structures känns det mesta i DetailCraft igen: rutnät, nivåer, profiler från en katalog, delar och sammanställningar, anslutningar, numrering, NC-filer, IFC. Skalan är helt annorlunda: Tekla Structures är ett fullt produktionssystem, och DetailCraft är en liten, tidig webbläsarapp som gör ett fåtal jobb från början till slut. Den här sidan talar om var dina vanor följer med och var de inte gör det.

:::tip
Om dina händer känner igen menyfliksområdet i Tekla Structures, välj menystilen {{ui:Stålmeny}} under {{ui:Inställningar}} › {{ui:DetailCraft}} › {{ui:Menyer, tangenter och mus}}: flikarna Modellering, Detaljering, Redigera, Ritningar, Tillverkning och Vy, och mittknappen panorerar. Om du kommer från AutoCAD och gillar att skriva kommandon lägger {{ui:Ritprogram klassisk}} till en kommandorad (BEAM, COLUMN, ENDPLATE, ZOOM …). Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse).
:::

## Snabb översikt

| Du är van vid | I DetailCraft |
|---|---|
| Att skapa rutnät med koordinater i en rutnätsdialog | {{ui:Rutnät}} i vänstra panelen: etiketter och avstånden mellan linjerna, inte absoluta koordinater. Numrerade linjer går åt ett håll, bokstavslinjer åt det andra |
| Nivåer som rutnätets Z-koordinater | En separat lista {{ui:Nivåer}}, namn och höjd per rad, tillämpad med {{ui:Verkställ nivåer}} |
| Att välja punkter var som helst med fångst | Klick fångar bara rutnätsskärningar. Punkter utanför rutnätet skrivs in i en delas {{ui:Ändar (x, y, z mm)}} |
| Kommandona för pelare, balk och plåt | {{ui:Pelare}} ({{key:C}}), {{ui:Balk}} ({{key:B}}), {{ui:Stag}} ({{key:R}}), {{ui:Plåt}} ({{key:P}}), {{ui:Plint}} ({{key:F}}) |
| Dialogen för delens egenskaper (dubbelklicka på en del) | Ett klick: panelen {{ui:Egenskaper}} till höger är alltid levande; det finns ingen dialog och ingen knapp för Ändra eller Verkställ |
| Läge i plan, rotation och djupinställningar | {{ui:Läge}} (överkant stål, centrerad eller underkant på linjen) och {{ui:Rotation (°)}}. Inga separata horisontella förskjutningar |
| Profilkatalogen | En fast lista med 2,311 publicerade storlekar (AISC W, S, C, L, HSS, Pipe; europeiska IPE, HEA, HEB, UPN; brittiska UB, UC, PFC, EA, UEA, SHS, RHS, CHS och kallformade ihåliga profiler), plus parametriska plåtar och dina egna {{ui:Egen profil}}-sektioner |
| Materialkatalogen | Sju kvaliteter i en lista: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Att använda en anslutningskomponent och dess dialog | Markera balken och välj {{ui:Ändplattor}}. Inställningarna visas i panelen {{ui:Egenskaper}}. Endast två anslutningar finns (ändplatta mot pelarfläns, fotplåt) |
| Autoanslutning, eller att kopiera en knutpunkt till liknande knutpunkter | Markera en anslutning och välj {{ui:Tillämpa på liknande (n)}} |
| Numrering med serier och startnummer | Inget kommando: märkena uppdateras av sig själva efter varje ändring, med fasta prefix c, b, br, p och C, B, BR, P |
| Bult- och hål-dialoger | Hål skrivs in per yta och position. Bultar kommer bara från anslutningar |
| Verktyg för urtag, passning och polygonskärning | Urtag (överst eller underst, i någon ände) endast på I-profiler. Anslutningarnas kapningar sker automatiskt |
| Rapporter och mallar | Tre fasta rapporter i flikar längst ned, och CSV-nedladdningar |
| Att skapa ritningar och ritningslistan | En verkstadsritning per delmärke, alla gjorda på en gång, förhandsgranskade och sedan nedladdade som en PDF eller blad för blad. Inget sparas eller redigeras |
| NC-filexport | {{ui:NC-filer}}: en DSTV-fil per delmärke, endast I-profiler och plåtar, zippade |
| IFC-export | {{ui:IFC}}: IFC4 av hela modellen, med armering |
| Armering i valfri betongdel | Armering endast i rektangulära plattfundament, amerikanska stångdimensioner, med bottenmatta och startjärn |
| Modell sparad i en projektmapp, flera användare | En `.detailcraft.json`-fil som du laddar ner. En användare, på din dator |
| Ångrahistorik | {{key:Mod+Z}} och {{key:Mod+Y}}, upp till 200 steg, behålls tills du öppnar eller startar en annan modell |

## Skillnader som snubblar folk

### Märkena ändras av sig själva

Det finns inget numreringssteg. Märkena räknas om efter varje ändring, så de är alltid aktuella, men de kan också byta nummer: lägger du till en pelare kan gårdagens c3 nu vara c4. Det finns ingen "numreringshistorik" som behåller gamla märken. Färdigställ modellen och ta sedan fram stycklistan, NC-filerna och verkstadsritningarna tillsammans från en sparad fil.

### Mittenknappen zoomar; den panorerar inte

I 3D-vyn: vänsterdrag vrider, högerdrag panorerar, hjulet zoomar, och att dra med mittenknappen zoomar också. Håller du ned {{key:Shift}} medan du vänsterdrar panoreras också. Hjulet zoomar mot mitten av vyn, inte mot pekaren. Det finns inget val av rotationscentrum: modellen vrids kring mitten av vyn. Se [Flytta runt i 3D-vyn](topic:navigate-3d).

### Pelare vetter åt ett håll som standard

Vid rotation 0 pekar en pelares flänsar längs det numrerade rutnätets riktning. Balkar som går mellan bokstavsrutnätslinjer ansluts mot livet, och ändplåtar nekas där ("Balkar som ansluts mot en pelares liv är inte byggda ännu"). Rotera de pelarna 90° innan du lägger till anslutningar.

### Fasader bara på bokstavslinjer

{{ui:Fasad}} tittar bara längs bokstavsrutnätslinjer. Det finns inga vyer längs numrerade linjer, inga sparade vyer och inga arbetsplan. Använd {{ui:3D}} eller {{ui:Lägg till efter rutnät}} för ramar på numrerade linjer.

### Markering, kopiering och flyttning

Markera flera delar med {{key:Shift}}+klick eller {{key:Mod+A}}, och kopiera, klipp ut, klistra in (på en rutnätsskärning, med ett inskrivet avstånd eller på plats) och duplicera dem, med anslutningarna ([Kopiera, klistra in och duplicera](topic:copy-paste)). Det finns ingen fönstermarkering, inget markeringsfilter, ingen flytt, spegling eller matris, och egenskaper ändras en del i taget i panelen {{ui:Egenskaper}}.

### Rutnät drar inte med delar

Delar behåller sina koordinater när du ändrar rutnätsavståndet; ingenting flyttas med rutnätslinjerna. Ändra rutnätet innan du placerar stål, eller redigera varje delas ändkoordinater efteråt.

### Anslutningar konstrueras inte

De två anslutningarna placerar plåtar, hål, bultar och svetsar utifrån de siffror du anger. Det finns ingen konstruktionskontroll av något slag, bara varningar för kant- och avståndsmått (från EN 1993-1-8 tabell 3.3).

### Hål skärs inte i 3D-vyn

Hål visas som mörka proppar. De är riktiga hål i NC-filerna, verkstadsritningarna och IFC-filen. Urtag skärs i vyn.

### Vikter är brutto

Stålvikten drar inte av hål eller urtag, och bultvikten ingår inte.

### Endast millimeter

Allt skrivs in och visas i millimeter, även för AISC-profiler. Profilnamn behåller sin publicerade form (W12x50, HSS6x6x1/4).

### Inga ritningar att hantera

Det finns ingen ritningslista, ingen ritningsredigerare, ingen översiktsritning och inga monteringsritningar. En verkstadsritning görs när du begär den och laddas ner; för att ändra den, ändra modellen och gör den igen.

### Det körs i en webbläsare

Att spara laddar ner en fil. Tangentbordsgenvägar som webbläsaren själv behåller kan inte användas. Dina modeller lämnar aldrig din dator: se [Var dina filer tar vägen](common:your-files).

## Vad du fortsätter göra i din nuvarande programvara

Idag passar DetailCraft små ramar, att pröva en idé, undervisning, eller att ta fram NC-filer och verkstadsritningar för enkla balk- och pelararbeten. Behåll komplexa anslutningar, översiktsritningar, monteringsritningar, projekt med flera användare och allt som listas i [Vad som inte finns ännu](topic:not-built-yet) i den programvara du använder nu.
