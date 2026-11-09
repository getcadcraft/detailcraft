---
title: Panoramica dello schermo
summary: Ogni barra, pannello e scheda di DetailCraft con il nome visualizzato sullo schermo e a cosa serve ciascuno.
keywords: schermo, layout, barra degli strumenti, pannelli, proprietà, barra di stato, rapporti, interfaccia, ui, schede
from: 94f81073
---

DetailCraft riempie la finestra del browser sotto la barra dell'app. Dall'alto in basso: la barra degli strumenti, poi tre colonne (il pannello {{ui:Modello}}, la vista, il pannello {{ui:Proprietà}}), poi le schede dei rapporti e infine la barra di stato.

## La barra dell'app

La sottile barra in cima appartiene al sito di CadCraft, non al modello. Mostra il nome e la versione dell'app, un collegamento a {{ui:Informazioni su DetailCraft}}, {{ui:Guida}} (oppure {{key:F1}}) per questa guida, {{ui:Salva per l'uso offline}}, il pulsante della modalità schermo e l'interruttore {{ui:Carta}} / {{ui:Modello}}.

- {{ui:Salva per l'uso offline}} mantiene DetailCraft, la sua vista 3D e questa guida nel browser, così si apre senza connessione. Una volta salvato mostra {{ui:Pronto per l'uso offline}}; fare clic allora per {{ui:Salva di nuovo (scarica la versione più recente)}} o {{ui:Rimuovi la copia offline}}. Vedi [Uso offline](common:offline).
- {{ui:Carta}} dà uno schermo chiaro e {{ui:Modello}} uno scuro. La vista 3D segue subito; nulla nel modello cambia.
- Il pulsante della modalità schermo e {{key:Ctrl+Shift+F}} alternano tra normale, schermo intero e schermo intero con le barre nascoste. {{key:Ctrl+Shift+F}} usa il tasto Control su ogni computer, anche sui Mac. Con le barre nascoste, puntare il bordo superiore dello schermo (o toccarlo) per farle ricomparire. {{key:Esc}} esce dallo schermo intero.

## La barra degli strumenti

La barra degli strumenti ha cinque gruppi. Passare sopra un pulsante per vedere cosa fa e il suo tasto.

| Gruppo | Pulsanti | Cosa fanno |
|---|---|---|
| {{ui:File}} | {{ui:Nuovo}}, {{ui:Apri}}, {{ui:Importa IFC}}, {{ui:Salva}}, {{ui:Esempio}} | Avviare un modello, aprire un `.detailcraft.json` o un file IFC, salvarne uno oppure aprire il telaio di esempio |
| {{ui:Posiziona}} | {{ui:Seleziona}}, {{ui:Trave}}, {{ui:Pilastro}}, {{ui:Controvento}}, {{ui:Piastra}}, {{ui:Plinto}}, {{ui:Scala}} | Lo strumento che usa il clic successivo nella vista |
| {{ui:Collega}} | {{ui:Piastre di testa}}, {{ui:Piastra di base}}, e in {{ui:Altro}}: {{ui:Piastre di taglio}}, {{ui:Giunzione}}, {{ui:Fazzoletto}}, {{ui:Simili}} | Aggiungere una connessione alla trave, al pilastro o al controvento selezionato, oppure copiare la connessione selezionata su ogni giunto simile |
| {{ui:Modifica}} | {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Altro}} | Tornare indietro e avanti tra le modifiche; copiare la selezione e incollarla. {{ui:Altro}} apre un menu con {{ui:Taglia}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Incolla nella stessa posizione}}, {{ui:Duplica}}, {{ui:Elimina}}, {{ui:Seleziona tutto}} e {{ui:Deseleziona tutto}}, ciascuno con il suo tasto |
| {{ui:Uscita}} | {{ui:IFC}}, {{ui:File NC}}, {{ui:Distinta}}, {{ui:Disegno di officina}}, {{ui:Disegni}}, e in {{ui:Altro}}: {{ui:Piegatura}}, {{ui:Rapporto dei pesi per fase}}, {{ui:File KISS per software di fabbricazione}} | Scaricare un'esportazione oppure aprire i fogli dei disegni |

I pulsanti e le voci di menu che non possono agire in questo momento sono in grigio, e passandovi sopra si legge il motivo. {{ui:Piastre di testa}} richiede una trave selezionata, {{ui:Piastra di base}} un pilastro selezionato, {{ui:Simili}} una connessione selezionata, {{ui:Disegno di officina}} un modello con dei pezzi, {{ui:Copia}} una membratura o un plinto selezionato, e {{ui:Incolla}} qualcosa di copiato. Vedi [Copia, incolla e duplica](topic:copy-paste).

## Il pannello Modello (a sinistra)

- {{ui:Modello}}: il {{ui:Nome}} del modello. Dà il nome a ogni file che si salva o si esporta.
- {{ui:Griglie}}: le linee di griglia e le loro spaziature, e {{ui:Applica griglie}}. Vedi [Impostare griglie e livelli](topic:grids-and-levels).
- {{ui:Livelli}}: una riga per livello (nome e quota in mm), {{ui:Aggiungi livello}} e {{ui:Applica livelli}}.
- {{ui:Profilo personalizzato}}: creare una propria sezione parametrica. Chiuso finché non lo si apre.
- {{ui:Marche dei pezzi}}: ogni marca del pezzo nel modello con il suo profilo, la lunghezza e il conteggio. Fare clic su una marca per selezionare il primo pezzo con quella marca.

