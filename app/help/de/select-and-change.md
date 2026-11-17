---
title: Mit Fenster wählen, verschieben, drehen, spiegeln, viele ändern
summary: Mit einem Fenster ziehen, um zu wählen, ausgewählte Teile durch Ziehen verschieben, die Auswahl (oder eine Kopie davon) verschieben, drehen oder spiegeln, oder Profil, Material, Position oder Drehung vieler Stäbe auf einmal ändern.
keywords: Lasso, Zaun, Freihandauswahl, Ziehen, Ziehen und Ablegen, Verschieben per Ziehen, einrasten, Fenster, Kreuzen, Kastenauswahl, Ziehauswahl, viele wählen, verschieben, drehen, spiegeln, umdrehen, kopieren, mehrere ändern, mehrere Stäbe, Profil, Material, Position, Drehung, variiert, Rasterlinie
from: 50b16f9a
---

Jede dieser Aktionen ist ein einzelner Rückgängig-Schritt: Ein {{key:Mod+Z}} macht alles zurück.

## Mit Fenster wählen

- In {{ui:Plan}} und {{ui:Elevation}} ziehen Sie mit der linken Maustaste von einer leeren Stelle aus. In {{ui:3D}} halten Sie {{key:Shift}} und ziehen (ein normales Ziehen dreht das Modell).
- Ziehen Sie **nach rechts** für ein Fenster: Es nimmt alles auf, was vollständig innen liegt, dargestellt mit einer durchgezogenen Kante.
- Ziehen Sie **nach links** für ein Kreuzfenster: Es nimmt alles auf, was es berührt, gestrichelt dargestellt.
- Halten Sie {{key:Shift}}, während Sie das Ziehen beginnen, um zur Auswahl hinzuzufügen, statt sie zu ersetzen.
- Ein Grundriss oder eine Ansicht bietet nur an, was sie zeigt: Teile, die oberhalb des Grundrisses abgeschnitten sind, oder mehr als 1 m von der Rasterlinie der Ansicht entfernt, werden nicht gewählt.
- {{key:Esc}} während des Ziehens verwirft das Fenster.

### Lasso

Wählen Sie **Lasso** unter {{ui:Dragging to select}} in den [DetailCraft-Einstellungen](topic:settings). Dann zeichnet dieselbe Ziehbewegung eine Freihandlinie statt eines Rechtecks.

- Ihre erste seitliche Bewegung bestimmt die Auswahl: **nach rechts** alles, was vollständig innen liegt (durchgezogene Linie); **nach links** alles, was berührt wird (gestrichelt).
- Drücken Sie während des Ziehens {{key:Space}}, um zwischen innen, berühren und **Zaun** umzuschalten: eine offene Linie, die alles nimmt, was sie kreuzt (gepunktet, orange).
- {{key:Shift}} zum Hinzufügen und {{key:Esc}} zum Verwerfen funktionieren wie beim Fenster.

:::touch
Auf einem Touchscreen schwenkt ein Finger Grundriss und Ansicht wie bisher; wählen Sie Teile, indem Sie sie antippen.
:::

In {{ui:Plan}} und {{ui:Elevation}} schwenken Sie mit der rechten oder mittleren Maustaste, solange das Werkzeug {{ui:Select}} aktiv ist.

## Teile durch Ziehen verschieben

1. Wählen Sie zuerst die Teile (klicken, {{key:Shift}}+Klick oder ein Fenster).
2. Drücken Sie auf eines der ausgewählten Teile und ziehen Sie. Die gesamte Auswahl bewegt sich; ein gestrichelter Umriss zeigt, wohin.
3. Lassen Sie los, um es abzusetzen. {{key:Esc}} vor dem Loslassen stellt alles zurück.

