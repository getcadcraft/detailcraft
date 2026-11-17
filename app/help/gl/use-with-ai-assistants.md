---
title: Usar DetailCraft cun asistente de IA
summary: Deixe que o seu propio asistente de IA ou script lea o modelo, as súas pezas, problemas e interferencias, engada elementos e unións, garde e exporte (tamén USD): permisos, conexión a través de CadCraft Studio e o rexistro de actividade.
keywords: ia, asistente, axente, mcp, model context protocol, script, automatización, pezas, interferencias, uniones, permisos, desconectar, actividade, desfacer
from: d624c9a0
---

## O que vai aprender

Como deixar que un asistente de IA (ou un script que escribiu) traballe con DetailCraft, e como decidir o que pode tocar.

DetailCraft **non ten IA propia** e non envía nada a ningures. Vostede achega o asistente: calquera programa que fale o Model Context Protocol (MCP). DetailCraft só lle dá ferramentas, e vostede escolle cales.

## Activalo

1. Abra {{ui:Configuración}} (a roda dentada da barra da aplicación, ou {{key:Mod+,}}) e vaia á lapela {{ui:DetailCraft}}.
2. Baixo {{ui:Asistentes}}, marque **Deixar que os asistentes de IA e os scripts usen DetailCraft**. Está desactivado ata que o faga.
3. Escolla o que pode facer: **Ler** vén marcado ao principio; marque **Editar**, **Gardar** ou **Exportar** só cando os necesite.

As ferramentas fóra dos permisos que marcou non se ofrecen ao asistente, e se o asistente pide unha igual, DetailCraft a rexeita e o anota no rexistro de actividade. Desactivar o interruptor pecha de golpe todas as conexións.

## Conecte o asistente

Os asistentes conéctanse a través de **CadCraft Studio** no seu ordenador: Studio executa un pequeno servidor ao que só este ordenador pode acceder, protexido por un token que crea cada vez que arranca. En Studio, escolla {{ui:Conectar un asistente}} e copie o enderezo e o token no seu asistente (Studio mostra os axustes exactos para pegar). Nunca comparta o token.

:::note
Unha pestana do navegador non pode abrir unha conexión para un asistente: nas aplicacións do navegador o interruptor non ten efecto ata que use CadCraft Studio no seu ordenador.
:::

## Vostede segue ao mando

- **Cada cambio é un paso de desfacer**, etiquetado como do asistente (por exemplo, "Asistente: engadir viga", "Asistente: engadir cartabóns"). {{key:Mod+Z}} desfai o último cambio do asistente como un todo. O `undo` propio do asistente só desfai os seus pasos, nunca os seus, a non ser que o pida explicitamente.
- **Espera por vostede.** Mentres coloca un elemento, move pezas ou pega, DetailCraft rexeita os cambios do asistente e pídelle que o tente de novo.
- **Sabe cando hai un conectado.** Un botón na barra da aplicación indica o nome do asistente mentres está conectado; prema nel para ver o que pode facer, ou para **Desconectar**.
- **Actividade.** {{ui:Configuración}} › {{ui:DetailCraft}} › {{ui:Asistentes}} › {{ui:Actividade}} lista cada chamada: cando, que ferramenta, e se se fixo ou se se rexeitou. {{ui:Gardar o rexistro}} conserva unha copia.

## Que pode pedir un asistente

Todas as lonxitudes son en milímetros, os puntos `[x, y, z]` con z cara arriba, como no modelo.

| Ferramenta | Permiso | Que fai |
|---|---|---|
| `app_info`, `model_describe` | Ler | O modelo aberto: cuadrículas, niveis, fases, elementos por tipo e perfil, uniones, cimentacións, escaleiras, pezas, peso de aceiro, problemas |
| `parts_list` | Ler | Marcas de pezas con perfil, material, lonxitude de corte, cantidade, peso, fase e marcas de conxunto; por tipo, perfil, marca ou fase |
| `problems_list` | Ler | O que lista a lapela {{ui:Problemas}}, cada un co seu motivo |
| `clash_check` | Ler | A [comprobación de interferencias](topic:clash-check), coa súa tolerancia e fases |
| `selection_get` | Ler | O que ten seleccionado |
| `selection_set` | Editar | Selecciona elementos, uniones, cimentacións ou escaleiras (por id ou marca de peza) para mostrarllos; non cambia nada |
| `member_add` | Editar | Unha viga, piar, diagonal ou placa entre dous puntos |
| `connection_add` | Editar | Placas de extremo, pletinas de cortante, placas base, empalmes ou cartabóns onde se atopan os elementos indicados, como fan os botóns {{ui:Unir}} |
| `undo` | Editar | Desfai os últimos pasos do asistente |
| `model_save` | Gardar | O Gardar propio de DetailCraft |
| `model_export` | Exportar | IFC, ficheiros NC, BOM, lista de dobrado, ficheiro KISS ou lista de cortes, como os xeran os botóns de {{ui:Saída}} |
| `usd_export` | Exportar | O modelo de aceiro como USD (.usda, .usdc ou .usdz), como o escribe {{ui:Saída}} › {{ui:USD}} (ver [Exportar o modelo de aceiro como USD](topic:usd)); en Studio pode escribir o ficheiro nunha cartafol que permitiu |

## Se algo non funciona

- **O asistente non ve ferramentas de DetailCraft:** comprobe que o interruptor está activado nesta xanela, e que a xanela está aberta en Studio.
- **"necesita o permiso de edición"** (ou de gardar, ou de exportar): marque o permiso en {{ui:Asistentes}} e logo pregunte de novo.
- **"A persoa está colocando un elemento":** remate o que estea facendo (ou prema {{key:Esc}}) e logo deixe que o asistente o tente de novo.
- **Erros "401" ou "token":** o token cambiou (Studio reiniciouse, ou {{ui:Novo token}}). Copie o novo token nos axustes do asistente.

## Ver tamén

- [Receitas para asistentes de IA](common:assistants-recipes): exemplos prácticos, cada un coas ferramentas que chama.
