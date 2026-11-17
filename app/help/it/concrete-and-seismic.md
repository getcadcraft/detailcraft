---
title: Verificare gli elementi in calcestruzzo e creare i carichi sismici
summary: Impostare le armature di travi e pilastri in calcestruzzo, verificarli secondo ACI 318-19, creare le forze laterali equivalenti secondo ASCE 7-22 sui solai rigidi e vedere lo spostamento di piano. Un ausilio per un ingegnere da verificare.
keywords: calcestruzzo, calcestruzzo armato, ACI 318, ACI 318-19, armatura, trave, pilastro, taglio, legature, sismico, terremoto, forza laterale equivalente, ELF, ASCE 7-22, spostamento, spostamento di piano, solai, diaframma rigido, peso di piano, utilizzo, rapporto di utilizzo, strutturale, ingegnere
from: 94d3001d
---

I blocchi {{ui:Elementi in calcestruzzo}} e {{ui:Carichi sismici}} nella scheda {{ui:Analisi}} verificano le travi e i pilastri in calcestruzzo armato, e calcolano le forze orizzontali di un terremoto sui solai di un telaio. Entrambi seguono l'esecuzione della scheda {{ui:Analisi}} e vengono salvati con il modello.

:::warning
I risultati sono **da verificare da parte di un ingegnere**: un ausilio finché uno non l'ha esaminato. Le verifiche del calcestruzzo usano forze del primo ordine, tranne che un pilastro in un telaio definito non spostabile viene dimensionato per il suo momento amplificato, senza amplificazione per spostamento laterale, senza progetto a torsione, senza dettagli sismici (capitolo 18 ACI) e senza dettagli delle legature. I carichi sismici non tengono conto del fattore di ridondanza, dell'effetto sismico verticale, dell'amplificazione torsionale e degli effetti P-delta. I carichi da vento non sono ancora realizzati.
:::

## Disegnare gli elementi

Disegnare gli elementi in calcestruzzo come rettangoli: un profilo {{ui:Piastra}} come `PL400x400` per un pilastro e `PL300x600` per una trave dà la sezione. Pilastri e travi si collocano come qualsiasi altro membro.

## Impostare le sezioni

Il blocco {{ui:Elementi in calcestruzzo}} elenca ogni sezione usata dagli elementi. Premere {{ui:Imposta come calcestruzzo…}} su quelle che sono in calcestruzzo. DetailCraft legge la larghezza **b** (lungo l'asse y proprio dell'elemento) e l'altezza **h** (lungo z) dal profilo disegnato, poi chiede:

- il **copriferro** fino al centro delle barre, e le barre **superiori**, **inferiori** e **laterali** (quante e di quale diametro) per una trave, oppure una **gabbia del pilastro** (barre lungo b e lungo h, di quale diametro, staffe a spirale) per un pilastro;
- le **legature**: bracci, diametro e passo;
- come si comporta l'elemento: trave, pilastro, oppure deciso dalle sue forze (un elemento verticale, oppure uno che porta più di 0.10 f′c Ag, è un pilastro).

Impostare sopra di esse f′c, la tensione di snervamento delle barre fy e quella delle legature fyt (al massimo 420 MPa conta per il taglio), K, e se il telaio è spostabile o non spostabile. Una sezione impostata come calcestruzzo viene analizzata come tale: E = 4700 √f′c, 2400 kg/m³, e per impostazione predefinita con **sezioni fessurate** (pilastri 0.70 Ig, travi 0.35 Ig; ACI 318-19 Tabella 6.6.3.1.1(a)). Scegliere {{ui:Sezioni lorde}} per disattivarle.

## Creare combinazioni e verificare

Assegnare ai casi di carico il loro tipo, poi {{ui:Crea combinazioni}}: ACI 318-19 adotta le combinazioni di resistenza di ASCE 7 (§5.3.1). Premere {{ui:Verifica calcestruzzo}} e ogni elemento riceve un utilizzo, colorato sul modello come le verifiche dell'acciaio: flessione e armatura minima (22.2, 9.6.1.2), deformazione di trazione controllata (9.3.3.1), taglio con le legature (22.5, 9.6.3), passo delle legature, e sforzo normale con momento per i pilastri (22.4, con il metodo di Bresler per la flessione biassiale). Un elemento in cui la sezione disegnata differisce dalla b × h digitata risulta *verificato in parte*, come un pilastro snello o una torsione sopra la soglia: questi non sono progettati.

