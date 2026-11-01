---
title: Un recorregut per la pantalla
summary: Cada barra, tauler i pestanya de DetailCraft pel seu nom a la pantalla, i per a què serveix cadascun.
keywords: pantalla, disposició, barra d'eines, taulers, propietats, barra d'estat, informes, interfície, ui, pestanyes
from: 454f74fd
---

DetailCraft omple la finestra del navegador sota la barra de l'aplicació. De dalt a baix: la barra d'eines, després tres columnes (el tauler {{ui:Model}}, la vista i el tauler {{ui:Propietats}}), després les pestanyes d'informe, i després la barra d'estat.

## La barra de l'aplicació

La barra prima de dalt de tot pertany a la pàgina de CadCraft, no al model. Mostra el nom i la versió de l'aplicació, un enllaç a {{ui:Quant a DetailCraft}}, {{ui:Ajuda}} (o {{key:F1}}) per a aquesta ajuda, {{ui:Desa per fer-lo servir sense connexió}}, el botó de mode de pantalla i l'interruptor {{ui:Paper}} / {{ui:Model}}.

- {{ui:Desa per fer-lo servir sense connexió}} manté DetailCraft, la vista 3D i aquesta ajuda al navegador perquè s'obrin sense connexió. Quan està desat, mostra {{ui:Disponible sense connexió}}; feu-hi clic llavors per {{ui:Torna a desar (obté la versió més recent)}} o {{ui:Elimina la còpia sense connexió}}. Vegeu [Treballar sense connexió](common:offline).
- {{ui:Paper}} dona una pantalla clara i {{ui:Model}} una de fosca. La vista 3D se segueix a l'instant; res del vostre model no canvia.
- El botó de mode de pantalla i {{key:Ctrl+Shift+F}} alternen entre normal, pantalla completa i pantalla completa amb les barres amagades. {{key:Ctrl+Shift+F}} usa la tecla Control en tots els ordinadors, també al Mac. Amb les barres amagades, apunteu a la vora superior de la pantalla (o toqueu-la) per fer-les tornar. {{key:Esc}} surt de la pantalla completa.

## La barra d'eines

La barra d'eines té cinc grups. Passeu el cursor sobre un botó per veure què fa i quina és la seva tecla.

