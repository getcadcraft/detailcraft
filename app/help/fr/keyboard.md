---
title: Touches et actions de la souris
summary: Chaque raccourci clavier et chaque action de souris, de trackpad et tactile dans DetailCraft, d'après le code.
keywords: clavier, raccourcis, raccourcis clavier, touches, souris, trackpad, tactile, ctrl, commande, aide-mémoire
from: 05a2dea0
---

Comment les touches sont écrites dans cette aide : [Touches, souris et trackpads](common:keys). Sur Mac, {{key:Mod}} est la touche Commande ; ailleurs, c'est Ctrl.

## Outils

Ces touches fonctionnent lorsque le curseur n'est pas dans un champ de texte ou de nombre.

| Touche | Action |
|---|---|
| {{key:V}} | {{ui:Sélectionner}} |
| {{key:B}} | {{ui:Poutre}} |
| {{key:C}} | {{ui:Poteau}} |
| {{key:R}} | {{ui:Contreventement}} |
| {{key:P}} | {{ui:Platine}} |
| {{key:F}} | {{ui:Semelle}} |
| {{key:S}} | {{ui:Escalier}} |
| {{key:M}} | Déplacer la sélection en choisissant deux intersections de trames ([Sélectionner par fenêtre, déplacer, faire pivoter, symétrie, modifier plusieurs éléments](topic:select-and-change)) |
| {{key:Esc}} | Abandonner une fenêtre de sélection en cours de glissement, ou remettre en place les pièces glissées ; annuler un déplacement, le premier point d'une poutre, d'un contreventement ou d'une platine, ou un collage ; appuyer à nouveau pour revenir à {{ui:Sélectionner}} ; dans {{ui:Sélectionner}}, vider la sélection. Si le menu {{ui:Plus}} est ouvert, le fermer |
| {{key:Delete}} ou {{key:Backspace}} | Supprimer la sélection (tout ce qui est sélectionné, en une seule étape d'annulation) |

## Fichier et édition

| Touche | Action |
|---|---|
| {{key:Mod+S}} | Enregistrer le modèle (téléchargement). Fonctionne même pendant la saisie dans un champ |
| {{key:Mod+O}} | Ouvrir un modèle. Fonctionne même pendant la saisie dans un champ |
| {{key:Mod+Z}} | Annuler (hors des champs de texte ; dans un champ, cela annule votre saisie) |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Rétablir |

## Copier et coller

Ces touches fonctionnent lorsque le curseur n'est pas dans un champ de texte ou de nombre (là, elles copient, collent et sélectionnent votre texte comme d'habitude). Chaque collage, coupe, duplication ou suppression correspond à une étape d'annulation. Pour en savoir plus : [Copier, coller et dupliquer](topic:copy-paste).

| Touche | Action |
|---|---|
| {{key:Mod+C}} | {{ui:Copier}} les barres et semelles sélectionnées (avec leurs trous, échancrures et assemblages) |
| {{key:Mod+X}} | {{ui:Couper}} : copie la sélection, puis la supprime |
| {{key:Mod+V}} | {{ui:Coller}} : la copie suit le pointeur ; cliquez sur une intersection de trame pour la placer |
| {{key:Mod+Shift+V}} | {{ui:Coller à la même position}} : aux coordonnées d'origine de la copie |
| {{key:Mod+D}} | {{ui:Dupliquer}} : une copie immédiate, décalée de la valeur définie dans les [paramètres de DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Tout sélectionner}} : chaque élément, assemblage et semelle |
| {{key:Esc}} | {{ui:Désélectionner tout}} |

Si vous avez sélectionné du texte sur la page (dans un tableau de rapport, par exemple) et rien dans le modèle, {{key:Mod+C}} copie le texte, comme d'habitude.

{{ui:Nouvelle}}, {{ui:Exemple}} et les exportations n'ont pas de touche ; utilisez la barre d'outils.

Aucune de ces touches n'agit tant qu'une boîte de dialogue (l'aperçu du plan d'atelier ou une question) est ouverte.

## Champs et panneaux

