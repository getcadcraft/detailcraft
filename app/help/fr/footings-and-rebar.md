---
title: Placer des semelles avec armatures
summary: Placer des semelles isolées rectangulaires avec une nappe inférieure et des barres de départ, les vérifier et télécharger le tableau de ferraillage.
keywords: semelle, semelle isolée, fondation, armature, ferraillage, barres, nappe, barres de départ, goujons, tableau de ferraillage, liste des barres, béton, crochets, enrobage
from: 41a048be
---

Cette rubrique traite des semelles isolées rectangulaires. Les poutres, poteaux, dalles et murs sont traités dans [Détail du béton armé](topic:reinforced-concrete). Chaque semelle reçoit une nappe inférieure dans les deux sens et, si vous le souhaitez, des barres de départ qui en sortent vers le haut. Les barres sont en diamètres US #3 à #11.

## Placer une semelle

1. Choisissez {{ui:Plan}} et sélectionnez le niveau du dessus de la semelle.
2. Choisissez {{ui:Footing}} dans le groupe {{ui:Place}}, ou appuyez sur {{key:F}}.
3. Réglez la semelle dans le panneau {{ui:Properties}} (voir ci-dessous), ou gardez les valeurs par défaut.
4. Cliquez sur une intersection de trames. La semelle est centrée dessus, son dessus au niveau choisi. La barre d'état indique par exemple « Semelle 2000 x 2000 x 600 sous A/1. »

Vous pouvez aussi utiliser le formulaire {{ui:Add by grid}} en bas du panneau.

La semelle est dessinée en transparence pour que vous voyiez ses barres, qui sont représentées par des tubes pleins.

## Réglages de la semelle

| Champ | Défaut | Remarques |
|---|---|---|
| Longueur L (mm) | 2000 | Selon x ; 300 à 50000 |
| Largeur B (mm) | 2000 | Selon y ; 300 à 50000 |
| Profondeur H (mm) | 600 | 150 à 10000 |
| Béton | 4000 psi | Texte, imprimé dans l'export IFC |

**Nappe inférieure**

| Champ | Défaut | Remarques |
|---|---|---|
| Barres longues | #5 | Barres suivant L, nappe inférieure |
| Espacement (mm) | 250 | Le plus grand espacement admis ; les barres sont réparties régulièrement à cette valeur ou moins |
| Barres courtes | #5 | Barres suivant B, posées sur les barres longues |
| Espacement (mm) | 250 | Comme ci-dessus |
| Enrobage (mm) | 75 | Enrobage libre sur chaque face |
| Crochets d'extrémité | Activé | Relève les deux extrémités de chaque barre de nappe en crochet standard à 90° (forme U) ; désactivé donne des barres droites (forme S) |

**Barres de départ**

| Champ | Défaut | Remarques |
|---|---|---|
| Barres de départ | Activé | Désactivez-les pour une semelle sans barres de départ |
| Barre | #6 | |
| Barres suivant L / Barres suivant B | 2 / 2 | Une grille de barres, centrée sur la semelle |
| Espacement suivant L / Espacement suivant B | 250 / 250 | Entre axes des barres |
| Saillie au-dessus du dessus | 600 | Hauteur de dépassement des barres au-dessus du dessus de la semelle |
| Crochet en bas | Activé | Crochet à 90° orienté vers l'extérieur, posé sur la nappe (forme L) |

Sous les champs, DetailCraft affiche la longueur de crochet des barres longues, par exemple « Longueur de crochet pour #5 : 254 mm hors tout. »

## Modifier une semelle placée

Sélectionnez la semelle (cliquez sur son béton, à l'écart de tout poteau, ou sur l'une de ses barres). Vous obtenez les mêmes champs, plus {{ui:Center x}}, {{ui:Center y}}, {{ui:Top z}} et {{ui:Rotation (°)}}. Sous ceux-ci, un tableau liste les barres de cette semelle avec leurs repères, quantités et longueurs, ainsi que le volume de béton en mètres cubes.

Chaque modification est vérifiée avant d'être conservée. Une modification qui ne peut pas être réalisée est refusée, et la barre d'état indique pourquoi, par exemple « L'enrobage ne laisse pas de place pour les barres dans cette semelle. », « La semelle est trop peu profonde pour deux nappes de barres dans l'enrobage. » ou « Les barres de départ ne tiennent pas dans la semelle avec un enrobage de 75 mm. »

Les modifications réalisables mais qui demandent une vérification sont listées sous la semelle et dans l'onglet {{ui:Problems}} :

- « Les barres #11 à 59.6 mm laissent moins de 35.8 mm libres (ACI 318-19 25.2.1). » L'espace libre entre barres doit être au moins égal au diamètre de la barre et au moins 25.4 mm.
- « Les crochets #5 demandent 254 mm de profondeur ; seuls 150 mm tiennent dans l'enrobage. » Les branches des crochets sont alors raccourcies pour tenir, et ne sont donc plus des crochets standard.
- « Les crochets de départ atteignent l'enrobage. »
- « Les barres de départ sont plus rapprochées que l'espacement libre minimal. »

## Repères de barres et tableau de ferraillage

Les barres identiques (même diamètre, même forme et mêmes dimensions au millimètre près) partagent un repère de barre sur toutes les semelles. Les repères s'écrivent `<bar number>F<n>` : 5F1, 5F2 pour les barres #5, 6F1 pour la première barre #6, et ainsi de suite. Les semelles de même dimension, même béton, même nappe et mêmes barres de départ partagent un repère de semelle : F1, F2 …

1. Ouvrez l'onglet {{ui:Bending schedule}} en bas. Chaque ligne correspond à un repère de barre : diamètre, forme, dimensions A, B et C, quantité, longueur de coupe, longueur totale, masse par mètre, poids unitaire, poids total et usage de la barre.
2. Choisissez {{ui:Download CSV}} dans l'onglet, ou {{ui:Bending}} dans le menu {{ui:More}} du groupe {{ui:Output}}, pour `<name> bending schedule.csv`.

Les formes sont les codes propres à DetailCraft, et non ceux d'une norme : S droite, L un coude, U deux coudes. Les dimensions sont données hors tout ; la longueur de coupe est la longueur exacte de l'axe à travers les coudes. Voir [Référence des armatures](topic:rebar-reference).

## Ce que DetailCraft ne vérifie pas

- Les longueurs d'ancrage et de recouvrement, et si les barres de départ sont assez longues pour le poteau au-dessus.
- La partie de la règle d'espacement libre liée à la taille des granulats (il ne connaît pas la composition du béton).
- Tout ce qui concerne le poteau ou la platine d'assise au-dessus : les semelles et l'acier sont séparés.

Voir aussi [Pas encore disponible](topic:not-built-yet).
