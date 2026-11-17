---
title: Facer debuxos de taller
summary: Unha folla por marca de peza, feitas todas á vez: vista previa de calquera delas e descargue unha folla ou o conxunto completo como PDF en A4 a A1 ou ANSI B a D, con furos, recortes, cotas e bloque de título.
keywords: debuxo de taller, debuxos de taller, todas as pezas, lote, conxunto completo, debuxo dunha soa peza, debuxo de fabricación, pdf, debuxo de detalle, debuxo de peza, imprimir
from: d25fe035
---

DetailCraft fai unha folla por marca de peza, para cada viga, piar, riostra e placa do modelo, todas á vez: non precisa seleccionalas unha a unha. As pezas idénticas comparten marca, e por iso comparten folla. As follas fanse no momento a partir do modelo; non se gardan nin se editan.

## Facer o conxunto completo

1. Escolla {{ui:Debuxo de taller}} no grupo {{ui:Saída}}. Non hai que seleccionar nada. Con unha peza seleccionada, a xanela ábrese na folla desa peza. No panel {{ui:Propiedades}} o mesmo botón chámase {{ui:Debuxo de taller}} para barras e {{ui:Debuxo da placa}} para conexións.
2. Ábrese unha vista previa, co título da marca de peza, por exemplo "Debuxo de taller b1". A primeira lista xunto ao título contén cada marca de peza co seu perfil, lonxitude e cantidade: escolla unha para ver a súa folla. A segunda lista cambia o tamaño da folla; o conxunto completo refáese con el (ver [Debuxos de disposición xeral e de conxunto](topic:drawings#choose-the-sheet-size)).
3. Escolla {{ui:Descargar todo}} (o botón mostra o número de follas) para un PDF cunha páxina por marca de peza, `<name> Shop drawings.pdf`. Cada folla di "Folla 3 de 42" no seu bloque de título. Ou escolla {{ui:Descargar esta folla}} para a que está vendo, `<name> <mark>.pdf`.
4. Peche a vista previa co × ou con {{key:Esc}}.

Se {{ui:Debuxo de taller}} está en gris, o modelo aínda non ten pezas.

## Que hai na folla

Para un perfil en I:

- **Alzado**, mirando a alma: a peza cos seus recortes en entalladuras, os furos da alma como círculos e os furos das alas como liñas ocultas (trazos).
- **Planta da ala superior**, vista desde arriba, cando algunha ala ten furos. Os furos da ala inferior aparecen con trazos.
- **Sección** a través do perfil.
- **Cotas:** posicións dos furos encadeadas ao longo da peza máis a lonxitude total, alturas dos furos da alma, o entrepaso e os tamaños dos recortes.
- **Lista de furos:** cada grupo de furos, por exemplo "8 x Ø22 na ala superior".
- **Soldadura**, cando a peza ten placas soldadas.
- **Bloque de título:** marca da peza, marca de conxunto, perfil, material, lonxitude, cantidade, peso de cada unha e total, nome do modelo e data.

Para unha U, cantoneira ou perfil hueco a folla é igual, mirando a alma ou o lado: as paredes dun tubo son liñas ocultas (trazos), e a sección dá o grosor da parede.

Para unha placa: a cara da placa cos seus furos, e o seu bordo como sección.

## Escalas

A escala escóllese dunha lista (de 1:1 a 1:200) para que a peza caiba na folla. Unha peza longa e pouco profunda sairía demasiado fina para ler a unha soa escala, así que cando a profundidade resultaría menor de 30 mm no papel, a profundidade debúxase a unha escala maior que a lonxitude. O título da vista di isto, por exemplo "lonxitude 1:20, profundidade 1:5 (non a unha escala única; mandan as cotas)". Lea sempre os tamaños das cotas, non medindo a folla.

## Cousas que hai que saber

- A cantidade é o número de pezas con esa marca no modelo. As marcas poden renumerarse despois dun cambio; ver [Comprobar as marcas e a lista de materiais](topic:marks-and-bom).
- Cada folla é unha peza soa, sen símbolos de soldadura; os debuxos de conxunto (con símbolos de soldadura) e os debuxos de disposición xeral están en [Debuxos](topic:drawings). A folla non se pode editar nin anotar en DetailCraft. Para anotala, abra o PDF nunha aplicación de anotación de PDF, como MarkupCraft.
- O bloque de título di "DetailCraft lab build — millimeters", texto fixo do build que se mantén tal cal.
- O texto usa a fonte PDF estándar Helvetica. Os caracteres fóra do conxunto da Europa occidental imprímense como "?", e a barra de estado os conta.

## Imprimir

Abra o PDF descargado no seu visor de PDF e imprímao ao 100 % (sen "axustar á páxina") no papel do tamaño que escolleu, se quere que as escalas indicadas se cumpran. Nunha folla máis pequena, escálea e fíese das cotas.
