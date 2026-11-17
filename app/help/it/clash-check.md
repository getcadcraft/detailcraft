---
title: Verificare le interferenze
summary: Trovare membri, piastre e plinti che si compenetrano, escludendo le parti che un collegamento intende far incontrare, e passare a ciascuna interferenza.
keywords: interferenza, verifica interferenze, collisione, compenetrazione, sovrapposizione, intersezione, interferenza forte, coordinamento, verifica modello
from: 04d72d3b
---

Aprire la scheda {{ui:Interferenze}} sotto la vista e scegliere {{ui:Verifica ora}}. DetailCraft esamina ogni coppia di parti nelle fasi mostrate: acciaio contro acciaio, e acciaio contro un plinto. La scheda elenca ogni interferenza, partendo dalla più profonda, con:

- le due parti, per marca (o marca del plinto) e profilo;
- **Sovrapposizione (mm)**: quanto un punto di una parte si trova all'interno dell'altra, fino alla faccia più vicina;
- **Vicino a**: l'intersezione di griglia e il livello in cui si trova, oppure le sue coordinate;
- {{ui:Mostra}}: seleziona entrambe le parti e porta il punto al centro della vista.

Il titolo della scheda mostra quante interferenze ha trovato l'ultima verifica. La verifica non viene eseguita da sola: dopo una modifica del modello l'elenco lo segnala, e {{ui:Verifica ora}} la esegue di nuovo.

## Cosa non è un'interferenza

- Parti che si limitano a toccarsi: una piastra contro una flangia, una piastra di base sul suo plinto, due membri testa a testa. **Tolleranza (mm)** imposta quanto due parti possono compenetrarsi prima che conti (1 mm all'inizio; fino a 50).
- Parti che un collegamento unisce: una piastra di testa con la sua trave e con la flangia del pilastro a cui è imbullonata, la trave e il pilastro di quel nodo, una piastra di base con il suo pilastro, le piastre di una giunzione con entrambi i pezzi, un controvento con il suo fazzoletto (la fessura di un tubo non viene tagliata nel modello). Il collegamento fa sì che queste parti debbano incontrarsi.
- Il dente di taglio di una piastra di base nel plinto sottostante (si trova in una tasca di malta).
- Bulloni e tirafondi (passano attraverso fori) e armature.
- Parti in fasi nascoste. Vedere [Fasi](topic:phases).

Un controvento o una trave che entra in un pilastro senza collegamento tra loro **è** un'interferenza: quel nodo richiede ancora un collegamento. Il controvento del telaio di esempio lo mostra: non ha fazzoletto. Selezionarlo e scegliere {{ui:Fazzoletto}} ([Fazzoletti dei controventi](topic:brace-gussets)) e le sue interferenze spariscono.

## Da sapere

- La sovrapposizione misura la profondità nel materiale, quindi un membro che entra nell'anima o nell'ala sottile di un pilastro mostra solo pochi millimetri anche quando entra molto.
- Le parti vengono verificate come sono tagliate: si tiene conto degli intagli e del ritaglio di una trave alle sue piastre di testa. I fori non vengono considerati.
