---
title: Un giro della schermata
summary: Ogni barra, pannello e scheda di DetailCraft con il nome che ha sullo schermo e a cosa serve.
keywords: schermata, disposizione, barra degli strumenti, pannelli, proprietà, barra di stato, rapporti, interfaccia, ui, schede
from: 454f74fd
---

DetailCraft riempie la finestra del browser sotto la barra dell'app. Dall'alto in basso: la barra degli strumenti, poi tre colonne (il pannello {{ui:Modello}}, la vista, il pannello {{ui:Proprietà}}), poi le schede dei rapporti, poi la barra di stato.

## La barra dell'app

La barra sottile in cima appartiene al sito CadCraft, non al modello. Mostra il nome e la versione dell'app, un collegamento a {{ui:Informazioni su DetailCraft}}, {{ui:Guida}} (o {{key:F1}}) per questa guida, {{ui:Salva per l'uso offline}}, il pulsante della modalità schermo e il selettore {{ui:Carta}} / {{ui:Modello}}.

- {{ui:Salva per l'uso offline}} conserva DetailCraft, la sua vista 3D e questa guida nel browser, così si apre senza connessione. Una volta salvato riporta {{ui:Pronto per l'uso offline}}; fare clic allora per {{ui:Salva di nuovo (scarica la versione più recente)}} o {{ui:Rimuovi la copia offline}}. Vedere [Lavorare offline](common:offline).
- {{ui:Carta}} dà una schermata chiara e {{ui:Modello}} una scura. La vista 3D si adegua subito; nulla nel modello cambia.
- Il pulsante della modalità schermo e {{key:Ctrl+Shift+F}} alternano schermo normale, schermo intero e schermo intero con le barre nascoste. {{key:Ctrl+Shift+F}} usa il tasto Control su ogni computer, Mac compreso. Con le barre nascoste, puntare il bordo superiore dello schermo (o toccarlo) per farle riapparire. {{key:Esc}} esce dallo schermo intero.

## La barra degli strumenti

La barra degli strumenti ha cinque gruppi. Passare il puntatore su un pulsante per vedere cosa fa e il suo tasto.

| Gruppo | Pulsanti | Cosa fanno |
|---|---|---|
| {{ui:File}} | {{ui:Nuovo}}, {{ui:Apri}}, {{ui:Importa IFC}}, {{ui:Salva}}, {{ui:Esempio}} | Iniziare un modello, aprire un `.detailcraft.json` salvato o un file IFC, salvarne uno o aprire il telaio di esempio |
| {{ui:Posiziona}} | {{ui:Seleziona}}, {{ui:Trave}}, {{ui:Pilastro}}, {{ui:Controvento}}, {{ui:Piastra}}, {{ui:Plinto}}, {{ui:Scala}} | Lo strumento usato dal clic successivo nella vista |
| {{ui:Collega}} | {{ui:Piastre di testa}}, {{ui:Piastra di base}}, e in {{ui:Altro}}: {{ui:Piastre di taglio}}, {{ui:Giunzione}}, {{ui:Fazzoletto}}, {{ui:Simili}} | Aggiungere un'unione alla trave, al pilastro o al controvento selezionato, oppure copiare l'unione selezionata su ogni nodo uguale |
| {{ui:Modifica}} | {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Altro}} | Andare indietro e avanti tra le modifiche; copiare la selezione e incollarla. {{ui:Altro}} apre un menu con {{ui:Taglia}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Incolla nella stessa posizione}}, {{ui:Duplica}}, {{ui:Elimina}}, {{ui:Seleziona tutto}} e {{ui:Deseleziona tutto}}, ciascuno con il proprio tasto |
| {{ui:Uscita}} | {{ui:IFC}}, {{ui:File NC}}, {{ui:Distinta}}, {{ui:Disegno di officina}}, {{ui:Disegni}}, e in {{ui:Altro}}: {{ui:Piegatura}}, {{ui:Rapporto dei pesi per fase}}, {{ui:File KISS per software di fabbricazione}} | Scaricare un'esportazione o aprire le tavole di disegno |

I pulsanti e le voci di menu che al momento non possono agire sono in grigio e il passaggio del puntatore ne spiega il motivo. {{ui:Piastre di testa}} richiede una trave selezionata, {{ui:Piastra di base}} un pilastro selezionato, {{ui:Simili}} un'unione selezionata, {{ui:Disegno di officina}} una parte selezionata a I o una piastra, {{ui:Copia}} un'asta o un plinto selezionato e {{ui:Incolla}} qualcosa di copiato. Vedere [Copiare, incollare e duplicare](topic:copy-paste).

## Il pannello Modello (a sinistra)

- {{ui:Modello}}: il {{ui:Nome}} del modello. Dà il nome a ogni file salvato o esportato.
- {{ui:Griglie}}: le linee di griglia e le loro interdistanze, e {{ui:Applica griglie}}. Vedere [Impostare griglie e livelli](topic:grids-and-levels).
- {{ui:Livelli}}: una riga per livello (nome e quota in mm), {{ui:Aggiungi livello}} e {{ui:Applica livelli}}.
- {{ui:Profilo personalizzato}}: creare una sezione parametrica propria. Chiuso finché non lo si apre.
- {{ui:Marche dei pezzi}}: ogni marca di parte nel modello con profilo, lunghezza e quantità. Fare clic su una marca per selezionare la prima parte che la porta.

