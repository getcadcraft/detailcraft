---
title: O que aínda non está feito
summary: O que non pode facer esta versión inicial de DetailCraft e o que facer en cambio hoxe.
keywords: límites, limitacións, ausente, planificación, sen soporte, en preparación, planificado, alternativa, pendente
from: ea411885
---

DetailCraft é unha versión inicial. Esta páxina recolle o que aínda non fai, para que poida planificar o seu traballo. Nada aquí é unha promesa de data.

## Modelado

| Aínda non | En cambio, hoxe |
|---|---|
| Arrastrar un extremo dunha peza (estirala) | Edite {{ui:Inicio}} ou {{ui:Final}} baixo {{ui:Extremos (x, y, z mm)}} no panel {{ui:Propiedades}} |
| Un filtro de selección (só vigas, só un perfil) | Arrastre unha xanela e despois {{key:Shift}}+clic para quitar pezas |
| Crear unha matriz dunha selección; xirar sobre un eixo inclinado; reflectir nun plano inclinado | Copie e pegue a peza nun desprazamento, ou {{ui:Duplicar}} a; xirar e reflectir funcionan en planta ([Seleccionar por xanela, mover, xirar, reflectir, cambiar moitas](topic:select-and-change)) |
| Puntos fóra da cuadrícula ao facer clic | Coloque sobre a cuadrícula e despois escriba as coordenadas dos extremos |
| Alzados ao longo das liñas numeradas da cuadrícula; vistas gardadas; planos de traballo | Use {{ui:3D}}, ou {{ui:Engadir pola cuadrícula}} |
| Buratos debuxados como cortes reais na vista 3D | Os buratos aparecen como tapóns escuros; son reais en todas as exportacións |
| Recortes redondeados ou angulados, outros cortes e accesorios | Só recortes a escuadro en perfís en I |
| Buratos que engada a cantoneiras e tubos redondos | Os buratos das cantoneiras proceden só das [cartelas](topic:brace-gussets) |
| Entrada en unidades imperiais | Escriba milímetros (25,4 por polgada) |
| Editar ou quitar un perfil personalizado | Engada un perfil corrixido cun novo nome |

## Escaleiras

| Aínda non | En cambio, hoxe |
|---|---|
| Pasamáns, descansos, placas de punta, chapas de rexilla, escaleiras de caracol e de dobre tramo | Só tramos rectos; ver [Escaleiras](topic:stairs) |
| Cortes nos extremos das zancas contra os pisos | Zancas cortadas a escuadro; córteas no seu software de taller |

## Conexións

DetailCraft constrúe seis conexións: unha cartela de riostra (ver [Cartelas de riostras](topic:brace-gussets)); un empalme atornillado entre dúas pezas dun mesmo perfil en I (ver [Empalmes](topic:splices)); unha xunta a inglete entre dous perfís en I que se encontran nun ángulo, só cortada ou con placas de testa atornilladas (ver [Xuntas a inglete](topic:mitres)); unha placa de testa atornillada, a ras ou prolongada, desde unha viga de perfil en I vertical e horizontal até a ala ou a alma dun pilar de perfil en I; unha pestana de cizalla desde unha viga (a escuadro, esviada ou inclinada) ata a ala ou a alma dun pilar; e unha placa de base de pilar con catro varillas de anclaxe.

| Aínda non | En cambio, hoxe |
|---|---|
| Placas de testa esviadas ou inclinadas | Use [pestanas de cizalla](topic:shear-tabs), que admiten vigas esviadas e inclinadas |
| Cantoneiras de unión; placas de recheo de empalmes e empalmes entre tamaños distintos; cartelas de esquina soldadas a viga e pilar; cartelas chanfradas | Deseñeas noutro software, ou engada placas e buratos a man como pezas soltas; ver [Empalmes](topic:splices), [Cartelas de riostras](topic:brace-gussets) |
| Rigidizadores de base chanfrados ou afilados; buratos de lechada; o aloxamento da zapata para un tope de cizalla | Rigidizadores rectangulares; ver [Placas de base](topic:base-plates) |
| Acartelamentos; ingletes soldados con soldadura a tope; rigidizadores alineados coas alas da outra peza | Un [inglete](topic:mitres) con placas de testa e rigidizadores de alma, ou un inglete simple cortado; engada outras placas a man como pezas soltas |
| Comprobacións de deseño das conexións (resistencia) | Comprobe as conexións cos cálculos do seu enxeñeiro; DetailCraft só avisa da distancia ao bordo e do espazamento |
| Buratos alongados | Só buratos redondos |

## Análise

| Aínda non | En cambio, hoxe |
|---|---|
| Comprobacións de deseño máis alá dos perfís en I de aceiro: tubos, cantoneiras, canles, perfís soldados, pezas esbeltas ou de clase 4, torsión, conexións; formigón: esveltez con desprazamento lateral, torsión, detalle sísmico, lousas e muros | A lapela {{ui:Análise}} comproba os perfís en I de aceiro segundo AISC 360 ou EN 1993-1-1 ([Comprobar pezas de aceiro segundo unha norma de deseño](topic:design-checks)); o resto déixao marcado como "non comprobado"; un enxeñeiro revisa todo |
| Análise de pandeo, vibración | A segunda orde é só P-Delta (elástica); non hai análise de pandeo (modal, espectro de resposta, historia temporal e pushover están na lapela Análise) |
| Comprobacións de deseño que un enxeñeiro revisou | Son unha axuda ata entón: comprebe dúas ou tres pezas a man ou no software do seu enxeñeiro antes de fiarse delas |
| Cargas de forxado, vento e neve xeneradas automaticamente a partir de áreas | Coloque as cargas nas pezas a man, en kN/m ou kN |
| Desprazamentos de pezas, unións excéntricas, riostras só a tracción, placas e zapatas no pórtico | As pezas analízanse sobre as súas liñas de traballo; as riostras soportan tracción e compresión |

