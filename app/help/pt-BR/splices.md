---
title: Emendas
summary: Una duas peças de uma viga ou de um pilar ponta a ponta, com chapas de cobertura parafusadas nas mesas e na alma.
keywords: emenda, emenda de viga, emenda de pilar, chapa de cobertura, chapa de emenda, chapa de mesa, chapa de alma, emenda parafusada, junta, lance, conectar
from: 97d141c2
---

Uma emenda parafusada une duas peças de um perfil I, ponta a ponta: uma chapa de cobertura do lado externo de cada mesa e uma chapa em cada lado da alma, parafusadas através das duas peças. O DetailCraft recorta as peças até a folga, posiciona as quatro chapas, fura as chapas e as duas peças, adiciona os parafusos e avisa sobre distâncias até a borda, espaçamento e encaixe.

## Onde funciona

- Duas vigas, ou dois lances de pilar, do **mesmo perfil I**, encontrando-se **ponta a ponta e alinhadas**: as extremidades a no máximo 50 mm uma da outra, as peças paralelas e na mesma linha (dentro de 1 mm). Qualquer uma das peças pode ser desenhada em qualquer direção.
- Peças horizontais, inclinadas ou verticais funcionam.
- Duas peças de profundidade ou largura de mesa diferentes são recusadas, assim como perfis U, cantoneiras e tubos.

## Adicionar emendas

1. Desenhe as duas peças de modo que se encontrem ponta a ponta. Para dividir uma barra já desenhada, desenhe-a novamente como duas peças.
2. Selecione uma (ou as duas) e escolha {{ui:Emenda}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}.
3. Cada junta livre das peças selecionadas com outra peça do mesmo perfil recebe uma emenda. A barra de status informa quantas.

Selecione a emenda (clique em uma de suas chapas) para alterar as configurações dela no painel da direita. {{ui:Aplicar a semelhantes (n)}} copia a emenda para todas as outras juntas livres entre peças do mesmo perfil.

## Configurações (mm)

| Configuração | Padrão | O que faz |
|---|---|---|
| Folga entre as extremidades | 10 | Cada peça é recortada em metade dela |
| Diâmetro do parafuso, furo, classe, folga de comprimento | 20, 22, A325, 30 | Como nas chapas de extremidade |
| Espessura da chapa de mesa | 12 | A chapa tem a largura da mesa |
| Linhas de parafusos da mesa (de cada lado) | 3 | Linhas através da mesa, de cada lado da junta |
| Espaçamento dos parafusos da mesa | 75 | Ao longo da peça |
| Gabarito dos parafusos da mesa | 0 | Entre as duas linhas de parafusos; 0 = largura da mesa menos 80 |
| Distância da extremidade à mesa | 40 | Da extremidade da peça até o primeiro parafuso, e do último parafuso até a extremidade da chapa |
| Espessura da chapa de alma | 8 | Uma de cada lado da alma |
| Linhas de parafusos da alma | 3 | Ao longo da alma, centralizadas |
| Colunas de parafusos da alma (de cada lado) | 2 | Ao longo da peça, de cada lado da junta |
| Espaçamento dos parafusos da alma, na alma / ao longo da peça | 75, 75 | |
| Distância da extremidade à alma | 40 | Como nas mesas |
| Altura da chapa de alma | 0 | 0 = a alma livre entre as concordâncias, menos 10 no topo e na base |
| Material da chapa | A36 | Texto |

O comprimento das chapas decorre dos parafusos: chapa de mesa = folga + 2 × (2 × distância da extremidade + (linhas − 1) × espaçamento); as chapas de alma seguem o mesmo cálculo com as colunas. Com os valores padrão, as chapas de mesa têm 470 de comprimento.

## Bom saber

- As chapas pertencem à **primeira peça desenhada** das duas (nas propriedades ela aparece como primeira peça): elas aparecem no desenho de montagem dela e são fornecidas com ela, parafusadas, não soldadas. O desenho de montagem da segunda peça mostra apenas os furos dela.
- Os parafusos da mesa prendem a mesa e a chapa dela; os parafusos da alma prendem a alma e as duas chapas de alma. O comprimento dos parafusos aparece listado à parte nas propriedades.
- Os avisos usam os mesmos mínimos da EN 1993-1-8 das outras ligações (distância da extremidade e até a borda 1.2 × furo, espaçamento 2.2 × furo na direção da peça e 2.4 × furo na transversal), além de avisos para uma chapa de alma mais profunda que a alma livre e para parafusos da mesa muito próximos da alma em relação à concordância.
- O DetailCraft não dimensiona a emenda (sem verificação de resistência) e não faz chapas de enchimento para peças de espessuras diferentes.
- Copiar as duas peças copia a emenda delas; excluir qualquer uma das peças exclui a emenda.
