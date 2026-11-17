---
title: Resolução de problemas
summary: O que significam as mensagens do DetailCraft e o que fazer, desde uma vista 3D em falta até ligações que não se constroem.
keywords: problema, erro, não funciona, ajuda, corrigir, mensagem, recusado, webgl, em branco, aviso, não é possível, questão
from: f8c3b2b1
---

A maioria das recusas está explicada na barra de estado, na parte inferior do ecrã, ou no separador {{ui:Problemas}}. Leia-os primeiro. As mensagens abaixo são citadas tal como o DetailCraft as mostra.

## A vista 3D não aparece

**"Este navegador não conseguiu iniciar os gráficos 3D (WebGL). O modelo, os relatórios e as exportações continuam a funcionar."**

O navegador não conseguiu iniciar o WebGL, a tecnologia de gráficos 3D com que o DetailCraft desenha.

1. Atualize o navegador para a versão mais recente.
2. Ative a aceleração por hardware e reinicie o navegador (ver abaixo).
3. Atualize o controlador gráfico ou experimente outro navegador. Ambientes de área de trabalho remota e máquinas virtuais costumam não ter WebGL.
4. Entretanto pode continuar a trabalhar: coloque barras com o formulário {{ui:Adicionar por eixo}}, leia os relatórios e exporte. Só o clique na vista precisa de WebGL.

:::chromium
Para ativar a aceleração por hardware, abra **Definições, Sistema** e ative **Utilizar aceleração gráfica quando disponível**; depois reinicie.
:::

:::firefox
Para ativar a aceleração por hardware, abra **Definições, Geral, Desempenho**, desmarque **Utilizar as definições de desempenho recomendadas** e marque **Utilizar aceleração de hardware quando disponível**. Reinicie o Firefox.
:::

:::safari
O Safari tem o WebGL ativado por predefinição. Atualize o macOS se a vista continuar sem arrancar, e verifique que nenhuma extensão o bloqueia.
:::

Mais em [Navegadores e computadores](common:browsers).

## Clicar na vista não faz nada

- **Nenhuma interseção perto do clique.** As ferramentas de colocação só se encaixam em interseções da grelha. Um clique longe de todos os pontos não faz nada. Aproxime-se até o ponto acender.
- **A ferramenta é {{ui:Selecionar}} e clicou num espaço vazio.** Isso limpa a seleção.
- **Arrastou.** Premir e largar a mais de alguns pixels de distância é um arrastamento: roda ou desloca a vista.
- **A peça está cortada.** Em {{ui:Planta}} e {{ui:Alçado}}, o aço fora do corte fica oculto e não pode ser clicado. Mude para {{ui:3D}}.
- **A interseção está ao nível errado.** Em {{ui:3D}}, interseções de vários níveis podem sobrepor-se no ecrã; o clique escolhe a mais próxima. Use {{ui:Planta}} ou {{ui:Alçado}}.

## Mensagens de colocação

| Mensagem | O que fazer |
|---|---|
| Não há nenhum nível acima do Nível 2 para a coluna alcançar. Adicione primeiro um nível. | Adicione um nível em {{ui:Níveis}}, ou clique num nível inferior |
| Escolha outra interseção para a outra extremidade. | Clicou duas vezes no mesmo ponto |
| As duas extremidades são o mesmo ponto. | Em {{ui:Adicionar por eixo}}, os pontos "De" e "Para" são iguais |
| Adicione linhas da grelha à esquerda para colocar as peças. | O modelo não tem linhas da grelha numa direção |
| Perfil desconhecido "…" | O perfil não está no catálogo nem nos perfis personalizados do modelo. Escolha um da lista |
| Escreva um número. | Um campo numérico ficou vazio ou tem texto |

## As ligações não se constroem

### "Esta viga não termina numa linha de pilar."

As chapas de topo precisam de a extremidade da viga cair exatamente sobre a linha de um pilar vertical, entre a base e o topo deste (com 1 mm de tolerância). Verifique as {{ui:Extremidades (x, y, z mm)}} da viga e a posição do pilar.

