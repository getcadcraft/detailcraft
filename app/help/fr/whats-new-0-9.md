---
title: Nouveautés de la version 0.9
summary: Tailles d'acier britanniques et cornières inégales du Blue Book, plans d'atelier de chaque pièce dans un seul jeu de PDF, Mes profils pour les sections personnalisées, P-Delta et fréquences propres, charges de vent ASCE 7, site sismique et combinaisons, et curseurs en direct avec Suivre.
keywords: nouveautés, quoi de neuf, notes de version, journal des modifications, 0.9, acier britannique, blue book, ub, uc, pfc, shs, rhs, chs, cornière inégale, plan d'atelier, plans d'atelier, jeu de feuilles, repère de pièce, pdf, mes profils, profil personnalisé, p-delta, second ordre, fréquence propre, éléments finis, masse modale, charge de vent, asce 7, sismique, classe de site, usgs, combinaisons de charges, lrfd, asd, live, curseurs, suivre, personnes, infobulles, nouveautés, notes de version, journal des modifications, modifications, 0.8, 0.8.1, version, nouveautés, montage, grue, abaque de charge, film, pilote automatique, connexions, armature, encombrement, fondation, semelle, radier, tassement, ossature, bois, ossature légère, liste de découpe, constructibilité, accès aux soudures, fournisseur, stock, délai, ce qui cède en premier, live, béton, sismique, dalle, langues, assistant
from: 4c95a2de
---

Voici ce qui a changé dans DetailCraft 0.9, par rapport à la version 0.8.1. La version 0.9 apporte les tailles d'acier britanniques, un plan d'atelier pour chaque pièce en une seule fois, un onglet {{ui:Analysis}} agrandi pour les portiques, et l'affichage des curseurs des autres lorsque vous travaillez à plusieurs.

## Nouveautés

### Acier britannique et plans d'atelier

