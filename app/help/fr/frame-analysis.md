---
title: Analyser l'ossature
summary: Efforts, réactions et flèches des poutres, poteaux et contreventements tels que dessinés, sous les cas de charge et combinaisons que vous définissez. Une aide à l'analyse, et non une vérification réglementaire ; les vérifications de dimensionnement sont une étape séparée.
keywords: analyse, analyse de structure, analyse d'ossature, méthode de rigidité, charges, cas de charge, combinaison, charge permanente, charge d'exploitation, poids propre, réactions, moment fléchissant, effort tranchant, effort normal, flèche, déformée, appuis, articulé, encastré, relâchement, rapport, pdf, csv, craftscript, frame3d
from: ba0081bc
---

L'onglet {{ui:Analysis}} en bas calcule les efforts dans chaque barre du modèle (poutre, poteau et contreventement), les réactions aux pieds de poteaux et la flexion des barres, pour les charges que vous donnez.

:::warning
C'est une **aide à l'analyse, et non une vérification réglementaire**. L'analyse n'applique aucun code de calcul : elle ne dimensionne pas les barres, ne vérifie ni leur capacité ni leurs assemblages, et ne choisit pas les coefficients de charge. Un ingénieur vérifie le modèle, ses charges et ses appuis, et décide de la signification des résultats. Pour les vérifications de barres selon ASCE 7 / AISC 360 ou EN 1990 / EN 1993-1-1, voir [Vérifier les barres en acier selon un code de calcul](topic:design-checks), une étape distincte, également une aide.
:::

## Lancer l'analyse

1. Ouvrez l'onglet {{ui:Analysis}}.
2. Sélectionnez une ou plusieurs barres dans la vue, choisissez un {{ui:Case}}, une {{ui:Load}} et une {{ui:Direction}}, tapez la valeur et appuyez sur {{ui:Add load}}. Une charge répartie le long d'une barre s'exprime en kN/m, une charge ponctuelle en kN. {{ui:Down (gravity)}} est le choix habituel.
3. Appuyez sur {{ui:Run analysis}}.

Le tableau liste pour chaque barre son effort normal N maximal, les efforts tranchants Vz et Vy, les moments My et Mz, la torsion T et sa flèche, par moment décroissant ; cliquez sur le nom d'une barre pour la sélectionner. En dessous figurent les réactions à chaque appui. {{ui:On the model}} dessine la déformée, ou un effort sous forme de diagramme à côté de chaque barre, avec sa valeur maximale inscrite à son emplacement. Les résultats deviennent périmés dès que le modèle change : relancez l'analyse.

Chaque charge, cas et réglage constitue une étape d'annulation ({{key:Mod+Z}}) et est enregistré dans le fichier du modèle.

## Cas de charge et combinaisons

L'analyse démarre avec trois cas : **Permanente** (le poids propre des barres, d'après leurs sections dessinées et 7850 kg/m³), **Exploitation** (vide) et **Permanente + exploitation**. Ajoutez vos propres cas (vent, neige …) et combinaisons : une combinaison additionne les cas avec les coefficients que vous tapez. L'analyse est linéaire : chaque cas est résolu une fois, et les combinaisons sont des sommes. Tapez les coefficients vous-même, ou choisissez un code de calcul et laissez {{ui:Make combinations}} écrire celles du code ([Vérifier les barres en acier selon un code de calcul](topic:design-checks)).

## De quoi l'ossature est faite

- Poutres, poteaux et contreventements, chacun sur sa ligne de travail (la ligne que vous avez dessinée), avec les caractéristiques réelles de la section calculées à partir de son contour. Platines, escaliers, semelles et boulons ne font pas partie de l'ossature.
- Une barre est coupée là où l'extrémité d'une autre barre s'y appuie : une poutre qui s'assemble sur un poteau à mi-hauteur se raccorde donc à ce poteau à cet endroit.
- **Pieds de poteaux** : encastrés (au départ) ou articulés (bloqués en position et en torsion, libres de tourner). Une platine d'assise crée toujours un appui.
- **Extrémités de poutres** : une platine d'extrémité est rigide, une patte de cisaillement est articulée. {{ui:Beam ends with no connection}} règle le reste. **Les contreventements** sont articulés aux deux extrémités.
- Sélectionnez une seule barre pour lui donner à ses extrémités, ou au pied d'un poteau, une règle propre.
- Acier partout : E = 200 GPa, G = 77 GPa.

