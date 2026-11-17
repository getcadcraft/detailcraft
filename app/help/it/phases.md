---
title: Fasi
summary: Dividere il modello in fasi (sequenze di montaggio o consegne), mostrare o nascondere ogni fase, assegnare parti a una fase e numerare le marche per fase.
keywords: fase, fasi, gestore fasi, sequenza di montaggio, consegna, lotto, sequenza, nascondi fase, mostra fase, filtro, numerazione, prefisso marca, per fase
from: bae506f5
---

Una fase è un gruppo di parti che vengono realizzate, consegnate o montate insieme: una sequenza di montaggio, una consegna, un lotto. Ogni asta e ogni plinto si trova in una fase. Una connessione si trova nella fase del suo elemento principale: la trave di una piastra di testa, il pilastro di una piastra di base. Un modello nuovo ha una sola fase.

## Il pannello Fasi

La sezione {{ui:Fasi}} del pannello {{ui:Modello}} elenca tutte le fasi:

- la casella mostra o nasconde la fase nella vista;
- il numero, e un nome che è possibile digitare (vuoto = "Fase 2" e così via);
- quante parti contiene;
- il pulsante {{ui:×}} rimuove una fase. Può essere rimossa solo una fase vuota: prima spostare le sue parti in un'altra fase.

{{ui:Aggiungi fase}} aggiunge il numero successivo e la rende la fase in cui vanno le nuove parti.

## Mettere parti in una fase

- **Nuove parti:** {{ui:Le nuove parti vanno in}} sceglie la fase in cui vanno tutte le aste e i plinti che si posizionano da ora in poi.
- **Una parte:** selezionarla e modificare {{ui:Fase}} nel pannello {{ui:Proprietà}}.
- **Più parti:** selezionarle (una finestra, {{key:Shift}}+clic, {{key:Mod+A}}) e modificare {{ui:Fase}} in alto nel pannello {{ui:Proprietà}}. Mostra **Varia** quando si trovano in fasi diverse. Un'unica modifica è un solo passo di annullamento.

Le copie mantengono la fase della parte da cui derivano, anche quando vengono incollate in un altro modello (la fase viene aggiunta lì).

## Mostrare e nascondere le fasi

Una fase nascosta non viene disegnata nella vista, non può essere cliccata né catturata da una finestra di selezione, e {{key:Mod+A}} la esclude. È comunque presente nella distinta dei materiali, nei report, nei disegni e in ogni esportazione. Il nascondimento riguarda solo la vista: non viene salvato e non ha annullamento.

## Marche per fase

Con **Numera le marche per fase** attiva (è attiva all'avvio) e parti in più di una fase, ogni fase viene numerata a sé e le sue marche iniziano con il numero di fase: marche di parte 1-b1, 2-b1, marche di assieme 2-B1, plinti 2-F1. Due travi identiche in fasi diverse hanno quindi marche diverse, perché vengono realizzate e spedite in momenti diversi. Con una sola fase in uso, le marche non hanno prefisso. Disattivarla per numerare tutto il modello come un unico insieme, così pezzi identici condividono una marca indipendentemente dalla fase.

La fase viene scritta nell'esportazione IFC (set di proprietà DetailCraft, Phase).

:::note
I modelli con fasi sono salvati nel formato file 2 di DetailCraft. La versione 0.3 di DetailCraft non può aprirli; questa versione apre i file più vecchi, con ogni parte nella fase 1.
:::
