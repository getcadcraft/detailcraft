---
title: Comprova barres de formigó i fes càrregues sísmiques
summary: Configureu les armadures de bigues i pilars de formigó, comproveu-les segons ACI 318-19, calculeu les forces laterals equivalents segons ASCE 7-22 en forjats rígids, i vegeu la deriva de planta. Una ajuda perquè un enginyer ho revisi.
keywords: formigó, formigó armat, ACI 318, ACI 318-19, armadura, biga, pilar, cisallament, cèrcols, sísmic, terratrèmol, força lateral equivalent, ELF, ASCE 7-22, deriva, deriva de planta, forjats, diafragma rígid, pes de planta, utilització, estructural, enginyer
from: 94d3001d
---

Els blocs {{ui:Barres de formigó}} i {{ui:Càrregues sísmiques}} de la pestanya {{ui:Anàlisi}} comproven bigues i pilars de formigó armat, i calculen les forces laterals d'un terratrèmol sobre els forjats d'un pòrtic. Tots dos segueixen l'execució de la pestanya {{ui:Anàlisi}} i es desen amb el model.

:::warning
Els resultats són **per a la comprovació d'un enginyer**: una ajuda fins que n'hagi revisat un. Les comprovacions de formigó fan servir forces de primer ordre, excepte que un pilar en un pòrtic que definiu com a no desplaçable es dimensiona pel seu moment amplificat, sense amplificació per desplaçament, sense disseny a torsió, sense detallat sísmic (capítol 18 de l'ACI) i sense detallat de cèrcols. Les càrregues sísmiques deixen fora el factor de redundància, l'efecte sísmic vertical, l'amplificació per torsió i els efectes P-delta. Les càrregues de vent encara no estan implementades.
:::

## Dibuixeu les barres

Dibuixeu les peces de formigó com a rectangles: un perfil {{ui:Placa}} com `PL400x400` per a un pilar i `PL300x600` per a una biga en dona la secció. Els pilars i les bigues es col·loquen com qualsevol altra barra.

## Configureu les seccions

El bloc {{ui:Barres de formigó}} llista cada secció que usen les barres. Premeu {{ui:Configura com a formigó…}} a les que són de formigó. DetailCraft llegeix l'amplada **b** (al llarg de l'eix y propi de la barra) i la fondària **h** (al llarg de z) del perfil dibuixat, i després demana:

- el **recobriment** fins al centre de les barres, i les barres de **dalt**, de **baix** i **laterals** (quantes i quin diàmetre) per a una biga, o una **gàbia de pilar** (barres al llarg de b i de h, quin diàmetre, cèrcols helicoïdals) per a un pilar;
- els **cèrcols**: branques, diàmetre i separació;
- quina **funció** fa la barra: biga, pilar, o decidit a partir de les seves forces (una barra vertical, o una que porti més de 0.10 f′c Ag, és un pilar).

Definiu f′c, el límit elàstic de les barres fy i el del cèrcol fyt (fins a 420 MPa compten per al cisallament), K i si el pòrtic és desplaçable o no desplaçable a sobre d'aquests. Una secció configurada com a formigó s'analitza com a formigó: E = 4700 √f′c, 2400 kg/m³, i per defecte amb **seccions fissurades** (pilars 0.70 Ig, bigues 0.35 Ig; ACI 318-19 taula 6.6.3.1.1(a)). Trieu {{ui:Seccions brutes}} per desactivar-ho.

## Feu les combinacions i comproveu

Doneu a cada cas de càrrega el seu tipus, i després {{ui:Fes les combinacions}}: l'ACI 318-19 pren les combinacions de resistència de l'ASCE 7 (§5.3.1). Premeu {{ui:Comprova el formigó}} i cada barra rep una utilització, acolorida al model igual que les comprovacions d'acer: flexió i armadura mínima (22.2, 9.6.1.2), deformació controlada per tracció (9.3.3.1), cisallament amb els cèrcols (22.5, 9.6.3), separació de cèrcols, i càrrega axial amb moment per als pilars (22.4, amb el mètode de Bresler per a flexió biaxial). Una barra on la secció dibuixada difereix de la b × h que heu escrit apareix com a *parcialment comprovat*, igual que un pilar esvelt o una torsió per sobre del llindar: aquests no es dimensionen.

Les barres que superen la seva capacitat es llisten a {{ui:Problemes}}; accepteu-ne una amb un motiu, o corregiu la secció.

