---
title: Comprobacións de cimentación
summary: Comprobar zapatas, zapatas combinadas e lousas sobre o terreo que describa, asentamento, unha lousa flexible sobre molas, grupos de pilotes e muros de contención. Unha axuda para que un enxeñeiro a revise.
keywords: cimentación, zapata, zapata combinada, lousa, asentamento, módulo de reacción do terreo, molas, piar de borde, piar de esquina, presión sobre o terreo, deslizamento, vuelco, punzonamento, cortante en un sentido, flexión, anclaxe, armadura mínima, grupo de pilotes, muro de contención, ACI 318-19
from: 6961ad52
---

:::warning
Estas son comprobacións de primeira orde para que as revise un enxeñeiro, non unha aprobación de deseño. A presión admisible sobre o terreo e o coeficiente de fricción son responsabilidade súa: DetailCraft non coñece o seu terreo.
:::

A pestana {{ui:Cimentación}} comproba as zapatas do modelo fronte ás cargas de piar que lles indique.

## Describir o terreo

Escriba a {{ui:Presión admisible no terreo}} e o {{ui:Coeficiente de fricción da base}}. Ambos comezan en 0, que significa "sen introducir": a comprobación amosa entón a presión como nota e non indica que pase. Para o asentamento, escriba o módulo de elasticidade do terreo {{ui:Es}} (MPa), o seu coeficiente de Poisson e o asentamento admitido (25 mm para empezar). Para unha lousa flexible, escriba un módulo de reacción do terreo {{ui:ks}}. Tamén están aquí o recheo sobre a zapata, o peso específico do terreo, os coeficientes de seguridade para o deslizamento e o vuelco (1.5 para empezar) e a tensión de cedencia das barras.

## Indicar as cargas

Cada zapata ten unha lista de cargas de piar. Use {{ui:Engadir unha carga de piar}} e cubra a fila de servizo (para a presión sobre o terreo, o deslizamento e o vuelco) e a fila mayorada (para as comprobacións de resistencia): a carga vertical P cara abaixo, as forzas horizontais Vx e Vy sobre a parte superior da zapata, os momentos Mx e My, a posición do piar sobre a zapata e o seu tamaño.

Ou bdespregue a pestana {{ui:Análise}} e premer {{ui:Tomar as cargas dos piares da Análise}}: cada apoio que está sobre unha zapata convértese nunha carga de piar, a partir dos conxuntos de servizo e mayorados que escolla. Un My positivo carga máis o lado +x da zapata; un Mx positivo carga máis o lado −y.

## Que se comproba

A partir das cargas de servizo, co peso propio da zapata e o recheo engadidos:

- **Presión sobre o terreo:** a presión baixo unha zapata rixida. Dentro do terzo central, toda a base está en contacto; fóra del, parte da base levántase e o pico é maior. Unha resultante fóra da base non pasa a comprobación.
- **Deslizamento:** a fricción por a carga vertical fronte á forza horizontal.
- **Vuelco:** a distancia da resultante ao bordo.
- **Asentamento:** o asentamento elástico da presión media sobre un semiespazo co módulo indicado, no centro e nunha esquina (solución de Timoshenko e Goodier para un rectángulo flexible), fronte ao límite. É unha cota superior para unha zapata rixida e non inclúe unha capa de terreo de profundidade limitada, o alivio polo terreo escavado nin a consolidación. Sen módulo, amosa a presión como nota.

Só a partir das cargas mayoradas do piar (ACI 318-19):

- **Flexión** na cara do piar, coa armadura mínima (0.0018 para barras de 420 MPa) e as barras que debuxou.
- **Cortante en un sentido** a d da cara.
- **Punzonamento** a d/2 ao redor de cada piar, co momento do piar. Para un piar preto dun bordo, a sección crítica queda recortada polo bordo da zapata (tres lados nun bordo, dous nunha esquina, ACI 318-19 22.6.4.1 e o αs menor da Táboa 22.6.5.2), e o momento respecto do centro da propia sección inclúe o desprazamento da carga.
- **Anclaxe** das barras máis aló da cara do piar, rectas ou cos seus ganchos.
- **Canto** por riba das barras inferiores (150 mm).

Unha zapata combinada ou unha lousa tómanse como rixidas, e o cortante e o momento proceden da estática en cortes ao longo de todo o ancho.

## Unha lousa flexible sobre molas

Marque {{ui:Analizar esta zapata como parrilla flexible sobre molas}} cando a zapata sustenta moitos piares e a zapata rixida é demasiado grosa. A zapata convértese nunha placa de elementos de catro nodos sobre un leito de molas (o {{ui:ks}} que escribiu, concentrado nos nodos), e a carga de cada piar repártese polos nodos da súa propia pegada. Unha segunda táboa dá a maior presión do terreo e o asentamento (e a diferenza entre o máximo e o mínimo), o momento flector en cada dirección coa armadura que necesita, a tracción na cara superior fronte á resistencia do formigón simple (unha zapata non ten barras superiores), o cortante en un sentido a d dos piares e o punzonamento coa propia presión das molas. A malla refínase ata que un piar teña tres elementos de ancho; unha lousa grande tarda uns segundos. O peso propio da lousa e o terreo sobre ela anúlanse e non se inclúen.

Cada comprobación fallida aparece no panel {{ui:Problemas}} coa súa cláusula.

## Grupos de pilotes e muros de contención

{{ui:Engadir un grupo de pilotes}} coloca unha cuadrícula de pilotes baixo un encepado rixido: escriba a carga e os momentos e o que un piloto pode aturar a compresión e a tracción (cifras do deseño de pilotes, non desta pestana). A reacción de cada piloto é P/n máis a súa parte dos momentos (método elástico), e compróbanse a maior compresión e calquera tracción.

{{ui:Engadir un muro de contención}} comproba un muro en ménsula sobre un recheo nivelado, por metro: presión activa de Rankine, vuelco arredor do talón, deslizamento e presión sobre a base. Non se inclúe a presión pasiva diante do talón. O seu asistente pode executar as mesmas comprobacións con `pile_group_check` e `retaining_wall_check`.

Os grupos de pilotes, os muros e o interruptor de lousa gárdanse no ficheiro do modelo, e cada comprobación fallida aparece en {{ui:Problemas}}.
