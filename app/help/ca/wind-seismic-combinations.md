---
title: Vent, emplaçament sísmic i combinacions ASCE 7
summary: Fes casos de càrrega de vent per a un edifici tancat i rígid, calcula els valors sísmics de projecte per a un emplaçament i fes les combinacions ASCE 7, a la pestanya Anàlisi.
keywords: vent, càrrega de vent, asce 7, procediment direccional, exposició, tancament, sísmic, classe de terreny, ss, s1, sds, sd1, usgs, espectre de projecte, combinacions de càrregues, lrfd, asd, kzt, kd, ràfega
from: 676fcbf3
---

Tres blocs de la pestanya {{ui:Anàlisi}} preparen les entrades de vent i sísmiques d'un pòrtic i les combinen: {{ui:Càrregues de vent (procediment direccional ASCE 7)}}, {{ui:Emplaçament i sistema sísmics (ASCE 7)}} i {{ui:Combinacions de càrregues ASCE 7}}. Són ajudes: **no és una comprovació de codi; el vostre enginyer revisa els resultats.**

## Què hi fareu

Feu casos de càrrega de vent per a un edifici tancat i rígid, preneu els valors sísmics per a un emplaçament, i feu les combinacions que els fan servir. El model necessita forjats, així que executeu primer l'anàlisi (vegeu [Forces, reaccions i fletxes](topic:frame-analysis)).

## Passos

1. Obriu la pestanya {{ui:Anàlisi}} i trieu {{ui:Executa}}, perquè es coneguin els forjats i la mida de l'edifici. Si un bloc diu que no hi ha forjats, trieu {{ui:Cerca forjats}} dins d'ell.
2. A {{ui:Càrregues de vent (procediment direccional ASCE 7)}}, trieu l'{{ui:Edició}}, escriviu la {{ui:Velocitat bàsica del vent V}} del vostre mapa de vent i trieu la seva {{ui:Unitat de velocitat}}, i després l'{{ui:Exposició}} i el {{ui:Tancament}}. Kzt, Kd, G, l'elevació del terreny, el Cp de sotavent, l'excentricitat i la direcció també hi són.
3. Llegiu la pressió a cada forjat i la força a cada forjat a la taula, i després trieu {{ui:Crea els casos de vent}}. Els casos són +X, -X, +Y i -Y.
4. A {{ui:Emplaçament i sistema sísmics (ASCE 7)}}, trieu l'edició i escriviu Ss i S1 (SMS, SM1 i S1 per a l'ASCE 7-22), la classe de terreny de la A a la D, la categoria de risc i el sistema sismoresistent. O escriviu la latitud i la longitud i trieu {{ui:Consulta a l'USGS (en línia)}}; només consulta el servei en línia quan hi premeu.
5. Llegiu Fa, Fv, SDS i SD1, R, Cd i Omega0 i l'espectre de projecte, i després trieu {{ui:Usa al bloc sísmic}}. Premeu {{ui:Fes els casos sísmics}} al bloc sísmic (vegeu [Comprova els elements de formigó i fes les càrregues sísmiques](topic:concrete-and-seismic)).
6. A {{ui:Combinacions de càrregues ASCE 7}}, trieu el {{ui:Mètode}} (LRFD o ASD) i premeu {{ui:Crea les combinacions ASCE 7}}. Torneu a executar l'anàlisi.

## Cal saber

- Vent: només un edifici tancat i rígid, amb el procediment direccional. Un edifici flexible necessita un factor de ràfega de la norma, que DetailCraft no calcula.
- Les classes de terreny E i F necessiten un estudi del terreny i encara no estan implementades.
- Una llista de fonts a la part inferior dels blocs indica d'on surt cada número i què s'ha deixat fora.
- La consulta a l'USGS s'ha provat amb un substitut, no amb el servei en directe.
