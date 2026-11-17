---
title: Revisa les marques i la llista de materials
summary: Llegeix les marques de peça i de conjunt que DetailCraft dona a cada peça, revisa la llista de materials i baixa-la en CSV.
keywords: marques, numeració, marca de peça, marca de conjunt, marca de la peça, ldm, bom, llista de materials, pesos, llista de cargols, csv
from: caa2ee80
---

DetailCraft marca el model per si mateix. No hi ha cap ordre de numeració i no cal executar res: després de cada canvi calcula quines peces són la mateixa peça d'acer i els dona una sola marca.

## On es mostren les marques

- La llista {{ui:Marques de peça}} del tauler {{ui:Model}}: cada marca amb el seu perfil, llargada i recompte. Feu clic en una per seleccionar la primera peça amb aquesta marca.
- El tauler {{ui:Propietats}} d'una barra seleccionada (i la llista **Marques de peça** del tauler de l'esquerra): {{ui:Marca de peça}} i {{ui:Conjunt}}. La capçalera del tauler també porta la marca, per exemple "Biga b1".
- La pestanya {{ui:Llista de materials}}, el CSV, els noms dels fitxers NC, els plànols de taller i l'exportació IFC (com a etiqueta de cada element).

## Com es marquen les peces

- **Marques de peça:** c per a columnes, b per a bigues, br per a reforços, st per a limons d'escala, p per a plaques (incloses les plaques d'extrem i les de base). Després, un número: c1, c2, b1, p1 … Quan les peces són en més d'una fase, el número de fase va primer, per exemple 2-b1.
- **Marques de conjunt:** C, B, BR o P. Un conjunt és una barra principal i les plaques soldades a ella, com una biga amb les seves dues plaques d'extrem, o una columna amb la seva placa de base.
- Dues peces comparteixen marca quan tenen el mateix perfil, material i llargada de tall, i els mateixos forats i entalladures, tot dins d'1 mm, encara que una estigui girada de cap a cap o del revés respecte de l'altra.
- La numeració va primer per a les columnes, després per a les bigues, els reforços i les plaques; dins de cada grup, per nom de perfil, i després la més llarga primer.

Les regles completes, incloent quins girs compten per als perfils en U i les cantoneres: [Regles de marques](topic:mark-rules).

:::warning
Les marques es tornen a calcular després de cada canvi, així que es poden renumerar. Afegir una peça, canviar un perfil o afegir un forat pot passar b3 a b4. Considereu les marques definitives només quan el model estigui acabat, i feu la llista de materials, els fitxers NC i els plànols de taller a partir del mateix model desat.
:::

## Llegiu la llista de materials

Obriu la pestanya {{ui:Llista de materials}} a la part inferior. Té tres taules.

**Peces**, amb el pes total d'acer a la capçalera:

| Columna | Significat |
|---|---|
| Marca de peça | Feu clic per seleccionar la primera peça amb aquesta marca |
| Tipus | biga, columna, reforç, limó o placa |
| Perfil | Per exemple W16x26 o PL20x180 |
| Material | La qualitat que heu definit |
| Llargada (mm) | Llargada de tall, després de les connexions |
| Recompte | Quantes |
| Pes unitari (kg) | Massa del perfil per metre × llargada |
| Pes total (kg) | Pes unitari × recompte |

L'última fila dona el recompte i el pes totals.

**Conjunts:** cada marca de conjunt, la seva peça principal, totes les seves peces (per exemple "b1 + p1 + p1"), recompte, pes unitari i pes total.

**Cargols i ancoratges:** agrupats per tipus, diàmetre, longitud i qualitat, amb un recompte.

:::note
Els pesos són bruts: no es descompten els forats ni les entalladures. Els cargols, les femelles, les volanderes i les soldadures no són dins del pes d'acer.
:::

## Baixa-la

Trieu {{ui:Baixa CSV}} a la pestanya, o {{ui:LdM}} al grup {{ui:Sortida}}. El fitxer `<name> BOM.csv` conté les tres taules una darrere l'altra, cadascuna sota el seu títol, amb una línia en blanc entre elles. S'obre amb qualsevol programa de fulls de càlcul.

## Comproveu abans d'enviar

1. Obriu la pestanya {{ui:Problemes}} i resoleu cada línia. Una connexió que no es pot construir no afegeix cap placa, forat ni cargol, així que la llista de materials quedarà curta.
2. Busqueu marques que no esperàveu. Dues bigues que creieu iguals però amb marques diferents solen diferir per un forat, una entalladura o una llargada de tall; seleccioneu cadascuna i compareu-les.
3. Deseu el model, i després feu totes les exportacions a partir de l'estat desat.
