---
title: Verificar elementos de betão e criar cargas sísmicas
summary: Defina as armaduras de vigas e pilares de betão, verifique-os segundo o ACI 318-19, crie forças laterais equivalentes segundo o ASCE 7-22 em pisos rígidos e veja o deslocamento entre pisos. Um apoio para um engenheiro verificar.
keywords: betão, betão armado, ACI 318, ACI 318-19, armadura, viga, pilar, esforço transverso, cintas, sísmico, sismo, força lateral equivalente, ELF, ASCE 7-22, deslocamento entre pisos, pisos, diafragma rígido, peso do piso, utilização, estrutural, engenheiro
from: 94d3001d
---

Os blocos {{ui:Elementos de betão}} e {{ui:Ações sísmicas}} no separador {{ui:Análise}} verificam vigas e pilares de betão armado, e criam as forças horizontais de um sismo nos pisos de um pórtico. Ambos seguem a execução do separador {{ui:Análise}} e são guardados com o modelo.

:::warning
Os resultados são **para verificação por um engenheiro**: um apoio até que alguém os tenha revisto. As verificações de betão usam esforços de primeira ordem, exceto que um pilar num pórtico que classifica como sem deslocamento lateral é dimensionado para o seu momento amplificado, sem amplificação por deslocamento lateral, sem dimensionamento à torção, sem pormenorização sísmica (capítulo 18 do ACI) e sem pormenorização de cintas. As ações sísmicas deixam de fora o fator de redundância, o efeito sísmico vertical, a amplificação torsional e os efeitos P-delta. As ações do vento ainda não estão implementadas.
:::

## Desenhar os elementos

Desenhe os elementos de betão como retângulos: um perfil de {{ui:Chapa}} como `PL400x400` para um pilar e `PL300x600` para uma viga dá a secção. Pilares e vigas são colocados como qualquer outro membro.

## Definir as secções

O bloco {{ui:Elementos de betão}} lista cada secção usada pelos elementos. Carregue em {{ui:Definir como betão…}} nas que são de betão. O DetailCraft lê a largura **b** (ao longo do eixo y do próprio elemento) e a altura **h** (ao longo de z) do perfil desenhado, e depois pede:

- o **recobrimento** até ao centro dos varões, e os varões **superiores**, **inferiores** e **laterais** (quantos e de que diâmetro) para uma viga, ou uma **gaiola de pilar** (varões ao longo de b e ao longo de h, de que diâmetro, cintas em espiral) para um pilar;
- as **cintas**: ramos, diâmetro e espaçamento;
- como o elemento **atua**: como viga, como pilar, ou decidido a partir dos seus esforços (um elemento vertical, ou um que suporte mais de 0.10 f′c Ag, é um pilar).

Defina f′c, a tensão de cedência dos varões fy e a das cintas fyt (420 MPa no máximo conta para o esforço transverso), K e se o pórtico é com ou sem deslocamento lateral acima deles. Uma secção definida como betão é analisada como betão: E = 4700 √f′c, 2400 kg/m³, e, por omissão, com **secções fendilhadas** (pilares 0.70 Ig, vigas 0.35 Ig; ACI 318-19 Tabela 6.6.3.1.1(a)). Escolha {{ui:Secções brutas}} para desligar isso.

## Criar combinações e verificar

Atribua aos casos de carga o seu tipo e depois escolha {{ui:Criar combinações}}: o ACI 318-19 adota as combinações de resistência do ASCE 7 (§5.3.1). Carregue em {{ui:Verificar betão}} e cada elemento recebe uma utilização, colorida no modelo como as verificações do aço: flexão e armadura mínima (22.2, 9.6.1.2), deformação de controlo por tração (9.3.3.1), esforço transverso com as cintas (22.5, 9.6.3), espaçamento das cintas, e carga axial com momento para pilares (22.4, com o método de Bresler para flexão biaxial). Um elemento cuja secção desenhada difere do b × h que escreveu fica com o estado *parcialmente verificado*, tal como um pilar esbelto ou torção acima do limiar: esses não são dimensionados.

Elementos acima da sua capacidade são listados em {{ui:Problemas}}; aceite um com uma justificação, ou corrija a secção.

