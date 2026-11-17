---
title: Carte de congestion des armatures
summary: Voir à quel point les armatures laissent peu de place à chaque semelle pour que le béton y descende, avec le granulat et le vibrateur que vous indiquez.
keywords: armature, congestion, espacement, espacement libre, mise en place du béton, granulat, vibrateur, attentes, crochets, semelle, nappe
from: 40d029e6
---

L'onglet {{ui:Congestion}} dessine une carte de chaleur de chaque semelle, vue d'en haut. Le bleu pâle est dégagé ; le jaune et l'orange se resserrent ; le rouge est plus serré que ne l'exigent les barres. Les cellules foncées sont les barres elles-mêmes.

## Ce que mesure la carte

Le béton descend à travers l'acier couche après couche et peut se déplacer latéralement entre les couches. Donc, en chaque point, la carte prend l'écart libre le plus étroit dans une couche quelconque : entre les barres de la nappe inférieure, entre la couche de barres suivante, et entre les jambes des crochets des attentes en haut. Les attentes traversent toutes ces couches.

## Ce qui est considéré comme serré

Le besoin est le plus grand de 25 mm et du diamètre de la barre (ACI 318-19 25.2.1), ou, pour les barres BS 4449, le plus grand du diamètre de la barre et de 20 mm (EN 1992-1-1 8.2). Deux cases le relèvent :

- {{ui:Plus gros granulat}} : le besoin devient 4/3 de la taille du granulat (ACI), ou le granulat plus 5 mm (EN).
- {{ui:Tête de vibrateur}} : le besoin est au moins égal au diamètre de la tête.

Les deux valeurs commencent à 0, ce qui signifie inconnu : DetailCraft ne connaît ni votre béton ni votre pompe.

## Problèmes

Une semelle dont un passage est plus serré que le besoin est listée dans le panneau {{ui:Problèmes}}, avec l'ouverture trouvée et l'ouverture requise. {{ui:Sélectionner}} à côté d'une carte sélectionne la semelle.

La carte ne voit pas les cadres et épingles, les coupleurs, les gaines ni les armatures propres au poteau.
