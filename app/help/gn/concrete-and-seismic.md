---
title: Chequear miembro de hormigón ha ajoko sísmica carga
summary: Ajustá viga ha columna de hormigón armado varilla, chequeá ACI 318-19-pe, ajoko fuerza lateral equivalente ASCE 7-22 losa rígida-pe ha ehecha piso deriva. Engeniero rekuaa-pe ayuda.
keywords: hormigón, hormigón armado, ACI 318, ACI 318-19, varilla, viga, columna, corte, ligaduras, sísmico, terremoto, fuerza lateral equivalente, ELF, ASCE 7-22, deriva, deriva de piso, pisos, diafragma rígido, peso de piso, utilización, utilization, estructural, ingeniero
from: 94d3001d
---

{{ui:Concrete members}} ha {{ui:Seismic loads}} bloque {{ui:Analysis}} pestaña-pe chequea hormigón armado viga ha columna, ha ajoko terremoto lateral fuerza piso-kuéra marco-pe. Ambue ojapo {{ui:Analysis}} pestaña corrida rehe ha modelo rupi oñongatu.

:::warning
Resultado **engeniero chequeo-pe**: ayuda ojekuaa peve engeniero ohechakuaa. Hormigón chequeo primer orden fuerza-pe, pero marco non-sway columna magnificado momento-pe ojapo, sway magnificación ndoĩ, torsión diseño ndoĩ, sísmico detalle (ACI capítulo 18) ndoĩ ha ligadura detalle ndoĩ. Sísmica carga redundancia, vertical sísmico, torsión amplificación ha P-delta ndoguereko. Viento carga ndoĩ ojapo.
:::

## Miembro dibujá

Hormigón miembro rectángulo-pe dibujá: columna-pe {{ui:Plate}} perfil `PL400x400`, viga-pe `PL300x600` sección ome'ẽ. Columna ha viga ambue miembro-kuéra ichupe omoĩ.

## Sección ajuste

{{ui:Concrete members}} bloque ojehechakuaa miembro ojeikotevẽ sección-kuéra. Hormigón-pe {{ui:Set up as concrete…}} omoĩ. DetailCraft dibujo perfil-gui ojehechakuaa ancho **b** (miembro y eje rehe) ha profundidad **h** (z rehe), ha ojerure:

- **recubrimiento** varilla centro-pe, ha **tuicha**, **pyta**, **costado** varilla (cuántas ha mboyve diámetro) viga-pe, térã **columna jaula** (b rehe ha h rehe varilla, diámetro, espiral ligadura) columna-pe;
- **ligadura**: ala, diámetro ha espaciado;
- miembro **ojapo**: viga, columna, térã fuerza rehe ojehecha (vertical miembro, térã 0.10 f′c Ag mboyve carga, columna).

f′c, varilla fluencia fy ha ligadura fluencia fyt (420 MPa mboyve corte-pe ojerure) ajustá, K ha marco sway térã non-sway. Hormigón ajuste sección E = 4700 √f′c, 2400 kg/m³ rehe ojehecha, ha predeterminado **fisurado sección** (columna 0.70 Ig, viga 0.35 Ig; ACI 318-19 Tabla 6.6.3.1.1(a)). {{ui:Gross sections}} eiporu upéva ndojapói.

## Combinación ha chequeo

Carga caso tipo ome'ẽ, {{ui:Make combinations}}: ACI 318-19 ASCE 7 resistencia combinación ojerure (§5.3.1). {{ui:Check concrete}} oprimi ha miembro peteĩteĩ utilización oguereko, modelo-pe acero chequeo-icha color: flexión ha mínimo acero (22.2, 9.6.1.2), tracción controlada deformación (9.3.3.1), corte ligadura-pe (22.5, 9.6.3), ligadura espaciado, ha columna axial carga ha momento (22.4, Bresler método dos-dirección flexión-pe). Miembro dibujo sección b × h tipeado-gui diferente ha'e *parcial chequeado*, esbelta columna térã torsión umbral-gui yvate avei: ha'e ndojapóiva.

Capacidad-gui yvate miembro-kuéra {{ui:Problems}} omoĩ; motivo rupi aceptá térã sección ajuste.

