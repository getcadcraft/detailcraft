---
title: Sélectionner par fenêtre, déplacer, faire pivoter, symétrie, modifier plusieurs barres
summary: Glisser une fenêtre pour sélectionner, glisser les pièces sélectionnées pour les déplacer, déplacer, faire pivoter ou symétriser la sélection (ou une copie), ou modifier le profilé, le matériau, la position ou la rotation de plusieurs barres à la fois.
keywords: lasso, clôture, sélection à main levée, glisser, glisser-déposer, déplacer par glissement, accrochage, fenêtre, capture, sélection par cadre, glisser pour sélectionner, sélectionner plusieurs, déplacer, faire pivoter, symétrie, copier, modifier plusieurs, plusieurs barres, profilé, matériau, position, rotation, variable, ligne de trame
from: 50b16f9a
---

Chacune de ces opérations est une seule étape d'annulation : un {{key:Mod+Z}} les annule toutes.

## Sélectionner avec une fenêtre

- Dans {{ui:Plan}} et {{ui:Altitude}}, glissez avec le bouton gauche depuis un endroit vide. Dans {{ui:3D}}, maintenez {{key:Shift}} et glissez (un glissement simple fait tourner le modèle).
- Glissez **vers la droite** pour une fenêtre : elle prend ce qui se trouve entièrement à l'intérieur, dessinée avec un trait plein.
- Glissez **vers la gauche** pour une fenêtre de capture : elle prend tout ce qu'elle touche, dessinée en tirets.
- Maintenez {{key:Shift}} pendant que vous commencez le glissement pour ajouter à la sélection au lieu de la remplacer.
- Un plan ou une façade ne propose que ce qu'il montre : les pièces coupées au-dessus du plan, ou à plus de 1 m de la ligne de trame de la façade, ne sont pas retenues.
- {{key:Esc}} pendant le glissement abandonne la fenêtre.

### Lasso

Choisissez **Lasso** sous {{ui:Glisser pour sélectionner}} dans les [Paramètres de DetailCraft](topic:settings) et le même glissement trace une ligne à main levée au lieu d'un rectangle.

- Son premier mouvement latéral détermine la sélection : **vers la droite**, ce qui est entièrement à l'intérieur (trait plein) ; **vers la gauche**, ce qu'il touche (tirets).
- Appuyez sur {{key:Space}} pendant le glissement pour basculer entre intérieur, contact et **clôture** : une ligne ouverte qui prend tout ce qu'elle traverse (pointillés, orange).
- {{key:Shift}} pour ajouter et {{key:Esc}} pour abandonner fonctionnent comme pour la fenêtre.

:::touch
Sur un écran tactile, un doigt continue de déplacer la vue en plan et en façade comme auparavant ; sélectionnez les pièces en les touchant.
:::

Dans {{ui:Plan}} et {{ui:Altitude}}, déplacez la vue en panoramique avec le bouton droit ou central lorsque l'outil {{ui:Sélectionner}} est actif.

## Glisser des pièces pour les déplacer

1. Sélectionnez d'abord les pièces (clic, {{key:Shift}}+clic ou fenêtre).
2. Appuyez sur une des pièces sélectionnées et glissez. Toute la sélection se déplace ; un contour en tirets montre où elle va.
3. Relâchez pour la poser. {{key:Esc}} avant de relâcher remet tout en place.

- Dans {{ui:3D}} et {{ui:Plan}}, les pièces se déplacent dans le niveau. Maintenez {{key:Mod}} au début du glissement dans {{ui:3D}} pour les déplacer en hauteur à la place.
- Dans {{ui:Altitude}}, elles se déplacent dans la vue : le long de la ligne de trame et de haut en bas.
- La pièce que vous tenez s'accroche à une intersection de trame lorsque son extrémité passe à quelques pixels de celle-ci (l'intersection s'allume et la barre d'état la nomme). Ailleurs, le déplacement se fait par pas de 10 mm.
- Appuyer sur une pièce non sélectionnée fait pivoter ou déplacer la vue, si bien qu'un glissement ne déplace jamais rien par accident.
- Le glissement est une étape d'annulation, comme {{ui:Déplacer}}. Les connexions suivent leurs barres.

## Modifier une propriété sur plusieurs barres

Sélectionnez deux barres ou plus. Sous **Modifier pour toutes les barres** dans le panneau {{ui:Propriétés}} :

- {{ui:Profil}}, {{ui:Position}} : pour les poutres, poteaux et contreventements parmi elles.
- {{ui:Épaisseur de platine (mm)}} et {{ui:Largeur de plaque (mm)}} : pour les platines.
- {{ui:Matériau}} et {{ui:Rotation (°)}} : pour toutes.

Un champ affiche **Variable** lorsque les barres ne sont pas d'accord. Choisissez ou saisissez une valeur et chaque barre concernée la prend ; la barre d'état indique combien ont été modifiées et combien ont gardé leur valeur.

Les champs numériques du panneau {{ui:Propriétés}} acceptent aussi un calcul : `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Un calcul illisible est refusé, et la barre d'état indique où se trouve l'erreur.

## Déplacer, faire pivoter ou symétriser

Sélectionnez des barres et des semelles (une seule suffit aussi), puis utilisez **Déplacer, faire pivoter, symétrie** dans le panneau {{ui:Propriétés}}. Les connexions ne sont pas déplacées seules : elles suivent leurs barres. Si vous déplacez une poutre sans son poteau, la barre d'état indique combien de connexions relient maintenant une barre déplacée à une barre restée en place, et [Problèmes](topic:troubleshooting) signale celles qui ne s'ajustent plus.

- **Déplacer :** saisissez x, y et z en millimètres puis choisissez {{ui:Déplacer}}. Ou choisissez {{ui:Choisir deux points}} (ou appuyez sur {{key:M}}) : cliquez sur l'intersection de trame de départ, puis sur celle d'arrivée. Un contour en tirets suit le pointeur.
- **Faire pivoter en plan :** saisissez l'angle (sens antihoraire, vu d'en haut) et choisissez autour de quoi tourner : le milieu de la sélection, ou une intersection de trame. Les poteaux tournent avec le cadre.
- **Symétrie :** choisissez une ligne de trame. L'image miroir est le même profilé retourné : un profilé en I garde ses semelles, un fer U se retourne (ses faces haut et bas s'échangent), et les trous et échancrures suivent la pièce.
- Cochez **Conserver l'original (créer une copie)** pour laisser la sélection en place et déplacer, faire pivoter ou symétriser une copie. Ses connexions suivent si {{ui:Copier les platines d'extrémité et de pied avec leurs éléments}} est activé dans les [Paramètres de DetailCraft](topic:settings).

La rotation se fait autour d'une verticale et la symétrie dans un plan vertical : les niveaux restent horizontaux et les semelles restent verticales.
