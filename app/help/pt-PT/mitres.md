---
title: Ligações em esquadria
summary: Unir dois elementos de perfil I que se encontram num ângulo: ambas as extremidades cortadas no plano que divide o ângulo ao meio, com chapas de topo, parafusos e reforços, se os quiser.
keywords: esquadria, ligação em esquadria, miter, joelho, pórtico, cumeeira, canto, corte oblíquo, chapa de topo, chapa de topo aparafusada, reforço, ligar
from: cd8380d4
---

Uma esquadria une dois elementos de perfil I cujas extremidades se encontram num ângulo, como o joelho de um pórtico, uma cumeeira, ou duas vigas que fazem um canto em planta. O DetailCraft corta ambas as extremidades no plano que divide o ângulo entre elas, de modo que as duas faces cortadas coincidem. Se quiser, acrescenta uma chapa de topo a cada extremidade cortada, aparafusa as duas chapas entre si e coloca um par de reforços de alma em cada elemento.

## Onde funciona

- Dois **perfis I** (IPE, HEA, HEB, W e semelhantes) cujas **extremidades se encontram no mesmo nó**. Qualquer dos elementos pode ser desenhado em qualquer sentido.
- O ângulo entre os elementos tem de ser de pelo menos 15°. Elementos alinhados são recusados: use uma [emenda](topic:splices).
- O corte simples (sem chapas) funciona seja qual for a forma como os elementos se encontram. As **chapas de topo** exigem que os dois elementos se encontrem no plano das suas almas, como num joelho de pórtico ou numa cumeeira. Duas vigas que fazem um canto em planta encontram-se no plano dos banzos, por isso só têm o corte simples.
- Elementos de tamanhos diferentes são unidos, mas com um aviso: as suas faces cortadas não coincidem.

## Adicionar uma esquadria

1. Selecione os dois elementos: clique num e depois {{key:Shift}}+clique no outro.
2. Escolha {{ui:Esquadria}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}. Abre-se a caixa de diálogo da esquadria.
3. Defina os campos numerados. O desenho ao lado é feito a partir dos seus números à medida que escreve, e os círculos numerados mostram o que cada campo define.
4. Escolha {{ui:Adicionar a esquadria}}. Se tiver selecionado mais de dois elementos, cada junta livre entre eles recebe a mesma esquadria.

Para alterar uma esquadria mais tarde, selecione-a (clique numa das suas chapas) e escolha {{ui:Caixa de diálogo da esquadria com pré-visualização}} no painel da direita, ou altere as definições aí diretamente. Um corte simples não tem chapas onde clicar: selecione os seus dois elementos e escolha {{ui:Esquadria}} de novo, e a caixa de diálogo abre-se nessa esquadria. {{ui:Aplicar a semelhantes (n)}} copia-a para cada junta livre entre elementos dos mesmos dois perfis, com o mesmo ângulo.

## Os campos numerados (mm)

| N.º | Definição | Predefinido | O que faz |
|---|---|---|---|
| 1 | Folga entre as chapas (ou as extremidades cortadas) | 0 | Folga livre na junta. Cada lado fica com metade |
| 2 | Chapas de topo, espessura da chapa | ativo, 20 | Uma chapa de topo soldada em todo o contorno de cada extremidade cortada. Desmarque para um corte simples |
| 3 | Filas de parafusos, passo entre filas, entre-eixos, fila exterior | 4, 0, 0, desativado | Passo 0 distribui as filas por igual entre os banzos. Entre-eixos 0 = metade da largura da chapa, no mínimo 2.4 × o furo. A fila exterior vai na extensão da chapa para além do banzo exterior |
| 4 | Chapa para além do banzo exterior | 0 | Até onde as chapas chegam para além do banzo exterior, ao longo do corte |
| 5 | Chapa para além do banzo interior | 0 | O mesmo, para o interior |
| 6 | Reforços de alma, distância para além do corte | desativado, 50 | Um par em cada elemento, dos dois lados da alma, perpendicular ao elemento, a esta distância para além da extremidade oposta do seu corte |
| 7 | Espessura do reforço | 10 | |

Em {{ui:Parafusos}}: diâmetro do parafuso, furo, classe e folga de comprimento (20, 22, A325, 30), como nas chapas de topo. Em {{ui:Chapas e soldaduras}}: largura da chapa (0 = a largura do banzo), tamanho da soldadura de ângulo (8) e material da chapa (A36).

## O que obtém

- **Os cortes.** A extremidade de cada elemento é cortada no seu plano. O seu comprimento nas listas, nos desenhos e nos ficheiros NC é o **comprimento total**, desde a extremidade quadrada até ao ponto mais afastado do corte.
- **As chapas** pertencem ao respetivo elemento: a montagem de cada elemento é o elemento, a sua chapa de topo e os seus reforços. Os parafusos são parafusos de obra da junta: a lista de materiais conta-os uma vez, e o desenho de montagem de cada elemento os lista como parafusos soltos.
- **Os desenhos** mostram as extremidades inclinadas e as chapas; o desenho de fabrico de um elemento em esquadria indica o ângulo de cada corte em relação ao esquadro.
- **Os ficheiros NC** (DSTV) incluem no cabeçalho os ângulos dos cortes oblíquos, como a norma exige, e contornos que seguem o corte. Verifique-os no visualizador NC da sua oficina antes de cortar, como para qualquer ficheiro NC.
- **O IFC** recorta a extrusão de cada elemento pelo seu plano de corte, para que outros programas mostrem o corte verdadeiro.
- **Marcas:** um elemento em esquadria é uma peça diferente de um elemento de corte reto com o mesmo comprimento. Dois elementos com os mesmos cortes partilham uma marca, como os dois varedos de uma cumeeira.

## Bom saber

- A esquadria mantém-se ativa. Mova ou redimensione qualquer dos elementos e o corte, as chapas e os parafusos seguem. Elimine um dos elementos e a esquadria desaparece, e a extremidade do outro elemento volta a ser reta.
- Os avisos usam os mesmos mínimos da EN 1993-1-8 que as outras ligações (distância à extremidade e ao bordo 1.2 × o furo, passo 2.2 × o furo, entre-eixos 2.4 × o furo), além de filas de parafusos demasiado próximas de um banzo, chapas mais estreitas do que os banzos e reforços sem espaço.
- Os valores são valores de partida, não um dimensionamento. O DetailCraft não verifica a resistência da ligação, e não faz consolo, nem esquadria soldada com soldadura de topo, nem reforços alinhados com os banzos do outro elemento.
