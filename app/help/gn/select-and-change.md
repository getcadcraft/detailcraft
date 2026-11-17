---
title: Seleccionar por ventana, mover, rotar, espejar, cambiar varios
summary: Arrastrá ventana selecciona, arrastrá piezas selectadas mover, mover, rotar o espejar selección (térã copia) ojapo, térã cambiá perfil, material, posición o rotación hetave miembro peteĩ jey.
keywords: lazo, cerca, selección a mano alzada, arrastrar, arrastrar y soltar, mover arrastrando, ajustar, ventana, cruzada, selección por caja, arrastre seleccionar, seleccionar varios, mover, rotar, espejar, voltear, copiar, cambiar varios, varios miembros, perfil, material, posición, rotación, varía, línea de grilla
from: 50b16f9a
---

Opavave ko mba'e peteĩ paso deshacer ha'e: peteĩ {{key:Mod+Z}} opavave ombohasy.

## Seleccionar con ventana

- {{ui:Plan}} ha {{ui:Elevation}} pe, izquierda botón-gui arrastrá tuichaite ndaipóri lugar-gui. {{ui:3D}} pe, {{key:Shift}} tenonderã ha arrastrá (ndaipóri arrastre modelo ha'e mboyeguáicha).
- Arrastrá **derecha-pe** ventana: opavave ipype oikóva oguerahaukáta, borde sólido-pe ohechauka.
- Arrastrá **izquierda-pe** ventana cruzada: opavave ojeguahẽva oguerahaukáta, línea punteada-pe.
- {{key:Shift}} arrastre kuera-pe ombohasa selección ojeguerúvo, ndoñemboguruvéi.
- Plano térã elevación ohechauka ha'e: corte viga planta ryepýgui térã elevación grilla línea 1 m mboyve, nda ojeporavói.
- Arrastre jeheguáre {{key:Esc}} ventana ombojoaku.

### Lazo

Eiporavo **Lazo** {{ui:Dragging to select}} rupi [configuración DetailCraft](topic:settings) pe ha arrastre ojapo línea a mano alzada, rectángulo-pe ndaha'éi.

- Primer costado movimiento: **derecha-pe**, ipype oikóva oguerahaukáta (línea sólida); **izquierda-pe**, ojeguahẽva (punteada).
- Arrastre jeheguáre {{key:Space}} apretá ojeporavo ipype, ojeguahẽva ha **cerca**: línea abierta ojeguahẽva opavave ojehasa (punteada, naranja).
- {{key:Shift}} agregar ha {{key:Esc}} ombojoaku ventana-gui ojapo.

:::touch
Touch pantalla-pe, peteĩ dedo planta ha elevación ojeheja mboyve; piezas eiporavo eklika-gui.
:::

{{ui:Plan}} ha {{ui:Elevation}} pe, derecha térã mitad botón-gui desplazá {{ui:Select}} herramienta ojeporavóramo.

## Arrastrá piezas mover

1. Piezas selectá primero (eklika, {{key:Shift}}+eklika térã ventana).
2. Selectado pieza peteĩ apretá ha arrastrá. Selección entero oñemboguru; línea punteada ohechauka ha'e mba'e.
3. Oñemoĩ ha mboja. {{key:Esc}} mboja-mboyve oguerahaukáta opavave tenonderã.

- {{ui:3D}} ha {{ui:Plan}} pe piezas nivel rupi oñemboguru. {{key:Mod}} apretá arrastre ojapo {{ui:3D}} pe, hasy ha ipeve mboguru.
- {{ui:Elevation}} pe elevación ryepýpe oñemboguru: grilla línea rupi ha hasy-ipeve.
- Pieza ñoñeñandu grilla intersección-pe ojehasa ipunta pixel mbyte mboyve (intersección ojehecha ha barra de estado ohechauka). Upérõ, movimiento 10 mm ojapo.
- Pieza ndoselectado apretá rire, vista rotá térã desplazá, arrastre ndojapói mba'e ndaikatuvéiva.
- Arrastre peteĩ deshacer paso, {{ui:Move}} ojogua. Conexiones miembro ruguépe oñemboguru.

## Cambiar propiedad hetave miembro-pe

Dos térã hetave miembro selectá. {{ui:Properties}} panel-pe **Cambiar en todos ellos**:

- {{ui:Profile}}, {{ui:Position}}: umi vigas, columnas ha arriostres-pe.
- {{ui:Plate thickness (mm)}} ha {{ui:Plate width (mm)}}: placas-pe.
- {{ui:Material}} ha {{ui:Rotation (°)}}: opavave-pe.

Campo **{{ui:Varies}}** ohechauka miembro ndojoaporã. Eligi térã escribí valor ha opavave oñemboguru; barra de estado he'i mba'e miembro ojapo ha mba'e tenonderã oiko.

Número campo {{ui:Properties}} panel-pe cálculo ikatu: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Cálculo ndojeporogueráiva ndojapói, ha barra de estado he'i mba'éichapa ndaporãi.

## Mover, rotar o espejar

Miembro ha zapatas selectá (peteĩ avei ikatu), upéi **Mover, rotar, espejar** {{ui:Properties}} panel-pe ejeporavo. Conexiones ndoikotevéi mover: miembro-gui oñemboguru. Viga mover ha columna ndemoveiete, barra de estado he'i mba'e conexión oñemboguru miembro oikóva ndive, ha [Problemas](topic:troubleshooting) he'i noñeñandúi jepe.

- **Mover:** x, y ha z milímetro-pe escribí ha {{ui:Move}} eklika. Térã {{ui:Pick two points}} eiporavo (térã {{key:M}} apretá): grilla intersección eklika mboyve ha mba'e peve. Línea punteada puntero ndive oñemboguru.
- **Rotar en planta:** ángulo escribí (antihorario, arriba-gui ehechaháme) ha mba'e rupi ojapo: selección ryepý térã grilla intersección. Columnas marco ndive oñemboguru.
- **Espejar:** grilla línea eligi. Espejo imagen perfil ojeporavo katu jeguatia: viga I flange ohupyty, canal ojehasa ambue pe (superior ha inferior ojeguambue), agujeros ha recortes pieza ndive.
- **Conservar el original (hacer una copia)** marca, selección tenonderã oiko ha mover, rotar térã espejar kopia. Conexiones ojevy {{ui:Copy end plates and base plates with their members}} [configuración DetailCraft](topic:settings) pe jepe.

Rotar eje vertical rupi ha espejar plano vertical rupi ojapo, upéva nivel ojeikóva ha zapatas tuichaite ojapo.
