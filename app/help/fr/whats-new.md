---
title: Nouveautés de la version 0.7
summary: Vérifications de calcul des profilés en I en acier avec combinaisons de charges selon l'ASCE 7 ou l'EN 1990 et vérifications des barres selon l'AISC 360 ou l'EN 1993-1-1, export USD du modèle d'acier, un outil d'assistant pour l'USD, un ruban Acier avec grands et petits boutons, des panneaux qui se rangent et des boîtes de dialogue qui se déplacent.
keywords: nouveautés, notes de version, journal des modifications, changements, 0.7, version, nouvelles fonctions, vérifications de calcul, calcul de l'acier, taux de travail, combinaisons de charges, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, annexe nationale, charge d'exploitation de toiture, limite de flèche, usd, usda, usdc, usdz, openusd, assistant, mcp, ruban Acier, ruban, bouton fractionné, unités, compacte, panneaux, boîtes de dialogue, portugais
from: 17d1e0bb
---

Voici ce qui a changé dans DetailCraft 0.7 par rapport à la 0.6. L'analyse de structure de la 0.6 a maintenant une deuxième étape : vérifier les barres d'acier selon un code de calcul.

## Nouveau

### Assemblages d'onglet (0.7.1)

- **Deux profilés en I qui se rejoignent en angle**, comme un angle de portique ou un faîtage : sélectionnez-les, choisissez {{ui:Onglet}} dans le menu {{ui:Plus}} du groupe {{ui:Connexions}}, et les deux extrémités sont coupées selon le plan qui partage l'angle en deux. Les platines d'extrémité boulonnées entre elles et les raidisseurs d'âme sont des cases à cocher de la nouvelle boîte de dialogue Onglet, dont les champs numérotés correspondent à un dessin de votre assemblage fait au fur et à mesure de la saisie. L'onglet suit les barres quand elles bougent, et se retrouve dans les dessins, les fichiers NC (coupes biaises), l'IFC et la nomenclature. Voir [Assemblages d'onglet](topic:mitres).

### Vérifications de calcul

