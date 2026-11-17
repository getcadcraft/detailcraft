---
title: Relier des poutres à des poteaux par des platines d'extrémité
summary: Ajouter des platines d'extrémité boulonnées là où une poutre rejoint une semelle ou une âme de poteau, régler la platine, les boulons et le cordon, et copier l'assemblage vers chaque jonction semblable.
keywords: platine d'extrémité, endplate, assemblage par moment, assemblage boulonné, jonction, boulons, cordon, platine d'extrémité prolongée, affleurante, semblable, copier l'assemblage, composant
from: 21e028b2
---

Une platine d'extrémité relie une plaque soudée à l'extrémité de la poutre et la boulonne à la semelle ou à l'âme du poteau. DetailCraft place la platine, recule la poutre, perce des trous concordants dans la platine et la semelle du poteau, ajoute les boulons et le cordon, et vérifie les distances aux bords et les entraxes.

:::warning
DetailCraft ne dimensionne pas les assemblages. Les réglages sont des valeurs de départ à modifier ; rien ne vérifie la résistance. Les avertissements sur les distances aux bords et les entraxes utilisent les minimums de l'EN 1993-1-8 tableau 3.3, qui peuvent différer des règles que vous appliquez.
:::

## Ce qu'il peut relier

- Une poutre **de niveau** (ses deux extrémités à la même hauteur), verticale (rotation 0), de profilé en I.
- Dans la **semelle** ou l'**âme** d'un poteau en I **vertical**, d'équerre.
- L'extrémité de la poutre doit se trouver sur l'axe du poteau, entre sa base et son sommet.

Les poutres biaises ou en pente et les sections non en I sont refusées avec une raison : utilisez plutôt les [goussets de cisaillement](topic:shear-tabs) pour ceux-là. Sur une âme, la platine et les semelles de la poutre doivent tenir entre les semelles du poteau ; DetailCraft avertit lorsque ce n'est pas le cas.

:::tip
À la rotation 0, les semelles d'un poteau sont orientées selon la direction de trame numérotée (x). Une poutre allant de A à B rejoint l'âme et reçoit une platine d'extrémité sur l'âme.
:::

## Ajouter des platines d'extrémité à une poutre

1. Choisissez {{ui:Sélectionner}} ({{key:V}}) et cliquez sur la poutre.
2. Choisissez {{ui:Platines d'extrémité}} dans le groupe {{ui:Connexions}}, ou {{ui:Ajouter des platines d'extrémité}} dans le panneau {{ui:Propriétés}}.
3. Chaque extrémité libre de la poutre qui rejoint d'équerre une semelle ou une âme de poteau reçoit une platine. La barre d'état indique : « 2 platines d'extrémité ajoutées. Sélectionnez-en une pour modifier sa platine, ses boulons et son cordon ; {{ui:Semblable}} la copie vers les jonctions semblables. »
4. La première nouvelle platine d'extrémité est sélectionnée, et ses réglages apparaissent dans le panneau {{ui:Propriétés}}.

Si rien ne se passe, lisez la barre d'état :

- « Cette poutre ne finit pas sur un axe de poteau. Les platines d'extrémité vont là où l'extrémité d'une poutre rejoint un poteau vertical. »
- « Cette poutre rejoint un poteau en biais ou en pente : les platines d'extrémité sont prévues pour des jonctions d'équerre et de niveau. Utilisez les goussets de cisaillement. »
- « Les deux extrémités ont déjà un assemblage. »

## Modifier la platine, les boulons et le cordon

Cliquez sur la platine d'extrémité (ou sur un de ses boulons) pour sélectionner l'assemblage. Sous {{ui:Platine, boulons et soudure (mm)}} :

