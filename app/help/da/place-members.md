---
title: Placér søjler, bjælker og afstivninger
summary: Vælg en profil, et materiale og en position, og klik derefter på gitterskæringer eller skriv dem ind for at placere stålprofiler.
keywords: søjle, bjælke, afstivning, stålprofil, placér, profil, materiale, rotation, position, forskydning, indsæt, tilføj efter gitter
from: d6db0dc1
---

Stålprofiler placeres på gitterskæringer: en søjle på én, en bjælke eller afstivning mellem to. Opsæt [gitre og niveauer](topic:grids-and-levels) først.

## Vælg et værktøj og dets indstillinger

1. Vælg {{ui:Søjle}} ({{key:C}}), {{ui:Bjælke}} ({{key:B}}) eller {{ui:Afstivning}} ({{key:R}}) i gruppen {{ui:Placér}}.
2. Panelet {{ui:Egenskaber}} til højre bliver til "Placér en søjle" (eller bjælke, eller afstivning) og viser indstillingerne for den næste stålprofil:
   - {{ui:Profil}}: vælg fra listen. Størrelserne er grupperet efter katalog (W-profiler, U-profiler, vinkelstål, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS og dine egne profiler). Se [Profilkatalog](topic:profile-catalog).
   - {{ui:Materiale}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 eller S355.
   - {{ui:Position}}: hvor profilen sidder på linjen mellem de to punkter: {{ui:Stålets overside på linjen}}, {{ui:Centreret på linjen}} eller {{ui:Underside på linjen}}.
   - {{ui:Rotation (°)}}: drejer profilen om stykkets egen akse.
   - {{ui:Op til}} (kun søjler): {{ui:Næste niveau op}}, eller et niveaunavn.
3. Under indstillingerne viser en boks {{ui:Profil}} profilens mål, areal, masse pr. meter og det katalog, den kommer fra.

Standardværdierne er W12x50 i A992 til søjler (centreret), W16x26 i A992 til bjælker (stålets overside på linjen) og HSS6x6x1/4 i A500 Gr C til afstivninger (centreret). Indstillingerne bliver stående, indtil du ændrer dem.

## Placér ved at klikke

### En søjle

1. Vælg {{ui:Plan}}, og vælg det niveau, søjlen starter på.
2. Vælg {{ui:Søjle}}.
3. Før markøren tæt på en skæring. Den nærmeste prik lyser op, og statuslinjen navngiver den.
4. Klik. Søjlen løber fra det niveau til næste niveau op (eller til niveauet {{ui:Op til}}). Statuslinjen siger for eksempel "Søjle W12x50 ved A/1, Niveau 1 til Niveau 2."
5. Bliv ved med at klikke for at placere flere. Tryk {{key:Esc}}, når du er færdig.

Hvis der ikke er et niveau over det, du klikkede på, siger statuslinjen "Der er intet niveau over Niveau 2, som søjlen kan nå. Tilføj et niveau først."

### En bjælke

1. Vælg {{ui:Plan}}, og vælg bjælkens niveau.
2. Vælg {{ui:Bjælke}}.
3. Klik på den første skæring. Statuslinjen siger "Fra A/1 på Niveau 2. Klik nu på den anden ende (Esc annullerer)." En stiplet linje følger markøren.
4. Klik på den anden skæring. Bjælken vises.
5. Klik igen for at starte næste bjælke, eller tryk {{key:Esc}}.

{{key:Esc}} efter det første klik annullerer kun netop det punkt; et andet {{key:Esc}} lægger værktøjet væk.

### En afstivning

En afstivning løber mellem to skæringer på forskellige niveauer, så det er nemmest i {{ui:Facade}}.

1. Vælg {{ui:Facade}}, og vælg den bogstavede gitterlinje, afstivningen ligger på.
2. Vælg {{ui:Afstivning}}.
3. Klik på den nederste ende, og derefter på den øverste ende.

Facader findes kun for bogstavede gitterlinjer. For en afstivning i en ramme langs en nummereret linje (fra A til B) brug {{ui:3D}} eller formularen {{ui:Tilføj efter gitter}} nedenfor.

:::touch
På en touchskærm: tryk tæt på skæringen. Et tryk vælger den nærmeste prik inden for en kort afstand og gør intet, hvis ingen prik er i nærheden. Der er ingen fremhævning, før du trykker, så tjek statuslinjens besked efter hvert tryk. Træk med én finger drejer eller panorerer visningen i stedet for at placere.
:::

## Placér via gitter uden at klikke

Alle placeringsværktøjer har formularen {{ui:Tilføj efter gitter}} nederst i panelet {{ui:Egenskaber}}. Den virker med tastaturet alene og kræver ikke 3D-visningen.

1. Vælg værktøjet, for eksempel {{ui:Bjælke}}.
2. I {{ui:Tilføj efter gitter}} vælg {{ui:Fra gitter (bogstav)}}, {{ui:Fra gitter (tal)}} og {{ui:Fra niveau}}.
3. Vælg {{ui:Til gitter (bogstav)}}, {{ui:Til gitter (tal)}} og {{ui:Til niveau}}.
4. Vælg {{ui:Tilføj}}.

For en søjle eller et fundament har formularen kun ét punkt: {{ui:Gitter (bogstav)}}, {{ui:Gitter (tal)}} og {{ui:Niveau}}.

## Ændr en stålprofil efter placering

1. Tryk {{key:Esc}} (eller vælg {{ui:Vælg}}, {{key:V}}), og klik på stålprofilen.
2. I panelet {{ui:Egenskaber}} ændr {{ui:Navn}}, {{ui:Profil}}, {{ui:Materiale}}, {{ui:Position}} eller {{ui:Rotation (°)}}.
3. For at flytte den redigerer du x, y og z for {{ui:Start}} eller {{ui:Slut}} under {{ui:Ender (x, y, z mm)}}. Gitternavnet for hver ende vises nedenunder, eller dens koordinater, når den ligger uden for gitteret.

Hver ændring er ét trin i fortryd. Under felterne ser du stålprofilens {{ui:Positionsnummer}}, {{ui:Samling}}, {{ui:Tilskæringslængde}}, {{ui:Vægt}} (brutto: huller og udskæringer fratrækkes ikke) og hvilket katalog profilen kommer fra.

Stålprofiler kan endnu ikke trækkes eller arrayes. For at lave en anden som den, kopiér og indsæt den, eller duplikér den ({{key:Mod+D}}): se [Kopiér, indsæt og duplikér](topic:copy-paste).

## Slet en stålprofil

Vælg den, og tryk {{key:Delete}} eller {{key:Backspace}}, eller vælg {{ui:Slet}}. Forbindelser på den går også. {{key:Mod+Z}} bringer alt tilbage.

## Ting du skal vide

- **Hvilken vej en søjle vender.** Ved {{ui:Rotation (°)}} 0 vender en søjles flanger langs x, mod de nabostillede nummererede gitterlinjer. En bjælke fra gitter 1 til gitter 2 rammer ind i en flange; en bjælke fra A til B rammer ind i steget. Endeplader bygges kun ind i flanger, så hvis dine bjælker løber fra A til B, giv disse søjler en rotation på 90.
- **Bjælker på et niveau hænger under det** med standarden {{ui:Stålets overside på linjen}}. Vælg {{ui:Centreret på linjen}}, hvis dine niveauer er stålprofilernes midterlinjer.
- **Søjler går niveau til niveau.** For en søjle gennem to etager sættes {{ui:Op til}} til det højere niveau.
- **Skrå bjælker** er tilladt (vælg ender på forskellige niveauer), men endeplader bygges ikke på dem endnu.

Næste: [Forbind bjælker til søjler med endeplader](topic:end-plates).
