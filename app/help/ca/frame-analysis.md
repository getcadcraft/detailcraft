---
title: Anàlisi del pòrtic
summary: Esforços, reaccions i fletxes de les bigues, pilars i reforços diagonals tal com estan dibuixats, sota els casos de càrrega i les combinacions que definiu. Una ajuda d'anàlisi, no una comprovació normativa; les comprovacions de disseny són un pas a part.
keywords: anàlisi, anàlisi estructural, anàlisi de pòrtic, mètode de la rigidesa, càrregues, cas de càrrega, combinació, càrrega permanent, sobrecàrrega, pes propi, reaccions, moment flector, tallant, esforç axial, fletxa, forma deformada, suports, articulat, encastat, alliberament, informe, pdf, csv, craftscript, frame3d
from: ba0081bc
---

La pestanya {{ui:Analysis}} de la part inferior troba els esforços de cada biga, pilar i reforç diagonal del model, les reaccions a les bases dels pilars i quant es deformen les barres, per a les càrregues que hi doneu.

:::warning
És una **ajuda d'anàlisi, no una comprovació normativa**. L'anàlisi no aplica cap norma de disseny: no dimensiona barres, no comprova capacitats ni connexions, ni tria coeficients de majoració de càrregues. Un enginyer comprova el model, les seves càrregues i suports, i decideix què signifiquen els valors. Per a comprovacions de barres d'acer segons ASCE 7 / AISC 360 o EN 1990 / EN 1993-1-1 vegeu [Comproveu barres d'acer segons una norma de disseny](topic:design-checks), un pas a part que també és una ajuda.
:::

## Executar l'anàlisi

1. Obriu la pestanya {{ui:Analysis}}.
2. Seleccioneu una o més barres a la vista, trieu un {{ui:Case}}, una {{ui:Load}} i una {{ui:Direction}}, escriviu el valor i premeu {{ui:Add load}}. Una càrrega repartida al llarg d'una barra va en kN/m, una càrrega puntual en kN. {{ui:Down (gravity)}} és la més habitual.
3. Premeu {{ui:Run analysis}}.

La taula enumera l'esforç axial màxim N de cada barra, els tallants Vz i Vy, els moments flectors My i Mz, la torsió T i la seva fletxa, començant pel moment més gran; feu clic al nom d'una barra per seleccionar-la. Sota hi són les reaccions a cada suport. El botó {{ui:On the model}} dibuixa la forma deformada, o una acció com a diagrama al costat de cada barra amb el seu valor màxim escrit a la posició. Els resultats queden desfasats tan bon punt canvia el model: torneu a executar-la.

Cada càrrega, cas i ajust és un pas de desfer ({{key:Mod+Z}}) i es desa al fitxer del model.

## Casos de càrrega i combinacions

L'anàlisi comença amb tres: **Permanent** (el pes propi de les barres, a partir de les seccions dibuixades i 7850 kg/m³), **Sobrecàrrega** (buit) i **Permanent + sobrecàrrega**. Afegiu casos propis (vent, neu…) i combinacions: una combinació suma els casos amb els factors que escriviu. L'anàlisi és lineal, així que cada cas es resol una vegada i les combinacions són sumes. Escriviu vosaltres els factors, o trieu una norma de disseny i deixeu que {{ui:Make combinations}} n'escrigui les de la norma ([Comproveu barres d'acer segons una norma de disseny](topic:design-checks)).

## De què està fet el pòrtic

