---
title: Scorte del fornitore e tempi di consegna
summary: Confronta le barre di magazzino che la distinta di taglio acquista con l'elenco delle scorte di un fornitore: ce ne sono abbastanza e quanto dura l'attesa?
keywords: fornitore, scorte, tempo di consegna, acciaieria, laminatoio, disponibilità, arretrato, barre, approvvigionamento, fornitura
from: 1373f5a3
---

La scheda {{ui:Fornitura}} cerca ciascuna sezione che la {{ui:Distinta di taglio}} acquista nell'elenco delle scorte di un fornitore. Il file resta nel modello; nulla viene inviato da nessuna parte.

## Aggiungere il file del fornitore

Premere {{ui:Aggiungi un file del fornitore}} e scegliere un CSV del fornitore (separato da virgole, punti e virgola o tabulazioni). Serve una colonna per la voce o la sezione (Item, Name, Description, Section, SKU) e una per le scorte (In stock, Quantity, On hand) o per il tempo di consegna. L'unità (each, metres, kilograms, tonnes), il prezzo, il fornitore e una data di riapprovvigionamento vengono letti quando esiste una colonna per loro. Sono riconosciute anche le parole: "Out of stock", "In stock", "2-3 weeks", "backorder". Si possono conservare fino a cinque file; aggiungere un file con lo stesso nome lo sostituisce.

## Cosa si vede

Per ogni sezione acquistata dalla distinta di taglio, la tabella mostra il fabbisogno del modello, le scorte disponibili, il tempo di consegna, il fornitore e un esito:

- **Coperta:** scorte sufficienti.
- **Insufficiente di:** le scorte sono sotto il fabbisogno. Se le scorte sono sotto il fabbisogno e si imposta un'attesa massima, il tempo di consegna indica quanto richiede il resto.
- **Troppo tardi:** non c'è un dato sulle scorte e il tempo di consegna è più lungo dell'attesa accettata.
- **Nessun dato sulle scorte:** il file non lo indica.
- **Altra unità:** il fornitore elenca la sezione in un'unità che il modello non può fornire.

Il fabbisogno del modello è espresso in barre (dalla distinta di taglio annidata, con le lunghezze di magazzino), in metri di barra acquistata e in chilogrammi (peso della sezione al metro), e si usa l'unità propria del file. Una sezione viene abbinata per nome ("W16 X 26" e "w16x26" sono la stessa sezione). Le sezioni che non sono nel file vengono elencate.

Le sezioni insufficienti e in ritardo sono nel pannello {{ui:Problemi}}. Da qui non viene effettuato alcun ordine.

## Limiti

I dati sulle scorte e i tempi di consegna sono quelli del file, alla data in cui è stato creato. Le piastre non sono annidate, quindi non vengono cercate. Il file viene solo letto: qualsiasi istruzione contenuta è soltanto testo.
