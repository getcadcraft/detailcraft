---
title: Obre, desa i exporta fitxers
summary: El fitxer de model de DetailCraft, cada exportació que escriu, on van els fitxers i què canvia segons el navegador i la connexió.
keywords: obre, desa, exporta, baixa, fitxer, json, ifc, nc1, dstv, csv, pdf, zip, formats, importa
from: bd715ea3
---

DetailCraft té un fitxer propi, el model, i cinc exportacions. Cada desada i cada exportació és una baixada. No es puja res i no es guarda res en cap servidor.

## El fitxer de model

Un model de DetailCraft es desa com a `<name>.detailcraft.json`, on `<name>` és el nom del model al panell {{ui:Model}}. Conté les quadrícules, els nivells, les barres (amb els seus forats i retalls), les connexions i la seva configuració, les sabates i els perfils personalitzats.

Les peces, les marques, els cargols, les soldadures i les barres d'armadura no es desen: DetailCraft els torna a calcular a partir del model cada cop que l'obre. Per això un fitxer de model és petit.

### Desa

1. Escriviu un nom al camp {{ui:Nom}} de la part superior del panell {{ui:Model}}.
2. Trieu {{ui:Desa}} al grup {{ui:Fitxer}}, o premeu {{key:Mod+S}}.
3. El navegador baixa `<name>.detailcraft.json`. La barra d'estat diu "Desat… (baixat)" i el punt del començament del títol de la pestanya del navegador desapareix.

Cada desada és una baixada nova. El navegador no sobreescriu el fitxer que heu obert: segons la seva configuració, hi afegeix un número, com ara `Frame (1).detailcraft.json`, o us pregunta on el voleu desar. Per guardar les vostres versions, reanomeneu les baixades.

:::chromium
Chrome i Edge desen a la carpeta de Baixades, tret que **Pregunta on desar cada fitxer abans de baixar-lo** estigui activat a la configuració de baixades del navegador. Activeu-ho si voleu triar una carpeta i un nom de fitxer cada vegada.
:::

:::firefox
Firefox desa a la carpeta de Baixades, o pregunta cada vegada si l'opció **Pregunta sempre on desar els fitxers** està activada a la seva configuració.
:::

:::safari
Safari desa a la carpeta de Baixades. Per canviar la carpeta, obriu **Safari, Configuració, General, Ubicació de les baixades de fitxers**.
:::

### Obre

1. Trieu {{ui:Obre}} al grup {{ui:Fitxer}}, o premeu {{key:Mod+O}}.
2. Trieu un fitxer `.detailcraft.json`.

O arrossegueu el fitxer des de {{pick:mac=Finder|windows=Explorador de fitxers|linux=el gestor de fitxers}} i deixeu-lo anar a la vista. La vista diu "Deixeu anar un model de DetailCraft per obrir-lo" mentre l'arrossegueu.

Si el model obert té canvis sense desar, DetailCraft pregunta primer: {{ui:Cancel·la}}, {{ui:Descarta els canvis}} o {{ui:Desa primer}}.

DetailCraft verifica cada camp d'un fitxer abans d'usar-lo. Allò que no pot usar es deixa de banda, i la barra d'estat n'indica el motiu, per exemple "2 barres no eren vàlides i s'han deixat de banda." Un model desat amb una versió més nova de DetailCraft es rebutja amb un missatge, en lloc d'obrir-se a mitges.

### Què obre

Els seus propis fitxers de model (`.json`, fins a 50 MB) i fitxers IFC (`.ifc`, IFC2X3 o IFC4, fins a 200 MB). Un fitxer IFC, obert o importat amb {{ui:Importa IFC}}, esdevé un model nou amb les seves bigues, pilars, barres, plaques, quadrícules i nivells, amb els forats i els retalls tallats i els seus cargols com a cargols solts; un informe enumera el que s'ha deixat de banda. Vegeu [Exportació IFC](topic:ifc-export#import). Encara no obre fitxers DWG, DXF ni cap altre model d'un programa de detallat; si ho intenteu, es mostra "DetailCraft obre els seus propis models (.detailcraft.json) i fitxers IFC (.ifc)."

## Treball perdut, fitxers recents, l'aplicació d'escriptori

- Mentre el model té canvis que no heu desat, DetailCraft guarda una còpia en aquest navegador. Si la pestanya o el navegador es tanquen abans que deseu, la propera vegada que obriu DetailCraft us preguntarà **Recuperar el treball?**: recupereu la còpia o descarteu-la. Vegeu [Recupera el treball](common:recover).
- Els models que heu obert fa poc apareixen a la pantalla d'inici quan el navegador permet tornar-los a obrir; feu clic en un per reobrir-lo.
- A l'aplicació d'escriptori, {{ui:Desa}} escriu el model al fitxer que heu obert (al navegador en baixa una còpia), i el doble clic en un model de DetailCraft o en un fitxer IFC l'obre a DetailCraft.

