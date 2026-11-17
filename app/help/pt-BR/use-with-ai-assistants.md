---
title: Usar o DetailCraft com um assistente de IA
summary: Deixe seu próprio assistente de IA ou script ler o modelo, suas peças, problemas e interferências, adicionar barras e ligações, salvar e exportar (também USD): permissões, conexão pelo CadCraft Studio e o registro de atividades.
keywords: ia, assistente, agente, mcp, model context protocol, script, automação, peças, interferências, ligações, permissões, desconectar, atividade, desfazer
from: d624c9a0
---

## O que você vai aprender

Como deixar um assistente de IA (ou um script que você escreveu) trabalhar com o DetailCraft, e como decidir o que ele pode alterar.

O DetailCraft **não tem IA própria** e não envia nada a lugar nenhum. Você traz o assistente: qualquer programa que fale o model context protocol (MCP). O DetailCraft apenas oferece ferramentas a ele, e você escolhe quais.

## Ativar

1. Abra {{ui:Configurações}} (a engrenagem na barra do aplicativo, ou {{key:Mod+,}}) e vá à aba {{ui:DetailCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o DetailCraft**. Ela fica desativada até você fazer isso.
3. Escolha o que ele pode fazer: **Ler** já vem marcado; marque **Editar**, **Salvar** ou **Exportar** somente quando precisar.

Ferramentas fora das permissões que você marcou não são oferecidas ao assistente, e se ele pedir uma mesmo assim, o DetailCraft recusa e registra o pedido no registro de atividades. Desligar a chave encerra todas as conexões de uma vez.

## Conectar o assistente

Os assistentes se conectam pelo **CadCraft Studio** no seu computador: o Studio executa um pequeno servidor que só este computador consegue acessar, protegido por um token que ele gera toda vez que é iniciado. No Studio, escolha {{ui:Conectar um assistente}} e copie o endereço e o token para o seu assistente (o Studio mostra as configurações exatas a colar). Nunca compartilhe o token.

:::note
Uma aba do navegador não consegue abrir uma conexão para um assistente: nos aplicativos de navegador a chave não tem efeito até você usar o CadCraft Studio no seu computador.
:::

## Você continua no controle

- **Cada alteração é um único passo de desfazer**, identificado como do assistente (por exemplo, "Assistente: adicionar viga", "Assistente: adicionar cantoneiras de reforço"). {{key:Mod+Z}} desfaz a última alteração do assistente por inteiro. O `undo` do próprio assistente só desfaz os passos dele, nunca os seus, a menos que ele peça isso explicitamente.
- **Ele espera por você.** Enquanto você insere uma peça, move peças ou cola, o DetailCraft recusa as alterações do assistente e pede que ele tente de novo.
- **Você sabe quando há uma conexão.** Um botão na barra do aplicativo mostra o nome do assistente enquanto ele está conectado; clique nele para ver o que ele pode fazer, ou para **Desconectar**.
- **Atividade.** {{ui:Configurações}} › {{ui:DetailCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada: quando, qual ferramenta, concluída ou recusada. {{ui:Salvar o registro}} guarda uma cópia.

## O que um assistente pode pedir

Todos os comprimentos são em milímetros, pontos `[x, y, z]` com z para cima, como no modelo.

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `model_describe` | Ler | O modelo aberto: eixos, níveis, fases, peças por tipo e perfil, ligações, sapatas, escadas, peças, peso do aço, problemas |
| `parts_list` | Ler | Marcas de peça com perfil, material, comprimento de corte, quantidade, peso, fase e marcas de montagem; por tipo, perfil, marca ou fase |
| `problems_list` | Ler | O que a aba {{ui:Problemas}} lista, cada item com o assunto |
| `clash_check` | Ler | A [verificação de interferências](topic:clash-check), com a tolerância e as fases |
| `selection_get` | Ler | O que você tem selecionado |
| `selection_set` | Editar | Seleciona peças, ligações, sapatas ou escadas (por id ou marca de peça) para mostrá-las a você; não altera nada |
| `member_add` | Editar | Uma viga, pilar, contraventamento ou chapa entre dois pontos |
| `connection_add` | Editar | Chapas de extremidade, chapas de cisalhamento, chapas de base, emendas ou chapas de ligação onde as peças indicadas se encontram, como fazem os botões de {{ui:Ligar}} |
| `undo` | Editar | Desfaz os últimos passos do assistente |
| `model_save` | Salvar | O Salvar próprio do DetailCraft |
| `model_export` | Exportar | IFC, arquivos NC, lista de materiais, tabela de dobramento, arquivo KISS ou lista de corte, como fazem os botões de {{ui:Saída}} |
| `usd_export` | Exportar | O modelo de aço como USD (.usda, .usdc ou .usdz), como {{ui:Saída}} › {{ui:USD}} grava (veja [Exportar o modelo de aço como USD](topic:usd)); no Studio ele pode gravar o arquivo em uma pasta que você permitiu |

## Se algo não funcionar

- **O assistente não vê as ferramentas do DetailCraft:** confira se a chave está ligada nesta janela e se a janela está aberta no Studio.
- **"precisa da permissão de editar"** (ou de salvar, exportar): marque-a em {{ui:Assistentes}} e peça de novo.
- **"A pessoa está inserindo uma peça":** conclua o que está fazendo (ou pressione {{key:Esc}}) e depois deixe o assistente tentar de novo.
- **Erros "401" ou "token":** o token mudou (o Studio foi reiniciado, ou você usou {{ui:Novo token}}). Copie o novo token para as configurações do assistente.

## Veja também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
