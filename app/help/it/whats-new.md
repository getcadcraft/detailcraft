---
title: Novità della 0.7
summary: Verifiche di progetto di profili a I in acciaio con combinazioni di carico da ASCE 7 o EN 1990 e verifiche delle aste secondo AISC 360 o EN 1993-1-1, esportazione USD del modello in acciaio, uno strumento per assistenti per USD, una barra multifunzione Acciaio con pulsanti grandi e piccoli, pannelli che si ripiegano e finestre di dialogo che si spostano.
keywords: novità, release notes, elenco delle modifiche, modifiche, 0.7, versione, nuove funzioni, verifiche di progetto, progetto acciaio, utilizzo, combinazioni di carico, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocodice, Appendice Nazionale, carico variabile in copertura, limite di freccia, usd, usda, usdc, usdz, openusd, assistente, mcp, barra multifunzione acciaio, barra multifunzione, pulsante diviso, unità, compatta, pannelli, finestre di dialogo, portoghese
from: 17d1e0bb
---

Ecco cosa è cambiato in DetailCraft 0.7 rispetto alla 0.6. L'analisi del telaio della 0.6 ha ora un secondo passo: la verifica delle aste in acciaio secondo una norma di progetto.

## Novità

### Giunti obliqui (0.7.1)

- **Due profili a I che si incontrano ad angolo**, ad esempio un nodo di portale o un colmo: selezionarli entrambi, scegliere {{ui:Giunto obliquo}} nel menu {{ui:Altro}} del gruppo {{ui:Collega}} e le due estremità vengono tagliate sul piano che divide l'angolo a metà. Le piastre di testa bullonate tra loro e gli irrigidimenti d'anima sono caselle da spuntare nella nuova finestra Giunto obliquo, i cui campi numerati corrispondono a un disegno del giunto che si aggiorna mentre si digita. Il giunto obliquo segue le aste quando si spostano e si riflette nei disegni, nei file NC (tagli obliqui), nell'IFC e nella distinta dei materiali. Vedere [Giunti obliqui](topic:mitres).

### Verifiche di progetto

