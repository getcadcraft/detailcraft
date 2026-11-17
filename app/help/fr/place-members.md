---
title: Placer poteaux, poutres et contreventements
summary: Choisir un profilé, un matériau et une position, puis cliquer sur les intersections de trames ou les saisir pour placer des barres en acier.
keywords: poteau, poutre, contreventement, barre, placer, profilé, matériau, rotation, position, décalage, insérer, ajouter par trame
from: d6db0dc1
---

Les barres se placent aux intersections des trames : un poteau sur une intersection, une poutre ou un contreventement entre deux intersections. Définissez d'abord les [trames et niveaux](topic:grids-and-levels).

## Choisir un outil et ses options

1. Choisissez {{ui:Poteau}} ({{key:C}}), {{ui:Poutre}} ({{key:B}}) ou {{ui:Contreventement}} ({{key:R}}) dans le groupe {{ui:Placer}}.
2. Le panneau {{ui:Propriétés}} à droite devient « Placer un poteau » (ou une poutre, ou un contreventement) et affiche les options de la barre suivante :
   - {{ui:Profil}} : choisissez dans la liste. Les tailles sont regroupées par catalogue (profilés W, profilés en U, cornières, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, et vos profils personnalisés). Voir [Catalogue des profilés](topic:profile-catalog).
   - {{ui:Matériau}} : A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ou S355.
   - {{ui:Position}} : où la section se place sur la ligne entre les deux points : {{ui:Dessus de l'acier sur la ligne}}, {{ui:Centré sur la ligne}} ou {{ui:Dessous sur la ligne}}.
   - {{ui:Rotation (°)}} : fait tourner la section autour de l'axe propre de la barre.
   - {{ui:Jusqu'à}} (poteaux seulement) : {{ui:Le niveau suivant}}, ou un nom de niveau.
3. Sous les options, une zone {{ui:Profil}} liste les dimensions de la section choisie, son aire, sa masse par mètre et le catalogue d'où elle vient.

Les valeurs par défaut sont W12x50 en A992 pour les poteaux (centré), W16x26 en A992 pour les poutres (dessus de l'acier sur la ligne) et HSS6x6x1/4 en A500 Gr C pour les contreventements (centré). Les options restent définies jusqu'à ce que vous les modifiez.

## Placer en cliquant

### Un poteau

1. Choisissez {{ui:Plan}} et sélectionnez le niveau où commence le poteau.
2. Choisissez {{ui:Poteau}}.
3. Approchez le pointeur d'une intersection. Le point le plus proche s'allume et la barre d'état le nomme.
4. Cliquez. Le poteau va de ce niveau au niveau suivant (ou jusqu'au niveau {{ui:Jusqu'à}}). La barre d'état indique par exemple « Poteau W12x50 en A/1, du niveau 1 au niveau 2. »
5. Continuez à cliquer pour en placer d'autres. Appuyez sur {{key:Esc}} lorsque vous avez terminé.

S'il n'y a pas de niveau au-dessus de celui sur lequel vous avez cliqué, la barre d'état affiche : « Il n'y a pas de niveau au-dessus du niveau 2 que le poteau puisse atteindre. Ajoutez d'abord un niveau. »

### Une poutre

1. Choisissez {{ui:Plan}} et sélectionnez le niveau de la poutre.
2. Choisissez {{ui:Poutre}}.
3. Cliquez sur la première intersection. La barre d'état indique « Depuis A/1 au niveau 2. Cliquez maintenant sur l'autre extrémité (Échap annule). » Une ligne en pointillés suit le pointeur.
4. Cliquez sur la seconde intersection. La poutre apparaît.
5. Cliquez à nouveau pour commencer la poutre suivante, ou appuyez sur {{key:Esc}}.

{{key:Esc}} après le premier clic annule seulement ce point ; un second {{key:Esc}} range l'outil.

### Un contreventement

Un contreventement relie deux intersections à des niveaux différents, il est donc plus simple de le placer en {{ui:Altitude}}.

1. Choisissez {{ui:Altitude}} et sélectionnez la ligne de trame lettrée sur laquelle se trouve le contreventement.
2. Choisissez {{ui:Contreventement}}.
3. Cliquez sur l'extrémité basse, puis sur l'extrémité haute.

Les altitudes n'existent que pour les trames lettrées. Pour un contreventement dans un portique le long d'une trame numérotée (de A à B), utilisez {{ui:3D}} ou le formulaire {{ui:Ajouter par trame}} ci-dessous.

:::touch
Sur écran tactile, appuyez près de l'intersection : un appui choisit le point le plus proche à courte distance, et ne fait rien si aucun point n'est proche. Il n'y a pas de mise en évidence avant l'appui : vérifiez donc le message de la barre d'état après chaque appui. Un glissement à un doigt fait pivoter ou déplace la vue au lieu de placer.
:::

## Placer par trame, sans cliquer

Chaque outil de placement dispose d'un formulaire {{ui:Ajouter par trame}} au bas du panneau {{ui:Propriétés}}. Il fonctionne uniquement au clavier et n'a pas besoin de la vue 3D.

1. Choisissez l'outil, par exemple {{ui:Poutre}}.
2. Dans {{ui:Ajouter par trame}}, choisissez {{ui:Depuis la trame (lettre)}}, {{ui:Depuis la trame (chiffre)}} et {{ui:Depuis le niveau}}.
3. Choisissez {{ui:Vers la trame (lettre)}}, {{ui:Vers la trame (chiffre)}} et {{ui:Vers le niveau}}.
4. Choisissez {{ui:Ajouter}}.

Pour un poteau ou une semelle, le formulaire ne comporte qu'un seul point : {{ui:Trame (lettre)}}, {{ui:Trame (chiffre)}} et {{ui:Niveau}}.

## Modifier une barre après l'avoir placée

1. Appuyez sur {{key:Esc}} (ou choisissez {{ui:Sélectionner}}, {{key:V}}) et cliquez sur la barre.
2. Dans le panneau {{ui:Propriétés}}, modifiez {{ui:Nom}}, {{ui:Profil}}, {{ui:Matériau}}, {{ui:Position}} ou {{ui:Rotation (°)}}.
3. Pour la déplacer, modifiez les x, y et z de {{ui:Début}} ou {{ui:Fin}} sous {{ui:Extrémités (x, y, z mm)}}. Le nom de trame de chaque extrémité s'affiche dessous, ou ses coordonnées si elle est hors trame.

Chaque modification équivaut à une étape d'annulation. Sous les champs, vous voyez le {{ui:Repère}} de la barre, son {{ui:Assemblage}}, sa {{ui:Longueur de coupe}}, son {{ui:Poids}} (brut : les trous et les échancrures ne sont pas déduits) et le catalogue d'où vient le profilé.

Les barres ne peuvent pas encore être glissées ni réseautées. Pour en créer une semblable, copiez-la et collez-la, ou dupliquez-la ({{key:Mod+D}}) : voir [Copier, coller et dupliquer](topic:copy-paste).

## Supprimer une barre

Sélectionnez-la et appuyez sur {{key:Delete}} ou {{key:Backspace}}, ou choisissez {{ui:Supprimer}}. Les assemblages qui s'y rattachent disparaissent aussi. {{key:Mod+Z}} restaure tout.

## À savoir

- **Sens d'un poteau.** À {{ui:Rotation (°)}} 0, les ailes d'un poteau sont orientées selon x, vers les trames numérotées voisines. Une poutre de la trame 1 à la trame 2 se raccorde sur une aile ; une poutre de A à B se raccorde sur l'âme. Les platines d'extrémité ne se posent que sur les ailes : si vos poutres vont de A à B, donnez à ces poteaux une rotation de 90.
- **Les poutres d'un niveau pendent sous celui-ci** avec la valeur par défaut {{ui:Dessus de l'acier sur la ligne}}. Choisissez {{ui:Centré sur la ligne}} si vos niveaux sont les axes des barres.
- **Les poteaux vont d'un niveau à l'autre.** Pour un poteau sur deux étages, réglez {{ui:Jusqu'à}} sur le niveau le plus haut.
- **Les poutres inclinées** sont autorisées (choisissez des extrémités à des niveaux différents), mais les platines d'extrémité ne sont pas encore posées sur elles.

Suite : [Relier des poutres à des poteaux avec des platines d'extrémité](topic:end-plates).
