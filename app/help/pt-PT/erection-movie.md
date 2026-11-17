---
title: Plano de montagem e filme
summary: Introduza uma grua e a sua tabela de cargas, veja cada elevação verificada contra a tabela por ordem de fase, e guarde um filme de montagem que se reproduz offline em qualquer telemóvel.
keywords: montagem, grua, elevação, tabela de cargas, raio, capacidade, aparelho de elevação, sequência, filme, animação, telemóvel, offline, plano de elevação
from: fa7b0133
---

O separador {{ui:Montagem}} transforma o modelo numa ordem de montagem e verifica cada elevação contra uma grua que descreve. Planeia a partir de números que escreve. Não é um plano de elevação: esse é feito pelo aparelhador e pelo operador da grua.

## Descrever a grua

Escolha {{ui:Adicionar uma grua}} e preencha:

- **Centro X e Y da grua:** onde a grua está, em milímetros.
- **Gancho mais alto:** o máximo que o gancho pode subir, em milímetros. 0 significa que nenhum limite é verificado.
- **Moitão e aparelho de elevação não incluídos na tabela:** quilogramas retirados da tabela antes de se somar uma carga, quando a sua tabela ainda não o faz.
- **Tabela de cargas:** uma linha por linha, com o raio em metros e depois a capacidade em quilogramas. Copie as linhas da tabela da própria grua.

A tabela lê-se como se lê uma tabela de cargas: a capacidade indicada para um raio mantém-se até esse raio. Uma carga a um raio entre duas linhas recebe a capacidade da linha **mais afastada**, nunca um valor entre elas. Dentro da primeira linha, mantém-se a capacidade da primeira linha. Para além da última linha, a grua não consegue elevar nada. O raio que conta para uma elevação é o maior entre o raio de recolha e o raio de assentamento.

Uma segunda grua acrescenta-se da mesma forma. Cada elevação vai para a primeira grua que a consegue fazer dentro da sua margem.

## O que o plano faz

- Uma elevação por montagem: uma viga com as suas chapas de topo, um pilar com a sua chapa de base, uma escada.
- A ordem segue primeiro as fases e depois nível a nível: pilares, as vigas que eles suportam, contraventamentos, chapas, escadas. Uma peça nunca é elevada antes daquilo que a suporta.
- Cada elevação mostra o seu peso (o peso bruto do modelo, mais {{ui:Aparelho de elevação somado a cada peso}}), o seu raio, a parte da tabela que usa e o minuto em que começa.
- {{ui:Parte máxima da tabela que uma elevação pode usar}} é a sua margem de segurança. Uma elevação acima dela é marcada como **Acima da sua margem**; acima da tabela, **Acima da tabela**; para além do último raio da tabela, **Para além da tabela**; e uma peça mais alta do que o gancho, **Gancho demasiado baixo**.

Os furos e recortes não são deduzidos aos pesos, e os parafusos ficam cobertos pela percentagem de aparelho de elevação.

## Problemas

Cada elevação que esteja acima, para além, alta demais ou agendada antes da peça que a suporta aparece no painel {{ui:Problemas}}. Uma viga sem ligação que a suporte aparece como a necessitar de apoio provisório.

## Guardar o filme

{{ui:Guardar filme}} escreve um único ficheiro HTML. Abra-o em qualquer navegador, também num telemóvel, sem rede e sem conta: reproduzir e pausar, arrastar a barra para qualquer minuto, rodar o modelo com um dedo, pinçar para ampliar. A legenda indica cada elevação, o seu peso, raio e parte da tabela. O modelo é desenhado como caixas simples: mostra a ordem e as elevações, não os perfis reais.

A mesma tabela guarda-se como CSV com o botão {{ui:CSV}}. A grua e a tabela ficam guardadas no ficheiro do modelo, e cada alteração é um passo de anulação.