| Grup | Botons | Què fan |
|---|---|---|
| {{ui:Fitxer}} | {{ui:Nou}}, {{ui:Obre}}, {{ui:Importa IFC}}, {{ui:Desa}}, {{ui:Exemple}} | Comencen un model, obren un `.detailcraft.json` desat o un fitxer IFC, en desen un, o obren el pòrtic de mostra |
| {{ui:Col·loca}} | {{ui:Selecciona}}, {{ui:Biga}}, {{ui:Pilar}}, {{ui:Reforç diagonal}}, {{ui:Placa}}, {{ui:Sabata}}, {{ui:Escala}} | L'eina que fa servir el següent clic a la vista |
| {{ui:Connecta}} | {{ui:Plaques d'extrem}}, {{ui:Placa de base}}, i a {{ui:Més}}: {{ui:Llengüetes de cisallament}}, {{ui:Empalmament}}, {{ui:Cartela}}, {{ui:Similar}} | Afegeix una connexió a la biga, pilar o reforç seleccionat, o copia la connexió seleccionada a totes les unions semblants |
| {{ui:Edita}} | {{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Més}} | Desfan i refan canvis; copien la selecció i la enganxen. {{ui:Més}} obre un menú amb {{ui:Retalla}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Enganxa al mateix lloc}}, {{ui:Duplica}}, {{ui:Suprimeix}}, {{ui:Selecciona-ho tot}} i {{ui:Neteja la selecció}}, cadascun amb la seva tecla |
| {{ui:Sortida}} | {{ui:IFC}}, {{ui:Fitxers NC}}, {{ui:LdM}}, {{ui:Plànol de taller}}, {{ui:Plànols}}, i a {{ui:Més}}: {{ui:Doblegat}}, {{ui:Informe de pes per fase}}, {{ui:Fitxer KISS per a programari de fabricació}} | Baixen una exportació, o obren els fulls de plànols |

Els botons i els elements de menú que ara no poden actuar apareixen en gris, i passar-hi el cursor diu per què. {{ui:Plaques d'extrem}} necessita una biga seleccionada, {{ui:Placa de base}} un pilar seleccionat, {{ui:Similar}} una connexió seleccionada, {{ui:Plànol de taller}} una peça seleccionada de perfil en I o una placa, {{ui:Copia}} una barra o una sabata seleccionada, i {{ui:Enganxa}} necessita alguna cosa copiada. Vegeu [Copia, enganxa i duplica](topic:copy-paste).

## El tauler Model (esquerra)

- {{ui:Model}}: el {{ui:Nom}} del model. Dona nom a cada fitxer que deseu o exporteu.
- {{ui:Quadrícules}}: les línies de quadrícula i les seves separacions, i {{ui:Aplica les quadrícules}}. Vegeu [Definiu quadrícules i nivells](topic:grids-and-levels).
- {{ui:Nivells}}: una fila per nivell (nom i cota en mm), {{ui:Afegeix un nivell}} i {{ui:Aplica els nivells}}.
- {{ui:Perfil personalitzat}}: feu el vostre propi perfil paramètric. Tancat fins que l'obriu.
- {{ui:Marques de peça}}: cada marca de peça del model amb el seu perfil, longitud i recompte. Feu clic en una marca per seleccionar la primera peça amb aquesta marca.

{{ui:Quadrícules}}, {{ui:Nivells}} i {{ui:Perfil personalitzat}} es plegen: feu clic als seus títols.

## La vista (al mig)

La vista mostra el model en 3D. Per sobre seu, la barra de vista té tres botons i una llista:

- {{ui:3D}}: gireu lliurement al voltant del model.
- {{ui:Planta}}: mireu directament cap avall a un nivell. Apareix una llista de nivells al costat dels botons. Tot el que és més d'1,5 m per sobre del nivell es talla, perquè pugueu veure i fer clic al nivell amb claredat.
- {{ui:Alçat}}: mireu directament una línia de quadrícula amb lletra (Quadrícula A, Quadrícula B …). Apareix una llista de quadrícules amb lletra. Només es mostra l'acer a menys d'1 m d'aquella línia.
- El botó d'ajustar, a l'extrem dret de la barra de vista, fa zoom per mostrar tot el model.

Petits punts marquen cada intersecció de quadrícules a cada nivell. Mentre és activada una eina de col·locació, el punt més proper al cursor s'il·lumina i la barra d'estat n'indica el nom, per exemple "A/2 al Nivell 1". Els colors distingeixen els tipus d'element: pilars, bigues, reforços diagonals i plaques tenen cadascun el seu color; els cargols i les barres d'ancoratge en tenen un altre; les sabates són transparents, i l'armadura es dibuixa com a tubs. Els forats es mostren com a taps foscos; els retalls estan tallats.

Com girar, desplaçar i fer zoom: [Moveu-vos per la vista 3D](topic:navigate-3d).

Quan el model és buit, la vista mostra una llista curta "Comença un model". També podeu deixar anar un fitxer de model desat a qualsevol lloc de la vista per obrir-lo.

## El tauler Propietats (dreta)

Allò que mostra aquest tauler depèn del que feu, i el seu títol diu quin és: "Model", "Col·loca una biga", "Biga b2", "Connexió de placa d'extrem", "Placa de base", "Sabata F1", "3 seleccionats" o "Enganxa".

- **Res seleccionat:** un resum del model (barres, connexions, sabates, peces, marques, cargols, pes d'acer i d'armadura, quadrícules, nivells).
- **Una eina de col·locació activada:** les opcions de la següent peça (perfil, material, posició, rotació, i per als pilars {{ui:Fins a}}), un resum del perfil escollit, i un formulari {{ui:Afegeix per quadrícula}} per col·locar sense fer clic a la vista.
- **Una barra seleccionada:** el seu nom, perfil, material, posició, rotació, les coordenades dels seus dos extrems, les seves marques, la longitud de tall i el pes, els seus forats i retalls, i els botons de connexions, del seu plànol de taller i {{ui:Suprimeix}}.
- **Una connexió seleccionada:** cada configuració de placa, cargol i soldadura, els cargols i la soldadura que fa, els seus avisos, i {{ui:Aplica a les semblants}}.
- **Una sabata seleccionada:** la seva posició i mida, la malla inferior, les barres d'espera, i les marques de barra que usa.
- **Diversos elements seleccionats:** quantes barres de cada tipus, connexions i sabates hi ha, el seu pes d'acer, i {{ui:Copia}}, {{ui:Duplica}} i {{ui:Suprimeix}}.
- **Enganxar:** què hi ha al porta-retalls, i formularis per enganxar amb un desplaçament escrit o sobre una intersecció de quadrícules que trieu de llistes.

Els camps numèrics tenen efecte quan premeu {{key:Enter}} o en sortiu. Cada canvi és un pas que podeu desfer.

## Les pestanyes d'informe (a baix)

- {{ui:Problemes}}: tot el que DetailCraft no ha pogut construir o vol que comproveu, amb un botó {{ui:Selecciona}} a cada línia. La pestanya mostra el recompte entre parèntesis.
- {{ui:Llista de materials}}: peces, conjunts, i cargols i barres d'ancoratge, amb pesos i un enllaç {{ui:Baixa CSV}}. Feu clic en una marca de peça per seleccionar aquella peça.
- {{ui:Quadre de doblegat}}: cada marca de barra de cada sabata, amb un enllaç {{ui:Baixa CSV}}.

Amb una pestanya enfocada, {{key:Left}} i {{key:Right}} es mouen entre pestanyes.

## La barra d'estat

La barra de la part inferior té tres parts: la intersecció de quadrícules sota el cursor mentre col·loqueu, l'últim missatge (què ha passat, o per què s'ha rebutjat alguna cosa), i els totals acumulats de peces, cargols, pes d'acer i pes d'armadura. Quan una acció sembla no fer res, llegiu primer el missatge d'aquí.

El títol de la pestanya del navegador comença amb un punt (•) mentre el model té canvis que no heu desat.

## En una pantalla estreta

Per sota d'uns 760 píxels d'amplada, les columnes s'apilen: barra d'eines, vista, barra d'estat, {{ui:Propietats}}, pestanyes d'informe i, l'últim, el tauler {{ui:Model}}. Desplaceu la pàgina per arribar-hi. DetailCraft està dissenyat per a una pantalla d'escriptori o de portàtil; un telèfon serveix per mirar, no per detallar.