## Forjats i càrregues sísmiques

Un forjat és un nivell on el pòrtic queda lligat per una llosa rígida (un **diafragma rígid**). Al bloc {{ui:Càrregues sísmiques}} premeu {{ui:Cerca forjats}}: pren els nivells on hi ha dues o més bigues. Després doneu a cada forjat el seu **pes sísmic**, escrit o llegit: {{ui:Pren els pesos dels casos}} suma les càrregues verticals dels casos als quals doneu un factor (el cas permanent és 1; afegiu 0.25 en un cas de sobrecàrrega d'emmagatzematge o neu en una coberta plana, tal com demana l'ASCE 7-22 12.7.2). La càrrega vertical de cada node va al forjat que hi és a sobre o a la mateixa alçada, de manera que un pilar entre dos forjats en dona la meitat a cadascun.

Ompliu els valors de disseny: SDS, SD1, S1, R, Ie, Cd, TL, el sistema estructural (per al període) i la categoria de risc. {{ui:Fes els casos sísmics}} llavors calcula el període a partir de l'alçada de l'edifici (12.8.2.1), el cisallament de base V = Cs W (12.8.1), el reparteix entre els forjats (12.8.3) i escriu quatre casos de càrrega, en X i en Y amb el 5 % de torsió accidental en cada sentit (12.8.4.2). Les forces de planta i la comprovació de deriva de planta (12.8.6, taula 12.12-1, la deriva Cd δxe / Ie contra 0.020 hsx) apareixen després d'una execució; una deriva per sobre del seu límit també és un problema. Premeu un altre cop {{ui:Fes les combinacions}} per incloure els casos sísmics a les combinacions.

**El període de l'anàlisi.** El període aproximat Ta surt de l'alçada de l'edifici. Quan heu executat l'anàlisi amb els casos sísmics, {{ui:Pren el període de l'anàlisi}} llegeix quant es mou cada forjat sota les forces i calcula el període pel mètode de Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), una vegada per a X i una altra per a Y; els casos sísmics es tornen a fer amb ell. El període usat no és mai més gran que Cu·Ta (ASCE 7-22 12.8.2), així que un model tou no pot reduir el cisallament de base per sota d'aquest valor. Torneu a prendre el període després de la segona execució: s'estabilitza en un o dos passos. Desmarqueu {{ui:Període de l'anàlisi}} per tornar a Ta.

**Pilars esvelts (ACI 318-19 6.6.4.5).** Per a un pòrtic que definiu com a no desplaçable, un pilar amb k·ℓu/r per sobre de 34 + 12·M1/M2 (com a màxim 40) es dimensiona pel moment amplificat Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² amb (EI)eff = 0.4 Ec Ig / (1 + βdns), i el moment mínim Pu (15 + 0.03 h). βdns (0.6 al principi) és la part de la càrrega axial majorada que és sostinguda: escriviu la vostra. Un pilar en què Pu arriba a 0.75 Pc falla amb la seva pròpia comprovació. L'informe llista els números de cada pilar esvelt. En un pòrtic **desplaçable** un pilar esvelt continua "parcialment comprovat": la seva amplificació necessita una anàlisi de segon ordre, que encara no està implementada.

**Llosses.** Quan el model té plaques, un bloc {{ui:Armadura de llosa}} pren els moments de placa de cada combinació de resistència i, per la regla de Wood–Armer (flexió i torsió juntes), calcula l'acer que necessita cada capa per metre: inferior i superior, en x i en y. Doneu el gruix, el recobriment i les barres; la taula mostra l'acer necessari comparat amb el donat i el cisallament en una direcció contra φVc, i una capa que no arriba és un problema amb la seva clàusula. No es cobreix la fletxa, el punxonament als pilars ni les barres de reforç als buits, i un moment sobre un suport convergeix lentament amb plaques de quatre nodes.

Cada forjat que llisteu esdevé un diafragma rígid a l'anàlisi: les seves bigues no porten força axial pel moviment del forjat. L'exportació de CraftScript no es fa per a un model amb forjats.

## L'informe

{{ui:Informe (PDF)}} i {{ui:Informe (CSV)}} incorporen les taules de formigó (hipòtesis, utilització per barra, cada clàusula), els paràmetres sísmics i el cisallament de base, les forces als forjats i la taula de deriva.
