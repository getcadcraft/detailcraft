---
title: Novidades na versión 0.7 (anteriores)
summary: Comprobacións de deseño de perfís I de aceiro con combinacións de cargas de ASCE 7 ou EN 1990 e comprobacións de barras segundo AISC 360 ou EN 1993-1-1, exportación USD do modelo de aceiro, unha ferramenta asistente para USD, unha cinta de aceiro con botóns grandes e pequenos, paneis que se recollen e diálogos que se poden mover.
keywords: novidades 0.7, versión anterior, notas da versión, rexistro de cambios, cambios, 0.7, versión, novas funcións, comprobacións de deseño, deseño de aceiro, aproveitamento, combinacións de cargas, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocódigo, Anexo Nacional, sobrecarga de cuberta, límite de frecha, usd, usda, usdc, usdz, openusd, asistente, mcp, cinta de aceiro, cinta, botón dividido, unidades, compacta, paneis, diálogos, portugués
from: 54a7a8f0
---

Isto é o que cambiou en DetailCraft 0.7, en comparación coa 0.6. A análise de pórticos da 0.6 ten agora un segundo paso: a comprobación das barras de aceiro segundo unha norma de cálculo.

## Novo

### Unións a inglete (0.7.1)

- **Dous perfís en I que se encontran nun ángulo**, como un xeonllo de pórtico ou unha cumieira: seleccione os dous, escolla {{ui:Inglete}} no menú {{ui:Máis}} do grupo {{ui:Unir}}, e os dous extremos córtanse no plano que divide o ángulo en dous. As placas de extremo atornilladas entre si e os rigidizadores da alma son casillas de verificación no novo diálogo Inglete, cuxos campos numerados coinciden cun debuxo da súa unión que se fai mentres escribe. O inglete segue as barras cando se moven, e chega aos debuxos, aos ficheiros NC (cortes oblicuos), ao IFC e á lista de materiais. Vexa [Unións a inglete](topic:mitres).

### Comprobacións de deseño

