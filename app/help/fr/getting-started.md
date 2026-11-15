---
title: Premiers pas avec DetailCraft
summary: Ce que fait DetailCraft aujourd'hui, comment l'ouvrir, et un premier modèle, des trames jusqu'à un plan d'atelier, en dix minutes.
keywords: démarrer, premier modèle, introduction, détaillage de l'acier, ferraillage, démarrage rapide, tutoriel, présentation
from: e4f16bbe
---

DetailCraft est l'application de détaillage de l'acier et des armatures de la famille CadCraft. Vous construisez un modèle 3D d'une ossature métallique sur trames et niveaux, vous le connectez et vous obtenez ce dont l'atelier a besoin : repères de pièces et d'assemblages, nomenclature, plans d'atelier pièce par pièce, fichiers NC DSTV, un modèle IFC et un tableau de ferraillage pour les semelles.

Il s'agit d'une version préliminaire. Elle réalise une courte liste de tâches avec soin, plutôt que tout à la fois. Lisez [Ce qui n'est pas encore disponible](topic:not-built-yet) avant de planifier un travail réel avec elle.

## Ce qu'elle fait aujourd'hui

- Trames et niveaux que vous saisissez, en millimètres.
- Poteaux, poutres, contreventements et platines issus de catalogues de profilés publiés (AISC W, S, C, L, HSS et Pipe ; IPE, HEA, HEB et UPN européens ; UB, UC, PFC, EA, UEA, SHS, RHS et CHS britanniques), ainsi que vos propres profilés paramétriques.
- Deux connexions : un assemblage par platine d'extrémité boulonnée, de poutre à semelle de poteau, et une platine de pied de poteau avec quatre tiges d'ancrage. Chacune peut être copiée sur chaque assemblage semblable.
- Trous et échancrures saisis par position.
- Semelles isolées rectangulaires avec un lit inférieur et des barres de démarrage.
- Repères de pièces et d'assemblages qui se mettent à jour seuls après chaque modification.
- Exports : IFC4, fichiers NC DSTV (profilés en I et platines), nomenclature en CSV, tableau de ferraillage en CSV, et un PDF de plan d'atelier d'une pièce.

## Ouvrir DetailCraft

1. Ouvrez DetailCraft dans un navigateur d'ordinateur : Chrome, Edge, Firefox ou Safari. Voir [Navigateurs et ordinateurs](common:browsers).
2. Attendez que l'écran se remplisse. La barre d'état en bas affiche « Prêt. Ouvrez l'exemple, ou définissez les trames et les niveaux, puis commencez à placer des barres. »

La vue du modèle nécessite les graphismes 3D (WebGL). Si le centre de l'écran indique « Ce navigateur n'a pas pu démarrer les graphismes 3D (WebGL) », voir [Dépannage](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vos modèles restent sur votre ordinateur. L'ouverture d'un modèle le lit dans le navigateur, et l'enregistrement télécharge un fichier. Rien n'est téléversé. L'enregistrement dans le cloud n'est pas encore disponible. Voir [Où vont vos fichiers](common:your-files). Pour utiliser DetailCraft plus tard sans connexion, choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre d'application une fois, pendant que vous êtes en ligne ; voir [Travailler hors ligne](common:offline).
:::

:::offline
Vous êtes hors ligne. DetailCraft ne fonctionne sans connexion que s'il a d'abord été enregistré pour un usage hors ligne : le bouton {{ui:Enregistrer pour le hors ligne}} de la barre d'application affiche alors {{ui:Prêt hors ligne}}. Voir [Travailler hors ligne](common:offline).
:::

## Regarder d'abord l'exemple

La façon la plus rapide de voir ce que fabrique DetailCraft est l'ossature exemple.

1. Choisissez {{ui:Exemple}} dans le groupe {{ui:Fichier}} de la barre d'outils.
2. La vue montre une ossature à deux travées : six poteaux avec platines de pied, quatre poutres avec platines d'extrémité, un contreventement et sept semelles avec armatures.
3. Cliquez sur une poutre. Le panneau {{ui:Propriétés}} à droite affiche son repère de pièce, sa longueur de coupe, son poids et les trous créés par les platines d'extrémité.
4. Ouvrez l'onglet {{ui:Nomenclature}} en bas pour voir chaque repère de pièce avec son nombre et son poids.

La visite guidée [Explorer l'ossature exemple](topic:sample-model) la parcourt pièce par pièce.

## Votre premier modèle

Un nouveau modèle comporte déjà les trames 1 à 3 par A à B à 6000 mm, et deux niveaux : Niveau 1 à 0 et Niveau 2 à 4000.

1. Choisissez {{ui:Nouvelle}}. Si le modèle actuel contient des modifications, DetailCraft demande s'il faut d'abord les enregistrer.
2. Choisissez {{ui:Plan}} au-dessus de la vue. La liste des niveaux à côté sélectionne Niveau 1.
3. Choisissez {{ui:Poteau}} dans la barre d'outils, ou appuyez sur {{key:C}}.
4. Cliquez sur l'intersection de trames A/1. Un poteau W12x50 apparaît du Niveau 1 au Niveau 2. La barre d'état indique où il a été placé.
5. Cliquez sur B/1, A/2 et B/2 pour en placer trois autres.
6. Choisissez Niveau 2 dans la liste des niveaux, puis choisissez {{ui:Poutre}} ou appuyez sur {{key:B}}.
7. Cliquez sur A/1, puis sur A/2. Une poutre W16x26 relie les deux têtes de poteaux, son dessus d'acier au niveau.
8. Appuyez sur {{key:Esc}} pour revenir à {{ui:Sélectionner}}, puis cliquez sur la poutre.
9. Choisissez {{ui:Platines d'extrémité}} dans le groupe {{ui:Connexions}}. Les deux extrémités reçoivent une platine d'extrémité boulonnée, la poutre est raccourcie pour s'ajuster, et la première platine d'extrémité est maintenant sélectionnée.
10. Cliquez de nouveau sur la poutre.
11. Choisissez {{ui:Plan d'atelier}} dans le groupe {{ui:Sortie}}. Un aperçu du plan d'atelier de la poutre s'ouvre. Choisissez {{ui:Télécharger le PDF}}.
12. Appuyez sur {{key:Mod+S}} pour enregistrer le modèle. Le navigateur télécharge `Untitled.detailcraft.json`.

Renommez le modèle dans le champ {{ui:Nom}} en haut à gauche avant d'enregistrer, afin que le fichier et chaque export portent son nom.

## Où aller ensuite

- [Présentation de l'écran](topic:workspace)
- [Définir les trames et les niveaux](topic:grids-and-levels)
- [Se déplacer dans la vue 3D](topic:navigate-3d), avec une souris, un pavé tactile ou un écran tactile
- [Passer d'autres logiciels de détaillage](topic:coming-from), si vous en connaissez un grand
- [Utiliser cette aide](common:help)
