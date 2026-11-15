---
title: Novidades da 0.8 e 0.8.1
summary: Unha película de montaxe a partir da táboa de cargas dunha grúa, un piloto automático de conexións, un mapa de conxestión de armaduras, comprobacións de cimentación, paneis de entramado de madeira e de aceiro lixeiro, comprobacións de construtibilidade e de acceso para soldadura, existencias de provedores, o que falla primeiro, un recálculo en directo, máis comprobacións de formigón e as correccións da 0.8.1.
keywords: novidades, o que hai de novo, notas da versión, rexistro de cambios, cambios, 0.8, 0.8.1, versión, novas funcións, montaxe, grúa, táboa de cargas, película, piloto automático, conexións, armadura, conxestión, cimentación, zapata, malla, asentamento, entramado, madeira, aceiro lixeiro, lista de cortes, construtibilidade, acceso para soldadura, provedor, existencias, prazo de entrega, que falla primeiro, en directo, formigón, sísmico, laxe, idiomas, asistente
from: 6e33e052
---

Estes son os cambios en DetailCraft 0.8 (1 de novembro de 2026) e 0.8.1 (2 de novembro de 2026), en comparación coa 0.7. A 0.7 comprobaba barras de aceiro; a 0.8 planifica os izados, propón as conexións, comproba as cimentacións e as armaduras, e arma paneis de madeira e de aceiro lixeiro para muros, chans e cubertas.

## Novo

### Montaxe

- **Plan e película de montaxe.** Na lapela {{ui:Erection}}, describa unha grúa (onde está, o seu gancho máis alto, os aparellos de elevación que non están na táboa) e escriba as filas da súa táboa de cargas. DetailCraft iza o modelo un conxunto por vez, por orde de fase e nivel a nivel, e comproba cada izado contra a táboa no seu radio e contra a marxe que fixe. {{ui:Save movie}} escribe un ficheiro HTML que se reproduce sen conexión en calquera navegador, tamén nun teléfono. Os izados que superan a táboa, que a pasan ou que son demasiado altos aparecen en {{ui:Problems}}. É un plan segundo os seus números, non un plan de izado. Consulte [Plan de montaxe e película](topic:erection-movie).

### Conexións

- **Piloto automático de conexións.** A lapela {{ui:Autopilot}} mira cada unión que non ten conexión e propón unha a partir das formas: placas base, cartelas de cizalla, placas de extremo para as vigas que marque como vigas de momento, empalmes e cartelas. Indique unha carga uniforme ou un cortante nun extremo, e o número de parafusos segue a resistencia de cálculo do parafuso. {{ui:Add them all}} engade as propostas como un só paso de desfacer. Son valores de partida para revisar, non un deseño de conexións.
- **Comprobacións de construtibilidade.** {{ui:Problems}} para un parafuso que unha chave non alcanza, parafusos demasiado xuntos para o vaso, soldaduras de filete fóra dos seus límites de tamaño e perfís ocos que retén auga. O acceso para soldar é novo: unha soldadura de filete en todo o contorno que o soplete dun soldador non alcanza aparece listada coa peza que está no medio e a proporción da soldadura afectada. Consulte [Comprobacións de construtibilidade](topic:constructability).

### Cimentacións e armaduras

- **Comprobacións de cimentación.** A lapela {{ui:Foundation}} comproba zapatas, zapatas combinadas e malla sobre o terreo que describa: capacidade portante, deslizamento e volcado debidos ás cargas de servizo; flexión, cortante, punzonamento, anclaxe e armadura mínima debidos ás cargas mayoradas (ACI 318-19). Un piar preto dun bordo ou dunha esquina compróbase coa sección cortada polo bordo da zapata. O asentamento sae do módulo do terreo, unha malla flexible resólvese sobre resortes a partir dun módulo de balasto, e os grupos de pilotes e os muros de contención teñen paneis propios. As cargas dos piares pódense escribir ou tomar de {{ui:Analysis}}. Consulte [Comprobacións de cimentación](topic:foundation-checks).
- **Mapa de conxestión de armaduras.** A lapela {{ui:Congestion}} debuxa un mapa de calor de cada zapata vista desde arriba: onde as barras deixan pouco espazo para que o formigón baixe, contra a regra de separación libre e, se as indica, o maior árido e o cabezal do vibrador. Consulte [Mapa de conxestión de armaduras](topic:rebar-congestion).

### Entramado e subministración