- **Combinaisons de charges selon le code.** Dans l'onglet {{ui:Analyse}}, le nouveau bloc {{ui:Vérifications de calcul}} a un {{ui:Code de calcul}} : ASCE 7 + AISC 360 (États-Unis, LRFD) ou EN 1990 + EN 1993-1-1 (Eurocode). Donnez à chaque cas de charge sa nature (permanente, d'exploitation, la nouvelle charge d'exploitation de toiture, neige, vent, sismique), appuyez sur {{ui:Créer les combinaisons}}, et DetailCraft écrit les combinaisons de résistance et d'aptitude au service du code pour vos cas. Les combinaisons que vous avez saisies vous-même restent. Voir [Créer les combinaisons](topic:design-checks#make-the-combinations).
- **Valeurs de l'annexe nationale.** Pour l'Eurocode, les coefficients partent des valeurs recommandées ; {{ui:Valeurs de l'annexe nationale}} vous permet de saisir celles de votre pays, et elles sont enregistrées dans le modèle. Voir [Créer les combinaisons](topic:design-checks#make-the-combinations).
- **Vérifier les barres.** {{ui:Vérifier les barres}} vérifie chaque profilé en I en acier en traction, en compression avec flambement, en flexion avec déversement, en cisaillement, en flexion avec effort axial et en flèche par rapport à la {{ui:Limite de flèche}} que vous fixez. Le tableau montre le taux de travail de chaque barre, la vérification qui gouverne et sa combinaison, et les barres sont colorées sur le modèle (bleu, vert, ocre, rouge, gris pour non vérifié). Voir [Vérifier les barres](topic:design-checks#check-the-members).
- **Dans le rapport.** {{ui:Rapport (PDF)}} et {{ui:Rapport (CSV)}} ajoutent les éditions des codes, les réglages, le taux de travail par barre et chaque article utilisé. Voir [Le rapport](topic:design-checks#the-report).
- **Une aide, tant qu'un ingénieur ne l'a pas relue.** Elle n'utilise que des efforts du premier ordre. Les tubes, cornières, profilés en U, profilés reconstitués soudés et pièces élancées ou de classe 4 affichent « non vérifié », avec la raison ; la torsion, les connexions et le béton ne sont pas vérifiés. Voir [Ce qui n'est pas vérifié](topic:design-checks#what-is-not-checked).

### USD

- **Exporter le modèle d'acier en USD.** {{ui:USD}} dans le groupe {{ui:Sortie}} écrit le modèle en {{ui:Texte (.usda)}}, {{ui:Binaire (.usdc)}} ou {{ui:Paquet (.usdz)}} pour les programmes de rendu et l'assemblage de scènes : chaque assemblage contient ses pièces, chaque pièce est sa section déroulée sur sa longueur avec les échancrures découpées, et chacune porte son repère de pièce, son profilé, sa nuance, sa longueur et son poids. Les trous de boulons, boulons, soudures et semelles ne sont pas dans les maillages USD. Voir [Exporter le modèle d'acier en USD](topic:usd).

### Assistants IA

- **L'USD pour les assistants.** Votre propre assistant, connecté par CadCraft Studio, peut exporter le modèle en USD (`usd_export`) et, dans Studio, l'écrire dans un dossier que vous avez autorisé. Voir [Ce qu'un assistant peut demander](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Modifié

- **Le ruban Acier** a de grands et de petits boutons : un grand {{ui:Poutre}} à côté de petits {{ui:Poteau}}, {{ui:Contreventement}} et {{ui:Platine}} dans {{ui:Modélisation}} › {{ui:Barres}} ; un grand {{ui:Platines d'extrémité}} dans {{ui:Détaillage}} › {{ui:Connexions}}, avec {{ui:Éclissage}} et {{ui:Gousset}} partageant un bouton fractionné ; un grand {{ui:Coller}} dans {{ui:Édition}} › {{ui:Presse-papiers}}, avec {{ui:Coller à la même position}} et {{ui:Dupliquer}} derrière la flèche du groupe. {{ui:Fabrication}} › {{ui:Échange}} a {{ui:Exporter USD}} à côté de l'IFC. Les autres styles de menu sont inchangés. Voir [Menus, touches et souris](topic:menus-keys-and-mouse#the-three-styles).
- [Analyser la structure](topic:frame-analysis) renvoie maintenant aux vérifications de calcul, et ses combinaisons peuvent être faites par le code.

## Dans chaque application

- **Unités.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}} a une liste chacune pour la longueur, l'aire, le volume, l'angle et la pente, avec les dimensions exactes que donnent les définitions des unités (le pied d'arpentage américain est une unité à part). Désactivez les unités que vous n'utilisez jamais et elles quittent les listes d'unités ; marquez-en une d'une étoile et le nouveau travail démarre avec elle. Un fichier garde toujours sa propre unité. Les champs propres à DetailCraft ne suivent pas encore les listes : ses longueurs se saisissent toujours en millimètres. Voir [Unités, valeurs saisies et listes d'unités](common:unit-lists).
- **Une disposition plus dense et des panneaux qui se rangent.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Densité de la mise en page}} › {{ui:Compacte}} fait tenir plus de choses à l'écran (les écrans tactiles et les téléphones gardent leurs grands boutons). Chaque panneau latéral a une fine barre de titre : faites-la glisser pour ancrer ou détacher le panneau, déposez-la sur la barre d'un autre panneau pour partager un cadre sous forme d'onglets, épinglez-la pour la faire glisser vers le bord, ou masquez-la et faites-la revenir depuis le bord. Voir [Organiser les panneaux](common:arrange-panels#make-the-layout-denser).
- **Les boîtes de dialogue se déplacent.** Faites glisser une boîte de dialogue par sa barre de titre pour la sortir du chemin du dessin ; elle revient là où vous l'avez laissée. Double-cliquez la barre de titre pour la recentrer. Voir [Déplacer une boîte de dialogue](common:arrange-panels#move-a-dialog).
- **Recettes pour assistants IA.** Dix demandes détaillées pour votre propre assistant (ranger un dessin, tracer un jeu, vérifier des dessins, interroger un modèle, totaliser un métré, essayer une variante de pièce…), chacune avec les outils qu'elle appelle et les autorisations qu'il lui faut, et chacune rejouée par nos tests. Les applications ne contiennent aucune IA. Voir [Recettes pour assistants IA](common:assistants-recipes).
- **Langues.** **Português (Portugal)** est nouveau dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Langue}}. Cette langue, **Português (Brasil)**, **Español (México)** et **Bahasa Indonesia** ont maintenant tous les mots des applications, sous forme de brouillons pas encore relus par un locuteur natif. Les rubriques d'aide de démarrage existent maintenant aussi en français ; les autres rubriques d'aide restent en anglais.
- **CadCraft Studio** dit pourquoi une recherche de mise à jour a échoué (pas encore de fichier pour votre système, pas de réseau, signature incorrecte) au lieu d'un simple « Terminé », et cesse de ramener une carte Nouveautés que vous avez fermée tant qu'il n'y a pas de version plus récente.

## Pas encore dans cette version

- **La 0.7 n'est pas signée.** La signature, et le paquet Microsoft Store, sont passés à la 0.8 parce que la validation du certificat n'a pas encore abouti. Vérifiez le SHA-256 à côté de chaque fichier sur getcadcraft.com/download. Sous Windows, si SmartScreen bloque le programme d'installation, choisissez {{ui:Informations complémentaires}}, puis {{ui:Exécuter quand même}}. Sur un Mac, la première fois, faites un clic droit sur CadCraft Studio et choisissez {{ui:Ouvrir}}. CadCraft Studio n'est pas encore dans une boutique d'applications, et il n'y a pas encore de version pour iPad ni iPhone.
- Les listes d'angle et de pente dans {{ui:Unités}} sont enregistrées, mais aucun champ ne les lit encore.
- **Les vérifications de calcul n'ont pas encore été relues par un ingénieur.** Nos tests les comparent à des valeurs de tableaux imprimés et à des formules calculées à la main, pas encore aux exemples traités d'un guide de calcul. D'ici une relecture, c'est une aide : vérifiez à la main les barres qui comptent.
- Les vérifications de calcul utilisent des efforts du premier ordre (pas d'effets du second ordre) et ne vérifient que des profilés en I. Pas encore développés : tubes, cornières, profilés en U, profilés reconstitués soudés, pièces élancées (AISC) ou de classe 4 (Eurocode) en flexion, torsion, voilement par cisaillement avec flexion, connexions, fatigue, feu, détaillage sismique et béton. Une pièce élancée en compression sort des vérifications de compression, et la barre affiche « conforme, partiellement vérifié ».
- L'analyse de structure reste du premier ordre et linéaire, et n'a pas encore été essayée par un ingénieur sur un vrai chantier.
- Les trous de boulons, boulons, soudures et semelles ne sont pas dans l'export USD.

Tout le reste est dans [Ce qui n'est pas encore développé](topic:not-built-yet).
