---
title: Ferrailler un poteau en béton rectangulaire
summary: Un exemple détaillé de poteau en béton rectangulaire dans DetailCraft : le placer, lui donner des armatures longitudinales et des cadres, lire les vérifications, le recouvrement au-dessus et les repères des barres, et dessiner sa feuille d'atelier.
keywords: poteau en béton, poteau rectangulaire, ferraillage de poteau, armatures longitudinales, barres verticales, cadres, étriers, épingles, recouvrement, éclissage, barres d'attente, taux d'armature, 1 %, 8 %, espacement des cadres, ACI 318-19 25.7.2, EN 1992-1-1 9.5, plan d'atelier, repères de barres, 8C1, 3C2
from: aee2a3ca
---

Cette rubrique prend un poteau carré depuis rien jusqu'à un détail vérifié, dessiné et nomenclaturé. Les règles générales pour les poutres, dalles et voiles figurent dans [Détailler le béton armé](topic:reinforced-concrete) ; ceci en est la partie poteau, avec des chiffres que vous pouvez reproduire.

:::warning
DetailCraft détaille les armatures que vous lui donnez. Il ne les dimensionne pas. Les armatures ci-dessous sont des valeurs de départ pour l'exemple, pas une recommandation : l'ingénieur responsable choisit le diamètre, le nombre et l'espacement.
:::

## Ce qu'est un poteau ici

Un poteau rectangulaire a une largeur (selon son x local) et une profondeur transversale (selon son y local), un enrobage libre jusqu'aux cadres, des armatures longitudinales sur chaque face et des cadres fermés. Le faire tourner fait tourner l'ensemble ; les faces restent « face de largeur » et « face de profondeur ».

- Les armatures longitudinales sont données comme nombre sur une face de largeur et nombre sur une face de profondeur. Les armatures d'angle comptent pour les deux, donc 3 et 3 font 8 barres ; 4 et 4 font 12.
- Les cadres sont des rectangles fermés avec deux crochets à un angle, à 135° ou 90°. Le premier cadre est à une distance fixée au-dessus du sol (et sous le suivant) ; les zones d'extrémité ont un espacement plus serré, le milieu un espacement plus large.
- Ce que font les barres en tête : se prolonger et se recouvrir avec les barres au-dessus, se replier avec des crochets à 90° dans le plancher, ou s'arrêter sous le haut.

## Le poteau détaillé

Un poteau de 400 × 400 mm, 3600 mm entre le plancher au-dessus et celui en dessous, armatures longitudinales #8, cadres #3, enrobage libre de 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, intérieur.

1. Ouvrez l'onglet {{ui:Béton}} et réglez les lignes de trame et les niveaux sur lesquels se pose le poteau (panneau de gauche).
2. Dans {{ui:Ajouter par trame}}, choisissez {{ui:Poteau en béton}}, cliquez sur l'intersection de trame et les deux niveaux, réglez {{ui:Largeur (mm)}} et {{ui:Profondeur transversale (mm)}} à 400, puis choisissez {{ui:Ajouter}}.
3. Dans le panneau {{ui:Propriétés}}, réglez :
   - {{ui:Enrobage libre (mm)}} 40 ;
   - {{ui:Armatures longitudinales}} #8, {{ui:Armatures sur une face de largeur}} 3, {{ui:Armatures sur une face de profondeur}} 3 ;
   - {{ui:Cadres}} #3, {{ui:Crochets}} 135°, {{ui:Espacement courant (mm)}} 300, {{ui:Longueur de la zone d'extrémité (mm)}} 600, {{ui:Espacement dans les zones d'extrémité (mm)}} 150, {{ui:Premier étrier à partir de la face (mm)}} 50 ;
   - {{ui:Armatures en tête}} {{ui:Prolongées et recouvertes par les armatures au-dessus}}.

Chaque modification constitue une étape d'annulation.

### Résultat

