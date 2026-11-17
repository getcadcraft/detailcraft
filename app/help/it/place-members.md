---
title: Posizionare colonne, travi e controventi
summary: Scegliere un profilo, un materiale e una posizione, poi cliccare le intersezioni delle griglie o digitarle per posizionare le aste in acciaio.
keywords: pilastro, trave, controvento, asta, posiziona, profilo, materiale, rotazione, posizione, scostamento, inserisci, aggiungi per griglia
from: d6db0dc1
---

Le aste si posizionano sulle intersezioni delle griglie: un pilastro su una, una trave o un controvento tra due. Prima impostare [griglie e livelli](topic:grids-and-levels).

## Scegliere uno strumento e le sue opzioni

1. Scegliere {{ui:Pilastro}} ({{key:C}}), {{ui:Trave}} ({{key:B}}) o {{ui:Controvento}} ({{key:R}}) nel gruppo {{ui:Posiziona}}.
2. Il pannello {{ui:Proprietà}} a destra diventa "Posiziona un pilastro" (o una trave, o un controvento) e mostra le opzioni per l'asta successiva:
   - {{ui:Profilo}}: scegliere dall'elenco. Le misure sono raggruppate per catalogo (forme W, profili a U, angolari, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, e i profili personalizzati). Vedi [Catalogo dei profili](topic:profile-catalog).
   - {{ui:Materiale}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 o S355.
   - {{ui:Posizione}}: dove sta la sezione sulla linea tra i due punti: {{ui:Sommità dell'acciaio sulla linea}}, {{ui:Centrato sulla linea}} o {{ui:Base sulla linea}}.
   - {{ui:Rotazione (°)}}: ruota la sezione attorno all'asse proprio dell'asta.
   - {{ui:Fino a}} (solo pilastri): {{ui:Il livello successivo}}, oppure il nome di un livello.
3. Sotto le opzioni, una casella {{ui:Profilo}} elenca le dimensioni della sezione scelta, l'area, la massa per metro e il catalogo di provenienza.

I valori predefiniti sono W12x50 in A992 per i pilastri (centrato), W16x26 in A992 per le travi (sommità dell'acciaio sulla linea) e HSS6x6x1/4 in A500 Gr C per i controventi (centrato). Le opzioni restano impostate finché non le si modifica.

## Posizionare con il clic

### Un pilastro

1. Scegliere {{ui:Pianta}} e selezionare il livello da cui inizia il pilastro.
2. Scegliere {{ui:Pilastro}}.
3. Spostare il puntatore vicino a un'intersezione. Il punto più vicino si illumina e la barra di stato lo indica per nome.
4. Cliccare. Il pilastro va da quel livello al successivo (o fino al livello {{ui:Fino a}}). La barra di stato dice, per esempio, "Pilastro W12x50 in A/1, da Livello 1 a Livello 2."
5. Continuare a cliccare per posizionarne altri. Premere {{key:Esc}} al termine.

Se non c'è un livello sopra quello cliccato, la barra di stato dice "Non c'è un livello sopra Livello 2 che il pilastro possa raggiungere. Aggiungere prima un livello."

### Una trave

1. Scegliere {{ui:Pianta}} e selezionare il livello della trave.
2. Scegliere {{ui:Trave}}.
3. Cliccare la prima intersezione. La barra di stato dice "Da A/1 a Livello 2. Ora cliccare l'altra estremità (Esc annulla)." Una linea tratteggiata segue il puntatore.
4. Cliccare la seconda intersezione. La trave compare.
5. Cliccare di nuovo per iniziare la trave successiva, oppure premere {{key:Esc}}.

Premere {{key:Esc}} dopo il primo clic annulla solo quel punto; un secondo {{key:Esc}} chiude lo strumento.

### Un controvento

Un controvento va tra due intersezioni a livelli diversi, quindi è più semplice in {{ui:Prospetto}}.

1. Scegliere {{ui:Prospetto}} e selezionare la linea di griglia con lettera su cui sta il controvento.
2. Scegliere {{ui:Controvento}}.
3. Cliccare l'estremità inferiore, poi quella superiore.

I prospetti esistono solo per le linee di griglia con lettera. Per un controvento in un telaio lungo una linea numerata (da A a B), usare {{ui:3D}} oppure il modulo {{ui:Aggiungi per griglia}} qui sotto.

:::touch
Su uno schermo touch, toccare vicino all'intersezione: un tocco sceglie il punto più vicino entro una piccola distanza e non fa nulla se nessun punto è vicino. Prima del tocco non c'è evidenziazione, quindi controllare il messaggio della barra di stato dopo ogni tocco. Il trascinamento con un dito ruota o sposta la vista invece di posizionare.
:::

## Posizionare con la griglia, senza clic

Ogni strumento di posizionamento ha un modulo {{ui:Aggiungi per griglia}} in fondo al pannello {{ui:Proprietà}}. Funziona solo con la tastiera e non richiede la vista 3D.

1. Scegliere lo strumento, per esempio {{ui:Trave}}.
2. In {{ui:Aggiungi per griglia}}, scegliere {{ui:Dalla griglia (lettera)}}, {{ui:Dalla griglia (numero)}} e {{ui:Dal livello}}.
3. Scegliere {{ui:Alla griglia (lettera)}}, {{ui:Alla griglia (numero)}} e {{ui:Al livello}}.
4. Scegliere {{ui:Aggiungi}}.

Per un pilastro o un plinto il modulo ha un solo punto: {{ui:Griglia (lettera)}}, {{ui:Griglia (numero)}} e {{ui:Livello}}.

## Modificare un'asta dopo averla posizionata

1. Premere {{key:Esc}} (oppure scegliere {{ui:Seleziona}}, {{key:V}}) e cliccare l'asta.
2. Nel pannello {{ui:Proprietà}}, modificare {{ui:Nome}}, {{ui:Profilo}}, {{ui:Materiale}}, {{ui:Posizione}} o {{ui:Rotazione (°)}}.
3. Per spostarla, modificare x, y e z di {{ui:Inizio}} o {{ui:Fine}} sotto {{ui:Estremità (x, y, z mm)}}. Sotto i campi compare il nome di griglia di ogni estremità, oppure le sue coordinate se è fuori griglia.

Ogni modifica è un solo passo di annullamento. Sotto i campi si vedono la {{ui:Marca}} dell'asta, {{ui:Assieme}}, {{ui:Lunghezza di taglio}}, {{ui:Peso}} (lordo: fori e scassi non vengono detratti) e il catalogo da cui proviene il profilo.

Le aste non si possono ancora trascinare né creare in serie. Per creare un'asta uguale, copiarla e incollarla, oppure duplicarla ({{key:Mod+D}}): vedi [Copiare, incollare e duplicare](topic:copy-paste).

## Eliminare un'asta

Selezionarla e premere {{key:Delete}} o {{key:Backspace}}, oppure scegliere {{ui:Elimina}}. Anche le connessioni su di essa vengono eliminate. {{key:Mod+Z}} annulla tutto.

## Da sapere

- **Verso del pilastro.** Con {{ui:Rotazione (°)}} 0, le ali di un pilastro sono rivolte lungo x, verso le griglie numerate vicine. Una trave dalla griglia 1 alla griglia 2 si collega a un'ala; una trave da A a B si collega all'anima. Le piastre di testa si costruiscono solo sulle ali, quindi se le travi vanno da A a B, dare a quei pilastri una rotazione di 90.
- **Le travi a un livello stanno sotto di esso** con la {{ui:Sommità dell'acciaio sulla linea}} predefinita. Scegliere {{ui:Centrato sulla linea}} se i livelli sono gli assi delle aste.
- **I pilastri vanno da livello a livello.** Per un pilastro su due piani, impostare {{ui:Fino a}} sul livello più alto.
- **Le travi inclinate** sono ammesse (scegliere estremità a livelli diversi), ma le piastre di testa non vengono ancora costruite su di esse.

Avanti: [Collegare le travi ai pilastri con piastre di testa](topic:end-plates).