{{ui:Griglie}}, {{ui:Livelli}} e {{ui:Profilo personalizzato}} si ripiegano: fare clic sulle loro intestazioni.

## La vista (al centro)

La vista mostra il modello in 3D. Sopra di essa, la barra della vista ha tre pulsanti e un elenco:

- {{ui:3D}}: ruotare liberamente intorno al modello.
- {{ui:Pianta}}: guardare dall'alto un singolo livello. Accanto ai pulsanti compare un elenco dei livelli. Ciò che si trova più di 1.5 m sopra il livello viene nascosto, così il livello si vede e si clicca con chiarezza.
- {{ui:Prospetto}}: guardare di fronte una sola linea di griglia con lettera (Griglia A, Griglia B …). Compare un elenco delle griglie con lettere. Si mostra solo l'acciaio entro 1 m da quella linea.
- Il pulsante di adattamento all'estremità destra della barra della vista fa lo zoom per mostrare l'intero modello.

Piccoli punti segnano ogni intersezione di griglia a ogni livello. Quando uno strumento di posizionamento è attivo, il punto più vicino al puntatore si illumina e la barra di stato lo indica, per esempio "A/2 al Livello 1". I colori distinguono i tipi di membratura: pilastri, travi, controventi e piastre hanno ciascuno un proprio colore; bulloni e barre ne hanno un altro; i plinti sono trasparenti e l'armatura è disegnata come tubi. I fori appaiono come tappi scuri; gli scassi appaiono come tagli.

Come girare, spostarsi e fare zoom: [Muoversi nella vista 3D](topic:navigate-3d).

Quando il modello è vuoto, la vista mostra un breve elenco "Avvia un modello". È anche possibile rilasciare un file di modello salvato in un punto qualsiasi della vista per aprirlo.

## Il pannello Proprietà (a destra)

Ciò che mostra questo pannello dipende da cosa si sta facendo, e la sua intestazione lo dice: "Modello", "Posiziona una trave", "Trave b2", "Connessione con piastra di testa", "Piastra di base", "Plinto F1", "3 selezionati" oppure "Incolla".

- **Nulla di selezionato:** un riepilogo del modello (membrature, connessioni, plinti, pezzi, marche, bulloni, peso dell'acciaio e dell'armatura, griglie, livelli).
- **Uno strumento di posizionamento attivo:** le opzioni per il pezzo successivo (profilo, materiale, posizione, rotazione, e per i pilastri {{ui:Fino a}}), un riepilogo del profilo scelto, e un modulo {{ui:Aggiungi per griglia}} per posizionare senza cliccare nella vista.
- **Una membratura selezionata:** il suo nome, profilo, materiale, posizione, rotazione, le coordinate delle due estremità, le sue marche, la lunghezza di taglio e il peso, i suoi fori e scassi, e i pulsanti per le connessioni, per il suo disegno di officina e per {{ui:Elimina}}.
- **Una connessione selezionata:** ogni impostazione di piastra, bullone e saldatura, i bulloni e la saldatura che crea, i suoi avvisi, e {{ui:Applica a simili}}.
- **Un plinto selezionato:** posizione e dimensioni, la platea inferiore, le barre di attesa e le marche di barra che usa.
- **Più elementi selezionati:** quante membrature di ogni tipo, connessioni e plinti, il loro peso in acciaio, e {{ui:Copia}}, {{ui:Duplica}} ed {{ui:Elimina}}.
- **Incolla:** ciò che è negli Appunti, e moduli per incollare con uno spostamento digitato o su un'intersezione di griglia scelta da elenchi.

I campi numerici hanno effetto quando si preme {{key:Enter}} o si esce dal campo. Ogni modifica è un passo che si può annullare.

## Le schede dei rapporti (in basso)

- {{ui:Problemi}}: tutto ciò che DetailCraft non ha potuto costruire o che chiede di controllare, con un pulsante {{ui:Seleziona}} su ogni riga. La scheda mostra il conteggio tra parentesi.
- {{ui:Distinta dei materiali}}: pezzi, assiemi, e bulloni e barre di ancoraggio, con pesi e un collegamento {{ui:Scarica CSV}}. Fare clic su una marca del pezzo per selezionare quel pezzo.
- {{ui:Distinta di piegatura}}: ogni posizione di barra in ogni plinto, con un collegamento {{ui:Scarica CSV}}.

Con una scheda attiva, {{key:Left}} e {{key:Right}} spostano da una scheda all'altra.

## La barra di stato

La barra lungo il fondo ha tre parti: l'intersezione di griglia sotto il puntatore durante il posizionamento, l'ultimo messaggio (cosa è appena successo, o perché qualcosa è stato rifiutato), e i totali correnti di pezzi, bulloni, peso dell'acciaio e peso dell'armatura. Quando un'azione sembra non fare nulla, leggere prima il messaggio qui.

La scheda del browser inizia con un puntino (•) finché il modello ha modifiche non salvate.

## Su uno schermo stretto

Sotto circa 760 pixel di larghezza, le colonne si impilano: barra degli strumenti, vista, barra di stato, {{ui:Proprietà}}, schede dei rapporti e, per ultimo, il pannello {{ui:Modello}}. Scorrere la pagina per raggiungerli. DetailCraft è pensato per un desktop o un portatile; un telefono va bene per guardare, non per dettagliare.
