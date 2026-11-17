---
title: Risoluzione dei problemi
summary: Cosa significano i messaggi di DetailCraft e cosa fare, dalla vista 3D mancante ai collegamenti che non si costruiscono.
keywords: problema, errore, non funziona, aiuto, correggi, messaggio, rifiutato, webgl, vuoto, avviso, impossibile, segnalazione
from: f8c3b2b1
---

La maggior parte dei rifiuti è spiegata nella barra di stato in fondo allo schermo, oppure nella scheda {{ui:Problemi}}. Leggere prima quelle. I messaggi qui sotto sono riportati come li mostra DetailCraft.

## Manca la vista 3D

**"Questo browser non riesce ad avviare la grafica 3D (WebGL). Il modello, i report e le esportazioni continuano a funzionare."**

Il browser non è riuscito ad avviare WebGL, la grafica 3D con cui DetailCraft disegna.

1. Aggiornare il browser all'ultima versione.
2. Attivare l'accelerazione hardware e riavviare il browser (vedi sotto).
3. Aggiornare il driver della scheda grafica, oppure provare un altro browser. I desktop remoti e le macchine virtuali spesso non hanno WebGL.
4. Nel frattempo si può continuare a lavorare: posizionare le aste con il modulo {{ui:Aggiungi per griglia}}, leggere i report ed esportare. Solo fare clic nella vista richiede WebGL.

:::chromium
Per attivare l'accelerazione hardware, aprire **Impostazioni, Sistema** e attivare **Usa l'accelerazione grafica quando disponibile**, quindi riavviare.
:::

:::firefox
Per attivare l'accelerazione hardware, aprire **Impostazioni, Generali, Prestazioni**, deselezionare **Usa impostazioni di prestazioni consigliate** e selezionare **Usa l'accelerazione hardware quando disponibile**. Riavviare Firefox.
:::

:::safari
Safari ha WebGL attivo per impostazione predefinita. Aggiornare macOS se la vista non si avvia ancora, e controllare che nessuna estensione lo blocchi.
:::

Altre informazioni in [Browser e computer](common:browsers).

## Fare clic nella vista non fa nulla

- **Nessuna intersezione vicino al clic.** Gli strumenti di posizionamento agganciano solo le intersezioni della griglia. Un clic lontano da ogni punto non fa nulla. Avvicinarsi finché il punto si illumina.
- **Lo strumento è {{ui:Seleziona}} e si è fatto clic sullo spazio vuoto.** Questo annulla la selezione.
- **Si è trascinato.** Una pressione e un rilascio distanti più di qualche pixel sono un trascinamento: ruotano o spostano la vista.
- **La parte è tagliata via.** In {{ui:Pianta}} e {{ui:Prospetto}}, l'acciaio oltre il taglio è nascosto e non si può fare clic. Passare a {{ui:3D}}.
- **L'intersezione è al livello sbagliato.** In {{ui:3D}}, intersezioni a più livelli possono sovrapporsi sullo schermo; il clic prende quella più vicina. Usare {{ui:Pianta}} o {{ui:Prospetto}}.

## Messaggi di posizionamento

| Messaggio | Cosa fare |
|---|---|
| Non c'è un livello sopra il Livello 2 da raggiungere con il pilastro. Aggiungere prima un livello. | Aggiungere un livello in {{ui:Livelli}}, oppure fare clic su un livello più basso |
| Scegliere un'altra intersezione per l'altra estremità. | Si è fatto clic due volte sullo stesso punto |
| Le due estremità sono lo stesso punto. | In {{ui:Aggiungi per griglia}}, i punti "Da" e "A" coincidono |
| Aggiungere linee di griglia a sinistra per posizionare le aste. | Il modello non ha linee di griglia in una direzione |
| Profilo sconosciuto "…" | Il profilo non è nel catalogo né tra i profili personalizzati del modello. Sceglierne uno dall'elenco |
| Digitare un numero. | Un campo numerico è vuoto oppure contiene testo |

## I collegamenti non si costruiscono

### "Questa trave non termina su una linea di pilastro."

Le piastre di testata richiedono che l'estremità della trave sia esattamente sulla linea verticale di un pilastro, tra il suo fondo e la sua sommità (entro 1 mm). Controllare {{ui:Estremità (x, y, z mm)}} della trave e la posizione del pilastro.

