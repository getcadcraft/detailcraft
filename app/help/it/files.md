---
title: Aprire, salvare ed esportare i file
summary: Il file di modello di DetailCraft, ogni esportazione che scrive, dove finiscono i file e cosa cambia in base al browser e alla connessione.
keywords: aprire, salvare, esportare, scaricare, file, json, ifc, nc1, dstv, csv, pdf, zip, formati, importare
from: bd715ea3
---

DetailCraft ha un solo file proprio, il modello, e cinque esportazioni. Ogni salvataggio e ogni esportazione è un download. Non viene caricato nulla e nulla viene conservato su un server.

## Il file di modello

Un modello di DetailCraft viene salvato come `<nome>.detailcraft.json`, dove `<nome>` è il nome del modello nel pannello {{ui:Modello}}. Contiene le griglie, i livelli, le aste (con i loro fori e scassi), le unioni e le relative impostazioni, i plinti e i profili personalizzati.

Parti, marche, bulloni, saldature e barre non vengono memorizzati: DetailCraft li ricalcola dal modello a ogni apertura. Per questo un file di modello è piccolo.

### Salvare

1. Digitare un nome nel campo {{ui:Nome}} in alto nel pannello {{ui:Modello}}.
2. Scegliere {{ui:Salva}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+S}}.
3. Il browser scarica `<nome>.detailcraft.json`. La barra di stato indica "Salvato … (scaricato)" e il punto all'inizio del titolo della scheda del browser scompare.

Ogni salvataggio è un nuovo download. Il browser non sovrascrive il file aperto: a seconda delle sue impostazioni aggiunge un numero al nome, ad esempio `Frame (1).detailcraft.json`, oppure chiede dove salvare. Per tenere le proprie versioni, rinominare i download.

:::chromium
Chrome ed Edge salvano nella cartella Download, a meno che nelle impostazioni di download del browser non sia attiva l'opzione **Chiedi dove salvare ogni file prima di scaricarlo**. Attivarla per scegliere ogni volta la cartella e il nome del file.
:::

:::firefox
Firefox salva nella cartella Download, oppure chiede ogni volta se nelle impostazioni è attiva l'opzione **Chiedi dove salvare i file**.
:::

:::safari
Safari salva nella cartella Download. Per cambiare cartella, aprire **Safari, Impostazioni, Generali, Posizione di download dei file**.
:::

### Aprire

1. Scegliere {{ui:Apri}} nel gruppo {{ui:File}}, oppure premere {{key:Mod+O}}.
2. Selezionare un file `.detailcraft.json`.

In alternativa, trascinare il file da {{pick:mac=Finder|windows=Esplora file|linux=il file manager}} e rilasciarlo sulla vista. Durante il trascinamento la vista indica "Rilasciare un modello DetailCraft per aprirlo".

Se il modello aperto ha modifiche non salvate, DetailCraft chiede prima: {{ui:Annulla}}, {{ui:Scarta le modifiche}} o {{ui:Salva prima}}.

DetailCraft controlla ogni campo di un file prima di usarlo. Ciò che non può usare viene escluso e la barra di stato dice cosa, ad esempio "2 aste non erano valide e sono state escluse." Un modello salvato da una versione più recente di DetailCraft viene rifiutato con un messaggio invece di essere aperto in modo approssimativo.

### Cosa apre

