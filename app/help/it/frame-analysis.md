---
title: Analizza il telaio
summary: Sforzi, reazioni e frecce di travi, pilastri e controventi così come disegnati, sotto casi di carico e combinazioni che imposti. Un ausilio all'analisi, non una verifica normativa; le verifiche di progetto sono un passo a parte.
keywords: analisi, analisi strutturale, analisi di telaio, metodo della rigidezza, carichi, caso di carico, combinazione, carico permanente, carico variabile, peso proprio, reazioni, momento flettente, taglio, sforzo normale, freccia, deformata, vincoli, cerniera, incastro, svincolo, rapporto, pdf, csv, CraftScript, frame3d
from: ba0081bc
---

La scheda {{ui:Analisi}} in basso trova le forze in ogni trave, pilastro e controvento del modello, le reazioni alle basi dei pilastri e quanto si inflettono le aste, per i carichi che assegni.

:::warning
È un **ausilio all'analisi, non una verifica normativa**. L'analisi non applica alcun codice di progetto: non dimensiona le aste, non verifica le resistenze né le unioni, e non sceglie i coefficienti di carico. Un ingegnere controlla il modello, i suoi carichi e i vincoli, e decide cosa significano i numeri. Per le verifiche delle aste secondo ASCE 7 / AISC 360 o EN 1990 / EN 1993-1-1 vedi [Verifica delle aste in acciaio secondo una norma di progetto](topic:design-checks), un passo separato che è anch'esso un ausilio.
:::

## Eseguire

1. Aprire la scheda {{ui:Analisi}}.
2. Selezionare una o più aste nella vista, scegliere un {{ui:Caso}}, un {{ui:Carico}} e una {{ui:Direzione}}, digitare il valore e premere {{ui:Aggiungi carico}}. Un carico distribuito lungo un'asta è in kN/m, un carico concentrato in kN. {{ui:Verso il basso (gravità)}} è quello usuale.
3. Premere {{ui:Esegui analisi}}.

La tabella elenca per ogni asta lo sforzo normale massimo N, i tagli Vz e Vy, i momenti flettenti My e Mz, la torsione T e la sua freccia, con il momento maggiore per primo; fare clic sul nome di un'asta per selezionarla. Sotto ci sono le reazioni a ciascun appoggio. {{ui:Sul modello}} disegna la deformata, oppure un'azione come diagramma accanto a ciascuna asta con il valore massimo scritto nel suo punto. I risultati diventano obsoleti appena il modello cambia: eseguire di nuovo l'analisi.

Ogni carico, caso e impostazione è un unico passo di annullamento ({{key:Mod+Z}}) ed è salvato nel file del modello.

## Casi di carico e combinazioni

L'analisi parte da tre: **Permanente** (il peso proprio delle aste, dalle sezioni disegnate e 7850 kg/m³), **Variabile** (vuoto) e **Permanente + variabile**. Aggiungere casi propri (vento, neve …) e combinazioni: una combinazione somma i casi con i coefficienti che digiti. L'analisi è lineare, quindi ogni caso è risolto una volta e le combinazioni sono somme. Digitare i coefficienti a mano, oppure scegliere una norma di progetto e lasciare che {{ui:Crea combinazioni}} scriva quelle della norma ([Verifica delle aste in acciaio secondo una norma di progetto](topic:design-checks)).

## Di cosa è fatto il telaio

