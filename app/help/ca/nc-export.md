---
title: Enviar els fitxers NC al taller
summary: Exportar els fitxers NC DSTV de cada marca de peça (perfils I, canals, cornières, HSS i plaques), comprimits en un zip, i revisar-los abans que arribin a una màquina.
keywords: nc, nc1, dstv, cnc, màquina, línia de bigues, línia de perforació, tall de plaques, exportació, fabricació, zip
from: 598b6091
---

DetailCraft escriu un fitxer NC DSTV (`.nc1`) per cada marca de peça, per a perfils I, canals, cornières, HSS rectangular i rodó, i plaques, i els comprimeix tots junts en un zip. Les línies de bigues i les màquines de plaques llegeixen aquests fitxers per serrar, perforar i tallar.

## Exportació

1. Abans de res, netegeu la pestanya {{ui:Problems}}: una connexió que no s'ha pogut construir no afegeix forats.
2. Deseu el model ({{key:Mod+S}}), perquè els fitxers NC coincideixin amb un model desat.
3. Trieu {{ui:NC files}} al grup {{ui:Output}}.
4. El navegador baixa `<name> NC.zip`. La barra d'estat indica quants fitxers conté i enumera les marques que no ha escrit (una cornièra o un tub rodó amb una osca).

Dins del zip, cada fitxer rep el nom de la seva marca de peça: `b1.nc1`, `c1.nc1`, `p1.nc1` … El zip no té compressió i s'obre amb qualsevol eina per a fitxers zip.

Si el model no té cap peça, la barra d'estat ho indica.

## Contingut de cada fitxer

- **Capçalera (ST):** el nom del model com a comanda, la marca de peça com a plànol i peça, la fase 1, la qualitat de l'acer, la quantitat, el perfil i les seves dimensions, la massa per metre i la superfície de pintura per metre. Els talls de serra són a escaire.
- **Contorns exteriors (AK):** el contorn de l'ànima amb les osques fetes, i el de cada ala escurçat on una osca la treu.
- **Forats (BO):** cada forat amb la seva cara, posició i diàmetre, inclosos els forats fets per les plaques d'extrem i les plaques de base.

Camp per camp, amb les regles de cara i coordenades: [Camps del fitxer NC](topic:nc1-fields).

## Què no s'escriu

- Cornières i tubs rodons amb una osca: no hi ha fitxer NC. Les seves marques apareixen llistades a la barra d'estat.
- Forats en tubs rodons (DetailCraft no n'hi fa cap).
- Biselats, contorns interiors, marques de peça (traçat) i angles de serra que no siguin a escaire.
- Forats allargats (DetailCraft només té forats rodons).

## Revisió abans de mecanitzar

Els fitxers NC de DetailCraft es verifiquen amb la seva pròpia suite de proves, però no s'han executat a les màquines del vostre taller.

1. Obriu els fitxers amb el visor NC del vostre taller o amb el programari de la màquina i compareu-los amb els plànols de taller.
2. Comproveu a la màquina una peça de cada tipus abans d'executar un lot.
3. Comproveu com el vostre programari llegeix les coordenades y de les ales i les cares dels canals: DetailCraft mesura la y de l'ala des de la vora posterior, i col·loca els canals sobre l'esquena, tal com els dibuixa la norma (vegeu [Camps del fitxer NC](topic:nc1-fields#faces-and-coordinates)).
