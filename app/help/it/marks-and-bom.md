---
title: Verifica le marche e la distinta dei materiali
summary: Leggi le marche di pezzo e di assieme che DetailCraft assegna a ogni elemento, verifica la distinta dei materiali e scaricala in CSV.
keywords: marche, numerazione, marca di pezzo, marca di assieme, marca, distinta, distinta dei materiali, elenco materiali, pesi, elenco bulloni, csv
from: caa2ee80
---

DetailCraft assegna le marche al modello da solo. Non esiste un comando di numerazione né nulla da eseguire: dopo ogni modifica stabilisce quali pezzi sono lo stesso elemento d'acciaio e assegna loro una sola marca.

## Dove compaiono le marche

- L'elenco {{ui:Part marks}} nel pannello {{ui:Model}}: ogni marca con il suo profilo, la lunghezza e la quantità. Fare clic su una marca per selezionare il primo pezzo con quella marca.
- Il pannello {{ui:Properties}} di un'asta selezionata (e l'elenco **Marche dei pezzi** nel pannello di sinistra): {{ui:Part mark}} e {{ui:Assembly}}. L'intestazione del pannello riporta anche la marca, per esempio "Trave b1".
- La scheda {{ui:Bill of materials}}, il CSV, i nomi dei file NC, i disegni di officina e l'esportazione IFC (come etichetta di ogni elemento).

## Come vengono marcati i pezzi

- **Marche di pezzo:** c per pilastri, b per travi, br per controventi, st per cosciali di scala, p per piastre (incluse piastre di testa e piastre di base). Poi un numero: c1, c2, b1, p1 … Quando i pezzi appartengono a più fasi, un numero di fase viene prima, per esempio 2-b1.
- **Marche di assieme:** C, B, BR o P. Un assieme è un'asta principale e le piastre saldate ad essa, come una trave con le sue due piastre di testa, o un pilastro con la sua piastra di base.
- Due pezzi condividono una marca quando hanno lo stesso profilo, materiale e lunghezza di taglio, e gli stessi fori e scassi, entro 1 mm, anche se uno è ruotato di testa o capovolto rispetto all'altro.
- La numerazione procede prima per i pilastri, poi travi, controventi e piastre; all'interno di ciascun gruppo, per nome del profilo, dal più lungo al più corto.

Le regole complete, incluse le rotazioni che contano per canali e angolari: [Regole di marcatura](topic:mark-rules).

:::warning
Le marche vengono ricalcolate dopo ogni modifica, quindi possono cambiare numerazione. Aggiungere un pezzo, cambiare un profilo o aggiungere un foro può far passare b3 a b4. Le marche sono definitive solo a modello terminato: distinta, file NC e disegni di officina vanno prodotti dallo stesso modello salvato.
:::

## Leggi la distinta dei materiali

Aprire la scheda {{ui:Bill of materials}} in basso. Ha tre tabelle.

**Pezzi**, con il peso totale dell'acciaio nell'intestazione:

| Colonna | Significato |
|---|---|
| Marca di pezzo | Fare clic per selezionare il primo pezzo con questa marca |
| Tipo | trave, pilastro, controvento, cosciale o piastra |
| Profilo | Per esempio W16x26 o PL20x180 |
| Materiale | La classe impostata |
| Lunghezza (mm) | Lunghezza di taglio, dopo i collegamenti |
| Quantità | Quanti pezzi |
| Peso unitario (kg) | Massa del profilo al metro × lunghezza |
| Peso totale (kg) | Peso unitario × quantità |

L'ultima riga riporta la quantità totale e il peso totale.

**Assiemi:** ogni marca di assieme, il suo pezzo principale, tutti i suoi pezzi (per esempio "b1 + p1 + p1"), la quantità, il peso unitario e il peso totale.

**Bulloni e tirafondi:** raggruppati per tipo, diametro, lunghezza e classe, con una quantità.

:::note
I pesi sono lordi: fori e scassi non vengono detratti. Bulloni, dadi, rondelle e saldature non sono inclusi nel peso dell'acciaio.
:::

## Scaricala

Scegliere {{ui:Download CSV}} nella scheda, oppure {{ui:BOM}} nel gruppo {{ui:Output}}. Il file `<name> BOM.csv` contiene le tre tabelle una dopo l'altra, ciascuna sotto il proprio titolo, con una riga vuota tra l'una e l'altra. Si apre in qualsiasi programma per fogli di calcolo.

## Verifica prima di inviare

1. Aprire la scheda {{ui:Problems}} ed eliminare ogni riga. Un collegamento che non può essere costruito non aggiunge piastre, fori né bulloni, quindi la distinta risulterebbe incompleta.
2. Controllare le marche inattese. Due travi che sembrano uguali ma hanno marche diverse di solito differiscono per un foro, uno scasso o una lunghezza di taglio: selezionare ciascuna e confrontarla.
3. Salvare il modello, poi eseguire ogni esportazione a partire da quello stato salvato.
