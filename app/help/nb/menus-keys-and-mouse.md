---
title: Menyer, taster og mus
summary: Velg en menystil som passer til måten arbeidet allerede gjøres på, gi en kommando en egen tast, flytt kommandoer mellom båndfaner, og bestem hva hjulet og museknappene gjør.
keywords: menystil, menyer, bånd, verktøylinje, kommandolinje, tastatursnarveier, hurtigtaster, taster, tilpass, endre tildeling, tilordne på nytt, mus, hjul, inverter, zoomretning, midtknapp, høyreknapp, panorer, kretsing, eksport, import, bytte, kjent, klassisk tegning, stålbånd
from: 4132c6e5
---

DetailCraft-kommandoene er de samme uansett hvordan de nås. En **menystil** bestemmer bare hvor de står på skjermen, hva de heter der og hvilke taster som kjører dem. Velg en i {{ui:Innstillinger}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menyer, taster og mus}}; endringen gjelder med en gang, og denne nettleseren husker den.

## De tre stilene

| Stil | Dette får du |
|---|---|
| {{ui:DetailCraft}} | DetailCraft sin egen verktøylinje (Fil, Plasser, Forbind, Rediger, Utdata) og enkeltbokstavtastene: {{key:V}} velg, {{key:B}} bjelke, {{key:C}} søyle, {{key:R}} avstivning, {{key:P}} plate, {{key:F}} fundament, {{key:S}} trapp. Utgangsstilen. |
| {{ui:Klassisk tegning}} | For folk som skriver kommandoer: et lite bånd ({{ui:Hjem}}, {{ui:Visning}}, {{ui:Utdata}}) og en kommandolinje. Skriv BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (angre), ZOOM, PLAN, 3D, DRAWINGS, NC eller HELP og trykk {{key:Enter}}; {{key:Enter}} på ingenting gjentar siste kommando, og {{key:Esc}} tømmer den. Begynn å skrive hvor som helst, så går bokstavene til kommandolinjen. Midtknappen panorerer; i 3D kretser {{key:Shift}} og midtknappen rundt. |
| {{ui:Stålbånd}} | Faner slik stålprosjekteringsprogrammer ordner dem: {{ui:Modellering}} (medlemmer, betong, trapper), {{ui:Detaljering}} (forbindelser), {{ui:Rediger}}, {{ui:Tegninger}} (tegninger og rapporter), {{ui:Produksjon}} (NC-filer, IFC) og {{ui:Visning}}, med en {{ui:Fil}}-meny og hurtigknapper til høyre. Enkeltbokstavtastene beholdes. Midtknappen panorerer; i 3D kretser venstre knapp. |

Alle stiler beholder {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} og {{key:Mod+A}}. Båndene har også visningslinjens {{ui:3D}}, {{ui:Plan}}, {{ui:Fasade}} og {{ui:Tilpass}}.

:::tip
En tast som hører til DetailCraft sitt eget oppsett, men som stilen din har gitt en annen kommando, gjør ingenting, og statuslinjen sier hvor kommandoen havnet («I Mitt stålbånd er Søyle Ctrl+Alt+C»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piltastene beholder alltid sin betydning, og mens et medlem er halvt plassert eller en kopi følger pekeren, hører bokstavene til DetailCraft.
:::

## Tilpass den

1. Velg stilen som ligner mest på det du vil ha, og klikk {{ui:Tilpass…}}.
2. Under {{ui:Taster og menyer}} finnes en kommando (søkefeltet hjelper). Klikk {{ui:Legg til en tast}} og trykk tasten, eller to taster etter hverandre for en to-bokstavers tast. Klikk på en tast for å fjerne den.
3. Med et bånd flytter {{ui:Hvor den står}} kommandoen til en annen fane og et annet panel, til {{ui:Fil}}-menyen, eller til {{ui:Bare taster}}.
4. Under {{ui:Mus}} settes hjulet, knappene som panorerer plan og fasader, og hva hver knapp gjør i 3D-visningen.
5. Gi den et navn og klikk {{ui:Lagre}}.

Lagring av en innebygd stil lager en egen kopi («Mitt stålbånd»); den innebygde endres aldri. En tast gitt til to kommandoer vises i rødt og må rettes før du kan lagre.

## Mus

- **Hjul**: {{ui:Rulling opp zoomer inn}} (utgangsverdien) eller {{ui:Rulling opp zoomer ut}}, og hvor raskt. En klype på styreplaten zoomer alltid slik fingrene beveger seg.
- **Panorer plan og fasader med**: midtknappen, høyreknappen, eller begge. Med Velg-verktøyet tegner venstre knapp alltid et valgvindu.
- **Dra i 3D-visningen**: {{ui:Hver visning sin egen}} beholder DetailCraft sine knapper (venstre kretser, midt zoomer, høyre panorerer). Eller sett hver knapp til å kretse, panorere, zoome eller ingenting; {{key:Shift}} med en knapp som kretser eller panorerer, bytter de to.

## Ta den med deg

{{ui:Eksport}} lagrer stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Importer…}} legger til en, fra en annen datamaskin eller en kollega. En importert fil kan bare peke på DetailCraft sine egne kommandoer: alt annet i den utelates og telles i statuslinjen. {{ui:Slett denne stilen}} fjerner en av dine egne.

:::note
Disse innstillingene blir i denne nettleseren. {{ui:Bruk denne stilen i alle apper}} under stilkortene gjør at hver app åpnes i sin tilsvarende stil (sin egen verktøylinje, et bånd eller Klassisk tegning), med endringene som er gjort i hver app. DetailCraft har ingen menylinjestil: når en annen apps menylinje velges for alle apper, beholder DetailCraft sin egen verktøylinje.
:::

Relatert: [Tastatur og mus](topic:keyboard) · [DetailCraft-innstillinger](topic:settings) · [Kommer fra annen prosjekteringsprogramvare](topic:coming-from)
