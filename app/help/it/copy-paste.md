---
title: Copia, incolla e duplica
summary: Seleziona più parti, copiale con i loro fori, scassi e unioni, e incollale su un'intersezione della griglia, con un offset, nella stessa posizione o in un'altra scheda. Taglia, duplica, elimina e seleziona tutto.
keywords: copia, incolla, taglia, duplica, appunti, incolla nella stessa posizione, seleziona tutto, deseleziona tutto, selezione multipla, maiusc clic, più elementi, ripetere una campata, copiare un telaio, offset, elimina più elementi, menu modifica, menu altro
from: f25f1829
---

Il gruppo {{ui:Edit}} della barra degli strumenti contiene {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} e {{ui:Paste}}. Il suo menu {{ui:More}} contiene il resto: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} e {{ui:Select none}}, ciascuno con la propria scorciatoia. Un pulsante o una voce di menu che non può agire in questo momento è in grigio; passandovi sopra con il mouse si legge il motivo (ad esempio "nessun elemento ancora copiato").

Ogni incolla, taglia, duplica ed elimina è un solo passo: un {{key:Mod+Z}} annulla tutto.

## Selezionare più parti

- Fare clic su una parte per selezionarla. Tenere premuto {{key:Shift}} (oppure {{key:Ctrl}} oppure {{key:Mod}}) e fare clic su altre parti per aggiungerle; fare clic su una parte già selezionata allo stesso modo per toglierla.
- {{key:Mod+A}} oppure {{ui:Select all}} seleziona ogni asta, unione e plinto.
- {{key:Esc}} oppure {{ui:Select none}} annulla la selezione.

Con più elementi selezionati, il pannello {{ui:Properties}} riporta "4 selezionati" (o il numero corrispondente) ed elenca le aste per tipo, le unioni, i plinti e il peso lordo dell'acciaio, con i pulsanti {{ui:Copy}}, {{ui:Duplicate}} e {{ui:Delete}}.

## Copiare

1. Selezionare le aste e i plinti desiderati.
2. Scegliere {{ui:Copy}} oppure premere {{key:Mod+C}}.

Vengono copiati:

- ogni asta per intero: profilo, materiale, estremi, posizione, rotazione, nome, fori e scassi. Anche un profilo personalizzato utilizzato viene copiato.
- ogni plinto per intero: dimensioni, calcestruzzo, armatura inferiore e ferri di ripresa.
- piastre di testa e piastre di base, ma solo quando tutte le aste collegate da un'unione vengono copiate: la piastra di testa di una trave richiede la trave e il suo pilastro. La barra di stato indica quante unioni sono state escluse. Per escludere unioni di proposito, deselezionare **Copia piastre di testa e di base insieme alle aste** in [Impostazioni di DetailCraft](topic:settings).

Un'unione da sola non può essere copiata; selezionare invece le sue aste. Per dare alle altre unioni la stessa connessione, usare {{ui:Similar}} (vedi [Piastre di testa](topic:end-plates#copy-it-to-every-similar-joint)).

La copia resta in questo browser finché non si copia qualcos'altro. Un'altra scheda o finestra di DetailCraft nello stesso browser può incollarla, quindi è possibile copiare un telaio da un modello e incollarlo in un altro.

## Incollare su un'intersezione della griglia

1. Scegliere {{ui:Paste}} oppure premere {{key:Mod+V}}.
2. Spostare il puntatore sulla vista. Un contorno tratteggiato della copia segue l'intersezione della griglia più vicina al puntatore.
3. Fare clic su un'intersezione. Il punto base della copia (il suo angolo più basso: i valori minimi di x, y e z di tutto ciò che è stato copiato) viene posizionato lì.

Le parti incollate restano selezionate, quindi è possibile incollare di nuovo altrove oppure modificarle. {{key:Esc}} annulla un incolla; la copia resta negli appunti. {{ui:Plan}} ed {{ui:Elevation}} rendono più facile colpire l'intersezione giusta.

:::tip
Per ripetere una campata, selezionare le aste della campata (oppure tutto con {{key:Mod+A}}), copiare, incollare e fare clic sull'intersezione una campata più avanti rispetto all'angolo più basso della copia.
:::

## Incollare da tastiera

Durante l'incolla, il pannello {{ui:Properties}} mostra cosa c'è negli appunti e due moduli:

- {{ui:Paste by offset (mm, from the original)}}: digitare x, y e z e scegliere {{ui:Paste at this offset}}. Parte dall'offset indicato in [Impostazioni di DetailCraft](topic:settings).
- {{ui:Paste onto a grid intersection}}: scegliere una griglia con lettera, una griglia numerata e un livello, quindi scegliere {{ui:Paste here}}. Il punto base viene posizionato lì.

## Incollare nella stessa posizione

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) colloca la copia esattamente nelle coordinate da cui era stata copiata. Usarlo dopo {{ui:Cut}}, oppure per portare parti da un altro modello nello stesso punto. Se gli originali sono ancora presenti, la copia si sovrappone ad essi e la barra di stato avvisa: spostare le copie tramite {{ui:Start}} ed {{ui:End}} in {{ui:Properties}}, oppure annullare.

## Duplicare

{{ui:Duplicate}} ({{key:Mod+D}}) copia la selezione e la incolla subito, spostata dell'offset indicato in [Impostazioni di DetailCraft](topic:settings) (inizialmente 6000 mm lungo x). Non modifica ciò che è negli appunti. Le copie restano selezionate, quindi premendo di nuovo {{key:Mod+D}} si crea la successiva a partire da esse.

## Tagliare ed eliminare

- {{ui:Cut}} ({{key:Mod+X}}) copia la selezione, poi la elimina. Incollarla dove serve.
- {{ui:Delete}} ({{key:Delete}} oppure {{key:Backspace}}) elimina la selezione. Eliminare un'asta elimina anche le sue unioni.

## Marche dopo un incolla

Le marche delle parti e dei gruppi non vengono memorizzate; DetailCraft le assegna di nuovo dal modello dopo ogni modifica ([Come vengono assegnate le marche](topic:mark-rules)). Quindi:

- Una copia che è lo stesso pezzo dell'originale (stesso profilo, classe, lunghezza di taglio, fori e scassi) condivide la marca dell'originale, e il conteggio in {{ui:Part marks}} e nella distinta base aumenta.
- Una copia che risulta diversa riceve una marca propria. Una trave incollata senza le sue piastre di testa, ad esempio, non viene tagliata, quindi è un pezzo diverso. Le marche vengono rinumerate su tutto il modello, quindi anche i numeri di altre parti possono cambiare.

Ogni asta, foro, scasso, unione e plinto incollato riceve un nuovo identificativo, quindi nulla del modello viene mai condiviso tra una copia e il suo originale.

## Se gli appunti vengono rifiutati

Il contenuto degli appunti viene controllato con la stessa cura di un file di modello aperto: ciò che non è una parte valida di DetailCraft viene scartato, e la barra di stato indica cosa. Gli appunti riempiti da una versione più recente di DetailCraft, o da altro, vengono rifiutati con un messaggio e non viene incollato nulla. Se una finestra privata non può conservare la copia nell'archiviazione del browser, la copia funziona comunque in quella scheda.
