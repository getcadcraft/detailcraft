---
title: Llengüetes de cisallament
summary: Cargolar l'ànima d'una biga a una placa soldada al taller a l'ala o a l'ànima d'un pilar, també quan la biga arriba al pilar en angle en planta o en pendent.
keywords: llengüeta de cisallament, placa simple, placa d'aleta, connexió simple, connexió d'ànima, esbiaixada, esbiaix, en pendent, inclinada, biga en angle, cargolada, connectar
from: 18afc8ab
---

Una llengüeta de cisallament (placa simple, placa d'aleta) és una placa soldada al pilar al taller; a l'obra, l'ànima de la biga es cargola a ella amb una fila vertical de cargols. DetailCraft col·loca la llengüeta, retalla la biga perquè quedi lliure del pilar, fa els forats a la llengüeta i a l'ànima de la biga, afegeix els cargols i la soldadura, i avisa de les distàncies a la vora i de l'encaix.

## On funciona

- Una biga (perfil en I o en U) l'extrem de la qual és a la línia d'un pilar **vertical** en I, i arriba a la seva **ala** o a la seva **ànima**.
- **Quadrada, esbiaixada en planta o en pendent**: la llengüeta segueix l'ànima de la biga, i la biga es retalla de manera que el seu cantó més proper manté la separació amb el pilar. Una biga que puja o baixa a més de 60° es rebutja.

## Afegir llengüetes de cisallament

1. Seleccioneu la biga.
2. Al grup {{ui:Connecta}}, obriu {{ui:Més}} i trieu {{ui:Llengüetes de cisallament}} (o trieu {{ui:Afegeix llengüetes de cisallament}} al tauler {{ui:Propietats}}).
3. Cada extrem lliure de la biga que arriba a un pilar rep una llengüeta. Cada extrem de biga admet una sola connexió: una llengüeta de cisallament o una placa d'extrem.

Seleccioneu una llengüeta (cliqueu-la, o un dels seus cargols) per veure i canviar la seva configuració. {{ui:Aplica a semblants}} la copia, com a llengüeta de cisallament, a cada unió semblant que encara no té cap connexió.

## Configuració (mm)

| Configuració | Comença a | Significat |
|---|---|---|
| Gruix de la placa | 10 | El gruix de la llengüeta |
| Amplada de la placa | 115 | Fins on sobresurt la llengüeta de la cara del pilar, al llarg de la biga |
| Diàmetre del cargol, diàmetre del forat, qualitat del cargol | 20, 22, A325 | Igual que a les plaques d'extrem |
| Files de cargols, pas entre files | 3, 75 | Els cargols de la fila vertical |
| Distància a la vora (cargols superiors i inferiors) | 38 | Des dels cargols superiors i inferiors fins als extrems de la llengüeta; la llengüeta té de profunditat files × pas + 2 × això |
| Grup de cargols elevat en | 0 | 0 centra els cargols en la profunditat de la biga |
| Separació amb el pilar | 13 | Separació lliure entre el pilar i el cantó més proper de la biga |
| Línia de cargols des de la cara del pilar | 65 | Al llarg de la biga, des de la cara del pilar fins als cargols |
| Marge de longitud del cargol | 30 | S'afegeix a l'espessor a cargolar (llengüeta + ànima de la biga), arrodonit amunt a 5 mm |
| Mida de la soldadura en angle | 6 | A totes dues cares de la llengüeta fins al pilar |

## Bon a saber

- La llengüeta forma part del conjunt del pilar (soldada al taller); el conjunt de la biga només té els seus forats.
- Una biga esbiaixada o en pendent es retalla més enrere que una de quadrada, perquè el seu cantó més proper mantingui la separació. DetailCraft retalla les bigues en quadrat: el fabricant talla l'extrem segons convingui. La vora de la llengüeta al pilar també es dibuixa en quadrat.
- DetailCraft no comprova la resistència. Els avisos fan servir els mínims de distància a la vora i de pas de l'EN 1993-1-8 Taula 3.3, i indiquen quan la llengüeta és més profunda que l'ànima de la biga entre els seus arrodoniments, o quan els cargols són massa a prop de l'extrem tallat de la biga.
- La [comprovació de col·lisions](topic:clash-check) deixa fora una llengüeta i els elements que uneix: s'ha previst que es toquin.
