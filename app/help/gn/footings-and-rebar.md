---
title: Colocar zapatas con barras de refuerzo
summary: Colocá zapatas aisladas rectangulares con malla inferior y barras de arranque, revisalas y descargá la planilla de doblado.
keywords: zapata, zapata aislada, cimiento, barra, armadura, malla, barras de arranque, pasadores, planilla de doblado, lista de barras, hormigón, gancho, recubrimiento
from: 41a048be
---

Ko tema oñeañete zapatas aisladas rectangulares. Vigas, columnas, losas y muros oĩ en [Detallar hormigón armado](topic:reinforced-concrete). Cada zapata tiene una malla inferior en ambas direcciones y, si querés, barras de arranque que salen hacia arriba. Las barras son de tamaños US #3 a #11.

## Colocar una zapata

1. Elegí {{ui:Planta}} y seleccioná el nivel del tope de la zapata.
2. Elegí {{ui:Zapata}} en el grupo {{ui:Colocar}}, o apretá {{key:F}}.
3. Ajustá la zapata en el panel {{ui:Propiedades}} (ver abajo), o dejá los valores por defecto.
4. Hacé clic en una intersección de grilla. La zapata queda centrada allí, con su tope en el nivel. La barra de estado dice, por ejemplo, "Zapata 2000 x 2000 x 600 bajo A/1."

También podés usar el formulario {{ui:Agregar por grilla}} al pie del panel.

La zapata se dibuja transparente para que se vean sus barras, que se dibujan como tubos sólidos.

## Configuración de la zapata

| Campo | Por defecto | Notas |
|---|---|---|
| Longitud L (mm) | 2000 | En x; de 300 a 50000 |
| Ancho B (mm) | 2000 | En y; de 300 a 50000 |
| Altura H (mm) | 600 | De 150 a 10000 |
| Hormigón | 4000 psi | Texto, impreso en la exportación IFC |

**Malla inferior**

| Campo | Por defecto | Notas |
|---|---|---|
| Barras largas | #5 | Barras a lo largo de L, la capa inferior |
| Separación (mm) | 250 | La mayor separación permitida; las barras se reparten parejas a esta separación o menos |
| Barras cortas | #5 | Barras a lo largo de B, apoyadas sobre las barras largas |
| Separación (mm) | 250 | Igual que arriba |
| Recubrimiento (mm) | 75 | Recubrimiento libre en cada cara |
| Ganchos en los extremos | Sí | Dobla los dos extremos de cada barra de la malla en un gancho estándar de 90° (forma U); si está apagado, las barras quedan rectas (forma S) |

**Barras de arranque**

| Campo | Por defecto | Notas |
|---|---|---|
| Barras de arranque | Sí | Apagalas para una zapata sin arranques |
| Barra | #6 | |
| Barras a lo largo de L / Barras a lo largo de B | 2 / 2 | Una grilla de barras, centrada en la zapata |
| Separación a lo largo de L / Separación a lo largo de B | 250 / 250 | Entre centros de barra |
| Saliente sobre el tope | 600 | Cuánto sobresalen las barras por encima del tope de la zapata |
| Gancho en la base | Sí | Un gancho de 90° hacia afuera, apoyado sobre la malla (forma L) |

Debajo de los campos, DetailCraft muestra la pata del gancho de las barras largas, por ejemplo: "Pata del gancho para #5: 254 mm de cara a cara."

## Cambiar una zapata colocada

Seleccioná la zapata (hacé clic en su hormigón, lejos de cualquier columna, o en una de sus barras). Obtenés los mismos campos más {{ui:Centro x}}, {{ui:Centro y}}, {{ui:Cota superior z}} y {{ui:Rotación (°)}}. Debajo se muestra una tabla con las barras de esta zapata, con sus marcas, cantidades y longitudes, y el volumen de hormigón en metros cúbicos.

Cada cambio se revisa antes de guardarse. Un cambio que no se puede construir se rechaza y la barra de estado dice por qué, por ejemplo: "El recubrimiento no deja lugar para barras en esta zapata.", "La zapata es demasiado baja para dos capas de barras dentro del recubrimiento." o "Las barras de arranque no entran en la zapata con 75 mm de recubrimiento."

Los cambios que se pueden construir pero necesitan revisión se listan debajo de la zapata y en la pestaña {{ui:Problemas}}:

- "Barras #11 a 59.6 mm dejan menos de 35.8 mm libres (ACI 318-19 25.2.1)." La separación libre entre barras debe ser al menos el diámetro de la barra y al menos 25.4 mm.
- "Los ganchos #5 necesitan 254 mm de altura; solo entran 150 mm dentro del recubrimiento." Las patas de los ganchos se cortan para entrar, así que ya no son ganchos estándar.
- "Los ganchos de arranque llegan al recubrimiento."
- "Las barras de arranque están más cerca que la separación libre mínima."

## Marcas de barra y planilla de doblado

Las barras idénticas (mismo tamaño, forma y medidas al milímetro) comparten una marca de barra en todas las zapatas. Las marcas se escriben `<número de barra>F<n>`: 5F1, 5F2 para barras #5, 6F1 para la primera barra #6, y así. Las zapatas con el mismo tamaño, hormigón, malla y arranques comparten una marca de zapata: F1, F2 …

1. Abrí la pestaña {{ui:Planilla de doblado}} al pie. Cada fila es una marca de barra: tamaño, forma, medidas A, B y C, cantidad, longitud de corte, longitud total, masa por metro, peso de cada una, peso total y para qué se usa la barra.
2. Elegí {{ui:Descargar CSV}} en la pestaña, o {{ui:Doblado}} en el menú {{ui:Más}} del grupo {{ui:Salida}}, para `<nombre> planilla de doblado.csv`.

Las formas son códigos propios de DetailCraft, no de una norma: S recta, L una doblez, U dos dobleces. Las medidas son de cara a cara; la longitud de corte es la longitud exacta del eje a través de los dobleces. Ver [Referencia de armadura](topic:rebar-reference).

## Lo que DetailCraft no verifica

- Longitudes de anclaje y de empalme, y si las barras de arranque son lo bastante largas para la columna de arriba.
- La parte del tamaño de agregado de la regla de separación libre (no conoce la mezcla).
- Todo lo referido a la columna o a la placa base de arriba: zapatas y acero son elementos separados.

Ver también [Lo que todavía no está hecho](topic:not-built-yet).
