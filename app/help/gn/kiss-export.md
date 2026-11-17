---
title: Exportar un archivo KISS para software de fabricación
summary: Enviá la lista de materiales a un programa de gestión de fabricación (MIS) como archivo KISS 1.1: conjuntos, piezas, fases como secuencias, agujeros, recortes y soldaduras.
keywords: kiss, kss, mis, gestión de fabricación, control de producción, estimación, lista de materiales, bom, exportar, fabtrol, secuencia
from: 30cf3951
---

En el grupo {{ui:Salida}}, abrí {{ui:Más}} y elegí {{ui:Archivo KISS para software de fabricación}}. DetailCraft descarga `<name>.kss`, un archivo KISS ("Keep It Simple, Steel", versión 1.1), el formato de texto plano que la mayoría de los programas de gestión de fabricación importan desde una lista de materiales.

## Qué contiene

- El encabezado: un número de trabajo (las primeras ocho letras y dígitos del nombre del modelo), el nombre del modelo, la fecha y hora, y si los tamaños son métricos.
- Para cada marca de conjunto: su pieza principal (cantidad = cuántos del conjunto), una línea de plano (A-B1 y así, el número del plano del conjunto), una línea de conjunto (nombre, tipo, peso, longitud total, profundidad y ancho), una línea de secuencia por cada [fase](topic:phases) en la que está el conjunto, y líneas de mano de obra: agujeros (cuántos, diámetro, espesor pasante), recortes y soldaduras.
- Luego cada pieza unida a él, con la cantidad **total** (por conjunto × conjuntos), como pide la norma.
- Pernos sueltos y barras de anclaje en el plano BOLTS, conjunto FIELD.
- Cada línea indica el tipo (W, C, L, HSS, PL, o MI para un perfil personalizado), tamaño, calidad, longitud de corte en milímetros, nombre de la pieza y peso.

## Imperial o métrico

En la [configuración de DetailCraft](topic:settings), **Tamaños del archivo KISS** elige:

- **Automático** (el inicial): imperial cuando todos los miembros son perfiles AISC, métrico en los demás casos.
- **Imperial**: perfiles por su designación AISC (W 16X26, HSS 4X4X.250); chapas y pernos, que DetailCraft mantiene en milímetros, al 1/16 de pulgada más cercano; pesos en libras.
- **Métrico**: perfiles europeos por su nombre (IPE300), chapas como espesor X ancho en milímetros; pesos en kilogramos.

Las longitudes siempre están en milímetros con dos decimales, sin importar la configuración: la norma KISS lo pide, y el programa receptor las convierte.

:::note
Las calidades se acortan a los ocho caracteres de la norma: A572 Gr 50 pasa a A572-50. Las comas en los nombres se cambian por espacios (el formato no tiene comillas). Verificá una importación en tu programa antes de confiar en ella: los archivos KISS de DetailCraft se validan contra la norma aquí, todavía no en un programa de fabricación.
:::
