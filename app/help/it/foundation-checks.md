---
title: Verifiche delle fondazioni
summary: Verifica plinti, plinti combinati e platee sul terreno che descrivi, cedimento, una platea flessibile su molle, gruppi di pali e muri di sostegno. Un ausilio per l'ingegnere che controlla.
keywords: fondazione, plinto, plinto combinato, platea, cedimento, modulo di sottofondo, molle, pilastro di bordo, pilastro d'angolo, portanza, scorrimento, ribaltamento, punzonamento, taglio a una direzione, flessione, ancoraggio, armatura minima, gruppo di pali, muro di sostegno, ACI 318-19
from: 6961ad52
---

:::warning
Sono verifiche di primo ordine da far controllare a un ingegnere, non un'approvazione di progetto. La pressione ammissibile sul terreno e il coefficiente di attrito sono a carico del progettista: DetailCraft non conosce il terreno.
:::

La scheda {{ui:Fondazioni}} verifica i plinti del modello rispetto ai carichi dei pilastri che assegni loro.

## Descrivere il terreno

Digitare la {{ui:Pressione ammissibile sul terreno}} e il {{ui:Coefficiente di attrito di base}}. Entrambi partono da 0, cioè "non inserito": la verifica mostra allora la pressione come nota e non dichiara che è soddisfatta. Per il cedimento, digitare il modulo del terreno {{ui:Es}} (MPa), il suo coefficiente di Poisson e il cedimento ammesso (25 mm come valore iniziale). Per una platea flessibile, digitare un modulo di sottofondo {{ui:ks}}. Sono presenti anche il riempimento sopra il plinto, il peso unitario del terreno, i coefficienti di sicurezza per scorrimento e ribaltamento (1.5 come valore iniziale) e la resistenza di snervamento dei ferri.

## Inserire i carichi

Ogni plinto ha un elenco di carichi dei pilastri. Usare {{ui:Aggiungi un carico di pilastro}} e compilare la riga dei carichi di esercizio (per portanza, scorrimento e ribaltamento) e quella dei carichi fattorizzati (per le verifiche di resistenza): il carico verticale P verso il basso, le forze orizzontali Vx e Vy sulla sommità del plinto, i momenti Mx e My, la posizione del pilastro sul plinto e la sua dimensione.

Oppure aprire la scheda {{ui:Analisi}} e premere {{ui:Preleva i carichi dei pilastri dall'Analisi}}: ogni appoggio che poggia su un plinto diventa un carico di pilastro, dai gruppi di carichi di esercizio e fattorizzati che scegli. Un momento My positivo carica di più il lato +x del plinto; un momento Mx positivo carica di più il lato −y.

## Cosa viene verificato

Dai carichi di esercizio, con il peso proprio del plinto e del riempimento aggiunto:

- **Portanza:** la pressione sotto un plinto rigido. All'interno del terzo medio tutta la base è a contatto; all'esterno, una parte della base si stacca e il picco è più alto. Una risultante fuori dalla base non supera la verifica.
- **Scorrimento:** attrito per carico verticale contro la forza orizzontale.
- **Ribaltamento:** distanza della risultante dal bordo.
- **Cedimento:** il cedimento elastico della pressione media su un semispazio con il modulo indicato, al centro e in un angolo (soluzione di Timoshenko e Goodier per un rettangolo flessibile), confrontato con il limite. È un limite superiore per un plinto rigido e trascura uno strato di terreno di profondità limitata, lo scarico dovuto allo scavo e la consolidazione. Senza modulo mostra la pressione come nota.

Dai soli carichi dei pilastri fattorizzati (ACI 318-19):

- **Flessione** alla faccia del pilastro, con l'armatura minima (0.0018 per ferri a 420 MPa) e i ferri disegnati.
- **Taglio a una direzione** a d dalla faccia.
- **Punzonamento** a d/2 attorno a ciascun pilastro, con il momento del pilastro. Per un pilastro vicino a un bordo la sezione critica è tagliata dal bordo del plinto (tre lati su un bordo, due su uno spigolo, ACI 318-19 22.6.4.1 e il valore più piccolo di αs nella Tabella 22.6.5.2), e il momento rispetto al centro della sezione include lo spostamento del carico.
- **Ancoraggio** dei ferri oltre la faccia del pilastro, diritti o con i loro uncini.
- **Altezza** sopra i ferri inferiori (150 mm).

Un plinto combinato o una platea sono trattati come rigidi, e taglio e momento derivano dalla statica su sezioni che attraversano tutta la larghezza.

## Una platea flessibile su molle

Spuntare {{ui:Analizza questo plinto come platea flessibile su molle}} quando il plinto porta molti pilastri e il plinto rigido è troppo grossolano. Il plinto diventa una piastra di elementi a quattro nodi su un letto di molle (il {{ui:ks}} digitato, concentrato sui nodi), e il carico di ogni pilastro è distribuito sui nodi della propria impronta. Una seconda tabella dà la pressione massima sul terreno e il cedimento massimo (e la differenza tra il massimo e il minimo), il momento flettente in ciascuna direzione con l'armatura richiesta, la trazione in alto rispetto alla resistenza del calcestruzzo non armato (un plinto non ha ferri superiori), il taglio a una direzione a d dai pilastri e il punzonamento sulla pressione delle molle stesse. La mesh viene infittita finché un pilastro è largo tre elementi; una platea grande richiede alcuni secondi. Il peso proprio della platea e il terreno sopra si annullano e non sono considerati.

Ogni verifica non superata è nel pannello {{ui:Problemi}} con la sua clausola.

## Gruppi di pali e muri di sostegno

{{ui:Aggiungi un gruppo di pali}} inserisce una griglia di pali sotto un plinto rigido: digitare il carico e i momenti e quanto può portare un palo a compressione e a trazione (i valori del progetto dei pali, non di questa scheda). La reazione di ciascun palo è P/n più la sua quota dei momenti (metodo elastico), e si verificano la compressione massima e l'eventuale trazione.

{{ui:Aggiungi un muro di sostegno}} verifica un muro a mensola su un terrapieno orizzontale, per metro: pressione attiva di Rankine, ribaltamento attorno alla punta, scorrimento e pressione alla base. La spinta passiva davanti alla punta è esclusa. L'assistente può eseguire le stesse verifiche con `pile_group_check` e `retaining_wall_check`.

I gruppi di pali, i muri e l'interruttore della platea sono salvati nel file del modello, e una verifica non superata compare in {{ui:Problemi}}.
