---
title: Colocar chapas e acrescentar perfis personalizados
summary: Colocar chapas soltas por espessura e largura, e definir as suas próprias secções em I, U, cantoneira, tubo ou barra chata.
keywords: chapa, plana, perfil personalizado, perfil do utilizador, paramétrico, secção, forma, secção transversal, pl
from: c24c3b51
---

## Colocar uma chapa

Uma chapa é colocada como uma viga: vai entre duas interseções, com a largura transversal e a espessura para cima.

1. Escolha {{ui:Chapa}} no grupo {{ui:Colocar}}, ou prima {{key:P}}.
2. No painel {{ui:Propriedades}}, defina {{ui:Espessura (mm)}} e {{ui:Largura (mm)}}. A predefinição é 20 x 200 em A36.
3. Defina {{ui:Material}} e {{ui:Rotação (°)}}, se necessário. Uma rotação de 90 põe a chapa de cutelo.
4. Clique em duas interseções, ou use o formulário {{ui:Adicionar por eixo}}.

O nome do perfil da chapa escreve-se `PL<espessura>x<largura>`, por exemplo PL20x200. O seu comprimento é a distância entre os dois pontos.

Para redimensionar uma chapa colocada, selecione-a e altere {{ui:Espessura (mm)}} ou {{ui:Largura (mm)}}.

As chapas que coloca são peças próprias (marca p, montagem P). As chapas de topo e as chapas de base criadas pelas ligações também são chapas, mas altera-as através da respetiva ligação; ver [Chapas de topo](topic:end-plates).

## Acrescentar um perfil personalizado

Quando a secção de que precisa não está no catálogo, crie-a a partir das suas dimensões. Um perfil personalizado pertence ao modelo e é guardado com ele. Para o usar em todos os modelos novos, mantenha-o em {{ui:Os meus perfis}}, descrito em "Guardar um perfil para modelos novos" abaixo.

1. No painel {{ui:Modelo}} à esquerda, abra {{ui:Perfil personalizado}}.
2. Escreva um {{ui:Nome}}, por exemplo `W8x18-custom` ou `RHS 120x80x5`. Não pode ser um nome de catálogo nem parecer um nome de chapa.
3. Escolha uma {{ui:Forma}}: {{ui:Perfil em I}}, {{ui:Perfil U}}, {{ui:Cantoneira de abas iguais}}, {{ui:Tubo retangular}}, {{ui:Tubo circular}} ou {{ui:Barra plana}}.
4. Preencha as dimensões que aparecerem, todas em milímetros:

| Forma | Dimensões |
|---|---|
| Perfil em I | Altura d, Largura do banzo bf, Alma tw, Banzo tf, Raio de concordância r (pode ser 0) |
| Perfil U | Altura d, Largura do banzo bf, Alma tw, Banzo tf (cantos retos) |
| Cantoneira de abas iguais | Largura b (cada aba), Espessura t |
| Tubo retangular | Altura h, Largura b, Espessura t (raio do canto exterior 2t) |
| Tubo circular | Diâmetro D, Espessura t |
| Barra plana | Largura b, Espessura t |

5. Deixe {{ui:Guardar em Os meus perfis}} marcado para o ter em todos os modelos novos (ver abaixo), ou desmarque-o para o manter só neste modelo.
6. Escolha {{ui:Adicionar um perfil}}.

A barra de estado diz "Perfil "…" acrescentado; está em todas as listas de perfis em Personalizado." Aparece na lista por baixo do formulário e no fim de todas as listas de {{ui:Perfil}}.

O DetailCraft verifica se a forma pode existir. Verá mensagens como "A alma e os banzos não cabem na altura e na largura.", "O raio de concordância é demasiado grande para o banzo." ou "A parede é demasiado espessa." Corrija os números e escolha {{ui:Adicionar um perfil}} de novo.

### O que recebem os perfis personalizados

- Massa por metro a partir da área × 7850 kg/m³ (os tamanhos do catálogo usam o peso publicado).
- Os perfis personalizados em I recebem furos, recortes, chapas de topo e de base, ficheiros NC e desenhos de fabrico, como os perfis em I do catálogo.
- As barras planas personalizadas funcionam como chapas.
- Os perfis U e os tubos personalizados recebem furos; cantoneiras e tubos circulares ainda não.

Não pode editar nem remover um perfil personalizado de um modelo depois de o acrescentar (use {{key:Mod+Z}} logo de seguida se se enganar). Dê um novo nome a um perfil corrigido.

## Guardar um perfil para modelos novos

{{ui:Os meus perfis}}, por baixo do formulário, é a sua própria lista de perfis personalizados. Fica guardada neste navegador, neste computador, e não num ficheiro de modelo nem na sua conta.

- Um perfil acrescentado com {{ui:Guardar em Os meus perfis}} marcado entra na lista. Cada modelo novo, incluindo o que o DetailCraft abre quando o inicia, começa com todos eles nas suas listas de perfis.
- Um perfil que já está num modelo mas não na lista tem ao lado um botão {{ui:Guardar}}.
- Num modelo que não tem um dos seus perfis (um ficheiro mais antigo, por exemplo), escolha {{ui:Usar aqui}} para o acrescentar.
- {{ui:Remover}} tira um perfil da lista. Os modelos que já o usam mantêm a sua própria cópia.
- Um modelo que abre mantém os perfis guardados no seu ficheiro. Abrir um ficheiro nunca altera a sua lista.
- Um nome que já está na lista com dimensões diferentes é recusado: dê ao novo outro nome.
- Limpar os dados do site no navegador, ou usar outro navegador ou computador, começa com uma lista vazia. Uma janela privada não a consegue guardar; a aplicação avisa disso.
