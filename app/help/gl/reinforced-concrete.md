---
title: Detallar vigas, piares, laxes e paredes de formigón armado
summary: Engada vigas, piares, laxes e paredes de formigón por cuadrícula, dea-lles barras, estribos e cercos, comprobe os solapes e as ancoraxes segundo a ACI 318-19 ou a EN 1992-1-1, e faga debuxos de taller e follas de dobrado de barras.
keywords: formigón armado, armadura, viga, piar, laxe, parede, estribos, cercos, ganchos, solapes, solape, ancoraxe, lonxitude de desenvolvemento, ld, ldh, lbd, recubrimento, espazamento, barras de reforzo, aberturas, mallas, marcas de barra, cadro de dobrado, follas de dobrado de barras, bbs, debuxo de taller, ACI 318, EN 1992, Eurocódigo 2, IfcReinforcingBar, importación IFC
from: 3835b7ec
---

A lapela {{ui:Formigón}} debaixo da vista detalla as barras das vigas, piares, laxes e paredes de formigón. Vostede dá os tamaños e as barras; DetailCraft coloca cada barra, numéraa, comproba os solapes, a ancoraxe, o recubrimento e o espazamento segundo o artigo do que proceden, e debúxaa.

:::warning
DetailCraft detalla as barras que lle dea. Non as deseña. Cada resultado é para que un enxeñeiro o comprobe.
:::

## Abrir a lapela Formigón

Escolla a lapela {{ui:Formigón}} debaixo da vista. Nunha disposición de cinta, {{ui:Formigón}} está na lapela {{ui:Modelado}} xunto a {{ui:Zapata}}. Co estilo de debuxo de liña de comandos, escriba {{cmd:CONCRETE}}.

## Engadir un elemento pola cuadrícula

Os elementos de formigón colócanse nas liñas da cuadrícula e nos niveis do modelo, así que configúreos antes (panel esquerdo).

1. En {{ui:Engadir pola cuadrícula}}, escolla o {{ui:Elemento}}: {{ui:Viga de formigón}}, {{ui:Piar de formigón}}, {{ui:Laxe}} ou {{ui:Parede}}.
2. Seleccione as liñas da cuadrícula e os niveis:
   - unha viga vai dunha intersección da cuadrícula a outra, coa súa cara superior no nivel;
   - un piar se coloca nunha intersección, dun nivel a outro;
   - unha laxe ocupa o rectángulo entre dúas liñas numeradas e dúas liñas con letra, coa súa cara superior no nivel;
   - unha parede segue a súa liña central dunha intersección a outra, dun nivel a outro.
3. Dea o tamaño e escolla {{ui:Engadir}}. O elemento queda seleccionado e os seus campos ábrense no panel {{ui:Propiedades}}.

Cada elemento comeza con barras que son valores iniciais, non un deseño: cámbieas polas que indique o enxeñeiro.

## Cambiar as barras

Seleccione o elemento (na vista ou polo seu nome na lapela {{ui:Formigón}}). O panel {{ui:Propiedades}} amosa:

| Elemento | Que se define |
|---|---|
| Viga | Largura, altura, recubrimento libre; barras superiores e inferiores (tamaño, número, gancho recto ou de 90° nos extremos); barras laterais; estribos (tamaño, ganchos de 135° ou 90°, distancia do primeiro á cara do apoio, lonxitude e espazamento da zona dos extremos, espazamento entre eles); lonxitudes de apoio; lonxitudes de solape |
| Piar | Largura, fondo transversal, rotación, recubrimento; barras lonxitudinais en cada cara; cercos como os estribos; que fan as barras na parte superior (solape co piar de enriba, gancho no piso ou parada) |
| Laxe | Espesor, tamaño, cara superior, recubrimentos; malla inferior e malla superior en cada sentido (tamaño e espazamento); barras en U ao redor dos bordos; {{ui:Barras de reforzo}}; aberturas |
| Parede | Espesor, recubrimento, unha ou dúas capas, barras horizontais e verticais, barras en U nos extremos, barras verticais con solape por enriba ou non, {{ui:Barras de reforzo}}, aberturas |

Cada cambio é un único paso para desfacer. Un cambio que non se pode construír rexéitase e a barra de estado indica o motivo, por exemplo «A abertura non cabe dentro do elemento co seu recubrimento».

Os estribos e os cercos son pechados, cos dous ganchos nunha esquina. As barras dunha viga entran nun piar de formigón nos seus extremos ata a cara distante do piar menos o recubrimento; onde non hai piar, dea a {{ui:Lonxitude de apoio no inicio (mm)}} e no extremo.

## Solapes e ancoraxes

As barras máis longas que a {{ui:Lonxitude da barra comercial (mm)}} (12000 de inicio) córtanse en trozos de igual lonxitude, con solape. A táboa {{ui:Solapes e ancoraxes}} recolle cada solape e cada ancoraxe: o que se precisa, co artigo e os seus termos, e o que ten o detalle.

- Unha lonxitude de solape de 0 significa «segundo sexa necesario»: a lonxitude que dá a norma, redondeada por enriba a 25 mm.
- Escriba unha lonxitude de solape propia para usala no seu lugar. Se é máis curta da necesaria, é un problema (vexa abaixo) e vai marcada con * na táboa.
- A ancoraxe mídese desde a cara do apoio ata o extremo da barra dentro do apoio. Unha viga sen apoio coñecido indícao en vez de comprobalo.
- Un piar apoiado nunha zapata solapa coas barras de arranque da zapata, e sobre outro piar coas barras dese piar: o seu solape tamén se comproba.

