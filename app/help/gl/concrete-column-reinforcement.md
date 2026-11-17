---
title: Armar un piar de formigón rectangular
summary: Un exemplo resolto de detallado dun piar rectangular de formigón en DetailCraft: colocalo, dar barras lonxitudinais e cintas, ler as comprobacións, o solape por enriba e as marcas das barras, e debuxar a súa folla de taller.
keywords: piar de formigón, piar rectangular, armadura de piar, barras lonxitudinais, barras verticais, cintas, estribos, ataduras transversais, solape, empalme, barras de espera, porcentaxe de armadura, 1 por cento, 8 por cento, separación das cintas, ACI 318-19 25.7.2, EN 1992-1-1 9.5, debuxo de taller, marcas das barras, 8C1, 3C2
from: aee2a3ca
---

Este tema leva un piar cadrado desde o principio ata un detalle comprobado, debuxado e programado. As regras xerais para vigas, lousas e muros están en [Detallar formigón armado](topic:reinforced-concrete); esta é a parte do piar, con números que pode reproducir.

:::warning
DetailCraft detalla as barras que lle dea. Non as deseña. As barras de abaixo son valores iniciais para o exemplo, non unha recomendación: o enxeñeiro responsable escolle o tamaño, o número e a separación.
:::

## Que é un piar aquí

Un piar rectangular ten un ancho (ao longo do seu x local) e un fondo transversal (ao longo do seu y local), un recubrimento libre ata as cintas, barras lonxitudinais en cada cara e cintas pechadas. Ao xiralo xira todo o conxunto; as caras seguen sendo "cara de ancho" e "cara de fondo".

- As barras lonxitudinais dánse como o número nunha cara de ancho e o número nunha cara de fondo. As barras de esquina contan nas dúas, así que 3 e 3 fan 8 barras; 4 e 4 fan 12.
- As cintas son rectángulos pechados con dous ganchos nunha esquina, de 135° ou 90°. A primeira cinta vai a unha distancia fixa por enriba do chan (e por debaixo da seguinte); as zonas de extremo teñen unha separación máis estreita, e o centro unha máis ancha.
- O que fan as barras na parte superior: prolongarse e solapar coas barras de enriba, dobrar con ganchos de 90° no forxado, ou parar baixo o extremo superior.

## O piar traballado

Un piar de 400 × 400 mm, 3600 mm entre o forxado de enriba e o de abaixo, barras lonxitudinais #8, cintas #3, 40 mm de recubrimento libre, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Abra a lapela {{ui:Formigón}} e configure as liñas de cuadrícula e os niveis sobre os que se asenta o piar (panel esquerdo).
2. En {{ui:Engadir pola cuadrícula}}, escolla {{ui:Piar de formigón}}, prema na intersección da cuadrícula e nos dous niveis, configure {{ui:Largura (mm)}} e {{ui:Fondo entre caras (mm)}} en 400 e escolla {{ui:Engadir}}.
3. No panel {{ui:Propiedades}} configure:
   - {{ui:Recubrimento libre (mm)}} 40;
   - {{ui:Barras lonxitudinais}} #8, {{ui:Barras nunha cara de largura}} 3, {{ui:Barras nunha cara de profundidade}} 3;
   - {{ui:Cintas}} #3, {{ui:Ganchos}} 135°, {{ui:Separación entre (mm)}} 300, {{ui:Lonxitude da zona de extremo (mm)}} 600, {{ui:Separación nas zonas de extremo (mm)}} 150, {{ui:Primeiro desde a cara (mm)}} 50;
   - {{ui:Barras no extremo superior}} {{ui:Prolongar e solapar coas barras de enriba}}.

Cada cambio é un paso de desfacer.

### O que obtén

| Parte | Resultado |
|---|---|
| Barras lonxitudinais | 8 barras #8 (un anel 3 × 3), cada unha de 4375 mm de lonxitude: o piar de 3600 mm máis un solape de 775 mm por enriba |
| Solape | 757 mm necesarios para un solape a compresión (ACI 318-19 25.5.5.1, fy 420), 775 mm dispoñibles: a necesidade redondeada ao seguinte múltiplo de 25 mm |
| Cintas | 17 cintas #3, cada unha cunha lonxitude de corte duns 1359 mm, separadas 150 mm nas dúas zonas de extremo de 600 mm e 300 mm entre elas |
| Porcentaxe de armadura | 2,5 % da sección bruta (límites de 1 % a 8 %, ACI 318-19 10.6.1.1) |
| Separación libre das barras | 112 mm (precisa polo menos 40 mm, ACI 318-19 25.2.3) |
| Separación das cintas | 300 mm (permítense 400 mm: o menor de 16 diámetros de barra, 48 diámetros de cinta e o lado menor, ACI 318-19 25.7.2.1) |
| Tamaño da cinta | #3 (permítese ata 9,5 mm, ACI 318-19 25.7.2.2) |

Todos estes están na lista {{ui:Comprobacións}} do elemento; o solape tamén está en {{ui:Solapes e ancoraxes}}.

## Ataduras transversais

Con unha soa cinta perimetral só se suxeitan as barras de esquina. ACI 318-19 25.7.2.3 permite que unha barra intermedia dunha cara quede sen suxeición se está a menos de 150 mm libres dunha barra de esquina. Con 3 barras por cara, como arriba, cúmprese. Con 4 ou máis barras por cara non se cumpre, e DetailCraft así o indica como aviso ({{ui:Comprobacións}} e Problemas): fan falta "ataduras transversais". **As ataduras transversais aínda non se debuxan**: engádaas no debuxo a man, ou escolla menos barras na cara.

Para EN 1992-1-1, DetailCraft comproba o tamaño da barra (polo menos 8 mm), o número de barras (polo menos 4), a área de aceiro (0,2 % a 4 % da sección), a separación libre e a separación dos estribos (9.5.2 e 9.5.3).

## O solape, a zapata e o piar de abaixo

- Cando **unha zapata do modelo está baixo o piar**, o piar solapa coas barras de espera da zapata, e tamén se comproba ese solape.
- Cando **outro piar do modelo está baixo del**, solapa coas barras dese piar.
- Dé o seu propio {{ui:Lonxitude do solape (mm, 0 = segundo sexa necesario)}} para anulalo; un máis curto do necesario é un problema e márcase con * na táboa.
- Por defecto úsanse solapes a compresión ({{ui:Solape a compresión}} nos axustes); escolla {{ui:Solape a tracción}} cando o piar poida estar a tracción.

## Marcas, programa e folla de taller

As barras idénticas comparten unha marca: as barras lonxitudinais do piar de enriba son 8C1, e as súas cintas 17C2 (primeiro o número, despois a letra do tipo C de piar e o número correlativo). Aparecen na lapela {{ui:Cadro de dobrado}}, coa lonxitude de corte e o peso, e no CSV de {{ui:Saída}} › {{ui:Máis}} › {{ui:Dobrado}}.

Escolla {{ui:Debuxo de taller}} xunto ao piar para unha folla co piar en alzado (cada barra, a súa marca, as zonas de cintas e o solape acotados) e unha sección no medio, seguida da folla de dobrado das barras. Garde {{ui:Esta folla en PDF}}.

## O que isto non fai

- Piares redondos e espirais, e piares que non son rectangulares: non se fan.
- Ataduras de esquina e transversais dentro da sección, e detallado sísmico (ACI 318-19 capítulo 18): non se fan.
- Empalmes en posicións que vostede escolla, ou escalonados: todas as barras solapan nunha mesma sección.
- Se as barras chegan para a carga: iso é o deseño do enxeñeiro.
