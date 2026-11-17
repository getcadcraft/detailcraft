---
title: Debuxos de disposición xeral e de conxunto
summary: Cree plantas, alzados e un debuxo de conxunto por marca de conxunto a partir do modelo, en follas A4 a A1 ou ANSI B a D, emítaos con letras de revisión, e descárguos como PDF, DWG ou DXF.
keywords: liñas ocultas, eliminación de liñas ocultas, trazos, nube de revisión, nubes, triángulo de revisión, planta de parafusos de anclaxe, varillas de anclaxe, cadro de varillas, cadro de placas base, trazado, emitir, revisión, rev, táboa de revisións, reemisión, rexistro de emisións, transmittal, dwg, dxf, ficheiro cad, exportar debuxos, debuxos, disposición xeral, ga, planta, alzado, debuxo de conxunto, tamaño de folla, tamaño de papel, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, imprimir, escala, cartela do título, referencia do modelo
from: 709f8604
---

Escolla {{ui:Drawings}} no grupo {{ui:Output}}. DetailCraft fai o conxunto completo a partir do modelo tal como está agora. Non se garda nada: cambie o modelo, abra de novo {{ui:Drawings}}, e o conxunto refaise.

## Que contén o conxunto

- **Plantas**, unha por nivel que teña algo, vistas desde arriba.
- **Alzados**, un por cada liña de cuadrícula con barras a menos de 1 m.
- **A planta de parafusos de anclaxe**, cando o modelo ten placas base: cada placa base vista desde arriba co seu piar e as súas varillas de anclaxe, as cuadrículas coas súas cotas, un detalle tipo de cada patrón de varillas (BP1, BP2 …) coa separación das varillas e as distancias aos bordos, e dous cadros: as varillas de anclaxe por marca (R1, R2 …: cantidade, diámetro, lonxitude, saínte por riba da placa, embebido, calidade) e as placas base por cuadrícula (piar, patrón, placa, varillas, cara superior da placa). Un piar fóra da cuadrícula sitúase polas súas coordenadas.
- **Debuxos de conxunto**, un por marca de conxunto: vistas de fronte, superior e de extremo, cotas encadeadas aos buratos e aos bordos das placas, a lista de pezas, os parafusos e varillas soltos, e notas de soldadura e de buratos. Cada placa soldada ten un símbolo de soldadura de filete na vista de fronte (AWS A2.4): a frecha apunta á unión, o triángulo debaixo da liña de referencia significa o lado da frecha, a cifra á súa esquerda é o tamaño da soldadura en mm, e un círculo onde a frecha encontra a liña significa en todo o contorno.

**Liñas ocultas.** As plantas e os alzados omiten as liñas dunha peza onde unha peza situada totalmente diante dela a cubre (unha viga vista de canto detrás dun piar). Os debuxos de conxunto debuxan unha placa en trazos onde a peza principal a cubre: detrás da alma na vista de fronte (vista desde o lado −u da peza), debaixo da aba superior na vista superior. As pezas que están á mesma profundidade, ou que se solapan en profundidade, debúxanse completas.

Cada folla ten unha cartela do título co número de debuxo, a escala, o nome do modelo, a data, o número da folla co tamaño da folla, e a referencia do modelo: un código feito a partir do modelo gardado, para que unha impresión poida relacionarse co modelo do que procede.

## Escoller o tamaño da folla

