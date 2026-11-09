---
title: Novità della 0.8 e della 0.8.1
summary: Un filmato di montaggio dalla tabella di carico di una gru, un autopilota per le connessioni, una mappa di congestione delle armature, verifiche delle fondazioni, pannelli di telaio in legno e in acciaio sottile, verifiche di costruibilità e di accesso alle saldature, scorte dei fornitori, cosa cede per primo, un ricalcolo live, altre verifiche del calcestruzzo e le correzioni della 0.8.1.
keywords: novità, cosa c'è di nuovo, note di rilascio, registro modifiche, modifiche, 0.8, 0.8.1, versione, nuove funzioni, montaggio, gru, tabella di carico, filmato, autopilota, connessioni, armatura, congestione, fondazione, plinto, platea, cedimento, telaio, legno, acciaio sottile, distinta di taglio, costruibilità, accesso alle saldature, fornitore, scorte, tempi di consegna, cosa cede per primo, live, calcestruzzo, sismico, solaio, lingue, assistente
from: 6e33e052
---

Ecco cosa è cambiato in DetailCraft 0.8 (1 novembre 2026) e 0.8.1 (2 novembre 2026), rispetto alla versione 0.7. La 0.7 verificava le membrature in acciaio; la 0.8 pianifica i sollevamenti, propone le connessioni, verifica le fondazioni e le armature, e definisce i telai di pareti, solai e coperture in legno e in acciaio sottile.

## Novità

### Montaggio

