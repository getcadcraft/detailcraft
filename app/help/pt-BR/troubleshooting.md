---
title: Solução de problemas
summary: O que significam as mensagens do DetailCraft e o que fazer, de uma vista 3D que não aparece a ligações que não são criadas.
keywords: problema, erro, não funciona, ajuda, corrigir, mensagem, recusado, webgl, em branco, aviso, não é possível, pendência
from: f8c3b2b1
---

A maioria das recusas é explicada na barra de status, na parte inferior da tela, ou na aba {{ui:Problemas}}. Leia-as primeiro. As mensagens abaixo são citadas como o DetailCraft as mostra.

## A vista 3D não aparece

**"Este navegador não conseguiu iniciar os gráficos 3D (WebGL). O modelo, os relatórios e as exportações continuam funcionando."**

O navegador não conseguiu iniciar o WebGL, com o qual o DetailCraft desenha os gráficos 3D.

1. Atualize o navegador para a versão mais recente.
2. Ative a aceleração de hardware e reinicie o navegador (veja abaixo).
3. Atualize o driver de vídeo ou tente outro navegador. Áreas de trabalho remotas e máquinas virtuais costumam não ter WebGL.
4. Enquanto isso, você ainda pode trabalhar: insira as peças com o formulário {{ui:Adicionar por eixo}}, leia os relatórios e exporte. Só clicar na vista exige WebGL.

:::chromium
Para ativar a aceleração de hardware, abra **Configurações, Sistema** e ative **Usar aceleração gráfica quando disponível**; depois reinicie o navegador.
:::

:::firefox
Para ativar a aceleração de hardware, abra **Configurações, Geral, Desempenho**, desmarque **Usar configurações de desempenho recomendadas** e marque **Usar aceleração de hardware quando disponível**. Reinicie o Firefox.
:::

:::safari
O Safari tem WebGL ativado por padrão. Atualize o macOS se a vista ainda não iniciar, e confira se nenhuma extensão o bloqueia.
:::

Mais em [Navegadores e computadores](common:browsers).

## Clicar na vista não faz nada

- **Nenhuma interseção perto do clique.** As ferramentas de inserção se encaixam apenas nas interseções de eixos. Um clique longe de todos os pontos não faz nada. Aproxime-se até o ponto acender.
- **A ferramenta é {{ui:Selecionar}} e você clicou em um espaço vazio.** Isso limpa a seleção.
- **Você arrastou.** Pressionar e soltar com mais de alguns pixels de distância é um arrasto: ele gira ou move a vista.
- **A peça está cortada.** Em {{ui:Planta}} e {{ui:Elevação}}, o aço fora do corte fica oculto e não pode ser clicado. Mude para {{ui:3D}}.
- **A interseção está no nível errado.** Em {{ui:3D}}, interseções de vários níveis podem se sobrepor na tela; o clique pega a mais próxima. Use {{ui:Planta}} ou {{ui:Elevação}}.

## Mensagens de inserção

| Mensagem | O que fazer |
|---|---|
| Não há nível acima do Nível 2 para o pilar alcançar. Adicione um nível primeiro. | Adicione um nível em {{ui:Níveis}}, ou clique em um nível inferior |
| Escolha uma interseção diferente para a outra extremidade. | Você clicou duas vezes no mesmo ponto |
| As duas extremidades são o mesmo ponto. | Em {{ui:Adicionar por eixo}}, os pontos "De" e "Até" são iguais |
| Adicione eixos à esquerda para inserir peças. | O modelo não tem eixos em uma das direções |
| Perfil desconhecido "…" | O perfil não está no catálogo nem nos perfis personalizados do modelo. Escolha um na lista |
| Digite um número. | Um campo numérico ficou vazio ou tem texto |

## As ligações não são criadas

### "This beam does not end on a column line." (Esta viga não termina em uma linha de pilar.)

As chapas de extremidade exigem que a extremidade da viga esteja exatamente sobre a linha vertical de um pilar, entre a base e o topo dele (dentro de 1 mm). Confira as {{ui:Extremidades (x, y, z mm)}} da viga e a posição do pilar.

### "This beam meets a column web or at an angle" (Esta viga encontra a alma de um pilar ou está em ângulo)