| Réglage | Par défaut | Effet |
|---|---|---|
| Épaisseur de platine | 20 | L'épaisseur de la platine ; aussi de combien la poutre est reculée au-delà de la semelle |
| Largeur de platine | 180 | Transversalement à la jonction |
| Prolongement au-dessus de la poutre | 0 | Au-dessus de la semelle supérieure ; au-dessus de 0, on obtient une platine d'extrémité prolongée |
| Prolongement sous la poutre | 0 | Sous la semelle inférieure |
| Diamètre des boulons | 20 | Dimension nominale du boulon |
| Diamètre des trous | 22 | Votre jeu de perçage dans la platine et la semelle du poteau |
| Classe des boulons | A325 | Texte ; imprimé dans la nomenclature |
| Rangées de boulons | 4 | Rangées de deux boulons, centrées sur la hauteur de la platine |
| Pas des rangées | 75 | Espacement vertical entre rangées |
| Écartement | 100 | Espacement horizontal entre les deux boulons d'une rangée |
| Supplément de longueur des boulons | 30 | Ajouté à la longueur serrée pour l'écrou, la rondelle et le filetage ; voir ci-dessous |
| Taille du cordon d'angle | 8 | Tout autour de l'extrémité de la poutre |
| Matériau de la platine | A36 | Texte |

Saisissez une nouvelle valeur et appuyez sur {{key:Enter}} ou {{key:Tab}}. La platine, les trous, les boulons et la longueur de coupe de la poutre se mettent à jour aussitôt. Chaque modification correspond à une seule étape d'annulation.

Sous les réglages, vous voyez ce que produit l'assemblage :

- {{ui:Boulons}} : par exemple « 8 × 20 × 70 A325 (serrage 36.2) ».
- {{ui:Souder}} : taille, emplacement et longueur.
- {{ui:Platine}} : ses dimensions et son repère de pièce.

### Calcul des valeurs

- La poutre est reculée de la moitié de la hauteur du poteau (sur une âme : la moitié de l'épaisseur de l'âme) plus l'épaisseur de la platine, pour que la platine repose sur la face.
- La hauteur de la platine est la hauteur de la poutre plus les deux prolongements.
- Longueur du boulon = serrage (épaisseur de platine + épaisseur de semelle ou d'âme du poteau) + supplément, arrondie au multiple de 5 mm supérieur.
- La longueur de cordon affichée est le périmètre de la section de la poutre.

### Avertissements

L'assemblage se construit tout de même, mais ces avertissements apparaissent sous lui et dans l'onglet {{ui:Problèmes}} :

- Rangées de boulons, ou boulons, plus proches du bord de la platine que 1.2 × le diamètre de trou.
- Pas des rangées inférieur à 2.2 × le diamètre de trou, ou écartement inférieur à 2.4 × le diamètre de trou.
- Trous qui empiètent sur l'âme du poteau ou son congé, ou qui sortent de la semelle du poteau.
- Platine plus large que la semelle du poteau, ou (sur une âme) plus large que l'espace entre les semelles ; semelles de poutre qui ne tiennent pas entre elles.
- Rangée de boulons trop proche d'une semelle de poutre, ou écartement trop serré pour l'âme de la poutre et son cordon.

## Copier vers chaque jonction semblable

1. Sélectionnez l'assemblage que vous avez réglé.
2. Choisissez {{ui:Appliquer aux jonctions semblables (n)}} dans le panneau {{ui:Propriétés}}, ou {{ui:Semblable}} dans le menu {{ui:Plus}} du groupe {{ui:Connexions}}. Le nombre entre parenthèses indique combien de jonctions le recevront.
3. Chaque jonction ayant le même profilé de poutre et le même profilé de poteau, la poutre rejoignant le même type de face, et qui n'a pas encore d'assemblage, reçoit une copie avec les mêmes réglages. La barre d'état indique combien.

Les copies sont indépendantes : modifier l'une plus tard ne modifie pas les autres. Les jonctions qui ont déjà un assemblage sont laissées telles quelles ; supprimez-les d'abord si vous voulez les remplacer.

## Déplacer et supprimer

Les assemblages sont refaits à partir de leurs réglages à chaque modification du modèle : déplacer ou redimensionner une poutre ou un poteau entraîne donc ses platines d'extrémité. Si une modification fait que la jonction ne convient plus, l'assemblage reste dans le modèle et l'onglet {{ui:Problèmes}} indique pourquoi, par exemple « L'extrémité de la poutre ne se trouve plus sur l'axe du poteau. »

Pour supprimer un assemblage, sélectionnez-le et appuyez sur {{key:Delete}}. Supprimer la poutre ou le poteau supprime aussi ses assemblages.

Suite : [Ajouter des platines de pied et des tiges d'ancrage](topic:base-plates).
