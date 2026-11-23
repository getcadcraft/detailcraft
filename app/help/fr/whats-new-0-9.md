---
title: Nouveautés de la version 0.9 (plus ancienne)
summary: Dimensions d'acier britanniques et cornières à ailes inégales, plans d'atelier pour chaque pièce dans un seul jeu PDF, Mes profils pour les sections personnalisées, P-Delta et fréquences propres, charges de vent ASCE 7, site et combinaisons sismiques, et curseurs en direct avec Suivre.
keywords: nouveautés 0.9, version antérieure, notes de version, journal des modifications, 0.9, acier britannique, blue book, ub, uc, pfc, shs, rhs, chs, cornière à ailes inégales, plan d'atelier, plans d'atelier, jeu de feuilles, repère de pièce, pdf, mes profils, profil personnalisé, p-delta, second ordre, fréquence propre, éléments finis, masse modale, charge de vent, asce 7, sismique, site, usgs, combinaisons de charges, lrfd, asd, live, curseurs, suivre, personnes, info-bulles, changements, 0.8, 0.8.1, version, nouvelles fonctionnalités, montage, grue, tableau de charge, film, pilote automatique, assemblages, armatures, congestion, fondation, semelle, radier, tassement, ossature, bois, ossature légère, liste de débit, constructibilité, accès aux soudures, fournisseur, stock, délai de livraison, qu'est-ce qui cède en premier, béton, sismique, dalle, langues, assistant
from: ab0c7f05
---

Voici ce qui a changé dans DetailCraft 0.9, par rapport à 0.8.1. La version 0.9 apporte les dimensions d'acier britanniques, un plan d'atelier pour chaque pièce d'un seul coup, un onglet {{ui:Analyse}} plus grand pour les portiques, et une vue des curseurs des autres lorsque vous travaillez à plusieurs.

## Nouveautés

### Acier britannique et plans d'atelier

