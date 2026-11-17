---
title: Scale
summary: Posiziona una scala dritta in acciaio da dislivello, pedata e larghezza: due cosciali e gradini a lamiera, un unico assieme saldato.
keywords: scala, scale, scala a rampa, cosciale, gradino, alzata, pedata, sporgenza, rampa, scala in acciaio, ibc 1011, blondel
from: 62fa3845
---

Una scala dritta in acciaio: due cosciali (canali con le punte rivolte all'interno, oppure piatti di costa) e un gradino in lamiera a ogni passo, saldati tra loro. DetailCraft calcola il numero di alzate a partire dal dislivello, le verifica rispetto ai limiti del regolamento edilizio e realizza la scala come un unico assieme di officina.

## Posiziona una scala

1. Scegliere {{ui:Stair}} nel gruppo {{ui:Place}}, oppure premere {{key:S}}.
2. Impostare la scala a destra: la **direzione di salita** (0° sale lungo +x, 90° lungo +y), il **dislivello** (0 = fino al livello successivo), la **pedata**, la **larghezza libera** tra i cosciali, l'**alzata massima consentita**, il **cosciale**, lo **spessore della lamiera del gradino**, la **sporgenza** (nosing) e il materiale.
3. Fare clic su un'intersezione di griglia: è il piede della prima alzata, sull'asse centrale della scala.

La barra di stato indica quante alzate sono state create. Selezionare la scala (fare clic su un cosciale o su un gradino) per modificare qualsiasi impostazione, la sua posizione o la sua fase; le proprietà mostrano anche alzate, gradini, sviluppo, pendenza e 2 × alzata + pedata.

## Cosa calcola DetailCraft

- **Alzate.** Le meno numerose che mantengono ogni alzata al di sotto o pari all'alzata massima consentita: un dislivello di 3000 mm con 178 mm o meno dà 17 alzate di 176.5 mm. C'è un gradino in meno delle alzate (il piano superiore è l'ultimo passo).
- **Gradini.** Una lamiera di pedata + sporgenza di profondità (280 + 25 = PL6x305 per impostazione predefinita) e lunga quanto la larghezza libera, con il lato superiore a ogni altezza di alzata e il bordo anteriore (la sporgenza) davanti alla linea dell'alzata.
- **Cosciali.** Alla pendenza della scala, da dove incontrano il piano inferiore fino a dove incontrano il piano superiore, appena fuori dalla larghezza libera, con il bordo superiore 50 mm sopra la linea delle sporgenze. Le punte di un canale sono rivolte verso l'interno della scala; un piatto come PL12x250 sta di costa.
- **Saldature.** Ogni gradino a entrambi i cosciali. I gradini e il cosciale destro sono saldati al cosciale sinistro, quindi la scala ottiene una sola marca di assieme (ST1) e il proprio disegno di assieme; i cosciali ricevono marche di pezzo st…, i gradini p….
- **Verifiche.** Avvisi quando un'alzata è fuori dai 4–7 in. (102–178 mm) o la pedata è inferiore a 11 in. (279 mm), i limiti della IBC 2021, sezione 1011.5.2; quando 2 × alzata + pedata è fuori da 600–650 mm (una regola di comfort comune); e quando il cosciale è troppo basso per portare i gradini. Un profilo di cosciale sconosciuto impedisce la costruzione della scala.

## Da sapere

- Spostamento, rotazione, specchiatura, copia, incolla, eliminazione e fasi funzionano su una scala come su un'asta. Una rotazione ruota la salita; una specchiatura la invia nel verso speculare.
- I cosciali vengono esportati in IFC come IfcMember e i gradini come IfcPlate; entrambi vanno nei file NC e nella distinta dei materiali. Il controllo interferenze lascia in pace i pezzi propri della scala (sono saldati insieme).
- Questa scala semplice è una sola rampa con gradini a lamiera. Per pianerottoli, corrimano con balaustrini, gradini a vaschetta piegata o grigliati, un set di regole a scelta, una distinta di taglio e i disegni dei fori dei cosciali, spuntare {{ui:Use the steel stair generator}} nello strumento Scala (vedi Generatore di scale in acciaio).
- I cosciali sono tagliati a squadra: i tagli d'estremità contro i piani non vengono eseguiti.
- DetailCraft non progetta la scala: cosciali e gradini non vengono verificati per resistenza né per deformazione.
