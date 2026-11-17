---
title: Fases
summary: Dividir el model en fases (seqüències de muntatge o lliuraments), mostrar o amagar cada fase, posar peces en una fase i numerar les marques per fase.
keywords: fase, fases, gestor de fases, seqüència de muntatge, lliurament, lot, seqüència, amagar fase, mostrar fase, filtre, numeració, prefix de marca, per fase
from: bae506f5
---

Una fase és un grup de peces que es fabriquen, es lliuren o es munten juntes: una seqüència de muntatge, un lliurament, un lot. Cada barra i cada sabata és en una fase. Una connexió és a la fase de la seva barra principal: la biga d'una placa d'extrem, el pilar d'una placa de base. Un model nou té una fase.

## El tauler Fases

La secció {{ui:Fases}} del tauler {{ui:Model}} enumera totes les fases:

- la casella mostra o amaga la fase a la vista;
- el número, i un nom que podeu escriure (buit = "Fase 2" i així successivament);
- quantes peces hi ha;
- el botó {{ui:×}} elimina una fase. Només es pot treure una fase buida: abans, poseu-ne les peces en una altra fase.

{{ui:Afegeix fase}} afegeix el número següent i la fa la fase on van les peces noves.

## Posar peces en una fase

- **Peces noves:** {{ui:Les peces noves van a}} tria la fase on van totes les barres i sabates que col·loqueu a partir d'ara.
- **Una peça:** seleccioneu-la i canvieu {{ui:Fase}} al tauler {{ui:Propietats}}.
- **Diverses peces:** seleccioneu-les (una finestra, {{key:Shift}}+clic, {{key:Mod+A}}) i canvieu {{ui:Fase}} a la part superior del tauler {{ui:Propietats}}. Mostra **Varia** quan són en fases diferents. Un canvi és un sol pas de desfer.

Les còpies conserven la fase de la peça de la qual s'han copiat, també quan s'enganxen en un altre model (la fase s'hi afegeix).

## Mostrar i amagar fases

Una fase amagada no es dibuixa a la vista, no es pot fer clic a sobre ni la captura una finestra de selecció, i {{key:Mod+A}} la deixa fora. Continua a la llista de materials, als informes, als plànols i a totes les exportacions. Amagar només afecta la vista: no es desa i no té desfer.

## Marques per fase

Amb **Numera les marques per fase** activat (comença activada) i peces en més d'una fase, cada fase es numera per separat i les seves marques comencen pel número de fase: marques de peça 1-b1, 2-b1, marques de muntatge 2-B1, sabates 2-F1. Dues bigues idèntiques en fases diferents tenen llavors marques diferents, perquè es fabriquen i s'envien en moments diferents. Amb una sola fase en ús, les marques no tenen prefix. Desactiveu-ho per numerar tot el model com un de sol, de manera que les peces idèntiques comparteixin marca independentment de la seva fase.

La fase s'escriu a l'exportació IFC (conjunt de propietats DetailCraft, Fase).

:::note
Els models amb fases es desen en el format de fitxer 2 de DetailCraft. La versió 0.3 de DetailCraft no els pot obrir; aquesta sí que obre fitxers més antics, amb totes les peces a la fase 1.
:::
