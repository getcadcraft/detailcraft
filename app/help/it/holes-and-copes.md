---
title: Aggiungi fori e scassi
summary: Digita i fori in anime, ali e piastre, e scassa le ali a un'estremità di una trave, misurata dall'estremità tagliata del pezzo.
keywords: foro, fori, foro per bullone, scasso, intaglio, taglio, scassatura, forare, punzonare, foro nell'anima, foro nell'ala
from: 33d12398
---

I fori e gli scassi si digitano per posizione. Appartengono all'asta e si spostano con essa.

I fori creati dalle unioni (piastre di testa, piastre di base) vengono aggiunti per te; non si digitano. Sono elencati come "… fori dalle unioni (modificare l'unione)".

## Da dove si misurano le posizioni

- **x** corre lungo il pezzo dal suo **inizio tagliato**: l'estremità iniziale dopo che un'unione l'ha tagliata. Quindi x = 0 è la vera estremità dell'acciaio, non il punto di griglia.
- **y** è misurata attraverso la faccia dal centro della sezione:
   - sull'**anima**: verso l'alto (positivo) o verso il basso dalla metà altezza;
   - su un'**ala** o una **piastra**: attraverso la larghezza, dalla linea centrale.
- L'inizio dell'asta è il primo punto su cui si è fatto clic durante il posizionamento. Le righe {{ui:Estremità (x, y, z mm)}} mostrano quale estremità è quale.

## Aggiungere un foro

1. Selezionare l'asta.
2. Nel riquadro {{ui:Fori}} del pannello {{ui:Proprietà}}, scegliere la {{ui:Faccia}}: {{ui:Anima}}, {{ui:Ala superiore}} o {{ui:Ala inferiore}} (per un profilo a I, a canale o un tubo rettangolare), oppure {{ui:Faccia della piastra}} (per una piastra).
3. Digitare {{ui:x lungo (mm)}}, {{ui:y in larghezza (mm)}} e {{ui:Diametro (mm)}}. Il modulo parte da x 100, y 0, diametro 22.
4. Scegliere {{ui:Aggiungi foro}}.

La barra di stato indica "Foro aggiunto. x dall'inizio tagliato; y dal centro della sezione (anima: verso l'alto, ala o piastra: in larghezza)." Il foro compare nell'elenco e, nella vista, come un tappo scuro attraverso la faccia.

Per rimuovere un foro, scegliere la × accanto ad esso nell'elenco.

Angolari e tubi tondi non accettano ancora fori: il loro riquadro {{ui:Fori}} lo indica.

:::note
Nella vista 3D i fori sono disegnati come tappi scuri, non tagliati attraverso l'acciaio. Sono fori reali nei file NC, nei disegni di officina e nell'esportazione IFC.
:::

Un foro la cui x è oltre una delle estremità del pezzo compare nella scheda {{ui:Problemi}} come "un foro è fuori dall'estremità del pezzo".

## Aggiungere uno scasso

Gli scassi sono per profili a I: tagliano via l'ala superiore o inferiore (e quella profondità di anima) a un'estremità, così la trave libera un'altra asta.

1. Selezionare un'asta a profilo a I.
2. Nel riquadro {{ui:Scassi}}, scegliere {{ui:Fine}} ({{ui:Inizio}} o {{ui:Fine}}) e {{ui:Lato}} ({{ui:Sopra}} o {{ui:Sotto}}).
3. Digitare {{ui:Lunghezza (mm)}} (lungo la trave da quell'estremità) e {{ui:Profondità (mm)}} (verso il basso dall'alto, o verso l'alto dal basso). Il modulo parte da 100 x 40.
4. Scegliere {{ui:Aggiungi scasso}}.

La vista mostra lo scasso ritagliato nell'acciaio. L'elenco riporta, per esempio, "Sopra all'inizio: 100 x 40". Rimuoverlo con la sua ×.

Gli scassi sono squadrati: non c'è ancora un raggio nell'angolo interno.

## Come fori e scassi influiscono sulle marche

Due pezzi ricevono la stessa marca solo se i loro fori e scassi coincidono entro 1 mm, tenendo conto del pezzo ribaltato. Aggiungere un foro a una trave di un gruppo le assegna una nuova marca. Vedi [Regole delle marche](topic:mark-rules).
