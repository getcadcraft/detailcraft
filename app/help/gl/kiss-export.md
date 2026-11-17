---
title: Exportar un ficheiro KISS para software de fabricación
summary: Enviar a lista de materiais a un programa de xestión de fabricación (MIS) como ficheiro KISS 1.1: conxuntos, pezas, fases como secuencias, furos, recortes e soldaduras.
keywords: kiss, kss, mis, xestión de fabricación, control de produción, orzamento, lista de materiais, bom, exportar, fabtrol, secuencia
from: 30cf3951
---

No grupo {{ui:Output}}, abra {{ui:More}} e escolla {{ui:KISS file for fabrication software}}. DetailCraft descarga `<name>.kss`, un ficheiro KISS ("Keep It Simple, Steel", versión 1.1), o formato de texto plano desde o que a maioría dos programas de xestión de fabricación importan a lista de materiais.

## Que contén

- A cabeceira: un número de traballo (as primeiras oito letras e cifras do nome do modelo), o nome do modelo, a data e a hora, e se os tamaños son métricos.
- Para cada marca de conxunto: a súa peza principal (cantidade = cantos conxuntos), unha liña de debuxo (A-B1 e así, o número do debuxo do conxunto), unha liña de conxunto (nome, tipo, peso, lonxitude total, profundidade e largura), unha liña de secuencia por cada [fase](topic:phases) na que está o conxunto, e liñas de man de obra: furos (cantos, diámetro, espesor atravesado), recortes e soldaduras.
- Despois, cada peza unida a el, coa cantidade **total** (por conxunto × conxuntos), como pide a norma.
- Parafusos soltos e barras de ancoraxe no debuxo BOLTS, conxunto FIELD.
- Cada liña indica o tipo (W, C, L, HSS, PL, ou MI para un perfil personalizado), tamaño, calidade, lonxitude de corte en milímetros, nome da peza e peso.

## Imperial ou métrico

En [Configuración de DetailCraft](topic:settings), **Tamaños de ficheiro KISS** escolle:

- **Automático** (o inicio): imperial cando todas as barras son perfís AISC, métrico no resto dos casos.
- **Imperial**: perfís pola súa designación AISC (W 16X26, HSS 4X4X.250); placas e parafusos, que DetailCraft mantén en milímetros, ao 1/16 in máis próximo; pesos en libras.
- **Métrico**: perfís europeos polo seu nome (IPE300), placas como espesor X largura en milímetros; pesos en quilogramos.

As lonxitudes son sempre en milímetros con dous decimais, sexa cal sexa a configuración: a norma KISS así o pide e o programa receptor convértaas.

:::note
As calidades acórtanse aos oito caracteres da norma: A572 Gr 50 pasa a A572-50. As comas dos nomes convértense en espazos (o formato non ten comiñas). Comprobe unha importación no seu programa antes de confiar nela: os ficheiros KISS de DetailCraft están comprobados aquí contra a norma, pero aínda non nun programa de fabricación.
:::
