---
title: Provenienza da altro software di dettaglio
summary: Come le abitudini di un pacchetto completo di dettaglio corrispondono a DetailCraft, e le differenze che spiazzano i dettaglianti esperti.
keywords: passaggio, migrazione, familiare, flusso di lavoro, confronto, differenze, numerazione, componenti, catalogo, disegni, abitudini
from: 39639a5d
---

Se si dettaglia in Tekla Structures, gran parte di DetailCraft sembrerà familiare: griglie, livelli, profili da un catalogo, parti e montaggi, collegamenti, numerazione, file NC, IFC. La scala è molto diversa: Tekla Structures è un sistema di produzione completo, mentre DetailCraft è una piccola app browser, in fase iniziale, che svolge alcuni compiti dall'inizio alla fine. Questa pagina indica dove le abitudini restano valide e dove no.

:::tip
Se si conosce la barra multifunzione di Tekla Structures, scegliere lo stile di menu {{ui:Barra multifunzione acciaio}} in {{ui:Impostazioni}} › {{ui:DetailCraft}} › {{ui:Menu, tasti e mouse}}: le schede Modellazione, Dettaglio, Modifica, Disegni, Fabbricazione e Vista, e il pulsante centrale sposta la vista. Se si proviene da AutoCAD e si preferisce digitare i comandi, {{ui:Disegno classico}} aggiunge una riga di comando (BEAM, COLUMN, ENDPLATE, ZOOM …). Vedere [Menu, tasti e mouse](topic:menus-keys-and-mouse).
:::

## Mappa rapida