## Piso ha sísmica carga

Piso ha'e nivel marco losa rígida (**diafragma rígido**) rupi ojoaju. {{ui:Seismic loads}} bloque {{ui:Find floors}} oprimi: viga dos térã mboyve oñemoŋgy nivel-kuéra ojejuka. Upe rire piso-pe **sísmico peso** ome'ẽ, tipeado térã leído. {{ui:Take weights from cases}} caso-kuéra vertical carga suma, factor ome'ẽ (muerto 1; almacenamiento vivo térã nieve techo plano-pe 0.25 ASCE 7-22 12.7.2). Nudo vertical carga piso-pe ho'a, piso térã mboyve, upévare mbohapy pisos mbytépe columna mitad peso cada piso-pe.

Diseño valor-kuéra ajuste: SDS, SD1, S1, R, Ie, Cd, TL, estructural sistema (período rehe) ha riesgo categoría. {{ui:Make seismic cases}} período edificio altura rehe ojejuka (12.8.2.1), base cortante V = Cs W (12.8.1), piso-kuéra rupi ojerupi (12.8.3) ha cuatro carga caso ojapo, X ha Y-pe 5 % accidental torsión cada mano-pe (12.8.4.2). Piso fuerza ha piso deriva chequeo (12.8.6, Tabla 12.12-1, deriva Cd δxe / Ie vs 0.020 hsx) corrida rire ohechakuaa; límite yvate deriva avei problema. {{ui:Make combinations}} oprimi jey sísmico caso-kuéra combinación-pe omoĩ.

**Análisis período.** Ta aproximado período edificio altura-gui. Análisis sísmico caso-kuéra oñemboguejy rire, {{ui:Take the period from the analysis}} oprimi: piso-kuéra fuerza rupi moveáva leí, Rayleigh método rupi período ojejuka, T = 2π √(Σ w δ² / (g Σ f δ)), X ha Y-pe peteĩteĩ; sísmico caso-kuéra jey ojapo. Período ojerure Cu·Ta-gui yvate ndaha'éi (ASCE 7-22 12.8.2), upévare modelo mbyky base cortante Cu·Ta-gui ndoikói. Segunda corrida rire período jey ojejuka: peteĩ térã mokõi paso-pe oñemoĩ. Ta-pe jey eiporu {{ui:Period from the analysis}} ndoeiporúi.

**Esbelta columna (ACI 318-19 6.6.4.5).** Non-sway marco-pe, columna k·ℓu/r 34 + 12·M1/M2 mboyve (40 peve) magnificado momento Mc = δns · M2-pe ojapo: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² (EI)eff = 0.4 Ec Ig / (1 + βdns), mínimo momento Pu (15 + 0.03 h). βdns (0.6 ñepyrũ) carga axial sostenida parte: nde tipeá. Pu 0.75 Pc-gui yvate columna chequeo propio-pe ndojapói. Informe esbelta columna número omoĩ. **Sway** marco-pe esbelta columna "parcial chequeado" oĩ: magnificación segundo orden análisis ojerure, ndojapói.

**Losa.** Modelo placa oguerekóramo, {{ui:Slab reinforcement}} bloque placa momento opavave combinación-gui ojeikuaa ha Wood–Armer regla (flexión ha torsión ojapo) rupi, capa cada metro acero oikotevẽ ojejuka: pyta ha tuicha, x ha y-pe. Espesor, recubrimiento ha varilla ome'ẽ; tabla oikotevẽ-gui ha ome'ẽ-gui, ha corte φVc-gui; ndojapói capa problema. Deflexión, perforación columna-pe ha apertura refuerzo ndoĩ; soporte momento placa cuatro nodo-pe lento.

Piso listado opavave rígido diafragma análisis-pe: viga piso movimiento-gui axial fuerza ndoguerekói. CraftScript exportación piso-pe modelo ndojapói.

## Informe

{{ui:Report (PDF)}} ha {{ui:Report (CSV)}} hormigón tabla-kuéra (suposición, miembro utilización, cláusula), sísmico parámetro ha base cortante, piso fuerza ha deriva tabla ojerovia.
