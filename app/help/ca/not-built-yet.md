---
title: Què encara no està implementat
summary: Què no pot fer encara aquesta versió inicial de DetailCraft i què fer, de moment, en lloc d'això.
keywords: límits, limitacions, que falta, full de ruta, no admès, pròximament, previst, alternativa, pendent
from: ea411885
---

DetailCraft és una versió inicial. Aquesta pàgina llista el que encara no fa, perquè pugueu planificar-ho. Res del que hi ha aquí no és una promesa de data.

## Modelatge

| Encara no | En canvi, avui |
|---|---|
| Arrossegar un extrem d'una barra (estirar-la) | Editeu {{ui:Inici}} o {{ui:Final}} sota {{ui:Extrems (x, y, z mm)}} al tauler {{ui:Propietats}} |
| Un filtre de selecció (només bigues, només un perfil) | Arrossegueu una finestra i, després, {{key:Shift}}+clic per treure peces |
| Fer una matriu d'una selecció; girar sobre un eix inclinat; simetria en un pla inclinat | Copieu-ho i enganxeu-ho amb un desplaçament, o useu {{ui:Duplica}}; girar i fer simetria funcionen en planta ([Seleccionar per finestra, moure, girar, fer simetria i canviar-ne molts](topic:select-and-change)) |
| Punts fora de la quadrícula en fer clic | Col·loqueu-ho sobre la quadrícula i, després, escriviu les coordenades finals |
| Alçats al llarg de les línies de quadrícula numerades; vistes desades; plans de treball | Useu {{ui:3D}}, o {{ui:Afegeix per quadrícula}} |
| Forats dibuixats com a talls reals a la vista 3D | Els forats es veuen com a tapons foscos; són reals en totes les exportacions |
| Osques arrodonides o inclinades, altres talls i accessoris | Només osques quadrades en perfils I |
| Forats que afegiu a cornières i tubs rodons | Els forats de cornières només vénen de les [cartel·les](topic:brace-gussets) |
| Entrada en unitats imperials | Escriviu mil·límetres (25.4 per polzada) |
| Editar o eliminar un perfil personalitzat ({{ui:Perfil personalitzat}}) | Afegiu un perfil corregit amb un nom nou |

## Escales

| Encara no | En canvi, avui |
|---|---|
| Passamans, replans, plaques de peu, esglaons de reixa, escales de cargol i de dos trams en angle | Només trams rectes; vegeu [Escales](topic:stairs) |
| Talls d'extrem de les carreres contra els forjats | Carreres amb tall recte; talleu-les al programari del taller |

## Connexions

DetailCraft construeix sis connexions: una cartel·la de reforç diagonal (vegeu [Cartel·les de reforç](topic:brace-gussets)); un empalmament cargolat entre dues peces d'un mateix perfil I (vegeu [Empalmaments](topic:splices)); una unió a inglet entre dos perfils I que es troben en angle, només tallada o amb plaques d'extrem cargolades (vegeu [Unions a inglet](topic:mitres)); una placa d'extrem cargolada, a ras o allargada, d'una biga de perfil I vertical i a nivell a l'ala o a l'ànima d'un pilar de perfil I; una placa de cisallament d'una biga (quadrada, esbiaixada o inclinada) a l'ala o a l'ànima d'un pilar; i una placa de base de pilar amb quatre barres d'ancoratge.

| Encara no | En canvi, avui |
|---|---|
| Plaques d'extrem esbiaixades o inclinades | Useu [plaques de cisallament](topic:shear-tabs), que admeten bigues esbiaixades i inclinades |
| Cornières de connexió; plaques d'ompliment d'empalmaments i empalmaments entre mides diferents; cartel·les de cantonada soldades a biga i pilar; cartel·les amb xamfrà | Detalleu-ho en un altre programari, o afegiu plaques i forats a mà com a peces soltes; vegeu [Empalmaments](topic:splices), [Cartel·les de reforç](topic:brace-gussets) |
| Rigiditzadors de base xamfrats o cònics; forats per al morter; la cavitat de la sabata per a una llengüeta de cisallament | Rigiditzadors rectangulars; vegeu [Plaques de base](topic:base-plates) |
| Ressalts; inglets soldats amb soldadura a topall; rigiditzadors alineats amb les ales de l'altra peça | Un [inglet](topic:mitres) amb plaques d'extrem i rigiditzadors d'ànima, o un inglet simple tallat; afegiu altres plaques a mà com a peces soltes |
| Comprovacions de resistència de les connexions | Comproveu les connexions amb els càlculs del vostre enginyer; DetailCraft només avisa de la distància a la vora i de l'espaiat |
| Forats allargats | Només forats rodons |

## Anàlisi

