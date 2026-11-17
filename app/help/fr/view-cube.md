---
title: Le ViewCube
summary: Cliquez sur une face, une arête ou un coin du cube dans l'angle de la vue pour regarder de ce point, faites-le glisser pour orbiter, tournez l'anneau de boussole, passez d'une vue de face à l'autre et revenez à l'accueil.
keywords: viewcube, cube, boussole, nord, vue d'accueil, vues standard, dessus, avant, droite, iso, coin, arête, orbite, rotation de la vue, icône d'axes, indicateur de coin, navigation
from: 3666ea8a
---

Le ViewCube se trouve en haut à droite de la vue 3D, sous la barre de vue (uniquement en {{ui:3D}} : {{ui:Plan}} et {{ui:Altitude}} regardent déjà le modèle de face). Il tourne avec la vue, il indique donc toujours dans quel sens vous regardez : {{ui:Dessus}} est vers le haut, {{ui:Avant}} fait face au sud (le côté d'où l'on voit les trames lettrées dans {{ui:Altitude}}), {{ui:Droite}} fait face à l'est, le long des trames numérotées. Il reste semi-transparent tant que vous ne le pointez pas.

## Regarder depuis un côté, une arête ou un coin

1. Placez le pointeur sur le cube. La partie sous le pointeur s'allume : le centre d'une face, une arête (elle s'allume sur les deux faces qui la partagent) ou un coin (sur les trois faces).
2. Cliquez dessus. La vue tourne pour regarder depuis ce point, en gardant le même centre et le même zoom.

Il y a 26 positions sur lesquelles cliquer : 6 faces ({{ui:Dessus}}, {{ui:Dessous}}, {{ui:Avant}}, {{ui:Arrière}}, {{ui:Gauche}}, {{ui:Droite}}), 12 arêtes et 8 coins. Un coin donne la vue classique en trois quarts ; une arête se situe à mi-chemin entre deux faces.

Une vue de face du cube est une vue 3D, pas {{ui:Plan}} ni {{ui:Altitude}} : rien n'est coupé, et le modèle peut toujours être tourné.

## Orbiter en faisant glisser le cube

Faites glisser le cube pour tourner la vue, comme pour orbiter dans la vue elle-même. Un glissement n'est jamais pris pour un clic : vous pouvez saisir le cube n'importe où.

## L'anneau de boussole

L'anneau sous le cube porte N, E, S et O.

- **Faites glisser l'anneau** pour tourner le modèle autour de l'axe vertical, comme sur une table tournante. L'anneau suit le pointeur.
- **Cliquez sur une lettre** pour regarder depuis ce côté, en gardant l'inclinaison du regard. Dans une vue prise verticalement par le haut, la lettre cliquée passe en bas de l'écran.

## Vues de face : flèches

Lorsque vous regardez une face de front, de petites flèches apparaissent autour du cube :

- Les quatre **triangles** amènent la face de ce côté à l'avant : le triangle au-dessus du cube montre la face qui était en haut, et ainsi de suite.
- Les deux **flèches courbes** en haut à droite font pivoter l'image d'un quart de tour dans le sens horaire ou anti-horaire, sans changer la face regardée. Utilisez-les pour tourner un plan afin qu'un long mur traverse l'écran.

## Accueil

Le bouton maison en haut à gauche du cube revient à la vue initiale en trois quarts et ajuste tout le modèle à la vue, comme le bouton d'ajustement. {{key:Home}} fait la même chose lorsque le cube a le focus clavier.

## Avec le clavier

{{key:Tab}} pour atteindre le cube, puis :

| Touche | Action |
|---|---|
| {{key:left}} / {{key:right}} | choisit une face, une arête ou un coin autour du cube, par pas d'un huitième de tour (les lecteurs d'écran annoncent lequel) |
| {{key:up}} / {{key:down}} | choisit un élément plus haut ou plus bas, jusqu'à {{ui:Dessus}} ou jusqu'à {{ui:Dessous}} |
| {{key:Enter}} ou {{key:Space}} | regarde depuis l'élément choisi |
| {{key:Shift+left}} / {{key:Shift+right}} | fait pivoter la vue d'un quart de tour autour de l'axe vertical |
| {{key:Home}} | la vue d'accueil |
| {{key:Esc}} | quitte le cube |

Les touches pressées sur le cube restent au cube : elles ne lancent aucun outil DetailCraft.

## Icône d'axes ou aucun indicateur

Ouvrez {{ui:Paramètres}} ({{key:Mod+,}}), l'onglet {{ui:DetailCraft}}, et réglez **Indicateur de coin** sur {{ui:View cube}} (valeur de départ), {{ui:Axis icon}} (un petit repère X, Y, Z en bas à gauche : X rouge, Y vert, Z bleu) ou {{ui:None}}. Ce navigateur mémorise ce choix. Voir [Paramètres de DetailCraft](topic:settings#corner-indicator).
