---
title: Riferimento armature
summary: Diametri delle barre, dimensioni degli uncini, codici di forma, lunghezze di taglio e colonne della distinta di piegatura usate da DetailCraft.
keywords: armatura, diametri delle barre, uncini, diametro di piegatura, codici di forma, lunghezza di taglio, distinta di piegatura, elenco delle barre, astm a615, aci 318
from: 1583535e
---

## Diametri delle barre

Dalla ASTM A615/A615M Tabella 1 (designazioni in unità inch-libbra). I millimetri e i kg/m sono conversioni esatte dei valori pubblicati in pollici e lb/ft. Gli elenchi mostrano ogni diametro come, per esempio, "#5 (15.9 mm)".

| Barra | Diametro (mm) | Massa (kg/m) | Area (mm²) | Diametro interno di piegatura | Ramo dell'uncino a 90°, da esterno a esterno (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Nelle [impostazioni di DetailCraft](topic:settings) ({{ui:Armatura}}), i **nomi ASTM delle barre** possono mostrare queste barre con i loro nomi metrici soft A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (le stesse barre; la ACI 315-99 Tabella 1 riporta entrambi).

### Barre metriche (BS 4449)

| Barra | Diametro (mm) | kg/m | Raggio minimo di piegatura r (mm) | Ramo dell'uncino = sporgenza finale P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

La massa è la sezione nominale per 7850 kg/m³. Il raggio e la sporgenza finale sono i minimi della BS 8666:2020 (la sua tabella delle dimensioni minime; il vecchio diametro è 2r). I plinti con barre BS ricevono rami dell'uncino di lunghezza P e lunghezze di taglio secondo le formule BS 8666 riportate sotto. Scegliendo acciaio europeo nelle impostazioni, i nuovi plinti partono con reti H16 e ferri di ripresa H20 in calcestruzzo C30/37.

## Uncini

Barre ASTM: uncini standard a 90° dalla ACI 318-19 Tabella 25.3.1: diametro interno di piegatura 6 db per le barre da #3 a #8 e 8 db per le barre da #9 a #11, con un prolungamento rettilineo di 12 db oltre la piegatura. Il ramo dell'uncino, misurato da esterno a esterno, è metà del diametro di piegatura + db + 12 db.

Se l'uncino di una barra di rete non entra nella profondità del plinto all'interno del copriferro, DetailCraft accorcia il ramo per farlo entrare e mostra un avviso.

## Forme

DetailCraft memorizza tre forme. La distinta di piegatura le stampa con i codici di DetailCraft, come tipi ACI 315 o come codici di forma BS 8666: scegliere **Codici di forma della distinta di piegatura** nelle [impostazioni di DetailCraft](topic:settings) ({{ui:Armatura}}).

| Codice | Forma | Dimensioni |
|---|---|---|
| S | Dritta | A = lunghezza |
| L | Una piegatura a 90° | A = ramo principale, B = ramo dell'uncino, entrambi da esterno a esterno |
| U | Due piegature a 90° dallo stesso lato | A = centrale, B e C = i due rami, da esterno a esterno |

Le barre di rete con {{ui:Uncini di estremità}} attivi sono U; senza, S. Le barre di ripresa con {{ui:Uncino in basso}} attivo sono L; senza, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | nessun numero di tipo |
| L | 11, L = A + B − 0.5r − d | nessun numero di tipo: la figura non ha barre con un solo uncino |
| U | 21, A e C i rami, B il centrale: L = A + B + C − r − 2d | Tipo 2, uncini A e G, B rettilinea |

Con i codici BS 8666 o ACI 315 le colonne A, B e C della distinta seguono la lettera di quella norma (il centrale di una U è B).

## Lunghezza di taglio

Per le barre BS 4449 la lunghezza di taglio è la formula BS 8666 del codice di forma della barra (sopra). Per le barre ASTM è la lunghezza esatta dell'asse della barra: i tratti rettilinei più le piegature come archi di raggio pari a metà del diametro di piegatura più metà del diametro della barra. Non è calcolata da una tabella di detrazioni per piegatura, quindi può differire di alcuni millimetri da una distinta che ne usa una.

## Disposizione

- Rete inferiore: le barre lungo L formano lo strato inferiore, le barre lungo B vi poggiano sopra. Ogni gruppo è distribuito uniformemente su tutto il plinto all'interno del copriferro, con l'interasse indicato o più fitto, e con almeno due barre.
- Ferri di ripresa: una griglia di barre lungo L e lungo B agli interassi indicati, centrata sul plinto, appoggiata sulla rete e sporgente sopra la parte superiore per la sporgenza indicata. Ogni uncino punta verso l'esterno.

## Verifiche

| Verifica | Regola | Esito |
|---|---|---|
| Spazio per le barre | Il copriferro su entrambi i lati lascia spazio per le barre | Rifiutato se non rispettata |
| Profondità per due strati | La profondità meno due copriferri contiene entrambi gli strati della rete | Rifiutato se non rispettata |
| Ferri di ripresa entrano | La griglia dei ferri di ripresa entra nel copriferro | Rifiutato se non rispettata |
| Distanza libera tra le barre | Almeno il maggiore tra 25.4 mm e db (ACI 318-19 25.2.1; dimensione dell'aggregato non verificata) | Avviso |
| Profondità dell'uncino | Il ramo dell'uncino entra nella profondità all'interno del copriferro | Avviso, ramo accorciato |
| Uncini di ripresa | Gli uncini restano fuori dal copriferro | Avviso |

## Colonne della distinta di piegatura

La scheda {{ui:Distinta di piegatura}} e il suo CSV hanno queste colonne: Posizione, Diametro, Forma, A (mm), B (mm), C (mm), Quantità, Lunghezza di taglio (mm), Lunghezza totale (m), kg/m, Peso unitario (kg), Peso totale (kg), Impiego. L'ultima riga totalizza quantità, lunghezza e peso.
