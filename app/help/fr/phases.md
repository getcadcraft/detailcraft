---
title: Phases
summary: Répartir le modèle en phases (séquences de montage ou livraisons), afficher ou masquer chaque phase, placer des pièces dans une phase et numéroter les repères par phase.
keywords: phase, phases, gestionnaire de phases, séquence de montage, livraison, lot, séquence, masquer une phase, afficher une phase, filtre, numérotation, préfixe de repère, par phase
from: bae506f5
---

Une phase est un groupe de pièces fabriquées, livrées ou montées ensemble : une séquence de montage, une livraison, un lot. Chaque barre et chaque semelle appartient à une phase. Un assemblage appartient à la phase de sa barre principale : la poutre d'une platine d'extrémité, le poteau d'une platine de pied. Un nouveau modèle a une seule phase.

## Le panneau Phases

La section {{ui:Phases}} du panneau {{ui:Modèle}} liste chaque phase :

- la case à cocher affiche ou masque la phase dans la vue ;
- le numéro, et un nom que vous pouvez saisir (vide = « Phase 2 », et ainsi de suite) ;
- le nombre de pièces qu'elle contient ;
- le bouton {{ui:×}} supprime une phase. Seule une phase vide peut être supprimée : placez d'abord ses pièces dans une autre phase.

{{ui:Ajouter une phase}} ajoute le numéro suivant et en fait la phase dans laquelle entrent les nouvelles pièces.

## Placer des pièces dans une phase

- **Nouvelles pièces :** {{ui:Les nouvelles pièces vont dans}} choisit la phase de chaque barre et semelle que vous placez à partir de maintenant.
- **Une pièce :** sélectionnez-la et modifiez {{ui:Phase}} dans le panneau {{ui:Propriétés}}.
- **Plusieurs pièces :** sélectionnez-les (une fenêtre, {{key:Shift}}+clic, {{key:Mod+A}}) et modifiez {{ui:Phase}} en haut du panneau {{ui:Propriétés}}. Il affiche **Variable** lorsqu'elles sont dans des phases différentes. Une modification équivaut à une seule étape d'annulation.

Les copies gardent la phase de la pièce d'origine, y compris lorsqu'elles sont collées dans un autre modèle (la phase y est alors ajoutée).

## Afficher et masquer les phases

Une phase masquée n'est pas dessinée dans la vue, ne peut pas être cliquée ni capturée par une fenêtre de sélection, et {{key:Mod+A}} l'exclut. Elle figure toujours dans la nomenclature, les rapports, les plans et chaque export. Le masquage ne concerne que la vue : il n'est pas enregistré et n'est pas annulable.

## Repères par phase

Avec **Numéroter les repères par phase** activé (il l'est au départ) et des pièces dans plusieurs phases, chaque phase est numérotée séparément et ses repères commencent par le numéro de phase : repères de pièces 1-b1, 2-b1, repères d'assemblages 2-B1, semelles 2-F1. Deux poutres identiques dans des phases différentes ont alors des repères différents, car elles sont fabriquées et expédiées à des moments différents. Avec une seule phase utilisée, les repères n'ont pas de préfixe. Désactivez l'option pour numéroter tout le modèle comme un seul ensemble : des pièces identiques partagent alors un repère, quelle que soit leur phase.

La phase est écrite dans l'export IFC (ensemble de propriétés DetailCraft, Phase).

:::note
Les modèles avec phases sont enregistrés au format de fichier 2 de DetailCraft. La version 0.3 de DetailCraft ne peut pas les ouvrir ; celle-ci ouvre les anciens fichiers, avec toutes les pièces en phase 1.
:::
