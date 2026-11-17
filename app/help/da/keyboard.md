---
title: Taster og museaktioner
summary: Alle tastaturgenveje samt mus-, trackpad- og touchaktioner i DetailCraft, direkte fra koden.
keywords: tastatur, genveje, hurtigtaster, taster, mus, trackpad, touch, ctrl, command, snydeark
from: 05a2dea0
---

Sådan skrives taster i denne hjælp: [Taster, mus og trackpads](common:keys). På en Mac er {{key:Mod}} Command-tasten; ellers er det Ctrl.

## Værktøjer

Disse virker, når markøren ikke står i et tekst- eller talfelt.

| Tast | Gør |
|---|---|
| {{key:V}} | {{ui:Vælg}} |
| {{key:B}} | {{ui:Bjælke}} |
| {{key:C}} | {{ui:Søjle}} |
| {{key:R}} | {{ui:Afstivning}} |
| {{key:P}} | {{ui:Plade}} |
| {{key:F}} | {{ui:Punktfundament}} |
| {{key:S}} | {{ui:Trappe}} |
| {{key:M}} | Flyt markeringen ved at vælge to gitterskæringer ([Vælg med vindue, flyt, roter, spejl, ændr mange](topic:select-and-change)) |
| {{key:Esc}} | Slip et markeringsvindue der trækkes, eller læg trukne dele tilbage; annullér en flytning, det første punkt på en bjælke, afstivning eller plade, eller en indsætning; tryk igen for at gå tilbage til {{ui:Vælg}}; i {{ui:Vælg}} ryddes markeringen. Med menuen {{ui:Mere}} åben lukkes den |
| {{key:Delete}} eller {{key:Backspace}} | Slet markeringen (alt det valgte, i ét fortryd-trin) |

## Fil og redigering

| Tast | Gør |
|---|---|
| {{key:Mod+S}} | Gem modellen (download). Virker også mens du skriver i et felt |
| {{key:Mod+O}} | Åbn en model. Virker også mens du skriver i et felt |
| {{key:Mod+Z}} | Fortryd (uden for tekstfelter; inde i et felt fortrydes din skrivning) |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gentag |

## Kopiér og sæt ind

Disse virker, når markøren ikke står i et tekst- eller talfelt (der kopierer, sætter ind og markerer du din tekst som normalt). Hver indsætning, udklipning, duplikering eller sletning er ét fortryd-trin. Mere: [Kopiér, sæt ind og duplikér](topic:copy-paste).

| Tast | Gør |
|---|---|
| {{key:Mod+C}} | {{ui:Kopiér}} de valgte bjælker og fundamenter (med deres huller, udskæringer og forbindelser) |
| {{key:Mod+X}} | {{ui:Klip}}: kopiér markeringen, og slet den derefter |
| {{key:Mod+V}} | {{ui:Sæt ind}}: kopien følger markøren; klik på et gitterskæringspunkt for at placere den |
| {{key:Mod+Shift+V}} | {{ui:Sæt ind på samme sted}}: ved de koordinater den blev kopieret fra |
| {{key:Mod+D}} | {{ui:Duplikér}}: en kopi med det samme, flyttet med forskydningen i [DetailCraft-indstillinger](topic:settings) |
| {{key:Mod+A}} | {{ui:Vælg alle}}: alle bjælker, forbindelser og fundamenter |
| {{key:Esc}} | {{ui:Fravælg alle}} |

Hvis du har markeret tekst på siden (fx i en rapporttabel) og intet i modellen, kopierer {{key:Mod+C}} teksten som normalt.

{{ui:Ny}}, {{ui:Eksempel}} og eksporterne har ingen taster; brug værktøjslinjen.

Ingen af disse taster gør noget, mens en dialogboks (forhåndsvisningen af værkstedstegningen eller et spørgsmål) er åben.

## Felter og paneler

| Tast | Gør |
|---|---|
| {{key:Enter}} eller {{key:Tab}} | Anvend en indtastet værdi (hver ændring er ét fortryd-trin) |
| {{key:Enter}} i et felt for {{ui:Gitre}}, {{ui:Niveauer}}, {{ui:Egen profil}}, hul eller udskæring | Det samme som at vælge den formulars knap |
| {{key:Left}} {{key:Right}} | Flyt mellem fanerne {{ui:Problemer}}, {{ui:Stykliste}} og {{ui:Bukkeliste}}, når en fane har fokus |
| {{key:Esc}} | Luk forhåndsvisningen af værkstedstegningen eller en spørgsmålsdialog (det samme som {{ui:Annuller}}) |

