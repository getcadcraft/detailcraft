---
title: Usar DetailCraft con un asistente de IA
summary: Permita que su propio asistente de IA o script lea el modelo, sus piezas, problemas e interferencias, añada piezas y conexiones, guarde y exporte (también USD): permisos, conexión mediante CadCraft Studio y registro de actividad.
keywords: ia, asistente, agente, mcp, model context protocol, script, automatización, piezas, interferencias, conexiones, permisos, desconectar, actividad, deshacer
from: d624c9a0
---

## Qué aprenderá

Cómo permitir que un asistente de IA (o un script que haya escrito) trabaje con DetailCraft, y cómo decidir qué puede tocar.

DetailCraft **no tiene IA propia** y no envía nada a ningún sitio. Usted aporta el asistente: cualquier programa que hable el Model Context Protocol (MCP). DetailCraft solo le ofrece herramientas, y usted elige cuáles.

## Activarlo

1. Abra {{ui:Settings}} (el engranaje de la barra de aplicaciones, o {{key:Mod+,}}) y vaya a la pestaña {{ui:DetailCraft}}.
2. En {{ui:Assistants}}, marque **Permitir que los asistentes de IA y los scripts usen DetailCraft**. Está desactivado hasta que lo haga.
3. Elija lo que puede hacer: **Leer** viene marcado por defecto; marque **Editar**, **Guardar** o **Exportar** solo cuando los necesite.

Las herramientas que están fuera de los permisos que haya marcado no se ofrecen al asistente; si pide una de todos modos, DetailCraft la rechaza y lo anota en el registro de actividad. Desactivar el interruptor termina todas las conexiones a la vez.

## Conecte su asistente

Los asistentes se conectan a través de **CadCraft Studio** en su ordenador: Studio ejecuta un pequeño servidor al que solo puede acceder este ordenador, protegido por un token que genera cada vez que se inicia. En Studio, elija {{ui:Connect an assistant}} y copie la dirección y el token en su asistente (Studio muestra los ajustes exactos que debe pegar). No comparta nunca el token.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las aplicaciones de navegador el interruptor no tiene efecto hasta que use CadCraft Studio en su ordenador.
:::

## Usted mantiene el control

- **Cada cambio es un solo paso de deshacer**, identificado como del asistente (por ejemplo, "Asistente: añadir viga", "Asistente: añadir cartelas"). {{key:Mod+Z}} deshace el último cambio del asistente en su conjunto. El propio `undo` del asistente solo deshace sus propios pasos, nunca los suyos, salvo que lo pida explícitamente.
- **Espera a que usted termine.** Mientras coloca una pieza, mueve piezas o pega, DetailCraft rechaza los cambios del asistente y le pide que lo intente de nuevo.
- **Sabe cuándo hay uno conectado.** Un botón de la barra de aplicaciones muestra el nombre del asistente mientras está conectado; haga clic en él para ver lo que puede hacer, o para **Desconectar** el asistente.
- **Actividad.** {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Assistants}} › {{ui:Activity}} enumera cada llamada: cuándo, qué herramienta y si se realizó o se rechazó. {{ui:Save the log}} guarda una copia.

## Qué puede pedir un asistente

Todas las longitudes están en milímetros, y los puntos `[x, y, z]` tienen z hacia arriba, como en el modelo.

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `model_describe` | Leer | El modelo abierto: rejillas, niveles, fases, piezas por tipo y perfil, conexiones, zapatas, escaleras, piezas, peso de acero, problemas |
| `parts_list` | Leer | Marcas de pieza con perfil, material, longitud de corte, cantidad, peso, fase y marcas de conjunto; por tipo, perfil, marca o fase |
| `problems_list` | Leer | Lo que lista la pestaña {{ui:Problems}}, cada uno con su motivo |
| `clash_check` | Leer | La [comprobación de interferencias](topic:clash-check), con su tolerancia y fases |
| `selection_get` | Leer | Lo que tiene seleccionado |
| `selection_set` | Editar | Selecciona piezas, conexiones, zapatas o escaleras (por id o marca de pieza) para mostrárselas; no cambia nada |
| `member_add` | Editar | Una viga, pilar, riostra o chapa entre dos puntos |
| `connection_add` | Editar | Placas de testa, placas de cortante, placas de base, empalmes o cartelas donde se encuentran las piezas indicadas, igual que hacen los botones de {{ui:Connect}} |
| `undo` | Editar | Deshace los últimos pasos del asistente |
| `model_save` | Guardar | El Guardar propio de DetailCraft |
| `model_export` | Exportar | IFC, archivos NC, BOM, programación de doblado, archivo KISS o lista de corte, igual que hacen los botones de {{ui:Output}} |
| `usd_export` | Exportar | El modelo de acero como USD (.usda, .usdc o .usdz), tal como lo escribe {{ui:Output}} › {{ui:USD}} (véase [Exportar el modelo de acero como USD](topic:usd)); en Studio puede escribir el archivo en una carpeta que usted haya permitido |

## Si algo no funciona

- **El asistente no ve herramientas de DetailCraft:** compruebe que el interruptor está activado en esta ventana y que la ventana está abierta en Studio.
- **"needs the edit permission"** (o de guardar o exportar): márquelo en {{ui:Assistants}} y pida de nuevo la acción.
- **"The person is placing a member":** termine lo que esté haciendo (o pulse {{key:Esc}}) y después deje que el asistente lo intente de nuevo.
- **Errores "401" o "token":** el token cambió (Studio se reinició, o {{ui:New token}}). Copie el nuevo token en los ajustes del asistente.

## Véase también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos prácticos, cada uno con las herramientas que llama.
