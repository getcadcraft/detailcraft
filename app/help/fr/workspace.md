---
title: Visite de l'écran
summary: Chaque barre, panneau et onglet de DetailCraft sous son nom à l'écran, et à quoi chacun sert.
keywords: écran, disposition, barre d'outils, panneaux, propriétés, barre d'état, rapports, interface, onglets
from: 454f74fd
---

DetailCraft occupe la fenêtre du navigateur sous la barre de l'application. De haut en bas : la barre d'outils, puis trois colonnes (le panneau {{ui:Modèle}}, la vue, le panneau {{ui:Propriétés}}), puis les onglets de rapport, puis la barre d'état.

## La barre de l'application

La fine barre tout en haut appartient au site CadCraft, pas au modèle. Elle affiche le nom et la version de l'application, un lien vers {{ui:À propos de DetailCraft}}, {{ui:Aide}} (ou {{key:F1}}) pour cette aide, {{ui:Enregistrer pour le hors ligne}}, le bouton de mode d'écran et le commutateur {{ui:Papier}} / {{ui:Objet}}.

- {{ui:Enregistrer pour le hors ligne}} conserve DetailCraft, sa vue 3D et cette aide dans votre navigateur, pour qu'il s'ouvre sans connexion. Le bouton affiche {{ui:Prêt hors ligne}} une fois l'enregistrement fait ; cliquez-le alors pour {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}} ou {{ui:Supprimer la copie hors ligne}}. Voir [Travailler hors ligne](common:offline).
- {{ui:Papier}} donne un écran clair et {{ui:Objet}} un écran sombre. La vue 3D suit aussitôt ; rien ne change dans votre modèle.
- Le bouton de mode d'écran et {{key:Ctrl+Shift+F}} font défiler : normal, plein écran, et plein écran avec les barres masquées. {{key:Ctrl+Shift+F}} utilise la touche Ctrl sur tous les ordinateurs, Mac compris. Quand les barres sont masquées, pointez le bord supérieur de l'écran (ou touchez-le) pour les faire revenir. {{key:Esc}} quitte le plein écran.

## La barre d'outils

La barre d'outils a cinq groupes. Survolez un bouton pour voir ce qu'il fait et sa touche.

