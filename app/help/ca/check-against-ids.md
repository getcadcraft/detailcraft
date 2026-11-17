---
title: Comprova l'exportació IFC amb el IDS d'un client
summary: Carregueu el fitxer .ids que us han donat i vegeu a Problemes cada peça exportada que no el compleix, abans d'enviar l'IFC.
keywords: ids, information delivery specification, buildingsmart, requisits, lliurament, comprovació, validació, control de qualitat, exportació ifc, propietat, material, compres
from: 50d0f785
---

## Què farà

Un IDS (Information Delivery Specification, una norma de buildingSMART) és la llista del que ha de contenir un IFC. DetailCraft comprova l'IFC que exportaria (el mateix fitxer que escriu {{ui:IFC}}) amb el IDS que us han donat, i llista cada peça que no hi arriba.

## Passos

1. Obriu o dibuixeu el model.
2. Feu clic a {{ui:Comprova amb IDS…}} al grup {{ui:Sortida}} de la barra d'eines.
3. Feu clic a {{ui:Carrega un fitxer .ids…}} i trieu el fitxer. No es puja res.
4. Llegiu el resultat: cada especificació amb {{ui:Supera}} o {{ui:Falla}} i quants elements aplica.
5. Obriu Problemes ({{key:Ctrl+Shift+M}}) i feu clic en una fallada: la barra, la connexió, l'escala o la sabata d'on ve queda seleccionada i la vista fa zoom sobre ella.

## Què hauríeu de veure

- Un avís per cada element exportat i requisit que no compleixi, amb el nom de l'especificació, el que demana el IDS i el que té l'exportació.
- L'informe de comprovació (a Problemes) comença pel IDS: títol, versió, autor i els recomptes de cada especificació.

## Bon a saber

- El IDS es desa al fitxer del model, així que es torna a comprovar en obrir el model. Carregar-lo o oblidar-lo és un sol pas que es pot desfer.
- Cada canvi es torna a comprovar un moment després; en un model gran, la comprovació triga una mica més entre execucions.
- Els GlobalId de l'exportació surten del nom del model i dels números de peça dins de DetailCraft, de manera que es mantenen iguals d'una comprovació a la següent. Canviar el nom del model dona un GlobalId nou a cada element.
- Els números es comparen en unitats SI (l'exportació és en mil·límetres; les longituds es converteixen a metres primer).

- Els patrons del IDS es llegeixen com el valor sencer. Un `^` al principi i un `$` al final també es prenen com a "el valor sencer", tal com la majoria de fitxers IDS ho volen dir.

## Següent

- [Exporta IFC](topic:ifc-export)
