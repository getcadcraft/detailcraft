---
title: Knutepunktsplater for avstivninger
summary: Koble en avstivningsende til en søyle eller bjelke med en knutepunktsplate: vinkeljern og flatjern bolta, rørprofiler med spor og sveiset.
keywords: knutepunktsplate, knutepunktsplater, avstivning, vertikal avstivning, vinkeljernsavstivning, flatjern, bånd, hss-avstivning, knivplate, sporet rør, forbind
from: 22f6598d
---

En knutepunktsplate for avstivning er en plate sveiset i verkstedet til søylen (eller bjelken) avstivningen lander på, i avstivningens plan. DetailCraft kapper avstivningen tilbake slik at den er fri av alt i knutepunktet, plasserer og dimensjonerer knutepunktsplaten, og kobler avstivningen til den: et **vinkeljern** eller et **flatjern** med én rad bolter, eller et **rør** (firkantet, rektangulært eller rundt HSS) som settes over knutepunktsplaten og sveises.

## Hvor det fungerer

- Avstivningens ende ligger på linjen til en søyle eller bjelke (innen 1 mm), og avstivningen er ikke nesten parallell med den linjen. En søyle er opplegget der det finnes en; ellers bjelken.
- Knutepunktsplaten ligger i avstivningens plan og opplagets linje. Et **vinkeljern** må ha ett ben i planet, og et **flatjern** sin flate: snu avstivningen ({{ui:Rotasjon (°)}}) til det stemmer. Med vinkelbena i 45° mot planet sier DetailCraft fra og bygger ingenting.
- I-profiler og U-profiler som avstivninger kobles ikke.

## Legg til knutepunktsplater

1. Velg én eller flere avstivninger.
2. Velg {{ui:Knutepunktsplate}} i menyen {{ui:Mer}} i gruppen {{ui:Forbind}}.
3. Hver ende av de valgte avstivningene som lander på en søyle eller bjelke og ikke har en knutepunktsplate, får en.

Velg en knutepunktsplate (klikk på platen) for å endre innstillingene. {{ui:Bruk på lignende (n)}} kopierer den til hver ledige avstivningsende med samme avstivnings- og opplagsprofil.

## Hva DetailCraft finner ut

- **Kapp tilbake.** Avstivningen kortes i den enden til hjørnene er fri, med {{ui:Avstivningsklaring}} (25), hvert element i knutepunktet (ved siden av, eller forbi enden når elementet ender der) og en fotplate under søylen.
- **Bolter (vinkeljern, flatjern).** {{ui:Bolter}} (3) i én rad langs avstivningen, den første {{ui:Boltendeavstand}} (40) fra kuttenden, med {{ui:Boltavstand}} (75). På et vinkeljern går de gjennom benet i knutepunktsplatens plan, {{ui:Boltrissmål}} fra hælen (0 = midt på benet); på et flatjern på midtlinjen (eller forskjøvet fra den med rissmålet). Boltgrep = benet eller flatjernet + knutepunktsplaten.
- **Knutepunktsplaten.** Et rektangel: fra opplagets flate og ut forbi siste bolt med endeavstanden, og langs opplaget så langt boltene krever. Den ligger mot baksiden av vinkeljernsbenet (eller flatjernets flate). For et rør går den gjennom rørets midte, under {{ui:Rørtilknytning på knutepunktsplaten}} (200) av røret, med plass til sveisene.
- **Knutepunkter.** Ved søylefoten føres knutepunktsplaten ned til fotplaten. Der en bjelke krysser knutepunktet (en avstivning opp til et bjelke–søyle-hjørne), blir knutepunktsplaten under eller over bjelken. Hvis det tar fra boltene eller tilknytningen endeavstanden, advarer DetailCraft.
- **Sveiser.** Knutepunktsplaten til opplaget, på begge sider. Et rør til knutepunktsplaten, med fire linjer langs tilknytningen.

## Godt å vite

- Knutepunktsplaten hører til opplagets sammenstilling (sveiset i verkstedet). Avstivningen leveres med hullene boret og går til sin egen NC-fil.
- Sporet i et rør er ikke kuttet i modellen; [kollisjonskontrollen](topic:clash-check) lar avstivningen og knutepunktsplaten være.
- Knutepunktsplaten sveises ikke til en bjelke den berører. Hjørneknutepunktsplater sveiset til både bjelke og søyle, avfasede hjørner og arbeidspunktoppsettet i en Uniform Force Method-forbindelse er ikke laget ennå.
- DetailCraft dimensjonerer ikke knutepunktsplaten eller boltene (ingen styrkekontroller); advarslene gjelder avstand og passform.
