---
title: Pannelli di ossatura in legno e acciaio leggero
summary: Ossatura di pareti, solai e falde in legno o acciaio leggero, con ogni pezzo, una distinta di taglio, un disegno di officina e il materiale da acquistare.
keywords: ossatura, legno, legname, acciaio leggero, formato a freddo, montante, travetto, puntone, architrave, montante principale, montante di sostegno, montante corto, distinta di taglio, disegno di officina, pannello
from: 3e38ffb9
---

La scheda {{ui:Ossatura}} crea l'ossatura dei pannelli che descrivi e fornisce ciò che servono una squadra di carpenteria e una rivendita di legname. I pannelli sono salvati nel file del modello.

:::warning
Le dimensioni, gli interassi e gli architravi sono a carico del progettista. DetailCraft non verifica che un montante a quell'interasse porti quella parete né che un architrave copra quell'apertura: questo è compito delle tabelle della norma di riferimento e dell'ingegnere.
:::

## Aggiungere un pannello

Scegliere {{ui:Aggiungi una parete}}, {{ui:Aggiungi un solaio}} o {{ui:Aggiungi un tetto}}, poi compilare le dimensioni in millimetri, il materiale (legno o acciaio leggero) e la dimensione dell'elemento. Le dimensioni del legno sono i nomi commerciali con le dimensioni lavorate (2×4 è 38 × 89 mm). I montanti in acciaio sono indicati per altezza e spessore, per esempio `C92-1.2`.

## Pareti

Una parete ha un cordolo inferiore, uno o più cordoli superiori (una guida per l'acciaio), montanti di estremità, montanti sull'interasse indicato e, per ogni apertura: due montanti principali, due montanti di sostegno, un architrave della dimensione e del numero di strati scelti, e montanti corti sopra l'architrave (e sotto la soglia di una finestra). Indicare per ciascuna apertura la sua distanza dall'estremità sinistra, la sua larghezza e l'altezza grezza del vano in alto e in basso, misurata dal sottofondo; una porta ha il fondo uguale a 0.

## Solai e falde

Un solaio ha travetti attraverso la sua larghezza lungo la sua luce, travetti perimetrali a entrambe le estremità e, se lo si spunta, blocchetti di controventatura a mezza luce. Una falda è un timpano: una coppia di puntoni sull'interasse indicato (la loro lunghezza include lo sbalzo di gronda lungo la falda) e una trave di colmo.

## Cosa si ottiene

Ogni pannello mostra i suoi pezzi in un disegno in scala con ogni pezzo contrassegnato, una distinta di taglio per marca e un totale. La tabella {{ui:Materiale da acquistare}} raggruppa i tagli di tutti i pannelli in lunghezze commerciali, le più corte che contengono i tagli di ciascuna barra. {{ui:Salva il disegno di officina (SVG)}} scrive il disegno; il pulsante {{ui:CSV}} scrive tutte le distinte di taglio e la lista del materiale.

## Posizionare un pannello nel modello

Sotto ogni pannello indicare dove va (x, y, z in millimetri e l'angolo) e premere {{ui:Colloca come aste}}: ogni pezzo diventa un'asta del modello, con la sezione lavorata della sua dimensione e il peso del materiale (circa 500 kg/m³ per il legno, acciaio per i montanti). Una parete corre lungo l'angolo dalla sua estremità inferiore sinistra, con la base a z; i travetti di un solaio stanno con l'intradosso a z; l'alzato a timpano di una falda corre lungo l'angolo con z in alto sui cordoli della parete. Ogni strato dell'architrave è un'asta affiancata alle altre. Premendolo di nuovo si sostituiscono le aste posizionate in precedenza, e {{ui:Rimuovi le aste posizionate}} le toglie; ciascuna operazione è un unico passo di annullamento. L'analisi esclude queste aste: non sono aste di telaio in acciaio.

## Tavole PDF

{{ui:Tavole PDF}} salva una pagina A3 per ogni pannello: il pannello in scala con ogni pezzo contrassegnato, le dimensioni complessive, la distinta di taglio e una fascia del cartiglio.

Problemi nel pannello {{ui:Problemi}}: un'apertura troppo vicina all'estremità di una parete o a un'altra, un architrave che non entra sotto i cordoli superiori, un pezzo più lungo del materiale più lungo.

Il pannello {{ui:Problemi}} elenca inoltre **Interfacce (LOD 350)** per i pannelli di parete e i muri in calcestruzzo: un'apertura che supera l'estremità o la sommità della sua parete, due aperture che si sovrappongono, e un'apertura in un muro di calcestruzzo più larga di 1000 mm senza un ferro di rinforzo di bordo. Sono indicazioni, con le stesse regole che esegue la verifica di BimCraft; la larghezza è il valore iniziale di CadCraft, non una norma.
