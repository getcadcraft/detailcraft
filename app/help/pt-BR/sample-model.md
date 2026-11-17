---
title: Explore o pórtico de exemplo
summary: Abra o pórtico de dois vãos incluso e use-o para aprender o que o DetailCraft gera, desde as marcas até os arquivos NC.
keywords: exemplo, demonstração, pórtico, aprender, tour, testar
from: 5c5944dd
---

O pórtico de exemplo é um modelo pequeno e completo: cada tipo de coisa que o DetailCraft gera aparece pelo menos uma vez. É a forma mais rápida de aprender o aplicativo e de testar uma exportação antes de confiar nela.

## Abrir

1. Escolha {{ui:Exemplo}} no grupo {{ui:Arquivo}}.
2. Se o modelo atual tem alterações não salvas, escolha {{ui:Salvar primeiro}} ou {{ui:Descartar alterações}}.
3. A barra de status diz "Pórtico de exemplo: 6 pilares com chapas de base, 4 vigas com chapas de extremidade, um contraventamento, 7 sapatas com armadura."

O exemplo abre como um novo modelo chamado "Pórtico de exemplo". Ele não altera mais nada e não tem o que desfazer.

## O que há nele

- **Linhas de grade** 1, 2, 3 a 6000 mm e A, B a 7000 mm. **Níveis**: Nível 1 em 0 e Nível 2 em 4000.
- **Seis pilares**, W12x50, do Nível 1 ao Nível 2 em cada interseção, cada um sobre uma chapa de base de 25 mm com quatro chumbadores.
- **Quatro vigas**, W16x26, no Nível 2 ao longo das linhas de grade A e B, com o topo do aço no nível e uma chapa de extremidade parafusada rente em cada extremidade (oito no total).
- **Um contraventamento**, HSS4x4x1/4, de A/1 no Nível 1 até A/2 no Nível 2.
- **Seis sapatas isoladas**, 2000 x 2000 x 600, uma sob cada pilar, com malha inferior em gancho nas duas direções.
- **Mais uma sapata** ao lado do pórtico, 2400 x 1800 x 600, com seis barras de espera em gancho, de pé, para um pilar de concreto.

## Coisas para testar

1. Clique em uma viga. Leia sua {{ui:Marca da peça}}, {{ui:Montagem}}, {{ui:Comprimento de corte}} e {{ui:Recuo de corte}}: o comprimento de corte é menor que o espaçamento de 6000 mm da grade, porque cada chapa de extremidade recua a viga em metade da altura do pilar mais a espessura da chapa.
2. Clique em um pilar. Em {{ui:Furos}}, ele lista os furos que as chapas de extremidade fizeram na mesa ("8 furos de conexões"; os pilares do meio têm 16, um conjunto em cada mesa).
3. Na lista de {{ui:Marcas das peças}} à esquerda, veja que as quatro vigas compartilham uma marca: são a mesma peça de aço. Os pilares de canto também compartilham uma marca, mesmo com os furos virados para lados opostos, porque um pilar girado de ponta a ponta continua sendo a mesma peça. Os pilares do meio, com furos nas duas mesas, recebem outra marca.
4. Clique em uma chapa de extremidade (ou em um dos seus parafusos). O painel {{ui:Propriedades}} mostra as configurações da chapa, do parafuso e da solda, os parafusos que ela faz (com o comprimento deles calculado a partir da pega) e quaisquer avisos de distância à borda.
5. Abra a guia {{ui:Lista de materiais}}. Peças, montagens (uma viga com suas duas chapas de extremidade é uma montagem), parafusos e chumbadores são listados com pesos. Você deve ver seis marcas de peças: c1 (os dois pilares do meio) e c2 (os quatro pilares de canto), ambos W12x50 com 3975 mm; b1, quatro vigas W16x26 com 5650 mm; br1, o contraventamento; p1, oito chapas de extremidade PL20x180; e p2, seis chapas de base PL25x400. Os elementos de fixação são 64 parafusos 20 x 70 A325 e 24 chumbadores 20 x 575.
6. Abra a guia {{ui:Tabela de dobramento}}. As seis sapatas idênticas compartilham posições de barras; a sapata do pilar de concreto acrescenta a sua própria.
7. Clique no contraventamento e veja o grupo {{ui:Saída}}: {{ui:Desenho de fabricação}} está desabilitado, porque, por enquanto, os desenhos de fabricação cobrem somente perfis I e chapas.
8. Escolha {{ui:Arquivos NC}}. O arquivo ZIP tem um arquivo para cada marca de perfil I e de chapa; a barra de status lista a marca do contraventamento como não gravada.
9. Escolha {{ui:IFC}} e abra o arquivo em qualquer visualizador IFC, para conferir como os seus outros programas o leem.

## Use como ponto de partida

O exemplo é um modelo comum. Altere-o, depois renomeie-o no campo {{ui:Nome}} e salve com o novo nome usando {{key:Mod+S}}.
