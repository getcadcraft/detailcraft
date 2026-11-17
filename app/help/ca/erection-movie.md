---
title: Pla de muntatge i vídeo
summary: Introduïu una grua i el seu gràfic de càrrega, vegeu cada elevació comprovada amb el gràfic en ordre de fases, i deseu un vídeo de muntatge que es reprodueix sense connexió en qualsevol telèfon.
keywords: muntatge, grua, elevació, gràfic de càrrega, radi, capacitat, aparellatge, seqüència, vídeo, animació, telèfon, sense connexió, pla d'elevació
from: fa7b0133
---

La pestanya {{ui:Erection}} converteix el model en una ordre de muntatge i comprova cada elevació amb una grua que descriviu. Es planifica a partir de números que escriviu. No és un pla d'elevació: això ho fan l'encarregat d'aparellatge i l'operador de la grua.

## Descriviu la grua

Trieu {{ui:Add a crane}}, i després ompliu:

- **Centre X i Y de la grua:** on és situada la grua, en mil·límetres.
- **Ganxo més alt:** l'alçada màxima a què pot pujar el ganxo, en mil·límetres. 0 vol dir que no es comprova cap límit.
- **Bloc de ganxo i aparellatge no inclosos al gràfic:** quilograms que es resten del gràfic abans d'afegir una càrrega, quan el vostre gràfic no ho fa ja.
- **Gràfic de càrrega:** una fila per línia, amb el radi en metres i després la capacitat en quilograms. Copieu les files del gràfic propi de la grua.

El gràfic es llegeix com es llegeix un gràfic de càrrega: la capacitat indicada per a un radi es manté fins a aquest radi. Una càrrega a un radi entre dues files rep la capacitat de la fila **més llunyana**, mai un valor intermedi. Dins de la primera fila es manté la capacitat de la primera fila. Més enllà de l'última fila la grua no pot aixecar res. El radi que compta per a una elevació és el més gran entre el radi de recollida i el radi de dipòsit.

Una segona grua s'afegeix de la mateixa manera. Cada elevació va a la primera grua que la pot assumir dins del vostre marge.

## Què fa el pla

- Una elevació per conjunt: una biga amb les seves plaques d'extrem, un pilar amb la seva placa de base, una escala.
- L'ordre segueix primer les fases, i després nivell a nivell: pilars, les bigues que sostenen, riostres, plaques, escales. Una peça no s'eleva mai abans del que la sosté.
- Cada elevació mostra el seu pes (el pes brut del model, més {{ui:Rigging added to each weight}}), el seu radi, la part del gràfic que utilitza i el minut en què comença.
- {{ui:Most of the chart a lift may use}} és el vostre marge de seguretat. Una elevació per sobre d'aquest marge es marca **Per sobre del marge**; per sobre del gràfic, **Per sobre del gràfic**; més enllà del radi final del gràfic, **Més enllà del gràfic**; i una peça més alta que el ganxo, **Ganxo massa baix**.

Els forats i els retalls no es resten dels pesos, i els cargols queden coberts pel percentatge d'aparellatge.

## Problemes

Cada elevació que està per sobre, més enllà, massa alta o programada abans del que la sosté apareix al tauler {{ui:Problems}}. Una biga sense cap connexió que la sostingui es llista com a que necessita suport provisional.

## Deseu el vídeo

{{ui:Save movie}} escriu un fitxer HTML. Obriu-lo en qualsevol navegador, també en un telèfon, sense xarxa ni compte: reprodueix i pausa, arrossegueu la barra a qualsevol minut, gireu el model amb el dit i pinceu per fer zoom. El rètol indica cada elevació, el seu pes, el radi i la part del gràfic. El model es dibuixa com a caixes simples: mostra l'ordre i les elevacions, no els perfils reals.

La mateixa taula es desa com a CSV amb el botó {{ui:CSV}}. La grua i el gràfic es desen al fitxer del model, i cada canvi és un pas per desfer.
