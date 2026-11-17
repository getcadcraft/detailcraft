---
title: Emendas
summary: Una duas peças de uma viga ou de um pilar, extremo a extremo, com chapas de cobertura aparafusadas nos banzos e na alma.
keywords: emenda, emenda de viga, emenda de pilar, chapa de cobertura, chapa de emenda, chapa de banzo, chapa de alma, emenda aparafusada, junta, troço, levantamento, ligar
from: 97d141c2
---

Uma emenda aparafusada une duas peças de um mesmo perfil em I, extremo a extremo: uma chapa de cobertura por fora de cada banzo e uma chapa de cada lado da alma, aparafusadas através das duas peças. O DetailCraft recorta as peças até ao vão, coloca as quatro chapas, fura as chapas e as duas peças, acrescenta os parafusos e avisa sobre as distâncias às extremidades, os espaçamentos e o ajuste.

## Onde funciona

- Duas vigas, ou dois troços de pilar, do **mesmo perfil em I**, encontrando-se **extremo a extremo e alinhados**: as extremidades a não mais de 50 mm uma da outra, as peças paralelas e numa só linha (com 1 mm de tolerância). Qualquer das peças pode estar desenhada em qualquer sentido.
- Peças horizontais, inclinadas ou verticais funcionam todas.
- Duas peças de altura ou de largura de banzo diferentes são recusadas, tal como canais, cantoneiras e tubos.

## Adicionar emendas

1. Desenhe as duas peças de forma a encontrarem-se extremo a extremo. Para dividir uma barra já desenhada, desenhe-a de novo como duas peças.
2. Selecione uma (ou as duas) e escolha {{ui:Emenda}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}.
3. Cada junta livre das peças selecionadas com outra peça do mesmo perfil recebe uma emenda. A barra de estado indica quantas.

Selecione a emenda (clique numa das suas chapas) para alterar as definições no painel da direita. {{ui:Aplicar a semelhantes (n)}} copia-a para todas as outras juntas livres entre peças do mesmo perfil.

## Definições (mm)

| Definição | Predefinido | O que faz |
|---|---|---|
| Folga entre as extremidades | 10 | Cada peça é recortada de metade desse valor |
| Diâmetro do parafuso, furo, classe, margem de comprimento | 20, 22, A325, 30 | Como nas chapas de topo |
| Espessura da chapa de banzo | 12 | A chapa tem a largura do banzo |
| Filas de parafusos no banzo (cada lado) | 3 | Filas transversais ao banzo, de cada lado da junta |
| Passo dos parafusos no banzo | 75 | Ao longo da barra |
| Bitola dos parafusos no banzo | 0 | Entre as duas linhas de parafusos; 0 = largura do banzo menos 80 |
| Distância ao extremo do banzo | 40 | Do extremo da barra ao primeiro parafuso, e do último parafuso ao extremo da chapa |
| Espessura da chapa de alma | 8 | Uma de cada lado da alma |
| Filas de parafusos na alma | 3 | Ao longo da alma, centradas |
| Colunas de parafusos na alma (cada lado) | 2 | Ao longo da barra, de cada lado da junta |
| Passo dos parafusos na alma, em altura / ao longo da barra | 75, 75 | |
| Distância ao extremo da alma | 40 | Como nos banzos |
| Altura da chapa de alma | 0 | 0 = a alma livre entre os arredondamentos, menos 10 em cima e em baixo |
| Material da chapa | A36 | Texto |

O comprimento das chapas resulta dos parafusos: chapa de banzo = folga + 2 × (2 × distância à extremidade + (filas − 1) × passo); as chapas de alma seguem a mesma regra com as suas colunas. Com os valores predefinidos, as chapas de banzo têm 470 de comprimento.

## Bom saber

- As chapas pertencem à **primeira peça desenhada** das duas (as suas propriedades chamam-lhe primeira peça): aparecem no desenho de montagem dela e saem com ela, aparafusadas e não soldadas. O desenho de montagem da segunda peça mostra apenas os seus furos.
- Os parafusos dos banzos prendem o banzo e a sua chapa; os da alma prendem a alma e as duas chapas de alma. Os comprimentos dos parafusos estão listados à parte nas propriedades.
- Os avisos usam os mesmos mínimos da EN 1993-1-8 das outras ligações (distância à extremidade e à borda 1.2 × furo, passo 2.2 × furo ao longo e 2.4 × furo transversalmente), além de uma chapa de alma mais alta do que a alma livre e de parafusos dos banzos demasiado próximos da alma para o arredondamento.
- O DetailCraft não dimensiona a emenda (sem verificação de resistência) e não faz chapas de enchimento para peças de espessuras diferentes.
- Copiar as duas peças copia a sua emenda; eliminar uma das peças elimina-a.
