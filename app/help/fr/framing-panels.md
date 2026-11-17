---
title: Panneaux d'ossature bois et acier léger
summary: Concevoir des panneaux de mur, de plancher et de toiture en bois ou en acier léger, avec chaque pièce, une liste de débit, un plan d'atelier et les matériaux à acheter.
keywords: ossature, bois, bois d'œuvre, acier léger, formé à froid, montant, solive, chevron, linteau, montant de rive, chandelle, montant court, liste de débit, plan d'atelier, panneau
from: 3e38ffb9
---

L'onglet {{ui:Framing}} dimensionne les panneaux que vous décrivez et donne ce qu'une équipe de charpente et un négoce de bois demandent. Les panneaux sont enregistrés dans le fichier du modèle.

:::warning
Les dimensions, l'entraxe et les linteaux relèvent de votre responsabilité. DetailCraft ne vérifie pas qu'un montant à cet entraxe porte ce mur, ni qu'un linteau franchit cette ouverture : cela relève des tableaux de votre code et de votre ingénieur.
:::

## Ajouter un panneau

Choisissez {{ui:Add a wall}}, {{ui:Add a floor}} ou {{ui:Add a roof}}, puis renseignez les dimensions en millimètres, le matériau (bois ou acier léger) et la taille des pièces. Les sections de bois sont données par leur nom nominal, avec leurs dimensions après rabotage (2×4 fait 38 × 89 mm). Les montants en acier sont désignés par hauteur et épaisseur, par exemple `C92-1.2`.

## Murs

Un mur comporte une lisse basse, une ou plusieurs lisses hautes (un seul rail pour l'acier), des montants d'extrémité, des montants à l'entraxe que vous donnez et, pour chaque ouverture : deux montants de rive, deux chandelles, un linteau de la taille et du nombre de plis choisis, et des montants courts au-dessus du linteau (et sous l'appui d'une fenêtre). Donnez à chaque ouverture sa distance depuis l'extrémité gauche, sa largeur, et le haut et le bas de son passage brut mesurés depuis le sous-plancher ; une porte a un bas à 0.

## Planchers et toitures

Un plancher comporte des solives sur sa largeur, suivant sa portée, des sablières de rive à chaque extrémité et, si vous le cochez, un entretoisement à mi-portée. Un panneau de toiture est un pignon : une paire de chevrons à l'entraxe que vous donnez (leur longueur inclut le débord de l'avant-toit le long de la pente) et un faîtage.

## Ce que vous obtenez

Chaque panneau affiche ses pièces sur un plan à l'échelle, chacune repérée, une liste de débit par repère et un total. Le tableau {{ui:Stock to buy}} imbrique toutes les coupes des panneaux dans des longueurs commerciales, la plus courte pouvant recevoir les coupes de chaque barre. {{ui:Save the shop drawing (SVG)}} écrit le plan ; le bouton {{ui:CSV}} écrit toutes les listes de débit et la liste des matériaux.

## Placer un panneau dans le modèle

Sous chaque panneau, indiquez son emplacement (x, y, z en millimètres et l'angle) et appuyez sur {{ui:Place as members}} : chaque pièce devient une barre du modèle, avec la section après rabotage de sa taille et le poids du matériau (environ 500 kg/m³ pour le bois, et l'acier pour les montants). Un mur suit l'angle depuis son extrémité inférieure gauche, sa base à z ; les solives d'un plancher reposent par leur dessous à z ; l'élévation en pignon d'une toiture suit l'angle, avec z au sommet des lisses du mur. Chaque pli de linteau est une barre juxtaposée. Appuyer de nouveau remplace les barres placées précédemment, et {{ui:Remove the placed members}} les retire ; chaque action constitue une étape d'annulation. L'analyse exclut ces barres : ce ne sont pas des barres d'ossature en acier.

## Feuilles PDF

{{ui:PDF sheets}} enregistre une page A3 par panneau : le panneau à l'échelle avec chaque pièce repérée, les dimensions hors tout, la liste de débit et un cartouche.

Le panneau {{ui:Problems}} signale : une ouverture trop proche de l'extrémité d'un mur ou d'une autre ouverture, un linteau qui ne tient pas sous les lisses hautes, une pièce plus longue que la plus longue longueur de stock.

Le panneau {{ui:Problems}} liste aussi **Interfaces (LOD 350)** pour les panneaux de mur et les murs en béton : une ouverture qui dépasse l'extrémité ou le haut de son mur, deux ouvertures qui se chevauchent, et une ouverture de mur en béton plus large que 1000 mm sans barre de renfort d'ouverture. Ce sont des conseils, qui appliquent les mêmes règles que l'audit de BimCraft ; la largeur est la valeur de départ de CadCraft, et non une norme.
