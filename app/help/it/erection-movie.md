---
title: Piano di montaggio e filmato
summary: Inserisci una gru e la sua tabella di portata, verifica ogni sollevamento rispetto alla tabella in ordine di fase, e salva un filmato di montaggio che si riproduce offline su qualsiasi telefono.
keywords: montaggio, gru, sollevamento, tabella di portata, raggio, capacità, imbracatura, sequenza, filmato, animazione, telefono, offline, piano di sollevamento
from: fa7b0133
---

La scheda {{ui:Erection}} trasforma il modello in un ordine di montaggio e verifica ogni sollevamento rispetto a una gru che si descrive. Pianifica a partire da numeri digitati. Non è un piano di sollevamento: lo redigono l'imbracatore e il gruista.

## Descrivere la gru

Scegliere {{ui:Add a crane}}, quindi compilare:

- **Centro della gru X e Y:** dove si trova la gru, in millimetri.
- **Gancio più alto:** quanto può salire il gancio, in millimetri. 0 significa che non si verifica alcun limite.
- **Bozzello e imbracatura non compresi nella tabella:** chilogrammi da detrarre dalla tabella prima di aggiungere un carico, quando la tabella non lo fa già.
- **Tabella di portata:** una riga per linea, raggio in metri e poi la portata in chilogrammi. Copiare le righe dalla tabella della gru stessa.

La tabella si legge come una tabella di portata: la portata indicata per un raggio vale fino a quel raggio. Un carico a un raggio compreso tra due righe ottiene la portata della riga **più lontana**, mai un valore intermedio. All'interno della prima riga vale la portata della prima riga. Oltre l'ultima riga la gru non può sollevare affatto. Il raggio che conta per un sollevamento è il maggiore tra il raggio di presa e il raggio impostato.

Una seconda gru si aggiunge allo stesso modo. Ogni sollevamento viene assegnato alla prima gru che può eseguirlo entro il margine impostato.

## Cosa fa il piano

- Un sollevamento per gruppo: una trave con le sue piastre di testa, un pilastro con la sua piastra di base, una scala.
- L'ordine segue prima le fasi, poi livello per livello: pilastri, travi che essi portano, controventi, piastre, scale. Una parte non viene mai sollevata prima di ciò che la porta.
- Ogni sollevamento mostra il suo peso (il peso lordo del modello, più {{ui:Rigging added to each weight}}), il suo raggio, la quota della tabella che utilizza e il minuto in cui inizia.
- {{ui:Most of the chart a lift may use}} è il margine di sicurezza. Un sollevamento oltre di esso è segnato **Oltre il margine**; oltre la tabella, **Oltre la tabella**; oltre l'ultimo raggio della tabella, **Fuori tabella**; e una parte più alta del gancio, **Gancio troppo basso**.

Fori e scassi non vengono detratti dai pesi, e i bulloni sono coperti dalla percentuale di imbracatura.

## Problemi

Ogni sollevamento che supera, oltrepassa, è troppo alto o è previsto prima di ciò che lo porta compare nel pannello {{ui:Problems}}. Una trave senza una connessione che la porti viene elencata come bisognosa di supporto provvisorio.

## Salvare il filmato

{{ui:Save movie}} scrive un solo file HTML. Aprirlo in qualsiasi browser, anche su un telefono, senza rete né account: riprodurre e mettere in pausa, trascinare la barra fino a qualsiasi minuto, ruotare il modello con un dito, pizzicare per ingrandire. La didascalia riporta ogni sollevamento, il suo peso, il raggio e la quota della tabella. Il modello è disegnato come semplici solidi: mostra l'ordine e i sollevamenti, non i profili reali.

La stessa tabella si salva come CSV con il pulsante {{ui:CSV}}. La gru e la tabella sono salvate nel file del modello, e ogni modifica è un passo di annullamento.
