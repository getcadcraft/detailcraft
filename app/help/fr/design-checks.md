---
title: Vérifier les barres en acier selon un code de calcul
summary: Créez les combinaisons de charges selon ASCE 7 ou EN 1990, vérifiez chaque profilé en I en acier selon AISC 360 ou EN 1993-1-1, et voyez quelle part de sa capacité chaque barre utilise. Une aide en attendant la revue d'un ingénieur.
keywords: calcul, vérification de calcul, calcul de l'acier, taux d'utilisation, capacité, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, combinaisons de charges, LRFD, annexe nationale, flambement, déversement, cisaillement, flexion, interaction, structure, étudiants, ingénieur
from: 15685c4e
---

Une fois l'analyse lancée, le bloc {{ui:Vérifications de calcul}} de l'onglet {{ui:Analyse}} transforme ses efforts en verdict pour chaque barre en acier : la part de sa capacité que consomme la combinaison la plus défavorable.

:::warning
C'est une **aide en attendant la revue d'un ingénieur**. Elle n'utilise que les efforts du premier ordre (sans effets du second ordre), ne vérifie ni la torsion, ni les parties élancées (classe 4), ni les sections soudées, ni les assemblages, et laisse de côté ce qu'elle ne peut pas vérifier, en le signalant. Elle ne remplace pas la vérification d'un ingénieur, et ses résultats ne constituent pas un visa.
:::

## Choisir un code

{{ui:Code de calcul}} est enregistré avec le modèle ; choisissez l'une des deux familles :

- **ASCE 7 + AISC 360** (États-Unis, LRFD) : les combinaisons de charges de ASCE 7-16 §2.3.1 et les vérifications des barres de ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocodes) : les combinaisons de EN 1990 (éq. 6.10, ou 6.10a et 6.10b) et les vérifications des barres de EN 1993-1-1.

Choisissez ensuite la {{ui:Nuance d'acier}} (A992, A36 et autres ; ou S235 à S450, avec la limite d'élasticité inférieure au-delà de 40 mm).

## Créer les combinaisons

Attribuez à chaque cas de charge sa **nature** (permanente, d'exploitation, toiture, neige, vent, sismique) dans la liste des cas, puis appuyez sur {{ui:Créer les combinaisons}}. DetailCraft écrit les combinaisons du code comme combinaisons de vos cas : toutes les combinaisons de résistance que le code prévoit pour les natures que vous avez, et les combinaisons de service pour la flèche. Celles que vous avez saisies vous-même restent ; elles ne sont pas vérifiées par rapport au code. Un cas de nature {{ui:Autre}} n'est pas combiné.

Pour l'Eurocode, les coefficients sont les **valeurs recommandées** de EN 1990 annexe A1 (γG 1.35, γQ 1.5, les valeurs ψ des charges d'exploitation, de neige et de vent) et de EN 1993-1-1 (γM0 = γM1 = 1.0). L'annexe nationale de votre pays en modifie certains : ouvrez {{ui:Valeurs de l'annexe nationale}}, saisissez les vôtres, puis recréez les combinaisons. Elles sont enregistrées avec le modèle.

## Vérifier les barres

Appuyez sur {{ui:Vérifier les barres}}. Pour chaque profilé en I en acier, le tableau affiche son **taux d'utilisation** (sollicitation sur capacité : 100 % est la limite), s'il passe, quelle vérification gouverne et quelle combinaison. Les barres sont colorées sur le modèle : bleu si peu sollicitées, vert environ à mi-chemin, ocre proche de la limite, rouge au-delà, gris si non vérifiées. Cliquez sur le nom d'une barre pour la sélectionner.

Les vérifications, avec l'article de la norme que chacune suit (elles figurent dans le rapport) :

- traction, compression avec flambement par flexion et par torsion, flexion autour des deux axes avec déversement, cisaillement, et flexion avec effort normal ;
- flèche des combinaisons de service par rapport à la {{ui:Limite de flèche}} que vous avez fixée (L/360 pour commencer ; une valeur de projet, et non une valeur de code).

**Longueurs.** La longueur maintenue est une part de chaque pièce analysée (1 = non maintenue) ; les maintiens sont supposés régulièrement espacés à partir de l'origine. Les coefficients K multiplient la longueur pour le flambement. Un nœud où débouche une autre barre découpe une barre, et chaque tronçon est vérifié sur sa propre longueur, comme s'il était maintenu à cet endroit.

## Ce qui n'est pas vérifié

Une barre affiche **non vérifiée**, avec la raison, à la place d'un nombre lorsque sa section n'est pas une forme connue des vérifications (cornières, profilés en U ; les tubes rectangulaires et circulaires sont vérifiés lorsque leurs parois sont compactes), lorsqu'il s'agit d'une section personnalisée (soudée), ou lorsqu'une partie est élancée (AISC) ou de classe 4 (Eurocode) en flexion. Une partie élancée en compression retire les vérifications de compression, et la barre apparaît comme *passe, partiellement vérifiée*. Les soudures aux nœuds ont [leur propre vérification](topic:weld-checks). Également non disponibles : les effets du second ordre, la torsion, le voilement par cisaillement combiné à la flexion, les assemblages boulonnés, la fatigue, le feu et les dispositions sismiques constructives. Les barres en béton et les charges sismiques ont [leurs propres vérifications](topic:concrete-and-seismic). Voir [Pas encore disponible](topic:not-built-yet).

## Le rapport

{{ui:Rapport (PDF)}} et {{ui:Rapport (CSV)}} s'enrichissent des tableaux de calcul une fois la vérification faite : les éditions des codes, les paramètres et valeurs d'annexe nationale, le taux d'utilisation par barre, chaque article utilisé, et, pour chaque barre, la sollicitation, la capacité et le taux d'utilisation de chaque vérification dans sa combinaison gouvernante.
