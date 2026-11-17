---
title: Samleplader til afstivninger
summary: Forbind enden af en afstivning til en søjle eller bjælke med en samleplade: vinkel- og fladjern boltet, rør slidset og svejst.
keywords: samleplade, afstivning, lodret afstivning, vinkelafstivning, fladjern, bånd, rørafstivning, knivplade, slidset rør, forbind
from: 22f6598d
---

En samleplade til afstivning er en plade, der i værkstedet svejses til søjlen (eller bjælken), som afstivningen lander på, i afstivningens plan. DetailCraft skærer afstivningen tilbage, så den er fri af alt i samlingen, placerer og dimensionerer samlepladen og forbinder afstivningen med den: en **vinkel** eller et **fladjern** med én boltrække, eller et **rør** (kvadratisk, rektangulært eller rundt HSS) slidset over samlepladen og svejst.

## Hvor den virker

- Afstivningens ende ligger på linjen af en søjle eller en bjælke (inden for 1 mm), og afstivningen er ikke næsten parallel med linjen. En søjle er understøtningen, hvor der er en; ellers bjælken.
- Samlepladen ligger i afstivningens plan og understøtningens linje. En **vinkel** skal have det ene ben i planet, og et **fladjern** sin flade: drej afstivningen (dens {{ui:Rotation (°)}}), indtil det er tilfældet. Med vinkelbenene i 45° til planet siger DetailCraft det og bygger intet.
- I-profiler og U-profiler som afstivninger forbindes ikke.

## Tilføj samleplader

1. Vælg en eller flere afstivninger.
2. Vælg {{ui:Samleplade}} i menuen {{ui:Mere}} i gruppen {{ui:Forbind}}.
3. Hver ende af de valgte afstivninger, der lander på en søjle eller bjælke og ikke har en samleplade, får en.

Vælg en samleplade (klik på pladen) for at ændre dens indstillinger. {{ui:Anvend på lignende (n)}} kopierer den til hver fri afstivningsende med samme afstivnings- og understøtningsprofil.

## Hvad DetailCraft udregner

- **Skåret tilbage.** Afstivningen forkortes i den ende, indtil dens hjørner er fri, med {{ui:Frigang til afstivning}} (25), af hvert element i samlingen (ved siden af, eller forbi dets ende når elementet slutter der) og en fodplade under søjlen.
- **Bolte (vinkler, fladjern).** {{ui:Bolte}} (3) i en række langs afstivningen, den første {{ui:Boltendeafstand}} (40) fra den afskårne ende, med {{ui:Boltafstand}} (75). På en vinkel går de gennem benet i samlepladens plan, {{ui:Skruemål}} fra hælen (0 = midt på benet); på et fladjern på dets midterlinje (eller forskudt fra den med skruemålet). Boltgreb = benet eller fladjernet + samlepladen.
- **Samlepladen.** Et rektangel: fra understøtningens flade ud forbi den sidste bolt med endeafstanden, og langs understøtningen så langt boltene kræver. Den ligger mod bagsiden af vinkelbenet (eller fladjernets flade). For et rør løber den midt gennem røret, under {{ui:Rørets overlap på knudepladen}} (200) af røret, med plads til svejsningerne.
- **Samlinger.** Ved en søjlefod føres samlepladen ned på fodpladen. Hvor en bjælke krydser samlingen (en afstivning op i et bjælke-søjle-hjørne), bliver samlepladen under eller over bjælken. Hvis det efterlader boltene eller overlappet uden deres endeafstand, advarer DetailCraft.
- **Svejsninger.** Samlepladen til dens understøtning, på begge sider. Et rør til samlepladen, fire linjer langs overlappet.

## Godt at vide

- Samlepladen hører til understøtningens samling (svejst i værkstedet). Afstivningen leveres med sine huller boret og går til sin egen NC-fil.
- Et rørs slids skæres ikke i modellen; [kollisionstjekket](topic:clash-check) lader afstivningen og dens samleplade være i fred.
- Samlepladen svejses ikke til en bjælke, den rører, og hjørnesamleplader svejst til både bjælke og søjle, afrundede hjørner og arbejdspunktets layout for en Uniform Force Method-forbindelse er endnu ikke lavet.
- DetailCraft dimensionerer ikke samlepladen eller boltene (ingen styrkekontrol); advarslerne handler om afstande og pasform.
