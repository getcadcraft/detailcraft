---
title: Existencias de proveedores y plazos de entrega
summary: Compruebe las barras de stock que compra su lista de corte frente a la lista de existencias de un proveedor: ¿hay suficientes y cuánto hay que esperar?
keywords: proveedor, stock, plazo de entrega, almacén de acero, acería, disponibilidad, pedido pendiente, barras, compras, suministro
from: 1373f5a3
---

La pestaña {{ui:Supply}} busca cada perfil que compra la {{ui:Cut list}} en la lista de existencias de un proveedor. El archivo permanece en el modelo; no se envía nada a ningún sitio.

## Añada el archivo del proveedor

Pulse {{ui:Add a supplier file}} y elija un CSV de su proveedor (separado por comas, punto y coma o tabulaciones). Necesita una columna para el elemento o el perfil (Item, Name, Description, Section, SKU), y otra para el stock (In stock, Quantity, On hand) o para el plazo de entrega. La unidad (each, metres, kilograms, tonnes), el precio, el proveedor y una fecha de reposición se leen cuando hay una columna para ellos. También se entienden expresiones como "Out of stock", "In stock", "2-3 weeks" o "backorder". Se pueden guardar hasta cinco archivos; añadir un archivo con el mismo nombre lo reemplaza.

## Lo que ve

Para cada perfil que compra la lista de corte, la tabla muestra lo que necesita el modelo, lo que hay en stock, el plazo de entrega, el proveedor y un resultado:

- **Cubierto:** hay suficiente en stock.
- **Faltan:** el stock es inferior a la necesidad. Si el stock es inferior a la necesidad y ha fijado una espera máxima, el plazo de entrega indica cuánto tarda el resto.
- **Demasiado tarde:** no hay cifra de stock y el plazo de entrega es mayor que la espera que acepta.
- **Sin cifra de stock:** el archivo no lo indica.
- **Otra unidad:** el proveedor lista el perfil en una unidad que el modelo no puede calcular.

Lo que necesita el modelo se expresa en barras (de la lista de corte anidada, con sus longitudes de barra de stock), en metros de barra comprados y en kilogramos (peso del perfil por metro), y se usa la unidad propia del archivo. Un perfil se identifica por su nombre ("W16 X 26" y "w16x26" son lo mismo). Los perfiles que no están en el archivo se listan.

Los faltantes y los perfiles con retraso aparecen en el panel {{ui:Problems}}. Aquí no se realiza ningún pedido.

## Límites

Las cifras de stock y los plazos de entrega son los del archivo, a la fecha en que se generó. Las chapas no se anidan, así que no se buscan. El archivo solo se lee: cualquier instrucción que contenga es solo texto.
