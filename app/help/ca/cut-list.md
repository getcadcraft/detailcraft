---
title: Llista de talls
summary: Imbriqueu les bigues, pilars, riostres i llarguers d'escala en longituds de magatzem, tenint en compte l'amplada de tall de la serra, i vegeu quantes barres cal comprar i quina és la pèrdua.
keywords: llista de talls, imbricació, longitud de magatzem, barra, amplada de tall, serra, recort, retall, sobrant, pèrdua, combinació, compra, múltiple
from: 81d06ce5
---

La pestanya {{ui:Cut list}}, sota la vista, calcula com tallar les peces lineals del model a partir de barres de magatzem: quantes barres de cada longitud cal comprar per a cada perfil i material, què va en cada barra, i la pèrdua.

## Configura el magatzem

A la part superior de la pestanya:

- **Longituds de magatzem (mm):** les longituds que podeu comprar, separades per espais, per exemple `6000 12000`, o barres de 20 ft i 40 ft com a `6096 12192`. Fins a vuit.
- **Amplada de tall (mm):** el que ocupa cada tall (3 per començar).
- **Recort de l'extrem (mm):** talla l'extrem de cada barra abans de la primera peça (0 per començar).
- **Guarda els retalls a partir de (mm):** un retall d'almenys aquesta longitud torna al magatzem; si és més curt, és rebuig (500 per començar).

Es guarden en aquest navegador, igual que la resta de [Configuració](topic:settings).

## Com s'imbriquen

- Cada biga, pilar, riostra i llarguer d'escala, per marca de peça i recompte; les plaques es tallen de xapa i no s'imbriquen aquí.
- Cada perfil i material per separat.
- Primer les peces més llargues, cadascuna a la primera barra on càpiga; una barra nova comença amb la longitud de magatzem més gran. Després, cada barra es compra com la longitud de magatzem més curta que encara admet els seus talls.
- Cada tall ocupa l'amplada de tall (cap després d'un tall que acaba exactament al final de la barra); cada barra perd el recort de l'extrem.
- Una peça més llarga que qualsevol longitud de magatzem s'enumera sota **Més llarga que qualsevol magatzem**, sense imbricar-la: empalmeu-la (vegeu [Empalmaments](topic:splices)) o afegiu una longitud de magatzem més gran.

## Llegiu-ho

- **Resum:** per perfil i material, les peces, les barres a comprar (per exemple, "2 × 12000, 1 × 6000"), els metres comprats i utilitzats, i la pèrdua.
- **Barres i els seus talls:** cada barra, la seva longitud de magatzem, els seus talls com a marca de peça i longitud, i el retall: conservat o rebuig.

{{ui:Download CSV}} desa les dues taules com a `<name> cut list.csv`.

DetailCraft no imbrica plaques en fulls i no barreja perfils ni materials en una mateixa barra.