I propri file di modello (`.json`, fino a 50 MB) e i file IFC (`.ifc`, IFC2X3 o IFC4, fino a 200 MB). Un file IFC, aperto o importato con {{ui:Importa IFC}}, diventa un nuovo modello con le sue travi, i pilastri, le aste, le piastre, le griglie e i livelli, con i fori e gli scassi praticati e i bulloni come bulloni singoli; un rapporto elenca ciò che è stato escluso. Vedere [Esportazione IFC](topic:ifc-export#import). Non apre ancora file DWG, DXF né i modelli di altri programmi di dettaglio; il tentativo mostra "DetailCraft apre i propri modelli (.detailcraft.json) e i file IFC (.ifc)."

## Lavoro perso, file recenti, app desktop

- Finché il modello ha modifiche non salvate, DetailCraft ne conserva una copia in questo browser. Se la scheda o il browser si arresta prima del salvataggio, alla successiva apertura di DetailCraft viene chiesto **Recuperare il lavoro?**: recuperare la copia oppure scartarla. Vedere [Recuperare il lavoro](common:recover).
- I modelli aperti di recente sono elencati nella schermata iniziale quando il browser consente a DetailCraft di riaprirli; fare clic su uno per riaprirlo.
- Nell'app desktop, {{ui:Salva}} riscrive il modello nel file aperto (nel browser scarica una copia) e un doppio clic su un modello DetailCraft o su un file IFC lo apre in DetailCraft.

## Esportazioni

Tutte le esportazioni usano il nome del modello. Si scelgono nel gruppo {{ui:Uscita}}.

| Pulsante | File | Contenuto |
|---|---|---|
| {{ui:IFC}} | `<nome>.ifc` | IFC4: piani, griglie, ogni parte in acciaio come estrusione di profilo con i suoi fori e scassi, assiemi, bulloni e tirafondi, plinti e ogni barra. Vedere [Esportare in IFC](topic:ifc-export). |
| {{ui:File NC}} | `<nome> NC.zip` | Un file DSTV `.nc1` per ogni marca di parte. Vedere [Inviare i file NC all'officina](topic:nc-export). |
| {{ui:Distinta}} | `<nome> BOM.csv` | Tre tabelle in un unico file: parti, assiemi, e bulloni e tirafondi. Vedere [Marche e distinta dei materiali](topic:marks-and-bom). |
| {{ui:Piegatura}} | `<nome> bending schedule.csv` | Ogni posizione di barra nei plinti. Vedere [Plinti e armatura](topic:footings-and-rebar). |
| {{ui:Disegno di officina}} | `<nome> <marca>.pdf` | Una tavola (A3, salvo altro formato scelto) per la parte selezionata (profili a I e piastre). Vedere [Creare un disegno di officina](topic:shop-drawings). |
| {{ui:Disegni}} | `<nome> drawings.pdf`, `<nome> <tavola>.pdf`; `<nome> <tavola>.dwg` o `.dxf`, più file in `<nome> drawings DWG.zip` (o `DXF.zip`) | Le piante, i prospetti e i disegni di assieme nel formato di tavola scelto; DWG e DXF a grandezza naturale, 1 unità = 1 mm sulla carta. Vedere [Disegni di disposizione generale e di assieme](topic:drawings). |

### Note sui file CSV

- Iniziano con un byte-order mark, così i programmi di fogli di calcolo leggono correttamente i caratteri accentati.
- Una cella che inizia con `=`, `+`, `-` o `@` (e non è un semplice numero) riceve un apostrofo iniziale, così un foglio di calcolo non la esegue mai come formula.
- Le lunghezze sono in millimetri e i pesi in chilogrammi.

### Note sul PDF

Il testo nel PDF usa il carattere standard Helvetica. I caratteri che non contiene (fuori dall'insieme dell'Europa occidentale) vengono stampati come "?" e la barra di stato indica quanti sono.

## Unità

DetailCraft lavora ovunque in millimetri: griglie, livelli, coordinate, profili, fori e ogni esportazione. I nomi dei profili mantengono la forma pubblicata (W12x50 è una designazione statunitense anche se le sue dimensioni sono mostrate in mm). Non esiste ancora un input in unità imperiali.

## Online e offline

Aprire, salvare ed esportare avvengono tutti nel browser, quindi funzionano allo stesso modo con o senza connessione dopo il caricamento di DetailCraft.

Per usare DetailCraft in seguito senza connessione, scegliere {{ui:Salva per l'uso offline}} nella barra dell'app mentre si è online. Il pulsante conta ("Salvataggio di 3 su 20") e poi riporta {{ui:Pronto per l'uso offline}}. La copia salvata comprende la libreria grafica 3D (circa 2,6 MB) e questa guida, quindi una volta salvata la vista 3D, ogni esportazione e la guida funzionano offline. Dettagli e cosa richiede ancora una connessione: [Lavorare offline](common:offline).

:::offline
Si è offline. Se la barra dell'app mostra {{ui:Pronto per l'uso offline}}, aprire, salvare ed esportare funzionano come al solito. In caso contrario, tenere aperta questa scheda, non ricaricarla finché non si è di nuovo online e salvare subito il modello.
:::

Il salvataggio nel cloud non è ancora disponibile e non esistono ancora versioni desktop. Eseguire il backup dei file `.detailcraft.json` come per qualsiasi altro file di lavoro. Altre informazioni in [Dove vanno i file](common:your-files).

## Lavoro non salvato

DetailCraft conserva il modello solo nella scheda aperta. Se si chiude o si ricarica la scheda con modifiche non salvate, il browser chiede se lasciare la pagina; la formulazione è quella del browser. Salvare spesso con {{key:Mod+S}}.
