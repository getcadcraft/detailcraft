---
title: Comprobar elementos de formigón e crear cargas sísmicas
summary: Configure as armaduras de vigas e piares de formigón, comprébeos segundo ACI 318-19, cree forzas laterais equivalentes segundo ASCE 7-22 en forxados rixidos, e vexa a deriva entre pisos. Un apoio para que un enxeñeiro o comprobe.
keywords: formigón, formigón armado, ACI 318, ACI 318-19, armadura, viga, piar, cortante, cintas, sísmico, terremoto, forza lateral equivalente, ELF, ASCE 7-22, deriva, deriva entre pisos, forxados, diafragma rixido, peso do piso, aproveitamento, utilización, estrutural, enxeñeiro
from: 94d3001d
---

Os blocos {{ui:Elementos de formigón}} e {{ui:Cargas sísmicas}} da lapela {{ui:Análise}} comprobán vigas e piares de formigón armado, e crean as forzas laterais dun terremoto sobre os forxados dun marco. Ambos seguen a execución da lapela {{ui:Análise}} e gárdanse co modelo.

:::warning
Os resultados son **para que un enxeñeiro os comprobe**: un apoio ata que un o revise. As comprobacións de formigón usan forzas de primeiro orde, salvo que un piar nun marco non desprazable se deseña para o seu momento amplificado, sen amplificación por desprazamento, sen deseño a torsión, sen detallado sísmico (capítulo 18 do ACI) e sen detallado de cintas. As cargas sísmicas deixan fóra o factor de redundancia, o efecto sísmico vertical, a amplificación por torsión e os efectos P-delta. As cargas de vento aínda non se fan.
:::

## Debuxar os elementos

Debuxe os elementos de formigón como rectángulos: un perfil {{ui:Placa}} como `PL400x400` para un piar e `PL300x600` para unha viga dá a sección. Os piares e as vigas colócanse como calquera outro elemento.

## Configurar as seccións

O bloque {{ui:Elementos de formigón}} lista cada sección que usan os elementos. Prema {{ui:Configurar como formigón…}} nas que son de formigón. DetailCraft lee o ancho **b** (ao longo do eixo y propio do elemento) e o fondo **h** (ao longo de z) do perfil debuxado, e pide:

- o **recubrimento** ata o centro das barras, e as barras **superior**, **inferior** e **laterais** (cantas e de que diámetro) para unha viga, ou unha **gaiola do piar** (barras segundo b e segundo h, de que diámetro, cintas en espiral) para un piar;
- as **cintas**: ramas, diámetro e separación;
- como actúa o elemento: unha viga, un piar, ou decidido polas súas forzas (un elemento vertical, ou un que leve máis de 0,10 f′c Ag, é un piar).

Defina f′c, o límite elástico das barras fy e o das cintas fyt (só conta ata 420 MPa para o cortante), K e se o marco é desprazable ou non desprazable por encima deles. Unha sección configurada como formigón analízase como formigón: E = 4700 √f′c, 2400 kg/m³, e por defecto con **seccións fisuradas** (piares 0,70 Ig, vigas 0,35 Ig; ACI 318-19 Táboa 6.6.3.1.1(a)). Escolla {{ui:Seccións brutas}} para desactivalo.

## Crear combinacións e comprobar

Dé aos casos de carga a súa clase e logo {{ui:Crear combinacións}}: ACI 318-19 toma as combinacións de resistencia de ASCE 7 (§5.3.1). Prema {{ui:Comprobar o formigón}} e cada elemento recibe unha utilización, coloreada no modelo como as comprobacións do aceiro: flexión e armadura mínima (22.2, 9.6.1.2), deformación controlada por tracción (9.3.3.1), cortante coas cintas (22.5, 9.6.3), separación das cintas, e carga axial con momento para os piares (22.4, co método de Bresler para flexión en dúas direccións). Un elemento onde a sección debuxada difire do b × h que escribiu aparece como *comprobado en parte*, igual que un piar esbelto ou a torsión por riba do limiar: esas non se deseñan.

Os elementos por riba da súa capacidade listanse en {{ui:Problemas}}; acepte un cun motivo, ou corrixa a sección.

