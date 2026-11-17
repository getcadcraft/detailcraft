---
title: Ajouter des trous et des découpes
summary: Saisir des trous dans les âmes, ailes et platines, et découper les ailes à une extrémité de poutre, mesurés depuis l'extrémité coupée de la pièce.
keywords: trou, trous, trou de boulon, découpe, encoche, coupe, découpage, percer, poinçonner, trou dans l'âme, trou dans l'aile
from: 33d12398
---

Les trous et les découpes se saisissent par position. Ils appartiennent à la barre et la suivent dans ses déplacements.

Les trous créés par les assemblages (platines d'extrémité, platines d'assise) sont ajoutés automatiquement ; vous ne les saisissez pas. Ils sont listés sous la forme « … trous issus des assemblages (modifier l'assemblage) ».

## Origine des positions

- **x** se mesure le long de la pièce, depuis son **début de coupe** : l'extrémité de départ après la coupe éventuelle de l'assemblage. Ainsi x = 0 est l'extrémité réelle de l'acier, et non le point de trame.
- **y** se mesure sur la face, depuis le centre de la section :
   - sur l'**âme** : vers le haut (positif) ou vers le bas à partir de la mi-hauteur ;
   - sur une **aile** ou une **platine** : en travers, à partir de l'axe de la largeur.
- Le début de la barre est le premier point sur lequel vous avez cliqué lors de sa pose. Les lignes {{ui:Ends (x, y, z mm)}} indiquent quelle extrémité est laquelle.

## Ajouter un trou

1. Sélectionnez la barre.
2. Dans la zone {{ui:Holes}} du panneau {{ui:Properties}}, choisissez la {{ui:Face}} : {{ui:Web}}, {{ui:Top flange}} ou {{ui:Bottom flange}} (pour un profilé en I, un U ou un tube rectangulaire), ou {{ui:Plate face}} (pour une platine).
3. Saisissez {{ui:x along (mm)}}, {{ui:y across (mm)}} et {{ui:Diameter (mm)}}. Le formulaire démarre avec x 100, y 0, diamètre 22.
4. Choisissez {{ui:Add hole}}.

La barre d'état indique « Trou ajouté. x est mesuré depuis le début de coupe ; y depuis le centre de la section (âme : vers le haut, aile ou platine : en travers). » Le trou apparaît dans la liste et, dans la vue, sous la forme d'un bouchon sombre traversant la face.

Pour supprimer un trou, choisissez la × à côté de lui dans la liste.

Les cornières et les tubes ronds ne reçoivent pas encore de trous : leur zone {{ui:Holes}} l'indique.

:::note
Dans la vue 3D, les trous sont dessinés sous forme de bouchons sombres, et non percés dans l'acier. Ce sont de véritables trous dans les fichiers NC, les plans d'atelier et l'export IFC.
:::

Un trou dont x dépasse l'une des extrémités de la pièce s'affiche dans l'onglet {{ui:Problems}} sous la forme « un trou est hors de l'extrémité de la pièce ».

## Ajouter une découpe

Les découpes concernent les profilés en I : elles enlèvent l'aile supérieure ou inférieure (et la hauteur d'âme correspondante) à une extrémité, pour que la poutre dégage une autre barre.

1. Sélectionnez une barre en I.
2. Dans la zone {{ui:Copes}}, choisissez {{ui:End}} ({{ui:Start}} ou {{ui:End}}) et {{ui:Side}} ({{ui:Top}} ou {{ui:Bottom}}).
3. Saisissez {{ui:Length (mm)}} (le long de la poutre depuis cette extrémité) et {{ui:Depth (mm)}} (vers le bas depuis le dessus, ou vers le haut depuis le dessous). Le formulaire démarre avec 100 x 40.
4. Choisissez {{ui:Add cope}}.

La vue montre la découpe dans l'acier. La liste indique par exemple « Dessus au début : 100 x 40 ». Supprimez-la avec sa ×.

Les découpes sont carrées : il n'y a pas encore de rayon dans l'angle intérieur.

## Effet des trous et des découpes sur les repères

Deux pièces ne reçoivent le même repère de pièce que si leurs trous et découpes concordent à 1 mm près, en tenant compte de la pièce retournée. Ajouter un trou à une barre d'un groupe lui donne un nouveau repère. Voir [Règles de repérage](topic:mark-rules).