Si l'ossature peut bouger sans rien fléchir (un mécanisme, comme des pieds articulés sans contreventement dans une direction), le calcul s'arrête et indique où et dans quel sens. Bloquez-la par un appui, un nœud rigide ou un contreventement.

## Signes

N > 0 est une traction. My > 0 met en traction la face −z locale de la barre : une poutre qui fléchit sous la gravité a My > 0. Mz > 0 met en traction la face −y locale. La flèche est mesurée depuis la droite joignant les extrémités de la barre. L'axe local z de la barre pointe vers le haut (pour un poteau : suivant X) ; ses axes locaux tournent avec la rotation de la barre.

## Le rapport

{{ui:Report (PDF)}} et {{ui:Report (CSV)}} contiennent tout : les hypothèses sur lesquelles l'ossature a été construite, les sections, les cas et combinaisons, puis, pour chaque cas et combinaison, les réactions (avec les sommes des charges et des réactions, qui s'équilibrent), les efforts dans les barres et les déplacements, et une enveloppe de tous les cas. {{ui:Export as CraftScript}} écrit la même ossature sous forme de script pour l'espace de travail Script de PartCraft, où la fonction de bibliothèque `frame3d` la résout pas à pas, en code lisible.

## Méthode

La méthode de rigidité directe, linéaire et au premier ordre sauf si vous cochez Second ordre (P-Delta) : poutres-poteaux à deux nœuds avec rigidités en traction, torsion et deux flexions (sans déformation par cisaillement ni gauchissement), relâchements d'extrémités par condensation statique, charges le long des barres par leurs propres fonctions de forme. Ses réponses sont vérifiées contre les cas classiques de manuel (consoles, poutres simples, encastrées et continues, un portique, une grille en torsion, un treillis).

