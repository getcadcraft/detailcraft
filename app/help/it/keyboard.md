---
title: Tasti e azioni con mouse
summary: Ogni scorciatoia da tastiera e ogni azione con mouse, trackpad e tocco in DetailCraft, ricavate dal codice.
keywords: tastiera, scorciatoie, tasti di scelta rapida, tasti, mouse, trackpad, tocco, ctrl, comando, riepilogo
from: 05a2dea0
---

Come sono scritti i tasti in questa guida: [Tasti, mouse e trackpad](common:keys). Su Mac, {{key:Mod}} è il tasto Command; altrove è Ctrl.

## Strumenti

Funzionano quando il cursore non è in un campo di testo o numerico.

| Tasto | Azione |
|---|---|
| {{key:V}} | {{ui:Seleziona}} |
| {{key:B}} | {{ui:Trave}} |
| {{key:C}} | {{ui:Pilastro}} |
| {{key:R}} | {{ui:Controvento}} |
| {{key:P}} | {{ui:Piastra}} |
| {{key:F}} | {{ui:Plinto}} |
| {{key:S}} | {{ui:Scala}} |
| {{key:M}} | Sposta la selezione scegliendo due intersezioni di griglia ([Selezione con finestra, sposta, ruota, specchia, modifica molti](topic:select-and-change)) |
| {{key:Esc}} | Rilascia una finestra di selezione trascinata o rimette i pezzi trascinati nella posizione di partenza; annulla uno spostamento, il primo punto di una trave, di un controvento o di una piastra, oppure l'operazione di incolla; premere di nuovo per tornare a {{ui:Seleziona}}; in {{ui:Seleziona}}, cancella la selezione. Con il menu {{ui:Altro}} aperto, lo chiude |
| {{key:Delete}} o {{key:Backspace}} | Elimina la selezione (tutto ciò che è selezionato, in un unico passo di annulla) |

## File e modifica

| Tasto | Azione |
|---|---|
| {{key:Mod+S}} | {{ui:Salva}} il modello (download). Funziona anche mentre si scrive in un campo |
| {{key:Mod+O}} | Apre un modello. Funziona anche mentre si scrive in un campo |
| {{key:Mod+Z}} | Annulla (fuori dai campi di testo; dentro un campo annulla la digitazione) |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Ripristina |

## Copia e incolla

Funzionano quando il cursore non è in un campo di testo o numerico (lì copiano, incollano e selezionano il testo come di consueto). Ogni incolla, taglia, duplica o elimina è un unico passo di annulla. Altro: [Copia, incolla e duplica](topic:copy-paste).

| Tasto | Azione |
|---|---|
| {{key:Mod+C}} | {{ui:Copia}} i membri e i plinti selezionati (con i loro fori, scassi e unioni) |
| {{key:Mod+X}} | {{ui:Taglia}}: copia la selezione, poi la elimina |
| {{key:Mod+V}} | {{ui:Incolla}}: la copia segue il puntatore; fare clic su un'intersezione di griglia per posizionarla |
| {{key:Mod+Shift+V}} | {{ui:Incolla nella stessa posizione}}: alle coordinate da cui è stata copiata |
| {{key:Mod+D}} | {{ui:Duplica}}: una copia subito, spostata dallo scarto indicato in [Impostazioni di DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Seleziona tutto}}: ogni membro, unione e plinto |
| {{key:Esc}} | {{ui:Deseleziona tutto}} |

Se sulla pagina è selezionato del testo (per esempio in una tabella di report) e nulla nel modello, {{key:Mod+C}} copia il testo, come di consueto.

{{ui:Nuovo}}, {{ui:Esempio}} ed esporta non hanno tasti: usare la barra degli strumenti.

