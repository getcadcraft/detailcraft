---
title: Éclissages
summary: Assemblez bout à bout deux pièces d'une poutre ou d'un poteau avec des couvre-joints boulonnés sur les semelles et sur l'âme.
keywords: éclissage, éclissage de poutre, éclissage de poteau, couvre-joint, platine d'éclissage, platine de semelle, platine d'âme, éclissage boulonné, joint, tronçon, connecter
from: 97d141c2
---

Un éclissage boulonné relie bout à bout deux pièces d'un même profilé en I : une platine de recouvrement à l'extérieur de chaque semelle et une platine de chaque côté de l'âme, boulonnées à travers les deux pièces. DetailCraft raccourcit les pièces jusqu'à l'écart, place les quatre platines, perce les trous dans les platines et dans les deux pièces, ajoute les boulons et signale les distances au bord, les entraxes et l'ajustement.

## Où cela fonctionne

- Deux poutres, ou deux tronçons de poteau, d'un **même profilé en I**, se rencontrant **bout à bout et alignés** : les extrémités distantes de 50 mm au plus, les pièces parallèles et sur une même ligne (à 1 mm près). Chacune des deux pièces peut être dessinée dans un sens quelconque.
- Les pièces horizontales, inclinées ou verticales fonctionnent toutes.
- Deux pièces de hauteur ou de largeur de semelle différentes sont refusées, de même que les profilés en U, les cornières et les tubes.

## Ajouter des éclissages

1. Dessinez les deux pièces bout à bout. Pour scinder une barre déjà dessinée, redessinez-la en deux pièces.
2. Sélectionnez l'une des deux pièces (ou les deux) et choisissez {{ui:Éclissage}} dans le menu {{ui:Plus}} du groupe {{ui:Connexions}}.
3. Chaque jonction libre des pièces sélectionnées avec une autre pièce du même profilé reçoit un éclissage. La barre d'état indique combien.

Sélectionnez l'éclissage (cliquez sur l'une de ses platines) pour modifier ses réglages dans le panneau de droite. {{ui:Appliquer aux semblables (n)}} le copie sur chaque autre jonction libre entre pièces du même profilé.

## Réglages (mm)

| Réglage | Défaut | Effet |
|---|---|---|
| Écart entre les extrémités | 10 | Chaque pièce est raccourcie de la moitié de cette valeur |
| Diamètre du boulon, trou, nuance, marge de longueur | 20, 22, A325, 30 | Comme pour les platines d'extrémité |
| Épaisseur de la platine de semelle | 12 | La platine a la largeur de la semelle |
| Rangées de boulons en semelle (de chaque côté) | 3 | Rangées transversales sur la semelle, de chaque côté du joint |
| Entraxe des boulons en semelle | 75 | Le long de la barre |
| Pince des boulons en semelle | 0 | Entre les deux files de boulons ; 0 = largeur de semelle moins 80 |
| Distance d'extrémité en semelle | 40 | De l'extrémité de la barre au premier boulon, et du dernier boulon à l'extrémité de la platine |
| Épaisseur de la platine d'âme | 8 | Une de chaque côté de l'âme |
| Rangées de boulons en âme | 3 | Sur la hauteur de l'âme, centrées |
| Colonnes de boulons en âme (de chaque côté) | 2 | Le long de la barre, de chaque côté du joint |
| Entraxe des boulons en âme, sur la hauteur / le long de la barre | 75, 75 | |
| Distance d'extrémité en âme | 40 | Comme pour les semelles |
| Hauteur de la platine d'âme | 0 | 0 = l'âme droite entre les congés, moins 10 en haut et en bas |
| Matériau des platines | A36 | Texte |

La longueur des platines découle des boulons : platine de semelle = écart + 2 × (2 × distance d'extrémité + (rangées − 1) × entraxe) ; les platines d'âme de même avec leurs colonnes. Avec les valeurs par défaut, les platines de semelle mesurent 470 de long.

## Bon à savoir

- Les platines appartiennent à la **première pièce dessinée** des deux (ses propriétés l'appellent la première pièce) : elles figurent sur son plan d'assemblage et sont livrées avec elle, boulonnées et non soudées. Le plan d'assemblage de la seconde pièce ne montre que ses trous.
- Les boulons de semelle serrent la semelle et sa platine ; les boulons d'âme serrent l'âme et les deux platines d'âme. Les longueurs de boulons sont listées séparément dans les propriétés.
- Les avertissements utilisent les mêmes minimums de EN 1993-1-8 que les autres connexions (distance d'extrémité et de bord 1.2 × trou, entraxe 2.2 × trou dans le sens de la barre et 2.4 × trou en travers), ainsi qu'une platine d'âme plus haute que l'âme droite et des boulons de semelle trop proches de l'âme pour le congé.
- DetailCraft ne dimensionne pas l'éclissage (aucune vérification de résistance) et ne fabrique pas de cales pour des pièces d'épaisseurs différentes.
- Copier les deux pièces copie leur éclissage ; supprimer l'une des pièces supprime l'éclissage.
