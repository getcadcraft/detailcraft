---
title: Catálogo de perfis
summary: Cada tamanho de aço embutido, como os nomes dos perfis são escritos, de onde vêm as dimensões e como chapas e seções personalizadas são nomeadas.
keywords: perfis, seções, catálogo, tamanhos, perfis w, abas largas, perfis s, perfil u, cantoneira, hss, tubo, ipe, hea, heb, upn, uk, britânico, ub, uc, pfc, ea, uea, cantoneira desigual, shs, rhs, chs, conformado a frio, laminado a quente, blue book, chapa, aisc, en 10365, nomenclatura
from: cd9b2bc3
---

O DetailCraft tem 2,311 tamanhos embutidos, cada um copiado de uma tabela publicada e verificado pelos testes do aplicativo: a área calculada a partir das dimensões deve coincidir com a área publicada, e o peso publicado deve coincidir com essa área multiplicada pela densidade do aço. Chapas e perfis personalizados são criados a partir das suas dimensões.

## Nomenclatura

- **Perfis americanos** são escritos como o AISC Manual os imprime, com x minúsculo: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. A digitação não diferencia maiúsculas de minúsculas.
- **Tubos** são escritos como no banco de dados do AISC: Pipe4STD, Pipe4XS, Pipe4XXS (padrão, extra forte, duplo extra forte).
- **Perfis europeus** são escritos como na EN 10365: IPE200, HEA240, HEB300, UPN200 (sem espaço).
- **Perfis britânicos** são escritos com a família primeiro, depois o tamanho do Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Seções ocas conformadas a frio começam com CF: CFSHS100x100x5.0. Digitar do jeito que os desenhos costumam dizer também funciona: 305x165x40 UB, L100x100x10, SHS100x5.
- **Chapas** são `PL<espessura>x<largura>` em milímetros: PL20x200 tem 20 mm de espessura e 200 mm de largura. Qualquer tamanho da ferramenta {{ui:Chapa}} funciona.
- **Perfis personalizados** têm o nome que você der, desde que não seja um nome de catálogo e não pareça um nome de chapa.

No painel {{ui:Perfil}}, o título de cada grupo indica a fonte, por exemplo "Perfis W — AISC Shapes Database v16.0".

## Fontes

| Grupo | Fonte | Observações |
|---|---|---|
| Perfis W, perfis S, perfis U (C), cantoneiras (L), HSS, tubos | AISC Shapes Database v16.0 | Dimensões convertidas de polegadas para milímetros exatamente; massa por metro a partir do lb/ft publicado |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milímetros e kg/m como publicados |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabela v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milímetros e kg/m como publicados |
| Chapas | Paramétrico | Massa a partir de área × 7850 kg/m³ |
| Personalizado | Suas dimensões | Massa a partir de área × 7850 kg/m³ |

Como as formas são desenhadas:

- **Perfis W:** a base AISC não dá raio de concordância, então o DetailCraft desenha a concordância como r = kdes − tf.
- **Perfis S e perfis U (C, UPN):** mesas paralelas com a espessura média publicada, cantos retos (a mesa real é inclinada).
- **Cantoneiras:** cantos retos.
- **HSS retangular:** a espessura de parede de projeto (0.93 × nominal, como a AISC 360-22 B4.2 permite), com raio externo de canto igual ao dobro dela.
- **HSS redondo e tubos:** espessura de parede de projeto (0.93 × nominal).
- **IPE, HEA, HEB, UB, UC:** o raio de raiz publicado.
- **PFC, EA, UEA:** cantos retos (a massa e a área publicadas ainda incluem os raios).
- **SHS, RHS, CHS:** a parede nominal. Cantos laminados a quente: externo 1.5 t, interno t. Conformados a frio: externo 2 t, interno t até 6 mm; 2.5 t e 1.5 t até 10 mm; 3 t e 2 t acima disso.

## Os tamanhos

Cada tamanho que as tabelas listam nestes grupos, do menor para o maior:

| Grupo | Tamanhos |
|---|---|
| Perfis W (289) | W4x13 a W44x408 |
| Perfis S (28) | S3x5.7 a S24x121 |
| Perfis U (C) (32) | C3x3.5 a C15x50 |
| Cantoneiras de abas iguais (61) | L2x2x1/8 a L12x12x1-3/8 |
| HSS, retangular e quadrado (525) | HSS1-1/2x1-1/2x1/8 a HSS34x10x1 |
| HSS, redondo (189) | HSS1.660x0.140 a HSS28.000x1.000 |
| Tubos (51) | Pipe1/2STD a Pipe26XS |
| IPE (18) | IPE80 a IPE600 |
| HEA (24) | HEA100 a HEA1000 |
| HEB (24) | HEB100 a HEB1000 |
| UPN (18) | UPN50 a UPN400 |
| Cantoneiras de abas desiguais (76) | L2-1/2x1-1/2x3/16 a L8x6x1 |
| UB (107) | UB127x76x13 a UB1016x305x584 |
| UC (46) | UC152x152x23 a UC356x406x1299 |
| PFC (16) | PFC100x50x10 a PFC430x100x64 |
| EA (42) | EA20x20x3.0 a EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 a UEA200x150x18.0 |
| SHS, laminado a quente (123) | SHS40x40x3.2 a SHS400x400x17.5 |
| RHS, laminado a quente (161) | RHS50x30x3.2 a RHS500x300x17.5 |
| CHS, laminado a quente (103) | CHS42.4x3.2 a CHS508.0x17.5 |
| CFSHS, conformado a frio (96) | CFSHS25x25x2.0 a CFSHS400x400x12.5 |
| CFRHS, conformado a frio (137) | CFRHS50x25x2.0 a CFRHS500x300x12.5 |
| CFCHS, conformado a frio (106) | CFCHS33.7x3.0 a CFCHS508.0x16.0 |

Uma cantoneira de abas desiguais espelhada é a mesma peça virada de ponta a ponta, como uma oficina faz a versão de mão oposta: seus furos, rebaixos e chapa de ligação vão junto.

Escolha uma ferramenta de inserção e um tamanho para ver sua altura, largura da mesa, espessura da alma e da mesa, raio de concordância, área (cm²), massa (kg/m) e fonte na caixa {{ui:Perfil}} do painel {{ui:Propriedades}}.

## O que cada forma pode fazer

| Forma | Furos | Rebaixos | Chapas de extremidade e de base | Arquivo NC | Desenho de fabricação |
|---|---|---|---|---|---|
| Perfis I (W, S, IPE, HEA, HEB, UB, UC, I personalizado) | Alma, mesa superior, mesa inferior | Sim | Chapas de extremidade: viga e pilar. Chapas de base: sim | Sim | Sim |
| Perfis U (C, UPN, PFC) | Alma, mesa superior, mesa inferior | Não | Somente chapas de base | Sim | Sim |
| HSS retangular, SHS, RHS | Parede lateral (alma), superior, inferior | Não | Somente chapas de base | Sim | Sim |
| HSS redondo, tubos, CHS | Ainda não | Não | Somente chapas de base | Sim | Sim |
| Cantoneiras (L, EA, UEA) | Ainda não | Não | Somente chapas de base | Sim | Sim |
| Chapas e barras chatas personalizadas | Face da chapa | Não | Não | Sim | Sim |

Para um tubo retangular, um furo na face "alma" atravessa as duas paredes laterais. O que cada arquivo NC contém está em [Campos do arquivo NC](topic:nc1-fields).

## Precisa de outro tamanho?

Adicione-o como um [perfil personalizado](topic:plates-and-profiles#add-a-custom-profile). O catálogo embutido ainda não pode ser editado pelo aplicativo.
