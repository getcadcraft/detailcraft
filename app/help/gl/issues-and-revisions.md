---
title: Emisións, revisións e rexistro de cambios do debuxo
summary: Manteña un só historial de emisións co modelo do arquitecto: le as emisións, rexistre as instrucións de obra, os planos de taller e os modelos vinculados contra unha emisión, e le o rexistro de cambios do debuxo.
keywords: emisión, revisión, revisións, rexistro de cambios, rexistro de cambios do debuxo, rexistro de debuxos, instrución de obra, plano de taller, modelo vinculado, licitación, construción, historial de emisións, planos de taller, fabricación
from: 4b9a1b7b
---

## Que vai facer

Traballe co mesmo historial de emisións que o resto do equipo. Vexa que follas saíron en cada revisión, e rexistre o que pasa en obra contra a emisión á que pertence.

## Pasos

1. Abrir **Emisións e revisións**.
2. Escoller **Ler un historial de emisións** e elixir o ficheiro `.issues.json` gardado desde BimCraft ou outra aplicación. As súas emisións e rexistros engádense aos seus. Non se substitúe nada.
3. Escoller **Engadir un rexistro** para unha instrución de obra, un plano de taller, un conxunto de anotacións, un modelo vinculado ou unha nota. Elixir a emisión á que pertence e o seu estado. Rexístrase un ficheiro escollido polo seu nome, tamaño e SHA-256; o ficheiro queda onde está.
4. **Rexistro de cambios do debuxo** mostra unha fila por cada folla e unha columna por cada emisión. Unha revisión entre corchetes foi emitida de novo sen cambios.
5. **Descargar o rexistro de cambios (CSV)** garda as emisións, a táboa de follas e os rexistros. **Gardar o historial de emisións** escribe un ficheiro que leen as outras aplicacións.

## Convén saber

- As follas seguen emitíndose desde Debuxos, folla por folla. Esas emisións aparecen aquí: as follas emitidas nunha data cunha nota forman unha soa emisión.
- Os rexistros e as emisións que le gárdanse no ficheiro do modelo. Cada cambio é un paso de Desfacer.
- Ler o mesmo ficheiro dúas veces non engade nada por duplicado. Cando dúas copias teñen o mesmo rexistro, consérvase a máis nova.
