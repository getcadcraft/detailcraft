---
title: Verificare le aste in acciaio secondo una norma di progetto
summary: Creare le combinazioni di carico secondo ASCE 7 o EN 1990, verificare ogni profilo a I in acciaio secondo AISC 360 o EN 1993-1-1 e vedere quanta parte della sua capacità utilizza ciascuna asta. Un ausilio finché un ingegnere non l'ha verificato.
keywords: progetto, verifica di progetto, progetto in acciaio, utilizzo, capacità, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocodice, combinazioni di carico, LRFD, Appendice Nazionale, instabilità, instabilità flesso-torsionale, taglio, flessione, interazione, strutturale, studenti, ingegnere
from: 15685c4e
---

Dopo aver eseguito l'analisi, il blocco {{ui:Design checks}} nella scheda {{ui:Analysis}} trasforma le sue forze in un esito per ogni asta in acciaio: quanta parte della sua capacità utilizza la combinazione più gravosa.

:::warning
È un **ausilio finché un ingegnere non l'ha verificato**. Usa solo le forze del primo ordine (senza effetti del secondo ordine), non verifica la torsione, le parti snelle (classe 4), le sezioni saldate né le unioni, e tralascia ciò che non può verificare, dichiarandolo. Non sostituisce la verifica di un ingegnere e i suoi risultati non sono un timbro.
:::

## Scegliere una norma

{{ui:Design code}} viene salvata con il modello; scegliere una delle due famiglie:

- **ASCE 7 + AISC 360** (USA, LRFD): le combinazioni di carico di ASCE 7-16 §2.3.1 e le verifiche delle aste di ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocodice): le combinazioni di EN 1990 (Eq. 6.10, oppure 6.10a e 6.10b) e le verifiche delle aste di EN 1993-1-1.

Poi scegliere la {{ui:Steel grade}} (A992, A36 e altre; oppure da S235 a S450, con la resistenza di snervamento inferiore sopra 40 mm).

## Creare le combinazioni

Assegnare a ogni caso di carico il suo **tipo** (permanente, variabile, variabile della copertura, neve, vento, sisma) nell'elenco dei casi, poi premere {{ui:Make combinations}}. DetailCraft scrive le combinazioni della norma come combinazioni dei propri casi: tutte le combinazioni di resistenza che la norma elenca per i tipi presenti, e le combinazioni di esercizio per l'inflessione. Quelle inserite a mano restano; non vengono verificate con la norma. Un caso di tipo {{ui:Other}} non viene combinato.

Per l'Eurocodice i coefficienti sono i **valori raccomandati** di EN 1990 Allegato A1 (γG 1.35, γQ 1.5, i valori ψ dei carichi variabili, della neve e del vento) e di EN 1993-1-1 (γM0 = γM1 = 1.0). L'Appendice Nazionale del proprio Paese modifica alcuni di questi valori: aprire {{ui:National Annex values}}, inserire i valori nazionali e creare di nuovo le combinazioni. I valori sono salvati nel modello.

## Verificare le aste

Premere {{ui:Check members}}. Per ogni profilo a I in acciaio la tabella mostra il suo **utilizzo** (domanda rispetto a capacità: 100 % è il limite), se è verificato, quale verifica governa e quale combinazione. Le aste sono colorate sul modello: blu se poco utilizzate, verde circa a metà, ocra vicino al limite, rosse oltre il limite, grigie se non verificate. Fare clic sul nome di un'asta per selezionarla.

Le verifiche, con la clausola che ciascuna segue (sono elencate nel rapporto):

- trazione, compressione con instabilità flessionale e torsionale, flessione intorno a entrambi gli assi con instabilità flesso-torsionale, taglio e flessione con sforzo assiale;
- inflessione delle combinazioni di esercizio rispetto al {{ui:Deflection limit}} impostato (L/360 come punto di partenza; è un valore di progetto, non della norma).

**Lunghezze.** La lunghezza controventata è una frazione di ciascun tratto analizzato (1 = non controventata); i controventi si considerano equidistanziati a partire dall'inizio. I fattori K moltiplicano la lunghezza per l'instabilità. Un nodo in cui arriva un'altra asta divide un'asta, e ogni tratto viene verificato sulla propria lunghezza, come controventato in quel punto.

## Cosa non viene verificato

Un'asta mostra **non verificata**, con il motivo, invece di un numero, quando la sua sezione non è una forma conosciuta dalle verifiche (angolari, canali; i tubi rettangolari e circolari vengono verificati quando le pareti sono compatte), quando è una forma personalizzata (saldata), o quando una parte è snella (AISC) o di classe 4 (Eurocodice) a flessione. Una parte snella a compressione esclude le verifiche a compressione e l'asta risulta *verificata, in parte non verificata*. Le saldature nei nodi hanno [una verifica propria](topic:weld-checks). Anche non ancora implementati: effetti del secondo ordine, torsione, instabilità a taglio combinata con la flessione, unioni bullonate, fatica, incendio e dettagli sismici. Le aste in calcestruzzo e i carichi sismici hanno [verifiche proprie](topic:concrete-and-seismic). Vedere [Non ancora implementato](topic:not-built-yet).

## Il rapporto

{{ui:Report (PDF)}} e {{ui:Report (CSV)}} acquisiscono le tabelle di verifica una volta eseguita la verifica: le edizioni delle norme, le impostazioni e i valori dell'Appendice Nazionale, l'utilizzo per asta, ogni clausola usata e, per ciascuna asta, domanda, capacità e utilizzo di ogni verifica nella combinazione che la governa.