| Élément | Résultat |
|---|---|
| Armatures longitudinales | 8 barres #8 (un anneau de 3 × 3), chacune de 4375 mm : le poteau de 3600 mm plus un recouvrement de 775 mm au-dessus |
| Recouvrement | 757 mm requis pour un recouvrement en compression (ACI 318-19 25.5.5.1, fy 420), 775 mm prévus : le besoin arrondi au multiple de 25 mm supérieur |
| Cadres | 17 cadres #3, chacun d'une longueur de coupe d'environ 1359 mm, espacés de 150 mm dans les deux zones d'extrémité de 600 mm et de 300 mm entre elles |
| Taux d'armature | 2.5 % de la section brute (limites de 1 % à 8 %, ACI 318-19 10.6.1.1) |
| Espacement libre des barres | 112 mm (au moins 40 mm requis, ACI 318-19 25.2.3) |
| Espacement des cadres | 300 mm (400 mm admis : le plus petit de 16 diamètres de barre, 48 diamètres de cadre et du plus petit côté, ACI 318-19 25.7.2.1) |
| Taille des cadres | #3 (admis jusqu'à 9.5 mm, ACI 318-19 25.7.2.2) |

Tout cela figure dans la liste {{ui:Vérifications}} de l'élément ; le recouvrement figure aussi dans {{ui:Recouvrements et ancrages}}.

## Épingles

Avec un seul cadre périmétrique, seules les barres d'angle sont maintenues. ACI 318-19 25.7.2.3 admet qu'une barre médiane d'une face reste sans appui si elle est à moins de 150 mm libres d'une barre d'angle. Avec 3 barres par face, comme ci-dessus, c'est respecté. Avec 4 barres ou plus par face, ça ne l'est pas, et DetailCraft l'indique par un avertissement ({{ui:Vérifications}} et Problèmes) : des « épingles » sont nécessaires. **Les épingles ne sont pas encore dessinées** : ajoutez-les à la main dans le dessin, ou choisissez moins de barres sur la face.

Pour EN 1992-1-1, DetailCraft vérifie le diamètre des barres (au moins 8 mm), le nombre de barres (au moins 4), la section d'acier (0.2 % à 4 % de la section), l'espacement libre et l'espacement des cadres (9.5.2 et 9.5.3).

## Le recouvrement, la semelle et le poteau en dessous

- Lorsqu'**une semelle du modèle se trouve sous le poteau**, le poteau se recouvre avec les barres d'attente de la semelle, et leur recouvrement est aussi vérifié.
- Lorsqu'**un autre poteau du modèle se trouve dessous**, il se recouvre avec les barres de ce poteau.
- Donnez votre propre {{ui:Longueur de recouvrement (mm, 0 = selon besoin)}} pour le remplacer ; un recouvrement plus court que le besoin est un problème et est marqué * dans le tableau.
- Les recouvrements en compression sont utilisés par défaut ({{ui:Recouvrement en compression}} dans les paramètres) ; choisissez {{ui:Recouvrement en traction}} lorsque le poteau peut être tendu.

## Repères, nomenclature et feuille d'atelier

Des barres identiques partagent un même repère : les armatures longitudinales du poteau ci-dessus sont 8C1, ses cadres 17C2 (d'abord le nombre, puis la lettre de nature C pour poteau, et le numéro d'ordre). Ils apparaissent dans l'onglet {{ui:Tableau de ferraillage}}, avec la longueur de coupe et le poids, et dans le CSV depuis {{ui:Sortie}} › {{ui:Plus}} › {{ui:Ferraillage}}.

Choisissez {{ui:Plan d'atelier}} à côté du poteau pour obtenir une feuille avec le poteau en élévation (chaque barre, son repère, les zones de cadres et le recouvrement cotés) et une coupe au milieu, suivie de la feuille de façonnage des armatures. Enregistrez {{ui:Cette feuille en PDF}}.

## Ce que cela ne fait pas

- Poteaux ronds, spirales et poteaux non rectangulaires : non encore disponibles.
- Épingles et cadres d'angle à l'intérieur de la section, et dispositions sismiques (ACI 318-19 chapitre 18) : non encore disponibles.
- Éclissages aux positions que vous choisissez, ou décalés : toutes les barres se recouvrent à une même section.
- Savoir si les barres suffisent pour la charge : c'est le dimensionnement de l'ingénieur.