- **Entramado de madeira e de aceiro lixeiro.** A lapela {{ui:Framing}} arma paneis de muros, chans e cubertas con cada peza, unha lista de cortes, as existencias que mercar e un debuxo de taller a escala. {{ui:Place as members}} coloca as pezas no modelo, e {{ui:PDF sheets}} garda unha folla por cada panel. Os tamaños, a separación e os dinteis son seus: DetailCraft non comproba que aguanten a carga. Consulte [Paneis de entramado de madeira e de aceiro lixeiro](topic:framing-panels).
- **Existencias de provedores e prazos de entrega.** A lapela {{ui:Supply}} le a lista de existencias dun provedor (CSV) e amosa, para cada perfil que compra a lista de cortes, se hai suficientes en existencia e canto dura a espera. As faltas e os perfís con atraso están en {{ui:Problems}}. Non se fai ningún pedido. Consulte [Existencias de provedores e prazos de entrega](topic:supplier-stock).

### Análise e deseño

- **Que falla primeiro?** Na lapela {{ui:Analysis}}, o botón atopa a combinación de resistencia que rexe, a barra máis débil, canto poden crecer as cargas antes de que a primeira barra chegue ao seu límite, e a placa de extremo ou a cartela de cizalla máis débil onde se coñece a resistencia a cortante dos seus parafusos. Precisa primeiro as combinacións e unha norma de cálculo. Non se comproban o aplastamento, o cortante de bloque, as soldaduras nin o efecto palanca. O seu asistente conectado tamén pode pedir o mesmo.
- **En directo.** Marque {{ui:Live: solve again after each edit}} e o pórtico resólvese de novo despois de cada edición.
- **Formigón, e máis.** Un piar esbelto nun pórtico intraslacional deséñase para o seu momento amplificado (ACI 318-19 6.6.4.5). O período sísmico pode tomarse da análise polo método de Rayleigh. Unha laxe feita de placas recibe o aceiro que cada capa necesita a partir dos seus momentos, e o cortante unidireccional. Consulte [Comprobar elementos de formigón e xerar cargas sísmicas](topic:concrete-and-seismic).
- **Para que un enxeñeiro o revise.** Os resultados de cimentación, de formigón e de Que falla primeiro son axudas. As cargas de vento non están incluídas.

### En todas as aplicacións

- **Idiomas.** A axuda está en 54 idiomas. Os que non son o inglés son borradores automáticos ata que un falante nativo os revise; dez son novos (lituano, letón, bosníaco, marathi, telugu, albanés, afrikaans, filipino, suahili e uzbeko).
- **Filas da barra de ferramentas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} escolle Axustar, 2 filas ou 1 fila. Unha barra que xa cabe queda como está; as demais desprázanse de lado.
- **Rexilla de propiedades.** Os campos da zapata usan a rexilla compartida: categorías que se pregan e unha densidade compacta. As operacións aritméticas escritas, como 2*450, seguen funcionando.
- **Dispositivos de entrada.** Panel táctil, lapis dixital, rato 3D, mando e MIDI poden controlar as aplicacións. Consulte [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** Os avisos das novas comprobacións de arriba aparecen no mesmo panel {{ui:Problems}} que antes.
- **Conecte a súa IA.** O seu propio asistente, conectado a través de CadCraft Studio, funciona con as oito aplicacións e só ve o que permite. A conexión dun clic, o conector aloxado e a súa propia chave de API en Studio están por chegar. Consulte [Usar DetailCraft cun asistente de IA](topic:use-with-ai-assistants).

## Corrixido na 0.8.1

- **Idiomas en Studio.** Studio e as edicións empaquetadas poden cambiar de idioma en tempo de execución; antes, só estaban en inglés. Aínda non se probou en todas as plataformas: infórmenos se o idioma non cambia.
- **Selección por xanela cruzada.** Os instaladores da 0.8.1 traen o comportamento de selección por xanela que xa estaba ben na versión web 0.8; un instalador máis antigo non o tiña.
- **Tabletas en vertical.** O espazo de altura sobrante pasa ao lenzo, e a disposición da folla comeza a 760 px ou menos.

## Non está aínda nesta versión

- **Enviar NC a unha máquina** non está publicado.
- **Cargas de vento** para formigón non están construídas, e as comprobacións de formigón e de cimentación son para que un enxeñeiro as revise.
- **Sinatura de código.** Os instaladores de Windows e o ficheiro .dmg de macOS non están asinados, así que Windows pode avisar e macOS pide un clic dereito e logo Abrir.

As mudanzas anteriores están en [Novidades da 0.7](topic:whats-new-0-7).
