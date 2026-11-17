---
title: Ce qui n'est pas encore disponible
summary: Ce que cette version préliminaire de DetailCraft ne peut pas encore faire, et ce qu'il faut faire en attendant.
keywords: limites, limitations, manquant, feuille de route, non pris en charge, à venir, prévu, solution de contournement, à faire
from: ea411885
---

DetailCraft est une version préliminaire. Cette page liste ce qu'il ne fait pas encore, pour que vous puissiez vous organiser. Rien ici n'est une promesse de date.

## Modélisation

| Pas encore | À la place, aujourd'hui |
|---|---|
| Faire glisser une extrémité d'une barre (pour l'étirer) | Modifiez {{ui:Début}} ou {{ui:Fin}} sous {{ui:Extrémités (x, y, z mm)}} dans le panneau {{ui:Propriétés}} |
| Un filtre de sélection (seulement les poutres, seulement un profilé) | Tracez une fenêtre, puis {{key:Shift}}+clic pour retirer des pièces |
| Réseau d'une sélection ; rotation autour d'un axe incliné ; symétrie dans un plan incliné | Copiez-la et collez-la avec un décalage, ou utilisez {{ui:Dupliquer}} ; la rotation et la symétrie fonctionnent en plan ([Sélectionner par fenêtre, déplacer, faire pivoter, symétrie, modifier plusieurs](topic:select-and-change)) |
| Points hors trame lors du clic | Placez sur la trame, puis saisissez les coordonnées de fin |
| Altitudes le long des trames numérotées ; vues enregistrées ; plans de travail | Utilisez {{ui:3D}}, ou {{ui:Ajouter par trame}} |
| Trous dessinés comme de vraies découpes dans la vue 3D | Les trous apparaissent comme des bouchons sombres ; ils sont réels dans chaque export |
| Échancrures arrondies ou inclinées, autres coupes et accessoires | Échancrures carrées sur les profilés en I seulement |
| Trous que vous ajoutez aux cornières et aux tubes ronds | Les trous de cornière viennent seulement des [goussets de contreventement](topic:brace-gussets) |
| Saisie en unités impériales | Saisissez des millimètres (25.4 par pouce) |
| Modifier ou supprimer un profil personnalisé | Ajoutez un profil corrigé sous un nouveau nom |

## Escaliers

| Pas encore | À la place, aujourd'hui |
|---|---|
| Mains courantes, paliers, plinthes, marches en caillebotis, escaliers hélicoïdaux et à retour | Volées droites uniquement ; voir [Escaliers](topic:stairs) |
| Coupes en about des limons contre les planchers | Limons à coupe droite ; coupez-les dans le logiciel de votre atelier |

## Assemblages

DetailCraft crée six assemblages : un gousset de contreventement (voir [Goussets de contreventement](topic:brace-gussets)) ; un éclissage boulonné entre deux pièces d'un même profilé en I (voir [Éclissages](topic:splices)) ; un onglet entre deux profilés en I qui se rejoignent à un angle, coupé seul ou avec des platines d'extrémité boulonnées (voir [Assemblages à onglet](topic:mitres)) ; une platine d'extrémité boulonnée affleurante ou prolongée, d'une poutre en I de niveau vers une aile ou une âme de poteau en I ; une patte de cisaillement d'une poutre (d'équerre, biaise ou inclinée) vers une aile ou une âme de poteau ; et une platine de pied de poteau avec quatre tiges d'ancrage.

| Pas encore | À la place, aujourd'hui |
|---|---|
| Platines d'extrémité biaises ou inclinées | Utilisez les [pattes de cisaillement](topic:shear-tabs), qui acceptent les poutres biaises et inclinées |
| Cornières d'attache ; platines de complément d'éclissage et éclissages entre tailles différentes ; goussets d'angle soudés à la poutre et au poteau, goussets chanfreinés | Détaillez-les dans un autre logiciel, ou ajoutez les platines et les trous à la main comme pièces séparées ; voir [Éclissages](topic:splices), [Goussets de contreventement](topic:brace-gussets) |
| Raidisseurs de pied chanfreinés ou effilés ; trous de scellement ; logement de semelle pour un ergot de cisaillement | Raidisseurs rectangulaires ; voir [Platines de pied](topic:base-plates) |
| Jarrets ; onglets soudés bout à bout ; raidisseurs alignés avec les ailes de l'autre pièce | Un [onglet](topic:mitres) avec platines d'extrémité et raidisseurs d'âme, ou un simple onglet coupé ; ajoutez les autres platines à la main comme pièces séparées |
| Vérifications de calcul des assemblages (résistance) | Vérifiez les assemblages avec les calculs de votre ingénieur ; DetailCraft signale seulement la distance au bord et l'espacement |
| Trous oblongs | Trous ronds uniquement |

## Analyse

| Pas encore | À la place, aujourd'hui |
|---|---|
| Vérifications de calcul au-delà des profilés en I en acier : tubes, cornières, profilés en U, profilés soudés, pièces élancées ou de classe 4, torsion, assemblages ; béton : élancement avec déplacement latéral, torsion, dispositions parasismiques, dalles et voiles | L'onglet {{ui:Analyse}} vérifie les profilés en I en acier selon AISC 360 ou EN 1993-1-1 ([Vérifier les pièces en acier selon un code de calcul](topic:design-checks)) ; le reste est marqué « non vérifié » ; un ingénieur relit l'ensemble |
| Analyse de flambement, vibrations | Le second ordre est seulement P-Delta (élastique) ; pas d'analyse de flambement (les analyses modale, spectrale, temporelle et de poussée progressive sont dans l'onglet Analyse) |
| Vérifications de calcul approuvées par un ingénieur | Elles restent une aide jusqu'à cette approbation : vérifiez deux ou trois pièces à la main ou dans le logiciel de votre ingénieur avant de vous y fier |
| Charges de plancher, de vent et de neige calculées pour vous à partir des surfaces | Appliquez les charges aux barres à la main, en kN/m ou kN |
| Décalages de barres, assemblages excentrés, contreventements ne travaillant qu'en traction, platines et semelles dans l'ossature | Les barres sont analysées sur leurs lignes de travail ; les contreventements reprennent traction et compression |

