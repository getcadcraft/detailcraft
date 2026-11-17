---
title: Explorer le portique d'exemple
summary: Ouvrez le portique intégré à deux travées et utilisez-le pour découvrir ce que produit DetailCraft, des repères aux fichiers NC.
keywords: exemple, démonstration, portique, découverte, apprendre, visite, essayer
from: 5c5944dd
---

Le portique d'exemple est un petit modèle complet : chaque type d'objet que DetailCraft construit y figure au moins une fois. C'est le moyen le plus rapide de découvrir l'application et de tester un export avant de vous y fier.

## L'ouvrir

1. Choisissez {{ui:Exemple}} dans le groupe {{ui:Fichier}}.
2. Si votre modèle actuel contient des modifications non enregistrées, choisissez {{ui:Enregistrer d'abord}} ou {{ui:Abandonner les modifications}}.
3. La barre d'état affiche « Portique d'exemple : 6 poteaux avec platines de pied, 4 poutres avec platines d'extrémité, un contreventement, 7 semelles avec armatures. »

L'exemple s'ouvre comme un nouveau modèle nommé « Portique d'exemple ». Il ne modifie rien d'autre, et il n'y a rien à annuler.

## Son contenu

- **Trames** 1, 2, 3 à 6000 mm et A, B à 7000 mm. **Niveaux** Niveau 1 à 0 et Niveau 2 à 4000.
- **Six poteaux**, W12x50, du Niveau 1 au Niveau 2 à chaque intersection, chacun sur une platine de pied de 25 mm avec quatre tiges d'ancrage.
- **Quatre poutres**, W16x26, au Niveau 2 le long des lignes de trame A et B, dessus de l'acier au niveau, avec une platine d'extrémité boulonnée affleurante aux deux bouts (huit au total).
- **Un contreventement**, HSS4x4x1/4, de A/1 au Niveau 1 jusqu'à A/2 au Niveau 2.
- **Six semelles isolées**, 2000 x 2000 x 600, une sous chaque poteau, avec une nappe inférieure à crochets dans les deux sens.
- **Une semelle supplémentaire** à côté du portique, 2400 x 1800 x 600, avec six barres d'attente à crochets dressées pour un pilier en béton.

## À essayer

1. Cliquez sur une poutre. Lisez son {{ui:Repère}}, son {{ui:Assemblage}}, sa {{ui:Longueur de coupe}} et son {{ui:Retrait de coupe}} : la longueur de coupe est inférieure à l'entraxe de trame de 6000 mm, car chaque platine d'extrémité recule la poutre de la moitié de la hauteur du poteau plus l'épaisseur de la platine.
2. Cliquez sur un poteau. Sous {{ui:Trous}}, il liste les trous que les platines d'extrémité ont percés dans ses ailes (« 8 trous issus des connexions » ; les poteaux centraux en ont 16, un jeu dans chaque aile).
3. Dans la liste {{ui:Repères de pièces}} à gauche, constatez que les quatre poutres partagent un même repère : ce sont la même pièce d'acier. Les poteaux d'angle partagent aussi un repère, bien que leurs trous soient orientés en sens inverse, car un poteau retourné bout pour bout reste la même pièce. Les poteaux centraux, dont les trous se trouvent dans les deux ailes, reçoivent un autre repère.
4. Cliquez sur une platine d'extrémité (ou sur l'un de ses boulons). Le panneau {{ui:Propriétés}} affiche les réglages de la platine, du boulon et de la soudure, les boulons qu'elle crée (avec leur longueur calculée à partir de la longueur serrée) et les avertissements de distance au bord.
5. Ouvrez l'onglet {{ui:Nomenclature}}. Les pièces, les assemblages (une poutre avec ses deux platines d'extrémité forme un seul assemblage), ainsi que les boulons et tiges d'ancrage sont listés avec leurs poids. Vous devez voir six repères de pièces : c1 (les deux poteaux centraux) et c2 (les quatre poteaux d'angle), tous deux W12x50 à 3975 mm ; b1, quatre poutres W16x26 à 5650 mm ; br1, le contreventement ; p1, huit platines d'extrémité PL20x180 ; et p2, six platines de pied PL25x400. Les attaches sont 64 boulons 20 x 70 A325 et 24 tiges d'ancrage 20 x 575.
6. Ouvrez l'onglet {{ui:Tableau de ferraillage}}. Les six semelles identiques partagent leurs repères de barres ; la semelle du pilier en ajoute ses propres.
7. Cliquez sur le contreventement et regardez le groupe {{ui:Sortie}} : {{ui:Plan d'atelier}} est grisé, car les plans d'atelier ne couvrent pour l'instant que les profilés en I et les platines.
8. Choisissez {{ui:Fichiers NC}}. L'archive ZIP contient un fichier pour chaque repère de profilé en I et de platine ; la barre d'état indique que le repère du contreventement n'a pas été écrit.
9. Choisissez {{ui:IFC}} et ouvrez le fichier dans n'importe quelle visionneuse IFC pour vérifier comment vos autres logiciels le lisent.

## L'utiliser comme point de départ

L'exemple est un modèle ordinaire. Modifiez-le, puis renommez-le dans le champ {{ui:Nom}} et enregistrez-le sous son nouveau nom avec {{key:Mod+S}}.
