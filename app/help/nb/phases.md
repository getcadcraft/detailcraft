---
title: Faser
summary: Del modellen i faser (monteringsrekkefølger eller leveranser), vis eller skjul hver fase, legg deler i en fase, og nummerer delenumre per fase.
keywords: fase, faser, fasepanel, monteringsrekkefølge, leveranse, parti, rekkefølge, skjul fase, vis fase, filter, nummerering, delenummerprefiks, per fase
from: bae506f5
---

En fase er en gruppe deler som lages, leveres eller monteres sammen: en monteringsrekkefølge, en leveranse, et parti. Hver stav og hvert fundament er i én fase. En forbindelse er i fasen til hovedstaven: bjelken for en endeplate, søylen for en fotplate. En ny modell har én fase.

## Faser-panelet

Seksjonen {{ui:Faser}} i panelet {{ui:Modell}} lister hver fase:

- avkrysningsboksen viser eller skjuler fasen i visningen;
- nummeret, og et navn du kan skrive (tomt = "Fase 2" og så videre);
- hvor mange deler som er i den;
- knappen {{ui:×}} fjerner en fase. Bare en tom fase kan fjernes: flytt delene i den over til en annen fase først.

{{ui:Legg til fase}} legger til neste nummer og gjør den til fasen nye deler havner i.

## Legg deler i en fase

- **Nye deler:** {{ui:Nye deler havner i}} velger fasen hver stav og hvert fundament du plasserer fra nå av havner i.
- **Én del:** velg den og endre {{ui:Fase}} i panelet {{ui:Egenskaper}}.
- **Mange deler:** velg dem (et vindu, {{key:Shift}}+klikk, {{key:Mod+A}}) og endre {{ui:Fase}} øverst i panelet {{ui:Egenskaper}}. Det viser **Varierer** når de er i ulike faser. En endring er ett angresteg.

Kopier beholder fasen til delen de ble kopiert fra, også når de limes inn i en annen modell (fasen legges til der).

## Vis og skjul faser

En skjult fase tegnes ikke i visningen, kan ikke klikkes eller fanges av et valgvindu, og {{key:Mod+A}} utelater den. Den er fortsatt i stykklisten, rapportene, tegningene og alle eksporter. Skjuling gjelder bare visningen: den lagres ikke og kan ikke angres.

## Delenumre per fase

Med **Nummerer delenumre per fase** på (den er på fra start) og deler i mer enn én fase, nummereres hver fase for seg, og delenumrene starter med fasenummeret: delenumre 1-b1, 2-b1, monteringsnumre 2-B1, fundamenter 2-F1. To like bjelker i ulike faser får da ulike delenumre, fordi de lages og sendes på ulike tidspunkter. Når bare én fase er i bruk, har delenumrene ingen prefiks. Slå det av for å nummerere hele modellen som én, slik at like deler får samme delenummer uansett fase.

Fasen skrives inn i IFC-eksporten (egenskapssett DetailCraft, Phase).

:::note
Modeller med faser lagres i DetailCraft-filformat 2. Versjon 0.3 av DetailCraft kan ikke åpne dem; denne versjonen åpner eldre filer, med alle deler i fase 1.
:::
