---
title: Escadas
summary: Insira uma escada reta de aço a partir do seu desnível, pisada e largura: duas longarinas e pisos de chapa, em um único conjunto soldado.
keywords: escada, escadas, escadaria, longarina, piso, espelho, pisada, bocel, lance, escada de aço, ibc 1011, blondel
from: 62fa3845
---

Uma escada reta de aço: duas longarinas (perfis U com as abas voltadas para dentro, ou barras chatas em pé) e um piso de chapa em cada degrau, soldados entre elas. O DetailCraft calcula o número de espelhos a partir do desnível, verifica-os com os limites do código de obras e faz a escada como uma única montagem de fábrica.

## Inserir uma escada

1. Escolha {{ui:Escada}} no grupo {{ui:Inserir}}, ou pressione {{key:S}}.
2. Defina a escada à direita: a **direção de subida** (0° sobe ao longo de +x, 90° ao longo de +y), o **desnível** (0 = até o próximo pavimento), a **pisada**, a **largura livre** entre as longarinas, o **espelho mais alto permitido**, a **longarina**, a **espessura da chapa do piso**, o **bocel** e o material.
3. Clique em uma interseção da grade: esse é o pé do primeiro espelho, no eixo central da escada.

A barra de status informa quantos espelhos foram feitos. Selecione a escada (clique em uma longarina ou em um piso) para alterar qualquer uma de suas configurações, sua posição ou sua fase; as propriedades também mostram os espelhos, os pisos, a projeção horizontal, a inclinação e 2 × espelho + pisada.

## O que o DetailCraft calcula

- **Espelhos.** O menor número que mantém cada espelho igual ou abaixo do mais alto permitido: um desnível de 3000 mm com 178 mm ou menos resulta em 17 espelhos de 176.5 mm. Há um piso a menos que o número de espelhos (o pavimento superior é o último degrau).
- **Pisos.** Uma chapa de profundidade igual à pisada + bocel (280 + 25 = PL6x305 por padrão) e tão longa quanto a largura livre, com a sua face superior na altura de cada espelho, e sua borda frontal (o bocel) à frente da linha do espelho.
- **Longarinas.** Na inclinação da escada, desde onde encontram o pavimento inferior até onde encontram o pavimento superior, logo além da largura livre, com a borda superior 50 mm acima da linha dos bocéis. As abas de um perfil U ficam voltadas para dentro da escada; uma barra chata como PL12x250 fica em pé.
- **Soldas.** Cada piso às duas longarinas. Os pisos e a longarina direita são soldados à longarina esquerda, de modo que a escada recebe uma única marca de montagem (ST1) e seu próprio desenho de montagem; as longarinas recebem marcas de peça st…, os pisos, p….
- **Verificações.** Avisos quando um espelho está fora de 4 a 7 in. (102 a 178 mm) ou a pisada está abaixo de 11 in. (279 mm), os limites do IBC 2021 seção 1011.5.2; quando 2 × espelho + pisada está fora de 600 a 650 mm (uma regra comum de conforto); e quando a longarina é baixa demais para suportar os pisos. Um perfil de longarina desconhecido impede a escada de ser construída.

## Bom saber

- Mover, girar, espelhar, copiar, colar, excluir e fases funcionam em uma escada como em uma barra. Uma rotação gira a subida; um espelhamento a envia no sentido espelhado.
- As longarinas são exportadas para IFC como IfcMember e os pisos como IfcPlate; ambos vão para os arquivos NC e para a lista de materiais. A verificação de interferência deixa as peças da própria escada de fora (elas estão soldadas entre si).
- Esta escada simples é um único lance com pisos de chapa. Para patamares, corrimãos com balaústres, pisos de bandeja dobrada ou de grelha, um conjunto de regras que você escolhe, uma lista de corte e os desenhos dos furos das longarinas, marque {{ui:Usar o gerador de escada em aço}} na ferramenta Escada (veja Gerador de escada em aço).
- As longarinas são cortadas em esquadro: os cortes de suas extremidades contra os pavimentos não são feitos.
- O DetailCraft não projeta a escada: as longarinas e os pisos não são verificados quanto à resistência nem à flecha.