## Armaduras

| Aínda non | En cambio, hoxe |
|---|---|
| Pilares redondos, espirais, vigas inclinadas ou curvas, lousas que non sexan rectangulares, muros que non sexan rectos | Vigas, pilares, lousas e muros rectangulares ([Debuxar formigón armado](topic:reinforced-concrete)) |
| Barras dobradas para solape, solapes escalonados, solapes colocados onde vostede escolla | Solapes a intervalos iguais, cada barra solapada nunha mesma sección (ACI clase B, EN α6 = 1,5) |
| Barras de esquina nos ocos, armadura de punzonamento, detalle sísmico (ACI 318-19 capítulo 18) | Barras de refuerzo a cada lado dun oco; revise o resto vostede |
| Ler os ficheiros propios dun programa de cálculo de estruturas | Exporte IFC desde el: as súas IfcReinforcingBar entran como barras ([Barras dun ficheiro IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Códigos de forma máis alá de recta, unha dobra e unha U; tipos ACI 315 para barras rectas e con un gancho | As tres formas imprímense como BS 8666 00, 11, 21 ou ACI Tipo 2; ver [Referencia de armaduras](topic:rebar-reference) |
| Barras métricas distintas de BS 4449 H8–H40 (por exemplo CSA 10M–35M) | Nomes de barras métricas ASTM soft #10–#36, ou barras BS |

## Debuxos e exportacións

| Aínda non | En cambio, hoxe |
|---|---|
| Follas en vertical, A0 e follas do seu propio tamaño; vistas de disposición xeral sobre cuadrículas esviadas | Follas A4 a A1 en horizontal e ANSI B a D ([Debuxos de disposición xeral e de montaxe](topic:drawings)); escale o PDF para imprimir noutro tamaño |
| Símbolos de soldadura en debuxos de taller dunha soa peza; símbolos distintos dos cordóns de ángulo | Os debuxos de montaxe levan símbolos de cordón de ángulo; o debuxo de taller dá a soldadura como texto |
| Editar un debuxo na aplicación | Cambie o modelo e faga o debuxo de novo; anote o PDF nunha aplicación de PDF como MarkupCraft |
| Debuxos en DWG con obxectos de cota, ou o modelo a escala real no espazo modelo cos folios como presentacións | Cada folla é un DWG ou DXF de tamaño real do papel, con cotas como liñas e cifras ([Debuxos de disposición xeral e de montaxe](topic:drawings#download)) |
| Buratos NC en tubos redondos, recortes en cantoneiras e tubos redondos nos ficheiros NC | Non se escriben; ver [Campos do ficheiro NC](topic:nc1-fields) |
| Biseis, marcaxes e contornos interiores nos ficheiros NC | Hoxe, ningún |
| Buratos de parafusos, parafusos, soldaduras e zapatas na exportación USD | Están nos resultados IFC, NC e BOM; ver [Exportar o modelo de aceiro como USD](topic:usd) |
| Traer conexións, zapatas, buratos alongados ou rectangulares e buratos en tubos redondos dun ficheiro IFC | {{ui:Importar IFC}} trae vigas, pilares, pezas, placas, cuadrículas, niveis, buratos redondos, recortes, parafusos e barras de armadura, e o seu informe lista o que deixou fóra |
| Deseños de informe personalizados | Os tres ficheiros CSV |

## Paneis

| Aínda non | En cambio, hoxe |
|---|---|
| Mover os informes da parte inferior ({{ui:Problemas}}, {{ui:Lista de materiais}}, {{ui:Cadro de dobrado}}) | Só se moven os paneis {{ui:Modelo}} e {{ui:Propiedades}}. Ver [Organizar os paneis](common:arrange-panels) |

## Traballo conxunto e gardado

| Aínda non | En cambio, hoxe |
|---|---|
| Gardado na nube e sincronización entre ordenadores | Garde ficheiros `.detailcraft.json` e compártaos como calquera ficheiro. O gardado na nube aínda non está dispoñible |
| Cursores doutras persoas e etiquetas "está editando" nunha sesión de Live TeamWork; cuadrículas, niveis e fases combinados elemento por elemento | As edicións seguen combinándose (cuadrículas, niveis e fases vanse enteiras, gaña o cambio posterior); ver [Detallar unha estrutura xuntos, en directo](topic:work-live) |
| Ligazóns de convite a unha sesión de Live TeamWork por internet | Únase cun código curto na mesma rede |

## Plataformas

- DetailCraft está pensado para pantallas de escritorio, portátil ou tableta. Funciona tamén no teléfono: o modelo conserva a pantalla e os paneis, e os informes ábrense como follas desde unha barra inferior, pero hai pouco espazo para os paneis.
- O uso sen conexión require que primeiro se garde DetailCraft para usar sen conexión, con {{ui:Gardar para usar sen conexión}} na barra da aplicación; cando mostre {{ui:Listo sen conexión}}, todo nesta versión funciona sen conexión. Ver [Traballar sen conexión](common:offline).

Se algunha destas carencias bloquea o seu traballo, cóntenolo na [páxina de asistencia](https://getcadcraft.com/support); axúdanos a decidir o que construír despois.
