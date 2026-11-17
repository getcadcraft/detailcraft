---
title: Escaliers
summary: Placer un escalier métallique droit à partir de sa hauteur, de son giron et de sa largeur : deux limons et des marches en tôle, formant un seul assemblage soudé.
keywords: escalier, escaliers, cage d'escalier, limon, marche, contremarche, giron, nez de marche, volée, escalier métallique, ibc 1011, blondel, règle de Blondel
from: 62fa3845
---

Un escalier métallique droit : deux limons (fers U dont les ailes sont tournées vers l'intérieur, ou méplats posés de chant) et une marche en tôle à chaque degré, soudées entre elles. DetailCraft calcule le nombre de contremarches à partir de la hauteur à franchir, les vérifie par rapport aux limites du code du bâtiment, et réalise l'escalier comme un seul assemblage d'atelier.

## Placer un escalier

1. Choisissez {{ui:Escalier}} dans le groupe {{ui:Placer}}, ou appuyez sur {{key:S}}.
2. Réglez l'escalier sur le côté droit : le **sens de montée** (0° monte le long de +x, 90° le long de +y), la **hauteur à franchir** (0 = jusqu'au niveau suivant), le **giron**, la **largeur libre** entre les limons, la **contremarche maximale**, le **limon**, l'**épaisseur de la tôle de marche**, le **nez de marche** et le matériau.
3. Cliquez sur une intersection de trame : c'est le pied de la première contremarche, sur l'axe de l'escalier.

La barre d'état indique le nombre de contremarches créées. Sélectionnez l'escalier (cliquez sur un limon ou une marche) pour modifier l'un de ses réglages, sa position ou sa phase ; les propriétés affichent aussi les contremarches, les marches, la longueur de volée, la pente et 2 × contremarche + giron.

## Ce que DetailCraft détermine

- **Contremarches.** Le moins possible tout en restant au-dessous de la contremarche maximale : une hauteur de 3000 mm à 178 mm ou moins donne 17 contremarches de 176.5 mm. Il y a une marche de moins que de contremarches (le plancher haut est la dernière marche).
- **Marches.** Une tôle de profondeur giron + nez (280 + 25 = PL6x305 par défaut) et de la largeur libre, son dessus à chaque hauteur de contremarche, son bord avant (le nez) devant la ligne de contremarche.
- **Limons.** Au pas de l'escalier, depuis leur jonction avec le plancher inférieur jusqu'à leur jonction avec le plancher supérieur, juste à l'extérieur de la largeur libre, leur bord supérieur 50 mm au-dessus de la ligne des nez. Les ailes d'un fer U sont tournées vers l'intérieur de l'escalier ; un méplat comme PL12x250 se pose de chant.
- **Soudures.** Chaque marche aux deux limons. Les marches et le limon droit sont soudés au limon gauche, si bien que l'escalier porte un seul repère d'assemblage (ST1) et son propre plan d'assemblage ; les limons reçoivent des repères de pièces st…, les marches p….
- **Contrôles.** Avertissements lorsqu'une contremarche est hors de 4 à 7 in. (102 à 178 mm) ou que le giron est inférieur à 11 in. (279 mm), les limites de l'IBC 2021 section 1011.5.2 ; lorsque 2 × contremarche + giron est hors de 600 à 650 mm (une règle de confort courante) ; et lorsque le limon est trop peu profond pour porter les marches. Un profilé de limon inconnu empêche de construire l'escalier.

## Bon à savoir

- Déplacer, faire pivoter, symétrie, copier, coller, supprimer et les phases fonctionnent sur un escalier comme sur une barre. Une rotation fait pivoter le sens de montée ; une symétrie l'envoie dans le sens symétrique.
- Les limons s'exportent en IFC comme IfcMember et les marches comme IfcPlate ; les deux vont vers les fichiers NC et la nomenclature. Le contrôle des conflits ignore les pièces propres à un escalier (elles sont soudées ensemble).
- Cet escalier simple est une seule volée à marches en tôle. Pour des paliers, des mains courantes avec balustres, des marches en tôle pliée ou en caillebotis, un jeu de règles au choix, une liste de débit et les dessins des trous de limon, cochez {{ui:Utiliser le générateur d'escalier métallique}} dans l'outil Escalier (voir Générateur d'escalier métallique).
- Les limons sont coupés d'équerre : leurs coupes d'extrémité contre les planchers ne sont pas réalisées.
- DetailCraft ne dimensionne pas l'escalier : les limons et les marches ne sont pas vérifiés en résistance ni en flèche.
