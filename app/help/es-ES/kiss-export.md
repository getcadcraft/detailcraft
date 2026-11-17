---
title: Exportar un archivo KISS para software de fabricación
summary: Envíe la lista de materiales a un programa de gestión de fabricación (MIS) como archivo KISS 1.1: conjuntos, piezas, fases como secuencias, agujeros, recortes y soldaduras.
keywords: kiss, kss, mis, gestión de fabricación, control de producción, presupuesto, lista de materiales, lista, exportar, fabtrol, secuencia
from: 30cf3951
---

En el grupo {{ui:Salida}}, abra {{ui:Más}} y elija {{ui:Archivo KISS para software de fabricación}}. DetailCraft descarga `<name>.kss`, un archivo KISS ("Keep It Simple, Steel", versión 1.1), el formato de texto plano desde el que la mayoría de programas de gestión de fabricación importan una lista de materiales.

## Qué contiene

- La cabecera: un número de trabajo (las primeras ocho letras y dígitos del nombre del modelo), el nombre del modelo, la fecha y la hora, y si los tamaños son métricos.
- Para cada marca de conjunto: su pieza principal (cantidad = cuántos hay del conjunto), una línea de plano (A-B1 y así sucesivamente, el número del plano de conjunto), una línea de conjunto (nombre, tipo, peso, longitud total, canto y ancho), una línea de secuencia por cada [fase](topic:phases) en la que está el conjunto, y líneas de mano de obra: agujeros (cuántos, diámetro, espesor pasante), recortes y soldaduras.
- A continuación, cada pieza unida a él, con la cantidad **total** (por conjunto × conjuntos), como exige la norma.
- Tornillos sueltos y barras de anclaje en el plano BOLTS, conjunto FIELD.
- Cada línea indica el tipo (W, C, L, HSS, PL, o MI para un perfil a medida), el tamaño, la calidad, la longitud de corte en milímetros, el nombre de la pieza y el peso.

## Imperial o métrico

En [Ajustes de DetailCraft](topic:settings), **Tamaños del archivo KISS** elija:

- **Automático** (el inicial): imperial cuando todos los miembros son perfiles AISC, métrico en caso contrario.
- **Imperial**: perfiles por su designación AISC (W 16X26, HSS 4X4X.250); placas y tornillos, que DetailCraft mantiene en milímetros, redondeados a la 1/16 de pulgada más cercana; pesos en libras.
- **Métrico**: perfiles europeos por su nombre (IPE300), placas como espesor X ancho en milímetros; pesos en kilogramos.

Las longitudes van siempre en milímetros con dos decimales, sea cual sea el ajuste: la norma KISS lo exige y el programa receptor las convierte.

:::note
Las calidades se recortan a los ocho caracteres de la norma: A572 Gr 50 pasa a A572-50. Las comas de los nombres se convierten en espacios (el formato no admite comillas). Compruebe una importación en su programa antes de confiar en ella: los archivos KISS de DetailCraft se validan aquí contra la norma, todavía no en un programa de fabricación.
:::
