---
title: Disegni di insieme e di montaggio
summary: Crea piante, prospetti e un disegno di montaggio per ogni marca di gruppo dal modello, su tavole da A4 ad A1 o ANSI da B a D, emettili con lettere di revisione, e scaricali come PDF, DWG o DXF.
keywords: linee nascoste, rimozione linee nascoste, tratteggiato, nuvola di revisione, nuvole, triangolo di revisione, pianta dei tirafondi, tirafondi, abaco dei tirafondi, abaco delle piastre di base, tracciamento, emissione, revisione, rev, tabella delle revisioni, riemissione, registro delle emissioni, transmittal, dwg, dxf, file cad, esporta disegni, disegni, insieme, pianta, prospetto, disegno di montaggio, formato tavola, formato carta, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, stampa, scala, cartiglio, riferimento modello
from: 709f8604
---

Scegliere {{ui:Drawings}} nel gruppo {{ui:Output}}. DetailCraft crea l'intero insieme dal modello così com'è ora. Nulla viene memorizzato: modificare il modello, riaprire {{ui:Drawings}}, e l'insieme viene creato di nuovo.

## Cosa contiene l'insieme

- **Piante**, una per ogni livello che contiene qualcosa, viste dall'alto.
- **Prospetti**, uno per ogni linea di griglia con aste entro 1 m da essa.
- **La pianta dei tirafondi**, quando il modello contiene piastre di base: ogni piastra di base vista dall'alto con il suo pilastro e i tirafondi, le griglie con le loro quote, un dettaglio tipico di ogni schema di tirafondi (BP1, BP2 …) con l'interasse dei tirafondi e le distanze dai bordi, e due abachi: i tirafondi per marca (R1, R2 …: quantità, diametro, lunghezza, sporgenza sopra la piastra, ancoraggio, classe) e le piastre di base per griglia (pilastro, schema, piastra, tirafondi, quota superiore della piastra). Un pilastro fuori griglia è individuato dalle sue coordinate.
- **Disegni di montaggio**, uno per ogni marca di gruppo: viste frontale, dall'alto e laterale, quote catenarie fino ai fori e ai bordi delle piastre, l'elenco delle parti, i bulloni e i tirafondi sciolti, e note su saldature e fori. Ogni piastra saldata ha un simbolo di saldatura d'angolo nella vista frontale (AWS A2.4): la freccia punta al giunto, il triangolo sotto la linea di riferimento indica il lato della freccia, la cifra alla sua sinistra è la dimensione della saldatura in mm, e un cerchio dove la freccia incontra la linea indica saldatura lungo tutto il perimetro.

**Linee nascoste.** Piante e prospetti omettono le linee di una parte dove una parte interamente davanti ad essa la copre (una trave vista di testa dietro un pilastro). I disegni di montaggio disegnano una piastra tratteggiata dove la parte principale la copre: dietro l'anima nella vista frontale (vista dal lato −u della parte), sotto l'ala superiore nella vista dall'alto. Le parti alla stessa profondità, o che si sovrappongono in profondità, vengono disegnate entrambe per intero.

Ogni tavola ha un cartiglio con il numero del disegno, la scala, il nome del modello, la data, il numero della tavola con il formato, e il riferimento modello: un codice generato dal modello salvato, così una stampa può essere ricondotta al modello da cui deriva.

## Scegliere il formato della tavola

