---
title: Verifiche di costruibilità
summary: Problemi per ciò che un dettagliante nota a colpo d'occhio: un bullone che una chiave non raggiunge, bulloni troppo vicini per la chiave a bussola, saldature d'angolo fuori dai loro limiti di dimensione, saldature che una torcia non raggiunge e tubi che trattengono acqua.
keywords: costruibilità, chiave, chiave a bussola, accessibilità del bullone, serraggio, dimensione saldatura, saldatura d'angolo, saldatura minima, saldatura massima, acqua, foro di sfiato, foro di drenaggio, zincatura, profilo cavo, problemi
from: 72315151
---

DetailCraft cerca quattro tipi di problemi che nessuna verifica di resistenza trova, e li elenca nel pannello {{ui:Problemi}}. Sono avvisi e note da controllare, non errori: il modello viene comunque costruito.

## Un bullone che una chiave non raggiunge

Per ogni bullone, DetailCraft mette una bussola sulla testa e sul dado. La bussola è un cilindro largo quanto il dado misurato tra gli spigoli più una parete di 4 mm, lungo 60 mm. Se un'anima di trave, un'ala, una piastra o un controvento si trova dentro quel cilindro, il problema indica il collegamento, quanti bulloni, quale parte intralcia e a quale distanza dal bullone si trova.

La bussola è una tipica bussola a percussione. Una chiave fissa richiede meno spazio e un utensile più grande ne richiede di più. Chiedere al proprio assistente collegato di eseguire `constructability_check` con un altro `socketLength` per vedere come cambia la risposta.

## Bulloni troppo vicini per la bussola

La bussola su un bullone non deve toccare la testa del successivo. I bulloni di un collegamento più vicini della larghezza della bussola più la testa del vicino sono elencati con l'interasse trovato e quello necessario.

## Dimensioni delle saldature d'angolo

AISC 360-16 Tabella J2.4 fissa la saldatura d'angolo minima in base allo spessore della parte più sottile (3 mm fino a 6.35 mm di spessore, 5 mm fino a 12.7, 6 mm fino a 19.05, 8 mm oltre), e J2.2b la massima lungo un bordo di materiale: non più grande del materiale quando è più sottile di 6.35 mm, altrimenti 1.6 mm in meno. I collegamenti con la stessa dimensione sullo stesso spessore sono elencati come un unico problema.

Lo spessore usato è la parte più sottile nominata dalla saldatura, quindi viene elencata una saldatura da 8 mm tutt'intorno a una trave con anima da 6.35 mm.

## Acqua e sfiati

- Un'**estremità superiore aperta** di un profilo cavo che sta verticale o inclinato di più di 10° fa entrare la pioggia.
- Un profilo cavo **chiuso alle due estremità** richiede uno sfiato e un foro di drenaggio; la zincatura a caldo per immersione e la pressione dell'aria riscaldata ne richiedono uno.

## La saldatrice la raggiunge?

Una saldatura d'angolo si esegue con la torcia a metà strada tra le due facce che unisce. Per ogni saldatura d'angolo tutt'intorno (una piastra di testa, una piastra di base, una piastra d'angolo a 45°), la verifica prende il contorno della sezione del membro nella piastra e, ogni 20 mm, traccia un percorso della torcia verso l'esterno a 45° da dove il suo ugello (raggio di 10 mm all'inizio) libera per primo entrambe le facce, per altri 30 mm. Se il percorso incontra l'ala della trave stessa o un'altra parte, quella quota di saldatura è elencata con la parte e la distanza. Questi numeri sono tipici, non di una norma: chiedere al proprio carpentiere il processo e l'ugello. Le saldature lungo due bordi (un'aletta di taglio) non vengono localizzate e non sono verificate.
