---
title: Règles des repères
summary: Quand exactement deux pièces ou deux assemblages partagent un repère, comment les repères sont numérotés, et comment fonctionnent les repères de semelles et de barres.
keywords: repères, numérotation, repère de pièce, repère d'assemblage, préfixe, tolérance, pièces identiques, repères de barres, repères de semelles
from: ce02c98e
---

DetailCraft recalcule chaque repère après chaque modification. Rien n'est stocké : les repères décrivent toujours le modèle tel qu'il est maintenant. Voir [Vérifier les repères et la nomenclature](topic:marks-and-bom) pour savoir comment les utiliser.

## Repères de pièces

Deux pièces partagent un repère de pièce lorsque toutes ces conditions sont réunies :

1. Le type de pièce (poutre, poteau, contreventement ou platine).
2. Le nom du profilé (sans tenir compte de la casse).
3. Le matériau (sans tenir compte de la casse).
4. La longueur de coupe, à 1 mm près.
5. Chaque trou : face, position le long et en travers, à 1 mm près, et diamètre à 0.1 mm près.
6. Chaque échancrure : extrémité, côté, longueur et profondeur, à 1 mm près.

Le {{ui:Nom}} de l'élément ne compte pas. Ne comptent pas non plus sa position dans le modèle, sa rotation ni le sens dans lequel il a été dessiné, tant que la pièce elle-même est identique.

### Pièces retournées

Une pièce est comparée sous toutes les orientations qui ramènent sa section sur elle-même. Si l'une d'elles la rend identique à une autre pièce, elles partagent un repère.

| Forme | Retournements pris en compte |
|---|---|
| Profilés en I, HSS rectangulaires, platines | Bout pour bout (autour de l'axe vertical), bout pour bout (autour de l'axe horizontal) et à l'envers autour de sa longueur |
| Profilés en U (channels) | Bout pour bout autour de l'axe horizontal uniquement, pour que l'âme reste du même côté |
| Cornières, HSS ronds | Aucun : comparés tels que placés |

Ainsi, une poutre avec un trou près de son extrémité gauche correspond à une poutre ayant le même trou près de son extrémité droite, et un poteau avec des trous dans une semelle correspond à un poteau ayant les mêmes trous dans l'autre semelle.

### Numérotation

| Type | Préfixe de pièce | Préfixe d'assemblage |
|---|---|---|
| Poteau | c | C |
| Poutre | b | B |
| Contreventement | br | BR |
| Platine (placée, platine d'extrémité ou platine de pied) | p | P |

Les repères sont numérotés à partir de 1 pour chaque préfixe. L'ordre est : poteaux, puis poutres, contreventements et platines ; à l'intérieur d'un type, par nom de profilé dans l'ordre naturel (W8x10 avant W12x26) ; puis les pièces les plus longues d'abord.

Comme la numérotation suit cet ordre, l'ajout ou la modification d'une pièce peut décaler les numéros d'autres pièces.

## Repères d'assemblage

- Chaque pièce non soudée à une autre pièce est la pièce principale de son propre assemblage.
- Les platines d'extrémité sont soudées à leur poutre, et les platines de pied à leur poteau ; elles font donc partie de l'assemblage de cet élément.
- Deux assemblages partagent un repère lorsque leurs pièces principales ont le même repère de pièce et que leurs pièces attachées portent les mêmes repères aux mêmes emplacements (à 1 mm près), en autorisant les mêmes retournements que pour la pièce principale.
- Le préfixe d'assemblage suit la pièce principale : une poutre avec deux platines d'extrémité est un assemblage B.

Les platines que vous placez avec l'outil {{ui:Platine}} ne sont soudées à rien : chacune est donc son propre assemblage P.

## Repères de semelles

Les semelles de même longueur, largeur, profondeur, béton, nappe inférieure et aciers de départ partagent un repère : F1, F2 … dans l'ordre de leur placement. La position et la rotation ne comptent pas.

## Repères de barres

Les barres de même dimension, forme et cotes A, B et C (arrondies au millimètre) partagent un repère sur toutes les semelles. Le repère est le numéro de barre, F, puis un compteur par dimension de barre : 5F1, 5F2, 6F1. Une barre dans le sens long et une barre dans le sens court d'une semelle carrée sont la même barre et partagent un repère ; la colonne {{ui:Utilisée pour}} du tableau de ferraillage liste les deux usages.