- In {{ui:3D}} und {{ui:Plan}} bewegen sich die Teile über die Ebene. Halten Sie {{key:Mod}} zu Beginn des Ziehens in {{ui:3D}}, um sie stattdessen nach oben und unten zu bewegen.
- In {{ui:Elevation}} bewegen sie sich innerhalb der Ansicht: entlang der Rasterlinie und nach oben und unten.
- Das Teil, das Sie halten, rastet auf einen Rasterschnittpunkt ein, sobald sein Ende wenige Pixel davon entfernt ist (der Schnittpunkt leuchtet auf, und die Statusleiste nennt ihn). Sonst erfolgt die Bewegung in 10-mm-Schritten.
- Ein Druck auf ein nicht ausgewähltes Teil dreht oder schwenkt weiterhin die Ansicht, sodass ein Ziehen nie versehentlich etwas verschiebt.
- Das Ziehen ist ein Rückgängig-Schritt, wie {{ui:Move}}. Anschlüsse folgen ihren Stäben.

## Eine Eigenschaft bei vielen Stäben ändern

Wählen Sie zwei oder mehr Stäbe. Unter **Bei allen ändern** im Bereich {{ui:Properties}}:

- {{ui:Profile}}, {{ui:Position}}: für die Träger, Stützen und Aussteifungen unter ihnen.
- {{ui:Plate thickness (mm)}} und {{ui:Plate width (mm)}}: für die Platten.
- {{ui:Material}} und {{ui:Rotation (°)}}: für alle.

Ein Feld zeigt **Variiert**, wenn die Stäbe nicht übereinstimmen. Wählen oder tippen Sie einen Wert, und jeder Stab, auf den er zutrifft, übernimmt ihn. Die Statusleiste zeigt, wie viele geändert wurden und wie viele ihren eigenen Wert behalten haben.

Zahlenfelder im Bereich {{ui:Properties}} nehmen auch eine Berechnung an: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Eine Berechnung, die nicht gelesen werden kann, wird abgelehnt, und die Statusleiste zeigt, wo der Fehler liegt.

## Verschieben, drehen oder spiegeln

Wählen Sie Stäbe und Fundamente (auch ein einzelnes funktioniert), dann verwenden Sie **Verschieben, drehen, spiegeln** im Bereich {{ui:Properties}}. Anschlüsse werden nicht eigenständig verschoben: Sie folgen ihren Stäben. Verschieben Sie einen Träger, aber nicht seine Stütze, zeigt die Statusleiste an, wie viele Anschlüsse jetzt ein bewegtes Teil mit einem unbewegten verbinden, und [Probleme](topic:troubleshooting) sagt, ob sie nicht mehr passen.

- **Verschieben:** Geben Sie x, y und z in Millimetern ein und wählen Sie {{ui:Move}}. Oder wählen Sie {{ui:Pick two points}} (oder drücken Sie {{key:M}}): Klicken Sie den Rasterschnittpunkt an, von dem aus verschoben wird, und dann den, zu dem verschoben wird. Ein gestrichelter Umriss folgt dem Zeiger.
- **Drehen im Grundriss:** Geben Sie den Winkel ein (gegen den Uhrzeigersinn, von oben gesehen) und wählen Sie, um was gedreht wird: die Mitte der Auswahl oder einen Rasterschnittpunkt. Stützen drehen sich mit dem Rahmen.
- **Spiegeln:** Wählen Sie eine Rasterlinie. Das Spiegelbild ist dasselbe Profil, anders herum gedreht: Ein I-Profil behält seine Flansche, ein U-Profil zeigt in die andere Richtung (Ober- und Unterseite tauschen), und Löcher und Ausklinkungen gehen mit dem Teil mit.
- Setzen Sie den Haken bei **Original behalten (Kopie erstellen)**, um die Auswahl an ihrem Ort zu lassen und eine Kopie zu verschieben, drehen oder spiegeln. Ihre Anschlüsse kommen mit, wenn {{ui:Copy end plates and base plates with their members}} in den [DetailCraft-Einstellungen](topic:settings) aktiviert ist.

Drehen erfolgt um eine senkrechte Achse und Spiegeln in einer senkrechten Ebene, daher bleiben Ebenen waagerecht und Fundamente aufrecht.