### "Questa trave si innesta nell'anima di un pilastro oppure è inclinata"

Oppure in {{ui:Problemi}}: "Le travi che si innestano nell'anima di un pilastro non sono ancora implementate: ruotare il pilastro di 90° o usare un altro collegamento."

La trave si innesta nell'anima del pilastro. Selezionare il pilastro e impostare {{ui:Rotazione (°)}} a 90, quindi riprovare. I giunti obliqui non sono ancora implementati.

### "Le piastre di testata sono previste solo per travi orizzontali (questa trave è inclinata)."

Entrambe le estremità della trave devono essere alla stessa altezza.

### "Le piastre di testata richiedono la trave verticale (rotazione 0)."

Riportare {{ui:Rotazione (°)}} della trave a 0.

### "Le piastre di testata richiedono una trave a sezione a I." / "Le piastre di testata richiedono un pilastro a sezione a I."

Solo le sezioni a I (W, IPE, HEA, HEB o una I personalizzata) accettano piastre di testata.

### "L'estremità della trave non è più sulla linea del pilastro."

Dopo aver aggiunto il collegamento si è spostata la trave o il pilastro. Riportarla indietro oppure eliminare il collegamento.

### "I collegamenti riducono quest'asta a zero."

I collegamenti alle due estremità tagliano l'asta più della sua lunghezza, per esempio una trave molto corta tra due pilastri alti. Controllare le estremità dell'asta e lo spessore della piastra.

### "Nessun altro giunto di questo tipo … è senza collegamento."

{{ui:Simili}} copia solo sui giunti con lo stesso profilo di trave, lo stesso profilo di pilastro e lo stesso tipo di collegamento (trave su ala) che non hanno ancora un collegamento.

### "Entrambe le estremità hanno già un collegamento." / "Questo pilastro ha già una piastra di base."

Selezionare il collegamento esistente per modificarlo, oppure eliminarlo prima.

## Avvisi nella scheda Problemi

Gli avvisi non impediscono la costruzione di un collegamento o di una fondazione; chiedono di controllarli. Quelli su bordi e interassi usano i minimi della EN 1993-1-8 Tabella 3.3 (bordo 1,2 × foro, interasse 2,2 × foro, calibro 2,4 × foro). Se il progetto usa altre regole, l'avviso potrebbe non applicarsi; DetailCraft non dimensiona i collegamenti.

"un foro è oltre l'estremità del pezzo" significa che la x di un foro è minore di 0 oppure maggiore della lunghezza tagliata. Ricordare che x è misurata dall'inizio del taglio, dopo che i collegamenti hanno ridotto il pezzo.

## Le modifiche alle fondazioni sono rifiutate

| Messaggio | Cosa fare |
|---|---|
| "Il copriferro non lascia spazio per i ferri in questa fondazione." | Rendere la fondazione più grande oppure il copriferro più piccolo |
| "La fondazione è troppo bassa per due strati di ferri entro il copriferro." | Renderla più profonda oppure ridurre il copriferro |
| "I ferri di ripresa non entrano nella fondazione con 75 mm di copriferro." | Meno ferri di ripresa, interasse più stretto, oppure una fondazione più grande |
| "L'interasse dei ferri deve essere 50–1000 mm." | Digitare un interasse in questo intervallo |
| "La lunghezza deve essere 300–50000 mm." | Le dimensioni delle fondazioni hanno dei limiti: lunghezza e larghezza da 300 a 50000, profondità da 150 a 10000 |

## Le griglie e i livelli sono rifiutati

| Messaggio | Cosa fare |
|---|---|
| "Griglie numerate: indicare una spaziatura tra ogni coppia di linee (4)." | Contare gli intervalli: cinque linee richiedono quattro spaziature |
| "Griglie con lettere: le spaziature devono essere millimetri positivi." | Niente zeri, valori negativi o testo |
| "Griglie numerate: le etichette della griglia devono essere diverse." | Due linee hanno la stessa etichetta |
| "Massimo 60 linee di griglia per direzione." | Dividere il modello |
| "Mantenere almeno un livello." | Si sono eliminate tutte le righe dei livelli |
| "Ogni livello deve avere un nome." / "Due livelli si chiamano \"…\"." | Dare a ogni livello un nome diverso |

