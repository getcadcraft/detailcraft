---
title: Vindo de outro software de detalhamento
summary: Como os hábitos de um pacote completo de detalhamento se mapeiam para o DetailCraft, e as diferenças que pegam detalhistas experientes de surpresa.
keywords: troca, migração, familiar, fluxo de trabalho, comparação, diferenças, numeração, componentes, catálogo, desenhos, hábitos
from: 39639a5d
---

Se você detalha no Tekla Structures, a maior parte do DetailCraft vai parecer familiar: eixos, níveis, perfis de um catálogo, peças e montagens, ligações, numeração, arquivos NC, IFC. A escala é muito diferente: o Tekla Structures é um sistema completo de produção, e o DetailCraft é um aplicativo de navegador pequeno e ainda inicial, que faz algumas tarefas de ponta a ponta. Esta página mostra onde seus hábitos se mantêm e onde não.

:::tip
Se suas mãos conhecem a faixa de opções do Tekla Structures, escolha o estilo de menu {{ui:Faixa de aço}} em {{ui:Configurações}} › {{ui:DetailCraft}} › {{ui:Menus, teclas e mouse}}: abas Modelagem, Detalhamento, Editar, Desenhos, Fabricação e Vista, e o botão do meio move a vista. Se você vem do AutoCAD e gosta de digitar comandos, {{ui:Desenho clássico}} acrescenta uma linha de comando (BEAM, COLUMN, ENDPLATE, ZOOM …). Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse).
:::

## Mapa rápido

| Você está acostumado a | No DetailCraft |
|---|---|
| Criar eixos com coordenadas em uma caixa de diálogo | {{ui:Eixos}} no painel esquerdo: rótulos e os espaçamentos entre as linhas, não coordenadas absolutas. Linhas numeradas correm em uma direção, linhas com letras na outra |
| Níveis como coordenadas Z dos eixos | Uma lista separada {{ui:Níveis}}, com nome e elevação por linha, aplicada com {{ui:Aplicar níveis}} |
| Escolher pontos em qualquer lugar com snaps | Cliques encaixam apenas em interseções de eixos. Pontos fora da grade são digitados em {{ui:Extremidades (x, y, z mm)}} de um membro |
| Os comandos de pilar, viga e chapa | {{ui:Pilar}} ({{key:C}}), {{ui:Viga}} ({{key:B}}), {{ui:Contraventamento}} ({{key:R}}), {{ui:Chapa}} ({{key:P}}), {{ui:Sapata}} ({{key:F}}) |
| Caixa de propriedades da peça (clique duplo na peça) | Um clique: o painel {{ui:Propriedades}} à direita está sempre ativo; não há caixa de diálogo nem botão Modificar ou Aplicar |
| Plano de posição, rotação e configurações de profundidade | {{ui:Posição}} (topo do aço, centralizado ou embaixo na linha) e {{ui:Rotação (°)}}. Sem deslocamentos horizontais separados |
| O catálogo de perfis | Uma lista fixa de 2,311 tamanhos publicados (AISC W, S, C, L, HSS, Pipe; europeus IPE, HEA, HEB, UPN; britânicos UB, UC, PFC, EA, UEA, SHS, RHS, CHS e seções ocas formadas a frio), além de chapas paramétricas e suas próprias seções {{ui:Perfil personalizado}} |
| Catálogo de materiais | Sete classes em uma lista: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Aplicar um componente de ligação e sua caixa de diálogo | Selecione a viga e escolha {{ui:Chapas de extremidade}}. As configurações aparecem no painel {{ui:Propriedades}}. Só existem duas ligações (chapa de topo na mesa do pilar, chapa de base) |
| Ligação automática, ou copiar uma junta para juntas semelhantes | Selecione uma ligação e escolha {{ui:Aplicar a semelhantes (n)}} |
| Numeração com séries e números iniciais | Sem comando: as marcas se atualizam sozinhas após cada alteração, com prefixos fixos c, b, br, p e C, B, BR, P |
| Caixas de diálogo de parafusos e furos | Furos são digitados por face e posição. Parafusos vêm apenas de ligações |
| Ferramentas de recorte, encaixe e recorte poligonal | Recortes (no topo ou na base, em qualquer extremidade) apenas em perfis I. Os recortes de ligação são automáticos |
| Relatórios e modelos | Três relatórios fixos em guias na parte inferior, e downloads em CSV |
| Criação de desenhos e a lista de desenhos | Um desenho de fabricação por marca de peça, todos feitos de uma vez, visualizados e depois baixados como um PDF ou folha por folha. Nada é guardado nem editado |
| Exportação de arquivo NC | {{ui:Arquivos NC}}: um arquivo DSTV por marca de peça, apenas perfis I e chapas, compactado em zip |
| Exportação IFC | {{ui:IFC}}: IFC4 do modelo inteiro, com armadura |
| Armadura em qualquer peça de concreto | Armadura apenas em sapatas retangulares isoladas, com bitolas dos EUA, com malha inferior e barras de espera |
| Modelo salvo em uma pasta de projeto, multiusuário | Um arquivo `.detailcraft.json` que você baixa. Usuário único, no seu computador |
| Histórico de desfazer | {{key:Mod+Z}} e {{key:Mod+Y}}, até 200 passos, mantidos até você abrir ou iniciar outro modelo |

