---
title: Novità nella versione 0.7 (precedente)
summary: Verifiche di profili a I in acciaio con combinazioni di carico da ASCE 7 o EN 1990 e verifica delle aste secondo AISC 360 o EN 1993-1-1, esportazione USD del modello in acciaio, uno strumento assistente per USD, una barra multifunzione Acciaio con pulsanti grandi e piccoli, pannelli che si richiudono in ordine e finestre di dialogo che si spostano.
keywords: novità 0.7, versione precedente, note di rilascio, registro modifiche, modifiche, 0.7, versione, nuove funzionalità, verifiche di progetto, progettazione in acciaio, sfruttamento, utilizzo, combinazioni di carico, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocodice, Appendice Nazionale, carico variabile di copertura, limite di freccia, usd, usda, usdc, usdz, openusd, assistente, mcp, barra multifunzione acciaio, barra multifunzione, pulsante diviso, unità, compatta, pannelli, finestre di dialogo, portoghese
from: 54a7a8f0
---

Ecco cosa è cambiato in DetailCraft 0.7, rispetto alla 0.6. L'analisi del telaio della 0.6 ora ha un secondo passo: la verifica delle aste in acciaio secondo una norma di progetto.

## Novità

### Giunti a taglio a sbieco (0.7.1)

- **Due profili a I che si incontrano con un angolo**, come un ginocchio di portale o un colmo: selezionare entrambi, scegliere {{ui:Taglio a sbieco}} nel menu {{ui:Altro}} del gruppo {{ui:Collega}}, e entrambe le estremità vengono tagliate sul piano che divide a metà l'angolo. Piastre di testa unite con bulloni e irrigidimenti d'anima sono caselle di spunta nella nuova finestra Taglio a sbieco, i cui campi numerati corrispondono a un disegno del proprio giunto che si aggiorna mentre si digita. Il taglio a sbieco segue le aste quando vengono spostate e si riflette nei disegni, nei file NC (tagli obliqui), in IFC e nella distinta base. Vedere [Giunti a taglio a sbieco](topic:mitres).

### Verifiche di progetto

