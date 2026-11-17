---
title: O cubo de vistas
summary: Prema unha cara, unha aresta ou unha esquina do cubo na esquina da vista para mirar desde ese lado, arrástreo para orbitar, xire o anel da brúxula, pase a unha vista de cara e volva á vista inicial.
keywords: cubo de vistas, viewcube, cubo, brúxula, norte, vista inicial, vistas estándar, superior, fronte, dereita, isométrica, esquina, aresta, orbitar, xirar vista, icona de eixos, indicador de esquina, navegación
from: 3666ea8a
---

O cubo de vistas está na esquina superior dereita da vista 3D, debaixo da barra de vistas (só en {{ui:3D}}: {{ui:Planta}} e {{ui:Alzado}} xa miran directamente ao modelo). Xira coa vista, así que sempre indica cara a onde mira: {{ui:Superior}} é arriba, {{ui:Fronte}} mira ao sur (o lado desde onde se ven as cuadrículas con letras en {{ui:Alzado}}), {{ui:Dereita}} mira ao leste, ao longo das cuadrículas numeradas. Permanece transparente ata que apunte a el.

## Mirar desde un lado, unha aresta ou unha esquina

1. Aponte ao cubo. A parte baixo o punteiro ilumínase: o centro dunha cara, unha aresta (ilumínase nas dúas caras que comparte) ou unha esquina (en todas as tres caras).
2. Prema nela. A vista xira para mirar desde aí, mantendo o mesmo centro e zoom.

Hai 26 posicións onde premer: 6 caras ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Fronte}}, {{ui:Atrás}}, {{ui:Esquerda}}, {{ui:Dereita}}), 12 arestas e 8 esquinas. Unha esquina dá a clásica vista de tres cuartos; unha aresta queda a medio camiño entre dúas caras.

Unha vista de cara do cubo é unha vista 3D, non {{ui:Planta}} nin {{ui:Alzado}}: non se corta nada e o modelo aínda se pode xirar.

## Orbitar arrastrando o cubo

Arrastre o cubo para xirar a vista, igual que orbitar na propia vista. Un arrastre nunca se toma como un clic, así que pode agarrar o cubo en calquera punto.

## O anel da brúxula

O anel baixo o cubo leva N, L, S e O.

- **Arrastre o anel** para xirar o modelo arredor do eixe vertical, como se estivese sobre unha plataforma xiratoria. O anel segue o punteiro.
- **Prema unha letra** para mirar desde ese lado, mantendo a inclinación coa que mira cara abaixo. Nunha vista desde arriba, a letra que prema vai á parte inferior da pantalla.

## Vistas de cara: frechas

Cando mira directamente a unha cara, aparecen pequenas frechas arredor do cubo:

- Os catro **triángulos** levan á fronte a cara dese lado: o triángulo enriba do cubo mostra a cara que estaba arriba, e así sucesivamente.
- As dúas **frechas curvas** arriba á dereita xiran a imaxe un cuarto de volta en sentido horario ou antihorario, sen cambiar a cara na que mira. Úsaas para xirar unha planta de xeito que unha parede longa cruce a pantalla.

## Inicio

O botón da casa na esquina superior esquerda do cubo volve á vista inicial de tres cuartos e encaixa todo o modelo, igual que o botón de axustar. {{key:Home}} fai o mesmo mentres o cubo ten o foco do teclado.

## Co teclado

{{key:Tab}} para chegar ao cubo, e logo:

| Tecla | Función |
|---|---|
| {{key:left}} / {{key:right}} | escolle un lado, aresta ou esquina ao redor do cubo, en pasos de oitavo de volta (os lectores de pantalla din cal é) |
| {{key:up}} / {{key:down}} | escolle un máis alto ou máis baixo, ata {{ui:Superior}} ou ata {{ui:Inferior}} |
| {{key:Enter}} ou {{key:Space}} | mira desde o escollido |
| {{key:Shift+left}} / {{key:Shift+right}} | xira a vista un cuarto de volta arredor do eixe vertical |
| {{key:Home}} | a vista inicial |
| {{key:Esc}} | sae do cubo |

As teclas premidas no cubo quédanse no cubo: non activan ferramentas de DetailCraft.

## Icona de eixos ou nada

Abra {{ui:Configuración}} ({{key:Mod+,}}), a lapela {{ui:DetailCraft}}, e axuste **Indicador de esquina** a {{ui:Cubo de vistas}} (o inicial), {{ui:Icona de eixos}} (unha pequena marca X, Y, Z na esquina inferior esquerda: X vermella, Y verde, Z azul) ou {{ui:Ningún}}. Este navegador lembra a elección. Ver [Configuración de DetailCraft](topic:settings#corner-indicator).
