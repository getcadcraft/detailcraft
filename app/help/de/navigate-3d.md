---
title: In der 3D-Ansicht navigieren
summary: Drehen, Pan und Zoom mit Maus, Trackpad oder Touchscreen, und wann Sie stattdessen Grundriss und Ansicht verwenden.
keywords: Orbit, drehen, Pan, Zoom, navigieren, Ansicht, Kamera, Trackpad, Touch, Grundriss, Einpassen, Maus
from: 02c9c7b9
---

Die Ansicht hat drei Modi, die Sie in der Ansichtsleiste darüber wählen: {{ui:3D}}, {{ui:Grundriss}} und {{ui:Ansicht}}. Die Maustasten tun in 3D etwas anderes als in Grundriss und Ansicht, daher lesen Sie beide Tabellen.

## In 3D

:::mouse
| Ziel | So geht's |
|---|---|
| Um das Modell drehen | Mit der linken Taste ziehen |
| Pan | Mit der rechten Taste ziehen oder {{key:Shift}} halten und mit der linken Taste ziehen |
| Zoomen | Am Rad drehen oder mit der mittleren Taste (Rad gedrückt) nach oben und unten ziehen |
| Ein Bauteil auswählen | Anklicken (ein Klick, der sich um wenige Pixel bewegt) |
| Das ganze Modell sehen | Die Einpassen-Schaltfläche am rechten Ende der Ansichtsleiste |
:::

:::touch
| Ziel | So geht's |
|---|---|
| Um das Modell drehen | Mit einem Finger ziehen |
| Pan | Mit zwei Fingern ziehen |
| Zoomen | Mit zwei Fingern zusammenziehen |
| Ein Bauteil auswählen | Antippen |
| Das ganze Modell sehen | Die Einpassen-Schaltfläche am rechten Ende der Ansichtsleiste |
:::

Der Ansichtswürfel oben rechts (unter der Ansichtsleiste) dreht sich mit dem Modell: Klicken Sie auf eine Fläche, Kante oder Ecke, um von dort aus zu schauen, ziehen Sie ihn zum Drehen, oder klicken Sie auf sein Hausymbol, um zum Start zurückzukehren. Siehe [Der Ansichtswürfel](topic:view-cube).

Das Modell dreht sich um die Mitte der Ansicht, und das Rad zoomt zur Mitte der Ansicht, nicht zum Zeiger. Um eine Ecke genau anzusehen, verschieben Sie sie zuerst in die Mitte und zoomen Sie dann.

## In Grundriss und Ansicht

Diese Ansichten blicken direkt auf das Modell und lassen sich nicht drehen.

:::mouse
| Ziel | So geht's |
|---|---|
| Pan | Mit der linken oder rechten Taste ziehen |
| Zoomen | Am Rad drehen oder mit der mittleren Taste nach oben und unten ziehen |
| Ein Bauteil auswählen | Anklicken |
:::

:::touch
| Ziel | So geht's |
|---|---|
| Pan | Mit einem Finger ziehen |
| Zoomen | Mit zwei Fingern zusammenziehen (Ziehen mit zwei Fingern schwenkt ebenfalls) |
| Ein Bauteil auswählen | Antippen |
:::

## Auf einem Mac-Trackpad

:::mac
- **Zoomen:** mit zwei Fingern nach oben oder unten wischen oder zusammenziehen. Beides wirkt in der Ansicht als Zoomen.
- **Drehen (3D):** Trackpad drücken und mit einem Finger ziehen. Wenn Sie Tippen zum Klicken verwenden, funktioniert auch Doppeltippen und Ziehen, sofern das Ziehen in **Systemeinstellungen, Bedienungshilfen, Zeigersteuerung, Trackpad-Optionen** aktiviert ist.
- **Pan (3D):** {{key:Shift}} halten und ziehen. Das Halten von {{key:Ctrl}} oder {{key:Mod}} beim Ziehen funktioniert ebenfalls als Pan. Ein Klick mit zwei Fingern ist ein Rechtsklick, doch Ziehen damit ist auf einem Trackpad umständlich.
- **Pan (Grundriss und Ansicht):** einfach ziehen.
- Eine Magic Mouse hat keine mittlere Taste: Verwenden Sie das Ziehen mit {{key:Shift}} zum Pan und eine Wischbewegung auf ihrer Oberfläche zum Zoomen.
:::

