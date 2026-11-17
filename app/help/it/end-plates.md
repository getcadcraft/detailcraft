---
title: Collegare travi a pilastri con piastre di testa
summary: Aggiungi piastre di testa bullonate dove una trave incontra un'ala o un'anima di pilastro, imposta piastra, bulloni e saldatura, e copia la connessione su ogni giunto simile.
keywords: piastra di testa, piastra di testa, collegamento a momento, collegamento bullonato, giunto, bulloni, saldatura, piastra di testa estesa, a filo, simile, copia connessione, componente
from: 21e028b2
---

Un collegamento con piastra di testa salda una piastra all'estremità della trave e la bullona all'ala o all'anima del pilastro. DetailCraft posiziona la piastra, arretra la trave, pratica fori corrispondenti nella piastra e nell'ala del pilastro, aggiunge i bulloni e la saldatura, e verifica le distanze dai bordi e gli interassi.

:::warning
DetailCraft non dimensiona le connessioni. Le impostazioni sono valori iniziali da modificare; nulla verifica la resistenza. Gli avvisi su bordi e interassi usano i minimi della EN 1993-1-8 Tabella 3.3, che possono differire dalle regole che si seguono.
:::

## Cosa può collegare

- Una trave **orizzontale** (entrambe le estremità alla stessa quota), verticale (rotazione 0), con profilo a I.
- Nell'**ala** o nell'**anima** di un pilastro a I **verticale**, ortogonalmente ad esso.
- L'estremità della trave deve trovarsi sulla linea del pilastro, tra la base e la sommità del pilastro.

Travi inclinate o oblique e sezioni non a I vengono rifiutate con un motivo: per quelle usare [collegamenti a taglio](topic:shear-tabs). Su un'anima, la piastra e le ali della trave devono entrare tra le ali del pilastro; DetailCraft avvisa quando non è così.

:::tip
Con rotazione 0 le ali di un pilastro sono rivolte lungo la direzione numerata della griglia (x). Una trave che va da A a B incontra l'anima e riceve una piastra di testa sull'anima.
:::

## Aggiungere piastre di testa a una trave

1. Scegliere {{ui:Select}} ({{key:V}}) e fare clic sulla trave.
2. Scegliere {{ui:End plates}} nel gruppo {{ui:Connect}}, oppure {{ui:Add end plates}} nel pannello {{ui:Properties}}.
3. Ogni estremità libera della trave che incontra un'ala o un'anima del pilastro in squadra riceve una piastra. La barra di stato dice "2 piastre di testa aggiunte. Selezionarne una per modificarne piastra, bulloni e saldatura; Similar la copia sui giunti simili."
4. La prima piastra di testa nuova viene selezionata e le sue impostazioni compaiono nel pannello {{ui:Properties}}.

Se non succede nulla, leggere la barra di stato:

- "Questa trave non termina su una linea di pilastro. Le piastre di testa vanno dove un'estremità di trave incontra un pilastro verticale."
- "Questa trave incontra un pilastro con un angolo o è inclinata: le piastre di testa sono previste per giunti squadrati e orizzontali. Usare Collegamenti a taglio."
- "Entrambe le estremità hanno già una connessione."

## Modificare piastra, bulloni e saldatura

Fare clic sulla piastra di testa (oppure su uno dei suoi bulloni) per selezionare la connessione. In {{ui:Plate, bolts and weld (mm)}}:

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| Spessore della piastra | 20 | Lo spessore della piastra; anche di quanto la trave viene arretrata oltre l'ala |
| Larghezza della piastra | 180 | Trasversalmente al giunto |
| Prolungamento sopra la trave | 0 | Sopra l'ala superiore; oltre 0 crea una piastra di testa estesa |
| Prolungamento sotto la trave | 0 | Sotto l'ala inferiore |
| Diametro del bullone | 20 | Dimensione nominale del bullone |
| Diametro del foro | 22 | Il tuo foro di gioco nella piastra e nell'ala del pilastro |
| Classe del bullone | A325 | Testo; riportato nella distinta base |
| File di bulloni | 4 | File di due bulloni, centrate sull'altezza della piastra |
| Passo tra le file | 75 | Interasse verticale tra le file |
| Interasse | 100 | Interasse orizzontale tra i due bulloni di una fila |
| Sovrametallo della lunghezza del bullone | 30 | Aggiunto alla presa per il dado, la rondella e il filetto; vedi sotto |
| Dimensione del cordone d'angolo | 8 | Tutto attorno all'estremità della trave |
| Materiale della piastra | A36 | Testo |

