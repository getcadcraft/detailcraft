---
title: Menu, tasti e mouse
summary: Scegliere uno stile di menu che corrisponda al modo di lavorare, assegnare un proprio tasto a ogni comando, spostare i comandi tra le schede della barra multifunzione e impostare cosa fanno la rotella e i pulsanti del mouse.
keywords: stile dei menu, menu, barra multifunzione, barra degli strumenti, riga di comando, scorciatoie da tastiera, tasti di scelta rapida, tasti, personalizza, riassegna, mouse, rotella, inverti, direzione dello zoom, pulsante centrale, pulsante destro, pan, orbita, esporta, importa, passaggio, disegno classico, barra multifunzione acciaio
from: 4132c6e5
---

I comandi di DetailCraft sono gli stessi qualunque sia il modo in cui vi si accede. Uno **stile di menu** decide solo dove si trovano sullo schermo, come si chiamano lì e quali tasti li eseguono. Sceglierne uno in {{ui:Impostazioni}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menu, tasti e mouse}}; la modifica è immediata, e questo browser la ricorda.

## I tre stili

| Stile | Cosa si ottiene |
|---|---|
| {{ui:DetailCraft}} | La barra degli strumenti propria di DetailCraft (File, Posiziona, Collega, Modifica, Uscita) e i suoi tasti a una lettera: {{key:V}} seleziona, {{key:B}} trave, {{key:C}} pilastro, {{key:R}} controvento, {{key:P}} piastra, {{key:F}} plinto, {{key:S}} scala. È lo stile iniziale. |
| {{ui:Disegno classico}} | Per chi digita i comandi: una piccola barra multifunzione ({{ui:Home}}, {{ui:Vista}}, {{ui:Uscita}}) e una riga di comando. Digitare BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (annulla), ZOOM, PLAN, 3D, DRAWINGS, NC o HELP e premere {{key:Enter}}; {{key:Enter}} su nulla ripete l'ultimo comando, {{key:Esc}} lo cancella. Iniziare a digitare ovunque: le lettere vanno alla riga di comando. Il pulsante centrale esegue il pan; in 3D, {{key:Shift}} e il pulsante centrale orbitano. |
| {{ui:Barra multifunzione acciaio}} | Schede disposte come le ordinano i programmi di dettagliatura dell'acciaio: {{ui:Modellazione}} (membri, calcestruzzo, scale), {{ui:Dettaglio}} (unioni), {{ui:Modifica}}, {{ui:Disegni}} (disegni e report), {{ui:Fabbricazione}} (file NC, IFC) e {{ui:Vista}}, con un menu {{ui:File}} e pulsanti rapidi a destra. I tasti a una lettera restano. Il pulsante centrale esegue il pan; in 3D il pulsante sinistro orbita. |

Ogni stile mantiene {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} e {{key:Mod+A}}. Le barre multifunzione contengono anche i pulsanti della barra di vista {{ui:3D}}, {{ui:Pianta}}, {{ui:Prospetto}} e {{ui:Adatta}}.

:::tip
Un tasto che appartiene al layout di DetailCraft ma che lo stile assegna a un altro comando non fa nulla, e la riga di stato indica dove è finito il comando ("In Barra multifunzione acciaio personalizzata, Pilastro è Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e le frecce mantengono sempre il loro significato; mentre un membro è a metà posizionamento o una copia segue il puntatore, le lettere appartengono a DetailCraft.
:::

## Personalizzarlo

1. Scegliere lo stile più vicino a ciò che si desidera, poi fare clic su {{ui:Personalizza…}}.
2. In {{ui:Tasti e menu}}, trovare un comando (la casella di ricerca aiuta). Fare clic su {{ui:Aggiungi un tasto}} e premere il tasto, o due tasti in sequenza per un tasto a due lettere. Fare clic su un tasto per rimuoverlo.
3. Con una barra multifunzione, {{ui:Dove si trova}} sposta il comando in un'altra scheda e pannello, nel menu {{ui:File}}, oppure in {{ui:Solo tasti}}.
4. In {{ui:Mouse}}, impostare la rotella, i pulsanti che fanno il pan nelle piante e nei prospetti, e cosa fa ogni pulsante nella vista 3D.
5. Assegnare un nome e fare clic su {{ui:Salva}}.

Salvare uno stile predefinito crea una copia propria ("Mia barra multifunzione acciaio"); quello predefinito non cambia mai. Un tasto assegnato a due comandi è mostrato in rosso e va corretto prima di poter salvare.

## Mouse

- **Rotella del mouse**: {{ui:Scorrere in avanti ingrandisce}} (l'inizio) oppure {{ui:Scorrere in avanti riduce}}, e quanto velocemente. Un pizzico sul trackpad fa sempre zoom nel verso in cui si muovono le dita.
- **Eseguire il pan nelle piante e nei prospetti con**: il pulsante centrale, il pulsante destro, o entrambi. Con lo strumento {{ui:Seleziona}} il pulsante sinistro disegna sempre una finestra di selezione.
- **Trascinare nella vista 3D**: {{ui:Propria di ogni vista}} mantiene i pulsanti di DetailCraft (il sinistro orbita, il centrale fa zoom, il destro fa pan). Oppure impostare ogni pulsante per orbitare, fare pan, fare zoom o nulla; {{key:Shift}} con un pulsante che orbita o fa pan scambia i due.

## Portarlo con sé

{{ui:Esporta}} salva lo stile in uso come un piccolo file `.ccinput.json`; {{ui:Importa…}} ne aggiunge uno, da un altro computer o da un collega. Un file importato può puntare solo ai comandi propri di DetailCraft: tutto il resto viene escluso e conteggiato nella riga di stato. {{ui:Elimina questo stile}} rimuove uno dei propri.

:::note
Queste impostazioni restano in questo browser. {{ui:Usa questo stile in ogni app}} sotto le schede degli stili fa aprire ogni app nello stile corrispondente (la propria barra degli strumenti, una barra multifunzione o Disegno classico), con le modifiche fatte in ciascuna app. DetailCraft non ha uno stile con barra dei menu: quando per tutte le app viene scelta la barra dei menu di un'altra app, DetailCraft mantiene la propria barra degli strumenti.
:::

Correlati: [Tasti e mouse](topic:keyboard) · [Impostazioni di DetailCraft](topic:settings) · [Passare da altri software di dettaglio](topic:coming-from)
