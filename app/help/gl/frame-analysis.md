---
title: Analizar o pórtico
summary: Esforzos, reaccións e frechas das vigas, piares e contraventos tal como se debuxaron, baixo casos de carga e combinacións que lle indique. Unha axuda para a análise, non unha comprobación de norma; as comprobacións de deseño son un paso aparte.
keywords: análise, análise estrutural, análise de pórtico, método da rixidez, cargas, caso de carga, combinación, carga permanente, sobrecarga de uso, peso propio, reaccións, momento flector, cortante, esforzo axil, frecha, deformada, apoios, articulado, empotrado, liberación, informe, pdf, csv, craftscript, frame3d
from: ba0081bc
---

A pestana {{ui:Análise}} na parte inferior calcula os esforzos de cada viga, piar e contravento do modelo, as reaccións nas bases dos piares e canto se dobran as barras, para as cargas que lle indique.

:::warning
É unha **axuda para a análise, non unha comprobación de norma**. A análise non aplica ningunha norma de deseño: non dimensiona as barras, non comproba capacidades nin uniones, nin escolle coeficientes de mayoración. Un enxeñeiro revisa o modelo, as súas cargas e os apoios, e decide o que significan os números. Para as comprobacións de barras segundo ASCE 7 / AISC 360 ou EN 1990 / EN 1993-1-1 ver [Comprobar as barras de aceiro segundo unha norma de deseño](topic:design-checks), un paso aparte que tamén é unha axuda.
:::

## Executalo

1. Abrir a pestana {{ui:Análise}}.
2. Seleccione unha ou máis barras na vista, escolla un {{ui:Caso}}, unha {{ui:Carga}} e unha {{ui:Dirección}}, escriba o valor e prema {{ui:Engadir carga}}. Unha carga repartida ao longo dunha barra vai en kN/m, unha carga puntual en kN. {{ui:Cara abaixo (gravidade)}} é a habitual.
3. Premer {{ui:Executar análise}}.

A táboa enumera para cada barra o maior esforzo axil N, os cortantes Vz e Vy, os momentos flectores My e Mz, a torsión T e a súa frecha, co maior momento primeiro; prema o nome dunha barra para seleccionala. Debaixo aparecen as reaccións en cada apoio. {{ui:Sobre o modelo}} debuxa a deformada, ou unha acción como diagrama xunto a cada barra, co seu maior valor escrito no seu lugar. Os resultados quedan desfasados en canto cambia o modelo: execútea de novo.

Cada carga, caso e configuración é un paso de desfacer ({{key:Mod+Z}}) e gárdase no ficheiro do modelo.

## Casos de carga e combinacións

A análise comeza con tres: **Permanente** (o peso propio das barras, a partir das seccións debuxadas e de 7850 kg/m³), **Sobrecarga** (baleira) e **Permanente + sobrecarga**. Engada casos propios (vento, neve …) e combinacións: unha combinación suma os casos cos coeficientes que escriba. A análise é lineal, polo que cada caso se resolve unha vez e as combinacións son sumas. Escriba vostede os coeficientes, ou escolla unha norma de deseño e deixe que {{ui:Crear combinacións}} escriba as da norma ([Comprobar as barras de aceiro segundo unha norma de deseño](topic:design-checks)).

## De que está feito o pórtico

- Vigas, piares e contraventos, cada un na súa liña de traballo (a liña que debuxou), coas propiedades reais da sección calculadas a partir do seu contorno. As placas, escaleiras, zapatas e parafusos non forman parte do pórtico.
- Unha barra divídese onde o extremo doutra barra cae sobre ela, así que unha viga que chega a un piar a media altura únese ao piar nese punto.
- **Bases dos piares**: empotradas (o inicio) ou articuladas (suxeitas no seu sitio e contra a torsión, libres para xirar). Unha placa de base sempre fai un apoio.
- **Extremos das vigas**: unha placa de extremo é rixida, unha lingüeta de cortante é articulada. {{ui:Extremos das vigas sen unión}} define o resto. Os **contraventos** están articulados nos dous extremos.
- Seleccione unha soa barra para dar aos seus extremos, ou á base dun piar, unha regra propia.
- Aceiro en todo: E = 200 GPa, G = 77 GPa.

Se o pórtico pode moverse sen dobrar nada —un mecanismo, como bases articuladas sen contraventar nunha dirección—, a execución para e indica onde e en que dirección; suxeite o punto cun apoio, unha unión rixida ou un contravento.

## Signos

N > 0 é tracción. My > 0 pon o lado local −z da barra en tracción: unha viga que se combe baixo a gravidade ten My > 0. Mz > 0 pon o lado local −y en tracción. A frecha mídese desde a recta que une os extremos da barra. O eixe local z da barra apunta cara arriba (para un piar: ao longo de X); os seus eixes locais xiran co xiro da barra.

## O informe

