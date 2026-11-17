---
title: Champs du fichier NC
summary: Ce que DetailCraft écrit dans chaque fichier NC DSTV, champ par champ, et la manière dont les faces et les coordonnées sont mesurées.
keywords: nc1, dstv, fichier nc, bloc st, ak, bo, en-tête, faces, coordonnées, cnc, format
from: 1b676fc1
---

Chaque fichier `.nc1` décrit un repère de pièce. Les lignes se terminent par CR LF. Les champs de texte ne contiennent que de l'ASCII simple ; les autres caractères deviennent « ? ». La deuxième ligne est un commentaire, `** DetailCraft <mark>.nc1`.

## En-tête (ST)

| Champ | Profilé en I, en U | Cornière | HSS rectangulaire | HSS rond | Platine |
|---|---|---|---|---|---|
| Commande | Le nom du modèle | ← | ← | ← | ← |
| Plan, pièce | Repère | ← | ← | ← | ← |
| Phase | La phase de la pièce, ou 1 | ← | ← | ← | ← |
| Nuance d'acier | La nuance du matériau | ← | ← | ← | ← |
| Quantité | Nombre de pièces portant ce repère | ← | ← | ← | ← |
| Profilé | Le nom du profilé, par exemple W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Code de profilé | I ou U (profil en U) | L | M | RO | B |
| Longueur | Longueur de coupe | ← | ← | ← | Longueur |
| Hauteur | Hauteur d | Aile | Hauteur | Diamètre | Largeur de la platine |
| Largeur d'aile | bf | Aile | Largeur | Diamètre | 0 |
| Épaisseur d'aile | tf | t | Paroi t | Paroi t | 0 |
| Épaisseur d'âme | tw | t | Paroi t | Paroi t | Épaisseur de la platine |
| Rayon | Rayon de congé (0 pour les profilés en U AISC) | 0 | Rayon de coin extérieur | 0 | 0 |
| Masse par mètre | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Surface de peinture par mètre | Périmètre extérieur, m²/m | ← | ← | ← | 2 (les deux faces, m²/m²) |
| Angles de sciage (4 champs) | 0 (d'équerre) | ← | ← | ← | ← |
| Champs de texte (4) | `-` | ← | ← | ← | ← |

Les platines suivent la colonne « pour les tôles » de la norme. La norme n'a pas de colonne pour les tubes ronds : DetailCraft écrit le diamètre à la fois comme hauteur et comme largeur d'aile, et la paroi comme les deux épaisseurs.

## Contours extérieurs (AK)

- **Profilés en I et en U :** l'âme (v), avec une encoche rectangulaire pour chaque échancrure ; chaque aile (o et u), raccourcie à une extrémité lorsqu'une échancrure est au moins aussi profonde que l'aile.
- **HSS rectangulaires :** les deux parois latérales (v et h), échancrées, et les parois supérieure et inférieure (o et u).
- **Cornières :** un rectangle par aile (v et u). Les échancrures sur les cornières ne sont pas écrites : une telle pièce est listée comme non écrite. Un contreventement en cornière boulonné à un [gousset](topic:brace-gussets) a ses trous sur l'aile boulonnée : v pour l'aile suivant u de la pièce, u pour l'aile suivant v.
- **HSS ronds :** un rectangle sur v, le tube vu de face (longueur × diamètre).
- **Platines :** un rectangle sur la face v.

Chaque contour est fermé (le premier point est répété à la fin) et parcouru dans le sens antihoraire.

## Trous (BO)

Une ligne par trou : face, x, y, diamètre, profondeur 0 (traversant). Tous les trous sont inclus, ceux que vous avez saisis comme ceux créés par les assemblages. Un trou traversant les parois latérales d'un HSS rectangulaire est écrit deux fois, une fois sur v et une fois sur h.

## Faces et coordonnées

Chaque profilé est placé comme le dessine la figure des positions de profilés de la norme (DSTV 1998, p. 7) : x le long de la pièce, Y en travers, Z vers le haut depuis la face arrière, le point zéro étant au coin extérieur. DetailCraft ne met jamais une pièce en miroir pour l'adapter à la figure.

| Face | Profilé en I | Profilé en U | Cornière | HSS rectangulaire | Platine |
|---|---|---|---|---|---|
| v | Âme, avant | Âme, vue du côté des extrémités des ailes | L'aile suivant u de la pièce | Paroi latérale en −u | La face de la platine |
| h | | | | Paroi latérale en +u | |
| o | Aile supérieure | **Aile inférieure** | | Paroi supérieure | |
| u | Aile inférieure | **Aile supérieure** | L'aile suivant v de la pièce | Paroi inférieure | |

- **x** part de la coupe de début de la pièce.
- **Profilés en I et HSS rectangulaires :** y sur l'âme ou les parois latérales depuis la face inférieure du profilé ; y sur une aile, ou sur les parois supérieure et inférieure, depuis son bord du côté arrière (côté +u de la pièce).
- **Profilés en U :** ils reposent sur le dos, extrémités des ailes vers le haut, comme sur la figure de la norme. Donc y sur l'âme part du bord extérieur de l'aile supérieure vers le bas ; l'aile supérieure est la face u et l'aile inférieure la face o ; y sur une aile va du dos de l'âme vers l'extrémité de l'aile.
- **Cornières :** y sur chaque aile depuis le talon.
- **Platines :** y depuis le bord −u de la platine.

Vérifiez comment le logiciel de votre machine lit les faces des profilés en U avant de couper : certains logiciels les retournent dans l'autre sens.

## Non écrit

Chanfreins, contours intérieurs, marquages (SI), angles de sciage autres que l'équerre, trous oblongs, trous dans les tubes ronds (DetailCraft n'en a aucun), et échancrures sur les cornières et les tubes ronds.