## Skærm og hjælp

| Tast | Gør |
|---|---|
| {{key:Ctrl+Shift+F}} | Skift mellem normal, fuld skærm og fuld skærm med værktøjslinjerne skjult. Control på alle computere, også en Mac |
| {{key:Mod+,}} | Åbn {{ui:Indstillinger}} ([DetailCraft-indstillinger](topic:settings)) |
| {{key:Esc}} | Forlad fuld skærm |
| {{key:F1}} | Åbn denne hjælp |

## Mus

| Handling | I 3D | I Plan og Facade |
|---|---|---|
| Klik | Vælg en del, eller placer ved det nærmeste skæringspunkt når et placeringsværktøj er tændt (eller sæt ind der, mens du indsætter) | Det samme |
| {{key:Shift}}, {{key:Ctrl}} eller {{key:Mod}} og klik | Føj delen til markeringen, eller fjern den | Det samme |
| Tryk på en valgt del og træk | Flyt markeringen på tværs af niveauet; med {{key:Mod}} holdt nede, op og ned | Flyt markeringen (i en facade: langs den og op og ned) |
| Træk med venstre knap | Drej modellen | Med {{ui:Vælg}}: et markeringsvindue (til højre: helt inde i; til venstre: rører). Ved placering: panorér |
| {{key:Shift}} og træk med venstre knap | Med {{ui:Vælg}}: et markeringsvindue, føjet til markeringen. Ved placering: panorér | Med {{ui:Vælg}}: et markeringsvindue, føjet til markeringen |
| {{key:Ctrl}} eller {{key:Mod}} og træk med venstre knap | Panorér | Intet |
| Træk med højre knap | Panorér | Panorér |
| Hjul | Zoom mod midten af visningen | Zoom |
| Træk med midterknappen | Zoom | Med {{ui:Vælg}}: panorér. Ellers zoom |
| Slip en `.detailcraft.json`-fil på appen | Åbn den | Åbn den |

Et klik tæller kun, hvis markøren bevæger sig mindre end ca. 5 pixels mellem tryk og slip; en længere bevægelse er et træk.

## Trackpad

| Handling | Gør |
|---|---|
| To fingre swipe op eller ned, eller knib | Zoom |
| Tryk og træk | Drej (3D) eller panorér (Plan og Facade) |
| {{key:Shift}} og tryk og træk | Panorér i 3D |
| Klik med to fingre | Højreklik (der er ingen menu i visningen) |

## Touch

På en tablet eller en touchskærm:

| Handling | Gør |
|---|---|
| Tryk | Vælg en del, eller placer ved det nærmeste gitterskæringspunkt når et placeringsværktøj er tændt (et tryk inden for ca. en fingerbredde af det tæller) |
| Langt tryk på en del | Føj den til markeringen, eller fjern den (det {{key:Shift}}+klik gør med mus) |
| Én finger på en valgt del, og træk | Flyt markeringen, og fang på gitterskæringspunkter |
| Én finger et andet sted | Drej modellen (3D) eller panorér (Plan og Facade) |
| To fingre | Knib for at zoome, flyt sammen for at panorere |

Knapper, lister og felter er større, når skærmen kun er til touch. Markeringsvinduer kræver en mus; med fingre bruger du tryk og langt tryk.

## Taster som browseren beholder

Nogle genveje hører til browseren, og ingen side kan bruge dem, fx {{key:Mod+W}} (luk fane), {{key:Mod+T}} (ny fane) og {{key:Mod+N}} (nyt vindue). Hvis {{key:Mod+Y}} åbner din browsers historik i stedet for at gentage, brug {{key:Mod+Shift+Z}}.

Genveje når kun DetailCraft, når siden har tastaturet. Hvis en tast ikke gør noget, eller browseren reagerer på den i stedet, skal du først klikke på en tom del af DetailCraft-vinduet (fx efter at have skrevet i adresselinjen).

## Hvor Flyt findes

Der er ingen Flyt-kommando: vælg en del, og træk den på tværs af niveauet (hold {{key:Mod}} nede for at trække op og ned), eller rediger dens {{ui:Start}} og {{ui:Slut}} i {{ui:Egenskaber}}.
