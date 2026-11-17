---
title: Vérifier l'export IFC avec l'IDS d'un client
summary: Chargez le fichier .ids qui vous a été remis et voyez dans Problèmes chaque pièce exportée qui n'y satisfait pas, avant d'envoyer l'IFC.
keywords: ids, information delivery specification, buildingsmart, exigences, livraison, vérification, validation, assurance qualité, export ifc, propriété, matériau, achats
from: 50d0f785
---

## Ce que vous allez faire

Un IDS (Information Delivery Specification, une norme buildingSMART) est la liste de ce que doit contenir un IFC. DetailCraft vérifie l'IFC qu'il exporterait (le même fichier que {{ui:IFC}} écrit) par rapport à l'IDS qui vous a été remis, et liste chaque pièce qui n'y satisfait pas.

## Étapes

1. Ouvrez ou dessinez votre modèle.
2. Cliquez sur {{ui:Vérifier avec IDS…}} dans le groupe {{ui:Sortie}} de la barre d'outils.
3. Cliquez sur {{ui:Charger un fichier .ids…}} et choisissez le fichier. Rien n'est envoyé.
4. Lisez le résultat : chaque spécification avec {{ui:Réussie}} ou {{ui:Échec}} et le nombre d'éléments auxquels elle s'applique.
5. Ouvrez Problèmes ({{key:Ctrl+Shift+M}}) et cliquez sur un échec : la pièce, l'assemblage, l'escalier ou la semelle d'où il provient est sélectionné et la vue zoome dessus.

## Ce que vous devez voir

- Un avertissement par élément exporté et par exigence qu'il ne respecte pas, avec le nom de la spécification, ce que demande l'IDS et ce que contient l'export.
- Le rapport de vérification (dans Problèmes) commence par l'IDS : son titre, sa version, son auteur et le nombre d'éléments de chaque spécification.

## À savoir

- L'IDS est enregistré dans le fichier du modèle, il est donc revérifié à l'ouverture du modèle. Le charger ou l'oublier est une seule étape annulable.
- Chaque modification est revérifiée peu après ; sur un grand modèle, la vérification attend un peu plus longtemps entre deux passages.
- Les GlobalIds de l'export proviennent du nom du modèle et des numéros de pièces dans DetailCraft ; ils restent donc identiques d'une vérification à l'autre. Renommer le modèle attribue un nouveau GlobalId à chaque élément.
- Les nombres sont comparés en unités SI (l'export est en millimètres ; les longueurs sont d'abord converties en mètres).
- Les motifs de l'IDS sont lus comme la valeur complète. Un `^` au début et un `$` à la fin sont aussi pris comme « la valeur complète », comme le font la plupart des fichiers IDS.

## Suite

- [Exporter en IFC](topic:ifc-export)
