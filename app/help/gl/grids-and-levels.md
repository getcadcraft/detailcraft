---
title: Configurar cuadrículas e niveis
summary: Escriba as liñas da cuadrícula, as súas distancias e os niveis onde se colocan todas as barras.
keywords: cuadrícula, cuadrículas, eixos, liñas de cuadrícula, niveis, cotas, pisos, distancias, configuración
from: 9cad233c
---

Cada barra de DetailCraft colócase nunha intersección de cuadrícula, a un nivel. Configure primeiro as cuadrículas e os niveis; pode cambialos máis tarde.

## Como funcionan aquí as cuadrículas

- As **liñas numeradas** van nunha dirección, as **liñas con letras** na outra. Os nomes son só unha costume: unha etiqueta pode ser calquera texto de ata 8 caracteres (1, 2, 3 ou A1, A2, ou 10, 20).
- Escribe as etiquetas e as distancias entre elas, non coordenadas. A primeira liña de cada conxunto está en 0.
- As liñas numeradas son liñas de x constante; as liñas con letras son liñas de y constante. Así, unha viga desde a cuadrícula 1 até a 2 vai ao longo de x, e unha viga de A a B vai ao longo de y.
- Todos os valores están en milímetros.

Un modelo novo comeza con liñas numeradas 1 2 3 a 6000 6000, liñas con letras A B a 6000, e dous niveis.

## Configurar as cuadrículas

1. No panel {{ui:Modelo}} á esquerda, abra {{ui:Cuadrículas}} se está plegado.
2. En {{ui:Liñas numeradas}}, escriba as etiquetas separadas por espazos, por exemplo `1 2 3 4 5`.
3. No campo {{ui:Distancias}} debaixo, escriba unha distancia por cada intervalo, por exemplo `6000 6000 7500 6000`. Catro intervalos para cinco liñas.
4. Faga o mesmo en {{ui:Liñas con letras}} e na súa {{ui:Distancias}}, por exemplo `A B C` e `8000 8000`.
5. Escolla {{ui:Aplicar cuadrículas}}.

A barra de estado indica "Cuadrículas actualizadas." e a vista achégase á nova cuadrícula. As comas tamén funcionan como separadores.

Se algo non cadra, nada cambia e a barra de estado indica o motivo, por exemplo "Cuadrículas numeradas: indique unha distancia entre cada par de liñas (4)." Outras comprobacións: as distancias deben ser milímetros positivos, as etiquetas deben ser distintas, e pode haber como máximo 60 liñas en cada dirección.

:::note
As barras conservan as súas coordenadas cando se moven as cuadrículas. Se cambia unha distancia despois de colocar aceiro, o aceiro queda onde estaba e xa non está na cuadrícula. Cambie primeiro a cuadrícula, ou mova as barras editando as coordenadas dos seus extremos.
:::

## Configurar os niveis

1. Abra {{ui:Niveis}} no panel {{ui:Modelo}}.
2. Cada fila ten un nome de nivel e a súa cota en milímetros. Edítaos como queira.
3. Escolla {{ui:Engadir nivel}} para outra fila. Chámase "Nivel 3" (e así sucesivamente) e colócase 4000 mm por enriba do nivel máis alto; cambie ambos se o necesita.
4. Para retirar un nivel, escolla o botón × ao final da súa fila.
5. Escolla {{ui:Aplicar niveis}}.

Non cambia nada ata que escolla {{ui:Aplicar niveis}}. Os niveis ordénanse pola cota ao aplicalos. Cada nivel necesita un nome, dous niveis non poden compartir nome, e debe conservar polo menos un nivel.

Os niveis poden estar por debaixo de cero (un sótano en `-3500`) e non precisan estar espazados por igual.

## Como se usan os niveis

- Un piar colocado nun nivel sobe até o seguinte nivel, ou até o nivel que escolla en {{ui:Ata}}.
- As vigas e as placas colócanse entre dúas intersección no nivel no que fai clic.
- As zapatas colócanse coa súa cara superior no nivel no que fai clic.
- {{ui:Planta}} mira cara abaixo a un nivel de cada vez.
- A exportación IFC crea un piso do edificio por cada nivel.

## Desfacer

Os cambios de cuadrícula e de niveis son edicións como calquera outra: {{key:Mod+Z}} repón a cuadrícula anterior.

## Seguinte

[Colocar piares, vigas e contraventos](topic:place-members)
