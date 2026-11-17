---
title: Vent, site sismique et combinaisons ASCE 7
summary: Créer les cas de charge de vent pour un bâtiment rigide fermé, déterminer les valeurs de calcul sismique d'un site et créer les combinaisons ASCE 7, dans l'onglet Analyse.
keywords: vent, charge de vent, asce 7, procédure directionnelle, exposition, fermeture, sismique, classe de site, ss, s1, sds, sd1, usgs, spectre de calcul, combinaisons de charges, lrfd, asd, kzt, kd, rafale
from: 676fcbf3
---

Trois blocs de l'onglet {{ui:Analysis}} préparent les données de vent et sismiques d'un portique et les combinent : {{ui:Charges de vent (procédure directionnelle ASCE 7)}}, {{ui:Site et système sismiques (ASCE 7)}} et {{ui:Combinaisons de charges ASCE 7}}. Ce sont des aides : **pas une vérification réglementaire ; votre ingénieur valide les résultats.**

## Ce que vous allez faire

Créer des cas de charge de vent pour un bâtiment rigide fermé, prendre les valeurs sismiques d'un site, et créer les combinaisons qui les utilisent. Le modèle a besoin de planchers : lancez d'abord l'analyse (voir [Efforts, réactions et déformations](topic:frame-analysis)).

## Étapes

1. Ouvrez l'onglet {{ui:Analysis}} et choisissez {{ui:Run}}, pour que les planchers et les dimensions du bâtiment soient connus. Si un bloc indique qu'il n'y a pas de planchers, choisissez {{ui:Find floors}} dans ce bloc.
2. Dans {{ui:Charges de vent (procédure directionnelle ASCE 7)}}, choisissez l'{{ui:Edition}}, saisissez la {{ui:Vitesse de vent de base V}} d'après votre carte de vent et choisissez son {{ui:Unité de vitesse}}, puis l'{{ui:Exposure}} et la {{ui:Enclosure}}. Kzt, Kd, G, l'altitude du sol, le Cp sous le vent, l'excentricité et la direction s'y trouvent aussi.
3. Lisez la pression à chaque plancher et l'effort sur chaque plancher dans le tableau, puis choisissez {{ui:Make wind cases}}. Les cas sont +X, -X, +Y et -Y.
4. Dans {{ui:Site et système sismiques (ASCE 7)}}, choisissez l'édition et saisissez Ss et S1 (SMS, SM1 et S1 pour l'ASCE 7-22), la classe de site de A à D, la catégorie de risque et le système de résistance sismique. Ou saisissez la latitude et la longitude et choisissez {{ui:Look up from USGS (online)}} ; le service en ligne n'est sollicité qu'au moment où vous appuyez sur ce bouton.
5. Lisez Fa, Fv, SDS et SD1, R, Cd et Omega0 ainsi que le spectre de calcul, puis choisissez {{ui:Use in the Seismic block}}. Appuyez sur {{ui:Make seismic cases}} dans le bloc sismique (voir [Vérifier les éléments en béton et créer les charges sismiques](topic:concrete-and-seismic)).
6. Dans {{ui:Combinaisons de charges ASCE 7}}, choisissez la {{ui:Method}} (LRFD ou ASD) et choisissez {{ui:Make ASCE 7 combinations}}. Relancez l'analyse.

## Points à connaître

- Vent : uniquement pour un bâtiment rigide fermé, selon la procédure directionnelle. Un bâtiment souple nécessite un facteur de rafale tiré de la norme, que DetailCraft ne calcule pas.
- Les classes de site E et F nécessitent une étude de site et ne sont pas disponibles.
- Une liste de sources en bas des blocs indique d'où vient chaque valeur et ce qui a été laissé de côté.
- La recherche USGS a été testée sur un substitut, et non sur le service en ligne réel.
