---
title: Vérifier les barres en acier selon un code de calcul
summary: Créer les combinaisons de charges selon ASCE 7 ou EN 1990, vérifier chaque profilé en I acier selon AISC 360 ou EN 1993-1-1, et voir la part de sa résistance que chaque barre utilise. Une aide en attendant la vérification par un ingénieur.
keywords: calcul, vérification de calcul, calcul de l'acier, taux d'utilisation, utilisation, résistance, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, combinaisons de charges, LRFD, annexe nationale, flambement, déversement, cisaillement, flexion, interaction, structure, étudiants, ingénieur
from: 66b6d545
---

Après l'analyse, le bloc {{ui:Vérifications de calcul}} de l'onglet {{ui:Analyse}} transforme ses efforts en verdict pour chaque barre en acier : la part de sa résistance que consomme la combinaison la plus défavorable.

:::warning
Ce n'est qu'**une aide en attendant la vérification par un ingénieur**. Elle utilise uniquement des efforts du premier ordre (sans effets du second ordre), ne vérifie ni la torsion, ni les parois élancées (classe 4), ni les profilés soudés, ni les assemblages, et elle omet ce qu'elle ne peut pas vérifier en le signalant. Elle ne remplace pas la vérification d'un ingénieur, et ses résultats ne sont pas un visa.
:::

## Choisir un code

{{ui:Code de calcul}} est enregistré avec le modèle ; choisissez l'une de deux familles :

- **ASCE 7 + AISC 360** (États-Unis, LRFD) : les combinaisons de charges de l'ASCE 7-16 §2.3.1 et les vérifications des barres de l'ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode) : les combinaisons de l'EN 1990 (éq. 6.10, ou 6.10a et 6.10b) et les vérifications des barres de l'EN 1993-1-1.

Choisissez ensuite la {{ui:Nuance d'acier}} (A992, A36 et d'autres ; ou S235 à S450, avec la limite d'élasticité inférieure au-delà de 40 mm).

## Créer les combinaisons

Donnez à chaque cas de charge sa **nature** (permanente, d'exploitation, charge d'exploitation de toiture, neige, vent, sismique) dans la liste des cas, puis appuyez sur {{ui:Créer les combinaisons}}. DetailCraft écrit les combinaisons du code comme combinaisons de vos cas : toutes les combinaisons à l'état limite ultime que le code prévoit pour les natures que vous avez, et des combinaisons de service pour la flèche. Celles que vous avez saisies vous-même restent ; elles ne sont pas vérifiées par rapport au code. Un cas de nature {{ui:Autre}} n'est pas combiné.

Pour l'Eurocode, les coefficients sont les **valeurs recommandées** de l'EN 1990 annexe A1 (γG 1.35, γQ 1.5, les ψ des charges d'exploitation, de neige et de vent) et de l'EN 1993-1-1 (γM0 = γM1 = 1.0). L'annexe nationale de votre pays en modifie certains : ouvrez {{ui:Valeurs de l'annexe nationale}}, saisissez les vôtres et recréez les combinaisons. Elles sont enregistrées dans le modèle.

## Vérifier les barres

Appuyez sur {{ui:Vérifier les barres}}. Pour chaque profilé en I acier, le tableau affiche son **taux d'utilisation** (sollicitation sur résistance : 100 % est la limite), s'il est conforme, quelle vérification gouverne et quelle combinaison. Les barres sont colorées sur le modèle : bleu peu utilisé, vert environ la moitié, ocre proche de la limite, rouge au-delà, gris non vérifié. Cliquez sur le nom d'une barre pour la sélectionner.

Les vérifications, avec l'article auquel chacune se réfère (elles figurent dans le rapport) :

- traction, compression avec flambement par flexion et par torsion, flexion autour des deux axes avec déversement, cisaillement, et flexion combinée à l'effort normal ;
- flèche des combinaisons de service par rapport à la {{ui:Limite de flèche}} que vous avez fixée (L/360 par défaut ; une valeur de projet, non une valeur du code).

**Longueurs.** La longueur maintenue est une part de chaque tronçon analysé (1 = non maintenue) ; les maintiens sont supposés régulièrement espacés depuis le début. Les coefficients K multiplient la longueur pour le flambement. Un nœud où vient se raccorder une autre barre découpe une barre, et chaque tronçon est vérifié sur sa propre longueur, maintenu à cet endroit.

## Ce qui n'est pas vérifié

Une barre affiche **non vérifiée**, avec la raison, au lieu d'un nombre lorsque sa section n'est pas un profilé en I connu des vérifications (tubes, cornières, UPN), lorsqu'elle est de forme soudée personnalisée, ou lorsqu'une partie est élancée (AISC) ou de classe 4 (Eurocode) en flexion. Une partie élancée en compression retire les vérifications de compression, et la barre apparaît comme *conforme, partiellement vérifiée*. Ne sont pas non plus réalisés : les effets du second ordre, la torsion, le cisaillement combiné au flambement sous flexion, les assemblages, la fatigue, le feu et les dispositions sismiques. Les éléments en béton et les charges sismiques ont [leurs propres vérifications](topic:concrete-and-seismic). Voir [Pas encore disponible](topic:not-built-yet).

## Le rapport

{{ui:Rapport (PDF)}} et {{ui:Rapport (CSV)}} reçoivent les tableaux de vérification une fois les barres vérifiées : les éditions des codes, les paramètres et valeurs d'annexe nationale, le taux d'utilisation par barre, chaque article utilisé, et pour chaque barre la sollicitation, la résistance et le taux d'utilisation de chaque vérification dans sa combinaison déterminante.