{{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} conteñen todo: as hipóteses sobre as que se construíu o pórtico, as seccións, os casos e as combinacións; despois, para cada caso e combinación, as reaccións (cos totais de cargas e reaccións, que se equilibran), os esforzos das barras e os desprazamentos, e unha envolvente de cada caso. {{ui:Exportar como CraftScript}} escribe o mesmo pórtico como un script para o espazo de traballo Script de PartCraft, onde a función de biblioteca `frame3d` o resolve paso a paso en código lexible.

## Método

O método directo da rixidez, lineal e de primeira orde salvo que marque Segunda orde (P-Delta): piares e vigas de dous nodos con rixideces axial, de torsión e de dobre flexión (sen deformación por cortante nin alabeo), liberacións nos extremos por condensación estática, e cargas ao longo das barras coas súas propias funcións de forma. As súas respostas compróbanse fronte aos casos clásicos de libro (ménsulas, vigas simples, empotradas e continuas, un pórtico plano, unha grella a torsión, unha celosía).

**Segunda orde (P-Delta).** Marque *Segunda orde (P-Delta)* xunto a Executar: cada combinación vólvese a resolver cos esforzos axiais das barras actuando sobre o pórtico deformado (cada barra cortada en 4 partes, para que conte tamén a flexión dunha barra entre os seus extremos), ata que os esforzos axiais se estabilicen. A liña de resultado indica o número de pasadas e canto creceu o desprazamento lateral; os momentos, as frechas, as comprobacións de deseño e o informe usan entón estes resultados. Por enriba da carga crítica elástica do pórtico, a execución para e indícao. É elástica con rotacións pequenas, só flexional, sen redución de rixidez nin cargas nocionais (non é por si soa o método de análise directa de AISC); as lousas, os muros e os pisos rixidos seguen sendo de primeira orde.

**Frecuencias naturais (elementos finitos).** O bloque {{ui:Elementos finitos: frecuencias naturais}} debaixo dos resultados atopa os modos máis baixos do mesmo modelo co motor de elementos finitos: vigas cos seus liberacións nos extremos, lousas e muros como cunchas planas de catro nodos, pisos rixidos e apoios. Escolla cantos modos (3, 6, 10 ou 20) e o elemento de lousa (a cuncha de catro nodos para lousas grosas ou finas, ou o de lousa fina) e prema {{ui:Calcular as frecuencias}}. A táboa dá a frecuencia de cada modo en Hz, o seu período en segundos e a súa masa modal efectiva en X, Y e Z como unha parte da masa que pode moverse; {{ui:Amosar no modelo}} debuxa calquera modo da mesma forma que se debuxa a deformada. A masa é a densidade do material por o volume: as cargas non suman masa, e un material sen densidade non ten masa. O informe (PDF, CSV) inclúe a táboa. Só é elástica e de pequenos movementos, e aquí non se xera ningunha carga sísmica ou de vento a partir dunha norma. Non é unha comprobación de norma; o seu enxeñeiro revisa os resultados.

**Espectro de resposta, historia no tempo e empuxe progresivo.** Hai tres bloques máis debaixo das frecuencias, que usan o mesmo modelo de elementos finitos. A masa para todos eles é a densidade do material máis as cargas descendentes dos casos que marque, cada unha por un factor que escriba (por exemplo, Permanente ao 1 e Sobrecarga á parte que conte como masa).

{{ui:Espectro de resposta}} lee cada modo a partir dun espectro que vostede dá (unha táboa de período e aceleración, ou a forma ASCE 7 a partir de SDS, SD1 e TL; o botón {{ui:Usar os valores do bloque Sísmico}} copia eses valores do bloque Sísmico) e combina os modos por CQC, SRSS, a regla do dez por cento ou unha suma absoluta, e despois xunta as direccións X, Y e Z (100 % + 30 % ou SRSS). Dá o cortante na base, as derivas de planta, os esforzos nos extremos das barras e unha táboa de modos que avisa cando os modos usados levan menos do 90 % da masa. Pode escalar os resultados por un factor ou ata un cortante na base que escriba; o bloque nunca calcula ese cortante por si mesmo. Os resultados non teñen signo.

{{ui:Historia no tempo}} executa unha aceleración do chan por superposición modal (exacta para as rectas do rexistro entre puntos) ou por integración directa (aceleración media de Newmark con amortecemento de Rayleigh). A entrada é unha sinusoide ou un pulso inventado (sempre etiquetado como sintético), un rexistro que pegue, ou un ficheiro de texto que abra (tempo e aceleración, unha aceleración por liña con un paso, ou un ficheiro estilo PEER con cabeceira DT=; en g ou m/s²). Dá o desprazamento da cuberta e o cortante na base en función do tempo, a deriva de cada nivel e a envolvente dos esforzos nos extremos das barras. Os modelos cun rexistro moi longo consérvano só para a sesión.

{{ui:Empuxe progresivo (pushover)}} empuxa a cuberta lateralmente en pasos pequenos (patrón como o primeiro modo, ou uniforme), con rótulas plásticas nos extremos das barras que teñen forma de I. Unha rótula cede ao momento plástico, que baixa a medida que aumenta o esforzo axil (calculado a partir da forma debuxada, sen ter en conta os acordos); o endurecemento é opcional, o P-delta é opcional, e pode aplicarse antes unha combinación de gravidade. Dá a curva de capacidade (cortante na base fronte ao desprazamento da cuberta), a primeira rótula, e o estado e a rotación plástica de cada rótula. {{ui:Executar a historia no tempo non lineal}} executa as mesmas rótulas baixo o rexistro do bloque Historia no tempo, en modelos pequenos. As rótulas fórmanse só nos extremos das barras (poña un nodo onde debería formarse unha dentro dun ván); unha barra liberada en ambos extremos non recibe ningunha; non se modelan a cedencia nin o pandeo dos contraventos; as lousas e os muros seguen sendo elásticos; non se dan criterios de aceptación. Non é unha comprobación de norma; o seu enxeñeiro revisa os resultados. Os axustes gárdanse co modelo, e o informe inclúe as táboas.

Aínda non construído: análise de pandeo, unha corrección de masa ausente para o espectro de resposta, escalado de rexistros, criterios de aceptación para as rótulas (a resposta dinámica xa está, arriba), áreas e cargas de vento xeradas automaticamente (as forzas sísmicas sobre os pisos están en [Comprobar elementos de formigón e xerar cargas sísmicas](topic:concrete-and-seismic)), desprazamentos de barras e contraventos que só traballen a tracción. Ver [Aínda non construído](topic:not-built-yet).
