---
title: Vérifier les repères et la nomenclature
summary: Lire les repères de pièces et d'assemblages que DetailCraft attribue à chaque élément, vérifier la nomenclature et la télécharger en CSV.
keywords: repères, numérotation, repère de pièce, repère d'assemblage, nomenclature, liste de matériaux, masses, liste de boulons, csv
from: caa2ee80
---

DetailCraft repère le modèle de lui-même. Il n'y a pas de commande de numérotation et rien à lancer : après chaque modification, il détermine quelles pièces sont la même pièce d'acier et leur donne un seul repère.

## Où apparaissent les repères

- La liste {{ui:Repères de pièces}} du panneau {{ui:Modèle}} : chaque repère avec son profilé, sa longueur et son nombre. Cliquez sur un repère pour sélectionner la première pièce qui le porte.
- Le panneau {{ui:Propriétés}} d'une barre sélectionnée (et la liste **Repères de pièces** dans le panneau de gauche) : {{ui:Repère}} et {{ui:Assemblage}}. Le titre du panneau porte aussi le repère, par exemple « Poutre b1 ».
- L'onglet {{ui:Nomenclature}}, le CSV, les noms de fichiers NC, les plans d'atelier et l'export IFC (comme étiquette de chaque élément).

## Comment les pièces sont repérées

- **Repères de pièces :** c pour les poteaux, b pour les poutres, br pour les contreventements, st pour les limons d'escalier, p pour les platines (y compris les platines d'extrémité et de pied). Puis un numéro : c1, c2, b1, p1… Lorsque des pièces sont réparties en plusieurs phases, un numéro de phase vient en premier, par exemple 2-b1.
- **Repères d'assemblage :** C, B, BR ou P. Un assemblage est une barre principale et les platines qui lui sont soudées, par exemple une poutre avec ses deux platines d'extrémité, ou un poteau avec sa platine de pied.
- Deux pièces partagent un repère lorsqu'elles ont le même profilé, le même matériau et la même longueur de coupe, et les mêmes trous et échancrures, à 1 mm près, même si l'une est retournée bout pour bout ou à l'envers par rapport à l'autre.
- La numérotation commence par les poteaux, puis les poutres, les contreventements et les platines ; dans chaque groupe, par nom de profilé, de la plus longue à la plus courte.

Les règles complètes, y compris les rotations à prendre en compte pour les fers U et les cornières : [Règles de repérage](topic:mark-rules).

:::warning
Les repères sont recalculés à chaque modification, donc ils peuvent être renumérotés. Ajouter une pièce, changer un profilé ou ajouter un trou peut faire passer b3 à b4. Ne considérez les repères comme définitifs qu'une fois le modèle terminé, et établissez la nomenclature, les fichiers NC et les plans d'atelier à partir du même modèle enregistré.
:::

## Lire la nomenclature

Ouvrez l'onglet {{ui:Nomenclature}} en bas. Il comporte trois tableaux.

**Pièces**, avec la masse totale d'acier dans le titre :

| Colonne | Signification |
|---|---|
| Repère de pièce | Cliquez dessus pour sélectionner la première pièce portant ce repère |
| Type | poutre, poteau, contreventement, limon ou platine |
| Profilé | Par exemple W16x26 ou PL20x180 |
| Matériau | La nuance que vous avez définie |
| Longueur (mm) | Longueur de coupe, après connexions |
| Nombre | Quantité |
| Masse unitaire (kg) | Masse du profilé par mètre × longueur |
| Masse totale (kg) | Masse unitaire × nombre |

La dernière ligne donne le nombre total et la masse totale.

**Assemblages :** chaque repère d'assemblage, sa pièce principale, toutes ses pièces (par exemple « b1 + p1 + p1 »), le nombre, la masse unitaire et la masse totale.

**Boulons et tiges d'ancrage :** regroupés par nature, diamètre, longueur et nuance, avec un nombre.

:::note
Les masses sont brutes : les trous et échancrures ne sont pas déduits. Les boulons, écrous, rondelles et soudures ne sont pas inclus dans la masse d'acier.
:::

## Télécharger

Choisissez {{ui:Télécharger le CSV}} dans l'onglet, ou {{ui:Nomenclature}} dans le groupe {{ui:Sortie}}. Le fichier `<name> BOM.csv` contient les trois tableaux les uns après les autres, chacun sous son titre, avec une ligne vide entre eux. Il s'ouvre dans n'importe quel tableur.

## Vérifier avant l'envoi

1. Ouvrez l'onglet {{ui:Problèmes}} et supprimez chaque ligne. Une connexion qui ne peut pas être construite n'ajoute ni platine, ni trous, ni boulons, donc la nomenclature serait incomplète.
2. Repérez les repères inattendus. Deux poutres que vous croyez identiques mais portant des repères différents diffèrent en général par un trou, une échancrure ou une longueur de coupe ; sélectionnez-les chacune et comparez-les.
3. Enregistrez le modèle, puis faites tous les exports à partir de cet état enregistré.
