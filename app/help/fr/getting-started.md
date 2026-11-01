---
title: Premiers pas avec DetailCraft
summary: Ce que fait DetailCraft aujourd'hui, comment l'ouvrir, et un premier modèle, des trames au plan d'atelier, en dix minutes.
keywords: démarrer, premier modèle, introduction, détail de charpente métallique, armatures, démarrage rapide, tutoriel, présentation
from: 3682c0d8
---

DetailCraft est l'application de détail de charpente métallique et d'armatures de la famille CadCraft. Vous construisez un modèle 3D d'une ossature en acier sur des trames et des niveaux, vous l'assemblez, et vous obtenez ce dont l'atelier a besoin : repères de pièces et d'ensembles, une nomenclature, des plans d'atelier de pièces isolées, des fichiers NC DSTV, un modèle IFC et un état de façonnage des armatures pour les semelles.

C'est une version préliminaire. Elle fait une courte liste de choses avec soin plutôt que tout à la fois. Lisez [Ce qui n'est pas encore réalisé](topic:not-built-yet) avant de planifier un vrai travail avec elle.

## Ce qu'elle fait aujourd'hui

- Des trames et des niveaux que vous saisissez, en millimètres.
- Des poteaux, des poutres, des contreventements et des platines à partir de catalogues de profilés publiés (AISC W, S, C, L, HSS et Pipe ; IPE, HEA, HEB et UPN européens), plus vos propres profilés paramétriques.
- Deux assemblages : une platine d'extrémité boulonnée d'une poutre sur l'aile d'un poteau, et une platine de pied de poteau avec quatre tiges d'ancrage. Chacun peut être copié sur tous les nœuds semblables.
- Des trous et des échancrures saisis par position.
- Des semelles isolées rectangulaires avec une nappe inférieure et des armatures en attente.
- Des repères de pièces et d'ensembles qui se mettent à jour seuls après chaque modification.
- Exports : IFC4, fichiers NC DSTV (profilés en I et platines), nomenclature en CSV, état de façonnage en CSV, et un PDF de plan d'atelier d'une pièce.

## Ouvrir DetailCraft

1. Ouvrez DetailCraft dans un navigateur de bureau : Chrome, Edge, Firefox ou Safari. Voir [Navigateurs et ordinateurs](common:browsers).
2. Attendez que l'écran se remplisse. La barre d'état en bas indique « Prêt. Ouvrez l'exemple, ou réglez les trames et les niveaux et commencez à placer des éléments. »

La vue du modèle nécessite les graphismes 3D (WebGL). Si le milieu de l'écran indique « Ce navigateur n'a pas pu démarrer la 3D (WebGL) », voir [Dépannage](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vos modèles restent sur votre ordinateur. Ouvrir un modèle le lit dans le navigateur, et enregistrer télécharge un fichier. Rien n'est téléversé. L'enregistrement dans le cloud n'est pas encore disponible. Voir [Où vont vos fichiers](common:your-files). Pour utiliser DetailCraft plus tard sans connexion, choisissez une fois {{ui:Enregistrer pour le hors ligne}} dans la barre d'application, en ligne ; voir [Travailler hors ligne](common:offline).
:::

:::offline
Vous êtes hors ligne. DetailCraft ne fonctionne sans connexion que s'il a d'abord été enregistré pour une utilisation hors ligne : le bouton {{ui:Enregistrer pour le hors ligne}} de la barre d'application affiche alors {{ui:Prêt hors ligne}}. Voir [Travailler hors ligne](common:offline).
:::

## Commencez par regarder l'exemple

Le moyen le plus rapide de voir ce que produit DetailCraft est l'ossature exemple.

1. Choisissez {{ui:Exemple}} dans le groupe {{ui:Fichier}} de la barre d'outils.
2. La vue montre une ossature à deux travées : six poteaux avec platines de pied, quatre poutres avec platines d'extrémité, un contreventement et sept semelles avec armatures.
3. Cliquez sur une poutre. Le panneau {{ui:Propriétés}} à droite affiche son repère de pièce, sa longueur de coupe, son poids et les trous réalisés par les platines d'extrémité.
4. Ouvrez l'onglet {{ui:Nomenclature}} en bas pour voir chaque repère de pièce avec sa quantité et son poids.

Le pas à pas [Explorer l'ossature exemple](topic:sample-model) la parcourt pièce par pièce.

## Votre premier modèle

Un nouveau modèle a déjà des trames de 1 à 3 par A à B à 6000 mm et deux niveaux, Niveau 1 à 0 et Niveau 2 à 4000.

1. Choisissez {{ui:Nouvelle}}. Si le modèle actuel a des modifications, DetailCraft demande s'il faut d'abord les enregistrer.
2. Choisissez {{ui:Plan}} au-dessus de la vue. La liste des niveaux à côté sélectionne Niveau 1.
3. Choisissez {{ui:Poteau}} dans la barre d'outils, ou appuyez sur {{key:C}}.
4. Cliquez sur l'intersection de trames A/1. Un poteau W12x50 apparaît du Niveau 1 au Niveau 2. La barre d'état indique où il a été placé.
5. Cliquez sur B/1, A/2 et B/2 pour en placer trois autres.
6. Choisissez Niveau 2 dans la liste des niveaux, puis {{ui:Poutre}} ou appuyez sur {{key:B}}.
7. Cliquez sur A/1, puis sur A/2. Une poutre W16x26 relie les deux têtes de poteaux, son dessus d'acier au niveau.
8. Appuyez sur {{key:Esc}} pour revenir à {{ui:Sélectionner}}, puis cliquez sur la poutre.
9. Choisissez {{ui:Platines d'extrémité}} dans le groupe {{ui:Connexions}}. Les deux extrémités reçoivent une platine d'extrémité boulonnée, la poutre est raccourcie pour s'ajuster, et la première platine d'extrémité est maintenant sélectionnée.
10. Cliquez de nouveau sur la poutre.
11. Choisissez {{ui:Plan d'atelier}} dans le groupe {{ui:Sortie}}. Un aperçu du plan d'atelier de la poutre s'ouvre. Choisissez {{ui:Télécharger le PDF}}.
12. Appuyez sur {{key:Mod+S}} pour enregistrer le modèle. Le navigateur télécharge `Untitled.detailcraft.json`.

Renommez le modèle dans le champ {{ui:Nom}} en haut à gauche avant d'enregistrer, pour que le fichier et chaque export portent son nom.

## Pour continuer

- [Visite de l'écran](topic:workspace)
- [Définir les trames et les niveaux](topic:grids-and-levels)
- [Se déplacer dans la vue 3D](topic:navigate-3d), avec une souris, un pavé tactile ou un écran tactile
- [Venir d'un autre logiciel de détail](topic:coming-from), si vous connaissez un grand logiciel de détail
- [Utiliser cette aide](common:help)
