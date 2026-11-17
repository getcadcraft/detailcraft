---
title: Existencias de provedores e prazos de entrega
summary: Comprobe as barras en existencia que compra a lista de cortes contra a lista de existencias dun provedor: hai o suficiente, e canto hai que esperar?
keywords: provedor, existencias, prazo de entrega, acerería, fábrica, dispoñibilidade, pedido pendente, barras, aprovisionamento, subministración
from: 1373f5a3
---

A lapela {{ui:Subministración}} busca cada perfil que a {{ui:Lista de cortes}} compra na lista de existencias dun provedor. O ficheiro permanece no modelo; non se envía nada a ningures.

## Engadir o ficheiro do provedor

Prema {{ui:Engadir un ficheiro de provedor}} e escolla un CSV do seu provedor (separado por comas, punto e coma ou tabulador). Necesita unha columna para o elemento ou perfil (Item, Name, Description, Section, SKU) e outra para as existencias (In stock, Quantity, On hand) ou para o prazo de entrega. A unidade (each, metres, kilograms, tonnes), o prezo, o provedor e unha data de reposición lense cando hai unha columna para eles. Tamén se entenden expresións como "Out of stock", "In stock", "2-3 weeks" e "backorder". Pódense gardar ata cinco ficheiros; engadir un ficheiro co mesmo nome substitúeo.

## Que se ve

Para cada perfil que compra a lista de cortes, a táboa mostra o que precisa o modelo, o que hai en existencia, o prazo de entrega, o provedor e un resultado:

- **Cuberto:** hai existencias suficientes.
- **Faltan:** as existencias están por debaixo do necesario. Se as existencias están por debaixo do necesario e fixa unha espera máxima, o prazo de entrega indica canto tarda o resto.
- **Demasiado tarde:** non hai cifra de existencias e o prazo é máis longo que a espera que acepta.
- **Sen cifra de existencias:** o ficheiro non o indica.
- **Outra unidade:** o provedor indica o perfil nunha unidade que o modelo non pode dar.

O que precisa o modelo exprésase en barras (da lista de cortes aniñada, coas súas lonxitudes de existencia), en metros de barra comprada e en quilogramos (o peso do perfil por metro), e úsase a unidade propia do ficheiro. Un perfil identifícase polo seu nome ("W16 X 26" e "w16x26" son o mesmo). Os perfís que non están no ficheiro aparecen listados.

As faltas e os perfís con entrega tardía aparecen no panel {{ui:Problemas}}. Aquí non se pide nada.

## Límites

As cifras de existencias e os prazos de entrega son os do ficheiro, na data en que se fixo. As placas non se aniñan, así que non se buscan. O ficheiro só se le: calquera instrución que conteña é só texto.