Mehr zum Rechtsklick und Pan ohne Maus: [Tasten, Mäuse und Trackpads](common:keys).

## Grundriss und Ansicht erleichtern das Platzieren

In {{ui:3D}} können Schnittpunkte auf verschiedenen Ebenen auf dem Bildschirm übereinanderliegen, und ein Klick geht zum nächsten Punkt. In {{ui:Grundriss}} und {{ui:Ansicht}} lassen sich nur die Punkte der Ebene oder Rasterlinie auswählen, die Sie betrachten.

1. Wählen Sie {{ui:Grundriss}} und dann eine Ebene in der Liste neben den Schaltflächen. Die Ansicht blickt auf diese Ebene hinab; alles mehr als 1.5 m darüber ist abgeschnitten.
2. Oder wählen Sie {{ui:Ansicht}} und dann eine Rasterlinie mit Buchstaben („Raster A“, „Raster B“ …). Die Ansicht blickt direkt auf diese Linie; nur Stahl innerhalb von 1 m davon wird angezeigt.

Ansichten gibt es nur auf Rasterlinien mit Buchstaben. Um an einer Linie aus nummerierten Rastern zu arbeiten (ein Rahmen von A bis B), verwenden Sie {{ui:3D}} oder platzieren Sie durch Eingabe im Formular {{ui:Nach Raster hinzufügen}}. Siehe [Stützen, Träger und Aussteifungen platzieren](topic:place-members#place-by-grid-without-clicking).

## Auswählen

- Klicken Sie auf ein Bauteil, um es auszuwählen. Es erhält die Hervorhebungsfarbe, und der Bereich {{ui:Eigenschaften}} zeigt es an.
- Klicken Sie auf leeren Raum oder drücken Sie {{key:Esc}}, um die Auswahl aufzuheben.
- Stahl hat Vorrang vor Beton: Ein Klick auf eine Stütze in einem durchsichtigen Fundament wählt die Stütze. Klicken Sie das Fundament abseits der Stütze oder auf eine seiner Bewehrungen an, um das Fundament auszuwählen.
- Klicken Sie auf eine Schraube oder eine Kopfplatte, um deren Verbindung auszuwählen.
- In Grundriss und Ansicht können abgeschnittene Teile nicht angeklickt werden.
- Halten Sie {{key:Shift}} (oder {{key:Ctrl}} oder {{key:Mod}}) und klicken Sie, um ein Bauteil zur Auswahl hinzuzufügen oder daraus zu entfernen; {{key:Mod+A}} wählt alles aus. Eine Auswahl per Fenster (Rahmen ziehen) gibt es noch nicht. Was Sie mit mehreren Bauteilen tun können: [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

Sie können auch aus Listen auswählen: Klicken Sie links auf eine Nummer in der Liste {{ui:Positionsnummern}}, auf eine Positionsnummer in der Registerkarte {{ui:Stückliste}} oder auf {{ui:Wählen}} neben einer Zeile in {{ui:Probleme}}.

## Wenn die Ansicht falsch aussieht

- Das Modell verschwunden? Wählen Sie die Einpassen-Schaltfläche.
- Die Ansicht ist leer oder grau mit einer Meldung zu WebGL: siehe [Fehlerbehebung](topic:troubleshooting#the-3d-view-is-missing).
- Alles funktioniert auch ohne 3D-Ansicht, außer dem Klicken darin: Die Bereiche, Berichte und Exporte laufen alle, und {{ui:Nach Raster hinzufügen}} platziert Bauteile durch Eingabe.
