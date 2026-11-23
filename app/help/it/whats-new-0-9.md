---
title: Novità della 0.9 (precedente)
summary: Dimensioni dell'acciaio UK dal Blue Book e angolari disuguali, disegni di officina per ogni parte in un unico set PDF, I miei profili per sezioni personalizzate, P-Delta e frequenze naturali, carichi da vento ASCE 7, sito sismico e combinazioni, e cursori in tempo reale con Segui.
keywords: novità 0.9, versione precedente, novità, note di rilascio, registro delle modifiche, 0.9, acciaio UK, Blue Book, ub, uc, pfc, shs, rhs, chs, angolare disuguale, disegno di officina, set di tavole, marchio di parte, pdf, I miei profili, profilo personalizzato, P-Delta, secondo ordine, frequenza naturale, elementi finiti, massa modale, carico da vento, ASCE 7, sisma, classe del sito, USGS, combinazioni di carico, LRFD, ASD, live, cursori, segui, persone, suggerimenti, modifiche, 0.8, 0.8.1, versione, nuove funzioni, montaggio, gru, tabella di carico, filmato, autopilota, connessioni, armatura, congestione, fondazione, plinto, platea, cedimento, ossatura, legno, lamiera sottile, elenco di taglio, costruibilità, accesso alla saldatura, fornitore, scorte, tempi di consegna, cosa cede per primo, calcestruzzo, sismico, soletta, lingue, assistente
from: ab0c7f05
---

Questo è ciò che è cambiato in DetailCraft 0.9, rispetto alla 0.8.1. La 0.9 introduce le dimensioni dell'acciaio UK, un disegno di officina per ogni parte in un'unica operazione, una scheda {{ui:Analysis}} più grande per i telai e la possibilità di vedere i cursori degli altri quando si lavora insieme.

## Novità

### Acciaio UK e disegni di officina

- **Dimensioni dell'acciaio UK.** Gli elenchi dei profili contengono ora 976 dimensioni dallo Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS e RHS, con le sezioni cave formate a freddo tenute separate (i loro nomi iniziano con CF). I nomi sono scritti partendo dalla famiglia, come UB305x165x40 o SHS100x100x5.0, e funziona anche digitarli come riportano i disegni: 305x165x40 UB, L100x100x10, SHS100x5. Vedere [Catalogo dei profili](topic:profile-catalog).
- **Angolari disuguali.** Gli angolari UEA mantengono entrambe le ali attraverso IFC in entrata e in uscita e attraverso i file NC, e uno specchio ribalta il pezzo da un capo all'altro.
- **Tutti i disegni di officina insieme.** Scegliere {{ui:Shop drawing}} nel gruppo {{ui:Output}} senza nulla di selezionato. La finestra elenca ogni contrassegno di parte, mostra l'anteprima di ciascuno, e {{ui:Download all}} (Scarica tutto) salva un unico PDF con una pagina per contrassegno, ciascuna intitolata "Tavola 3 di 42". {{ui:Download this sheet}} salva quella che si sta visualizzando. Anche canali, angolari e sezioni cave ora hanno le tavole. Vedere [Creare i disegni di officina](topic:shop-drawings).
- **I miei profili.** Un profilo personalizzato può ora essere conservato per ogni nuovo modello. Nel modulo Profilo personalizzato, lasciare {{ui:Keep in My profiles}} (Mantieni in I miei profili) spuntato; l'elenco {{ui:My profiles}} sotto di esso ha {{ui:Keep}}, {{ui:Use here}} e {{ui:Remove}}. L'elenco è conservato in questo browser (fino a 200), non nell'account. Vedere [Piastre e profili](topic:plates-and-profiles).

### Analisi

