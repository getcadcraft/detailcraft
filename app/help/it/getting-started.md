---
title: Primi passi con DetailCraft
summary: Cosa fa oggi DetailCraft, come aprirlo e un primo modello, dalle griglie al disegno di officina, in dieci minuti.
keywords: inizio, primo modello, introduzione, dettaglio acciaio, armatura, guida rapida, tutorial, panoramica
from: 3682c0d8
---

DetailCraft è l'app per il dettaglio di acciaio e armatura della famiglia CadCraft. Si costruisce un modello 3D di un telaio in acciaio su griglie e livelli, lo si collega e si ottiene ciò che serve all'officina: marche di parti e di assiemi, una distinta dei materiali, disegni di officina di singole parti, file NC DSTV, un modello IFC e una distinta di piegatura per i plinti.

Questa è una versione preliminare. Fa con cura un breve elenco di cose, invece di tutto subito. Leggere [Cosa non è ancora implementato](topic:not-built-yet) prima di pianificare lavori reali.

## Cosa fa oggi

- Griglie e livelli digitati, in millimetri.
- Pilastri, travi, controventi e piastre da cataloghi di profili pubblicati (AISC W, S, C, L, HSS e Pipe; europei IPE, HEA, HEB e UPN), più profili parametrici personalizzati.
- Due unioni: una piastra di testa bullonata da una trave all'ala di un pilastro e una piastra di base del pilastro con quattro tirafondi. Ciascuna può essere copiata su ogni nodo simile.
- Fori e scassi digitati per posizione.
- Plinti rettangolari con rete inferiore e ferri di ripresa.
- Marche di parti e di assiemi che si aggiornano da sole a ogni modifica.
- Esportazioni: IFC4, file NC DSTV (profili a I e piastre), distinta dei materiali in CSV, distinta di piegatura in CSV e un PDF di disegno di officina di una parte.

## Aprire DetailCraft

1. Aprire DetailCraft in un browser desktop: Chrome, Edge, Firefox o Safari. Vedere [Browser e computer](common:browsers).
2. Attendere che la schermata si riempia. La barra di stato in basso indica "Pronto. Aprire l'Esempio, oppure impostare griglie e livelli e iniziare a posizionare le aste."

La vista del modello richiede la grafica 3D (WebGL). Se al centro della schermata compare "Questo browser non è riuscito ad avviare la grafica 3D (WebGL)", vedere [Risoluzione dei problemi](topic:troubleshooting#the-3d-view-is-missing).

:::note
I modelli restano sul computer. Aprire un modello lo legge nel browser e salvare scarica un file. Non viene caricato nulla. Il salvataggio nel cloud non è ancora disponibile. Vedere [Dove vanno i file](common:your-files). Per usare DetailCraft in seguito senza connessione, scegliere una volta {{ui:Salva per l'uso offline}} nella barra dell'app mentre si è online; vedere [Lavorare offline](common:offline).
:::

:::offline
Si è offline. DetailCraft funziona senza connessione solo se è stato prima salvato per l'uso offline: il pulsante {{ui:Salva per l'uso offline}} nella barra dell'app riporta allora {{ui:Pronto per l'uso offline}}. Vedere [Lavorare offline](common:offline).
:::

## Iniziare dall'esempio

Il modo più rapido per vedere cosa produce DetailCraft è il telaio di esempio.

1. Scegliere {{ui:Esempio}} nel gruppo {{ui:File}} della barra degli strumenti.
2. La vista mostra un telaio a due campate: sei pilastri con piastre di base, quattro travi con piastre di testa, un controvento e sette plinti con armatura.
3. Fare clic su una trave. Il pannello {{ui:Proprietà}} a destra mostra la sua marca di parte, la lunghezza di taglio, il peso e i fori praticati dalle piastre di testa.
4. Aprire la scheda {{ui:Distinta dei materiali}} in basso per vedere ogni marca di parte con quantità e peso.

La guida passo passo [Esplorare il telaio di esempio](topic:sample-model) la percorre pezzo per pezzo.

## Il primo modello

Un nuovo modello ha già le griglie da 1 a 3 per da A a B a 6000 mm e due livelli, Livello 1 a 0 e Livello 2 a 4000.

1. Scegliere {{ui:Nuovo}}. Se il modello corrente ha modifiche, DetailCraft chiede se salvarle prima.
2. Scegliere {{ui:Pianta}} sopra la vista. L'elenco dei livelli accanto seleziona Livello 1.
3. Scegliere {{ui:Pilastro}} nella barra degli strumenti, oppure premere {{key:C}}.
4. Fare clic sull'intersezione di griglia A/1. Compare un pilastro W12x50 dal Livello 1 al Livello 2. La barra di stato indica dove è stato posizionato.
5. Fare clic su B/1, A/2 e B/2 per posizionarne altri tre.
6. Selezionare Livello 2 nell'elenco dei livelli, quindi scegliere {{ui:Trave}} o premere {{key:B}}.
7. Fare clic su A/1, poi su A/2. Una trave W16x26 collega le sommità dei due pilastri, con l'estradosso dell'acciaio sul livello.
8. Premere {{key:Esc}} per tornare a {{ui:Seleziona}}, quindi fare clic sulla trave.
9. Scegliere {{ui:Piastre di testa}} nel gruppo {{ui:Collega}}. Entrambe le estremità ricevono una piastra di testa bullonata, la trave viene accorciata per adattarsi e la prima piastra di testa risulta selezionata.
10. Fare di nuovo clic sulla trave.
11. Scegliere {{ui:Disegno di officina}} nel gruppo {{ui:Uscita}}. Si apre l'anteprima del disegno di officina della trave. Scegliere {{ui:Scarica PDF}}.
12. Premere {{key:Mod+S}} per salvare il modello. Il browser scarica `Untitled.detailcraft.json`.

Rinominare il modello nel campo {{ui:Nome}} in alto a sinistra prima di salvare, così il file e ogni esportazione ne portano il nome.

## Dove andare dopo

- [Un giro della schermata](topic:workspace)
- [Impostare griglie e livelli](topic:grids-and-levels)
- [Muoversi nella vista 3D](topic:navigate-3d), con mouse, trackpad o touch screen
- [Se si proviene da altri software di dettaglio](topic:coming-from), per chi conosce un grande pacchetto di dettaglio
- [Usare questa guida](common:help)
