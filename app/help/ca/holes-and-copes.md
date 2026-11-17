---
title: Forats i retalls
summary: Escriviu forats a ànimes, ales i plaques, i retalleu les ales a l'extrem d'una biga, mesurats des de l'extrem tallat de la peça.
keywords: forat, forats, forat de cargol, retall, entalla, tall, retallar, perforar, punxonar, forat a l'ànima, forat a l'ala
from: 33d12398
---

Els forats i els retalls s'escriuen per posició. Pertanyen a la barra i es mouen amb ella.

Els forats fets per connexions (plaques d'extrem, plaques de base) s'afegeixen automàticament; no els escriviu vosaltres. Apareixen com a "… forats de connexions (editeu la connexió)".

## Des d'on es mesuren les posicions

- **x** corre al llarg de la peça des del seu **inici tallat**: l'extrem inicial després de qualsevol connexió que l'hagi retallat. Així, x = 0 és l'extrem real de l'acer, no el punt de la quadrícula.
- **y** es mesura a través de la cara des del centre de la secció:
   - a l'**ànima**: amunt (positiu) o avall des de la meitat del cantell;
   - a una **ala** o una **placa**: a través de l'ample, des de la línia central.
- L'inici de la barra és el primer punt on heu fet clic en col·locar-la. Les files {{ui:Ends (x, y, z mm)}} mostren quin extrem és quin.

## Afegir un forat

1. Seleccioneu la barra.
2. A la caixa {{ui:Holes}} del tauler {{ui:Properties}}, trieu la {{ui:Face}}: {{ui:Web}}, {{ui:Top flange}} o {{ui:Bottom flange}} (per a una secció en I, en U o un tub rectangular), o {{ui:Plate face}} (per a una placa).
3. Escriviu {{ui:x along (mm)}}, {{ui:y across (mm)}} i {{ui:Diameter (mm)}}. El formulari comença amb x 100, y 0, diàmetre 22.
4. Trieu {{ui:Add hole}}.

La barra d'estat diu "Forat afegit. x es mesura des de l'inici tallat; y des del centre de la secció (ànima: amunt; ala o placa: a través)." El forat apareix a la llista, i a la vista com un tap fosc a través de la cara.

Per treure un forat, trieu la × al costat de la llista.

Els angles i els tubs rodons encara no admeten forats: la seva caixa {{ui:Holes}} ho indica.

:::note
A la vista 3D els forats es dibuixen com a taps foscos, no tallats a través de l'acer. Són forats reals als fitxers NC, als plànols de taller i a l'exportació IFC.
:::

Un forat amb x més enllà de qualsevol extrem de la peça apareix a la pestanya {{ui:Problems}} com a "un forat és fora de l'extrem de la peça".

## Afegir un retall

Els retalls són per a seccions en I: retallen l'ala superior o inferior (i aquella profunditat d'ànima) a un extrem, perquè la biga deixi lliure una altra barra.

1. Seleccioneu una barra de secció en I.
2. A la caixa {{ui:Copes}}, trieu {{ui:End}} ({{ui:Start}} o {{ui:End}}) i {{ui:Side}} ({{ui:Top}} o {{ui:Bottom}}).
3. Escriviu {{ui:Length (mm)}} (al llarg de la biga des d'aquell extrem) i {{ui:Depth (mm)}} (avall des de la part superior, o amunt des de la inferior). El formulari comença amb 100 x 40.
4. Trieu {{ui:Add cope}}.

La vista mostra el retall tallat a l'acer. La llista diu, per exemple, "Dalt a l'inici: 100 x 40". Traieu-lo amb la seva ×.

Els retalls són quadrats: encara no hi ha radi a l'angle interior.

## Com els forats i els retalls afecten les marques

Dues peces només reben la mateixa marca de peça si els seus forats i retalls coincideixen dins d'1 mm, admetent que la peça es gira. Afegir un forat a una biga d'un grup li dona una marca nova. Vegeu [Regles de marques](topic:mark-rules).
