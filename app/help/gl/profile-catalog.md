---
title: Catálogo de perfís
summary: Todos os tamaños de aceiro integrados, como se escriben os nomes dos perfís, de onde proceden as dimensións e como se nomean as placas e as seccións personalizadas.
keywords: perfís, seccións, catálogo, tamaños, perfís W, ala ancha, perfís S, canle, cantoneira, hss, tubo, tubaxe, ipe, hea, heb, upn, uk, británico, ub, uc, pfc, ea, uea, cantoneira de abas desiguais, shs, rhs, chs, conformado en frío, acabado en quente, blue book, placa, aisc, en 10365, nomeamento
from: cd9b2bc3
---

DetailCraft ten 2.311 tamaños integrados, cada un copiado dunha táboa publicada e comprobado polas probas da aplicación: a superficie calculada a partir das dimensións debe coincidir coa superficie publicada, e o peso publicado debe coincidir con esa superficie pola densidade do aceiro. As placas e os perfís personalizados fanse a partir das súas dimensións.

## Nomeamento

- **Perfís americanos** escríbense como os imprime o Manual AISC, cunha x minúscula: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Ao escribir non distingue maiúsculas.
- **Tubaxe** escríbese como na base de datos AISC: Pipe4STD, Pipe4XS, Pipe4XXS (estándar, extra forte, dobre extra forte).
- **Perfís europeos** escríbense como na EN 10365: IPE200, HEA240, HEB300, UPN200 (sen espazo).
- **Perfís británicos** escríbense coa familia primeiro e despois o tamaño do Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Os perfís ocos conformados en frío comezan por CF: CFSHS100x100x5.0. Escribilos como adoitan aparecer nos debuxos tamén funciona: 305x165x40 UB, L100x100x10, SHS100x5.
- **As placas** son `PL<thickness>x<width>` en milímetros: PL20x200 ten 20 mm de espesor e 200 mm de largura. Funciona calquera tamaño da ferramenta {{ui:Placa}}.
- **Os perfís personalizados** teñen o nome que lles dea, sempre que non sexa un nome do catálogo nin pareza un nome de placa.

Nas listas de {{ui:Perfil}}, o título de cada grupo indica a súa fonte, por exemplo "W shapes — AISC Shapes Database v16.0".

## Fontes

| Grupo | Fonte | Notas |
|---|---|---|
| Perfís W, perfís S, canles (C), cantoneiras (L), HSS, tubaxe | AISC Shapes Database v16.0 | Dimensións convertidas de polgadas a milímetros con exactitude; masa por metro a partir das lb/ft publicadas |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milímetros e kg/m tal como se publican |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milímetros e kg/m tal como se publican |
| Placas | Paramétrico | Masa a partir de superficie × 7850 kg/m³ |
| Personalizado | As súas dimensións | Masa a partir de superficie × 7850 kg/m³ |

Como se debuxan as seccións:

- **Perfís W:** a base de datos AISC non dá raio de acordo, así que DetailCraft debuxa o acordo como r = kdes − tf.
- **Perfís S e canles (C, UPN):** alas paralelas do espesor medio publicado, esquinas rectas (a ala real é inclinada).
- **Cantoneiras:** esquinas rectas.
- **HSS rectangular:** o espesor de parede de cálculo (0,93 × nominal, como permite AISC 360-22 B4.2) con raio exterior de esquina o dobre do mesmo.
- **HSS redondo e tubaxe:** espesor de parede de cálculo (0,93 × nominal).
- **IPE, HEA, HEB, UB, UC:** o raio de acordo publicado.
- **PFC, EA, UEA:** esquinas rectas (a masa e a superficie publicadas seguen incluíndo os raios).
- **SHS, RHS, CHS:** a parede nominal. Esquinas de acabado en quente: exterior 1,5 t, interior t. Conformado en frío: exterior 2 t, interior t ata 6 mm; 2,5 t e 1,5 t ata 10 mm; 3 t e 2 t por riba.

