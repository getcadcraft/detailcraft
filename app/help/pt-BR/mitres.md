---
title: Ligações em esquadria
summary: Una duas barras de perfil I que se encontram em um ângulo: as duas extremidades cortadas no plano que divide o ângulo ao meio, com chapas de extremidade, parafusos e enrijecedores, se você quiser.
keywords: esquadria, meia-esquadria, ligação em esquadria, joelho, mísula, pórtico, cumeeira, canto, corte em ângulo, corte oblíquo, chapa de extremidade, chapa de extremidade parafusada, enrijecedor, ligar
from: cd8380d4
---

Uma esquadria une duas barras de perfil I cujas extremidades se encontram em um ângulo, como o joelho de um pórtico, uma cumeeira ou duas vigas fazendo uma curva em planta. O DetailCraft corta as duas extremidades no plano que divide ao meio o ângulo entre elas, de modo que as duas faces cortadas coincidam. Se você quiser, ele adiciona uma chapa de extremidade a cada extremidade cortada, parafusa as duas chapas entre si e coloca um par de enrijecedores de alma em cada barra.

## Onde funciona

- Dois **perfis I** (IPE, HEA, HEB, W e similares) cujas **extremidades se encontram no mesmo nó**. Qualquer uma das barras pode ter sido desenhada em qualquer sentido.
- O ângulo entre as barras deve ser de pelo menos 15°. Barras alinhadas são recusadas: use uma [emenda](topic:splices).
- O corte simples (sem chapas) funciona qualquer que seja o encontro das barras. **Chapas de extremidade** exigem que as duas barras se encontrem no plano de suas almas, como em um joelho de pórtico ou em uma cumeeira. Duas vigas fazendo uma curva em planta se encontram no plano de suas mesas, por isso recebem apenas o corte simples.
- Barras de tamanhos diferentes são unidas, mas com um aviso: suas faces cortadas não coincidem.

## Adicionar uma esquadria

1. Selecione as duas barras: clique em uma e depois em {{key:Shift}}+clique na outra.
2. Escolha {{ui:Esquadria}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}. A caixa de diálogo de esquadria é aberta.
3. Defina os campos numerados. O desenho ao lado é feito com seus números conforme você digita, e seus círculos numerados mostram o que cada campo define.
4. Escolha {{ui:Adicionar a meia-esquadria}}. Se você selecionou mais de duas barras, cada ligação livre entre elas recebe a mesma esquadria.

Para alterar uma esquadria depois, selecione-a (clique em uma de suas chapas) e escolha {{ui:Caixa de diálogo de meia-esquadria com visualização}} no painel da direita, ou altere suas configurações ali diretamente. Um corte simples não tem chapas para clicar: selecione suas duas barras e escolha {{ui:Esquadria}} novamente, e a caixa de diálogo abre nessa esquadria. {{ui:Aplicar a semelhantes (n)}} copia a esquadria para cada ligação livre entre barras dos mesmos dois perfis, no mesmo ângulo.

## Os campos numerados (mm)

| Nº | Configuração | Padrão | O que faz |
|---|---|---|---|
| 1 | Folga entre as chapas (ou entre as extremidades cortadas) | 0 | Folga livre na ligação. Cada lado mantém metade dela |
| 2 | Chapas de extremidade, espessura da chapa | ligado, 20 | Uma chapa de extremidade soldada em todo o contorno de cada extremidade cortada. Desmarque para um corte simples |
| 3 | Linhas de parafusos, espaçamento entre linhas, bitola, linha externa | 4, 0, 0, desligado | Espaçamento 0 distribui as linhas igualmente entre as mesas. Bitola 0 = metade da largura da chapa, no mínimo 2.4 × o furo. A linha externa vai na extensão da chapa além da mesa externa |
| 4 | Chapa além da mesa externa | 0 | Até onde as chapas avançam além da mesa externa, ao longo do corte |
| 5 | Chapa além da mesa interna | 0 | O mesmo, no lado interno |
| 6 | Enrijecedores de alma, distância além do corte | desligado, 50 | Um par em cada barra, dos dois lados da alma, perpendicular à barra, até esta distância além da extremidade oposta do seu corte |
| 7 | Espessura do enrijecedor | 10 | |

Em {{ui:Parafusos}}: diâmetro do parafuso, furo, grau e folga de comprimento (20, 22, A325, 30), como nas chapas de extremidade. Em {{ui:Chapas e soldas}}: largura da chapa (0 = a largura da mesa), tamanho da solda de filete (8) e material da chapa (A36).

## O que você obtém

- **Os cortes.** A extremidade de cada barra é cortada no seu plano. Seu comprimento em listas, desenhos e arquivos NC é o **comprimento total**, da sua extremidade reta até o ponto mais distante do corte.
- **As chapas** pertencem à sua própria barra: a montagem de cada barra é a barra, sua chapa de extremidade e seus enrijecedores. Os parafusos são parafusos de obra da ligação: a lista de materiais os conta uma vez, e o desenho de montagem de cada barra os lista como parafusos avulsos.
- **Os desenhos** mostram as extremidades inclinadas e as chapas; o desenho de fabricação de uma barra com esquadria indica o ângulo de cada corte em relação ao esquadro.
- **Arquivos NC** (DSTV) trazem os ângulos dos cortes oblíquos no cabeçalho, como pede a norma, e contornos que seguem o corte. Confira-os no visualizador NC da sua oficina antes de cortar, como para todo arquivo NC.
- **IFC** recorta a extrusão de cada barra pelo seu plano de corte, para que outros programas mostrem o corte real.
- **Marcas:** uma barra com esquadria é uma peça diferente de uma barra de corte reto do mesmo comprimento. Duas barras com os mesmos cortes compartilham uma marca, como os dois caibros de uma cumeeira.

## Bom saber

- A esquadria continua ativa. Mova ou redimensione qualquer uma das barras e o corte, as chapas e os parafusos acompanham. Exclua qualquer uma das barras e a esquadria desaparece, e a extremidade da outra barra volta a ser reta.
- Os avisos usam os mesmos mínimos da EN 1993-1-8 das outras ligações (distância à extremidade e à borda 1.2 × furo, espaçamento 2.2 × furo, bitola 2.4 × furo), além de linhas de parafusos muito próximas de uma mesa, chapas mais estreitas que as mesas e enrijecedores sem espaço.
- Os valores são valores iniciais, não um projeto. O DetailCraft não verifica a resistência da ligação, e não faz mísula, nem esquadria soldada com solda de topo, nem enrijecedores alinhados às mesas da outra barra.
