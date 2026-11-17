---
title: Imposta griglie e livelli
summary: Digitare le linee della griglia, i relativi interassi e i livelli su cui è posizionato ogni elemento.
keywords: griglia, griglie, assi, linee di griglia, livelli, quote, piani, solai, interasse, impostazione
from: 9cad233c
---

Ogni asta in DetailCraft è posizionata su un'intersezione di griglia a un livello. Impostare prima le griglie e i livelli; è possibile cambiarli in seguito.

## Come funzionano qui le griglie

- Le **linee numerate** vanno in una direzione, le **linee con lettere** nell'altra. I nomi sono solo un'abitudine: un'etichetta può essere un testo qualsiasi fino a 8 caratteri (1, 2, 3 oppure A1, A2, oppure 10, 20).
- Si digitano le etichette e gli interassi tra di esse, non le coordinate. La prima linea di ciascun insieme è a 0.
- Le linee numerate sono linee di x costante; le linee con lettere sono linee di y costante. Quindi una trave dalla griglia 1 alla 2 corre lungo x, e una trave da A a B corre lungo y.
- Tutti i valori sono in millimetri.

Un nuovo modello parte con linee numerate 1 2 3 a 6000 6000, linee con lettere A B a 6000, e due livelli.

## Impostare le griglie

1. Nel pannello {{ui:Modello}} a sinistra, aprire {{ui:Griglie}} se è chiuso.
2. In {{ui:Linee numerate}}, digitare le etichette separate da spazi, per esempio `1 2 3 4 5`.
3. Nel campo {{ui:Interassi}} sotto, digitare un interasse per ogni intervallo, per esempio `6000 6000 7500 6000`. Quattro intervalli per cinque linee.
4. Fare lo stesso in {{ui:Linee con lettere}} e nel relativo {{ui:Interassi}}, per esempio `A B C` e `8000 8000`.
5. Scegliere {{ui:Applica griglie}}.

La barra di stato indica "Griglie aggiornate." e la vista si ingrandisce sulla nuova griglia. Anche le virgole funzionano come separatori.

Se qualcosa non torna, non cambia nulla e la barra di stato indica il motivo, per esempio "Griglie numerate: indicare un interasse tra ogni coppia di linee (4)." Altri controlli: gli interassi devono essere millimetri positivi, le etichette devono essere diverse, e ci possono essere al massimo 60 linee in ciascuna direzione.

:::note
Le aste mantengono le loro coordinate quando le griglie si spostano. Se si cambia un interasse dopo aver posizionato acciaio, l'acciaio resta dov'era e non è più sulla griglia. Cambiare prima la griglia, oppure spostare le aste modificando le coordinate delle loro estremità.
:::

## Impostare i livelli

1. Aprire {{ui:Livelli}} nel pannello {{ui:Modello}}.
2. Ogni riga ha un nome di livello e la sua quota in millimetri. Modificarli come si preferisce.
3. Scegliere {{ui:Aggiungi livello}} per un'altra riga. Si chiama "Livello 3" (e così via) e viene posta 4000 mm sopra il livello più alto; cambiare entrambi se serve.
4. Per eliminare un livello, scegliere il pulsante × alla fine della sua riga.
5. Scegliere {{ui:Applica livelli}}.

Nulla cambia finché non si sceglie {{ui:Applica livelli}}. I livelli sono ordinati per quota quando vengono applicati. Ogni livello deve avere un nome, due livelli non possono avere lo stesso nome, e deve restare almeno un livello.

I livelli possono stare sotto lo zero (un seminterrato a `-3500`) e non devono essere equidistanti.

## Come sono usati i livelli

- Un pilastro posizionato a un livello sale fino al livello successivo, oppure fino al livello scelto in {{ui:Fino a}}.
- Travi e piastre sono posizionate tra due intersezioni, al livello su cui si fa clic.
- I plinti sono posizionati con la sommità al livello su cui si fa clic.
- {{ui:Pianta}} guarda dall'alto un livello alla volta.
- L'esportazione IFC crea un piano dell'edificio per ogni livello.

## Annulla

Le modifiche a griglie e livelli sono modifiche come le altre: {{key:Mod+Z}} riporta la griglia precedente.

## Avanti

[Posiziona pilastri, travi e controventi](topic:place-members)
