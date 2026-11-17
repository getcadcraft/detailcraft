---
title: Copier, coller et dupliquer
summary: Sélectionnez plusieurs pièces, copiez-les avec leurs trous, leurs découpes et leurs assemblages, puis collez-les sur une intersection de trames, à un décalage, à la même position ou dans un autre onglet. Couper, dupliquer, supprimer et tout sélectionner.
keywords: copier, coller, couper, dupliquer, presse-papiers, coller à la même position, tout sélectionner, désélectionner tout, sélection multiple, maj clic, plusieurs, répéter une travée, copier un portique, décalage, supprimer plusieurs, menu édition, menu plus
from: f25f1829
---

Le groupe {{ui:Édition}} de la barre d'outils contient {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}} et {{ui:Coller}}. Son menu {{ui:Plus}} contient le reste : {{ui:Couper}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Coller à la même position}}, {{ui:Dupliquer}}, {{ui:Supprimer}}, {{ui:Tout sélectionner}} et {{ui:Désélectionner tout}}, chacun avec son raccourci. Un bouton ou un élément de menu qui ne peut pas agir pour l'instant est grisé ; survolez-le pour lire la raison (par exemple « rien n'est encore copié »).

Chaque collage, coupe, duplication et suppression compte pour une seule étape : un {{key:Mod+Z}} annule le tout.

## Sélectionner plusieurs pièces

- Cliquez sur une pièce pour la sélectionner. Maintenez {{key:Shift}} (ou {{key:Ctrl}}, ou {{key:Mod}}) et cliquez sur d'autres pièces pour les ajouter ; cliquez de la même façon sur une pièce déjà sélectionnée pour la retirer.
- {{key:Mod+A}} ou {{ui:Tout sélectionner}} sélectionne chaque barre, assemblage et semelle.
- {{key:Esc}} ou {{ui:Désélectionner tout}} vide la sélection.

Avec plusieurs éléments sélectionnés, le panneau {{ui:Propriétés}} porte le titre « 4 sélectionnés » (ou le nombre exact) et liste les barres par type, les assemblages, les semelles et le poids brut d'acier, avec les boutons {{ui:Copier}}, {{ui:Dupliquer}} et {{ui:Supprimer}}.

## Copier

1. Sélectionnez les barres et semelles voulues.
2. Choisissez {{ui:Copier}} ou appuyez sur {{key:Mod+C}}.

Ce qui est copié :

- Chaque barre entière : profilé, matériau, extrémités, position, rotation, nom, trous et découpes. Un profilé personnalisé utilisé est copié aussi.
- Chaque semelle entière : dimensions, béton, nappe inférieure et armatures d'attente.
- Les platines d'extrémité et platines de pied, mais seulement si chaque barre reliée par un assemblage est copiée : la platine d'extrémité d'une poutre a besoin de la poutre et de son poteau. La barre d'état indique combien d'assemblages ont été laissés de côté. Pour exclure volontairement des assemblages, décochez **Copier les platines d'extrémité et de pied avec leurs barres** dans les [paramètres DetailCraft](topic:settings).

Un assemblage seul ne peut pas être copié ; sélectionnez plutôt ses barres. Pour donner le même assemblage à d'autres jonctions, utilisez {{ui:Semblable}} (voir [Platines d'extrémité](topic:end-plates#copy-it-to-every-similar-joint)).

La copie reste dans ce navigateur jusqu'à ce que vous copiiez autre chose. Un autre onglet ou une autre fenêtre DetailCraft du même navigateur peut la coller, ce qui permet de copier un portique d'un modèle et de le coller dans un autre.

## Coller sur une intersection de trames

1. Choisissez {{ui:Coller}} ou appuyez sur {{key:Mod+V}}.
2. Placez le pointeur sur la vue. Un contour en pointillés de la copie suit l'intersection de trames la plus proche du pointeur.
3. Cliquez sur une intersection. Le point de base de la copie (son coin le plus bas : les plus petits x, y et z de tout ce qui est copié) s'y positionne.

Les pièces collées sont ensuite sélectionnées, ce qui permet de coller à nouveau ailleurs ou de les modifier. {{key:Esc}} annule le collage ; la copie reste dans le presse-papiers. {{ui:Plan}} et {{ui:Altitude}} facilitent le choix de la bonne intersection.

:::tip
Pour répéter une travée, sélectionnez les barres de la travée (ou tout avec {{key:Mod+A}}), copiez, collez, puis cliquez sur l'intersection située une travée plus loin que le coin le plus bas de la copie.
:::

## Coller au clavier

Pendant le collage, le panneau {{ui:Propriétés}} affiche le contenu du presse-papiers et deux formulaires :

- {{ui:Coller par décalage (mm, depuis l'original)}} : saisissez x, y et z, puis choisissez {{ui:Coller à ce décalage}}. Il part du décalage des [paramètres DetailCraft](topic:settings).
- {{ui:Coller sur une intersection de trames}} : choisissez une trame lettrée, une trame numérotée et un niveau, puis choisissez {{ui:Coller ici}}. Le point de base s'y positionne.

## Coller à la même position

{{ui:Coller à la même position}} ({{key:Mod+Shift+V}}) place la copie exactement aux coordonnées où elle a été copiée. Utilisez-la après {{ui:Couper}}, ou pour amener des pièces d'un autre modèle au même endroit. Si les originaux sont toujours là, la copie se superpose à eux et la barre d'état le signale : déplacez les copies par leur {{ui:Début}} et leur {{ui:Fin}} dans {{ui:Propriétés}}, ou annulez.

## Dupliquer

{{ui:Dupliquer}} ({{key:Mod+D}}) copie la sélection et la colle aussitôt, décalée du décalage des [paramètres DetailCraft](topic:settings) (6000 mm selon x par défaut). Elle ne modifie pas le contenu du presse-papiers. Les copies sont ensuite sélectionnées : appuyer de nouveau sur {{key:Mod+D}} en crée une suivante à partir d'elles.

## Couper et supprimer

- {{ui:Couper}} ({{key:Mod+X}}) copie la sélection, puis la supprime. Collez-la à son emplacement.
- {{ui:Supprimer}} ({{key:Delete}} ou {{key:Backspace}}) supprime la sélection. Supprimer une barre supprime aussi ses assemblages.

## Repères après un collage

Les repères de pièces et d'assemblages ne sont jamais enregistrés ; DetailCraft les renumérote à partir du modèle après chaque modification ([Attribution des repères](topic:mark-rules)). Ainsi :

- Une copie identique à son original (même profilé, même nuance, même longueur de coupe, mêmes trous et découpes) partage le repère de l'original, et le compte dans {{ui:Repères de pièces}} et la nomenclature augmente.
- Une copie qui devient différente reçoit un repère propre. Une poutre collée sans ses platines d'extrémité, par exemple, n'est pas recoupée, donc c'est une pièce différente. Les repères sont renumérotés pour tout le modèle, si bien que les numéros d'autres pièces peuvent aussi changer.

Chaque barre, trou, découpe, assemblage et semelle collé reçoit un nouvel identifiant : rien du modèle n'est jamais partagé entre une copie et son original.

## Si le presse-papiers est refusé

Le contenu du presse-papiers est vérifié aussi soigneusement qu'un fichier de modèle que vous ouvrez : tout ce qui n'est pas une pièce DetailCraft valide est écarté, et la barre d'état indique quoi. Un presse-papiers rempli par une version plus récente de DetailCraft, ou par autre chose, est refusé avec un message et rien n'est collé. Si une fenêtre privée ne peut pas conserver la copie dans le stockage du navigateur, la copie fonctionne quand même dans cet onglet.