## Diferenças que pegam as pessoas

### As marcas mudam sozinhas

Não há etapa de numeração. As marcas são recalculadas após cada alteração, então estão sempre atuais, mas também podem renumerar: adicione um pilar e o c3 de ontem pode virar c4. Não existe um "histórico de numeração" para manter marcas antigas. Termine o modelo e depois emita a lista de materiais, os arquivos NC e os desenhos de fabricação juntos, a partir de um único arquivo salvo.

### O botão do meio do mouse amplia; não faz pan

Na vista 3D: arrastar com o botão esquerdo gira, arrastar com o direito faz pan, a roda amplia, e arrastar com o botão do meio também amplia. Manter {{key:Shift}} enquanto arrasta com o botão esquerdo também faz pan. A roda amplia em direção ao centro da vista, não ao ponteiro. Não há escolha de centro de rotação: o modelo gira em torno do centro da vista. Veja [Mover-se na vista 3D](topic:navigate-3d).

### Pilares ficam voltados para um lado por padrão

Com rotação 0, as mesas de um pilar ficam voltadas na direção dos eixos numerados. Vigas que correm entre eixos com letras se encaixam na alma, e chapas de topo são recusadas ali ("Vigas que se encaixam na alma de um pilar ainda não são feitas"). Gire esses pilares em 90° antes de adicionar ligações.

### Elevações só em eixos com letras

{{ui:Elevação}} olha apenas ao longo dos eixos com letras. Não há vistas ao longo dos eixos numerados, nem vistas salvas, nem planos de trabalho. Use {{ui:3D}} ou {{ui:Adicionar por eixo}} para pórticos em eixos numerados.

### Seleção, cópia e movimento

Selecione várias peças com {{key:Shift}}+clique ou {{key:Mod+A}}, depois copie, recorte, cole (em uma interseção de eixos, em um deslocamento digitado, ou no mesmo local) e duplique-as, ligações incluídas ([Copiar, colar e duplicar](topic:copy-paste)). Não há seleção por janela, nem filtro de seleção, nem mover, espelhar ou matriz, e as propriedades são alteradas um membro por vez no painel {{ui:Propriedades}}.

### Os eixos não arrastam os membros

Os membros mantêm suas coordenadas quando você altera o espaçamento dos eixos; nada se move com as linhas. Altere a grade antes de posicionar o aço, ou edite depois as coordenadas das extremidades de cada membro.

### Ligações não são projetadas

As duas ligações posicionam chapas, furos, parafusos e soldas a partir dos números que você informa. Não há verificação de projeto de nenhum tipo, apenas avisos de borda e espaçamento (da EN 1993-1-8 Tabela 3.3).

### Furos não são cortados na vista 3D

Os furos aparecem como tampões escuros. Eles são furos reais nos arquivos NC, nos desenhos de fabricação e no arquivo IFC. Os recortes são cortados na vista.

### Os pesos são brutos

O peso do aço não desconta furos nem recortes, e o peso dos parafusos não é incluído.

### Apenas milímetros

Tudo é digitado e mostrado em milímetros, mesmo para perfis AISC. Os nomes dos perfis mantêm sua forma publicada (W12x50, HSS6x6x1/4).

### Sem desenhos para gerenciar

Não há lista de desenhos, editor de desenhos, desenho de arranjo geral nem desenhos de montagem. Um desenho de fabricação é feito quando você pede e baixado; para alterá-lo, altere o modelo e gere-o de novo.

### Ele roda em um navegador

Salvar baixa um arquivo. Atalhos de teclado que o navegador reserva para si não podem ser usados. Seus modelos nunca saem do seu computador: veja [Onde seus arquivos vão](common:your-files).

## O que continuar fazendo no seu software atual

Hoje o DetailCraft serve para pequenos pórticos, para testar uma ideia, para ensinar, ou para produzir arquivos NC e desenhos de fabricação de trabalhos simples de vigas e pilares. Continue usando o software atual para ligações complexas, desenhos de arranjo geral, desenhos de montagem, projetos multiusuário e tudo o que estiver listado em [O que ainda não está implementado](topic:not-built-yet).