- **Tailles d'acier britanniques.** Les listes de profilés comportent désormais 976 tailles issues du Steel for Life Blue Book : UB, UC, PFC, EA, UEA, CHS, SHS et RHS, les sections creuses formées à froid étant conservées à part (leurs noms commencent par CF). Les noms sont écrits famille en premier, comme UB305x165x40 ou SHS100x100x5.0, et saisir la désignation comme l'écrivent les plans fonctionne aussi : 305x165x40 UB, L100x100x10, SHS100x5. Voir [Catalogue des profilés](topic:profile-catalog).
- **Cornières inégales.** Les cornières UEA conservent leurs deux ailes à l'import et à l'export IFC et dans les fichiers NC, et une symétrie retourne la pièce bout pour bout.
- **Tous les plans d'atelier d'un coup.** Choisissez {{ui:Shop drawing}} dans le groupe {{ui:Output}} sans rien sélectionner. La fenêtre liste chaque repère de pièce, permet d'en prévisualiser n'importe lequel, et {{ui:Tout télécharger}} enregistre un seul PDF avec une page par repère, chacune intitulée « Feuille 3 sur 42 ». {{ui:Download this sheet}} enregistre uniquement celle que vous regardez. Les fers U, les cornières et les sections creuses ont désormais aussi leurs feuilles. Voir [Créer des plans d'atelier](topic:shop-drawings).
- **Mes profils.** Un profil personnalisé peut désormais être conservé pour chaque nouveau modèle. Dans le formulaire de profil personnalisé, laissez {{ui:Garder dans Mes profils}} coché ; la liste {{ui:My profiles}} qui se trouve dessous propose {{ui:Keep}}, {{ui:Use here}} et {{ui:Remove}}. La liste est conservée dans ce navigateur (jusqu'à 200 profils), et non dans votre compte. Voir [Plaques et profils](topic:plates-and-profiles).

### Analyse

- **Second ordre (P-Delta).** Cochez {{ui:Second ordre (P-Delta)}} à côté de {{ui:Run}} dans l'onglet {{ui:Analysis}}, et les efforts normaux agissent sur le portique déformé. Les plaques et les planchers rigides restent au premier ordre, avec un avertissement. Voir [Efforts, réactions et déformations](topic:frame-analysis).
- **Fréquences propres.** Le bloc {{ui:Éléments finis : fréquences propres}}, sous les résultats, trouve les modes les plus bas du même modèle, avec la période et la masse modale effective, et affiche un mode sur le modèle. Voir [Efforts, réactions et déformations](topic:frame-analysis).
- **Charges de vent et site sismique.** Trois nouveaux blocs dans l'onglet {{ui:Analysis}} : {{ui:Charges de vent (procédure directionnelle ASCE 7)}}, {{ui:Site et système sismiques (ASCE 7)}} et {{ui:Combinaisons de charges ASCE 7}}. Voir [Vent, site sismique et combinaisons ASCE 7](topic:wind-seismic-combinations).

### Travail à plusieurs

- **Curseurs et noms.** Dans une session Live, le pointeur de chaque personne est dessiné dans le modèle avec son nom et sa couleur, et ce qu'elle a sélectionné reçoit un cadre.
- **Suivre une personne.** Ouvrez {{ui:Personnes}} dans la session et choisissez {{ui:Follow}} sur un nom ; votre vue suit la sienne. L'hôte peut choisir {{ui:Demander à tous de me suivre}}. Voir [Suivre une personne dans une session Live](topic:follow-in-live).

### Dans toutes les applications

- Les infobulles sont des infobulles Bootstrap, la carte d'astuce de démarrage possède un bouton de fermeture, les barres d'onglets défilent latéralement lorsqu'elles ne tiennent pas, et l'onglet du navigateur affiche le nom du document ouvert, suivi de DetailCraft et CadCraft.

## Corrigé

- Un profil personnalisé était perdu lorsque vous démarriez un nouveau modèle.
- Les fers U, les cornières et les sections creuses manquaient dans le jeu de plans d'atelier.

## Limites réelles

- Les blocs vent, sismique et éléments finis sont des outils d'aide à la vérification. Votre ingénieur valide les résultats ; ce ne sont pas une vérification réglementaire. La recherche USGS a été testée sur un substitut, et non sur le service en ligne réel.
- Les éléments finis et P-Delta ont été vérifiés par rapport à des calculs à la main et à des solutions fermées, et non sur un bâtiment réel. L'analyse de flambement n'est pas disponible.
- Aucun fabricant britannique n'a encore essayé les tailles britanniques, et les fichiers NC des cornières inégales n'ont pas été exécutés sur une machine.
- Le jeu de plans d'atelier n'existe qu'en PDF.
- Les langues autres que l'anglais sont des brouillons traduits par machine.
- Les programmes d'installation Windows ne sont pas signés (More info, puis Run anyway) ; l'image disque macOS n'est pas notariée (clic droit, puis Open).

Les modifications antérieures se trouvent dans les notes des versions 0.8 et 0.8.1, plus bas sur cette page.

## Antérieures : 0.8 et 0.8.1

Voici ce qui a changé dans DetailCraft 0.8 (1er novembre 2026) et 0.8.1 (2 novembre 2026), par rapport à la version 0.7. La version 0.7 vérifiait les barres en acier ; la version 0.8 planifie les levages, propose les assemblages, vérifie les fondations et les armatures, et charpente les murs, planchers et toitures en bois et en ossature légère.

### Nouveautés

**Montage**

- **Plan de montage et film.** Dans l'onglet {{ui:Erection}}, décrivez une grue (où elle se trouve, son crochet le plus haut, le levage qui n'est pas dans l'abaque) et saisissez les lignes de son abaque de charge. DetailCraft lève le modèle un ensemble à la fois, dans l'ordre des phases et étage par étage, et vérifie chaque levage par rapport à l'abaque à sa portée et à la marge que vous avez fixée. {{ui:Save movie}} écrit un seul fichier HTML qui se lit hors ligne dans n'importe quel navigateur, y compris sur téléphone. Les levages hors abaque, au-delà de sa portée ou trop hauts figurent dans {{ui:Problems}}. Il s'agit d'un plan établi à partir de vos valeurs, et non d'un plan de levage. Voir [Plan de montage et film](topic:erection-movie).

**Assemblages**

- **Pilote automatique des assemblages.** L'onglet {{ui:Autopilot}} examine chaque nœud qui n'a pas d'assemblage et en propose un à partir des profilés : platines de pied, goussets de cisaillement, platines d'extrémité pour les poutres que vous marquez comme poutres de moment, éclissages et goussets. Indiquez une charge uniforme ou un effort tranchant à une extrémité, et le nombre de boulons suit la résistance de calcul du boulon. {{ui:Add them all}} ajoute les propositions en une seule étape d'annulation. Ce sont des valeurs de départ à valider, et non un calcul d'assemblage.
- **Vérifications de constructibilité.** {{ui:Problems}} signale un boulon qu'une clé ne peut pas atteindre, des boulons trop proches pour la douille, des cordons d'angle hors de leurs limites de dimension, et des sections creuses qui retiennent l'eau. L'accès aux soudures est nouveau : un cordon d'angle tout autour que la torche du soudeur ne peut pas atteindre est listé avec la pièce qui gêne et la part du cordon concernée. Voir [Vérifications de constructibilité](topic:constructability).

**Fondations et armatures**

- **Vérifications des fondations.** L'onglet {{ui:Foundation}} vérifie les semelles, les semelles combinées et les radiers sur le sol que vous décrivez : portance, glissement et renversement sous charges de service ; flexion, cisaillement, poinçonnement, ancrage et armature minimale sous charges majorées (ACI 318-19). Un poteau proche d'un bord ou d'un angle est vérifié avec la section délimitée par le bord de la semelle. Le tassement provient du module du sol, un radier souple est résolu sur des ressorts à partir d'un module de réaction, et les groupes de pieux et les murs de soutènement ont leurs propres panneaux. Les charges de poteaux peuvent être saisies ou reprises depuis {{ui:Analysis}}. Voir [Vérifications des fondations](topic:foundation-checks).
- **Carte d'encombrement des armatures.** L'onglet {{ui:Congestion}} dessine une carte de chaleur de chaque semelle vue de dessus : là où les barres laissent trop peu de place pour que le béton descende, selon la règle d'espacement libre et, si vous les indiquez, le plus gros granulat et la tête de vibrateur. Voir [Carte d'encombrement des armatures](topic:rebar-congestion).

**Ossature et approvisionnement**

- **Ossature bois et ossature légère.** L'onglet {{ui:Framing}} charpente les panneaux de murs, de planchers et de toitures avec chaque pièce, une liste de découpe, le stock à acheter et un plan d'atelier à l'échelle. {{ui:Place as members}} place les pièces dans le modèle, et {{ui:PDF sheets}} enregistre une feuille pour chaque panneau. Les sections, l'espacement et les linteaux vous appartiennent : DetailCraft ne vérifie pas qu'ils reprennent la charge. Voir [Panneaux d'ossature bois et ossature légère](topic:framing-panels).
- **Stock fournisseur et délais.** L'onglet {{ui:Supply}} lit la liste de stock d'un fournisseur (CSV) et indique, pour chaque section que la liste de découpe achète, s'il y en a assez en stock et quel est le délai d'attente. Les manques et les sections en retard figurent dans {{ui:Problems}}. Rien n'est commandé. Voir [Stock fournisseur et délais](topic:supplier-stock).

