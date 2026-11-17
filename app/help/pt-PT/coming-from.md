---
title: Vindo de outro software de detalhe
summary: Como os hábitos de um pacote completo de detalhe correspondem ao DetailCraft, e as diferenças que apanham de surpresa os detalhistas experientes.
keywords: mudança, migrar, familiar, fluxo de trabalho, comparação, diferenças, numeração, componentes, catálogo, desenhos, hábitos
from: 39639a5d
---

Se detalha no Tekla Structures, a maior parte do DetailCraft será familiar: eixos, níveis, perfis de catálogo, peças e montagens, ligações, numeração, ficheiros NC, IFC. A escala é muito diferente: o Tekla Structures é um sistema de produção completo, e o DetailCraft é uma aplicação de navegador pequena e inicial, que faz algumas tarefas de ponta a ponta. Esta página indica onde os seus hábitos se mantêm e onde não.

:::tip
Se as suas mãos conhecem o friso do Tekla Structures, escolha o estilo de menu {{ui:Friso de aço}} em {{ui:Definições}} › {{ui:DetailCraft}} › {{ui:Menus, teclas e rato}}: separadores Modelação, Detalhe, Editar, Desenhos, Fabrico e Vista, e o botão do meio desloca a vista. Se vem do AutoCAD e gosta de escrever comandos, {{ui:Desenho clássico}} acrescenta uma linha de comandos (BEAM, COLUMN, ENDPLATE, ZOOM …). Ver [Menus, teclas e rato](topic:menus-keys-and-mouse).
:::

## Mapa rápido

| Está habituado a | No DetailCraft |
|---|---|
| Criar eixos com coordenadas numa caixa de diálogo | {{ui:Eixos}} no painel esquerdo: etiquetas e os espaçamentos entre linhas, não coordenadas absolutas. As linhas numeradas correm num sentido, as linhas com letras no outro |
| Níveis como coordenadas Z dos eixos | Uma lista {{ui:Níveis}} separada, nome e cota por linha, aplicada com {{ui:Aplicar os níveis}} |
| Escolher pontos em qualquer lado com snap | Os cliques fazem snap apenas às interseções de eixos. Os pontos fora da malha escrevem-se em {{ui:Extremidades (x, y, z mm)}} de um membro |
| Os comandos de pilar, viga e chapa | {{ui:Pilar}} ({{key:C}}), {{ui:Viga}} ({{key:B}}), {{ui:Contraventamento}} ({{key:R}}), {{ui:Chapa}} ({{key:P}}), {{ui:Sapata}} ({{key:F}}) |
| Caixa de propriedades da peça (duplo clique na peça) | Um clique: o painel {{ui:Propriedades}} à direita está sempre ativo; não há caixa de diálogo nem botões Modificar ou Aplicar |
| Posição no plano, definições de rotação e de profundidade | {{ui:Posição}} (topo do aço, centrado ou em baixo sobre a linha) e {{ui:Rotação (°)}}. Não há deslocamentos horizontais separados |
| O catálogo de perfis | Uma lista fixa de 2,311 tamanhos publicados (AISC W, S, C, L, HSS, Pipe; europeus IPE, HEA, HEB, UPN; britânicos UB, UC, PFC, EA, UEA, SHS, RHS, CHS e perfis ocos enformados a frio), mais chapas paramétricas e as suas próprias secções {{ui:Perfil personalizado}} |
| Catálogo de materiais | Sete classes numa lista: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Aplicar um componente de ligação e a sua caixa de diálogo | Selecione a viga e escolha {{ui:Chapas de topo}}. As definições aparecem no painel {{ui:Propriedades}}. Só existem duas ligações (chapa de topo na aba do pilar, chapa de base) |
| Ligação automática, ou copiar um nó para nós semelhantes | Selecione uma ligação e escolha {{ui:Aplicar a semelhantes (n)}} |
| Numeração com séries e números iniciais | Sem comando: as marcas atualizam-se sozinhas após cada alteração, com prefixos fixos c, b, br, p e C, B, BR, P |
| Caixas de parafusos e de furos | Os furos escrevem-se por face e posição. Os parafusos vêm apenas das ligações |
| Ferramentas de corte, de ajuste e de corte poligonal | Recortes (no topo ou na base, em qualquer extremidade) apenas em perfis em I. Os cortes de recuo das ligações são automáticos |
| Relatórios e modelos | Três relatórios fixos em separadores na parte inferior, e transferências em CSV |
| Criação de desenhos e lista de desenhos | Um desenho de fabrico por marca de peça, todos feitos de uma vez, pré-visualizados e depois transferidos como um PDF ou folha a folha. Nada é guardado nem editado |
| Exportação de ficheiros NC | {{ui:Ficheiros NC}}: um ficheiro DSTV por marca de peça, só perfis em I e chapas, em ZIP |
| Exportação IFC | {{ui:IFC}}: IFC4 do modelo completo, com armadura |
| Armadura em qualquer peça de betão | Armadura apenas em sapatas isoladas retangulares, com tamanhos de varão americanos, com malha inferior e varões de espera |
| Modelo guardado numa pasta de projeto, com vários utilizadores | Um ficheiro `.detailcraft.json` que transfere. Um só utilizador, no seu computador |
| Histórico de anulações | {{key:Mod+Z}} e {{key:Mod+Y}}, até 200 passos, mantido até abrir ou iniciar outro modelo |