- Bigues, pilars i reforços diagonals, cadascun sobre la seva línia de treball (la línia que heu dibuixat), amb les propietats reals de la secció calculades a partir del seu contorn. Plaques, escales, sabates i cargols no formen part del pòrtic.
- Una barra es divideix quan l'extrem d'una altra barra hi arriba; així, una biga que arriba a un pilar a mitja altura s'hi uneix allà.
- **Bases de pilar**: encastades (l'inici) o articulades (subjectes i impedits de girar, lliures de rotar). Una placa de base sempre fa de suport.
- **Extrems de biga**: una placa d'extrem és rígida, una placa de tallant és articulada. {{ui:Beam ends with no connection}} fixa la resta. Els **reforços diagonals** són articulats a tots dos extrems.
- Seleccioneu una barra per donar als seus extrems, o a la base d'un pilar, una regla pròpia.
- Acer a tot arreu: E = 200 GPa, G = 77 GPa.

Si el pòrtic es pot moure sense doblegar res —un mecanisme, com ara bases articulades sense reforços en una direcció— l'execució s'atura i indica on i en quina direcció; subjecteu-lo amb un suport, una unió rígida o un reforç diagonal.

## Signes

N > 0 és tracció. My > 0 posa en tracció el costat −z local de la barra: una biga que es flecta sota la gravetat té My > 0. Mz > 0 posa en tracció el costat −y local. La fletxa es mesura respecte a la recta entre els extrems de la barra. El z local d'una barra apunta amunt (per a un pilar: al llarg de X); els seus eixos locals giren amb la rotació de la barra.

## L'informe

{{ui:Report (PDF)}} i {{ui:Report (CSV)}} ho contenen tot: les hipòtesis en què s'ha construït el pòrtic, les seccions, els casos i les combinacions, i després, per a cada cas i combinació, les reaccions (amb les sumes de càrregues i reaccions, que s'equilibren), els esforços de les barres i els desplaçaments, i una envolupant de cada cas. {{ui:Export as CraftScript}} escriu el mateix pòrtic com a script per a l'espai de treball Script de PartCraft, on la funció de biblioteca `frame3d` el resol pas a pas en codi llegible.

## Mètode

El mètode de la rigidesa directa, lineal i de primer ordre tret que marqueu *Segon ordre (P-Delta)*: elements de biga-pilar de dos nodes amb rigideses axial, de torsió i de flexió en dues direccions (sense deformació per tallant ni alabeig), alliberaments d'extrem per condensació estàtica, càrregues al llarg de les barres mitjançant les seves pròpies funcions de forma. Les respostes es comproven amb els casos clàssics de llibre de text (bigues en voladís, simplement suportades, encastades i contínues, un pòrtic, una graella en torsió, una gelosia).

**Segon ordre (P-Delta).** Marqueu *Segon ordre (P-Delta)* al costat d'Executa: cada combinació es torna a resoldre amb els esforços axials de les barres actuant sobre el pòrtic deformat (cada barra es talla en 4 trossos, de manera que també compta la flexió d'una barra entre els seus extrems), fins que els esforços axials s'estabilitzen. La línia de resultat dona el nombre de passades i quant ha crescut el desplom. Els moments, les fletxes, les comprovacions de disseny i l'informe usen aleshores aquests resultats. Per sobre de la càrrega crítica elàstica del pòrtic l'execució s'atura i ho indica. És elàstic amb rotacions petites, només flexional, sense reducció de rigidesa ni càrregues nocionals (no és el mètode d'anàlisi directa de l'AISC per si sol); les lloses, els murs i els sostres rígids es mantenen de primer ordre.

**Freqüències pròpies (elements finits).** El bloc {{ui:Finite elements: natural frequencies}} sota els resultats troba els modes més baixos del mateix model amb el motor d'elements finits: bigues amb els seus alliberaments d'extrem, lloses i murs com a closques planes de quatre nodes, sostres rígids, suports. Trieu quants modes (3, 6, 10 o 20) i l'element de la llosa (la closca de quatre nodes per a lloses gruixudes o primes, o la de llosa prima) i premeu {{ui:Find the frequencies}}. La taula dona la freqüència de cada mode en Hz, el seu període en segons i la seva massa modal efectiva en X, Y i Z com a part de la massa que pot moure's. {{ui:Show on the model}} dibuixa qualsevol mode de la mateixa manera que es dibuixa la forma deformada. La massa és la densitat del material per volum: les càrregues no afegeixen massa, i un material sense densitat no en té. L'informe (PDF, CSV) porta la taula. És elàstic i només per a moviments petits, i no es genera aquí cap càrrega sísmica o de vent d'una norma. No és una comprovació normativa; el vostre enginyer revisa els resultats.

