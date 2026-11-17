---
title: Colocar pilares, vigas e riostras
summary: Escolla un perfil, un material e unha posición, e despois faga clic nas intersección das cuadrículas ou escríbaas para colocar pezas de aceiro.
keywords: pilar, viga, riostra, peza, colocar, perfil, material, rotación, posición, desprazamento, inserir, engadir pola cuadrícula
from: d6db0dc1
---

As pezas colócanse nas intersecións da cuadrícula: un pilar nunha, unha viga ou unha riostra entre dúas. Prepare primeiro [cuadrículas e niveis](topic:grids-and-levels).

## Escoller unha ferramenta e as súas opcións

1. Escolla {{ui:Piar}} ({{key:C}}), {{ui:Viga}} ({{key:B}}) ou {{ui:Riostra}} ({{key:R}}) no grupo {{ui:Colocar}}.
2. O panel {{ui:Propiedades}} da dereita pasa a "Colocar un piar" (ou viga, ou riostra) e mostra as opcións para a seguinte peza:
   - {{ui:Perfil}}: escolla da lista. Os tamaños agrúpanse por catálogo (perfís W, canles, cantoneiras, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS e os seus perfís personalizados). Ver [Catálogo de perfís](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ou S355.
   - {{ui:Posición}}: onde se sitúa a sección sobre a liña entre os dous puntos: {{ui:Cara superior do aceiro sobre a liña}}, {{ui:Centrado sobre a liña}} ou {{ui:Cara inferior sobre a liña}}.
   - {{ui:Rotación (°)}}: xira a sección arredor do propio eixo da peza.
   - {{ui:Ata}} (só pilares): {{ui:O seguinte nivel superior}}, ou o nome dun nivel.
3. Debaixo das opcións, unha caixa {{ui:Perfil}} lista as dimensións, a superficie, a masa por metro e o catálogo de onde procede a sección escollida.

Os valores por defecto son W12x50 en A992 para os pilares (centrado), W16x26 en A992 para as vigas (cara superior do aceiro sobre a liña) e HSS6x6x1/4 en A500 Gr C para as riostras (centrado). As opcións quedan fixadas ata que as cambie.

## Colocar facendo clic

### Un pilar

1. Escolla {{ui:Planta}} e escolla o nivel no que comeza o pilar.
2. Escolla {{ui:Piar}}.
3. Sitúe o punteiro preto dunha intersección. O punto máis próximo ilumínase e a barra de estado o nomea.
4. Faga clic. O pilar vai dese nivel ata o seguinte nivel superior (ou ata o nivel de {{ui:Ata}}). A barra de estado indica, por exemplo, «Piar W12x50 en A/1, do Nivel 1 ao Nivel 2.»
5. Siga facendo clic para colocar máis. Prema {{key:Esc}} cando remate.

Se non hai nivel por riba do que fixo clic, a barra de estado di «Non hai ningún nivel por riba do Nivel 2 ata o que chegue o pilar. Engada antes un nivel.»

### Unha viga

1. Escolla {{ui:Planta}} e escolla o nivel da viga.
2. Escolla {{ui:Viga}}.
3. Faga clic na primeira intersección. A barra de estado di «Desde A/1 no Nivel 2. Agora faga clic no outro extremo (Esc cancela).» Unha liña discontinua segue o punteiro.
4. Faga clic na segunda intersección. Aparece a viga.
5. Faga clic de novo para iniciar a seguinte viga, ou prema {{key:Esc}}.

{{key:Esc}} despois do primeiro clic cancela só ese punto; un segundo {{key:Esc}} retira a ferramenta.

### Unha riostra

Unha riostra vai entre dúas intersección en niveis distintos, así que é máis doado en {{ui:Alzado}}.

1. Escolla {{ui:Alzado}} e escolla a liña de cuadrícula con letra na que está a riostra.
2. Escolla {{ui:Riostra}}.
3. Faga clic no extremo inferior e despois no superior.

Os alzados só existen para liñas de cuadrícula con letra. Para unha riostra nun pórtico ao longo dunha liña numerada (de A a B), use {{ui:3D}} ou o formulario {{ui:Engadir pola cuadrícula}} de abaixo.

:::touch
Nunha pantalla táctil, toque preto da intersección: un toque escolle o punto máis próximo a unha distancia curta e non fai nada se non hai ningún punto preto. Antes de tocar non hai resalte, así que comprobe a mensaxe da barra de estado despois de cada toque. Os arrastres cun dedo xiran ou desprazan a vista en lugar de colocar.
:::

## Colocar pola cuadrícula, sen facer clic

Cada ferramenta de colocación ten un formulario {{ui:Engadir pola cuadrícula}} na parte inferior do panel {{ui:Propiedades}}. Funciona só co teclado e non precisa da vista 3D.

1. Escolla a ferramenta, por exemplo {{ui:Viga}}.
2. En {{ui:Engadir pola cuadrícula}}, escolla {{ui:Desde a cuadrícula (letra)}}, {{ui:Desde a cuadrícula (número)}} e {{ui:Desde o nivel}}.
3. Escolla {{ui:Ata a cuadrícula (letra)}}, {{ui:Ata a cuadrícula (número)}} e {{ui:Ata o nivel}}.
4. Escolla {{ui:Engadir}}.

Para un pilar ou unha zapata o formulario ten un só punto: {{ui:Cuadrícula (letra)}}, {{ui:Cuadrícula (número)}} e {{ui:Nivel}}.

## Cambiar unha peza despois de colocala

1. Prema {{key:Esc}} (ou escolla {{ui:Seleccionar}}, {{key:V}}) e faga clic na peza.
2. No panel {{ui:Propiedades}}, cambie {{ui:Nome}}, {{ui:Perfil}}, {{ui:Material}}, {{ui:Posición}} ou {{ui:Rotación (°)}}.
3. Para movela, edite as x, y e z de {{ui:Inicio}} ou {{ui:Final}} baixo {{ui:Extremos (x, y, z mm)}}. Debaixo dos campos vese o nome da cuadrícula de cada extremo, ou as súas coordenadas cando está fóra da cuadrícula.

Cada cambio é un paso de desfacer. Debaixo dos campos vense a {{ui:Marca da peza}}, o {{ui:Conxunto}}, a {{ui:Lonxitude de corte}}, o {{ui:Peso}} (bruto: non se descontan buratos nin recortes) e de que catálogo procede o perfil.

As pezas aínda non se poden arrastrar nin facer matrices. Para facer outra peza igual, copie e pegue, ou duplíquea ({{key:Mod+D}}): ver [Copiar, pegar e duplicar](topic:copy-paste).

## Eliminar unha peza

Seleccione a e prema {{key:Delete}} ou {{key:Backspace}}, ou escolla {{ui:Eliminar}}. As conexións que teña tamén se eliminan. {{key:Mod+Z}} devolve todo.

## Cousas que hai que saber

- **Cara a onde mira un pilar.** Con {{ui:Rotación (°)}} 0, as alas do pilar miran ao longo de x, cara ás liñas numeradas veciñas da cuadrícula. Unha viga da cuadrícula 1 á 2 únese a unha ala; unha viga de A a B únese pola alma. As placas de testa só se constrúen nas alas, así que se as súas vigas van de A a B, dea a eses pilares unha rotación de 90.
- **As vigas dun nivel quedan por debaixo del** coa opción predeterminada {{ui:Cara superior do aceiro sobre a liña}}. Escolla {{ui:Centrado sobre a liña}} se os seus niveis son eixos das pezas.
- **Os pilares van de nivel a nivel.** Para un pilar que atravesa dous pisos, poña {{ui:Ata}} no nivel máis alto.
- **As vigas inclinadas** admítense (escolla extremos en niveis distintos), pero aínda non se constrúen placas de testa sobre elas.

Seguinte: [Conectar vigas a pilares con placas de testa](topic:end-plates).
