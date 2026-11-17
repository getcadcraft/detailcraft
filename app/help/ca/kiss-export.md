---
title: Exporta un fitxer KISS per a programari de fabricació
summary: Envieu la llista de materials a un programa de gestió de la fabricació (MIS) com a fitxer KISS 1.1: conjunts, peces, fases com a seqüències, forats, osques i soldadures.
keywords: kiss, kss, mis, gestió de fabricació, control de producció, pressupostos, llista de materials, ldm, exporta, fabtrol, seqüència
from: 30cf3951
---

A la {{ui:Sortida}}, obriu {{ui:Més}} i trieu {{ui:Fitxer KISS per a programari de fabricació}}. DetailCraft baixa `<name>.kss`, un fitxer KISS ("Keep It Simple, Steel", versió 1.1), el format de text pla des del qual la majoria de programes de gestió de la fabricació importen una llista de materials.

## Què conté

- La capçalera: un número de feina (les primeres vuit lletres i xifres del nom del model), el nom del model, la data i l'hora, i si les mides són mètriques.
- Per a cada marca de conjunt: la seva peça principal (quantitat = quants conjunts n'hi ha), una línia de plànol (A-B1 i així successivament, el número del plànol de conjunt), una línia de conjunt (nom, tipus, pes, longitud total, fondària i amplada), una línia de seqüència per cada [fase](topic:phases) on és el conjunt, i línies de mà d'obra: forats (quants, diàmetre, gruix travessat), osques i soldadures.
- Després, cada peça adjunta, amb la quantitat **total** (per conjunt × conjunts), tal com demana l'estàndard.
- Els cargols solts i les barres d'ancoratge al plànol BOLTS, conjunt FIELD.
- Cada línia indica el tipus (W, C, L, HSS, PL, o MI per a un perfil personalitzat), la mida, la qualitat, la longitud de tall en mil·límetres, el nom de la peça i el pes.

## Imperial o mètric

A la [configuració de DetailCraft](topic:settings), **Mides del fitxer KISS** tria:

- **Automàtic** (per defecte): imperial quan totes les barres són perfils AISC, mètric en cas contrari.
- **Imperial**: perfils per la seva designació AISC (W 16X26, HSS 4X4X.250); plaques i cargols, que DetailCraft manté en mil·límetres, a l'1/16 de polzada més proper; pesos en lliures.
- **Mètric**: perfils europeus pel seu nom (IPE300), plaques com a gruix × amplada en mil·límetres; pesos en quilograms.

Les longituds són sempre en mil·límetres amb dos decimals, sigui quina sigui la configuració: l'estàndard KISS ho demana i el programa receptor les converteix.

:::note
Les qualitats es retallen als vuit caràcters de l'estàndard: A572 Gr 50 esdevé A572-50. Les comes dels noms es converteixen en espais (el format no admet cometes). Comproveu una importació al vostre programa abans de confiar-hi: els fitxers KISS de DetailCraft s'han comprovat aquí contra l'estàndard, però encara no en un programa de fabricació.
:::
