---
title: Primers passos amb DetailCraft
summary: Què fa avui DetailCraft, com s'obre i un primer model, des de les quadrícules fins a un plànol de taller, en deu minuts.
keywords: començar, primer model, introducció, detallat d'acer, armadura, inici ràpid, tutorial, visió general
from: 3682c0d8
---

DetailCraft és l'aplicació de detallat d'acer i d'armadura de la família CadCraft. Construïu un model 3D d'un pòrtic d'acer sobre quadrícules i nivells, el connecteu i obteniu el que el taller necessita: marques de peça i de conjunt, una llista de materials, plànols de taller d'una sola peça, fitxers NC DSTV, un model IFC i un quadre de doblegat per a les sabates.

Aquesta és una versió inicial. Fa poques coses, però amb cura, en lloc de fer-ho tot a la vegada. Llegiu [Què encara no està implementat](topic:not-built-yet) abans de planificar feina real amb ella.

## Què fa avui

- Quadrícules i nivells que escriviu, en mil·límetres.
- Pilars, bigues, reforços diagonals i plaques a partir de catàlegs de perfils publicats (AISC W, S, C, L, HSS i Pipe; IPE, HEA, HEB i UPN europeus), a més dels vostres propis perfils paramètrics.
- Dues connexions: una placa d'extrem cargolada d'una biga a l'ala d'un pilar, i una placa de base de pilar amb quatre barres d'ancoratge. Cadascuna es pot copiar a totes les unions semblants.
- Forats i retalls introduïts per posició.
- Sabates quadrades de pedestal amb una malla inferior i barres d'espera.
- Marques de peça i de conjunt que s'actualitzen soles després de cada canvi.
- Exportacions: IFC4, fitxers NC DSTV (perfils en I i plaques), llista de materials en CSV, quadre de doblegat en CSV, i un PDF de plànol de taller d'una peça.

## Obriu DetailCraft

1. Obriu DetailCraft en un navegador d'escriptori: Chrome, Edge, Firefox o Safari. Vegeu [Navegadors i ordinadors](common:browsers).
2. Espereu que la pantalla s'ompli. La barra d'estat de la part inferior diu "Preparat. Obriu l'Exemple, o definiu quadrícules i nivells i comenceu a col·locar barres."

La vista del model necessita gràfics 3D (WebGL). Si al mig de la pantalla hi diu "Aquest navegador no ha pogut iniciar els gràfics 3D (WebGL)", vegeu [Resolució de problemes](topic:troubleshooting#the-3d-view-is-missing).

:::note
Els vostres models es queden al vostre ordinador. En obrir un model, el navegador el llegeix; en desar, es baixa un fitxer. No es puja res. El desament al núvol encara no està disponible. Vegeu [On van els vostres fitxers](common:your-files). Per usar DetailCraft més tard sense connexió, trieu {{ui:Desa per fer-lo servir sense connexió}} a la barra de l'aplicació una vegada mentre teniu connexió; vegeu [Treballar sense connexió](common:offline).
:::

:::offline
Esteu fora de línia. DetailCraft funciona sense connexió només si abans s'ha desat per usar-lo fora de línia: el botó {{ui:Desa per fer-lo servir sense connexió}} de la barra de l'aplicació ha de mostrar {{ui:Disponible sense connexió}}. Vegeu [Treballar sense connexió](common:offline).
:::

## Mireu primer la mostra

La manera més ràpida de veure què fa DetailCraft és el pòrtic de mostra.

1. Trieu {{ui:Exemple}} al grup {{ui:Fitxer}} de la barra d'eines.
2. La vista mostra un pòrtic de dos vans: sis pilars amb plaques de base, quatre bigues amb plaques d'extrem, un reforç diagonal i set sabates amb armadura.
3. Feu clic en una biga. El tauler {{ui:Propietats}} de la dreta mostra la seva marca de peça, la longitud de tall, el pes i els forats que han fet les plaques d'extrem.
4. Obriu la pestanya {{ui:Llista de materials}} a la part inferior per veure totes les marques de peça amb el seu recompte i pes.

El recorregut [Expliqueu el pòrtic de mostra](topic:sample-model) el repassa peça a peça.

## El vostre primer model

Un model nou ja té les quadrícules 1 a 3 per A a B de 6000 mm, i dos nivells: el Nivell 1 a 0 i el Nivell 2 a 4000.

1. Trieu {{ui:Nou}}. Si el model actual té canvis, DetailCraft pregunta si els voleu desar primer.
2. Trieu {{ui:Planta}} sobre la vista. La llista de nivells al costat tria el Nivell 1.
3. Trieu {{ui:Pilar}} a la barra d'eines, o premeu {{key:C}}.
4. Feu clic a la intersecció de quadrícules A/1. Apareix un pilar W12x50 del Nivell 1 al Nivell 2. La barra d'estat indica on s'ha col·locat.
5. Feu clic a B/1, A/2 i B/2 per col·locar-ne tres més.
6. Trieu el Nivell 2 a la llista de nivells, i després {{ui:Biga}} o premeu {{key:B}}.
7. Feu clic a A/1, i després a A/2. Apareix una biga W16x26 que uneix els dos caps dels pilars, amb la part superior de l'acer al nivell.
8. Premeu {{key:Esc}} per tornar a {{ui:Selecciona}}, i després feu clic a la biga.
9. Trieu {{ui:Plaques d'extrem}} al grup {{ui:Connecta}}. Els dos extrems reben una placa d'extrem cargolada, la biga es retalla per encaixar-la i la primera placa d'extrem queda seleccionada.
10. Torneu a fer clic a la biga.
11. Trieu {{ui:Plànol de taller}} al grup {{ui:Sortida}}. S'obre una vista prèvia del plànol de taller de la biga. Trieu {{ui:Baixa PDF}}.
12. Premeu {{key:Mod+S}} per desar el model. El navegador baixa `Untitled.detailcraft.json`.

Reanomeneu el model al camp {{ui:Nom}}, a la part superior esquerra, abans de desar-lo, perquè el fitxer i totes les exportacions portin el seu nom.

## On anar després

- [Un recorregut per la pantalla](topic:workspace)
- [Definiu quadrícules i nivells](topic:grids-and-levels)
- [Moveu-vos per la vista 3D](topic:navigate-3d), amb ratolí, panell tàctil o pantalla tàctil
- [Des d'un altre programari de detallat](topic:coming-from), si coneixeu un paquet gran de detallat
- [Usar aquesta ajuda](common:help)
