---
title: Exportar un archivo KISS para software de fabricación
summary: Envíe la lista de materiales a un programa de gestión de fabricación (MIS) como archivo KISS 1.1: ensamblajes, piezas, fases como secuencias, agujeros, cortes y soldaduras.
keywords: kiss, kss, mis, gestión de fabricación, control de producción, presupuesto, lista de materiales, materiales, exportar, fabtrol, secuencia
from: 30cf3951
---

En el grupo {{ui:Salida}}, abra {{ui:Más}} y elija {{ui:Archivo KISS para software de fabricación}}. DetailCraft descarga `<name>.kss`, un archivo KISS ("Keep It Simple, Steel", versión 1.1), el formato de texto plano desde el que importan una lista de materiales la mayoría de los programas de gestión de fabricación.

## Qué contiene

- El encabezado: un número de trabajo (las primeras ocho letras y dígitos del nombre del modelo), el nombre del modelo, la fecha y hora, y si las medidas son métricas.
- Para cada marca de ensamblaje: su pieza principal (cantidad = cuántas del ensamblaje), una línea de plano (A-B1 y así sucesivamente, el número del plano del ensamblaje), una línea de ensamblaje (nombre, tipo, peso, longitud total, profundidad y ancho), una línea de secuencia por cada [fase](topic:phases) en la que está el ensamblaje, y líneas de mano de obra: agujeros (cuántos, diámetro, espesor pasante), cortes y soldaduras.
- Después, cada pieza unida a él, con la cantidad **total** (por ensamblaje × ensamblajes), como exige la norma.
- Pernos sueltos y varillas de anclaje en el plano BOLTS, ensamblaje FIELD.
- Cada línea indica el tipo (W, C, L, HSS, PL, o MI para un perfil personalizado), tamaño, grado, longitud de corte en milímetros, nombre de la pieza y peso.

## Imperial o métrico

En [Configuración de DetailCraft](topic:settings), **Tamaños de archivo KISS** elige:

- **Automático** (el inicial): imperial cuando todos los miembros son perfiles AISC; métrico en los demás casos.
- **Imperial**: perfiles por su designación AISC (W 16X26, HSS 4X4X.250); placas y pernos, que DetailCraft mantiene en milímetros, redondeados a la 1/16 de pulgada más cercana; pesos en libras.
- **Métrico**: perfiles europeos por su nombre (IPE300), placas como espesor X ancho en milímetros; pesos en kilogramos.

Las longitudes siempre están en milímetros con dos decimales, sin importar la configuración: la norma KISS lo exige y el programa receptor las convierte.

:::note
Los grados se recortan a los ocho caracteres de la norma: A572 Gr 50 se convierte en A572-50. Las comas en los nombres se convierten en espacios (el formato no admite comillas). Revise una importación en su programa antes de confiar en ella: los archivos KISS de DetailCraft se verifican aquí contra la norma, todavía no en un programa de fabricación.
:::
