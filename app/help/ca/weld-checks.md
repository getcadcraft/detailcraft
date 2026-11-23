---
title: Comprova les soldadures on es troben les barres
summary: Després de la comprovació de disseny, prova les soldadures de cordó d'angle i a topall per tot el perímetre de cada barra on es troba amb una altra barra o amb un suport, segons AISC 360-16 capítol J o EN 1993-1-8, i veu quin grup de soldadures és el més utilitzat i amb quina combinació. Una ajuda fins que un enginyer l'hagi revisat.
keywords: soldadura, soldadures, comprovació de soldadures, soldadura de cordó d'angle, soldadura a topall, penetració completa, AISC 360, EN 1993-1-8, grup de soldadures, utilització, aprofitament, capacitat, unió, connexió, estructural, enginyer
from: e8eebbe6
---

El bloc {{ui:Comprovacions de soldadures}} de la pestanya {{ui:Anàlisi}}, sota {{ui:Comprovacions de disseny}}, pren els esforços de l'últim pòrtic resolt i les combinacions de resistència que heu fet, i prova la soldadura per tot el perímetre de cada barra a cada unió: on una barra es troba amb una altra barra o descansa sobre un suport.

:::warning
És una **ajuda fins que un enginyer l'hagi revisat**. Comprova una soldadura dibuixada per tot el perímetre de la secció, com a un sol grup, a partir dels esforços d'extrem del mateix pòrtic. No llegeix la mida ni la longitud de les soldadures que heu dibuixat als plànols de taller, i no comprova cargols, plaques, resistència a l'aixafament, tallant en bloc ni efecte palanca. Els seus resultats no són un segell.
:::

## Com s'executa

1. Resoleu el pòrtic a la pestanya {{ui:Anàlisi}} i trieu un {{ui:Codi de disseny}} a {{ui:Comprovacions de disseny}}, i després premeu {{ui:Fes les combinacions}} (la comprovació de soldadures necessita les mateixes combinacions de resistència).
2. A {{ui:Comprovacions de soldadures}}, definiu la {{ui:Cama del cordó d'angle (mm, 0 = la paret, com a màxim 8)}}. 0 vol dir que la cama segueix la paret més fina de la secció, fins a 8 mm. Amb el codi AISC, {{ui:Resistència del metall d'aportació F_EXX (MPa)}} és la resistència del metall d'aportació (482.6 MPa és un elèctrode E70). Amb l'EN 1993, la qualitat de l'acer dóna la resistència del metall d'aportació i el factor de correlació.
3. Premeu {{ui:Comprova les soldadures}}.

Cada línia de la taula és un grup de soldadures (un extrem d'unió d'una barra). Els números són la **utilització** de la seva comprovació que regeix, l'estat (compleix o no compleix), i quina comprovació i quin article han regit, i en quina combinació. Un grup que la comprovació no pot jutjar ho indica (sense qualitat d'acer, sense factor de correlació per a la qualitat a la taula 4.1 de l'EN 1993-1-8, sense soldadura en aquesta secció), en lloc de mostrar un número.

Si canvieu la cama o el metall d'aportació, o editeu el model, la taula s'esborra: era per als valors antics. Torneu a premer {{ui:Comprova les soldadures}}.

## Què es comprova

- **ASCE 7 + AISC 360:** metall de soldadura de cordó d'angle (compta l'angle de la càrrega respecte a la soldadura, J2.4), trencament per tallant del metall base (J4.2), i soldadures a topall de penetració completa (taula J2.5).
- **EN 1990 + EN 1993:** soldadures de cordó d'angle pel mètode simplificat de l'EN 1993-1-8 4.5.3.3 i soldadures a topall des de 4.7.1.
- Avisos de detallat contra la cama mínima i màxima i la longitud mínima, amb el valor amb què es van comparar.

El grup de soldadures es tracta com una secció lineal i es carrega pel mètode vectorial elàstic: cada part de la soldadura pren la força de l'esforç axial de la barra, els dos tallants, la torsió i els dos moments flectors, sumats com a vectors.

## Què no es comprova

Les soldadures de penetració parcial, els cordons oblics, les soldadures de tap i de ranura, les soldadures intermitents, el mètode del centre instantani, el mètode direccional de l'EN, la fatiga i el tallant en bloc del metall base no estan implementats. Algunes constants de les normes s'han escrit a partir de les normes i encara no s'han comparat amb una còpia impresa; l'informe indica d'on ve cada número (el {{ui:Informe (PDF)}} incorpora les taules de soldadures quan ja n'heu fet la comprovació). Vegeu [Comprova les barres d'acer](topic:design-checks) i [Encara no implementat](topic:not-built-yet).
