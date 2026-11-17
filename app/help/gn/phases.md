---
title: Fases del modelo
summary: Dividí el modelo en fases (secuencias de montaje o entregas), mostrá u ocultá cada fase, poné piezas en una fase y numerá marcas por fase.
keywords: fase, fases, administrador de fases, secuencia de montaje, entrega, lote, secuencia, ocultar fase, mostrar fase, filtro, numeración, prefijo de marca, por fase
from: bae506f5
---

Peteĩ fase ha'e grupo de piezas ojapo, ojehaivaekue térã oñemontava juntos: peteĩ secuencia de montaje, peteĩ entrega, peteĩ lote. Cada miembro y cada zapata oĩ peteĩ fase-pe. Peteĩ conexión oĩ fase miembro principal-pe: viga de placa de extremo, columna de placa base. Modelo pyahu oguereko peteĩ fase.

## El panel Fases

La sección {{ui:Fases}} del panel {{ui:Modelo}} ohechauka opa fase:

- la casilla mostrar térã ocultar la fase en la vista;
- el número, y un nombre que podés escribir (vacío = "Fase 2" y así sucesivamente);
- cuántas piezas oĩ upépe;
- el botón {{ui:×}} oinupã peteĩ fase. Solo peteĩ fase vacía ikatu oho: primero poné sus piezas en otra fase.

{{ui:Emoĩ fase}} ojapo el próximo número y lo hace la fase donde van las piezas nuevas.

## Poner piezas en una fase

- **Piezas nuevas:** {{ui:Pieza pyahu omoĩ}} elige la fase donde irá cada miembro y cimiento que coloqués desde ahora.
- **Una pieza:** elegila y cambiá {{ui:Fase}} en el panel {{ui:Propiedades}}.
- **Heta pieza:** elegilas (una ventana, {{key:Shift}}+clic, {{key:Mod+A}}) y cambiá {{ui:Fase}} arriba del panel {{ui:Propiedades}}. Ohechauka **Varía** si están en fases distintas. Un cambio es un paso de Deshacer.

Las copias mantienen la fase de la pieza de donde se copiaron, también al pegar en otro modelo (la fase se agrega allí).

## Mostrar y ocultar fases

Una fase oculta no se dibuja en la vista, no se puede clicar ni atrapar con una ventana de selección, y {{key:Mod+A}} la deja afuera. Igual está en la lista de materiales, los informes, los planos y en cada exportación. Ocultar sirve solo para la vista: no se guarda y no tiene Deshacer.

## Marcas por fase

Con **Numerar marcas por fase** activado (empieza activado) y piezas en más de una fase, cada fase se numera por separado y sus marcas empiezan con el número de fase: marcas de pieza 1-b1, 2-b1, marcas de conjunto 2-B1, zapatas 2-F1. Dos vigas idénticas en fases distintas tienen entonces marcas distintas, porque se fabrican y envían en momentos diferentes. Con una sola fase en uso, las marcas no llevan prefijo. Desactivalo para numerar todo el modelo como uno, de modo que piezas idénticas compartan marca sin importar su fase.

La fase se escribe en la exportación IFC (conjunto de propiedades DetailCraft, Fase).

:::note
Los modelos con fases se guardan en el formato de archivo 2 de DetailCraft. La versión 0.3 de DetailCraft no puede abrirlos; esta sí abre archivos antiguos, con todas las piezas en la fase 1.
:::
