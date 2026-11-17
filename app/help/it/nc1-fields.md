---
title: Campi del file NC
summary: Cosa scrive DetailCraft in ogni file NC DSTV, campo per campo, e come vengono misurate facce e coordinate.
keywords: nc1, dstv, file nc, blocco st, ak, bo, intestazione, facce, coordinate, cnc, formato
from: 1b676fc1
---

Ogni file `.nc1` descrive una marca. Le righe terminano con CR LF. I campi di testo contengono solo ASCII semplice; gli altri caratteri diventano "?". La seconda riga è un commento, `** DetailCraft <mark>.nc1`.

## Intestazione (ST)

| Campo | Profilo a I, profilo a U | Angolare | HSS rettangolare | HSS tondo | Piastra |
|---|---|---|---|---|---|
| Ordine | Il nome del modello | ← | ← | ← | ← |
| Disegno, pezzo | La marca | ← | ← | ← | ← |
| Fase | La fase della parte, oppure 1 | ← | ← | ← | ← |
| Qualità dell'acciaio | La classe del materiale | ← | ← | ← | ← |
| Quantità | Numero di parti con questa marca | ← | ← | ← | ← |
| Profilo | Il nome del profilo, per esempio W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Codice profilo | I o U (profilo a U) | L | M | RO | B |
| Lunghezza | Lunghezza di taglio | ← | ← | ← | Lunghezza |
| Altezza | Altezza d | Lato | Altezza | Diametro | Larghezza della piastra |
| Larghezza dell'ala | bf | Lato | Larghezza | Diametro | 0 |
| Spessore dell'ala | tf | t | Spessore parete t | Spessore parete t | 0 |
| Spessore dell'anima | tw | t | Spessore parete t | Spessore parete t | Spessore della piastra |
| Raggio | Raggio di raccordo (0 per i profili a U AISC) | 0 | Raggio dello spigolo esterno | 0 | 0 |
| Peso al metro | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Superficie di verniciatura al metro | Perimetro esterno, m²/m | ← | ← | ← | 2 (entrambe le facce, m²/m²) |
| Angoli di sega (4 campi) | 0 (a squadra) | ← | ← | ← | ← |
| Campi di testo (4) | `-` | ← | ← | ← | ← |

Le piastre seguono la colonna della norma "per le lamiere". La norma non ha una colonna per i tubi tondi: DetailCraft scrive il diametro sia come altezza sia come larghezza dell'ala, e lo spessore della parete come entrambi gli spessori.

## Contorni esterni (AK)

- **Profilati a I e a U:** l'anima (v), con una tacca rettangolare per ogni scasso; ciascuna ala (o e u), accorciata a un'estremità dove uno scasso è almeno profondo quanto l'ala.
- **HSS rettangolari:** entrambe le pareti laterali (v e h), con tacche per gli scassi, e le pareti superiore e inferiore (o e u).
- **Angolari:** un rettangolo per lato (v e u). Gli scassi sugli angolari non vengono scritti: tale pezzo è elencato come non scritto. Un controvento ad angolare imbullonato a un [fazzoletto](topic:brace-gussets) ha i fori sul lato imbullonato: v per il lato lungo la u del pezzo, u per il lato lungo la sua v.
- **HSS tondi:** un rettangolo su v, il tubo visto di fronte (lunghezza × diametro).
- **Piastre:** un rettangolo sulla faccia v.

Ogni contorno è chiuso (il primo punto viene ripetuto alla fine) e percorso in senso antiorario.

## Fori (BO)

Una riga per foro: faccia, x, y, diametro, profondità 0 (passante). Sono inclusi tutti i fori, quelli inseriti a mano e quelli creati dalle connessioni. Un foro che attraversa le pareti laterali di un HSS rettangolare è scritto due volte, una su v e una su h.

## Facce e coordinate

Ogni profilo è posizionato come la figura delle posizioni dei profili della norma lo disegna (DSTV 1998, p. 7): x lungo il pezzo, Y attraverso, Z verso l'alto dalla faccia posteriore, con il punto zero allo spigolo esterno. DetailCraft non specchia mai un pezzo per adattarlo alla figura.

| Faccia | Profilo a I | Profilo a U | Angolare | HSS rettangolare | Piastra |
|---|---|---|---|---|---|
| v | Anima, fronte | Anima, vista dal lato delle punte delle ali | Il lato lungo la u del pezzo | Parete laterale a −u | La faccia della piastra |
| h | | | | Parete laterale a +u | |
| o | Ala superiore | **Ala inferiore** | | Parete superiore | |
| u | Ala inferiore | **Ala superiore** | Il lato lungo la v del pezzo | Parete inferiore | |

- **x** corre lungo il pezzo dal suo inizio di taglio.
- **Profilati a I e HSS rettangolari:** y sull'anima o sulle pareti laterali a partire dal lato inferiore del profilo; y su un'ala o sulle pareti superiore e inferiore a partire dal suo bordo sul lato posteriore (lato +u del pezzo).
- **Profilati a U:** giacciono sul dorso con le punte in alto, come nella figura della norma. Quindi y sull'anima parte dall'esterno dell'ala superiore e scende; l'ala superiore è la faccia u e l'ala inferiore la faccia o; y su un'ala va dal dorso dell'anima verso la punta.
- **Angolari:** y su ciascun lato a partire dal tallone.
- **Piastre:** y a partire dal bordo −u della piastra.

Verificare come il software della macchina legge le facce dei profilati a U prima di tagliare: alcuni programmi li ribaltano.

## Non scritto

Smussi, contorni interni, marcature (SI), angoli di sega diversi dalla squadra, fori asolati, fori nei tubi tondi (DetailCraft non ne ha) e scassi su angolari e tubi tondi.
