---
title: Fazzoletti dei controventi
summary: Collega l'estremità di un controvento a un pilastro o a una trave con un fazzoletto: angolari e piatti bullonati, tubi inseriti a feritoia e saldati.
keywords: fazzoletto, piastra di fazzoletto, controvento, controventatura, controventatura verticale, controvento ad angolare, piatto, nastro, controvento HSS, piastra a coltello, tubo a feritoia, collegamento
from: 22f6598d
---

Un fazzoletto di controvento è una piastra saldata in officina al pilastro (o alla trave) su cui appoggia il controvento, nel piano del controvento. DetailCraft taglia il controvento all'estremità per liberare tutto ciò che si trova nel nodo, posiziona e dimensiona il fazzoletto e unisce il controvento a esso: un **angolare** o un **piatto** con una fila di bulloni, oppure un **tubo** (quadrato, rettangolare o tondo HSS) inserito sul fazzoletto a feritoia e saldato.

## Dove funziona

- L'estremità del controvento giace sulla linea di un pilastro o di una trave (entro 1 mm), e il controvento non è quasi parallelo a quella linea. Il pilastro è il supporto quando c'è; altrimenti la trave.
- Il fazzoletto giace nel piano del controvento e nella linea del supporto. Un **angolare** deve avere un'ala in quel piano, un **piatto** la sua faccia: ruotare il controvento (la sua {{ui:Rotation (°)}}) finché ciò non avviene. Con le ali dell'angolare a 45° rispetto al piano, DetailCraft lo segnala e non crea nulla.
- I profili a I e a C usati come controventi non vengono collegati.

## Aggiungi fazzoletti

1. Selezionare uno o più controventi.
2. Scegliere {{ui:Gusset}} nel menu {{ui:More}} del gruppo {{ui:Connect}}.
3. Ogni estremità dei controventi selezionati che giunge a un pilastro o a una trave e che non ha ancora un fazzoletto ne riceve uno.

Selezionare un fazzoletto (fare clic sulla piastra) per modificarne le impostazioni. {{ui:Apply to similar (n)}} lo copia su ogni estremità libera di controvento con gli stessi profili di controvento e di supporto.

## Cosa calcola DetailCraft

- **Taglio all'indietro.** Il controvento viene accorciato a quell'estremità fino a liberare i suoi angoli, di {{ui:Brace clearance}} (25), da ogni elemento nel nodo (accanto ad esso, oppure oltre la sua estremità quando l'elemento termina lì) e da una piastra di base sotto il pilastro.
- **Bulloni (angolari, piatti).** {{ui:Bolts}} (3) su una fila lungo il controvento, il primo a {{ui:Bolt end distance}} (40) dall'estremità tagliata, con {{ui:Bolt pitch}} (75). Sugli angolari passano attraverso l'ala nel piano del fazzoletto, a {{ui:Bolt gauge}} dal tallone (0 = a metà dell'ala); sui piatti passano sulla linea centrale (o spostati di un gauge). Serraggio del bullone = ala o piatto + fazzoletto.
- **Il fazzoletto.** Un rettangolo: dalla faccia del supporto fino oltre l'ultimo bullone, della distanza di estremità, e lungo il supporto per quanto richiedono i bulloni. Appoggia sul dorso dell'ala dell'angolare (o sulla faccia del piatto). Per un tubo attraversa il centro del tubo, con {{ui:Tube lap on the gusset}} (200) del tubo, con spazio per le saldature.
- **Giunzioni.** Alla base di un pilastro il fazzoletto viene prolungato fino alla piastra di base. Dove una trave attraversa il nodo (un controvento che sale verso un angolo trave-pilastro), il fazzoletto resta sotto o sopra la trave. Se questo lascia i bulloni o la sovrapposizione senza la loro distanza di estremità, DetailCraft avvisa.
- **Saldature.** Il fazzoletto al supporto, su entrambi i lati. Un tubo al fazzoletto, con quattro linee lungo la sovrapposizione.

## Da sapere

- Il fazzoletto appartiene al gruppo del supporto (saldato in officina). Il controvento viene consegnato con i fori già eseguiti e va al proprio file NC.
- La feritoia di un tubo non viene tagliata nel modello; il [controllo interferenze](topic:clash-check) lascia in pace il controvento e il suo fazzoletto.
- Il fazzoletto non viene saldato a una trave che tocca. I fazzoletti d'angolo saldati sia alla trave sia al pilastro, gli angoli smussati e la disposizione del punto di lavoro di un collegamento con Uniform Force Method non sono ancora implementati.
- DetailCraft non dimensiona il fazzoletto né i bulloni (nessun controllo di resistenza); gli avvisi riguardano interassi e adattamento.