**Analyse et calcul**

- **Ce qui cède en premier ?** Dans l'onglet {{ui:Analysis}}, le bouton trouve la combinaison de résistance déterminante, la barre la plus faible, la marge dont les charges peuvent croître avant que la première barre n'atteigne sa limite, et la platine d'extrémité ou le gousset de cisaillement le plus faible lorsque la résistance au cisaillement de ses boulons est connue. Il faut d'abord les combinaisons et un code de calcul. L'écrasement, le cisaillement de bloc, les soudures et l'effet de levier ne sont pas vérifiés. Votre assistant connecté peut poser la même question.
- **En direct.** Cochez {{ui:Live : recalculer après chaque modification}} et le portique est recalculé après chaque modification.
- **Béton, et plus.** Un poteau élancé dans un portique contreventé est calculé pour son moment amplifié (ACI 318-19 6.6.4.5). La période sismique peut être tirée de l'analyse par la méthode de Rayleigh. Une dalle faite de plaques reçoit l'acier que chaque nappe requiert à partir de ses moments, ainsi que l'effort tranchant en une direction. Voir [Vérifier les éléments en béton et créer les charges sismiques](topic:concrete-and-seismic).
- **À vérifier par un ingénieur.** Les résultats des fondations, du béton et de « Ce qui cède en premier ? » sont des aides. Les charges de vent ne sont pas disponibles.

**Dans toutes les applications**

- **Langues.** L'aide est disponible en 54 langues. Celles autres que l'anglais sont des brouillons traduits par machine jusqu'à ce qu'un locuteur natif les relise ; dix sont nouvelles (lituanien, letton, bosniaque, marathi, telugu, albanais, afrikaans, filipino, swahili, ouzbek).
- **Lignes de la barre d'outils.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} permet de choisir le retour à la ligne, 2 lignes ou 1 ligne. Une barre qui tient déjà reste comme elle est ; les autres défilent latéralement.
- **Grille des propriétés.** Les champs de la semelle utilisent la grille commune : catégories repliables et densité compacte. Les calculs saisis, comme 2*450, fonctionnent toujours.
- **Périphériques de saisie.** Pavé tactile, stylet, souris 3D, manette et MIDI peuvent piloter les applications. Voir [Naviguer en 3D](topic:navigate-3d).
- **Panneau Problèmes.** Les avertissements des nouvelles vérifications ci-dessus apparaissent dans le même panneau {{ui:Problems}} qu'auparavant.
- **Connectez votre IA.** Votre propre assistant, connecté via CadCraft Studio, fonctionne avec les huit applications et ne voit que ce que vous autorisez. La connexion en un clic, le connecteur hébergé et votre propre clé d'API dans Studio sont encore à venir. Voir [Utiliser DetailCraft avec un assistant IA](topic:use-with-ai-assistants).

### Corrigé dans la version 0.8.1

- **Langues dans Studio.** Studio et les éditions packagées peuvent changer de langue à l'exécution ; auparavant, elles étaient uniquement en anglais. Ce n'est pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.
- **Sélection par fenêtre de capture.** Les programmes d'installation 0.8.1 contiennent déjà le bon comportement de sélection par fenêtre présent dans la version web 0.8 ; un programme d'installation plus ancien ne l'avait pas.
- **Tablettes en portrait.** La hauteur de grille disponible est attribuée au canevas, et la mise en page de la feuille commence à 760 px ou moins.

### Pas encore dans cette version

- **L'envoi de fichiers NC à une machine** n'est pas publié.
- **Les charges de vent** pour le béton ne sont pas disponibles, et les vérifications du béton et des fondations sont destinées à être relues par un ingénieur.
- **Signature du code.** Les programmes d'installation Windows et le fichier .dmg macOS ne sont pas signés : Windows peut afficher un avertissement, et macOS demande un clic droit, puis Open.

Les modifications antérieures se trouvent dans [Nouveautés de la version 0.7](topic:whats-new-0-7).