## L'apertura di un file non riesce

| Messaggio | Causa |
|---|---|
| "DetailCraft apre i propri modelli (.detailcraft.json). L'importazione IFC non è ancora implementata." | Il file non è un file `.json` |
| "Questo non è un modello DetailCraft (non JSON)." | Il file è danneggiato oppure è un altro JSON |
| "Questo non è un modello DetailCraft." | Un file JSON di un altro programma |
| "Questo modello è stato salvato da una versione più recente di DetailCraft (formato 2)." | Aprirlo nella versione più recente di DetailCraft che lo ha salvato |
| "Il file è troppo grande per essere un modello DetailCraft." | Oltre 50 MB |

Quando un file si apre con avvisi come "2 aste non erano valide e sono state escluse.", il resto del modello è corretto. Non sovrascrivere l'originale finché non si è controllato che cosa è stato escluso.

## Esportazioni

| Messaggio | Causa |
|---|---|
| "Nulla da esportare." | {{ui:IFC}} con un modello vuoto |
| "Nessuna parte a sezione a I o piastra per cui scrivere i file NC." | Nel modello ci sono solo canali, angolari o tubi |
| "Non scritto (per ora solo sezioni a I e piastre): …" | Quei marchi non sono sezioni a I o piastre; il resto è stato scritto |
| "Nessuna fondazione, quindi nessun ferro da elencare." | {{ui:Piegatura}} senza fondazioni |
| "… carattere/i fuori dal font PDF stampato come \"?\"." | Il nome del modello o una classe contiene caratteri che il font PDF non ha |

{{ui:Disegno di officina}} disattivato: il modello non ha ancora parti.

## I download non compaiono

Ogni salvataggio ed esportazione è un download del browser. Controllare l'elenco dei download del browser. Se il browser chiede conferma prima di scaricare più file, oppure blocca i download da questo sito, consentirli. In Safari, controllare il pulsante dei download nella barra degli strumenti.

## I tasti non funzionano

- Il cursore è in un campo di testo o numerico: i tasti degli strumenti e {{key:Delete}} sono ignorati lì, così da poter scrivere. Premere {{key:Tab}} oppure fare clic nella vista.
- È aperta una finestra di dialogo: chiuderla prima.
- Il browser ha il controllo della tastiera (per esempio la barra degli indirizzi): fare clic dentro DetailCraft.
- {{key:Ctrl+Shift+F}} usa Control anche su Mac.

## Problemi offline

Il pulsante {{ui:Salva per l'uso offline}} nella barra dell'app mostra lo stato della copia offline. Come funziona il salvataggio: [Lavorare offline](common:offline).

| Il pulsante legge | Significa | Cosa fare |
|---|---|---|
| {{ui:Salva per l'uso offline}} | Ancora nessuna copia offline in questo browser | Sceglierlo mentre si è online |
| Salvataggio 5 di 20 | Il salvataggio è in corso | Attendere {{ui:Pronto per l'uso offline}}; tenere aperta la scheda |
| {{ui:Pronto per l'uso offline}} | DetailCraft, la sua vista 3D, ogni esportazione e questa guida funzionano senza connessione | Niente. Fare clic per {{ui:Salva di nuovo (scarica la versione più recente)}} oppure {{ui:Rimuovi la copia offline}} |
| {{ui:Salvataggio non riuscito}} | Alcuni file non sono stati scaricati | Controllare la connessione e fare clic per riprovare |
| {{ui:Offline non disponibile}} | Questa finestra non può conservare una copia offline: le finestre private e alcuni computer gestiti lo impediscono | Usare una finestra normale, oppure lavorare online |

Se si è offline e il pulsante non legge {{ui:Pronto per l'uso offline}}, non ricaricare né chiudere la scheda: ciò che è stato caricato continua a funzionare. Salvare il modello con {{key:Mod+S}} e attendere di tornare online.

## Lavoro non salvato

Se il browser chiede se lasciare la pagina, DetailCraft ha modifiche non salvate. Scegliere di restare, poi premere {{key:Mod+S}}. DetailCraft non può recuperare un modello dopo la chiusura della scheda.

## Ancora bloccati

Annotare cosa si è fatto e il messaggio esatto, e segnalarlo tramite la [pagina di supporto](https://getcadcraft.com/support).
