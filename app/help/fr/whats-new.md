---
title: Nouveautés des versions 0.8 et 0.8.1
summary: Un film de montage à partir du tableau de charge d'une grue, un pilote automatique de connexions, une carte de congestion du ferraillage, des contrôles de fondation, des panneaux d'ossature bois et à ossature légère, des contrôles de constructibilité et d'accès aux soudures, le stock des fournisseurs, ce qui cède en premier, un recalcul en direct, davantage de contrôles du béton et les corrections de la version 0.8.1.
keywords: nouveautés, quoi de neuf, notes de version, journal des modifications, changements, 0.8, 0.8.1, version, nouvelles fonctions, montage, grue, tableau de charge, film, pilote automatique, connexions, ferraillage, congestion, fondation, semelle, radier, tassement, ossature, bois, ossature légère, liste de débit, constructibilité, accès aux soudures, fournisseur, stock, délai, ce qui cède en premier, live, béton, sismique, dalle, langues, assistant
from: 6e33e052
---

Voici ce qui a changé dans DetailCraft 0.8 (1er novembre 2026) et 0.8.1 (2 novembre 2026), par rapport à la 0.7. La 0.7 vérifiait les barres en acier ; la 0.8 planifie les levages, propose les connexions, vérifie les fondations et le ferraillage, et compose l'ossature des murs, planchers et toitures en bois et en ossature légère.

## Nouveautés

### Montage

- **Plan de montage et film.** Dans l'onglet {{ui:Montage}}, décrivez une grue (où elle se trouve, son crochet le plus haut, le gréement qui n'est pas dans le tableau) et saisissez les lignes de son tableau de charge. DetailCraft lève le modèle un assemblage à la fois, par ordre de phase et étage par étage, et vérifie chaque levage par rapport au tableau à sa portée et par rapport à la marge que vous avez fixée. {{ui:Enregistrer le film}} écrit un seul fichier HTML qui se lit hors ligne dans n'importe quel navigateur, y compris sur un téléphone. Les levages hors tableau, au-delà de celui-ci ou trop hauts figurent dans {{ui:Problèmes}}. Il s'agit d'un plan établi à partir de vos chiffres, et non d'un plan de levage. Voir [Plan de montage et film](topic:erection-movie).

### Connexions

- **Pilote automatique des connexions.** L'onglet {{ui:Pilote automatique}} examine chaque assemblage sans connexion et en propose une d'après les formes : platines de pied, pattes de cisaillement, platines d'extrémité pour les poutres que vous marquez comme poutres à moment, éclissages et goussets. Donnez une charge uniforme ou un effort tranchant à une extrémité, et le nombre de boulons suit la résistance de calcul du boulon. {{ui:Tout ajouter}} ajoute les propositions en une seule étape d'annulation. Ce sont des valeurs de départ à vérifier, et non un dimensionnement de connexion.
- **Contrôles de constructibilité.** {{ui:Problèmes}} signale un boulon qu'une clé ne peut pas atteindre, des boulons trop serrés pour la douille, des soudures d'angle hors de leurs limites de taille et des profilés creux qui retiennent l'eau. L'accès aux soudures est nouveau : une soudure d'angle périphérique qu'une torche de soudeur ne peut pas atteindre est listée avec la pièce qui gêne et la part de la soudure concernée. Voir [Contrôles de constructibilité](topic:constructability).

### Fondations et ferraillage

- **Contrôles de fondation.** L'onglet {{ui:Fondation}} vérifie les semelles, les semelles combinées et les radiers sur le sol que vous décrivez : portance, glissement et renversement sous charges de service ; flexion, cisaillement, poinçonnement, ancrage et armature minimale sous charges majorées (ACI 318-19). Un poteau proche d'un bord ou d'un angle est vérifié avec la section délimitée par le bord de la semelle. Le tassement provient du module du sol, un radier souple est résolu sur des ressorts à partir d'un module de réaction, et les groupes de pieux et les murs de soutènement ont leurs propres panneaux. Les charges de poteaux peuvent être saisies ou reprises de l'{{ui:Analyse}}. Voir [Contrôles de fondation](topic:foundation-checks).
- **Carte de congestion du ferraillage.** L'onglet {{ui:Congestion}} trace une carte thermique de chaque semelle vue d'en haut : là où les armatures laissent trop peu de place pour que le béton descende, selon la règle d'espacement libre et, si vous les indiquez, le plus gros granulat et la tête de vibrateur. Voir [Carte de congestion du ferraillage](topic:rebar-congestion).

### Ossature et approvisionnement

