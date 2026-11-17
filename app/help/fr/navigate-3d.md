---
title: Se déplacer dans la vue 3D
summary: Tournez, déplacez et zoomez avec une souris, un trackpad ou un écran tactile, et découvrez quand utiliser le plan et l'altitude à la place.
keywords: orbite, rotation, panoramique, zoom, navigation, vue, caméra, trackpad, tactile, plan, altitude, ajuster, souris
from: 02c9c7b9
---

La vue a trois modes, choisis dans la barre de vue au-dessus : {{ui:3D}}, {{ui:Plan}} et {{ui:Altitude}}. Les boutons de la souris n'agissent pas de la même façon en 3D qu'en plan et en altitude : lisez donc les deux tableaux.

## En 3D

:::mouse
| Pour | Faites ceci |
|---|---|
| Tourner autour du modèle | Glisser avec le bouton gauche |
| Faire un panoramique | Glisser avec le bouton droit, ou maintenir {{key:Shift}} et glisser avec le bouton gauche |
| Zoomer | Tourner la molette, ou glisser de haut en bas avec le bouton du milieu (molette enfoncée) |
| Sélectionner une pièce | Cliquer dessus (un clic qui bouge de moins de quelques pixels) |
| Voir le modèle entier | Le bouton {{ui:Ajuster}} à l'extrémité droite de la barre de vue |
:::

:::touch
| Pour | Faites ceci |
|---|---|
| Tourner autour du modèle | Glisser avec un doigt |
| Faire un panoramique | Glisser avec deux doigts |
| Zoomer | Pincer avec deux doigts |
| Sélectionner une pièce | Toucher |
| Voir le modèle entier | Le bouton {{ui:Ajuster}} à l'extrémité droite de la barre de vue |
:::

Le ViewCube en haut à droite (sous la barre de vue) tourne avec le modèle : cliquez sur une face, une arête ou un coin pour regarder depuis là, faites-le glisser pour tourner, ou cliquez sur son bouton maison pour revenir au point de départ. Voir [Le ViewCube](topic:view-cube).

Le modèle tourne autour du centre de la vue, et la molette zoome vers le centre de la vue, et non vers le pointeur. Pour observer de près un coin, faites d'abord un panoramique pour l'amener au centre, puis zoomez.

## En plan et en altitude

Ces vues regardent le modèle de face et ne peuvent pas être tournées.

:::mouse
| Pour | Faites ceci |
|---|---|
| Faire un panoramique | Glisser avec le bouton gauche ou le bouton droit |
| Zoomer | Tourner la molette, ou glisser de haut en bas avec le bouton du milieu |
| Sélectionner une pièce | Cliquer dessus |
:::

:::touch
| Pour | Faites ceci |
|---|---|
| Faire un panoramique | Glisser avec un doigt |
| Zoomer | Pincer avec deux doigts (glisser avec deux doigts fait aussi un panoramique) |
| Sélectionner une pièce | Toucher |
:::

## Sur un trackpad de Mac

:::mac
- **Zoom :** balayez vers le haut ou vers le bas avec deux doigts, ou pincez. Les deux gestes sont transmis à la vue comme un zoom.
- **Pivoter (3D) :** appuyez sur le trackpad et glissez avec un doigt. Si vous utilisez le toucher pour cliquer, le double toucher suivi d'un glissement fonctionne aussi, à condition que le glissement soit activé dans **Réglages Système, Accessibilité, Contrôle du pointeur, Options du trackpad**.
- **Panoramique (3D) :** maintenez {{key:Shift}} et glissez. Maintenir {{key:Ctrl}} ou {{key:Mod}} en glissant fait aussi un panoramique. Un clic à deux doigts est un clic droit, mais glisser avec lui est malaisé sur un trackpad.
- **Panoramique (plan et altitude) :** glissez simplement.
- Une Magic Mouse n'a pas de bouton du milieu : utilisez le glissement avec {{key:Shift}} pour le panoramique, et un balayage sur sa surface pour le zoom.
:::

Pour en savoir plus sur le clic droit et le panoramique sans souris : [Touches, souris et trackpads](common:keys).

## Le plan et l'altitude facilitent le placement

En {{ui:3D}}, des intersections situées à des niveaux différents peuvent se superposer à l'écran, et un clic va vers le point le plus proche. En {{ui:Plan}} et {{ui:Altitude}}, seuls les points du niveau ou de la ligne de trame que vous regardez peuvent être choisis.

1. Choisissez {{ui:Plan}}, puis un niveau dans la liste à côté des boutons. La vue regarde ce niveau de haut ; tout ce qui se trouve à plus de 1.5 m au-dessus est masqué.
2. Ou choisissez {{ui:Altitude}}, puis une ligne de trame lettrée (« Trame A », « Trame B » …). La vue regarde cette ligne de face ; seul l'acier situé à moins de 1 m est affiché.

Les altitudes ne sont disponibles que sur les lignes de trame lettrées. Pour travailler sur une ligne de trames numérotées (un portique allant de A à B), utilisez {{ui:3D}}, ou placez les éléments en saisissant dans le formulaire {{ui:Ajouter par trame}}. Voir [Placer poteaux, poutres et contreventements](topic:place-members#place-by-grid-without-clicking).

## Sélection

- Cliquez sur une pièce pour la sélectionner. Elle prend la couleur de surbrillance, et le panneau {{ui:Propriétés}} l'affiche.
- Cliquez dans l'espace vide, ou appuyez sur {{key:Esc}}, pour vider la sélection.
- L'acier l'emporte sur le béton : un clic sur un poteau à l'intérieur d'une semelle transparente sélectionne le poteau. Cliquez sur la semelle à l'écart du poteau, ou sur l'une de ses barres, pour sélectionner la semelle.
- Cliquer sur un boulon ou une platine d'extrémité sélectionne sa connexion.
- En plan et en altitude, les pièces coupées ne peuvent pas être cliquées.
- Maintenez {{key:Shift}} (ou {{key:Ctrl}}, ou {{key:Mod}}) et cliquez pour ajouter une pièce à la sélection ou la retirer ; {{key:Mod+A}} sélectionne tout. Il n'existe pas encore de sélection par fenêtre (tracer un cadre). Ce que vous pouvez faire avec plusieurs pièces : [Copier, coller et dupliquer](topic:copy-paste).

Vous pouvez aussi sélectionner depuis les listes : cliquez sur un repère dans {{ui:Repères de pièces}} à gauche, sur un repère de pièce dans l'onglet {{ui:Nomenclature}}, ou sur {{ui:Sélectionner}} à côté d'une ligne de {{ui:Problèmes}}.

## Si la vue semble incorrecte

- Vous avez perdu le modèle ? Choisissez le bouton {{ui:Ajuster}}.
- La vue est vide ou grise avec un message au sujet de WebGL : voir [Dépannage](topic:troubleshooting#the-3d-view-is-missing).
- Tout fonctionne sans la vue 3D, sauf le clic dedans : les panneaux, rapports et exports fonctionnent tous, et {{ui:Ajouter par trame}} place les éléments en saisissant.
