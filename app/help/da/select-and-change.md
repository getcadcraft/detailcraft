---
title: Vælg med vindue, flyt, roter, spejl, ændr mange
summary: Træk et vindue for at vælge, træk valgte dele for at flytte dem, flyt, roter eller spejl valget (eller en kopi af det), eller ændr profil, materiale, position eller rotation på mange stålprofiler samtidig.
keywords: lasso, hegn, frihåndsvalg, træk, træk og slip, flyt ved at trække, fangst, vindue, kryds, boksvalg, træk for at vælge, vælg mange, flyt, roter, spejl, vend, kopi, ændr mange, flere stålprofiler, profil, materiale, position, rotation, varierer, akselinje
from: 50b16f9a
---

Hver af disse er ét fortrydelsestrin: ét {{key:Mod+Z}} fortryder det hele.

## Vælg med et vindue

- I {{ui:Plan}} og {{ui:Facade}} trækkes med venstre knap fra et tomt sted. I {{ui:3D}} holdes {{key:Shift}} nede, og der trækkes (et almindeligt træk drejer modellen).
- Træk **mod højre** for et vindue: det tager det, der er helt inden i, tegnet med en fuld kant.
- Træk **mod venstre** for et krydsvindue: det tager alt, det rører, tegnet stiplet.
- Hold {{key:Shift}} nede, mens du starter trækket, for at tilføje til valget i stedet for at erstatte det.
- En plan eller facade tilbyder kun det, den viser: dele skåret væk over planen, eller mere end 1 m fra facadens akselinje, kan ikke vælges.
- {{key:Esc}} under trækket opgiver vinduet.

### Lasso

Vælg **Lasso** under {{ui:Træk for at vælge}} i [indstillinger i DetailCraft](topic:settings), og det samme træk tegner en frihåndslinje i stedet for et rektangel.

- Dens første sidelæns bevægelse afgør, hvordan den vælger: **mod højre**, det der er helt inden i (fuld linje); **mod venstre**, det den rører (stiplet).
- Tryk {{key:Space}} under trækket for at skifte mellem inden i, rørende og **hegn**: en åben linje, der tager alt, den krydser (prikket, orange).
- {{key:Shift}} for at tilføje og {{key:Esc}} for at opgive fungerer som for vinduet.

:::touch
På en touchskærm panorerer ét finger planen og facaden som før; vælg dele ved at trykke på dem.
:::

I {{ui:Plan}} og {{ui:Facade}} panoreres med højre eller midterste knap, mens værktøjet {{ui:Vælg}} er slået til.

## Træk dele for at flytte dem

1. Vælg delene først (klik, {{key:Shift}}+klik eller et vindue).
2. Tryk på en af de valgte dele og træk. Hele valget flytter sig; en stiplet kontur viser, hvor det går hen.
3. Slip for at placere det. {{key:Esc}} før du slipper, sætter alt tilbage.

- I {{ui:3D}} og {{ui:Plan}} flytter delene sig hen over etagen. Hold {{key:Mod}} nede, når du starter trækket i {{ui:3D}}, for at flytte dem op og ned i stedet.
- I {{ui:Facade}} flytter de sig inden for facaden: langs akselinjen og op og ned.
- Den del du holder, snapper til et akseskæringspunkt, når dens ende kommer inden for få pixels af et (skæringspunktet lyser op, og statuslinjen navngiver det). Ellers går flytningen i 10 mm trin.
- Tryk på en del, der ikke er valgt, drejer eller panorerer stadig visningen, så et træk aldrig flytter noget ved et uheld.
- Trækket er ét fortrydelsestrin, ligesom {{ui:Flyt}}. Forbindelser følger deres stålprofiler.

## Ændr en egenskab på mange stålprofiler

Vælg to eller flere stålprofiler. Under **Ændr på alle** i panelet {{ui:Egenskaber}}:

- {{ui:Profil}}, {{ui:Position}}: for bjælkerne, søjlerne og afstivningerne blandt dem.
- {{ui:Pladetykkelse (mm)}} og {{ui:Pladebredde (mm)}}: for pladerne.
- {{ui:Materiale}} og {{ui:Rotation (°)}}: for alle.

Et felt viser **Varierer**, når stålprofilerne ikke er ens. Vælg eller skriv en værdi, og hver stålprofil, den gælder for, får den; statuslinjen siger, hvor mange der ændrede sig, og hvor mange der beholdt deres egen.

Talfelter i panelet {{ui:Egenskaber}} accepterer også en beregning: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. En beregning der ikke kan læses, afvises, og statuslinjen siger, hvor den gik galt.

## Flyt, roter eller spejl

Vælg stålprofiler og fundamenter (en enkelt virker også), og brug **Flyt, roter, spejl** i panelet {{ui:Egenskaber}}. Forbindelser flyttes ikke alene: de følger deres stålprofiler. Hvis du flytter en bjælke, men ikke dens søjle, siger statuslinjen, hvor mange forbindelser der nu forbinder en flyttet del med en, der blev stående, og [Problemer](topic:troubleshooting) siger, om de ikke længere passer.

- **Flyt:** skriv x, y og z i millimeter og vælg {{ui:Flyt}}. Eller vælg {{ui:Vælg to punkter}} (eller tryk {{key:M}}): klik på det akseskæringspunkt, der flyttes fra, og derefter det, der flyttes til. En stiplet kontur følger markøren.
- **Roter i plan:** skriv vinklen (mod uret, set oppefra) og vælg, hvad der drejes om: valgets midte, eller et akseskæringspunkt. Søjler drejer med rammen.
- **Spejl:** vælg en akselinje. Spejlbilledet er den samme profil vendt den anden vej: en I-profil beholder sine flanger, en U-profil vender den anden vej (dens top og bund bytter plads), og huller og udskæringer følger delen.
- Sæt kryds ved **Behold originalen (lav en kopi)** for at lade valget blive, hvor det er, og flytte, rotere eller spejle en kopi. Dens forbindelser følger med, når {{ui:Kopiér endeplader og fodplader med deres stålprofiler}} er slået til i [indstillinger i DetailCraft](topic:settings).

Rotation drejer om en lodret linje, og spejling sker i et lodret plan, så etager forbliver vandrette, og fundamenter forbliver lodrette.
