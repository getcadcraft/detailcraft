---
title: Vérifier les éléments en béton et créer les charges sismiques
summary: Régler les armatures des poutres et poteaux en béton, les vérifier selon l'ACI 318-19, établir les forces latérales équivalentes selon l'ASCE 7-22 sur planchers rigides, et voir la dérive d'étage. Une aide pour l'ingénieur qui la vérifie.
keywords: béton, béton armé, ACI 318, ACI 318-19, armatures, poutre, poteau, cisaillement, cadres, sismique, séisme, force latérale équivalente, ELF, ASCE 7-22, dérive, dérive d'étage, planchers, diaphragme rigide, poids d'étage, taux d'utilisation, structure, ingénieur
from: 94d3001d
---

Les blocs {{ui:Éléments en béton}} et {{ui:Charges sismiques}} de l'onglet {{ui:Analyse}} vérifient les poutres et poteaux en béton armé, et établissent les efforts horizontaux d'un séisme sur les planchers d'un portique. Les deux suivent l'exécution de l'onglet {{ui:Analyse}} et sont enregistrés avec le modèle.

:::warning
Les résultats sont **destinés à la vérification par un ingénieur** : ce n'est qu'une aide tant qu'un ingénieur ne l'a pas revue. Les vérifications du béton utilisent des efforts du premier ordre, sauf qu'un poteau d'un portique que vous déclarez à nœuds fixes (non-sway) est dimensionné pour son moment amplifié, sans amplification due au déplacement, sans dimensionnement à la torsion, sans dispositions sismiques (chapitre 18 de l'ACI) et sans détail des cadres. Les charges sismiques ne tiennent pas compte du coefficient de redondance, de l'effet sismique vertical, de l'amplification torsionnelle ni des effets P-delta. Les charges de vent ne sont pas encore disponibles.
:::

## Dessiner les éléments

Dessinez les éléments en béton comme des rectangles : un profil {{ui:Platine}} tel que `PL400x400` pour un poteau et `PL300x600` pour une poutre donne la section. Les poteaux et les poutres se placent comme tout autre élément.

## Régler les sections

Le bloc {{ui:Éléments en béton}} liste chaque section utilisée par les éléments. Appuyez sur {{ui:Définir comme béton…}} sur celles qui sont en béton. DetailCraft lit la largeur **b** (selon l'axe y propre à l'élément) et la hauteur **h** (selon z) à partir du profil dessiné, puis demande :

- l'**enrobage** jusqu'au centre des armatures, et les armatures **supérieures**, **inférieures** et **latérales** (combien et quel diamètre) pour une poutre, ou une **cage de poteau** (armatures selon b et selon h, diamètre, cadres en spirale) pour un poteau ;
- les **cadres** : brins, diamètre et espacement ;
- le rôle de l'élément : poutre, poteau, ou décidé selon ses efforts (un élément vertical, ou qui porte plus de 0.10 f′c Ag, est un poteau).

Renseignez f′c, la limite d'élasticité des armatures fy et celle des cadres fyt (420 MPa au plus compte pour le cisaillement), K, et si le portique est à nœuds fixes ou à nœuds déplaçables (sway) au-dessus. Une section réglée en béton est analysée comme du béton : E = 4700 √f′c, 2400 kg/m³, et par défaut avec des **sections fissurées** (poteaux 0.70 Ig, poutres 0.35 Ig ; ACI 318-19 tableau 6.6.3.1.1(a)). Choisissez {{ui:Sections brutes}} pour le désactiver.

## Créer les combinaisons et vérifier

Donnez à chaque cas de charge sa nature, puis {{ui:Créer les combinaisons}} : l'ACI 318-19 reprend les combinaisons à l'état limite ultime de l'ASCE 7 (§5.3.1). Appuyez sur {{ui:Vérifier le béton}} : chaque élément reçoit un taux d'utilisation, coloré sur le modèle comme les vérifications de l'acier : flexion et armature minimale (22.2, 9.6.1.2), déformation en traction contrôlée (9.3.3.1), cisaillement avec les cadres (22.5, 9.6.3), espacement des cadres, et effort normal avec moment pour les poteaux (22.4, avec la méthode de Bresler pour la flexion biaxiale). Un élément dont la section dessinée diffère du b × h saisi est indiqué *partiellement vérifié*, de même qu'un poteau élancé ou une torsion au-dessus du seuil : ceux-là ne sont pas dimensionnés.

Les éléments qui dépassent leur capacité sont listés dans {{ui:Problèmes}} ; acceptez-en un avec une raison, ou corrigez la section.

## Planchers et charges sismiques

Un plancher est un niveau où le portique est solidarisé par une dalle rigide (un **diaphragme rigide**). Dans le bloc {{ui:Charges sismiques}}, appuyez sur {{ui:Trouver les planchers}} : il retient les niveaux où deux poutres ou plus se rejoignent. Donnez ensuite à chaque plancher son **poids sismique**, saisi ou lu : {{ui:Prendre les poids dans les cas}} additionne les charges verticales des cas auxquels vous donnez un coefficient (le cas permanent vaut 1 ; ajoutez 0.25 pour un cas d'exploitation de stockage ou de la neige sur une toiture plate, comme le demande l'ASCE 7-22 12.7.2). La charge verticale de chaque nœud va au plancher situé à sa hauteur ou au-dessus ; un poteau entre deux planchers donne donc la moitié de son poids à chacun.

Renseignez les valeurs de calcul : SDS, SD1, S1, R, Ie, Cd, TL, le système structurel (pour la période) et la catégorie de risque. {{ui:Créer les cas sismiques}} calcule alors la période à partir de la hauteur du bâtiment (12.8.2.1), l'effort tranchant à la base V = Cs W (12.8.1), le répartit sur les planchers (12.8.3) et écrit quatre cas de charge, en X et en Y avec l'excentricité accidentelle de 5 % dans chaque sens (12.8.4.2). Les efforts par étage et la vérification de la dérive d'étage (12.8.6, tableau 12.12-1, la dérive Cd δxe / Ie contre 0.020 hsx) apparaissent après un calcul ; une dérive qui dépasse sa limite est aussi un problème. Appuyez de nouveau sur {{ui:Créer les combinaisons}} pour intégrer les cas sismiques aux combinaisons.

**La période issue de l'analyse.** La période approchée Ta provient de la hauteur du bâtiment. Une fois l'analyse exécutée avec les cas sismiques, {{ui:Prendre la période issue de l'analyse}} lit le déplacement de chaque plancher sous les efforts et calcule la période par la méthode de Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), une fois pour X et une fois pour Y ; les cas sismiques sont alors recréés avec elle. La période utilisée ne dépasse jamais Cu·Ta (ASCE 7-22 12.8.2), de sorte qu'un modèle souple ne peut pas abaisser l'effort tranchant à la base en dessous de cette valeur. Reprenez la période après le second calcul : elle se stabilise en une ou deux étapes. Décochez {{ui:Période issue de l'analyse}} pour revenir à Ta.

**Poteaux élancés (ACI 318-19 6.6.4.5).** Pour un portique que vous déclarez à nœuds fixes, un poteau dont k·ℓu/r dépasse 34 + 12·M1/M2 (au plus 40) est dimensionné pour le moment amplifié Mc = δns · M2 : δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² avec (EI)eff = 0.4 Ec Ig / (1 + βdns), et le moment minimal Pu (15 + 0.03 h). βdns (0.6 au départ) est la part de l'effort normal de calcul qui est permanente : saisissez votre propre valeur. Un poteau dont Pu atteint 0.75 Pc échoue à sa propre vérification. Le rapport liste les valeurs de chaque poteau élancé. Dans un portique à nœuds déplaçables, un poteau élancé reste *partiellement vérifié* : son amplification exige une analyse du second ordre, qui n'est pas encore disponible.

**Dalles.** Lorsque le modèle contient des platines, un bloc {{ui:Ferraillage des dalles}} reprend les moments des plaques pour chaque combinaison de charges et, par la règle de Wood–Armer (flexion et torsion ensemble), calcule l'acier nécessaire par mètre pour chaque nappe : inférieure et supérieure, selon x et selon y. Vous donnez l'épaisseur, l'enrobage et les barres ; le tableau affiche l'acier requis face à l'acier donné, ainsi que l'effort tranchant à une direction contre φVc, et une nappe insuffisante est un problème avec son article. La flèche, le poinçonnement aux poteaux et les barres de renfort aux ouvertures ne sont pas couverts, et un moment sur appui converge lentement avec des plaques à quatre nœuds.

Chaque plancher que vous listez devient un diaphragme rigide dans l'analyse : ses poutres ne reprennent aucun effort normal dû au déplacement du plancher. L'export CraftScript n'est pas prévu pour un modèle comportant des planchers.

## Le rapport

{{ui:Rapport (PDF)}} et {{ui:Rapport (CSV)}} s'enrichissent des tableaux de béton (hypothèses, taux d'utilisation par élément, chaque article), des paramètres sismiques et de l'effort tranchant à la base, des efforts sur les planchers et du tableau des dérives.
