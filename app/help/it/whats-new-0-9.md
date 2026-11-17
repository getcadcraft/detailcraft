---
title: Novità nella versione 0.9
summary: Dimensioni dell'acciaio UK dal Blue Book e angolari disuguali, disegni di officina per ogni parte in un unico set PDF, I miei profili per sezioni personalizzate, P-Delta e frequenze naturali, carichi da vento ASCE 7, sito sismico e combinazioni, e cursori in tempo reale con Segui.
keywords: novità, cosa è nuovo, note di rilascio, registro modifiche, modifiche, 0.9, acciaio UK, blue book, ub, uc, pfc, shs, rhs, chs, angolare disuguale, disegno di officina, disegni di officina, set di tavole, marca di parte, pdf, i miei profili, profilo personalizzato, p-delta, secondo ordine, frequenza naturale, elementi finiti, massa modale, carico da vento, asce 7, sismico, classe di sito, usgs, combinazioni di carico, lrfd, asd, live, cursori, segui, persone, tooltip, novità, note di rilascio, modifiche, 0.8, 0.8.1, versione, nuove funzionalità, montaggio, gru, tabella di carico, filmato, autopilota, unioni, armatura, congestione, fondazione, plinto, platea, cedimento, ossatura, legno, lamiera leggera, elenco di taglio, costruibilità, accesso alla saldatura, fornitore, giacenza, tempo di consegna, che cosa cede per primo, calcestruzzo, sismico, soletta, lingue, assistente
from: 4c95a2de
---

Ecco cosa è cambiato in DetailCraft 0.9, rispetto alla 0.8.1. La 0.9 porta le dimensioni dell'acciaio UK, un disegno di officina per ogni parte in una sola volta, una scheda {{ui:Analisi}} più grande per i telai, e la vista dei cursori degli altri quando si lavora insieme.

## Novità

### Acciaio UK e disegni di officina

- **Dimensioni dell'acciaio UK.** Gli elenchi di profili contengono ora 976 dimensioni dal Blue Book Steel for Life: UB, UC, PFC, EA, UEA, CHS, SHS e RHS, con i profili cavi formati a freddo tenuti separati (i loro nomi iniziano con CF). I nomi sono scritti con prima la famiglia, come UB305x165x40 o SHS100x100x5.0, e funziona anche digitarli come riportano i disegni: 305x165x40 UB, L100x100x10, SHS100x5. Vedere [Catalogo dei profili](topic:profile-catalog).
- **Angolari disuguali.** Gli angolari UEA mantengono entrambe le ali in IFC in entrata e in uscita e nei file NC, e uno specchio ribalta il pezzo da un'estremità all'altra.
- **Tutti i disegni di officina insieme.** Scegliere {{ui:Disegno di officina}} nel gruppo {{ui:Uscita}} senza nulla selezionato. La finestra elenca ogni marca di parte, ne mostra l'anteprima di qualsiasi, e {{ui:Scarica tutto}} salva un unico PDF con una pagina per marca, ciascuna intitolata "Tavola 3 di 42". {{ui:Scarica PDF}} salva quella che si sta guardando. Anche profili a C, angolari e profili cavi ora ottengono tavole. Vedere [Creare disegni di officina](topic:shop-drawings).
- **I miei profili.** Un profilo personalizzato può ora essere conservato per ogni nuovo modello. Nel modulo Profilo personalizzato, lasciare spuntato {{ui:Mantieni in I miei profili}}; l'elenco {{ui:I miei profili}} sotto di esso ha {{ui:Mantieni}}, {{ui:Usa qui}} e {{ui:Rimuovi}}. L'elenco è conservato in questo browser (fino a 200), non nel proprio account. Vedere [Piastre e profili](topic:plates-and-profiles).

### Analisi

- **Secondo ordine (P-Delta).** Spuntare {{ui:Secondo ordine (P-Delta)}} accanto a {{ui:Esegui}} nella scheda {{ui:Analisi}} e le forze assiali agiscono sul telaio deformato. Piastre e solai rigidi restano al primo ordine, con un avviso. Vedere [Forze, reazioni e spostamenti](topic:frame-analysis).
- **Frequenze naturali.** Il blocco {{ui:Elementi finiti: frequenze naturali}} sotto i risultati trova i modi più bassi dello stesso modello, con periodo e massa modale efficace, e mostra un modo sul modello. Vedere [Forze, reazioni e spostamenti](topic:frame-analysis).
- **Carichi da vento e sito sismico.** Tre nuovi blocchi nella scheda {{ui:Analisi}}: {{ui:Carichi da vento (procedura direzionale ASCE 7)}}, {{ui:Sito e sistema sismici (ASCE 7)}} e {{ui:Combinazioni di carico ASCE 7}}. Vedere [Vento, sito sismico e combinazioni ASCE 7](topic:wind-seismic-combinations).

### Lavorare insieme

