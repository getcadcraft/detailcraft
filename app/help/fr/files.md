---
title: Ouvrir, enregistrer et exporter des fichiers
summary: Le fichier de modèle DetailCraft, chaque export qu'il produit, l'emplacement des fichiers et ce qui change selon le navigateur et la connexion.
keywords: ouvrir, enregistrer, exporter, télécharger, fichier, json, ifc, nc1, dstv, csv, pdf, zip, formats, importer
from: 6fbc8e8f
---

DetailCraft a un fichier qui lui est propre, le modèle, et cinq exports. Chaque enregistrement et chaque export est un téléchargement. Rien n'est téléversé, et rien n'est conservé sur un serveur.

## Le fichier de modèle

Un modèle DetailCraft est enregistré sous `<name>.detailcraft.json`, où `<name>` est le nom du modèle dans le panneau {{ui:Modèle}}. Il contient les trames, les niveaux, les barres (avec leurs trous et leurs échancrures), les connexions et leurs réglages, les semelles et vos profils personnalisés.

Les pièces, les repères, les boulons, les soudures et les armatures ne sont pas enregistrés : DetailCraft les recalcule à partir du modèle à chaque ouverture. C'est pour cela qu'un fichier de modèle est petit.

### Enregistrer

1. Saisissez un nom dans le champ {{ui:Nom}} en haut du panneau {{ui:Modèle}}.
2. Choisissez {{ui:Enregistrer (S)}} dans le groupe {{ui:Fichier}}, ou appuyez sur {{key:Mod+S}}.
3. Le navigateur télécharge `<name>.detailcraft.json`. La barre d'état affiche « Enregistré … (téléchargé) », et le point au début du titre de l'onglet du navigateur disparaît.

Chaque enregistrement est un nouveau téléchargement. Le navigateur n'écrase pas le fichier que vous avez ouvert ; selon ses réglages, il ajoute un numéro au nom, comme `Frame (1).detailcraft.json`, ou demande où enregistrer. Conservez vos propres versions en renommant les téléchargements.

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
2. Sélectionnez un fichier `.detailcraft.json`.

Ou faites glisser le fichier depuis {{pick:mac=Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}} et déposez-le sur la vue. La vue affiche « Déposez un modèle DetailCraft pour l'ouvrir » pendant que vous faites glisser.

Si le modèle ouvert contient des modifications non enregistrées, DetailCraft demande d'abord : {{ui:Annuler}}, {{ui:Abandonner les modifications}} ou {{ui:Enregistrer d'abord}}.

DetailCraft vérifie chaque champ d'un fichier avant de l'utiliser. Ce qui ne peut pas être utilisé est laissé de côté, et la barre d'état indique quoi, par exemple « 2 barres n'étaient pas valides et ont été laissées de côté. » Un modèle enregistré par une version plus récente de DetailCraft est refusé avec un message, plutôt qu'ouvert à moitié.

### Ce qui s'ouvre