- **Combinazioni di carico dalla norma.** Nella scheda {{ui:Analisi}}, il nuovo blocco {{ui:Verifiche di progetto}} ha una {{ui:Norma di progetto}}: ASCE 7 + AISC 360 (USA, LRFD) oppure EN 1990 + EN 1993-1-1 (Eurocodice). Assegnare a ogni caso di carico il suo tipo (permanente, variabile, il nuovo carico variabile di copertura, neve, vento, sisma), premere {{ui:Crea combinazioni}}, e DetailCraft scrive le combinazioni di resistenza e di esercizio della norma per i propri casi. Le combinazioni digitate a mano restano. Vedere [Creare le combinazioni](topic:design-checks#make-the-combinations).
- **Valori dell'Appendice Nazionale.** Per l'Eurocodice i coefficienti partono dai valori raccomandati; {{ui:Valori dell'Appendice Nazionale}} permette di digitare quelli del proprio paese, che vengono salvati nel modello. Vedere [Creare le combinazioni](topic:design-checks#make-the-combinations).
- **Verifica aste.** {{ui:Verifica aste}} verifica ogni profilo a I in acciaio a trazione, a compressione con instabilità, a flessione con instabilità flesso-torsionale, a taglio, a flessione con sforzo assiale e a freccia rispetto al {{ui:Limite di freccia}} impostato. La tabella mostra lo sfruttamento di ciascuna asta, la verifica che governa e la sua combinazione, e le aste sono colorate sul modello (blu, verde, ocra, rosso, grigio per non verificate). Vedere [Verificare le aste](topic:design-checks#check-the-members).
- **Nel rapporto.** {{ui:Rapporto (PDF)}} e {{ui:Rapporto (CSV)}} aggiungono le edizioni delle norme, le impostazioni, lo sfruttamento per asta e ogni clausola usata. Vedere [Il rapporto](topic:design-checks#the-report).
- **Un ausilio finché un ingegnere non l'ha verificato.** Impiega solo forze del primo ordine. Tubi, angolari, profili a C, forme saldate e parti snelle o di classe 4 risultano "non verificato", con il motivo; torsione, unioni e calcestruzzo non sono verificati. Vedere [Cosa non è verificato](topic:design-checks#what-is-not-checked).

### USD

- **Esportare il modello in acciaio come USD.** {{ui:USD}} nel gruppo {{ui:Uscita}} scrive il modello come {{ui:Testo (.usda)}}, {{ui:Binario (.usdc)}} o {{ui:Pacchetto (.usdz)}} per programmi di rendering e per l'assemblaggio di scene: ogni assieme contiene le proprie parti, ogni parte è la sua sezione estrusa per tutta la lunghezza con gli scassi tagliati, e ciascuna riporta la marca, il profilo, la qualità, la lunghezza e il peso. Fori dei bulloni, bulloni, saldature e plinti non sono nelle mesh USD. Vedere [Esportare il modello in acciaio come USD](topic:usd).

### Assistenti IA

- **USD per gli assistenti.** Il proprio assistente, collegato tramite CadCraft Studio, può esportare il modello come USD (`usd_export`) e, in Studio, scriverlo in una cartella consentita. Vedere [Che cosa può chiedere un assistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Modifiche

- **La barra multifunzione Acciaio** ha pulsanti grandi e piccoli: un {{ui:Trave}} grande accanto a {{ui:Pilastro}}, {{ui:Controvento}} e {{ui:Piastra}} piccoli in {{ui:Modellazione}} › {{ui:Aste}}; un {{ui:Piastre di testa}} grande in {{ui:Dettaglio}} › {{ui:Unioni}}, con {{ui:Giunzione}} e {{ui:Fazzoletto}} che condividono un pulsante diviso; un {{ui:Incolla}} grande in {{ui:Modifica}} › {{ui:Appunti}}, con {{ui:Incolla nella stessa posizione}} e {{ui:Duplica}} dietro la freccia del gruppo. {{ui:Fabbricazione}} › {{ui:Scambio}} ha {{ui:Esporta USD}} accanto a IFC. Gli altri stili dei menu appaiono come prima. Vedere [Menu, tasti e mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analisi del telaio](topic:frame-analysis) ora rimanda alle verifiche di progetto, e le sue combinazioni possono essere create dalla norma.

## In ogni app

- **Unità.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Unità}} ha un elenco per ciascuno di lunghezza, area, volume, angolo e pendenza, con le dimensioni esatte date dalle definizioni delle unità (il piede US survey è un'unità a sé). Disattivare le unità mai usate le fa uscire dagli elenchi; contrassegnarne una con la stella fa partire il nuovo lavoro da essa. Un file mantiene sempre la sua unità. Le caselle proprie di DetailCraft non seguono ancora gli elenchi: le sue lunghezze sono ancora digitate in millimetri. Vedere [Unità, valori digitati ed elenchi delle unità](common:unit-lists).
- **Disposizione più densa e pannelli che si richiudono in ordine.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Densità della disposizione}} › {{ui:Compatta}} fa entrare più contenuto nello schermo (gli schermi touch e i telefoni mantengono i pulsanti grandi). Ogni pannello laterale ha una sottile barra del titolo: trascinarla per ancorare o rendere mobile il pannello, rilasciarla sulla barra di un altro pannello per condividere un unico riquadro come schede, fissarlo perché scivoli verso il bordo, oppure nasconderlo e richiamarlo dal bordo. Vedere [Disporre i pannelli](common:arrange-panels#make-the-layout-denser).
- **Le finestre di dialogo si spostano.** Trascinare una finestra di dialogo per la sua barra del titolo fuori dal disegno; tornerà dove è stata lasciata. Fare doppio clic sulla barra del titolo per centrarla di nuovo. Vedere [Spostare una finestra di dialogo](common:arrange-panels#move-a-dialog).
- **Ricette per gli assistenti IA.** Dieci richieste svolte per il proprio assistente (riordinare un disegno, stampare un set di tavole, verificare i disegni, porre domande su un modello, totalizzare un computo, provare una variante di un componente…), ciascuna con gli strumenti che chiama e i permessi di cui ha bisogno, e ciascuna riprodotta dai nostri test. Le app non contengono IA. Vedere [Ricette per gli assistenti IA](common:assistants-recipes).
- **Lingue.** **Português (Portugal)** è nuova in {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Lingua}}. Italiano, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** ora hanno ogni parola delle app, come bozze non ancora verificate da un madrelingua. Gli argomenti della guida sono in inglese.
- **CadCraft Studio** indica il motivo per cui un controllo di aggiornamento non è riuscito (nessun file per il proprio sistema, nessuna rete, firma non valida) invece di mostrare solo "Fine", e smette di riproporre una scheda Novità chiusa finché non esce una versione più recente.

## Non ancora in questa versione

- **La 0.7 non è firmata digitalmente.** La firma, e il pacchetto per Microsoft Store, sono passati alla 0.8 perché la convalida del certificato non è ancora arrivata. Verificare lo SHA-256 accanto a ciascun file su getcadcraft.com/download. Su Windows, se SmartScreen blocca il programma di installazione, scegliere {{ui:Ulteriori informazioni}}, poi {{ui:Esegui comunque}}. Su Mac, la prima volta, fare clic destro su CadCraft Studio e scegliere {{ui:Apri}}. CadCraft Studio non è ancora in un negozio di app, e non esiste ancora una versione per iPad o iPhone.
- Gli elenchi di angolo e pendenza in {{ui:Unità}} vengono salvati, ma nessuna casella li legge ancora.
- **Le verifiche di progetto non sono ancora state riviste da un ingegnere.** I nostri test le confrontano con valori di tabelle stampate e con formule svolte a mano, non ancora con gli esempi svolti di una guida di progettazione. Fino a una revisione sono un ausilio: verificare a mano le aste importanti.
- Le verifiche di progetto usano forze del primo ordine (senza effetti del secondo ordine) e verificano solo profili a I. Non ancora realizzati: tubi, angolari, profili a C, forme saldate, parti snelle (AISC) o di classe 4 (Eurocodice) a flessione, torsione, instabilità a taglio combinata con la flessione, unioni, fatica, incendio, dettagli sismici e calcestruzzo. Una parte snella compressa esclude le verifiche a compressione, e l'asta risulta "superata, verificata in parte".
- L'analisi del telaio è ancora del primo ordine e lineare, e non è ancora stata provata da un ingegnere su un lavoro reale.
- Fori dei bulloni, bulloni, saldature e plinti non sono nell'esportazione USD.

Tutto il resto è in [Ciò che non è ancora implementato](topic:not-built-yet).
