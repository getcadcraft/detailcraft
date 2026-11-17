---
title: Giunti a taglio a sbieco
summary: Unire due membri a profilo a I che si incontrano con un angolo: entrambe le estremità tagliate sul piano che divide a metà l'angolo, con piastre di testa, bulloni e irrigidimenti se li si desidera.
keywords: taglio a sbieco, sbieco, giunto a sbieco, ginocchio, anca, telaio a portale, colmo, angolo, taglio ad angolo, taglio obliquo, piastra di testa, piastra di testa bullonata, irrigidimento, collega
from: cd8380d4
---

Un taglio a sbieco unisce due membri a profilo a I le cui estremità si incontrano con un angolo, come il ginocchio di un telaio a portale, un colmo, o due travi che svoltano un angolo in pianta. DetailCraft taglia entrambe le estremità sul piano che divide a metà l'angolo tra loro, così che le due facce tagliate combacino. Se lo si desidera, aggiunge una piastra di testa a ciascuna estremità tagliata, unisce con bulloni le due piastre e inserisce una coppia di irrigidimenti d'anima in ciascun membro.

## Dove funziona

- Due **profili a I** (IPE, HEA, HEB, W e simili) le cui **estremità si incontrano sullo stesso nodo**. Ciascun membro può essere disegnato in entrambe le direzioni.
- L'angolo tra i membri deve essere di almeno 15°. I membri allineati vengono rifiutati: usare una [giunzione](topic:splices).
- Il taglio semplice (senza piastre) funziona comunque si incontrino i membri. Le **piastre di testa** richiedono che i due membri si incontrino nel piano delle loro anime, come in un ginocchio di portale o in un colmo. Due travi che svoltano un angolo in pianta si incontrano nel piano delle loro flange, quindi ottengono solo il taglio semplice.
- Membri di dimensioni diverse vengono uniti, ma con un avviso: le loro facce tagliate non combaciano.

## Aggiungere un taglio a sbieco

1. Selezionare i due membri: fare clic su uno, poi {{key:Shift}}+clic sull'altro.
2. Scegliere {{ui:Taglio a sbieco}} nel menu {{ui:Altro}} del gruppo {{ui:Collega}}. Si apre la finestra di dialogo Taglio a sbieco.
3. Impostare i campi numerati. Il disegno accanto viene generato dai numeri mentre si digita, e i suoi cerchietti numerati indicano cosa imposta ogni campo.
4. Scegliere {{ui:Aggiungi il giunto obliquo}}. Se si sono selezionati più di due membri, ogni giunto libero tra essi riceve lo stesso taglio a sbieco.

Per modificare un taglio a sbieco in seguito, selezionarlo (fare clic su una delle sue piastre) e scegliere {{ui:Finestra del giunto obliquo con anteprima}} nel pannello di destra, oppure modificarne direttamente le impostazioni lì. Un taglio semplice non ha piastre su cui fare clic: selezionare i suoi due membri e scegliere di nuovo {{ui:Taglio a sbieco}}, e la finestra si apre su quel taglio. {{ui:Applica a simili (n)}} lo copia su ogni giunto libero tra membri dei stessi due profili con lo stesso angolo.

## I campi numerati (mm)

| N. | Impostazione | Predefinito | Cosa fa |
|---|---|---|---|
| 1 | Spazio tra le piastre (o tra le estremità tagliate) | 0 | Spazio libero al giunto. Ciascun lato ne mantiene metà |
| 2 | Piastre di testa, spessore della piastra | attivo, 20 | Una piastra di testa saldata tutt'intorno a ciascuna estremità tagliata. Deselezionare per un taglio semplice |
| 3 | File di bulloni, passo tra le file, interasse trasversale, fila esterna | 4, 0, 0, disattivata | Passo 0 distribuisce le file in modo uniforme tra le flange. Interasse 0 = metà della larghezza della piastra, almeno 2,4 × il foro. La fila esterna va nel prolungamento della piastra oltre la flangia esterna |
| 4 | Piastra oltre la flangia esterna | 0 | Quanto le piastre si estendono oltre la flangia esterna, lungo il taglio |
| 5 | Piastra oltre la flangia interna | 0 | Lo stesso, verso l'interno |
| 6 | Irrigidimenti d'anima, distanza oltre il taglio | disattivati, 50 | Una coppia in ciascun membro, su entrambi i lati dell'anima, perpendicolari al membro, a questa distanza oltre l'estremità lontana del suo taglio |
| 7 | Spessore dell'irrigidimento | 10 | |

Sotto {{ui:Bulloni}}: diametro del bullone, foro, qualità e margine di lunghezza (20, 22, A325, 30), come per le piastre di testa. Sotto {{ui:Piastre e saldature}}: larghezza della piastra (0 = larghezza della flangia), dimensione del cordone d'angolo (8) e materiale della piastra (A36).

## Cosa si ottiene

- **I tagli.** L'estremità di ciascun membro è tagliata sul suo piano. La sua lunghezza in elenchi, disegni e file NC è la **lunghezza complessiva**, dalla sua estremità squadrata al punto più lontano del taglio.
- **Le piastre** appartengono al loro membro: l'assieme di ciascun membro è il membro, la sua piastra di testa e i suoi irrigidimenti. I bulloni sono bulloni di cantiere del giunto: la distinta dei materiali li conta una volta, e il disegno dell'assieme di ciascun membro li elenca come bulloni sciolti.
- **I disegni** mostrano le estremità inclinate e le piastre; il disegno di officina di un membro tagliato a sbieco indica l'angolo di ciascun taglio rispetto alla squadra.
- **I file NC** (DSTV) riportano nell'intestazione gli angoli dei tagli obliqui, come richiede lo standard, e i contorni seguono il taglio. Verificarli nel visualizzatore NC della propria officina prima del taglio, come per ogni file NC.
- **IFC** ritaglia l'estrusione di ciascun membro con il suo piano di taglio, così gli altri programmi mostrano il taglio reale.
- **Marche:** un membro tagliato a sbieco è un pezzo diverso da uno tagliato squadrato della stessa lunghezza. Due membri con gli stessi tagli condividono una marca, come fanno i due puntoni di un colmo.

## Da sapere

- Il taglio a sbieco resta attivo. Spostando o ridimensionando uno dei due membri, taglio, piastre e bulloni lo seguono. Eliminando uno dei due membri, il taglio a sbieco scompare e l'estremità dell'altro membro torna squadrata.
- Gli avvisi usano gli stessi minimi EN 1993-1-8 degli altri collegamenti (distanza dalle estremità e dai bordi 1,2 × foro, passo 2,2 × foro, interasse 2,4 × foro), più file di bulloni troppo vicine a una flangia, piastre più strette delle flange e irrigidimenti senza spazio.
- I valori sono valori di partenza, non un progetto. DetailCraft non verifica la resistenza del collegamento e non crea anche nessuna anca, nessun taglio a sbieco saldato a testa, né irrigidimenti allineati alle flange dell'altro membro.
