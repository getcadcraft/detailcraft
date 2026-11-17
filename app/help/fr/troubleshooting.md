---
title: Dépannage
summary: Ce que signifient les messages de DetailCraft et que faire, d'une vue 3D absente à des connexions qui ne se construisent pas.
keywords: problème, erreur, ne fonctionne pas, aide, réparer, message, refusé, webgl, vide, avertissement, impossible, incident
from: f8c3b2b1
---

La plupart des refus sont expliqués dans la barre d'état en bas de l'écran, ou dans l'onglet {{ui:Problèmes}}. Lisez-les en premier. Les messages ci-dessous sont cités tels que DetailCraft les affiche.

## La vue 3D est absente

**« Ce navigateur n'a pas pu lancer les graphismes 3D (WebGL). Le modèle, les rapports et les exports fonctionnent toujours. »**

Le navigateur n'a pas pu lancer WebGL, la technologie graphique 3D avec laquelle DetailCraft dessine.

1. Mettez à jour le navigateur vers sa dernière version.
2. Activez l'accélération matérielle et redémarrez le navigateur (voir ci-dessous).
3. Mettez à jour votre pilote graphique, ou essayez un autre navigateur. Les bureaux à distance et les machines virtuelles n'ont souvent pas WebGL.
4. En attendant, vous pouvez continuer à travailler : placez les barres avec le formulaire {{ui:Ajouter par trame}}, lisez les rapports et exportez. Seul le clic dans la vue nécessite WebGL.

:::chromium
Pour activer l'accélération matérielle, ouvrez **Paramètres, Système** et activez **Utiliser l'accélération graphique si disponible**, puis relancez le navigateur.
:::

:::firefox
Pour activer l'accélération matérielle, ouvrez **Paramètres, Général, Performances**, décochez **Utiliser les paramètres de performance recommandés**, et cochez **Utiliser l'accélération matérielle lorsqu'elle est disponible**. Redémarrez Firefox.
:::

:::safari
WebGL est activé par défaut dans Safari. Mettez à jour macOS si la vue ne démarre toujours pas, et vérifiez qu'aucune extension ne le bloque.
:::

Plus d'informations dans [Navigateurs et ordinateurs](common:browsers).

## Cliquer dans la vue ne fait rien

- **Aucune intersection près du clic.** Les outils de placement ne s'accrochent qu'aux intersections de trames. Un clic loin de tous les points ne fait rien. Rapprochez-vous jusqu'à ce que le point s'allume.
- **L'outil est {{ui:Sélectionner}} et vous avez cliqué dans le vide.** Cela efface la sélection.
- **Vous avez fait glisser.** Un appui et un relâchement séparés de plus de quelques pixels constituent un glissement : la vue tourne ou se déplace en panoramique.
- **La pièce est coupée.** Dans {{ui:Plan}} et {{ui:Altitude}}, l'acier situé hors de la coupe est masqué et ne peut pas être cliqué. Passez en {{ui:3D}}.
- **L'intersection est au mauvais niveau.** En {{ui:3D}}, des intersections de plusieurs niveaux peuvent se superposer à l'écran ; le clic prend la plus proche. Utilisez {{ui:Plan}} ou {{ui:Altitude}}.

## Messages de placement

| Message | Que faire |
|---|---|
| Aucun niveau au-dessus de Level 2 n'est atteignable par le poteau. Ajoutez d'abord un niveau. | Ajoutez un niveau dans {{ui:Niveaux}}, ou cliquez sur un niveau inférieur |
| Choisissez une autre intersection pour l'autre extrémité. | Vous avez cliqué deux fois le même point |
| Les deux extrémités sont le même point. | Dans {{ui:Ajouter par trame}}, les points « De » et « À » sont identiques |
| Ajoutez des lignes de trame à gauche pour placer des barres. | Le modèle n'a pas de lignes de trame dans une direction |
| Profilé inconnu « … » | Le profilé n'est ni dans le catalogue ni dans les profilés personnalisés du modèle. Choisissez-en un dans la liste |
| Saisissez un nombre. | Un champ numérique est vide ou contient du texte |

## Les connexions ne se construisent pas

### « Cette poutre ne se termine pas sur un axe de poteau. »

Les platines d'extrémité exigent que l'extrémité de la poutre soit exactement sur l'axe vertical d'un poteau, entre son bas et son haut (à 1 mm près). Vérifiez les {{ui:Extrémités (x, y, z mm)}} de la poutre et la position du poteau.

