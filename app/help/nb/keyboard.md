---
title: Taster og museaksjoner
summary: Hver tastatursnarvei og hver mus-, styreplate- og berøringshandling i DetailCraft, hentet fra koden.
keywords: tastatur, snarveier, hurtigtaster, taster, mus, styreplate, berøring, ctrl, kommando, jukselapp
from: 05a2dea0
---

Slik skrives taster i denne hjelpen: [Taster, mus og styreplater](common:keys). På en Mac er {{key:Mod}} Command-tasten; ellers er det Ctrl.

## Verktøy

Disse virker når markøren ikke står i et tekst- eller tallfelt.

| Tast | Gjør |
|---|---|
| {{key:V}} | {{ui:Velg}} |
| {{key:B}} | {{ui:Bjelke}} |
| {{key:C}} | {{ui:Søyle}} |
| {{key:R}} | {{ui:Avstivning}} |
| {{key:P}} | {{ui:Plate}} |
| {{key:F}} | {{ui:Fundament}} |
| {{key:S}} | {{ui:Trapp}} |
| {{key:M}} | Flytt utvalget ved å velge to rutenettskjæringspunkter ([Velg med vindu, flytt, roter, speil og endre mange](topic:select-and-change)) |
| {{key:Esc}} | Slipp et valgvindu som dras, eller legg tilbake deler som dras; avbryt en flytting, første punkt for en bjelke, avstivning eller plate, eller en liming; trykk igjen for å gå tilbake til {{ui:Velg}}; i {{ui:Velg}} fjernes utvalget. Med {{ui:Mer}}-menyen åpen lukkes den |
| {{key:Delete}} eller {{key:Backspace}} | Slett utvalget (alt som er valgt, i ett angrestegg) |

## Fil og redigering

| Tast | Gjør |
|---|---|
| {{key:Mod+S}} | Lagre modellen (last ned). Virker også mens det skrives i et felt |
| {{key:Mod+O}} | Åpne en modell. Virker også mens det skrives i et felt |
| {{key:Mod+Z}} | Angre (utenfor tekstfelt; inne i et tekstfelt angres skrivingen) |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gjør om |

## Kopiering og liming

Disse virker når markøren ikke står i et tekst- eller tallfelt (der kopieres, limes og velges tekst som vanlig). Hver liming, utklipp, duplisering eller sletting er ett angrestegg. Mer: [Kopier, lim inn og dupliser](topic:copy-paste).

| Tast | Gjør |
|---|---|
| {{key:Mod+C}} | {{ui:Kopier}} de valgte medlemmene og fundamentene (med hull, utklinkinger og forbindelser) |
| {{key:Mod+X}} | {{ui:Klipp ut}}: kopier utvalget, og slett det deretter |
| {{key:Mod+V}} | {{ui:Lim inn}}: kopien følger pekeren; klikk et rutenettskjæringspunkt for den |
| {{key:Mod+Shift+V}} | {{ui:Lim inn på samme sted}}: på koordinatene den ble kopiert fra |
| {{key:Mod+D}} | {{ui:Dupliser}}: en kopi med én gang, flyttet med forskyvningen i [DetailCraft-innstillinger](topic:settings) |
| {{key:Mod+A}} | {{ui:Velg alle}}: alle medlemmer, forbindelser og fundamenter |
| {{key:Esc}} | {{ui:Fjern utvalg}} |

Hvis tekst på siden er valgt (i en rapporttabell, for eksempel) og ingenting i modellen, kopierer {{key:Mod+C}} teksten som vanlig.

{{ui:Ny}}, {{ui:Eksempel}} og eksportene har ingen taster; bruk verktøylinjen.

Ingen av disse tastene gjør noe mens en dialogboks (forhåndsvisningen av verkstedtegningen eller et spørsmål) er åpen.

## Felt og paneler

| Tast | Gjør |
|---|---|
| {{key:Enter}} eller {{key:Tab}} | Bruk en skrevet verdi (hver endring er ett angrestegg) |
| {{key:Enter}} i et {{ui:Rutenett}}-, {{ui:Nivåer}}-, {{ui:Egendefinert profil}}-, hull- eller utklinkingsfelt | Det samme som å velge knappen for det skjemaet |
| {{key:Left}} {{key:Right}} | Flytt mellom fanene {{ui:Problemer}}, {{ui:Stykkliste}} og {{ui:Bøyeliste}} når en fane har fokus |
| {{key:Esc}} | Lukk forhåndsvisningen av verkstedtegningen eller en spørredialog (samme som {{ui:Avbryt}}) |

