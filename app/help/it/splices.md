---
title: Giunzioni
summary: Unisce testa a testa due pezzi di una trave o di un pilastro con piastre coprigiunto bullonate sulle ali e sull'anima.
keywords: giunzione, giunzione di trave, giunzione di pilastro, piastra coprigiunto, piastra di giunzione, piastra d'ala, piastra d'anima, unione bullonata, unione, sollevamento, collega
from: 97d141c2
---

Una giunzione bullonata unisce due pezzi di una stessa sezione a I, testa a testa: una piastra coprigiunto all'esterno di ciascuna ala e una piastra su ogni lato dell'anima, imbullonate attraverso entrambi i pezzi. DetailCraft riduce i pezzi fino allo spazio, posiziona le quattro piastre, pratica i fori nelle piastre e in entrambi i pezzi, aggiunge i bulloni e segnala le distanze dal bordo, l'interasse e l'accoppiamento.

## Dove funziona

- Due travi, o due tronchi di pilastro, dello **stesso profilo a I**, che si incontrano **testa a testa in linea**: le estremità distano al massimo 50 mm, i pezzi sono paralleli e su una stessa retta (entro 1 mm). Ciascun pezzo può essere disegnato in entrambe le direzioni.
- Funzionano pezzi orizzontali, inclinati o verticali.
- Vengono rifiutati due pezzi di altezza o larghezza d'ala diverse, così come canali, angolari e tubi.

## Aggiungere giunzioni

1. Disegnare i due pezzi in modo che si incontrino testa a testa. Per dividere un'asta già disegnata, disegnarla di nuovo come due pezzi.
2. Selezionare uno (o entrambi) i pezzi e scegliere {{ui:Giunzione}} nel menu {{ui:Altro}} del gruppo {{ui:Collega}}.
3. Ogni giunto libero dei pezzi selezionati con un altro pezzo dello stesso profilo riceve una giunzione. La barra di stato indica quante.

Selezionare la giunzione (fare clic su una delle sue piastre) per modificarne le impostazioni nel pannello destro. {{ui:Applica a simili (n)}} copia la giunzione su ogni altro giunto libero tra pezzi dello stesso profilo.

## Impostazioni (mm)

| Impostazione | Predefinito | Funzione |
|---|---|---|
| Spazio tra le estremità | 10 | Ogni pezzo viene ridotto della metà |
| Diametro del bullone, foro, classe, sovralunghezza | 20, 22, A325, 30 | Come per le piastre di testata |
| Spessore della piastra d'ala | 12 | La piastra è larga quanto l'ala |
| File di bulloni sull'ala (per lato) | 3 | File di bulloni attraverso l'ala, su ciascun lato del giunto |
| Interasse dei bulloni sull'ala | 75 | Lungo l'asta |
| Calibro dei bulloni sull'ala | 0 | Tra le due linee di bulloni; 0 = larghezza dell'ala meno 80 |
| Distanza di estremità sull'ala | 40 | Dall'estremità dell'asta al primo bullone, e dall'ultimo bullone all'estremità della piastra |
| Spessore della piastra d'anima | 8 | Una per lato dell'anima |
| File di bulloni sull'anima | 3 | Lungo l'anima, centrate |
| Colonne di bulloni sull'anima (per lato) | 2 | Lungo l'asta su ciascun lato del giunto |
| Interasse dei bulloni sull'anima, lungo l'anima / lungo l'asta | 75, 75 | |
| Distanza di estremità sull'anima | 40 | Come per le ali |
| Altezza della piastra d'anima | 0 | 0 = anima libera tra i raccordi, meno 10 in alto e in basso |
| Materiale della piastra | A36 | Testo |

La lunghezza delle piastre deriva dai bulloni: piastra d'ala = spazio + 2 × (2 × distanza di estremità + (file − 1) × interasse); le piastre d'anima allo stesso modo, con le loro colonne. Con i valori predefiniti le piastre d'ala sono lunghe 470.

## Da sapere

- Le piastre appartengono al **primo pezzo disegnato** dei due (nelle sue proprietà è detto primo pezzo): compaiono nel suo disegno d'assieme e vengono fornite con esso, imbullonate e non saldate. Il disegno d'assieme del secondo pezzo mostra solo i suoi fori.
- I bulloni dell'ala stringono l'ala e la sua piastra; i bulloni dell'anima stringono l'anima e le due piastre d'anima. Le lunghezze dei bulloni sono elencate separatamente nelle proprietà.
- Gli avvisi usano gli stessi minimi della EN 1993-1-8 degli altri collegamenti (distanza di estremità e dal bordo 1,2 × foro, interasse 2,2 × foro lungo l'asta e 2,4 × foro in trasversale), più una piastra d'anima più alta dell'anima libera e bulloni d'ala troppo vicini all'anima per il raccordo.
- DetailCraft non dimensiona la giunzione (nessuna verifica di resistenza) e non crea piastre di riempimento per pezzi di spessore diverso.
- Copiando entrambi i pezzi si copia anche la loro giunzione; eliminando uno dei due pezzi si elimina la giunzione.