| Groupe | Boutons | Ce qu'ils font |
|---|---|---|
| {{ui:Fichier}} | {{ui:Nouvelle}}, {{ui:Ouvrir}}, {{ui:Importer un IFC}}, {{ui:Enregistrer}}, {{ui:Exemple}} | Commencer un modèle, ouvrir un fichier `.detailcraft.json` enregistré ou un fichier IFC, en enregistrer un, ou ouvrir la structure d'exemple |
| {{ui:Placer}} | {{ui:Sélectionner}}, {{ui:Poutre}}, {{ui:Poteau}}, {{ui:Contreventement}}, {{ui:Platine}}, {{ui:Semelle}}, {{ui:Escalier}} | L'outil qu'utilise le prochain clic dans la vue |
| {{ui:Connexions}} | {{ui:Platines d'extrémité}}, {{ui:Platine de pied}}, et dans {{ui:Plus}} : {{ui:Pattes de cisaillement}}, {{ui:Éclissage}}, {{ui:Gousset}}, {{ui:Semblable}} | Ajouter une connexion à la poutre, au poteau ou au contreventement sélectionné, ou copier la connexion sélectionnée sur tous les nœuds semblables |
| {{ui:Édition}} | {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Plus}} | Reculer et avancer dans les modifications ; copier la sélection et la coller. {{ui:Plus}} ouvre un menu avec {{ui:Couper}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Coller à la même position}}, {{ui:Dupliquer}}, {{ui:Supprimer}}, {{ui:Tout sélectionner}} et {{ui:Désélectionner tout}}, chacun avec sa touche |
| {{ui:Sortie}} | {{ui:IFC}}, {{ui:Fichiers NC}}, {{ui:Nomenclature}}, {{ui:Plan d'atelier}}, {{ui:Dessins}}, et dans {{ui:Plus}} : {{ui:Ferraillage}}, {{ui:Rapport de poids par phase}}, {{ui:Fichier KISS pour logiciel de fabrication}} | Télécharger un export, ou ouvrir les feuilles de dessin |

Les boutons et éléments de menu qui ne peuvent pas agir pour l'instant sont grisés, et les survoler en donne la raison. {{ui:Platines d'extrémité}} demande une poutre sélectionnée, {{ui:Platine de pied}} un poteau sélectionné, {{ui:Semblable}} une connexion sélectionnée, {{ui:Plan d'atelier}} une pièce sélectionnée en forme de I ou une platine, {{ui:Copier}} une barre ou une semelle sélectionnée, et {{ui:Coller}} quelque chose de copié. Voir [Copier, coller et dupliquer](topic:copy-paste).

## Le panneau Modèle (à gauche)

- {{ui:Modèle}} : le {{ui:Nom}} du modèle. Il nomme chaque fichier que vous enregistrez ou exportez.
- {{ui:Grilles}} : les lignes de grille et leurs espacements, et {{ui:Appliquer les trames}}. Voir [Définir les grilles et les niveaux](topic:grids-and-levels).
- {{ui:Niveaux}} : une ligne par niveau (nom et altitude en mm), {{ui:Ajouter un niveau}} et {{ui:Appliquer les niveaux}}.
- {{ui:Profil personnalisé}} : créez votre propre section paramétrique. Fermé tant que vous ne l'ouvrez pas.
- {{ui:Repères de pièces}} : chaque repère de pièce du modèle avec son profilé, sa longueur et son nombre. Cliquez un repère pour sélectionner la première pièce qui le porte.

{{ui:Grilles}}, {{ui:Niveaux}} et {{ui:Profil personnalisé}} se replient : cliquez leurs titres.

## La vue (au milieu)

La vue montre le modèle en 3D. Au-dessus, la barre de vue a trois boutons et une liste :

- {{ui:3D}} : tournez librement autour du modèle.
- {{ui:Plan}} : regardez droit vers le bas un niveau. Une liste de niveaux apparaît à côté des boutons. Tout ce qui dépasse de 1,5 m le niveau est coupé, pour que vous voyiez et cliquiez le niveau clairement.
- {{ui:Altitude}} : regardez de face une ligne de grille lettrée (Grille A, Grille B …). Une liste des grilles lettrées apparaît. Seul l'acier situé à moins de 1 m de cette ligne est montré.
- Le bouton d'ajustement, à l'extrémité droite de la barre de vue, zoome pour montrer tout le modèle.

De petits points marquent chaque intersection de grille à chaque niveau. Quand un outil de placement est actif, le point le plus proche du pointeur s'allume et la barre d'état le nomme, par exemple « A/2 à Niveau 1 ». Les couleurs distinguent les types de barres : poteaux, poutres, contreventements et platines ont chacun leur couleur, les boulons et tiges une autre, les semelles sont transparentes et les armatures sont dessinées en tubes. Les trous apparaissent comme des bouchons sombres ; les échancrures sont découpées.

Pour tourner, déplacer et zoomer : [Se déplacer dans la vue 3D](topic:navigate-3d).

Quand le modèle est vide, la vue affiche une courte liste « Commencer un modèle ». Vous pouvez aussi déposer un fichier de modèle enregistré n'importe où sur la vue pour l'ouvrir.

## Le panneau Propriétés (à droite)

Ce que montre ce panneau dépend de ce que vous faites, et son titre l'indique : « Modèle », « Placer une poutre », « Poutre b2 », « Connexion par platines d'extrémité », « Platine de pied », « Semelle F1 », « 3 sélectionnés » ou « Coller ».

- **Rien de sélectionné :** un résumé du modèle (barres, connexions, semelles, pièces, repères, boulons, poids d'acier et d'armatures, grilles, niveaux).
- **Un outil de placement actif :** les options de la prochaine pièce (profilé, matériau, position, rotation et, pour les poteaux, {{ui:Jusqu'à}}), un résumé du profilé choisi et un formulaire {{ui:Ajouter par trame}} pour placer sans cliquer dans la vue.
- **Une barre sélectionnée :** son nom, son profilé, son matériau, sa position, sa rotation, les coordonnées de ses deux extrémités, ses repères, sa longueur de coupe et son poids, ses trous et échancrures, et des boutons pour les connexions, son plan d'atelier et {{ui:Supprimer}}.
- **Une connexion sélectionnée :** chaque réglage de platine, de boulon et de soudure, les boulons et la soudure qu'elle produit, ses avertissements et {{ui:Appliquer aux semblables}}.
- **Une semelle sélectionnée :** sa position et sa taille, le treillis inférieur, les barres d'attente et les repères de barres qu'elle utilise.
- **Plusieurs éléments sélectionnés :** combien de barres de chaque type, de connexions et de semelles, leur poids d'acier, et {{ui:Copier}}, {{ui:Dupliquer}} et {{ui:Supprimer}}.
- **Collage :** ce qui se trouve dans le presse-papiers, et des formulaires pour coller selon un décalage saisi ou sur une intersection de grille choisie dans des listes.

Les champs numériques prennent effet quand vous appuyez sur {{key:Enter}} ou quittez le champ. Chaque modification est une étape que vous pouvez annuler.

## Les onglets de rapport (en bas)

- {{ui:Problèmes}} : tout ce que DetailCraft n'a pas pu construire ou veut que vous vérifiiez, avec un bouton {{ui:Sélectionner}} sur chaque ligne. L'onglet affiche le nombre entre parenthèses.
- {{ui:Nomenclature}} : pièces, assemblages, et boulons et tiges d'ancrage, avec leurs poids et un lien {{ui:Télécharger le CSV}}. Cliquez un repère de pièce pour sélectionner cette pièce.
- {{ui:Tableau de ferraillage}} : chaque repère de barre dans chaque semelle, avec un lien {{ui:Télécharger le CSV}}.

Avec un onglet actif, {{key:Left}} et {{key:Right}} passent d'un onglet à l'autre.

## La barre d'état

La barre le long du bas a trois parties : l'intersection de grille sous le pointeur pendant le placement, le dernier message (ce qui vient de se passer, ou pourquoi quelque chose a été refusé), et les totaux courants des pièces, boulons, poids d'acier et poids d'armatures. Quand une action semble ne rien faire, lisez d'abord le message ici.

Le titre de l'onglet du navigateur commence par un point (•) tant que le modèle a des modifications non enregistrées.

## Sur un écran étroit

En dessous d'environ 760 pixels de large, les colonnes s'empilent : barre d'outils, vue, barre d'état, {{ui:Propriétés}}, onglets de rapport, puis le panneau {{ui:Modèle}} en dernier. Faites défiler la page pour les atteindre. DetailCraft est conçu pour un écran d'ordinateur de bureau ou portable ; un téléphone convient pour regarder, pas pour détailler.
