---
title: Des d'un altre programari de detallat
summary: Com els hàbits d'un paquet complet de detallat es corresponen amb DetailCraft, i les diferències que fan equivocar els detallistes experimentats.
keywords: canvi, migració, familiar, flux de treball, comparació, diferències, numeració, components, catàleg, plànols, hàbits
from: 39639a5d
---

Si detalleu amb Tekla Structures, la major part de DetailCraft us resultarà familiar: quadrícules, nivells, perfils d'un catàleg, peces i assemblatges, connexions, numeració, fitxers NC, IFC. L'escala és molt diferent: Tekla Structures és un sistema de producció complet, i DetailCraft és una aplicació de navegador petita i incipient que fa algunes feines de principi a fi. Aquesta pàgina us diu on es mantenen els vostres hàbits i on no.

:::tip
Si us sent còmoda la cinta de Tekla Structures, trieu l'estil de menú {{ui:Cinta d'acer}} a {{ui:Configuració}} › {{ui:DetailCraft}} › {{ui:Menús, tecles i ratolí}}: pestanyes Modelatge, Detallat, Edició, Dibuixos, Fabricació i Vista, i el botó del mig desplaça la vista. Si veniu d'AutoCAD i us agrada escriure ordres, {{ui:Dibuix clàssic}} afegeix una línia d'ordres (BEAM, COLUMN, ENDPLATE, ZOOM …). Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse).
:::

## Equivalències ràpides

