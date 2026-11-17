---
title: Nouveautés de la version 0.7 (antérieure)
summary: Vérifications de calcul des profilés en I en acier avec les combinaisons de charges de l'ASCE 7 ou de l'EN 1990, et vérification des barres selon l'AISC 360 ou l'EN 1993-1-1, export USD du modèle acier, outil assistant pour l'USD, un ruban Acier avec grands et petits boutons, des panneaux qui se rangent et des boîtes de dialogue déplaçables.
keywords: nouveautés 0.7, version antérieure, notes de version, journal des modifications, modifications, 0.7, version, nouveautés, vérifications de calcul, calcul de l'acier, taux d'utilisation, combinaisons de charges, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, annexe nationale, charge d'exploitation en toiture, limite de flèche, usd, usda, usdc, usdz, openusd, assistant, mcp, ruban acier, ruban, bouton fractionné, unités, compact, panneaux, boîtes de dialogue, portugais
from: 54a7a8f0
---

Voici ce qui a changé dans DetailCraft 0.7, par rapport à la version 0.6. L'analyse de portique de la version 0.6 comporte désormais une deuxième étape : la vérification des barres en acier selon un code de calcul.

## Nouveautés

### Assemblages à onglet (0.7.1)

- **Deux profilés en I qui se rejoignent selon un angle**, comme un coin de portique ou un faîtage : sélectionnez les deux, choisissez {{ui:Mitre}} dans le menu {{ui:More}} du groupe {{ui:Connect}}, et les deux extrémités sont coupées selon le plan qui divise l'angle en deux. Les platines d'extrémité boulonnées entre elles et les raidisseurs d'âme sont des cases à cocher dans la nouvelle boîte de dialogue Onglet, dont les champs numérotés correspondent à un dessin de votre assemblage généré au fur et à mesure de la saisie. L'onglet suit les barres lorsqu'elles se déplacent, et il est repris dans les plans, les fichiers NC (coupes biaises), l'IFC et la nomenclature. Voir [Assemblages à onglet](topic:mitres).

### Vérifications de calcul

