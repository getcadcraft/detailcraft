---
title: Rapport de matériaux et de poids par phase
summary: Longueurs de coupe, quantités, poids et surfaces de peinture pour chaque phase, avec ses boulons et armatures, en tableau, CSV ou PDF.
keywords: rapport, poids, tonnage, kg, peinture, surface de peinture, surface, revêtement, longueur de coupe, liste de matériaux, phase, nomenclature, csv, pdf
from: 337d6d92
---

Dans le groupe {{ui:Sortie}}, ouvrez {{ui:Plus}} et choisissez {{ui:Rapport de poids par phase}}, ou ouvrez l'onglet {{ui:Par phase}} sous la vue. Il affiche :

- **Synthèse par phase** : pour chaque phase, le nombre de pièces, le poids d'acier, la surface de peinture, les boulons et tiges d'ancrage, et les armatures ; puis les totaux.
- **Un tableau par phase** : chaque repère de pièce avec son type, son profilé, son matériau, sa longueur de coupe, sa quantité, son poids unitaire, son poids et sa surface de peinture ; puis ses boulons et tiges d'ancrage.

{{ui:Télécharger le CSV}} enregistre les mêmes tableaux dans un seul fichier CSV (`<name> weight report.csv`). {{ui:Télécharger le PDF}} produit un rapport au format de feuille défini dans [Paramètres de DetailCraft](topic:settings#drawings), avec la synthèse en premier, puis chaque phase, les longs tableaux reportés sur la page suivante, et toutes les pages numérotées.

## Comment les valeurs sont calculées

- **Les poids** sont bruts, comme dans la nomenclature : le poids au mètre du profilé multiplié par la longueur de coupe. Les trous et les échancrures ne sont pas déduits.
- **La surface de peinture** correspond à l'extérieur du profilé sur la longueur de coupe : pour un profilé en I, chaque face des semelles et de l'âme ; pour une platine, les deux faces et les chants ; pour un tube, l'extérieur seulement. Les extrémités et les trous ne sont pas comptés.
- **Les armatures** : poids des barres des semelles de la phase, d'après le [tableau de ferraillage](topic:footings-and-rebar).
- Les platines et boulons d'une connexion sont comptés dans la phase de sa barre principale. Voir [Phases](topic:phases).

Avec les [repères par phase](topic:phases#marks-per-phase) activés, chaque phase a ses propres repères (1-b1, 2-b1). Désactivés, un repère peut apparaître dans plusieurs phases : chaque phase liste les pièces qu'elle contient.
