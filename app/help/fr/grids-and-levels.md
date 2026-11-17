---
title: Définir les trames et les niveaux
summary: Saisir les lignes de trame, leurs entraxes et les niveaux sur lesquels chaque barre est placée.
keywords: trame, trames, axes, lignes de trame, niveaux, cotes d'altitude, étages, planchers, entraxe, mise en place
from: 9cad233c
---

Chaque barre de DetailCraft est placée sur une intersection de trames, à un niveau. Définissez les trames et les niveaux d'abord ; vous pourrez les modifier ensuite.

## Fonctionnement des trames

- **Les lignes numérotées** suivent une direction, **les lignes lettrées** l'autre. Les noms ne sont qu'une habitude : une étiquette peut être n'importe quel texte de 8 caractères au plus (1, 2, 3 ou A1, A2, ou 10, 20).
- Vous saisissez les étiquettes et les entraxes entre elles, et non des coordonnées. La première ligne de chaque série est à 0.
- Les lignes numérotées sont des lignes à x constant ; les lignes lettrées sont des lignes à y constant. Ainsi, une poutre de la trame 1 à la trame 2 suit x, et une poutre de A à B suit y.
- Toutes les valeurs sont en millimètres.

Un nouveau modèle démarre avec les lignes numérotées 1 2 3 à 6000 6000, les lignes lettrées A B à 6000, et deux niveaux.

## Définir les trames

1. Dans le panneau {{ui:Model}} à gauche, ouvrez {{ui:Grids}} s'il est replié.
2. Dans {{ui:Numbered lines}}, saisissez les étiquettes séparées par des espaces, par exemple `1 2 3 4 5`.
3. Dans le champ {{ui:Spacings}} situé dessous, saisissez un entraxe par intervalle, par exemple `6000 6000 7500 6000`. Quatre intervalles pour cinq lignes.
4. Faites de même dans {{ui:Lettered lines}} et son {{ui:Spacings}}, par exemple `A B C` et `8000 8000`.
5. Choisissez {{ui:Apply grids}}.

La barre d'état indique « Trames mises à jour. » et la vue fait un zoom sur la nouvelle trame. Les virgules fonctionnent aussi comme séparateurs.

Si quelque chose ne concorde pas, rien ne change et la barre d'état indique pourquoi, par exemple « Trames numérotées : donnez un entraxe entre chaque paire de lignes (4). » Autres vérifications : les entraxes doivent être des millimètres positifs, les étiquettes doivent être différentes, et il peut y avoir au plus 60 lignes dans chaque sens.

:::note
Les barres conservent leurs coordonnées lorsque les trames bougent. Si vous modifiez un entraxe après avoir placé de l'acier, l'acier reste à sa place et n'est plus sur la trame. Modifiez d'abord la trame, ou déplacez les barres en éditant leurs coordonnées d'extrémité.
:::

## Définir les niveaux

1. Ouvrez {{ui:Levels}} dans le panneau {{ui:Model}}.
2. Chaque ligne comporte un nom de niveau et sa cote en millimètres. Modifiez-les à votre guise.
3. Choisissez {{ui:Add level}} pour une autre ligne. Elle s'appelle « Niveau 3 » (et ainsi de suite) et est placée 4000 mm au-dessus du niveau le plus haut ; modifiez les deux si nécessaire.
4. Pour supprimer un niveau, choisissez le bouton × en bout de sa ligne.
5. Choisissez {{ui:Apply levels}}.

Rien ne change tant que vous n'avez pas choisi {{ui:Apply levels}}. Les niveaux sont triés par cote lors de l'application. Chaque niveau doit avoir un nom, deux niveaux ne peuvent pas partager un nom, et vous devez garder au moins un niveau.

Les niveaux peuvent être sous zéro (un sous-sol à `-3500`) et n'ont pas besoin d'être espacés régulièrement.

## Utilisation des niveaux

- Un poteau placé à un niveau monte jusqu'au niveau suivant, ou jusqu'au niveau que vous choisissez dans {{ui:Up to}}.
- Les poutres et platines sont placées entre deux intersections, au niveau sur lequel vous cliquez.
- Les semelles sont placées avec leur dessus au niveau sur lequel vous cliquez.
- {{ui:Plan}} affiche un seul niveau à la fois, vu de dessus.
- L'export IFC crée un étage de bâtiment par niveau.

## Annuler

Les modifications de trames et de niveaux sont des modifications comme les autres : {{key:Mod+Z}} restaure la trame précédente.

## Suite

[Placer les poteaux, poutres et contreventements](topic:place-members)