## Armatures

| Pas encore | À la place, aujourd'hui |
|---|---|
| Poteaux ronds, spirales, poutres inclinées ou courbes, dalles autres que rectangulaires, voiles non droits | Poutres, poteaux, dalles et voiles rectangulaires ([Détailler le béton armé](topic:reinforced-concrete)) |
| Barres coudées en recouvrement, recouvrements décalés, recouvrements placés à votre choix | Recouvrements à pas égaux, toutes les barres recouvertes dans une même section (ACI classe B, EN α6 = 1.5) |
| Barres d'angle aux ouvertures, armatures de poinçonnement, dispositions sismiques (ACI 318-19 chapitre 18) | Chevêtres de chaque côté d'une ouverture ; vérifiez le reste vous-même |
| Lecture des fichiers propres à un logiciel de calcul de structure | Exportez un IFC depuis ce logiciel : ses IfcReinforcingBar sont importés comme barres ([Barres depuis un fichier IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Formes de crochets au-delà de droite, un pli et un U ; types ACI 315 pour les barres droites et à un crochet | Les trois formes s'impriment en BS 8666 00, 11, 21 ou ACI type 2 ; voir [Référence des armatures](topic:rebar-reference) |
| Barres métriques autres que BS 4449 H8–H40 (par ex. CSA 10M–35M) | Noms de barres soft-métriques ASTM #10–#36, ou barres BS |

## Plans et exports

| Pas encore | À la place, aujourd'hui |
|---|---|
| Feuilles en portrait, A0 et feuilles à vos dimensions ; vues d'ensemble sur trames biaises | Feuilles A4 à A1 en paysage et ANSI B à D ([Plans d'ensemble et d'assemblage](topic:drawings)) ; mettez le PDF à l'échelle pour imprimer sur un autre format |
| Symboles de soudure sur les plans d'atelier d'une seule pièce ; symboles autres que les cordons | Les plans d'assemblage portent les symboles de cordon ; le plan d'atelier donne la soudure en texte |
| Modifier un plan dans l'application | Modifiez le modèle et refaites le plan ; annotez le PDF dans une application PDF comme MarkupCraft |
| Plans en DWG avec objets de cote, ou modèle à pleine échelle dans l'espace objet avec les feuilles en présentations | Chaque feuille est un DWG ou DXF à pleine échelle du papier, cotes en lignes et chiffres ([Plans d'ensemble et d'assemblage](topic:drawings#download)) |
| Trous NC dans les tubes ronds, échancrures sur cornières et tubes ronds dans les fichiers NC | Non écrits ; voir [Champs du fichier NC](topic:nc1-fields) |
| Chanfreins, marquages et contours intérieurs dans les fichiers NC | Aucun pour l'instant |
| Trous de boulons, boulons, soudures et semelles dans l'export USD | Ils sont dans les sorties IFC, NC et nomenclature ; voir [Exporter le modèle acier en USD](topic:usd) |
| Importer les assemblages, semelles, trous oblongs ou rectangulaires et trous de tubes ronds depuis un fichier IFC | {{ui:Importer un IFC}} importe poutres, poteaux, barres, platines, trames, niveaux, trous ronds, échancrures, boulons et armatures, et son rapport liste ce qu'il a laissé de côté |
| Mises en page de rapports personnalisées | Les trois fichiers CSV |

## Panneaux

| Pas encore | À la place, aujourd'hui |
|---|---|
| Déplacer les rapports en bas ({{ui:Problèmes}}, {{ui:Nomenclature}}, {{ui:Tableau de ferraillage}}) | Seuls les panneaux {{ui:Modèle}} et {{ui:Propriétés}} se déplacent. Voir [Disposer les panneaux](common:arrange-panels) |

## Travail collaboratif et enregistrement

| Pas encore | À la place, aujourd'hui |
|---|---|
| Enregistrement dans le cloud et synchronisation entre ordinateurs | Enregistrez les fichiers `.detailcraft.json` et partagez-les comme n'importe quel fichier. L'enregistrement dans le cloud n'est pas encore disponible |
| Curseurs des autres et étiquettes « en cours de modification » dans une session Live TeamWork ; trames, niveaux et phases fusionnés élément par élément | Les modifications fusionnent encore (trames, niveaux et phases sont pris en bloc, la modification la plus récente l'emporte) ; voir [Détailler une structure à plusieurs, en direct](topic:work-live) |
| Liens d'invitation vers une session Live TeamWork par Internet | Rejoignez avec un code court sur le même réseau |

## Plateformes

- DetailCraft est conçu pour un écran de bureau, d'ordinateur portable ou de tablette. Il fonctionne aussi sur téléphone : le modèle garde l'écran et les panneaux, et les rapports s'ouvrent en feuilles depuis une barre en bas, mais la place pour les panneaux est réduite.
- L'usage hors ligne exige d'abord d'enregistrer DetailCraft pour l'usage hors ligne, avec {{ui:Enregistrer pour le hors ligne}} dans la barre de l'application ; une fois qu'il affiche {{ui:Prêt hors ligne}}, tout fonctionne sans connexion dans cette version. Voir [Travailler hors ligne](common:offline).

Si l'un de ces manques bloque votre travail, dites-le-nous via la [page d'assistance](https://getcadcraft.com/support) ; cela nous aide à décider de ce qu'il faut développer ensuite.
