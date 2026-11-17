---
title: Crea disegni di officina
summary: Un foglio per ogni marca di pezzo, creati tutti insieme: visualizza in anteprima qualsiasi foglio e scarica un foglio o l'intero set come PDF in formato da A4 ad A1 o ANSI da B a D, con fori, scassi, quote e cartiglio.
keywords: disegno di officina, disegni di officina, tutti i pezzi, lotto, intero set, disegno di singolo pezzo, disegno di fabbricazione, pdf, disegno di dettaglio, disegno di pezzo, stampa
from: d25fe035
---

DetailCraft crea un foglio per ogni marca di pezzo, per ogni trave, pilastro, controvento e piastra del modello, tutti insieme: non occorre selezionarli uno per uno. I pezzi identici condividono una marca, quindi condividono un foglio. I fogli vengono generati al momento dal modello; non vengono memorizzati né modificati.

## Crea l'intero set

1. Scegliere {{ui:Shop drawing}} nel gruppo {{ui:Output}}. Non occorre selezionare nulla. Con un pezzo selezionato, la finestra si apre sul foglio di quel pezzo. Nel pannello {{ui:Properties}} lo stesso pulsante si chiama {{ui:Shop drawing}} per le aste e {{ui:Plate drawing}} per i collegamenti.
2. Si apre un'anteprima, con titolo la marca del pezzo, per esempio "Disegno di officina b1". Il primo elenco accanto al titolo contiene ogni marca di pezzo con il suo profilo, la lunghezza e la quantità: scegliere una marca per vederne il foglio. Il secondo elenco cambia il formato del foglio; l'intero set viene rigenerato in quel formato (vedi [Disegni d'insieme e di assieme](topic:drawings#choose-the-sheet-size)).
3. Scegliere {{ui:Download all}} (il pulsante riporta il numero di fogli) per un unico PDF con una pagina per marca di pezzo, `<name> Shop drawings.pdf`. Ogni foglio riporta "Foglio 3 di 42" nel proprio cartiglio. Oppure scegliere {{ui:Download this sheet}} per quello che si sta guardando, `<name> <mark>.pdf`.
4. Chiudere l'anteprima con la × o con {{key:Esc}}.

Se {{ui:Shop drawing}} è disattivato, il modello non ha ancora pezzi.

## Cosa c'è nel foglio

Per un profilo a I:

- **Prospetto**, guardando l'anima: il pezzo con i suoi scassi, i fori nell'anima come cerchi e i fori nelle ali come linee nascoste (tratteggiate).
- **Pianta dell'ala superiore**, vista dall'alto, quando un'ala ha fori. I fori dell'ala inferiore sono tratteggiati.
- **Sezione** attraverso il profilo.
- **Quote:** posizioni dei fori concatenate lungo il pezzo più la lunghezza totale, altezze dei fori nell'anima, il gauge e le dimensioni degli scassi.
- **Elenco dei fori:** ogni gruppo di fori, per esempio "8 × Ø22 nell'ala superiore".
- **Saldatura**, quando il pezzo ha piastre saldate.
- **Cartiglio:** marca di pezzo, marca di assieme, profilo, materiale, lunghezza, quantità, peso unitario e totale, nome del modello e data.

Per un canale, un angolare o una sezione cava il foglio è lo stesso, visto dall'anima o dal lato: le pareti di un tubo sono linee nascoste (tratteggiate), e la sezione indica lo spessore della parete.

Per una piastra: la faccia della piastra con i suoi fori, e il suo bordo come sezione.

## Scale

La scala viene scelta da un elenco (da 1:1 fino a 1:200) in modo che il pezzo stia nel foglio. Un pezzo lungo e basso risulterebbe troppo sottile da leggere a una sola scala: quando l'altezza su carta sarebbe sotto 30 mm, l'altezza viene disegnata a una scala maggiore della lunghezza. Il titolo della vista lo indica, per esempio "lunghezza 1:20, altezza 1:5 (non a scala unica; prevalgono le quote)". Leggere sempre le dimensioni dalle quote, non misurando il foglio.

## Da sapere

- La quantità è il numero di pezzi con quella marca nel modello. Le marche possono cambiare numerazione dopo una modifica; vedi [Verifica le marche e la distinta dei materiali](topic:marks-and-bom).
- Ogni foglio è un singolo pezzo, senza simboli di saldatura; i disegni di assieme (con simboli di saldatura) e i disegni d'insieme sono in [Disegni](topic:drawings). Il foglio non può essere modificato né annotato in DetailCraft. Per annotarlo, aprire il PDF in un'app di annotazione PDF come MarkupCraft.
- Il cartiglio riporta "Build di laboratorio DetailCraft — millimetri".
- Il testo usa il carattere standard PDF Helvetica. I caratteri fuori dall'insieme dell'Europa occidentale vengono stampati come "?", e la barra di stato li conta.

## Stampa

Stampare il PDF scaricato al 100% (senza "adatta alla pagina") su carta del formato scelto, se si vogliono far valere le scale indicate. Su un foglio più piccolo, ridurre in scala e affidarsi alle quote.
