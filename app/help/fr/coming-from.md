---
title: Venir d'autres logiciels de détaillage
summary: Comment les habitudes d'un logiciel de détaillage complet correspondent à DetailCraft, et les différences qui piègent les détailleurs expérimentés.
keywords: changement, migration, familier, flux de travail, comparaison, différences, numérotation, composants, catalogue, dessins, habitudes
from: 39639a5d
---

Si vous détaillez dans Tekla Structures, la plupart de DetailCraft vous semblera familier : trames, niveaux, profilés d'un catalogue, pièces et assemblages, connexions, numérotation, fichiers NC, IFC. L'échelle est très différente : Tekla Structures est un système de production complet, et DetailCraft est une petite application de navigateur, récente, qui réalise quelques tâches de bout en bout. Cette page indique où vos habitudes se transposent et où elles ne le font pas.

:::tip
Si vos mains connaissent le ruban de Tekla Structures, choisissez le style de menu {{ui:Ruban acier}} dans {{ui:Paramètres}} › {{ui:DetailCraft}} › {{ui:Menus, touches et souris}} : onglets Modélisation, Détaillage, Édition, Dessins, Fabrication et Vue, et le bouton central fait le panoramique. Si vous venez d'AutoCAD et aimez taper des commandes, {{ui:Dessin classique}} ajoute une ligne de commande (BEAM, COLUMN, ENDPLATE, ZOOM …). Voir [Menus, touches et souris](topic:menus-keys-and-mouse).
:::

## Correspondances rapides

