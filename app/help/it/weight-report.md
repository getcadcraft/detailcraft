---
title: Rapporto di materiale e peso per fase
summary: Lunghezze di taglio, quantità, pesi e superfici verniciate per ciascuna fase, con i relativi bulloni e ferri d'armatura, in tabella, CSV o PDF.
keywords: rapporto, peso, tonnellaggio, kg, vernice, superficie verniciata, area di superficie, rivestimento, lunghezza di taglio, distinta materiali, fase, distinta base, csv, pdf
from: 337d6d92
---

Nel gruppo {{ui:Uscita}} aprire {{ui:Altro}} e scegliere {{ui:Rapporto dei pesi per fase}}, oppure aprire la scheda {{ui:Per fase}} sotto la vista. Mostra:

- **Riepilogo per fase**: per ogni fase, il numero di pezzi, il peso dell'acciaio, la superficie verniciata, i bulloni e le barre di ancoraggio, e i ferri d'armatura; poi i totali.
- **Una tabella per fase**: ogni marchio di pezzo con tipo, profilo, materiale, lunghezza di taglio, quantità, peso unitario, peso e superficie verniciata; poi i suoi bulloni e le barre di ancoraggio.

{{ui:Scarica CSV}} salva le stesse tabelle in un unico file CSV (`<nome> rapporto pesi.csv`). {{ui:Scarica PDF}} crea un rapporto nel formato del foglio impostato in [Impostazioni di DetailCraft](topic:settings#drawings), con il riepilogo per primo, ogni fase dopo, le tabelle lunghe continuate alla pagina successiva e ogni pagina numerata.

## Come si calcolano i valori

- **I pesi sono lordi**, come nella distinta base: peso del profilo al metro per la lunghezza di taglio. Fori e scassi non vengono sottratti.
- **La superficie verniciata** è l'esterno della sezione lungo la lunghezza di taglio: per una sezione a I, ogni faccia di ali e anima; per una piastra, entrambe le facce e i bordi; per un tubo solo l'esterno. Le estremità e i fori non sono contati.
- **I ferri d'armatura** sono il peso delle barre nelle fondazioni della fase, dalla [distinta di piegatura](topic:footings-and-rebar).
- Le piastre e i bulloni di un collegamento sono contati nella fase della sua asta principale. Vedi [Fasi](topic:phases).

Con i [marchi per fase](topic:phases#marks-per-phase) attivi, ogni fase ha i propri marchi (1-b1, 2-b1). Con l'opzione disattivata, un marchio può comparire in più fasi: ogni fase elenca i pezzi che contiene.