Scegliere il formato nell'elenco in cima alla finestra {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) oppure {{ui:ANSI D}} (22 × 34 in). Ogni tavola è orizzontale. L'insieme viene creato di nuovo subito sul nuovo formato, e lo stesso formato viene usato per i disegni di officina. È anche in [Impostazioni di DetailCraft](topic:settings#drawings), e questo browser lo ricorda.

- Una tavola più grande disegna a una scala maggiore. Le scale sono sempre quelle standard (1:10, 1:20, 1:25, 1:50, 1:100 e così via).
- Il testo mantiene la stessa dimensione su ogni tavola, quindi resta leggibile in stampa.
- Su una tavola piccola un montaggio lungo e sottile può avere una scala maggiore in profondità che in lunghezza. Il titolo della vista indica allora entrambe le scale, e prevalgono le quote.

## Emettere i disegni e le revisioni

La riga sopra l'anteprima indica la situazione della tavola mostrata: **Non ancora emessa**, **Rev B, emessa … ; invariata da allora**, oppure, in rosso, **Modificata dopo rev B: richiede riemissione**. L'elenco delle tavole indica con la revisione le tavole emesse, e quelle che richiedono una riemissione.

- Digitare a cosa serve l'emissione (inizialmente è "Emesso per la fabbricazione") e scegliere {{ui:Issue this sheet}}, oppure {{ui:Issue changed sheets}} per ogni tavola nuova o modificata dall'ultima emissione.
- La prima emissione di una tavola è la revisione A, poi B, C e così via (le lettere I e O vengono saltate).
- Il cartiglio mostra il numero del disegno con la sua revisione ("A-B1  rev B"), e accanto una tabella delle revisioni elenca le ultime emissioni: revisione, data e descrizione. Su una tavola piccola ne mostra quante ci stanno.
- Una tavola "cambia" quando cambia ciò che vi è disegnato: un'asta spostata, un nuovo foro, una marca rinumerata. La data, il numero delle tavole e la tabella delle revisioni in sé non contano. Cambiare il formato della tavola cambia tutte le tavole.
- Il registro delle emissioni è salvato nel file del modello, e l'emissione è un solo passo di annullamento. Il [file KISS](topic:kiss-export) riporta l'ultima revisione di ciascun disegno.

### Nuvole di revisione

Dalla seconda emissione di una tavola in poi, ogni parte o plinto modificato viene disegnato dentro una nuvola di revisione con un triangolo di revisione che riporta la lettera.

- Mentre una tavola è cambiata dall'ultima emissione, le nuvole mostrano ciò che è cambiato da allora, con la prossima revisione nel triangolo (rev B emessa e modificata: i triangoli indicano C).
- Una volta emessa, le nuvole restano sulla tavola di quella revisione, come in un insieme stampato, finché la tavola non cambia di nuovo.
- Ogni tavola fa la nuvola solo delle modifiche che mostra. Piante e prospetti non disegnano fori né scassi, quindi fanno la nuvola solo di un'asta spostata, ruotata o ridimensionata, oppure la cui marca è cambiata. I disegni di montaggio e la pianta dei tirafondi fanno la nuvola anche dei fori e degli scassi nuovi o spostati.
- Una marca rinumerata conta: quando una modifica fa diventare una trave un nuovo gruppo, le travi la cui marca è salita (B1 in B2) vengono incluse nella nuvola su piante e prospetti.
- Una parte eliminata non lascia nulla da includere in una nuvola.
- Le tavole emesse prima che arrivassero le nuvole di revisione (DetailCraft 0.4) iniziano a farle dalla loro emissione successiva.
- Le nuvole sono presenti nei download PDF, DXF e DWG, e non contano mai come modifica in sé.

## Scaricare

Scegliere il formato nell'elenco accanto ai pulsanti, quindi {{ui:This sheet}} per la tavola mostrata oppure {{ui:All sheets}} per l'intero insieme.

- **PDF**: per stampare o inviare. {{ui:All sheets}} crea un solo PDF, una pagina per tavola, ciascuna del formato scelto.
- **DWG**, nel formato 2018, 2013, 2010, 2007, 2004 o 2000: per aprire le tavole in un programma CAD. Scegliere un formato più vecchio per un programma più vecchio.
- **DXF (R12)**: la versione che quasi tutti i programmi CAD aprono.

Una tavola DWG o DXF viene disegnata a grandezza naturale: un'unità di disegno è un millimetro sulla carta, quindi si stampa a 1:1 e ogni vista mantiene la scala indicata dal suo titolo. Ogni penna è un proprio layer: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID e così via, con il suo spessore di linea (DWG) e i suoi tratteggi. Le parole sono testo nello stile di testo di DetailCraft (Arial). Le quote sono le linee e le cifre che si vedono, non oggetti quota. {{ui:All sheets}} inserisce i file DWG o DXF in un unico zip, un file per tavola.

:::note
DXF R12 non ha spessori di linea né campiture: i layer mantengono i loro nomi, quindi impostare le penne per layer al momento della stampa, e le forme piene vengono omesse (la barra di stato indica quante).
:::

Stampare al 100% (senza "adatta alla pagina") su carta dello stesso formato se si vogliono mantenere le scale dichiarate.
