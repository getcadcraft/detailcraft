---
title: Novidades na versión 0.9
summary: Tamaños de aceiro do Blue Book británico e cantoneiras desiguais, debuxos de taller de cada peza nun só conxunto PDF, Os meus perfís para seccións personalizadas, P-Delta e frecuencias naturais, cargas de vento ASCE 7, emprazamento sísmico e combinacións, e cursores en directo con Seguir.
keywords: novidades, notas da versión, rexistro de cambios, 0.9, aceiro británico, blue book, ub, uc, pfc, shs, rhs, chs, cantoneira desigual, debuxo de taller, conxunto de follas, marca de peza, pdf, os meus perfís, perfil personalizado, p-delta, segunda orde, frecuencia natural, elementos finitos, masa modal, cargas de vento, asce 7, sísmico, clase de emprazamento, usgs, combinacións de cargas, lrfd, asd, en directo, cursores, seguir, persoas, suxestións, cambios, 0.8, 0.8.1, versión, novas funcións, montaxe, grúa, táboa de cargas, vídeo, piloto automático, conexións, ferralla, zapata, lousa, asentamento, entramado, madeira, perfil conformado en frío, lista de corte, construtibilidade, acceso para soldadura, provedor, existencias, prazo de entrega, que falla primeiro, formigón, laxe, idiomas, asistente
from: 4c95a2de
---

Isto é o que cambiou en DetailCraft 0.9, en comparación coa 0.8.1. A 0.9 trae os tamaños de aceiro británico, un debuxo de taller para cada peza de golpe, unha pestana {{ui:Análise}} máis grande para os pórticos, e unha vista dos cursores uns dos outros cando traballan xuntos.

## Novo

### Aceiro británico e debuxos de taller

- **Tamaños de aceiro británico.** As listas de perfís traen agora 976 tamaños do Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS e RHS, cos perfís ocos conformados en frío separados (os seus nomes comezan por CF). Os nomes escríbense primeiro pola familia, como UB305x165x40 ou SHS100x100x5.0, e escribilo como o din os debuxos tamén funciona: 305x165x40 UB, L100x100x10, SHS100x5. Vexa [Catálogo de perfís](topic:profile-catalog).
- **Cantoneiras desiguais.** As cantoneiras UEA conservan as dúas abas na entrada e saída de IFC e nos ficheiros NC, e un espello xira a peza de extremo a extremo.
- **Todos os debuxos de taller de golpe.** Escolla {{ui:Debuxo de taller}} no grupo {{ui:Saída}} sen nada seleccionado. A xanela lista todas as marcas de pezas, mostra a vista previa de calquera delas, e {{ui:Descargar todas as follas}} garda un PDF cunha páxina por marca, cada unha titulada «Folla 3 de 42». {{ui:Descargar esta folla}} garda a que está vendo. Os perfís en U, as cantoneiras e os perfís ocos tamén teñen agora follas. Vexa [Facer debuxos de taller](topic:shop-drawings).
- **Os meus perfís.** Agora pode conservarse un perfil personalizado para cada modelo novo. No formulario de Perfil personalizado, deixe marcado {{ui:Gardar en Os meus perfís}}; a lista {{ui:Os meus perfís}} que hai debaixo ten {{ui:Gardar}}, {{ui:Usar aquí}} e {{ui:Quitar}}. A lista consérvase neste navegador (ata 200), non na súa conta. Vexa [Placas e perfís](topic:plates-and-profiles).

### Análise

- **Segunda orde (P-Delta).** Marque {{ui:Segunda orde (P-Delta)}} xunto a {{ui:Executar}} na pestana {{ui:Análise}} e os esforzos axiais actúan sobre o pórtico deformado. As placas e os pisos ríxidos quedan en primeira orde, cun aviso. Vexa [Forzas, reaccións e frechas](topic:frame-analysis).
- **Frecuencias naturais.** O bloque {{ui:Elementos finitos: frecuencias naturais}} debaixo dos resultados atopa os modos máis baixos do mesmo modelo, co período e a masa modal efectiva, e mostra un modo sobre o modelo. Vexa [Forzas, reaccións e frechas](topic:frame-analysis).
- **Cargas de vento e emprazamento sísmico.** Tres bloques novos na pestana {{ui:Análise}}: {{ui:Cargas de vento (procedemento direccional ASCE 7)}}, {{ui:Emprazamento e sistema sísmico (ASCE 7)}} e {{ui:Combinacións de cargas ASCE 7}}. Vexa [Vento, emprazamento sísmico e combinacións ASCE 7](topic:wind-seismic-combinations).

### Traballo conxunto

