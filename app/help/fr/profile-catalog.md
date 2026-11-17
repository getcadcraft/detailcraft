---
title: Catalogue des profilés
summary: Chaque taille d'acier intégrée, la façon dont les noms de profilés sont écrits, l'origine des dimensions, et la manière dont les platines et les sections personnalisées sont nommées.
keywords: profilés, sections, catalogue, tailles, profilés W, profilés S, profil en U, cornière, hss, tube, tuyau, ipe, hea, heb, upn, uk, britannique, ub, uc, pfc, ea, uea, cornière à ailes inégales, shs, rhs, chs, formé à froid, finition à chaud, blue book, platine, aisc, en 10365, nommage
from: cd9b2bc3
---

DetailCraft contient 2,311 tailles intégrées, chacune copiée d'un tableau publié et vérifiée par les tests de l'application : l'aire calculée à partir des dimensions doit correspondre à l'aire publiée, et le poids publié doit correspondre à cette aire multipliée par la masse volumique de l'acier. Les platines et les profilés personnalisés sont construits à partir de leurs dimensions.

## Nommage

- **Les profilés américains** s'écrivent comme les imprime le manuel AISC, avec un x minuscule : W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. La saisie ne tient pas compte de la casse.
- **Les tubes** s'écrivent comme dans la base de données AISC : Pipe4STD, Pipe4XS, Pipe4XXS (standard, extra fort, double extra fort).
- **Les profilés européens** s'écrivent comme dans EN 10365 : IPE200, HEA240, HEB300, UPN200 (sans espace).
- **Les profilés britanniques** s'écrivent avec la famille d'abord, puis la taille du Blue Book : UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Les profils creux formés à froid commencent par CF : CFSHS100x100x5.0. Saisir la taille comme l'écrivent souvent les dessins fonctionne aussi : 305x165x40 UB, L100x100x10, SHS100x5.
- **Les platines** s'écrivent `PL<thickness>x<width>` en millimètres : PL20x200 a 20 mm d'épaisseur et 200 mm de largeur. Toute taille de l'outil {{ui:Platine}} fonctionne.
- **Les profilés personnalisés** portent le nom que vous leur donnez, tant qu'il n'est pas un nom du catalogue et ne ressemble pas à un nom de platine.

Dans les listes {{ui:Profil}}, le titre de chaque groupe indique sa source, par exemple « Profilés W — AISC Shapes Database v16.0 ».

## Sources

| Groupe | Source | Remarques |
|---|---|---|
| Profilés W, profilés S, profilés en U (C), cornières (L), HSS, Pipe | AISC Shapes Database v16.0 | Dimensions converties de pouces en millimètres exactement ; masse par mètre à partir des lb/ft publiés |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimètres et kg/m tels que publiés |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimètres et kg/m tels que publiés |
| Platines | Paramétrique | Masse : aire × 7850 kg/m³ |
| Personnalisé | Vos dimensions | Masse : aire × 7850 kg/m³ |

Comment les sections sont dessinées :

