---
title: Menús, tecles i ratolí
summary: Trieu un estil de menús que encaixi amb la manera com ja treballeu, doneu a qualsevol comanda la vostra pròpia tecla, moveu comandes entre les pestanyes de la cinta i definiu què fan la roda i els botons del ratolí.
keywords: estil de menús, menús, cinta, barra d'eines, línia d'ordres, dreceres de teclat, dreceres, tecles, personalitza, reassigna, reassignar, ratolí, roda, inverteix, sentit del zoom, botó del mig, botó dret, desplaça, òrbita, exporta, importa, canviar, familiar, dibuix clàssic, cinta d'acer
from: 4132c6e5
---

Les comandes de DetailCraft són les mateixes sigui quina sigui la manera d'arribar-hi. Un **estil de menús** només decideix on es situen a la pantalla, com es diuen allà i quines tecles les executen. Trieu-ne un a {{ui:Configuració}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menús, tecles i ratolí}}; el canvi és immediat, i aquest navegador el recorda.

## Els tres estils

| Estil | Què obteniu |
|---|---|
| {{ui:DetailCraft}} | La barra d'eines pròpia de DetailCraft (Fitxer, Col·loca, Connecta, Edita, Sortida) i les seves tecles d'una sola lletra: {{key:V}} selecciona, {{key:B}} biga, {{key:C}} columna, {{key:R}} reforç diagonal, {{key:P}} placa, {{key:F}} sabata, {{key:S}} escala. És l'estil d'inici. |
| {{ui:Dibuix clàssic}} | Per a qui escriu ordres: una cinta petita ({{ui:Inici}}, {{ui:Vista}}, {{ui:Sortida}}) i una línia d'ordres. Escriviu BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (desfer), ZOOM, PLAN, 3D, DRAWINGS, NC o HELP i premeu {{key:Enter}}; {{key:Enter}} sobre res repeteix l'última ordre, {{key:Esc}} la neteja. Comenceu a escriure en qualsevol lloc i les lletres van a la línia d'ordres. El botó del mig desplaça; en 3D, {{key:Shift}} i el botó del mig fan òrbita. |
| {{ui:Cinta d'acer}} | Pestanyes com les organitzen els programes de detallat d'acer: {{ui:Modelatge}} (barres, formigó, escales), {{ui:Detallat}} (connexions), {{ui:Edita}}, {{ui:Plànols}} (plànols i informes), {{ui:Fabricació}} (fitxers NC, IFC) i {{ui:Vista}}, amb un menú {{ui:Fitxer}} i botons ràpids a la dreta. Les tecles d'una sola lletra es mantenen. El botó del mig desplaça; en 3D, el botó esquerre fa òrbita. |

Cada estil manté {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} i {{key:Mod+A}}. Les cintes també porten {{ui:3D}}, {{ui:Planta}}, {{ui:Alçat}} i {{ui:Ajusta}} de la barra de vista.

:::tip
Una tecla que pertany al disseny propi de DetailCraft però que el vostre estil ha donat a una altra comanda no fa res, i la línia d'estat indica on ha anat a parar la seva comanda ("A La meva cinta d'acer, Pilar és Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i les fletxes sempre mantenen el seu significat, i mentre una barra està a mig col·locar o una còpia segueix el punter, les lletres pertanyen a DetailCraft.
:::

## Fes-lo teu

1. Trieu l'estil més proper al que voleu i després cliqueu {{ui:Personalitza…}}.
2. A {{ui:Tecles i menús}}, cerqueu una comanda (el quadre de cerca ajuda). Cliqueu {{ui:Afegeix una tecla}} i premeu la tecla, o dues tecles seguides per a una tecla de dues lletres. Cliqueu una tecla per treure-la.
3. Amb una cinta, {{ui:On es troba}} mou la comanda a una altra pestanya i panell, al menú {{ui:Fitxer}}, o a {{ui:Només tecles}}.
4. A {{ui:Ratolí}}, definiu la roda, els botons que desplacen els plans i els alçats, i què fa cada botó a la vista 3D.
5. Doneu-li un nom i cliqueu {{ui:Desa}}.

Desar un estil integrat en fa una còpia pròpia ("La meva cinta d'acer"); l'integrat no canvia mai. Una tecla assignada a dues comandes es mostra en vermell i s'ha de corregir abans de poder desar.

## Ratolí

- **Roda del ratolí**: {{ui:Desplaçar amunt apropa}} (per defecte) o {{ui:Desplaçar amunt allunya}}, i quina velocitat. Una pinça al trackpad sempre fa zoom en la direcció en què es mouen els dits.
- **Desplaça els plans i els alçats amb**: el botó del mig, el botó dret, o tots dos. Amb l'eina Selecciona, el botó esquerre sempre dibuixa una finestra de selecció.
- **Arrossegar a la vista 3D**: {{ui:Propi de cada vista}} manté els botons de DetailCraft (l'esquerre fa òrbita, el del mig fa zoom, el dret desplaça). O assigneu a cada botó òrbita, desplaçament, zoom o res; {{key:Shift}} amb un botó que fa òrbita o desplaça intercanvia els dos.

## Porta l'estil a un altre ordinador

{{ui:Exporta}} desa l'estil en ús com un petit fitxer `.ccinput.json`; {{ui:Importa…}} n'afegeix un, des d'un altre ordinador o d'un company. Un fitxer importat només pot apuntar a les comandes pròpies de DetailCraft: qualsevol altra cosa que hi hagi es deixa fora i es compta a la línia d'estat. {{ui:Suprimeix aquest estil}} elimina un de vostre.

:::note
Aquests ajustos es queden en aquest navegador. {{ui:Usa aquest estil a totes les aplicacions}} sota les targetes d'estil fa que totes les aplicacions s'obrin amb el seu estil corresponent (la seva barra d'eines, una cinta o Dibuix clàssic), amb els canvis que hàgiu fet a cada aplicació. DetailCraft no té un estil de barra de menús: quan es tria la barra de menús d'una altra aplicació per a totes les aplicacions, DetailCraft manté la seva pròpia barra d'eines.
:::

Relacionat: [Teclat i ratolí](topic:keyboard) · [Configuració de DetailCraft](topic:settings) · [Des d'altres programes de detallat](topic:coming-from)