| Vous avez l'habitude de | Dans DetailCraft |
|---|---|
| Créer des trames avec des coordonnées dans une boîte de dialogue | {{ui:Grilles}} dans le panneau de gauche : des libellés et les écarts entre les lignes, pas des coordonnées absolues. Les lignes numérotées vont dans un sens, les lignes lettrées dans l'autre |
| Des niveaux comme coordonnées Z de la trame | Une liste {{ui:Niveaux}} séparée, avec un nom et une altitude par ligne, appliquée avec {{ui:Appliquer les niveaux}} |
| Choisir des points n'importe où avec des accrochages | Les clics ne s'accrochent qu'aux intersections de trame. Les points hors trame se saisissent dans {{ui:Extrémités (x, y, z mm)}} d'un élément |
| Les commandes poteau, poutre et platine | {{ui:Poteau}} ({{key:C}}), {{ui:Poutre}} ({{key:B}}), {{ui:Contreventement}} ({{key:R}}), {{ui:Platine}} ({{key:P}}), {{ui:Semelle}} ({{key:F}}) |
| La boîte de dialogue des propriétés d'une pièce (double-clic sur une pièce) | Un clic : le panneau {{ui:Propriétés}} à droite est toujours actif ; il n'y a ni boîte de dialogue ni bouton Modifier ou Appliquer |
| Position sur le plan, rotation et réglages de profondeur | {{ui:Position}} (dessus de l'acier, centré ou dessous sur la ligne) et {{ui:Rotation (°)}}. Pas de décalages horizontaux séparés |
| Le catalogue des profilés | Une liste fixe de 2,311 dimensions publiées (AISC W, S, C, L, HSS, Pipe ; européens IPE, HEA, HEB, UPN ; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS et sections creuses formées à froid), plus des platines paramétriques et vos propres sections {{ui:Profil personnalisé}} |
| Le catalogue des matériaux | Sept nuances dans une liste : A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Appliquer un composant de connexion et sa boîte de dialogue | Sélectionnez la poutre, choisissez {{ui:Platines d'extrémité}}. Les réglages apparaissent dans le panneau {{ui:Propriétés}}. Deux connexions seulement existent (platine d'extrémité sur semelle de poteau, platine de pied) |
| Connexion automatique, ou copie d'un nœud sur des nœuds semblables | Sélectionnez une connexion, choisissez {{ui:Appliquer aux semblables (n)}} |
| Numérotation avec séries et numéros de départ | Aucune commande : les repères se mettent à jour d'eux-mêmes après chaque modification, avec les préfixes fixes c, b, br, p et C, B, BR, P |
| Boîtes de dialogue de boulons et de trous | Les trous se saisissent par face et position. Les boulons ne viennent que des connexions |
| Outils de coupe, d'ajustement et de découpe par polygone | Découpes (dessus ou dessous, à l'une ou l'autre extrémité) sur les profilés en I seulement. Les retraits de connexion sont automatiques |
| Rapports et modèles | Trois rapports fixes dans des onglets en bas, et des téléchargements CSV |
| Création de dessins et liste de dessins | Un plan d'atelier par repère de pièce, tous réalisés en même temps, prévisualisés puis téléchargés en un seul PDF ou feuille par feuille. Rien n'est conservé ni modifié |
| Export de fichiers NC | {{ui:Fichiers NC}} : un fichier DSTV par repère de pièce, profilés en I et platines seulement, archivé en zip |
| Export IFC | {{ui:IFC}} : IFC4 de tout le modèle, avec les armatures |
| Armatures dans toute pièce en béton | Armatures seulement dans les semelles isolées rectangulaires, avec des tailles de barres US, une nappe inférieure et des barres d'attente |
| Modèle enregistré dans un dossier de projet, multi-utilisateur | Un fichier `.detailcraft.json` que vous téléchargez. Un seul utilisateur, sur votre ordinateur |
| Historique d'annulation | {{key:Mod+Z}} et {{key:Mod+Y}}, jusqu'à 200 étapes, conservé jusqu'à l'ouverture ou la création d'un autre modèle |

## Différences qui piègent

### Les repères changent d'eux-mêmes

Il n'y a pas d'étape de numérotation. Les repères sont recalculés après chaque modification, ils sont donc toujours à jour, mais ils peuvent aussi être renumérotés : ajoutez un poteau et le c3 d'hier peut devenir c4. Il n'y a pas d'« historique de numérotation » pour conserver les anciens repères. Terminez le modèle, puis établissez la nomenclature, les fichiers NC et les plans d'atelier ensemble, à partir d'un même fichier enregistré.

### Le bouton central de la souris zoome ; il ne fait pas de panoramique

Dans la vue 3D : glisser avec le bouton gauche fait tourner, glisser avec le bouton droit fait un panoramique, la molette zoome, et glisser avec le bouton central zoome aussi. Maintenir {{key:Shift}} en glissant avec le bouton gauche fait également un panoramique. La molette zoome vers le milieu de la vue, et non vers le pointeur. Il n'y a pas de choix de centre de rotation : le modèle tourne autour du milieu de la vue. Voir [Se déplacer dans la vue 3D](topic:navigate-3d).

### Les poteaux sont orientés d'une seule façon par défaut

À la rotation 0, les semelles d'un poteau s'alignent sur la direction de la trame numérotée. Les poutres qui courent entre les lignes lettrées se raccordent à l'âme, et les platines d'extrémité y sont refusées (« Les poutres se raccordant à l'âme d'un poteau ne sont pas encore disponibles. »). Tournez ces poteaux de 90° avant d'ajouter des connexions.

### Vues en élévation seulement sur les lignes lettrées

{{ui:Altitude}} ne regarde que le long des lignes de trame lettrées. Il n'y a pas de vues le long des lignes numérotées, pas de vues enregistrées ni de plans de travail. Utilisez {{ui:3D}} ou {{ui:Ajouter par trame}} pour les portiques sur lignes numérotées.

### Sélection, copie et déplacement

Sélectionnez plusieurs pièces avec {{key:Shift}}+clic ou {{key:Mod+A}}, puis copiez, coupez, collez (sur une intersection de trame, à un décalage saisi, ou sur place) et dupliquez-les, connexions comprises ([Copier, coller et dupliquer](topic:copy-paste)). Il n'y a pas de sélection par fenêtre, pas de filtre de sélection, pas de déplacement, de symétrie ni de réseau, et les propriétés se modifient une pièce à la fois dans le panneau {{ui:Propriétés}}.

### Les trames n'entraînent pas les éléments

Les pièces gardent leurs coordonnées lorsque vous modifiez l'écart des lignes de trame ; rien ne suit les lignes. Modifiez la trame avant de placer l'acier, ou éditez ensuite les coordonnées d'extrémité de chaque pièce.

### Les assemblages ne sont pas dimensionnés

Les deux connexions placent platines, trous, boulons et soudures à partir des valeurs que vous donnez. Il n'existe aucune vérification de dimensionnement, seulement des avertissements de bord et d'espacement (d'après l'EN 1993-1-8, tableau 3.3).

### Les trous ne sont pas découpés dans la vue 3D

Les trous apparaissent comme des bouchons sombres. Ce sont de vrais trous dans les fichiers NC, les plans d'atelier et le fichier IFC. Les découpes sont faites dans la vue.

### Les poids sont bruts

Le poids de l'acier ne déduit ni trous ni découpes, et le poids des boulons n'est pas inclus.

### Millimètres uniquement

Tout est saisi et affiché en millimètres, même pour les profilés AISC. Les noms de profilés gardent leur forme publiée (W12x50, HSS6x6x1/4).

### Pas de dessins à gérer

Il n'y a ni liste de dessins, ni éditeur de dessins, ni plan général ni plan d'ensemble. Un plan d'atelier est établi lorsque vous le demandez, puis téléchargé ; pour le modifier, changez le modèle et refaites-le.

### Cela fonctionne dans un navigateur

Enregistrer télécharge un fichier. Les raccourcis clavier que le navigateur réserve pour lui ne peuvent pas être utilisés. Vos modèles ne quittent jamais votre ordinateur : voir [Où vont vos fichiers](common:your-files).

## Ce que vous continuez de faire dans votre logiciel actuel

Aujourd'hui, DetailCraft convient aux petits portiques, à la vérification d'une idée, à l'enseignement, ou à la production de fichiers NC et de plans d'atelier pour des travaux simples de poutres et de poteaux. Gardez les connexions complexes, les plans généraux, les plans de montage, les projets multi-utilisateurs et tout ce qui figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet) dans le logiciel que vous utilisez déjà.
