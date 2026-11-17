---
title: Verificar peças de concreto e gerar cargas sísmicas
summary: Defina as armaduras de vigas e pilares de concreto, verifique-os pela ACI 318-19, gere forças laterais equivalentes pela ASCE 7-22 em pisos rígidos e veja a deriva entre pavimentos. Um auxílio para um engenheiro verificar.
keywords: concreto, concreto armado, ACI 318, ACI 318-19, armadura, viga, pilar, cisalhamento, grampos, sísmico, terremoto, força lateral equivalente, ELF, ASCE 7-22, deriva, deriva entre pavimentos, pisos, diafragma rígido, peso do pavimento, utilização, estrutural, engenheiro
from: 94d3001d
---

Os blocos {{ui:Elementos de concreto}} e {{ui:Cargas sísmicas}} na guia {{ui:Análise}} verificam vigas e pilares de concreto armado, e geram as forças horizontais de um terremoto sobre os pavimentos de um pórtico. Ambos seguem a execução da análise e são salvos com o modelo.

:::warning
Os resultados são **para verificação por um engenheiro**: um auxílio até que um engenheiro os revise. As verificações de concreto usam esforços de primeira ordem, exceto que um pilar em um pórtico que você classifica como sem deslocamento lateral é dimensionado para o seu momento amplificado, sem amplificação por deslocamento lateral, sem dimensionamento à torção, sem detalhamento sísmico (capítulo 18 da ACI) e sem detalhamento de grampos. As cargas sísmicas deixam de fora o fator de redundância, o efeito sísmico vertical, a amplificação torcional e os efeitos P-delta. As cargas de vento ainda não estão implementadas.
:::

## Desenhar as peças

Desenhe peças de concreto como retângulos: um perfil {{ui:Chapa}} como `PL400x400` para um pilar e `PL300x600` para uma viga dá a seção. Pilares e vigas são posicionados como qualquer outro membro.

## Definir as seções

O bloco {{ui:Elementos de concreto}} lista cada seção que os membros usam. Pressione {{ui:Configurar como concreto…}} nas que são de concreto. O DetailCraft lê a largura **b** (ao longo do eixo y do próprio membro) e a altura **h** (ao longo de z) do perfil desenhado, depois pede:

- o **cobrimento** até o centro das barras, e as barras **superiores**, **inferiores** e **laterais** (quantas e de qual diâmetro) para uma viga, ou uma **gaiola de pilar** (barras ao longo de b e ao longo de h, qual diâmetro, grampos em espiral) para um pilar;
- os **grampos**: ramos, diâmetro e espaçamento;
- como o membro **atua**: como viga, como pilar, ou decidido pelos seus esforços (um membro vertical, ou um que carrega mais de 0.10 f′c Ag, é um pilar).

Defina f′c, o escoamento das barras fy e o escoamento dos grampos fyt (até 420 MPa conta para cisalhamento), K e se o pórtico é com ou sem deslocamento lateral acima deles. Uma seção configurada como concreto é analisada como concreto: E = 4700 √f′c, 2400 kg/m³, e por padrão com **seções fissuradas** (pilares 0.70 Ig, vigas 0.35 Ig; ACI 318-19 Tabela 6.6.3.1.1(a)). Escolha {{ui:Seções brutas}} para desligar isso.

## Fazer combinações e verificar

Dê aos casos de carga seu tipo, depois clique em {{ui:Criar combinações}}: a ACI 318-19 adota as combinações de resistência da ASCE 7 (§5.3.1). Pressione {{ui:Verificar concreto}} e cada membro recebe uma utilização, colorida no modelo como as verificações de aço: flexão e armadura mínima (22.2, 9.6.1.2), deformação de controle por tração (9.3.3.1), cisalhamento com os grampos (22.5, 9.6.3), espaçamento de grampos, e carga axial com momento para pilares (22.4, com o método de Bresler para flexão biaxial). Um membro em que a seção desenhada difere do b × h que você digitou aparece como *verificado parcialmente*, assim como um pilar esbelto ou uma torção acima do limite: esses não são dimensionados.

Membros acima da capacidade são listados em {{ui:Problemas}}; aceite um com um motivo, ou corrija a seção.

