---
title: Utilizar o DetailCraft com um assistente de IA
summary: Deixe o seu próprio assistente de IA ou script ler o modelo, as suas peças, problemas e interferências, adicionar barras e ligações, guardar e exportar (também USD): permissões, ligação através do CadCraft Studio e o registo de atividade.
keywords: ia, assistente, agente, mcp, model context protocol, script, automatização, peças, interferências, ligações, permissões, desligar, atividade, anular
from: d624c9a0
---

## O que vai aprender

Como deixar um assistente de IA (ou um script que escreveu) trabalhar com o DetailCraft, e como decidir o que ele pode tocar.

O DetailCraft **não tem IA própria** e não envia nada para lado nenhum. Traz o seu assistente: qualquer programa que fale o Model Context Protocol (MCP). O DetailCraft apenas lhe dá ferramentas, e é você que escolhe quais.

## Ativar

1. Abra {{ui:Definições}} (a roda na barra da aplicação, ou {{key:Mod+,}}) e vá ao separador {{ui:DetailCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o DetailCraft**. Está desativado até o fazer.
3. Escolha o que pode fazer: **Ler** vem marcado por predefinição; marque **Editar**, **Guardar** ou **Exportar** apenas quando precisar.

As ferramentas fora das permissões marcadas não são oferecidas ao assistente e, se ele pedir uma mesmo assim, o DetailCraft recusa e regista-o no registo de atividade. Desligar o interruptor termina todas as ligações de imediato.

## Ligar o seu assistente

Os assistentes ligam-se através do **CadCraft Studio** no seu computador: o Studio executa um pequeno servidor que só este computador consegue alcançar, protegido por um token que cria sempre que arranca. No Studio, escolha {{ui:Ligar um assistente}} e copie o endereço e o token para o seu assistente (o Studio mostra as definições exatas a colar). Nunca partilhe o token.

:::note
Um separador do navegador não consegue abrir uma ligação para um assistente: nas aplicações de navegador o interruptor não tem efeito até usar o CadCraft Studio no seu computador.
:::

## Continua a ter o controlo

- **Cada alteração é um único passo de anulação**, identificado como do assistente (por exemplo, "Assistente: adicionar viga" ou "Assistente: adicionar cantoneiras de reforço"). {{key:Mod+Z}} anula a última alteração do assistente por inteiro. O próprio `undo` do assistente só anula os seus passos, nunca os seus, a não ser que o peça explicitamente.
- **Ele espera por si.** Enquanto coloca uma barra, move peças ou cola, o DetailCraft recusa as alterações do assistente e diz-lhe para tentar de novo.
- **Sabe quando há uma ligação.** Um botão na barra da aplicação indica o nome do assistente enquanto estiver ligado; clique nele para ver o que pode fazer, ou para **Desligar**.
- **Atividade.** {{ui:Definições}} › {{ui:DetailCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada: quando, que ferramenta, concluída ou recusada. {{ui:Guardar o registo}} guarda uma cópia.

## O que um assistente pode pedir

Todos os comprimentos são em milímetros; os pontos são `[x, y, z]` com z para cima, como no modelo.

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `model_describe` | Ler | O modelo aberto: grelhas, níveis, fases, barras por tipo e perfil, ligações, sapatas, escadas, peças, peso de aço, problemas |
| `parts_list` | Ler | Marcas de peça com perfil, material, comprimento de corte, quantidade, peso, fase e marcas de montagem; por tipo, perfil, marca ou fase |
| `problems_list` | Ler | O que o separador {{ui:Problemas}} lista, cada item com o assunto |
| `clash_check` | Ler | A [verificação de interferências](topic:clash-check), com a sua tolerância e fases |
| `selection_get` | Ler | O que tiver selecionado |
| `selection_set` | Editar | Seleciona barras, ligações, sapatas ou escadas (por id ou marca de peça) para lhe mostrar; não altera nada |
| `member_add` | Editar | Uma viga, coluna, contraventamento ou chapa entre dois pontos |
| `connection_add` | Editar | Chapas de topo, chapas de corte, chapas de base, emendas ou cartelas onde as barras indicadas se encontram, como fazem os botões {{ui:Ligar}} |
| `undo` | Editar | Anula os últimos passos do assistente |
| `model_save` | Guardar | O Guardar próprio do DetailCraft |
| `model_export` | Exportar | IFC, ficheiros NC, lista de materiais, mapa de dobragem, ficheiro KISS ou lista de corte, como fazem os botões de {{ui:Saída}} |
| `usd_export` | Exportar | A estrutura de aço em USD (.usda, .usdc ou .usdz), como escreve {{ui:Saída}} › {{ui:USD}} (ver [Exportar o modelo em aço como USD](topic:usd)); no Studio pode escrever o ficheiro numa pasta que tiver autorizado |

## Se algo não funcionar

- **O assistente não vê ferramentas do DetailCraft:** verifique se o interruptor está ligado nesta janela e se a janela está aberta no Studio.
- **"precisa da permissão de edição"** (ou de guardar, exportar): marque-a em {{ui:Assistentes}} e peça de novo.
- **"A pessoa está a colocar uma barra":** termine o que está a fazer (ou prima {{key:Esc}}) e deixe o assistente tentar de novo.
- **Erros "401" ou "token":** o token mudou (o Studio foi reiniciado, ou {{ui:Novo token}}). Copie o novo para as definições do assistente.

## Ver também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos completos, cada um com as ferramentas que chama.