| Encara no | En canvi, avui |
|---|---|
| Comprovacions de disseny més enllà dels perfils I d'acer: tubs, cornières, canals, perfils soldats, peces esveltes o de classe 4, torsió, connexions; formigó: esveltesa per desplom, torsió, detallat sísmic, forjats i murs | La pestanya {{ui:Anàlisi}} comprova els perfils I d'acer segons AISC 360 o EN 1993-1-1 ([Comprovar les barres d'acer segons una norma de disseny](topic:design-checks)); la resta la deixa marcada com a "no comprovat"; un enginyer ho revisa tot |
| Anàlisi de vinclament, vibració | El segon ordre només és P-Delta (elàstic); no hi ha anàlisi de vinclament (modal, espectre de resposta, historial en el temps i pushover són a la pestanya Anàlisi) |
| Comprovacions de disseny revisades per un enginyer | Fins aleshores són només una ajuda: comproveu dues o tres barres a mà o amb el programari del vostre enginyer abans de fiar-vos-en |
| Càrregues de forjat, de vent i de neu calculades automàticament a partir d'àrees | Introduïu les càrregues a les barres a mà, en kN/m o kN |
| Desplaçaments de barres, unions excèntriques, reforços diagonals només a tracció, plaques i sabates al pòrtic | Les barres s'analitzen per les seves línies de treball; els reforços diagonals suporten tracció i compressió |

## Armadura

| Encara no | En canvi, avui |
|---|---|
| Pilars circulars, espirals, bigues inclinades o corbes, forjats que no siguin rectangulars, murs que no siguin rectes | Bigues, pilars, forjats i murs rectangulars ([Detallar formigó armat](topic:reinforced-concrete)) |
| Barres doblegades per a un solapament, solapaments escalonats, solapaments col·locats on vulgueu | Solapaments a intervals iguals, totes les barres solapades en una mateixa secció (ACI Class B, EN α6 = 1.5) |
| Barres de cantonada a les obertures, armadura de punxonament, detallat sísmic (ACI 318-19 capítol 18) | Barres de reforç a cada costat d'una obertura; comproveu la resta vosaltres mateixos |
| Llegir els fitxers propis d'un programa de càlcul d'estructures | Exporteu IFC des d'aquell programa: les seves IfcReinforcingBar entren com a barres ([Barres d'un fitxer IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Codis de forma més enllà del recte, d'una doblegada i de la U; tipus ACI 315 per a barres rectes i amb un ganxo | Les tres formes s'imprimeixen com a BS 8666 00, 11, 21 o ACI Type 2; vegeu [Referència d'armadura](topic:rebar-reference) |
| Barres mètriques diferents de BS 4449 H8–H40 (p. ex. CSA 10M–35M) | Noms ASTM soft-metric #10–#36, o barres BS |

## Plànols i exportacions

| Encara no | En canvi, avui |
|---|---|
| Fulls en vertical, A0, i fulls de mida pròpia; vistes de disposició general en quadrícules esbiaixades | Fulls A4 a A1 en horitzontal i ANSI B a D ([Plànols de disposició general i de muntatge](topic:drawings)); escaleu el PDF per imprimir en una altra mida |
| Símbols de soldadura en plànols de taller d'una sola peça; símbols que no siguin cordons d'angle | Els plànols de muntatge porten símbols de cordó d'angle; el plànol de taller dona la soldadura com a text |
| Editar un plànol a l'aplicació | Canvieu el model i torneu a fer el plànol; anoteu el PDF amb una aplicació de PDF com MarkupCraft |
| Plànols en DWG amb objectes de cota, o el model a escala real a l'espai model amb els fulls com a presentacions | Cada full és un DWG o DXF de mida completa del paper, amb les cotes com a línies i xifres ([Plànols de disposició general i de muntatge](topic:drawings#download)) |
| Forats NC en tubs rodons, osques en cornières i tubs rodons en fitxers NC | No s'escriuen; vegeu [Camps del fitxer NC](topic:nc1-fields) |
| Biselats, marques i contorns interiors en fitxers NC | Cap avui |
| Forats de cargol, cargols, soldadures i sabates a l'exportació USD | Són a les sortides IFC, NC i llista de materials; vegeu [Exportar el model d'acer com a USD](topic:usd) |
| Importar connexions, sabates, forats allargats o rectangulars i forats en tubs rodons d'un fitxer IFC | {{ui:Importa IFC}} importa bigues, pilars, barres, plaques, quadrícules, nivells, forats rodons, osques, cargols i barres d'armadura, i el seu informe enumera el que n'ha deixat fora |
| Dissenys personalitzats d'informes | Els tres fitxers CSV |

## Taulers

| Encara no | En canvi, avui |
|---|---|
| Moure els informes de la part inferior ({{ui:Problemes}}, {{ui:Llista de materials}}, {{ui:Quadre de doblegat}}) | Només es mouen els taulers {{ui:Model}} i {{ui:Propietats}}. Vegeu [Organitzar els taulers](common:arrange-panels) |

## Treball en equip i desament

| Encara no | En canvi, avui |
|---|---|
| Desament al núvol i sincronització entre ordinadors | Deseu els fitxers `.detailcraft.json` i compartiu-los com qualsevol altre fitxer. El desament al núvol encara no està disponible |
| Cursors d'altres persones i etiquetes "està editant" en una sessió Live TeamWork; quadrícules, nivells i fases fusionats element per element | Les edicions es combinen igualment (quadrícules, nivells i fases s'envien sencers, i guanya el canvi posterior); vegeu [Detallar una estructura junts, en directe](topic:work-live) |
| Enllaços d'invitació a una sessió Live TeamWork per internet | Entreu amb un codi curt a la mateixa xarxa |

## Plataformes

- DetailCraft està pensat per a la pantalla d'un escriptori, d'un portàtil o d'una tauleta. També funciona en un telèfon: el model conserva la pantalla, i els taulers i els informes s'obren com a fulls des d'una barra a la part inferior, però hi ha poc espai per als taulers.
- Per fer-lo servir sense connexió, primer cal desar DetailCraft per a ús sense connexió amb {{ui:Desa per fer-lo servir sense connexió}} a la barra de l'aplicació; un cop mostri {{ui:Disponible sense connexió}}, tot el que fa aquesta versió funciona sense connexió. Vegeu [Treball sense connexió](common:offline).

Si una d'aquestes mancances us bloqueja la feina, feu-nos-ho saber a través de la [pàgina de suport](https://getcadcraft.com/support); ens ajuda a decidir què cal construir després.
