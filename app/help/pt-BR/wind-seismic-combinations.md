---
title: Vento, local sísmico e combinações ASCE 7
summary: Crie casos de carga de vento para um edifício rígido e fechado, obtenha os valores sísmicos de projeto de um local e crie as combinações ASCE 7, na guia Análise.
keywords: vento, carga de vento, asce 7, procedimento direcional, exposição, fechamento, sísmica, classe de local, ss, s1, sds, sd1, usgs, espectro de projeto, combinações de carga, lrfd, asd, kzt, kd, rajada
from: 676fcbf3
---

Três blocos na guia {{ui:Análise}} montam as entradas de vento e sísmicas de um pórtico e as combinam: {{ui:Cargas de vento (procedimento direcional ASCE 7)}}, {{ui:Local e sistema sísmico (ASCE 7)}} e {{ui:Combinações de carga ASCE 7}}. São auxílios: **não são uma verificação de norma; seu engenheiro revisa os resultados.**

## O que você vai fazer

Criar casos de carga de vento para um edifício rígido e fechado, obter os valores sísmicos de um local e criar as combinações que os usam. O modelo precisa de pavimentos, então execute a análise antes (veja [Esforços, reações e deslocamentos](topic:frame-analysis)).

## Passos

1. Abra a guia {{ui:Análise}} e escolha {{ui:Executar}}, para que os pavimentos e o tamanho do edifício sejam conhecidos. Se um bloco disser que não há pavimentos, escolha {{ui:Encontrar pavimentos}} nele.
2. Em {{ui:Cargas de vento (procedimento direcional ASCE 7)}}, escolha a {{ui:Edição}}, digite a {{ui:Velocidade básica do vento V}} do seu mapa de vento e escolha a {{ui:Unidade de velocidade}}, depois a {{ui:Exposição}} e o {{ui:Fechamento}}. Kzt, Kd, G, a elevação do terreno, o Cp de sotavento, a excentricidade e a direção também estão ali.
3. Leia a pressão em cada pavimento e a força em cada um deles na tabela, depois escolha {{ui:Gerar casos de vento}}. Os casos são +X, -X, +Y e -Y.
4. Em {{ui:Local e sistema sísmico (ASCE 7)}}, escolha a edição e digite Ss e S1 (SMS, SM1 e S1 para a ASCE 7-22), a classe de local de A a D, a categoria de risco e o sistema sísmico resistente a força. Ou digite a latitude e a longitude e escolha {{ui:Consultar no USGS (online)}}; o serviço online só é consultado quando você pressiona.
5. Leia Fa, Fv, SDS e SD1, R, Cd e Omega0 e o espectro de projeto, depois escolha {{ui:Usar no bloco sísmico}}. Escolha {{ui:Gerar casos sísmicos}} no bloco sísmico (veja [Verificar elementos de concreto e gerar cargas sísmicas](topic:concrete-and-seismic)).
6. Em {{ui:Combinações de carga ASCE 7}}, escolha o {{ui:Método}} (LRFD ou ASD) e escolha {{ui:Gerar combinações ASCE 7}}. Execute a análise de novo.

## Coisas a saber

- Vento: apenas edifício rígido e fechado, pelo procedimento direcional. Um edifício flexível precisa de um fator de rajada da norma, que o DetailCraft não gera.
- Classes de local E e F exigem um estudo do local e ainda não estão implementadas.
- Uma lista de fontes na parte inferior dos blocos informa de onde veio cada número e o que ficou de fora.
- A consulta ao USGS foi testada com um substituto, não com o serviço real.