## Diferenças que apanham as pessoas

### As marcas mudam sozinhas

Não há passo de numeração. As marcas são recalculadas após cada alteração, por isso estão sempre atuais, mas também podem renumerar-se: acrescente um pilar e o c3 de ontem pode passar a c4. Não há "histórico de numeração" para guardar marcas antigas. Termine o modelo e depois emita a lista de materiais, os ficheiros NC e os desenhos de fabrico em conjunto, a partir de um só ficheiro guardado.

### O botão do meio do rato aproxima; não desloca

Na vista 3D: arrastar com o botão esquerdo roda, arrastar com o direito desloca a vista, a roda aproxima, e arrastar com o botão do meio também aproxima. Mantendo {{key:Shift}} ao arrastar com o botão esquerdo também desloca. A roda aproxima em direção ao meio da vista, não ao ponteiro. Não há escolha do centro de rotação: o modelo roda em torno do meio da vista. Ver [Deslocar-se na vista 3D](topic:navigate-3d).

### Os pilares ficam virados para um lado por omissão

Com rotação 0, as abas de um pilar seguem a direção dos eixos numerados. As vigas que correm entre eixos com letras ligam-se à alma, e as chapas de topo são recusadas aí («As vigas que se ligam à alma de um pilar ainda não estão implementadas»). Rode esses pilares 90° antes de adicionar ligações.

### Alçados só nas linhas com letras

{{ui:Alçado}} olha apenas ao longo das linhas de eixo com letras. Não há vistas ao longo das linhas numeradas, nem vistas guardadas nem planos de trabalho. Use {{ui:3D}} ou {{ui:Adicionar por eixo}} para pórticos sobre linhas numeradas.

### Seleção, cópia e deslocação

Selecione várias peças com {{key:Shift}}+clique ou {{key:Mod+A}}, depois copie, corte, cole (numa interseção de eixos, num deslocamento escrito, ou no mesmo sítio) e duplique-as, incluindo as ligações ([Copiar, colar e duplicar](topic:copy-paste)). Não há seleção por janela, nem filtro de seleção, nem mover, espelhar ou matriz, e as propriedades alteram-se um membro de cada vez no painel {{ui:Propriedades}}.

### Os eixos não arrastam os membros

Os membros mantêm as suas coordenadas quando altera o espaçamento dos eixos; nada se move com as linhas de eixo. Altere a malha antes de colocar o aço, ou edite depois as coordenadas das extremidades de cada membro.

### As ligações não são dimensionadas

As duas ligações colocam chapas, furos, parafusos e soldaduras a partir dos números que dá. Não há verificação de projeto de nenhum tipo, apenas avisos de distância à borda e de espaçamento (da EN 1993-1-8 Tabela 3.3).

### Os furos não são cortados na vista 3D

Os furos aparecem como tampões escuros. São furos reais nos ficheiros NC, nos desenhos de fabrico e no ficheiro IFC. Os recortes são cortados na vista.

### Os pesos são brutos

O peso do aço não desconta furos nem recortes, e o peso dos parafusos não está incluído.

### Só milímetros

Tudo é escrito e mostrado em milímetros, mesmo para perfis AISC. Os nomes dos perfis mantêm a forma publicada (W12x50, HSS6x6x1/4).

### Sem desenhos para gerir

Não há lista de desenhos, nem editor de desenhos, nem desenhos de disposição geral ou de montagem. Um desenho de fabrico é feito quando o pede e transferido; para o alterar, altere o modelo e volte a fazê-lo.

### Funciona num navegador

Guardar transfere um ficheiro. Os atalhos de teclado que o navegador reserva para si não podem ser usados. Os seus modelos nunca saem do seu computador: ver [Onde vão os seus ficheiros](common:your-files).

## O que continuar a usar no software atual

Hoje o DetailCraft serve para pequenos pórticos, para verificar uma ideia, para ensinar, ou para produzir ficheiros NC e desenhos de fabrico de trabalhos simples de vigas e pilares. Continue a usar o software que tem para ligações complexas, desenhos de disposição geral, desenhos de montagem em obra, projetos com vários utilizadores e tudo o que está listado em [O que ainda não está implementado](topic:not-built-yet).
