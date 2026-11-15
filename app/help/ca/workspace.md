---
title: Una visita per la pantalla
summary: Cada barra, panell i pestanya de DetailCraft pel seu nom a la pantalla, i per a què serveix cadascun.
keywords: pantalla, disseny, barra d'eines, panells, propietats, barra d'estat, informes, interfície, ui, pestanyes
from: 94f81073
---

DetailCraft omple la finestra del navegador sota la barra de l'aplicació. De dalt a baix: la barra d'eines, després tres columnes (el panell {{ui:Model}}, la vista i el panell {{ui:Propietats}}), després les pestanyes d'informes, i després la barra d'estat.

## La barra de l'aplicació

La barra prima de la part superior no pertany al model sinó al lloc de CadCraft. Mostra el nom i la versió de l'aplicació, un enllaç a {{ui:Quant a DetailCraft}}, {{ui:Ajuda}} (o {{key:F1}}) per a aquesta ajuda, {{ui:Desa per fer-lo servir sense connexió}}, el botó de mode de pantalla i el commutador {{ui:Paper}} / {{ui:Model}}.

- {{ui:Desa per fer-lo servir sense connexió}} manté DetailCraft, la seva vista 3D i aquesta ajuda al navegador perquè s'obri sense connexió. Mostra {{ui:Disponible sense connexió}} un cop desat; feu-hi clic llavors per a {{ui:Torna a desar (obté la versió més recent)}} o {{ui:Elimina la còpia sense connexió}}. Vegeu [Treballar fora de línia](common:offline).
- {{ui:Paper}} dona una pantalla clara i {{ui:Model}} una de fosca. La vista 3D se segueix a l'instant; res del model canvia.
- El botó de mode de pantalla i {{key:Ctrl+Shift+F}} recorren el mode normal, la pantalla completa i la pantalla completa amb les barres amagades. {{key:Ctrl+Shift+F}} usa la tecla Control a tots els ordinadors, també als Mac. Amb les barres amagades, situeu el punter a la vora superior de la pantalla (o toqueu-la) per fer-les tornar. {{key:Esc}} surt de la pantalla completa.

## La barra d'eines

La barra d'eines té cinc grups. Passeu el ratolí sobre un botó per veure què fa i quina tecla té.

