---
title: Dettagliare travi, pilastri, solai e pareti in cemento armato
summary: Aggiungere travi, pilastri, solai e pareti in calcestruzzo per griglia, assegnare barre, staffe e legature, verificare sovrapposizioni e ancoraggi secondo ACI 318-19 o EN 1992-1-1, e produrre disegni di officina e distinte di piegatura.
keywords: cemento armato, armatura, travi, pilastro, solaio, parete, staffe, legature, uncini, sovrapposizioni, giunzione per sovrapposizione, ancoraggio, lunghezza di sviluppo, ld, ldh, lbd, copriferro, interasse, ferri di bordatura, aperture, reti, posizioni delle barre, distinta di piegatura, bbs, disegno di officina, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, importazione IFC
from: 3835b7ec
---

La scheda {{ui:Calcestruzzo}} sotto la vista dettaglia le barre di travi, pilastri, solai e pareti in calcestruzzo. Si danno le dimensioni e le barre; DetailCraft colloca ogni barra, la numera, verifica sovrapposizioni, ancoraggi, copriferro e interassi rispetto alla clausola da cui provengono, e la disegna.

:::warning
DetailCraft dettaglia le barre che gli si danno. Non le progetta. Ogni risultato va verificato da un ingegnere.
:::

## Aprire la scheda Calcestruzzo

Scegliere la scheda {{ui:Calcestruzzo}} sotto la vista. In un layout a barra multifunzione, {{ui:Calcestruzzo}} si trova nella scheda {{ui:Modellazione}} accanto a {{ui:Plinto}}. Con la riga di comando dello stile di disegno, digitare {{cmd:CONCRETE}}.

## Aggiungere un elemento per griglia

Gli elementi in calcestruzzo sono posizionati sulle linee di griglia e sui piani del modello, quindi impostarli prima (pannello di sinistra).

1. In {{ui:Aggiungi per griglia}}, scegliere l'{{ui:Elemento}}: {{ui:Trave in calcestruzzo}}, {{ui:Pilastro in calcestruzzo}}, {{ui:Solaio}} o {{ui:Parete}}.
2. Indicare le linee di griglia e i piani:
   - una trave va da un'intersezione di griglia a un'altra, con la sommità al piano;
   - un pilastro sta su un'intersezione, da un piano all'altro;
   - un solaio riempie il rettangolo tra due linee numerate e due linee di lettere, con la sommità al piano;
   - una parete corre lungo la sua mezzeria da un'intersezione a un'altra, da un piano all'altro.
3. Dare le dimensioni e scegliere {{ui:Aggiungi}}. L'elemento viene selezionato e i suoi campi si aprono nel pannello {{ui:Proprietà}}.

Ogni elemento parte con barre di valore iniziale, non di progetto: modificarle secondo quelle dell'ingegnere.

## Modificare le barre

Selezionare l'elemento (nella vista, oppure il suo nome nella scheda {{ui:Calcestruzzo}}). Il pannello {{ui:Proprietà}} mostra:

