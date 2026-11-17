---
title: Stock de proveedor y plazos de entrega
summary: Compará las barras de stock que compra tu lista de cortes con la lista de stock de un proveedor: ¿alcanza, y cuánto hay que esperar?
keywords: proveedor, stock, plazo de entrega, depósito de acero, fábrica, disponibilidad, pedido pendiente, barras, compras, suministro
from: 1373f5a3
---

La pestaña {{ui:Proveedor}} busca cada perfil que compra la {{ui:Lista de cortes}} en la lista de stock de un proveedor. El archivo queda en el modelo; no se envía nada a ningún lado.

## Agregar el archivo del proveedor

Presioná {{ui:Agregar un archivo de proveedor}} y elegí un CSV de tu proveedor (separado por coma, punto y coma o tabulación). Necesita una columna para el ítem o perfil (Item, Name, Description, Section, SKU), y otra para el stock (In stock, Quantity, On hand) o para el plazo de entrega. La unidad (each, metres, kilograms, tonnes), el precio, el proveedor y una fecha de reposición se leen cuando hay una columna para ellos. También se entienden palabras como "Out of stock", "In stock", "2-3 weeks", "backorder". Se pueden guardar hasta cinco archivos; agregar un archivo con el mismo nombre reemplaza al anterior.

## Lo que ves

Para cada perfil que compra la lista de cortes, la tabla muestra lo que necesita el modelo, lo que hay en stock, el plazo de entrega, el proveedor y un resultado:

- **Cubierto:** hay suficiente en stock.
- **Faltan:** el stock es menor que la necesidad. Si el stock es menor que la necesidad y fijaste una espera máxima, el plazo de entrega indica cuánto demora el resto.
- **Demasiado tarde:** no hay cifra de stock y el plazo de entrega es más largo que la espera que aceptás.
- **Sin cifra de stock:** el archivo no lo dice.
- **Otra unidad:** el proveedor lista el perfil en una unidad que el modelo no puede calcular.

Lo que necesita el modelo se expresa en barras (de la lista de cortes anidada, con tus largos de stock), en metros de barra comprada y en kilogramos (el peso del perfil por metro), y se usa la unidad propia del archivo. Un perfil se empareja por su nombre ("W16 X 26" y "w16x26" son lo mismo). Los perfiles que no están en el archivo se listan.

Los faltantes y los perfiles tardíos aparecen en el panel {{ui:Problemas}}. Acá no se pide nada: esto no hace pedidos.

## Límites

Las cifras de stock y los plazos de entrega son los del archivo, a la fecha en que se hizo. Las placas no se anidan, así que no se buscan. El archivo solo se lee: cualquier instrucción que tenga es solo texto.