| Grup | Botons | Què fan |
|---|---|---|
| {{ui:Fitxer}} | {{ui:Nou}}, {{ui:Obre}}, {{ui:Importa IFC}}, {{ui:Desa}}, {{ui:Exemple}} | Començar un model, obrir un `.detailcraft.json` desat o un fitxer IFC, desar-ne un, o obrir el marc d'exemple |
| {{ui:Col·loca}} | {{ui:Selecciona}}, {{ui:Biga}}, {{ui:Pilar}}, {{ui:Reforç diagonal}}, {{ui:Placa}}, {{ui:Sabata}}, {{ui:Escala}} | L'eina que usa el següent clic a la vista |
| {{ui:Connecta}} | {{ui:Plaques d'extrem}}, {{ui:Placa de base}}, i a {{ui:Més}}: {{ui:Llengüetes de cisallament}}, {{ui:Empalmament}}, {{ui:Cartela}}, {{ui:Similar}} | Afegeix una connexió a la biga, pilar o reforç seleccionat, o copia la connexió seleccionada a totes les unions iguals |
| {{ui:Edita}} | {{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Més}} | Retrocedir i avançar entre edicions; copiar la selecció i enganxar-la. {{ui:Més}} obre un menú amb {{ui:Retalla}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Enganxa al mateix lloc}}, {{ui:Duplica}}, {{ui:Suprimeix}}, {{ui:Selecciona-ho tot}} i {{ui:Neteja la selecció}}, cadascun amb la seva tecla |
| {{ui:Sortida}} | {{ui:IFC}}, {{ui:Fitxers NC}}, {{ui:LdM}}, {{ui:Plànol de taller}}, {{ui:Plànols}}, i a {{ui:Més}}: {{ui:Doblegat}}, {{ui:Informe de pes per fase}}, {{ui:Fitxer KISS per a programari de fabricació}} | Baixar una exportació, o obrir els fulls de plànols |

Els botons i els elements de menú que no poden actuar ara estan en gris, i en passar-hi el punter diu per què. {{ui:Plaques d'extrem}} necessita una biga seleccionada, {{ui:Placa de base}} un pilar seleccionat, {{ui:Similar}} una connexió seleccionada, {{ui:Plànol de taller}} un model amb peces, {{ui:Copia}} una barra o una sabata seleccionada, i {{ui:Enganxa}} alguna cosa copiada. Vegeu [Copiar, enganxar i duplicar](topic:copy-paste).

## El panell Model (esquerra)

- {{ui:Model}}: el {{ui:Nom}} del model. Dona nom a cada fitxer que deseu o exporteu.
- {{ui:Quadrícules}}: les línies de quadrícula i els seus espaiats, i {{ui:Aplica les quadrícules}}. Vegeu [Configurar quadrícules i nivells](topic:grids-and-levels).
- {{ui:Nivells}}: una fila per nivell (nom i cota en mm), {{ui:Afegeix un nivell}} i {{ui:Aplica els nivells}}.
- {{ui:Perfil personalitzat}}: feu la vostra pròpia secció paramètrica. Resta tancat fins que l'obriu.
- {{ui:Marques de peça}}: cada marca de peça del model amb el seu perfil, la seva longitud i el seu recompte. Cliqueu una marca per seleccionar la primera peça amb aquesta marca.

{{ui:Quadrícules}}, {{ui:Nivells}} i {{ui:Perfil personalitzat}} es plegen: feu clic als seus encapçalaments.

## La vista (al mig)

La vista mostra el model en 3D. Sobre ella, la barra de vista té tres botons i una llista:

- {{ui:3D}}: gireu lliurement al voltant del model.
- {{ui:Planta}}: mireu directament cap avall a un nivell. Apareix una llista de nivells al costat dels botons. Tot el que hi hagi a més de 1.5 m per sobre del nivell queda tallat, perquè pugueu veure i clicar el nivell amb claredat.
- {{ui:Alçat}}: mireu directament una línia de quadrícula amb lletra (Quadrícula A, Quadrícula B …). Apareix una llista de quadrícules amb lletra. Només es mostra l'acer a menys de 1 m d'aquesta línia.
- El botó d'ajust, a l'extrem dret de la barra de vista, fa zoom per mostrar tot el model.

Els petits punts marquen cada intersecció de quadrícules a cada nivell. Mentre hi ha una eina de col·locació activa, el punt més proper al punter s'il·lumina i la barra d'estat n'indica el nom, per exemple "A/2 a Nivell 1". Els colors distingeixen els tipus de peça: pilars, bigues, reforços diagonals i plaques tenen cadascun el seu color; els cargols i les barres d'ancoratge, un altre; les sabates són transparents i l'armadura es dibuixa com a tubs. Els forats es veuen com a taps foscos; els retalls són tallats.

Com girar, desplaçar i fer zoom: [Moveu-vos per la vista 3D](topic:navigate-3d).

Quan el model és buit, la vista mostra una llista curta "Comença un model". També podeu deixar anar un fitxer de model desat en qualsevol lloc de la vista per obrir-lo.

## El panell Propietats (dreta)

El que mostra aquest panell depèn del que feu, i el seu encapçalament indica quin és: "Model", "Col·loca una biga", "Biga b2", "Connexió de placa d'extrem", "Placa de base", "Sabata F1", "3 seleccionats" o "Enganxa".

- **Res seleccionat:** un resum del model (barres, connexions, sabates, peces, marques, cargols, pes de l'acer i de l'armadura, quadrícules, nivells).
- **Una eina de col·locació activa:** les opcions de la següent peça (perfil, material, posició, rotació, i per als pilars {{ui:Fins a}}), un resum del perfil escollit, i un formulari {{ui:Afegeix per quadrícula}} per col·locar sense fer clic a la vista.
- **Una barra seleccionada:** el seu nom, perfil, material, posició i rotació, les coordenades dels seus dos extrems, les seves marques, la longitud de tall i el pes, els seus forats i retalls, i els botons de connexions, del seu plànol de taller i de {{ui:Suprimeix}}.
- **Una connexió seleccionada:** cada configuració de placa, cargol i soldadura, els cargols i la soldadura que fa, els seus avisos, i {{ui:Aplica a les similars}}.
- **Una sabata seleccionada:** la seva posició i mida, l'estora inferior, les barres d'arrencada, i les marques de barra que usa.
- **Diverses coses seleccionades:** quants elements hi ha de cada tipus, de connexions i de sabates, el seu pes d'acer, i {{ui:Copia}}, {{ui:Duplica}} i {{ui:Suprimeix}}.
- **Enganxar:** què hi ha al porta-retalls, i formularis per enganxar amb un desplaçament escrit o sobre una intersecció de quadrícules que trieu de llistes.

Els camps numèrics s'apliquen en prémer {{key:Enter}} o en sortir del camp. Cada canvi és un pas que podeu desfer.

## Les pestanyes d'informes (a baix)

- {{ui:Problemes}}: tot el que DetailCraft no ha pogut construir o vol que comproveu, amb un botó {{ui:Selecciona}} a cada línia. La pestanya mostra el recompte entre parèntesis.
- {{ui:Llista de materials}}: peces, conjunts, i cargols i barres d'ancoratge, amb pesos i un enllaç {{ui:Baixa CSV}}. Cliqueu una marca de peça per seleccionar aquella peça.
- {{ui:Quadre de doblegat}}: cada marca de barra de cada sabata, amb un enllaç {{ui:Baixa CSV}}.

Amb una pestanya enfocada, {{key:Left}} i {{key:Right}} es mouen entre pestanyes.

## La barra d'estat

La barra de la part inferior té tres parts: la intersecció de quadrícules sota el punter mentre es col·loca, l'últim missatge (què ha passat just ara, o per què s'ha rebutjat alguna cosa), i els totals acumulats de peces, cargols, pes d'acer i pes d'armadura. Quan una acció sembla que no fa res, llegiu primer el missatge d'aquí.

El títol de la pestanya del navegador comença amb un punt (•) mentre el model tingui canvis que no heu desat.

## En una pantalla estreta

Per sota d'uns 760 píxels d'amplada, les columnes es posen una sobre l'altra: barra d'eines, vista, barra d'estat, {{ui:Propietats}}, pestanyes d'informes i, al final, el panell {{ui:Model}}. Desplaceu la pàgina per arribar-hi. DetailCraft està dissenyat per a un escriptori o un portàtil; un telèfon serveix per mirar, no per detallar.
