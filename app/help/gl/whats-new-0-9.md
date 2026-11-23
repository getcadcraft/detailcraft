---
title: Novidades da 0.9 (anteriores)
summary: Perfís de aceiro británicos do Blue Book e cantoneiras desiguais, debuxos de taller de cada peza nun único conxunto PDF, Os meus perfís para seccións personalizadas, P-Delta e frecuencias naturais, cargas de vento ASCE 7, emprazamento sísmico e combinacións, e cursores en directo con Seguir.
keywords: novidades 0.9, versión anterior, novidades, notas de versión, rexistro de cambios, 0.9, aceiro británico, blue book, ub, uc, pfc, shs, rhs, chs, cantoneira desigual, debuxo de taller, debuxos de taller, conxunto de follas, marca de peza, pdf, os meus perfís, perfil personalizado, p-delta, segunda orde, frecuencia natural, elementos finitos, masa modal, carga de vento, asce 7, sísmico, clase de emprazamento, usgs, combinacións de cargas, lrfd, asd, en directo, cursores, seguir, persoas, información emerxente, novidades, cambios, 0.8, 0.8.1, versión, novas funcións, montaxe, grúa, gráfico de cargas, vídeo, piloto automático, unións, armadura, conxestión, cimentación, zapata, lousa, asentamento, entramado, madeira, lista de cortes, constructibilidade, acceso á soldadura, provedor, existencias, prazo de entrega, que falla primeiro, formigón, sísmico, laxe, idiomas, asistente
from: ab0c7f05
---

Isto é o que cambiou na DetailCraft 0.9, en comparación coa 0.8.1. A 0.9 trae os perfís de aceiro británicos, un debuxo de taller para cada peza dunha vez, unha pestana {{ui:Analysis}} máis grande para pórticos, e unha vista dos cursores uns dos outros cando traballan xuntos.

## Novo

### Aceiro británico e debuxos de taller

- **Perfís de aceiro británicos.** As listas de perfís agora traen 976 perfís do Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS e RHS, cos perfís ocos conformados en frío separados (os seus nomes comezan por CF). Os nomes escríbense primeiro coa familia, como UB305x165x40 ou SHS100x100x5.0, e tamén funciona escribilos como o indican os debuxos: 305x165x40 UB, L100x100x10, SHS100x5. Ver [Catálogo de perfís](topic:profile-catalog).
- **Cantoneiras desiguais.** As cantoneiras UEA conservan as dúas aas tanto ao entrar e saír por IFC como nos ficheiros NC, e un espello xira a peza de extremo a extremo.
- **Todos os debuxos de taller de golpe.** Escolla {{ui:Shop drawing}} no grupo {{ui:Output}} sen nada seleccionado. A xanela lista todas as marcas de peza, previsualiza calquera delas, e {{ui:Download all}} garda un PDF cunha páxina por marca, cada unha titulada "Folla 3 de 42". {{ui:Download this sheet}} garda só a que está a ver. Os perfís en U, as cantoneiras e os perfís ocos tamén teñen agora follas. Ver [Facer debuxos de taller](topic:shop-drawings).
- **Os meus perfís.** Agora pódese gardar un perfil personalizado para cada modelo novo. No formulario de perfil personalizado, deixe marcado {{ui:Keep in My profiles}}; a lista {{ui:My profiles}} debaixo ten {{ui:Keep}}, {{ui:Use here}} e {{ui:Remove}}. A lista consérvase neste navegador (ata 200), non na súa conta. Ver [Placas e perfís](topic:plates-and-profiles).

### Análise

- **Segunda orde (P-Delta).** Marque {{ui:Second order (P-Delta)}} xunto a Executar na pestana {{ui:Analysis}} e os esforzos axiais actúan sobre o pórtico deformado. As placas e as lousas rixidas quedan en primeira orde, cun aviso. Ver [Esforzos, reaccións e deformacións](topic:frame-analysis).
- **Frecuencias naturais.** O bloque {{ui:Finite elements: natural frequencies}} baixo os resultados atopa os modos máis baixos do mesmo modelo, cun período e unha masa modal efectiva, e mostra un modo no modelo. Ver [Esforzos, reaccións e deformacións](topic:frame-analysis).
- **Cargas de vento e emprazamento sísmico.** Tres bloques novos na pestana {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} e {{ui:ASCE 7 load combinations}}. Ver [Vento, emprazamento sísmico e combinacións ASCE 7](topic:wind-seismic-combinations).

### Traballar xuntos

- **Cursores e nomes.** Nunha sesión en directo, o punteiro de cada persoa debúxase no modelo co seu nome e a súa cor, e o que seleccionou recibe unha caixa.
- **Seguir a unha persoa.** Abra {{ui:People}} na sesión e escolla {{ui:Follow}} nun nome; a súa vista move coa dela. O anfitrión pode escoller {{ui:Ask everyone to follow me}}. Ver [Seguir a unha persoa nunha sesión en directo](topic:follow-in-live).

