---
title: Xerador de escaleiras de aceiro
summary: Unha escaleira de aceiro a partir da altura entre pisos, o percorrido e a largura: a altura e o fondo por un conxunto de regras que escolla, descansos, pasamáns e balaustres, debuxos de taller e unha lista de cortes con pesos.
keywords: escaleira de aceiro, xerador de escaleiras, zanca, chanzo, rexilla, chapa plegada, descanso, pasamán, balaustres, altura, fondo, osha, ibc, approved document k, lista de cortes, pesos, debuxo de taller
from: a4f0a985
---

O xerador de escaleiras fai unha escaleira de aceiro completa a partir de poucos números: as zancas, os chanzos, os descansos cando o tramo é demasiado alto, pasamáns con postes e balaustres, os furos de fixación nas zancas, unha lista de cortes con pesos e os debuxos de taller. Parte da ferramenta {{ui:Escaleira}}, como a escaleira simple (ver Escaleiras), coa diferenza dun interruptor engadido.

## Colocar unha escaleira de aceiro

1. Escolla {{ui:Escaleira}} no grupo {{ui:Colocar}}, ou prema {{key:S}}.
2. Á dereita, marque {{ui:Usar o xerador de escaleiras de aceiro}}.
3. Escolla o **conxunto de regras** segundo onde se constrúe a escaleira, a **altura** (entre pisos; 0 = ata o seguinte nivel), o **percorrido dispoñible** (0 = que a regra decida), a **largura libre** e o **tipo de chanzo**: chapa estriada, rexilla ou chapa plegada en cubeta.
4. Defina a sección da zanca, os descansos (pola regra, ou un número), os pasamáns (aos dous lados, un, ningún), a altura do pasamán e o espazo dos balaustres.
5. Prema nun cruzamento de cuadrícula: ese é o pé da primeira contrahuella.

Seleccione a escaleira (prema nunha zanca, chanzo ou pasamán) para cambiar calquera axuste. As propiedades mostran as contrahuellas, o fondo, a inclinación, os tramos e descansos, o aceiro que leva, a lista de cortes e as fontes do conxunto de regras.

## Os conxuntos de regras

O conxunto de regras limita a forma da escaleira: a altura e o fondo, 2 × contrahuella + fondo, a inclinación, o descanso, a altura do pasamán e a maior abertura. DetailCraft ofrece os de abaixo; a rexión é un axuste, non unha suposición. Abra **Onde están as cifras deste conxunto de regras** nas propiedades: cada cifra nomea a súa fonte e di como se comprobou.

- **Código Internacional de Edificación 2021**: contrahuella de 4 a 7 in., chanzo de polo menos 11 in., pasamáns de 34 a 38 in. O límite de 12 ft entre descansos amósase como *non lido*, e as cifras dos pasamáns como lidas en folletos que citan o código: confírmeas antes de confiar nelas.
- **OSHA 29 CFR 1910.25 e 1910.29** (escaleiras industriais estándar): 30° a 50°, contrahuella como máximo de 9.5 in., chanzo de polo menos 9.5 in., polo menos 22 in. de ancho, descansos tan anchos como a escaleira e 30 in. de fondo, e un pasamán superior de 36 a 38 in. usado como pasamán. Estas cifras liéronse no propio regulamento.
- **Approved Document K 2013, Inglaterra** (escaleiras xerais de acceso e servizo): os intervalos de altura e fondo e 2 × contrahuella + fondo de 550 a 700 mm, lidos no informe encargado polo goberno que os tabula. O documento non dá a DetailCraft ningunha altura de pasamán, así que se usa a altura que vostede define e a lista de Problemas di iso.

Un conxunto de regras que non está aquí non se adiviña: a escaleira segue entón a regra de comodidade de 600 a 650 mm e indica que non ten regra.

## Que calcula

- **Contrahuellas e fondo.** As menos contrahuellas cuxo 2 × contrahuella + fondo quede no medio do intervalo da regra, sen que o fondo caia por baixo do mínimo da regra. Cun percorrido dado, o fondo é o percorrido entre os chanzos e indícase calquera cousa fóra da regra.
- **Tramos e descansos.** Un tramo máis alto do que a regra permite divídese cun descanso tan ancho como a escaleira e non menor que o mínimo da regra; tamén pode pedir descansos. Un descanso é un marco de dúas vigas laterais e dúas cantoneiras transversais baixo unha cuberta, sobre dous postes.
- **Chanzos.** A chapa estriada é unha placa soldada (6 mm por defecto; o patrón non se engade ao peso). Unha cubeta de chapa plegada ten un retorno no bocel e atorníllase á alma da zanca: dous furos 2 mm máis grandes que o parafuso a 0.3 e 0.7 da profundidade. A rexilla debúxase como a placa de igual peso (profundidade da barra portante × grosor ÷ paso); as barras transversais e as bandas non se contan, e a lista de cortes indícao.
- **Pasamáns.** Un pasamán superior de tubo sobre postes ao longo de cada tramo e cada descanso, cun espazo de balaustres que non deixa pasar unha esfera maior que a abertura da regra (100 mm como máximo por defecto).

## Debuxos, lista de cortes, exportación

- O tramo é un conxunto; os pasamáns son outro (ambos lados son o mesmo conxunto, feito dúas veces). Cada un ten o seu debuxo de conxunto, e o debuxo da zanca amosa os seus furos.
- A **folla da escaleira** (ST-…) amosa a zanca de cada tramo recta cos postos dos furos escritos desde o extremo inferior, e o detalle do chanzo: sección, bocel, retorno e a brida do extremo cos seus furos.
- {{ui:Lista de cortes e pesos}} nas propiedades enumera cada perfil e lonxitude con cantidades e quilogramos; {{ui:Descargar a lista de cortes (CSV)}} gárdaa.
- Todo vai á lista de materiais, aos ficheiros NC e a IFC como pezas comúns (IfcMember, IfcColumn, IfcPlate).

## Bo saber

- Isto é un punto de partida, non un deseño. Nada se comproba en resistencia nin en frecha; o conxunto de regras só limita a forma.
- Os extremos das zancas contra os pisos córtanse a escuadra e non se detallan; os postes dos descansos chegan ao piso inferior e non teñen placas base.
- Colocar a escaleira como un único elemento en BimCraft aínda non está conectado.