- **Cursori e nomi.** In una sessione Live il puntatore di ciascuna persona è disegnato nel modello con il suo nome e colore, e ciò che ha selezionato riceve un riquadro.
- **Seguire una persona.** Aprire {{ui:Persone}} nella sessione e scegliere {{ui:Segui}} su un nome; la propria vista si sposta con quella della persona. L'host può scegliere {{ui:Chiedi a tutti di seguirmi}}. Vedere [Seguire una persona in una sessione Live](topic:follow-in-live).

### In ogni app

- I tooltip sono tooltip Bootstrap, la scheda dei suggerimenti iniziali ha un pulsante di chiusura, le barre delle schede scorrono lateralmente quando non ci stanno, e la scheda del browser riporta il nome del documento aperto seguito da DetailCraft e CadCraft.

## Corretti

- Un profilo personalizzato andava perso quando si avviava un nuovo modello.
- Profili a C, angolari e profili cavi mancavano dal set di disegni di officina.

## Limiti dichiarati

- I blocchi vento, sismico ed elementi finiti sono ausili di verifica. Il proprio ingegnere rivede i risultati; non sono una verifica secondo norma. La ricerca USGS è stata provata su un sostituto, non sul servizio attivo.
- Elementi finiti e P-Delta sono stati verificati con risultati a mano e in forma chiusa, non su un edificio reale. L'analisi di instabilità non è ancora realizzata.
- Nessun fabbricante UK ha ancora provato le dimensioni UK, e i file NC per angolari disuguali non sono stati eseguiti su una macchina.
- Il set di disegni di officina è solo in PDF.
- Le lingue diverse dall'inglese sono bozze automatiche.
- I programmi di installazione per Windows non sono firmati digitalmente (Ulteriori informazioni, poi Esegui comunque); l'immagine disco per macOS non è notarizzata (clic destro, poi Apri).

Le modifiche precedenti sono nelle note della 0.8 e della 0.8.1 più in basso in questa pagina.

## Precedenti: 0.8 e 0.8.1

Ecco cosa è cambiato in DetailCraft 0.8 (1 novembre 2026) e 0.8.1 (2 novembre 2026), rispetto alla 0.7. La 0.7 verificava le aste in acciaio; la 0.8 pianifica i sollevamenti, propone le unioni, verifica le fondazioni e l'armatura, e imposta l'ossatura di pareti, solai e tetti in legno e in lamiera leggera.

### Novità

**Montaggio**

