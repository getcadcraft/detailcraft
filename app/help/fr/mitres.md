---
title: Assemblages à onglet
summary: Assemblez deux éléments en I qui se rejoignent à un angle : les deux extrémités sont coupées sur le plan qui divise l'angle en deux, avec platines d'extrémité, boulons et raidisseurs si vous le souhaitez.
keywords: onglet, miter, assemblage à onglet, nœud, gousset, portique, faîtage, angle, coupe d'angle, coupe biaise, platine d'extrémité, platine d'extrémité boulonnée, raidisseur, connexion
from: cd8380d4
---

Un assemblage à onglet relie deux profilés en I dont les extrémités se rejoignent à un angle, comme le nœud d'un portique, un faîtage, ou deux poutres qui tournent un angle en plan. DetailCraft coupe les deux extrémités sur le plan qui divise en deux l'angle entre elles, de sorte que les deux faces de coupe coïncident. Si vous le souhaitez, il ajoute une platine d'extrémité à chaque extrémité coupée, boulonne les deux platines ensemble et place une paire de raidisseurs d'âme dans chaque élément.

## Où cela fonctionne

- Deux **profilés en I** (IPE, HEA, HEB, W et similaires) dont les **extrémités se rejoignent au même nœud**. Chaque élément peut être dessiné dans l'un ou l'autre sens.
- L'angle entre les éléments doit être d'au moins 15°. Les éléments alignés sont refusés : utilisez un [éclissage](topic:splices).
- La coupe simple (sans platines) fonctionne quelle que soit la manière dont les éléments se rejoignent. Les **platines d'extrémité** exigent que les deux éléments se rejoignent dans le plan de leurs âmes, comme à un nœud de portique ou à un faîtage. Deux poutres qui tournent un angle en plan se rejoignent dans le plan de leurs semelles : elles n'ont droit qu'à la coupe simple.
- Des éléments de dimensions différentes peuvent être assemblés, avec un avertissement : leurs faces de coupe ne coïncident pas.

## Ajouter un onglet

1. Sélectionnez les deux éléments : cliquez sur l'un, puis {{key:Shift}}+clic sur l'autre.
2. Choisissez {{ui:Onglet}} dans le menu {{ui:Plus}} du groupe {{ui:Connexions}}. La boîte de dialogue Onglet s'ouvre.
3. Réglez les champs numérotés. Le dessin à côté est produit à partir de vos chiffres pendant que vous saisissez, et ses cercles numérotés indiquent ce que règle chaque champ.
4. Choisissez {{ui:Ajouter l'onglet}}. Si vous avez sélectionné plus de deux éléments, chaque assemblage libre entre eux reçoit le même onglet.

Pour modifier un onglet plus tard, sélectionnez-le (cliquez sur l'une de ses platines) et choisissez {{ui:Boîte de dialogue Onglet avec aperçu}} dans le panneau de droite, ou modifiez directement ses réglages là. Une coupe simple n'a pas de platines à cliquer : sélectionnez ses deux éléments et choisissez de nouveau {{ui:Onglet}}, et la boîte de dialogue s'ouvre sur cet onglet. {{ui:Appliquer aux similaires (n)}} copie l'onglet sur chaque assemblage libre entre des éléments des deux mêmes profilés, à même angle.

## Les champs numérotés (mm)

| N° | Réglage | Valeur par défaut | Effet |
|---|---|---|---|
| 1 | Écart entre les platines (ou les extrémités coupées) | 0 | Jeu libre à l'assemblage. Chaque côté en garde la moitié |
| 2 | Platines d'extrémité, épaisseur de platine | activées, 20 | Une platine d'extrémité soudée tout autour de chaque extrémité coupée. Décochez pour une coupe simple |
| 3 | Rangées de boulons, entraxe des rangées, entraxe transversal, rangée extérieure | 4, 0, 0, désactivée | Entraxe 0 répartit les rangées uniformément entre les semelles. Entraxe transversal 0 = la moitié de la largeur de la platine, au moins 2.4 × le trou. La rangée extérieure va dans le prolongement de la platine, au-delà de la semelle extérieure |
| 4 | Platine au-delà de la semelle extérieure | 0 | Distance dont les platines dépassent la semelle extérieure, le long de la coupe |
| 5 | Platine au-delà de la semelle intérieure | 0 | Identique, côté intérieur |
| 6 | Raidisseurs d'âme, distance au-delà de la coupe | désactivés, 50 | Une paire dans chaque élément, de part et d'autre de l'âme, perpendiculaire à l'élément, à cette distance au-delà de l'extrémité opposée de sa coupe |
| 7 | Épaisseur du raidisseur | 10 | |

Sous {{ui:Boulons}} : diamètre du boulon, trou, nuance et marge de longueur (20, 22, A325, 30), comme pour les platines d'extrémité. Sous {{ui:Platines et soudures}} : largeur de platine (0 = largeur de la semelle), taille du cordon d'angle (8) et matériau de platine (A36).

## Ce que vous obtenez

- **Les coupes.** L'extrémité de chaque élément est coupée sur son plan. Sa longueur dans les listes, les dessins et les fichiers NC est la **longueur hors tout**, depuis son extrémité d'équerre jusqu'au point le plus éloigné de la coupe.
- **Les platines** appartiennent à leur propre élément : l'assemblage de chaque élément est l'élément, sa platine d'extrémité et ses raidisseurs. Les boulons sont des boulons de chantier de l'assemblage : la nomenclature les compte une seule fois, et le plan d'assemblage de chaque élément les liste comme boulons en vrac.
- **Les plans** montrent les extrémités inclinées et les platines ; le plan d'atelier d'un élément en onglet indique l'angle de chaque coupe par rapport à l'équerre.
- **Les fichiers NC** (DSTV) portent les angles de coupe biaise dans l'en-tête, comme l'exige la norme, et des contours qui suivent la coupe. Vérifiez-les dans le visualiseur NC de votre atelier avant la découpe, comme pour tout fichier NC.
- **L'IFC** découpe l'extrusion de chaque élément par son plan de coupe, pour que les autres logiciels montrent la vraie coupe.
- **Repères :** un élément en onglet est une pièce différente d'un élément coupé d'équerre de même longueur. Deux éléments aux mêmes coupes partagent un repère, comme les deux chevrons d'un faîtage.

## Bon à savoir

- L'onglet reste dynamique. Déplacez ou redimensionnez l'un des éléments et la coupe, les platines et les boulons suivent. Supprimez l'un des éléments et l'onglet disparaît, et l'extrémité de l'autre élément redevient d'équerre.
- Les avertissements utilisent les mêmes minimums EN 1993-1-8 que les autres connexions (distance d'extrémité et de bord 1.2 × le trou, entraxe 2.2 × le trou, entraxe transversal 2.4 × le trou), ainsi que les rangées de boulons trop proches d'une semelle, les platines plus étroites que les semelles et les raidisseurs sans place.
- Les valeurs sont des valeurs de départ, pas un calcul. DetailCraft ne vérifie pas la résistance de la connexion, et il ne réalise ni gousset, ni onglet soudé bout à bout, ni raidisseur aligné sur les semelles de l'autre élément.