## Pisos e ações sísmicas

Um piso é um nível onde o pórtico fica unido por uma laje rígida (um **diafragma rígido**). No bloco {{ui:Ações sísmicas}} carregue em {{ui:Encontrar pisos}}: retira os níveis onde se encontram duas ou mais vigas. Depois dê a cada piso o seu **peso sísmico**, escrito ou lido. {{ui:Tomar os pesos dos casos}} soma as cargas verticais dos casos que lhe der um fator (o caso permanente é 1; some 0.25 num caso de sobrecarga de armazenamento ou neve numa cobertura plana, como o ASCE 7-22 12.7.2 pede). A carga vertical de cada nó vai para o piso no seu nível ou acima dele, por isso um pilar entre dois pisos dá metade do seu peso a cada um.

Preencha os valores de projeto: SDS, SD1, S1, R, Ie, Cd, TL, o sistema estrutural (para o período) e a categoria de risco. {{ui:Criar casos sísmicos}} calcula então o período a partir da altura do edifício (12.8.2.1), o esforço transverso na base V = Cs W (12.8.1), distribui-o pelos pisos (12.8.3) e escreve quatro casos de carga, em X e em Y, com a excentricidade acidental de 5 % em cada sentido (12.8.4.2). As forças por piso e a verificação do deslocamento entre pisos (12.8.6, Tabela 12.12-1, o deslocamento Cd δxe / Ie contra 0.020 hsx) aparecem após uma execução; um deslocamento acima do limite é também um problema. Carregue de novo em {{ui:Criar combinações}} para trazer os casos sísmicos para as combinações.

**O período da análise.** O período aproximado Ta vem da altura do edifício. Quando executou a análise com os casos sísmicos, {{ui:Tomar o período da análise}} lê o quanto cada piso se moveu sob as forças e calcula o período pelo método de Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), uma vez para X e outra para Y; os casos sísmicos são refeitos com ele. O período usado nunca é superior a Cu·Ta (ASCE 7-22 12.8.2), por isso um modelo flexível não pode baixar o esforço na base abaixo desse valor. Volte a tomar o período depois da segunda execução: estabiliza em um ou dois passos. Desmarque {{ui:Período obtido da análise}} para voltar a Ta.

**Pilares esbeltos (ACI 318-19 6.6.4.5).** Para um pórtico que classifica como sem deslocamento lateral, um pilar cujo k·ℓu/r é superior a 34 + 12·M1/M2 (no máximo 40) é dimensionado para o momento amplificado Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² com (EI)eff = 0.4 Ec Ig / (1 + βdns), e o momento mínimo Pu (15 + 0.03 h). βdns (0.6 para começar) é a parte do esforço axial de cálculo que é permanente: escreva o seu próprio valor. Um pilar cujo Pu atinge 0.75 Pc falha com a sua própria verificação. O relatório lista os números de cada pilar esbelto. Num pórtico com deslocamento lateral, um pilar esbelto continua "parcialmente verificado": a sua amplificação precisa de uma análise de segunda ordem, que não está implementada.

**Lajes.** Quando o modelo tem chapas, um bloco {{ui:Armadura de lajes}} recolhe os momentos das chapas de cada combinação de resistência e, pela regra de Wood–Armer (flexão e torção em conjunto), calcula o aço que cada camada precisa por metro: inferior e superior, em x e em y. Dá-lhe a espessura, o recobrimento e os varões; a tabela mostra o necessário contra o dado e o esforço transverso unidirecional contra φVc, e uma camada que fique aquém é um problema com a sua cláusula. Deformação, punçoamento nos pilares e varões de remate nas aberturas não são cobertos, e um momento sobre um apoio converge lentamente com chapas de quatro nós.

Cada piso que listar torna-se um diafragma rígido na análise: as suas vigas não transmitem esforço axial pelo movimento do piso. A exportação CraftScript não é feita para um modelo com pisos.

## O relatório

{{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} ganham as tabelas de betão (pressupostos, utilização por elemento, cada cláusula), os parâmetros sísmicos e o esforço transverso na base, as forças nos pisos e a tabela de deslocamentos entre pisos.