- **Profilés W :** la base de données AISC ne donne pas de rayon de congé ; DetailCraft dessine donc le congé avec r = kdes − tf.
- **Profilés S et profilés en U (C, UPN) :** ailes parallèles de l'épaisseur moyenne publiée, coins carrés (la vraie aile est inclinée).
- **Cornières :** coins carrés.
- **HSS rectangulaires :** épaisseur de paroi de calcul (0.93 × nominale, comme le permet AISC 360-22 B4.2), avec un rayon de coin extérieur égal au double.
- **HSS ronds et Pipe :** épaisseur de paroi de calcul (0.93 × nominale).
- **IPE, HEA, HEB, UB, UC :** le rayon de congé publié.
- **PFC, EA, UEA :** coins carrés (la masse et l'aire publiées incluent encore les rayons).
- **SHS, RHS, CHS :** la paroi nominale. Coins à chaud : extérieur 1.5 t, intérieur t. Formés à froid : extérieur 2 t, intérieur t jusqu'à 6 mm ; 2.5 t et 1.5 t jusqu'à 10 mm ; 3 t et 2 t au-delà.

## Les tailles

Toutes les tailles listées dans les tableaux de ces groupes, de la plus petite à la plus grande :

| Groupe | Tailles |
|---|---|
| Profilés W (289) | W4x13 à W44x408 |
| Profilés S (28) | S3x5.7 à S24x121 |
| Profilés en U (32) | C3x3.5 à C15x50 |
| Cornières à ailes égales (61) | L2x2x1/8 à L12x12x1-3/8 |
| HSS, rectangulaires et carrés (525) | HSS1-1/2x1-1/2x1/8 à HSS34x10x1 |
| HSS, ronds (189) | HSS1.660x0.140 à HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD à Pipe26XS |
| IPE (18) | IPE80 à IPE600 |
| HEA (24) | HEA100 à HEA1000 |
| HEB (24) | HEB100 à HEB1000 |
| UPN (18) | UPN50 à UPN400 |
| Cornières à ailes inégales (76) | L2-1/2x1-1/2x3/16 à L8x6x1 |
| UB (107) | UB127x76x13 à UB1016x305x584 |
| UC (46) | UC152x152x23 à UC356x406x1299 |
| PFC (16) | PFC100x50x10 à PFC430x100x64 |
| EA (42) | EA20x20x3.0 à EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 à UEA200x150x18.0 |
| SHS, finition à chaud (123) | SHS40x40x3.2 à SHS400x400x17.5 |
| RHS, finition à chaud (161) | RHS50x30x3.2 à RHS500x300x17.5 |
| CHS, finition à chaud (103) | CHS42.4x3.2 à CHS508.0x17.5 |
| CFSHS, formés à froid (96) | CFSHS25x25x2.0 à CFSHS400x400x12.5 |
| CFRHS, formés à froid (137) | CFRHS50x25x2.0 à CFRHS500x300x12.5 |
| CFCHS, formés à froid (106) | CFCHS33.7x3.0 à CFCHS508.0x16.0 |

Une cornière à ailes inégales en miroir est la même pièce retournée bout pour bout, comme le fait un atelier pour obtenir l'autre sens : ses trous, ses échancrures et son gousset la suivent.

Choisissez un outil de placement et une taille pour voir sa hauteur, la largeur de son aile, l'épaisseur de son âme et de son aile, son rayon de congé, son aire (cm²), sa masse (kg/m) et sa source dans la zone {{ui:Profil}} du panneau {{ui:Propriétés}}.

## Ce que peut faire chaque forme

| Forme | Trous | Échancrures | Platines d'extrémité et de pied | Fichier NC | Plan d'atelier |
|---|---|---|---|---|---|
| Profilés en I (W, S, IPE, HEA, HEB, UB, UC, I personnalisé) | Âme, aile supérieure, aile inférieure | Oui | Platines d'extrémité : poutre et poteau. Platines de pied : oui | Oui | Oui |
| Profilés en U (C, UPN, PFC) | Âme, aile supérieure, aile inférieure | Non | Platines de pied seulement | Oui | Oui |
| HSS rectangulaires, SHS, RHS | Paroi latérale (âme), dessus, dessous | Non | Platines de pied seulement | Oui | Oui |
| HSS ronds, Pipe, CHS | Pas encore | Non | Platines de pied seulement | Oui | Oui |
| Cornières (L, EA, UEA) | Pas encore | Non | Platines de pied seulement | Oui | Oui |
| Platines et plats personnalisés | Face de la platine | Non | Non | Oui | Oui |

Pour un tube rectangulaire, un trou sur la face « âme » traverse les deux parois latérales. Le contenu de chaque fichier NC est décrit dans [Champs du fichier NC](topic:nc1-fields).

## Besoin d'une autre taille ?

Ajoutez-la comme un [profil personnalisé](topic:plates-and-profiles#add-a-custom-profile). La liste intégrée ne peut pas encore être modifiée dans l'application.
