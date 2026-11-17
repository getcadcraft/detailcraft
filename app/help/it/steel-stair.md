---
title: Generatore di scale in acciaio
summary: Una scala in acciaio dall'altezza piano-piano, dallo sviluppo e dalla larghezza: dislivello e pedata secondo un set di regole a scelta, pianerottoli, corrimano e balaustrini, disegni di officina e distinta di taglio con pesi.
keywords: scala in acciaio, generatore di scale, cosciale, gradino, lamiera mandorlata, grigliato, vaschetta piegata, pianerottolo, corrimano, balaustrini, alzata, pedata, osha, ibc, approved document k, distinta di taglio, pesi, disegno di officina
from: a4f0a985
---

Il generatore di scale crea una scala completa in acciaio a partire da pochi valori: i cosciali, i gradini, i pianerottoli quando la rampa è troppo alta, i corrimano con montanti e balaustrini, i fori di fissaggio nei cosciali, una distinta di taglio con i pesi e i disegni di officina. Parte dallo strumento {{ui:Stair}}, come la scala semplice (vedi Scale), con un interruttore in più.

## Posiziona una scala in acciaio

1. Scegliere {{ui:Stair}} nel gruppo {{ui:Place}}, oppure premere {{key:S}}.
2. A destra, spuntare {{ui:Use the steel stair generator}}.
3. Scegliere il **set di regole** per il luogo in cui sorge la scala, il **dislivello** (piano-piano; 0 = fino al livello successivo), lo **sviluppo disponibile** (0 = lasciare decidere la regola), la **larghezza libera** e il **tipo di gradino**: lamiera mandorlata, grigliato o vaschetta a lamiera piegata.
4. Impostare la sezione dei cosciali, i pianerottoli (secondo la regola o un numero), i corrimano (entrambi i lati, uno, nessuno), l'altezza del corrimano e l'interasse dei balaustrini.
5. Fare clic su un'intersezione di griglia: è il piede della prima alzata.

Selezionare la scala (fare clic su un cosciale, un gradino o un corrimano) per modificare qualsiasi impostazione. Le proprietà mostrano alzate, pedata, pendenza, rampe e pianerottoli, l'acciaio presente, la distinta di taglio e le fonti del set di regole.

## Set di regole

Il set di regole limita la forma della scala: dislivello e pedata, 2 × alzata + pedata, pendenza, pianerottolo, altezza del corrimano e apertura massima. DetailCraft offre quelli elencati sotto; la zona è un'impostazione, non una supposizione. Aprire **Da dove provengono i numeri di questo set di regole** nelle proprietà: ogni numero indica la sua fonte e dichiara quanto è stato verificato.

- **International Building Code 2021**: alzata da 4 a 7 in., pedata di almeno 11 in., corrimano da 34 a 38 in. Il limite di 12 piedi tra i pianerottoli è mostrato come *non letto*, e i numeri dei corrimano come letti in dispense che citano il codice: verificarli prima di farvi affidamento.
- **OSHA 29 CFR 1910.25 e 1910.29** (scale industriali standard): da 30° a 50°, alzata al massimo 9,5 in., pedata di almeno 9,5 in., larghezza di almeno 22 in., pianerottoli larghi quanto la scala e profondi 30 in., un corrimano superiore usato come corrimano da 36 a 38 in. Sono stati letti nel regolamento stesso.
- **Approved Document K 2013, Inghilterra** (scale generiche di accesso e di servizio): gli intervalli di alzata e pedata e 2 × alzata + pedata da 550 a 700 mm, letti nel rapporto commissionato dal governo che li tabella. Il documento non fornisce a DetailCraft un'altezza del corrimano: si usa quindi l'altezza impostata e l'elenco Problemi lo indica.

Un set di regole non presente qui non viene stimato: la scala segue allora la regola di comfort semplice 600–650 mm e segnala di non avere una regola.

## Cosa calcola

- **Alzate e pedata.** Il minor numero di alzate la cui 2 × alzata + pedata cade al centro dell'intervallo della regola, senza che la pedata scenda sotto il minimo della regola. Con uno sviluppo dato, la pedata è lo sviluppo diviso per i gradini e qualsiasi valore fuori dalla regola viene segnalato.
- **Rampe e pianerottoli.** Una rampa più alta di quanto consente la regola viene divisa con un pianerottolo largo quanto la scala e non inferiore al minimo della regola; si possono anche richiedere pianerottoli. Un pianerottolo è un telaio di due travi laterali e due angolari trasversali sotto una copertura, su due montanti.
- **Gradini.** La lamiera mandorlata è una lamiera saldata (6 mm per impostazione predefinita; il disegno della mandorlatura non è incluso nel peso). Una vaschetta a lamiera piegata ha un risvolto alla sporgenza ed è bullonata attraverso l'anima del cosciale: due fori di 2 mm più grandi del bullone a 0,3 e 0,7 della profondità. Il grigliato è disegnato come lamiera di peso equivalente (altezza della barra portante × spessore ÷ passo); le traverse e le bandelle non vengono conteggiate, e la distinta di taglio lo indica.
- **Corrimano.** Un corrimano superiore a tubo su montanti lungo ogni rampa e ogni pianerottolo, con un interasse dei balaustrini che nessuna sfera più grande dell'apertura della regola attraversa (al massimo 100 mm per impostazione predefinita).

## Disegni, distinta di taglio, esportazione

- La rampa è un unico assieme; i corrimano sono un altro assieme (i due lati sono lo stesso assieme, realizzato due volte). Ciascuno ha il proprio disegno di assieme, e il disegno del cosciale mostra i suoi fori.
- Il **foglio della scala** (ST-…) mostra il cosciale di ciascuna rampa dritto, con le posizioni dei fori misurate dall'estremità inferiore, e il dettaglio del gradino: sezione, sporgenza, risvolto e la flangia d'estremità con i suoi fori.
- {{ui:Cut list and weights}} nelle proprietà elenca ogni sezione e lunghezza con quantità e chilogrammi; {{ui:Download the cut list (CSV)}} la salva.
- Tutto va nella distinta dei materiali, nei file NC e in IFC come pezzi normali (IfcMember, IfcColumn, IfcPlate).

## Da sapere

- Questo è un punto di partenza, non un progetto. Nulla viene verificato per resistenza o deformazione; il set di regole limita solo la forma.
- Le estremità dei cosciali contro i piani sono tagliate a squadra e non dettagliate; i montanti dei pianerottoli poggiano sul piano inferiore e non hanno piastre di base.
- Il posizionamento della scala come elemento unico in BimCraft non è ancora implementato.
