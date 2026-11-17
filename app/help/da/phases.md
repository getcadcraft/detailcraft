---
title: Faser
summary: Del modellen op i faser (monteringsrækkefølger eller leverancer), vis eller skjul hver fase, placér dele i en fase, og nummerér positionsnumre pr. fase.
keywords: fase, faser, fasehåndtering, monteringsrækkefølge, levering, parti, rækkefølge, skjul fase, vis fase, filter, nummerering, præfiks, pr. fase
from: bae506f5
---

En fase er en gruppe dele, der fremstilles, leveres eller monteres samlet: en monteringsrækkefølge, en levering, et parti. Hver stålprofil og hvert fundament er i én fase. En forbindelse er i fasen for sin hovedprofil: bjælken for en endeplade, søjlen for en fodplade. En ny model har én fase.

## Faspanelet

Afsnittet {{ui:Faser}} i panelet {{ui:Model}} viser alle faser:

- afkrydsningsfeltet viser eller skjuler fasen i visningen;
- nummeret og et navn, du kan skrive (tomt = "Fase 2" og så videre);
- hvor mange dele der er i den;
- knappen {{ui:×}} fjerner en fase. Kun en tom fase kan fjernes: flyt dens dele til en anden fase først.

{{ui:Tilføj fase}} tilføjer næste nummer og gør det til den fase, nye dele kommer i.

## Placér dele i en fase

- **Nye dele:** {{ui:Nye dele kommer i}} vælger den fase, som alle stålprofiler og fundamenter, du placerer fra nu af, kommer i.
- **Én del:** vælg den, og ændr {{ui:Fase}} i panelet {{ui:Egenskaber}}.
- **Mange dele:** vælg dem (et vindue, {{key:Shift}}+klik, {{key:Mod+A}}), og ændr {{ui:Fase}} øverst i panelet {{ui:Egenskaber}}. Der vises **Varierer**, når de er i forskellige faser. Én ændring er ét trin i fortryd.

Kopier beholder fasen fra den del, de blev kopieret fra, også når de indsættes i en anden model (fasen tilføjes der).

## Vis og skjul faser

En skjult fase tegnes ikke i visningen, kan ikke klikkes på og fanges ikke af et valgvindue, og {{key:Mod+A}} lader den ligge. Den er stadig med i stykliste, rapporter, tegninger og alle eksporter. Skjul gælder kun visningen: det gemmes ikke og kan ikke fortrydes.

## Positionsnumre pr. fase

Med **Nummerér positionsnumre pr. fase** slået til (den er slået til fra start) og dele i mere end én fase, nummereres hver fase for sig, og dens numre starter med fasenummeret: positionsnumre 1-b1, 2-b1, samlingsnumre 2-B1, fundamenter 2-F1. To ens bjælker i forskellige faser får så forskellige numre, fordi de fremstilles og sendes på forskellige tidspunkter. Når kun én fase er i brug, har numrene intet præfiks. Slå det fra for at nummerere hele modellen som én, så ens stykker deler et nummer uanset fase.

Fasen skrives ind i IFC-eksporten (egenskabssæt DetailCraft, Phase).

:::note
Modeller med faser gemmes i DetailCraft's filformat 2. Udgivelse 0.3 af DetailCraft kan ikke åbne dem; denne version åbner ældre filer, med alle dele i fase 1.
:::
