---
title: Liste de débit
summary: Caler les poutres, poteaux, contreventements et limons dans les longueurs commerciales, en tenant compte du trait de scie, et voir combien de barres acheter et les chutes.
keywords: liste de débit, calepinage, longueur commerciale, barre, trait de scie, scie, chute, retour, rebut, regroupement, achat, multiple
from: 81d06ce5
---

L'onglet {{ui:Liste de débit}}, sous la vue, calcule comment débiter les pièces linéaires du modèle dans des barres commerciales : combien de barres de chaque longueur acheter pour chaque profilé et matériau, ce qui va sur chaque barre, et les chutes.

## Définir le stock

En haut de l'onglet :

- **Longueurs commerciales (mm)** : les longueurs que vous pouvez acheter, séparées par des espaces, par exemple `6000 12000`, ou des barres de 20 ft et 40 ft sous la forme `6096 12192`. Huit au maximum.
- **Trait de scie (mm)** : la largeur que prend chaque coupe (3 par défaut).
- **Chute en bout (mm)** : longueur retirée à l'extrémité de chaque barre avant la première pièce (0 par défaut).
- **Garder les chutes à partir de (mm)** : une chute d'au moins cette longueur retourne au stock ; une chute plus courte part au rebut (500 par défaut).

Ces valeurs sont conservées dans ce navigateur, comme les autres [paramètres](topic:settings).

## Comment le calepinage se fait

- Chaque poutre, poteau, contreventement et limon d'escalier, par repère de pièce et quantité ; les plaques sont découpées dans la tôle et ne sont pas calepinées ici.
- Chaque profilé et matériau séparément.
- Les pièces les plus longues d'abord, chacune dans la première barre où elle tient ; une nouvelle barre commence à la plus longue longueur commerciale. Ensuite, chaque barre est achetée à la plus courte longueur commerciale qui suffit encore à ses coupes.
- Chaque coupe prend le trait de scie (aucun après une coupe qui finit exactement au bout de la barre) ; chaque barre perd la chute en bout.
- Une pièce plus longue que toutes les longueurs commerciales est listée sous **Plus long que tout stock**, sans être calée : épissez-la (voir [Éclissages](topic:splices)) ou ajoutez une longueur commerciale plus grande.

## Lire le résultat

- **Synthèse** : par profilé et matériau, les pièces, les barres à acheter (par exemple « 2 × 12000, 1 × 6000 »), les mètres achetés et utilisés, et les chutes.
- **Barres et leurs coupes** : chaque barre, sa longueur commerciale, ses coupes (repère de pièce et longueur), et la chute, conservée ou mise au rebut.

{{ui:Télécharger le CSV}} enregistre les deux tableaux sous `<name> cut list.csv`.

DetailCraft ne cale pas les plaques dans des feuilles et ne mélange pas les profilés ou matériaux sur une même barre.