### « Cette poutre rencontre l'âme d'un poteau ou un angle »

Ou dans {{ui:Problèmes}} : « Les poutres aboutissant sur l'âme d'un poteau ne sont pas encore disponibles : tournez le poteau de 90° ou utilisez une autre connexion. »

La poutre aboutit sur l'âme du poteau. Sélectionnez le poteau, réglez {{ui:Rotation (°)}} à 90, puis réessayez. Les assemblages biais ne sont pas encore disponibles.

### « Les platines d'extrémité ne sont disponibles que pour les poutres horizontales (cette poutre est inclinée). »

Les deux extrémités de la poutre doivent être à la même hauteur.

### « Les platines d'extrémité exigent une poutre droite (rotation 0). »

Remettez la {{ui:Rotation (°)}} de la poutre à 0.

### « Les platines d'extrémité exigent une poutre en I. » / « Les platines d'extrémité exigent un poteau en I. »

Seuls les profilés en I (W, IPE, HEA, HEB ou un I personnalisé) acceptent des platines d'extrémité.

### « L'extrémité de la poutre n'est plus sur l'axe du poteau. »

Vous avez déplacé la poutre ou le poteau après avoir ajouté la connexion. Remettez-le en place, ou supprimez la connexion.

### « Les connexions réduisent cette barre à rien. »

Les connexions aux deux extrémités raccourcissent la barre au-delà de sa longueur, par exemple une poutre très courte entre deux poteaux profonds. Vérifiez les extrémités de la barre et l'épaisseur des platines.

### « Aucune autre jonction semblable à celle-ci … n'est sans connexion. »

{{ui:Semblable}} ne copie que vers les jonctions de même profilé de poutre, de même profilé de poteau et de même type de connexion (poutre sur semelle) qui n'ont pas encore de connexion.

### « Les deux extrémités ont déjà des connexions. » / « Ce poteau a déjà une platine de pied. »

Sélectionnez la connexion existante pour la modifier, ou supprimez-la d'abord.

## Avertissements de l'onglet Problèmes

Les avertissements n'empêchent pas la construction d'une connexion ou d'une semelle ; ils vous demandent de la vérifier. Ceux qui concernent les bords et les entraxes utilisent les minimums du tableau 3.3 de EN 1993-1-8 (bord 1.2 × trou, entraxe 2.2 × trou, pince 2.4 × trou). Si votre projet suit d'autres règles, l'avertissement peut ne pas s'appliquer ; DetailCraft ne dimensionne pas les connexions.

« un trou est hors de l'extrémité de la pièce » signifie que la coordonnée x d'un trou est inférieure à 0 ou supérieure à la longueur de coupe. Rappelez-vous que x est mesuré depuis le début de la coupe, après que les connexions ont raccourci la pièce.

## Les modifications de semelle sont refusées

| Message | Que faire |
|---|---|
| L'enrobage ne laisse aucune place aux armatures dans cette semelle. | Agrandissez la semelle ou réduisez l'enrobage |
| La semelle est trop peu épaisse pour deux nappes d'armatures dans l'enrobage. | Augmentez sa hauteur ou réduisez l'enrobage |
| Les armatures d'attente ne tiennent pas dans la semelle avec un enrobage de 75 mm. | Moins d'attentes, un espacement plus serré, ou une semelle plus grande |
| L'espacement des barres doit être de 50–1000 mm. | Saisissez un espacement dans cette plage |
| La longueur doit être de 300–50000 mm. | Les dimensions de semelle sont limitées : longueur et largeur de 300 à 50000, hauteur de 150 à 10000 |

## Trames et niveaux refusés

| Message | Que faire |
|---|---|
| Trames numérotées : indiquez un espacement entre chaque paire de lignes (4). | Comptez vos intervalles : cinq lignes demandent quatre espacements |
| Trames lettrées : les espacements doivent être des millimètres positifs. | Ni zéros, ni négatifs, ni texte |
| Trames numérotées : les repères de trame doivent être différents. | Deux lignes portent le même repère |
| 60 lignes de trame au maximum dans chaque sens. | Scindez le modèle |
| Conservez au moins un niveau. | Vous avez supprimé toutes les lignes de niveau |
| Chaque niveau doit avoir un nom. / Deux niveaux portent le nom « … ». | Donnez à chaque niveau un nom différent |

## L'ouverture d'un fichier échoue