Digitare un nuovo valore e premere {{key:Enter}} oppure {{key:Tab}}. La piastra, i fori, i bulloni e la lunghezza di taglio della trave si aggiornano subito. Ogni modifica è un passo di annullamento.

Sotto le impostazioni si vede ciò che la connessione produce:

- {{ui:Bolts}}: ad esempio "8 × 20 × 70 A325 (presa 36,2)".
- {{ui:Weld}}: dimensione, dove, e la sua lunghezza.
- {{ui:Plate}}: le sue dimensioni e la sua marca.

### Come vengono calcolati i valori

- La trave viene arretrata di metà della profondità del pilastro (su un'anima: metà dello spessore dell'anima) più lo spessore della piastra, così la piastra poggia sulla faccia.
- L'altezza della piastra è la profondità della trave più i due prolungamenti.
- Lunghezza del bullone = presa (spessore della piastra + spessore dell'ala o dell'anima del pilastro) + sovrametallo, arrotondata al successivo multiplo di 5 mm.
- La lunghezza della saldatura indicata è il perimetro della sezione della trave.

### Avvisi

La connessione viene comunque costruita, ma questi compaiono sotto di essa e nella scheda {{ui:Problems}}:

- File di bulloni o bulloni più vicini al bordo della piastra di 1,2 × il diametro del foro.
- Passo tra le file inferiore a 2,2 × il diametro del foro, oppure interasse inferiore a 2,4 × il diametro del foro.
- Fori che entrano nell'anima del pilastro o nel suo raccordo, oppure fuori dall'ala del pilastro.
- Una piastra più larga dell'ala del pilastro, oppure (su un'anima) più larga dello spazio tra le ali; ali della trave che non entrano tra di esse.
- Una fila di bulloni troppo vicina a un'ala della trave, oppure un interasse troppo stretto per l'anima della trave e la sua saldatura.

## Copiare su ogni giunto simile

1. Selezionare la connessione impostata.
2. Scegliere {{ui:Apply to similar (n)}} nel pannello {{ui:Properties}}, oppure {{ui:Similar}} nel menu {{ui:More}} del gruppo {{ui:Connect}}. Il numero tra parentesi indica quanti giunti la riceveranno.
3. Ogni giunto con lo stesso profilo di trave e lo stesso profilo di pilastro, con la trave che entra nello stesso tipo di faccia, e che non ha ancora una connessione, riceve una copia con le stesse impostazioni. La barra di stato indica quanti.

Le copie sono indipendenti: modificarne una in seguito non modifica le altre. I giunti che hanno già una connessione restano invariati; eliminarli prima se si vuole che vengano sostituiti.

## Spostare ed eliminare

Le connessioni vengono ricreate dalle loro impostazioni ogni volta che il modello cambia, quindi spostare o ridimensionare una trave o un pilastro porta con sé le sue piastre di testa. Se una modifica fa sì che il giunto non sia più adatto, la connessione resta nel modello e la scheda {{ui:Problems}} indica il motivo, ad esempio "L'estremità della trave non è più sulla linea del pilastro."

Per eliminare una connessione, selezionarla e premere {{key:Delete}}. Eliminare la trave o il pilastro elimina anche le sue connessioni.

Avanti: [Aggiungere piastre di base e tirafondi](topic:base-plates).
