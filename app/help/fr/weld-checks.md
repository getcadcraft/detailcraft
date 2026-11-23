---
title: Vérifier les soudures aux nœuds des barres
summary: Après la vérification de calcul, contrôlez les cordons d'angle et les soudures bout à bout tout autour de chaque barre là où elle rencontre une autre barre ou un appui, selon AISC 360-16 chapitre J ou EN 1993-1-8, et voyez quel groupe de soudures est le plus utilisé et sous quelle combinaison. Une aide en attendant la revue d'un ingénieur.
keywords: soudure, soudures, vérification des soudures, cordon d'angle, soudure bout à bout, pénétration complète, AISC 360, EN 1993-1-8, groupe de soudures, taux d'utilisation, capacité, assemblage, nœud, structure, ingénieur
from: e8eebbe6
---

Le bloc {{ui:Vérification des soudures}} de l'onglet {{ui:Analyse}}, sous {{ui:Vérifications de calcul}}, reprend les efforts du dernier portique résolu et les combinaisons de résistance que vous avez créées, et teste la soudure tout autour de chaque barre à chaque nœud : là où une barre rencontre une autre barre, ou repose sur un appui.

:::warning
C'est une **aide en attendant la revue d'un ingénieur**. Elle vérifie une soudure tracée tout autour de la section, comme un seul groupe, à partir des efforts d'extrémité du portique lui-même. Elle ne lit pas la taille ni la longueur des soudures que vous avez dessinées dans les plans d'atelier, et ne vérifie ni les boulons, ni les platines, ni l'appui, ni le cisaillement de bloc, ni l'effet de levier. Ses résultats ne constituent pas un visa.
:::

## Lancer la vérification

1. Résolvez le portique dans l'onglet {{ui:Analyse}}, choisissez un {{ui:Code de calcul}} dans {{ui:Vérifications de calcul}}, puis appuyez sur {{ui:Créer les combinaisons}} (la vérification des soudures a besoin des mêmes combinaisons de résistance).
2. Dans {{ui:Vérification des soudures}}, réglez le {{ui:Côté du cordon d'angle (mm, 0 = la paroi, 8 au maximum)}}. 0 signifie que le côté suit la paroi la plus mince de la section, dans la limite de 8 mm. Avec le code AISC, {{ui:Résistance du métal d'apport F_EXX (MPa)}} est la résistance du métal d'apport (482.6 MPa correspond à une électrode E70). Avec EN 1993, la nuance d'acier donne la résistance du métal d'apport et le coefficient de corrélation.
3. Appuyez sur {{ui:Vérifier les soudures}}.

Chaque ligne du tableau est un groupe de soudures (une extrémité de barre à un nœud). Les nombres : le **taux d'utilisation** de sa vérification gouvernante, l'état (passe ou échoue), et quelles vérification et clause ont gouverné, sous quelle combinaison. Un groupe que la vérification ne peut pas juger indique la raison (pas de nuance d'acier, pas de coefficient de corrélation pour cette nuance dans EN 1993-1-8 tableau 4.1, pas de soudure sur cette section) au lieu d'afficher un nombre.

Modifier le côté du cordon ou le métal d'apport, ou modifier le modèle, efface le tableau : il correspondait aux anciennes valeurs. Appuyez de nouveau sur {{ui:Vérifier les soudures}}.

## Ce qui est vérifié

- **ASCE 7 + AISC 360 :** métal d'apport des cordons d'angle (l'angle de la charge par rapport au cordon compte, J2.4), rupture en cisaillement du métal de base (J4.2), et soudures bout à bout à pénétration complète (tableau J2.5).
- **EN 1990 + EN 1993 :** cordons d'angle par la méthode simplifiée de EN 1993-1-8 4.5.3.3, et soudures bout à bout de 4.7.1.
- Avertissements de détail par rapport aux côtés minimal et maximal des cordons et à la longueur minimale, avec la valeur à laquelle ils ont été comparés.

Le groupe de soudures est traité comme une section linéaire et chargé par la méthode vectorielle élastique : chaque partie de la soudure reprend l'effort normal de la barre, les deux efforts tranchants, la torsion et les deux moments fléchissants, additionnés comme des vecteurs.

## Ce qui n'est pas vérifié

Les soudures à pénétration partielle, les cordons obliques, les soudures en bouchon et en fente, les soudures discontinues, la méthode du centre instantané, la méthode directionnelle EN, la fatigue et le cisaillement de bloc du métal de base ne sont pas disponibles. Certaines constantes des normes ont été saisies à partir des normes et n'ont pas encore été comparées à un exemplaire imprimé ; le rapport indique d'où vient chaque valeur ({{ui:Rapport (PDF)}} s'enrichit des tableaux de soudures une fois la vérification faite). Voir [Vérifier les barres en acier selon un code de calcul](topic:design-checks) et [Pas encore disponible](topic:not-built-yet).