Nessuno di questi tasti ha effetto mentre è aperta una finestra di dialogo (l'anteprima del disegno di officina o una domanda).

## Campi e pannelli

| Tasto | Azione |
|---|---|
| {{key:Enter}} o {{key:Tab}} | Applica un valore digitato (ogni modifica è un unico passo di annulla) |
| {{key:Enter}} in un campo di {{ui:Griglie}}, {{ui:Livelli}}, {{ui:Profilo personalizzato}}, foro o scasso | Come scegliere il pulsante di quel modulo |
| {{key:Left}} {{key:Right}} | Spostarsi tra le schede {{ui:Problemi}}, {{ui:Distinta dei materiali}} e {{ui:Distinta di piegatura}} quando una scheda ha il fuoco |
| {{key:Esc}} | Chiude l'anteprima del disegno di officina o una finestra di domanda (come {{ui:Annulla}}) |

## Schermo e guida

| Tasto | Azione |
|---|---|
| {{key:Ctrl+Shift+F}} | Passa tra normale, schermo intero e schermo intero con le barre nascoste. Ctrl su ogni computer, anche su Mac |
| {{key:Mod+,}} | Apre {{ui:Impostazioni}} ([Impostazioni di DetailCraft](topic:settings)) |
| {{key:Esc}} | Esce dallo schermo intero |
| {{key:F1}} | Apre questa guida |

## Mouse

| Azione | In 3D | In Pianta e Prospetto |
|---|---|---|
| Clic | Seleziona un pezzo, oppure lo posiziona all'intersezione più vicina quando è attivo uno strumento di posizionamento (o lo incolla lì durante l'incolla) | Lo stesso |
| {{key:Shift}}, {{key:Ctrl}} o {{key:Mod}} e clic | Aggiunge il pezzo alla selezione, o lo toglie | Lo stesso |
| Premere su un pezzo selezionato e trascinare | Sposta la selezione attraverso il livello; con {{key:Mod}} premuto, su e giù | Sposta la selezione (in un prospetto: lungo di esso e su e giù) |
| Trascinare con il pulsante sinistro | Ruota il modello | Con {{ui:Seleziona}}: una finestra di selezione (a destra: completamente dentro; a sinistra: toccando). Durante il posizionamento: pan |
| {{key:Shift}} e trascinare con il pulsante sinistro | Con {{ui:Seleziona}}: una finestra di selezione, aggiunta alla selezione. Durante il posizionamento: pan | Con {{ui:Seleziona}}: una finestra di selezione, aggiunta alla selezione |
| {{key:Ctrl}} o {{key:Mod}} e trascinare con il pulsante sinistro | Pan | Nulla |
| Trascinare con il pulsante destro | Pan | Pan |
| Rotella | Zoom verso il centro della vista | Zoom |
| Trascinare con il pulsante centrale | Zoom | Con {{ui:Seleziona}}: pan. Altrimenti zoom |
| Rilasciare un file `.detailcraft.json` sull'app | Lo apre | Lo apre |

Un clic conta solo se il puntatore si sposta di meno di circa 5 pixel tra la pressione e il rilascio; uno spostamento più lungo è un trascinamento.

## Trackpad

| Azione | Effetto |
|---|---|
| Scorrere con due dita su o giù, o pizzicare | Zoom |
| Premere e trascinare | Ruota (3D) o pan (Pianta e Prospetto) |
| {{key:Shift}} e premere e trascinare | Pan in 3D |
| Clic con due dita | Clic destro (nella vista non c'è menu) |

## Tocco

Su un tablet o uno schermo touch:

| Azione | Effetto |
|---|---|
| Tocco | Seleziona un pezzo, oppure lo posiziona all'intersezione di griglia più vicina quando è attivo uno strumento di posizionamento (un tocco entro circa la larghezza di un dito conta) |
| Pressione prolungata su un pezzo | Lo aggiunge alla selezione, o lo toglie (ciò che fa {{key:Shift}}+clic con il mouse) |
| Un dito su un pezzo selezionato, poi trascinare | Sposta la selezione, agganciandola alle intersezioni di griglia |
| Un dito altrove | Ruota il modello (3D) o pan (Pianta e Prospetto) |
| Due dita | Pizzicare per zoom, spostare insieme per pan |

Pulsanti, elenchi e campi sono più grandi quando lo schermo è solo touch. Le finestre di selezione richiedono il mouse; con le dita si usano tocco e pressione prolungata.

## Tasti che restano al browser

Alcune scorciatoie appartengono al browser e nessuna pagina può usarle, per esempio {{key:Mod+W}} (chiude la scheda), {{key:Mod+T}} (nuova scheda) e {{key:Mod+N}} (nuova finestra). Se {{key:Mod+Y}} apre la cronologia del browser invece di ripristinare, usare {{key:Mod+Shift+Z}}.

Le scorciatoie raggiungono DetailCraft solo quando la pagina ha la tastiera. Se un tasto non fa nulla, o il browser agisce al suo posto, fare clic prima su una parte vuota della finestra di DetailCraft (per esempio dopo aver scritto nella barra degli indirizzi).

## Dove si trova Sposta

Non esiste un comando Sposta: selezionare un pezzo e trascinarlo attraverso il livello (tenere premuto {{key:Mod}} per trascinare su e giù), oppure modificarne {{ui:Inizio}} e {{ui:Fine}} in {{ui:Proprietà}}.
