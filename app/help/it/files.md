---
title: Apertura, salvataggio ed esportazione dei file
summary: Il file del modello di DetailCraft, ogni esportazione che produce, dove vanno i file e cosa cambia tra browser e connessione.
keywords: apri, salva, esporta, scarica, file, json, ifc, nc1, dstv, csv, pdf, zip, formati, importa
from: 6fbc8e8f
---

DetailCraft ha un file proprio, il modello, e cinque esportazioni. Ogni salvataggio e ogni esportazione è un download. Non viene caricato nulla e nulla viene conservato su un server.

## Il file del modello

Un modello di DetailCraft viene salvato come `<name>.detailcraft.json`, dove `<name>` è il nome del modello nel pannello {{ui:Modello}}. Contiene griglie, livelli, membrature (con i loro fori e tagli), connessioni e relative impostazioni, plinti e i propri profili personalizzati.

Pezzi, marche, bulloni, saldature e barre non vengono memorizzati: DetailCraft li ricalcola dal modello ogni volta che lo apre. Per questo un file di modello è piccolo.

### Salvare

1. Digitare un nome nel campo {{ui:Nome}} in alto nel pannello {{ui:Modello}}.
2. Scegliere {{ui:Salva}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+S}}.
3. Il browser scarica `<name>.detailcraft.json`. La barra di stato mostra "Salvato … (scaricato)" e il puntino all'inizio del titolo della scheda del browser scompare.

Ogni salvataggio è un nuovo download. Il browser non sovrascrive il file aperto: a seconda delle sue impostazioni aggiunge un numero al nome, come `Frame (1).detailcraft.json`, oppure chiede dove salvare. Per conservare più versioni, rinominare i download.

:::chromium
Chrome ed Edge salvano nella cartella Download, a meno che non sia attiva l'opzione **Chiedi dove salvare ogni file prima di scaricarlo** nelle impostazioni di download del browser. Attivarla per scegliere ogni volta cartella e nome del file.
:::

:::firefox
Firefox salva nella cartella Download, oppure chiede ogni volta se è attiva l'opzione **Chiedi sempre dove salvare i file** nelle sue impostazioni.
:::

:::safari
Safari salva nella cartella Download. Per cambiare cartella, aprire **Safari, Impostazioni, Generali, Posizione download dei file**.
:::

### Aprire

1. Scegliere {{ui:Apri}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+O}}.
2. Selezionare un file `.detailcraft.json`.

Oppure trascinare il file da {{pick:mac=Finder|windows=Esplora file|linux=il gestore di file}} e rilasciarlo sulla vista. Durante il trascinamento la vista mostra "Trascina un modello DetailCraft per aprirlo".

Se il modello aperto ha modifiche non salvate, DetailCraft chiede prima: {{ui:Annulla}}, {{ui:Scarta le modifiche}} o {{ui:Salva prima}}.

DetailCraft verifica ogni campo di un file prima di usarlo. Ciò che non può essere usato viene escluso e la barra di stato indica cosa, per esempio "2 membrature non erano valide e sono state escluse." Un modello salvato da una versione più recente di DetailCraft viene rifiutato con un messaggio, invece di essere aperto a metà.

### Cosa apre

