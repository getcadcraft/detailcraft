---
title: Resolució de problemes
summary: Què signifiquen els missatges de DetailCraft i què cal fer, des d'una vista 3D que no apareix fins a connexions que no es poden construir.
keywords: problema, error, no funciona, ajuda, solució, missatge, rebutjat, webgl, en blanc, avís, no es pot, incidència
from: f8c3b2b1
---

La majoria de rebutjos s'expliquen a la barra d'estat, a la part inferior de la pantalla, o a la pestanya {{ui:Problemes}}. Llegiu-los primer. Els missatges següents es citen tal com els mostra DetailCraft.

## Falta la vista 3D

**"Aquest navegador no ha pogut iniciar els gràfics 3D (WebGL). El model, els informes i les exportacions continuen funcionant."**

El navegador no ha pogut iniciar WebGL, els gràfics 3D amb què dibuixa DetailCraft.

1. Actualitzeu el navegador a la darrera versió.
2. Activeu l'acceleració per maquinari i reinicieu el navegador (vegeu més avall).
3. Actualitzeu el controlador gràfic o proveu un altre navegador. Els escriptoris remots i les màquines virtuals sovint no tenen WebGL.
4. Mentrestant podeu continuar treballant: col·loqueu barres amb el formulari {{ui:Afegeix per quadrícula}}, llegiu els informes i exporteu. Només fer clic a la vista necessita WebGL.

:::chromium
Per activar l'acceleració per maquinari, obriu **Configuració, Sistema** i activeu **Utilitza l'acceleració gràfica quan estigui disponible**, i després reinicieu-lo.
:::

:::firefox
Per activar l'acceleració per maquinari, obriu **Configuració, General, Rendiment**, desmarqueu **Utilitza la configuració de rendiment recomanada** i marqueu **Utilitza l'acceleració per maquinari quan estigui disponible**. Reinicieu Firefox.
:::

:::safari
El Safari té WebGL activat per defecte. Actualitzeu macOS si la vista encara no s'inicia i comproveu que cap extensió no la bloquegi.
:::

Més informació a [Navegadors i ordinadors](common:browsers).

## Fer clic a la vista no fa res

- **No hi ha cap intersecció a prop del clic.** Les eines de col·locació només s'ajusten a les interseccions de la quadrícula. Un clic lluny de tots els punts no fa res. Acosteu-vos fins que el punt s'il·lumini.
- **L'eina és {{ui:Selecciona}} i heu fet clic en un espai buit.** Això neteja la selecció.
- **Heu arrossegat.** Si premeu i deixeu anar a més de pocs píxels de distància, és un arrossegament: gira o desplaça la vista.
- **La peça és retallada.** A {{ui:Planta}} i {{ui:Alçat}}, l'acer fora del tall queda amagat i no es pot fer clic. Canvieu a {{ui:3D}}.
- **La intersecció és a un nivell incorrecte.** A {{ui:3D}}, les interseccions de diversos nivells poden superposar-se a la pantalla; el clic pren la més propera. Useu {{ui:Planta}} o {{ui:Alçat}}.

## Missatges de col·locació

| Missatge | Què cal fer |
|---|---|
| No hi ha cap nivell per sobre del Nivell 2 que el pilar pugui assolir. Afegiu primer un nivell. | Afegiu un nivell a {{ui:Nivells}}, o feu clic en un nivell inferior |
| Trieu una altra intersecció per a l'altre extrem. | Heu fet clic dues vegades al mateix punt |
| Els dos extrems són el mateix punt. | A {{ui:Afegeix per quadrícula}}, les seleccions "Des de" i "Fins a" són les mateixes |
| Afegiu línies de quadrícula a l'esquerra per col·locar barres. | El model no té línies de quadrícula en una direcció |
| Perfil desconegut "…" | El perfil no és al catàleg ni als perfils personalitzats del model. Trieu-ne un de la llista |
| Escriviu un número. | Un camp numèric s'ha deixat buit o té text |

## Les connexions no es construeixen

### "Aquesta biga no acaba en una línia de pilar."

Les plaques d'extrem necessiten que l'extrem de la biga estigui exactament sobre la línia d'un pilar vertical, entre la seva base i el seu cap (dins d'1 mm). Comproveu {{ui:Extrems (x, y, z mm)}} de la biga i la posició del pilar.

