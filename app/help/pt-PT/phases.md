---
title: Fases
summary: Dividir o modelo em fases (sequências de montagem ou entregas), mostrar ou ocultar cada fase, colocar peças numa fase e numerar as marcas por fase.
keywords: fase, fases, gestor de fases, sequência de montagem, entrega, lote, sequência, ocultar fase, mostrar fase, filtro, numeração, prefixo de marca, por fase
from: bae506f5
---

Uma fase é um grupo de peças que são fabricadas, entregues ou montadas em conjunto: uma sequência de montagem, uma entrega, um lote. Cada elemento e cada sapata está numa fase. Uma ligação está na fase do seu elemento principal: a viga de uma chapa de topo, o pilar de uma chapa de base. Um modelo novo tem uma fase.

## O painel Fases

A secção {{ui:Fases}} do painel {{ui:Modelo}} lista todas as fases:

- a caixa de verificação mostra ou oculta a fase na vista;
- o número, e um nome que pode escrever (vazio = "Fase 2" e assim por diante);
- quantas peças tem;
- o botão {{ui:×}} remove uma fase. Só uma fase vazia pode ser removida: primeiro coloque as suas peças noutra fase.

{{ui:Adicionar uma fase}} acrescenta o número seguinte e torna-a a fase para onde vão as peças novas.

## Colocar peças numa fase

- **Peças novas:** {{ui:As peças novas vão para}} escolhe a fase para onde vai cada elemento e cada sapata que colocar a partir de agora.
- **Uma peça:** selecione-a e altere {{ui:Fase}} no painel {{ui:Propriedades}}.
- **Várias peças:** selecione-as (uma janela, {{key:Shift}}+clique, {{key:Mod+A}}) e altere {{ui:Fase}} no topo do painel {{ui:Propriedades}}. Mostra **Vários** quando estão em fases diferentes. Uma alteração é um único passo de anulação.

As cópias mantêm a fase da peça de onde foram copiadas, também quando coladas noutro modelo (a fase é acrescentada aí).

## Mostrar e ocultar fases

Uma fase oculta não é desenhada na vista, não pode ser clicada nem apanhada por uma janela de seleção, e {{key:Mod+A}} deixa-a de fora. Continua na lista de materiais, nos relatórios, nos desenhos e em todas as exportações. Ocultar serve apenas para a vista: não é guardado e não tem anulação.

## Marcas por fase

Com **Numerar marcas por fase** ativo (começa ativo) e peças em mais de uma fase, cada fase é numerada à parte e as suas marcas começam pelo número da fase: marcas de peça 1-b1, 2-b1, marcas de montagem 2-B1, sapatas 2-F1. Duas vigas idênticas em fases diferentes têm então marcas diferentes, porque são fabricadas e enviadas em momentos diferentes. Com uma só fase em uso, as marcas não têm prefixo. Desligue-a para numerar o modelo inteiro como um só, de modo que peças idênticas partilhem a mesma marca, qualquer que seja a fase.

A fase é escrita na exportação IFC (conjunto de propriedades DetailCraft, Phase).

:::note
Os modelos com fases são guardados no formato de ficheiro 2 do DetailCraft. A versão 0.3 do DetailCraft não os consegue abrir; esta versão abre os ficheiros mais antigos, com todas as peças na fase 1.
:::
