---
title: Catálogo de perfiles
summary: Cada tamaño de acero integrado, cómo se escriben los nombres de perfil, de dónde vienen las dimensiones, y cómo se nombran las placas y las secciones personalizadas.
keywords: perfiles, secciones, catálogo, tamaños, perfiles w, ala ancha, perfiles s, canal, ángulo, hss, tubo, tubería, ipe, hea, heb, upn, uk, británico, ub, uc, pfc, ea, uea, ángulo de lados desiguales, shs, rhs, chs, formado en frío, acabado en caliente, blue book, placa, aisc, en 10365, nomenclatura
from: cd9b2bc3
---

DetailCraft tiene 2,311 tamaños integrados, cada uno copiado de una tabla publicada y verificado por las pruebas de la aplicación: el área calculada a partir de las dimensiones debe coincidir con el área publicada, y el peso publicado debe coincidir con esa área por la densidad del acero. Las placas y los perfiles personalizados se construyen a partir de sus dimensiones.

## Nomenclatura

- **Perfiles de EE. UU.** se escriben como los imprime el Manual AISC, con x minúscula: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Al escribir no distingue entre mayúsculas y minúsculas.
- **Tubería** se escribe como en la base de datos AISC: Pipe4STD, Pipe4XS, Pipe4XXS (estándar, extrafuerte, doble extrafuerte).
- **Perfiles europeos** se escriben como en EN 10365: IPE200, HEA240, HEB300, UPN200 (sin espacio).
- **Perfiles británicos** se escriben con la familia primero y luego el tamaño del Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Las secciones huecas formadas en frío empiezan con CF: CFSHS100x100x5.0. También funciona escribirlo como suelen decirlo los planos: 305x165x40 UB, L100x100x10, SHS100x5.
- **Placas** son `PL<espesor>x<ancho>` en milímetros: PL20x200 tiene 20 mm de espesor y 200 mm de ancho. Funciona cualquier tamaño de la herramienta {{ui:Placa}}.
- **Perfiles personalizados** tienen el nombre que usted les dé, siempre que no sea un nombre del catálogo y no parezca un nombre de placa.

En las listas de {{ui:Perfil}}, el encabezado de cada grupo indica su fuente, por ejemplo "Perfiles W — AISC Shapes Database v16.0".

## Fuentes

| Grupo | Fuente | Notas |
|---|---|---|
| Perfiles W, perfiles S, Canales (C), Ángulos (L), HSS, Tubería | AISC Shapes Database v16.0 | Dimensiones convertidas de pulgadas a milímetros exactamente; masa por metro a partir de las lb/ft publicadas |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milímetros y kg/m tal como se publican |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (Reino Unido), tabla v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milímetros y kg/m tal como se publican |
| Placas | Paramétrico | Masa a partir de área × 7850 kg/m³ |
| Personalizados | Sus dimensiones | Masa a partir de área × 7850 kg/m³ |

Cómo se dibujan las secciones:

- **Perfiles W:** la base de datos AISC no da radio de empalme, así que DetailCraft dibuja el empalme como r = kdes − tf.
- **Perfiles S y canales (C, UPN):** patines paralelos del espesor promedio publicado, esquinas a escuadra (el patín real es inclinado).
- **Ángulos:** esquinas a escuadra.
- **HSS rectangular:** el espesor de pared de diseño (0.93 × nominal, como permite AISC 360-22 B4.2) con un radio de esquina exterior de dos veces ese espesor.
- **HSS redondo y Tubería:** espesor de pared de diseño (0.93 × nominal).
- **IPE, HEA, HEB, UB, UC:** el radio de raíz publicado.
- **PFC, EA, UEA:** esquinas a escuadra (la masa y el área publicadas siguen incluyendo los radios).
- **SHS, RHS, CHS:** la pared nominal. Esquinas de acabado en caliente: exterior 1.5 t, interior t. Formadas en frío: exterior 2 t, interior t hasta 6 mm; 2.5 t y 1.5 t hasta 10 mm; 3 t y 2 t por encima de eso.

