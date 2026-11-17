---
title: Col·locar pilars, bigues i reforços diagonals
summary: Trieu un perfil, un material i una posició, i després feu clic a les interseccions de la quadrícula o escriviu-les per col·locar barres d'acer.
keywords: pilar, biga, reforç diagonal, barra, col·locar, perfil, material, rotació, posició, desplaçament, inserir, afegir per quadrícula
from: d6db0dc1
---

Les barres es col·loquen a les interseccions de la quadrícula: un pilar sobre una, una biga o un reforç diagonal entre dues. Configureu primer les [quadrícules i els nivells](topic:grids-and-levels).

## Triar una eina i les seves opcions

1. Trieu {{ui:Pilar}} ({{key:C}}), {{ui:Biga}} ({{key:B}}) o {{ui:Reforç diagonal}} ({{key:R}}) al grup {{ui:Col·loca}}.
2. El tauler {{ui:Propietats}} de la dreta passa a ser "Col·loca un pilar" (o biga, o reforç diagonal) i mostra les opcions de la següent barra:
   - {{ui:Perfil}}: trieu-ne un de la llista. Les mides s'agrupen per catàleg (perfils W, canals, cornières, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS i els vostres perfils personalitzats). Vegeu [Catàleg de perfils](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 o S355.
   - {{ui:Posició}}: on es col·loca la secció a la línia entre els dos punts: {{ui:Cara superior de l'acer sobre la línia}}, {{ui:Centrat sobre la línia}} o {{ui:Cara inferior sobre la línia}}.
   - {{ui:Rotació (°)}}: gira la secció sobre el propi eix de la barra.
   - {{ui:Fins a}} (només pilars): {{ui:El nivell següent}}, o el nom d'un nivell.
3. Sota les opcions, un quadre {{ui:Perfil}} enumera les dimensions de la secció triada, l'àrea, la massa per metre i el catàleg d'on prové.

Els valors per defecte són W12x50 en A992 per als pilars (centrat), W16x26 en A992 per a les bigues (cara superior de l'acer sobre la línia) i HSS6x6x1/4 en A500 Gr C per als reforços diagonals (centrat). Les opcions es mantenen fins que les canvieu.

## Col·locar fent clic

### Un pilar

1. Trieu {{ui:Planta}} i seleccioneu el nivell on comença el pilar.
2. Trieu {{ui:Pilar}}.
3. Mogueu el punter a prop d'una intersecció. El punt més proper s'il·lumina i la barra d'estat n'indica el nom.
4. Feu clic. El pilar va d'aquest nivell fins al següent (o fins al nivell de {{ui:Fins a}}). La barra d'estat diu, per exemple, "Pilar W12x50 a A/1, del Nivell 1 al Nivell 2."
5. Seguiu fent clic per col·locar-ne més. Premeu {{key:Esc}} quan acabeu.

Si no hi ha cap nivell per sobre del que heu clicat, la barra d'estat diu "No hi ha cap nivell per sobre del Nivell 2 que el pilar pugui assolir. Afegiu-hi un nivell primer."

### Una biga

1. Trieu {{ui:Planta}} i seleccioneu el nivell de la biga.
2. Trieu {{ui:Biga}}.
3. Feu clic a la primera intersecció. La barra d'estat diu "Des de A/1 al Nivell 2. Ara feu clic a l'altre extrem (Esc cancel·la)." Una línia de traços segueix el punter.
4. Feu clic a la segona intersecció. Apareix la biga.
5. Torneu a fer clic per començar la següent biga, o premeu {{key:Esc}}.

Després del primer clic, {{key:Esc}} cancel·la només aquell punt; un segon {{key:Esc}} guarda l'eina.

### Un reforç diagonal

Un reforç diagonal va entre dues interseccions de nivells diferents, de manera que és més fàcil a {{ui:Alçat}}.

1. Trieu {{ui:Alçat}} i seleccioneu la línia de quadrícula amb lletra on és el reforç diagonal.
2. Trieu {{ui:Reforç diagonal}}.
3. Feu clic a l'extrem inferior i, després, a l'extrem superior.

Els alçats només existeixen per a les línies de quadrícula amb lletra. Per a un reforç diagonal d'un pòrtic al llarg d'una línia numerada (de A a B), useu {{ui:3D}} o el formulari {{ui:Afegeix per quadrícula}} de sota.

:::touch
A la pantalla tàctil, toqueu a prop de la intersecció: un toc tria el punt més proper a poca distància i no fa res si no n'hi ha cap a prop. No hi ha ressaltat abans de tocar, així que comproveu el missatge de la barra d'estat després de cada toc. Els arrossegaments amb un dit giren o desplacen la vista en lloc de col·locar.
:::

## Col·locar per quadrícula, sense fer clic

Totes les eines de col·locació tenen un formulari {{ui:Afegeix per quadrícula}} a la part inferior del tauler {{ui:Propietats}}. Funciona només amb el teclat i no necessita la vista 3D.

1. Trieu l'eina, per exemple {{ui:Biga}}.
2. A {{ui:Afegeix per quadrícula}}, trieu {{ui:Des de la quadrícula (lletra)}}, {{ui:Des de la quadrícula (número)}} i {{ui:Des del nivell}}.
3. Trieu {{ui:Fins a la quadrícula (lletra)}}, {{ui:Fins a la quadrícula (número)}} i {{ui:Fins al nivell}}.
4. Trieu {{ui:Afegeix}}.

Per a un pilar o una sabata, el formulari només té un punt: {{ui:Quadrícula (lletra)}}, {{ui:Quadrícula (número)}} i {{ui:Nivell}}.

## Canviar una barra després de col·locar-la

1. Premeu {{key:Esc}} (o trieu {{ui:Selecciona}}, {{key:V}}) i feu clic a la barra.
2. Al tauler {{ui:Propietats}}, canvieu {{ui:Nom}}, {{ui:Perfil}}, {{ui:Material}}, {{ui:Posició}} o {{ui:Rotació (°)}}.
3. Per moure-la, editeu la x, la y i la z de {{ui:Inici}} o {{ui:Final}} sota {{ui:Extrems (x, y, z mm)}}. El nom de la quadrícula de cada extrem es mostra a sota, o les seves coordenades quan és fora de la quadrícula.

Cada canvi és un sol pas de desfer. Sota els camps veureu la marca de peça, el {{ui:Conjunt}}, la {{ui:Longitud de tall}}, el {{ui:Pes}} (brut: no es descompten els forats ni les osques) de la barra i de quin catàleg prové el perfil.

Encara no es poden arrossegar ni fer matrius de barres. Per fer-ne una altra igual, copieu-la i enganxeu-la, o dupliqueu-la ({{key:Mod+D}}): vegeu [Copiar, enganxar i duplicar](topic:copy-paste).

## Suprimir una barra

Seleccioneu-la i premeu {{key:Delete}} o {{key:Backspace}}, o trieu {{ui:Suprimeix}}. Les connexions que hi hagi també se suprimeixen. {{key:Mod+Z}} ho recupera tot.

## Coses a saber

- **Cap a on mira un pilar.** Amb {{ui:Rotació (°)}} 0, les ales d'un pilar miren al llarg de x, cap a les línies de quadrícula numerades veïnes. Una biga de la quadrícula 1 a la 2 s'hi connecta a una ala; una biga de A a B s'hi connecta a l'ànima. Les plaques d'extrem només es construeixen a les ales, de manera que si les bigues van de A a B, doneu a aquests pilars una rotació de 90.
- **Les bigues d'un nivell pengen per sota** amb el valor per defecte {{ui:Cara superior de l'acer sobre la línia}}. Trieu {{ui:Centrat sobre la línia}} si els vostres nivells són eixos de barra.
- **Els pilars van de nivell a nivell.** Per a un pilar que travessa dues plantes, poseu {{ui:Fins a}} al nivell més alt.
- **Les bigues inclinades** són permeses (trieu extrems a nivells diferents), però encara no s'hi construeixen plaques d'extrem.

Següent: [Connectar bigues a pilars amb plaques d'extrem](topic:end-plates).
