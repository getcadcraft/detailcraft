---
title: Catàleg de perfils
summary: Totes les mides d'acer incorporades, com s'escriuen els noms dels perfils, d'on venen les dimensions i com es noms les plaques i les seccions personalitzades.
keywords: perfils, seccions, catàleg, mides, formes W, ala ampla, formes S, canal, cornièra, hss, tub, pipe, ipe, hea, heb, upn, uk, britànic, ub, uc, pfc, ea, uea, cornièra desigual, shs, rhs, chs, conformat en fred, acabat en calent, blue book, placa, aisc, en 10365, noms
from: cd9b2bc3
---

DetailCraft té 2,311 mides incorporades, cadascuna copiada d'una taula publicada i comprovada per les proves de l'aplicació: l'àrea calculada a partir de les dimensions ha de coincidir amb l'àrea publicada, i el pes publicat ha de coincidir amb aquesta àrea per la densitat de l'acer. Les plaques i els perfils personalitzats es fan a partir de les seves dimensions.

## Noms

- **Formes nord-americanes** s'escriuen com les imprimeix el Manual AISC, amb una x minúscula: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. En escriure'ls no cal distingir majúscules de minúscules.
- **Pipe** s'escriu com a la base de dades AISC: Pipe4STD, Pipe4XS, Pipe4XXS (estàndard, extra fort, doble extra fort).
- **Formes europees** s'escriuen com a EN 10365: IPE200, HEA240, HEB300, UPN200 (sense espai).
- **Formes britàniques** s'escriuen amb la família primer i després la mida del Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Les seccions buides conformades en fred comencen per CF: CFSHS100x100x5.0. També funciona escriure-les com solen dir els plànols: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plaques** són `PL<thickness>x<width>` en mil·límetres: PL20x200 té 20 mm de gruix i 200 mm d'amplada. Funciona qualsevol mida de l'eina {{ui:Placa}}.
- **Els perfils personalitzats** tenen el nom que els doneu, sempre que no sigui un nom de catàleg i no sembli un nom de placa.

A les llistes {{ui:Perfil}}, la capçalera de cada grup indica la seva font, per exemple "Formes W — AISC Shapes Database v16.0".

## Fonts

| Grup | Font | Notes |
|---|---|---|
| Formes W, formes S, Canals (C), Cornières (L), HSS, Pipe | AISC Shapes Database v16.0 | Dimensions convertides de polzades a mil·límetres exactament; massa per metre a partir de les lb/ft publicades |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Mil·límetres i kg/m tal com es publiquen |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), taula v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Mil·límetres i kg/m tal com es publiquen |
| Plaques | Paramètrica | Massa a partir de l'àrea × 7850 kg/m³ |
| Personalitzat | Les vostres dimensions | Massa a partir de l'àrea × 7850 kg/m³ |

Com es dibuixen les formes:

- **Formes W:** la base de dades AISC no dona radi d'arrodoniment, de manera que DetailCraft el dibuixa com r = kdes − tf.
- **Formes S i canals (C, UPN):** ales paral·leles del gruix mitjà publicat, cantonades quadrades (l'ala real és inclinada).
- **Cornières:** cantonades quadrades.
- **HSS rectangular:** el gruix de paret de disseny (0.93 × nominal, tal com permet AISC 360-22 B4.2) amb un radi de cantonada exterior del doble d'això.
- **HSS rodó i Pipe:** gruix de paret de disseny (0.93 × nominal).
- **IPE, HEA, HEB, UB, UC:** el radi d'arrel publicat.
- **PFC, EA, UEA:** cantonades quadrades (la massa i l'àrea publicades encara inclouen els radis).
- **SHS, RHS, CHS:** la paret nominal. Cantonades acabades en calent: exterior 1.5 t, interior t. Conformades en fred: exterior 2 t, interior t fins a 6 mm; 2.5 t i 1.5 t fins a 10 mm; 3 t i 2 t per sobre.

## Les mides

Totes les mides que les taules enumeren en aquests grups, de la més petita a la més gran:

| Grup | Mides |
|---|---|
| Formes W (289) | W4x13 a W44x408 |
| Formes S (28) | S3x5.7 a S24x121 |
| Canals (32) | C3x3.5 a C15x50 |
| Cornières, ales iguals (61) | L2x2x1/8 a L12x12x1-3/8 |
| HSS, rectangular i quadrat (525) | HSS1-1/2x1-1/2x1/8 a HSS34x10x1 |
| HSS, rodó (189) | HSS1.660x0.140 a HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD a Pipe26XS |
| IPE (18) | IPE80 a IPE600 |
| HEA (24) | HEA100 a HEA1000 |
| HEB (24) | HEB100 a HEB1000 |
| UPN (18) | UPN50 a UPN400 |
| Cornières, ales desiguals (76) | L2-1/2x1-1/2x3/16 a L8x6x1 |
| UB (107) | UB127x76x13 a UB1016x305x584 |
| UC (46) | UC152x152x23 a UC356x406x1299 |
| PFC (16) | PFC100x50x10 a PFC430x100x64 |
| EA (42) | EA20x20x3.0 a EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 a UEA200x150x18.0 |
| SHS, acabat en calent (123) | SHS40x40x3.2 a SHS400x400x17.5 |
| RHS, acabat en calent (161) | RHS50x30x3.2 a RHS500x300x17.5 |
| CHS, acabat en calent (103) | CHS42.4x3.2 a CHS508.0x17.5 |
| CFSHS, conformat en fred (96) | CFSHS25x25x2.0 a CFSHS400x400x12.5 |
| CFRHS, conformat en fred (137) | CFRHS50x25x2.0 a CFRHS500x300x12.5 |
| CFCHS, conformat en fred (106) | CFCHS33.7x3.0 a CFCHS508.0x16.0 |

Una cornièra desigual reflectida és la mateixa peça girada d'extrem a extrem, com fa un taller la mà contrària: els seus forats, osques i cartel·la la segueixen.

Trieu una eina de col·locació i una mida per veure l'alçada, l'amplada d'ala, el gruix d'ànima i d'ala, el radi d'arrodoniment, l'àrea (cm²), la massa (kg/m) i la font al quadre {{ui:Perfil}} del tauler {{ui:Propietats}}.

## Què pot fer cada forma

| Forma | Forats | Osques | Plaques d'extrem i de base | Fitxer NC | Plànol de taller |
|---|---|---|---|---|---|
| Perfils I (W, S, IPE, HEA, HEB, UB, UC, I personalitzat) | Ànima, ala superior, ala inferior | Sí | Plaques d'extrem: biga i pilar. Plaques de base: sí | Sí | Sí |
| Canals (C, UPN, PFC) | Ànima, ala superior, ala inferior | No | Només plaques de base | Sí | Sí |
| HSS rectangular, SHS, RHS | Paret lateral (ànima), superior, inferior | No | Només plaques de base | Sí | Sí |
| HSS rodó, Pipe, CHS | Encara no | No | Només plaques de base | Sí | Sí |
| Cornières (L, EA, UEA) | Encara no | No | Només plaques de base | Sí | Sí |
| Plaques i pletines personalitzades | Cara de la placa | No | No | Sí | Sí |

En un tub rectangular, un forat a la cara "ànima" travessa les dues parets laterals. El que conté cada fitxer NC és a [Camps del fitxer NC](topic:nc1-fields).

## Necessiteu una altra mida?

Afegiu-la com a [perfil personalitzat](topic:plates-and-profiles#add-a-custom-profile). La llista incorporada encara no es pot editar des de l'aplicació.