Escolla o tamaño na lista da parte superior da xanela de {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) ou {{ui:ANSI D}} (22 × 34 in). Todas as follas están en horizontal. O conxunto refácese no novo tamaño de inmediato, e o mesmo tamaño úsase para os debuxos de taller. Tamén está en [configuración de DetailCraft](topic:settings#drawings), e este navegador recorda o tamaño.

- Unha folla máis grande debuxa a unha escala maior. As escalas son sempre normalizadas (1:10, 1:20, 1:25, 1:50, 1:100 e así).
- O texto mantén o mesmo tamaño en todas as follas, para que siga sendo lexible ao imprimir.
- Nunha folla pequena, un conxunto longo e fino pode ter unha escala maior na súa profundidade que a longo. O título da vista indica entón as dúas escalas, e mandan as cotas.

## Emitir debuxos e revisións

A liña enriba da vista previa indica en que estado está a folla mostrada: **Sen emitir aínda**, **Rev B, emitida … ; sen cambios desde entón**, ou, en vermello, **Cambiada desde a rev B: precisa reemisión**. A lista de follas marca as follas emitidas coa súa revisión e as que precisan reemisión.

- Escriba para que é a emisión (empeza como «Emitido para fabricación») e escolla {{ui:Issue this sheet}}, ou {{ui:Issue changed sheets}} para todas as follas novas ou cambiadas desde a última emisión.
- A primeira emisión dunha folla é a revisión A, despois B, C e así (I e O sáltanse).
- A cartela do título mostra o número de debuxo coa súa revisión («A-B1  rev B»), e xunto a ela unha táboa de revisións lista as últimas emisións: revisión, data e descrición. Nunha folla pequena mostra as que caben.
- Unha folla «cambia» cando cambia o que se debuxa nela: unha barra movida, un burato novo, unha marca renumerada. A data, o número de follas e a propia táboa de revisións non contan. Cambiar o tamaño da folla cambia todas as follas.
- O rexistro de emisións gárdase no ficheiro do modelo, e emitir é un paso de desfacer. O [ficheiro KISS](topic:kiss-export) leva a última revisión de cada debuxo.

### Nubes de revisión

Desde a segunda emisión dunha folla en diante, cada peza ou sapata que cambiou debúxase dentro dunha nube de revisión cun triángulo de revisión que leva a letra.

- Mentres unha folla cambiou desde a súa última emisión, as nubes mostran o que cambiou desde entón, coa revisión seguinte no triángulo (rev B emitida e cambiada: os triángulos din C).
- Unha vez emitida, as nubes permanecen na folla desa revisión, como nun conxunto impreso, ata que a folla cambie de novo.
- Cada folla só marca con nube os cambios que mostra. As plantas e os alzados non debuxan buratos nin recortes, así que marcan unha barra que se moveu, se xirou ou se redimensionou, ou cuxa marca cambiou. Os debuxos de conxunto e a planta de parafusos de anclaxe marcan tamén os buratos e recortes novos ou movidos.
- Unha marca renumerada conta: cando un cambio fai que unha viga sexa un novo conxunto, as vigas cuxa marca subiu (B1 a B2) márcanse con nube nas plantas e alzados.
- Unha peza eliminada non deixa nada que marcar.
- As follas emitidas antes de que chegasen as nubes de revisión (DetailCraft 0.4) comezan a marcalas desde a súa seguinte emisión.
- As nubes aparecen nas descargas PDF, DXF e DWG, e nunca contan como cambio en si.

## Descargar

Escolla o formato na lista xunto aos botóns, e despois {{ui:This sheet}} para a folla mostrada ou {{ui:All sheets}} para todo o conxunto.

- **PDF**: para imprimir ou enviar. {{ui:All sheets}} fai un PDF, unha páxina por folla, cada páxina do tamaño escollido.
- **DWG**, nos formatos 2018, 2013, 2010, 2007, 2004 ou 2000: para abrir as follas nun programa CAD. Escolla un formato máis antigo para un programa máis antigo.
- **DXF (R12)**: a versión que case todos os programas CAD abren.

Unha folla DWG ou DXF debúxase a tamaño natural: unha unidade de debuxo é un milímetro no papel, así que imprímese a 1:1 e cada vista conserva a escala que indica o seu título. Cada pluma é a súa propia capa: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID e así, con o seu grosor de liña (DWG) e os seus trazos. As palabras son texto co estilo de texto de DetailCraft (Arial). As cotas son as liñas e cifras que vostede ve, non obxectos de cota. {{ui:All sheets}} pon os ficheiros DWG ou DXF nun só zip, un ficheiro por folla.

:::note
DXF R12 non ten grosores de liña nin recheos: as capas conservan os seus nomes, así que defina as plumas por capa ao trazar, e as formas recheas quedan fóra (a barra de estado indica cantas).
:::

Imprima ao 100 % (sen «axustar á páxina») en papel do mesmo tamaño se quere que se manteñan as escalas indicadas.
