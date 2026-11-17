---
title: Colocar zapatas con armadura
summary: Colocar zapatas illadas rectangulares cunha parrilla inferior e barras de espera, comprobalas e descargar o cadro de dobrado.
keywords: zapata, zapata illada, cimentación, armadura, barras, parrilla, barras de espera, pasadores, cadro de dobrado, lista de barras, formigón, ganchos, recubrimento
from: 41a048be
---

Este tema trata das zapatas illadas rectangulares. As vigas, os piares, as lousas e os muros están en [Detallar formigón armado](topic:reinforced-concrete). Cada zapata recibe unha parrilla inferior en ambos sentidos e, se as quere, barras de espera que sobresaen dela. As barras van dos tamaños US #3 a #11.

## Colocar unha zapata

1. Escoller {{ui:Planta}} e seleccionar o nivel da cara superior da zapata.
2. Escoller {{ui:Zapata}} no grupo {{ui:Colocar}}, ou premer {{key:F}}.
3. Configurar a zapata no panel {{ui:Propiedades}} (ver abaixo), ou manter os valores predeterminados.
4. Facer clic nunha intersección de cuadrícula. A zapata céntrase nela, coa cara superior no nivel. A barra de estado indica, por exemplo, "Zapata 2000 x 2000 x 600 baixo A/1."

Tamén pode usar o formulario {{ui:Engadir pola cuadrícula}} na parte inferior do panel.

A zapata debuxase transparente para que se vexan as súas barras, que se debuxan como tubos sólidos.

## Configuración da zapata

| Campo | Predeterminado | Notas |
|---|---|---|
| Lonxitude L (mm) | 2000 | Ao longo de x; de 300 a 50000 |
| Largura B (mm) | 2000 | Ao longo de y; de 300 a 50000 |
| Profundidade H (mm) | 600 | De 150 a 10000 |
| Formigón | 4000 psi | Texto, impreso na exportación IFC |

**Parrilla inferior**

| Campo | Predeterminado | Notas |
|---|---|---|
| Barras longas | #5 | Barras ao longo de L, na capa inferior |
| Separación (mm) | 250 | A maior separación permitida; as barras repártense por igual a esta separación ou menos |
| Barras curtas | #5 | Barras ao longo de B, colocadas sobre as barras longas |
| Separación (mm) | 250 | Como o anterior |
| Recubrimento (mm) | 75 | Recubrimento libre en todas as caras |
| Ganchos nos extremos | Activado | Dobra os dous extremos de cada barra da parrilla nun gancho estándar de 90° (forma U); desactivado dá barras rectas (forma S) |

**Barras de espera**

| Campo | Predeterminado | Notas |
|---|---|---|
| Barras de espera | Activado | Desactivar para unha zapata sen barras de espera |
| Barra | #6 | |
| Barras ao longo de L / Barras ao longo de B | 2 / 2 | Unha cuadrícula de barras, centrada na zapata |
| Separación ao longo de L / Separación ao longo de B | 250 / 250 | Entre os centros das barras |
| Saínte sobre o nivel superior | 600 | Canto sobresaen as barras por enriba da cara superior da zapata |
| Gancho na base | Activado | Un gancho de 90° cara a fóra, apoiado na parrilla (forma L) |

Debaixo dos campos, DetailCraft amosa a perna do gancho das barras longas, por exemplo "Perna do gancho para #5: 254 mm de exterior a exterior."

## Cambiar unha zapata colocada

Seleccione a zapata (prema no formigón lonxe de calquera piar, ou nunha das súas barras). Obtén os mesmos campos máis {{ui:Centro x}}, {{ui:Centro y}}, {{ui:Cota superior z}} e {{ui:Rotación (°)}}. Debaixo deles, unha táboa enumera as barras desta zapata coas súas marcas, cantidades e lonxitudes, e o volume de formigón en metros cúbicos.

Cada cambio compróbase antes de conservarse. Un cambio que non se pode construír recházase e a barra de estado indica o motivo, por exemplo "O recubrimento non deixa espazo para barras nesta zapata.", "A zapata é demasiado pouco profunda para dúas capas de barras dentro do recubrimento." ou "As barras de espera non caben dentro da zapata con 75 mm de recubrimento."

Os cambios que se poden construír pero requiren revisión aparecen debaixo da zapata e na pestana {{ui:Problemas}}:

- "Barras #11 a 59.6 mm deixan menos de 35.8 mm libres (ACI 318-19 25.2.1)." A separación libre entre barras debe ser como mínimo o diámetro da barra e como mínimo 25.4 mm.
- "Os ganchos #5 necesitan 254 mm de profundidade; só caben 150 mm dentro do recubrimento." As pernas dos ganchos córtanse entón para que caian, polo que deixan de ser ganchos estándar.
- "Os ganchos das barras de espera entran no recubrimento."
- "As barras de espera están máis xuntas que a separación libre mínima."

## Marcas das barras e cadro de dobrado

As barras idénticas (mesmo tamaño, forma e dimensións ao milímetro) comparten unha marca de barra en todas as zapatas. As marcas escríbense `<número de barra>F<n>`: 5F1, 5F2 para barras #5, 6F1 para a primeira barra #6, e así sucesivamente. As zapatas co mesmo tamaño, formigón, parrilla e barras de espera comparten unha marca de zapata: F1, F2 …

1. Abrir a pestana {{ui:Cadro de dobrado}} na parte inferior. Cada fila é unha marca de barra: tamaño, forma, dimensións A, B e C, cantidade, lonxitude de corte, lonxitude total, masa por metro, peso de cada unha, peso total e para que se usa a barra.
2. Premer {{ui:Descargar CSV}} na pestana, ou {{ui:Dobrado}} no menú {{ui:Máis}} do grupo {{ui:Saída}}, para obter `<nome> bending schedule.csv`.

As formas son códigos propios de DetailCraft, non dunha norma: S recta, L unha dobra, U dúas dobras. As dimensións son de exterior a exterior; a lonxitude de corte é a lonxitude exacta da liña central a través das dobras. Ver [Referencia de armadura](topic:rebar-reference).

## O que DetailCraft non comproba

- As lonxitudes de desenvolvemento e de solape, e se as barras de espera son bastante longas para o piar de enriba.
- A parte do tamaño do agregado da regra de separación libre (non coñece a mestura).
- Nada sobre o piar ou a placa de base de enriba: zapatas e aceiro son elementos separados.

Ver tamén [O que aínda non está construído](topic:not-built-yet).
