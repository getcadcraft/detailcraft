---
title: Plan de montage et film
summary: Saisir une grue et son tableau de charge, voir chaque levage vérifié par rapport au tableau dans l'ordre des phases, et enregistrer un film de montage qui se lit hors ligne sur n'importe quel téléphone.
keywords: montage, grue, levage, tableau de charge, rayon, capacité, élingage, séquence, film, animation, téléphone, hors ligne, plan de levage
from: fa7b0133
---

L'onglet {{ui:Montage}} transforme le modèle en ordre de montage et vérifie chaque levage par rapport à une grue que vous décrivez. Il planifie à partir de chiffres que vous saisissez. Ce n'est pas un plan de levage : le gréeur et le conducteur de grue l'établissent.

## Décrire la grue

Choisissez {{ui:Ajouter une grue}}, puis renseignez :

- **Centre X et Y de la grue** : l'emplacement de la grue, en millimètres.
- **Crochet le plus haut** : la hauteur maximale que peut atteindre le crochet, en millimètres. 0 signifie qu'aucune limite n'est vérifiée.
- **Moufle et élingage non inclus dans le tableau** : kilogrammes retirés du tableau avant d'ajouter une charge, lorsque votre tableau ne le fait pas déjà.
- **Tableau de charge** : une ligne par rayon, rayon en mètres puis capacité en kilogrammes. Recopiez les lignes depuis le tableau propre à la grue.

Le tableau se lit comme un tableau de charge : la capacité indiquée pour un rayon vaut jusqu'à ce rayon. Une charge à un rayon compris entre deux lignes reçoit la capacité de la ligne **la plus éloignée**, jamais une valeur intermédiaire. Dans la première ligne, la capacité de la première ligne s'applique. Au-delà de la dernière ligne, la grue ne peut rien lever. Le rayon qui compte pour un levage est le plus grand entre le rayon de prise et le rayon de pose.

Une seconde grue s'ajoute de la même façon. Chaque levage est attribué à la première grue capable de le prendre dans votre marge.

## Ce que fait le plan

- Un levage par assemblage : une poutre avec ses platines d'extrémité, un poteau avec sa platine de pied, un escalier.
- L'ordre suit d'abord les phases, puis étage par étage : poteaux, poutres qu'ils portent, contreventements, platines, escaliers. Une pièce n'est jamais levée avant ce qui la porte.
- Chaque levage affiche son poids (le poids brut du modèle, plus {{ui:Élingage ajouté à chaque poids}}), son rayon, la part du tableau qu'il utilise et la minute où il commence.
- {{ui:Part maximale du tableau pour un levage}} est votre marge de sécurité. Un levage qui la dépasse est marqué **Dépasse votre marge** ; au-delà du tableau, **Dépasse le tableau** ; au-delà du dernier rayon du tableau, **Hors du tableau (rayon trop grand)** ; et une pièce plus haute que le crochet, **Crochet trop bas**.

Trous et découpes ne sont pas déduits des poids, et les boulons sont couverts par le pourcentage d'élingage.

## Problèmes

Chaque levage qui dépasse, est hors tableau, trop haut ou placé avant ce qui le porte apparaît dans le panneau {{ui:Problèmes}}. Une poutre sans assemblage pour la porter est listée comme nécessitant un étaiement provisoire.

## Enregistrer le film

{{ui:Enregistrer le film}} écrit un seul fichier HTML. Ouvrez-le dans n'importe quel navigateur, y compris sur un téléphone, sans réseau ni compte : lecture et pause, glissez la barre jusqu'à n'importe quelle minute, faites pivoter le modèle au doigt, pincez pour zoomer. La légende nomme chaque levage, son poids, son rayon et sa part du tableau. Le modèle est dessiné en simples volumes : il montre l'ordre et les levages, et non les profils réels.

Le même tableau s'enregistre en CSV avec le bouton {{ui:CSV}}. La grue et le tableau sont enregistrés dans le fichier du modèle, et chaque modification correspond à une seule étape d'annulation.
