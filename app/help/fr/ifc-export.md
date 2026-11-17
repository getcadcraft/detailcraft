---
title: Exporter l'IFC pour la coordination
summary: Écrire un fichier IFC4 de tout le modèle (acier, boulons, semelles et armatures) pour le partager avec les architectes, les ingénieurs et d'autres logiciels.
keywords: ifc, ifc4, ifc2x3, bim, exporter, importer, importer ifc, trous, boulons, boulons en vrac, ouvertures, attaches, coordination, échange de modèles, step, openbim, conflit, visionneuse
from: cfcb0cd6
---

L'export IFC écrit tout le modèle en un seul fichier IFC4 que les logiciels BIM et les visionneuses IFC peuvent ouvrir.

## Exporter

1. Choisissez {{ui:IFC}} dans le groupe {{ui:Sortie}}.
2. Le navigateur télécharge `<name>.ifc`. La barre d'état indique ce qui a été exporté, par exemple « IFC4 exporté : 25 pièces, 88 attaches, 7 semelles, 132 armatures. »

Si le modèle ne contient ni pièces, ni semelles, ni armatures, la barre d'état indique « Rien à exporter pour le moment. »

## Contenu du fichier

| Dans DetailCraft | Dans le fichier IFC |
|---|---|
| Chaque niveau | Un niveau de bâtiment (IfcBuildingStorey), sous un projet, un site et un bâtiment uniques |
| Trames | Un IfcGrid avec ses axes et ses étiquettes |
| Poteaux, poutres, contreventements | IfcColumn, IfcBeam, IfcMember (contreventement), chacun une extrusion d'une forme de profilé standard avec ses dimensions réelles |
| Platines, platines d'extrémité, platines de pied | IfcPlate |
| Trous et échancrures | Ouvertures (IfcOpeningElement) découpées dans la pièce |
| Une barre et ses platines soudées | Un assemblage (IfcElementAssembly) marqué du repère d'assemblage |
| Boulons et tiges d'ancrage | IfcMechanicalFastener avec diamètre et longueur |
| Semelles | IfcFooting (semelle isolée), avec le béton comme matériau |
| Chaque armature | IfcReinforcingBar avec son repère, son diamètre, sa section et sa longueur, balayée sur son axe réel avec de vrais arcs aux coudes |

L'étiquette de chaque pièce est son repère de pièce. Chaque élément porte aussi un ensemble de propriétés « DetailCraft » avec ses repères, son profilé et sa masse. Chaque élément se place dans le niveau le plus haut situé au-dessus ou au niveau de son point le plus bas. Les matériaux sont regroupés par nuance.

## Identifiants stables pour les réexportations

Chaque identifiant IFC (GlobalId) d'élément est calculé à partir du nom du modèle et de l'identifiant propre de l'élément dans le modèle. Exportez deux fois le même modèle et les identifiants concordent, de sorte que les logiciels qui comparent les versions peuvent repérer ce qui a changé.

:::warning
Renommer le modèle change tous les identifiants. Gardez le même nom de modèle entre les envois d'un projet.
:::

## Vérifier

Les fichiers IFC de DetailCraft sont relus par un lecteur IFC indépendant dans sa suite de tests. Les logiciels ne lisent pas l'IFC de la même façon : ouvrez le fichier dans le logiciel de votre équipe avant de vous y fier. L'application BimCraft de CadCraft ouvre aussi les fichiers IFC.

## Pas encore disponible

- Importer des connexions, des semelles et des armatures depuis un fichier IFC. {{ui:Importer un IFC}} importe les poutres, poteaux, barres, platines, trames, niveaux, trous, échancrures et boulons, et liste ce qu'il a laissé de côté.
- Les données analytiques ou de calcul de structure.
- Tout ce qui n'est pas la vue de référence IFC4.

## Importer

{{ui:Importer un IFC}} dans le groupe {{ui:Fichier}} (ou glisser un fichier `.ifc` sur la vue) crée un nouveau modèle à partir d'un fichier IFC2X3 ou IFC4 :

- **Poutres, poteaux, barres (contreventements) et platines** dont le corps est un profilé extrudé connu de DetailCraft, rattachés au catalogue ou conservés comme profilé personnalisé ; **trames** et **niveaux** issus de la trame et des étages du fichier.
- **Trous :** chaque trou circulaire (IfcOpeningElement percutant une pièce importée), perpendiculaire à l'une des faces de la pièce : âme ou semelles d'un profilé en I ou d'un fer U, parois d'un tube, une platine, les ailes d'une cornière. Un trou traversant les deux parois d'un tube n'est importé qu'une fois.
- **Échancrures :** une ouverture rectangulaire prenant toute la largeur d'un profilé en I ou d'un fer U depuis une extrémité, vers le bas depuis le haut ou vers le haut depuis le bas.
- **Boulons :** chaque IfcMechanicalFastener ou IfcFastener, avec son diamètre, sa longueur, sa nuance et sa nature (boulon ou tige d'ancrage), comme **boulon en vrac**. Les boulons en vrac apparaissent dans la vue, la nomenclature et l'export IFC, et restent en place lorsque vous déplacez les barres. Le panneau {{ui:Propriétés}}, sans sélection, les compte et propose {{ui:Retirer les boulons en vrac}} pour le cas où vous ajoutez des connexions à la place.

Le rapport liste tout le reste par classe, avec la raison de son exclusion : murs et dalles, semelles et armatures, trous oblongs, trous dans les tubes ronds, connexions (un fichier IFC transporte leurs platines et leurs boulons, non la règle qui les a créés).
