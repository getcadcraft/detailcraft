---
title: Configuració de DetailCraft
summary: Iniciar les peces noves com a perfils nord-americans o europeus, establir la distància que es desplaça una còpia amb Duplica, triar si les còpies porten les seves connexions, i mostrar o amagar els cargols a la vista 3D.
keywords: configuració, preferències, mida del full, mida de paper, plànols, opcions, acer, aisc, en, europeu, perfils nord-americans, perfils mètrics, perfil per defecte, qualitat, s355, a992, desplaçament del duplicat, desplaçament de l'enganxat, copiar connexions, cargols, barres d'ancoratge, amagar cargols, restablir
from: e46cea57
---

Obriu {{ui:Configuració}} amb l'engranatge de la barra de l'aplicació o amb {{key:Mod+,}}. La primera pestanya, {{ui:DetailCraft}}, conté la configuració pròpia d'aquesta aplicació; {{ui:General}} conté la que comparteixen totes les aplicacions de CadCraft (tema, barra d'eines, taulers). La configuració de DetailCraft només existeix dins de l'aplicació: la canvieu aquí, té efecte immediat, i aquest navegador la recorda. No es desa al fitxer del model.

## Peces noves

Quins perfils i qualitats usen d'entrada les eines de col·locació:

| Eina | Perfils nord-americans (AISC), A992 | Perfils europeus (EN), S355 |
|---|---|---|
| {{ui:Biga}} | W16x26, A992 | IPE300, S355 |
| {{ui:Pilar}} | W12x50, A992 | HEB200, S355 |
| {{ui:Reforç diagonal}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Placa}} | A36 | S355 |

Els perfils nord-americans són el punt de partida. L'opció europea fa servir un HEA160 per als reforços diagonals, perquè el catàleg EN de DetailCraft encara no té seccions buides ([Catàleg de perfils](topic:profile-catalog)). Encara podeu triar qualsevol perfil i qualitat per a la següent peça al tauler {{ui:Propietats}} mentre una eina de col·locació és activa. Les peces que ja hi ha al model conserven el seu propi perfil i qualitat.

## Duplicat i enganxat

- **Desplaçament (mm)**: x, y i z. {{ui:Duplica}} ({{key:Mod+D}}) posa la còpia a aquesta distància de l'original, i el formulari {{ui:Enganxa per desfasament (mm, respecte de l'original)}} comença amb aquest valor. Comença a 6000, 0, 0: un và de 6 m al llarg de les graelles numerades. Poseu-hi l'espaiat dels vostres vans, o una alçada de nivell a z per copiar un pis amunt.
- **Copia les plaques d'extrem i les de base amb els seus membres** (activat d'entrada): una connexió només s'hi copia quan totes les barres que uneix s'han copiat. Desmarqueu-ho per copiar barres i sabates sense les seves connexions, per exemple per provar una connexió diferent a la còpia.

Vegeu [Copia, enganxa i duplica](topic:copy-paste).

## Vista 3D

**Mostra els cargols i les barres d'ancoratge** (activat d'entrada). Desmarqueu-ho per amagar-los a la vista i veure els forats i les plaques d'una unió atapeïda. Els cargols amagats no es poden clicar; cliqueu la placa per seleccionar la connexió. La llista de materials, els plànols i totes les exportacions continuen incloent cada cargol i cada barra d'ancoratge.

## Indicador de cantonada

Què es mostra a la cantonada de la vista 3D: **Cub de vista** (l'inici; a dalt a la dreta: cliqueu una cara, una aresta o una cantonada per mirar des d'allà, arrossegueu-lo per orbitar, i arrossegueu el seu anell de brúixola per girar el model), **Icona d'eixos** (un petit marcador X, Y, Z a baix a l'esquerra que gira amb la vista: X en vermell, Y en verd, Z en blau) o **Cap**. Només és a {{ui:3D}}; {{ui:Planta}} i {{ui:Alçat}} no en mostren cap dels dos. Vegeu [El cub de vista](topic:view-cube).

## Restablir

{{ui:Restableix la configuració de DetailCraft}} a la part inferior del diàleg la torna a l'inici (perfils nord-americans, desplaçament 6000, 0, 0, connexions copiades, cargols visibles), juntament amb les de {{ui:General}}.

## Plànols

**Mida del full**: els plànols de full i els plànols de taller es fan en horitzontal: A4, A3 (l'inici), A2, A1, ANSI B, ANSI C o ANSI D. Les finestres de {{ui:Plànols}} i de plànol de taller tenen la mateixa llista. Vegeu [Plànols de disposició general i de conjunt](topic:drawings).

## Armadura

- **Noms de barres ASTM**: #3 a #11, o els noms mètrics #10 a #36 per a les mateixes barres.
- **Codis de forma del quadre de doblegat**: els S, L, U de DetailCraft; els tipus de l'ACI 315; o els codis de forma de BS 8666. Vegeu [Referència d'armadures](topic:rebar-reference).

## Arrossegament per seleccionar

**Rectangle** (com abans) o **Llaç**: una línia a mà alçada, amb {{key:Space}} per canviar entre dins, tocant i tanca mentre arrossegueu. Vegeu [Seleccionar amb una finestra](topic:select-and-change#select-with-a-window).
