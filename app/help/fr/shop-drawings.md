---
title: Réaliser les plans d'atelier
summary: Une feuille par repère de pièce, réalisées en une fois : prévisualisez-en une ou téléchargez une feuille ou tout le jeu en PDF, au format A4 à A1 ou ANSI B à D, avec trous, échancrures, cotes et cartouche.
keywords: plan d'atelier, plans d'atelier, toutes les pièces, lot, jeu complet, plan d'une pièce, plan de fabrication, pdf, plan de détail, plan de pièce, impression, imprimer
from: d25fe035
---

DetailCraft réalise une feuille par repère de pièce, pour chaque poutre, poteau, contreventement et platine du modèle, en une seule fois : vous n'avez pas à les sélectionner une à une. Les pièces identiques partagent un repère, donc une feuille. Les feuilles sont générées à la demande à partir du modèle ; elles ne sont ni stockées ni modifiables.

## Réaliser le jeu complet

1. Choisissez {{ui:Plan d'atelier}} dans le groupe {{ui:Sortie}}. Rien n'a besoin d'être sélectionné. Si une pièce est sélectionnée, la fenêtre s'ouvre sur la feuille de cette pièce. Dans le panneau {{ui:Propriétés}}, le même bouton s'appelle {{ui:Plan d'atelier}} pour les barres et {{ui:Plan de platine}} pour les connexions.
2. Un aperçu s'ouvre, titré avec le repère de pièce, par exemple « Plan d'atelier b1 ». La première liste à côté du titre contient chaque repère avec son profilé, sa longueur et sa quantité : choisissez-en un pour voir sa feuille. La seconde liste change le format de la feuille ; le jeu complet est refait dans ce format (voir [Plans généraux et d'assemblage](topic:drawings#choose-the-sheet-size)).
3. Choisissez {{ui:Tout télécharger}} (le bouton indique le nombre de feuilles) pour un seul PDF avec une page par repère de pièce, `<name> Shop drawings.pdf`. Chaque feuille indique « Feuille 3 sur 42 » dans son cartouche. Ou choisissez {{ui:Télécharger le PDF}} pour la feuille affichée, `<name> <mark>.pdf`.
4. Fermez l'aperçu avec la croix × ou {{key:Esc}}.

Si {{ui:Plan d'atelier}} est grisé, le modèle ne contient pas encore de pièces.

## Ce qui figure sur la feuille

Pour un profilé en I :

- **Élévation**, vue sur l'âme : la pièce avec ses échancrures, les trous d'âme en cercles et les trous de semelles en traits cachés (tirets).
- **Plan de la semelle supérieure**, vue du dessus, lorsqu'une semelle porte des trous. Les trous de la semelle inférieure sont en tirets.
- **Coupe** à travers le profilé.
- **Cotes :** positions chaînées des trous le long de la pièce plus la longueur hors-tout, hauteurs des trous d'âme, entraxe, et dimensions des échancrures.
- **Liste des trous :** chaque groupe de trous, par exemple « 8 x Ø22 dans la semelle supérieure ».
- **Soudure**, lorsque la pièce porte des platines soudées.
- **Cartouche :** repère de pièce, repère d'assemblage, profilé, matériau, longueur, quantité, masse unitaire et masse totale, nom du modèle et date.

Pour un fer U, une cornière ou une section creuse, la feuille est la même, vue sur l'âme ou sur le côté : les parois d'un tube sont en traits cachés (tirets), et la coupe donne l'épaisseur de paroi.

Pour une platine : la face de la platine avec ses trous, et son bord en coupe.

## Échelles

L'échelle est choisie dans une liste (de 1:1 à 1:200) pour que la pièce tienne sur la feuille. Une pièce longue et peu haute serait trop fine à lire à une seule échelle ; ainsi, lorsque la hauteur tomberait sous 30 mm sur le papier, elle est dessinée à une échelle plus grande que la longueur. Le titre de la vue l'indique alors, par exemple « longueur 1:20, hauteur 1:5 (pas à une échelle unique ; ce sont les cotes qui font foi) ». Lisez toujours les dimensions sur les cotes, pas en mesurant la feuille.

## À savoir

- La quantité est le nombre de pièces portant ce repère dans le modèle. Les repères peuvent être renumérotés après une modification ; voir [Vérifier les repères et la nomenclature](topic:marks-and-bom).
- Chaque feuille représente une seule pièce, sans symboles de soudure ; les plans d'assemblage (avec symboles de soudure) et les plans généraux sont dans [Plans](topic:drawings). La feuille ne peut pas être modifiée ni annotée dans DetailCraft. Pour l'annoter, ouvrez le PDF dans une application d'annotation PDF comme MarkupCraft.
- Le cartouche indique « DetailCraft lab build — millimeters ».
- Le texte utilise la police PDF standard Helvetica. Les caractères hors du jeu d'Europe occidentale s'impriment en « ? », et la barre d'état les compte.

## Imprimer

Ouvrez le PDF téléchargé dans votre lecteur PDF et imprimez-le à 100 % (sans « ajuster à la page ») sur du papier du format choisi si vous voulez que les échelles indiquées restent valables. Sur une feuille plus petite, mettez à l'échelle et fiez-vous aux cotes.
