---
title: Comprovacions de constructibilitat
summary: Problemes per a les coses que un detallista detecta a ull: un cargol que una clau no pot arribar, cargols massa junts per al vas, cordons d'angle fora dels seus límits de mida, cordons que una torxa no pot arribar, i tubs que retenen aigua.
keywords: constructibilitat, clau, vas, accés al cargol, apriet, mida del cordó, cordó d'angle, cordó mínim, cordó màxim, aigua, forat de ventilació, forat de drenatge, galvanització, perfil buit, problemes
from: 72315151
---

DetailCraft busca quatre tipus de problema que cap comprovació de resistència troba, i els llista al tauler {{ui:Problemes}}. Són avisos i notes per revisar, no errors: el model es construeix igualment.

## Un cargol que una clau no pot arribar

Per a cada cargol, DetailCraft posa un vas sobre el cap i sobre la femella. El vas és un cilindre tan ample com la femella mesurada entre cantonades més una paret de 4 mm, de 60 mm de llarg. Si una ànima de biga, una ala, una placa o un reforç queda dins d'aquest cilindre, el problema indica la connexió, quants cargols, quina peça hi és al mig i a quina distància del cargol.

El vas és un vas d'impacte típic. Una clau de boca necessita menys espai, i una eina més gran en necessita més. Demaneu al vostre assistent connectat que executi `constructability_check` amb un altre `socketLength` per veure com canvia la resposta.

## Cargols massa junts per al vas

Un vas sobre un cargol no ha de tocar el cap del següent. Els cargols d'una connexió que són més a prop que l'amplada del vas més el cap del veí es llisten amb la separació trobada i la separació necessària.

## Mides de cordó d'angle

La taula J2.4 de l'AISC 360-16 fixa el cordó d'angle més petit segons el gruix de la peça més prima (3 mm fins a 6.35 mm de gruix, 5 mm fins a 12.7, 6 mm fins a 19.05, 8 mm per sobre), i la J2.2b el més gran al llarg d'una vora de material: no més gran que el material quan és més prim que 6.35 mm, en cas contrari 1.6 mm menys. Les connexions amb la mateixa mida sobre el mateix gruix es llisten com un sol problema.

El gruix usat és la peça més prima que anomena el cordó, així que un cordó de 8 mm tot al voltant d'una biga amb una ànima de 6.35 mm es llista.

## Aigua i ventilació

- Un **extrem superior obert** d'un perfil buit que està vertical o inclinat més de 10° deixa entrar la pluja.
- Un perfil buit **tancat pels dos extrems** necessita un forat de ventilació i un de drenatge; tant la galvanització en calent com la pressió de l'aire escalfat en demanen un.

## Hi arriba el soldador?

Un cordó d'angle es fa amb la torxa a mig camí entre les dues cares que uneix. Per a cada cordó d'angle de tot el voltant (una placa d'extrem, una placa de base, una placa d'inglet), la comprovació pren el contorn de la secció de la barra a la placa i, cada 20 mm, executa un recorregut de la torxa cap enfora a 45° des d'on la seva boquilla (radi de 10 mm al principi) deixa lliures les dues cares, per 30 mm més. Si el recorregut troba l'ala de la pròpia biga o una altra peça, aquesta part del cordó es llista amb la peça i la distància. Aquests números són típics, no els d'una norma: demaneu al vostre fabricant el procés i la boquilla. Els cordons al llarg de dues vores (una pestanya de cisallament) no es localitzen i no es comproven.
