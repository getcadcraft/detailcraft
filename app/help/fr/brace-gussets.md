---
title: Goussets de contreventement
summary: Relier l'extrémité d'un contreventement à un poteau ou une poutre par un gousset : cornières ou méplats boulonnés, tubes fendus et soudés.
keywords: gousset, platine de gousset, contreventement, contreventement vertical, cornière de contreventement, méplat, feuillard, contreventement HSS, platine en couteau, tube fendu, connexion
from: 22f6598d
---

Un gousset de contreventement est une platine soudée en atelier sur le poteau (ou la poutre) où aboutit le contreventement, dans le plan de celui-ci. DetailCraft coupe le contreventement à l'écart de tout ce qui se trouve au nœud, place et dimensionne le gousset, et relie le contreventement à celui-ci : une **cornière** ou un **méplat** avec une rangée de boulons, ou un **tube** (carré, rectangulaire ou rond HSS) passé sur le gousset et soudé.

## Où cela fonctionne

- L'extrémité du contreventement se trouve sur l'axe d'un poteau ou d'une poutre (à 1 mm près), et le contreventement n'est pas presque parallèle à cet axe. Le poteau est le support lorsqu'il y en a un ; sinon, c'est la poutre.
- Le gousset se trouve dans le plan du contreventement et dans celui de l'axe du support. Une **cornière** doit avoir une aile dans ce plan, et un **méplat** sa face : tournez le contreventement (son {{ui:Rotation (°)}}) jusqu'à ce que ce soit le cas. Si les ailes de la cornière sont à 45° du plan, DetailCraft le signale et ne construit rien.
- Les profilés en I et les fers U utilisés comme contreventements ne sont pas connectés.

## Ajouter des goussets

1. Sélectionnez un ou plusieurs contreventements.
2. Choisissez {{ui:Gousset}} dans le menu {{ui:Plus}} du groupe {{ui:Connexions}}.
3. Chaque extrémité des contreventements sélectionnés qui aboutit sur un poteau ou une poutre et n'a pas encore de gousset en reçoit un.

Sélectionnez un gousset (cliquez sur la platine) pour modifier ses réglages. {{ui:Appliquer aux semblables (n)}} copie celui-ci sur chaque extrémité libre de contreventement ayant les mêmes profilés de contreventement et de support.

## Ce que DetailCraft détermine

- **Raccourcissement.** Le contreventement est raccourci à cette extrémité jusqu'à ce que ses angles dégagent, de {{ui:Jeu du contreventement}} (25), de chaque barre du nœud (à côté, ou au-delà de son extrémité lorsque la barre s'y termine) et d'une platine de pied sous le poteau.
- **Boulons (cornières, méplats).** {{ui:Boulons}} (3) en une rangée le long du contreventement, le premier à {{ui:Distance d'extrémité du boulon}} (40) de l'extrémité coupée, au {{ui:Pas des boulons}} (75). Sur une cornière, ils traversent l'aile située dans le plan du gousset, à {{ui:Entraxe des boulons}} du talon (0 = au milieu de l'aile) ; sur un méplat, sur son axe médian (ou décalés de l'entraxe). Longueur de serrage = l'aile ou le méplat + le gousset.
- **Le gousset.** Un rectangle : depuis la face du support jusqu'au-delà du dernier boulon, de la distance d'extrémité, et le long du support autant que les boulons l'exigent. Il s'appuie contre le dos de l'aile de la cornière (ou la face du méplat). Pour un tube, il traverse le milieu du tube, sur {{ui:Recouvrement du tube sur le gousset}} (200) du tube, avec la place nécessaire aux soudures.
- **Nœuds.** Au pied d'un poteau, le gousset est prolongé jusqu'à la platine de pied. Lorsqu'une poutre croise le nœud (un contreventement qui monte vers un angle poutre-poteau), le gousset reste sous ou au-dessus de la poutre. Si cela prive les boulons ou le recouvrement de leur distance d'extrémité, DetailCraft avertit.
- **Soudures.** Le gousset à son support, des deux côtés. Un tube au gousset, quatre cordons le long du recouvrement.

## Bon à savoir

- Le gousset appartient à l'assemblage du support (soudé en atelier). Le contreventement est livré avec ses trous percés et part vers son propre fichier NC.
- La fente d'un tube n'est pas découpée dans le modèle ; le [contrôle des conflits](topic:clash-check) laisse le contreventement et son gousset tranquilles.
- Le gousset n'est pas soudé à une poutre qu'il touche. Les goussets d'angle soudés à la fois à la poutre et au poteau, les angles chanfreinés et la disposition au point de travail d'un assemblage « Uniform Force Method » ne sont pas encore disponibles.
- DetailCraft ne dimensionne ni le gousset ni les boulons (aucune vérification de résistance) ; les avertissements portent sur l'espacement et l'ajustement.