- **Ossature bois et ossature légère.** L'onglet {{ui:Ossature}} compose des panneaux de murs, de planchers et de toitures avec chaque pièce, une liste de débit, le stock à acheter et un plan d'atelier à l'échelle. {{ui:Placer comme barres}} place les pièces dans le modèle, et {{ui:Feuilles PDF}} enregistre une feuille par panneau. Les sections, les entraxes et les linteaux sont de votre ressort : DetailCraft ne vérifie pas qu'ils portent la charge. Voir [Panneaux d'ossature bois et ossature légère](topic:framing-panels).
- **Stock des fournisseurs et délais.** L'onglet {{ui:Approvisionnement}} lit la liste de stock d'un fournisseur (CSV) et indique, pour chaque section que la liste de débit achète, s'il y en a assez en stock et quel est le délai d'attente. Les manques et les sections en retard figurent dans {{ui:Problèmes}}. Rien n'est commandé. Voir [Stock des fournisseurs et délais](topic:supplier-stock).

### Analyse et dimensionnement

- **Ce qui cède en premier ?** Dans l'onglet {{ui:Analyse}}, le bouton trouve la combinaison de charges qui gouverne, la barre la plus faible, de combien les charges peuvent croître avant que la première barre n'atteigne sa limite, et la platine d'extrémité ou la patte de cisaillement la plus faible lorsque la résistance au cisaillement de ses boulons est connue. Il faut d'abord les combinaisons et un code de calcul. Le matage, le cisaillement de bloc, les soudures et l'effet de levier ne sont pas vérifiés. Votre assistant connecté peut poser la même question.
- **Live.** Cochez {{ui:Live : recalculer après chaque modification}} et l'ossature est recalculée après chaque modification.
- **Béton, et plus.** Un poteau élancé dans un portique à nœuds fixes est dimensionné pour son moment amplifié (ACI 318-19 6.6.4.5). La période sismique peut être prise dans l'analyse par la méthode de Rayleigh. Une dalle faite de platines reçoit l'acier nécessaire à chaque nappe à partir de ses moments, ainsi que le cisaillement à sens unique. Voir [Vérifier les éléments en béton et définir les charges sismiques](topic:concrete-and-seismic).
- **À vérifier par un ingénieur.** Les résultats de fondation, de béton et de Ce qui cède en premier ? sont des aides. Les charges de vent ne sont pas encore prises en compte.

### Dans toutes les applications

- **Langues.** L'aide est disponible en 54 langues. Celles autres que l'anglais sont des traductions automatiques tant qu'un locuteur natif ne les a pas relues ; dix sont nouvelles (lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, philippin, swahili, ouzbek).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} choisit retour à la ligne, 2 lignes ou 1 ligne. Une barre qui tient déjà reste telle quelle ; les autres défilent latéralement.
- **Grille des propriétés.** Les champs de la semelle utilisent la grille commune : catégories repliables et densité compacte. Les calculs saisis, comme 2*450, fonctionnent toujours.
- **Périphériques de saisie.** Le pavé tactile, le stylet, la souris 3D, la manette et le MIDI peuvent piloter les applications. Voir [Naviguer en 3D](topic:navigate-3d).
- **Panneau des problèmes.** Les avertissements des nouveaux contrôles ci-dessus apparaissent dans le même panneau {{ui:Problèmes}} qu'auparavant.
- **Connectez votre IA.** Votre propre assistant, connecté via CadCraft Studio, fonctionne avec les huit applications et ne voit que ce que vous autorisez. La connexion en un clic, le connecteur hébergé et votre propre clé API dans Studio sont encore à venir. Voir [Utiliser DetailCraft avec un assistant IA](topic:use-with-ai-assistants).

## Corrigé dans 0.8.1

- **Langues dans Studio.** Studio et les éditions empaquetées peuvent changer de langue à l'exécution ; auparavant, elles étaient en anglais seulement. Ce n'est pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.
- **Sélection par capture.** Les programmes d'installation 0.8.1 contiennent déjà le comportement correct de sélection par fenêtre de capture de la version web 0.8 ; un ancien programme d'installation ne l'avait pas.
- **Tablettes en portrait.** La hauteur de grille disponible va à la zone de dessin, et la mise en page des feuilles commence à 760 px ou moins.

## Non disponible dans cette version

- **Envoyer le NC à une machine** n'est pas encore publié.
- **Les charges de vent** pour le béton ne sont pas encore prises en compte, et les contrôles du béton et des fondations sont à revoir par un ingénieur.
- **Signature du code.** Les programmes d'installation Windows et le fichier .dmg macOS ne sont pas signés : Windows peut afficher un avertissement, et macOS demande un clic droit, puis Ouvrir.

Les modifications antérieures figurent dans [Nouveautés de la version 0.7](topic:whats-new-0-7).
