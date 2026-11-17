---
title: Exporter un fichier KISS pour logiciel de fabrication
summary: Envoyez la nomenclature à un logiciel de gestion de fabrication (MIS) sous forme de fichier KISS 1.1 : ensembles, pièces, phases en séquences, trous, échancrures et soudures.
keywords: kiss, kss, mis, gestion de fabrication, contrôle de production, estimation, nomenclature, bom, export, fabtrol, séquence
from: 30cf3951
---

Dans le groupe {{ui:Sortie}}, ouvrez {{ui:Plus}} et choisissez {{ui:Fichier KISS pour logiciel de fabrication}}. DetailCraft télécharge `<name>.kss`, un fichier KISS (« Keep It Simple, Steel », version 1.1), le format texte brut à partir duquel la plupart des logiciels de gestion de fabrication importent une nomenclature.

## Contenu du fichier

- L'en-tête : un numéro de chantier (les huit premiers caractères, lettres et chiffres, du nom du modèle), le nom du modèle, la date et l'heure, et si les dimensions sont métriques.
- Pour chaque repère d'assemblage : sa pièce principale (quantité = nombre d'assemblages), une ligne de plan (A-B1 et ainsi de suite, le numéro du plan d'assemblage), une ligne d'assemblage (nom, type, poids, longueur hors tout, hauteur et largeur), une ligne de séquence par [phase](topic:phases) dans laquelle se trouve l'assemblage, et des lignes de main-d'œuvre : trous (nombre, diamètre, épaisseur traversée), échancrures et soudures.
- Puis chaque pièce qui y est rattachée, avec la quantité **totale** (par assemblage × nombre d'assemblages), comme l'exige la norme.
- Boulons en vrac et tiges d'ancrage sur le plan BOLTS, assemblage FIELD.
- Chaque ligne donne le type (W, C, L, HSS, PL, ou MI pour un profilé personnalisé), la dimension, la nuance, la longueur de coupe en millimètres, le nom de la pièce et le poids.

## Impérial ou métrique

Dans [les paramètres de DetailCraft](topic:settings), **Dimensions du fichier KISS** permet de choisir :

- **Automatique** (par défaut) : impérial lorsque chaque élément est un profilé AISC, métrique sinon.
- **Impérial** : profilés par leur désignation AISC (W 16X26, HSS 4X4X.250) ; platines et boulons, que DetailCraft garde en millimètres, arrondis au seizième de pouce près ; poids en livres.
- **Métrique** : profilés européens par leur nom (IPE300), platines en épaisseur X largeur en millimètres ; poids en kilogrammes.

Les longueurs sont toujours exprimées en millimètres avec deux décimales, quel que soit le réglage : la norme KISS l'exige, et le logiciel destinataire les convertit.

:::note
Les nuances sont tronquées aux huit caractères de la norme : A572 Gr 50 devient A572-50. Les virgules dans les noms deviennent des espaces (le format n'a pas de guillemets). Vérifiez un import dans votre logiciel avant de vous y fier : les fichiers KISS de DetailCraft sont contrôlés ici par rapport à la norme, pas encore dans un logiciel de fabrication.
:::
