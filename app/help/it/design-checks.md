---
title: Verifica le aste in acciaio secondo una norma di progetto
summary: Crea combinazioni di carico secondo ASCE 7 o EN 1990, verifica ogni profilo a I in acciaio secondo AISC 360 o EN 1993-1-1, e vedi quanta parte della sua capacità utilizza ogni asta. Un supporto finché un ingegnere non lo ha esaminato.
keywords: progetto, verifica di progetto, progetto in acciaio, utilizzo, sfruttamento, capacità, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocodice, combinazioni di carico, LRFD, Appendice Nazionale, instabilità, deversamento, taglio, flessione, interazione, strutturale, studenti, ingegnere
from: 66b6d545
---

Dopo aver eseguito l'analisi, il blocco {{ui:Design checks}} nella scheda {{ui:Analysis}} trasforma le sue forze in un giudizio per ogni asta in acciaio: quanta parte della sua capacità utilizza la combinazione più gravosa.

:::warning
È un **supporto finché un ingegnere non lo ha esaminato**. Usa solo le forze del primo ordine (senza effetti del secondo ordine), non verifica la torsione, le parti snelle (classe 4), i profili saldati né le unioni, e lascia fuori ciò che non può verificare, segnalandolo. Non sostituisce la verifica di un ingegnere, e i suoi risultati non sono un timbro.
:::

## Scegliere una norma

{{ui:Design code}} viene salvata con il modello; scegliere una di due famiglie:

- **ASCE 7 + AISC 360** (USA, LRFD): le combinazioni di carico di ASCE 7-16 §2.3.1 e le verifiche delle aste di ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocodice): le combinazioni di EN 1990 (Eq. 6.10, oppure 6.10a e 6.10b) e le verifiche delle aste di EN 1993-1-1.

Poi scegliere la {{ui:Steel grade}} (A992, A36 e altri; oppure da S235 a S450, con la tensione di snervamento inferiore oltre 40 mm).

## Creare le combinazioni

Assegnare a ogni caso di carico il suo **tipo** (permanente, variabile, variabile di copertura, neve, vento, sismico) nell'elenco dei casi, quindi premere {{ui:Make combinations}}. DetailCraft scrive le combinazioni della norma come combinazioni dei propri casi: tutte le combinazioni di resistenza che la norma elenca per i tipi presenti, e le combinazioni di esercizio per la deformazione. Quelle inserite manualmente restano; non vengono verificate rispetto alla norma. Un caso di tipo {{ui:Other}} non viene combinato.

Per l'Eurocodice i coefficienti sono i **valori raccomandati** di EN 1990 Appendice A1 (γG 1,35, γQ 1,5, i valori ψ di carichi variabili, neve e vento) e di EN 1993-1-1 (γM0 = γM1 = 1,0). L'Appendice Nazionale del proprio paese ne modifica alcuni: aprire {{ui:National Annex values}}, inserire i propri valori, e creare di nuovo le combinazioni. Sono salvati nel modello.

## Verificare le aste

Premere {{ui:Check members}}. Per ogni profilo a I in acciaio la tabella mostra il suo **utilizzo** (domanda rispetto a capacità: 100 % è il limite), se supera la verifica, quale verifica governa e quale combinazione. Le aste sono colorate sul modello: blu poco utilizzate, verde circa a metà, ocra vicino al limite, rosse oltre, grigie non verificate. Fare clic sul nome di un'asta per selezionarla.

Le verifiche, con la clausola che ciascuna segue (sono elencate nel rapporto):

- trazione, compressione con instabilità flessionale e torsionale, flessione attorno a entrambi gli assi con deversamento, taglio, e flessione con sforzo assiale;
- deformazione delle combinazioni di esercizio rispetto al {{ui:Deflection limit}} impostato (L/360 come valore iniziale; è un valore di progetto, non della norma).

**Lunghezze.** La lunghezza controventata è una quota di ogni pezzo analizzato (1 = non controventata); i controventi sono considerati equidistanti a partire dall'inizio. I fattori K moltiplicano la lunghezza per l'instabilità. Un nodo in cui arriva un'altra asta divide un'asta, e ogni pezzo viene verificato sulla propria lunghezza, come controventato in quel punto.

## Cosa non viene verificato

Un'asta mostra **non verificata**, con il motivo, invece di un numero quando la sua sezione non è un profilo a I che le verifiche conoscono (tubi, angolari, profilati a C), quando è un profilo personalizzato (saldato), oppure quando una parte è snella (AISC) o di classe 4 (Eurocodice) a flessione. Una parte snella a compressione esclude le verifiche a compressione e l'asta risulta *supera, parzialmente verificata*. Anche non ancora implementati: effetti del secondo ordine, torsione, instabilità a taglio combinata con la flessione, unioni, fatica, incendio e dettagli sismici. Le aste in calcestruzzo e i carichi sismici hanno [le proprie verifiche](topic:concrete-and-seismic). Vedi [Non ancora implementato](topic:not-built-yet).

## Il rapporto

{{ui:Report (PDF)}} e {{ui:Report (CSV)}} includono le tabelle di progetto una volta eseguite le verifiche: le edizioni delle norme, le impostazioni e i valori dell'Appendice Nazionale, l'utilizzo per asta, ogni clausola usata, e per ogni asta la domanda, la capacità e l'utilizzo di ciascuna verifica nella combinazione che la governa.