- **Secondo ordine (P-Delta).** Spuntare {{ui:Second order (P-Delta)}} (Secondo ordine (P-Delta)) accanto a Esegui nella scheda {{ui:Analysis}} e le forze assiali agiscono sul telaio deformato. Piastre e solai rigidi restano al primo ordine, con un avviso. Vedere [Forze, reazioni e spostamenti](topic:frame-analysis).
- **Frequenze naturali.** Il blocco {{ui:Finite elements: natural frequencies}} sotto i risultati trova i modi più bassi dello stesso modello, con periodo e massa modale efficace, e mostra un modo sul modello. Vedere [Forze, reazioni e spostamenti](topic:frame-analysis).
- **Carichi da vento e sito sismico.** Tre nuovi blocchi nella scheda {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} e {{ui:ASCE 7 load combinations}}. Vedere [Vento, sito sismico e combinazioni ASCE 7](topic:wind-seismic-combinations).

### Lavorare insieme

- **Cursori e nomi.** In una sessione Live il puntatore di ogni persona viene disegnato nel modello con il suo nome e colore, e ciò che ha selezionato riceve un riquadro.
- **Seguire una persona.** Aprire {{ui:People}} (Persone) nella sessione e scegliere {{ui:Follow}} (Segui) accanto a un nome; la vista si sposta insieme alla sua. L'host può scegliere {{ui:Ask everyone to follow me}}. Vedere [Seguire una persona in una sessione Live](topic:follow-in-live).

### In tutte le app

- I suggerimenti sono suggerimenti Bootstrap, la scheda di avvio ha un pulsante di chiusura, le barre delle schede scorrono lateralmente quando non ci stanno, e il nome della scheda del browser riporta il documento aperto seguito da DetailCraft e CadCraft.

## Corretto

- Un profilo personalizzato andava perso quando si avviava un nuovo modello.
- Canali, angolari e sezioni cave mancavano nel set dei disegni di officina.

## Limiti dichiarati

- I blocchi del vento, del sisma e degli elementi finiti sono ausili alla verifica. Un ingegnere verifica i risultati; non sono una verifica di norma. La ricerca USGS è stata provata su un sostitutivo, non sul servizio attivo.
- Gli elementi finiti e il P-Delta sono stati verificati con risultati di calcolo manuale e in forma chiusa, non su un edificio reale. L'analisi di instabilità non è ancora implementata.
- Nessun fabbricante UK ha ancora provato le dimensioni UK, e i file NC per gli angolari disuguali non sono ancora stati eseguiti su una macchina.
- Il set di disegni di officina è solo in PDF.
- Le lingue diverse dall'inglese sono bozze automatiche.
- Gli installatori di Windows non sono firmati digitalmente (Ulteriori informazioni, poi Esegui comunque); l'immagine disco per macOS non è notarizzata (clic con il pulsante destro, poi Apri).

Le modifiche precedenti sono nelle note delle versioni 0.8 e 0.8.1 più avanti in questa pagina.

## Precedenti: 0.8 e 0.8.1

Questo è ciò che è cambiato in DetailCraft 0.8 (1 novembre 2026) e 0.8.1 (2 novembre 2026), rispetto alla 0.7. La 0.7 verificava le aste in acciaio; la 0.8 pianifica i sollevamenti, propone le unioni, verifica le fondazioni e l'armatura, e dimensiona l'ossatura di pareti, solai e coperture in legno e in lamiera d'acciaio sottile.

### Novità

**Montaggio**

