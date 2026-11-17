---
title: Générateur d'escalier métallique
summary: Un escalier métallique à partir de la hauteur entre planchers, de la volée et de la largeur : contremarches et giron selon un jeu de règles au choix, paliers, mains courantes et balustres, plans d'atelier et liste de débit avec masses.
keywords: escalier métallique, générateur d'escalier, limon, marche, tôle larmée, caillebotis, marche pliée, palier, main courante, balustres, hauteur, giron, osha, ibc, approved document k, liste de débit, masses, plan d'atelier
from: a4f0a985
---

Le générateur d'escalier réalise un escalier métallique complet à partir de quelques valeurs : les limons, les marches, des paliers lorsque la volée est trop haute, des mains courantes avec montants et balustres, les trous de fixation dans les limons, une liste de débit avec les masses, et les plans d'atelier. Il part de l'outil {{ui:Escalier}}, comme l'escalier simple (voir Escaliers), avec une case à cocher de plus.

## Placer un escalier métallique

1. Choisissez {{ui:Escalier}} dans le groupe {{ui:Placer}}, ou appuyez sur {{key:S}}.
2. À droite, cochez {{ui:Utiliser le générateur d'escalier métallique}}.
3. Choisissez le **jeu de règles** selon le lieu de construction, la **hauteur** entre planchers (0 = jusqu'au niveau suivant), la **longueur disponible** (0 = laisser la règle décider), la **largeur libre** et le **type de marche** : tôle larmée, caillebotis ou marche en tôle pliée.
4. Réglez le profil des limons, les paliers (selon la règle, ou un nombre), les mains courantes (des deux côtés, d'un seul, ou aucune), la hauteur de la main courante et l'écartement des balustres.
5. Cliquez sur une intersection de trame : c'est le pied de la première contremarche.

Sélectionnez l'escalier (cliquez sur un limon, une marche ou une main courante) pour modifier un réglage ; les propriétés affichent les contremarches, le giron, la pente, les volées et paliers, l'acier qu'il contient, la liste de débit et les sources du jeu de règles.

## Les jeux de règles

Le jeu de règles limite la forme de l'escalier : la hauteur et le giron, 2 × contremarche + giron, la pente, le palier, la hauteur de main courante et la plus grande ouverture. DetailCraft propose ceux ci-dessous ; la zone est un réglage, non une supposition. Ouvrez **D'où viennent les valeurs de ce jeu de règles** dans les propriétés : chaque valeur indique sa source et le degré de vérification.

- **International Building Code 2021** : contremarche de 4 à 7 in., marche d'au moins 11 in., mains courantes de 34 à 38 in. La limite de 12 ft entre paliers est indiquée comme *non lue*, et les valeurs des mains courantes comme lues dans des documents qui citent le code : vérifiez-les avant de vous y fier.
- **OSHA 29 CFR 1910.25 et 1910.29** (escaliers industriels standard) : de 30° à 50°, contremarche au plus 9.5 in., marche d'au moins 9.5 in., au moins 22 in. de large, paliers aussi larges que l'escalier et de 30 in. de profondeur, une lisse supérieure faisant office de main courante de 36 à 38 in. Ces valeurs ont été lues dans le règlement lui-même.
- **Approved Document K 2013, Angleterre** (escaliers d'accès général et de service) : les plages de hauteur et de giron, et 2 × contremarche + giron de 550 à 700 mm, lues dans le rapport commandé par le gouvernement qui les présente sous forme de tableau. Ce document ne fournit à DetailCraft aucune hauteur de garde-corps : la hauteur que vous réglez est donc utilisée, et la liste Problèmes le signale.

Un jeu de règles absent de cette liste n'est pas deviné : l'escalier suit alors la règle de confort de 600 à 650 mm et indique qu'il n'a pas de règle.

## Ce qu'il calcule

- **Contremarches et giron.** Le plus petit nombre de contremarches dont 2 × contremarche + giron se place au milieu de la plage de la règle, sans que le giron descende sous le minimum de la règle. Avec une longueur donnée, le giron est la longueur divisée par le nombre de marches, et tout ce qui sort de la règle est signalé.
- **Volées et paliers.** Une volée plus haute que la règle ne l'autorise est coupée par un palier aussi large que l'escalier et pas moins que le minimum de la règle ; vous pouvez aussi demander des paliers. Un palier est un cadre formé de deux poutres latérales et de deux cornières transversales, sous une tôle de recouvrement, posé sur deux montants.
- **Marches.** La tôle larmée est une tôle soudée (6 mm par défaut ; le motif n'est pas ajouté à la masse). Une marche en tôle pliée a un retour au nez et se boulonne dans l'âme du limon : deux trous de 2 mm plus grands que le boulon, à 0.3 et 0.7 de la profondeur. Le caillebotis est dessiné comme une tôle de même masse (hauteur de la barre porteuse × épaisseur ÷ pas) ; les barres transversales et les bandes de liaison ne sont pas comptées, et la liste de débit le signale.
- **Mains courantes.** Une lisse en tube sur des montants le long de chaque volée et de chaque palier, avec un écartement de balustres dans lequel ne passe aucune sphère plus grande que l'ouverture admise par la règle (100 mm au plus par défaut).

## Plans, liste de débit, export

- La volée est un assemblage ; les mains courantes en forment un autre (les deux côtés sont le même assemblage, réalisé deux fois). Chacun a son plan d'assemblage, et le plan du limon montre ses trous.
- La **feuille d'escalier** (ST-…) montre chaque limon droit avec les positions des trous repérées depuis l'extrémité basse, ainsi que le détail des marches : coupe, nez, retour et bride d'extrémité avec ses trous.
- {{ui:Liste de débit et masses}} dans les propriétés liste chaque section et chaque longueur avec les quantités et les kilogrammes ; {{ui:Télécharger la liste de débit (CSV)}} l'enregistre.
- Tout va dans la nomenclature, les fichiers NC et l'IFC comme pièces ordinaires (IfcMember, IfcColumn, IfcPlate).

## Bon à savoir

- C'est un point de départ, pas un dimensionnement. Rien n'est vérifié en résistance ni en flèche ; le jeu de règles ne fait que limiter la forme.
- Les extrémités des limons contre les planchers sont coupées d'équerre et ne sont pas détaillées ; les montants de palier reposent sur le plancher inférieur et n'ont pas de platines de pied.
- Placer l'escalier comme un seul élément dans BimCraft n'est pas encore disponible.
