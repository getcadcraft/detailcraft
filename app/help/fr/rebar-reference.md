---
title: Référence des armatures
summary: Diamètres des barres, dimensions des crochets, codes de forme, longueurs de coupe et colonnes du tableau de ferraillage utilisés par DetailCraft.
keywords: armatures, diamètres de barres, crochets, diamètre de pliage, codes de forme, longueur de coupe, tableau de ferraillage, liste des barres, astm a615, aci 318
from: 1583535e
---

## Diamètres des barres

D'après l'ASTM A615/A615M, tableau 1 (désignations en unités impériales). Les millimètres et les kg/m sont la conversion exacte des valeurs publiées en pouces et en livres par pied. Les listes affichent chaque diamètre sous la forme, par exemple, « #5 (15.9 mm) ».

| Barre | Diamètre (mm) | Masse (kg/m) | Section (mm²) | Diamètre intérieur de pliage | Branche de crochet à 90°, hors tout (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Dans les [Paramètres de DetailCraft](topic:settings) ({{ui:Armatures}}), les **noms de barres ASTM** peuvent afficher ces barres sous leurs noms métriques A615M : #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (mêmes barres ; l'ACI 315-99, tableau 1, donne les deux).

### Barres métriques (BS 4449)

| Barre | Diamètre (mm) | kg/m | Rayon de pliage minimal r (mm) | Branche de crochet = saillie d'extrémité P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

La masse est la section nominale multipliée par 7850 kg/m³. Le rayon et la saillie d'extrémité sont les minimums de la BS 8666:2020 (son tableau des dimensions minimales ; l'ancien diamètre vaut 2r). Les semelles en barres BS reçoivent des branches de crochet de P et des longueurs de coupe données par les formules BS 8666 ci-dessous. Choisir l'acier européen dans les paramètres crée de nouvelles semelles avec des nappes H16 et des barres d'attente H20 en béton C30/37.

## Crochets

Barres ASTM : crochets standard à 90° selon l'ACI 318-19, tableau 25.3.1 : diamètre intérieur de pliage de 6 db pour #3 à #8 et de 8 db pour #9 à #11, avec un prolongement droit de 12 db après le pliage. La branche du crochet, mesurée hors tout, vaut la moitié du diamètre de pliage + db + 12 db.

Si le crochet d'une barre de nappe ne tient pas dans la hauteur de la semelle à l'intérieur de l'enrobage, DetailCraft raccourcit la branche pour qu'il tienne et affiche un avertissement.

## Formes

DetailCraft enregistre trois formes. Le tableau de ferraillage les imprime sous forme de codes DetailCraft, de types ACI 315 ou de codes de forme BS 8666 : choisissez **Codes de forme du tableau de ferraillage** dans les [Paramètres de DetailCraft](topic:settings) ({{ui:Armatures}}).

| Code | Forme | Dimensions |
|---|---|---|
| S | Droite | A = longueur |
| L | Un pliage à 90° | A = branche principale, B = branche de crochet, toutes deux hors tout |
| U | Deux pliages à 90° du même côté | A = milieu, B et C = les deux branches, hors tout |

Les barres de nappe avec {{ui:Crochets d'extrémité}} activés sont de type U ; sans, S. Les barres d'attente avec {{ui:Crochet en bas}} activé sont de type L ; sans, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (fig. 10) |
|---|---|---|
| S | 00, L = A | pas de numéro de type |
| L | 11, L = A + B − 0.5r − d | pas de numéro de type : la figure ne comporte pas de barre à un seul crochet |
| U | 21, A et C les branches, B le milieu : L = A + B + C − r − 2d | Type 2, crochets A et G, droite B |

Avec les codes BS 8666 ou ACI 315, les colonnes A, B et C du tableau suivent la numérotation de cette norme (le milieu d'un U est B).

## Longueur de coupe

Pour les barres BS 4449, la longueur de coupe est la formule BS 8666 du code de forme de la barre (ci-dessus). Pour les barres ASTM, c'est la longueur exacte de l'axe de la barre : les parties droites, plus les pliages assimilés à des arcs de rayon égal à la moitié du diamètre de pliage plus la moitié du diamètre de la barre. Elle n'est pas calculée à partir d'un tableau de déductions de pliage ; elle peut donc différer de quelques millimètres d'un tableau qui en utilise un.

## Disposition

- Nappe inférieure : les barres suivant L forment la couche inférieure, les barres suivant B reposent dessus. Chaque ensemble est réparti uniformément sur la semelle à l'intérieur de l'enrobage, à l'entraxe que vous donnez ou plus serré, avec au moins deux barres.
- Barres d'attente : une grille de barres suivant L et B, aux entraxes que vous donnez, centrée sur la semelle, posée sur la nappe et dépassant au-dessus du dessus de la saillie que vous donnez. Chaque crochet est dirigé vers l'extérieur.

## Vérifications

| Vérification | Règle | Résultat |
|---|---|---|
| Place pour les barres | L'enrobage des deux côtés laisse la place des barres | Refusé sinon |
| Hauteur pour deux couches | La hauteur moins deux enrobages contient les deux couches de nappe | Refusé sinon |
| Barres d'attente ajustées | La grille d'attente tient à l'intérieur de l'enrobage | Refusé sinon |
| Espacement libre | Au moins le plus grand de 25.4 mm et db (ACI 318-19, 25.2.1 ; la taille des granulats n'est pas vérifiée) | Avertissement |
| Hauteur du crochet | La branche du crochet tient dans la hauteur à l'intérieur de l'enrobage | Avertissement, branche raccourcie |
| Crochets d'attente | Les crochets restent hors de l'enrobage | Avertissement |

## Colonnes du tableau de ferraillage

L'onglet {{ui:Tableau de ferraillage}} et son CSV ont ces colonnes : Repère de barre, Diamètre, Forme, A (mm), B (mm), C (mm), Nombre, Longueur de coupe (mm), Longueur totale (m), kg/m, Poids unitaire (kg), Poids total (kg), Utilisation. La dernière ligne totalise le nombre, la longueur et le poids.
