---
title: Catálogo de perfiles
summary: Todos los tamaños de acero incluidos, cómo se escriben los nombres de perfil, de dónde proceden las dimensiones y cómo se nombran las placas y las secciones a medida.
keywords: perfiles, secciones, catálogo, tamaños, perfiles W, ala ancha, perfiles S, perfil en U, cantonera, hss, tubo, tubería, ipe, hea, heb, upn, uk, británico, ub, uc, pfc, ea, uea, cantonera de lados desiguales, shs, rhs, chs, conformado en frío, acabado en caliente, libro azul, placa, aisc, en 10365, nomenclatura
from: cd9b2bc3
---

DetailCraft tiene 2,311 tamaños incorporados, cada uno copiado de una tabla publicada y comprobado por las pruebas de la aplicación: el área calculada a partir de las dimensiones debe coincidir con el área publicada, y el peso publicado debe coincidir con esa área por la densidad del acero. Las placas y los perfiles a medida se generan a partir de sus dimensiones.

## Nomenclatura

- **Perfiles de EE. UU.** se escriben como los imprime el AISC Manual, con x minúscula: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Al escribirlos no se distinguen mayúsculas.
- **La tubería** se escribe como en la base de datos AISC: Pipe4STD, Pipe4XS, Pipe4XXS (estándar, extrafuerte, doble extrafuerte).
- **Los perfiles europeos** se escriben como en EN 10365: IPE200, HEA240, HEB300, UPN200 (sin espacio).
- **Los perfiles británicos** se escriben con la familia primero y luego el tamaño del Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Los perfiles huecos conformados en frío empiezan por CF: CFSHS100x100x5.0. Escribirlos como suelen decirlo los planos también funciona: 305x165x40 UB, L100x100x10, SHS100x5.
- **Las placas** son `PL<espesor>x<ancho>` en milímetros: PL20x200 tiene 20 mm de espesor y 200 mm de ancho. Cualquier tamaño de la herramienta {{ui:Placa}} es válido.
- **Los perfiles a medida** tienen el nombre que usted les dé, siempre que no sea un nombre del catálogo ni parezca un nombre de placa.

En las listas de {{ui:Perfil}}, el título de cada grupo indica su origen, por ejemplo «Perfiles W — AISC Shapes Database v16.0».

## Fuentes

| Grupo | Fuente | Notas |
|---|---|---|
| Perfiles W, perfiles S, perfiles en U (C), cantoneras (L), HSS, tubería | AISC Shapes Database v16.0 | Dimensiones convertidas de pulgadas a milímetros con exactitud; masa por metro a partir de las lb/ft publicadas |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milímetros y kg/m tal como se publican |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabla v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milímetros y kg/m tal como se publican |
| Placas | Paramétrico | Masa a partir de área × 7850 kg/m³ |
| A medida | Sus dimensiones | Masa a partir de área × 7850 kg/m³ |

Así se dibujan las formas:

- **Perfiles W:** la base de datos AISC no da radio de acuerdo, así que DetailCraft dibuja el acuerdo como r = kdes − tf.
- **Perfiles S y perfiles en U (C, UPN):** alas paralelas del espesor medio publicado, con esquinas rectas (el ala real es inclinada).
- **Cantoneras:** esquinas rectas.
- **HSS rectangular:** el espesor de pared de cálculo (0.93 × nominal, como permite AISC 360-22 B4.2), con un radio de esquina exterior del doble de ese espesor.
- **HSS redondo y tubería:** espesor de pared de cálculo (0.93 × nominal).
- **IPE, HEA, HEB, UB, UC:** el radio de raíz publicado.
- **PFC, EA, UEA:** esquinas rectas (la masa y el área publicadas siguen incluyendo los radios).
- **SHS, RHS, CHS:** la pared nominal. Esquinas de acabado en caliente: exterior 1.5 t, interior t. Conformados en frío: exterior 2 t, interior t hasta 6 mm; 2.5 t y 1.5 t hasta 10 mm; 3 t y 2 t por encima.