## Skjerm og hjelp

| Tast | Gjør |
|---|---|
| {{key:Ctrl+Shift+F}} | Bytt mellom normal, fullskjerm og fullskjerm med linjene skjult. Ctrl på alle datamaskiner, også Mac |
| {{key:Mod+,}} | Åpne {{ui:Innstillinger}} ([DetailCraft-innstillinger](topic:settings)) |
| {{key:Esc}} | Avslutt fullskjerm |
| {{key:F1}} | Åpne denne hjelpen |

## Mus

| Handling | I 3D | I Plan og Fasade |
|---|---|---|
| Klikk | Velg en del, eller plasser den i nærmeste skjæringspunkt når et plasseringsverktøy er på (eller lim inn der under liming) | Det samme |
| {{key:Shift}}, {{key:Ctrl}} eller {{key:Mod}} og klikk | Legg delen til utvalget, eller ta den ut | Det samme |
| Trykk på en valgt del og dra | Flytt utvalget over etasjen; med {{key:Mod}} holdt inne, opp og ned | Flytt utvalget (i en fasade: langs den, og opp og ned) |
| Dra med venstre knapp | Snu modellen | Med {{ui:Velg}}: et valgvindu (til høyre: helt innenfor; til venstre: berører). Under plassering: panorer |
| {{key:Shift}} og dra med venstre knapp | Med {{ui:Velg}}: et valgvindu, lagt til utvalget. Under plassering: panorer | Med {{ui:Velg}}: et valgvindu, lagt til utvalget |
| {{key:Ctrl}} eller {{key:Mod}} og dra med venstre knapp | Panorer | Ingenting |
| Dra med høyre knapp | Panorer | Panorer |
| Hjul | Zoom mot midten av visningen | Zoom |
| Dra med midtknappen | Zoom | Med {{ui:Velg}}: panorer. Ellers zoom |
| Slipp en `.detailcraft.json`-fil på appen | Åpne den | Åpne den |

Et klikk teller bare hvis pekeren beveger seg mindre enn omtrent 5 piksler mellom trykk og slipp; en lengre bevegelse er et drag.

## Styreplate

| Handling | Gjør |
|---|---|
| To fingre opp eller ned, eller klyp | Zoom |
| Trykk og dra | Snu (3D) eller panorer (Plan og Fasade) |
| {{key:Shift}} og trykk og dra | Panorer i 3D |
| Klikk med to fingre | Høyreklikk (det finnes ingen meny i visningen) |

## Berøring

På et nettbrett eller en berøringsskjerm:

| Handling | Gjør |
|---|---|
| Trykk | Velg en del, eller plasser den i nærmeste rutenettskjæringspunkt når et plasseringsverktøy er på (et trykk innenfor omtrent en fingerbredde teller) |
| Langt trykk på en del | Legg den til utvalget, eller ta den ut (det {{key:Shift}}+klikk gjør med mus) |
| Ett finger på en valgt del, deretter dra | Flytt utvalget, og fest det til rutenettskjæringspunkter |
| Ett finger ellers | Snu modellen (3D) eller panorer (Plan og Fasade) |
| To fingre | Klyp for å zoome, flytt sammen for å panorere |

Knapper, lister og felt er større når skjermen kun er berøringsskjerm. Valgvinduer krever mus; med fingre brukes trykk og langt trykk.

## Taster nettleseren beholder

Noen snarveier tilhører nettleseren, og ingen side kan bruke dem, for eksempel {{key:Mod+W}} (lukk fane), {{key:Mod+T}} (ny fane) og {{key:Mod+N}} (nytt vindu). Hvis {{key:Mod+Y}} åpner nettleserens historikk i stedet for å gjøre om, bruk {{key:Mod+Shift+Z}}.

Snarveier når bare DetailCraft når siden har tastaturet. Hvis en tast ikke gjør noe, eller nettleseren handler på den, klikk først på en tom del av DetailCraft-vinduet (for eksempel etter å ha skrevet i adressefeltet).

## Hvor Flytt er

Det finnes ingen Flytt-kommando: velg en del og dra den over etasjen (hold {{key:Mod}} for å dra opp og ned), eller rediger {{ui:Start}} og {{ui:Slutt}} i {{ui:Egenskaper}}.
