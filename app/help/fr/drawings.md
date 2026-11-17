---
title: Plans d'ensemble et plans d'assemblage
summary: Produire les plans, élévations et un plan d'assemblage par repère d'assemblage à partir du modèle, sur des feuilles de A4 à A1 ou ANSI B à D, les émettre avec des lettres de révision, et les télécharger en PDF, DWG ou DXF.
keywords: traits cachés, suppression des traits cachés, tirets, nuage de révision, nuages, triangle de révision, plan des tiges d'ancrage, tiges d'ancrage, nomenclature des tiges, nomenclature des platines de pied, implantation, émission, révision, rév, tableau des révisions, réémission, journal d'émission, bordereau de transmission, dwg, dxf, fichier CAO, exporter les plans, plans, ensemble, élévation, plan d'assemblage, format de feuille, format papier, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloïd, 11 x 17, 22 x 34, pdf, imprimer, échelle, cartouche, réf. modèle
from: 709f8604
---

Choisissez {{ui:Dessins}} dans le groupe {{ui:Sortie}}. DetailCraft produit l'ensemble à partir du modèle tel qu'il est maintenant. Rien n'est stocké : modifiez le modèle, rouvrez {{ui:Dessins}}, et l'ensemble est refait.

## Contenu de l'ensemble

- **Plans**, un par niveau qui porte quelque chose, vus de dessus.
- **Élévations**, une par ligne de trame avec des barres à moins de 1 m.
- **Le plan des tiges d'ancrage**, lorsque le modèle comporte des platines de pied : chaque platine vue de dessus avec son poteau et ses tiges d'ancrage, les trames et leurs cotes, un détail type de chaque motif de tiges (BP1, BP2 …) avec l'entraxe des tiges et les distances aux bords, et deux nomenclatures : les tiges d'ancrage par repère (R1, R2 … : quantité, diamètre, longueur, saillie au-dessus de la platine, scellement, nuance) et les platines de pied par trame (poteau, motif, platine, tiges, dessus de platine). Un poteau hors trame est repéré par ses coordonnées.
- **Plans d'assemblage**, un par repère d'assemblage : vues de face, de dessus et de côté, cotes enchaînées vers les trous et les bords de platine, liste des pièces, boulons et tiges libres, et notes de soudure et de trous. Chaque platine soudée porte un symbole de cordon d'angle en vue de face (AWS A2.4) : la flèche pointe vers l'assemblage, le triangle sous la ligne de repère désigne le côté de la flèche, le chiffre à sa gauche est la taille du cordon en mm, et un cercle à l'endroit où la flèche rejoint la ligne signifie tout autour.

**Traits cachés.** Les plans et élévations omettent les traits d'une pièce lorsqu'une pièce entièrement située devant elle la masque (une poutre vue de bout derrière un poteau). Les plans d'assemblage dessinent en tirets une platine lorsque la pièce principale la masque : derrière l'âme en vue de face (vue depuis le côté −u de la pièce), sous la semelle supérieure en vue de dessus. Les pièces situées à la même profondeur, ou dont les profondeurs se chevauchent, sont toutes deux dessinées en entier.

Chaque feuille porte un {{ui:Cartouche}} avec le numéro de plan, l'échelle, le nom du modèle, la date, le numéro de feuille avec le format, et la réf. modèle : un code calculé à partir du modèle enregistré, afin qu'une impression puisse être rattachée au modèle dont elle provient.

## Choisir le format de feuille

