---
title: Posizionare piastre e aggiungere profili personalizzati
summary: Posizionare piastre sciolte per spessore e larghezza, e definire profili personalizzati a I, a U, angolari, tubi o piatti.
keywords: piastra, piatto, profilo personalizzato, profilo utente, parametrico, sezione, forma, sezione trasversale, pl
from: c24c3b51
---

## Posizionare una piastra

Una piastra si posiziona come una trave: va tra due intersezioni, con la larghezza in orizzontale e lo spessore verso l'alto.

1. Scegliere {{ui:Piastra}} nel gruppo {{ui:Posiziona}}, oppure premere {{key:P}}.
2. Nel pannello {{ui:Proprietà}}, impostare {{ui:Spessore (mm)}} e {{ui:Larghezza (mm)}}. Il valore predefinito è 20 x 200 in A36.
3. Impostare {{ui:Materiale}} e {{ui:Rotazione (°)}} se necessario. Una rotazione di 90 la mette di costa.
4. Cliccare due intersezioni, oppure usare il modulo {{ui:Aggiungi per griglia}}.

Il nome del profilo della piastra è scritto `PL<thickness>x<width>`, per esempio PL20x200. La sua lunghezza è la distanza tra i due punti.

Per ridimensionare una piastra posizionata, selezionarla e modificare {{ui:Spessore (mm)}} o {{ui:Larghezza (mm)}}.

Le piastre posizionate sono parti a sé (marca p, assieme P). Le piastre di testa e di base create dalle connessioni sono piastre anch'esse, ma si modificano tramite la loro connessione; vedi [Piastre di testa](topic:end-plates).

## Aggiungere un profilo personalizzato

Quando la sezione necessaria non è nel catalogo, crearla dalle sue dimensioni. Un profilo personalizzato appartiene al modello e viene salvato con esso. Per usarlo in ogni nuovo modello, tenerlo in {{ui:I miei profili}}, descritto più sotto in "Mantenere un profilo per i nuovi modelli".

1. Nel pannello {{ui:Modello}} a sinistra, aprire {{ui:Profilo personalizzato}}.
2. Digitare un {{ui:Nome}}, per esempio `W8x18-custom` o `RHS 120x80x5`. Non può essere un nome di catalogo né avere l'aspetto di un nome di piastra.
3. Scegliere una {{ui:Forma}}: {{ui:Profilo a I}}, {{ui:Profilo a U}}, {{ui:Angolare a lati uguali}}, {{ui:Tubo rettangolare}}, {{ui:Tubo tondo}} o {{ui:Piatto}}.
4. Compilare le dimensioni che compaiono, tutte in millimetri:

| Forma | Dimensioni |
|---|---|
| Profilo a I | Altezza d, larghezza dell'ala bf, anima tw, ala tf, raggio di raccordo r (può essere 0) |
| Profilo a U | Altezza d, larghezza dell'ala bf, anima tw, ala tf (angoli squadrati) |
| Angolare a lati uguali | Larghezza b (di ciascun lato), spessore t |
| Tubo rettangolare | Altezza h, larghezza b, spessore t (raggio esterno dello spigolo 2t) |
| Tubo tondo | Diametro D, spessore t |
| Piatto | Larghezza b, spessore t |

5. Lasciare {{ui:Mantieni in I miei profili}} spuntato per averlo in ogni nuovo modello (vedi sotto), oppure deselezionarlo per tenerlo solo in questo modello.
6. Scegliere {{ui:Aggiungi profilo}}.

La barra di stato indica "Profilo "…" aggiunto; compare in ogni elenco di profili sotto Personalizzato." Compare nell'elenco sotto il modulo e alla fine di ogni elenco {{ui:Profilo}}.

DetailCraft verifica che la forma sia possibile. Compaiono messaggi come "L'anima e le ali non entrano nell'altezza e nella larghezza.", "Il raggio di raccordo è troppo grande per l'ala." oppure "La parete è troppo spessa." Correggere i numeri e scegliere di nuovo {{ui:Aggiungi profilo}}.

### Cosa ottengono i profili personalizzati

- Massa per metro dall'area × 7850 kg/m³ (i profili di catalogo usano invece il peso pubblicato).
- I profili a I personalizzati ricevono fori, scassi, piastre di testa, file NC e disegni di officina come i profili a I di catalogo.
- I piatti personalizzati si comportano come piastre.
- I profili a U e i tubi personalizzati ricevono fori; gli angolari e i tubi tondi non ancora.
- Non è possibile modificare o rimuovere un profilo personalizzato da un modello una volta aggiunto (usare subito {{key:Mod+Z}} se si è sbagliato). Assegnare un nuovo nome a quello corretto.

## Mantenere un profilo per i nuovi modelli

{{ui:I miei profili}}, sotto il modulo, è l'elenco dei propri profili personalizzati. È conservato in questo browser, su questo computer, non in un file di modello e non nell'account.

- Un profilo aggiunto con {{ui:Mantieni in I miei profili}} spuntato entra nell'elenco. Ogni nuovo modello, compreso quello che DetailCraft apre all'avvio, inizia con tutti questi profili nei propri elenchi.
- Un profilo già presente in un modello ma non nell'elenco ha accanto il pulsante {{ui:Mantieni}}.
- In un modello che non ha uno dei propri profili (per esempio un file più vecchio), scegliere {{ui:Usa qui}} per aggiungerlo.
- {{ui:Rimuovi}} toglie un profilo dall'elenco. I modelli che lo usano già conservano la propria copia.
- Un modello aperto mantiene i profili salvati nel suo file. Aprire un file non modifica mai l'elenco.
- Un nome già presente nell'elenco con dimensioni diverse viene rifiutato: assegnare un altro nome al nuovo.
- Cancellare i dati del sito nel browser, oppure usare un altro browser o computer, inizia con un elenco vuoto. Una finestra in incognito non può conservarlo; l'applicazione lo segnala.