### "Aquesta biga arriba a l'ànima d'un pilar o en angle"

O a {{ui:Problemes}}: "Les bigues que entren a l'ànima d'un pilar encara no estan implementades: gireu el pilar 90° o useu una altra connexió."

La biga entra a l'ànima del pilar. Seleccioneu el pilar i definiu {{ui:Rotació (°)}} a 90, i després torneu-ho a provar. Les unions esbiaixades encara no estan implementades.

### "Les plaques d'extrem només es construeixen per a bigues horitzontals (aquesta biga està inclinada)."

Els dos extrems de la biga han d'estar a la mateixa alçada.

### "Les plaques d'extrem necessiten la biga en posició normal (rotació 0)."

Torneu a definir la {{ui:Rotació (°)}} de la biga a 0.

### "Les plaques d'extrem necessiten una biga en I." / "Les plaques d'extrem necessiten un pilar en I."

Només els perfils en I (W, IPE, HEA, HEB o un perfil en I personalitzat) admeten plaques d'extrem.

### "L'extrem de la biga ja no és sobre la línia del pilar."

Heu mogut la biga o el pilar després d'afegir la connexió. Torneu-lo a posar al seu lloc, o suprimiu la connexió.

### "Les connexions retallen aquesta barra fins a no deixar res."

Les connexions dels dos extrems retallen la barra més enllà de la seva longitud, per exemple una biga molt curta entre dos pilars alts. Comproveu els extrems de la barra i el gruix de la placa.

### "Cap altra unió com aquesta … no té connexió."

{{ui:Similar}} només copia a les unions amb el mateix perfil de biga, el mateix perfil de pilar i el mateix tipus de connexió (biga a una ala) que encara no tenen cap connexió.

### "Els dos extrems ja tenen connexions." / "Aquest pilar ja té una placa de base."

Seleccioneu la connexió existent per canviar-la, o suprimiu-la primer.

## Avisos a la pestanya Problemes

Els avisos no impedeixen que una connexió o una fonamentació es construeixi; demanen que la comproveu. Els de distància al cantell i d'espaiat fan servir els mínims de la taula 3.3 de l'EN 1993-1-8 (distància al cantell 1.2 × forat, pas 2.2 × forat, entreeix 2.4 × forat). Si el projecte fa servir altres regles, l'avís pot no aplicar-se; DetailCraft no dimensiona les connexions.

"un forat és fora de l'extrem de la peça" vol dir que la x d'un forat és inferior a 0 o superior a la longitud de tall. Recordeu que la x es mesura des de l'inici del tall, després que les connexions hagin retallat la peça.

## Els canvis a la fonamentació es rebutgen

| Missatge | Què cal fer |
|---|---|
| El recobriment no deixa espai per a barres en aquesta fonamentació. | Feu la fonamentació més gran o el recobriment més petit |
| La fonamentació és massa poc profunda per a dues capes de barres dins del recobriment. | Feu-la més profunda o reduïu el recobriment |
| Les barres d'arrencada no caben dins la fonamentació amb un recobriment de 75 mm. | Menys barres d'arrencada, espaiat més estret, o una fonamentació més gran |
| L'espaiat de les barres ha de ser de 50–1000 mm. | Escriviu un espaiat dins d'aquest interval |
| La longitud ha de ser de 300–50000 mm. | Les mides de les fonamentacions tenen límits: longitud i amplada de 300 a 50000, fondària de 150 a 10000 |

## Les quadrícules i els nivells es rebutgen

| Missatge | Què cal fer |
|---|---|
| Quadrícules numerades: doneu un espaiat entre cada parell de línies (4). | Compteu els intervals: cinc línies necessiten quatre espaiats |
| Quadrícules amb lletres: els espaiats han de ser mil·límetres positius. | Sense zeros, negatius ni text |
| Quadrícules numerades: les etiquetes de quadrícula han de ser diferents. | Dues línies tenen la mateixa etiqueta |
| Com a màxim 60 línies de quadrícula en cada direcció. | Dividiu el model |
| Cal mantenir com a mínim un nivell. | S'han suprimit totes les files de nivell |
| Cada nivell necessita un nom. / Dos nivells es diuen "…". | Doneu a cada nivell un nom diferent |

## L'obertura d'un fitxer falla

