---
title: Distinta di taglio
summary: Disponi travi, pilastri, controventi e cosciali in lunghezze di magazzino tenendo conto del taglio della sega, e vedi quante barre acquistare e lo sfrido.
keywords: distinta di taglio, nesting, lunghezza di magazzino, barra, taglio della sega, sfrido, ritaglio, combinazione, acquisto, multiplo
from: 81d06ce5
---

La scheda {{ui:Cut list}}, sotto la vista, calcola come tagliare le parti lineari del modello dalle barre di magazzino: quante barre di ciascuna lunghezza acquistare per ogni profilo e materiale, cosa va su ogni barra, e lo sfrido.

## Impostare il magazzino

In cima alla scheda:

- **Lunghezze di magazzino (mm):** le lunghezze che si possono acquistare, separate da spazi, ad esempio `6000 12000`, oppure barre da 20 ft e 40 ft come `6096 12192`. Fino a otto.
- **Taglio della sega (mm):** quanto consuma ogni taglio (3 come valore iniziale).
- **Rifilo di testa (mm):** taglio dell'estremità di ogni barra prima del primo pezzo (0 come valore iniziale).
- **Conserva i ritagli da (mm):** un ritaglio lungo almeno questo valore torna in magazzino; un ritaglio più corto è scarto (500 come valore iniziale).

Questi valori sono memorizzati in questo browser, come le altre [impostazioni](topic:settings).

## Come avviene la disposizione

- Ogni trave, pilastro, controvento e cosciale di scala, per marca e quantità; le piastre vengono tagliate da lamiera e non sono disposte qui.
- Ogni profilo e materiale separatamente.
- Prima i pezzi più lunghi, ciascuno nella prima barra in cui entra; una nuova barra inizia con la lunghezza di magazzino più grande. Poi ogni barra viene acquistata con la lunghezza di magazzino più corta che ancora contiene i suoi tagli.
- Ogni taglio consuma il taglio della sega (nessuno dopo un taglio che termina esattamente alla fine della barra); ogni barra perde il rifilo di testa.
- Un pezzo più lungo di tutte le lunghezze di magazzino è elencato sotto **Più lungo di qualsiasi magazzino**, senza disposizione: giuntarlo (vedi [Giunzioni](topic:splices)) oppure aggiungere una lunghezza di magazzino più grande.

## Leggere la distinta

- **Riepilogo:** per profilo e materiale, i pezzi, le barre da acquistare (ad esempio "2 × 12000, 1 × 6000"), i metri acquistati e utilizzati, e lo sfrido.
- **Barre e relativi tagli:** ogni barra, la sua lunghezza di magazzino, i suoi tagli come marca della parte e lunghezza, e il ritaglio, conservato o scartato.

{{ui:Download CSV}} salva entrambe le tabelle come `<nome> distinta di taglio.csv`.

DetailCraft non dispone le piastre nei fogli e non mescola profili o materiali su una stessa barra.
