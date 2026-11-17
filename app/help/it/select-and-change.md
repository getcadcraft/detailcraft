---
title: Seleziona con una finestra, sposta, ruota, specchia, modifica molte aste
summary: Trascina una finestra per selezionare, trascina i pezzi selezionati per spostarli, sposta, ruota o specchia la selezione (o una sua copia), oppure modifica profilo, materiale, posizione o rotazione di molte aste insieme.
keywords: lazo, recinto, selezione a mano libera, trascina, trascina e rilascia, sposta trascinando, snap, finestra, intersezione, selezione a riquadro, trascina per selezionare, seleziona molti, sposta, ruota, specchia, inverti, copia, modifica molti, più aste, profilo, materiale, posizione, rotazione, varia, linea di griglia
from: 50b16f9a
---

Ciascuna di queste operazioni è un unico passo di annullamento: un {{key:Mod+Z}} le annulla tutte.

## Seleziona con una finestra

- In {{ui:Plan}} e {{ui:Elevation}}, trascinare con il pulsante sinistro a partire da uno spazio vuoto. In {{ui:3D}}, tenere premuto {{key:Shift}} e trascinare (un trascinamento semplice ruota il modello).
- Trascinare **verso destra** per una finestra: prende ciò che è interamente contenuto, disegnata con un bordo continuo.
- Trascinare **verso sinistra** per una finestra di intersezione: prende tutto ciò che tocca, disegnata tratteggiata.
- Tenere premuto {{key:Shift}} all'inizio del trascinamento per aggiungere alla selezione invece di sostituirla.
- Una pianta o un prospetto mostra solo ciò che rappresenta: i pezzi tagliati sopra la pianta, o a più di 1 m dalla linea di griglia del prospetto, non vengono selezionati.
- {{key:Esc}} durante il trascinamento annulla la finestra.

### Lazo

Scegliere **Lazo** sotto {{ui:Dragging to select}} nelle [impostazioni di DetailCraft](topic:settings): lo stesso trascinamento disegna una linea a mano libera invece di un rettangolo.

- Il primo spostamento laterale stabilisce come selezionare: **verso destra**, ciò che è interamente contenuto (linea continua); **verso sinistra**, ciò che tocca (tratteggiata).
- Premere {{key:Space}} durante il trascinamento per passare tra interno, intersezione e **recinto**: una linea aperta che prende tutto ciò che attraversa (puntinata, arancione).
- {{key:Shift}} per aggiungere ed {{key:Esc}} per annullare funzionano come per la finestra.

:::touch
Su uno schermo touch, un dito sposta la pianta e il prospetto come prima; i pezzi si selezionano toccandoli.
:::

In {{ui:Plan}} e {{ui:Elevation}}, spostare la vista con il pulsante destro o centrale mentre lo strumento {{ui:Select}} è attivo.

## Trascina i pezzi per spostarli

1. Selezionare prima i pezzi (clic, {{key:Shift}}+clic oppure una finestra).
2. Premere su uno dei pezzi selezionati e trascinare. Tutta la selezione si sposta; un contorno tratteggiato mostra dove andrà.
3. Rilasciare per posizionarla. {{key:Esc}} prima di rilasciare riporta tutto com'era.

- In {{ui:3D}} e {{ui:Plan}} i pezzi si spostano nel livello. Tenere premuto {{key:Mod}} all'inizio del trascinamento in {{ui:3D}} per spostarli invece su e giù.
- In {{ui:Elevation}} si spostano nel prospetto: lungo la linea di griglia e su e giù.
- Il pezzo trascinato si aggancia a un'intersezione di griglia quando la sua estremità arriva a pochi pixel da essa (l'intersezione si illumina e la barra di stato ne indica il nome). Altrimenti lo spostamento avviene a passi di 10 mm.
- Premere su un pezzo non selezionato ruota o sposta la vista, quindi un trascinamento non sposta mai qualcosa per errore.
- Il trascinamento è un unico passo di annullamento, come {{ui:Move}}. I collegamenti seguono le aste a cui appartengono.

## Modifica una proprietà su più aste

Selezionare due o più aste. In **Modifica su tutte** nel pannello {{ui:Properties}}:

- {{ui:Profile}}, {{ui:Position}}: per le travi, i pilastri e i controventi tra essi.
- {{ui:Plate thickness (mm)}} e {{ui:Plate width (mm)}}: per le piastre.
- {{ui:Material}} e {{ui:Rotation (°)}}: per tutte.

Un campo mostra **Varia** quando le aste non concordano. Scegliere o digitare un valore e ogni asta a cui si applica lo riceve; la barra di stato indica quante sono cambiate e quante hanno mantenuto il proprio valore.

I campi numerici del pannello {{ui:Properties}} accettano anche un calcolo: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Un calcolo che non può essere letto viene rifiutato, e la barra di stato indica dove è l'errore.

## Sposta, ruota o specchia

Selezionare aste e plinti (anche uno solo), poi usare **Sposta, ruota, specchia** nel pannello {{ui:Properties}}. I collegamenti non si spostano da soli: seguono le loro aste. Se si sposta una trave ma non il suo pilastro, la barra di stato indica quanti collegamenti ora uniscono un'asta spostata a una rimasta ferma, e [Problemi](topic:troubleshooting) segnala quando non combaciano più.

- **Sposta:** digitare x, y e z in millimetri e scegliere {{ui:Move}}. Oppure scegliere {{ui:Pick two points}} (o premere {{key:M}}): fare clic sull'intersezione di griglia da cui partire, poi su quella di arrivo. Un contorno tratteggiato segue il puntatore.
- **Ruota in pianta:** digitare l'angolo (in senso antiorario, visto dall'alto) e scegliere attorno a cosa ruotare: il centro della selezione, oppure un'intersezione di griglia. I pilastri ruotano con il telaio.
- **Specchia:** scegliere una linea di griglia. L'immagine speculare è lo stesso profilo ruotato nell'altro verso: un profilo a I mantiene le sue ali, un canale si rivolge nell'altro senso (alto e basso si scambiano), e fori e scassi seguono il pezzo.
- Spuntare **Mantieni l'originale (crea una copia)** per lasciare la selezione dov'è e spostare, ruotare o specchiare una copia. I suoi collegamenti la seguono quando {{ui:Copy end plates and base plates with their members}} è attivo nelle [impostazioni di DetailCraft](topic:settings).

La rotazione avviene attorno a una linea verticale e lo specchiamento su un piano verticale: i livelli restano orizzontali e i plinti restano verticali.
