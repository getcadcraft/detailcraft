---
title: Segnalazioni, revisioni e registro delle modifiche del disegno
summary: Tenere un'unica cronologia delle segnalazioni insieme al modello dell'architetto: leggere le segnalazioni, registrare istruzioni di cantiere, disegni di officina e modelli collegati su una segnalazione, e leggere il registro delle modifiche del disegno.
keywords: segnalazione, revisione, revisioni, registro delle modifiche, registro del disegno, istruzione di cantiere, disegno di officina, modello collegato, gara d'appalto, cantiere, cronologia delle segnalazioni, disegni di officina, fabbricazione
from: 4b9a1b7b
---

## Cosa si fa

Lavorare con la stessa cronologia delle segnalazioni del resto del team. Vedere quali tavole sono state emesse a quale revisione, e registrare ciò che accade in cantiere sulla segnalazione a cui appartiene.

## Passaggi

1. Aprire **Segnalazioni e revisioni**.
2. Scegliere **Leggi cronologia segnalazioni** e selezionare il file `.issues.json` salvato da BimCraft o da un'altra app. Le sue segnalazioni e i suoi record vengono aggiunti a quelli esistenti. Nulla viene sostituito.
3. Scegliere **Aggiungi un record** per un'istruzione di cantiere, un disegno di officina, un set di annotazioni, un modello collegato o una nota. Selezionare la segnalazione a cui si riferisce e il suo stato. Un file scelto viene registrato per nome, dimensione e SHA-256; il file resta dove si trova.
4. **Registro delle modifiche del disegno** mostra una riga per ogni tavola e una colonna per ogni segnalazione. Una revisione tra parentesi è stata emessa di nuovo senza modifiche.
5. **Scarica il registro (CSV)** salva le segnalazioni, la tabella delle tavole e i record. **Salva cronologia segnalazioni** scrive un file che le altre app leggono.

## Da sapere

- Le tavole vengono ancora emesse da **Disegni**, tavola per tavola. Quelle emissioni compaiono qui: le tavole emesse nella stessa data con la stessa nota formano un'unica segnalazione.
- I record e le segnalazioni letti vengono salvati nel file del modello. Ogni modifica è un'unica operazione di Annulla.
- Leggere due volte lo stesso file non aggiunge nulla due volte. Quando due copie contengono lo stesso record, viene mantenuta quella più recente.
