---
title: Envoyer les fichiers NC à l'atelier
summary: Exporter les fichiers NC DSTV de chaque repère de pièce (profilés en I, en U, cornières, HSS, platines), compressés en zip, et les vérifier avant qu'ils n'atteignent une machine.
keywords: nc, nc1, dstv, cnc, machine, ligne de poutres, ligne de perçage, découpe de platines, exporter, fabrication, zip
from: 598b6091
---

DetailCraft écrit un fichier NC DSTV (`.nc1`) par repère de pièce, pour les profilés en I, les profilés en U, les cornières, les HSS rectangulaires et ronds, et les platines, puis les regroupe dans une archive zip. Les lignes de poutres et les machines à platines lisent ces fichiers pour scier, percer et découper.

## Exporter

1. Résolvez d'abord les points de l'onglet {{ui:Problèmes}} : un assemblage qui n'a pas pu être construit ne produit aucun trou.
2. Enregistrez le modèle ({{key:Mod+S}}), pour que les fichiers NC correspondent à un modèle enregistré.
3. Choisissez {{ui:Fichiers NC}} dans le groupe {{ui:Sortie}}.
4. Le navigateur télécharge `<name> NC.zip`. La barre d'état indique combien de fichiers il contient et liste les repères qu'il n'a pas écrits (une cornière ou un tube rond avec une échancrure).

Dans l'archive, chaque fichier porte le nom de son repère : `b1.nc1`, `c1.nc1`, `p1.nc1` … L'archive n'est pas compressée et s'ouvre avec n'importe quel logiciel de décompression zip.

Si le modèle ne contient aucune pièce, la barre d'état l'indique.

## Contenu de chaque fichier

- **En-tête (ST) :** le nom du modèle comme commande, le repère comme plan et pièce, la phase 1 ou la phase de la pièce, la nuance d'acier, la quantité, le profilé et ses dimensions, la masse par mètre et la surface de peinture par mètre. Les coupes à la scie sont d'équerre.
- **Contours extérieurs (AK) :** le contour de l'âme avec les échancrures découpées, et le contour de chaque aile, raccourci là où une échancrure la supprime.
- **Trous (BO) :** chaque trou avec sa face, sa position et son diamètre, y compris les trous des platines d'extrémité et des platines de pied.

Champ par champ, avec les règles de faces et de coordonnées : [Champs du fichier NC](topic:nc1-fields).

## Ce qui n'est pas écrit

- Cornières et tubes ronds avec une échancrure : aucun fichier NC. Leurs repères sont listés dans la barre d'état.
- Trous dans les tubes ronds (DetailCraft n'en crée pas).
- Chanfreins, contours intérieurs, marquages de pièces (traçage) et angles de sciage autres que l'équerre.
- Trous oblongs (DetailCraft ne fait que des trous ronds).

## Vérifier avant l'usinage

Les fichiers NC de DetailCraft sont relus par sa propre suite de tests, mais ils n'ont pas encore été exécutés sur les machines de votre atelier.

1. Ouvrez les fichiers dans le visualiseur NC de votre atelier ou dans le logiciel de la machine, et comparez-les aux plans d'atelier.
2. Vérifiez une pièce de chaque type sur la machine avant de lancer un lot.
3. Vérifiez comment votre logiciel lit les coordonnées y des ailes et les faces des profilés en U : DetailCraft mesure y sur les ailes depuis le bord arrière, et pose les profilés en U sur le dos, comme la norme les dessine (voir [Champs du fichier NC](topic:nc1-fields#faces-and-coordinates)).