| Elemento | Cosa si imposta |
|---|---|
| Trave | Larghezza, altezza, copriferro netto; barre superiori e inferiori (diametro, numero, dritte o con uncino a 90° alle estremità); barre laterali; staffe (diametro, uncini a 135° o 90°, distanza della prima dalla faccia dell'appoggio, lunghezza e passo della zona di estremità, passo intermedio); lunghezze di appoggio; lunghezze di sovrapposizione |
| Pilastro | Larghezza, profondità, rotazione, copriferro; barre longitudinali su ciascuna faccia; legature come per le staffe; cosa fanno le barre in testa (sovrapposizione con il pilastro sopra, uncino nel solaio, oppure stop) |
| Solaio | Spessore, dimensione, parte superiore, copriferri; rete inferiore e rete superiore in ciascuna direzione (diametro e passo); staffe a U lungo i bordi; ferri di bordatura; aperture |
| Parete | Spessore, copriferro, uno o due strati, barre orizzontali e verticali, staffe a U alle estremità, barre verticali sovrapposte in alto o no, ferri di bordatura, aperture |

Ogni modifica è un solo passo di annullamento. Una modifica che non può essere costruita viene rifiutata e la barra di stato dice perché, per esempio "L'apertura non entra nell'elemento con il suo copriferro."

Staffe e legature sono chiuse, con entrambi gli uncini nello stesso spigolo. Le barre di una trave entrano nel pilastro in calcestruzzo alle sue estremità fino alla faccia opposta del pilastro, meno il copriferro; dove non c'è pilastro, indicare la {{ui:Lunghezza d'appoggio all'inizio (mm)}} e alla fine.

## Sovrapposizioni e ancoraggi

Le barre più lunghe della {{ui:Lunghezza commerciale del ferro (mm)}} (12000 come valore iniziale) sono tagliate in pezzi di lunghezza uguale, sovrapposti. La tabella {{ui:Sovrapposizioni e ancoraggi}} elenca ogni sovrapposizione e ogni ancoraggio: ciò che serve, con la clausola e i suoi termini, e ciò che ha il dettaglio.

- Una lunghezza di sovrapposizione di 0 significa "secondo necessità": la lunghezza prevista dalla norma, arrotondata per eccesso a 25 mm.
- Digitare una propria lunghezza di sovrapposizione per usarla. Se è più corta del necessario è un problema (vedi sotto) e viene marcata con * nella tabella.
- L'ancoraggio si misura dalla faccia dell'appoggio alla fine della barra dentro l'appoggio. Una trave senza appoggio noto lo dice, invece di verificarlo.
- Un pilastro su un plinto si sovrappone alle barre di ripresa del plinto, e su un altro pilastro alle barre di quel pilastro: anche la loro sovrapposizione viene verificata.

**ACI 318-19** (SI): barre tese dritte 25.4.2.3 (la tabella, con ψt, ψe, ψg, λ), uncini standard 25.4.3.1 (ψr 1.6 e ψo 1.25 assunti se non diversamente noti), barre compresse 25.4.9.2, sovrapposizioni tese 25.5.2.1 (Classe B, oppure Classe A nelle impostazioni), sovrapposizioni compresse 25.5.5.1.

**EN 1992-1-1**: ancoraggio 8.4.4 con fbd da 8.4.2 (aderenza buona o scarsa), sovrapposizioni 8.7.3 con α6 per ogni barra sovrapposta in una stessa sezione. γc, γs e αct partono dai valori raccomandati; impostare quelli della propria appendice nazionale.

## Le verifiche

Ogni verifica non superata compare nel pannello Problemi della shell (fonte {{ui:Verifiche dell'armatura}}) e nell'elenco {{ui:Verifiche}} dell'elemento:

| Verifica | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Copriferro | Tabella 20.5.1.3.1, per esposizione | Copriferro minimo di aderenza, Tabella 4.2 (il copriferro di durabilità va fornito) |
| Distanza libera tra le barre | 25.2.1 (travi, solai, pareti), 25.2.3 (pilastri) | 8.2 (2) |
| Passo delle staffe | 9.7.6.2.2 | 9.2.2 (6) |
| Armatura minima della trave | 9.6.1.2 | 9.2.1.1 (1) |
| Barre laterali delle travi oltre 900 mm di altezza | 9.7.2.3 | non verificata |
| Rapporto di armatura del pilastro, numero di barre | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Legature: passo, diametro, legature trasversali | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Passo del solaio, armatura minima | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Passo della parete, armatura minima, due strati | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Sovrapposizioni, ancoraggi | come sopra | come sopra |

La dimensione dell'aggregato non è nota, quindi la distanza libera viene verificata senza di essa.

## Aperture, ferri di bordatura e barre di bordo

Scegliere {{ui:Aggiungi un'apertura}} sotto un solaio o una parete selezionati, e indicare dove si trova e le sue dimensioni. Le barre che attraversa si fermano a copriferro dal suo bordo. I {{ui:Ferri di bordatura}} vengono aggiunti su ciascun lato, nello stesso strato, con metà dell'area delle barre tagliate, oltre una lunghezza di ancoraggio dall'apertura. È la regola di partenza di DetailCraft, non una clausola della norma: modificare i ferri di bordatura secondo quelli dell'ingegnere. Non vengono aggiunte barre d'angolo.

Le staffe a U lungo i bordi liberi di un solaio e alle estremità di una parete hanno rami lunghi una lunghezza di sovrapposizione.

## Posizioni delle barre e distinta di piegatura

Barre identiche condividono una posizione: i plinti mantengono le posizioni F (5F1), le travi hanno B, i pilastri C, i solai S e le pareti W (7B1, 8C1, 4S2). La scheda {{ui:Distinta di piegatura}} e il suo CSV elencano ora ogni barra della struttura, prima i plinti. {{ui:Uscita}} › {{ui:Altro}} › {{ui:Piegatura}} la scarica.

## Disegni di officina

Scegliere {{ui:Uscita}} › {{ui:Altro}} › {{ui:Disegni di armatura}}, oppure {{ui:Disegni di armatura}} nella scheda {{ui:Calcestruzzo}}, oppure {{ui:Disegno di officina}} accanto a un elemento. Ogni elemento ottiene una tavola con un prospetto (una pianta per un solaio) che mostra ogni barra con la sua posizione, le zone delle staffe o delle legature e le sovrapposizioni quotate, più una sezione in mezzeria. Seguono le tavole della distinta di piegatura, che elencano ogni posizione con uno schizzo della sua forma, le sue dimensioni, il numero, la lunghezza di taglio e il peso.

Le tavole sono generate ogni volta dal modello, e di nuovo dopo ogni modifica mentre la finestra è aperta: il cartiglio riporta il riferimento del modello. Salvare {{ui:Questa tavola in PDF}} oppure {{ui:Tutte le tavole in PDF}}.

## Barre da un file IFC

{{ui:File}} › {{ui:Importa IFC}} ora legge IfcReinforcingBar: il disco di sweep lungo il suo asse torna come tratti dritti e piegature, con il suo diametro, la sua posizione e l'elemento che la contiene. Le barre sono mantenute come sono state lette (non vengono trasformate nelle regole di una trave o di un solaio), mostrate nella vista, elencate nella distinta di piegatura e riscritte con l'esportazione IFC. Il rapporto di importazione dice quante barre sono state lette, di quali diametri, in quanti elementi, e cosa è stato lasciato fuori e perché.

Una trave, un pilastro, un solaio o una parete di quel file che contengono barre, o il cui materiale è calcestruzzo, non vengono considerati acciaio; il rapporto lo dice. L'esportazione IFC di DetailCraft riporta la definizione di ciascun elemento in calcestruzzo, quindi torna com'era, e le sue barre vengono ricreate a partire da essa.

:::note
Leggere i file di un programma di progettazione strutturale (non IFC) non è ancora implementato: esportare in IFC da quel programma.
:::

## Esportazione IFC

Travi, pilastri, solai in calcestruzzo (con aperture) e pareti escono come IfcBeam, IfcColumn, IfcSlab e IfcWall, ciascuno con le sue barre come IfcReinforcingBar (barre principali, legature per le staffe, barre di bordo) aggregate ad esso, ogni barra un disco di sweep lungo il suo asse con archi veri nelle piegature, la sua marca e la sua lunghezza di taglio.
