---
title: Bevæg dig rundt i 3D-visningen
summary: Drej, panorér og zoom med en mus, et trackpad eller en touchskærm, og hvornår du i stedet skal bruge Plan og Facade.
keywords: drej, roter, panorér, zoom, navigér, visning, kamera, trackpad, touch, plan, facade, tilpas, mus
from: 02c9c7b9
---

Visningen har tre tilstande, valgt i visningslinjen over den: {{ui:3D}}, {{ui:Plan}} og {{ui:Facade}}. Museknapperne gør forskellige ting i 3D end i Plan og Facade, så læs begge tabeller.

## I 3D

:::mouse
| For at | Gør dette |
|---|---|
| Dreje rundt om modellen | Træk med venstre knap |
| Panorere | Træk med højre knap, eller hold {{key:Shift}} nede og træk med venstre knap |
| Zoome | Drej hjulet, eller træk op og ned med midterknappen (hjulet trykket ned) |
| Vælge en del | Klik på den (et klik, der flytter sig mindre end få pixels) |
| Se hele modellen | Tilpas-knappen yderst til højre på visningslinjen |
:::

:::touch
| For at | Gør dette |
|---|---|
| Dreje rundt om modellen | Træk med en finger |
| Panorere | Træk med to fingre |
| Zoome | Knib med to fingre |
| Vælge en del | Tryk på den |
| Se hele modellen | Tilpas-knappen yderst til højre på visningslinjen |
:::

Visningskuben øverst til højre (under visningslinjen) drejer med modellen: klik på en flade, kant eller et hjørne for at kigge derfra, træk i den for at dreje, eller klik på dens husknap for at gå tilbage til startvisningen. Se [Visningskuben](topic:view-cube).

Modellen drejer om midten af visningen, og hjulet zoomer mod midten af visningen, ikke mod markøren. Vil du se et hjørne tæt på, skal du først panorere det til midten og derefter zoome.

## I Plan og Facade

Disse visninger kigger lige på modellen og kan ikke drejes.

:::mouse
| For at | Gør dette |
|---|---|
| Panorere | Træk med venstre eller højre knap |
| Zoome | Drej hjulet, eller træk op og ned med midterknappen |
| Vælge en del | Klik på den |
:::

:::touch
| For at | Gør dette |
|---|---|
| Panorere | Træk med en finger |
| Zoome | Knib med to fingre (træk med to fingre panorerer også) |
| Vælge en del | Tryk på den |
:::

## På et Mac-trackpad

:::mac
- **Zoom:** stryg op eller ned med to fingre, eller knib. Begge sendes til visningen som zoom.
- **Drej (3D):** tryk på trackpadet og træk med en finger. Hvis du bruger tryk for at klikke, virker dobbelttryk og træk også, når træk er slået til under **Systemindstillinger, Tilgængelighed, Pegeredskabskontrol, Trackpad-indstillinger**.
- **Panorér (3D):** hold {{key:Shift}} nede og træk. At holde {{key:Ctrl}} eller {{key:Mod}} nede under træk panorerer også. Et klik med to fingre er et højreklik, men at trække med det er besværligt på et trackpad.
- **Panorér (Plan og Facade):** bare træk.
- En Magic Mouse har ingen midterknap: brug {{key:Shift}}-træk til at panorere og et stryg på overfladen til at zoome.
:::

Mere om højreklik og panorering uden mus: [Taster, mus og trackpads](common:keys).

## Plan og Facade gør placering nemmere

I {{ui:3D}} kan skæringspunkter på forskellige niveauer ligge oven på hinanden på skærmen, og et klik går til den nærmeste prik. I {{ui:Plan}} og {{ui:Facade}} kan kun prikkerne på det niveau eller den gitterlinje, du kigger på, vælges.

1. Vælg {{ui:Plan}}, og vælg derefter et niveau i listen ved siden af knapperne. Visningen kigger ned på det niveau; alt, der er mere end 1.5 m over det, er skåret væk.
2. Eller vælg {{ui:Facade}}, og vælg derefter en bogstavsgitterlinje ("Gitter A", "Gitter B" …). Visningen kigger lige på linjen; kun stål inden for 1 m af den vises.

Facader findes kun på bogstavsgitterlinjer. Vil du arbejde på en linje med nummererede gitre (en ramme fra A til B), så brug {{ui:3D}}, eller placér ved at skrive i formularen {{ui:Tilføj efter gitter}}. Se [Placér søjler, bjælker og afstivninger](topic:place-members#place-by-grid-without-clicking).

## Markering

- Klik på en del for at vælge den. Den får fremhævningsfarven, og panelet {{ui:Egenskaber}} viser den.
- Klik på tomt rum, eller tryk {{key:Esc}}, for at rydde markeringen.
- Stål vinder over beton: et klik på en søjle inde i et gennemsigtigt fundament vælger søjlen. Klik på fundamentet væk fra søjlen, eller på et af dets armeringsjern, for at vælge fundamentet.
- Klik på en bolt eller en endeplade vælger dens forbindelse.
- I Plan og Facade kan dele, der er skåret væk, ikke klikkes.
- Hold {{key:Shift}} (eller {{key:Ctrl}}, eller {{key:Mod}}) nede og klik for at føje en del til markeringen eller fjerne den; {{key:Mod+A}} vælger alt. Der er endnu ingen markering med vindue (træk en boks). Hvad du kan gøre med flere: [Kopiér, sæt ind og duplikér](topic:copy-paste).

Du kan også vælge fra lister: klik på et mærke i {{ui:Positionsnumre}} til venstre, et positionsnummer i fanen {{ui:Stykliste}}, eller {{ui:Vælg}} ved siden af en linje i {{ui:Problemer}}.

## Hvis visningen ser forkert ud

- Mistet modellen? Vælg Tilpas-knappen.
- Visningen er tom eller grå med en besked om WebGL: se [Fejlfinding](topic:troubleshooting#the-3d-view-is-missing).
- Alt virker stadig uden 3D-visningen, bortset fra at klikke i den: panelerne, rapporterne og eksporterne kører alle, og {{ui:Tilføj efter gitter}} placerer dele ved at skrive.
