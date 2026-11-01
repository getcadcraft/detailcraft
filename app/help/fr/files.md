---
title: Ouvrir, enregistrer et exporter des fichiers
summary: Le fichier de modèle DetailCraft, chaque export qu'il écrit, où vont les fichiers, et ce qui diffère selon le navigateur et la connexion.
keywords: ouvrir, enregistrer, exporter, télécharger, fichier, json, ifc, nc1, dstv, csv, pdf, zip, formats, importer
from: bd715ea3
---

DetailCraft a un seul fichier à lui, le modèle, et cinq exports. Chaque enregistrement et chaque export est un téléchargement. Rien n'est téléversé, et rien n'est conservé sur un serveur.

## Le fichier de modèle

Un modèle DetailCraft est enregistré sous `<nom>.detailcraft.json`, où `<nom>` est le nom du modèle dans le panneau {{ui:Modèle}}. Il contient les grilles, les niveaux, les barres (avec leurs trous et échancrures), les connexions et leurs réglages, les semelles et vos profils personnalisés.

Les pièces, repères, boulons, soudures et barres d'armature ne sont pas stockés : DetailCraft les recalcule à partir du modèle chaque fois qu'il s'ouvre. C'est pourquoi un fichier de modèle est petit.

### Enregistrer

1. Saisissez un nom dans le champ {{ui:Nom}} en haut du panneau {{ui:Modèle}}.
2. Choisissez {{ui:Enregistrer}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+S}}.
3. Le navigateur télécharge `<nom>.detailcraft.json`. La barre d'état indique « Enregistré … (téléchargé) », et le point au début du titre de l'onglet du navigateur disparaît.

Chaque enregistrement est un nouveau téléchargement. Le navigateur n'écrase pas le fichier que vous avez ouvert ; selon ses réglages, il ajoute un numéro au nom, comme `Structure (1).detailcraft.json`, ou demande où enregistrer. Gardez vos propres versions en renommant les téléchargements.

:::chromium
Chrome et Edge enregistrent dans votre dossier Téléchargements, sauf si **Demander où enregistrer chaque fichier avant de le télécharger** est activé dans les paramètres de téléchargement du navigateur. Activez-le si vous voulez choisir un dossier et un nom de fichier à chaque fois.
:::

:::firefox
Firefox enregistre dans votre dossier Téléchargements, ou demande à chaque fois si **Toujours demander où enregistrer les fichiers** est activé dans ses paramètres.
:::

:::safari
Safari enregistre dans votre dossier Téléchargements. Pour changer de dossier, ouvrez **Safari, Réglages, Général, Emplacement de téléchargement des fichiers**.
:::

### Ouvrir

1. Choisissez {{ui:Ouvrir}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+O}}.
2. Choisissez un fichier `.detailcraft.json`.

Ou faites glisser le fichier depuis {{pick:mac=le Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}} et déposez-le sur la vue. La vue affiche « Déposez un modèle DetailCraft pour l'ouvrir » pendant le glissement.

Si le modèle ouvert a des modifications non enregistrées, DetailCraft demande d'abord : {{ui:Annuler}}, {{ui:Abandonner les modifications}} ou {{ui:Enregistrer d'abord}}.

DetailCraft vérifie chaque champ d'un fichier avant de l'utiliser. Tout ce qu'il ne peut pas utiliser est laissé de côté et la barre d'état dit quoi, par exemple « 2 barres n'étaient pas valides et ont été omises. » Un modèle enregistré par un DetailCraft plus récent est refusé avec un message plutôt qu'ouvert à moitié juste.

### Ce qu'il ouvre

