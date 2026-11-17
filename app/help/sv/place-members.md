---
title: Placera pelare, balkar och stag
summary: Välj en profil, ett material och ett läge, klicka sedan på rutnätsskärningar eller skriv in dem för att placera stålelement.
keywords: pelare, balk, stag, element, placera, profil, material, rotation, läge, förskjutning, infoga, lägg till efter rutnät
from: d6db0dc1
---

Element placeras i rutnätsskärningar: en pelare i en, en balk eller ett stag mellan två. Ställ in [rutnät och nivåer](topic:grids-and-levels) först.

## Välj ett verktyg och dess alternativ

1. Välj {{ui:Column}} ({{key:C}}), {{ui:Beam}} ({{key:B}}) eller {{ui:Brace}} ({{key:R}}) i gruppen {{ui:Place}}.
2. Panelen {{ui:Properties}} till höger blir "Placera en pelare" (eller balk, eller stag) och visar alternativen för nästa element:
   - {{ui:Profile}}: välj i listan. Storlekarna är grupperade efter katalog (W-profiler, U-profiler, vinkelstål, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS samt dina egna profiler). Se [Profilkatalog](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 eller S355.
   - {{ui:Position}}: var profilen sitter på linjen mellan de två punkterna: {{ui:Top of steel on the line}}, {{ui:Centered on the line}} eller {{ui:Bottom on the line}}.
   - {{ui:Rotation (°)}}: vrider profilen kring elementets egen axel.
   - {{ui:Up to}} (endast pelare): {{ui:The next level up}}, eller ett nivånamn.
3. Under alternativen visar rutan {{ui:Profile}} den valda profilens mått, area, massa per meter och katalogen den kommer från.

Standardvärdena är W12x50 i A992 för pelare (centrerad), W16x26 i A992 för balkar (ovankant stål på linjen) och HSS6x6x1/4 i A500 Gr C för stag (centrerad). Alternativen är kvar tills du ändrar dem.

## Placera genom att klicka

### En pelare

1. Välj {{ui:Plan}} och välj nivån pelaren börjar på.
2. Välj {{ui:Column}}.
3. Flytta pekaren nära en skärning. Närmaste punkt lyser upp och statusfältet anger den.
4. Klicka. Pelaren går från den nivån till nästa nivå uppåt (eller till nivån {{ui:Up to}}). Statusfältet säger till exempel ”Pelare W12x50 vid A/1, Nivå 1 till Nivå 2.”
5. Fortsätt klicka för att placera fler. Tryck på {{key:Esc}} när du är klar.

Om det inte finns någon nivå ovanför den du klickade på, säger statusfältet ”Det finns ingen nivå ovanför Nivå 2 som pelaren kan nå. Lägg till en nivå först.”

### En balk

1. Välj {{ui:Plan}} och välj balkens nivå.
2. Välj {{ui:Beam}}.
3. Klicka på den första skärningen. Statusfältet säger ”Från A/1 vid Nivå 2. Klicka nu på andra änden (Esc avbryter).” En streckad linje följer pekaren.
4. Klicka på den andra skärningen. Balken visas.
5. Klicka igen för att starta nästa balk, eller tryck på {{key:Esc}}.

{{key:Esc}} efter det första klicket avbryter bara den punkten; ett andra {{key:Esc}} lägger undan verktyget.

### Ett stag

Ett stag går mellan två skärningar på olika nivåer, så det är enklast i {{ui:Elevation}}.

1. Välj {{ui:Elevation}} och välj den bokstavsmärkta rutnätslinjen som staget ligger på.
2. Välj {{ui:Brace}}.
3. Klicka på den nedre änden och sedan den övre änden.

Fasader finns endast för bokstavsmärkta rutnätslinjer. För ett stag i en ram längs en numrerad linje (från A till B), använd {{ui:3D}} eller formuläret {{ui:Add by grid}} nedan.

:::touch
På en pekskärm: tryck nära skärningen. Ett tryck väljer närmaste punkt inom ett kort avstånd och gör ingenting om ingen punkt finns nära. Det finns ingen markering före du trycker, så kontrollera statusfältets meddelande efter varje tryck. Dra med ett finger vrider eller panorerar vyn i stället för att placera.
:::

## Placera efter rutnät, utan att klicka

Varje placeringsverktyg har ett formulär {{ui:Add by grid}} längst ned i panelen {{ui:Properties}}. Det fungerar enbart med tangentbordet och kräver inte 3D-vyn.

1. Välj verktyget, till exempel {{ui:Beam}}.
2. I {{ui:Add by grid}} väljer du {{ui:From grid (letter)}}, {{ui:From grid (number)}} och {{ui:From level}}.
3. Välj {{ui:To grid (letter)}}, {{ui:To grid (number)}} och {{ui:To level}}.
4. Välj {{ui:Add}}.

För en pelare eller en plint har formuläret bara en punkt: {{ui:Grid (letter)}}, {{ui:Grid (number)}} och {{ui:Level}}.

## Ändra ett element efter placering

1. Tryck på {{key:Esc}} (eller välj {{ui:Select}}, {{key:V}}) och klicka på elementet.
2. I panelen {{ui:Properties}} ändrar du {{ui:Name}}, {{ui:Profile}}, {{ui:Material}}, {{ui:Position}} eller {{ui:Rotation (°)}}.
3. För att flytta det, redigera x, y och z för {{ui:Start}} eller {{ui:End}} under {{ui:Ends (x, y, z mm)}}. Rutnätsnamnet för varje ände visas under, eller dess koordinater när den ligger utanför rutnätet.

Varje ändring är ett steg att ångra. Under fälten ser du elementets {{ui:Part mark}}, {{ui:Assembly}}, {{ui:Cut length}}, {{ui:Weight}} (brutto: hål och urtag dras inte av) samt vilken katalog profilen kommer från.

Element kan inte dras eller göras till matriser ännu. För att göra ett likadant element, kopiera och klistra in det, eller duplicera det ({{key:Mod+D}}): se [Kopiera, klistra in och duplicera](topic:copy-paste).

## Ta bort ett element

Markera det och tryck på {{key:Delete}} eller {{key:Backspace}}, eller välj {{ui:Delete}}. Förbindelser på det tas bort också. {{key:Mod+Z}} återställer allt.

## Bra att veta

- **Åt vilket håll en pelare vetter.** Vid {{ui:Rotation (°)}} 0 har pelarens flänsar riktning längs x, mot de intilliggande numrerade rutnätslinjerna. En balk från rutnät 1 till rutnät 2 ansluter till en fläns; en balk från A till B ansluter till livet. Ändplattor byggs endast in i flänsar, så om dina balkar går från A till B, ge dessa pelare en rotation på 90.
- **Balkar på en nivå hänger under den** med standardvärdet {{ui:Top of steel on the line}}. Välj {{ui:Centered on the line}} om dina nivåer är elementens mittlinjer.
- **Pelare går från nivå till nivå.** För en pelare genom två våningsplan, ställ in {{ui:Up to}} till den högre nivån.
- **Lutande balkar** är tillåtna (välj ändar på olika nivåer), men ändplattor byggs inte på dem ännu.

Nästa: [Anslut balkar till pelare med ändplattor](topic:end-plates).