- **Piano di montaggio e filmato.** Nella scheda {{ui:Montaggio}}, descrivere una gru (dove sta, il gancio più alto, l'imbracatura che non è nella tabella) e digitare le righe della sua tabella dei carichi. DetailCraft solleva il modello un assieme alla volta, in ordine di fase e livello per livello, e verifica ogni sollevamento contro la tabella al suo raggio e contro il margine impostato. {{ui:Salva filmato}} scrive un unico file HTML che si riproduce offline in ogni browser, anche su telefono. I sollevamenti oltre la tabella, oltre il suo limite o troppo alti sono in {{ui:Problemi}}. È un piano basato sui propri numeri, non un piano di sollevamento. Vedere [Piano di montaggio e filmato](topic:erection-movie).

**Unioni**

- **Pilota automatico delle unioni.** La scheda {{ui:Autopilota}} esamina ogni giunto che non ha un'unione e ne propone una a partire dalle forme: piastre di base, piastre di taglio, piastre di testa per le travi marcate come travi a momento, giunzioni e fazzoletti. Indicare un carico uniforme o un taglio a un'estremità e il numero di bulloni segue la resistenza di progetto del bullone. {{ui:Aggiungile tutte}} aggiunge le proposte come un unico passo di annullamento. Sono valori di partenza da rivedere, non un progetto di unione.
- **Verifiche di costruibilità.** {{ui:Problemi}} per un bullone che una chiave non raggiunge, bulloni troppo vicini per la chiave a bussola, cordoni d'angolo fuori dai loro limiti dimensionali e profili cavi che trattengono acqua. L'accessibilità della saldatura è nuova: un cordone d'angolo continuo che la torcia del saldatore non raggiunge è elencato con la parte di intralcio e la quota del cordone interessata. Vedere [Verifiche di costruibilità](topic:constructability).

**Fondazioni e armatura**

- **Verifiche di fondazione.** La scheda {{ui:Fondazioni}} verifica plinti, plinti combinati e platee sul terreno descritto: portanza, scorrimento e ribaltamento per carichi di esercizio; flessione, taglio, punzonamento, ancoraggio delle barre e armatura minima per carichi amplificati (ACI 318-19). Un pilastro vicino a un bordo o a uno spigolo è verificato con la sezione tagliata dal bordo del plinto. Il cedimento deriva dal modulo del terreno, una platea flessibile è risolta su molle da un modulo di sottofondo, e i gruppi di pali e i muri di sostegno hanno pannelli propri. I carichi dei pilastri possono essere digitati o presi da {{ui:Analisi}}. Vedere [Verifiche di fondazione](topic:foundation-checks).
- **Mappa di congestione dell'armatura.** La scheda {{ui:Congestione}} disegna una mappa di calore di ciascun plinto visto dall'alto: dove le barre lasciano troppo poco spazio perché il calcestruzzo scenda, rispetto alla regola dell'interferro libero e, se le si indicano, all'inerte più grosso e alla testa del vibratore. Vedere [Mappa di congestione dell'armatura](topic:rebar-congestion).

**Ossatura e fornitura**

- **Ossatura in legno e in lamiera leggera.** La scheda {{ui:Ossatura}} imposta pannelli di parete, solaio e tetto con ogni pezzo, un elenco di taglio, il materiale da acquistare e un disegno di officina in scala. {{ui:Colloca come aste}} inserisce i pezzi nel modello, e {{ui:Tavole PDF}} salva una tavola per ogni pannello. Dimensioni, interassi e architravi sono scelti dall'utente: DetailCraft non verifica che portino il carico. Vedere [Pannelli di ossatura in legno e lamiera leggera](topic:framing-panels).
- **Giacenze dei fornitori e tempi di consegna.** La scheda {{ui:Fornitura}} legge un elenco di giacenze di un fornitore (CSV) e mostra, per ogni profilo che l'elenco di taglio acquista, se ce n'è abbastanza in magazzino e quanto dura l'attesa. Mancanze e profili in ritardo sono in {{ui:Problemi}}. Non si ordina nulla. Vedere [Giacenze dei fornitori e tempi di consegna](topic:supplier-stock).

**Analisi e progettazione**

- **Che cosa cede per primo?** Nella scheda {{ui:Analisi}}, il pulsante trova la combinazione di resistenza che governa, l'asta più debole, di quanto possono crescere i carichi prima che la prima asta raggiunga il suo limite, e la piastra di testa o di taglio più debole dove è nota la resistenza a taglio dei suoi bulloni. Servono prima le combinazioni e una norma di progetto. Rifollamento, rottura a taglio per blocco, saldature ed effetto leva non sono verificati. Il proprio assistente collegato può chiedere lo stesso.
- **Live.** Spuntare {{ui:Live: risolvi di nuovo dopo ogni modifica}} e il telaio viene risolto di nuovo dopo ogni modifica.
- **Calcestruzzo, altro.** Un pilastro snello in un telaio non spostabile è progettato per il suo momento amplificato (ACI 318-19 6.6.4.5). Il periodo sismico può essere ricavato dall'analisi con il metodo di Rayleigh. Una soletta fatta di piastre riceve dai suoi momenti l'armatura che ogni strato richiede, e il taglio a una direzione. Vedere [Verificare gli elementi in calcestruzzo e creare i carichi sismici](topic:concrete-and-seismic).
- **Da verificare con un ingegnere.** I risultati di fondazione, calcestruzzo e Che cosa cede per primo sono ausili. I carichi da vento non sono ancora realizzati.

**In ogni app**

- **Lingue.** La guida è in 54 lingue. Quelle diverse dall'inglese sono bozze automatiche finché un madrelingua non le legge; dieci sono nuove (lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili, uzbeco).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} sceglie a capo, 2 righe o 1 riga. Una barra che già ci sta resta com'è; le altre scorrono lateralmente.
- **Griglia delle proprietà.** I campi del plinto usano la griglia condivisa: categorie comprimibili e densità compatta. L'aritmetica digitata come 2*450 funziona ancora.
- **Dispositivi di input.** Trackpad, penna, mouse 3D, controller e MIDI possono comandare le app. Vedere [Navigare in 3D](topic:navigate-3d).
- **Pannello dei problemi.** Gli avvisi delle nuove verifiche sopra compaiono nello stesso pannello {{ui:Problemi}} di prima.
- **Collegare il proprio assistente IA.** Il proprio assistente, collegato tramite CadCraft Studio, funziona con tutte e otto le app e vede solo ciò che si consente. Il collegamento con un clic, il connettore ospitato e la propria chiave API in Studio sono ancora da realizzare. Vedere [Usare DetailCraft con un assistente IA](topic:use-with-ai-assistants).

### Corretti nella 0.8.1

- **Lingue in Studio.** Studio e le edizioni in pacchetto possono cambiare lingua durante l'esecuzione; prima erano solo in inglese. Non è ancora provato su ogni piattaforma: segnalarci se la lingua non cambia.
- **Selezione a intersezione.** I programmi di installazione della 0.8.1 includono già il comportamento corretto di selezione a finestra presente nella versione web della 0.8; un programma di installazione più vecchio non lo aveva.
- **Tablet in verticale.** L'altezza libera della griglia va all'area di disegno, e la disposizione della tavola si attiva a 760 px o meno.

### Non ancora in questa versione

- **La trasmissione dei file NC a una macchina** non è ancora rilasciata.
- **Carichi da vento** per il calcestruzzo non sono ancora realizzati, e le verifiche del calcestruzzo e delle fondazioni sono da rivedere a cura di un ingegnere.
- **Firma del codice.** I programmi di installazione per Windows e il file .dmg per macOS non sono firmati, quindi Windows può mostrare un avviso e macOS chiede un clic destro, poi Apri.

Le modifiche precedenti sono in [Novità nella versione 0.7](topic:whats-new-0-7).
