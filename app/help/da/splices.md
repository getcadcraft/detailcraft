---
title: Stød
summary: Saml to stykker af en bjælke- eller søjleende med boltede flange- og livdækplader.
keywords: stød, bjælkestød, søjlestød, dækplade, stødplade, flangeplade, livplade, boltet stød, samling, montageetape, forbind
from: 97d141c2
---

Et boltet stød samler to stykker af samme I-profil ende mod ende: en dækplade uden på hver flange og en plade på hver side af livet, boltet gennem begge stykker. DetailCraft skærer stykkerne tilbage til mellemrummet, placerer de fire plader, borer hullerne i pladerne og i begge stykker, tilføjer boltene og advarer om kantafstande, afstand og pasning.

## Hvor det virker

- To bjælker, eller to søjleafsnit, af **samme I-profil**, der mødes **ende mod ende på linje**: enderne højst 50 mm fra hinanden, stykkerne parallelle og på én linje (inden for 1 mm). Begge stykker kan tegnes i begge retninger.
- Vandrette, skrå og lodrette stykker virker alle.
- To stykker med forskellig højde eller flangebredde afvises, ligesom kanaler, vinkeljern og rør.

## Tilføj stød

1. Tegn de to stykker, så de mødes ende mod ende. Hvis du vil dele et element, der allerede er tegnet, skal du tegne det igen som to stykker.
2. Vælg ét (eller begge) og vælg {{ui:Stød}} i gruppen {{ui:Forbind}} under {{ui:Mere}}.
3. Hver fri samling mellem de valgte stykker og et andet stykke med samme profil får et stød. Statuslinjen viser, hvor mange det er.

Vælg stødet (klik på en af dets plader) for at ændre dets indstillinger i højre panel. {{ui:Anvend på tilsvarende (n)}} kopierer det til alle andre frie samlinger mellem stykker med samme profil.

## Indstillinger (mm)

| Indstilling | Standard | Hvad den gør |
|---|---|---|
| Mellemrum mellem enderne | 10 | Hvert stykke skæres tilbage med halvdelen af det |
| Boltdiameter, hul, stålkvalitet, længdetillæg | 20, 22, A325, 30 | Som for endeplader |
| Flangepladens tykkelse | 12 | Pladen er lige så bred som flangen |
| Boltrækker i flangen (på hver side) | 3 | Rækker på tværs af flangen på hver side af samlingen |
| Boltafstand i flangen | 75 | Langs stykket |
| Boltlinjeafstand i flangen | 0 | Mellem de to boltlinjer; 0 = flangebredde minus 80 |
| Endeafstand i flangen | 40 | Fra stykkets ende til første bolt, og fra sidste bolt til pladens ende |
| Livpladens tykkelse | 8 | Én på hver side af livet |
| Boltrækker i livet | 3 | Op ad livet, centreret |
| Boltkolonner i livet (på hver side) | 2 | Langs stykket på hver side af samlingen |
| Boltafstand i livet, op ad livet / langs stykket | 75, 75 | |
| Endeafstand i livet | 40 | Som for flangerne |
| Livpladens højde | 0 | 0 = det frie liv mellem rundingerne minus 10 i top og bund |
| Plademateriale | A36 | Tekst |

Pladelængderne følger af boltene: flangeplade = mellemrum + 2 × (2 × endeafstand + (rækker − 1) × afstand); livpladerne tilsvarende med deres kolonner. Med standardværdierne er flangepladerne 470 lange.

## Godt at vide

- Pladerne hører til **det først tegnede** af de to stykker (dets egenskaber kalder det det første stykke): de vises på dets samlingstegning og leveres med det, boltet, ikke svejst. Samlingstegningen for det andet stykke viser kun dets huller.
- Flangebolte griber fat i flangen og dens plade; livbolte griber fat i livet og begge livplader. Boltlængderne er angivet særskilt i egenskaberne.
- Advarsler bruger de samme minimumsværdier fra EN 1993-1-8 som de andre forbindelser (ende- og kantafstand 1,2 × hul, afstand 2,2 × hul langs og 2,4 × hul på tværs), samt en livplade dybere end det frie liv og flangebolte for tæt på livet til rundingen.
- DetailCraft dimensionerer ikke stødet (ingen styrkeberegning), og laver ikke udfyldningsplader til stykker med forskellig tykkelse.
- Kopiering af begge stykker kopierer deres stød; sletning af et af stykkerne sletter det.