{{ui:Griglie}}, {{ui:Livelli}} e {{ui:Profilo personalizzato}} si ripiegano: fare clic sui rispettivi titoli.

## La vista (al centro)

La vista mostra il modello in 3D. Sopra, la barra della vista ha tre pulsanti e un elenco:

- {{ui:3D}}: ruotare liberamente attorno al modello.
- {{ui:Pianta}}: guardare dall'alto un livello. Accanto ai pulsanti compare un elenco di livelli. Tutto ciò che si trova oltre 1,5 m sopra il livello viene tagliato, così il livello si vede e si seleziona chiaramente.
- {{ui:Prospetto}}: guardare frontalmente una linea di griglia con lettera (Griglia A, Griglia B …). Compare un elenco delle griglie con lettera. Viene mostrato solo l'acciaio entro 1 m da quella linea.
- Il pulsante di adattamento all'estremità destra della barra della vista esegue lo zoom per mostrare l'intero modello.

Piccoli punti segnano ogni intersezione di griglia a ogni livello. Con uno strumento di posizionamento attivo, il punto più vicino al puntatore si illumina e la barra di stato lo nomina, ad esempio "A/2 a Livello 1". I colori distinguono i tipi di asta: pilastri, travi, controventi e piastre hanno ciascuno il proprio colore, bulloni e tiranti un altro, i plinti sono trasparenti e l'armatura è disegnata come tubi. I fori appaiono come tappi scuri; gli scassi sono tagliati.

Come ruotare, fare pan e zoom: [Muoversi nella vista 3D](topic:navigate-3d).

Quando il modello è vuoto, la vista mostra un breve elenco "Avviare un modello". È anche possibile rilasciare un file di modello salvato ovunque sulla vista per aprirlo.

## Il pannello Proprietà (a destra)

Ciò che il pannello mostra dipende da ciò che si sta facendo e il titolo lo indica: "Modello", "Posiziona una trave", "Trave b2", "Unione con piastra di testa", "Piastra di base", "Plinto F1", "3 selezionati" o "Incolla".

- **Nulla selezionato:** un riepilogo del modello (aste, unioni, plinti, parti, marche, bulloni, peso dell'acciaio e dell'armatura, griglie, livelli).
- **Strumento di posizionamento attivo:** le opzioni per il pezzo successivo (profilo, materiale, posizione, rotazione e, per i pilastri, {{ui:Fino a}}), un riepilogo del profilo scelto e un modulo {{ui:Aggiungi per griglia}} per posizionare senza fare clic nella vista.
- **Un'asta selezionata:** nome, profilo, materiale, posizione, rotazione, coordinate delle due estremità, marche, lunghezza di taglio e peso, fori e scassi, e pulsanti per le unioni, per il suo disegno di officina e {{ui:Elimina}}.
- **Un'unione selezionata:** ogni impostazione di piastra, bullone e saldatura, i bulloni e la saldatura che produce, i suoi avvisi e {{ui:Applica ai simili}}.
- **Un plinto selezionato:** posizione e dimensioni, la rete inferiore, i ferri di ripresa e le posizioni di barra che usa.
- **Più elementi selezionati:** quante aste di ciascun tipo, unioni e plinti, il loro peso in acciaio e {{ui:Copia}}, {{ui:Duplica}} ed {{ui:Elimina}}.
- **Incollare:** cosa c'è negli appunti e moduli per incollare con un offset digitato o su un'intersezione di griglia scelta dagli elenchi.

I campi numerici hanno effetto quando si preme {{key:Enter}} o si esce dal campo. Ogni modifica è un passo che si può annullare.

## Le schede dei rapporti (in basso)

- {{ui:Problemi}}: tutto ciò che DetailCraft non ha potuto costruire o che vuole far verificare, con un pulsante {{ui:Seleziona}} su ogni riga. La scheda mostra il conteggio tra parentesi.
- {{ui:Distinta dei materiali}}: parti, assiemi, e bulloni e tirafondi, con pesi e un collegamento {{ui:Scarica CSV}}. Fare clic su una marca di parte per selezionarla.
- {{ui:Distinta di piegatura}}: ogni posizione di barra in ogni plinto, con un collegamento {{ui:Scarica CSV}}.

Con una scheda attiva, {{key:Left}} e {{key:Right}} si spostano tra le schede.

## La barra di stato

La barra lungo il bordo inferiore ha tre parti: l'intersezione di griglia sotto il puntatore durante il posizionamento, l'ultimo messaggio (cosa è appena successo o perché qualcosa è stato rifiutato) e i totali progressivi di parti, bulloni, peso dell'acciaio e peso dell'armatura. Quando un'azione sembra non fare nulla, leggere prima il messaggio qui.

Il titolo della scheda del browser inizia con un punto (•) finché il modello ha modifiche non salvate.

## Su uno schermo stretto

Sotto circa 760 pixel di larghezza le colonne si impilano: barra degli strumenti, vista, barra di stato, {{ui:Proprietà}}, schede dei rapporti e, per ultimo, il pannello {{ui:Modello}}. Scorrere la pagina per raggiungerli. DetailCraft è pensato per uno schermo di desktop o portatile; un telefono va bene per guardare, non per dettagliare.
