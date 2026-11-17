---
title: Unir vigas a piares con placas de extremo
summary: Engada placas de extremo atornilladas onde unha viga chega a unha aba ou alma dun piar, defina a placa, os parafusos e a soldadura, e copie a conexión a todas as uniones similares.
keywords: placa de extremo, placa frontal, conexión a momento, conexión atornillada, unión, parafusos, soldadura, placa de extremo estendida, a ras, similar, copiar conexión, compoñente
from: 21e028b2
---

Unha conexión con placa de extremo solda unha placa ao extremo da viga e atórnaa á aba ou á alma do piar. DetailCraft sitúa a placa, recorta a viga, fura a placa e a aba do piar a xuntos, engade os parafusos e a soldadura, e comproba as distancias aos bordos e os espazamentos.

:::warning
DetailCraft non deseña conexións. Os axustes son valores iniciais para que os cambie; nada comproba a resistencia. Os avisos de bordo e espazamento usan os mínimos da EN 1993-1-8 Táboa 3.3, que poden diferir das regras que vostede segue.
:::

## Que pode unir

- Unha viga **horizontal** (ambos extremos á mesma altura), sen xirar (rotación 0), cun perfil en I.
- Á **aba** ou á **alma** dun piar en I **vertical**, en ángulo recto.
- O extremo da viga debe estar sobre a liña do piar, entre a base e o topo do piar.

As vigas oblicuas ou inclinadas e as seccións que non son en I recházanse co motivo: use [placas de cortante](topic:shear-tabs) para eses casos. Nunha alma, a placa e as abas da viga deben caber entre as abas do piar; DetailCraft avisa cando non caben.

:::tip
Coa rotación 0, as abas dun piar miran ao longo da dirección numerada da cuadrícula (x). Unha viga que vai de A a B chega á alma e recibe unha placa de extremo na alma.
:::

## Engadir placas de extremo a unha viga

1. Escolla {{ui:Select}} ({{key:V}}) e faga clic na viga.
2. Escolla {{ui:End plates}} no grupo {{ui:Connect}}, ou {{ui:Add end plates}} no panel {{ui:Properties}}.
3. Cada extremo libre da viga que chega a unha aba ou alma dun piar en ángulo recto recibe unha placa. A barra de estado di «2 placas de extremo engadidas. Seleccione unha para cambiar a súa placa, parafusos e soldadura; Similar copia as uniones coma ela.»
4. A primeira placa de extremo nova queda seleccionada e os seus axustes aparecen no panel {{ui:Properties}}.

Se non pasa nada, lea a barra de estado:

- «Esta viga non remata nunha liña de piar. As placas de extremo van onde o extremo dunha viga chega a un piar vertical.»
- «Esta viga chega a un piar en ángulo ou está inclinada: as placas de extremo están pensadas para uniones en ángulo recto e horizontais. Use Placas de cortante.»
- «Os dous extremos xa teñen conexións.»

## Cambiar a placa, os parafusos e a soldadura

Prema a placa de extremo (ou un dos seus parafusos) para seleccionar a conexión. Baixo {{ui:Plate, bolts and weld (mm)}}:

| Axuste | Predeterminado | Que fai |
|---|---|---|
| Espesor da placa | 20 | O espesor da placa; tamén canto se recorta a viga pasada a aba |
| Largura da placa | 180 | Ao longo da unión |
| Extensión sobre a viga | 0 | Por riba da aba superior; por riba de 0 faise unha placa de extremo estendida |
| Extensión baixo a viga | 0 | Por debaixo da aba inferior |
| Diámetro do parafuso | 20 | Tamaño nominal do parafuso |
| Diámetro do burato | 22 | A súa folga de paso no burato da placa e da aba do piar |
| Calidade do parafuso | A325 | Texto; impreso na lista de materiais |
| Filas de parafusos | 4 | Filas de dous parafusos, centradas na altura da placa |
| Paso entre filas | 75 | Separación vertical entre filas |
| Entreeixo | 100 | Separación horizontal entre os dous parafusos dunha fila |
| Folga de lonxitude do parafuso | 30 | Engadida ao agarre para a porca, a arandela e a rosca; ver abaixo |
| Tamaño da soldadura de filete | 8 | En todo o contorno do extremo da viga |
| Material da placa | A36 | Texto |

Escriba un valor novo e prema {{key:Enter}} ou {{key:Tab}}. A placa, os buratos, os parafusos e a lonxitude de corte da viga actualízanse de inmediato. Cada cambio é un paso de desfacer.

Debaixo dos axustes ve o que fai a conexión:

- {{ui:Bolts}}: por exemplo «8 × 20 × 70 A325 (agarre 36.2)».
- {{ui:Weld}}: tamaño, onde e a súa lonxitude.
- {{ui:Plate}}: o seu tamaño e a súa marca de peza.

### Como se calculan os números

- A viga córtase pola metade da profundidade do piar (na alma: a metade do espesor da alma) máis o espesor da placa, para que a placa quede apoiada na cara.
- A altura da placa é a profundidade da viga máis as dúas extensións.
- Lonxitude do parafuso = agarre (espesor da placa + espesor da aba ou da alma do piar) + folga, redondeado ao múltiplo de 5 mm seguinte.
- A lonxitude da soldadura amosada é o perímetro da sección da viga.

### Avisos

A conexión constrúese igualmente, pero estes avisos aparecen debaixo dela e na pestana {{ui:Problems}}:

- Filas de parafusos ou parafusos máis preto do bordo da placa que 1,2 × o diámetro do burato.
- Paso entre filas inferior a 2,2 × o diámetro do burato, ou entreeixo inferior a 2,4 × o diámetro do burato.
- Buratos que entran na alma do piar ou no seu acordo, ou que quedan fóra da aba do piar.
- Unha placa máis ancha que a aba do piar, ou (na alma) máis ancha que o espazo entre as abas; abas da viga que non caben entre elas.
- Unha fila de parafusos demasiado preto dunha aba da viga, ou un entreeixo demasiado estreito para a alma da viga e a súa soldadura.

## Copiar a todas as uniones similares

1. Seleccione a conexión que configurou.
2. Escolla {{ui:Apply to similar (n)}} no panel {{ui:Properties}}, ou {{ui:Similar}} no menú {{ui:More}} do grupo {{ui:Connect}}. O número entre parénteses é cantas uniones a recibirán.
3. Cada unión co mesmo perfil de viga e de piar, con a viga na mesma clase de cara, e que aínda non ten conexión recibe unha copia cos mesmos axustes. A barra de estado di cantas.

As copias son independentes: cambiar unha máis tarde non cambia as outras. As uniones que xa teñen conexión déixanse como están; elimínaas primeiro se quere substituílas.

## Mover e eliminar

As conexións refanse a partir dos seus axustes cada vez que cambia o modelo, así que mover ou redimensionar unha viga ou un piar leva consigo as súas placas de extremo. Se un cambio fai que a unión xa non encaixe, a conexión mantense no modelo e a pestana {{ui:Problems}} indica por que, por exemplo «O extremo da viga xa non está na liña do piar.»

Para eliminar unha conexión, selecciónea e prema {{key:Delete}}. Eliminar a viga ou o piar elimina tamén as súas conexións.

Seguinte: [Engadir placas base e varillas de anclaxe](topic:base-plates).
