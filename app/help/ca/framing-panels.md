---
title: Panells d'entramat de fusta i d'acer lleuger
summary: Enquadreu panells de paret, de forjat i de coberta en fusta o acer lleuger, amb cada peça, una llista de talls, un plànol de taller i l'existència a comprar.
keywords: entramat, fusta, fusta de construcció, acer lleuger, conformat en fred, muntant, bigueta, cabiró, llinda, muntant principal, muntant secundari, muntant curt, llista de talls, plànol de taller, panell
from: 3e38ffb9
---

La pestanya {{ui:Framing}} enquadra els panells que descriviu i dona el que demanen una quadrilla d'entramat i un magatzem de fusta. Els panells es desen al fitxer del model.

:::warning
Les mides, la separació i les llindes són cosa vostra. DetailCraft no comprova que un muntant a aquella separació carregui aquell mur ni que una llinda salvi aquella obertura: això ho han de fer les taules del vostre codi i el vostre enginyer.
:::

## Afegir un panell

Trieu {{ui:Add a wall}}, {{ui:Add a floor}} o {{ui:Add a roof}}, i després ompliu les dimensions en mil·límetres, el material (fusta o acer lleuger) i la mida de la peça. Les mides de la fusta són els noms nominals amb les seves mides cepillades (2×4 és 38 × 89 mm). Els muntants d'acer es designen per profunditat i gruix, per exemple `C92-1.2`.

## Parets

Una paret té una placa inferior, una o més plaques superiors (una guia en acer), muntants d'extrem, muntants a la separació que doneu, i per a cada obertura: dos muntants principals, dos muntants secundaris, una llinda de la mida i les capes que trieu, i muntants curts sobre la llinda (i sota l'ampit d'una finestra). Doneu a cada obertura la seva distància des de l'extrem esquerre, la seva amplada i la part superior i inferior del buit en brut, mesurades des de la base del paviment; una porta té una base de 0.

## Forjats i cobertes

Un forjat té biguetes al llarg del seu ample, en la direcció de la llum, brides de vora als dos extrems i, si la marqueu, entrebigats a mig và. Un panell de coberta és un frontó: un parell de cabirons a la separació que doneu (la seva longitud inclou el voladís del ràfec al llarg del pendent) i una peça de carener.

## Què obteniu

Cada panell mostra les seves peces en un plànol a escala amb cada peça marcada, una llista de talls per marca i un total. La taula {{ui:Stock to buy}} ajusta tots els talls dels panells en longituds comercials, les més curtes que compleixen els talls de cada barra. {{ui:Save the shop drawing (SVG)}} escriu el plànol; el botó {{ui:CSV}} escriu totes les llistes de talls i la llista d'existències.

## Col·locar un panell al model

Sota cada panell, indiqueu on va (x, y, z en mil·límetres i l'angle) i premeu {{ui:Place as members}}: cada peça es converteix en una barra del model, amb la secció cepillada de la seva mida i el pes del material (uns 500 kg/m³ per a la fusta, acer per als muntants). Una paret corre al llarg de l'angle des del seu extrem inferior esquerre, amb la base a z; les biguetes d'un forjat s'estenen amb la cara inferior a z; l'alçat del frontó d'una coberta corre al llarg de l'angle amb z a la part superior de les plaques de la paret. Cada capa de la llinda és una barra al costat de l'altra. Si el torneu a premer, substitueix les barres col·locades abans, i {{ui:Remove the placed members}} les treu; cada acció és un pas de desfer. L'anàlisi deixa aquestes barres de banda: no són barres de pòrtic d'acer.

## Fulls PDF

{{ui:PDF sheets}} desa una pàgina A3 per a cada panell: el panell a escala amb cada peça marcada, les dimensions generals, la llista de talls i una franja de títol.

Problemes al tauler {{ui:Problems}}: una obertura massa a prop de l'extrem d'una paret o d'una altra, una llinda que no cap sota les plaques superiors, una peça més llarga que la longitud comercial més llarga.

El tauler {{ui:Problems}} llista també **Interfícies (LOD 350)** per als panells de paret i per als murs de formigó: una obertura que passa del final o de la part superior de la seva paret, dues obertures que se solapen, i una obertura de mur de formigó més ampla de 1000 mm sense barra de reforç de l'obertura. Són recomanacions, les mateixes regles que executa l'auditoria de BimCraft; l'amplada és el valor inicial de CadCraft, no una norma.
