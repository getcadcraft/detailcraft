---
title: Menus, touches et souris
summary: Choisissez un style de menu qui correspond à votre façon de travailler, attribuez votre propre touche à une commande, déplacez les commandes entre les onglets du ruban, et réglez l'effet de la molette et des boutons de souris.
keywords: style de menu, menus, ruban, barre d'outils, ligne de commande, raccourcis clavier, raccourcis, touches, personnaliser, réattribuer, souris, molette, inverser, sens du zoom, bouton du milieu, bouton droit, panoramique, orbite, exporter, importer, changer de style, dessin classique, ruban acier
from: 4132c6e5
---

Les commandes de DetailCraft sont les mêmes quelle que soit la façon de les atteindre. Un **style de menu** détermine seulement où elles se trouvent à l'écran, comment elles s'appellent et les touches qui les déclenchent. Choisissez-en un dans {{ui:Paramètres}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, touches et souris}} ; le changement est immédiat, et ce navigateur le mémorise.

## Les trois styles

| Style | Ce que vous obtenez |
|---|---|
| {{ui:DetailCraft}} | La barre d'outils propre à DetailCraft (Fichier, Placer, Connexions, Édition, Sortie) et ses touches à une lettre : {{key:V}} sélectionner, {{key:B}} poutre, {{key:C}} poteau, {{key:R}} contreventement, {{key:P}} platine, {{key:F}} semelle, {{key:S}} escalier. Le style par défaut. |
| {{ui:Dessin classique}} | Pour les personnes qui saisissent des commandes : un petit ruban ({{ui:Accueil}}, {{ui:Vue}}, {{ui:Sortie}}) et une ligne de commande. Saisissez BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (annuler), ZOOM, PLAN, 3D, DRAWINGS, NC ou HELP, puis appuyez sur {{key:Enter}} ; {{key:Enter}} sans rien relance la dernière commande, {{key:Esc}} l'efface. Commencez à taper n'importe où : les lettres vont à la ligne de commande. Le bouton du milieu fait un panoramique ; en 3D, {{key:Shift}} et le bouton du milieu font pivoter la vue. |
| {{ui:Ruban acier}} | Des onglets organisés comme dans les logiciels de détaillage acier : {{ui:Modélisation}} (éléments, béton, escaliers), {{ui:Détaillage}} (connexions), {{ui:Édition}}, {{ui:Dessins}} (plans et rapports), {{ui:Fabrication}} (fichiers NC, IFC) et {{ui:Vue}}, avec un menu {{ui:Fichier}} et des boutons rapides à droite. Les touches à une lettre sont conservées. Le bouton du milieu fait un panoramique ; en 3D, le bouton gauche fait pivoter la vue. |

Chaque style conserve {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} et {{key:Mod+A}}. Les rubans comportent aussi les boutons {{ui:3D}}, {{ui:Plan}}, {{ui:Altitude}} et {{ui:Ajuster}} de la barre de vue.

:::tip
Une touche qui appartient à la disposition propre à DetailCraft mais que votre style attribue à une autre commande ne fait rien, et la barre d'état indique où est passée sa commande (« Dans Mon ruban acier, Poteau est Ctrl+Alt+C »). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} et les flèches gardent toujours leur sens ; et tant qu'un élément est à moitié placé ou qu'une copie suit le pointeur, les lettres appartiennent à DetailCraft.
:::

## Personnalisez-le

1. Choisissez le style le plus proche de ce que vous voulez, puis cliquez sur {{ui:Personnaliser…}}.
2. Dans {{ui:Touches et menus}}, trouvez une commande (la zone de recherche aide). Cliquez sur {{ui:Ajouter une touche}} puis appuyez sur la touche, ou sur deux touches à la suite pour une touche à deux lettres. Cliquez sur une touche pour la retirer.
3. Avec un ruban, {{ui:Emplacement}} déplace la commande vers un autre onglet ou panneau, vers le menu {{ui:Fichier}}, ou vers {{ui:Touches seulement}}.
4. Dans {{ui:Souris}}, réglez la molette, les boutons qui font le panoramique des plans et des altitudes, et ce que fait chaque bouton dans la vue 3D.
5. Donnez-lui un nom et cliquez sur {{ui:Enregistrer (S)}}.

Enregistrer un style intégré crée votre propre copie (« Mon ruban acier ») ; le style intégré ne change jamais. Une touche attribuée à deux commandes s'affiche en rouge et doit être corrigée avant l'enregistrement.

## Souris

- **Molette** : {{ui:Faire défiler vers le haut zoome en avant}} (par défaut) ou {{ui:Faire défiler vers le haut zoome en arrière}}, et la vitesse. Un pincement sur le trackpad zoome toujours dans le sens de vos doigts.
- **Panoramique des plans et altitudes avec** : le bouton du milieu, le bouton droit, ou les deux. Avec l'outil Sélectionner, le bouton gauche trace toujours une fenêtre de sélection.
- **Glisser dans la vue 3D** : {{ui:Propre à chaque vue}} conserve les boutons de DetailCraft (le gauche fait pivoter, le milieu zoome, le droit fait un panoramique). Ou réglez chaque bouton sur pivoter, panoramique, zoom ou rien ; {{key:Shift}} avec un bouton qui fait pivoter ou faire un panoramique inverse les deux.

## Transférer votre style

{{ui:Exporter}} enregistre le style utilisé dans un petit fichier `.ccinput.json` ; {{ui:Importer…}} en ajoute un, depuis un autre ordinateur ou depuis un collègue. Un fichier importé ne peut pointer que vers les commandes propres à DetailCraft : tout le reste est laissé de côté et compté dans la barre d'état. {{ui:Supprimer ce style}} retire un de vos propres styles.

:::note
Ces réglages restent dans ce navigateur. {{ui:Utiliser ce style dans toutes les applications}}, sous les cartes de style, fait ouvrir chaque application dans son style correspondant (sa propre barre d'outils, un ruban ou Dessin classique), avec les modifications faites dans chaque application. DetailCraft n'a pas de style à barre de menus : lorsqu'une barre de menus d'une autre application est choisie pour toutes les applications, DetailCraft conserve sa propre barre d'outils.
:::

Voir aussi : [Clavier et souris](topic:keyboard) · [Paramètres de DetailCraft](topic:settings) · [Venant d'autres logiciels de détaillage](topic:coming-from)
