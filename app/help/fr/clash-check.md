---
title: Vérifier les interférences
summary: Trouver les éléments, platines et semelles qui se pénètrent, en laissant de côté les pièces qu'un assemblage doit faire se rejoindre, et aller à chaque interférence.
keywords: interférence, vérification des interférences, collision, chevauchement, recoupement, intersection, interférence franche, coordination, vérifier le modèle
from: 04d72d3b
---

Ouvrez l'onglet {{ui:Interférences}} sous la vue et choisissez {{ui:Vérifier maintenant}}. DetailCraft examine chaque paire de pièces dans les phases affichées : acier contre acier, et acier contre semelle. L'onglet liste chaque interférence, la plus profonde en premier, avec :

- les deux pièces, par repère (ou repère de semelle) et profilé ;
- **Chevauchement (mm)** : de combien un point d'une pièce est à l'intérieur de l'autre, jusqu'à la face la plus proche ;
- **Proche** : l'intersection de trame et le niveau où elle se trouve, ou ses coordonnées ;
- {{ui:Afficher}} : sélectionne les deux pièces et amène l'endroit au milieu de la vue.

Le titre de l'onglet indique combien d'interférences la dernière vérification a trouvées. La vérification ne se lance pas toute seule : après une modification du modèle, la liste l'indique, et {{ui:Vérifier maintenant}} la relance.

## Ce qui n'est pas une interférence

- Des pièces qui se touchent seulement : une platine contre une semelle de profilé, une platine de pied sur sa semelle, deux pièces bout à bout. **Tolérance (mm)** fixe de combien deux pièces peuvent se pénétrer avant d'être comptées (1 mm au départ ; jusqu'à 50).
- Des pièces qu'un assemblage relie : une platine d'extrémité avec sa poutre et avec la semelle du poteau sur laquelle elle est boulonnée, la poutre et le poteau de ce nœud, une platine de pied avec son poteau, les platines d'un éclissage avec les deux pièces, un contreventement avec son gousset (la fente d'un tube n'est pas découpée dans le modèle). L'assemblage prévoit qu'elles se rejoignent.
- La bêche de cisaillement d'une platine de pied dans la semelle en dessous (elle est logée dans une réservation de mortier).
- Les boulons et les tiges d'ancrage (ils passent par des trous) et les armatures.
- Les pièces dans des phases masquées. Voir [Phases](topic:phases).

Un contreventement ou une poutre qui pénètre dans un poteau sans assemblage entre eux **est** une interférence : ce nœud a encore besoin d'un assemblage. Le contreventement de l'exemple de portique le montre : il n'a pas de gousset. Sélectionnez-le et choisissez {{ui:Gousset}} ([Goussets de contreventement](topic:brace-gussets)) : ses interférences disparaissent.

## À savoir

- Le chevauchement mesure la profondeur dans la matière : un élément qui pénètre dans l'âme ou la semelle fine d'un poteau n'affiche que quelques millimètres, même s'il y entre loin.
- Les pièces sont vérifiées telles qu'elles sont découpées : les échancrures et la découpe en retrait d'une poutre à ses platines d'extrémité sont prises en compte. Les trous ne le sont pas.
