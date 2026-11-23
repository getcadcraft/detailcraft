---
title: Verificare le saldature nei punti di incontro delle aste
summary: Dopo la verifica di progetto, controllare i cordoni d'angolo e le saldature di testa tutto intorno a ciascuna asta dove incontra un'altra asta o un appoggio, secondo AISC 360-16 capitolo J o EN 1993-1-8, e vedere quale gruppo di saldature è più utilizzato e in quale combinazione. Un ausilio finché un ingegnere non l'ha verificato.
keywords: saldatura, saldature, verifica saldature, cordone d'angolo, saldatura di testa, penetrazione completa, AISC 360, EN 1993-1-8, gruppo di saldature, utilizzo, capacità, giunto, unione, strutturale, ingegnere
from: e8eebbe6
---

Il blocco {{ui:Weld checks}} nella scheda {{ui:Analysis}}, sotto {{ui:Design checks}}, prende le forze dell'ultimo telaio risolto e le combinazioni di resistenza create, e verifica la saldatura tutto intorno a ciascuna asta in ogni nodo: dove un'asta incontra un'altra asta o poggia su un appoggio.

:::warning
È un **ausilio finché un ingegnere non l'ha verificato**. Verifica una saldatura disegnata tutto intorno alla sezione, come un unico gruppo, a partire dalle forze di estremità del telaio. Non legge la dimensione né la lunghezza delle saldature disegnate nei disegni di officina, e non verifica bulloni, piastre, rifollamento, rottura a blocco o effetto leva. I suoi risultati non sono un timbro.
:::

## Eseguire la verifica

1. Risolvere il telaio nella scheda {{ui:Analysis}} e scegliere una {{ui:Design code}} in {{ui:Design checks}}, poi premere {{ui:Make combinations}} (la verifica delle saldature richiede le stesse combinazioni di resistenza).
2. In {{ui:Weld checks}}, impostare il {{ui:Fillet leg (mm, 0 = the wall, at most 8)}}. 0 significa che il cateto segue lo spessore più sottile della sezione, fino a 8 mm. Con la norma AISC, {{ui:Weld metal strength F_EXX (MPa)}} è la resistenza del metallo d'apporto (482.6 MPa corrisponde a un elettrodo E70). Con EN 1993, la {{ui:Steel grade}} fornisce la resistenza del metallo d'apporto e il fattore di correlazione.
3. Premere {{ui:Check welds}}.

Ogni riga della tabella è un gruppo di saldature (un'estremità di un'asta in un nodo). I valori: l'**utilizzo** della verifica che governa, lo stato (superata o non superata) e quale verifica e quale clausola hanno governato, in quale combinazione. Un gruppo che la verifica non può giudicare ne indica il motivo (nessuna classe dell'acciaio, nessun fattore di correlazione per la classe nella Tabella 4.1 di EN 1993-1-8, nessuna saldatura su quella sezione) invece di mostrare un valore.

Cambiare il cateto o il metallo d'apporto, oppure modificare il modello, cancella la tabella, perché era riferita ai valori precedenti. Premere di nuovo {{ui:Check welds}}.

## Cosa viene verificato

- **ASCE 7 + AISC 360:** metallo d'apporto dei cordoni d'angolo (conta l'angolo del carico rispetto alla saldatura, J2.4), rottura a taglio del metallo base (J4.2) e saldature di testa a penetrazione completa (Tabella J2.5).
- **EN 1990 + EN 1993:** cordoni d'angolo con il metodo semplificato di EN 1993-1-8 4.5.3.3 e saldature di testa da 4.7.1.
- Avvisi di dettaglio rispetto al cateto minimo e massimo e alla lunghezza minima, con il valore con cui sono stati confrontati.

Il gruppo di saldature è trattato come una sezione lineare e caricato con il metodo vettoriale elastico: ogni parte della saldatura riceve la forza assiale dell'asta, entrambi i tagli, la torsione e i due momenti flettenti, sommati come vettori.

## Cosa non viene verificato

Non ancora implementati: saldature a penetrazione parziale, cordoni obliqui, saldature a tappo e a fessura, saldature intermittenti, il metodo del centro istantaneo di rotazione, il metodo direzionale di EN, la fatica e il taglio a blocco del metallo base. Alcune costanti delle norme sono state ricavate dalle norme stesse e non ancora confrontate con una copia stampata; il rapporto indica da dove viene ogni valore ({{ui:Report (PDF)}} acquisisce le tabelle delle saldature una volta eseguita la verifica). Vedere [Verificare le aste in acciaio](topic:design-checks) e [Non ancora implementato](topic:not-built-yet).
