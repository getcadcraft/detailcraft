---
title: Paneis de entramado de madeira e de aceiro lixeiro
summary: Enmarcar paneis de muros, pisos e cubertas en madeira ou en aceiro lixeiro, con cada peza, unha lista de cortes, un debuxo de taller e o material a mercar.
keywords: entramado, madeira, madeira aserrada, aceiro lixeiro, conformado en frío, montante, viguета, cabrio, dintel, montante de xamba, montante de apoio, peza curta, lista de cortes, debuxo de taller, panel
from: 3e38ffb9
---

A pestana {{ui:Entramado}} enmarca os paneis que describe e dálle a un equipo de carpintería e a un aserradeiro o que necesitan. Os paneis gárdanse no ficheiro do modelo.

:::warning
As dimensións, a separación e os dinteis son responsabilidade súa. DetailCraft non comproba que un montante a esa separación soporte ese muro nin que un dintel salve esa abertura: iso corresponde ás táboas da súa norma e ao seu enxeñeiro.
:::

## Engadir un panel

Escolla {{ui:Engadir unha parede}}, {{ui:Engadir un piso}} ou {{ui:Engadir unha cuberta}}, e despois cubra as dimensións en milímetros, o material (madeira ou aceiro lixeiro) e o tamaño da peza. Os tamaños de madeira son os nomes nominais cos seus tamaños cepillados (2×4 é 38 × 89 mm). Os montantes de aceiro nomeanse pola altura e o espesor, por exemplo `C92-1.2`.

## Muros

Un muro ten unha solera inferior, unha ou máis soleiras superiores (unha guía, no caso do aceiro), montantes de extremo, montantes á separación que indique, e para cada abertura: dous montantes de xamba, dous montantes de apoio, un dintel do tamaño e das capas que escolla, e pezas curtas enriba do dintel (e debaixo do peitoril dunha xanela). Dea a cada abertura a súa distancia desde o extremo esquerdo, a súa largura, e a parte superior e inferior da abertura en bruto medidas desde o subsolo; unha porta ten unha base de 0.

## Pisos e cubertas

Un piso ten vigoetas transversais ao seu ancho ao longo do seu ván, vigas de bordo en ambos extremos e, se o marca, bloqueos a medio ván. Un panel de cuberta é un a dúas augas: un par de cabrios á separación que indique (a súa lonxitude inclúe o aleiro ao longo da pendente) e unha cumieira.

## O que obtén

Cada panel amosa as súas pezas nun debuxo a escala con cada peza marcada, unha lista de cortes por marca e un total. A táboa {{ui:Material a mercar}} agrupa todos os cortes dos paneis en lonxitudes comerciais de material, a máis curta que admite os cortes de cada barra. {{ui:Gardar o debuxo de taller (SVG)}} escribe o debuxo; o botón {{ui:CSV}} escribe todas as listas de cortes e a lista de material.

## Colocar un panel no modelo

Debaixo de cada panel, indique onde vai (x, y, z en milímetros e o ángulo) e prema {{ui:Colocar como barras}}: cada peza convértese nunha barra do modelo, coa sección cepillada do seu tamaño e co peso do material (uns 500 kg/m³ para a madeira, aceiro para os montantes). Un muro vai ao longo do ángulo desde o seu extremo inferior esquerdo, coa base en z; as vigoetas dun piso quedan coa cara inferior en z; a elevación de cuberta a dúas augas vai ao longo do ángulo, con z na parte superior das soleiras do muro. Cada capa de dintel é unha barra colocada xunto á outra. Premelo de novo substitúe as barras colocadas antes, e {{ui:Eliminar as barras colocadas}} as retira; cada acción é un paso de desfacer. A Análise deixa estas barras fóra: non son barras de pórtico de aceiro.

## Paneis en PDF

{{ui:Follas PDF}} garda unha páxina A3 por cada panel: o panel a escala con cada peza marcada, as dimensións totais, a lista de cortes e unha franxa de título.

Problemas no panel {{ui:Problemas}}: unha abertura demasiado preto do extremo dun muro ou doutra abertura, un dintel que non cabe debaixo das soleiras superiores, unha peza máis longa que o material máis longo.

O panel {{ui:Problemas}} tamén enumera **Interfaces (LOD 350)** para os paneis de muro e os muros de formigón: unha abertura que pasa do extremo ou da parte superior do seu muro, dúas aberturas que se solapan, e unha abertura nun muro de formigón máis ancha que 1000 mm sen barra de bordo de oco. Son recomendacións, as mesmas regras que executa a auditoría de BimCraft; a largura é o valor inicial de CadCraft, non unha norma.
