---
title: Placer des platines et ajouter des profils personnalisés
summary: Placer des platines libres par épaisseur et largeur, et définir vos propres sections en I, en U, cornières, tubes ou plats.
keywords: platine, plat, profil personnalisé, profil utilisateur, paramétrique, section, forme, section transversale, pl
from: c24c3b51
---

## Placer une platine

Une platine se place comme une poutre : elle va entre deux intersections, avec sa largeur en travers et son épaisseur vers le haut.

1. Choisissez {{ui:Platine}} dans le groupe {{ui:Placer}}, ou appuyez sur {{key:P}}.
2. Dans le panneau {{ui:Propriétés}}, réglez {{ui:Épaisseur (mm)}} et {{ui:Largeur (mm)}}. La valeur par défaut est 20 x 200 en A36.
3. Réglez {{ui:Matériau}} et {{ui:Rotation (°)}} si nécessaire. Une rotation de 90 dresse la platine sur chant.
4. Cliquez sur deux intersections, ou utilisez le formulaire {{ui:Ajouter par trame}}.

Le nom de profilé d'une platine s'écrit `PL<thickness>x<width>`, par exemple PL20x200. Sa longueur est la distance entre les deux points.

Pour redimensionner une platine placée, sélectionnez-la et modifiez {{ui:Épaisseur (mm)}} ou {{ui:Largeur (mm)}}.

Les platines que vous placez sont des pièces à part entière (repère p, assemblage P). Les platines d'extrémité et de pied créées par les assemblages sont aussi des platines, mais vous les modifiez via leur assemblage ; voir [Platines d'extrémité](topic:end-plates).

## Ajouter un profil personnalisé

Lorsque la section dont vous avez besoin n'est pas dans le catalogue, créez-la à partir de ses dimensions. Un profil personnalisé appartient au modèle et est enregistré avec lui. Pour l'utiliser dans chaque nouveau modèle, gardez-le dans {{ui:Mes profils}}, décrit sous « Garder un profil pour les nouveaux modèles » ci-dessous.

1. Dans le panneau {{ui:Modèle}} à gauche, ouvrez {{ui:Profil personnalisé}}.
2. Saisissez un {{ui:Nom}}, par exemple `W8x18-custom` ou `RHS 120x80x5`. Il ne peut pas être un nom du catalogue ni ressembler à un nom de platine.
3. Choisissez une {{ui:Forme}} : {{ui:Profil en I}}, {{ui:Profil en U}}, {{ui:Cornière à ailes égales}}, {{ui:Tube rectangulaire}}, {{ui:Tube rond}} ou {{ui:Plat}}.
4. Renseignez les dimensions qui apparaissent, toutes en millimètres :

| Forme | Dimensions |
|---|---|
| Profil en I | Hauteur d, largeur d'aile bf, épaisseur d'âme tw, épaisseur d'aile tf, rayon de congé r (peut être 0) |
| Profil en U | Hauteur d, largeur d'aile bf, épaisseur d'âme tw, épaisseur d'aile tf (coins carrés) |
| Cornière à ailes égales | Largeur b (chaque aile), épaisseur t |
| Tube rectangulaire | Hauteur h, largeur b, épaisseur t (rayon de coin extérieur 2t) |
| Tube rond | Diamètre D, épaisseur t |
| Plat | Largeur b, épaisseur t |

5. Laissez {{ui:Garder dans Mes profils}} coché pour l'avoir dans chaque nouveau modèle (voir ci-dessous), ou décochez-le pour le garder dans ce seul modèle.
6. Choisissez {{ui:Ajouter le profil}}.

La barre d'état indique : « Profil … ajouté ; il figure dans toutes les listes de profils, sous Personnalisé. » Il apparaît dans la liste sous le formulaire et à la fin de chaque liste {{ui:Profil}}.

DetailCraft vérifie que la forme peut exister. Vous verrez des messages comme « L'âme et les ailes ne tiennent pas dans la hauteur et la largeur. », « Le rayon de congé est trop grand pour l'aile. » ou « La paroi est trop épaisse. » Corrigez les valeurs, puis choisissez de nouveau {{ui:Ajouter le profil}}.

### Ce qu'obtiennent les profils personnalisés

- Masse par mètre à partir de l'aire × 7850 kg/m³ (les tailles du catalogue utilisent le poids publié).
- Les profilés en I personnalisés reçoivent trous, échancrures, platines d'extrémité, fichiers NC et plans d'atelier, comme les profilés en I du catalogue.
- Les plats personnalisés se comportent comme des platines.
- Les profilés en U et les tubes personnalisés acceptent des trous ; les cornières et les tubes ronds ne les acceptent pas encore.

Une fois ajouté, un profil personnalisé ne peut plus être modifié ni retiré d'un modèle (utilisez {{key:Mod+Z}} tout de suite si vous vous êtes trompé). Donnez un nouveau nom à la version corrigée.

## Garder un profil pour les nouveaux modèles

{{ui:Mes profils}}, sous le formulaire, est votre propre liste de profils personnalisés. Elle est conservée dans ce navigateur, sur cet ordinateur, et non dans un fichier de modèle ni dans votre compte.

- Un profil ajouté avec {{ui:Garder dans Mes profils}} coché entre dans la liste. Chaque nouveau modèle, y compris celui que DetailCraft ouvre au démarrage, commence avec tous ces profils dans ses listes.
- Un profil déjà présent dans un modèle mais absent de la liste a un bouton {{ui:Garder}} à côté.
- Dans un modèle qui n'a pas l'un de vos profils (un fichier ancien, par exemple), choisissez {{ui:Utiliser ici}} pour l'ajouter.
- {{ui:Retirer}} sort un profil de la liste. Les modèles qui l'utilisent déjà gardent leur propre copie.
- Un modèle ouvert conserve les profils enregistrés dans son fichier. Ouvrir un fichier ne modifie jamais votre liste.
- Un nom déjà présent dans la liste avec des dimensions différentes est refusé : donnez un autre nom au nouveau profil.
- Effacer les données du site dans le navigateur, ou utiliser un autre navigateur ou un autre ordinateur, redémarre avec une liste vide. Une fenêtre de navigation privée ne peut pas la conserver ; l'application le signale.
