---
title: Fases
summary: Divida o modelo em fases (sequências de montagem ou entregas), mostre ou oculte cada fase, coloque peças em uma fase e numere as marcas por fase.
keywords: fase, fases, gerenciador de fases, sequência de montagem, entrega, lote, sequência, ocultar fase, mostrar fase, filtro, numeração, prefixo de marca, por fase
from: bae506f5
---

Uma fase é um grupo de peças fabricadas, entregues ou montadas juntas: uma sequência de montagem, uma entrega, um lote. Cada barra e cada fundação está em uma fase. Uma ligação está na fase da sua barra principal: a viga de uma chapa de extremidade, o pilar de uma chapa de base. Um modelo novo tem uma fase.

## O painel Fases

A seção {{ui:Fases}} do painel {{ui:Modelo}} lista cada fase:

- a caixa de seleção mostra ou oculta a fase na vista;
- o número, e um nome que você pode digitar (vazio = "Fase 2" e assim por diante);
- quantas peças há nela;
- o botão {{ui:×}} remove uma fase. Só uma fase vazia pode ser removida: coloque antes as suas peças em outra fase.

{{ui:Adicionar fase}} acrescenta o próximo número e torna essa a fase em que as novas peças entram.

## Colocar peças em uma fase

- **Peças novas:** {{ui:As novas peças vão para}} escolhe a fase em que entram todas as barras e fundações que você inserir a partir de agora.
- **Uma peça:** selecione-a e altere {{ui:Fase}} no painel {{ui:Propriedades}}.
- **Várias peças:** selecione-as (uma janela, {{key:Shift}}+clique, {{key:Mod+A}}) e altere {{ui:Fase}} no topo do painel {{ui:Propriedades}}. Ele mostra **Vários** quando elas estão em fases diferentes. Uma alteração equivale a um passo de desfazer.

Cópias mantêm a fase da peça de que foram copiadas, também quando coladas em outro modelo (a fase é adicionada lá).

## Mostrar e ocultar fases

Uma fase oculta não é desenhada na vista, não pode ser clicada nem capturada por uma janela de seleção, e {{key:Mod+A}} a deixa de fora. Ela continua na lista de materiais, nos relatórios, nos desenhos e em todas as exportações. Ocultar vale só para a vista: não é salvo e não tem desfazer.

## Marcas por fase

Com **Numerar marcas por fase** ativado (começa ligado) e peças em mais de uma fase, cada fase é numerada à parte e suas marcas começam com o número da fase: marcas de peça 1-b1, 2-b1, marcas de montagem 2-B1, fundações 2-F1. Duas vigas idênticas em fases diferentes têm então marcas diferentes, porque são fabricadas e enviadas em momentos diferentes. Com apenas uma fase em uso, as marcas não têm prefixo. Desligue para numerar o modelo inteiro como um só, de modo que peças idênticas compartilhem uma marca, qualquer que seja a fase.

A fase é gravada na exportação IFC (conjunto de propriedades DetailCraft, Phase).

:::note
Modelos com fases são salvos no formato de arquivo 2 do DetailCraft. A versão 0.3 do DetailCraft não consegue abri-los; esta versão abre arquivos antigos, com todas as peças na fase 1.
:::