| Message | Cause |
|---|---|
| DetailCraft ouvre ses propres modèles (.detailcraft.json). L'import IFC n'est pas encore disponible. | Le fichier n'est pas un fichier `.json` |
| Ce n'est pas un modèle DetailCraft (pas du JSON). | Le fichier est endommagé ou est un autre JSON |
| Ce n'est pas un modèle DetailCraft. | Un fichier JSON d'un autre programme |
| Ce modèle a été enregistré par une version plus récente de DetailCraft (format 2). | Ouvrez-le avec la version plus récente de DetailCraft qui l'a enregistré |
| Ce fichier est trop volumineux pour être un modèle DetailCraft. | Plus de 50 MB |

Lorsqu'un fichier s'ouvre avec des avertissements tels que « 2 barres non valides ont été écartées. », le reste du modèle est correct. N'enregistrez pas par-dessus l'original tant que vous n'avez pas vérifié ce qui a été écarté.

## Exports

| Message | Cause |
|---|---|
| Rien à exporter pour l'instant. | {{ui:IFC}} avec un modèle vide |
| Aucune pièce en I ni en tôle pour écrire des fichiers NC. | Seulement des profilés en U, des cornières ou des tubes dans le modèle |
| Non écrit (pour l'instant seulement les profilés en I et les platines) : … | Ces repères ne sont pas des profilés en I ni des platines ; le reste a été écrit |
| Aucune semelle, donc aucune armature à planifier. | {{ui:Ferraillage}} sans semelle |
| … caractère(s) hors de la police du PDF imprimé(s) comme « ? ». | Le nom du modèle ou une nuance contient des caractères absents de la police PDF |

{{ui:Plan d'atelier}} grisé : le modèle ne contient pas encore de pièces.

## Les téléchargements n'apparaissent pas

Chaque enregistrement et chaque export est un téléchargement du navigateur. Consultez la liste des téléchargements de votre navigateur. Si le navigateur demande confirmation avant de télécharger plusieurs fichiers, ou bloque les téléchargements de ce site, autorisez-les. Dans Safari, vérifiez le bouton des téléchargements dans la barre d'outils.

## Les touches sans effet

- Le curseur est dans un champ de texte ou de nombre : les touches d'outils et {{key:Delete}} y sont ignorées pour que vous puissiez saisir. Appuyez sur {{key:Tab}} ou cliquez dans la vue.
- Une boîte de dialogue est ouverte : fermez-la d'abord.
- Le navigateur a le focus clavier (par exemple la barre d'adresse) : cliquez dans DetailCraft.
- {{key:Ctrl+Shift+F}} utilise Ctrl même sur un Mac.

## Problèmes hors ligne

Le bouton {{ui:Enregistrer pour le hors ligne}} de la barre d'application indique l'état de la copie hors ligne. Fonctionnement de l'enregistrement : [Travailler hors ligne](common:offline).

| Le bouton affiche | Ce que cela signifie | Que faire |
|---|---|---|
| {{ui:Enregistrer pour le hors ligne}} | Pas encore de copie hors ligne dans ce navigateur | Choisissez-le en ligne |
| Enregistrement 5 sur 20 | L'enregistrement est en cours | Attendez {{ui:Prêt hors ligne}} ; gardez l'onglet ouvert |
| {{ui:Prêt hors ligne}} | DetailCraft, sa vue 3D, tous les exports et cette aide fonctionnent sans connexion | Rien. Cliquez dessus pour {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}} ou {{ui:Supprimer la copie hors ligne}} |
| {{ui:Enregistrement impossible}} | Certains fichiers n'ont pas été téléchargés | Vérifiez votre connexion et cliquez dessus pour réessayer |
| {{ui:Hors ligne indisponible}} | Cette fenêtre ne peut pas conserver de copie hors ligne : les fenêtres privées et certains ordinateurs gérés le bloquent | Utilisez une fenêtre normale, ou travaillez en ligne |

Si vous êtes hors ligne et que le bouton n'affiche pas {{ui:Prêt hors ligne}}, ne rechargez pas et ne fermez pas l'onglet : ce qui a été chargé continue de fonctionner. Enregistrez votre modèle avec {{key:Mod+S}} et attendez de retrouver la connexion.

## Modifications non enregistrées

Si le navigateur demande s'il faut quitter la page, DetailCraft a des modifications non enregistrées. Choisissez de rester, puis appuyez sur {{key:Mod+S}}. DetailCraft ne peut pas récupérer un modèle après la fermeture de l'onglet.

## Toujours bloqué

Notez ce que vous avez fait et le message exact, puis signalez-le via la [page d'assistance](https://getcadcraft.com/support).
