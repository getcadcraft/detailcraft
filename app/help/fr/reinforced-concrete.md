---
title: Détailler les poutres, poteaux, dalles et voiles en béton armé
summary: Ajoutez des poutres, poteaux, dalles et voiles en béton par trame, donnez-leur des armatures, des cadres et des épingles, vérifiez les recouvrements et les ancrages selon l'ACI 318-19 ou l'EN 1992-1-1, et produisez des plans d'atelier et des tableaux de ferraillage.
keywords: béton armé, armatures, ferraillage, poutre, poteau, dalle, voile, cadres, épingles, crochets, recouvrements, recouvrement, ancrage, longueur d'ancrage, ld, ldh, lbd, enrobage, espacement, armatures de renfort, ouvertures, nappes, repères de barres, tableau de ferraillage, bbs, plan d'atelier, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, import IFC
from: 3835b7ec
---

L'onglet {{ui:Béton}} sous la vue détaille les armatures des poutres, poteaux, dalles et voiles en béton. Vous donnez les dimensions et les barres ; DetailCraft place chaque barre, la numérote, vérifie les recouvrements, l'ancrage, l'enrobage et l'espacement par rapport à l'article dont ils proviennent, et la dessine.

:::warning
DetailCraft détaille les barres que vous lui donnez. Il ne les dimensionne pas. Chaque résultat doit être vérifié par un ingénieur.
:::

## Ouvrir l'onglet Béton

Choisissez l'onglet {{ui:Béton}} sous la vue. Avec une disposition en ruban, {{ui:Béton}} se trouve dans l'onglet {{ui:Modélisation}}, à côté de {{ui:Semelle}}. Avec la ligne de commande du style de dessin, saisissez {{cmd:CONCRETE}}.

## Ajouter un élément par trame

Les éléments en béton se placent sur les lignes de trame et les niveaux du modèle ; configurez-les donc d'abord (panneau de gauche).

1. Dans {{ui:Ajouter par trame}}, choisissez l'{{ui:Élément}} : {{ui:Poutre en béton}}, {{ui:Poteau en béton}}, {{ui:Dalle}} ou {{ui:Mur}}.
2. Choisissez les lignes de trame et les niveaux :
   - une poutre va d'une intersection de trame à une autre, son dessus au niveau ;
   - un poteau se place à une intersection, d'un niveau à un autre ;
   - une dalle remplit le rectangle compris entre deux lignes de trame numérotées et deux lignes lettrées, son dessus au niveau ;
   - un voile suit son axe d'une intersection à une autre, d'un niveau à un autre.
3. Donnez la dimension et choisissez {{ui:Ajouter}}. L'élément est sélectionné et ses champs s'ouvrent dans le panneau {{ui:Propriétés}}.

Chaque élément démarre avec des armatures de valeurs initiales, et non de calcul : remplacez-les par celles de l'ingénieur.

## Modifier les armatures

Sélectionnez l'élément (dans la vue ou par son nom dans l'onglet {{ui:Béton}}). Le panneau {{ui:Propriétés}} affiche :

| Élément | Ce que vous définissez |
|---|---|
| Poutre | Largeur, hauteur, enrobage libre ; barres supérieures et inférieures (diamètre, nombre, droites ou crochet à 90° aux extrémités) ; barres latérales ; cadres (diamètre, crochets à 135° ou 90°, distance du premier à la face d'appui, longueur et espacement de la zone d'extrémité, espacement courant) ; longueurs d'appui ; longueurs de recouvrement |
| Poteau | Largeur, profondeur, rotation, enrobage ; barres longitudinales sur chaque face ; épingles comme pour les cadres ; comportement des barres en tête (recouvrement avec le poteau au-dessus, crochet dans la dalle, ou arrêt) |
| Dalle | Épaisseur, dimensions, dessus, enrobages ; nappe inférieure et nappe supérieure dans chaque sens (diamètre et espacement) ; barres en U sur les bords ; armatures de renfort ; ouvertures |
| Mur | Épaisseur, enrobage, une ou deux couches, barres horizontales et verticales, barres en U aux extrémités, barres verticales recouvertes ou non vers le haut, armatures de renfort, ouvertures |

Chaque modification constitue une seule étape d'annulation. Une modification impossible à réaliser est refusée, et la barre d'état indique la raison, par exemple « L'ouverture ne tient pas dans l'élément avec son enrobage. »

