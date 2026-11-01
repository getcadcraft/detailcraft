---
title: Erste Schritte mit DetailCraft
summary: Was DetailCraft heute kann, wie Sie es öffnen und ein erstes Modell von den Rastern bis zur Werkstattzeichnung in zehn Minuten.
from: 3682c0d8
keywords: Start, erstes Modell, Einführung, Stahlbau-Detaillierung, Bewehrung, Schnellstart, Tutorial, Überblick
---

DetailCraft ist die App für Stahl- und Bewehrungsdetaillierung in der CadCraft-Familie. Sie bauen ein 3D-Modell eines Stahlrahmens auf Rastern und Ebenen, verbinden es und erhalten, was die Werkstatt braucht: Positions- und Baugruppennummern, eine Stückliste, Werkstattzeichnungen einzelner Bauteile, DSTV-NC-Dateien, ein IFC-Modell und eine Biegeliste für die Fundamente.

Dies ist ein früher Build. Er erledigt eine kurze Liste von Dingen sorgfältig, statt alles auf einmal. Lesen Sie [Was noch nicht umgesetzt ist](topic:not-built-yet), bevor Sie echte Arbeit darauf planen.

## Was heute möglich ist

- Raster und Ebenen, die Sie in Millimetern eintippen.
- Stützen, Träger, Aussteifungen und Bleche aus veröffentlichten Profilkatalogen (AISC W, S, C, L, HSS und Pipe; europäische IPE, HEA, HEB und UPN) sowie Ihre eigenen parametrischen Profile.
- Zwei Anschlüsse: eine geschraubte Kopfplatte von einem Träger an einen Stützenflansch und eine Stützenfußplatte mit vier Ankerstangen. Jeder lässt sich auf jeden ähnlichen Knoten kopieren.
- Bohrungen und Ausklinkungen, die Sie nach Position eintippen.
- Rechteckige Einzelfundamente mit unterer Matte und Anschlussbewehrung.
- Positions- und Baugruppennummern, die sich nach jeder Änderung selbst aktualisieren.
- Exporte: IFC4, DSTV-NC-Dateien (I-Profile und Bleche), Stückliste als CSV, Biegeliste als CSV und eine Werkstattzeichnung eines Bauteils als PDF.

## DetailCraft öffnen

1. Öffnen Sie DetailCraft in einem Desktop-Browser: Chrome, Edge, Firefox oder Safari. Siehe [Browser und Computer](common:browsers).
2. Warten Sie, bis sich der Bildschirm füllt. Die Statusleiste unten meldet „Ready. Open the Sample, or set grids and levels and start placing members.“

Die Modellansicht braucht 3D-Grafik (WebGL). Steht in der Mitte des Bildschirms „This browser could not start 3D graphics (WebGL)“, siehe [Fehlerbehebung](topic:troubleshooting#the-3d-view-is-missing).

:::note
Ihre Modelle bleiben auf Ihrem Computer. Das Öffnen eines Modells liest es im Browser, und das Speichern lädt eine Datei herunter. Nichts wird hochgeladen. Speichern in der Cloud gibt es noch nicht. Siehe [Wohin Ihre Dateien gehen](common:your-files). Um DetailCraft später ohne Verbindung zu nutzen, wählen Sie einmal online in der Anwendungsleiste {{ui:Für Offline speichern}}; siehe [Offline arbeiten](common:offline).
:::

:::offline
Sie sind offline. DetailCraft funktioniert ohne Verbindung nur, wenn es vorher für die Offline-Nutzung gespeichert wurde: Die Schaltfläche {{ui:Für Offline speichern}} in der Anwendungsleiste zeigt dann {{ui:Offline bereit}}. Siehe [Offline arbeiten](common:offline).
:::

## Zuerst das Beispiel ansehen

Am schnellsten sehen Sie am Beispielrahmen, was DetailCraft erzeugt.

1. Wählen Sie in der Gruppe {{ui:Datei}} der Symbolleiste {{ui:Beispiel}}.
2. Die Ansicht zeigt einen Rahmen mit zwei Feldern: sechs Stützen mit Fußplatten, vier Träger mit Kopfplatten, eine Aussteifung und sieben Fundamente mit Bewehrung.
3. Klicken Sie auf einen Träger. Der Bereich {{ui:Eigenschaften}} rechts zeigt seine Positionsnummer, Zuschnittlänge, sein Gewicht und die Bohrungen, die die Kopfplatten erzeugt haben.
4. Öffnen Sie unten die Registerkarte {{ui:Stückliste}}, um jede Positionsnummer mit Anzahl und Gewicht zu sehen.

Die Schritt-für-Schritt-Anleitung [Den Beispielrahmen erkunden](topic:sample-model) geht ihn Stück für Stück durch.

## Ihr erstes Modell

Ein neues Modell hat bereits die Raster 1 bis 3 mal A bis B mit 6000 mm und zwei Ebenen, Ebene 1 bei 0 und Ebene 2 bei 4000.

1. Wählen Sie {{ui:Neu}}. Hat das aktuelle Modell Änderungen, fragt DetailCraft, ob es sie vorher speichern soll.
2. Wählen Sie über der Ansicht {{ui:Grundriss}}. Die Ebenenliste daneben wählt Ebene 1.
3. Wählen Sie in der Symbolleiste {{ui:Stütze}} oder drücken Sie {{key:C}}.
4. Klicken Sie auf den Rasterschnittpunkt A/1. Eine Stütze W12x50 erscheint von Ebene 1 bis Ebene 2. Die Statusleiste sagt, wohin sie gekommen ist.
5. Klicken Sie auf B/1, A/2 und B/2, um drei weitere zu setzen.
6. Wählen Sie in der Ebenenliste Ebene 2 und dann {{ui:Träger}} oder drücken Sie {{key:B}}.
7. Klicken Sie auf A/1, dann auf A/2. Ein Träger W16x26 verbindet die beiden Stützenköpfe, seine Stahloberseite auf der Ebene.
8. Drücken Sie {{key:Esc}}, um zu {{ui:Wählen}} zurückzukehren, und klicken Sie dann auf den Träger.
9. Wählen Sie in der Gruppe {{ui:Anschlüsse}} {{ui:Kopfplatten}}. Beide Enden erhalten eine geschraubte Kopfplatte, der Träger wird passend zurückgeschnitten, und die erste Kopfplatte ist jetzt gewählt.
10. Klicken Sie erneut auf den Träger.
11. Wählen Sie in der Gruppe {{ui:Ausgabe}} {{ui:Werkstattzeichnung}}. Eine Vorschau der Werkstattzeichnung des Trägers öffnet sich. Wählen Sie {{ui:PDF herunterladen}}.
12. Drücken Sie {{key:Mod+S}}, um das Modell zu speichern. Der Browser lädt `Untitled.detailcraft.json` herunter.

Benennen Sie das Modell vor dem Speichern oben links im Feld {{ui:Name}} um, damit die Datei und jeder Export seinen Namen tragen.

## Wie es weitergeht

- [Ein Rundgang durch den Bildschirm](topic:workspace)
- [Raster und Ebenen einrichten](topic:grids-and-levels)
- [In der 3D-Ansicht bewegen](topic:navigate-3d), mit Maus, Trackpad oder Touchscreen
- [Umstieg von anderer Detaillierungssoftware](topic:coming-from), wenn Sie ein großes Detaillierungspaket kennen
- [Diese Hilfe nutzen](common:help)
