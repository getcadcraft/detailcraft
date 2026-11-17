---
title: Piastre di taglio
summary: Imbullonare l'anima di una trave a una piastra saldata in officina a un'ala o a un'anima di un pilastro, anche dove la trave incontra il pilastro obliqua in pianta o inclinata.
keywords: piastra di taglio, piastra singola, piastra d'anima, collegamento semplice, collegamento d'anima, anima, obliquo, inclinato, pendenza, trave inclinata, bullonato, collega
from: 18afc8ab
---

Una piastra di taglio (piastra singola, piastra d'anima) è una piastra saldata al pilastro in officina; in cantiere l'anima della trave è imbullonata ad essa con una fila verticale di bulloni. DetailCraft posiziona la piastra, taglia la trave in modo che sia libera dal pilastro, pratica i fori nella piastra e nell'anima della trave, aggiunge i bulloni e la saldatura, e avvisa su distanze dai bordi e adattamento.

## Dove funziona

- Una trave (profilo a I o a C) la cui estremità giace sulla linea di un pilastro a I **verticale**, incontrandone l'**ala** o l'**anima**.
- **Squadrata, obliqua in pianta o inclinata**: la piastra segue l'anima della trave, e la trave viene tagliata indietro in modo che il suo spigolo più vicino mantenga la distanza dal pilastro. Una trave che sale o scende oltre 60° viene rifiutata.

## Aggiungere piastre di taglio

1. Selezionare la trave.
2. Nel gruppo {{ui:Collega}}, aprire {{ui:Altro}} e scegliere {{ui:Piastre di taglio}} (oppure scegliere {{ui:Aggiungi piastre di taglio}} nel pannello {{ui:Proprietà}}).
3. Ogni estremità libera della trave che incontra un pilastro riceve una piastra. Ogni estremità di trave prende un solo collegamento: una piastra di taglio oppure una piastra di testa.

Selezionare una piastra (cliccarla, oppure un suo bullone) per vederne e cambiarne le impostazioni. {{ui:Applica a simili}} copia la piastra, come piastra di taglio, su ogni giunto simile che non ha ancora un collegamento.

## Impostazioni (mm)

| Impostazione | Valore iniziale | Significato |
|---|---|---|
| Spessore della piastra | 10 | Lo spessore della piastra |
| Larghezza della piastra | 115 | Di quanto la piastra si protende dalla faccia del pilastro, lungo la trave |
| Diametro del bullone, Diametro del foro, Classe del bullone | 20, 22, A325 | Come per le piastre di testa |
| Righe di bulloni, Passo delle righe | 3, 75 | I bulloni nella fila verticale |
| Distanza dal bordo (bulloni superiori e inferiori) | 38 | Dai bulloni superiori e inferiori alle estremità della piastra; la piastra è profonda righe × passo + 2 × questo valore |
| Gruppo di bulloni innalzato di | 0 | 0 centra i bulloni sull'altezza della trave |
| Luce dal pilastro | 13 | Luce libera tra il pilastro e lo spigolo più vicino della trave |
| Linea dei bulloni dalla faccia del pilastro | 65 | Lungo la trave, dalla faccia del pilastro ai bulloni |
| Tolleranza di lunghezza del bullone | 30 | Aggiunta al serraggio (piastra + anima della trave), arrotondata per eccesso a 5 mm |
| Dimensione del cordone d'angolo | 6 | Su entrambi i lati della piastra verso il pilastro |

## Da sapere

- La piastra fa parte dell'assieme del pilastro (saldata in officina); l'assieme della trave ha solo i suoi fori.
- Una trave obliqua o inclinata è tagliata più indietro di una squadrata, perché il suo spigolo più vicino mantenga la luce. DetailCraft taglia le travi squadrate: il carpentiere adatta l'estremità. Anche il bordo della piastra verso il pilastro è disegnato squadrato.
- DetailCraft non verifica la resistenza. Gli avvisi usano i minimi della EN 1993-1-8 Tabella 3.3 per distanze dai bordi e passo, e segnalano quando la piastra è più profonda dell'anima della trave tra i suoi raccordi, o quando i bulloni sono troppo vicini all'estremità tagliata della trave.
- La [verifica di interferenza](topic:clash-check) lascia fuori una piastra e le membrature che collega: devono incontrarsi.