- **Combinacións de cargas segundo a norma.** Na pestana {{ui:Análise}}, o novo bloque {{ui:Comprobacións de deseño}} ten unha {{ui:Norma de cálculo}}: ASCE 7 + AISC 360 (EUA, LRFD) ou EN 1990 + EN 1993-1-1 (Eurocódigo). Indique a clase de cada caso de carga (permanente, sobrecarga de uso, a nova sobrecarga de cuberta, neve, vento, sísmica), prema {{ui:Crear combinacións}} e DetailCraft escribe as combinacións de resistencia e de servizo da norma para os seus casos. As combinacións que escribiu vostede consérvanse. Vexa [Crear as combinacións](topic:design-checks#make-the-combinations).
- **Valores do Anexo Nacional.** Para o Eurocódigo, os factores comezan nos valores recomendados; {{ui:Valores do Anexo Nacional}} permítelle escribir os do seu país, e gárdanse no modelo. Vexa [Crear as combinacións](topic:design-checks#make-the-combinations).
- **Comprobar barras.** {{ui:Comprobar barras}} comproba cada perfil I de aceiro para tracción, compresión con pandeo, flexión con pandeo lateral por torsión, cortante, flexión con esforzo axial e frecha fronte ao {{ui:Límite de frecha}} que fixe. A táboa mostra o aproveitamento de cada barra, a comprobación que rixe e a súa combinación, e as barras colóranse no modelo (azul, verde, ocre, vermello, gris para as non comprobadas). Vexa [Comprobar as barras](topic:design-checks#check-the-members).
- **No informe.** {{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} engaden as edicións das normas, os axustes, o aproveitamento por barra e cada cláusula usada. Vexa [O informe](topic:design-checks#the-report).
- **Unha axuda ata que un enxeñeiro a revise.** Usa só forzas de primeira orde. Os tubos, as cantoneiras, os perfís en U, os perfís soldados e as pezas esbeltas ou de clase 4 aparecen como «non comprobado», co motivo; a torsión, as conexións e o formigón non se comprobán. Vexa [Que non se comproba](topic:design-checks#what-is-not-checked).

### USD

- **Exportar o modelo de aceiro como USD.** {{ui:USD}} no grupo {{ui:Saída}} escribe o modelo como {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} ou {{ui:Paquete (.usdz)}} para programas de renderizado e montaxe de escenas: cada conxunto contén as súas pezas, cada peza é a súa sección ao longo da súa lonxitude con os recortes feitos, e cada unha leva a súa marca, perfil, calidade, lonxitude e peso. Os buratos dos parafusos, os parafusos, as soldaduras e as zapatas non aparecen nas mallas USD. Vexa [Exportar o modelo de aceiro como USD](topic:usd).

### Asistentes de IA

- **USD para asistentes.** O seu propio asistente, conectado a través de CadCraft Studio, pode exportar o modelo como USD (`usd_export`), e en Studio escribilo nunha cartafol que lle permitiu. Vexa [Que pode pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Cambiado

- **A cinta de aceiro** ten botóns grandes e pequenos: un {{ui:Viga}} grande xunto a {{ui:Piar}}, {{ui:Riostra}} e {{ui:Placa}} pequenos en {{ui:Modelado}} › {{ui:Elementos}}; un {{ui:Placas de extremo}} grande en {{ui:Detallado}} › {{ui:Conexións}}, con {{ui:Empalme}} e {{ui:Cartela}} compartindo un botón dividido; un {{ui:Pegar}} grande en {{ui:Editar}} › {{ui:Portapapeis}}, con {{ui:Pegar no mesmo sitio}} e {{ui:Duplicar}} detrás da frecha do grupo. {{ui:Fabricación}} › {{ui:Intercambio}} ten {{ui:Exportar USD}} xunto a IFC. Os outros estilos de menú séguen véndose como antes. Vexa [Menús, teclas e rato](topic:menus-keys-and-mouse#the-three-styles).
- [Analizar o pórtico](topic:frame-analysis) agora remite ás comprobacións de deseño, e as súas combinacións poden crearse segundo a norma.

## En todas as aplicacións

- **Unidades.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Unidades}} ten unha lista para lonxitude, superficie, volume, ángulo e pendente, cos tamaños exactos que dan as definicións das unidades (o pé de topografía dos EUA é unha unidade propia). Desactive as unidades que nunca usa e saen das listas; marque unha con estrela e o traballo novo comeza nela. Un ficheiro conserva sempre a súa propia unidade. As caixas propias de DetailCraft aínda non seguen as listas: as súas lonxitudes escríbense aínda en milímetros. Vexa [Unidades, valores escritos e listas de unidades](common:unit-lists).
- **Unha disposición máis densa e paneis que se recollen.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Densidade da disposición}} › {{ui:Compacta}} cabe máis na pantalla (as pantallas táctiles e os teléfonos conservan os botóns grandes). Cada panel lateral ten unha barra de título estreita: arrástrea para acoplar ou flotar o panel, solte sobre a barra doutro panel para compartir un marco como pestanas, fíxao para que se recolla ata o bordo, ou ocúltao e volva traelo desde o bordo. Vexa [Dispor os paneis](common:arrange-panels#make-the-layout-denser).
- **Os diálogos móvense.** Arrastre un diálogo pola súa barra de título para sacalo do camiño do debuxo; volve ao sitio onde o deixou. Faga dobre clic na barra de título para centralo de novo. Vexa [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para asistentes de IA.** Dez peticións feitas para o seu propio asistente (ordenar un debuxo, trazar un conxunto, comprobar debuxos, facerlle preguntas a un modelo, totalizar unha medición, probar unha variante de peza…), cada unha coas ferramentas que chama e os permisos que precisa, e cada unha repetida polas nosas probas. As aplicacións non conteñen IA. Vexa [Receitas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo en {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** teñen agora todas as palabras das aplicacións, como borradores aínda non revisados por un falante nativo. Os temas de axuda están en inglés.
- **CadCraft Studio** indica por que fallou a comprobación de actualizacións (aínda non hai ficheiro para o seu sistema, non hai rede, unha sinatura non válida) en vez de só «Feito», e deixa de volver mostrar unha tarxeta de novidades que pechou ata que haxa unha versión máis nova.

## Non dispoñible aínda nesta versión

- **A 0.7 non está asinada co código.** A sinatura e o paquete para a Microsoft Store pasan á 0.8 porque a validación do certificado aínda non chegou. Comprobe o SHA-256 xunto a cada ficheiro en getcadcraft.com/download. En Windows, se SmartScreen detén o instalador, escolla {{ui:Máis información}} e logo {{ui:Executar igualmente}}. Nun Mac, a primeira vez, prema co botón dereito en CadCraft Studio e escolla {{ui:Abrir}}. CadCraft Studio aínda non está nunha tenda de aplicacións, e aínda non hai versión para iPad nin para iPhone.
- As listas de ángulo e pendente de {{ui:Unidades}} gárdanse, pero aínda ningunha caixa as le.
- **As comprobacións de deseño aínda non foron revisadas por un enxeñeiro.** As nosas probas compáranas con valores de táboas impresas e con fórmulas calculadas a man, non aínda cos exemplos resoltos dunha guía de deseño. Ata unha revisión, son unha axuda: comprobe a man as barras que importan.
- As comprobacións de deseño usan forzas de primeira orde (sen efectos de segunda orde) e só comprobán perfís I. Non están feitos: tubos, cantoneiras, perfís en U, perfís soldados, pezas esbeltas (AISC) ou de clase 4 (Eurocódigo) en flexión, torsión, pandeo por cortante xunto con flexión, conexións, fatiga, incendio, detallado sísmico e formigón. Unha peza esbelta en compresión deixa fóra as comprobacións de compresión, e a barra aparece como «pasa, parcialmente comprobada».
- A análise de pórticos segue sendo de primeira orde e lineal, e aínda non a probou un enxeñeiro nunha obra real.
- Os buratos dos parafusos, os parafusos, as soldaduras e as zapatas non están na exportación USD.

Todo o resto está en [Que non está feito aínda](topic:not-built-yet).
