---
title: Verificare l'esportazione IFC rispetto all'IDS del committente
summary: Caricare il file .ids ricevuto e vedere in Problemi ogni elemento esportato che non lo soddisfa, prima di inviare l'IFC.
keywords: ids, information delivery specification, buildingsmart, requisiti, consegna, verifica, controllo, validazione, qa, esportazione ifc, proprietà, materiale, approvvigionamento
from: 50d0f785
---

## Cosa si farà

Un IDS (Information Delivery Specification, uno standard buildingSMART) è l'elenco di ciò che un IFC deve contenere. DetailCraft verifica l'IFC che esporterebbe (lo stesso file che scrive {{ui:IFC}}) rispetto all'IDS ricevuto, ed elenca ogni parte che non è conforme.

## Passaggi

1. Aprire o disegnare il modello.
2. Fare clic su {{ui:Verifica con IDS…}} nel gruppo {{ui:Uscita}} della barra degli strumenti.
3. Fare clic su {{ui:Carica un file .ids…}} e scegliere il file. Non viene caricato nulla.
4. Leggere il risultato: ogni specifica con {{ui:Superata}} o {{ui:Non superata}} e il numero di elementi a cui si applica.
5. Aprire Problemi ({{key:Ctrl+Shift+M}}) e fare clic su un'anomalia: l'elemento, il collegamento, la scala o il plinto da cui deriva viene selezionato e la vista si avvicina ad esso.

## Cosa si dovrebbe vedere

- Un avviso per ogni elemento esportato e ogni requisito che non soddisfa, con il nome della specifica, ciò che l'IDS richiede e ciò che l'esportazione contiene.
- Il rapporto di verifica (in Problemi) inizia con l'IDS: titolo, versione, autore e il conteggio di ciascuna specifica.

## Da sapere

- L'IDS viene salvato nel file del modello, quindi viene verificato di nuovo all'apertura del modello. Caricarlo o dimenticarlo è un passaggio annullabile.
- Ogni modifica viene verificata di nuovo poco dopo; su un modello grande la verifica attende un po' più a lungo tra un'esecuzione e l'altra.
- I GlobalId dell'esportazione derivano dal nome del modello e dai numeri di marca interni a DetailCraft, quindi restano uguali da una verifica all'altra. Rinominare il modello assegna a ogni elemento nuovi GlobalId.
- I valori numerici sono confrontati in unità SI (l'esportazione è in millimetri; le lunghezze vengono prima convertite in metri).

- I pattern nell'IDS sono letti come l'intero valore. Un `^` all'inizio e un `$` alla fine sono intesi anch'essi come "l'intero valore", come la maggior parte dei file IDS li intende.

## Avanti

- [Esportare IFC](topic:ifc-export)