## Exportacions

Totes les exportacions usen el nom del model. Trieu-les al grup {{ui:Sortida}}.

| Botó | Fitxer | Què hi ha |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: plantes, quadrícules, cada peça d'acer com a extrusió de perfil amb els seus forats i retalls, conjunts, cargols i barres d'ancoratge, sabates i totes les barres. Vegeu [Exporta IFC](topic:ifc-export). |
| {{ui:Fitxers NC}} | `<name> NC.zip` | Un fitxer DSTV `.nc1` per cada marca de peça. Vegeu [Envia els fitxers NC al taller](topic:nc-export). |
| {{ui:LdM}} | `<name> BOM.csv` | Tres taules en un sol fitxer: peces, conjunts, i cargols i barres d'ancoratge. Vegeu [Marques i llista de materials](topic:marks-and-bom). |
| {{ui:Doblegat}} | `<name> bending schedule.csv` | Cada marca de barra de les sabates. Vegeu [Sabates i armadura](topic:footings-and-rebar). |
| {{ui:Plànol de taller}} | `<name> <mark>.pdf` | Un full (A3, tret que n'hagueu triat una altra mida) per a la peça seleccionada (perfils en I i plaques). Vegeu [Fer un plànol de taller](topic:shop-drawings). |
| {{ui:Plànols}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` o `.dxf`, diversos en `<name> drawings DWG.zip` (o `DXF.zip`) | Els plànols de planta, alçat i conjunt en la mida de full que heu triat; DWG i DXF a mida real, 1 unitat = 1 mm al paper. Vegeu [Plànols de disposició general i de conjunt](topic:drawings). |

### Notes sobre els fitxers CSV

- Comencen amb una marca d'ordre de bytes perquè els programes de full de càlcul llegeixin correctament els caràcters accentuats.
- Una cel·la que comença amb `=`, `+`, `-` o `@` (i que no és un nombre simple) rep un apòstrof al davant, perquè un full de càlcul mai no l'executi com a fórmula.
- Les longituds són en mil·límetres i els pesos en quilograms.

### Notes sobre el PDF

El text del PDF usa el tipus de lletra estàndard Helvetica. Els caràcters que no hi són (fora del conjunt de l'Europa occidental) s'imprimeixen com a "?", i la barra d'estat indica quants n'hi ha.

## Unitats

DetailCraft treballa en mil·límetres a tot arreu: quadrícules, nivells, coordenades, perfils, forats i totes les exportacions. Els noms dels perfils mantenen la seva forma publicada (W12x50 és una designació dels EUA, encara que les dimensions es mostrin en mm). Encara no hi ha entrada en unitats imperials.

## En línia i fora de línia

Obrir, desar i exportar es fan tots al navegador, de manera que funcionen igual amb o sense connexió, un cop s'ha carregat DetailCraft.

Per usar DetailCraft més tard sense connexió, trieu {{ui:Desa per fer-lo servir sense connexió}} a la barra de l'aplicació mentre teniu connexió. El botó va comptant ("Desant 3 de 20") i després mostra {{ui:Disponible sense connexió}}. La còpia desada inclou la biblioteca de gràfics 3D (uns 2,6 MB) i aquesta ajuda; així, un cop desada, la vista 3D, totes les exportacions i l'ajuda funcionen sense connexió. Detalls, i què encara necessita connexió: [Treballar sense connexió](common:offline).

:::offline
Esteu fora de línia. Si la barra de l'aplicació mostra {{ui:Disponible sense connexió}}, obrir, desar i exportar funcionen com de costum. Si no ho mostra, mantingueu aquesta pestanya oberta, no la torneu a carregar fins que tingueu connexió, i desfeu el model ara.
:::

El desament al núvol encara no està disponible, i encara no hi ha versions d'escriptori. Feu una còpia de seguretat dels vostres fitxers `.detailcraft.json` com feu amb qualsevol altre fitxer de treball. Més a [On van els vostres fitxers](common:your-files).

## Treball sense desar

DetailCraft només guarda el model a la pestanya oberta. Si tanqueu o torneu a carregar la pestanya amb canvis sense desar, el navegador pregunta si voleu sortir de la pàgina; el text és el del mateix navegador. Desa amb {{key:Mod+S}} sovint.