I propri file di modello (`.json`, fino a 50 MB) e i file IFC (`.ifc`, IFC2X3 o IFC4, fino a 200 MB). Un file IFC, aperto o importato con {{ui:Importa IFC}}, diventa un nuovo modello con le sue travi, pilastri, membrature, piastre, griglie e livelli, con fori e tagli applicati e i suoi bulloni come bulloni sciolti; un rapporto elenca ciò che è stato escluso. Vedi [Esportazione IFC](topic:ifc-export#import). Non apre ancora DWG, DXF né il modello di altri programmi di dettagliatura: tentando, appare "DetailCraft apre i propri modelli (.detailcraft.json) e i file IFC (.ifc)."

## Lavoro perso, file recenti, app desktop

- Finché il modello ha modifiche non salvate, DetailCraft conserva una copia in questo browser. Se la scheda o il browser si chiudono prima del salvataggio, alla successiva apertura di DetailCraft compare la domanda **Recupera il lavoro?**: recuperare la copia oppure scartarla. Vedi [Recupera il lavoro](common:recover).
- I modelli aperti di recente sono elencati nella schermata iniziale, quando il browser consente di riaprirli; fare clic su uno per riaprirlo.
- Nell'app desktop, {{ui:Salva}} riscrive il modello nel file aperto (nel browser scarica una copia), e il doppio clic su un modello DetailCraft o su un file IFC lo apre in DetailCraft.

## Esportazioni

Tutte le esportazioni usano il nome del modello. Si scelgono nel gruppo {{ui:Uscita}}.

| Pulsante | File | Contenuto |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: piani, griglie, ogni pezzo in acciaio come estrusione di profilo con i suoi fori e tagli, assiemi, bulloni e barre di ancoraggio, plinti e ogni barra. Vedi [Esporta IFC](topic:ifc-export). |
| {{ui:File NC}} | `<name> NC.zip` | Un file DSTV `.nc1` per ogni marca del pezzo. Vedi [Inviare i file NC all'officina](topic:nc-export). |
| {{ui:Distinta}} | `<name> BOM.csv` | Tre tabelle in un unico file: pezzi, assiemi, e bulloni e barre di ancoraggio. Vedi [Marche e distinta dei materiali](topic:marks-and-bom). |
| {{ui:Piegatura}} | `<name> bending schedule.csv` | Ogni posizione di barra nei plinti. Vedi [Plinti e armatura](topic:footings-and-rebar). |
| {{ui:Disegno di officina}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` contiene un foglio per ogni marca del pezzo; {{ui:Scarica PDF}} scarica quello mostrato (A3 se non si sceglie un altro formato). Vedi [Creare i disegni di officina](topic:shop-drawings). |
| {{ui:Disegni}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` oppure `.dxf`, più file in `<name> drawings DWG.zip` (oppure `DXF.zip`) | Piante, prospetti e disegni di sistemazione generale e di assieme, sul formato di foglio scelto; DWG e DXF a grandezza reale, 1 unità = 1 mm sulla carta. Vedi [Disegni di sistemazione generale e di assieme](topic:drawings). |

### Note sui file CSV

- Iniziano con un contrassegno dell'ordine dei byte (BOM), affinché i programmi di fogli di calcolo leggano correttamente i caratteri accentati.
- Una cella che inizia con `=`, `+`, `-` o `@` (e non è un numero semplice) riceve un apostrofo iniziale, così un foglio di calcolo non la esegue come formula.
- Le lunghezze sono in millimetri e i pesi in chilogrammi.

### Note sul PDF

Il testo del PDF usa il carattere standard Helvetica. I caratteri che non contiene (fuori dal set dell'Europa occidentale) vengono stampati come "?", e la barra di stato indica quanti sono.

## Unità

DetailCraft lavora in millimetri in ogni parte: griglie, livelli, coordinate, profili, fori e tutte le esportazioni. I nomi dei profili mantengono la forma pubblicata (W12x50 è una designazione statunitense anche se le dimensioni sono mostrate in mm). Non è ancora disponibile l'immissione in unità imperiali.

## Online e offline

Apertura, salvataggio ed esportazione avvengono tutti nel browser, quindi funzionano allo stesso modo con o senza connessione, una volta caricato DetailCraft.

Per usare DetailCraft senza connessione in seguito, scegliere {{ui:Salva per l'uso offline}} nella barra dell'app mentre si è online. Il pulsante conta ("Salvataggio 3 di 20") e poi mostra {{ui:Pronto per l'uso offline}}. La copia salvata include la libreria grafica 3D (circa 2.6 MB) e questa guida, quindi una volta salvata la vista 3D, ogni esportazione e la guida funzionano offline. Dettagli, e ciò che richiede ancora una connessione: [Uso offline](common:offline).

:::offline
Non c'è connessione. Se la barra dell'app mostra {{ui:Pronto per l'uso offline}}, apertura, salvataggio ed esportazione funzionano come di consueto. Se non lo mostra, lasciare aperta questa scheda, non ricaricarla finché non c'è di nuovo connessione e salvare il modello subito.
:::

Il salvataggio nel cloud non è ancora disponibile e non ci sono ancora versioni desktop. Eseguire il backup dei file `.detailcraft.json` come si fa con ogni altro file di lavoro. Altro in [Dove vanno i file](common:your-files).

## Lavoro non salvato

DetailCraft conserva il modello solo nella scheda aperta. Se si chiude o si ricarica la scheda con modifiche non salvate, il browser chiede se lasciare la pagina; il testo è quello del browser. Salvare spesso con {{key:Mod+S}}.