- Travi, pilastri e controventi, ciascuno sulla propria linea di lavoro (la linea disegnata), con le proprietà reali della sezione calcolate dal suo contorno. Piastre, scale, plinti e bulloni non fanno parte del telaio.
- Un'asta è divisa dove l'estremità di un'altra asta vi cade sopra, così una trave che si innesta su un pilastro a metà altezza si collega al pilastro lì.
- **Basi dei pilastri**: incastrate (all'inizio) o incernierate (trattenute e impedite di ruotare nella torsione, libere di ruotare). Una piastra di base crea sempre un appoggio.
- **Estremità delle travi**: una piastra di testa è rigida, un'unione a taglio è incernierata. {{ui:Estremità di trave senza unione}} imposta le altre. I **controventi** sono incernierati a entrambe le estremità.
- Selezionare un'asta per assegnare alle sue estremità, o alla base di un pilastro, una regola propria.
- Acciaio ovunque: E = 200 GPa, G = 77 GPa.

Se il telaio può muoversi senza flettere nulla — un meccanismo, per esempio basi incernierate senza controventi in una direzione — l'esecuzione si ferma e indica dove e in quale direzione; bloccarlo lì con un vincolo, un nodo rigido o un controvento.

## Segni

N > 0 è trazione. My > 0 mette in trazione il lato −z locale dell'asta: una trave che si inflette sotto la gravità ha My > 0. Mz > 0 mette in trazione il lato −y locale. La freccia è misurata dalla retta tra le estremità dell'asta. L'asse z locale di un'asta punta verso l'alto (per un pilastro: lungo X); i suoi assi locali ruotano con la rotazione dell'asta.

## Il rapporto

{{ui:Rapporto (PDF)}} e {{ui:Rapporto (CSV)}} contengono tutto: le ipotesi su cui è costruito il telaio, sezioni, casi e combinazioni, poi per ogni caso e combinazione le reazioni (con le somme dei carichi e delle reazioni, che si equilibrano), gli sforzi delle aste e gli spostamenti, e un inviluppo di tutti i casi. {{ui:Esporta come CraftScript}} scrive lo stesso telaio come script per l'area di lavoro Script di PartCraft, dove la funzione della libreria `frame3d` lo risolve passo passo in codice leggibile.

## Metodo

Il metodo della rigidezza diretta, lineare e del primo ordine a meno che non si spunti *Secondo ordine (P-Delta)*: travi-colonne a due nodi con rigidezze assiali, torsionali e due flessionali (senza deformazione a taglio né ingobbamento), svincoli delle estremità con condensazione statica, carichi lungo le aste tramite le funzioni di forma delle aste stesse. Le risposte sono confrontate con i casi classici dei libri di testo (mensole, travi semplici, incastrate e continue, un telaio a portale, una griglia in torsione, un traliccio).

**Secondo ordine (P-Delta).** Spuntare *Secondo ordine (P-Delta)* accanto a Esegui: ogni combinazione viene risolta di nuovo con gli sforzi assiali delle aste che agiscono sul telaio deformato (ogni asta suddivisa in 4 parti, così conta anche la flessione di un'asta tra le estremità), finché gli sforzi assiali si stabilizzano. La riga del risultato indica il numero di passaggi e quanto è aumentato lo spostamento laterale; i momenti, le frecce, le verifiche di progetto e il rapporto usano poi questi risultati. Oltre il carico critico elastico del telaio l'esecuzione si ferma e lo segnala. È elastico con piccole rotazioni, solo flessionale, senza riduzione di rigidezza né carichi nozionali (non è di per sé il metodo di analisi diretta AISC); solai, muri e impalcati rigidi restano del primo ordine.

**Frequenze naturali (elementi finiti).** Il blocco {{ui:Elementi finiti: frequenze naturali}} sotto i risultati trova i modi più bassi dello stesso modello con il motore a elementi finiti: travi con i loro svincoli, solai e muri come gusci piani a quattro nodi, impalcati rigidi, vincoli. Scegliere quanti modi (3, 6, 10 o 20) e l'elemento del solaio (il guscio a quattro nodi per solai spessi o sottili, oppure quello per solai sottili) e premere {{ui:Trova le frequenze}}. La tabella dà la frequenza di ciascun modo in Hz, il suo periodo in secondi e la sua massa modale efficace lungo X, Y e Z come quota della massa che può muoversi; {{ui:Mostra sul modello}} disegna un modo qualsiasi come si disegna la deformata. La massa è la densità del materiale per il volume: i carichi non aggiungono massa, e un materiale senza densità non ne ha. Il rapporto (PDF, CSV) riporta la tabella. È elastico e solo per piccoli spostamenti, e qui non si genera alcun carico sismico o da vento da una norma. Non è una verifica normativa; l'ingegnere controlla i risultati.

**Spettro di risposta, storia temporale e spinta progressiva.** Tre altri blocchi stanno sotto le frequenze, usando lo stesso modello a elementi finiti. La massa per tutti è la densità del materiale più i carichi verticali verso il basso dei casi che spunti, ciascuno moltiplicato per un coefficiente che digiti (per esempio Permanente con 1 e Variabile con la quota che consideri come massa).

{{ui:Spettro di risposta}} legge ciascun modo da uno spettro che fornisci (una tabella di periodo e accelerazione, oppure la forma ASCE 7 da SDS, SD1 e TL; il pulsante {{ui:Usa i valori del blocco Sismico}} copia quelli dal blocco Sismico) e combina i modi con CQC, SRSS, la regola del dieci per cento o una somma assoluta, poi combina le direzioni X, Y e Z (100 % + 30 % o SRSS). Fornisce il taglio alla base, gli spostamenti di interpiano, gli sforzi alle estremità delle aste e una tabella dei modi che avvisa quando i modi usati portano meno del 90 % della massa. È possibile scalare i risultati con un fattore o fino a un taglio alla base che digiti; il blocco non calcola mai da solo quel taglio alla base. I risultati non hanno segno.

{{ui:Storia temporale}} applica un'accelerazione al suolo per sovrapposizione modale (esatta per le rette del registro tra i punti) oppure per integrazione diretta (accelerazione media di Newmark con smorzamento di Rayleigh). L'ingresso è un seno o un impulso inventato (sempre indicato come sintetico), un registro che incolli, oppure un file di testo che apri (tempo e accelerazione, un'accelerazione per riga con un passo, oppure un file in stile PEER con intestazione DT=; in g o m/s²). Fornisce lo spostamento della copertura e il taglio alla base nel tempo, lo spostamento di interpiano di ogni livello e l'inviluppo degli sforzi alle estremità delle aste. I modelli con un registro molto lungo lo conservano solo per la sessione.

{{ui:Spinta progressiva (pushover)}} spinge la copertura lateralmente a piccoli passi (andamento come il primo modo, oppure uniforme), con cerniere plastiche alle estremità delle aste a forma di I. Una cerniera snerva al momento plastico, che diminuisce all'aumentare dello sforzo assiale (calcolato dalla forma disegnata, trascurando i raccordi); l'incrudimento è facoltativo, il P-delta è facoltativo, e una combinazione gravitazionale può essere applicata prima. Fornisce la curva di capacità (taglio alla base rispetto allo spostamento della copertura), la prima cerniera, e lo stato e la rotazione plastica di ciascuna cerniera. {{ui:Esegui la storia temporale non lineare}} esegue le stesse cerniere con il registro del blocco Storia temporale su modelli piccoli. Le cerniere si formano solo alle estremità delle aste (inserire un nodo dove una cerniera dovrebbe formarsi all'interno di una campata); un'asta svincolata a entrambe le estremità non ne riceve; lo snervamento e l'instabilità dei controventi non sono modellati; solai e muri restano elastici; non sono forniti criteri di accettazione. Non è una verifica normativa; l'ingegnere controlla i risultati. Le impostazioni sono salvate con il modello, e il rapporto contiene le tabelle.

Non ancora implementati: analisi di instabilità, una correzione della massa mancante per lo spettro di risposta, scalatura dei registri, criteri di accettazione per le cerniere (la risposta dinamica c'è, sopra), aree e carichi da vento generati automaticamente (le forze sismiche sui solai sono in [Verifica degli elementi in calcestruzzo e creazione dei carichi sismici](topic:concrete-and-seismic)), eccentricità delle aste, controventi che lavorano solo a trazione. Vedi [Cosa non è ancora implementato](topic:not-built-yet).
