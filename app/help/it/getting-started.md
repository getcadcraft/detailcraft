---
title: Primi passi con DetailCraft
summary: Cosa fa DetailCraft oggi, come aprirlo e un primo modello dalle griglie fino a un disegno di officina in dieci minuti.
keywords: inizio, primo modello, introduzione, dettagliatura dell'acciaio, armatura, avvio rapido, esercitazione, panoramica
from: e4f16bbe
---

DetailCraft è l'app di dettagliatura dell'acciaio e delle armature della famiglia CadCraft. Si costruisce un modello 3D di un telaio in acciaio su griglie e livelli, lo si collega e si ottiene ciò che serve all'officina: marche dei pezzi e degli assiemi, una distinta dei materiali, disegni di officina dei singoli pezzi, file NC DSTV, un modello IFC e una distinta di piegatura per i plinti.

Questa è una versione iniziale. Fa poche cose, ma con cura, invece di tutto in una volta. Leggere [Cosa non è ancora implementato](topic:not-built-yet) prima di pianificare un lavoro reale.

## Cosa fa oggi

- Griglie e livelli da digitare, in millimetri.
- Pilastri, travi, controventi e piastre da cataloghi di profili pubblicati (AISC W, S, C, L, HSS e Pipe; IPE, HEA, HEB e UPN europei; UB, UC, PFC, EA, UEA, SHS, RHS e CHS britannici), più i propri profili parametrici.
- Due connessioni: un collegamento bullonato con piastra di testa da una trave a una flangia di pilastro, e una piastra di base di pilastro con quattro barre di ancoraggio. Ciascuna può essere copiata su ogni giunto simile.
- Fori e tagli inseriti per posizione.
- Plinti rettangolari con platea inferiore e barre di attesa.
- Marche dei pezzi e degli assiemi che si aggiornano da sole dopo ogni modifica.
- Esportazioni: IFC4, file NC DSTV (profili a I e piastre), distinta dei materiali come CSV, distinta di piegatura come CSV, e un PDF del disegno di officina di un pezzo.

## Aprire DetailCraft

1. Aprire DetailCraft in un browser su computer: Chrome, Edge, Firefox o Safari. Vedi [Browser e computer](common:browsers).
2. Attendere che lo schermo si riempia. La barra di stato in basso dice "Pronto. Aprire Esempio oppure impostare griglie e livelli e iniziare a posizionare le membrature."

La vista del modello richiede la grafica 3D (WebGL). Se al centro dello schermo compare "Questo browser non è riuscito ad avviare la grafica 3D (WebGL)", vedere [Risoluzione dei problemi](topic:troubleshooting#the-3d-view-is-missing).

:::note
I modelli restano sul computer. Aprire un modello lo legge nel browser, e salvare scarica un file. Non viene caricato nulla. Il salvataggio nel cloud non è ancora disponibile. Vedi [Dove vanno i file](common:your-files). Per usare DetailCraft senza connessione in seguito, scegliere una volta {{ui:Salva per l'uso offline}} nella barra dell'app mentre si è online; vedi [Uso offline](common:offline).
:::

:::offline
Non c'è connessione. DetailCraft funziona senza connessione solo se è stato salvato prima per l'uso offline: il pulsante {{ui:Salva per l'uso offline}} nella barra dell'app deve mostrare {{ui:Pronto per l'uso offline}}. Vedi [Uso offline](common:offline).
:::

## Guardare prima l'esempio

Il modo più rapido per vedere cosa produce DetailCraft è il telaio di esempio.

1. Scegliere {{ui:Esempio}} nel gruppo {{ui:File}} della barra degli strumenti.
2. La vista mostra un telaio a due campate: sei pilastri con piastre di base, quattro travi con piastre di testa, un controvento e sette plinti con armatura.
3. Fare clic su una trave. Il pannello {{ui:Proprietà}} a destra mostra la sua marca del pezzo, la lunghezza di taglio, il peso e i fori fatti dalle piastre di testa.
4. Aprire la scheda {{ui:Distinta dei materiali}} in basso per vedere ogni marca del pezzo con il suo conteggio e il suo peso.

Il percorso [Esplorare il telaio di esempio](topic:sample-model) lo illustra pezzo per pezzo.

## Il primo modello

Un nuovo modello ha già le griglie da 1 a 3 per A e B a 6000 mm e due livelli: Livello 1 a 0 e Livello 2 a 4000.

1. Scegliere {{ui:Nuovo}}. Se il modello attuale ha modifiche, DetailCraft chiede se salvarle prima.
2. Scegliere {{ui:Pianta}} sopra la vista. L'elenco dei livelli accanto seleziona Livello 1.
3. Scegliere {{ui:Pilastro}} nella barra degli strumenti, oppure premere {{key:C}}.
4. Fare clic sull'intersezione di griglia A/1. Compare un pilastro W12x50 dal Livello 1 al Livello 2. La barra di stato indica dove è stato messo.
5. Fare clic su B/1, A/2 e B/2 per posizionarne altri tre.
6. Selezionare Livello 2 nell'elenco dei livelli, poi scegliere {{ui:Trave}} oppure premere {{key:B}}.
7. Fare clic su A/1, poi su A/2. Una trave W16x26 unisce le due sommità dei pilastri, con la faccia superiore dell'acciaio sul livello.
8. Premere {{key:Esc}} per tornare a {{ui:Seleziona}}, poi fare clic sulla trave.
9. Scegliere {{ui:Piastre di testa}} nel gruppo {{ui:Collega}}. Entrambe le estremità ricevono una piastra di testa bullonata, la trave viene tagliata per adattarsi e la prima piastra di testa risulta ora selezionata.
10. Fare di nuovo clic sulla trave.
11. Scegliere {{ui:Disegno di officina}} nel gruppo {{ui:Uscita}}. Si apre un'anteprima del disegno di officina della trave. Scegliere {{ui:Scarica PDF}}.
12. Premere {{key:Mod+S}} per salvare il modello. Il browser scarica `Untitled.detailcraft.json`.

Rinominare il modello nel campo {{ui:Nome}} in alto a sinistra prima di salvare, così il file e ogni esportazione portano il suo nome.

## Dove andare dopo

- [Panoramica dello schermo](topic:workspace)
- [Impostare griglie e livelli](topic:grids-and-levels)
- [Muoversi nella vista 3D](topic:navigate-3d), con mouse, trackpad o schermo touch
- [Arrivo da altro software di dettagliatura](topic:coming-from), se si conosce un grande pacchetto di dettagliatura
- [Uso di questa guida](common:help)
