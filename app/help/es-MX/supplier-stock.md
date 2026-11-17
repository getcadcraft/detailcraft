---
title: Existencias del proveedor y tiempos de entrega
summary: Revise las barras de inventario que compra su lista de corte contra la lista de existencias de un proveedor: ¿hay suficiente y cuánto hay que esperar?
keywords: proveedor, existencias, tiempo de entrega, patio de acero, acería, disponibilidad, pedido pendiente, barras, compras, suministro
from: 1373f5a3
---

La pestaña {{ui:Suministro}} busca cada perfil que compra la {{ui:Lista de corte}} en la lista de existencias de un proveedor. El archivo permanece en el modelo; no se envía nada a ningún lugar.

## Agregar el archivo del proveedor

Pulse {{ui:Añadir un archivo del proveedor}} y elija un CSV de su proveedor (separado por comas, punto y coma o tabuladores). Necesita una columna para el elemento o el perfil (Elemento, Nombre, Descripción, Perfil, SKU) y otra para las existencias (En existencia, Cantidad, Disponible) o para el tiempo de entrega. La unidad (cada una, metros, kilogramos, toneladas), el precio, el proveedor y una fecha de reabastecimiento se leen cuando hay una columna para ellos. También se reconocen palabras como "Agotado", "En existencia", "2-3 semanas" y "pedido pendiente". Se pueden guardar hasta cinco archivos; agregar un archivo con el mismo nombre lo reemplaza.

## Lo que ve

Para cada perfil que compra la lista de corte, la tabla muestra lo que necesita el modelo, lo que hay en existencia, el tiempo de entrega, el proveedor y un resultado:

- **Cubierto:** hay suficiente en existencia.
- **Faltante:** la existencia es menor que la necesidad. Si la existencia es menor que la necesidad y usted fija una espera máxima, el tiempo de entrega indica cuánto tarda el resto.
- **Demasiado tarde:** no hay cifra de existencia y el tiempo de entrega es mayor que la espera que usted acepta.
- **Sin cifra de existencia:** el archivo no lo indica.
- **Otra unidad:** el proveedor lista el perfil en una unidad que el modelo no puede calcular.

Lo que necesita el modelo se expresa en barras (de la lista de corte anidada, con sus longitudes comerciales), en metros de barra comprada y en kilogramos (el peso del perfil por metro), y se usa la unidad propia del archivo. Un perfil se empareja por su nombre ("W16 X 26" y "w16x26" son lo mismo). Los perfiles que no están en el archivo se listan.

Los faltantes y los perfiles con entrega tardía aparecen en el panel {{ui:Problemas}}. Aquí no se hace ningún pedido.

## Límites

Las cifras de existencia y los tiempos de entrega son los del archivo, a la fecha en que se hizo. Las placas no se anidan, así que no se buscan. El archivo solo se lee: cualquier instrucción que contenga es solo texto.
