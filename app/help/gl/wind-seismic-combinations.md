---
title: Vento, emprazamento sísmico e combinacións ASCE 7
summary: Crear casos de carga de vento para un edificio pechado e ríxido, calcular os valores de deseño sísmico dun emprazamento e crear as combinacións ASCE 7, na pestana Análise.
keywords: vento, carga de vento, asce 7, procedemento direccional, exposición, cerramento, sísmico, clase de emprazamento, ss, s1, sds, sd1, usgs, espectro de deseño, combinacións de cargas, lrfd, asd, kzt, kd, racha
from: 676fcbf3
---

Tres bloques da pestana {{ui:Análise}} crean as entradas de vento e sísmicas dun pórtico e combínaas: {{ui:Cargas de vento (procedemento direccional ASCE 7)}}, {{ui:Emprazamento e sistema sísmico (ASCE 7)}} e {{ui:Combinacións de cargas ASCE 7}}. Son axudas: **non son unha comprobación normativa; o seu enxeñeiro revisa os resultados.**

## O que vai facer

Crear casos de carga de vento para un edificio pechado e ríxido, tomar os valores sísmicos dun emprazamento e crear as combinacións que os usan. O modelo necesita pisos, así que execute primeiro a análise (vexa [Forzas, reaccións e frechas](topic:frame-analysis)).

## Pasos

1. Abra a pestana {{ui:Análise}} e prema {{ui:Executar}}, para que se coñezan os pisos e o tamaño do edificio. Se un bloque di que non hai pisos, prema {{ui:Buscar pisos}} nel.
2. En {{ui:Cargas de vento (procedemento direccional ASCE 7)}}, escolla a {{ui:Edición}}, escriba a {{ui:Velocidade básica do vento V}} do seu mapa de vento e escolla a súa {{ui:Unidade de velocidade}}; logo a {{ui:Exposición}} e o {{ui:Cerramento}}. Kzt, Kd, G, a elevación do terreo, o Cp de sotavento, a excentricidade e a dirección tamén están aí.
3. Lea a presión en cada piso e a forza en cada piso na táboa, e logo prema {{ui:Crear casos de vento}}. Os casos son +X, -X, +Y e -Y.
4. En {{ui:Emprazamento e sistema sísmico (ASCE 7)}}, escolla a edición e escriba Ss e S1 (SMS, SM1 e S1 para ASCE 7-22), a clase de emprazamento de A a D, a categoría de risco e o sistema sísmico resistente ás forzas. Ou escriba a latitude e a lonxitude e prema {{ui:Consultar en USGS (en liña)}}; só consulta o servizo en liña cando o preme.
5. Lea Fa, Fv, SDS e SD1, R, Cd e Omega0 e o espectro de deseño, e logo prema {{ui:Usar no bloque sísmico}}. Prema {{ui:Crear casos sísmicos}} no bloque sísmico (vexa [Comprobar elementos de formigón e crear cargas sísmicas](topic:concrete-and-seismic)).
6. En {{ui:Combinacións de cargas ASCE 7}}, escolla o {{ui:Método}} (LRFD ou ASD) e prema {{ui:Crear combinacións ASCE 7}}. Volva executar a análise.

## Cousas que cómpre saber

- Vento: só para edificios pechados e ríxidos, co procedemento direccional. Un edificio flexible necesita un factor de racha da norma, que DetailCraft non calcula.
- As clases de emprazamento E e F requiren un estudo do solo e non están incluídas.
- Unha lista de fontes ao pé dos bloques indica de onde vén cada número e que se deixou fóra.
- A consulta a USGS probouse cun substituto, non co servizo en produción.