- **Combinazioni di carico dalla norma.** Nella scheda {{ui:Analisi}}, il nuovo blocco {{ui:Verifiche di progetto}} ha una {{ui:Norma di progetto}}: ASCE 7 + AISC 360 (USA, LRFD) oppure EN 1990 + EN 1993-1-1 (Eurocodice). Assegnare a ogni caso di carico il suo tipo (permanente, variabile, il nuovo variabile in copertura, neve, vento, sisma), premere {{ui:Crea combinazioni}} e DetailCraft scrive le combinazioni di resistenza e di esercizio della norma per i casi indicati. Le combinazioni digitate a mano restano. Vedere [Creare le combinazioni](topic:design-checks#make-the-combinations).
- **Valori dell'Appendice Nazionale.** Per l'Eurocodice i coefficienti partono dai valori raccomandati; {{ui:Valori dell'Appendice Nazionale}} permette di digitare quelli del proprio Paese, che vengono salvati nel modello. Vedere [Creare le combinazioni](topic:design-checks#make-the-combinations).
- **Verifica delle aste.** {{ui:Verifica aste}} controlla ogni profilo a I in acciaio per trazione, compressione con instabilità, flessione con instabilità flesso-torsionale, taglio, flessione con sforzo assiale e freccia rispetto al {{ui:Limite di freccia}} impostato. La tabella mostra l'utilizzo di ogni asta, la verifica determinante e la sua combinazione, e le aste sono colorate sul modello (blu, verde, ocra, rosso, grigio per non verificata). Vedere [Verificare le aste](topic:design-checks#check-the-members).
- **Nel rapporto.** {{ui:Rapporto (PDF)}} e {{ui:Rapporto (CSV)}} aggiungono le edizioni delle norme, le impostazioni, l'utilizzo per asta e ogni articolo usato. Vedere [Il rapporto](topic:design-checks#the-report).
- **Un ausilio finché un ingegnere non l'ha esaminato.** Usa solo le sollecitazioni del primo ordine. Tubi, angolari, profili a C, profili saldati e parti snelle o di classe 4 risultano "non verificati", con il motivo; torsione, unioni e calcestruzzo non sono verificati. Vedere [Cosa non viene verificato](topic:design-checks#what-is-not-checked).

### USD

- **Esportare il modello in acciaio come USD.** {{ui:USD}} nel gruppo {{ui:Uscita}} scrive il modello come {{ui:Testo (.usda)}}, {{ui:Binario (.usdc)}} o {{ui:Pacchetto (.usdz)}} per programmi di rendering e composizione di scene: ogni assieme contiene le sue parti, ogni parte è la sua sezione estrusa lungo la lunghezza con gli scassi tagliati, e ognuna porta marca di parte, profilo, qualità, lunghezza e peso. Fori dei bulloni, bulloni, saldature e plinti non sono nelle mesh USD. Vedere [Esportare il modello in acciaio come USD](topic:usd).

### Assistenti AI

- **USD per gli assistenti.** Il proprio assistente, collegato tramite CadCraft Studio, può esportare il modello come USD (`usd_export`) e, in Studio, scriverlo in una cartella consentita. Vedere [Cosa può chiedere un assistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Cambiamenti

- **La barra multifunzione Acciaio** ha pulsanti grandi e piccoli: una {{ui:Trave}} grande accanto a {{ui:Pilastro}}, {{ui:Controvento}} e {{ui:Piastra}} piccoli in {{ui:Modellazione}} › {{ui:Aste}}; una {{ui:Piastre di testa}} grande in {{ui:Dettaglio}} › {{ui:Unioni}}, con {{ui:Giunzione}} e {{ui:Fazzoletto}} che condividono un pulsante diviso; un {{ui:Incolla}} grande in {{ui:Modifica}} › {{ui:Appunti}}, con {{ui:Incolla nella stessa posizione}} e {{ui:Duplica}} dietro la freccia del gruppo. {{ui:Fabbricazione}} › {{ui:Scambio}} ha {{ui:Esporta USD}} accanto a IFC. Gli altri stili di menu restano com'erano. Vedere [Menu, tasti e mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analizzare il telaio](topic:frame-analysis) rimanda ora alle verifiche di progetto e le sue combinazioni possono essere create dalla norma.

## In ogni app

- **Unità.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}} ha un elenco ciascuno per lunghezza, area, volume, angolo e pendenza, con le dimensioni esatte date dalle definizioni delle unità (il piede topografico statunitense è un'unità a sé). Disattivare le unità che non si usano mai ed escono dagli elenchi; contrassegnarne una con la stella e il nuovo lavoro parte con quella. Un file mantiene sempre la propria unità. I campi di DetailCraft non seguono ancora gli elenchi: le lunghezze si digitano ancora in millimetri. Vedere [Unità, valori digitati ed elenchi delle unità](common:unit-lists).
- **Una disposizione più densa e pannelli che si ripiegano.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Densità della disposizione}} › {{ui:Compatta}} fa stare più cose sullo schermo (i touch screen e i telefoni mantengono i pulsanti grandi). Ogni pannello laterale ha una sottile barra del titolo: trascinarla per ancorare o rendere mobile il pannello, rilasciarla sulla barra di un altro pannello per condividere un riquadro come schede, fissarla perché scorra via sul bordo, oppure nasconderla e riportarla dal bordo. Vedere [Disporre i pannelli](common:arrange-panels#make-the-layout-denser).
- **Le finestre di dialogo si spostano.** Trascinare una finestra di dialogo dalla barra del titolo per toglierla di mezzo al disegno; ricompare dove è stata lasciata. Fare doppio clic sulla barra del titolo per centrarla di nuovo. Vedere [Spostare una finestra di dialogo](common:arrange-panels#move-a-dialog).
- **Ricette per gli assistenti AI.** Dieci richieste svolte per il proprio assistente (riordinare un disegno, stampare un set, verificare i disegni, interrogare un modello, totalizzare un computo, provare una variante di parte…), ciascuna con gli strumenti che chiama e i permessi che richiede, e ciascuna rieseguita dai nostri test. Le app non contengono AI. Vedere [Ricette per gli assistenti AI](common:assistants-recipes).
- **Lingue.** **Português (Portugal)** è nuovo in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Lingua}}. Questa, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** hanno ora ogni parola delle app, come bozze non ancora riviste da un madrelingua. Gli argomenti della guida sono in inglese.
- **CadCraft Studio** dice perché un controllo degli aggiornamenti è fallito (nessun file per il proprio sistema, nessuna rete, firma non valida) invece di un semplice "Fine", e smette di riproporre una scheda Novità chiusa finché non c'è una versione più recente.

## Non ancora in questa versione

- **La 0.7 non è firmata digitalmente.** La firma e il pacchetto per il Microsoft Store sono passati alla 0.8 perché la convalida del certificato non è ancora arrivata. Verificare lo SHA-256 accanto a ogni file su getcadcraft.com/download. In Windows, se SmartScreen blocca il programma di installazione, scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su Mac, la prima volta, fare clic con il tasto destro su CadCraft Studio e scegliere {{ui:Apri}}. CadCraft Studio non è ancora in uno store di app e non esiste ancora una versione per iPad o iPhone.
- Gli elenchi di angolo e pendenza in {{ui:Unità}} vengono salvati, ma nessun campo li legge ancora.
- **Le verifiche di progetto non sono ancora state riviste da un ingegnere.** I nostri test le confrontano con valori di tabelle stampate e formule svolte a mano, non ancora con gli esempi svolti di una guida di progetto. Fino a una revisione sono un ausilio: verificare a mano le aste che contano.
- Le verifiche di progetto usano sollecitazioni del primo ordine (nessun effetto del secondo ordine) e verificano solo profili a I. Non implementati: tubi, angolari, profili a C, profili saldati, parti snelle (AISC) o di classe 4 (Eurocodice) in flessione, torsione, instabilità a taglio insieme alla flessione, unioni, fatica, incendio, dettagli sismici e calcestruzzo. Una parte snella in compressione esce dalle verifiche a compressione e l'asta risulta "verificata, in parte controllata".
- L'analisi del telaio è ancora del primo ordine e lineare e non è ancora stata provata da un ingegnere su un lavoro reale.
- Fori dei bulloni, bulloni, saldature e plinti non sono nell'esportazione USD.

Tutto il resto è in [Cosa non è ancora implementato](topic:not-built-yet).