Gli elementi oltre la loro capacità sono elencati in {{ui:Problemi}}; accettarne uno indicando una motivazione, oppure correggere la sezione.

## Solai e carichi sismici

Un solaio è un piano in cui il telaio è tenuto insieme da una soletta rigida (un **diaframma rigido**). Nel blocco {{ui:Carichi sismici}} premere {{ui:Trova i piani}}: prende i livelli in cui si incontrano due o più travi. Poi assegnare a ogni piano il suo **peso sismico**, digitato o letto: {{ui:Prendi i pesi dai casi}} somma i carichi verticali dei casi a cui si assegna un fattore (il caso permanente vale 1; aggiungere 0.25 su un caso di sovraccarico di deposito o di neve su un tetto piano, come richiede ASCE 7-22 12.7.2). Il carico verticale di ogni nodo va al piano a esso sovrastante o coincidente, quindi un pilastro tra due piani dà metà del suo peso a ciascuno.

Compilare i valori di progetto: SDS, SD1, S1, R, Ie, Cd, TL, il sistema strutturale (per il periodo) e la categoria di rischio. {{ui:Crea casi sismici}} calcola poi il periodo dall'altezza dell'edificio (12.8.2.1), il taglio alla base V = Cs W (12.8.1), lo distribuisce ai piani (12.8.3) e scrive quattro casi di carico, in X e in Y con la torsione accidentale del 5 % in ciascuna direzione (12.8.4.2). Le forze di piano e la verifica dello spostamento di piano (12.8.6, Tabella 12.12-1, lo spostamento Cd δxe / Ie rispetto a 0.020 hsx) compaiono dopo un'esecuzione; uno spostamento oltre il suo limite è anch'esso un problema. Premere di nuovo {{ui:Crea combinazioni}} per portare i casi sismici nelle combinazioni.

**Il periodo dall'analisi.** Il periodo approssimato Ta deriva dall'altezza dell'edificio. Quando si è eseguita l'analisi con i casi sismici, {{ui:Prendi il periodo dall'analisi}} legge quanto si è spostato ciascun piano sotto le forze e calcola il periodo con il metodo di Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), una volta per X e una per Y; i casi sismici vengono ricreati con esso. Il periodo usato non è mai superiore a Cu·Ta (ASCE 7-22 12.8.2), quindi un modello flessibile non può abbassare il taglio alla base al di sotto di quel valore. Ripetere la lettura del periodo dopo la seconda esecuzione: si stabilizza in uno o due passaggi. Deselezionare {{ui:Periodo dall'analisi}} per tornare a Ta.

**Pilastri snelli (ACI 318-19 6.6.4.5).** Per un telaio definito non spostabile, un pilastro la cui k·ℓu/r è superiore a 34 + 12·M1/M2 (al massimo 40) viene dimensionato per il momento amplificato Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² con (EI)eff = 0.4 Ec Ig / (1 + βdns), e il momento minimo Pu (15 + 0.03 h). βdns (0.6 all'inizio) è la quota dello sforzo normale fattorizzato che è di lunga durata: digitare un valore proprio. Un pilastro la cui Pu raggiunge 0.75 Pc non supera la propria verifica. Il rapporto elenca i valori di ogni pilastro snello. In un telaio **spostabile** un pilastro snello risulta ancora "verificato in parte": la sua amplificazione richiede un'analisi del secondo ordine, che non è ancora realizzata.

**Solette.** Quando il modello ha piastre, un blocco {{ui:Armatura solette}} prende i momenti delle piastre di ogni combinazione di resistenza e, con la regola di Wood–Armer (flessione e torsione insieme), calcola l'acciaio che ogni strato richiede per metro: inferiore e superiore, in x e in y. Si forniscono lo spessore, il copriferro e le barre; la tabella mostra il necessario rispetto al dato e il taglio a una direzione rispetto a φVc, e uno strato che non basta è un problema con la sua clausola. Freccia, punzonamento ai pilastri e barre di bordo alle aperture non sono coperti, e un momento su un appoggio converge lentamente con piastre a quattro nodi.

Ogni piano elencato diventa un diaframma rigido nell'analisi: le sue travi non portano sforzo assiale dal movimento del solaio. L'esportazione CraftScript non è prevista per un modello con solai.

## Il rapporto

{{ui:Rapporto (PDF)}} e {{ui:Rapporto (CSV)}} acquisiscono le tabelle del calcestruzzo (ipotesi, utilizzo per elemento, ogni clausola), i parametri sismici e il taglio alla base, le forze sui solai e la tabella degli spostamenti di piano.
