---
title: Der ViewCube
summary: Klicken Sie auf eine Fläche, Kante oder Ecke des Würfels in der Ecke der Ansicht, um von dort zu schauen. Ziehen Sie ihn zum Kreisen, drehen Sie den Kompassring, wechseln Sie um eine Flächenansicht herum und kehren Sie zur Startansicht zurück.
keywords: ViewCube, Würfel, Kompass, Norden, Startansicht, Standardansichten, Oben, Vorne, Rechts, Iso, Ecke, Kante, Kreisen, Ansicht drehen, Achsensymbol, Eckenanzeige, Navigation
from: 3666ea8a
---

Der ViewCube sitzt oben rechts in der 3D-Ansicht, unter der Ansichtsleiste (nur in {{ui:3D}}: {{ui:Grundriss}} und {{ui:Ansicht}} schauen bereits senkrecht auf das Modell). Er dreht sich mit der Ansicht, daher zeigt er immer, in welche Richtung Sie schauen: {{ui:Oben}} liegt oben, {{ui:Vorne}} zeigt nach Süden (die Seite, von der die Buchstabenraster in {{ui:Ansicht}} gesehen werden), {{ui:Rechts}} zeigt nach Osten, entlang der nummerierten Raster. Er bleibt durchsichtig, bis Sie darauf zeigen.

## Von einer Seite, einer Kante oder einer Ecke aus schauen

1. Zeigen Sie auf den Würfel. Der Teil unter dem Zeiger leuchtet auf: die Mitte einer Fläche, eine Kante (sie leuchtet auf beiden Flächen, die sie teilen) oder eine Ecke (auf allen drei Flächen).
2. Klicken Sie darauf. Die Ansicht dreht sich, um von dort aus zu schauen, und behält dabei die gleiche Mitte und Zoomstufe bei.

Es gibt 26 Stellen zum Klicken: 6 Flächen ({{ui:Oben}}, {{ui:Unten}}, {{ui:Vorne}}, {{ui:Hinten}}, {{ui:Links}}, {{ui:Rechts}}), 12 Kanten und 8 Ecken. Eine Ecke ergibt die klassische Dreiviertelansicht; eine Kante liegt auf halbem Weg zwischen zwei Flächen.

Eine Flächenansicht des Würfels ist eine 3D-Ansicht, nicht {{ui:Grundriss}} oder {{ui:Ansicht}}: Nichts wird abgeschnitten, und das Modell lässt sich weiterhin drehen.

## Den Würfel ziehen, um zu kreisen

Ziehen Sie den Würfel, um die Ansicht zu drehen, genauso wie das Kreisen in der Ansicht selbst. Ein Ziehen wird nie als Klick gewertet, daher können Sie den Würfel überall anfassen.

## Der Kompassring

Der Ring unter dem Würfel trägt N, O, S und W.

- **Ziehen Sie den Ring**, um das Modell um die senkrechte Achse zu drehen, als stünde es auf einem Drehteller. Der Ring folgt dem Zeiger.
- **Klicken Sie auf einen Buchstaben**, um von dieser Seite aus zu schauen und dabei den Blickwinkel nach unten beizubehalten. In einer Ansicht genau von oben geht der angeklickte Buchstabe an den unteren Bildschirmrand.

## Flächenansichten: Pfeile

Wenn Sie senkrecht auf eine Fläche schauen, erscheinen kleine Pfeile um den Würfel:

- Die vier **Dreiecke** bringen die Fläche auf dieser Seite nach vorne: Das Dreieck über dem Würfel zeigt die Fläche, die oben war, und so weiter.
- Die beiden **gebogenen Pfeile** oben rechts drehen das Bild um eine Viertelumdrehung im oder gegen den Uhrzeigersinn, ohne die Fläche zu ändern, auf die Sie schauen. Verwenden Sie sie, um einen Plan so zu drehen, dass eine lange Wand quer über den Bildschirm verläuft.

## Startansicht

Die Hausschaltfläche oben links am Würfel führt zurück zur ursprünglichen Dreiviertelansicht und passt das ganze Modell ein, wie die Schaltfläche „Einpassen“. {{key:Home}} tut dasselbe, während der Würfel den Tastaturfokus hat.

## Mit der Tastatur

{{key:Tab}} zum Würfel, dann:

| Taste | Wirkung |
|---|---|
| {{key:left}} / {{key:right}} | eine Seite, Kante oder Ecke um den Würfel wählen, in Achteldrehschritten (Bildschirmleseprogramme sagen, welche) |
| {{key:up}} / {{key:down}} | eine höhere oder tiefere wählen, bis hinauf zu {{ui:Oben}} oder hinunter zu {{ui:Unten}} |
| {{key:Enter}} oder {{key:Space}} | von der gewählten aus schauen |
| {{key:Shift+left}} / {{key:Shift+right}} | die Ansicht um eine Viertelumdrehung um die senkrechte Achse drehen |
| {{key:Home}} | die Startansicht |
| {{key:Esc}} | den Würfel verlassen |

Tasten, die auf dem Würfel gedrückt werden, bleiben beim Würfel: Sie starten keine DetailCraft-Werkzeuge.

## Achsensymbol oder nichts stattdessen

Öffnen Sie {{ui:Einstellungen}} ({{key:Mod+,}}), die Registerkarte {{ui:DetailCraft}}, und stellen Sie **Eckenanzeige** auf {{ui:ViewCube}} (der Start), {{ui:Achsensymbol}} (ein kleines X-, Y-, Z-Zeichen unten links: X rot, Y grün, Z blau) oder {{ui:Keine}}. Dieser Browser merkt sich die Wahl. Siehe [DetailCraft-Einstellungen](topic:settings#corner-indicator).