## Los tamaños

Cada tamaño que las tablas enumeran en estos grupos, del más pequeño al más grande:

| Grupo | Tamaños |
|---|---|
| Perfiles W (289) | W4x13 a W44x408 |
| Perfiles S (28) | S3x5.7 a S24x121 |
| Perfiles en U (32) | C3x3.5 a C15x50 |
| Cantoneras de lados iguales (61) | L2x2x1/8 a L12x12x1-3/8 |
| HSS, rectangulares y cuadrados (525) | HSS1-1/2x1-1/2x1/8 a HSS34x10x1 |
| HSS, redondos (189) | HSS1.660x0.140 a HSS28.000x1.000 |
| Tubería (51) | Pipe1/2STD a Pipe26XS |
| IPE (18) | IPE80 a IPE600 |
| HEA (24) | HEA100 a HEA1000 |
| HEB (24) | HEB100 a HEB1000 |
| UPN (18) | UPN50 a UPN400 |
| Cantoneras de lados desiguales (76) | L2-1/2x1-1/2x3/16 a L8x6x1 |
| UB (107) | UB127x76x13 a UB1016x305x584 |
| UC (46) | UC152x152x23 a UC356x406x1299 |
| PFC (16) | PFC100x50x10 a PFC430x100x64 |
| EA (42) | EA20x20x3.0 a EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 a UEA200x150x18.0 |
| SHS, acabado en caliente (123) | SHS40x40x3.2 a SHS400x400x17.5 |
| RHS, acabado en caliente (161) | RHS50x30x3.2 a RHS500x300x17.5 |
| CHS, acabado en caliente (103) | CHS42.4x3.2 a CHS508.0x17.5 |
| CFSHS, conformado en frío (96) | CFSHS25x25x2.0 a CFSHS400x400x12.5 |
| CFRHS, conformado en frío (137) | CFRHS50x25x2.0 a CFRHS500x300x12.5 |
| CFCHS, conformado en frío (106) | CFCHS33.7x3.0 a CFCHS508.0x16.0 |

Una cantonera de lados desiguales reflejada es la misma pieza girada de extremo a extremo, como la fabrica un taller para la versión de mano contraria: sus agujeros, recortes y cartela van con ella.

Elija una herramienta de colocación y un tamaño para ver su canto, ancho de ala, espesores de alma y de ala, radio de acuerdo, área (cm²), masa (kg/m) y origen en el recuadro {{ui:Perfil}} del panel {{ui:Propiedades}}.

## Lo que puede hacer cada forma

| Forma | Agujeros | Recortes | Placas de extremo y placas base | Archivo NC | Plano de taller |
|---|---|---|---|---|---|
| Perfiles en I (W, S, IPE, HEA, HEB, UB, UC, I a medida) | Alma, ala superior, ala inferior | Sí | Placas de extremo: viga y pilar. Placas base: sí | Sí | Sí |
| Perfiles en U (C, UPN, PFC) | Alma, ala superior, ala inferior | No | Solo placas base | Sí | Sí |
| HSS rectangular, SHS, RHS | Pared lateral (alma), superior, inferior | No | Solo placas base | Sí | Sí |
| HSS redondo, tubería, CHS | Todavía no | No | Solo placas base | Sí | Sí |
| Cantoneras (L, EA, UEA) | Todavía no | No | Solo placas base | Sí | Sí |
| Placas y pletinas a medida | Cara de la placa | No | No | Sí | Sí |

En un tubo rectangular, un agujero en la cara «alma» atraviesa ambas paredes laterales. Lo que contiene cada archivo NC está en [Campos del archivo NC](topic:nc1-fields).

## ¿Necesita otro tamaño?

Añádalo como [perfil a medida](topic:plates-and-profiles#add-a-custom-profile). La lista incorporada todavía no se puede editar desde la aplicación.
