---
title: Copia, enganxa i duplica
summary: Seleccioneu diverses peces, copieu-les amb els seus forats, retalls i connexions, i enganxeu-les en una intersecció de la quadrícula, amb un desfasament, al mateix lloc o en una altra pestanya. Retalleu, duplicau, suprimiu i seleccioneu-ho tot.
keywords: copia, enganxa, retalla, duplica, porta-retalls, enganxa al mateix lloc, selecciona-ho tot, neteja la selecció, selecció múltiple, clic amb Shift, diverses, repeteix una crugia, copia un pòrtic, desfasament, suprimeix diverses, menú Edita, menú Més
from: f25f1829
---

El grup {{ui:Edit}} de la barra d'eines té {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} i {{ui:Paste}}. El seu menú {{ui:More}} conté la resta: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} i {{ui:Select none}}, cadascun amb la seva tecla. Un botó o un element de menú que no pot actuar en aquell moment apareix atenuat; passeu-hi el punter per llegir-ne el motiu (per exemple, "encara no s'ha copiat res").

Cada enganxada, retallada, duplicació i supressió és un sol pas: un {{key:Mod+Z}} ho desfà tot.

## Selecciona diverses peces

- Feu clic en una peça per seleccionar-la. Mantingueu premut {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) i feu clic en més peces per afegir-les; feu clic en una de seleccionada de la mateixa manera per treure-la.
- {{key:Mod+A}} o {{ui:Select all}} selecciona cada barra, connexió i fonamentació.
- {{key:Esc}} o {{ui:Select none}} neteja la selecció.

Amb diversos elements seleccionats, el tauler {{ui:Properties}} porta com a encapçalament "4 seleccionats" (o el nombre que sigui) i enumera les barres per tipus, les connexions, les fonamentacions i el pes brut de l'acer, amb els botons {{ui:Copy}}, {{ui:Duplicate}} i {{ui:Delete}}.

## Copia

1. Seleccioneu les barres i les fonamentacions que voleu.
2. Trieu {{ui:Copy}} o premeu {{key:Mod+C}}.

Què s'hi emporta:

- Cada barra sencera: perfil, material, extrems, posició, rotació, nom, forats i retalls. També s'hi copia qualsevol perfil personalitzat que utilitzi.
- Cada fonamentació sencera: mides, formigó, malla inferior i barres d'arrencada.
- Plaques d'extrem i plaques de base, però només quan es copien totes les barres que uneix una connexió: la placa d'extrem d'una biga necessita la biga i el seu pilar. La barra d'estat indica quantes connexions han quedat fora. Per deixar connexions fora a propòsit, desmarqueu **Copia les plaques d'extrem i de base amb les seves barres** a la [Configuració de DetailCraft](topic:settings).

Una connexió sola no es pot copiar; seleccioneu-ne les barres. Per donar a altres unions la mateixa connexió, useu {{ui:Similar}} (vegeu [Plaques d'extrem](topic:end-plates#copy-it-to-every-similar-joint)).

La còpia es manté en aquest navegador fins que copieu una altra cosa. Una altra pestanya o finestra de DetailCraft del mateix navegador la pot enganxar, de manera que podeu copiar un pòrtic d'un model i enganxar-lo en un altre.

## Enganxa en una intersecció de la quadrícula

1. Trieu {{ui:Paste}} o premeu {{key:Mod+V}}.
2. Mogueu el punter sobre la vista. Un contorn de línia discontínua de la còpia segueix la intersecció de la quadrícula més propera al punter.
3. Feu clic en una intersecció. El punt base de la còpia (la seva cantonada més baixa: les coordenades x, y i z més petites de tot el que s'ha copiat) s'hi situa.

Les peces enganxades queden seleccionades després, de manera que podeu tornar a enganxar en un altre lloc o modificar-les. {{key:Esc}} cancel·la una enganxada; la còpia es manté al porta-retalls. {{ui:Plan}} i {{ui:Elevation}} faciliten encertar la intersecció adequada.

:::tip
Per repetir una crugia, seleccioneu les barres de la crugia (o tot amb {{key:Mod+A}}), copieu, enganxeu i feu clic a la intersecció una crugia més enllà d'on era la cantonada més baixa de la còpia.
:::

## Enganxa des del teclat

Mentre s'enganxa, el tauler {{ui:Properties}} mostra què hi ha al porta-retalls i dos formularis:

- {{ui:Paste by offset (mm, from the original)}}: escriviu x, y i z i trieu {{ui:Paste at this offset}}. Comença amb el desfasament de la [Configuració de DetailCraft](topic:settings).
- {{ui:Paste onto a grid intersection}}: trieu una quadrícula de lletres, una quadrícula de números i un nivell, i trieu {{ui:Paste here}}. El punt base hi va.

## Enganxa al mateix lloc

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) posa la còpia exactament a les coordenades des de les quals es va copiar. Useu-la després de {{ui:Cut}}, o per portar peces d'un altre model al mateix lloc. Si els originals encara hi són, la còpia queda a sobre d'ells i la barra d'estat n'avisa: moveu les còpies pels seus {{ui:Start}} i {{ui:End}} al tauler {{ui:Properties}}, o desfeu-ho.

## Duplica

{{ui:Duplicate}} ({{key:Mod+D}}) copia la selecció i l'enganxa de seguida, desplaçada pel desfasament de la [Configuració de DetailCraft] (6000 mm al llarg de x com a valor inicial). No canvia el que hi ha al porta-retalls. Les còpies queden seleccionades després, de manera que si premeu {{key:Mod+D}} de nou, se'n fa una altra a partir d'elles.

## Retalla i suprimeix

- {{ui:Cut}} ({{key:Mod+X}}) copia la selecció i després la suprimeix. Enganxeu-la on pertoca.
- {{ui:Delete}} ({{key:Delete}} o {{key:Backspace}}) suprimeix la selecció. Suprimir una barra suprimeix també les seves connexions.

## Marques després d'enganxar

Les marques de peça i de conjunt mai no s'emmagatzemen; DetailCraft les torna a numerar a partir del model després de cada canvi ([Com es donen les marques](topic:mark-rules)). Així doncs:

- Una còpia que és la mateixa peça que l'original (mateix perfil, qualitat, longitud de tall, forats i retalls) comparteix la marca de l'original, i el recompte de {{ui:Part marks}} i de la llista de materials augmenta.
- Una còpia que resulta diferent rep una marca pròpia. Per exemple, una biga enganxada sense les seves plaques d'extrem no es retalla, de manera que és una peça diferent. Les marques es tornen a numerar en tot el model, de manera que els números d'altres peces també poden canviar.

Cada barra, forat, retall, connexió i fonamentació enganxats rep un identificador nou, de manera que mai no es comparteix res del model entre una còpia i el seu original.

## Si el porta-retalls és rebutjat

Tot el que hi ha al porta-retalls es verifica amb la mateixa cura que un fitxer de model que obriu: qualsevol cosa que no sigui una peça vàlida de DetailCraft s'elimina, i la barra d'estat indica què ha passat. Un porta-retalls omplert per una versió més nova de DetailCraft, o per una altra cosa, es rebutja amb un missatge i no s'enganxa res. Si una finestra privada no pot guardar la còpia a l'emmagatzematge del navegador, la còpia continua funcionant en aquella pestanya.
