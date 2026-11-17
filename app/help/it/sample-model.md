---
title: Esplorare il telaio di esempio
summary: Aprire il telaio integrato a due campate e usarlo per capire cosa produce DetailCraft, dalle marche ai file NC.
keywords: esempio, dimostrazione, telaio, imparare, visita guidata, provare
from: 5c5944dd
---

Il telaio di esempio è un piccolo modello completo: ogni tipo di elemento che DetailCraft costruisce compare almeno una volta. È il modo più rapido per conoscere l'app e per provare un'esportazione prima di fidarsene.

## Aprirlo

1. Scegliere {{ui:Esempio}} nel gruppo {{ui:File}}.
2. Se il modello attuale ha modifiche non salvate, scegliere {{ui:Salva prima}} o {{ui:Scarta le modifiche}}.
3. La barra di stato dice "Telaio di esempio: 6 pilastri con piastre di base, 4 travi con piastre di testa, un controvento, 7 plinti con armatura."

L'esempio si apre come nuovo modello chiamato "Telaio di esempio". Non modifica nient'altro e non ha nulla da annullare.

## Cosa contiene

- **Griglie** 1, 2, 3 a 6000 mm e A, B a 7000 mm. **Livelli** Livello 1 a 0 e Livello 2 a 4000.
- **Sei pilastri**, W12x50, dal Livello 1 al Livello 2 a ogni intersezione, ciascuno su una piastra di base da 25 mm con quattro tirafondi.
- **Quattro travi**, W16x26, al Livello 2 lungo le linee di griglia A e B, con la sommità dell'acciaio sul livello, e una piastra di testa bullonata a filo a entrambe le estremità (otto in tutto).
- **Un controvento**, HSS4x4x1/4, da A/1 al Livello 1 fino ad A/2 al Livello 2.
- **Sei plinti isolati**, 2000 x 2000 x 600, uno sotto ogni pilastro, con una rete inferiore a uncini in entrambe le direzioni.
- **Un altro plinto** accanto al telaio, 2400 x 1800 x 600, con sei barre di ripresa a uncino che sporgono per una pila in calcestruzzo.

## Cose da provare

1. Fare clic su una trave. Leggere la sua {{ui:Marca}}, {{ui:Assieme}}, {{ui:Lunghezza di taglio}} e {{ui:Arretramento}}: la lunghezza di taglio è più corta dell'interasse di griglia di 6000 mm, perché ogni piastra di testa taglia la trave indietro di metà della profondità del pilastro più lo spessore della piastra.
2. Fare clic su un pilastro. Sotto {{ui:Fori}} sono elencati i fori che le piastre di testa hanno fatto nelle sue ali ("8 fori da collegamenti"; i pilastri centrali ne hanno 16, uno per ogni ala).
3. Nell'elenco {{ui:Marche dei pezzi}} a sinistra, notare che tutte e quattro le travi condividono una marca: sono lo stesso pezzo di acciaio. Anche i pilastri d'angolo condividono una marca, anche se i loro fori sono rivolti in direzioni opposte, perché un pilastro girato di testa è lo stesso pezzo. I pilastri centrali, con fori in entrambe le ali, ottengono un'altra marca.
4. Fare clic su una piastra di testa (o su uno dei suoi bulloni). Il pannello {{ui:Proprietà}} mostra le impostazioni di piastra, bulloni e saldatura, i bulloni che crea (con la loro lunghezza calcolata dalla lunghezza di serraggio) e gli eventuali avvisi di distanza dal bordo.
5. Aprire la scheda {{ui:Distinta dei materiali}}. Parti, assiemi, bulloni e tirafondi sono elencati con i pesi. Si dovrebbero vedere sei marche: c1 (i due pilastri centrali) e c2 (i quattro pilastri d'angolo), entrambi W12x50 a 3975 mm; b1, quattro travi W16x26 a 5650 mm; br1, il controvento; p1, otto piastre di testa PL20x180; e p2, sei piastre di base PL25x400. I fissaggi sono 64 bulloni 20 x 70 A325 e 24 tirafondi 20 x 575.
6. Aprire la scheda {{ui:Distinta di piegatura}}. I sei plinti identici condividono le posizioni delle barre; il plinto della pila aggiunge le sue.
7. Fare clic sul controvento e guardare il gruppo {{ui:Uscita}}: {{ui:Disegno di officina}} è disattivato, perché i disegni di officina coprono finora solo profili a I e piastre.
8. Scegliere {{ui:File NC}}. Lo zip contiene un file per ogni marca di profilo a I e di piastra; la barra di stato elenca la marca del controvento come non scritta.
9. Scegliere {{ui:IFC}} e aprire il file in un qualsiasi visualizzatore IFC, per verificare come lo leggono gli altri programmi.

## Usarlo come punto di partenza

L'esempio è un modello normale. Modificarlo, poi rinominarlo nel campo {{ui:Nome}} e salvarlo con il nuovo nome con {{key:Mod+S}}.