- **Cursores e nomes.** Nunha sesión en directo, o punteiro de cada persoa debúxase no modelo co seu nome e a súa cor, e o que seleccionou recibe unha caixa.
- **Seguir a unha persoa.** Abra {{ui:Persoas}} na sesión e escolla {{ui:Seguir}} nun nome; a súa vista móvese coa dela. O anfitrión pode escoller {{ui:Pedir a todos que me sigan}}. Vexa [Seguir a unha persoa nunha sesión en directo](topic:follow-in-live).

### En todas as aplicacións

- As suxestións son as de Bootstrap, a tarxeta de consello de inicio ten un botón de pechar, as tiras de pestanas desprázanse de lado cando non caben, e a pestana do navegador indica o documento aberto seguido de DetailCraft e CadCraft.

## Corrixido

- Un perfil personalizado perdíase ao comezar un modelo novo.
- Faltaban perfís en U, cantoneiras e perfís ocos no conxunto de debuxos de taller.

## Límites declarados

- Os bloques de vento, sísmica e elementos finitos son axudas para comprobar. O seu enxeñeiro revisa os resultados; non son unha comprobación normativa. A consulta a USGS probouse cun substituto, non co servizo en produción.
- Os elementos finitos e P-Delta comprobáronse con respostas calculadas a man e de forma pechada, non cun edificio real. A análise de pandeo non está feita.
- Ningún fabricante británico probou aínda os tamaños británicos, e os ficheiros NC para cantoneiras desiguais non se executaron nunha máquina.
- O conxunto de debuxos de taller é só PDF.
- Os idiomas distintos do inglés son borradores automáticos.
- Os instaladores de Windows non están asinados (Máis información e logo Executar igualmente); a imaxe de disco de macOS non está notarizada (botón dereito e logo Abrir).

Os cambios anteriores están nas notas da 0.8 e da 0.8.1 máis abaixo nesta páxina.

## Anteriores: 0.8 e 0.8.1

Isto é o que cambiou en DetailCraft 0.8 (1 de novembro de 2026) e 0.8.1 (2 de novembro de 2026), en comparación coa 0.7. A 0.7 comprobaba barras de aceiro; a 0.8 planifica as elevacións, propón as conexións, comproba as cimentacións e a ferralla, e monta muros, pisos e cubertas de madeira e de perfil conformado en frío.

### Novo

**Montaxe**

- **Plan de montaxe e vídeo.** Na pestana {{ui:Montaxe}}, describa unha grúa (onde está, o seu gancho máis alto, o aparello que non figura na táboa) e escriba as filas da súa táboa de cargas. DetailCraft eleva o modelo un conxunto por vez, por orde de fase e nivel a nivel, e comproba cada elevación na táboa para o seu radio e fronte á marxe que fixe. {{ui:Gardar vídeo}} escribe un único ficheiro HTML que se reproduce sen conexión en calquera navegador, tamén nun teléfono. As elevacións que superan a táboa, pasan dela ou son demasiado altas aparecen en {{ui:Problemas}}. É un plan a partir dos seus números, non un plan de elevación. Vexa [Plan de montaxe e vídeo](topic:erection-movie).

**Conexións**

- **Piloto automático de conexións.** A pestana {{ui:Piloto automático}} mira cada xunta sen conexión e propón unha a partir dos perfís: placas base, aletas de cortante, placas de extremo para as vigas que marque como vigas de momento, empalmes e cartelas. Indique unha carga uniforme ou un cortante nun extremo, e o número de parafusos segue a resistencia de cálculo do parafuso. {{ui:Engadir todas}} engade as propostas como un só paso de desfacer. Son valores de partida para revisar, non un deseño de conexión.
- **Comprobacións de construtibilidade.** {{ui:Problemas}} para un parafuso ao que unha chave non chega, parafusos demasiado xuntos para o vaso, soldaduras de cordón fóra dos seus límites de tamaño e perfís ocos que reteñen auga. O acceso para soldar é novo: unha soldadura de cordón continua que o soplete do soldador non alcanza aparece listada coa peza que estorba e a porcentaxe da soldadura afectada. Vexa [Comprobacións de construtibilidade](topic:constructability).

**Cimentacións e ferralla**

- **Comprobacións de cimentación.** A pestana {{ui:Cimentación}} comproba zapatas, zapatas combinadas e lousas sobre o terreo que describa: presión sobre o terreo, deslizamento e volteo debido ás cargas de servizo; flexión, cortante, punzonamento, anclaxe e armadura mínima debido ás cargas mayoradas (ACI 318-19). Un piar preto dun bordo ou dunha esquina compróbase coa sección cortada polo bordo da zapata. O asentamento sae do módulo do terreo, unha lousa flexible resólvese sobre molas a partir dun módulo de balasto, e os grupos de pilotes e os muros de contención teñen paneis propios. As cargas dos piares pódense escribir ou tomar da {{ui:Análise}}. Vexa [Comprobacións de cimentación](topic:foundation-checks).
- **Mapa de conxestión da ferralla.** A pestana {{ui:Conxestión}} debuxa un mapa de calor de cada zapata vista desde arriba: onde as barras deixan pouco espazo para que o formigón baixe, fronte á regra de separación libre e, se as indica, o árido máis grande e a cabeza do vibrador. Vexa [Mapa de conxestión da ferralla](topic:rebar-congestion).

