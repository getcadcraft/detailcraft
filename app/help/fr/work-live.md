---
title: Détailler une structure à plusieurs avec Live TeamWork
summary: Ce qui change dans DetailCraft pendant une session Live TeamWork depuis CadCraft Studio : les barres, assemblages et semelles de tous dans un seul modèle, votre propre annulation, et la connexion depuis un navigateur sur le même réseau.
keywords: live, live teamwork, studio live, ensemble, collaborer, session, partager en live, rejoindre, barres, connexions, curseur, pointeur, se voir, noms, couleur, sélection, annuler, hôte
from: 22b1de62
---

## Ce que vous allez apprendre

Ce qui arrive à un modèle lorsque plusieurs personnes le détaillent en même temps. CadCraft Studio démarre et rejoint la session Live TeamWork (Partager, Rejoindre) ; cette page traite du modèle lui-même.

## Tout le monde travaille en même temps

Ajoutez et modifiez les barres, assemblages, semelles, escaliers et boulons comme d'habitude. Vos propres modifications apparaissent immédiatement ; celles des autres apparaissent un instant après qu'elles les ont faites.

- **Deux personnes modifient une même barre :** des réglages différents (l'un le profil, l'autre le point d'extrémité) sont tous deux conservés ; pour un même réglage, c'est la modification la plus récente qui s'applique.
- **Un assemblage sur une barre que quelqu'un vient de supprimer** est retiré, et la barre d'état indique pourquoi.
- Les grilles, niveaux et phases vont à la personne qui les a modifiés en dernier.
- La géométrie construite, les repères de pièces et la nomenclature sont calculés dans chaque fenêtre à partir du même modèle, de sorte qu'ils concordent.

## Voir les autres

Chaque personne de la session a sa propre couleur. Vous voyez le pointeur de chacun sous forme de flèche de sa couleur, avec son nom à côté, sur la barre ou la platine qu'il pointe, et un cadre en pointillés de sa couleur autour des barres, assemblages, semelles et escaliers qu'il a sélectionnés.

Les pointeurs, les noms et les sélections n'existent que pour la session : ils ne sont jamais enregistrés dans le fichier et n'entrent jamais dans l'annulation de qui que ce soit. Ils glissent jusqu'à la position de chacun, et restent donc fluides même sur une connexion lente.

## Annuler n'annule que votre travail

{{key:Mod+Z}} annule votre propre dernière modification et laisse celles des autres intactes. Lorsque quelqu'un a modifié la même chose depuis, rien n'est annulé et la barre d'état indique qui.

## Rejoindre depuis un navigateur

Un coéquipier sans Studio peut scanner l'image située sous le code de l'hôte avec un téléphone, une tablette ou un ordinateur sur le même réseau. DetailCraft s'ouvre dans le navigateur et se remplit avec le modèle de l'hôte dès que celui-ci vous admet. Un lien d'invitation permet à quelqu'un de rejoindre depuis un autre réseau : l'hôte doit disposer d'un poste Team Cloud Plan pour l'application, les autres participent gratuitement, et le lien ne fonctionne que tant que la session de l'hôte est ouverte.

## Quand la session se termine

Seul l'hôte enregistre le modèle. Tous les autres conservent une copie non enregistrée : enregistrez-la si vous voulez la garder.
