---
title: Paramètres de DetailCraft
summary: Démarrez les nouveaux éléments en profilés américains ou européens, réglez le décalage de Dupliquer, choisissez si les copies emportent leurs connexions, et affichez ou masquez les boulons dans la vue 3D.
keywords: paramètres, préférences, format de feuille, format de papier, dessins, options, acier, aisc, en, européen, profilés américains, profilés métriques, profil par défaut, nuance, s355, a992, décalage de duplication, décalage de collage, copier les connexions, boulons, tiges d'ancrage, masquer les boulons, réinitialiser
from: e46cea57
---

Ouvrez {{ui:Paramètres}} avec l'engrenage de la barre d'application ou avec {{key:Mod+,}}. Le premier onglet, {{ui:DetailCraft}}, regroupe les paramètres propres à cette application ; {{ui:Général}} regroupe ceux que partagent toutes les applications CadCraft (thème, barre d'outils, panneaux). Les paramètres de DetailCraft n'existent que dans l'application : vous les modifiez ici, ils prennent effet immédiatement, et ce navigateur s'en souvient. Ils ne sont pas enregistrés dans votre fichier de modèle.

## Nouveaux éléments

Profils et nuances avec lesquels démarrent les outils de placement :

| Outil | Profilés américains (AISC), A992 | Profilés européens (EN), S355 |
|---|---|---|
| {{ui:Poutre}} | W16x26, A992 | IPE300, S355 |
| {{ui:Poteau}} | W12x50, A992 | HEB200, S355 |
| {{ui:Contreventement}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Platine}} | A36 | S355 |

Les profilés américains sont le point de départ. Le choix européen utilise un HEA160 pour les contreventements, car le catalogue EN de DetailCraft ne comporte pas encore de sections creuses ([Catalogue des profilés](topic:profile-catalog)). Vous pouvez tout de même choisir n'importe quel profil et nuance pour la pièce suivante dans le panneau {{ui:Propriétés}} tant qu'un outil de placement est actif. Les éléments déjà présents dans le modèle conservent leur propre profil et leur nuance.

## Dupliquer et coller

- **Décalage (mm)** : x, y et z. {{ui:Dupliquer}} ({{key:Mod+D}}) place la copie à cette distance de l'original, et le formulaire {{ui:Coller par décalage (mm, depuis l'original)}} part de cette valeur. Il démarre à 6000, 0, 0 : une travée de 6 m le long des trames numérotées. Réglez-le sur votre entraxe de travées, ou sur une hauteur de niveau en z pour copier un étage vers le haut.
- **Copier les platines d'extrémité et de pied avec leurs éléments** (activé au départ) : une connexion accompagne une copie seulement si tous les éléments qu'elle relie sont copiés. Décochez-la pour copier des éléments et des semelles sans leurs connexions, par exemple pour essayer une autre connexion sur la copie.

Voir [Copier, coller et dupliquer](topic:copy-paste).

## Vue 3D

**Afficher les boulons et tiges d'ancrage** (activé au départ). Décochez-la pour les masquer dans la vue et voir les trous et les platines d'un assemblage chargé. Les boulons masqués ne peuvent pas être cliqués ; cliquez sur la platine pour sélectionner la connexion. La nomenclature, les plans et tous les exports incluent toujours chaque boulon et chaque tige.

## Indicateur de coin

Ce qui s'affiche dans le coin de la vue 3D : **ViewCube** (par défaut ; en haut à droite — cliquez sur une face, une arête ou un coin pour regarder depuis là, faites-le glisser pour tourner autour, faites glisser son anneau de boussole pour faire pivoter le modèle), **Icône d'axes** (un petit repère X, Y, Z en bas à gauche qui tourne avec la vue : X en rouge, Y en vert, Z en bleu) ou **Aucun**. Uniquement en {{ui:3D}} ; {{ui:Plan}} et {{ui:Altitude}} n'affichent ni l'un ni l'autre. Voir [Le ViewCube](topic:view-cube).

## Réinitialiser

{{ui:Réinitialiser les paramètres de DetailCraft}} en bas de la boîte de dialogue remet ceux-ci à leurs valeurs initiales (profilés américains, décalage 6000, 0, 0, connexions copiées, boulons affichés), ainsi que ceux de {{ui:Général}}.

## Dessins

**Format de feuille** : les plans de feuille et les plans d'atelier sont réalisés en format paysage : A4, A3 (par défaut), A2, A1, ANSI B, ANSI C ou ANSI D. Les fenêtres {{ui:Dessins}} et plans d'atelier ont la même liste. Voir [Plans d'ensemble et d'assemblage](topic:drawings).

## Armatures

- **Noms de barres ASTM** : #3 à #11, ou les noms métriques #10 à #36 pour les mêmes barres.
- **Codes de forme du tableau de ferraillage** : les codes S, L, U de DetailCraft ; les types ACI 315 ; ou les codes de forme BS 8666. Voir [Référence des armatures](topic:rebar-reference).

## Glisser pour sélectionner

**Rectangle** (comme auparavant) ou **Lasso** : une ligne à main levée, avec {{key:Space}} pour basculer entre intérieur, contact et clôture pendant le glissement. Voir [Sélectionner avec une fenêtre](topic:select-and-change#select-with-a-window).