## Forxados e cargas sísmicas

Un forxado é un nivel onde o marco queda unido por unha lousa rixida (un **diafragma rixido**). No bloque {{ui:Cargas sísmicas}} prema {{ui:Buscar pisos}}: toma os niveis onde se xuntan dúas ou máis vigas. Despois dé a cada forxado o seu **peso sísmico**, escrito ou lido: {{ui:Tomar os pesos dos casos}} suma as cargas verticais dos casos que lle dea un factor (o caso permanente é 1; engada 0,25 nun caso de sobrecarga de almacenaxe ou neve nunha cuberta plana, como pide ASCE 7-22 12.7.2). A carga vertical de cada nodo vai ao forxado no seu nivel ou por enriba, así que un piar entre dous forxados dá a metade do seu peso a cada un.

Dé os valores de deseño: SDS, SD1, S1, R, Ie, Cd, TL, o sistema estrutural (para o período) e a categoría de risco. {{ui:Crear casos sísmicos}} calcula entón o período a partir da altura do edificio (12.8.2.1), o cortante basal V = Cs W (12.8.1), repártao polos forxados (12.8.3) e escribe catro casos de carga, en X e en Y, coa torsión accidental do 5 % en cada sentido (12.8.4.2). As forzas por piso e a comprobación da deriva entre pisos (12.8.6, Táboa 12.12-1, a deriva Cd δxe / Ie contra 0,020 hsx) aparecen despois dunha execución; unha deriva por riba do seu límite tamén é un problema. Prema de novo {{ui:Crear combinacións}} para incluír os casos sísmicos nas combinacións.

**O período da análise.** O período aproximado Ta sae da altura do edificio. Cando executou a análise cos casos sísmicos, {{ui:Tomar o período da análise}} lee canto se desprazou cada forxado baixo as forzas e calcula o período polo método de Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), unha vez para X e outra para Y; os casos sísmicos fanse de novo con el. O período usado non é nunca máis que Cu·Ta (ASCE 7-22 12.8.2), así que un modelo flexible non pode baixar o cortante basal por debaixo diso. Tome de novo o período despois da segunda execución: estabilízase en un ou dous pasos. Desmarque {{ui:Período da análise}} para volver a Ta.

**Piares esbeltos (ACI 318-19 6.6.4.5).** Para un marco que se chama non desprazable, un piar cuxo k·ℓu/r está por riba de 34 + 12·M1/M2 (como máximo 40) deséñase para o momento amplificado Mc = δns · M2: δns = Cm / (1 − Pu / 0,75 Pc), Pc = π² (EI)eff / (k ℓu)² con (EI)eff = 0,4 Ec Ig / (1 + βdns), e o momento mínimo Pu (15 + 0,03 h). βdns (0,6 para empezar) é a parte da carga axial mayorada que é sostida: escriba a súa. Un piar cuxo Pu chega a 0,75 Pc falla coa súa propia comprobación. O informe lista os números de cada piar esbelto. Nun marco **desprazable** un piar esbelto segue "comprobado en parte": a súa amplificación precisa unha análise de segundo orde, que non se fai.

**Lousas.** Cando o modelo ten placas, un bloque {{ui:Armadura da laxe}} toma os momentos das placas de cada combinación de resistencia e, pola regra de Wood–Armer (flexión e torsión xuntas), calcula o aceiro que cada capa precisa por metro: inferior e superior, en x e en y. Vostede dá o grosor, o recubrimento e as barras; a táboa mostra o necesario contra o dado, e o cortante unidireccional contra φVc, e unha capa que non chega é un problema coa súa cláusula. Non se cobren a frecha, o punzonamento nos piares nin as barras de borde nos ocos, e un momento sobre un apoio converxe lentamente con placas de catro nodos.

Cada forxado que enumere convértese nun diafragma rixido na análise: as súas vigas non levan carga axial polo movemento do forxado. A exportación CraftScript non se fai para un modelo con forxados.

## O informe

{{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} engaden as táboas de formigón (supostos, utilización por elemento, cada cláusula), os parámetros sísmicos e o cortante basal, as forzas nos forxados e a táboa de deriva.
