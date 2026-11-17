---
title: Vento, local sísmico e combinações ASCE 7
summary: Criar casos de carga de vento para um edifício rígido fechado, calcular os valores sísmicos de projeto para um local e criar as combinações ASCE 7, no separador Análise.
keywords: vento, carga de vento, asce 7, procedimento direcional, exposição, fecho, sísmico, classe de local, ss, s1, sds, sd1, usgs, espetro de projeto, combinações de carga, lrfd, asd, kzt, kd, rajada
from: 676fcbf3
---

Três blocos do separador {{ui:Analysis}} preparam os dados de vento e sísmicos de um pórtico e combinam-nos: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} e {{ui:ASCE 7 load combinations}}. São ajudas: **não são uma verificação de norma; o seu engenheiro revê os resultados.**

## O que vai fazer

Criar casos de carga de vento para um edifício rígido e fechado, obter os valores sísmicos de um local e criar as combinações que os utilizam. O modelo precisa de pisos, por isso execute primeiro a análise (ver [Forças, reações e deformações](topic:frame-analysis)).

## Passos

1. Abra o separador {{ui:Analysis}} e escolha {{ui:Run}}, para que os pisos e a dimensão do edifício fiquem conhecidos. Se um bloco disser que não há pisos, escolha {{ui:Find floors}} nele.
2. Em {{ui:Wind loads (ASCE 7 directional procedure)}}, escolha a {{ui:Edition}}, escreva a {{ui:Basic wind speed V}} do seu mapa de vento e escolha a sua {{ui:Speed unit}}, depois a {{ui:Exposure}} e o {{ui:Enclosure}}. Kzt, Kd, G, a cota do terreno, o Cp a sotavento, a excentricidade e a direção também lá estão.
3. Leia a pressão em cada piso e a força em cada piso na tabela, e escolha {{ui:Make wind cases}}. Os casos são +X, -X, +Y e -Y.
4. Em {{ui:Seismic site and system (ASCE 7)}}, escolha a edição e escreva Ss e S1 (SMS, SM1 e S1 para a ASCE 7-22), a classe de local de A a D, a categoria de risco e o sistema sísmico de resistência à força. Ou escreva a latitude e a longitude e escolha {{ui:Look up from USGS (online)}}; só consulta o serviço online quando o premir.
5. Leia Fa, Fv, SDS e SD1, R, Cd e Omega0 e o espetro de projeto, e escolha {{ui:Use in the Seismic block}}. Prima {{ui:Make seismic cases}} no bloco sísmico (ver [Verificar elementos de betão e criar cargas sísmicas](topic:concrete-and-seismic)).
6. Em {{ui:ASCE 7 load combinations}}, escolha o {{ui:Method}} (LRFD ou ASD) e escolha {{ui:Make ASCE 7 combinations}}. Execute a análise outra vez.

## Coisas a saber

- Vento: apenas para um edifício rígido e fechado, pelo procedimento direcional. Um edifício flexível precisa de um fator de rajada da norma, que o DetailCraft não calcula.
- As classes de local E e F exigem um estudo do local e ainda não estão implementadas.
- Uma lista de fontes no fim dos blocos indica de onde vem cada valor e o que ficou de fora.
- A consulta ao USGS foi testada num substituto, e não no serviço real.
