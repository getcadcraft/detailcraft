---
title: Fases
summary: Divida el modelo en fases (secuencias de montaje o entregas), muestre u oculte cada fase, asigne piezas a una fase y numere las marcas por fase.
keywords: fase, fases, administrador de fases, secuencia de montaje, entrega, lote, secuencia, ocultar fase, mostrar fase, filtro, numeración, prefijo de marca, por fase
from: bae506f5
---

Una fase es un grupo de piezas que se fabrican, entregan o montan juntas: una secuencia de montaje, una entrega, un lote. Cada miembro y cada cimentación está en una fase. Una conexión está en la fase de su miembro principal: la viga de una placa de extremo, la columna de una placa base. Un modelo nuevo tiene una fase.

## El panel Fases

La sección {{ui:Fases}} del panel {{ui:Modelo}} enumera todas las fases:

- la casilla muestra u oculta la fase en la vista;
- el número, y un nombre que puede escribir (vacío = "Fase 2" y así sucesivamente);
- cuántas piezas hay en ella;
- el botón {{ui:×}} quita una fase. Solo se puede quitar una fase vacía: primero pase sus piezas a otra fase.

{{ui:Agregar fase}} agrega el siguiente número y la convierte en la fase a la que van las piezas nuevas.

## Asignar piezas a una fase

- **Piezas nuevas:** {{ui:Las piezas nuevas van en}} elige la fase a la que irá cada miembro y cada cimentación que coloque a partir de ahora.
- **Una pieza:** selecciónela y cambie {{ui:Fase}} en el panel {{ui:Propiedades}}.
- **Varias piezas:** selecciónelas (con una ventana, {{key:Shift}}+clic, {{key:Mod+A}}) y cambie {{ui:Fase}} en la parte superior del panel {{ui:Propiedades}}. Muestra **Varía** cuando están en fases distintas. Un cambio es un paso de deshacer.

Las copias conservan la fase de la pieza de la que se copiaron, también al pegarlas en otro modelo (la fase se agrega allí).

## Mostrar y ocultar fases

Una fase oculta no se dibuja en la vista, no se puede seleccionar ni capturar con una ventana de selección, y {{key:Mod+A}} la deja fuera. Sigue en la lista de materiales, en los informes, en los dibujos y en todas las exportaciones. Ocultar solo afecta la vista: no se guarda y no tiene deshacer.

## Marcas por fase

Con **Numerar marcas por fase** activado (está activado al inicio) y piezas en más de una fase, cada fase se numera por separado y sus marcas comienzan con el número de fase: marcas de pieza 1-b1, 2-b1; marcas de ensamble 2-B1; cimentaciones 2-F1. Dos vigas idénticas en fases distintas tienen entonces marcas diferentes, porque se fabrican y se envían en momentos distintos. Si solo se usa una fase, las marcas no llevan prefijo. Desactívelo para numerar todo el modelo como uno solo, de modo que las piezas idénticas compartan marca sin importar su fase.

La fase se escribe en la exportación IFC (conjunto de propiedades DetailCraft, Fase).

:::note
Los modelos con fases se guardan en el formato de archivo 2 de DetailCraft. La versión 0.3 de DetailCraft no puede abrirlos; esta versión sí abre archivos anteriores, con todas las piezas en la fase 1.
:::