- **Piano di montaggio e filmato.** Nella scheda {{ui:Erection}} (Montaggio) descrivere una gru (dove si trova, il gancio più alto, l'imbracatura non presente nella tabella) e digitare le righe della sua tabella di carico. DetailCraft solleva il modello un gruppo alla volta, nell'ordine delle fasi e livello per livello, e verifica ogni sollevamento contro la tabella al suo raggio e contro il margine impostato. {{ui:Save movie}} (Salva filmato) scrive un unico file HTML che si riproduce offline in qualsiasi browser, anche su telefono. I sollevamenti fuori tabella, oltre il raggio o troppo alti sono in {{ui:Problems}} (Problemi). È un piano ricavato dai propri valori, non un piano di sollevamento. Vedere [Piano di montaggio e filmato](topic:erection-movie).

**Connessioni**

- **Autopilota delle connessioni.** La scheda {{ui:Autopilot}} (Autopilota) esamina ogni giunto privo di unione e ne propone una in base alle forme: piastre di base, piastre di taglio, piastre di testa per le travi contrassegnate come travi a momento, giunzioni e fazzoletti. Inserendo un carico uniforme o un taglio a un'estremità, il numero di bulloni dipende dalla resistenza di progetto del bullone. {{ui:Add them all}} (Aggiungile tutte) aggiunge le proposte come un'unica operazione di annullamento. Sono valori di partenza da rivedere, non un progetto di unione.
- **Verifiche di costruibilità.** {{ui:Problems}} (Problemi) segnala un bullone che una chiave non raggiunge, bulloni troppo vicini per la chiave a bussola, cordoni d'angolo fuori dai limiti di dimensione e sezioni cave che trattengono l'acqua. L'accesso alla saldatura è nuovo: un cordone d'angolo su tutto il perimetro che la torcia del saldatore non raggiunge viene elencato con la parte che lo ostacola e la quota della saldatura interessata. Vedere [Verifiche di costruibilità](topic:constructability).

**Fondazioni e armatura**

- **Verifiche delle fondazioni.** La scheda {{ui:Foundation}} (Fondazioni) verifica plinti, plinti combinati e platee sul terreno descritto: portanza, scorrimento e ribaltamento per i carichi di esercizio; flessione, taglio, punzonamento, ancoraggio e armatura minima per i carichi di calcolo (ACI 318-19). Un pilastro vicino a un bordo o a uno spigolo viene verificato con la sezione tagliata dal bordo del plinto. Il cedimento deriva dal modulo del terreno; una platea flessibile viene risolta su molle a partire da un modulo di sottofondo, e i gruppi di pali e i muri di sostegno hanno pannelli propri. I carichi dei pilastri possono essere digitati o ricavati dalla scheda {{ui:Analysis}} (Analisi). Vedere [Verifiche delle fondazioni](topic:foundation-checks).
- **Mappa di congestione dell'armatura.** La scheda {{ui:Congestion}} (Congestione) disegna una mappa termica di ogni plinto visto dall'alto: dove le barre lasciano troppo poco spazio perché il calcestruzzo possa scendere, rispetto alla regola della distanza libera e, se vengono inseriti, all'inerte più grande e alla testa del vibratore. Vedere [Mappa di congestione dell'armatura](topic:rebar-congestion).

**Ossatura e fornitura**

- **Ossatura in legno e in lamiera sottile.** La scheda {{ui:Framing}} (Ossatura) dimensiona i pannelli di parete, solaio e copertura con ogni pezzo, un elenco di taglio, il materiale da acquistare e un disegno di officina in scala. {{ui:Place as members}} (Colloca come aste) inserisce i pezzi nel modello, e {{ui:PDF sheets}} (Tavole PDF) salva una tavola per ogni pannello. Dimensioni, interassi e architravi sono decisi dal progettista: DetailCraft non verifica che portino il carico. Vedere [Pannelli di ossatura in legno e lamiera sottile](topic:framing-panels).
- **Scorte del fornitore e tempi di consegna.** La scheda {{ui:Supply}} (Fornitura) legge l'elenco delle scorte di un fornitore (CSV) e mostra, per ogni sezione che l'elenco di taglio acquista, se ce n'è abbastanza in magazzino e quanto dura l'attesa. Le mancanze e le sezioni in ritardo sono in {{ui:Problems}} (Problemi). Non viene ordinato nulla. Vedere [Scorte del fornitore e tempi di consegna](topic:supplier-stock).

**Analisi e progetto**