- **Dimensions d'acier britanniques.** Les listes de profilés comportent désormais 976 dimensions tirées du Steel for Life Blue Book : UB, UC, PFC, EA, UEA, CHS, SHS et RHS, les sections creuses formées à froid étant tenues à part (leurs noms commencent par CF). Les noms sont écrits famille d'abord, comme UB305x165x40 ou SHS100x100x5.0, et saisir le nom tel que l'écrivent les plans fonctionne aussi : 305x165x40 UB, L100x100x10, SHS100x5. Voir [Catalogue des profilés](topic:profile-catalog).
- **Cornières à ailes inégales.** Les cornières UEA conservent leurs deux ailes à l'entrée et à la sortie IFC et dans les fichiers NC, et une symétrie retourne la pièce bout pour bout.
- **Tous les plans d'atelier à la fois.** Choisissez {{ui:Plan d'atelier}} dans le groupe {{ui:Sortie}} sans rien sélectionner. La fenêtre liste tous les repères de pièce, prévisualise l'un d'eux, et {{ui:Tout télécharger}} enregistre un seul PDF avec une page par repère, chacune titrée « Feuille 3 sur 42 ». {{ui:Télécharger le PDF}} enregistre celle que vous regardez. Les profilés en U, les cornières et les sections creuses ont désormais aussi leurs feuilles. Voir [Réaliser les plans d'atelier](topic:shop-drawings).
- **Mes profils.** Un profil personnalisé peut désormais être conservé pour chaque nouveau modèle. Dans le formulaire de profil personnalisé, laissez {{ui:Garder dans Mes profils}} coché ; la liste {{ui:Mes profils}} qui se trouve dessous propose {{ui:Garder}}, {{ui:Utiliser ici}} et {{ui:Retirer}}. La liste est conservée dans ce navigateur (jusqu'à 200), et non dans votre compte. Voir [Plaques et profilés](topic:plates-and-profiles).

### Analyse

- **Second ordre (P-Delta).** Cochez {{ui:Effets du second ordre (P-Delta)}} à côté de Lancer dans l'onglet {{ui:Analyse}} : les efforts normaux agissent alors sur le portique déformé. Les plaques et les planchers rigides restent du premier ordre, avec un avertissement. Voir [Efforts, réactions et flèches](topic:frame-analysis).
- **Fréquences propres.** Le bloc {{ui:Éléments finis : fréquences propres}} sous les résultats recherche les modes les plus bas du même modèle, avec la période et la masse modale effective, et affiche un mode sur le modèle. Voir [Efforts, réactions et flèches](topic:frame-analysis).
- **Charges de vent et site sismique.** Trois nouveaux blocs dans l'onglet {{ui:Analyse}} : {{ui:Charges de vent (procédure directionnelle ASCE 7)}}, {{ui:Site et système sismiques (ASCE 7)}} et {{ui:Combinaisons de charges ASCE 7}}. Voir [Vent, site sismique et combinaisons ASCE 7](topic:wind-seismic-combinations).

### Travailler ensemble

- **Curseurs et noms.** Dans une session Live, le pointeur de chaque personne est dessiné dans le modèle avec son nom et sa couleur, et ce qu'elle a sélectionné reçoit un cadre.
- **Suivre une personne.** Ouvrez {{ui:Personnes}} dans la session et choisissez {{ui:Suivre}} sur un nom ; votre vue suit la sienne. L'hôte peut choisir {{ui:Demander à tous de me suivre}}. Voir [Suivre une personne dans une session Live](topic:follow-in-live).

### Dans toutes les applications

- Les info-bulles sont des info-bulles Bootstrap, la carte d'astuce de démarrage a un bouton de fermeture, les barres d'onglets défilent latéralement lorsqu'elles ne tiennent pas, et le nom de l'onglet du navigateur indique le document ouvert, suivi de DetailCraft et CadCraft.

## Corrigé

- Un profil personnalisé était perdu lorsque vous commenciez un nouveau modèle.
- Les profilés en U, les cornières et les sections creuses manquaient dans le jeu de plans d'atelier.

## Limites à connaître

- Les blocs de vent, de sismique et d'éléments finis sont des aides à la vérification. Votre ingénieur examine les résultats ; ce ne sont pas une vérification de code. Le service USGS a été testé sur une réplique, et non sur le service en ligne.
- Les éléments finis et P-Delta ont été vérifiés par rapport à des résultats manuels et analytiques, et non sur un bâtiment réel. L'analyse de flambement n'est pas disponible.
- Aucun fabricant britannique n'a encore essayé les dimensions britanniques, et les fichiers NC pour les cornières inégales n'ont pas encore été exécutés sur une machine.
- Le jeu de plans d'atelier n'existe qu'en PDF.
- Les langues autres que l'anglais sont des brouillons automatiques.
- Les programmes d'installation Windows ne sont pas signés (Informations complémentaires, puis Exécuter quand même) ; l'image disque macOS n'est pas notariée (clic droit, puis Ouvrir).

Les modifications antérieures figurent dans les notes des versions 0.8 et 0.8.1, plus bas sur cette page.

## Antérieures : 0.8 et 0.8.1

Voici ce qui a changé dans DetailCraft 0.8 (1er novembre 2026) et 0.8.1 (2 novembre 2026), par rapport à 0.7. La version 0.7 vérifiait les barres en acier ; la 0.8 planifie les levages, propose les assemblages, vérifie les fondations et les armatures, et dessine l'ossature des murs, planchers et toitures en bois et en ossature légère.

### Nouveautés

**Montage**

- **Plan de montage et film.** Dans l'onglet {{ui:Montage}}, décrivez une grue (où elle se trouve, son crochet le plus haut, l'élingage qui ne figure pas dans le tableau) et saisissez les lignes de son tableau de charge. DetailCraft lève le modèle un ensemble à la fois, dans l'ordre des phases et étage par étage, et vérifie chaque levage par rapport au tableau à sa portée et par rapport à la marge que vous avez fixée. {{ui:Enregistrer le film}} écrit un seul fichier HTML qui se lit hors ligne dans n'importe quel navigateur, y compris sur un téléphone. Les levages au-dessus du tableau, au-delà de sa portée ou trop hauts figurent dans {{ui:Problèmes}}. C'est un plan établi à partir de vos chiffres, et non un plan de levage. Voir [Plan de montage et film](topic:erection-movie).

**Assemblages**

- **Pilote automatique des assemblages.** L'onglet {{ui:Pilote automatique}} examine chaque nœud sans assemblage et en propose un d'après les profils : platines d'appui, pattes de cisaillement, platines d'extrémité pour les poutres que vous marquez comme poutres en moment, éclissages et goussets. Donnez une charge uniforme ou un effort tranchant d'extrémité, et le nombre de boulons suit la résistance de calcul du boulon. {{ui:Tout ajouter}} ajoute les propositions en une seule étape d'annulation. Ce sont des valeurs de départ à revoir, et non une étude d'assemblage.
- **Vérifications de constructibilité.** {{ui:Problèmes}} signale un boulon qu'une clé ne peut pas atteindre, des boulons trop serrés pour la douille, des cordons d'angle hors de leurs limites de taille, et des sections creuses qui retiennent l'eau. L'accès aux soudures est nouveau : un cordon d'angle tout autour que la torche du soudeur ne peut pas atteindre est listé avec la pièce qui gêne et la part de la soudure touchée. Voir [Vérifications de constructibilité](topic:constructability).

**Fondations et armatures**

- **Vérifications des fondations.** L'onglet {{ui:Fondation}} vérifie les semelles, les semelles combinées et les radiers sur le sol que vous décrivez : portance, glissement et renversement sous charges de service ; flexion, cisaillement, poinçonnement, ancrage et acier minimal sous charges majorées (ACI 318-19). Un poteau proche d'un bord ou d'un angle est vérifié avec la section tronquée par le bord de la semelle. Le tassement vient du module du sol, un radier souple est résolu sur ressorts à partir d'un module de réaction, et les groupes de pieux et les murs de soutènement ont leurs propres panneaux. Les charges de poteaux peuvent être saisies ou prises de {{ui:Analyse}}. Voir [Vérifications des fondations](topic:foundation-checks).
- **Carte de congestion des armatures.** L'onglet {{ui:Congestion}} dessine une carte de chaleur de chaque semelle vue d'en haut : là où les barres laissent trop peu de place pour que le béton descende, selon la règle d'espacement libre et, si vous les indiquez, le plus gros granulat et la tête du vibreur. Voir [Carte de congestion des armatures](topic:rebar-congestion).

**Ossature et approvisionnement**

- **Ossature bois et ossature légère.** L'onglet {{ui:Ossature}} dessine chaque panneau de mur, de plancher et de toiture avec toutes ses pièces, une liste de débit, les bois à commander et un plan d'atelier à l'échelle. {{ui:Placer comme barres}} met les pièces dans le modèle, et {{ui:Feuilles PDF}} enregistre une feuille par panneau. Les dimensions, les entraxes et les linteaux sont de votre ressort : DetailCraft ne vérifie pas qu'ils portent la charge. Voir [Panneaux d'ossature bois et légère](topic:framing-panels).
- **Stock fournisseur et délais.** L'onglet {{ui:Approvisionnement}} lit une liste de stock de fournisseur (CSV) et indique, pour chaque section que la liste de débit achète, s'il y en a assez en stock et combien de temps dure l'attente. Les manques et les sections en retard figurent dans {{ui:Problèmes}}. Rien n'est commandé. Voir [Stock fournisseur et délais](topic:supplier-stock).

**Analyse et calcul**

- **Qu'est-ce qui cède en premier ?** Dans l'onglet {{ui:Analyse}}, le bouton trouve la combinaison de résistance qui gouverne, la barre la plus faible, jusqu'où les charges peuvent croître avant que la première barre n'atteigne sa limite, et la platine d'extrémité ou la patte de cisaillement la plus faible, lorsque la résistance au cisaillement de ses boulons est connue. Il faut d'abord les combinaisons et un code de calcul. Le matage, le cisaillement de bloc, les soudures et l'effet de levier ne sont pas vérifiés. Votre assistant connecté peut poser la même question.
- **En direct.** Cochez {{ui:Live : recalculer après chaque modification}} et le portique est recalculé après chaque modification.
- **Béton, et plus.** Un poteau élancé dans un portique sans translation est calculé pour son moment amplifié (ACI 318-19 6.6.4.5). La période sismique peut être prise à partir de l'analyse, par la méthode de Rayleigh. Une dalle faite de plaques reçoit l'acier que chaque nappe requiert d'après ses moments, ainsi que le cisaillement unidirectionnel. Voir [Vérifier les éléments en béton et créer les charges sismiques](topic:concrete-and-seismic).
- **À faire vérifier par un ingénieur.** Les résultats des fondations, du béton et de « Qu'est-ce qui cède en premier ? » sont des aides. Les charges de vent ne sont pas disponibles.

**Dans toutes les applications**

- **Langues.** L'aide est disponible en 54 langues. Celles qui ne sont pas en anglais sont des brouillons automatiques jusqu'à ce qu'un locuteur natif les relise ; dix sont nouvelles (lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili, ouzbek).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} permet de choisir le retour à la ligne, 2 lignes ou 1 ligne. Une barre qui tient déjà reste telle quelle ; les autres défilent latéralement.
- **Grille de propriétés.** Les champs de la semelle utilisent la grille commune : catégories repliables et densité compacte. Les calculs saisis comme 2*450 fonctionnent toujours.
- **Périphériques de saisie.** Le pavé tactile, le stylet, la souris 3D, la manette et le MIDI peuvent piloter les applications. Voir [Naviguer en 3D](topic:navigate-3d).
- **Panneau des problèmes.** Les avertissements des nouvelles vérifications ci-dessus apparaissent dans le même panneau {{ui:Problèmes}} qu'auparavant.
- **Connectez votre IA.** Votre propre assistant, connecté via CadCraft Studio, fonctionne avec les huit applications et ne voit que ce que vous autorisez. La connexion en un clic, le connecteur hébergé et votre propre clé API dans Studio sont encore à venir. Voir [Utiliser DetailCraft avec un assistant IA](topic:use-with-ai-assistants).

### Corrigé dans la 0.8.1

- **Langues dans Studio.** Studio et les éditions empaquetées peuvent changer de langue à l'exécution ; auparavant, elles n'étaient qu'en anglais. Ce n'est pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.
- **Sélection par fenêtre de capture.** Les programmes d'installation 0.8.1 contiennent déjà le comportement de sélection par fenêtre correct de la version web 0.8 ; un programme d'installation plus ancien ne l'avait pas.
- **Tablettes en portrait.** L'espace de grille restant va à la zone de dessin, et la mise en page de feuille commence à 760 px ou moins.

### Pas encore dans cette version

- **Envoyer le NC à une machine** n'est pas publié.
- **Charges de vent** pour le béton ne sont pas disponibles, et les vérifications du béton et des fondations sont à revoir par un ingénieur.
- **Signature du code.** Les programmes d'installation Windows et le .dmg macOS ne sont pas signés : Windows peut afficher un avertissement, et macOS demande un clic droit, puis Ouvrir.

Les modifications antérieures figurent dans [Nouveautés de la version 0.7](topic:whats-new-0-7).