### En todas as aplicacións

- As suxestións emerxentes son de Bootstrap, a tarxeta de inicio ten un botón de pechar, as liñas de pestanas se desprazan de lado cando non caben, e a pestana do navegador mostra o documento aberto seguido de DetailCraft e CadCraft.

## Corrixido

- Un perfil personalizado perdíase ao comezar un modelo novo.
- Os perfís en U, as cantoneiras e os perfís ocos faltaban no conxunto de debuxos de taller.

## Límites declarados

- Os bloques de vento, sísmico e de elementos finitos son axudas para comprobar. O seu enxeñeiro revisa os resultados; non son unha comprobación de norma. A consulta USGS probouse cun substituto, non co servizo en vivo.
- Os elementos finitos e P-Delta comprobáronse con respostas manuais e en forma pechada, non cun edificio real. A análise de pandeo non está feita.
- Ningún fabricante británico probou aínda os perfís británicos, e os ficheiros NC para cantoneiras desiguais non se executaron nunha máquina.
- O conxunto de debuxos de taller é só PDF.
- Os idiomas distintos do inglés son borradores automáticos.
- Os instaladores de Windows non teñen sinatura de código (Máis información, despois Executar igualmente); a imaxe de disco de macOS non está notarizada (botón dereito, despois Abrir).

As notas de cambios anteriores están nas notas da 0.8 e da 0.8.1 máis abaixo nesta páxina.

## Anteriores: 0.8 e 0.8.1

Isto é o que cambiou na DetailCraft 0.8 (1 de novembro de 2026) e 0.8.1 (2 de novembro de 2026), en comparación coa 0.7. A 0.7 comprobaba barras de aceiro; a 0.8 planifica os izados, propón as unións, comproba as cimentacións e a armadura, e entrama muros, pisos e cubertas de madeira e de aceiro lixeiro.

### Novo

**Montaxe**

- **Plan de montaxe e vídeo.** Na pestana {{ui:Erection}}, describa unha grúa (onde está, o seu gancho máis alto, o aparello que non figura no gráfico) e escriba as filas do seu gráfico de cargas. DetailCraft iza o modelo unha montaxe por vez, en orde de fase e por niveis, e comproba cada izado contra o gráfico ao seu radio e contra a marxe que estableza. {{ui:Save movie}} escribe un ficheiro HTML que se reproduce sen conexión en calquera navegador, tamén nun teléfono. Os izados que superan o gráfico, que quedan fóra del ou que están demasiado altos aparecen en {{ui:Problems}}. É un plan a partir dos seus números, non un plan de izado. Ver [Plan de montaxe e vídeo](topic:erection-movie).

**Unións**

- **Piloto automático de unións.** A pestana {{ui:Autopilot}} mira cada nó sen unión e propón unha segundo as formas: placas base, chapas de cortante, placas de extremo para as vigas que marque como vigas de momento, empalmes e cartelas. Dea unha carga uniforme ou un cortante de extremo e o número de parafusos segue a resistencia de cálculo do parafuso. {{ui:Add them all}} engade as propostas como un só paso de desfacer. Son valores iniciais para revisar, non un deseño de unión.
- **Comprobacións de constructibilidade.** {{ui:Problems}} para un parafuso que unha chave non alcanza, parafusos demasiado próximos para o vaso, soldaduras de filete fóra dos seus límites de tamaño e perfís ocos que retén auga. O acceso á soldadura é novo: unha soldadura de filete en todo o contorno que o soplete dun soldador non alcanza aparece listada coa peza que estorba e a proporción da soldadura afectada. Ver [Comprobacións de constructibilidade](topic:constructability).

**Cimentacións e armadura**

- **Comprobacións de cimentación.** A pestana {{ui:Foundation}} comproba zapatas, zapatas combinadas e lousas sobre o terreo que describa: presión, esvaramento e volcamento por cargas de servizo; flexión, cortante, punzonamento, anclaxe e armadura mínima por cargas minoradas (ACI 318-19). Un piar preto dun bordo ou dunha esquina compróbase coa sección cortada polo bordo da zapata. O asentamento sae do módulo do terreo, unha lousa flexible resólvese sobre molas a partir dun módulo de subrasante, e os grupos de pilotes e os muros de contención teñen paneis propios. As cargas dos piares pódense escribir ou tomar da {{ui:Analysis}}. Ver [Comprobacións de cimentación](topic:foundation-checks).
- **Mapa de conxestión da armadura.** A pestana {{ui:Congestion}} debuxa un mapa de calor de cada zapata vista desde arriba: onde as barras deixan pouco espazo para que o formigón baixe, fronte á regra de separación libre e, se as dá, o maior árido e a cabeza do vibrador. Ver [Mapa de conxestión da armadura](topic:rebar-congestion).

