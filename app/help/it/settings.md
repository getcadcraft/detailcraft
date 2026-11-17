---
title: Impostazioni di DetailCraft
summary: Avviare nuove membrature come profili US o europei, impostare di quanto Duplica sposta una copia, scegliere se le copie portano con sé i collegamenti, e mostrare o nascondere i bulloni nella vista 3D.
keywords: impostazioni, preferenze, formato della tavola, formato carta, disegni, opzioni, acciaio, aisc, en, profili europei, profili US, profili metrici, profilo predefinito, grado, s355, a992, offset duplica, offset incolla, copia collegamenti, bulloni, tirafondi, nascondi bulloni, ripristina
from: e46cea57
---

Aprire {{ui:Impostazioni}} con l'ingranaggio nella barra dell'app oppure con {{key:Mod+,}}. La prima scheda, {{ui:DetailCraft}}, contiene le impostazioni proprie di questa app; {{ui:Generali}} contiene quelle che tutte le app CadCraft condividono (tema, barra degli strumenti, pannelli). Le impostazioni di DetailCraft esistono solo nell'app: si cambiano qui, hanno effetto subito, e questo browser le ricorda. Non sono salvate nel file del modello.

## Nuove membrature

Quali profili e gradi usano all'inizio gli strumenti di inserimento:

| Strumento | Profili US (AISC), A992 | Profili europei (EN), S355 |
|---|---|---|
| {{ui:Trave}} | W16x26, A992 | IPE300, S355 |
| {{ui:Pilastro}} | W12x50, A992 | HEB200, S355 |
| {{ui:Controvento}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Piastra}} | A36 | S355 |

I profili US sono quelli di partenza. La scelta europea usa un HEA160 per i controventi, perché il catalogo EN di DetailCraft non ha ancora sezioni cave ([Catalogo profili](topic:profile-catalog)). Si può comunque scegliere qualsiasi profilo e grado per il pezzo successivo nel pannello {{ui:Proprietà}} mentre uno strumento di inserimento è attivo. Le membrature già nel modello mantengono il proprio profilo e il proprio grado.

## Duplica e incolla

- **Offset (mm)**: x, y e z. {{ui:Duplica}} ({{key:Mod+D}}) mette la copia a questa distanza dall'originale, e il modulo {{ui:Incolla con un offset (mm, dall'originale)}} parte da esso. Il valore iniziale è 6000, 0, 0: una campata da 6 m lungo le griglie numerate. Impostarlo sul proprio passo di campata, oppure su un'altezza di piano in z per copiare un piano più in alto.
- **Copia piastre di testa e piastre di base insieme alle loro aste** (attivo all'inizio): un collegamento viene copiato insieme a una copia solo quando ogni membratura che collega è copiata. Disattivarlo per copiare membrature e plinti senza i loro collegamenti, per esempio per provare un collegamento diverso sulla copia.

Vedere [Copia, incolla e duplica](topic:copy-paste).

## Vista 3D

**Mostra bulloni e tirafondi** (attivo all'inizio). Disattivarlo per nasconderli nella vista e vedere i fori e le piastre di un nodo affollato. I bulloni nascosti non si possono cliccare: fare clic sulla piastra per selezionare il collegamento. La distinta dei materiali, i disegni e ogni esportazione includono comunque ogni bullone e tirafondo.

## Indicatore d'angolo

Ciò che compare nell'angolo della vista 3D: **Cubo di navigazione** (il valore iniziale; in alto a destra — fare clic su una faccia, uno spigolo o un vertice per guardare da lì, trascinarlo per orbitare, trascinare il suo anello bussola per ruotare il modello), **Icona assi** (un piccolo marcatore X, Y, Z in basso a sinistra che ruota con la vista: X rosso, Y verde, Z blu) oppure **Nessuno**. Solo in {{ui:3D}}; {{ui:Pianta}} e {{ui:Prospetto}} non mostrano né l'uno né l'altro. Vedere [Il cubo di navigazione](topic:view-cube).

## Ripristino

{{ui:Ripristina impostazioni di DetailCraft}} in fondo alla finestra riporta queste al punto di partenza (profili US, offset 6000, 0, 0, collegamenti copiati, bulloni mostrati), insieme a quelle di {{ui:Generali}}.

## Disegni

**Formato della tavola**: il formato in cui vengono fatti i disegni di tavola e di officina, in orizzontale: A4, A3 (il valore iniziale), A2, A1, ANSI B, ANSI C o ANSI D. Le finestre {{ui:Disegni}} e disegno di officina hanno lo stesso elenco. Vedere [Disegni d'insieme e di montaggio](topic:drawings).

## Armatura

- **Nomi delle barre ASTM**: da #3 a #11, oppure i nomi metrici soft da #10 a #36 per le stesse barre.
- **Codici di forma della distinta di piegatura**: S, L, U di DetailCraft; tipi ACI 315; oppure codici di forma BS 8666. Vedere [Riferimento armature](topic:rebar-reference).

## Trascinamento per selezionare

**Rettangolo** (come prima) oppure **Lazo**: una linea a mano libera, con {{key:Space}} che passa tra interno, tocco e recinto mentre si trascina. Vedere [Selezionare con una finestra](topic:select-and-change#select-with-a-window).