## Los tamaños

Todos los tamaños que las tablas enumeran en estos grupos, del más pequeño al más grande:

| Grupo | Tamaños |
|---|---|
| Perfiles W (289) | W4x13 a W44x408 |
| Perfiles S (28) | S3x5.7 a S24x121 |
| Canales (32) | C3x3.5 a C15x50 |
| Ángulos de lados iguales (61) | L2x2x1/8 a L12x12x1-3/8 |
| HSS rectangular y cuadrado (525) | HSS1-1/2x1-1/2x1/8 a HSS34x10x1 |
| HSS redondo (189) | HSS1.660x0.140 a HSS28.000x1.000 |
| Tubería (51) | Pipe1/2STD a Pipe26XS |
| IPE (18) | IPE80 a IPE600 |
| HEA (24) | HEA100 a HEA1000 |
| HEB (24) | HEB100 a HEB1000 |
| UPN (18) | UPN50 a UPN400 |
| Ángulos de lados desiguales (76) | L2-1/2x1-1/2x3/16 a L8x6x1 |
| UB (107) | UB127x76x13 a UB1016x305x584 |
| UC (46) | UC152x152x23 a UC356x406x1299 |
| PFC (16) | PFC100x50x10 a PFC430x100x64 |
| EA (42) | EA20x20x3.0 a EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 a UEA200x150x18.0 |
| SHS, acabado en caliente (123) | SHS40x40x3.2 a SHS400x400x17.5 |
| RHS, acabado en caliente (161) | RHS50x30x3.2 a RHS500x300x17.5 |
| CHS, acabado en caliente (103) | CHS42.4x3.2 a CHS508.0x17.5 |
| CFSHS, formado en frío (96) | CFSHS25x25x2.0 a CFSHS400x400x12.5 |
| CFRHS, formado en frío (137) | CFRHS50x25x2.0 a CFRHS500x300x12.5 |
| CFCHS, formado en frío (106) | CFCHS33.7x3.0 a CFCHS508.0x16.0 |

Un ángulo de lados desiguales reflejado es la misma pieza girada de punta a punta, como la hace un taller para obtener la mano opuesta: sus perforaciones, recortes y cartela van con ella.

Elija una herramienta de colocación y un tamaño para ver su peralte, ancho de patín, espesor de alma y patín, radio de empalme, área (cm²), masa (kg/m) y fuente en el recuadro {{ui:Perfil}} del panel {{ui:Propiedades}}.

## Lo que puede hacer cada forma

| Forma | Perforaciones | Recortes | Placas de extremo y placas base | Archivo NC | Plano de taller |
|---|---|---|---|---|---|
| Secciones I (W, S, IPE, HEA, HEB, UB, UC, I personalizada) | Alma, patín superior, patín inferior | Sí | Placas de extremo: viga y columna. Placas base: sí | Sí | Sí |
| Canales (C, UPN, PFC) | Alma, patín superior, patín inferior | No | Solo placas base | Sí | Sí |
| HSS rectangular, SHS, RHS | Pared lateral (alma), superior, inferior | No | Solo placas base | Sí | Sí |
| HSS redondo, Tubería, CHS | Todavía no | No | Solo placas base | Sí | Sí |
| Ángulos (L, EA, UEA) | Todavía no | No | Solo placas base | Sí | Sí |
| Placas y solera personalizada | Cara de la placa | No | No | Sí | Sí |

En un tubo rectangular, una perforación en la cara "alma" atraviesa ambas paredes laterales. Lo que contiene cada archivo NC está en [Campos del archivo NC](topic:nc1-fields).

## ¿Necesita otro tamaño?

Agréguelo como [perfil personalizado](topic:plates-and-profiles#add-a-custom-profile). La lista integrada todavía no se puede editar desde la aplicación.
