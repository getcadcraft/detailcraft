---
title: Cosa non è ancora implementato
summary: Ciò che questa prima versione di DetailCraft non può ancora fare e cosa fare oggi.
keywords: limiti, limitazioni, mancanti, tabella di marcia, non supportato, in arrivo, pianificato, soluzione alternativa, da fare
from: ea411885
---

DetailCraft è una versione iniziale. Questa pagina elenca ciò che non fa ancora, così da poterlo pianificare. Nulla di quanto qui indicato è una promessa di data.

## Modellazione

| Non ancora | Oggi, invece |
|---|---|
| Trascinare un estremo di un'asta (allungandola) | Modificare {{ui:Inizio}} o {{ui:Fine}} sotto {{ui:Estremità (x, y, z mm)}} nel pannello {{ui:Proprietà}} |
| Un filtro di selezione (solo travi, un solo profilo) | Trascinare una finestra, poi {{key:Shift}}+clic per rimuovere parti |
| Creare una serie di una selezione; ruotare attorno a un asse inclinato; specchiare in un piano inclinato | Copiare e incollare con uno scostamento, oppure {{ui:Duplica}}; ruotare e specchiare funzionano in pianta ([Selezionare per finestra, spostare, ruotare, specchiare, modificare più elementi](topic:select-and-change)) |
| Punti fuori dalla griglia durante il clic | Posizionare sulla griglia, poi digitare le coordinate finali |
| Prospetti lungo le griglie numerate; viste salvate; piani di lavoro | Usare {{ui:3D}}, oppure {{ui:Aggiungi per griglia}} |
| Fori disegnati come tagli reali nella vista 3D | I fori appaiono come tappi scuri; sono reali in ogni esportazione |
| Scassi arrotondati o angolati, altri tagli e accessori | Scassi squadrati solo su profilati a I |
| Fori da aggiungere ad angolari e tubi tondi | I fori degli angolari provengono solo dai [fazzoletti](topic:brace-gussets) |
| Inserimento in unità imperiali | Digitare millimetri (25.4 per pollice) |
| Modificare o rimuovere un profilo personalizzato | Aggiungere un profilo corretto con un nuovo nome |

## Scale

| Non ancora | Oggi, invece |
|---|---|
| Corrimano, pianerottoli, fermapiede, pedate grigliate, scale a chiocciola e a due rampe | Solo rampe rettilinee; vedi [Scale](topic:stairs) |
| Tagli di estremità dei cosciali contro i solai | Cosciali a taglio squadrato; tagliarli nel software dell'officina |

## Connessioni

DetailCraft costruisce sei connessioni: un [fazzoletto di controvento](topic:brace-gussets) (vedi [Fazzoletti di controvento](topic:brace-gussets)); una giunzione bullonata tra due pezzi di uno stesso profilato a I (vedi [Giunzioni](topic:splices)); un giunto a mitra tra due profilati a I che si incontrano con un angolo, solo tagliato o con piastre di testa bullonate (vedi [Giunti a mitra](topic:mitres)); una piastra di testa bullonata a filo o prolungata, da una trave a I orizzontale con anima verticale fino a un'ala o un'anima di pilastro a I; una piastra di collegamento a taglio da una trave (squadrata, obliqua o inclinata) fino a un'ala o un'anima del pilastro; e una piastra di base di pilastro con quattro tirafondi.

| Non ancora | Oggi, invece |
|---|---|
| Piastre di testa oblique o inclinate | Usare le [piastre di collegamento a taglio](topic:shear-tabs), che accettano travi oblique e inclinate |
| Cantonali di collegamento; piastre di riempimento delle giunzioni e giunzioni tra misure diverse; fazzoletti d'angolo saldati a trave e pilastro, fazzoletti smussati | Dettagliarli in un altro software, oppure aggiungere piastre e fori a mano come pezzi sciolti; vedi [Giunzioni](topic:splices), [Fazzoletti di controvento](topic:brace-gussets) |
| Irrigidimenti di base smussati o rastremati; fori per la malta; la tasca di fondazione per il dente di taglio | Irrigidimenti di base rettangolari; vedi [Piastre di base](topic:base-plates) |
| Mensole di rinforzo; giunti a mitra con saldatura di testa; irrigidimenti allineati alle ali dell'altro elemento | Un [giunto a mitra](topic:mitres) con piastre di testa e irrigidimenti d'anima, oppure un semplice taglio a mitra; aggiungere le altre piastre a mano come pezzi sciolti |
| Verifiche di progetto delle connessioni (resistenza) | Verificare le connessioni con i calcoli del progettista strutturale; DetailCraft segnala solo distanza dal bordo e interasse |
| Fori asolati | Solo fori tondi |

## Analisi

| Non ancora | Oggi, invece |
|---|---|
| Verifiche di progetto oltre i profilati a I in acciaio: tubi, angolari, profili a U, forme saldate, elementi snelli o di classe 4, torsione, connessioni; cemento armato: snellezza per spostamento laterale, torsione, dettagli sismici, solette e pareti | La scheda {{ui:Analisi}} verifica i profilati a I in acciaio secondo AISC 360 o EN 1993-1-1 ([Verificare le membrature in acciaio secondo una norma di progetto](topic:design-checks)); il resto viene lasciato segnato come "non verificato"; tutto va rivisto da un ingegnere |
| Analisi di instabilità, vibrazioni | Il secondo ordine è solo P-Delta (elastico); nessuna analisi di instabilità (modale, spettro di risposta, storia temporale e pushover sono nella scheda Analisi) |
| Verifiche di progetto revisionate da un ingegnere | Sono un aiuto fino ad allora: verificare due o tre membrature a mano o con il software del progettista prima di farvi affidamento |
| Carichi di solaio, vento e neve calcolati dalle aree | Inserire i carichi sulle membrature a mano, in kN/m o kN |
| Scostamenti delle membrature, giunti eccentrici, controventi solo a trazione, piastre e plinti nel telaio | Le membrature sono analizzate sulle loro linee di lavoro; i controventi sopportano trazione e compressione |

