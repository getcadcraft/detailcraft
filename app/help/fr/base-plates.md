---
title: Ajouter des platines de pied et des tiges d'ancrage
summary: Placer une platine de pied soudée avec quatre tiges d'ancrage sous un poteau, régler ses dimensions et la copier sur chaque poteau semblable.
keywords: platine de pied, platine de base, tiges d'ancrage, boulons d'ancrage, boulons de fixation, pied de poteau, boulons de fondation, semblable
from: 619ebc64
---

Une connexion par platine de pied place une platine sous le poteau, raccourcit le poteau de l'épaisseur de la platine, soude les deux ensemble et ajoute quatre tiges d'ancrage qui passent par des trous de la platine.

:::warning
Les dimensions sont des valeurs de départ, pas un dimensionnement. DetailCraft ne vérifie ni la portance, ni la résistance des tiges, ni l'ancrage dans le béton.
:::

## Ajouter une platine de pied

1. Choisissez {{ui:Sélectionner}} ({{key:V}}) puis cliquez sur un poteau. Il doit être vertical.
2. Choisissez {{ui:Platine de pied}} dans le groupe {{ui:Connexions}}, ou {{ui:Ajouter une platine de pied}} dans le panneau {{ui:Propriétés}}.
3. La barre d'état indique « Platine de pied ajoutée avec quatre tiges d'ancrage. » La nouvelle connexion est sélectionnée.

Un poteau ne peut avoir qu'une platine de pied. S'il en a déjà une, la barre d'état indique « Ce poteau a déjà une platine de pied. »

## Modifier la platine

Sélectionnez la platine de pied (cliquez sur la platine ou sur une tige). Sous {{ui:Platine, boulons et soudure (mm)}} :

| Paramètre | Valeur par défaut | Effet |
|---|---|---|
| Épaisseur de la platine | 25 | Le poteau est raccourci de cette valeur |
| Longueur de la platine | 450 | Selon la profondeur du poteau |
| Largeur de la platine | 400 | En travers du poteau |
| Diamètre de tige | 20 | Dimension de la tige d'ancrage |
| Diamètre du trou | 33 | Trou dans la platine |
| Classe du boulon | F1554 Gr 36 | Classe de la tige, en texte |
| Entraxe des tiges (selon la profondeur) | 350 | Entre les axes des tiges, selon la longueur de la platine |
| Entraxe des tiges (en travers) | 300 | Entre les axes des tiges, en travers |
| Dépassement des tiges au-dessus de la platine | 100 | Du dessus de la platine au sommet de la tige |
| Ancrage des tiges sous la platine | 450 | Du dessous de la platine jusque dans le béton |
| Dimension du cordon d'angle | 8 | Tout autour du pied du poteau |
| Matériau de la platine | A36 | Texte |
| Jeu de scellement | 0 | Espace entre le dessus du béton et le dessous de la platine |
| Raidisseurs | Aucun | Choisir Aucun, 2 (dans l'axe de l'âme) ou 4 (aussi perpendiculaires à celle-ci) ; voir ci-dessous |
| Épaisseur, hauteur des raidisseurs | 12, 150 | |
| Profondeur de la bêche | 0 | Distance dont la bêche descend sous la platine ; 0 = pas de bêche |
| Épaisseur, largeur de la bêche | 25, 150 | |
| Rondelles plates | Aucune | Sur chaque tige, ou aucune |
| Dimension, épaisseur de la rondelle | 0, 0 | 0 = le minimum de l'AISC Design Guide 1 pour la tige |

Longueur de tige = ancrage + jeu de scellement + épaisseur de la platine + dépassement. Avec les valeurs par défaut, cela fait 575 mm.

## Détails de pied : scellement, raidisseurs, bêche, rondelles

Les quatre options sont désactivées sur une nouvelle platine de pied, et sur les platines de pied des modèles créés avant DetailCraft 0.4.

- **Jeu de scellement.** La platine se trouve à cette distance au-dessus du dessus du béton, et les tiges sont rallongées d'autant. L'AISC Design Guide 1 (2.10) suggère 1 in. sur un plancher fini et 1½ à 2 in. sur une semelle ou un massif ; davantage pour les grandes platines et les platines avec une bêche.
- **Raidisseurs.** Plats verticaux soudés au poteau et à la platine, de la face du poteau jusqu'au bord de la platine, sous forme de rectangles (pas encore de chanfrein ni de conicité). **2** se placent dans l'axe de l'âme, au-delà de chaque semelle ; **4** ajoutent deux raidisseurs perpendiculaires à l'âme, entre les semelles, jusqu'aux côtés de la platine. Sur un poteau tube, ils se placent au milieu de chaque face. Chacun est soudé au poteau et à la platine des deux côtés.
- **Bêche.** Une platine soudée tout autour, sous la platine de pied, dans l'axe de la profondeur du poteau, centrée. DetailCraft avertit si elle n'est pas plus profonde que le jeu de scellement. Elle ne creuse pas la réservation dans la semelle ; c'est pourquoi le [contrôle des conflits](topic:clash-check) exclut la bêche et la semelle.
- **Rondelles plates.** Une rondelle carrée sur chaque tige, posée sur la platine de pied, listée dans l'assemblage du poteau comme libre (livrée avec le poteau, non soudée : Design Guide 1, 2.6). Avec dimension et épaisseur à 0, DetailCraft prend la rondelle minimale de l'AISC Design Guide 1, 2e éd., tableau 2.3, pour la tige ; une tige métrique prend la dimension en pouces immédiatement supérieure (une tige M20 reçoit la ligne 7/8 in. : 2½ in. × 5/16 in.). Le panneau des propriétés affiche la dimension utilisée. Le trou de la rondelle vaut le diamètre de la tige + 1/16 in. : c'est un choix de DetailCraft, le tableau n'en donne pas. DetailCraft avertit lorsque les tiges pourraient ne pas dépasser assez pour la rondelle et un écrou (dépassement inférieur à l'épaisseur de la rondelle + diamètre de la tige).

Le tableau 2.3 du Design Guide 1 recommande aussi le trou de tige dans la platine : 1-5/16 in. pour une tige de ¾ in., 1-9/16 in. pour ⅞ in., 1-13/16 in. pour 1 in. DetailCraft ne modifie pas votre diamètre de trou.

Des avertissements apparaissent aussi lorsque les trous de tiges sont plus proches du bord de la platine que 1.2 × le diamètre du trou, lorsque les tiges tombent à l'intérieur du contour du poteau, ou lorsque la platine est plus petite que le poteau.

## Copier vers les poteaux semblables

1. Sélectionnez la platine de pied.
2. Choisissez {{ui:Appliquer aux semblables (n)}}, ou {{ui:Semblable}} dans le menu {{ui:Plus}} du groupe {{ui:Connexions}}.
3. Chaque poteau vertical de même profil qui n'a pas de platine de pied et ne repose pas sur un autre poteau reçoit une copie.

## Platines de pied et semelles

Une platine de pied n'a pas besoin de semelle, et une semelle ne connaît pas la platine au-dessus d'elle : les tiges d'ancrage ne sont pas reliées aux armatures de la semelle. Placez les semelles avec {{ui:Semelle}} ; voir [Placer des semelles avec armatures](topic:footings-and-rebar).
