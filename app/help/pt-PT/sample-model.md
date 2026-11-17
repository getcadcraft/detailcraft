---
title: Explorar a estrutura de exemplo
summary: Abrir o pórtico de dois vãos incluído e usá-lo para conhecer o que o DetailCraft faz, das marcas aos ficheiros NC.
keywords: exemplo, demonstração, estrutura, pórtico, aprender, visita, experimentar
from: 5c5944dd
---

A estrutura de exemplo é um modelo pequeno e completo: cada tipo de elemento que o DetailCraft constrói aparece pelo menos uma vez. É a forma mais rápida de aprender a aplicação e de testar uma exportação antes de nela confiar.

## Abrir

1. Escolha {{ui:Exemplo}} no grupo {{ui:Ficheiro}}.
2. Se o modelo atual tiver alterações não guardadas, escolha {{ui:Guardar primeiro}} ou {{ui:Descartar alterações}}.
3. A barra de estado indica "Estrutura de exemplo: 6 pilares com chapas de base, 4 vigas com chapas de topo, um contraventamento, 7 sapatas com armadura."

O exemplo abre como um novo modelo chamado "Estrutura de exemplo". Não altera mais nada e não tem nada para anular.

## O que contém

- **Eixos** 1, 2, 3 a 6000 mm e A, B a 7000 mm. **Níveis** Nível 1 a 0 e Nível 2 a 4000.
- **Seis pilares**, W12x50, do Nível 1 ao Nível 2 em cada interseção, cada um sobre uma chapa de base de 25 mm com quatro chumbadouros.
- **Quatro vigas**, W16x26, no Nível 2 ao longo dos eixos A e B, com o topo do aço no nível e uma chapa de topo aparafusada e rente em ambas as extremidades (oito no total).
- **Um contraventamento**, HSS4x4x1/4, de A/1 no Nível 1 até A/2 no Nível 2.
- **Seis sapatas isoladas**, 2000 x 2000 x 600, uma sob cada pilar, com malha inferior com ganchos nos dois sentidos.
- **Mais uma sapata** ao lado do pórtico, 2400 x 1800 x 600, com seis armaduras de espera com ganchos, levantadas para um pedestal de betão.

## Coisas para experimentar

1. Clique numa viga. Leia a sua {{ui:Marca da peça}}, {{ui:Montagem}}, {{ui:Comprimento de corte}} e {{ui:Recuo de corte}}: o comprimento de corte é mais curto do que o espaçamento da grelha de 6000 mm, porque cada chapa de topo recua a viga de metade da altura do pilar mais a espessura da chapa.
2. Clique num pilar. Em {{ui:Furos}} lista os furos que as chapas de topo fizeram no seu banzo ("8 furos das ligações"; os pilares do meio têm 16, um conjunto em cada banzo).
3. Na lista {{ui:Marcas das peças}} à esquerda, veja que as quatro vigas partilham uma marca: são a mesma peça de aço. Os pilares de canto também partilham uma marca, mesmo com os furos virados em sentidos opostos, porque um pilar rodado ponta a ponta é a mesma peça. Os pilares do meio, com furos nos dois banzos, recebem outra marca.
4. Clique numa chapa de topo (ou num dos seus parafusos). O painel {{ui:Propriedades}} mostra as definições da chapa, do parafuso e da soldadura, os parafusos que ela faz (com o seu comprimento calculado a partir do comprimento de aperto) e os avisos de distância à borda.
5. Abra o separador {{ui:Lista de materiais}}. As peças, as montagens (uma viga com as suas duas chapas de topo é uma montagem), os elementos de fixação e os chumbadouros são listados com os pesos. Deverá ver seis marcas de peças: c1 (os dois pilares do meio) e c2 (os quatro pilares de canto), ambos W12x50 a 3975 mm; b1, quatro vigas W16x26 a 5650 mm; br1, o contraventamento; p1, oito chapas de topo PL20x180; e p2, seis chapas de base PL25x400. Os elementos de fixação são 64 parafusos 20 x 70 A325 e 24 chumbadouros 20 x 575.
6. Abra o separador {{ui:Mapa de dobragem}}. As seis sapatas idênticas partilham as posições dos varões; a sapata do pedestal acrescenta as suas próprias.
7. Clique no contraventamento e veja o grupo {{ui:Saída}}: {{ui:Desenho de fabrico}} está esbatido, porque, por enquanto, os desenhos de fabrico cobrem apenas perfis em I e chapas.
8. Escolha {{ui:Ficheiros NC}}. O zip tem um ficheiro para cada marca de perfil em I e de chapa; a barra de estado indica a marca do contraventamento como não escrita.
9. Escolha {{ui:IFC}} e abra o ficheiro em qualquer visualizador de IFC, para verificar como o seu outro software o lê.

## Usar como ponto de partida

O exemplo é um modelo normal. Altere-o, depois mude o nome no campo {{ui:Nome}} e guarde-o com o novo nome com {{key:Mod+S}}.
