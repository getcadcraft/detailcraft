---
title: Stock fournisseur et délais d'approvisionnement
summary: Vérifiez si les barres en stock achetées par votre liste de débit figurent dans la liste de stock d'un fournisseur - y en a-t-il assez, et quel est le délai d'attente ?
keywords: fournisseur, stock, délai d'approvisionnement, aciérie, usine, disponibilité, réapprovisionnement, barres, achats, approvisionnement
from: 1373f5a3
---

L'onglet {{ui:Approvisionnement}} recherche chaque profilé acheté par la {{ui:Liste de débit}} dans la liste de stock d'un fournisseur. Le fichier reste dans le modèle ; rien n'est envoyé nulle part.

## Ajouter le fichier du fournisseur

Appuyez sur {{ui:Ajouter un fichier fournisseur}} et choisissez un CSV de votre fournisseur (séparé par des virgules, des points-virgules ou des tabulations). Il faut une colonne pour l'article ou le profilé (Item, Name, Description, Section, SKU), et une pour le stock (In stock, Quantity, On hand) ou pour le délai d'approvisionnement. L'unité (each, metres, kilograms, tonnes), le prix, le fournisseur et une date de réapprovisionnement sont lus lorsqu'il existe une colonne pour eux. Les mots sont aussi reconnus : « Out of stock », « In stock », « 2-3 weeks », « backorder ». Jusqu'à cinq fichiers peuvent être conservés ; ajouter un fichier portant le même nom remplace le précédent.

## Ce que vous voyez

Pour chaque profilé acheté par la liste de débit, le tableau affiche ce dont le modèle a besoin, le stock disponible, le délai d'approvisionnement, le fournisseur et un résultat :

- **Couvert :** stock suffisant.
- **Manque :** le stock est inférieur au besoin. Si le stock est inférieur au besoin et que vous avez défini un délai d'attente maximal, le délai d'approvisionnement indique le temps nécessaire pour le reste.
- **Trop tard :** il n'y a pas de quantité en stock et le délai d'approvisionnement dépasse l'attente que vous acceptez.
- **Pas de quantité en stock :** le fichier ne l'indique pas.
- **Autre unité :** le fournisseur indique le profilé dans une unité que le modèle ne peut pas fournir.

Le besoin du modèle est exprimé en barres (issues de la liste de débit calepinée, avec vos longueurs de stock), en mètres de barre achetés et en kilogrammes (le poids au mètre du profilé), et l'unité propre au fichier est utilisée. Un profilé est retrouvé par son nom (« W16 X 26 » et « w16x26 » sont identiques). Les profilés absents du fichier sont listés.

Les manques et les profilés en retard figurent dans le panneau {{ui:Problèmes}}. Cet écran ne passe aucune commande.

## Limites

Les quantités en stock et les délais sont ceux du fichier, à la date de sa création. Les platines ne sont pas calepinées, donc elles ne sont pas recherchées. Le fichier est seulement lu : toute instruction qu'il contient n'est que du texte.
