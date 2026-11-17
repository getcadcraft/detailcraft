---
title: Pattes de cisaillement
summary: Boulonnez l'âme d'une poutre sur une platine soudée en atelier à une aile ou à l'âme d'un poteau, y compris lorsque la poutre rejoint le poteau en biais dans le plan ou en pente.
keywords: patte de cisaillement, platine simple, platine d'attache, connexion simple, connexion d'âme, biais, oblique, en pente, incliné, poutre inclinée, boulonné, connecter
from: 18afc8ab
---

Une patte de cisaillement (platine simple, platine d'attache) est une platine soudée au poteau en atelier ; sur chantier, l'âme de la poutre y est boulonnée par une rangée verticale de boulons. DetailCraft place la patte, recule la poutre pour la dégager du poteau, perce les trous dans la patte et dans l'âme de la poutre, ajoute les boulons et la soudure, et signale les distances au bord et les problèmes d'ajustement.

## Où elle fonctionne

- Une poutre (profilé en I ou en U) dont l'extrémité se situe dans l'alignement d'un poteau en profilé en I **vertical**, rejoignant son **aile** ou son **âme**.
- **D'équerre, en biais dans le plan ou en pente** : la patte suit l'âme de la poutre, et la poutre est reculée pour que son coin le plus proche garde le jeu avec le poteau. Une poutre montant ou descendant à plus de 60° est refusée.

## Ajouter des pattes de cisaillement

1. Sélectionnez la poutre.
2. Dans le groupe {{ui:Connexions}}, ouvrez {{ui:Plus}} et choisissez {{ui:Pattes de cisaillement}} (ou choisissez {{ui:Ajouter des pattes de cisaillement}} dans le panneau {{ui:Propriétés}}).
3. Chaque extrémité libre de la poutre qui rencontre un poteau reçoit une patte. Chaque extrémité de poutre accueille une seule connexion : une patte de cisaillement ou une platine d'extrémité.

Sélectionnez une patte (cliquez dessus ou sur un boulon) pour voir et modifier ses réglages. {{ui:Appliquer aux similaires}} la copie, en tant que patte de cisaillement, sur chaque assemblage semblable qui n'a pas encore de connexion.

## Réglages (mm)

| Réglage | Valeur initiale | Signification |
|---|---|---|
| Épaisseur de platine | 10 | Épaisseur de la patte |
| Largeur de plaque | 115 | Distance à laquelle la patte dépasse de la face du poteau, le long de la poutre |
| Diamètre de boulon, diamètre de trou, classe de boulon | 20, 22, A325 | Comme pour les platines d'extrémité |
| Rangées de boulons, entraxe des rangées | 3, 75 | Les boulons de la rangée verticale |
| Distance au bord (boulons supérieur et inférieur) | 38 | Des boulons supérieur et inférieur aux extrémités de la patte ; la patte a une hauteur de rangées × entraxe + 2 × cette valeur |
| Décalage vertical du groupe de boulons | 0 | 0 centre les boulons sur la hauteur de la poutre |
| Jeu avec le poteau | 13 | Jeu libre entre le poteau et le coin le plus proche de la poutre |
| Distance de la ligne de boulons à la face du poteau | 65 | Le long de la poutre, de la face du poteau aux boulons |
| Marge de longueur de boulon | 30 | Ajoutée à la longueur serrée (patte + âme de la poutre), arrondie au multiple supérieur de 5 mm |
| Dimension du cordon d'angle | 6 | Des deux côtés de la patte jusqu'au poteau |

## Bon à savoir

- La patte fait partie de l'assemblage du poteau (soudée en atelier) ; l'assemblage de la poutre ne porte que ses trous.
- Une poutre en biais ou en pente est reculée davantage qu'une poutre d'équerre, pour que son coin le plus proche garde le jeu. DetailCraft coupe les poutres d'équerre : le fabricant ajuste la coupe de l'extrémité. Le bord de la patte côté poteau est également dessiné d'équerre.
- DetailCraft ne vérifie pas la résistance. Les avertissements utilisent les minimums de l'EN 1993-1-8, tableau 3.3, pour les distances au bord et l'entraxe, et signalent lorsque la patte est plus haute que l'âme de la poutre entre ses congés, ou lorsque les boulons sont trop près de l'extrémité coupée de la poutre.
- La [vérification des conflits](topic:clash-check) exclut la patte et les éléments qu'elle relie : ils sont censés se toucher.
