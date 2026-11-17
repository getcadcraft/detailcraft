---
title: Inviare i file NC all'officina
summary: Esportare i file NC DSTV per ogni marca (profilati a I, profilati a U, angolari, HSS, piastre), compressi in zip, e verificarli prima che arrivino a una macchina.
keywords: nc, nc1, dstv, cnc, macchina, linea travi, linea di foratura, taglio piastre, esportazione, fabbricazione, zip
from: 598b6091
---

DetailCraft scrive un file NC DSTV (`.nc1`) per ogni marca, per profilati a I, profilati a U, angolari, HSS rettangolari e tondi e piastre, e li comprime insieme in un unico zip. Le linee travi e le macchine per piastre leggono questi file per segare, forare e tagliare.

## Esportazione

1. Prima, risolvere gli elementi nella scheda {{ui:Problemi}}: una connessione che non è stato possibile costruire non aggiunge fori.
2. Salvare il modello ({{key:Mod+S}}), in modo che i file NC corrispondano a un modello salvato.
3. Scegliere {{ui:File NC}} nel gruppo {{ui:Uscita}}.
4. Il browser scarica `<name> NC.zip`. La barra di stato indica quanti file contiene ed elenca le marche che non ha scritto (un angolare o un tubo tondo con uno scasso).

All'interno dello zip ogni file prende il nome della propria marca: `b1.nc1`, `c1.nc1`, `p1.nc1` … Lo zip non è compresso e si apre con qualsiasi strumento per file zip.

Se il modello non ha parti, la barra di stato lo indica.

## Contenuto di ogni file

- **Intestazione (ST):** il nome del modello come ordine, la marca come disegno e pezzo, fase 1, la classe del materiale, la quantità, il profilo e le sue dimensioni, la massa per metro e la superficie di verniciatura per metro. I tagli della sega sono a squadra.
- **Contorni esterni (AK):** il profilo dell'anima con gli scassi ritagliati, e il contorno di ciascuna ala accorciato dove uno scasso la rimuove.
- **Fori (BO):** ogni foro con la sua faccia, posizione e diametro, compresi i fori realizzati dalle piastre di testa e dalle piastre di base.

Campo per campo, con le regole di faccia e coordinate: [Campi del file NC](topic:nc1-fields).

## Cosa non viene scritto

- Angolari e tubi tondi con scasso: nessun file NC. Le loro marche sono elencate nella barra di stato.
- Fori nei tubi tondi (DetailCraft non ne crea).
- Smussi, contorni interni, marcature (tracciatura) e angoli di sega diversi dalla squadra.
- Fori asolati (DetailCraft ha solo fori tondi).

## Verifica prima della lavorazione

I file NC di DetailCraft vengono riletti dalla sua suite di test, ma non sono stati eseguiti sulle macchine dell'officina.

1. Aprire i file nel visualizzatore NC dell'officina o nel software della macchina e confrontarli con i disegni di officina.
2. Verificare sulla macchina un pezzo di ogni tipo prima di avviare un lotto.
3. Verificare come il software legge le coordinate y delle ali e le facce dei profilati a U: DetailCraft misura la y delle ali dal bordo posteriore e dispone i profilati a U sul dorso, come li disegna la norma (vedi [Campi del file NC](topic:nc1-fields#faces-and-coordinates)).
