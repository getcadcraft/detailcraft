---
title: Velg med vindu, flytt, roter, speil, endre mange
summary: Dra et vindu for å velge, dra valgte deler for å flytte dem, flytt, roter eller speil utvalget (eller en kopi av det), eller endre profil, materiale, posisjon eller rotasjon på mange staver samtidig.
keywords: lasso, gjerde, fritt utvalg, dra, dra og slipp, flytt ved å dra, fangst, vindu, kryssing, boksvalg, dra-velg, velg mange, flytt, roter, speil, snu, kopier, endre mange, flere staver, profil, materiale, posisjon, rotasjon, varierer, akselinje
from: 50b16f9a
---

Hver av disse er ett angrestegg: ett {{key:Mod+Z}} tar alt tilbake.

## Velg med et vindu

- I {{ui:Plan}} og {{ui:Fasade}} drar du med venstre knapp fra et tomt sted. I {{ui:3D}} holder du {{key:Shift}} og drar (et vanlig drag roterer modellen).
- Dra **mot høyre** for et vindu: det tar det som er helt innenfor, og tegnes med en heltrukket kant.
- Dra **mot venstre** for et kryssingsvindu: det tar alt det berører, og tegnes stiplet.
- Hold {{key:Shift}} mens du starter draget for å legge til i utvalget i stedet for å erstatte det.
- En plan eller fasade tilbyr bare det den viser: deler som er kuttet bort over planet, eller mer enn 1 m fra fasadens akselinje, kan ikke velges.
- {{key:Esc}} mens du drar, forkaster vinduet.

### Lasso

Velg **Lasso** under {{ui:Dra for å velge}} i [DetailCraft-innstillinger](topic:settings), så tegner det samme draget en fri linje i stedet for et rektangel.

- Den første bevegelsen sideveis avgjør hvordan utvalget skjer: **mot høyre** tar det som er helt innenfor (heltrukket linje); **mot venstre** tar det som berøres (stiplet).
- Trykk {{key:Space}} mens du drar for å bytte mellom innenfor, berøring og **gjerde**: en åpen linje som tar alt den krysser (prikket, oransje).
- {{key:Shift}} for å legge til og {{key:Esc}} for å forkaste fungerer som for vinduet.

:::touch
På en berøringsskjerm panorerer ett finger plan og fasade som før; velg deler ved å trykke på dem.
:::

I {{ui:Plan}} og {{ui:Fasade}} panorerer du med høyre eller midtre knapp mens verktøyet {{ui:Velg}} er på.

## Dra deler for å flytte dem

1. Velg delene først (klikk, {{key:Shift}}+klikk eller et vindu).
2. Trykk på en av de valgte delene og dra. Hele utvalget flytter seg; en stiplet kontur viser hvor det går.
3. Slipp for å plassere det. {{key:Esc}} før du slipper, legger alt tilbake.

- I {{ui:3D}} og {{ui:Plan}} flytter delene seg på tvers av etasjen. Hold {{key:Mod}} mens du starter draget i {{ui:3D}} for å flytte dem opp og ned i stedet.
- I {{ui:Fasade}} flytter de seg innenfor fasaden: langs akselinjen og opp og ned.
- Delen du holder, fester seg til et aksekryss når enden kommer innen noen få piksler fra et (krysset lyser opp, og statuslinjen navngir det). Ellers går flyttingen i trinn på 10 mm.
- Å trykke på en del som ikke er valgt, roterer eller panorerer fortsatt visningen, så et drag flytter aldri noe ved et uhell.
- Draget er ett angrestegg, som {{ui:Flytt}}. Forbindelser følger stavene sine.

## Endre en egenskap på mange staver

Velg to eller flere staver. Under **Endre på alle** i panelet {{ui:Egenskaper}}:

- {{ui:Profile}}, {{ui:Position}}: for bjelkene, søylene og avstivningene blant dem.
- {{ui:Plate thickness (mm)}} og {{ui:Plate width (mm)}}: for platene.
- {{ui:Material}} og {{ui:Rotation (°)}}: for alle.

Et felt viser **Varierer** når stavene ikke er enige. Velg eller skriv en verdi, så får hver stav den gjelder, den; statuslinjen sier hvor mange som ble endret, og hvor mange som beholdt sin egen.

Talfelt i panelet {{ui:Egenskaper}} tar også en beregning: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. En beregning som ikke kan leses, avvises, og statuslinjen sier hvor det gikk galt.

## Flytt, roter eller speil

Velg stavene og fundamentene (en enkelt fungerer også), og bruk **Flytt, roter, speil** i panelet {{ui:Egenskaper}}. Forbindelser flyttes ikke alene: de følger stavene sine. Flytter du en bjelke, men ikke søylen den står på, sier statuslinjen hvor mange forbindelser som nå kobler en flyttet stav til en som ble stående, og [Problemer](topic:troubleshooting) sier om de ikke passer lenger.

- **Flytt:** skriv x, y og z i millimeter og velg {{ui:Flytt}}. Eller velg {{ui:Velg to punkter}} (eller trykk {{key:M}}): klikk aksekrysset å flytte fra, deretter det å flytte til. En stiplet kontur følger pekeren.
- **Roter i plan:** skriv vinkelen (mot klokken, sett ovenfra) og velg hva som skal dreies om: utvalgets midte, eller et aksekryss. Søyler dreies med rammeverket.
- **Speil:** velg en akselinje. Speilbildet er samme profil snudd den andre veien: en I-profil beholder flensene, en U-profil vender den andre veien (topp og bunn bytter plass), og hull og utklinkninger følger delen.
- Kryss av for **Behold originalen (lag en kopi)** for å la utvalget stå og flytte, rotere eller speile en kopi. Forbindelsene følger med når {{ui:Kopier endeplater og fotplater med stavene sine}} er på i [DetailCraft-innstillinger](topic:settings).

Rotasjon skjer om en vertikal linje, og speiling skjer i et vertikalt plan, så etasjene forblir vannrette og fundamentene forblir loddrette.