**Entramado e subministración**

- **Entramado de madeira e de aceiro lixeiro.** A pestana {{ui:Framing}} arma paneis de muros, pisos e cubertas con cada peza, unha lista de cortes, as existencias a mercar e un debuxo de taller a escala. {{ui:Place as members}} pon as pezas no modelo, e {{ui:PDF sheets}} garda unha folla por panel. As medidas, as separacións e os dinteis son seus: DetailCraft non comproba que aguanten a carga. Ver [Paneis de entramado de madeira e de aceiro lixeiro](topic:framing-panels).
- **Existencias do provedor e prazos de entrega.** A pestana {{ui:Supply}} le a lista de existencias dun provedor (CSV) e mostra, para cada sección que compra a lista de cortes, se hai abondo en existencia e canto hai que esperar. Os faltantes e as seccións atrasadas aparecen en {{ui:Problems}}. Non se fai ningún pedido. Ver [Existencias do provedor e prazos de entrega](topic:supplier-stock).

**Análise e deseño**

- **Que falla primeiro?** Na pestana {{ui:Analysis}}, o botón atopa a combinación de resistencia que rixe, a barra máis débil, canto poden crecer as cargas antes de que a primeira barra chegue ao seu límite, e a placa de extremo ou a chapa de cortante máis débil onde se coñece a resistencia a cortante dos seus parafusos. Primeiro precisa as combinacións e unha norma de cálculo. Non se comproban o aplastamento, o cortante de bloque, as soldaduras nin a acción de palanca. O seu asistente conectado pode pedir o mesmo.
- **En directo.** Marque {{ui:Live: solve again after each edit}} e o pórtico volve resolverse despois de cada edición.
- **Formigón e máis.** Unha columna esvelta nun pórtico sen desprazamento deséñase para o seu momento amplificado (ACI 318-19 6.6.4.5). O período sísmico pode tomarse da análise polo método de Rayleigh. Unha laxe feita de placas recibe o aceiro que precisa cada capa a partir dos seus momentos, e o cortante en unha dirección. Ver [Comprobar elementos de formigón e crear cargas sísmicas](topic:concrete-and-seismic).
- **Para que un enxeñeiro comprobe.** Os resultados de cimentación, formigón e Que falla primeiro son axudas. As cargas de vento non están feitas.

**En todas as aplicacións**

- **Idiomas.** A axuda está en 54 idiomas. Os distintos do inglés son borradores automáticos ata que un falante nativo os lea; dez son novos (lituano, letón, bosníaco, marathi, telugu, albanés, afrikáans, filipino, suahili, uzbeco).
- **Filas da barra de ferramentas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} escolle axustar, 2 filas ou 1 fila. Unha barra que xa cabe queda como está; as demais se desprazan de lado.
- **Cuadrícula de propiedades.** Os campos da zapata usan a cuadrícula compartida: categorías plegables e unha densidade compacta. As operacións aritméticas escritas, como 2*450, seguen funcionando.
- **Dispositivos de entrada.** Panel táctil, lapis, rato 3D, mando e MIDI poden manexar as aplicacións. Ver [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** As advertencias das novas comprobacións de arriba aparecen no mesmo panel {{ui:Problems}} que antes.
- **Conecte a súa IA.** O seu propio asistente, conectado a través de CadCraft Studio, funciona con as oito aplicacións e só ve o que permita. A conexión dun clic, o conector aloxado e a súa propia clave de API en Studio aínda están por chegar. Ver [Usar DetailCraft cun asistente de IA](topic:use-with-ai-assistants).

### Corrixido na 0.8.1

- **Idiomas en Studio.** Studio e as edicións empaquetadas poden cambiar de idioma en tempo de execución; antes só estaban en inglés. Aínda non se probou en todas as plataformas: díganos se o idioma non cambia.
- **Selección por xanela cruzada.** Os instaladores 0.8.1 xa traen o comportamento correcto de selección por xanela da versión web 0.8; un instalador anterior non o tiña.
- **Tabletas en vertical.** A altura de cuadrícula sobrante vai para o lenzo, e a disposición da folla comeza nos 760 px ou menos.

### Non está nesta versión aínda

- **Enviar NC a unha máquina** non está publicado.
- **Cargas de vento** para formigón non están feitas, e as comprobacións de formigón e de cimentación son para que un enxeñeiro as revise.
- **Asinatura de código.** Os instaladores de Windows e o .dmg de macOS non están asinados, así que Windows pode avisar e macOS pide botón dereito e despois Abrir.

Os cambios anteriores están en [Novidades da 0.7](topic:whats-new-0-7).