## Pisos e cargas sísmicas

Um piso é um nível em que o pórtico é mantido unido por uma laje rígida (um **diafragma rígido**). No bloco {{ui:Cargas sísmicas}} pressione {{ui:Encontrar pavimentos}}: ele pega os níveis onde duas ou mais vigas se encontram. Depois dê a cada pavimento seu **peso sísmico**, digitado ou lido: {{ui:Tomar os pesos dos casos}} soma as cargas verticais dos casos que você dá um fator (o caso de peso próprio é 1; adicione 0.25 em um caso de sobrecarga de armazenamento ou neve em telhado plano, como a ASCE 7-22 12.7.2 pede). A carga vertical de cada nó vai para o pavimento no nível dele ou acima; assim, um pilar entre dois pavimentos dá metade do seu peso a cada um.

Preencha os valores de projeto: SDS, SD1, S1, R, Ie, Cd, TL, o sistema estrutural (para o período) e a categoria de risco. {{ui:Criar casos sísmicos}} então calcula o período a partir da altura do edifício (12.8.2.1), o cortante na base V = Cs W (12.8.1), distribui-o pelos pavimentos (12.8.3) e escreve quatro casos de carga, em X e em Y, com a excentricidade acidental de 5 % em cada sentido (12.8.4.2). As forças por pavimento e a verificação de deriva (12.8.6, Tabela 12.12-1, a deriva Cd δxe / Ie contra 0.020 hsx) aparecem após uma execução; uma deriva acima do limite também é um problema. Pressione {{ui:Criar combinações}} de novo para incluir os casos sísmicos nas combinações.

**O período a partir da análise.** O período aproximado Ta vem da altura do edifício. Quando você executou a análise com os casos sísmicos, {{ui:Tomar o período da análise}} lê o quanto cada pavimento se deslocou sob as forças e calcula o período pelo método de Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), uma vez para X e uma vez para Y; os casos sísmicos são gerados de novo com ele. O período usado nunca é maior que Cu·Ta (ASCE 7-22 12.8.2), então um modelo flexível não pode reduzir o cortante na base abaixo disso. Tome o período de novo após a segunda execução: ele se estabiliza em um ou dois passos. Desmarque {{ui:Período da análise}} para voltar ao Ta.

**Pilares esbeltos (ACI 318-19 6.6.4.5).** Para um pórtico que você classifica como sem deslocamento lateral, um pilar cujo k·ℓu/r é maior que 34 + 12·M1/M2 (no máximo 40) é dimensionado para o momento amplificado Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² com (EI)eff = 0.4 Ec Ig / (1 + βdns), e o momento mínimo Pu (15 + 0.03 h). βdns (0.6 para começar) é a parcela da carga axial fatorada que é sustentada: digite a sua. Um pilar cujo Pu atinge 0.75 Pc falha com sua própria verificação. O relatório lista os números de cada pilar esbelto. Em um pórtico **com** deslocamento lateral, um pilar esbelto continua "verificado parcialmente": sua amplificação exige uma análise de segunda ordem, que não está implementada.

**Lajes.** Quando o modelo tem chapas, um bloco {{ui:Armadura de lajes}} pega os momentos das chapas de cada combinação de resistência e, pela regra de Wood–Armer (flexão e torção juntas), calcula a armadura que cada camada precisa por metro: inferior e superior, em x e em y. Você informa a espessura, o cobrimento e as barras; a tabela mostra o necessário contra o fornecido e o cisalhamento em uma direção contra φVc, e uma camada que fica aquém é um problema com sua cláusula. Flecha, puncionamento em pilares e barras de reforço de aberturas não são cobertos, e um momento sobre um apoio converge devagar com chapas de quatro nós.

Cada pavimento que você listar vira um diafragma rígido na análise: suas vigas não recebem força axial do movimento do pavimento. A exportação em CraftScript não é feita para um modelo com pavimentos.

## O relatório

{{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} ganham as tabelas de concreto (premissas, utilização por membro, cada cláusula), os parâmetros sísmicos e o cortante na base, as forças nos pavimentos e a tabela de deriva.
