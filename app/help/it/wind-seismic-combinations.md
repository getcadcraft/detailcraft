---
title: Vento, sito sismico e combinazioni ASCE 7
summary: Creare casi di carico da vento per un edificio chiuso e rigido, ricavare i valori di progetto sismici per un sito e creare le combinazioni ASCE 7, nella scheda Analisi.
keywords: vento, carico da vento, asce 7, procedura direzionale, esposizione, chiusura, sismico, classe di sito, ss, s1, sds, sd1, usgs, spettro di progetto, combinazioni di carico, lrfd, asd, kzt, kd, raffica
from: 676fcbf3
---

Tre blocchi nella scheda {{ui:Analisi}} preparano gli input di vento e sismici di un telaio e li combinano: {{ui:Carichi da vento (procedura direzionale ASCE 7)}}, {{ui:Sito e sistema sismici (ASCE 7)}} e {{ui:Combinazioni di carico ASCE 7}}. Sono ausili: **non sono una verifica secondo norma; il proprio ingegnere rivede i risultati.**

## Cosa si farà

Creare casi di carico da vento per un edificio chiuso e rigido, ricavare i valori sismici per un sito, e creare le combinazioni che li usano. Il modello richiede dei solai, quindi eseguire prima l'analisi (vedere [Forze, reazioni e spostamenti](topic:frame-analysis)).

## Passaggi

1. Aprire la scheda {{ui:Analisi}} e scegliere {{ui:Esegui}}, così sono noti i solai e le dimensioni dell'edificio. Se un blocco indica che non ci sono solai, scegliere {{ui:Trova i piani}} al suo interno.
2. In {{ui:Carichi da vento (procedura direzionale ASCE 7)}}, scegliere l'{{ui:Edizione}}, digitare la {{ui:Velocità del vento di base V}} dalla propria mappa del vento e scegliere la sua {{ui:Unità di velocità}}, poi l'{{ui:Esposizione}} e la {{ui:Chiusura}}. Ci sono anche Kzt, Kd, G, l'elevazione del suolo, il Cp sottovento, l'eccentricità e la direzione.
3. Leggere la pressione a ogni solaio e la forza su ciascun solaio nella tabella, poi scegliere {{ui:Crea casi di vento}}. I casi sono +X, -X, +Y e -Y.
4. In {{ui:Sito e sistema sismici (ASCE 7)}}, scegliere l'edizione e digitare Ss e S1 (SMS, SM1 e S1 per ASCE 7-22), la classe di sito da A a D, la categoria di rischio e il sistema resistente alle forze sismiche. Oppure digitare latitudine e longitudine e scegliere {{ui:Cerca su USGS (online)}}; il servizio online viene interpellato solo quando si preme il pulsante.
5. Leggere Fa, Fv, SDS e SD1, R, Cd e Omega0 e lo spettro di progetto, poi scegliere {{ui:Usa nel blocco sismico}}. Premere {{ui:Crea casi sismici}} nel blocco sismico (vedere [Verificare gli elementi in calcestruzzo e creare i carichi sismici](topic:concrete-and-seismic)).
6. In {{ui:Combinazioni di carico ASCE 7}}, scegliere il {{ui:Metodo}} (LRFD o ASD) e scegliere {{ui:Crea combinazioni ASCE 7}}. Eseguire di nuovo l'analisi.

## Da sapere

- Vento: solo edifici chiusi e rigidi, con la procedura direzionale. Un edificio flessibile richiede un fattore di raffica dalla norma, che DetailCraft non calcola.
- Le classi di sito E e F richiedono uno studio del sito e non sono ancora realizzate.
- Un elenco delle fonti in fondo ai blocchi indica da dove viene ogni valore e che cosa è stato escluso.
- La ricerca USGS è stata provata su un sostituto, non sul servizio attivo.