Ses propres fichiers de modèle (`.json`, jusqu'à 50 Mo) et des fichiers IFC (`.ifc`, IFC2X3 ou IFC4, jusqu'à 200 Mo). Un fichier IFC, ouvert ou apporté avec {{ui:Importer un IFC}}, devient un nouveau modèle de ses poutres, poteaux, barres, platines, grilles et niveaux, avec les trous et échancrures qui y sont découpés et ses boulons comme boulons isolés ; un rapport liste ce qui a été omis. Voir [Export IFC](topic:ifc-export#import). Il n'ouvre pas encore le DWG, le DXF ni le modèle d'un autre programme de détaillage ; essayer affiche « DetailCraft ouvre ses propres modèles (.detailcraft.json) et des fichiers IFC (.ifc). »

## Travail perdu, fichiers récents, l'application de bureau

- Tant que le modèle a des modifications non enregistrées, DetailCraft en garde une copie dans ce navigateur. Si l'onglet ou le navigateur s'arrête avant que vous n'enregistriez, la prochaine ouverture de DetailCraft demande **Récupérer votre travail ?** : récupérer la copie, ou l'abandonner. Voir [Récupérer votre travail](common:recover).
- Les modèles ouverts récemment sont listés sur l'écran de démarrage quand le navigateur permet à DetailCraft de les rouvrir ; cliquez-en un pour le rouvrir.
- Dans l'application de bureau, {{ui:Enregistrer}} réécrit le modèle dans le fichier que vous avez ouvert (dans le navigateur, il télécharge une copie), et un double-clic sur un modèle DetailCraft ou un fichier IFC l'ouvre dans DetailCraft.

## Exports

Tous les exports utilisent le nom du modèle. Choisissez-les dans le groupe {{ui:Sortie}}.

| Bouton | Fichier | Ce qu'il contient |
|---|---|---|
| {{ui:IFC}} | `<nom>.ifc` | IFC4 : niveaux, grilles, chaque pièce d'acier comme extrusion de profilé avec ses trous et échancrures, assemblages, boulons et tiges d'ancrage, semelles et chaque barre d'armature. Voir [Export IFC](topic:ifc-export). |
| {{ui:Fichiers NC}} | `<nom> NC.zip` | Un fichier DSTV `.nc1` par repère de pièce. Voir [Envoyer des fichiers NC à l'atelier](topic:nc-export). |
| {{ui:Nomenclature}} | `<nom> BOM.csv` | Trois tableaux dans un seul fichier : pièces, assemblages, et boulons et tiges d'ancrage. Voir [Repères et nomenclature](topic:marks-and-bom). |
| {{ui:Ferraillage}} | `<nom> bending schedule.csv` | Chaque repère de barre dans les semelles. Voir [Semelles et armatures](topic:footings-and-rebar). |
| {{ui:Plan d'atelier}} | `<nom> <repère>.pdf` | Une feuille (A3 sauf si vous avez choisi un autre format) pour la pièce sélectionnée (profilés en I et platines). Voir [Faire un plan d'atelier](topic:shop-drawings). |
| {{ui:Dessins}} | `<nom> drawings.pdf`, `<nom> <feuille>.pdf` ; `<nom> <feuille>.dwg` ou `.dxf`, plusieurs dans `<nom> drawings DWG.zip` (ou `DXF.zip`) | Les plans, façades et dessins d'assemblage au format de feuille choisi ; DWG et DXF en grandeur réelle, 1 unité = 1 mm sur le papier. Voir [Dessins d'ensemble et d'assemblage](topic:drawings). |

### Remarques sur les fichiers CSV

- Ils commencent par une marque d'ordre des octets pour que les tableurs lisent correctement les caractères accentués.
- Une cellule qui commence par `=`, `+`, `-` ou `@` (et n'est pas un simple nombre) reçoit une apostrophe en tête, pour qu'un tableur ne l'exécute jamais comme une formule.
- Les longueurs sont en millimètres et les poids en kilogrammes.

### Remarques sur le PDF

Le texte du PDF utilise la police standard Helvetica. Les caractères qu'elle n'a pas (hors du jeu d'Europe occidentale) s'impriment comme « ? », et la barre d'état vous dit combien.

## Unités

DetailCraft travaille en millimètres partout : grilles, niveaux, coordonnées, profilés, trous et chaque export. Les noms de profilés gardent leur forme publiée (W12x50 est une désignation américaine, même si ses dimensions sont montrées en mm). Il n'y a pas encore de saisie en unités impériales.

## En ligne et hors ligne

Ouvrir, enregistrer et exporter se font tous dans votre navigateur, donc cela fonctionne de la même façon avec ou sans connexion une fois DetailCraft chargé.

Pour utiliser DetailCraft sans connexion plus tard, choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre de l'application pendant que vous êtes en ligne. Le bouton compte (« Enregistrement de 3 sur 20 ») puis affiche {{ui:Prêt hors ligne}}. La copie enregistrée comprend la bibliothèque graphique 3D (environ 2,6 Mo) et cette aide ; une fois enregistrée, la vue 3D, chaque export et l'aide fonctionnent hors ligne. Détails, et ce qui demande encore une connexion : [Travailler hors ligne](common:offline).

:::offline
Vous êtes hors ligne. Si la barre de l'application affiche {{ui:Prêt hors ligne}}, ouvrir, enregistrer et exporter fonctionnent comme d'habitude. Sinon, gardez cet onglet ouvert, ne le rechargez pas avant d'être de nouveau en ligne, et enregistrez votre modèle maintenant.
:::

L'enregistrement dans le cloud n'est pas encore disponible, et il n'y a pas encore de versions de bureau. Sauvegardez vos fichiers `.detailcraft.json` comme n'importe quel autre fichier de travail. Plus de détails dans [Où vont vos fichiers](common:your-files).

## Travail non enregistré

DetailCraft ne garde le modèle que dans l'onglet ouvert. Si vous fermez ou rechargez l'onglet avec des modifications non enregistrées, le navigateur demande s'il faut quitter la page ; sa formulation est celle du navigateur. Enregistrez souvent avec {{key:Mod+S}}.
