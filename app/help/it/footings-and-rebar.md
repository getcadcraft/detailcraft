---
title: Posiziona plinti con armatura
summary: Posiziona plinti isolati rettangolari con rete inferiore e ferri di ripresa, verificali e scarica la distinta di piegatura.
keywords: plinto, plinto isolato, fondazione, armatura, ferri, rete, ferri di ripresa, barre di collegamento, distinta di piegatura, elenco dei ferri, calcestruzzo, uncini, copriferro
from: 41a048be
---

Questo argomento riguarda i plinti isolati rettangolari. Travi, pilastri, solai e muri sono trattati in [Dettaglio del calcestruzzo armato](topic:reinforced-concrete). Ogni plinto riceve una rete di armatura inferiore nelle due direzioni e, se necessari, ferri di ripresa che sporgono verso l'alto. I ferri vanno dalla misura US #3 alla #11.

## Posiziona un plinto

1. Scegliere {{ui:Pianta}} e selezionare il livello della sommità del plinto.
2. Scegliere {{ui:Plinto}} nel gruppo {{ui:Posiziona}}, oppure premere {{key:F}}.
3. Impostare il plinto nel pannello {{ui:Proprietà}} (vedi sotto), oppure mantenere i valori predefiniti.
4. Fare clic su un'intersezione di griglia. Il plinto è centrato su di essa con la sommità al livello. La barra di stato indica, per esempio, "Plinto 2000 x 2000 x 600 sotto A/1."

È anche possibile usare il modulo {{ui:Aggiungi per griglia}} in fondo al pannello.

Il plinto è disegnato trasparente, così si vedono i suoi ferri, disegnati come tubi pieni.

## Impostazioni del plinto

| Campo | Predefinito | Note |
|---|---|---|
| Lunghezza L (mm) | 2000 | Lungo x; da 300 a 50000 |
| Larghezza B (mm) | 2000 | Lungo y; da 300 a 50000 |
| Altezza H (mm) | 600 | Da 150 a 10000 |
| Calcestruzzo | 4000 psi | Testo, stampato nell'esportazione IFC |

**Rete inferiore**

| Campo | Predefinito | Note |
|---|---|---|
| Ferri lunghi | #5 | Ferri lungo L, nello strato inferiore |
| Interasse (mm) | 250 | L'interasse massimo consentito; i ferri sono distribuiti uniformemente a questo interasse o a uno minore |
| Ferri corti | #5 | Ferri lungo B, posati sui ferri lunghi |
| Interasse (mm) | 250 | Come sopra |
| Copriferro (mm) | 75 | Copriferro libero su ogni faccia |
| Uncini alle estremità | Acceso | Piega entrambe le estremità di ogni ferro della rete con un uncino standard a 90° (forma U); spento dà ferri diritti (forma S) |

**Ferri di ripresa**

| Campo | Predefinito | Note |
|---|---|---|
| Ferri di ripresa | Acceso | Spegnerli per un plinto senza ferri di ripresa |
| Ferro | #6 | |
| Ferri lungo L / Ferri lungo B | 2 / 2 | Una griglia di ferri, centrata sul plinto |
| Interasse lungo L / Interasse lungo B | 250 / 250 | Tra i centri dei ferri |
| Sporgenza sopra la sommità | 600 | Quanto sporgono i ferri sopra la sommità del plinto |
| Uncino in basso | Acceso | Un uncino a 90° rivolto verso l'esterno, appoggiato sulla rete (forma L) |

Sotto i campi, DetailCraft mostra la lunghezza dell'uncino per i ferri lunghi, per esempio "Lunghezza uncino per #5: 254 mm da esterno a esterno."

## Modifica un plinto posizionato

Selezionare il plinto (fare clic sul suo calcestruzzo lontano da qualsiasi pilastro, oppure su uno dei suoi ferri). Si ottengono gli stessi campi più {{ui:Centro x}}, {{ui:Centro y}}, {{ui:Quota superiore z}} e {{ui:Rotazione (°)}}. Sotto di essi, una tabella elenca i ferri di questo plinto con le loro posizioni, quantità e lunghezze, e il volume di calcestruzzo in metri cubi.

Ogni modifica viene verificata prima di essere mantenuta. Una modifica che non può essere costruita viene rifiutata e la barra di stato ne indica il motivo, per esempio "Il copriferro non lascia spazio per i ferri in questo plinto.", "Il plinto è troppo basso per due strati di ferri all'interno del copriferro." oppure "I ferri di ripresa non entrano nel plinto con 75 mm di copriferro."

Le modifiche costruibili ma che richiedono un controllo sono elencate sotto il plinto e nella scheda {{ui:Problemi}}:

- "Ferri #11 a 59.6 mm lasciano meno di 35.8 mm di distanza libera (ACI 318-19 25.2.1)." La distanza libera tra i ferri deve essere almeno pari al diametro del ferro e almeno 25.4 mm.
- "Gli uncini #5 richiedono 254 mm di altezza; nel copriferro ne entrano solo 150 mm." Le gambe degli uncini vengono quindi accorciate per entrare, e non sono più uncini standard.
- "Gli uncini di ripresa entrano nel copriferro."
- "I ferri di ripresa sono più ravvicinati della distanza libera minima."

## Posizioni dei ferri e distinta di piegatura

Ferri identici (stessa misura, forma e dimensioni al millimetro) condividono una posizione in tutti i plinti. Le posizioni si scrivono `<numero del ferro>F<n>`: 5F1, 5F2 per i ferri #5, 6F1 per il primo ferro #6, e così via. I plinti con stessa misura, calcestruzzo, rete e ferri di ripresa condividono una marca di plinto: F1, F2 …

1. Aprire la scheda {{ui:Distinta di piegatura}} in basso. Ogni riga è una posizione: misura, forma, dimensioni A, B e C, quantità, lunghezza di taglio, lunghezza totale, massa al metro, peso di ciascuno, peso totale e a cosa serve il ferro.
2. Scegliere {{ui:Scarica CSV}} nella scheda, oppure {{ui:Piegatura}} nel menu {{ui:Altro}} del gruppo {{ui:Uscita}}, per `<name> bending schedule.csv`.

Le forme sono codici propri di DetailCraft, non di una norma: S diritta, L una piegatura, U due piegature. Le dimensioni sono da esterno a esterno; la lunghezza di taglio è la lunghezza esatta della linea di mezzeria attraverso le piegature. Vedi [Riferimento armature](topic:rebar-reference).

## Cosa DetailCraft non verifica

- Lunghezze di ancoraggio e di sovrapposizione, e se i ferri di ripresa sono abbastanza lunghi per il pilastro sopra.
- La parte della regola della distanza libera che dipende dalla dimensione dell'inerte (non conosce la miscela).
- Tutto ciò che riguarda il pilastro o la piastra di base sopra: plinti e acciaio sono separati.

Vedi anche [Cosa non è ancora implementato](topic:not-built-yet).
