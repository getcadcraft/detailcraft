---
title: Escadas
summary: Coloque uma escada de aço reta a partir do seu desnível, pisada e largura: duas longarinas e cobertores em chapa, um só conjunto soldado.
keywords: escada, escadas, escadaria, longarina, cobertor, espelho, pisada, focinho, lanço, escada de aço, ibc 1011, blondel
from: 62fa3845
---

Uma escada reta de aço: duas longarinas (perfis em U com as abas viradas para dentro, ou barras chatas de cutelo) e um cobertor em chapa em cada degrau, soldados entre elas. O DetailCraft calcula o número de espelhos a partir do desnível, verifica-os contra os limites do código de construção e faz da escada um só conjunto de fabrico.

## Colocar uma escada

1. Escolha {{ui:Escada}} no grupo {{ui:Colocar}}, ou prima {{key:S}}.
2. Defina a escada no painel da direita: a **direção de subida** (0° sobe ao longo de +x, 90° ao longo de +y), o **desnível** (0 = até ao piso seguinte), a **pisada**, a **largura livre** entre as longarinas, o **espelho mais alto permitido**, a **longarina**, a **espessura do cobertor em chapa**, o **focinho** e o material.
3. Clique numa interseção da grelha: é o pé do primeiro espelho, sobre o eixo central da escada.

A barra de estado indica quantos espelhos criou. Selecione a escada (clique numa longarina ou num cobertor) para alterar qualquer das suas definições, a posição ou a fase; as propriedades mostram também os espelhos, cobertores, desenvolvimento, inclinação e 2 × espelho + pisada.

## O que o DetailCraft calcula

- **Espelhos.** Tantos quantos forem necessários para manter cada espelho igual ou abaixo do mais alto permitido: um desnível de 3000 mm com 178 mm ou menos dá 17 espelhos de 176.5 mm. Há um cobertor a menos do que espelhos (o piso superior é o último degrau).
- **Cobertores.** Uma chapa com pisada + focinho de profundidade (280 + 25 = PL6x305 por predefinição) e com a largura livre, a sua face superior à altura de cada espelho, e a sua aresta da frente (o focinho) à frente da linha do espelho.
- **Longarinas.** Com a inclinação da escada, desde onde encontram o piso inferior até onde encontram o piso superior, logo para fora da largura livre, com o seu bordo superior 50 mm acima da linha dos focinhos. As abas de um perfil em U ficam viradas para dentro da escada; uma barra chata como PL12x250 fica de cutelo.
- **Soldaduras.** Cada cobertor às duas longarinas. Os cobertores e a longarina direita são soldados à longarina esquerda, por isso a escada recebe uma só marca de montagem (ST1) e o seu próprio desenho de montagem; as longarinas recebem marcas de peça st…, os cobertores p….
- **Verificações.** Avisos quando um espelho está fora de 4 a 7 in. (102 a 178 mm) ou a pisada é inferior a 11 in. (279 mm), os limites do IBC 2021, secção 1011.5.2; quando 2 × espelho + pisada está fora de 600 a 650 mm (uma regra de conforto comum); e quando a longarina é pouco profunda para suportar os cobertores. Um perfil de longarina desconhecido impede a escada de ser construída.

## Bom saber

- Mover, rodar, espelhar, copiar, colar, eliminar e fases funcionam numa escada como numa barra. Uma rotação roda a subida; um espelhamento envia-a no sentido espelhado.
- As longarinas são exportadas para IFC como IfcMember e os cobertores como IfcPlate; ambos vão para os ficheiros NC e para a lista de materiais. A [deteção de conflitos](topic:clash-check) deixa as peças próprias da escada de fora (estão soldadas entre si).
- Esta escada simples é um só lanço com cobertores em chapa. Para patamares, corrimãos com balaústres, cobertores em chapa dobrada ou em grelha, um conjunto de regras à sua escolha, uma lista de corte e os desenhos de furos das longarinas, marque {{ui:Usar o gerador de escadas de aço}} na ferramenta Escada (ver Gerador de escadas de aço).
- As longarinas são cortadas em esquadria: os cortes das suas extremidades contra os pisos não são feitos.
- O DetailCraft não dimensiona a escada: as longarinas e os cobertores não são verificados quanto a resistência ou deformação.