- **Cosa cede per primo?** Nella scheda {{ui:Analysis}} (Analisi) il pulsante trova la combinazione di resistenza che governa, l'asta più debole, di quanto possono crescere i carichi prima che la prima asta raggiunga il suo limite, e la piastra di testa o la piastra di taglio più debole dove è nota la resistenza a taglio dei suoi bulloni. Servono prima le combinazioni e una norma di progetto. Rifollamento, rottura a blocco, saldature ed effetto leva non vengono verificati. Anche l'assistente collegato può chiedere lo stesso.
- **Live.** Spuntare {{ui:Live: solve again after each edit}} (Live: risolvi di nuovo dopo ogni modifica) e il telaio viene risolto di nuovo dopo ogni modifica.
- **Calcestruzzo e altro.** Un pilastro snello in un telaio a nodi fissi viene progettato per il suo momento amplificato (ACI 318-19 6.6.4.5). Il periodo sismico può essere ricavato dall'analisi con il metodo di Rayleigh. Una soletta formata da piastre riceve dai suoi momenti l'acciaio che ogni strato richiede, e anche il taglio a una direzione. Vedere [Verifica degli elementi in calcestruzzo e carichi sismici](topic:concrete-and-seismic).
- **Da verificare per un ingegnere.** I risultati delle fondazioni, del calcestruzzo e di Cosa cede per primo sono ausili. I carichi da vento non sono ancora implementati.

**In tutte le app**

- **Lingue.** La guida è disponibile in 54 lingue. Quelle diverse dall'inglese sono bozze automatiche finché un madrelingua non le ha riviste; dieci sono nuove (lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili, uzbeco).
- **Righe della barra degli strumenti.** {{ui:Settings}} (Impostazioni) › {{ui:General}} (Generali) › {{ui:Toolbar rows}} (Righe della barra degli strumenti) sceglie a capo, 2 righe o 1 riga. Una barra che già ci sta resta com'è; le altre scorrono lateralmente.
- **Griglia delle proprietà.** I campi del plinto usano la griglia condivisa: categorie ripiegabili e densità compatta. Le operazioni aritmetiche digitate, come 2*450, funzionano ancora.
- **Dispositivi di input.** Trackpad, penna, mouse 3D, controller e MIDI possono comandare le app. Vedere [Navigare in 3D](topic:navigate-3d).
- **Pannello dei problemi.** Gli avvisi dei nuovi controlli sopra compaiono nello stesso pannello {{ui:Problems}} (Problemi) di prima.
- **Collegare l'assistente IA.** L'assistente, collegato tramite CadCraft Studio, funziona con tutte e otto le app e vede solo ciò che si consente. Il collegamento con un clic, il connettore ospitato e la chiave API in Studio sono ancora da realizzare. Vedere [Usare DetailCraft con un assistente IA](topic:use-with-ai-assistants).

### Corretto nella 0.8.1

- **Lingue in Studio.** Studio e le edizioni impacchettate possono cambiare lingua durante l'esecuzione; prima erano solo in inglese. Non è ancora stato provato su tutte le piattaforme: segnalare se la lingua non cambia.
- **Selezione con finestra di intersezione.** Gli installatori 0.8.1 contengono già il comportamento corretto della selezione con finestra di intersezione presente nella build web 0.8; un installatore più vecchio non lo aveva.
- **Tablet in verticale.** L'altezza libera della griglia va alla tela, e il layout della tavola inizia a 760 px o meno.

### Non ancora in questa versione

- Inviare file NC a una macchina non è ancora rilasciato.
- I carichi da vento per il calcestruzzo non sono ancora implementati, e le verifiche del calcestruzzo e delle fondazioni sono da rivedere da parte di un ingegnere.
- Firma del codice. Gli installatori di Windows e il file .dmg di macOS non sono firmati, quindi Windows può mostrare un avviso e macOS chiede di fare clic con il pulsante destro, poi Apri.

Le modifiche precedenti sono in [Novità della 0.7](topic:whats-new-0-7).
