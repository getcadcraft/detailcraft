---
title: Comprobar as soldaduras onde se unen as barras
summary: Despois da comprobación de deseño, probe as soldaduras de filete e a tope en todo o contorno de cada barra onde se une a outra barra ou a un apoio, segundo AISC 360-16 Capítulo J ou EN 1993-1-8, e vexa que grupo de soldadura é o máis usado e baixo que combinación. Unha axuda ata que un enxeñeiro a revise.
keywords: soldadura, soldaduras, comprobación de soldadura, soldadura de filete, soldadura a tope, penetración completa, AISC 360, EN 1993-1-8, grupo de soldadura, aproveitamento, utilización, capacidade, unión, conexión, estrutural, enxeñeiro
from: e8eebbe6
---

O bloque {{ui:Weld checks}} da pestana {{ui:Analysis}}, baixo {{ui:Design checks}}, toma os esforzos do último pórtico resolto e as combinacións de resistencia que fixo, e proba a soldadura en todo o contorno de cada barra en cada nodo: onde unha barra se une a outra barra ou se apoia nun apoio.

:::warning
É unha **axuda ata que un enxeñeiro a revise**. Comproba unha soldadura debuxada en todo o contorno da sección, como un só grupo, a partir dos propios esforzos nos extremos do pórtico. Non le o tamaño nin a lonxitude das soldaduras que debuxou nos debuxos de taller, e non comproba parafusos, placas, aplastamento, cortante de bloque nin a acción de palanca. Os seus resultados non son un selo.
:::

## Executala

1. Resolva o pórtico na pestana {{ui:Analysis}} e escolla unha {{ui:Design code}} en {{ui:Design checks}}, e despois prema {{ui:Make combinations}} (a comprobación de soldadura necesita as mesmas combinacións de resistencia).
2. En {{ui:Weld checks}}, estableza o {{ui:Fillet leg (mm, 0 = the wall, at most 8)}}. 0 significa que o cateto segue o muro máis fino da sección, ata 8 mm. Baixo a norma AISC, {{ui:Weld metal strength F_EXX (MPa)}} é a resistencia do metal de soldadura (482,6 MPa é un electrodo E70). Baixo EN 1993, a calidade do aceiro dá a resistencia do metal de soldadura e o factor de correlación.
3. Prema {{ui:Check welds}}.

Cada liña da táboa é un grupo de soldadura (un extremo de unión dunha barra). Os números: o **aproveitamento** da súa comprobación rectora, o estado (pasa ou falla), e que comprobación e cláusula rixeron baixo que combinación. Un grupo que a comprobación non pode xulgar di por que (sen calidade de aceiro, sen factor de correlación para esa calidade na Táboa 4.1 de EN 1993-1-8, sen soldadura nesa sección) en lugar de mostrar un número.

Cambiar o cateto ou o metal de soldadura, ou editar o modelo, borra a táboa, porque era para os valores antigos. Prema {{ui:Check welds}} de novo.

## Que se comproba

- **ASCE 7 + AISC 360:** metal de soldadura de filete (o ángulo da carga respecto da soldadura conta, J2.4), rotura por cortante do metal base (J4.2) e soldaduras a tope de penetración completa (Táboa J2.5).
- **EN 1990 + EN 1993:** soldaduras de filete polo método simplificado de EN 1993-1-8 4.5.3.3 e soldaduras a tope desde 4.7.1.
- Avisos de detallado fronte ao cateto mínimo e máximo e á lonxitude mínima, co valor co que se compararon.

O grupo de soldadura trátase como unha sección lineal e cárgase polo método vectorial elástico: cada parte da soldadura toma o esforzo axial da barra, os dous cortantes, a torsión e os dous momentos flectores, sumados como vectores.

## Que non se comproba

Non están feitas as soldaduras de penetración parcial, os filetes oblicuos, as soldaduras de tapón e de ranura, as soldaduras intermitentes, o método do centro instantáneo, o método direccional de EN, a fatiga nin o cortante de bloque do metal base. Algunhas constantes das normas escribíronse a partir das propias normas e aínda non se compararon cunha copia impresa; o informe indica de onde vén cada número ({{ui:Report (PDF)}} engade as táboas de soldadura unha vez comprobado). Ver [Comprobar barras de aceiro](topic:design-checks) e [Non está feito aínda](topic:not-built-yet).