| Hi esteu acostumat | A DetailCraft |
|---|---|
| Crear quadrícules amb coordenades en un diàleg de quadrícula | {{ui:Quadrícules}} al tauler de l'esquerra: etiquetes i distàncies entre línies, no coordenades absolutes. Les línies amb números van en una direcció, les amb lletres en l'altra |
| Nivells com a coordenades Z de quadrícula | Una llista {{ui:Nivells}} a part, nom i cota per fila, aplicada amb {{ui:Aplica els nivells}} |
| Triar punts en qualsevol lloc amb referències a objectes | Els clics només s'ajusten a les interseccions de quadrícula. Els punts fora de quadrícula s'escriuen al camp {{ui:Extrems (x, y, z mm)}} d'una barra |
| Les ordres de pilar, biga i placa | {{ui:Pilar}} ({{key:C}}), {{ui:Biga}} ({{key:B}}), {{ui:Reforç diagonal}} ({{key:R}}), {{ui:Placa}} ({{key:P}}), {{ui:Sabata}} ({{key:F}}) |
| Diàleg de propietats de la peça (doble clic a una peça) | Un clic: el tauler {{ui:Propietats}} de la dreta sempre és actiu; no hi ha diàleg ni botó Modifica ni Aplica |
| Posició al pla, rotació i configuració de la fondària | {{ui:Posició}} (la part superior de l'acer, centrat o a la part inferior sobre la línia) i {{ui:Rotació (°)}}. No hi ha desplaçaments horitzontals separats |
| El catàleg de perfils | Una llista fixa de 2.311 mides publicades (AISC W, S, C, L, HSS, Pipe; europeus IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS i seccions buides conformades en fred), a més de plaques paramètriques i les vostres seccions de {{ui:Perfil personalitzat}} |
| Catàleg de materials | Set qualitats en una llista: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Aplicar un component de connexió i el seu diàleg | Seleccioneu la biga i trieu {{ui:Plaques d'extrem}}. La configuració apareix al tauler {{ui:Propietats}}. Només hi ha dues connexions (placa d'extrem a ala de pilar, placa de base) |
| Connexió automàtica, o copiar una unió a unions similars | Seleccioneu una connexió i trieu {{ui:Aplica a similars (n)}} |
| Numeració amb sèries i números inicials | Sense ordre: les marques s'actualitzen soles després de cada canvi, amb prefixos fixos c, b, br, p i C, B, BR, P |
| Diàlegs de cargols i de forats | Els forats s'escriuen per cara i posició. Els cargols només surten de les connexions |
| Eines de talla, d'ajust i de retall poligonal | Escopidures (superiors o inferiors, a qualsevol extrem) només en perfils I. Els retalls de connexió són automàtics |
| Informes i plantilles | Tres informes fixos en pestanyes a la part inferior, i descàrregues en CSV |
| Creació de plànols i la llista de plànols | Un plànol de taller per marca de peça, tots fets alhora, vistos abans i baixats com un sol PDF o full a full. No es guarda ni s'edita res |
| Exportació de fitxers NC | {{ui:Fitxers NC}}: un fitxer DSTV per marca de peça, només perfils I i plaques, comprimit en ZIP |
| Exportació IFC | {{ui:IFC}}: IFC4 de tot el model, amb armadura |
| Armadura en qualsevol peça de formigó | Armadura només en sabates rectangulars, amb mides de barra nord-americanes, amb una malla inferior i barres d'arrencada |
| Model desat en una carpeta de projecte, multiusuari | Un fitxer `.detailcraft.json` que baixeu. Un sol usuari, al vostre ordinador |
| Historial de desfer | {{key:Mod+Z}} i {{key:Mod+Y}}, fins a 200 passos, que es mantenen fins que obriu o inicieu un altre model |

## Diferències que fan tropessar la gent

### Les marques canvien soles

No hi ha cap pas de numeració. Les marques es recalculen després de cada canvi, així que sempre són actuals, però també poden renumerar-se: afegiu un pilar i la c3 d'ahir pot ser ara c4. No hi ha cap "historial de numeració" per conservar les marques antigues. Acabeu el model i després emeteu la llista de materials, els fitxers NC i els plànols de taller alhora, des d'un sol fitxer desat.

### El botó del mig del ratolí fa zoom; no desplaça

A la vista 3D: arrossegar amb el botó esquerre gira, arrossegar amb el dret desplaça, la roda fa zoom, i arrossegar amb el botó del mig també fa zoom. Mantenir {{key:Shift}} mentre arrossegueu amb el botó esquerre també desplaça. La roda fa zoom cap al mig de la vista, no cap al punter. No hi ha selecció del centre de rotació: el model gira al voltant del mig de la vista. Vegeu [Moure's per la vista 3D](topic:navigate-3d).

### Els pilars miren en una sola direcció per defecte

Amb rotació 0, les ales d'un pilar miren en la direcció de la quadrícula numerada. Les bigues que van entre línies de quadrícula amb lletres es connecten a l'ànima, i les plaques d'extrem s'hi rebutgen ("Encara no es fan bigues que es connecten a l'ànima d'un pilar"). Gireu aquests pilars 90° abans d'afegir connexions.

### Alçats només en línies amb lletres

{{ui:Alçat}} mira només al llarg de les línies de quadrícula amb lletres. No hi ha vistes al llarg de les línies numerades, ni vistes desades, ni plans de treball. Useu {{ui:3D}} o {{ui:Afegeix per quadrícula}} per als pòrtics en línies numerades.

### Selecció, còpia i desplaçament

Seleccioneu diverses peces amb {{key:Shift}}+clic o {{key:Mod+A}}, i després copieu, retalleu, enganxeu (en una intersecció de quadrícula, amb un desplaçament escrit, o al mateix lloc) i dupliqueu-les, incloses les connexions ([Copia, enganxa i duplica](topic:copy-paste)). No hi ha selecció per finestra, ni filtre de selecció, ni desplaçament, simetria o matriu, i les propietats es canvien una barra cada vegada al tauler {{ui:Propietats}}.

### Les quadrícules no arrosseguen les barres

Les barres mantenen les seves coordenades quan canvieu la distància de la quadrícula; res no es mou amb les línies de quadrícula. Canvieu la quadrícula abans de col·locar l'acer, o editeu després les coordenades de cada extrem de barra.

### Les connexions no es dissenyen

Les dues connexions col·loquen plaques, forats, cargols i soldadures a partir dels números que doneu. No hi ha cap comprovació de disseny, només avisos de vora i de separació (de l'EN 1993-1-8 taula 3.3).

### Els forats no es tallen a la vista 3D

Els forats es veuen com a taps foscos. Són forats reals als fitxers NC, als plànols de taller i al fitxer IFC. Les escopidures sí que es tallen a la vista.

### Els pesos són bruts

El pes de l'acer no descompta forats ni escopidures, i el pes dels cargols no hi és inclòs.

### Només mil·límetres

Tot s'escriu i es mostra en mil·límetres, fins i tot per a perfils AISC. Els noms de perfil mantenen la seva forma publicada (W12x50, HSS6x6x1/4).

### Cap plànol per gestionar

No hi ha llista de plànols, ni editor de plànols, ni plànols de disposició general ni de muntatge. Un plànol de taller es fa quan el demaneu i es baixa; per canviar-lo, canvieu el model i torneu a fer-lo.

### Funciona en un navegador

Desar baixa un fitxer. No es poden fer servir les dreceres de teclat que el navegador reserva per a si mateix. Els vostres models mai no surten del vostre ordinador: vegeu [On van els vostres fitxers](common:your-files).

## Què cal seguir fent al programari actual

Avui DetailCraft és adequat per a pòrtics petits, per comprovar una idea, per a l'ensenyament, o per produir fitxers NC i plànols de taller de feines senzilles de bigues i pilars. Mantingueu les connexions complexes, els plànols de disposició general, els plànols de muntatge, els projectes multiusuari i tot el que es llista a [Què encara no està implementat](topic:not-built-yet) al programari que useu ara.