Les cadres et épingles sont fermés, avec leurs deux crochets dans un même coin. Aux extrémités, les barres d'une poutre pénètrent dans un poteau en béton jusqu'à la face éloignée du poteau, moins l'enrobage ; là où il n'y a pas de poteau, donnez la {{ui:Longueur d'appui au début (mm)}} et celle de la fin.

## Recouvrements et ancrages

Les barres plus longues que la {{ui:Longueur des barres commerciales (mm)}} (12000 par défaut) sont coupées en morceaux de longueur égale, recouverts. Le tableau {{ui:Recouvrements et ancrages}} liste chaque recouvrement et chaque ancrage : ce qui est requis, avec l'article et ses conditions, et ce que le détail prévoit.

- Une longueur de recouvrement de 0 signifie « selon besoin » : la longueur donnée par le code, arrondie au multiple supérieur de 25 mm.
- Saisissez votre propre longueur de recouvrement pour l'utiliser à la place. Si elle est plus courte que nécessaire, c'est un problème (voir ci-dessous), et elle est marquée * dans le tableau.
- L'ancrage se mesure de la face d'appui à l'extrémité de la barre dans l'appui. Une poutre sans appui connu le signale au lieu de la vérifier.
- Un poteau posé sur une semelle recouvre les barres d'attente de la semelle, et un poteau posé sur un autre poteau recouvre les barres de celui-ci : leur recouvrement est également vérifié.

**ACI 318-19** (SI) : barres droites en traction 25.4.2.3 (le tableau, avec ψt, ψe, ψg, λ), crochets standard 25.4.3.1 (ψr 1.6 et ψo 1.25 pris sauf valeur connue autrement), barres en compression 25.4.9.2, recouvrements en traction 25.5.2.1 (classe B, ou classe A dans les paramètres), recouvrements en compression 25.5.5.1.

**EN 1992-1-1** : ancrage 8.4.4 avec fbd issu de 8.4.2 (bonne ou mauvaise adhérence), recouvrements 8.7.3 avec α6 pour chaque barre recouverte dans une même section. γc, γs et αct démarrent aux valeurs recommandées ; réglez-les selon votre annexe nationale.

## Les vérifications

Chaque vérification échouée figure dans le panneau Problèmes de l'interface (source {{ui:Vérifications du ferraillage}}) et dans la liste {{ui:Vérifications}} de l'élément :

| Vérification | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Enrobage | Tableau 20.5.1.3.1, selon l'exposition | Enrobage minimal d'adhérence, tableau 4.2 (l'enrobage de durabilité est à vous de le fournir) |
| Espacement libre des barres | 25.2.1 (poutres, dalles, voiles), 25.2.3 (poteaux) | 8.2 (2) |
| Espacement des cadres | 9.7.6.2.2 | 9.2.2 (6) |
| Armatures minimales de poutre | 9.6.1.2 | 9.2.1.1 (1) |
| Barres latérales de poutre de plus de 900 mm de hauteur | 9.7.2.3 | non vérifié |
| Taux d'armatures du poteau, nombre de barres | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Épingles : espacement, diamètre, épingles transversales | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Espacement des dalles, armatures minimales | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Espacement des voiles, armatures minimales, deux couches | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Recouvrements, ancrage | comme ci-dessus | comme ci-dessus |

La taille des granulats n'est pas connue : l'espacement libre est donc vérifié sans elle.

## Ouvertures, armatures de renfort et barres de bord

Choisissez {{ui:Ajouter une ouverture}} sous une dalle ou un voile sélectionné, puis définissez sa position et sa dimension. Les barres qu'elle coupe s'arrêtent à l'enrobage de son bord. Des armatures de renfort sont ajoutées de chaque côté, dans la même couche, reprenant la moitié de l'aire des barres coupées, à une longueur d'ancrage au-delà de l'ouverture. C'est la règle initiale de DetailCraft, et non une clause de norme : remplacez les {{ui:Armatures de renfort}} par celles de l'ingénieur. Les barres d'angle ne sont pas ajoutées.

Les barres en U qui entourent les bords libres d'une dalle et les extrémités d'un voile ont des branches d'une longueur de recouvrement.

## Repères de barres et tableau de ferraillage

Les barres identiques partagent un même repère : les semelles gardent les repères F (5F1), les poutres reçoivent B, les poteaux C, les dalles S et les voiles W (7B1, 8C1, 4S2). L'onglet {{ui:Tableau de ferraillage}} et son CSV listent désormais chaque barre de l'ouvrage, les semelles en premier. {{ui:Sortie}} › {{ui:Plus}} › {{ui:Ferraillage}} le télécharge.

## Plans d'atelier

Choisissez {{ui:Sortie}} › {{ui:Plus}} › {{ui:Plans d'armatures}}, {{ui:Plans d'armatures}} dans l'onglet {{ui:Béton}}, ou {{ui:Plan d'atelier}} à côté d'un élément. Chaque élément reçoit une feuille avec une élévation (un plan pour une dalle) montrant chaque barre et son repère, les zones de cadres ou d'épingles et les recouvrements cotés, ainsi qu'une coupe au milieu ; puis des feuilles de façonnage des armatures listent chaque repère avec un croquis de sa forme, ses dimensions, le nombre, la longueur de coupe et le poids.

Les feuilles sont produites à chaque fois à partir du modèle, et de nouveau après chaque modification tant que la fenêtre est ouverte : le cartouche porte la référence du modèle. Enregistrez {{ui:Cette feuille en PDF}} ou {{ui:Toutes les feuilles en PDF}}.

## Armatures à partir d'un fichier IFC

{{ui:Fichier}} › {{ui:Importer un IFC}} lit désormais IfcReinforcingBar : le disque balayé le long de son axe revient sous forme de branches droites et de pliages, avec son diamètre, son repère et l'élément qui le porte. Les barres sont conservées telles qu'elles ont été lues (elles ne sont pas converties en règles de poutre ou de dalle), affichées dans la vue, listées dans le tableau de ferraillage et réécrites à l'export IFC. Le rapport d'import indique combien de barres ont été lues, de quels diamètres, dans combien d'éléments, et ce qui a été omis et pourquoi.

Une poutre, un poteau, une dalle ou un voile de ce fichier qui porte des armatures, ou dont le matériau est du béton, n'est pas pris pour de l'acier ; le rapport le signale. L'export IFC de DetailCraft conserve la définition de chaque élément en béton : il revient donc tel quel, et ses barres sont recréées à partir de celle-ci.

:::note
La lecture des fichiers propres à un logiciel de calcul de structures (autres que IFC) n'est pas encore disponible : exportez-les en IFC depuis ce logiciel.
:::

## L'export IFC

Les poutres, poteaux, dalles (avec ouvertures) et voiles en béton sortent sous forme d'IfcBeam, IfcColumn, IfcSlab et IfcWall, chacun avec ses barres en IfcReinforcingBar (barres principales, cadres et épingles, barres de bord) qui lui sont rattachées. Chaque barre est un disque balayé le long de son axe, avec de vrais arcs aux pliages, son repère et sa longueur de coupe.