Ou na aba {{ui:Problemas}}: "As vigas que se encontram na alma de um pilar ainda não são feitas: gire o pilar 90° ou use outra ligação."

A viga se encontra com a alma do pilar. Selecione o pilar e defina a {{ui:Rotação (°)}} como 90, depois tente de novo. Ligações oblíquas ainda não são feitas.

### "End plates are built for level beams only (this beam slopes)." (As chapas de extremidade são feitas apenas para vigas horizontais: esta viga está inclinada.)

As duas extremidades da viga precisam estar na mesma altura.

### "End plates need the beam upright (rotation 0)." (As chapas de extremidade precisam de viga em pé: rotação 0.)

Defina a {{ui:Rotação (°)}} da viga de volta para 0.

### "End plates need an I-shape beam." / "End plates need an I-shape column." (As chapas de extremidade precisam de uma viga de perfil I. / ... de um pilar de perfil I.)

Apenas perfis I (W, IPE, HEA, HEB ou um I personalizado) recebem chapas de extremidade.

### "The beam end is not on the column line any more." (A extremidade da viga não está mais na linha do pilar.)

Você moveu a viga ou o pilar depois de adicionar a ligação. Mova-os de volta, ou exclua a ligação.

### "Connections cut this member to nothing." (As ligações cortaram esta peça até zero.)

As ligações nas duas extremidades recortaram a peça além do comprimento dela, por exemplo uma viga muito curta entre dois pilares profundos. Confira as extremidades da peça e a espessura da chapa.

### "No other joints like this one … are without a connection." (Nenhuma outra junta como esta … está sem ligação.)

{{ui:Semelhante}} copia apenas para juntas com o mesmo perfil de viga, o mesmo perfil de pilar e o mesmo tipo de ligação (viga em uma mesa) que ainda não têm ligação.

### "Both ends already have connections." / "This column already has a base plate." (As duas extremidades já têm ligações. / Este pilar já tem uma chapa de base.)

Selecione a ligação existente para alterá-la, ou exclua-a primeiro.

## Avisos na aba Problemas

Os avisos não impedem a criação de uma ligação ou de uma sapata; eles pedem que você confira. Os avisos de borda e espaçamento usam os mínimos da EN 1993-1-8 Tabela 3.3 (borda 1.2 × furo, espaçamento 2.2 × furo, gabarito 2.4 × furo). Se o seu projeto usa outras regras, o aviso pode não se aplicar; o DetailCraft não dimensiona ligações.

"um furo está fora da extremidade da peça" significa que o x de um furo é menor que 0 ou maior que o comprimento de corte. Lembre-se de que x é contado a partir do início do corte, depois que as ligações recortaram a peça.

## Mudanças de sapata são recusadas

| Mensagem | O que fazer |
|---|---|
| O cobrimento não deixa espaço para barras nesta sapata. | Aumente a sapata ou diminua o cobrimento |
| A sapata é rasa demais para duas camadas de barras dentro do cobrimento. | Aumente a profundidade ou reduza o cobrimento |
| As barras de espera não cabem dentro da sapata com cobrimento de 75 mm. | Menos barras de espera, espaçamento menor ou uma sapata maior |
| O espaçamento das barras deve estar entre 50–1000 mm. | Digite um espaçamento nessa faixa |
| O comprimento deve estar entre 300–50000 mm. | As dimensões de sapata têm limites: comprimento e largura de 300 a 50000, profundidade de 150 a 10000 |

## Eixos e níveis são recusados

| Mensagem | O que fazer |
|---|---|
| Eixos numerados: informe um espaçamento entre cada par de linhas (4). | Conte os intervalos: cinco linhas precisam de quatro espaçamentos |
| Eixos com letras: os espaçamentos devem ser milímetros positivos. | Sem zeros, negativos nem texto |
| Eixos numerados: os rótulos dos eixos devem ser diferentes. | Duas linhas têm o mesmo rótulo |
| No máximo 60 linhas de eixo em cada direção. | Divida o modelo |
| Mantenha pelo menos um nível. | Você removeu todas as linhas de nível |
| Cada nível precisa de um nome. / Dois níveis se chamam "…". | Dê a cada nível um nome diferente |

