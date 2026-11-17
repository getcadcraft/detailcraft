---
title: Muoversi nella vista 3D
summary: Ruotare, spostare e ingrandire con il mouse, il trackpad o uno schermo touch, e quando usare invece Pianta e Prospetto.
keywords: orbita, ruota, pan, zoom, navigare, vista, camera, trackpad, tocco, pianta, prospetto, adatta, mouse
from: 02c9c7b9
---

La vista ha tre modalità, scelte nella barra di vista sopra di essa: {{ui:3D}}, {{ui:Pianta}} e {{ui:Prospetto}}. I pulsanti del mouse fanno cose diverse in 3D rispetto a Pianta e Prospetto, quindi leggere entrambe le tabelle.

## In 3D

:::mouse
| Obiettivo | Azione |
|---|---|
| Ruotare attorno al modello | Trascinare con il pulsante sinistro |
| Pan | Trascinare con il pulsante destro, oppure tenere premuto {{key:Shift}} e trascinare con il pulsante sinistro |
| Zoom | Ruotare la rotella, oppure trascinare su e giù con il pulsante centrale (rotella premuta) |
| Selezionare un pezzo | Fare clic su di esso (un clic che si sposta di meno di qualche pixel) |
| Vedere l'intero modello | Il pulsante adatta all'estremità destra della barra di vista |
:::

:::touch
| Obiettivo | Azione |
|---|---|
| Ruotare attorno al modello | Trascinare con un dito |
| Pan | Trascinare con due dita |
| Zoom | Pizzicare con due dita |
| Selezionare un pezzo | Toccarlo |
| Vedere l'intero modello | Il pulsante adatta all'estremità destra della barra di vista |
:::

Il cubo di navigazione in alto a destra (sotto la barra di vista) ruota con il modello: fare clic su una faccia, uno spigolo o un vertice per guardare da lì, trascinarlo per ruotarlo, oppure fare clic sul pulsante a forma di casa per tornare all'inizio. Vedere [Il cubo di navigazione](topic:view-cube).

Il modello ruota attorno al centro della vista, e la rotella fa zoom verso il centro della vista, non verso il puntatore. Per osservare da vicino un angolo, portarlo prima al centro con il pan, poi fare zoom.

## In Pianta e Prospetto

Queste viste guardano il modello di fronte e non possono essere ruotate.

:::mouse
| Obiettivo | Azione |
|---|---|
| Pan | Trascinare con il pulsante sinistro o destro |
| Zoom | Ruotare la rotella, oppure trascinare su e giù con il pulsante centrale |
| Selezionare un pezzo | Fare clic su di esso |
:::

:::touch
| Obiettivo | Azione |
|---|---|
| Pan | Trascinare con un dito |
| Zoom | Pizzicare con due dita (trascinare con due dita fa anche pan) |
| Selezionare un pezzo | Toccarlo |
:::

## Trackpad su Mac

:::mac
- **Zoom:** scorrere su o giù con due dita, oppure pizzicare. Entrambi arrivano alla vista come zoom.
- **Ruotare (3D):** premere il trackpad e trascinare con un dito. Se si usa il tocco per fare clic, anche il doppio tocco e trascinamento funziona quando il trascinamento è attivo in **Impostazioni di Sistema, Accessibilità, Controllo puntatore, Opzioni trackpad**.
- **Pan (3D):** tenere premuto {{key:Shift}} e trascinare. Tenere premuto {{key:Ctrl}} o {{key:Mod}} mentre si trascina fa anche pan. Un clic con due dita è un clic destro, ma trascinare con esso su un trackpad è scomodo.
- **Pan (Pianta e Prospetto):** basta trascinare.
- Un Magic Mouse non ha il pulsante centrale: usare il trascinamento con {{key:Shift}} per il pan e uno scorrimento sulla sua superficie per lo zoom.
:::

Altro sul clic destro e sul pan senza mouse: [Tasti, mouse e trackpad](common:keys).

## Pianta e Prospetto rendono più facile il posizionamento

In {{ui:3D}}, le intersezioni a livelli diversi possono trovarsi una sopra l'altra sullo schermo, e un clic va al punto più vicino. In {{ui:Pianta}} e {{ui:Prospetto}} possono essere scelti solo i punti del livello o della linea di griglia che si sta guardando.

1. Scegliere {{ui:Pianta}}, poi scegliere un livello nell'elenco accanto ai pulsanti. La vista guarda verso il basso su quel livello; tutto ciò che è più di 1,5 m sopra di esso viene tagliato via.
2. Oppure scegliere {{ui:Prospetto}}, poi scegliere una linea di griglia con lettera ("Griglia A", "Griglia B" …). La vista guarda dritto verso quella linea; viene mostrato solo l'acciaio entro 1 m da essa.

I prospetti sono disponibili solo sulle linee di griglia con lettera. Per lavorare su una linea di griglie numerate (un telaio che va da A a B), usare {{ui:3D}}, oppure posizionare digitando nel modulo {{ui:Aggiungi per griglia}}. Vedere [Posizionare pilastri, travi e controventi](topic:place-members#place-by-grid-without-clicking).

## Selezione

- Fare clic su un pezzo per selezionarlo. Assume il colore di evidenziazione e il pannello {{ui:Proprietà}} lo mostra.
- Fare clic su uno spazio vuoto, o premere {{key:Esc}}, per cancellare la selezione.
- L'acciaio prevale sul calcestruzzo: un clic su un pilastro dentro un plinto trasparente seleziona il pilastro. Fare clic sul plinto lontano dal pilastro, o su una delle sue barre, per selezionare il plinto.
- Fare clic su un bullone o su una piastra di testa seleziona la sua unione.
- In Pianta e Prospetto, i pezzi tagliati via non possono essere cliccati.
- Tenere premuto {{key:Shift}} (oppure {{key:Ctrl}}, o {{key:Mod}}) e fare clic per aggiungere un pezzo alla selezione o toglierlo; {{key:Mod+A}} seleziona tutto. La selezione con finestra (trascinando un riquadro) non è ancora implementata. Cosa si può fare con più pezzi: [Copia, incolla e duplica](topic:copy-paste).

Si può anche selezionare dagli elenchi: fare clic su una marca in {{ui:Marche dei pezzi}} a sinistra, su una marca del pezzo nella scheda {{ui:Distinta dei materiali}}, oppure su {{ui:Seleziona}} accanto a una riga in {{ui:Problemi}}.

## Se la vista sembra sbagliata

- Modello perso? Scegliere il pulsante adatta.
- La vista è vuota o grigia con un messaggio su WebGL: vedere [Risoluzione dei problemi](topic:troubleshooting#the-3d-view-is-missing).
- Tutto funziona anche senza la vista 3D, tranne il clic in essa: i pannelli, i report e le esportazioni funzionano, e {{ui:Aggiungi per griglia}} posiziona i membri digitando.
