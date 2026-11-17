---
title: Vérifications des fondations
summary: Vérifier les semelles, semelles combinées et radiers sur le sol que vous décrivez, le tassement, un radier souple sur ressorts, les groupes de pieux et les murs de soutènement. Une aide à la vérification pour un ingénieur.
keywords: fondation, semelle, semelle combinée, radier, tassement, module de réaction du sol, ressorts, poteau de rive, poteau d'angle, portance, glissement, renversement, poinçonnement, cisaillement, flexion, ancrage, armature minimale, groupe de pieux, mur de soutènement, ACI 318-19
from: 6961ad52
---

:::warning
Ce sont des vérifications de premier ordre, à revoir par un ingénieur, et non une validation de conception. La pression admissible du sol et le coefficient de frottement vous appartiennent : DetailCraft ne connaît pas votre sol.
:::

L'onglet {{ui:Foundation}} vérifie les semelles du modèle par rapport aux charges de poteaux que vous leur donnez.

## Décrire le sol

Tapez la {{ui:Allowable bearing pressure}} et le {{ui:Base friction coefficient}}. Ces deux champs démarrent à 0, ce qui signifie non renseigné : la vérification affiche alors la pression sous forme de remarque et n'indique pas qu'elle passe. Pour le tassement, tapez le module du sol {{ui:Es}} (MPa), son coefficient de Poisson et le tassement admis (25 mm au départ). Pour un radier souple, tapez un module de réaction du sol {{ui:ks}}. Sont également disponibles le remblai au-dessus de la semelle, le poids volumique du sol, les coefficients de sécurité au glissement et au renversement (1.5 au départ) et la limite d'élasticité des barres.

## Donner les charges

Chaque semelle a une liste de charges de poteaux. Utilisez {{ui:Add a column load}} et remplissez la ligne de service (pour la portance, le glissement et le renversement) et la ligne majorée (pour les vérifications de résistance) : l'effort vertical P vers le bas, les efforts horizontaux Vx et Vy sur le dessus de la semelle, les moments Mx et My, la position du poteau sur la semelle et sa taille.

Ou ouvrez l'onglet {{ui:Analysis}} et appuyez sur {{ui:Take column loads from the Analysis}} : chaque appui posé sur une semelle devient une charge de poteau, à partir des jeux de service et majorés que vous choisissez. Un moment My positif charge davantage le côté +x de la semelle ; un moment Mx positif charge davantage le côté −y.

## Ce qui est vérifié

À partir des charges de service, avec le poids propre de la semelle et du remblai :

- **Portance :** la pression sous une semelle rigide. Dans le tiers central, toute la base est en contact ; en dehors, une partie de la base se décolle et le pic est plus élevé. Une résultante située hors de la base constitue un échec.
- **Glissement :** le frottement multiplié par la charge verticale, comparé à l'effort horizontal.
- **Renversement :** la distance de la résultante au bord.
- **Tassement :** le tassement élastique de la pression moyenne sur un demi-espace avec le module donné, au centre et à un coin (solution de Timoshenko et Goodier pour un rectangle souple), comparé à la limite. C'est une borne supérieure pour une semelle rigide ; elle ne tient pas compte d'une couche de sol de profondeur limitée, du déchargement par le terrain excavé ni de la consolidation. Sans module, la pression est affichée en remarque.

D'après les seules charges de poteaux majorées (ACI 318-19) :

- **Flexion** au nu du poteau, avec l'armature minimale (0.0018 pour des barres de 420 MPa) et les barres que vous avez dessinées.
- **Cisaillement unidirectionnel** à d du nu.
- **Poinçonnement** à d/2 autour de chaque poteau, avec le moment du poteau. Pour un poteau proche d'un bord, la section critique est tronquée par le bord de la semelle (trois côtés en bord, deux en angle ; ACI 318-19 22.6.4.1 et le coefficient αs réduit du tableau 22.6.5.2), et le moment autour du centre de la section inclut le décalage de la charge.
- **Ancrage** des barres au-delà du nu du poteau, droites ou avec leurs crochets.
- **Hauteur** au-dessus des barres inférieures (150 mm).

Une semelle combinée ou un radier est considéré comme rigide ; l'effort tranchant et le moment proviennent de l'équilibre statique sur des coupes sur toute la largeur.

## Un radier souple sur ressorts

Cochez {{ui:Analyse this footing as a flexible mat on springs}} lorsque la semelle porte de nombreux poteaux et que la semelle rigide est trop grossière. La semelle devient une plaque d'éléments à quatre nœuds posée sur un lit de ressorts (le {{ui:ks}} que vous avez tapé, concentré aux nœuds), et la charge de chaque poteau est répartie sur les nœuds de sa propre empreinte. Un second tableau donne la pression maximale du sol et le tassement maximal (ainsi que l'écart entre le plus fort et le plus faible), le moment de flexion dans chaque sens avec l'acier nécessaire, la traction sur le dessus comparée à la résistance du béton non armé (une semelle n'a pas de barres supérieures), le cisaillement à d des poteaux, et le poinçonnement d'après la pression propre aux ressorts. Le maillage est affiné jusqu'à ce qu'un poteau couvre trois éléments de large ; un grand radier prend quelques secondes. Le poids propre du radier et celui du sol au-dessus se compensent et sont omis.

Chaque vérification non satisfaite figure dans le panneau {{ui:Problems}}, avec sa clause.

## Groupes de pieux et murs de soutènement

{{ui:Add a pile group}} place une grille de pieux sous une semelle rigide : tapez la charge et les moments, ainsi que ce qu'un pieu peut supporter en compression et en traction (les valeurs de l'étude des pieux, et non celles de cet onglet). La réaction de chaque pieu vaut P/n plus sa part des moments (méthode élastique), et la compression maximale ainsi que toute traction sont vérifiées.

{{ui:Add a retaining wall}} vérifie un mur en console sur remblai horizontal, par mètre : poussée active de Rankine, renversement autour de la pointe, glissement et pression sous la base. La poussée passive devant la pointe est omise. Votre assistant peut lancer les mêmes vérifications avec `pile_group_check` et `retaining_wall_check`.

Les groupes de pieux, les murs et l'option de radier souple sont enregistrés dans le fichier du modèle, et une vérification non satisfaite figure dans {{ui:Problems}}.