## Abrir um arquivo falha

| Mensagem | Causa |
|---|---|
| O DetailCraft abre seus próprios modelos (.detailcraft.json). A importação de IFC ainda não é feita. | O arquivo não é um `.json` |
| Este não é um modelo do DetailCraft (não é JSON). | O arquivo está danificado ou é outro JSON |
| Este não é um modelo do DetailCraft. | Um arquivo JSON de outro programa |
| Este modelo foi salvo por um DetailCraft mais recente (formato 2). | Abra-o no DetailCraft mais recente que o salvou |
| Este arquivo é grande demais para ser um modelo do DetailCraft. | Acima de 50 MB |

Quando um arquivo abre com avisos como "2 peças não eram válidas e foram deixadas de fora.", o restante do modelo está correto. Não salve sobre o original antes de conferir o que ficou de fora.

## Exportações

| Mensagem | Causa |
|---|---|
| Nada para exportar ainda. | {{ui:IFC}} com um modelo vazio |
| Nenhuma peça de perfil I ou chapa para gerar arquivos NC. | Só há perfis U, cantoneiras ou tubos no modelo |
| Não gerado (até agora só perfis I e chapas): … | Essas marcas não são perfis I nem chapas; as demais foram geradas |
| Não há sapatas, portanto não há barras para tabelar. | {{ui:Dobramento}} sem sapatas |
| … caractere(s) fora da fonte do PDF impresso(s) como "?". | O nome do modelo ou uma classe tem caracteres que a fonte do PDF não tem |

{{ui:Desenho de fabricação}} desabilitado: o modelo ainda não tem peças.

## Os downloads não aparecem

Cada salvamento e exportação é um download do navegador. Confira a lista de downloads do navegador. Se o navegador perguntar antes de baixar vários arquivos, ou bloquear downloads deste site, permita-os. No Safari, confira o botão de downloads na barra de ferramentas.

## As teclas não fazem nada

- O cursor está em um campo de texto ou de número: as teclas de ferramenta e {{key:Delete}} são ignoradas ali para que você possa digitar. Pressione {{key:Tab}} ou clique na vista.
- Uma caixa de diálogo está aberta: feche-a primeiro.
- O navegador está com o teclado (por exemplo, a barra de endereços): clique dentro do DetailCraft.
- {{key:Ctrl+Shift+F}} usa Control mesmo em um Mac.

## Problemas offline

O botão {{ui:Salvar para uso offline}} na barra do aplicativo mostra em que estado está a cópia offline. Como o salvamento funciona: [Trabalhar offline](common:offline).

| O botão mostra | O que significa | O que fazer |
|---|---|---|
| {{ui:Salvar para uso offline}} | Ainda não há cópia offline neste navegador | Escolha-o enquanto estiver online |
| Salvando 5 de 20 | O salvamento está em andamento | Aguarde {{ui:Pronto para uso offline}}; mantenha a aba aberta |
| {{ui:Pronto para uso offline}} | O DetailCraft, a vista 3D, todas as exportações e esta ajuda funcionam sem conexão | Nada. Clique nele para {{ui:Salvar de novo (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}} |
| {{ui:Não foi possível salvar}} | Alguns arquivos não foram baixados | Confira sua conexão e clique para tentar de novo |
| {{ui:Offline indisponível}} | Esta janela não pode manter uma cópia offline: janelas privadas e alguns computadores gerenciados bloqueiam isso | Use uma janela normal, ou trabalhe online |

Se você estiver offline e o botão não mostrar {{ui:Pronto para uso offline}}, não recarregue nem feche a aba: o que já carregou continua funcionando. Salve o modelo com {{key:Mod+S}} e aguarde até estar online de novo.

## Trabalho não salvo

Se o navegador perguntar se você quer sair da página, o DetailCraft tem alterações não salvas. Escolha permanecer e pressione {{key:Mod+S}}. O DetailCraft não consegue recuperar um modelo depois que a aba é fechada.

## Ainda com problemas

Anote o que você fez e a mensagem exata, e informe pela [página de suporte](https://getcadcraft.com/support).