**Espectre de resposta, historial temporal i pushover.** Hi ha tres blocs més sota les freqüències, amb el mateix model d'elements finits. La massa per a tots és la densitat del material més les càrregues descendents dels casos que marqueu, cadascuna multiplicada per un factor que escriviu (per exemple Permanent a 1 i Sobrecàrrega a la part que compteu com a massa).

{{ui:Response spectrum}} llegeix cada mode a partir d'un espectre que doneu (una taula de període i acceleració, o la forma de l'ASCE 7 a partir de SDS, SD1 i TL; el botó {{ui:Use the Seismic block values}} copia aquests valors del bloc Sísmic) i combina els modes per CQC, SRSS, la regla del deu per cent o una suma absoluta, i després reuneix les direccions X, Y i Z (100 % + 30 % o SRSS). Dona el tallant de base, les derives per planta, els esforços d'extrem de barra i una taula de modes que avisa quan els modes usats porten menys del 90 % de la massa. Podeu escalar els resultats per un factor o fins a un tallant de base que escriviu; el bloc mai no calcula aquest tallant de base per si mateix. Els resultats no tenen signe.

{{ui:Time history}} executa una acceleració del terreny per superposició modal (exacta per a les rectes del registre entre punts) o per integració directa (acceleració mitjana de Newmark amb amortiment de Rayleigh). L'entrada és un sinus o un impuls inventats (sempre etiquetats com a sintètics), un registre que enganxeu, o un fitxer de text que obriu (temps i acceleració, una acceleració per línia amb un pas, o un fitxer d'estil PEER amb una capçalera DT=; en g o m/s²). Dona el desplaçament del coronament i el tallant de base en funció del temps, la deriva de cada nivell, i l'envolupant dels esforços d'extrem de barra. Els models amb un registre molt llarg el conserven només per a la sessió.

{{ui:Pushover}} empeny el coronament lateralment en passos petits (patró com el primer mode, o uniforme), amb ròtules plàstiques als extrems de les barres que tenen un perfil en I. Una ròtula cedeix al moment plàstic, que baixa a mesura que creix l'esforç axial (calculat a partir de la forma dibuixada, ignorant els acords); l'enduriment és opcional, el P-delta és opcional, i es pot aplicar primer una combinació de gravetat. Dona la corba de capacitat (tallant de base en funció del desplaçament del coronament), la primera ròtula, i l'estat i la rotació plàstica de cada ròtula. {{ui:Run the nonlinear time history}} executa les mateixes ròtules sota el registre del bloc Historial temporal en models petits. Les ròtules només es formen als extrems de les barres (poseu un node on n'hi hagi d'haver una dins d'una llum); una barra alliberada en els dos extrems no en rep cap, i no es modelitzen el cedeix ni el vinclament dels reforços diagonals; les lloses i els murs es mantenen elàstics; no es donen criteris d'acceptació. No és una comprovació normativa; el vostre enginyer revisa els resultats. Els ajustos es desen amb el model, i l'informe porta les taules.

Encara no implementat: l'anàlisi de vinclament, una correcció de massa que falta per a l'espectre de resposta, l'escalat de registres, criteris d'acceptació per a ròtules (la resposta dinàmica hi és, més amunt), les càrregues d'àrea i de vent generades automàticament (les forces sísmiques sobre els sostres són a [Comproveu elements de formigó i genereu càrregues sísmiques](topic:concrete-and-seismic)), les excentricitats de barra, els reforços diagonals que només treballen a tracció. Vegeu [Encara no implementat](topic:not-built-yet).
