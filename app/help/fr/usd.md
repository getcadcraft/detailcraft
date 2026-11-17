---
title: Exporter le modèle acier en USD
summary: Écrit chaque pièce et chaque assemblage en USD pour les logiciels de rendu, l'assemblage de scènes et les autres logiciels 3D, avec repères, profilés et poids.
keywords: usd, usda, usdc, usdz, openusd, export, acier, assemblage, repères, profilés, rendu
from: c3f67931
---

1. Choisissez {{ui:USD}} dans le groupe {{ui:Sortie}}.
2. Sélectionnez {{ui:Texte (.usda)}}, {{ui:Binaire (.usdc)}} ou {{ui:Paquet (.usdz)}}.

Chaque assemblage est un objet qui regroupe ses pièces ; chaque pièce est son profilé développé sur sa longueur, avec ses échancrures. Chaque pièce porte son repère, son profilé, sa nuance, sa longueur et son poids. Tout est exprimé en mètres, avec Z vers le haut.

:::note
Les trous de boulons, les boulons, les soudures et les semelles ne figurent pas dans les maillages USD. Ils figurent dans les sorties IFC, NC et nomenclature.
:::