## Armature

| Non ancora | Oggi, invece |
|---|---|
| Pilastri tondi, spirali, travi inclinate o curve, solette diverse dal rettangolo, pareti non rettilinee | Travi, pilastri, solette e pareti rettangolari ([Dettagliare il cemento armato](topic:reinforced-concrete)) |
| Barre piegate in una sovrapposizione, sovrapposizioni sfalsate, sovrapposizioni posizionate a scelta | Sovrapposizioni a passo uguale, ogni barra sovrapposta nella stessa sezione (ACI Classe B, EN α6 = 1.5) |
| Barre d'angolo alle aperture, armatura a punzonamento, dettagli sismici (ACI 318-19 capitolo 18) | Rompitratta su ogni lato di un'apertura; verificare il resto a mano |
| Lettura dei file propri di un programma di calcolo strutturale | Esportare l'IFC dal programma: i suoi IfcReinforcingBar entrano come barre ([Barre da un file IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Codici di forma oltre dritta, una piegatura e una U; tipi ACI 315 per barre dritte e con un uncino | Le tre forme sono stampate come BS 8666 00, 11, 21 o ACI Tipo 2; vedi [Riferimento armature](topic:rebar-reference) |
| Barre metriche diverse da BS 4449 H8–H40 (ad es. CSA 10M–35M) | Nomi ASTM soft-metric #10–#36, oppure barre BS |

## Disegni ed esportazioni

| Non ancora | Oggi, invece |
|---|---|
| Tavole in verticale, A0 e tavole di formato personalizzato; viste d'insieme su griglie oblique | Tavole da A4 ad A1 in orizzontale e ANSI da B a D ([Disegni d'insieme e di montaggio](topic:drawings)); scalare il PDF per stampare su un altro formato |
| Simboli di saldatura su disegni di officina di un singolo pezzo; simboli diversi dai cordoni d'angolo | I disegni di montaggio riportano i simboli di cordone d'angolo; il disegno di officina riporta la saldatura come testo |
| Modificare un disegno nell'applicazione | Modificare il modello e rifare il disegno; annotare il PDF in un programma PDF come MarkupCraft |
| Disegni in DWG con oggetti di quotatura, oppure il modello in scala reale nello spazio modello con le tavole come layout | Ogni tavola è un DWG o DXF a grandezza reale del foglio, con quote come linee e cifre ([Disegni d'insieme e di montaggio](topic:drawings#download)) |
| Fori NC nei tubi tondi, scassi su angolari e tubi tondi nei file NC | Non scritti; vedi [Campi del file NC](topic:nc1-fields) |
| Smussi, marcature e contorni interni nei file NC | Nessuno oggi |
| Fori dei bulloni, bulloni, saldature e plinti nell'esportazione USD | Sono nelle esportazioni IFC, NC e distinta base; vedi [Esportare il modello in acciaio come USD](topic:usd) |
| Importare da un file IFC connessioni, plinti, fori asolati o rettangolari e fori nei tubi tondi | {{ui:Importa IFC}} importa travi, pilastri, membrature, piastre, griglie, livelli, fori tondi, scassi, bulloni e barre d'armatura, e il suo rapporto elenca ciò che ha lasciato fuori |
| Impaginazioni personalizzate dei report | I tre file CSV |

## Pannelli

| Non ancora | Oggi, invece |
|---|---|
| Spostare i report in basso ({{ui:Problemi}}, {{ui:Distinta dei materiali}}, {{ui:Distinta di piegatura}}) | Solo i pannelli {{ui:Modello}} e {{ui:Proprietà}} si spostano. Vedi [Disporre i pannelli](common:arrange-panels) |

## Lavoro di gruppo e salvataggio

| Non ancora | Oggi, invece |
|---|---|
| Salvataggio in cloud e sincronizzazione tra computer | Salvare i file `.detailcraft.json` e condividerli come qualsiasi altro file. Il salvataggio in cloud non è ancora disponibile |
| Cursori degli altri e indicazioni "sta modificando" in una sessione Live TeamWork; griglie, livelli e fasi uniti elemento per elemento | Le modifiche si uniscono comunque (griglie, livelli e fasi passano per intero, vince la modifica successiva); vedi [Dettagliare una struttura insieme, in tempo reale](topic:work-live) |
| Link di invito a una sessione Live TeamWork via internet | Entrare con un codice breve sulla stessa rete |

## Piattaforme

- DetailCraft è pensato per lo schermo di un desktop, di un laptop o di un tablet. Funziona anche su telefono: il modello conserva lo schermo e i pannelli, e pannelli e report si aprono come riquadri da una barra in basso, ma c'è poco spazio per i pannelli.
- L'uso offline richiede prima di salvare DetailCraft per l'uso offline, con {{ui:Salva per l'uso offline}} nella barra dell'applicazione; quando mostra {{ui:Pronto per l'uso offline}}, tutto in questa versione funziona senza connessione. Vedi [Lavorare offline](common:offline).

Se una di queste lacune blocca il lavoro, è possibile segnalarlo tramite la [pagina di supporto](https://getcadcraft.com/support): aiuta a decidere cosa sviluppare per primo.
