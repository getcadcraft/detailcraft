---
title: Utiliser DetailCraft avec un assistant IA
summary: Laissez votre propre assistant IA ou votre script lire le modèle, ses pièces, ses problèmes et ses conflits, ajouter des barres et des connexions, enregistrer et exporter (USD aussi) - autorisations, connexion via CadCraft Studio et journal d'activité.
keywords: ia, assistant, agent, mcp, model context protocol, script, automatisation, pièces, conflits, connexions, autorisations, déconnexion, activité, annuler
from: d624c9a0
---

## Ce que vous allez apprendre

Comment laisser un assistant IA (ou un script que vous avez écrit) travailler avec DetailCraft, et décider de ce qu'il a le droit de modifier.

DetailCraft n'a **pas d'IA propre** et n'envoie rien nulle part. Vous apportez l'assistant : tout programme qui parle le Model Context Protocol (MCP). DetailCraft lui fournit seulement des outils, et vous choisissez lesquels.

## Activer

1. Ouvrez {{ui:Paramètres}} (l'engrenage dans la barre d'application, ou {{key:Mod+,}}) et allez dans l'onglet {{ui:DetailCraft}}.
2. Sous {{ui:Assistants}}, cochez **Autoriser les assistants IA et les scripts à utiliser DetailCraft**. Cette option est désactivée tant que vous ne la cochez pas.
3. Choisissez ce qu'il peut faire : **Lecture** est cochée par défaut ; cochez **Modifier**, **Enregistrer** ou **Exporter** uniquement lorsque vous en avez besoin.

Les outils qui dépassent les autorisations cochées ne sont pas proposés à l'assistant ; s'il en demande un malgré tout, DetailCraft le refuse et l'inscrit dans le journal d'activité. Désactiver l'interrupteur met fin immédiatement à toutes les connexions.

## Connecter votre assistant

Les assistants se connectent via **CadCraft Studio** sur votre ordinateur : Studio lance un petit serveur que seul cet ordinateur peut atteindre, protégé par un jeton qu'il génère à chaque démarrage. Dans Studio, choisissez {{ui:Connecter un assistant}} et copiez l'adresse et le jeton dans votre assistant (Studio affiche les paramètres exacts à coller). Ne partagez jamais le jeton.

:::note
Un onglet de navigateur ne peut pas ouvrir de connexion pour un assistant : dans les applications web, l'interrupteur n'a aucun effet tant que vous n'utilisez pas CadCraft Studio sur votre ordinateur.
:::

## Vous gardez le contrôle

- **Chaque modification est une seule étape d'annulation**, étiquetée comme celle de l'assistant (par exemple « Assistant : ajouter une poutre », « Assistant : ajouter des goussets »). {{key:Mod+Z}} annule la dernière modification de l'assistant en bloc. L'outil `undo` de l'assistant n'annule que ses propres étapes, jamais les vôtres, sauf s'il le demande explicitement.
- **Il attend votre tour.** Pendant que vous placez une barre, déplacez des pièces ou collez, DetailCraft refuse les modifications de l'assistant et lui demande de réessayer.
- **Vous savez quand un assistant est connecté.** Un bouton dans la barre d'application indique le nom de l'assistant tant qu'il est connecté ; cliquez dessus pour voir ce qu'il peut faire, ou pour le **Déconnecter**.
- **Activité.** {{ui:Paramètres}} › {{ui:DetailCraft}} › {{ui:Assistants}} › {{ui:Activité}} liste chaque appel : quand, quel outil, effectué ou refusé. {{ui:Enregistrer le journal}} en garde une copie.

## Ce qu'un assistant peut demander

Toutes les longueurs sont en millimètres, les points `[x, y, z]` avec z vers le haut, comme dans le modèle.

| Outil | Autorisation | Ce qu'il fait |
|---|---|---|
| `app_info`, `model_describe` | Lecture | Le modèle ouvert : trames, niveaux, phases, barres par type et profilé, connexions, semelles, escaliers, pièces, poids d'acier, problèmes |
| `parts_list` | Lecture | Repères de pièces avec profilé, matériau, longueur de coupe, quantité, poids, phase et repères d'assemblage ; par type, profilé, repère ou phase |
| `problems_list` | Lecture | Ce que liste l'onglet {{ui:Problèmes}}, chacun avec son objet |
| `clash_check` | Lecture | La [détection de conflits](topic:clash-check), avec sa tolérance et ses phases |
| `selection_get` | Lecture | Ce que vous avez sélectionné |
| `selection_set` | Modifier | Sélectionne des barres, connexions, semelles ou escaliers (par identifiant ou repère de pièce) pour vous les montrer ; ne modifie rien |
| `member_add` | Modifier | Une poutre, un poteau, un contreventement ou une platine entre deux points |
| `connection_add` | Modifier | Platines d'extrémité, pattes de cisaillement, platines de pied, éclissages ou goussets là où les barres données se rencontrent, comme le font les boutons {{ui:Connexions}} |
| `undo` | Modifier | Annule les dernières étapes de l'assistant |
| `model_save` | Enregistrer | L'enregistrement propre de DetailCraft |
| `model_export` | Exporter | IFC, fichiers NC, nomenclature, tableau de ferraillage, fichier KISS ou liste de débit, comme le font les boutons {{ui:Sortie}} |
| `usd_export` | Exporter | Le modèle acier en USD (.usda, .usdc ou .usdz), comme l'écrit {{ui:Sortie}} › {{ui:USD}} (voir [Exporter le modèle acier en USD](topic:usd)) ; dans Studio, il peut écrire le fichier dans un dossier que vous avez autorisé |

## Si quelque chose ne fonctionne pas

- **L'assistant ne voit aucun outil DetailCraft :** vérifiez que l'interrupteur est activé dans cette fenêtre et que la fenêtre est ouverte dans Studio.
- **« nécessite l'autorisation de modification »** (ou d'enregistrement, d'export) : cochez-la sous {{ui:Assistants}}, puis redemandez.
- **« La personne place une barre » :** terminez ce que vous faites (ou appuyez sur {{key:Esc}}), puis laissez l'assistant réessayer.
- **Erreurs « 401 » ou « token » :** le jeton a changé (Studio a redémarré, ou {{ui:Nouveau jeton}}). Copiez le nouveau dans les paramètres de l'assistant.

## Voir aussi

- [Recettes pour assistants IA](common:assistants-recipes) : exemples détaillés, chacun avec les outils qu'il appelle.
