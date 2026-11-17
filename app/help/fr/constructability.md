---
title: Vérifications de constructibilité
summary: Problèmes pour ce qu'un détailleur repère à l'œil : un boulon qu'une clé ne peut pas atteindre, des boulons trop rapprochés pour la douille, des cordons d'angle hors de leurs limites de taille, des cordons qu'une torche ne peut pas atteindre, et des tubes qui retiennent l'eau.
keywords: constructibilité, clé, douille, accès aux boulons, serrage, dimension de cordon, cordon d'angle, cordon minimal, cordon maximal, eau, trou d'évent, trou de purge, galvanisation, profil creux, problèmes
from: 72315151
---

DetailCraft recherche quatre types de problèmes qu'aucune vérification de résistance ne trouve, et les liste dans le panneau {{ui:Problèmes}}. Ce sont des avertissements et des remarques à examiner, pas des erreurs : le modèle se construit quand même.

## Un boulon qu'une clé ne peut pas atteindre

Pour chaque boulon, DetailCraft place une douille sur la tête et sur l'écrou. La douille est un cylindre aussi large que l'écrou sur ses angles, plus une paroi de 4 mm, long de 60 mm. Si une âme de poutre, une semelle, une platine ou un contreventement se trouve dans ce cylindre, le problème nomme l'assemblage, le nombre de boulons, la pièce qui gêne et sa distance au boulon.

La douille est une douille à chocs type. Une clé plate demande moins de place, un outil plus gros en demande davantage. Demandez à votre assistant connecté de lancer `constructability_check` avec un autre `socketLength` pour voir comment la réponse change.

## Boulons trop rapprochés pour la douille

Une douille posée sur un boulon ne doit pas toucher la tête du suivant. Les boulons d'un assemblage plus rapprochés que la largeur de la douille plus la tête du voisin sont listés avec l'espacement trouvé et l'espacement requis.

## Dimensions des cordons d'angle

L'AISC 360-16 tableau J2.4 fixe le plus petit cordon d'angle selon l'épaisseur de la pièce la plus mince (3 mm jusqu'à 6.35 mm d'épaisseur, 5 mm jusqu'à 12.7, 6 mm jusqu'à 19.05, 8 mm au-delà), et J2.2b le plus grand le long d'un bord de matière : pas plus grand que la matière lorsqu'elle est plus mince que 6.35 mm, sinon 1.6 mm de moins. Les assemblages de même taille sur la même épaisseur sont listés en un seul problème.

L'épaisseur retenue est celle de la pièce la plus mince nommée par le cordon ; ainsi, un cordon de 8 mm tout autour d'une poutre à âme de 6.35 mm est listé.

## Eau et évents

- Une **extrémité supérieure ouverte** d'un profil creux qui est vertical, ou dont la pente dépasse 10°, laisse entrer la pluie.
- Un profil creux **fermé aux deux extrémités** a besoin d'un trou d'évent et d'un trou de purge ; la galvanisation à chaud et la pression de l'air chauffé en demandent un.

## Le soudeur peut-il l'atteindre

Un cordon d'angle se fait avec la torche à mi-chemin entre les deux faces qu'il relie. Pour chaque cordon d'angle périphérique (une platine d'extrémité, une platine de pied, une platine d'onglet), la vérification prend le contour de la section de l'élément au niveau de la platine et, tous les 20 mm, trace un trajet de torche à 45° à partir du point où sa buse (rayon de 10 mm au départ) dégage d'abord les deux faces, sur 30 mm de plus. Si le trajet rencontre la semelle même de la poutre ou une autre pièce, cette part du cordon est listée avec la pièce et la distance. Ces chiffres sont typiques, pas ceux d'une norme : demandez à votre atelier le procédé et la buse. Les cordons le long de deux bords (une platine d'assemblage en cisaillement) ne sont pas localisés et ne sont pas vérifiés.
