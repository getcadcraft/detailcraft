---
title: Esportare un file KISS per il software di fabbricazione
summary: Inviare la distinta dei materiali a un programma di gestione della fabbricazione (MIS) come file KISS 1.1: assiemi, pezzi, fasi come sequenze, fori, scassi e saldature.
keywords: kiss, kss, mis, gestione della fabbricazione, controllo della produzione, computo, distinta dei materiali, bom, esportazione, fabtrol, sequenza
from: 30cf3951
---

Nel gruppo {{ui:Uscita}}, aprire {{ui:Altro}} e scegliere {{ui:File KISS per software di fabbricazione}}. DetailCraft scarica `<name>.kss`, un file KISS ("Keep It Simple, Steel", versione 1.1), il formato di testo semplice da cui la maggior parte dei programmi di gestione della fabbricazione importa una distinta dei materiali.

## Cosa contiene

- L'intestazione: un numero di commessa (le prime otto lettere e cifre del nome del modello), il nome del modello, data e ora, e se le misure sono metriche.
- Per ogni marca di assieme: il suo pezzo principale (quantità = quanti assiemi), una riga di disegno (A-B1 e così via, il numero del disegno dell'assieme), una riga di assieme (nome, tipo, peso, lunghezza complessiva, altezza e larghezza), una riga di sequenza per ogni [fase](topic:phases) in cui si trova l'assieme, e righe di manodopera: fori (quanti, diametro, spessore passante), scassi e saldature.
- Poi ogni pezzo collegato, con la quantità **totale** (per assieme × assiemi), come richiede lo standard.
- Bulloni sciolti e tirafondi sul disegno BOLTS, assieme FIELD.
- Ogni riga indica il tipo (W, C, L, HSS, PL, oppure MI per un profilo personalizzato), dimensione, qualità, lunghezza di taglio in millimetri, nome del pezzo e peso.

## Imperiale o metrico

In [Impostazioni di DetailCraft](topic:settings), **Dimensioni file KISS** sceglie:

- **Automatico** (predefinito): imperiale quando ogni membro è un profilo AISC, metrico altrimenti.
- **Imperiale**: profili con la loro designazione AISC (W 16X26, HSS 4X4X.250); piastre e bulloni, che DetailCraft tiene in millimetri, arrotondati al 1/16 di pollice più vicino; pesi in libbre.
- **Metrico**: profili europei con il loro nome (IPE300), piastre come spessore X larghezza in millimetri; pesi in chilogrammi.

Le lunghezze sono sempre in millimetri con due decimali, qualunque sia l'impostazione: lo standard KISS lo richiede e il programma ricevente le converte.

:::note
Le qualità vengono abbreviate agli otto caratteri dello standard: A572 Gr 50 diventa A572-50. Le virgole nei nomi diventano spazi (il formato non prevede virgolette). Verificare un'importazione nel proprio programma prima di farvi affidamento: i file KISS di DetailCraft sono verificati qui rispetto allo standard, non ancora in un programma di fabbricazione.
:::
