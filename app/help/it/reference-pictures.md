---
title: Incollare un'area copiata come immagine di riferimento
summary: Copiare parte di una tavola PDF in MarkupCraft e incollarla in DetailCraft alla sua dimensione reale, appoggiata su un piano livellato sotto la carpenteria, per modellarvi sopra.
keywords: immagine, immagine di riferimento, sottofondo, sfondo, copia area, markupcraft, pdf, ricalco, dimensione reale, scala, opacità, sovrapposizione
from: 0c48445f
---

Lo strumento Copia area di MarkupCraft copia parte di una tavola come immagine che conosce le proprie dimensioni. Incollata in DetailCraft, l'immagine giace piatta su un piano livellato, alla sua dimensione reale, sotto la griglia e la carpenteria, così da poter disporre le membrature su una pianta dei disegni.

## Incollarla

1. In MarkupCraft, copiare l'area con {{ui:Altro}} › {{ui:Copia un'area della pagina…}}, poi {{ui:Copia}} (oppure {{ui:Copia come sovrapposizione}}, che rende la carta trasparente).
2. In DetailCraft (stesso browser), premere {{key:Mod+V}} o scegliere {{ui:Incolla}}.

L'immagine viene inserita al centro della griglia, sul piano mostrato in {{ui:Pianta}} (in 3D o in un prospetto, sul piano più basso), e risulta selezionata. La barra di stato indica quanto è grande.

- **Dimensione reale:** quando la tavola aveva una scala di disegno, un pixel è disegnato come la lunghezza che indica sul disegno.
- **Dimensione su carta:** quando la tavola non aveva scala, l'immagine è grande quanto era l'area sulla carta, e la barra di stato lo dice. Digitare un nuovo **mm per pixel** in {{ui:Proprietà}} per scalarla.

Un'area copiata come sovrapposizione parte con l'opacità con cui è stata copiata.

{{key:Mod+V}} incolla l'elemento copiato per ultimo: l'area da MarkupCraft, oppure membrature e plinti copiati in DetailCraft. Se dopo l'area è stata copiata negli Appunti un'altra immagine (da un altro programma), non viene incollato nulla: copiare di nuovo l'area.

## Spostare, modificare ed eliminare

- Fare clic sull'immagine per selezionarla (ciò che le sta davanti viene scelto prima). Un contorno blu indica che è selezionata.
- Trascinarla per spostarla sul piano. Il centro e gli angoli si agganciano alle intersezioni della griglia.
- In {{ui:Proprietà}}, digitare dove va il suo centro (x, y) e il piano su cui giace (z), il suo **mm per pixel** e la sua **opacità**.
- {{key:Delete}} o {{ui:Elimina}} la rimuove.

Ogni incolla, spostamento, modifica ed eliminazione è un solo passo: {{key:Mod+Z}} lo annulla.

L'immagine è salvata nel file del modello, quindi si apre insieme al modello. È solo un riferimento: non compare nei disegni, nelle esportazioni, nella distinta dei materiali né in una copia.