- **Piano di montaggio e filmato.** Nella scheda {{ui:Montaggio}}, descrivere una gru (dove si trova, il gancio più alto, l'imbracatura che non è nella tabella) e digitare le righe della sua tabella di carico. DetailCraft solleva il modello un assieme alla volta, in ordine di fase e livello per livello, e verifica ogni sollevamento contro la tabella al suo raggio e contro il margine impostato. {{ui:Salva filmato}} scrive un unico file HTML che si riproduce offline in qualsiasi browser, anche su telefono. I sollevamenti sopra la tabella, oltre il suo limite o troppo alti sono in {{ui:Problemi}}. È un piano basato sui propri numeri, non un piano di sollevamento. Vedi [Piano di montaggio e filmato](topic:erection-movie).

### Connessioni

- **Autopilota delle connessioni.** La scheda {{ui:Autopilota}} esamina ogni giunto senza connessione e ne propone una partendo dalle forme: piastre di base, piastre di taglio, piastre di testa per le travi contrassegnate come travi a momento, giunzioni e fazzoletti. Con un carico uniforme o un taglio a un'estremità, il numero di bulloni segue la resistenza di progetto del singolo bullone. {{ui:Aggiungile tutte}} aggiunge le proposte come un'unica operazione da annullare. Sono valori di partenza da rivedere, non un progetto di connessione.
- **Verifiche di costruibilità.** {{ui:Problemi}} per un bullone che una chiave non raggiunge, bulloni troppo vicini per la chiave a bussola, saldature d'angolo fuori dai limiti di dimensione e profili cavi che trattengono l'acqua. L'accesso alle saldature è nuovo: una saldatura d'angolo a tutto giro che la torcia del saldatore non raggiunge viene elencata con il pezzo che la ostacola e la quota della saldatura interessata. Vedi [Verifiche di costruibilità](topic:constructability).

### Fondazioni e armatura

- **Verifiche delle fondazioni.** La scheda {{ui:Fondazioni}} verifica plinti, plinti combinati e platee sul terreno descritto: portanza, scorrimento e ribaltamento sotto i carichi di esercizio; flessione, taglio, punzonamento, ancoraggio e armatura minima sotto i carichi di calcolo (ACI 318-19). Un pilastro vicino a un bordo o a uno spigolo viene verificato con la sezione ridotta dal bordo del plinto. Il cedimento deriva dal modulo del terreno, una platea flessibile viene risolta su molle da un modulo di sottofondo, e i gruppi di pali e i muri di sostegno hanno pannelli propri. I carichi dei pilastri possono essere digitati o presi da {{ui:Analisi}}. Vedi [Verifiche delle fondazioni](topic:foundation-checks).
- **Mappa della congestione delle armature.** La scheda {{ui:Congestione}} disegna una mappa di calore di ogni plinto visto dall'alto: dove le barre lasciano troppo poco spazio perché il calcestruzzo possa scendere, rispetto alla regola della distanza libera e, se si indicano, all'aggregato più grande e alla testa del vibratore. Vedi [Mappa della congestione delle armature](topic:rebar-congestion).

### Telai e forniture

- **Telai in legno e in acciaio sottile.** La scheda {{ui:Ossatura}} definisce pannelli di parete, solaio e copertura con ogni pezzo, una distinta di taglio, il materiale da acquistare e un disegno di officina in scala. {{ui:Colloca come aste}} inserisce i pezzi nel modello, e {{ui:Tavole PDF}} salva un foglio per ogni pannello. Dimensioni, interassi e architravi sono a carico dell'utente: DetailCraft non verifica che portino il carico. Vedi [Pannelli di telaio in legno e in acciaio sottile](topic:framing-panels).
- **Scorte dei fornitori e tempi di consegna.** La scheda {{ui:Fornitura}} legge l'elenco delle scorte di un fornitore (CSV) e mostra, per ogni sezione che la distinta di taglio acquista, se ce n'è abbastanza in magazzino e quanto dura l'attesa. Le mancanze e le sezioni in ritardo sono in {{ui:Problemi}}. Non viene effettuato alcun ordine. Vedi [Scorte dei fornitori e tempi di consegna](topic:supplier-stock).

### Analisi e progetto

- **Cosa cede per primo?** Nella scheda {{ui:Analisi}}, il pulsante trova la combinazione di resistenza che governa, la membratura più debole, di quanto possono crescere i carichi prima che la prima membratura raggiunga il suo limite, e la piastra di testa o di taglio più debole dove è nota la resistenza a taglio dei suoi bulloni. Servono prima le combinazioni e un codice di progetto. Non vengono verificati rifollamento, taglio a blocco, saldature e leva (prying). L'assistente collegato può chiedere lo stesso.
- **Live.** Spuntare {{ui:Live: risolvi di nuovo dopo ogni modifica}} e il telaio viene risolto di nuovo dopo ogni modifica.
- **Calcestruzzo e altro.** Un pilastro snello in un telaio senza spostamento viene dimensionato per il suo momento amplificato (ACI 318-19 6.6.4.5). Il periodo sismico può essere ricavato dall'analisi con il metodo di Rayleigh. Un solaio composto di piastre riceve dai suoi momenti l'acciaio richiesto da ogni strato, e il taglio in una direzione. Vedi [Verifiche del calcestruzzo e carichi sismici](topic:concrete-and-seismic).
- **Da far verificare a un ingegnere.** I risultati delle fondazioni, del calcestruzzo e di Cosa cede per primo sono strumenti di supporto. I carichi del vento non sono ancora implementati.

### In ogni app

- **Lingue.** La guida è in 54 lingue. Quelle diverse dall'inglese sono bozze automatiche finché un madrelingua non le legge; dieci sono nuove (lituano, lettone, bosniaco, marathi, telugu, albanese, afrikaans, filippino, swahili, uzbeco).
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} sceglie a capo, 2 righe o 1 riga. Una barra che già ci sta resta com'è; le altre scorrono in orizzontale.
- **Griglia delle proprietà.** I campi del plinto usano la griglia condivisa: categorie ripiegabili e una densità compatta. I calcoli digitati, come 2*450, funzionano ancora.
- **Dispositivi di input.** Trackpad, penna, mouse 3D, controller e MIDI possono guidare le app. Vedi [Navigare in 3D](topic:navigate-3d).
- **Pannello dei problemi.** Gli avvisi delle nuove verifiche compaiono nello stesso pannello {{ui:Problemi}} di prima.
- **Collegare la propria IA.** Un assistente proprio, collegato tramite CadCraft Studio, funziona con tutte e otto le app e vede solo ciò che si consente. Il collegamento con un clic, il connettore ospitato e la propria chiave API in Studio sono ancora da realizzare. Vedi [Usare DetailCraft con un assistente IA](topic:use-with-ai-assistants).

## Corretti nella 0.8.1

- **Lingue in Studio.** Studio e le edizioni impacchettate possono cambiare lingua a runtime; prima erano solo in inglese. Non è ancora stato provato su tutte le piattaforme: segnalare se la lingua non cambia.
- **Selezione con finestra di attraversamento.** I programmi di installazione 0.8.1 includono già il comportamento corretto della selezione a finestra della build web 0.8; un programma di installazione precedente non lo aveva.
- **Tablet in verticale.** Lo spazio residuo in altezza della griglia va alla tela, e il layout dei fogli parte da 760 px o meno.

## Non ancora in questa versione

- **Inviare NC a una macchina** non è ancora rilasciato.
- **Carichi del vento** per il calcestruzzo non sono ancora implementati, e le verifiche del calcestruzzo e delle fondazioni sono da far rivedere a un ingegnere.
- **Firma del codice.** I programmi di installazione per Windows e il .dmg per macOS non sono firmati: Windows può mostrare un avviso, e macOS chiede un clic destro, poi Apri.

Le modifiche precedenti sono in [Novità della 0.7](topic:whats-new-0-7).
