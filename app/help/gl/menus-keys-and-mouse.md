---
title: Menús, teclas e rato
summary: Escolla un estilo de menú que encaixe coa súa forma de traballar, asigne unha tecla propia a calquera comando, mova comandos entre as lapelas da cinta e defina o que fan a roda e os botóns do rato.
keywords: estilo de menú, menús, cinta, barra de ferramentas, liña de comandos, atallos de teclado, teclas de atallo, teclas, personalizar, cambiar tecla, reasignar, rato, roda, inverter, sentido do zoom, botón central, botón dereito, desprazar, orbitar, exportar, importar, cambio, familiar, debuxo clásico, cinta de aceiro
from: 4132c6e5
---

Os comandos de DetailCraft son os mesmos por onde se acceda a eles. Un **estilo de menú** só decide onde están na pantalla, como se chaman alí e que teclas os executan. Escóllao en {{ui:Settings}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, keys and mouse}}; o cambio é inmediato, e este navegador o lembra.

## Os tres estilos

| Estilo | Que obtén |
|---|---|
| {{ui:DetailCraft}} | A barra de ferramentas propia de DetailCraft ({{ui:File}}, Colocar, {{ui:Connect}}, {{ui:Edit}}, {{ui:Output}}) e as súas teclas dunha letra: {{key:V}} seleccionar, {{key:B}} viga, {{key:C}} piar, {{key:R}} riostra, {{key:P}} placa, {{key:F}} zapata, {{key:S}} escaleira. O inicio. |
| {{ui:Drafting classic}} | Para quen escribe comandos: unha pequena cinta ({{ui:Home}}, {{ui:View}}, {{ui:Output}}) e unha liña de comandos. Escriba BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (desfacer), ZOOM, PLAN, 3D, DRAWINGS, NC ou HELP e prema {{key:Enter}}; {{key:Enter}} sen nada repite o último comando, e {{key:Esc}} o borra. Comece a escribir en calquera lugar e as letras van á liña de comandos. O botón central despraza; en 3D, {{key:Shift}} e o botón central orbitan. |
| {{ui:Steel ribbon}} | Lapelas organizadas como as traen os programas de detallado de aceiro: {{ui:Modeling}} (elementos, formigón, escaleiras), {{ui:Detailing}} (uniones), {{ui:Edit}}, {{ui:Drawings}} (debuxos e informes), {{ui:Fabrication}} (ficheiros NC, IFC) e {{ui:View}}, cun menú {{ui:File}} e botóns rápidos á dereita. As teclas dunha letra mantéñense. O botón central despraza; en 3D o botón esquerdo orbita. |

Todos os estilos mantén {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} e {{key:Mod+A}}. As cintas tamén conteñen {{ui:3D}}, {{ui:Plan}}, {{ui:Elevation}} e {{ui:Fit}} da barra de vista.

:::tip
Unha tecla que pertence ao deseño propio de DetailCraft pero á que o seu estilo lle deu outro comando non fai nada, e a liña de estado indica onde foi parar o comando ("Na miña cinta de aceiro, Piar é Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as frechas conservan sempre o seu significado, e mentres un elemento está a medio colocar ou unha copia segue o punteiro, as letras pertencen a DetailCraft.
:::

## Faino seu

1. Escolla o estilo máis próximo ao que quere e faga clic en {{ui:Customize…}}.
2. En {{ui:Keys and menus}}, busque un comando (a caixa de busca axuda). Faga clic en {{ui:Add a key}} e prema a tecla, ou dúas teclas seguidas para unha tecla de dúas letras. Faga clic nunha tecla para a quitar.
3. Cunha cinta, {{ui:Where it sits}} move o comando a outra lapela e panel, ao menú {{ui:File}}, ou a {{ui:Keys only}}.
4. En {{ui:Mouse}}, defina a roda, os botóns que desprazan a planta e os alzados, e o que fai cada botón na vista 3D.
5. Dea un nome e faga clic en {{ui:Save}}.

Gardar un estilo integrado crea unha copia propia ("My Steel ribbon"); o integrado nunca cambia. Unha tecla asignada a dous comandos amósase en vermello e hai que corrixila antes de poder gardar.

## Rato

- **Roda do rato**: {{ui:Scroll up zooms in}} (o inicio) ou {{ui:Scroll up zooms out}}, e a que velocidade. Un pinzado no trackpad sempre fai zoom no sentido en que se moven os dedos.
- **Desprazar a planta e os alzados con**: o botón central, o botón dereito, ou ambos. Coa ferramenta {{ui:Select}} o botón esquerdo sempre debuxa unha xanela de selección.
- **Arrastrar na vista 3D**: {{ui:Propia de cada vista}} mantén os botóns de DetailCraft (o esquerdo orbita, o central fai zoom, o dereito despraza). Ou defina cada botón para orbitar, desprazar, facer zoom ou ningún; {{key:Shift}} cun botón que orbita ou despraza intercambia os dous.

## Lévao consigo

{{ui:Export}} garda o estilo en uso como un pequeno ficheiro `.ccinput.json`; {{ui:Import…}} engade un, desde outro ordenador ou dun compañeiro. Un ficheiro importado só pode apuntar aos comandos propios de DetailCraft: o que haxa de máis quédase fóra e cóntase na liña de estado. {{ui:Delete this style}} elimina un dos seus.

:::note
Estes axustes quedan neste navegador. {{ui:Use this style in every app}} baixo as tarxetas de estilo fai que cada aplicación se abra no seu estilo correspondente (a súa propia barra de ferramentas, unha cinta ou {{ui:Drafting classic}}), cos cambios que fixo en cada unha. DetailCraft non ten un estilo de barra de menús: cando se escolle para todas as aplicacións a barra de menús doutra aplicación, DetailCraft conserva a súa propia barra de ferramentas.
:::

Relacionado: [Teclado e rato](topic:keyboard) · [Configuración de DetailCraft](topic:settings) · [Desde outro software de detallado](topic:coming-from)
