---
title: Seleccionar con xanela, mover, xirar, espellar, cambiar moitos
summary: Arrastre unha xanela para seleccionar, arrastre as pezas seleccionadas para movelas, mova, xire ou espella a selección (ou unha copia dela), ou cambie o perfil, material, posición ou xiro de moitas barras á vez.
keywords: lazo, valado, selección a man alzada, arrastrar, arrastrar e soltar, mover arrastrando, axuste, xanela, cruzamento, selección por caixa, arrastrar para seleccionar, seleccionar moitos, mover, xirar, espellar, reflectir, copiar, cambiar moitos, varias barras, perfil, material, posición, xiro, varía, liña de cuadrícula
from: 50b16f9a
---

Cada unha destas accións é un paso de desfacer: un {{key:Mod+Z}} desfaino todo.

## Seleccionar cunha xanela

- En {{ui:Planta}} e {{ui:Alzado}}, arrastre co botón esquerdo desde un espazo baleiro. En {{ui:3D}}, manteña {{key:Shift}} e arrastre (un arrastre simple xira o modelo).
- Arrastre **cara á dereita** para unha xanela: toma o que queda totalmente dentro, debuxada cunha liña continua.
- Arrastre **cara á esquerda** para unha xanela de cruzamento: toma todo o que toca, debuxada con trazos.
- Manteña {{key:Shift}} ao comezar o arrastre para engadir á selección en vez de substituíla.
- Unha planta ou un alzado só ofrece o que mostra: as pezas cortadas por riba da planta, ou a máis de 1 m da liña de cuadrícula do alzado, non se seleccionan.
- {{key:Esc}} durante o arrastre descarta a xanela.

### Lazo

Escolla **Lazo** baixo {{ui:Arrastrar para seleccionar}} en [Configuración de DetailCraft](topic:settings) e o mesmo arrastre debuxa unha liña a man alzada en vez dun rectángulo.

- O seu primeiro movemento lateral decide como selecciona: **cara á dereita**, o que queda totalmente dentro (liña continua); **cara á esquerda**, o que toca (trazos).
- Prema {{key:Space}} durante o arrastre para alternar entre dentro, tocar e **valado**: unha liña aberta que toma o que cruza (punteada, laranxa).
- {{key:Shift}} para engadir e {{key:Esc}} para descartar funcionan como na xanela.

:::touch
Nunha pantalla táctil, un dedo despraza a planta e o alzado como antes; seleccione pezas tocándoas.
:::

En {{ui:Planta}} e {{ui:Alzado}}, desprácese co botón dereito ou central mentres a ferramenta {{ui:Seleccionar}} estea activa.

## Arrastrar pezas para movelas

1. Seleccione primeiro as pezas (prema, {{key:Shift}}+clic ou unha xanela).
2. Prema nunha das pezas seleccionadas e arrastre. Móvese toda a selección; un contorno de trazos mostra onde vai.
3. Solte para colocala. {{key:Esc}} antes de soltar devolve todo ao seu sitio.

- En {{ui:3D}} e {{ui:Planta}} as pezas móvense polo nivel. Manteña {{key:Mod}} ao comezar o arrastre en {{ui:3D}} para movelas cara arriba e cara abaixo.
- En {{ui:Alzado}} móvense dentro do alzado: ao longo da liña de cuadrícula e arriba e abaixo.
- A peza que sostén encaixa nun cruzamento de cuadrícula cando o seu extremo chega a poucos píxeles del (o cruzamento ilumínase e a barra de estado o nomea). Noutro caso, o movemento vai en pasos de 10 mm.
- Premer sobre unha peza non seleccionada segue xirando ou desprazando a vista, así que un arrastre nunca move algo por accidente.
- O arrastre é un paso de desfacer, igual que {{ui:Mover}}. As conexións seguen as súas barras.

## Cambiar unha propiedade en moitas barras

Seleccione dúas ou máis barras. Baixo **Cambiar en todas** no panel {{ui:Propiedades}}:

- {{ui:Perfil}}, {{ui:Posición}}: para as vigas, piares e riostras entre elas.
- {{ui:Grosor da placa (mm)}} e {{ui:Largura da placa (mm)}}: para as placas.
- {{ui:Material}} e {{ui:Rotación (°)}}: para todas.

Un campo mostra **Varía** cando as barras non coinciden. Escolla ou escriba un valor e cada barra á que se aplique tómao; a barra de estado indica cantas cambiaron e cantas mantiveron o seu.

Os campos numéricos do panel {{ui:Propiedades}} tamén admiten un cálculo: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Un cálculo que non se pode ler recházase, e a barra de estado indica onde falla.

## Mover, xirar ou espellar

Seleccione barras e zapatas (tamén funciona unha soa), e despois use **Mover, xirar, espellar** no panel {{ui:Propiedades}}. As conexións non se moven por si mesmas: seguen as súas barras. Se move unha viga pero non o seu piar, a barra de estado indica cantas conexións unen agora unha barra movida a unha que quedou, e [Problemas](topic:troubleshooting) di se xa non encaixan.

- **Mover:** escriba x, y e z en milímetros e escolla {{ui:Mover}}. Ou escolla {{ui:Seleccionar dous puntos}} (ou prema {{key:M}}): prema no cruzamento de cuadrícula de orixe e logo no de destino. Un contorno de trazos segue o punteiro.
- **Xirar no plano:** escriba o ángulo (en sentido antihorario, visto desde arriba) e escolla arredor de que xirar: o centro da selección, ou un cruzamento de cuadrícula. Os piares xiran co marco.
- **Espellar:** escolla unha liña de cuadrícula. A imaxe espellada é o mesmo perfil dado a volta: un perfil en I conserva as súas alas, un perfil en U mira para o lado contrario (a súa parte superior e inferior trocan), e os furos e recortes van coa peza.
- Marque **Conservar o orixinal (crear unha copia)** para deixar a selección no seu sitio e mover, xirar ou espellar unha copia. As súas conexións veñen con ela cando {{ui:Copiar placas de extremo e placas base cos seus elementos}} está activo en [Configuración de DetailCraft](topic:settings).

Xirar fai un xiro arredor dunha liña vertical e espellar é nun plano vertical, así que os niveis seguen nivelados e as zapatas seguen dereitas.