## Os tamaños

Todos os tamaños que as táboas listan nestes grupos, do máis pequeno ao máis grande:

| Grupo | Tamaños |
|---|---|
| Perfís W (289) | W4x13 a W44x408 |
| Perfís S (28) | S3x5.7 a S24x121 |
| Canles (32) | C3x3.5 a C15x50 |
| Cantoneiras, abas iguais (61) | L2x2x1/8 a L12x12x1-3/8 |
| HSS, rectangular e cadrado (525) | HSS1-1/2x1-1/2x1/8 a HSS34x10x1 |
| HSS, redondo (189) | HSS1.660x0.140 a HSS28.000x1.000 |
| Tubaxe (51) | Pipe1/2STD a Pipe26XS |
| IPE (18) | IPE80 a IPE600 |
| HEA (24) | HEA100 a HEA1000 |
| HEB (24) | HEB100 a HEB1000 |
| UPN (18) | UPN50 a UPN400 |
| Cantoneiras, abas desiguais (76) | L2-1/2x1-1/2x3/16 a L8x6x1 |
| UB (107) | UB127x76x13 a UB1016x305x584 |
| UC (46) | UC152x152x23 a UC356x406x1299 |
| PFC (16) | PFC100x50x10 a PFC430x100x64 |
| EA (42) | EA20x20x3.0 a EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 a UEA200x150x18.0 |
| SHS, acabado en quente (123) | SHS40x40x3.2 a SHS400x400x17.5 |
| RHS, acabado en quente (161) | RHS50x30x3.2 a RHS500x300x17.5 |
| CHS, acabado en quente (103) | CHS42.4x3.2 a CHS508.0x17.5 |
| CFSHS, conformado en frío (96) | CFSHS25x25x2.0 a CFSHS400x400x12.5 |
| CFRHS, conformado en frío (137) | CFRHS50x25x2.0 a CFRHS500x300x12.5 |
| CFCHS, conformado en frío (106) | CFCHS33.7x3.0 a CFCHS508.0x16.0 |

Unha cantoneira de abas desiguais espellada é a mesma peza xirada de extremo a extremo, do modo en que un taller fai a man oposta: os seus buratos, recortes e cartela van con ela.

Escolla unha ferramenta de colocación e un tamaño para ver o canto, a largura de ala, o espesor de alma e de ala, o raio de acordo, a superficie (cm²), a masa (kg/m) e a fonte na caixa {{ui:Perfil}} do panel {{ui:Propiedades}}.

## Que pode facer cada forma

| Forma | Buratos | Recortes | Placas de testa e de base | Ficheiro NC | Debuxo de taller |
|---|---|---|---|---|---|
| Perfís en I (W, S, IPE, HEA, HEB, UB, UC, en I personalizado) | Alma, ala superior, ala inferior | Si | Placas de testa: viga e pilar. Placas de base: si | Si | Si |
| Canles (C, UPN, PFC) | Alma, ala superior, ala inferior | Non | Só placas de base | Si | Si |
| HSS rectangular, SHS, RHS | Parede lateral (alma), superior, inferior | Non | Só placas de base | Si | Si |
| HSS redondo, tubaxe, CHS | Aínda non | Non | Só placas de base | Si | Si |
| Cantoneiras (L, EA, UEA) | Aínda non | Non | Só placas de base | Si | Si |
| Placas e pletinas personalizadas | Cara da placa | Non | Non | Si | Si |

Nun tubo rectangular, un burato na cara "alma" atravesa as dúas paredes laterais. O que contén cada ficheiro NC está en [Campos do ficheiro NC](topic:nc1-fields).

## Precisa outro tamaño?

Engádao como [perfil personalizado](topic:plates-and-profiles#add-a-custom-profile). A lista integrada aínda non se pode editar desde a aplicación.
