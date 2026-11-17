---
title: Colar uma área copiada como imagem de referência
summary: Copiar parte de uma folha PDF no MarkupCraft e colá-la no DetailCraft à escala real, assente num nível sob o aço, para modelar por cima.
keywords: imagem, imagem de referência, base, fundo, copiar área, markupcraft, pdf, decalcar, escala real, escala, opacidade, sobreposição
from: 0c48445f
---

A ferramenta Copiar área do MarkupCraft copia parte de uma folha como imagem que sabe o seu próprio tamanho. Cole-a no DetailCraft e fica assente em horizontal sobre um nível, à escala real, sob a grelha e o aço, para poder colocar barras sobre uma planta dos desenhos.

## Colar a imagem

1. No MarkupCraft, copie a área com {{ui:Mais}} › {{ui:Copiar uma área da página…}} e depois {{ui:Copiar}} (ou {{ui:Copiar como sobreposição}}, que torna o papel transparente).
2. No DetailCraft (no mesmo navegador), prima {{key:Mod+V}} ou escolha {{ui:Colar}}.

A imagem fica no centro da grelha, no nível mostrado em {{ui:Planta}} (em 3D ou num alçado, no nível mais baixo), e fica selecionada. A barra de estado indica o seu tamanho.

- **Tamanho real:** quando a folha tinha escala de desenho, cada pixel é desenhado com o comprimento que mostra no desenho.
- **Tamanho no papel:** quando a folha não tinha escala, a imagem tem o tamanho que a área tinha no papel, e a barra de estado indica-o. Escreva um novo **mm por pixel** em {{ui:Propriedades}} para a escalar.

Uma área copiada como sobreposição começa com a opacidade com que foi copiada.

{{key:Mod+V}} cola o que copiou por último: a área do MarkupCraft, ou barras e sapatas copiadas no DetailCraft. Se outra imagem tiver sido copiada para a área de transferência depois da área (de outro programa), nada é colado; copie a área novamente.

## Mover, alterar e eliminar

- Clique na imagem para a selecionar (o que estiver à frente dela é escolhido primeiro). Um contorno azul indica que está selecionada.
- Arraste-a para a mover pelo nível. O seu centro e os cantos ajustam-se às interseções da grelha.
- Em {{ui:Propriedades}}, escreva onde fica o seu centro (x, y) e o nível em que assenta (z), o seu **mm por pixel** e a sua **opacidade**.
- {{key:Delete}} ou {{ui:Eliminar}} remove-a.

Cada colagem, movimento, alteração e eliminação é um passo: {{key:Mod+Z}} anula-o.

A imagem fica guardada no ficheiro do modelo, pelo que abre com o modelo. É apenas uma referência: não aparece nos desenhos, nas exportações, na lista de materiais nem numa cópia.