### "Esta viga encontra a alma de um pilar ou está em ângulo"

Ou em {{ui:Problemas}}: "As vigas que entram na alma de um pilar ainda não estão implementadas: rode o pilar 90° ou use outra ligação."

A viga entra na alma do pilar. Selecione o pilar e defina {{ui:Rotação (°)}} para 90, e tente de novo. As ligações enviesadas ainda não estão implementadas.

### "As chapas de topo só são construídas para vigas horizontais (esta viga está inclinada)."

Ambas as extremidades da viga têm de estar à mesma altura.

### "As chapas de topo exigem a viga na vertical (rotação 0)."

Volte a definir a {{ui:Rotação (°)}} da viga para 0.

### "As chapas de topo exigem uma viga de perfil em I." / "As chapas de topo exigem um pilar de perfil em I."

Só os perfis em I (W, IPE, HEA, HEB ou um I personalizado) aceitam chapas de topo.

### "A extremidade da viga já não está na linha do pilar."

Moveu a viga ou o pilar depois de adicionar a ligação. Mova-o de volta ou elimine a ligação.

### "As ligações reduzem esta barra a nada."

As ligações nas duas extremidades cortam a barra para além do seu comprimento, por exemplo uma viga muito curta entre dois pilares altos. Verifique as extremidades da barra e a espessura da chapa.

### "Não há outras juntas como esta … sem ligação."

{{ui:Semelhantes}} só copia para juntas com o mesmo perfil de viga, o mesmo perfil de pilar e o mesmo tipo de ligação (viga contra um banzo) que ainda não tenham ligação.

### "Ambas as extremidades já têm ligações." / "Este pilar já tem uma chapa de base."

Selecione a ligação existente para a alterar, ou elimine-a primeiro.

## Avisos no separador Problemas

Os avisos não impedem a construção de uma ligação ou de uma sapata; pedem apenas que a verifique. Os avisos de distância à borda e de espaçamento usam os mínimos da EN 1993-1-8, Quadro 3.3 (borda 1.2 × furo, passo 2.2 × furo, bitola 2.4 × furo). Se o seu projeto usa outras regras, o aviso pode não se aplicar; o DetailCraft não dimensiona ligações.

"um furo está fora da extremidade da peça" significa que o x de um furo é menor que 0 ou maior que o comprimento de corte. Lembre-se de que x é contado a partir do início do corte, depois de as ligações terem recortado a peça.

## Alterações de sapatas recusadas

| Mensagem | O que fazer |
|---|---|
| A cobertura não deixa espaço para varões nesta sapata. | Torne a sapata maior ou a cobertura menor |
| A sapata é pouco profunda para duas camadas de varões dentro da cobertura. | Torne-a mais profunda ou reduza a cobertura |
| As armaduras de espera não cabem dentro da sapata com 75 mm de cobertura. | Menos armaduras de espera, espaçamento menor ou uma sapata maior |
| O espaçamento dos varões tem de estar entre 50 e 1000 mm. | Escreva um espaçamento nesse intervalo |
| O comprimento tem de estar entre 300 e 50000 mm. | As dimensões das sapatas têm limites: comprimento e largura de 300 a 50000, profundidade de 150 a 10000 |

## Grelhas e níveis recusados

| Mensagem | O que fazer |
|---|---|
| Grelhas numeradas: indique um espaçamento entre cada par de linhas (4). | Conte os intervalos: cinco linhas precisam de quatro espaçamentos |
| Grelhas com letras: os espaçamentos têm de ser milímetros positivos. | Sem zeros, negativos nem texto |
| Grelhas numeradas: os rótulos das grelhas têm de ser diferentes. | Duas linhas têm o mesmo rótulo |
| No máximo 60 linhas de grelha em cada sentido. | Divida o modelo |
| Mantenha pelo menos um nível. | Eliminou todas as linhas de nível |
| Cada nível precisa de um nome. / Dois níveis chamam-se "…". | Dê a cada nível um nome diferente |

## A abertura de um ficheiro falha

