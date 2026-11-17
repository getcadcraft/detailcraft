---
title: Aggiungi piastre di base e tirafondi
summary: Posiziona una piastra di base saldata con quattro tirafondi sotto un pilastro, imposta le sue dimensioni e copiala su ogni pilastro simile.
keywords: piastra di base, baseplate, tirafondi, bulloni di ancoraggio, bulloni di fissaggio, attacco del pilastro, bulloni di fondazione, simili
from: 619ebc64
---

Un collegamento con piastra di base posiziona una piastra sotto il pilastro, accorcia il pilastro dello spessore della piastra, salda i due elementi insieme e aggiunge quattro tirafondi che passano attraverso fori nella piastra.

:::warning
I valori sono valori di partenza, non un progetto. DetailCraft non verifica la pressione di contatto, la resistenza dei tirafondi né l'ancoraggio nel calcestruzzo.
:::

## Aggiungi una piastra di base

1. Scegliere {{ui:Select}} ({{key:V}}) e fare clic su un pilastro. Deve essere verticale.
2. Scegliere {{ui:Base plate}} nel gruppo {{ui:Connect}}, oppure {{ui:Add base plate}} nel pannello {{ui:Properties}}.
3. La barra di stato indica "Piastra di base aggiunta con quattro tirafondi." Il nuovo collegamento viene selezionato.

Un pilastro può avere una sola piastra di base. Se ne ha già una, la barra di stato indica "Questo pilastro ha già una piastra di base."

## Modifica la piastra

Selezionare la piastra di base (fare clic sulla piastra o su un tirafondo). In {{ui:Plate, bolts and weld (mm)}}:

| Impostazione | Predefinito | Funzione |
|---|---|---|
| Spessore della piastra | 25 | Il pilastro viene accorciato di questo valore |
| Lunghezza della piastra | 450 | Lungo la profondità del pilastro |
| Larghezza della piastra | 400 | Trasversalmente al pilastro |
| Diametro del tirafondo | 20 | Dimensione del tirafondo |
| Diametro del foro | 33 | Foro nella piastra |
| Classe dei bulloni | F1554 Gr 36 | Classe del tirafondo, come testo |
| Interasse dei tirafondi (lungo la profondità) | 350 | Tra i centri dei tirafondi, lungo la lunghezza della piastra |
| Interasse dei tirafondi (trasversale) | 300 | Tra i centri dei tirafondi, trasversalmente |
| Sporgenza dei tirafondi sopra la piastra | 100 | Dalla parte superiore della piastra alla testa del tirafondo |
| Ancoraggio dei tirafondi sotto la piastra | 450 | Dalla parte inferiore della piastra verso il basso nel calcestruzzo |
| Dimensione del cordone d'angolo | 8 | Tutto intorno alla base del pilastro |
| Materiale della piastra | A36 | Testo |
| Spessore della malta | 0 | Spazio tra la parte superiore del calcestruzzo e la parte inferiore della piastra |
| Irrigidimenti | Nessuno | Scegliere Nessuno, 2 (allineati all'anima) o 4 (anche perpendicolari a essa); vedi sotto |
| Spessore, altezza dell'irrigidimento | 12, 150 | |
| Profondità del dente di taglio | 0 | Quanto il dente scende sotto la piastra; 0 = nessun dente |
| Spessore, larghezza del dente di taglio | 25, 150 | |
| Rondelle a piastra | Nessuna | Su ogni tirafondo, oppure nessuna |
| Dimensione, spessore della rondella | 0, 0 | 0 = il minimo dalla AISC Design Guide 1 per il tirafondo |

Lunghezza del tirafondo = ancoraggio + spessore della malta + spessore della piastra + sporgenza. Con i valori predefiniti è di 575 mm.

## Dettagli di base: malta, irrigidimenti, dente di taglio, rondelle

Tutti e quattro sono disattivati su una nuova piastra di base e su piastre di base dei modelli creati prima di DetailCraft 0.4.

- **Spessore della malta.** La piastra si trova a questa distanza sopra la parte superiore del calcestruzzo, e i tirafondi si allungano della stessa misura. AISC Design Guide 1 (2.10) suggerisce 1 in. su un pavimento finito e da 1½ a 2 in. su un plinto o un pilastrino; di più per piastre grandi e per piastre con dente di taglio.
- **Irrigidimenti.** Piastre verticali saldate al pilastro e alla piastra, dalla faccia del pilastro fino al bordo della piastra, come rettangoli (per ora senza smusso né rastremazione). **2** sono allineati all'anima, oltre ciascuna ala; **4** aggiunge due irrigidimenti perpendicolari all'anima, tra le ali, fino ai lati della piastra. Su un pilastro tubolare si trovano al centro di ciascuna faccia. Ciascuno è saldato al pilastro e alla piastra da entrambi i lati.
- **Dente di taglio.** Una piastra saldata tutto intorno sotto la piastra di base, allineata alla profondità del pilastro e centrata. DetailCraft avvisa se non è più profonda dello spessore della malta. Non crea la cavità nel plinto; per questo motivo il [controllo interferenze](topic:clash-check) esclude il dente e il plinto.
- **Rondelle a piastra.** Una rondella quadrata a piastra su ciascun tirafondo, appoggiata sulla piastra di base, elencata nel gruppo del pilastro come sciolta (fornita con il pilastro, non saldata: Design Guide 1, 2.6). Con dimensione e spessore pari a 0, DetailCraft usa la rondella minima dalla AISC Design Guide 1, 2ª ed., Tabella 2.3, per il tirafondo; un tirafondo metrico usa la dimensione in pollici successiva superiore (un tirafondo M20 prende la riga da 7/8 in.: 2½ in. × 5/16 in.). Il pannello delle proprietà mostra la dimensione usata. Il foro della rondella è il diametro del tirafondo + 1/16 in.: è una scelta di DetailCraft, la tabella non ne indica una. DetailCraft avvisa quando i tirafondi potrebbero non sporgere abbastanza per la rondella e il dado (sporgenza inferiore allo spessore della rondella + diametro del tirafondo).

La Tabella 2.3 della Design Guide 1 indica anche il foro del tirafondo nella piastra: 1-5/16 in. per un tirafondo da ¾ in., 1-9/16 in. per ⅞ in., 1-13/16 in. per 1 in. DetailCraft non modifica la dimensione del foro scelta.

Compaiono anche avvisi quando i fori dei tirafondi sono più vicini di 1,2 volte il diametro del foro al bordo della piastra, quando i tirafondi cadono all'interno del profilo del pilastro o quando la piastra è più piccola del pilastro.

## Copia su pilastri simili

1. Selezionare la piastra di base.
2. Scegliere {{ui:Apply to similar (n)}}, oppure {{ui:Similar}} nel menu {{ui:More}} del gruppo {{ui:Connect}}.
3. Ogni pilastro verticale con lo stesso profilo, privo di piastra di base e che non poggia su un altro pilastro riceve una copia.

## Piastre di base e plinti

Una piastra di base non richiede un plinto, e un plinto non tiene conto della piastra di base sovrastante: i tirafondi non sono collegati all'armatura del plinto. Posizionare i plinti con {{ui:Footing}}; vedi [Posiziona plinti con armatura](topic:footings-and-rebar).
