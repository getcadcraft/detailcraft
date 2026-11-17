---
title: Colar uma área copiada como imagem de referência
summary: Copie parte de uma folha em PDF no MarkupCraft e cole no DetailCraft no tamanho real, deitada sobre um nível sob o aço, para modelar por cima.
keywords: imagem, imagem de referência, base, plano de fundo, copiar área, markupcraft, pdf, decalque, tamanho real, escala, opacidade, sobreposição
from: 0c48445f
---

A ferramenta Copiar área do MarkupCraft copia parte de uma folha como uma imagem que sabe o próprio tamanho. Cole-a no DetailCraft e ela fica deitada e nivelada, no tamanho real, sob a grade e o aço, para que você posicione barras sobre uma planta dos desenhos.

## Colar

1. No MarkupCraft, copie a área com {{ui:Mais}} › {{ui:Copiar uma área da página…}}, depois {{ui:Copiar}} (ou {{ui:Copiar como sobreposição}}, que deixa o papel transparente).
2. No DetailCraft (no mesmo navegador), pressione {{key:Mod+V}} ou escolha {{ui:Colar}}.

A imagem cai no meio da grade, no nível mostrado em {{ui:Planta}} (em 3D ou em uma elevação, no nível mais baixo) e fica selecionada. A barra de status informa o tamanho dela.

- **Tamanho real:** quando a folha tinha escala de desenho, cada pixel é desenhado com o comprimento que ele mostra no desenho.
- **Tamanho no papel:** quando a folha não tinha escala, a imagem tem o tamanho que a área tinha no papel, e a barra de status informa isso. Digite um novo **mm por pixel** em {{ui:Propriedades}} para escalá-la.

Uma área copiada como sobreposição começa com a opacidade com que foi copiada.

{{key:Mod+V}} cola o que você copiou por último: a área do MarkupCraft, ou barras e sapatas copiadas no DetailCraft. Se outra imagem foi copiada para a área de transferência depois da área (de outro programa), nada é colado; copie a área novamente.

## Mover, alterar e excluir

- Clique na imagem para selecioná-la (o que estiver na frente dela é escolhido primeiro). Um contorno azul mostra que ela está selecionada.
- Arraste para movê-la pelo nível. O centro e os cantos dela se encaixam nas interseções da grade.
- Em {{ui:Propriedades}}, digite onde fica o centro dela (x, y), o nível em que ela está (z), seu **mm por pixel** e sua **opacidade**.
- {{key:Delete}} ou {{ui:Excluir}} remove a imagem.

Cada colagem, movimentação, alteração e exclusão é uma etapa: {{key:Mod+Z}} a desfaz.

A imagem é salva no arquivo do modelo, então abre junto com ele. Ela serve somente de referência: não aparece nos desenhos, nas exportações, na lista de materiais nem em uma cópia.
