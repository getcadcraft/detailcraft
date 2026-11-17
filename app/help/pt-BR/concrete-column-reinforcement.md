---
title: Armar um pilar de concreto retangular
summary: Um exemplo resolvido de detalhamento de um pilar de concreto retangular no DetailCraft: posicione-o, dê-lhe barras longitudinais e grampos, leia as verificações, o transpasse acima dele e as marcas das barras, e desenhe sua folha de fabricação.
keywords: pilar de concreto, pilar retangular, armadura de pilar, barras longitudinais, barras verticais, grampos, estribos, grampos transversais, emenda por transpasse, transpasse, barras de espera, taxa de aço do pilar, 1 por cento, 8 por cento, espaçamento de grampos, ACI 318-19 25.7.2, EN 1992-1-1 9.5, desenho de fabricação, marcas de barras, 8C1, 3C2
from: aee2a3ca
---

Este tópico leva um pilar quadrado do zero a um detalhe verificado, desenhado e com lista de barras. As regras gerais para vigas, lajes e paredes estão em [Detalhar concreto armado](topic:reinforced-concrete); esta é a parte do pilar, com números que você pode reproduzir.

:::warning
O DetailCraft detalha as barras que você informa. Ele não as dimensiona. As barras abaixo são valores iniciais para o exemplo, não uma recomendação: o engenheiro responsável escolhe o tamanho, a quantidade e o espaçamento.
:::

## O que é um pilar aqui

Um pilar retangular tem uma largura (ao longo do x local) e uma profundidade (ao longo do y local), um cobrimento livre até os grampos, barras longitudinais em cada face e grampos fechados. Girá-lo gira tudo; as faces continuam "face da largura" e "face da profundidade".

- As barras longitudinais são dadas como o número em uma face da largura e o número em uma face da profundidade. As barras de canto contam nas duas, então 3 e 3 dão 8 barras; 4 e 4 dão 12.
- Os grampos são retângulos fechados com dois ganchos em um canto, de 135° ou 90°. O primeiro grampo fica a uma distância definida acima do piso (e abaixo do próximo); as zonas de extremidade têm espaçamento menor, e o meio tem um maior.
- O que as barras fazem no topo: prolongar e transpassar com as barras de cima, dobrar com ganchos de 90° no piso, ou parar sob o topo.

## O pilar trabalhado

Um pilar de 400 × 400 mm, 3600 mm entre o piso de cima e o piso de baixo, barras longitudinais #8, grampos #3, cobrimento livre de 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, interno.

1. Abra a guia {{ui:Concreto}} e defina os eixos e níveis sobre os quais o pilar se apoia (painel esquerdo).
2. Em {{ui:Adicionar por eixo}}, escolha {{ui:Pilar de concreto}}, selecione a interseção de eixos e os dois níveis, defina {{ui:Largura (mm)}} e {{ui:Profundidade (mm)}} como 400 e escolha {{ui:Adicionar}}.
3. No painel {{ui:Propriedades}}, defina:
   - {{ui:Cobrimento livre (mm)}} 40;
   - {{ui:Barras longitudinais}} #8, {{ui:Barras em uma face da largura}} 3, {{ui:Barras em uma face da altura}} 3;
   - {{ui:Grampos}} #3, {{ui:Ganchos}} 135°, {{ui:Espaçamento entre (mm)}} 300, {{ui:Comprimento da zona de extremidade (mm)}} 600, {{ui:Espaçamento nas zonas de extremidade (mm)}} 150, {{ui:Primeiro a partir da face (mm)}} 50;
   - {{ui:Barras no topo}} {{ui:Prolongar e transpassar com as barras de cima}}.

Cada alteração é um passo de desfazer.

### O que você obtém

| Parte | Resultado |
|---|---|
| Barras longitudinais | 8 barras #8 (um anel 3 × 3), cada uma com 4375 mm: o pilar de 3600 mm mais um transpasse de 775 mm acima dele |
| Transpasse | 757 mm necessários para um transpasse à compressão (ACI 318-19 25.5.5.1, fy 420), 775 mm fornecidos: a necessidade arredondada para cima em 25 mm |
| Grampos | 17 grampos #3, cada um com comprimento de corte de cerca de 1359 mm, espaçados 150 mm nas duas zonas de extremidade de 600 mm e 300 mm entre elas |
| Taxa de aço | 2.5 % da seção bruta (limites de 1 % a 8 %, ACI 318-19 10.6.1.1) |
| Espaçamento livre das barras | 112 mm (precisa de pelo menos 40 mm, ACI 318-19 25.2.3) |
| Espaçamento dos grampos | 300 mm (permitido 400 mm: o menor entre 16 diâmetros de barra, 48 diâmetros de grampo e o lado menor, ACI 318-19 25.7.2.1) |
| Tamanho do grampo | #3 (permitido até 9.5 mm, ACI 318-19 25.7.2.2) |

Todos estes itens estão na lista {{ui:Verificações}} do elemento; o transpasse também está em {{ui:Transpasses e ancoragem}}.

## Grampos transversais

Com um único grampo perimetral, só as barras de canto são seguradas. A ACI 318-19 25.7.2.3 permite que uma barra intermediária em uma face fique sem apoio se estiver a até 150 mm livres de uma barra de canto. Com 3 barras em uma face, como acima, isso é atendido. Com 4 ou mais barras em uma face não é, e o DetailCraft avisa ({{ui:Verificações}} e Problemas): "grampos transversais" são necessários. **Os grampos transversais ainda não são desenhados**: adicione-os à mão no desenho, ou escolha menos barras na face.

Para EN 1992-1-1, o DetailCraft verifica o tamanho da barra (pelo menos 8 mm), o número de barras (pelo menos 4), a área de aço (0.2 % a 4 % da seção), o espaçamento livre e o espaçamento dos estribos (9.5.2 e 9.5.3).

## O transpasse, a sapata e o pilar de baixo

- Onde **uma sapata do modelo fica sob o pilar**, o pilar transpassa com as barras de espera da sapata, e esse transpasse também é verificado.
- Onde **outro pilar do modelo fica sob ele**, ele transpassa com as barras desse pilar.
- Informe seu próprio {{ui:Comprimento do transpasse (mm, 0 = conforme necessário)}} para sobrescrever; um valor menor que o necessário é um problema e fica marcado com * na tabela.
- Transpasses à compressão são usados por padrão ({{ui:Transpasse à compressão}} nas configurações); escolha {{ui:Transpasse à tração}} quando o pilar puder ficar tracionado.

## Marcas, lista e folha de fabricação

Barras idênticas compartilham uma marca: as barras longitudinais do pilar de cima são 8C1, seus grampos 17C2 (o número primeiro, depois a letra do tipo C para pilar e o número sequencial). Elas aparecem na guia {{ui:Tabela de dobramento}}, com o comprimento de corte e o peso, e no CSV de {{ui:Saída}} › {{ui:Mais}} › {{ui:Dobramento}}.

Escolha {{ui:Desenho de fabricação}} ao lado do pilar para uma folha com o pilar em elevação (cada barra, sua marca, as zonas de grampos e o transpasse cotados) e um corte no meio, seguido da folha de dobramento das barras. Salve {{ui:Esta folha em PDF}}.

## O que isto não faz

- Pilares redondos e espirais, e pilares que não são retangulares: não implementados.
- Grampos de canto e transversais dentro da seção, e detalhamento sísmico (ACI 318-19 capítulo 18): não implementados.
- Emendas em posições que você escolhe, ou escalonadas: todas as barras transpassam em uma única seção.
- Se as barras bastam para a carga: isso é o projeto do engenheiro.
