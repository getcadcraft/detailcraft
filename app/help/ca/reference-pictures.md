---
title: Enganxa una àrea copiada com a imatge de referència
summary: Copia part d'un plànol PDF a MarkupCraft i enganxa-la a DetailCraft a la mida real, estesa en un nivell sota l'acer, per modelar-hi a sobre.
keywords: imatge, imatge de referència, base, fons, copiar àrea, markupcraft, pdf, traç, mida real, escala, opacitat, superposició
from: 0c48445f
---

L'eina Copia una àrea de MarkupCraft copia una part d'un plànol com a imatge que coneix la seva mida. Enganxeu-la a DetailCraft i s'estendrà plana sobre un nivell, a la mida real, sota la graella i l'acer, de manera que podreu col·locar barres sobre una planta dels plànols.

## Enganxar-la

1. A MarkupCraft, copieu l'àrea amb {{ui:Més}} › {{ui:Copia una àrea de la pàgina…}}, i després {{ui:Copia}} (o {{ui:Copia com a superposició}}, que fa el paper transparent).
2. A DetailCraft (al mateix navegador), premeu {{key:Mod+V}} o trieu {{ui:Enganxa}}.

La imatge es col·loca al mig de la graella, al nivell que mostra {{ui:Planta}} (en 3D o en un alçat, al nivell més baix), i queda seleccionada. La barra d'estat diu quina mida té.

- **Mida real:** quan el full tenia escala de dibuix, un píxel es dibuixa com la longitud que mostra el plànol.
- **Mida en paper:** quan el full no tenia escala, la imatge té la mida que tenia l'àrea al paper, i la barra d'estat ho indica. Escriviu un **mm per píxel** nou a {{ui:Propietats}} per escalar-la.

Una àrea copiada com a superposició comença amb l'opacitat amb què es va copiar.

{{key:Mod+V}} enganxa el que hàgiu copiat més recentment: l'àrea de MarkupCraft, o els elements i les sabates copiats a DetailCraft. Si després de l'àrea s'ha copiat al porta-retalls una altra imatge (d'un altre programa), no s'enganxa res; torneu a copiar l'àrea.

## Moure-la, canviar-la i suprimir-la

- Feu clic a la imatge per seleccionar-la (primer es tria allò que hi ha davant). Un contorn blau indica que és seleccionada.
- Arrossegueu-la per moure-la pel nivell. El seu centre i els seus cantons s'ajusten a les interseccions de la graella.
- A {{ui:Propietats}}, escriviu on va el seu centre (x, y) i el nivell on es troba (z), el seu **mm per píxel** i la seva **opacitat**.
- {{key:Delete}} o {{ui:Suprimeix}} l'elimina.

Cada enganxada, moviment, canvi i supressió és un sol pas: {{key:Mod+Z}} ho desfà.

La imatge es desa al fitxer del model, de manera que s'obre amb el model. És només una referència: no apareix als plànols, a les exportacions, a la {{ui:Llista de materials}} ni en una còpia.
