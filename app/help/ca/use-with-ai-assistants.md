---
title: Utilitza DetailCraft amb un assistent d'IA
summary: Deixa el teu propi assistent d'IA o script llegir el model, les seves peces, els problemes i les col·lisions, afegir barres i connexions, desar i exportar (també USD): permisos, connexió amb CadCraft Studio i el registre d'activitat.
keywords: ia, assistent, agent, mcp, model context protocol, script, automatització, peces, col·lisions, connexions, permisos, desconnexió, activitat, desfer
from: d624c9a0
---

## Què aprendreu

Com fer que un assistent d'IA (o un script que hàgiu escrit) treballi amb DetailCraft, i com decidir què pot tocar.

DetailCraft **no té IA pròpia** i no envia res enlloc. Vosaltres porteu l'assistent: qualsevol programa que parli el Model Context Protocol (MCP). DetailCraft només li dona eines, i vosaltres decidiu quines.

## Activeu-ho

1. Obriu {{ui:Configuració}} (la roda d'engranatge de la barra de l'aplicació, o {{key:Mod+,}}) i aneu a la pestanya {{ui:DetailCraft}}.
2. Sota {{ui:Assistents}}, marqueu **Permet que els assistents d'IA i els scripts facin servir DetailCraft**. Està desactivat fins que ho feu.
3. Trieu què pot fer: **Llegeix** ve marcat des del principi; marqueu **Edita**, **Desa** o **Exporta** només quan els necessiteu.

Les eines fora dels permisos que heu marcat no s'ofereixen a l'assistent; i si en demana una de totes maneres, DetailCraft la rebutja i ho escriu al registre d'activitat. Desactivar l'interruptor acaba totes les connexions de cop.

## Connecteu l'assistent

Els assistents es connecten a través de **CadCraft Studio** al vostre ordinador: Studio executa un petit servidor que només aquest ordinador pot assolir, protegit per un testimoni (token) que genera cada vegada que s'inicia. A Studio, trieu {{ui:Connecta un assistent}} i copieu l'adreça i el testimoni a l'assistent (Studio mostra els paràmetres exactes per enganxar). No compartiu mai el testimoni.

:::note
Una pestanya del navegador no pot obrir una connexió per a un assistent: a les aplicacions del navegador l'interruptor no té efecte fins que feu servir CadCraft Studio al vostre ordinador.
:::

## Vosaltres mantingueu el control

- **Cada canvi és un sol pas de desfer**, etiquetat com a canvi de l'assistent (per exemple, "Assistent: afegeix biga", "Assistent: afegeix cartel·les"). {{key:Mod+Z}} desfà el darrer canvi de l'assistent com a conjunt. La pròpia `undo` de l'assistent només desfà els seus propis passos, mai els vostres, tret que ho demani explícitament.
- **Espera vosaltres.** Mentre col·loqueu una barra, moveu peces o enganxeu, DetailCraft rebutja els canvis de l'assistent i li diu que ho torni a provar.
- **Sabeu quan n'hi ha un de connectat.** Un botó de la barra de l'aplicació indica l'assistent mentre està connectat; feu-hi clic per veure què pot fer, o per **Desconnectar-lo**.
- **Activitat.** {{ui:Configuració}} › {{ui:DetailCraft}} › {{ui:Assistents}} › {{ui:Activitat}} mostra cada crida: quan, quina eina, feta o rebutjada. {{ui:Desa el registre}} en guarda una còpia.

## Què pot demanar un assistent

Totes les longituds són en mil·límetres, els punts `[x, y, z]` amb z cap amunt, com al model.

| Eina | Permís | Què fa |
|---|---|---|
| `app_info`, `model_describe` | Llegeix | El model obert: quadrícules, nivells, fases, barres per tipus i perfil, connexions, fonamentacions, escales, peces, pes d'acer, problemes |
| `parts_list` | Llegeix | Marques de peça amb perfil, material, longitud de tall, quantitat, pes, fase i marques de conjunt; per tipus, perfil, marca o fase |
| `problems_list` | Llegeix | El que llista la pestanya {{ui:Problemes}}, cadascun amb el seu motiu |
| `clash_check` | Llegeix | La [revisió de col·lisions](topic:clash-check), amb la seva tolerància i fases |
| `selection_get` | Llegeix | El que heu seleccionat |
| `selection_set` | Edita | Selecciona barres, connexions, fonamentacions o escales (per identificador o marca de peça) per mostrar-vos-les; no canvia res |
| `member_add` | Edita | Una biga, un pilar, una riostra o una placa entre dos punts |
| `connection_add` | Edita | Plaques d'extrem, plaques de tall, plaques de base, empalmaments o cartel·les on es troben les barres indicades, com fan els botons {{ui:Connecta}} |
| `undo` | Edita | Desfà els darrers passos de l'assistent |
| `model_save` | Desa | El Desa propi de DetailCraft |
| `model_export` | Exporta | IFC, fitxers NC, BOM, quadre de doblegat, fitxer KISS o llista de talls, tal com els fan els botons {{ui:Sortida}} |
| `usd_export` | Exporta | El model d'acer com a USD (.usda, .usdc o .usdz), tal com l'escriu {{ui:Sortida}} › {{ui:USD}} (vegeu [Exporta el model d'acer com a USD](topic:usd)); a Studio pot escriure el fitxer en una carpeta que hàgiu permès |

## Si alguna cosa no funciona

- **L'assistent no veu les eines de DetailCraft:** comproveu que l'interruptor estigui activat en aquesta finestra i que la finestra estigui oberta a Studio.
- **"Cal el permís d'edició"** (o de desar, o d'exportar): marqueu-lo a {{ui:Assistents}} i torneu a demanar-ho.
- **"La persona està col·locant una barra":** acabeu el que esteu fent (o premeu {{key:Esc}}) i després deixeu que l'assistent ho torni a provar.
- **Errors "401" o "token":** el testimoni ha canviat (Studio s'ha reiniciat, o {{ui:Nou testimoni}}). Copieu-ne el nou a la configuració de l'assistent.

## Vegeu també

- [Receptes per a assistents d'IA](common:assistants-recipes): exemples resolts, cadascun amb les eines que crida.
