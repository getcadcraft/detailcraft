---
title: Stock do fornecedor e prazos de entrega
summary: Verifique se as barras de stock que a sua lista de corte compra constam da lista de stock de um fornecedor: há quantidade suficiente e quanto tempo é a espera?
keywords: fornecedor, stock, prazo de entrega, siderurgia, fabricante, disponibilidade, encomenda pendente, barras, aprovisionamento, fornecimento
from: 1373f5a3
---

O separador {{ui:Fornecimento}} procura cada perfil que a {{ui:Lista de corte}} compra numa lista de stock do fornecedor. O ficheiro fica no modelo; nada é enviado para lado nenhum.

## Adicionar o ficheiro do fornecedor

Prima {{ui:Adicionar um ficheiro do fornecedor}} e escolha um CSV do seu fornecedor (separado por vírgulas, ponto e vírgula ou tabulações). Precisa de uma coluna para o item ou perfil (Item, Name, Description, Section, SKU) e de uma coluna para o stock (In stock, Quantity, On hand) ou para o prazo de entrega. A unidade (each, metres, kilograms, tonnes), o preço, o fornecedor e uma data de reposição são lidos quando existe uma coluna para eles. Também se reconhecem expressões como "Out of stock", "In stock", "2-3 weeks" e "backorder". Podem guardar-se até cinco ficheiros; adicionar um ficheiro com o mesmo nome substitui o anterior.

## O que aparece

Para cada perfil que a lista de corte compra, a tabela mostra o que o modelo precisa, o que está em stock, o prazo de entrega, o fornecedor e um resultado:

- **Coberto:** há stock suficiente.
- **Em falta de:** o stock fica abaixo da necessidade. Se o stock ficar abaixo da necessidade e definir uma espera máxima, o prazo de entrega indica quanto tempo demora o resto.
- **Tarde demais:** não há valor de stock e o prazo de entrega é maior do que a espera que aceita.
- **Sem valor de stock:** o ficheiro não o indica.
- **Outra unidade:** o fornecedor indica o perfil numa unidade que o modelo não consegue calcular.

A necessidade do modelo é dada em barras (da lista de corte com nesting e com os seus comprimentos de barra em stock), em metros de barra comprados e em quilogramas (o peso por metro do perfil), usando a unidade do próprio ficheiro. Um perfil é associado pelo nome ("W16 X 26" e "w16x26" são o mesmo). Os perfis que não estão no ficheiro são listados.

Os perfis em falta e os que chegam tarde demais aparecem no painel {{ui:Problemas}}. Aqui não se encomenda nada.

## Limites

Os valores de stock e os prazos de entrega são os do ficheiro, à data em que foi criado. As chapas não são encaixadas, por isso não são procuradas. O ficheiro é apenas lido: qualquer instrução que contenha é só texto.
