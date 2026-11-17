---
title: Comprobacións de constructibilidade
summary: Problemas para o que un detallador detecta a ollo: un parafuso que unha chave non alcanza, parafusos demasiado xuntos para o vaso, soldaduras de ángulo fóra dos seus límites de tamaño, soldaduras que un soplete non alcanza, e tubos que retiñen auga.
keywords: constructibilidade, chave, vaso, acceso aos parafusos, apertado, tamaño de soldadura, soldadura de ángulo, soldadura mínima, soldadura máxima, auga, orificio de ventilación, orificio de drenaxe, galvanizado, perfil ôco, problemas
from: 72315151
---

DetailCraft busca catro tipos de problemas que ningunha comprobación de resistencia atopa, e lístaos no panel {{ui:Problemas}}. Son avisos e notas para mirar, non erros: o modelo segue construíndose.

## Un parafuso que unha chave non alcanza

Para cada parafuso, DetailCraft pon un vaso sobre a cabeza e sobre a porca. O vaso é un cilindro tan ancho como a porca medida entre esquinas máis unha parede de 4 mm, de 60 mm de longo. Se unha alma de viga, unha aba, unha placa ou unha riostra está dentro dese cilindro, o problema nomea a conexión, cantos parafusos, que pezas estorban e a que distancia do parafuso están.

O vaso é un vaso de impacto típico. Unha chave de boca necesita menos espazo e unha ferramenta máis grande necesita máis. Pídalle ao seu asistente conectado que execute `constructability_check` con outro `socketLength` para ver como cambia a resposta.

## Parafusos demasiado xuntos para o vaso

Un vaso sobre un parafuso non pode tocar a cabeza do seguinte. Os parafusos dunha conexión que están máis preto que a largura do vaso máis a cabeza do veciño listanse coa separación atopada e a separación necesaria.

## Tamaños de soldadura de ángulo

AISC 360-16 Táboa J2.4 fixa a soldadura de ángulo máis pequena segundo o grosor da peza máis fina (3 mm ata 6,35 mm de grosor, 5 mm ata 12,7, 6 mm ata 19,05, 8 mm por riba), e J2.2b a máis grande ao longo dun bordo de material: non máis grande que o material cando é máis fino que 6,35 mm, e noutro caso 1,6 mm menos. As conexións co mesmo tamaño sobre o mesmo grosor listanse como un só problema.

O grosor usado é a peza máis fina que nomea a soldadura, así que unha soldadura de 8 mm en todo o contorno dunha viga cunha alma de 6,35 mm si se lista.

## Auga e ventilacións

- Un **extremo superior aberto** dunha sección ôca que está en vertical ou inclinado máis de 10° deixa entrar a choiva.
- Unha sección ôca **pechada polos dous extremos** precisa un orificio de ventilación e outro de drenaxe; o galvanizado por inmersión en quente e a presión do aire quentado piden ambos.

## Pode o soldador chegar?

Unha soldadura de ángulo faise con o soplete a medio camiño entre as dúas caras que une. Para cada soldadura de ángulo en todo o contorno (unha placa de extremo, unha placa base, unha placa de inglete) a comprobación toma o contorno da sección do membro na placa e, cada 20 mm, percorre unha traxectoria do soplete a 45° desde onde a súa boquilla (radio de 10 mm para empezar) libera primeiro ambas caras, durante outros 30 mm. Se a traxectoria chega á aba propia da viga ou a outra peza, esa parte da soldadura listase coa peza e a distancia. Estes números son típicos, non os dunha norma: pregunte ao seu fabricante polo proceso e a boquilla. As soldaduras ao longo de dous bordos (unha lingüeta de cizalla) non se localizan e non se comproban.
