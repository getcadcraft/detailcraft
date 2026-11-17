---
title: Plano de montagem e filme
summary: Informe um guindaste e sua tabela de carga, veja cada içamento verificado contra a tabela na ordem das fases, e salve um filme de montagem que roda offline em qualquer celular.
keywords: montagem, guindaste, içamento, tabela de carga, raio, capacidade, amarração, sequência, filme, animação, celular, offline, plano de içamento
from: fa7b0133
---

A guia {{ui:Montagem}} transforma o modelo em uma ordem de montagem e verifica cada içamento contra um guindaste que você descreve. Ela planeja a partir de números que você digita. Não é um plano de içamento: o amarrador e o operador do guindaste o fazem.

## Descrever o guindaste

Escolha {{ui:Adicionar um guindaste}} e preencha:

- **Centro X e Y do guindaste:** onde o guindaste está, em milímetros.
- **Gancho mais alto:** o máximo que o gancho pode subir, em milímetros. 0 significa que nenhum limite é verificado.
- **Moitão e amarração que não estão na tabela:** quilogramas descontados da tabela antes de adicionar uma carga, quando sua tabela ainda não faz isso.
- **Tabela de carga:** uma linha por vez, com o raio em metros e depois a capacidade em quilogramas. Copie as linhas da tabela do próprio guindaste.

A tabela é lida da mesma forma que uma tabela de carga é lida: a capacidade listada para um raio vale até esse raio. Uma carga em um raio entre duas linhas recebe a capacidade da linha **mais distante**, nunca um valor entre elas. Dentro da primeira linha, vale a capacidade da primeira linha. Além da última linha, o guindaste não consegue içar nada. O raio que conta para um içamento é o maior entre o raio de tomada da carga e o raio de assentamento.

Um segundo guindaste é adicionado do mesmo modo. Cada içamento vai para o primeiro guindaste que consegue executá-lo dentro da sua margem.

## O que o plano faz

- Um içamento por montagem: uma viga com suas chapas de extremidade, um pilar com sua chapa de base, uma escada.
- A ordem segue primeiro as fases, depois nível a nível: pilares, as vigas que eles sustentam, contraventamentos, chapas, escadas. Uma peça nunca é içada antes do que a sustenta.
- Cada içamento mostra seu peso (o peso bruto do modelo, mais {{ui:Amarração adicionada a cada peso}}), seu raio, a parcela da tabela que usa e o minuto em que começa.
- {{ui:Parte máxima da tabela que um içamento pode usar}} é sua margem de segurança. Um içamento acima dela é marcado como **Acima da sua margem**; acima da tabela, **Acima da tabela**; além do último raio da tabela, **Além da tabela**; e uma peça mais alta que o gancho, **Gancho baixo demais**.

Furos e recortes não são descontados dos pesos, e os parafusos ficam cobertos pela porcentagem de amarração.

## Problemas

Todo içamento que esteja acima, além, alto demais ou previsto antes do que o sustenta aparece no painel {{ui:Problemas}}. Uma viga sem ligação para sustentá-la é listada como precisando de escoramento provisório.

## Salvar o filme

{{ui:Salvar filme}} grava um arquivo HTML. Abra-o em qualquer navegador, também em um celular, sem rede e sem conta: reproduza e pause, arraste a barra até qualquer minuto, gire o modelo com o dedo, aproxime com pinça. A legenda identifica cada içamento, seu peso, seu raio e sua parcela da tabela. O modelo é desenhado como caixas simples: mostra a ordem e os içamentos, não os perfis reais.

A mesma tabela é salva como CSV pelo botão {{ui:CSV}}. O guindaste e a tabela são salvos no arquivo do modelo, e cada alteração é uma etapa de desfazer.