| Touche | Action |
|---|---|
| {{key:Enter}} ou {{key:Tab}} | Appliquer une valeur saisie (chaque modification correspond à une étape d'annulation) |
| {{key:Enter}} dans un champ {{ui:Grilles}}, {{ui:Niveaux}}, {{ui:Profil personnalisé}}, de trou ou d'échancrure | Identique à cliquer sur le bouton de ce formulaire |
| {{key:Left}} {{key:Right}} | Passer d'un onglet {{ui:Problèmes}}, {{ui:Nomenclature}} et {{ui:Tableau de ferraillage}} à l'autre lorsqu'un onglet a le focus |
| {{key:Esc}} | Fermer l'aperçu du plan d'atelier ou une boîte de dialogue de question (identique à {{ui:Annuler}}) |

## Écran et aide

| Touche | Action |
|---|---|
| {{key:Ctrl+Shift+F}} | Passer successivement du mode normal au plein écran, puis au plein écran avec les barres masquées. Ctrl sur tous les ordinateurs, Mac compris |
| {{key:Mod+,}} | Ouvrir {{ui:Paramètres}} ([Paramètres de DetailCraft](topic:settings)) |
| {{key:Esc}} | Quitter le plein écran |
| {{key:F1}} | Ouvrir cette aide |

## Souris

| Action | En 3D | En plan et en altitude |
|---|---|---|
| Clic | Sélectionner une pièce, ou la placer à l'intersection la plus proche lorsqu'un outil de placement est actif (ou la coller à cet endroit pendant un collage) | Identique |
| {{key:Shift}}, {{key:Ctrl}} ou {{key:Mod}} et clic | Ajouter la pièce à la sélection, ou la retirer | Identique |
| Appuyer sur une pièce sélectionnée puis glisser | Déplacer la sélection sur le niveau ; avec {{key:Mod}} maintenu, de haut en bas | Déplacer la sélection (en altitude : le long de celle-ci et de haut en bas) |
| Glisser avec le bouton gauche | Faire pivoter le modèle | Avec {{ui:Sélectionner}} : une fenêtre de sélection (vers la droite : entièrement à l'intérieur ; vers la gauche : au contact). Pendant le placement : panoramique |
| {{key:Shift}} et glisser avec le bouton gauche | Avec {{ui:Sélectionner}} : une fenêtre de sélection, ajoutée à la sélection. Pendant le placement : panoramique | Avec {{ui:Sélectionner}} : une fenêtre de sélection, ajoutée à la sélection |
| {{key:Ctrl}} ou {{key:Mod}} et glisser avec le bouton gauche | Panoramique | Rien |
| Glisser avec le bouton droit | Panoramique | Panoramique |
| Molette | Zoom vers le centre de la vue | Zoom |
| Glisser avec le bouton du milieu | Zoom | Avec {{ui:Sélectionner}} : panoramique. Sinon, zoom |
| Déposer un fichier `.detailcraft.json` sur l'application | L'ouvrir | L'ouvrir |

Un clic n'est pris en compte que si le pointeur se déplace de moins d'environ 5 pixels entre l'appui et le relâchement ; un mouvement plus long est un glissement.

## Trackpad

| Action | Effet |
|---|---|
| Glisser à deux doigts vers le haut ou vers le bas, ou pincer | Zoom |
| Appuyer et glisser | Faire pivoter (3D) ou panoramique (plan et altitude) |
| {{key:Shift}} puis appuyer et glisser | Panoramique en 3D |
| Clic à deux doigts | Clic droit (il n'y a pas de menu dans la vue) |

## Tactile

Sur une tablette ou un écran tactile :

| Action | Effet |
|---|---|
| Toucher | Sélectionner une pièce, ou la placer à l'intersection de trame la plus proche lorsqu'un outil de placement est actif (un toucher à moins d'environ la largeur d'un doigt compte) |
| Appui long sur une pièce | L'ajouter à la sélection, ou la retirer (ce que fait {{key:Shift}}+clic avec une souris) |
| Un doigt sur une pièce sélectionnée, puis glisser | Déplacer la sélection, en s'accrochant aux intersections de trames |
| Un doigt ailleurs | Faire pivoter le modèle (3D) ou panoramique (plan et altitude) |
| Deux doigts | Pincer pour zoomer, déplacer ensemble pour un panoramique |

Les boutons, listes et champs sont plus grands lorsque l'écran n'est que tactile. Les fenêtres de sélection nécessitent une souris ; avec les doigts, touchez et faites un appui long.

## Raccourcis conservés par le navigateur

Certains raccourcis appartiennent au navigateur, et aucune page ne peut les utiliser : par exemple {{key:Mod+W}} (fermer l'onglet), {{key:Mod+T}} (nouvel onglet) et {{key:Mod+N}} (nouvelle fenêtre). Si {{key:Mod+Y}} ouvre l'historique du navigateur au lieu de rétablir, utilisez {{key:Mod+Shift+Z}}.

Les raccourcis n'atteignent DetailCraft que lorsque la page a le clavier. Si une touche ne fait rien, ou si le navigateur agit à sa place, cliquez d'abord sur une zone vide de la fenêtre DetailCraft (par exemple après avoir saisi dans la barre d'adresse).

## Où se trouve Déplacer

Il n'existe pas de commande Déplacer : sélectionnez une pièce et faites-la glisser sur le niveau (maintenez {{key:Mod}} pour la faire glisser de haut en bas), ou modifiez ses {{ui:Début}} et {{ui:Fin}} dans {{ui:Propriétés}}.
