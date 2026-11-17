---
title: Estoque do fornecedor e prazos de entrega
summary: Confira as barras de estoque que sua lista de corte compra contra a lista de estoque de um fornecedor: há o suficiente, e quanto tempo é a espera?
keywords: fornecedor, estoque, prazo de entrega, pátio de aço, usina, disponibilidade, pedido pendente, barras, compras, fornecimento
from: 1373f5a3
---

A aba {{ui:Fornecimento}} consulta cada seção que a {{ui:Lista de corte}} compra em uma lista de estoque de fornecedor. O arquivo fica no modelo; nada é enviado a lugar nenhum.

## Adicionar o arquivo do fornecedor

Pressione {{ui:Adicionar um arquivo de fornecedor}} e escolha um CSV do seu fornecedor (separado por vírgula, ponto e vírgula ou tabulação). Ele precisa de uma coluna para o item ou a seção (Item, Name, Description, Section, SKU) e uma para o estoque (In stock, Quantity, On hand) ou para o prazo de entrega. A unidade (each, metres, kilograms, tonnes), o preço, o fornecedor e uma data de reposição são lidos quando há uma coluna para eles. Textos também são entendidos: "Out of stock", "In stock", "2-3 weeks", "backorder". Até cinco arquivos podem ser mantidos; adicionar um arquivo com o mesmo nome o substitui.

## O que aparece

Para cada seção que a lista de corte compra, a tabela mostra o que o modelo precisa, o que há em estoque, o prazo de entrega, o fornecedor e um resultado:

- **Coberto:** há o suficiente em estoque.
- **Faltam:** o estoque é menor que a necessidade. Se o estoque for menor que a necessidade e você definir uma espera máxima, o prazo de entrega mostra quanto tempo leva o restante.
- **Atrasado demais:** não há quantidade em estoque e o prazo de entrega é maior que a espera que você aceita.
- **Sem quantidade em estoque:** o arquivo não informa.
- **Outra unidade:** o fornecedor lista a seção em uma unidade que o modelo não consegue calcular.

O que o modelo precisa é dado em barras (da lista de corte aninhada, com os seus comprimentos de estoque), em metros de barra comprada e em quilogramas (o peso da seção por metro), e a unidade própria do arquivo é usada. Uma seção é reconhecida pelo nome ("W16 X 26" e "w16x26" são iguais). Seções que não estão no arquivo são listadas.

Faltas e seções atrasadas aparecem no painel {{ui:Problemas}}. Nada aqui faz pedidos de compra.

## Limites

As quantidades em estoque e os prazos de entrega são os do arquivo, na data em que ele foi feito. As chapas não são aninhadas, então não são consultadas. O arquivo só é lido: qualquer instrução nele é apenas texto.
