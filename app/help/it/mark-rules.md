---
title: Regole per le marche
summary: Quando esattamente due pezzi o due assiemi condividono una marca, come sono numerate le marche e come funzionano le marche dei plinti e delle barre.
keywords: marche, numerazione, marca del pezzo, marca dell'assieme, prefisso, tolleranza, pezzi identici, marche delle barre, marche dei plinti
from: ce02c98e
---

DetailCraft ricalcola ogni marca dopo ogni modifica. Nulla viene memorizzato, quindi le marche descrivono sempre il modello com'è adesso. Vedere [Controllare le marche e la distinta dei materiali](topic:marks-and-bom) per come usarle.

## Marche dei pezzi

Due pezzi condividono una marca del pezzo quando tutti questi punti coincidono:

1. Il tipo di pezzo (trave, pilastro, controvento o piastra).
2. Il nome del profilo (senza distinzione tra maiuscole e minuscole).
3. Il materiale (senza distinzione tra maiuscole e minuscole).
4. La lunghezza di taglio, entro 1 mm.
5. Ogni foro: faccia, posizione lungo e trasversale, entro 1 mm, e diametro entro 0,1 mm.
6. Ogni scasso: estremità, lato, lunghezza e profondità, entro 1 mm.

Il {{ui:Nome}} del membro non conta. Non contano neppure la sua posizione nel modello, la sua rotazione né il verso in cui è stato disegnato, purché il pezzo sia lo stesso.

### Pezzi ribaltati

Un pezzo viene confrontato in ogni modo in cui può essere ribaltato in modo che la sua sezione si sovrapponga a se stessa. Se una di queste rotazioni lo rende uguale a un altro pezzo, condividono una marca.

| Forma | Rotazioni che contano |
|---|---|
| Profili a I, HSS rettangolari, piastre | Scambio di estremità (attorno all'asse verticale), scambio di estremità (attorno all'asse orizzontale), e capovolto attorno alla propria lunghezza |
| Profili a U | Scambio di estremità attorno al solo asse orizzontale, così l'anima resta dallo stesso lato |
| Angolari, HSS tondi | Nessuna: confrontati come posizionati |

Quindi una trave con un foro vicino all'estremità sinistra corrisponde a una trave con lo stesso foro vicino all'estremità destra, e un pilastro con fori in una flangia corrisponde a un pilastro con gli stessi fori nell'altra flangia.

### Numerazione

| Tipo | Prefisso del pezzo | Prefisso dell'assieme |
|---|---|---|
| Pilastro | c | C |
| Trave | b | B |
| Controvento | br | BR |
| Piastra (posizionata, piastra di testa o di base) | p | P |

Le marche sono numerate da 1 all'interno di ogni prefisso. L'ordine è: pilastri, poi travi, controventi e piastre; all'interno di un tipo, per nome del profilo in ordine naturale (W8x10 prima di W12x26); poi i pezzi più lunghi per primi.

Poiché la numerazione segue questo ordine, aggiungere o modificare un pezzo può spostare i numeri di altri.

## Marche degli assiemi

- Ogni pezzo che non è saldato a un altro pezzo è il pezzo principale del proprio assieme.
- Le piastre di testa sono saldate alla loro trave, e le piastre di base al loro pilastro, quindi appartengono all'assieme di quel membro.
- Due assiemi condividono una marca quando i loro pezzi principali condividono una marca del pezzo e i loro pezzi collegati hanno le stesse marche nelle stesse posizioni (entro 1 mm), consentendo le stesse rotazioni del pezzo principale.
- Il prefisso dell'assieme segue il pezzo principale: una trave con due piastre di testa è un assieme B.

Le piastre posizionate con lo strumento {{ui:Piastra}} non sono saldate a nulla, quindi ciascuna è un proprio assieme P.

## Marche dei plinti

I plinti con la stessa lunghezza, larghezza, profondità, testo del calcestruzzo, armatura inferiore e ferri di ripresa condividono una marca: F1, F2 … nell'ordine in cui sono stati posizionati. Posizione e rotazione non contano.

## Marche delle barre

Le barre con la stessa dimensione, forma e quote A, B e C (arrotondate al millimetro) condividono una marca in tutti i plinti. La marca è il numero della barra, F, e un contatore per dimensione di barra: 5F1, 5F2, 6F1. Una barra nel senso lungo e una nel senso corto di un plinto quadrato sono la stessa barra e condividono una marca; la colonna {{ui:Usata per}} dell'abaco elenca entrambi gli usi.
