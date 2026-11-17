---
title: Armar um pilar de betão retangular
summary: Um exemplo trabalhado de detalhe de um pilar de betão retangular no DetailCraft: colocá-lo, dar-lhe varões longitudinais e cintas, ler as verificações, a emenda acima e as marcas dos varões, e desenhar a sua folha de fabrico.
keywords: pilar de betão, pilar retangular, armadura de pilar, varões longitudinais, varões verticais, cintas, estribos, grampos transversais, emenda por sobreposição, emenda, varões de espera, taxa de armadura do pilar, 1 por cento, 8 por cento, espaçamento das cintas, ACI 318-19 25.7.2, EN 1992-1-1 9.5, desenho de fabrico, marcas dos varões, 8C1, 3C2
from: aee2a3ca
---

Este tópico leva um pilar quadrado do nada até um detalhe verificado, desenhado e com lista de varões. As regras gerais para vigas, lajes e paredes estão em [Detalhar betão armado](topic:reinforced-concrete); esta é a parte do pilar, com números que pode reproduzir.

:::warning
O DetailCraft detalha os varões que lhe dá. Não os dimensiona. Os varões abaixo são valores iniciais do exemplo, não uma recomendação: o engenheiro responsável pelo projeto escolhe a dimensão, o número e o espaçamento.
:::

## O que é um pilar aqui

Um pilar retangular tem uma largura (ao longo do seu x local) e uma profundidade transversal (ao longo do seu y local), um recobrimento livre até às cintas, varões longitudinais em cada face e cintas fechadas. Rodá-lo roda tudo; as faces mantêm-se "face de largura" e "face de profundidade".

- Os varões longitudinais dão-se como o número numa face de largura e o número numa face de profundidade. Os varões de canto contam nas duas, por isso 3 e 3 dão 8 varões; 4 e 4 dão 12.
- As cintas são retângulos fechados com dois ganchos num canto, de 135° ou 90°. A primeira cinta fica a uma distância definida acima do piso (e abaixo da seguinte); as zonas de extremidade têm um espaçamento mais apertado, e o meio um mais largo.
- O que os varões fazem no topo: prolongar e emendar com os varões de cima, dobrar com ganchos de 90° para dentro do piso, ou parar sob o topo.

## O pilar trabalhado

Um pilar de 400 × 400 mm, 3600 mm entre o piso de cima e o piso de baixo, varões longitudinais #8, cintas #3, recobrimento livre de 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Abra o separador {{ui:Betão}} e defina os eixos e os níveis em que o pilar assenta (painel esquerdo).
2. Em {{ui:Adicionar por eixo}}, escolha {{ui:Pilar de betão}}, escolha a interseção de eixos e os dois níveis, defina {{ui:Largura (mm)}} e {{ui:Profundidade (mm)}} como 400 e escolha {{ui:Adicionar}}.
3. No painel {{ui:Propriedades}} defina:
   - {{ui:Recobrimento líquido (mm)}} 40;
   - {{ui:Varões longitudinais}} #8, {{ui:Varões numa face de largura}} 3, {{ui:Varões numa face de profundidade}} 3;
   - {{ui:Cintas}} #3, {{ui:Ganchos}} 135°, {{ui:Espaçamento entre (mm)}} 300, {{ui:Comprimento da zona de extremidade (mm)}} 600, {{ui:Espaçamento nas zonas de extremidade (mm)}} 150, {{ui:Primeiro a partir da face (mm)}} 50;
   - {{ui:Varões no topo}} {{ui:Prolongar e emendar com os varões de cima}}.

Cada alteração corresponde a um passo de anulação.

### O que obtém

| Parte | Resultado |
|---|---|
| Varões longitudinais | 8 varões #8 (um anel 3 × 3), cada um com 4375 mm: o pilar de 3600 mm mais uma emenda de 775 mm por cima |
| Emenda | 757 mm necessários para uma emenda à compressão (ACI 318-19 25.5.5.1, fy 420), 775 mm previstos: a necessidade arredondada para os 25 mm seguintes |
| Cintas | 17 cintas #3, cada uma com um comprimento de corte de cerca de 1359 mm, espaçadas 150 mm nas duas zonas de extremidade de 600 mm e 300 mm entre elas |
| Taxa de armadura | 2.5 % da secção bruta (limites de 1 % a 8 %, ACI 318-19 10.6.1.1) |
| Espaçamento livre dos varões | 112 mm (precisa de pelo menos 40 mm, ACI 318-19 25.2.3) |
| Espaçamento das cintas | 300 mm (permitido 400 mm: o menor de 16 diâmetros de varão, 48 diâmetros de cinta e a dimensão menor da secção, ACI 318-19 25.7.2.1) |
| Tamanho da cinta | #3 (mínimo de 9.5 mm, ACI 318-19 25.7.2.2) |

Todos estes valores estão na lista {{ui:Verificações}} do elemento; a emenda também está em {{ui:Emendas e amarração}}.

## Cintas transversais

Com uma só cinta perimetral, apenas os varões de canto ficam travados. O ACI 318-19 25.7.2.3 permite que um varão intermédio de uma face fique sem apoio se estiver a menos de 150 mm livres de um varão de canto. Com 3 varões numa face, como acima, isso cumpre-se. Com 4 ou mais varões numa face não se cumpre, e o DetailCraft avisa ({{ui:Verificações}} e {{ui:Problemas}}): são precisas «cintas transversais». **As cintas transversais ainda não são desenhadas**: acrescente-as à mão no desenho, ou escolha menos varões na face.

Para a EN 1992-1-1, o DetailCraft verifica a dimensão do varão (pelo menos 8 mm), o número de varões (pelo menos 4), a área de aço (de 0.2 % a 4 % da secção), o espaçamento livre e o espaçamento dos estribos (9.5.2 e 9.5.3).

## A emenda, a sapata e o pilar abaixo

- Quando **uma sapata do modelo fica sob o pilar**, o pilar emenda com os varões de espera da sapata, e essa emenda também é verificada.
- Quando **outro pilar do modelo fica por baixo dele**, emenda com os varões desse pilar.
- Dê a sua própria {{ui:Comprimento de emenda (mm, 0 = conforme necessário)}} para substituir; uma emenda mais curta do que a necessária é um problema e fica marcada com * na tabela.
- As emendas à compressão são usadas por omissão ({{ui:Emenda à compressão}} nas definições); escolha {{ui:Emenda à tração}} quando o pilar pode ficar em tração.

## Marcas, lista e folha de fabrico

Os varões idênticos partilham uma marca: os varões longitudinais do pilar de cima são 8C1, as suas cintas 17C2 (primeiro o número, depois a letra do tipo C de pilar e o número sequencial). Aparecem no separador {{ui:Mapa de dobragem}}, com o comprimento de corte e o peso, e no CSV de {{ui:Saída}} › {{ui:Mais}} › {{ui:Dobragem}}.

Escolha {{ui:Desenho de fabrico}} ao lado do pilar para obter uma folha com o pilar em alçado (cada varão, a sua marca, as zonas de cintas e a emenda cotados) e um corte a meio, seguido da folha de dobragem dos varões. Guarde {{ui:Esta folha em PDF}}.

## O que isto não faz

- Pilares redondos e espirais, e pilares que não sejam retangulares: não implementados.
- Cintas de canto e transversais dentro da secção, e pormenorização sísmica (ACI 318-19 capítulo 18): não implementados.
- Emendas em posições escolhidas por si, ou escalonadas: todos os varões emendam numa só secção.
- Se os varões chegam para a carga: isso é o dimensionamento do engenheiro.
