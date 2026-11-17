---
title: Explora el marc d'exemple
summary: Obrir el marc de dos vans integrat i fer-lo servir per aprendre què crea DetailCraft, des de les marques fins als fitxers NC.
keywords: exemple, demo, marc, aprendre, recorregut, provar
from: 5c5944dd
---

El marc d'exemple és un model petit i complet: hi apareix almenys una vegada cada tipus d'element que crea DetailCraft. És la manera més ràpida d'aprendre l'aplicació i de provar una exportació abans de confiar-hi.

## Obrir-lo

1. Trieu {{ui:Exemple}} al grup {{ui:Fitxer}}.
2. Si el model actual té canvis sense desar, trieu {{ui:Desa primer}} o {{ui:Descarta els canvis}}.
3. La barra d'estat diu "Marc d'exemple: 6 pilars amb placa de base, 4 bigues amb placa d'extrem, un reforç diagonal, 7 sabates amb armadura."

L'exemple s'obre com un model nou anomenat "Marc d'exemple". No canvia res més, i no té res per desfer.

## Què hi ha

- **Graelles** 1, 2, 3 a 6000 mm, i A, B a 7000 mm. **Nivells**: Nivell 1 a 0 i Nivell 2 a 4000.
- **Sis pilars**, W12x50, del Nivell 1 al Nivell 2 a cada intersecció, cadascun sobre una placa de base de 25 mm amb quatre barres d'ancoratge.
- **Quatre bigues**, W16x26, al Nivell 2 al llarg de les línies de graella A i B, amb la part superior de l'acer al nivell, i amb una placa d'extrem cargolada a ras a cada extrem (vuit en total).
- **Un reforç diagonal**, HSS4x4x1/4, de A/1 al Nivell 1 fins a A/2 al Nivell 2.
- **Sis sabates aïllades**, 2000 x 2000 x 600, una sota cada pilar, amb una malla inferior en ganxo en les dues direccions.
- **Una sabata més** al costat del marc, 2400 x 1800 x 600, amb sis barres d'espera en ganxo que surten per a un pilar de formigó.

## Coses per provar

1. Feu clic a una biga. Llegiu-ne la {{ui:Marca de peça}}, el {{ui:Conjunt}}, la {{ui:Longitud de tall}} i el {{ui:Retallat}}: la longitud de tall és més curta que l'espaiat de graella de 6000 mm perquè cada placa d'extrem retalla la biga la meitat de la profunditat del pilar més el gruix de la placa.
2. Feu clic a un pilar. A {{ui:Forats}} hi apareixen els forats que les plaques d'extrem han fet a la seva ala ("8 forats de connexions"; els pilars del mig en tenen 16, un conjunt a cada ala).
3. A la llista {{ui:Marques de peça}} de l'esquerra, comproveu que les quatre bigues comparteixen una marca: són la mateixa peça d'acer. Els pilars de cantonada també comparteixen una marca, encara que els seus forats miren en sentits oposats, perquè un pilar girat de punta a punta és la mateixa peça. Els pilars del mig, amb forats a totes dues ales, tenen una altra marca.
4. Feu clic a una placa d'extrem (o a un dels seus cargols). El tauler {{ui:Propietats}} mostra la configuració de la placa, dels cargols i de la soldadura, els cargols que es fan (amb la seva longitud calculada a partir de l'espessor a cargolar) i els avisos de distància a la vora.
5. Obriu la pestanya {{ui:Llista de materials}}. Hi apareixen les peces, els conjunts (una biga amb les seves dues plaques d'extrem és un conjunt), i els cargols i les barres d'ancoratge, amb els pesos. Hi haurien de sortir sis marques de peça: c1 (els dos pilars del mig) i c2 (els quatre de cantonada), tots dos W12x50 a 3975 mm; b1, quatre bigues W16x26 a 5650 mm; br1, el reforç diagonal; p1, vuit plaques d'extrem PL20x180; i p2, sis plaques de base PL25x400. Els elements de fixació són 64 cargols 20 x 70 A325 i 24 barres d'ancoratge 20 x 575.
6. Obriu la pestanya {{ui:Quadre de doblegat}}. Les sis sabates idèntiques comparteixen marques de barra; la sabata del pilar de formigó hi afegeix la seva.
7. Feu clic al reforç diagonal i mireu el grup {{ui:Sortida}}: {{ui:Plànol de taller}} és en gris, perquè els plànols de taller només cobreixen, de moment, perfils en I i plaques.
8. Trieu {{ui:Fitxers NC}}. El zip conté un fitxer per a cada marca de perfil en I i de placa; la barra d'estat indica que la marca del reforç diagonal no s'ha escrit.
9. Trieu {{ui:IFC}} i obriu el fitxer amb qualsevol visor IFC per comprovar com el llegeix el vostre altre programari.

## Usar-lo com a punt de partida

El model d'exemple és un model qualsevol. Canvieu-lo, després canvieu-li el nom al camp {{ui:Nom}} i deseu-lo amb el nou nom amb {{key:Mod+S}}.