**Entramado e subministración**

- **Entramado de madeira e de perfil conformado en frío.** A pestana {{ui:Entramado}} monta paneis de muro, piso e cuberta con cada peza, unha lista de corte, as existencias que mercar e un debuxo de taller a escala. {{ui:Colocar como barras}} pon as pezas no modelo, e {{ui:Follas PDF}} garda unha folla para cada panel. As seccións, as separacións e os dinteis son seus: DetailCraft non comproba que soporten a carga. Vexa [Paneis de entramado de madeira e de perfil conformado en frío](topic:framing-panels).
- **Existencias do provedor e prazos de entrega.** A pestana {{ui:Subministración}} le a lista de existencias dun provedor (CSV) e mostra, para cada perfil que compra a lista de corte, se hai abondo en stock e canto hai que esperar. As faltas e os perfís atrasados están en {{ui:Problemas}}. Non se pide nada. Vexa [Existencias do provedor e prazos de entrega](topic:supplier-stock).

**Análise e deseño**

- **Que falla primeiro?** Na pestana {{ui:Análise}}, o botón atopa a combinación de resistencia que rixe, a barra máis débil, canto poden crecer as cargas antes de que a primeira barra alcance o seu límite, e a placa de extremo ou a aleta de cortante máis débil onde se coñece a resistencia a cortante dos seus parafusos. Primeiro precisa as combinacións e unha norma de cálculo. Non se comprobán o apoio, o cortante en bloque, as soldaduras nin o efecto palanca. O seu asistente conectado pode pedir o mesmo.
- **En directo.** Marque {{ui:En directo: resolver de novo despois de cada edición}} e o pórtico volverase resolver despois de cada edición.
- **Máis formigón.** Un piar esbelto nun pórtico sen desprazamento dimensiónase para o seu momento amplificado (ACI 318-19 6.6.4.5). O período sísmico pode tomarse da análise polo método de Rayleigh. Unha laxe feita de placas recibe o aceiro que cada capa precisa a partir dos seus momentos, e tamén o cortante unidireccional. Vexa [Comprobar elementos de formigón e crear cargas sísmicas](topic:concrete-and-seismic).
- **Para que un enxeñeiro comprobe.** Os resultados de cimentación, formigón e Que falla primeiro son axudas. As cargas de vento non están feitas.

**En todas as aplicacións**

- **Idiomas.** A axuda está en 54 idiomas. Os que non son inglés son borradores automáticos ata que os lea un falante nativo; dez son novos (lituano, letón, bosníaco, marathi, telugu, albanés, afrikaans, filipino, suahili, uzbeko).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} escolle axustar, 2 filas ou 1 fila. A barra que xa cabe queda como está; as demais desprázanse de lado.
- **Cuadrícula de propiedades.** Os campos da zapata usan a cuadrícula común: categorías que se pregan e unha densidade compacta. A aritmética escrita, como 2*450, segue funcionando.
- **Dispositivos de entrada.** Panel táctil, lapis, rato 3D, mando e MIDI poden manexar as aplicacións. Vexa [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** Os avisos das novas comprobacións anteriores aparecen no mesmo panel {{ui:Problemas}} de antes.
- **Conecte a súa IA.** O seu propio asistente, conectado a través de CadCraft Studio, funciona coas oito aplicacións e só ve o que vostede permite. A conexión dun clic, o conector aloxado e a súa propia clave de API en Studio aínda están por chegar. Vexa [Usar DetailCraft cun asistente de IA](topic:use-with-ai-assistants).

### Corrixido na 0.8.1

- **Idiomas en Studio.** Studio e as edicións empaquetadas poden cambiar de idioma en tempo de execución; antes só estaban en inglés. Aínda non se probou en todas as plataformas: díganos se o idioma non cambia.
- **Selección por xanela cruzada.** Os instaladores da 0.8.1 traen xa o comportamento correcto de selección por xanela que tiña a versión web da 0.8; un instalador máis antigo non o tiña.
- **Tabletas en vertical.** O espazo sobrante da cuadrícula vai para o lenzo, e a disposición da folla comeza a 760 px ou menos.

### Non dispoñible aínda nesta versión

- **Enviar NC a unha máquina** aínda non está publicado.
- **As cargas de vento** para formigón non están feitas, e as comprobacións de formigón e de cimentación son para que as revise un enxeñeiro.
- **Sinatura do código.** Os instaladores de Windows e o .dmg de macOS non están asinados, así que Windows pode avisar e macOS pide un clic co botón dereito e logo Abrir.

Os cambios anteriores están en [Novidades na versión 0.7](topic:whats-new-0-7).