- **Combinaisons de charges issues du code.** Dans l'onglet {{ui:Analysis}}, le nouveau bloc {{ui:Design checks}} comporte un {{ui:Design code}} : ASCE 7 + AISC 360 (États-Unis, LRFD) ou EN 1990 + EN 1993-1-1 (Eurocode). Indiquez la nature de chaque cas de charge (permanente, d'exploitation, la nouvelle charge d'exploitation en toiture, neige, vent, sismique), appuyez sur {{ui:Make combinations}}, et DetailCraft écrit les combinaisons de résistance et de service du code à partir de vos cas. Les combinaisons que vous avez saisies restent. Voir [Créer les combinaisons](topic:design-checks#make-the-combinations).
- **Valeurs de l'annexe nationale.** Pour l'Eurocode, les coefficients commencent aux valeurs recommandées ; {{ui:National Annex values}} vous permet de saisir celles de votre pays, qui sont enregistrées dans le modèle. Voir [Créer les combinaisons](topic:design-checks#make-the-combinations).
- **Vérifier les barres.** {{ui:Check members}} vérifie chaque profilé en I en acier pour la traction, la compression avec flambement, la flexion avec déversement, le cisaillement, la flexion avec effort normal et la flèche par rapport à la {{ui:Deflection limit}} que vous avez fixée. Le tableau affiche le taux d'utilisation de chaque barre, la vérification déterminante et sa combinaison, et les barres sont colorées sur le modèle (bleu, vert, ocre, rouge, gris pour non vérifié). Voir [Vérifier les barres](topic:design-checks#check-the-members).
- **Dans le rapport.** {{ui:Report (PDF)}} et {{ui:Report (CSV)}} ajoutent les éditions des codes, les paramètres, le taux d'utilisation par barre et chaque article utilisé. Voir [Le rapport](topic:design-checks#the-report).
- **Une aide en attendant la validation par un ingénieur.** Elle n'utilise que les efforts du premier ordre. Les tubes, cornières, profilés en U, profilés soudés et les parties élancées ou de classe 4 sont indiqués « non vérifié », avec la raison ; la torsion, les assemblages et le béton ne sont pas vérifiés. Voir [Ce qui n'est pas vérifié](topic:design-checks#what-is-not-checked).

### USD

- **Exporter le modèle acier en USD.** {{ui:USD}} dans le groupe {{ui:Output}} écrit le modèle en {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} ou {{ui:Package (.usdz)}} pour les logiciels de rendu et l'assemblage de scènes : chaque ensemble contient ses pièces, chaque pièce est son profil, prolongé sur sa longueur avec les découpes, et chacune porte son repère, son profil, sa nuance, sa longueur et son poids. Les trous de boulons, les boulons, les soudures et les semelles ne figurent pas dans les maillages USD. Voir [Exporter le modèle acier en USD](topic:usd).

### Assistants IA

- **USD pour les assistants.** Votre propre assistant, connecté via CadCraft Studio, peut exporter le modèle en USD (`usd_export`), et dans Studio l'écrire dans un dossier que vous avez autorisé. Voir [Ce que peut demander un assistant](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Modifié

- **Le ruban Acier** comporte de grands et de petits boutons : un grand {{ui:Beam}} à côté des petits {{ui:Column}}, {{ui:Brace}} et {{ui:Plate}} dans {{ui:Modeling}} › {{ui:Members}} ; un grand {{ui:End plates}} dans {{ui:Detailing}} › {{ui:Connections}}, avec {{ui:Splice}} et {{ui:Gusset}} partageant un même bouton fractionné ; un grand {{ui:Paste}} dans {{ui:Edit}} › {{ui:Clipboard}}, avec {{ui:Paste in place}} et {{ui:Duplicate}} derrière la flèche du groupe. {{ui:Fabrication}} › {{ui:Exchange}} comporte {{ui:Export USD}} à côté de l'IFC. Les autres styles de menu sont inchangés. Voir [Menus, touches et souris](topic:menus-keys-and-mouse#the-three-styles).
- [L'analyse du portique](topic:frame-analysis) renvoie désormais aux vérifications de calcul, et ses combinaisons peuvent être créées selon le code.

## Dans toutes les applications

- **Unités.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} propose une liste par grandeur pour la longueur, la surface, le volume, l'angle et la pente, avec les tailles exactes données par les définitions des unités (le pied d'arpentage américain est une unité à part). Désactivez les unités que vous n'utilisez jamais : elles quittent les listes ; mettez-en une en favori, et les nouveaux travaux démarrent dans cette unité. Un fichier conserve toujours sa propre unité. Les champs propres à DetailCraft ne suivent pas encore les listes : ses longueurs sont toujours saisies en millimètres. Voir [Unités, valeurs saisies et listes d'unités](common:unit-lists).
- **Une mise en page plus dense et des panneaux qui se rangent.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} fait tenir davantage à l'écran (les écrans tactiles et les téléphones gardent leurs grands boutons). Chaque panneau latéral possède une fine barre de titre : faites-la glisser pour ancrer ou rendre flottant le panneau, déposez-la sur la barre d'un autre panneau pour partager un même cadre sous forme d'onglets, épinglez-la pour qu'elle se range sur le bord, ou masquez-la et faites-la revenir depuis le bord. Voir [Disposer les panneaux](common:arrange-panels#make-the-layout-denser).
- **Les boîtes de dialogue se déplacent.** Faites glisser une boîte de dialogue par sa barre de titre pour la sortir du dessin ; elle revient là où vous l'avez laissée. Double-cliquez sur la barre de titre pour la recentrer. Voir [Déplacer une boîte de dialogue](common:arrange-panels#move-a-dialog).
- **Recettes pour assistants IA.** Dix demandes types pour votre propre assistant (ranger un dessin, tracer un jeu de feuilles, vérifier des plans, poser des questions au modèle, totaliser un métré, essayer une variante de pièce…), chacune avec les outils qu'elle appelle et les autorisations nécessaires, et chacune rejouée par nos tests. Les applications ne contiennent aucune IA. Voir [Recettes pour assistants IA](common:assistants-recipes).
- **Langues.** **Português (Portugal)** est nouveau dans {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Celui-ci, **Português (Brasil)**, **Español (México)** et **Bahasa Indonesia** disposent désormais de tous les mots des applications, sous forme de brouillons non relus par un locuteur natif. Les rubriques d'aide sont en anglais.
- **CadCraft Studio** indique pourquoi une vérification de mise à jour a échoué (pas encore de fichier pour votre système, pas de réseau, une signature incorrecte) au lieu d'un simple « Terminé », et ne ré-affiche plus une carte Nouveautés que vous avez fermée tant qu'une version plus récente n'est pas disponible.

## Pas encore dans cette version

- **La version 0.7 n'est pas signée.** La signature et le paquet Microsoft Store ont été reportés à la version 0.8, la validation du certificat n'étant pas encore disponible. Vérifiez le SHA-256 à côté de chaque fichier sur getcadcraft.com/download. Sous Windows, si SmartScreen bloque le programme d'installation, choisissez {{ui:More info}}, puis {{ui:Run anyway}}. Sur un Mac, la première fois, faites un clic droit sur CadCraft Studio et choisissez {{ui:Open}}. CadCraft Studio n'est pas encore dans un magasin d'applications, et il n'existe pas encore de version pour iPad ou iPhone.
- Les listes d'angles et de pentes de {{ui:Units}} sont enregistrées, mais aucun champ ne les lit encore.
- **Les vérifications de calcul n'ont pas encore été validées par un ingénieur.** Nos tests les comparent à des valeurs de tables imprimées et à des formules calculées à la main, et non encore aux exemples résolus d'un guide de calcul. Tant qu'elles ne sont pas validées, ce sont des aides : vérifiez à la main les barres qui comptent.
- Les vérifications de calcul utilisent les efforts du premier ordre (sans effets du second ordre) et ne vérifient que les profilés en I. Pas encore disponibles : tubes, cornières, profilés en U, profilés soudés, parties élancées (AISC) ou de classe 4 (Eurocode) en flexion, torsion, flambement au cisaillement combiné à la flexion, assemblages, fatigue, incendie, dispositions sismiques et béton. Une partie élancée en compression est exclue des vérifications de compression, et la barre est indiquée « passe, partiellement vérifié ».
- L'analyse de portique est toujours du premier ordre et linéaire, et elle n'a pas encore été essayée par un ingénieur sur un chantier réel.
- Les trous de boulons, les boulons, les soudures et les semelles ne figurent pas dans l'export USD.

Tout le reste se trouve dans [Ce qui n'est pas encore disponible](topic:not-built-yet).
