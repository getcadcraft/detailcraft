---
title: Inserir chapas e adicionar perfis personalizados
summary: Insira chapas avulsas por espessura e largura, e defina suas próprias seções em I, U, cantoneira, tubo ou barra chata.
keywords: chapa, chata, perfil personalizado, perfil do usuário, paramétrico, seção, forma, seção transversal, pl
from: c24c3b51
---

## Inserir uma chapa

Uma chapa é inserida como uma viga: ela vai entre duas interseções, com a largura transversal e a espessura para cima.

1. Escolha {{ui:Chapa}} no grupo {{ui:Inserir}}, ou pressione {{key:P}}.
2. No painel {{ui:Propriedades}}, defina {{ui:Espessura (mm)}} e {{ui:Largura (mm)}}. O padrão é 20 x 200 em A36.
3. Defina {{ui:Material}} e {{ui:Rotação (°)}} se necessário. Uma rotação de 90 coloca a chapa de pé.
4. Clique em duas interseções, ou use o formulário {{ui:Adicionar por eixo}}.

O nome de perfil da chapa é escrito `PL<espessura>x<largura>`, por exemplo PL20x200. Seu comprimento é a distância entre os dois pontos.

Para redimensionar uma chapa inserida, selecione-a e altere {{ui:Espessura (mm)}} ou {{ui:Largura (mm)}}.

Chapas que você insere são peças próprias (marca p, montagem P). Chapas de extremidade e chapas de base criadas por ligações também são chapas, mas você as altera pela ligação; veja [Chapas de extremidade](topic:end-plates).

## Adicionar um perfil personalizado

Quando a seção de que você precisa não está no catálogo, crie-a a partir das suas dimensões. Um perfil personalizado pertence ao modelo e é salvo com ele. Para usá-lo em todo modelo novo, mantenha-o em {{ui:Meus perfis}}, descrito em "Manter um perfil para modelos novos" abaixo.

1. No painel {{ui:Modelo}} à esquerda, abra {{ui:Perfil personalizado}}.
2. Digite um {{ui:Nome}}, por exemplo `W8x18-custom` ou `RHS 120x80x5`. Ele não pode ser um nome de catálogo nem parecer um nome de chapa.
3. Escolha uma {{ui:Forma}}: {{ui:Perfil I}}, {{ui:Perfil U}}, {{ui:Cantoneira de abas iguais}}, {{ui:Tubo retangular}}, {{ui:Tubo redondo}} ou {{ui:Barra chata}}.
4. Preencha as dimensões que aparecem, todas em milímetros:

| Forma | Dimensões |
|---|---|
| Perfil I | Altura d, Largura da mesa bf, Alma tw, Mesa tf, Raio de concordância r (pode ser 0) |
| Perfil U | Altura d, Largura da mesa bf, Alma tw, Mesa tf (cantos retos) |
| Cantoneira de abas iguais | Largura b (cada aba), Espessura t |
| Tubo retangular | Altura h, Largura b, Espessura t (raio externo do canto 2t) |
| Tubo redondo | Diâmetro D, Espessura t |
| Barra chata | Largura b, Espessura t |

5. Deixe {{ui:Manter em Meus perfis}} marcado para tê-lo em todo modelo novo (veja abaixo), ou desmarque para mantê-lo só neste modelo.
6. Escolha {{ui:Adicionar perfil}}.

A barra de status diz "Perfil "…" adicionado; ele está em todas as listas de perfis em Personalizado." Ele aparece na lista abaixo do formulário e no fim de toda lista {{ui:Perfil}}.

O DetailCraft verifica se a forma pode existir. Você verá mensagens como "A alma e as mesas não cabem dentro da altura e da largura.", "O raio de concordância é grande demais para a mesa." ou "A parede é espessa demais." Corrija os números e escolha {{ui:Adicionar perfil}} de novo.

### O que os perfis personalizados recebem

- Massa por metro a partir da área × 7850 kg/m³ (tamanhos de catálogo usam o peso publicado).
- Perfis I personalizados recebem furos, rebaixos, chapas de extremidade, arquivos NC e desenhos de fabricação, como os perfis I de catálogo.
- Barras chatas personalizadas se comportam como chapas.
- Perfis U e tubos personalizados recebem furos; cantoneiras e tubos redondos ainda não.

Você não pode editar nem remover um perfil personalizado de um modelo depois de adicioná-lo (use {{key:Mod+Z}} logo se cometer um erro). Dê a um perfil corrigido um novo nome.

## Manter um perfil para modelos novos

{{ui:Meus perfis}}, abaixo do formulário, é a sua lista de perfis personalizados. Ela fica guardada neste navegador, neste computador, não em um arquivo de modelo nem na sua conta.

- Um perfil adicionado com {{ui:Manter em Meus perfis}} marcado entra na lista. Todo modelo novo, inclusive o que o DetailCraft abre quando você o inicia, começa com todos eles nas listas de perfis.
- Um perfil que já está em um modelo, mas não na lista, tem um botão {{ui:Manter}} ao lado.
- Em um modelo que não tem um dos seus perfis (um arquivo antigo, por exemplo), escolha {{ui:Usar aqui}} para adicioná-lo.
- {{ui:Remover}} tira um perfil da lista. Modelos que já o usam mantêm a própria cópia.
- Um modelo que você abre mantém os perfis salvos no seu arquivo. Abrir um arquivo nunca altera a sua lista.
- Um nome que já está na lista com dimensões diferentes é recusado: dê ao novo outro nome.
- Limpar os dados do site no navegador, ou usar outro navegador ou computador, começa com uma lista vazia. Uma janela privada não consegue mantê-la; o aplicativo avisa isso.