**ACI 318-19** (SI): barras rectas en tracción 25.4.2.3 (a táboa, con ψt, ψe, ψg, λ), ganchos estándar 25.4.3.1 (ψr 1.6 e ψo 1.25 tomados salvo que se coñezan outros), barras en compresión 25.4.9.2, solapes en tracción 25.5.2.1 (clase B, ou clase A na configuración), solapes en compresión 25.5.5.1.

**EN 1992-1-1**: ancoraxe 8.4.4 con fbd de 8.4.2 (adherencia boa ou deficiente), solapes 8.7.3 con α6 para cada barra solapada nunha mesma sección. γc, γs e αct empezan nos valores recomendados; estabelezaos segundo o seu anexo nacional.

## As comprobacións

Cada comprobación que falle aparece no panel Problemas da interface (orixe {{ui:Comprobacións de armado}}) e na lista {{ui:Comprobacións}} do elemento:

| Comprobación | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Recubrimento | Táboa 20.5.1.3.1, segundo a exposición | Mínimo de aderencia, Táboa 4.2 (o recubrimento de durabilidade debe darlo vostede) |
| Espazamento libre entre barras | 25.2.1 (vigas, laxes, paredes), 25.2.3 (piares) | 8.2 (2) |
| Espazamento dos estribos | 9.7.6.2.2 | 9.2.2 (6) |
| Armadura mínima da viga | 9.6.1.2 | 9.2.1.1 (1) |
| Barras laterais de viga con máis de 900 mm de altura | 9.7.2.3 | non se comproba |
| Taxa de armadura do piar, número de barras | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Cercos: espazamento, tamaño, ganchos transversais | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Espazamento na laxe, armadura mínima | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Espazamento na parede, armadura mínima, dúas capas | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Solapes, ancoraxe | como antes | como antes |

Non se coñece o tamaño do árido, así que o espazamento libre compróbase sen el.

## Aberturas, barras de reforzo e barras de bordo

Escolla {{ui:Engadir unha abertura}} debaixo dunha laxe ou parede seleccionada e defina onde está e o seu tamaño. As barras que cruza paran a recubrimento do seu bordo. As {{ui:Barras de reforzo}} engádense a cada lado, na mesma capa, con metade da área das barras cortadas, unha lonxitude de ancoraxe máis alá da abertura. Esa é a regra inicial de DetailCraft, non unha cláusula da norma: cambie as {{ui:Barras de reforzo}} polas que indique o enxeñeiro. Non se engaden barras de esquina.

As barras en U ao redor dos bordos libres dunha laxe e nos extremos dunha parede teñen pernas dunha lonxitude de solape.

## Marcas de barra e cadro de dobrado

As barras idénticas comparten unha marca: as zapatas conservan as marcas F (5F1), as vigas levan B, os piares C, as laxes S e as paredes W (7B1, 8C1, 4S2). A lapela {{ui:Cadro de dobrado}} e o seu CSV listan agora cada barra da estrutura, primeiro as zapatas. {{ui:Saída}} › {{ui:Máis}} › {{ui:Dobrado}} descárgao.

## Debuxos de taller

Escolla {{ui:Saída}} › {{ui:Máis}} › {{ui:Planos de armadura}}, {{ui:Planos de armadura}} na lapela {{ui:Formigón}}, ou {{ui:Debuxo de taller}} xunto a un elemento. Cada elemento recibe unha folla cun alzado (unha planta, no caso dunha laxe) que amosa todas as barras e a súa marca, as zonas de estribos ou cercos e os solapes acotados, e unha sección no centro; despois, as follas de dobrado de barras listan cada marca cun esbozo da súa forma, as súas dimensións, a cantidade, a lonxitude de corte e o peso.

As follas fanse a partir do modelo cada vez, e de novo despois de cada cambio mentres a xanela estea aberta: o cadro do título leva a referencia do modelo. Garde {{ui:Esta folla en PDF}} ou {{ui:Todas as follas en PDF}}.

## Barras dun ficheiro IFC

{{ui:Ficheiro}} › {{ui:Importar IFC}} agora le IfcReinforcingBar: o disco barrido ao longo da súa liña central volve como pernas rectas e dobrados, co seu diámetro, a súa marca e o elemento que a contén. As barras consérvanse tal como se leron (non se converten en regras de viga ou de laxe), amósanse na vista, listanse no {{ui:Cadro de dobrado}} e vólvense escribir coa exportación IFC. O informe de importación indica cantas barras se leron, de que tamaños, en cantos elementos, e que se deixou fóra e por que.

Unha viga, piar, laxe ou parede dese ficheiro que contén barras ou cuxo material é formigón non se toma por aceiro; o informe así o indica. A exportación IFC propia de DetailCraft leva a definición de cada elemento de formigón, así que volve como ese mesmo elemento e as súas barras créanse de novo a partir dela.

:::note
Ler os ficheiros propios dun programa de deseño estrutural (non IFC) non está implementado: exporte IFC desde ese programa.
:::

## A exportación IFC

As vigas, piares, laxes (con aberturas) e paredes de formigón sáen como IfcBeam, IfcColumn, IfcSlab e IfcWall, cada un coas súas barras como IfcReinforcingBar (barras principais, ligaduras para estribos e cercos, barras de bordo) agregadas a el, cada barra como un disco barrido ao longo da súa liña central con arcos reais nos dobrados, a súa marca e a súa lonxitude de corte.