**Second ordre (P-Delta).** Cochez *Second ordre (P-Delta)* à côté de {{ui:Run analysis}} : chaque combinaison est résolue à nouveau, avec les efforts normaux des barres agissant sur l'ossature déformée (chaque barre découpée en 4 tronçons, pour que la flexion entre ses extrémités compte aussi), jusqu'à stabilisation des efforts normaux. La ligne de résultat indique le nombre de passes et l'accroissement du déplacement latéral ; les moments, flèches, vérifications de dimensionnement et le rapport utilisent alors ces résultats. Au-delà de la charge critique élastique de l'ossature, le calcul s'arrête et l'indique. Il est élastique avec de petites rotations, en flexion seulement, sans réduction de rigidité ni charges notionnelles (ce n'est pas à lui seul la méthode d'analyse directe de l'AISC) ; les dalles, murs et planchers rigides restent au premier ordre.

**Fréquences propres (éléments finis).** Le bloc {{ui:Finite elements: natural frequencies}} sous les résultats trouve les premiers modes du même modèle avec le moteur d'éléments finis : poutres avec leurs relâchements d'extrémités, dalles et murs en coques plates à quatre nœuds, planchers rigides, appuis. Choisissez le nombre de modes (3, 6, 10 ou 20) et l'élément de dalle (la coque à quatre nœuds pour dalles épaisses ou minces, ou celui de dalle mince), puis appuyez sur {{ui:Find the frequencies}}. Le tableau donne la fréquence de chaque mode en Hz, sa période en secondes, et sa masse modale effective suivant X, Y et Z, en part de la masse mobilisable ; {{ui:Show on the model}} dessine tout mode comme on dessine la déformée. La masse est la masse volumique du matériau multipliée par le volume : les charges n'ajoutent pas de masse, et un matériau sans masse volumique n'en a pas. Le rapport (PDF, CSV) contient le tableau. Le calcul est élastique et valable seulement pour de petits déplacements ; aucune charge sismique ni de vent n'est générée ici à partir d'un code. Ce n'est pas une vérification réglementaire : votre ingénieur examine les résultats.

**Spectre de réponse, historique temporel et poussée progressive.** Trois autres blocs se trouvent sous les fréquences, avec le même modèle aux éléments finis. La masse de tous est la masse volumique du matériau, plus les charges descendantes des cas que vous cochez, chacune multipliée par un coefficient que vous tapez (par exemple Permanente à 1 et Exploitation à la part que vous comptez comme masse).

{{ui:Response spectrum}} lit chaque mode sur un spectre que vous fournissez (un tableau de période et d'accélération, ou la forme ASCE 7 à partir de SDS, SD1 et TL ; le bouton {{ui:Use the Seismic block values}} copie ces valeurs depuis le bloc Sismique), combine les modes par CQC, SRSS, la règle des dix pour cent ou une somme en valeur absolue, puis compose les directions X, Y et Z (100 % + 30 % ou SRSS). Il donne l'effort tranchant à la base, les déplacements relatifs d'étage, les efforts aux extrémités des barres et un tableau de modes qui avertit lorsque les modes utilisés portent moins de 90 % de la masse. Vous pouvez mettre les résultats à l'échelle d'un coefficient ou jusqu'à un effort tranchant à la base que vous tapez ; le bloc ne calcule jamais lui-même cet effort tranchant. Les résultats n'ont pas de signe.

{{ui:Time history}} exécute une accélération du sol par superposition modale (exacte pour les segments droits entre les points de l'enregistrement) ou par intégration directe (accélération moyenne de Newmark avec amortissement de Rayleigh). L'entrée est un sinus ou une impulsion fictifs (toujours signalés comme synthétiques), un enregistrement que vous collez, ou un fichier texte que vous ouvrez (temps et accélération, une accélération par ligne avec un pas, ou un fichier de type PEER avec un en-tête DT= ; en g ou m/s²). Il donne le déplacement du toit et l'effort tranchant à la base en fonction du temps, le déplacement relatif de chaque niveau, et l'enveloppe des efforts aux extrémités des barres. Les modèles dont l'enregistrement est très long ne le conservent que pour la session.

{{ui:Pushover}} pousse le toit latéralement par petits pas (répartition comme le premier mode, ou uniforme), avec des rotules plastiques aux extrémités des barres en forme de I. Une rotule plastifie au moment plastique, qui diminue quand l'effort normal augmente (calculé à partir de la section dessinée, congés ignorés) ; l'écrouissage est facultatif, le P-delta est facultatif, et une combinaison de gravité peut être appliquée au préalable. Il donne la courbe de capacité (effort tranchant à la base en fonction du déplacement du toit), la première rotule, et l'état et la rotation plastique de chaque rotule. {{ui:Run the nonlinear time history}} applique les mêmes rotules sous l'enregistrement du bloc Historique temporel, sur de petits modèles. Les rotules ne se forment qu'aux extrémités des barres (placez un nœud là où une rotule doit se former en milieu de travée) ; une barre relâchée aux deux extrémités n'en reçoit aucune, et la plastification et le flambement des contreventements ne sont pas modélisés ; les dalles et murs restent élastiques ; aucun critère d'acceptation n'est donné. Ce n'est pas une vérification réglementaire : votre ingénieur examine les résultats. Les réglages sont enregistrés avec le modèle, et le rapport contient les tableaux.

Pas encore disponible : l'analyse de flambement, la correction de masse manquante pour le spectre de réponse, la mise à l'échelle des enregistrements, les critères d'acceptation des rotules (la réponse dynamique est là, ci-dessus), les charges surfaciques et de vent générées pour vous (les forces sismiques sur les planchers se trouvent dans [Vérifier les éléments en béton et générer les charges sismiques](topic:concrete-and-seismic)), les décalages de barres, les contreventements en traction seule. Voir [Pas encore disponible](topic:not-built-yet).