| Si è abituati a | In DetailCraft |
|---|---|
| Creare griglie con coordinate in una finestra di griglia | {{ui:Griglie}} nel pannello di sinistra: etichette e spaziature tra le linee, non coordinate assolute. Le linee numerate corrono in una direzione, quelle con lettere nell'altra |
| Livelli come coordinate Z della griglia | Un elenco separato {{ui:Livelli}}, con nome e quota per riga, applicato con {{ui:Applica livelli}} |
| Scegliere punti ovunque con gli snap | I clic si agganciano solo alle intersezioni della griglia. I punti fuori griglia si digitano in {{ui:Estremità (x, y, z mm)}} di un membro |
| I comandi di pilastro, trave e piastra | {{ui:Pilastro}} ({{key:C}}), {{ui:Trave}} ({{key:B}}), {{ui:Controvento}} ({{key:R}}), {{ui:Piastra}} ({{key:P}}), {{ui:Plinto}} ({{key:F}}) |
| Finestra delle proprietà di una parte (doppio clic sulla parte) | Un clic: il pannello {{ui:Proprietà}} a destra è sempre attivo; non c'è finestra né pulsante Modifica o Applica |
| Posizione sul piano, rotazione e impostazioni di profondità | {{ui:Posizione}} (sommità dell'acciaio, centrata o in basso sulla linea) e {{ui:Rotazione (°)}}. Nessuno spostamento orizzontale separato |
| Il catalogo dei profili | Un elenco fisso di 2,311 dimensioni pubblicate (AISC W, S, C, L, HSS, Pipe; europei IPE, HEA, HEB, UPN; britannici UB, UC, PFC, EA, UEA, SHS, RHS, CHS e sezioni cave formate a freddo), più piastre parametriche e le proprie sezioni {{ui:Profilo personalizzato}} |
| Catalogo dei materiali | Sette classi in un elenco: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Applicare un componente di collegamento e la sua finestra | Selezionare la trave, scegliere {{ui:Piastre di testa}}. Le impostazioni compaiono nel pannello {{ui:Proprietà}}. Esistono solo due collegamenti (piastra di testa alla flangia del pilastro, piastra di base) |
| Collegamento automatico, o copia di un nodo su nodi simili | Selezionare un collegamento, scegliere {{ui:Applica a simili (n)}} |
| Numerazione con serie e numeri iniziali | Nessun comando: le marche si aggiornano da sole dopo ogni modifica, con prefissi fissi c, b, br, p e C, B, BR, P |
| Finestre di bulloni e fori | I fori si digitano per faccia e posizione. I bulloni provengono solo dai collegamenti |
| Strumenti di intaglio, adattamento e taglio poligonale | Intagli (in alto o in basso, a una delle estremità) solo su profili a I. I ritagli dei collegamenti sono automatici |
| Report e modelli | Tre report fissi in schede in basso, e download in CSV |
| Creazione di disegni ed elenco dei disegni | Un disegno di officina per marca, tutti creati insieme, in anteprima e poi scaricati come un unico PDF o foglio per foglio. Nulla viene conservato o modificato |
| Esportazione file NC | {{ui:File NC}}: un file DSTV per marca, solo profili a I e piastre, compresso in zip |
| Esportazione IFC | {{ui:IFC}}: IFC4 dell'intero modello, con armatura |
| Armatura in ogni parte in calcestruzzo | Armatura solo in plinti a platea rettangolari, con barre in misure US, con rete inferiore e ferri di ripresa |
| Modello salvato in una cartella di progetto, multiutente | Un file `.detailcraft.json` da scaricare. Utente singolo, sul proprio computer |
| Cronologia annullamenti | {{key:Mod+Z}} e {{key:Mod+Y}}, fino a 200 passaggi, conservati finché non si apre o avvia un altro modello |

## Differenze che creano problemi

### Le marche cambiano da sole

Non c'è un passaggio di numerazione. Le marche vengono ricalcolate dopo ogni modifica, quindi sono sempre aggiornate, ma possono anche rinumerarsi: aggiungendo un pilastro, il c3 di ieri può diventare c4. Non esiste una "cronologia di numerazione" per conservare le vecchie marche. Completare il modello, poi emettere distinta base, file NC e disegni di officina insieme da un unico file salvato.

### Il pulsante centrale del mouse ingrandisce; non sposta

Nella vista 3D: trascinare con il pulsante sinistro ruota, trascinare con il destro sposta, la rotellina ingrandisce, e trascinare con il pulsante centrale ingrandisce anch'esso. Tenendo premuto {{key:Shift}} mentre si trascina con il sinistro si sposta anche. La rotellina ingrandisce verso il centro della vista, non verso il puntatore. Non c'è scelta del centro di rotazione: il modello ruota attorno al centro della vista. Vedere [Muoversi nella vista 3D](topic:navigate-3d).

### I pilastri sono orientati in un modo per impostazione predefinita

A rotazione 0 le ali di un pilastro sono rivolte lungo la direzione delle griglie numerate. Le travi che corrono tra linee di griglia con lettere si innestano nell'anima, e lì le piastre di testa sono rifiutate ("Le travi che si innestano nell'anima di un pilastro non sono ancora realizzate"). Ruotare quei pilastri di 90° prima di aggiungere collegamenti.

### Prospetti solo sulle linee con lettere

{{ui:Prospetto}} guarda solo lungo le linee di griglia con lettere. Non ci sono viste lungo le linee numerate, né viste salvate né piani di lavoro. Usare {{ui:3D}} o {{ui:Aggiungi per griglia}} per telai su linee numerate.

### Selezione, copia e spostamento

Selezionare più parti con {{key:Shift}}+clic o {{key:Mod+A}}, poi copiare, tagliare, incollare (su un'intersezione di griglia, a uno scostamento digitato, o nella stessa posizione) e duplicare, collegamenti inclusi ([Copia, incolla e duplica](topic:copy-paste)). Non c'è selezione a finestra, nessun filtro di selezione, nessuno spostamento, specchio o serie, e le proprietà si cambiano un membro alla volta nel pannello {{ui:Proprietà}}.

### Le griglie non trascinano i membri

I membri mantengono le loro coordinate quando si cambia la spaziatura della griglia; nulla si sposta con le linee di griglia. Modificare la griglia prima di collocare l'acciaio, oppure modificare dopo le coordinate d'estremità di ciascun membro.

### I collegamenti non vengono progettati

I due collegamenti collocano piastre, fori, bulloni e saldature a partire dai valori forniti. Non c'è alcuna verifica di progetto, solo avvisi su bordi e interassi (da EN 1993-1-8 Tabella 3.3).

### I fori non vengono tagliati nella vista 3D

I fori appaiono come tappi scuri. Sono fori reali nei file NC, nei disegni di officina e nel file IFC. Gli intagli vengono tagliati nella vista.

### I pesi sono lordi

Il peso dell'acciaio non deduce fori o intagli, e il peso dei bulloni non è incluso.

### Solo millimetri

Tutto viene digitato e mostrato in millimetri, anche per i profili AISC. I nomi dei profili mantengono la loro forma pubblicata (W12x50, HSS6x6x1/4).

### Nessun disegno da gestire

Non c'è un elenco di disegni, nessun editor di disegni, nessun disegno d'insieme o di montaggio. Un disegno di officina viene creato quando lo si chiede e scaricato; per modificarlo, modificare il modello e rifarlo.

### Funziona in un browser

Salvare scarica un file. Le scorciatoie da tastiera che il browser riserva a sé non possono essere usate. I modelli non lasciano mai il proprio computer: vedere [Dove vanno i file](common:your-files).

## Cosa continuare a fare nel software attuale

Oggi DetailCraft è adatto a telai piccoli, alla verifica di un'idea, alla didattica, oppure alla produzione di file NC e disegni di officina per semplici lavori di travi e pilastri. Mantenere nel software attuale i collegamenti complessi, i disegni di insieme generale, i disegni di montaggio, i progetti multiutente e tutto ciò che è elencato in [Cosa non è ancora implementato](topic:not-built-yet).