Choisissez le format dans la liste en haut de la fenêtre {{ui:Dessins}} : {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) ou {{ui:ANSI D}} (22 × 34 in). Chaque feuille est en paysage. L'ensemble est refait aussitôt sur le nouveau format, et le même format est utilisé pour les plans d'atelier. Il figure aussi dans les [paramètres DetailCraft](topic:settings#drawings), et ce navigateur le mémorise.

- Une feuille plus grande se dessine à une échelle plus grande. Les échelles sont toujours normalisées (1:10, 1:20, 1:25, 1:50, 1:100, etc.).
- Le texte garde la même taille sur chaque feuille, pour rester lisible à l'impression.
- Sur une petite feuille, un assemblage long et fin peut avoir une échelle plus grande en profondeur qu'en longueur. Le titre de la vue indique alors les deux échelles, et ce sont les cotes qui font foi.

## Émettre les plans et les révisions

La ligne au-dessus de l'aperçu indique où en est la feuille affichée : **Pas encore émise**, **Rév. B, émise … ; inchangée depuis**, ou, en rouge, **Modifiée depuis la rév. B : doit être réémise**. La liste des feuilles marque les feuilles émises avec leur révision et celles qui doivent être réémises.

- Saisissez l'objet de l'émission (il commence par « Émis pour fabrication ») et choisissez {{ui:Émettre cette feuille}}, ou {{ui:Émettre les feuilles modifiées}} pour chaque feuille nouvelle ou modifiée depuis sa dernière émission.
- La première émission d'une feuille est la révision A, puis B, C, etc. (I et O sont sautées).
- Le cartouche affiche le numéro de plan avec sa révision (« A-B1  rév B »), et un tableau des révisions à côté liste les dernières émissions : révision, date et description. Sur une petite feuille, il en affiche autant que possible.
- Une feuille « change » lorsque ce qui y est dessiné change : une barre déplacée, un nouveau trou, un repère renuméroté. La date, le nombre de feuilles et le tableau des révisions lui-même ne comptent pas. Changer le format de feuille modifie toutes les feuilles.
- Le journal des émissions est enregistré dans le fichier du modèle, et une émission correspond à une seule étape d'annulation. Le [fichier KISS](topic:kiss-export) porte la dernière révision de chaque plan.

### Nuages de révision

À partir de la deuxième émission d'une feuille, chaque pièce ou semelle modifiée est dessinée à l'intérieur d'un nuage de révision avec un triangle de révision portant la lettre.

- Tant qu'une feuille a changé depuis sa dernière émission, les nuages montrent ce qui a changé depuis, avec la prochaine révision dans le triangle (rév. B émise et modifiée : les triangles indiquent C).
- Une fois émise, les nuages restent sur la feuille de cette révision, comme sur un jeu imprimé, jusqu'à la prochaine modification de la feuille.
- Chaque feuille ne fait des nuages que pour les changements qu'elle montre. Les plans et élévations ne dessinent ni trous ni découpes, donc ils encadrent une barre déplacée, tournée, redimensionnée ou dont le repère a changé. Les plans d'assemblage et le plan des tiges d'ancrage encadrent aussi les trous et découpes nouveaux ou déplacés.
- Un repère renuméroté compte : lorsqu'une modification fait d'une poutre un nouvel assemblage, les poutres dont le repère a été incrémenté (B1 vers B2) sont encadrées sur les plans et élévations.
- Une pièce supprimée ne laisse rien à encadrer.
- Les feuilles émises avant l'arrivée des nuages de révision (DetailCraft 0.4) commencent à en avoir à partir de leur prochaine émission.
- Les nuages figurent dans les téléchargements PDF, DXF et DWG, et ne comptent jamais eux-mêmes comme une modification.

## Télécharger

Choisissez le format dans la liste à côté des boutons, puis {{ui:Cette feuille}} pour la feuille affichée ou {{ui:Toutes les feuilles}} pour l'ensemble.

- **PDF** : pour imprimer ou envoyer. {{ui:Toutes les feuilles}} produit un seul PDF, une page par feuille, chaque page au format choisi.
- **DWG**, au format 2018, 2013, 2010, 2007, 2004 ou 2000 : pour ouvrir les feuilles dans un logiciel de CAO. Choisissez un format plus ancien pour un logiciel plus ancien.
- **DXF (R12)** : la version que presque tous les logiciels de CAO ouvrent.

Une feuille DWG ou DXF est dessinée en grandeur réelle : une unité de dessin correspond à un millimètre sur le papier, si bien qu'elle s'imprime au 1:1 et que chaque vue garde l'échelle indiquée par son titre. Chaque plume de traçage est un calque distinct : DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID, etc., avec son épaisseur de trait (DWG) et ses tirets. Les textes sont du texte au style DetailCraft (Arial). Les cotes sont les traits et chiffres que vous voyez, non des objets de cotation. {{ui:Toutes les feuilles}} regroupe les fichiers DWG ou DXF dans un seul zip, un fichier par feuille.

:::note
DXF R12 n'a ni épaisseurs de trait ni remplissages : les calques gardent leurs noms, donc réglez les plumes par calque lors du tracé, et les formes remplies sont omises (la barre d'état indique combien).
:::

Imprimez à 100 % (sans « ajuster à la page ») sur un papier de même format si vous voulez que les échelles indiquées soient respectées.
