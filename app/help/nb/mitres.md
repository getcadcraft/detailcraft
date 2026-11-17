---
title: Gjæringsskjøter
summary: Kople sammen to I-profilmedlemmer som møtes i en vinkel: begge ender kuttes på planet som halverer vinkelen, med endeplater, bolter og avstivere hvis du vil ha dem.
keywords: gjæring, miter, gjæringsskjøt, kne, knevinkel, portalramme, møne, hjørne, vinkelkutt, skjevkutt, endeplate, boltet endeplate, avstiver, forbind
from: cd8380d4
---

En gjæring kopler sammen to I-profilmedlemmer der endene møtes i en vinkel, for eksempel kneet i en portalramme, et møne, eller to bjelker som svinger et hjørne i plan. DetailCraft kutter begge ender på planet som halverer vinkelen mellom dem, slik at de to kuttflatene passer. Hvis du vil, legges en endeplate til hver kuttende, de to platene boltes sammen, og det settes et par stegavstivere i hvert medlem.

## Hvor den virker

- To **I-profiler** (IPE, HEA, HEB, W og lignende) der **endene møtes i samme node**. Begge medlemmer kan tegnes i hvilken som helst retning.
- Vinkelen mellom medlemmene må være minst 15°. Medlemmer på linje avvises: bruk en [skjøt](topic:splices).
- Den rene kuttet (uten plater) virker uansett hvordan medlemmene møtes. **Endeplater** krever at de to medlemmene møtes i planet til stegene, som i en portalknute eller et møne. To bjelker som svinger et hjørne i plan møtes i planet til flensene, og får derfor bare den rene kuttet.
- Medlemmer av ulik størrelse kan kobles, men med en advarsel: kuttflatene passer ikke.

## Legg til en gjæring

1. Velg de to medlemmene: klikk på ett, deretter {{key:Shift}}+klikk på det andre.
2. Velg {{ui:Gjæring}} i {{ui:Mer}}-menyen i gruppen {{ui:Forbind}}. Gjæringsdialogen åpnes.
3. Sett de nummererte feltene. Tegningen ved siden av lages av tallene mens du skriver, og de nummererte sirklene viser hva hvert felt setter.
4. Velg {{ui:Legg til gjæringen}}. Hvis du valgte mer enn to medlemmer, får hver fri skjøt blant dem den samme gjæringen.

For å endre en gjæring senere, velg den (klikk på en av platene) og velg {{ui:Gjæringsdialog med forhåndsvisning}} i høyre panel, eller endre innstillingene der direkte. En ren kutt har ingen plater å klikke på: velg de to medlemmene og velg {{ui:Gjæring}} igjen, så åpnes dialogen på den gjæringen. {{ui:Bruk på lignende (n)}} kopierer den til hver fri skjøt mellom medlemmer av de samme to profilene i samme vinkel.

## De nummererte feltene (mm)

| Nr. | Innstilling | Standard | Hva den gjør |
|---|---|---|---|
| 1 | Gap mellom platene (eller kuttendene) | 0 | Klaring i skjøten. Hver side får halvparten av den |
| 2 | Endeplater, platetykkelse | på, 20 | En endeplate sveiset rundt hver kuttende. Fjern haken for en ren kutt |
| 3 | Boltrader, radavstand, gange, ytterste rad | 4, 0, 0, av | Avstand 0 fordeler radene jevnt mellom flensene. Gange 0 = halve platebredden, minst 2.4 × hullet. Den ytterste raden går i platens forlengelse forbi ytterflensen |
| 4 | Plate forbi ytterflensen | 0 | Hvor langt platene når forbi ytterflensen, langs kuttet |
| 5 | Plate forbi innerflensen | 0 | Det samme på innsiden |
| 6 | Stegavstivere, avstand forbi kuttet | av, 50 | Et par i hvert medlem, på begge sider av steget, vinkelrett på medlemmet, så langt forbi den fjerne enden av kuttet |
| 7 | Avstiverens tykkelse | 10 | |

Under {{ui:Bolter}}: boltdiameter, hull, kvalitet og lengdetillegg (20, 22, A325, 30), som for endeplater. Under {{ui:Plater og sveiser}}: platebredde (0 = flensbredden), kilsveisstørrelse (8) og platemateriale (A36).

## Hva som lages

- **Kuttene.** Hver ende av et medlem kuttes på sitt plan. Lengden i lister, tegninger og NC-filer er **total lengde**, fra den kvadratiske enden til det lengste punktet i kuttet.
- **Platene** hører til sitt eget medlem: sammenstillingen for hvert medlem er medlemmet, endeplaten og avstiverne. Boltene er byggeplassbolter for skjøten: stykklisten teller dem én gang, og sammenstillingstegningen for hvert medlem lister dem som løse bolter.
- **Tegninger** viser de skråstilte endene og platene; verkstedtegningen for et gjæret medlem noterer vinkelen for hvert kutt fra vinkelrett.
- **NC-filer** (DSTV) har skjevkuttvinklene i hodet, slik standarden krever, og konturer som følger kuttet. Kontroller dem i verkstedets egen NC-viser før kutting, som for alle NC-filer.
- **IFC** klipper hvert medlems ekstrudering med kuttplanet, slik at andre programmer viser det ekte kuttet.
- **Merking:** et gjæret medlem er et annet stykke enn et rettkuttet med samme lengde. To medlemmer med samme kutt deler merke, slik som de to takspærene i et møne gjør.

## Greit å vite

- Gjæringen er levende. Flytt eller endre størrelsen på et av medlemmene, så følger kuttet, platene og boltene med. Slett et av medlemmene, så forsvinner gjæringen, og den andre medlemmets ende er rett igjen.
- Advarsler bruker de samme EN 1993-1-8-minimumene som de andre forbindelsene (ende- og kantavstand 1.2 × hullet, avstand 2.2 × hullet, gange 2.4 × hullet), pluss boltrader som står for tett på en flens, plater smalere enn flensene og avstivere uten plass.
- Verdiene er utgangsverdier, ikke en dimensjonering. DetailCraft kontrollerer ikke forbindelsens styrke, og lager ingen knevinkel, ingen sveiset gjæring med stumpsveis, og ingen avstivere på linje med den andre medlemmets flenser.