| Missatge | Causa |
|---|---|
| DetailCraft obre els seus propis models (.detailcraft.json). La importació d'IFC encara no està implementada. | El fitxer no és un fitxer `.json` |
| Això no és un model de DetailCraft (no és JSON). | El fitxer està malmès o és un altre JSON |
| Això no és un model de DetailCraft. | Un fitxer JSON d'un altre programa |
| Aquest model l'ha desat una versió més nova de DetailCraft (format 2). | Obriu-lo amb la versió més nova de DetailCraft que l'ha desat |
| Aquest fitxer és massa gran per ser un model de DetailCraft. | Més de 50 MB |

Quan un fitxer s'obre amb avisos com "2 barres no eren vàlides i s'han deixat fora.", la resta del model és correcta. No el deseu sobre l'original fins que hàgiu comprovat què s'ha deixat fora.

## Exportacions

| Missatge | Causa |
|---|---|
| Encara no hi ha res per exportar. | {{ui:IFC}} amb un model buit |
| No hi ha peces en I ni plaques per escriure fitxers NC. | Només hi ha perfils en U, angles o tubs al model |
| No escrit (fins ara només perfils en I i plaques): … | Aquestes marques no són perfils en I ni plaques; la resta s'ha escrit |
| No hi ha fonamentacions, per tant no hi ha barres per al quadre de doblegat. | {{ui:Doblegat}} sense fonamentacions |
| … caràcter(s) fora del tipus de lletra del PDF impresos com a "?". | El nom del model o una qualitat tenen caràcters que el tipus de lletra del PDF no té |

{{ui:Plànol de taller}} apareix desactivat: el model encara no té peces.

## Les baixades no apareixen

Cada desament i exportació és una baixada del navegador. Comproveu la llista de baixades del navegador. Si el navegador pregunta abans de baixar diversos fitxers, o bloqueja les baixades d'aquest lloc, permeteu-les. Al Safari, comproveu el botó de baixades de la barra d'eines.

## Les tecles no fan res

- El cursor és en un camp de text o de número: les tecles d'eina i {{key:Delete}} s'ignoren allà perquè pugueu escriure. Premeu {{key:Tab}} o feu clic a la vista.
- Hi ha un diàleg obert: tanqueu-lo primer.
- El navegador té el teclat (per exemple, la barra d'adreces): feu clic dins de DetailCraft.
- {{key:Ctrl+Shift+F}} fa servir Control fins i tot en un Mac.

## Problemes sense connexió

El botó {{ui:Desa per fer-lo servir sense connexió}} de la barra de l'aplicació mostra l'estat de la còpia sense connexió. Com funciona el desament: [Treballar sense connexió](common:offline).

| El botó diu | Què vol dir | Què cal fer |
|---|---|---|
| {{ui:Desa per fer-lo servir sense connexió}} | Encara no hi ha cap còpia sense connexió en aquest navegador | Trieu-lo amb connexió |
| Desant 5 de 20 | El desament és en curs | Espereu {{ui:Disponible sense connexió}}; deixeu la pestanya oberta |
| {{ui:Disponible sense connexió}} | DetailCraft, la seva vista 3D, totes les exportacions i aquesta ajuda funcionen sense connexió | Res. Feu-hi clic per a {{ui:Torna a desar (obté la versió més recent)}} o {{ui:Elimina la còpia sense connexió}} |
| {{ui:No s'ha pogut desar}} | Alguns fitxers no s'han baixat | Comproveu la connexió i feu-hi clic per tornar-ho a provar |
| {{ui:Mode sense connexió no disponible}} | Aquesta finestra no pot mantenir una còpia sense connexió: les finestres privades i alguns ordinadors gestionats ho bloquegen | Useu una finestra normal, o treballeu en línia |

Si esteu sense connexió i el botó no diu {{ui:Disponible sense connexió}}, no recarregueu ni tanqueu la pestanya: el que ja s'ha carregat continua funcionant. Deseu el model amb {{key:Mod+S}} i espereu fins a tornar a tenir connexió.

## Canvis sense desar

Si el navegador pregunta si voleu sortir de la pàgina, DetailCraft té canvis sense desar. Trieu quedar-vos-hi i després premeu {{key:Mod+S}}. DetailCraft no pot recuperar un model després de tancar la pestanya.

## Encara no ho heu resolt

Anoteu què heu fet i el missatge exacte, i informeu-nos a través de la [pàgina de suport](https://getcadcraft.com/support).
