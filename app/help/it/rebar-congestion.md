---
title: Mappa di congestione delle armature
summary: Verificare quanto è stretta l'armatura lasciata in ogni plinto per il passaggio del calcestruzzo, con l'aggregato e il vibratore indicati.
keywords: armatura, congestione, interasse, distanza libera, posa del calcestruzzo, aggregato, vibratore, ferri di ripresa, uncini, plinto, platea
from: 40d029e6
---

La scheda {{ui:Congestione}} disegna una mappa di calore di ogni plinto visto dall'alto. L'azzurro chiaro indica spazio libero; giallo e arancione indicano zone che si stringono; il rosso indica una zona più stretta di quanto richiedano le barre. Le celle scure sono le barre stesse.

## Cosa misura la mappa

Il calcestruzzo scende attraverso l'acciaio strato dopo strato e può spostarsi lateralmente tra gli strati. Quindi in ogni punto la mappa prende lo spazio libero più stretto in un qualsiasi strato: tra le barre della rete inferiore, tra lo strato successivo di barre e tra i rami degli uncini dei ferri di ripresa in alto. I ferri di ripresa attraversano tutti questi strati.

## Cosa conta come stretto

Il valore richiesto è il maggiore tra 25 mm e il diametro della barra (ACI 318-19 25.2.1), oppure, per le barre BS 4449, il maggiore tra il diametro della barra e 20 mm (EN 1992-1-1 8.2). Due caselle lo aumentano:

- {{ui:Aggregato più grande}}: il valore richiesto diventa 4/3 della dimensione dell'aggregato (ACI) oppure l'aggregato più 5 mm (EN).
- {{ui:Testa del vibratore}}: il valore richiesto è almeno il diametro della testa.

Entrambi partono da 0, che significa non noto: DetailCraft non conosce la miscela né la pompa.

## Problemi

Un plinto con un punto più stretto del necessario è elencato nel pannello {{ui:Problemi}} con l'apertura trovata e l'apertura richiesta. {{ui:Seleziona}} accanto a una mappa seleziona il plinto.

La mappa non considera le legature, i manicotti, i condotti né le barre del pilastro.
