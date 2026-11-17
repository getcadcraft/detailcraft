---
title: Il cubo di navigazione
summary: Fare clic su una faccia, uno spigolo o un vertice del cubo nell'angolo della vista per guardare da lì, trascinarlo per orbitare, ruotare l'anello della bussola, muoversi attorno a una vista frontale e tornare alla vista iniziale.
keywords: cubo di navigazione, viewcube, cubo, bussola, nord, vista iniziale, viste standard, alto, anteriore, destra, iso, vertice, spigolo, orbita, ruota vista, icona degli assi, indicatore d'angolo, navigazione
from: 3666ea8a
---

Il cubo di navigazione si trova in alto a destra della vista 3D, sotto la barra delle viste (solo in {{ui:3D}}: {{ui:Pianta}} e {{ui:Prospetto}} guardano già dritto il modello). Ruota con la vista, quindi mostra sempre la direzione in cui si guarda: {{ui:Sopra}} è verso l'alto, {{ui:Anteriore}} guarda a sud (il lato da cui si vedono le griglie con lettere in {{ui:Prospetto}}), {{ui:Destra}} guarda a est, lungo le griglie numerate. Resta trasparente finché non lo si punta.

## Guardare da un lato, uno spigolo o un vertice

1. Puntare il cubo. La parte sotto il puntatore si illumina: il centro di una faccia, uno spigolo (si illumina su entrambe le facce che lo condividono) oppure un vertice (su tutte e tre le facce).
2. Fare clic. La vista ruota per guardare da lì, mantenendo lo stesso centro e lo stesso zoom.

Ci sono 26 punti su cui fare clic: 6 facce ({{ui:Sopra}}, {{ui:Sotto}}, {{ui:Anteriore}}, {{ui:Posteriore}}, {{ui:Sinistra}}, {{ui:Destra}}), 12 spigoli e 8 vertici. Un vertice dà la classica vista a tre quarti; uno spigolo guarda a metà tra due facce.

Una vista frontale del cubo è una vista 3D, non {{ui:Pianta}} o {{ui:Prospetto}}: niente viene tagliato e il modello si può ancora ruotare.

## Orbitare trascinando il cubo

Trascinare il cubo per ruotare la vista, come l'orbita nella vista stessa. Un trascinamento non viene mai preso per un clic, quindi si può afferrare il cubo in qualsiasi punto.

## L'anello della bussola

L'anello sotto il cubo riporta N, E, S e O.

- **Trascinare l'anello** per ruotare il modello attorno all'asse verticale, come su un piatto girevole. L'anello segue il puntatore.
- **Fare clic su una lettera** per guardare da quel lato, mantenendo quanto si guarda in basso. In una vista dall'alto, la lettera cliccata va in fondo allo schermo.

## Viste frontali: frecce

Quando si guarda dritto una faccia, appaiono piccole frecce attorno al cubo:

- I quattro **triangoli** portano in primo piano la faccia su quel lato: il triangolo sopra il cubo indica la faccia che era in alto, e così via.
- Le due **frecce curve** in alto a destra ruotano l'immagine di un quarto di giro in senso orario o antiorario, senza cambiare la faccia guardata. Servono a ruotare una pianta in modo che una parete lunga attraversi lo schermo.

## Vista iniziale

Il pulsante a forma di casa in alto a sinistra del cubo torna alla vista iniziale a tre quarti e adatta tutto il modello, come il pulsante di adattamento. {{key:Home}} fa lo stesso quando il cubo ha il focus della tastiera.

## Con la tastiera

{{key:Tab}} per arrivare al cubo, poi:

| Tasto | Fa |
|---|---|
| {{key:left}} / {{key:right}} | sceglie un lato, uno spigolo o un vertice attorno al cubo, a passi di un ottavo di giro (i lettori di schermo dicono quale) |
| {{key:up}} / {{key:down}} | sceglie uno più alto o più basso, fino a {{ui:Sopra}} o giù fino a {{ui:Sotto}} |
| {{key:Enter}} o {{key:Space}} | guarda da quello scelto |
| {{key:Shift+left}} / {{key:Shift+right}} | ruota la vista di un quarto di giro attorno all'asse verticale |
| {{key:Home}} | la vista iniziale |
| {{key:Esc}} | esce dal cubo |

I tasti premuti sul cubo restano con il cubo: non avviano strumenti di DetailCraft.

## Icona degli assi oppure niente

Aprire {{ui:Impostazioni}} ({{key:Mod+,}}), la scheda {{ui:DetailCraft}}, e impostare **Indicatore d'angolo** su {{ui:ViewCube}} (il valore iniziale), {{ui:Icona degli assi}} (un piccolo marcatore X, Y, Z in basso a sinistra: X rosso, Y verde, Z blu) oppure {{ui:Nessuno}}. Questo browser ricorda la scelta. Vedi [Impostazioni di DetailCraft](topic:settings#corner-indicator).
