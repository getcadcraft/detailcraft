---
title: Émissions, révisions et journal des modifications des dessins
summary: Gardez un seul historique des émissions avec la maquette de l'architecte : importez les émissions, rattachez à une émission les instructions de chantier, les plans d'atelier et les modèles liés, et lisez le journal des modifications des dessins.
keywords: émission, révision, révisions, journal des modifications, journal des modifications des dessins, registre des dessins, instruction de chantier, plan d'atelier, modèle lié, appel d'offres, construction, historique des émissions, plans d'atelier, fabrication
from: 4b9a1b7b
---

## Ce que vous allez faire

Travaillez à partir du même historique des émissions que le reste de l'équipe. Voyez quelles feuilles ont été émises à quelle révision, et rattachez à l'émission concernée ce qui se passe sur le chantier.

## Étapes

1. Ouvrez **Émissions et révisions**.
2. Choisissez **Lire un historique des émissions** et sélectionnez le fichier `.issues.json` enregistré depuis BimCraft ou une autre application. Ses émissions et ses enregistrements sont ajoutés aux vôtres. Rien n'est remplacé.
3. Choisissez **Ajouter un enregistrement** pour une instruction de chantier, un plan d'atelier, un jeu d'annotations, un modèle lié ou une note. Sélectionnez l'émission concernée et son statut. Un fichier que vous choisissez est enregistré par son nom, sa taille et son SHA-256 ; le fichier reste à son emplacement.
4. **Journal des modifications des dessins** affiche une ligne par feuille et une colonne par émission. Une révision entre crochets a été réémise sans modification.
5. **Télécharger le journal (CSV)** enregistre les émissions, le tableau des feuilles et les enregistrements. **Enregistrer l'historique des émissions** écrit un fichier que lisent les autres applications.

## Bon à savoir

- Les feuilles sont toujours émises depuis Dessins, feuille par feuille. Ces émissions apparaissent ici : les feuilles émises à la même date avec la même note forment une seule émission.
- Les enregistrements et les émissions que vous lisez sont sauvegardés dans le fichier du modèle. Chaque modification correspond à une action Annuler.
- Lire deux fois le même fichier n'ajoute rien en double. Lorsque deux copies contiennent le même enregistrement, la plus récente est conservée.