| Mensagem | Causa |
|---|---|
| O DetailCraft abre os seus próprios modelos (.detailcraft.json). A importação de IFC ainda não está implementada. | O ficheiro não é um ficheiro `.json` |
| Este não é um modelo do DetailCraft (não é JSON). | O ficheiro está danificado ou é outro JSON |
| Este não é um modelo do DetailCraft. | Um ficheiro JSON de outro programa |
| Este modelo foi guardado por um DetailCraft mais recente (formato 2). | Abra-o no DetailCraft mais recente que o guardou |
| Esse ficheiro é grande demais para ser um modelo do DetailCraft. | Mais de 50 MB |

Quando um ficheiro abre com avisos como "2 barras não eram válidas e foram deixadas de fora.", o resto do modelo está bem. Não guarde por cima do original antes de verificar o que ficou de fora.

## Exportações

| Mensagem | Causa |
|---|---|
| Ainda não há nada para exportar. | {{ui:IFC}} com um modelo vazio |
| Não há peças de perfil em I nem chapas para escrever ficheiros NC. | Só existem canais, cantoneiras ou tubos no modelo |
| Não escrito (até agora só perfis em I e chapas): … | Essas marcas não são perfis em I nem chapas; as restantes foram escritas |
| Não há sapatas, por isso não há varões para listar. | {{ui:Dobragem}} sem sapatas |
| … carácter(es) fora do tipo de letra do PDF impressos como "?". | O nome do modelo ou uma classe tem caracteres que o tipo de letra do PDF não tem |

{{ui:Desenho de fabrico}} desativado: o modelo ainda não tem peças.

## Os downloads não aparecem

Cada ficheiro guardado e cada exportação é um download do navegador. Verifique a lista de downloads do navegador. Se o navegador pedir confirmação antes de transferir vários ficheiros, ou bloquear transferências deste site, permita-as. No Safari, verifique o botão de transferências na barra de ferramentas.

## As teclas não fazem nada

- O cursor está num campo de texto ou de números: as teclas de ferramenta e {{key:Delete}} são ignoradas aí, para poder escrever. Prima {{key:Tab}} ou clique na vista.
- Há uma caixa de diálogo aberta: feche-a primeiro.
- O navegador tem o teclado (por exemplo, a barra de endereços): clique dentro do DetailCraft.
- {{key:Ctrl+Shift+F}} usa Ctrl mesmo num Mac.

## Problemas offline

O botão {{ui:Guardar para offline}} na barra da aplicação mostra em que estado está a cópia offline. Como funciona a gravação: [Trabalhar offline](common:offline).

| O botão mostra | O que significa | O que fazer |
|---|---|---|
| {{ui:Guardar para offline}} | Ainda não há cópia offline neste navegador | Escolha-o enquanto estiver ligado |
| A guardar 5 de 20 | A gravação está em curso | Espere por {{ui:Pronto para offline}}; mantenha o separador aberto |
| {{ui:Pronto para offline}} | O DetailCraft, a vista 3D, todas as exportações e esta ajuda funcionam sem ligação | Nada. Clique para {{ui:Guardar novamente (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}} |
| {{ui:Não foi possível guardar}} | Alguns ficheiros não foram transferidos | Verifique a ligação e clique para tentar de novo |
| {{ui:Offline indisponível}} | Esta janela não pode manter uma cópia offline: as janelas privadas e alguns computadores geridos bloqueiam-no | Use uma janela normal, ou trabalhe online |

Se estiver offline e o botão não mostrar {{ui:Pronto para offline}}, não recarregue nem feche o separador: o que já foi carregado continua a funcionar. Guarde o modelo com {{key:Mod+S}} e espere até voltar a estar ligado.

## Trabalho não guardado

Se o navegador perguntar se quer sair da página, o DetailCraft tem alterações não guardadas. Escolha ficar na página e prima {{key:Mod+S}}. O DetailCraft não consegue recuperar um modelo depois de o separador ser fechado.

## Ainda sem solução

Anote o que fez e a mensagem exata, e informe-nos através da [página de suporte](https://getcadcraft.com/support).