Ses propres fichiers de modèle (`.json`, jusqu'à 50 Mo) et les fichiers IFC (`.ifc`, IFC2X3 ou IFC4, jusqu'à 200 Mo). Un fichier IFC, ouvert ou importé avec {{ui:Importer un IFC}}, devient un nouveau modèle de ses poutres, poteaux, barres, platines, trames et niveaux, avec les trous et échancrures découpés et ses boulons en boulons libres ; un rapport liste ce qui a été laissé de côté. Voir [Export IFC](topic:ifc-export#import). Il n'ouvre pas encore les fichiers DWG, DXF ni les modèles d'un autre logiciel de détaillage ; en essayant, le message affiché est « DetailCraft ouvre ses propres modèles (.detailcraft.json) et les fichiers IFC (.ifc). »

## Travail perdu, fichiers récents, l'application de bureau

- Tant que le modèle contient des modifications non enregistrées, DetailCraft garde une copie dans ce navigateur. Si l'onglet ou le navigateur s'arrête avant que vous enregistriez, la prochaine ouverture de DetailCraft demande **Récupérer votre travail ?** : récupérez la copie ou abandonnez-la. Voir [Récupérer votre travail](common:recover).
- Les modèles ouverts récemment figurent sur l'écran d'accueil lorsque le navigateur permet à DetailCraft de les rouvrir ; cliquez sur l'un d'eux pour le rouvrir.
- Dans l'application de bureau, {{ui:Enregistrer (S)}} réécrit le modèle dans le fichier ouvert (dans le navigateur, il télécharge une copie), et un double-clic sur un modèle DetailCraft ou un fichier IFC l'ouvre dans DetailCraft.

## Exports

Tous les exports utilisent le nom du modèle. Choisissez-les dans le groupe {{ui:Sortie}}.

| Bouton | Fichier | Contenu |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4 : niveaux, trames, chaque pièce d'acier sous forme d'extrusion de profilé avec ses trous et échancrures, assemblages, boulons et tiges d'ancrage, semelles et toutes les armatures. Voir [Export IFC](topic:ifc-export). |
| {{ui:Fichiers NC}} | `<name> NC.zip` | Un fichier DSTV `.nc1` par repère de pièce. Voir [Envoyer les fichiers NC à l'atelier](topic:nc-export). |
| {{ui:Nomenclature}} | `<name> BOM.csv` | Trois tableaux dans un seul fichier : pièces, assemblages, et boulons et tiges d'ancrage. Voir [Repères et nomenclature](topic:marks-and-bom). |
| {{ui:Ferraillage}} | `<name> bending schedule.csv` | Chaque repère d'armature des semelles. Voir [Semelles et ferraillage](topic:footings-and-rebar). |
| {{ui:Plan d'atelier}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` contient une feuille par repère de pièce ; {{ui:Télécharger le PDF}} donne celle affichée (A3 sauf si vous avez choisi un autre format). Voir [Réaliser les plans d'atelier](topic:shop-drawings). |
| {{ui:Dessins}} | `<name> drawings.pdf`, `<name> <sheet>.pdf` ; `<name> <sheet>.dwg` ou `.dxf`, plusieurs dans `<name> drawings DWG.zip` (ou `DXF.zip`) | Les plans, les façades et les plans d'assemblage au format de feuille choisi ; DWG et DXF à pleine taille, 1 unité = 1 mm sur le papier. Voir [Plans d'ensemble et d'assemblage](topic:drawings). |

### Remarques sur les fichiers CSV

- Ils commencent par une marque d'ordre des octets, afin que les tableurs lisent correctement les caractères accentués.
- Une cellule qui commence par `=`, `+`, `-` ou `@` (et qui n'est pas un simple nombre) reçoit une apostrophe en début, afin qu'un tableur ne l'exécute jamais comme une formule.
- Les longueurs sont en millimètres et les poids en kilogrammes.

### Remarques sur le PDF

Le texte du PDF utilise la police standard Helvetica. Les caractères qu'elle ne possède pas (hors de l'ensemble d'Europe occidentale) sont imprimés sous la forme « ? », et la barre d'état indique combien il y en a.

## Unités

DetailCraft travaille en millimètres partout : trames, niveaux, coordonnées, profilés, trous et chaque export. Les noms de profilés gardent leur forme publiée (W12x50 est une désignation américaine, même si ses dimensions sont données en mm). La saisie en unités impériales n'est pas encore disponible.

## En ligne et hors ligne

L'ouverture, l'enregistrement et l'export se font tous dans votre navigateur ; ils fonctionnent donc de la même façon avec ou sans connexion, une fois DetailCraft chargé.

Pour utiliser DetailCraft plus tard sans connexion, choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre d'application pendant que vous êtes en ligne. Le bouton compte (« Enregistrement 3 sur 20 ») puis affiche {{ui:Prêt hors ligne}}. La copie enregistrée comprend la bibliothèque graphique 3D (environ 2.6 Mo) et cette aide ; une fois enregistrée, la vue 3D, tous les exports et l'aide fonctionnent hors ligne. Détails, et ce qui nécessite encore une connexion : [Travailler hors ligne](common:offline).

:::offline
Vous êtes hors ligne. Si la barre d'application affiche {{ui:Prêt hors ligne}}, l'ouverture, l'enregistrement et l'export fonctionnent comme d'habitude. Sinon, gardez cet onglet ouvert, ne le rechargez pas avant d'être de nouveau en ligne, et enregistrez votre modèle dès maintenant.
:::

L'enregistrement dans le cloud n'est pas encore disponible, et il n'existe pas encore de versions pour ordinateur. Sauvegardez vos fichiers `.detailcraft.json` comme n'importe quel autre fichier de travail. Plus d'informations dans [Où vont vos fichiers](common:your-files).

## Travail non enregistré

DetailCraft ne conserve le modèle que dans l'onglet ouvert. Si vous fermez ou rechargez l'onglet avec des modifications non enregistrées, le navigateur demande s'il faut quitter la page ; son texte est celui du navigateur. Enregistrez souvent avec {{key:Mod+S}}.
