---
title: Erste Schritte mit DetailCraft
summary: Was DetailCraft heute kann, wie Sie es öffnen und ein erstes Modell von den Rastern bis zu einer Werkstattzeichnung in zehn Minuten erstellen.
keywords: Erste Schritte, Einführung, erstes Modell, Stahlbau, Bewehrung, Schnellstart, Lernprogramm, Überblick
from: e4f16bbe
---

DetailCraft ist die App zur Detaillierung von Stahl und Bewehrung in der CadCraft-Familie. Sie bauen ein 3D-Modell eines Stahlrahmens auf Rastern und Ebenen, verbinden es und erhalten, was die Werkstatt braucht: Positions- und Montagemarken, eine Stückliste, Werkstattzeichnungen einzelner Teile, DSTV-NC-Dateien, ein IFC-Modell und eine Biegeliste für die Fundamente.

Dies ist eine frühe Version. Sie erledigt eine kurze Liste von Aufgaben sorgfältig, statt alles auf einmal anzugehen. Lesen Sie [Was noch nicht umgesetzt ist](topic:not-built-yet), bevor Sie echte Arbeit darauf planen.

## Was es heute kann

- Raster und Ebenen, die Sie in Millimetern eingeben.
- Stützen, Träger, Aussteifungen und Bleche aus veröffentlichten Profilkatalogen (AISC W, S, C, L, HSS und Rohr; europäische IPE, HEA, HEB und UPN; britische UB, UC, PFC, EA, UEA, SHS, RHS und CHS), dazu Ihre eigenen parametrischen Profile.
- Zwei Anschlüsse: eine verschraubte Kopfplatte von einem Träger an einen Stützenflansch und eine Stützenfußplatte mit vier Ankerstangen. Jeder kann auf jede ähnliche Verbindung kopiert werden.
- Bohrungen und Ausklinkungen, nach Position eingegeben.
- Rechteckige Einzelfundamente mit unterer Matte und Anschlussbewehrung.
- Positions- und Montagemarken, die sich nach jeder Änderung selbst aktualisieren.
- Exporte: IFC4, DSTV-NC-Dateien (I-Profile und Bleche), Stückliste als CSV, Biegeliste als CSV und eine Werkstattzeichnung als PDF für ein Teil.

## DetailCraft öffnen

1. Öffnen Sie DetailCraft in einem Desktop-Browser: Chrome, Edge, Firefox oder Safari. Siehe [Browser und Computer](common:browsers).
2. Warten Sie, bis der Bildschirm sich füllt. Die Statusleiste unten zeigt „Bereit. Beispiel öffnen oder Raster und Ebenen festlegen und Bauteile platzieren.“

Die Modellansicht braucht 3D-Grafik (WebGL). Wenn in der Mitte des Bildschirms „Dieser Browser konnte keine 3D-Grafik (WebGL) starten“ steht, lesen Sie [Fehlerbehebung](topic:troubleshooting#the-3d-view-is-missing).

:::note
Ihre Modelle bleiben auf Ihrem Computer. Beim Öffnen eines Modells wird es im Browser gelesen, und beim Speichern wird eine Datei heruntergeladen. Nichts wird hochgeladen. Cloud-Speicherung ist noch nicht verfügbar. Siehe [Wo Ihre Dateien liegen](common:your-files). Um DetailCraft später ohne Verbindung zu verwenden, wählen Sie einmal während Sie online sind in der App-Leiste {{ui:Für Offline speichern}}; siehe [Offline arbeiten](common:offline).
:::

:::offline
Sie sind offline. DetailCraft funktioniert ohne Verbindung nur, wenn es zuvor für die Offline-Nutzung gespeichert wurde: Die Schaltfläche {{ui:Für Offline speichern}} in der App-Leiste zeigt dann {{ui:Offline bereit}}. Siehe [Offline arbeiten](common:offline).
:::

## Zuerst das Beispiel ansehen

Am schnellsten sehen Sie, was DetailCraft erstellt, am Beispielrahmen.

1. Wählen Sie {{ui:Beispiel}} in der Gruppe {{ui:Datei}} der Symbolleiste.
2. Die Ansicht zeigt einen Rahmen mit zwei Feldern: sechs Stützen mit Fußplatten, vier Träger mit Kopfplatten, eine Aussteifung und sieben Fundamente mit Bewehrung.
3. Klicken Sie auf einen Träger. Der Bereich {{ui:Eigenschaften}} rechts zeigt seine Positionsnummer, die Schnittlänge, das Gewicht und die Bohrungen, die die Kopfplatten erzeugt haben.
4. Öffnen Sie die Registerkarte {{ui:Stückliste}} unten, um jede Positionsnummer mit Anzahl und Gewicht zu sehen.

Die Anleitung [Den Beispielrahmen erkunden](topic:sample-model) geht ihn Stück für Stück durch.

## Ihr erstes Modell

Ein neues Modell hat bereits die Raster 1 bis 3 und A bis B mit 6000 mm Abstand sowie zwei Ebenen: Ebene 1 bei 0 und Ebene 2 bei 4000.

1. Wählen Sie {{ui:Neu}}. Wenn das aktuelle Modell Änderungen hat, fragt DetailCraft, ob sie zuerst gespeichert werden sollen.
2. Wählen Sie {{ui:Grundriss}} über der Ansicht. Die Ebenenliste daneben wählt Ebene 1.
3. Wählen Sie {{ui:Stütze}} in der Symbolleiste oder drücken Sie {{key:C}}.
4. Klicken Sie auf den Rasterschnittpunkt A/1. Eine Stütze W12x50 erscheint von Ebene 1 bis Ebene 2. Die Statusleiste zeigt, wohin sie gesetzt wurde.
5. Klicken Sie auf B/1, A/2 und B/2, um drei weitere zu platzieren.
6. Wählen Sie Ebene 2 in der Ebenenliste und dann {{ui:Träger}} oder drücken Sie {{key:B}}.
7. Klicken Sie auf A/1 und dann auf A/2. Ein Träger W16x26 verbindet die beiden Stützenköpfe, seine Stahloberkante liegt auf der Ebene.
8. Drücken Sie {{key:Esc}}, um zu {{ui:Wählen}} zurückzukehren, und klicken Sie dann auf den Träger.
9. Wählen Sie {{ui:Kopfplatten}} in der Gruppe {{ui:Anschlüsse}}. Beide Enden erhalten eine verschraubte Kopfplatte, der Träger wird passend gekürzt, und die erste Kopfplatte ist nun ausgewählt.
10. Klicken Sie erneut auf den Träger.
11. Wählen Sie {{ui:Werkstattzeichnung}} in der Gruppe {{ui:Ausgabe}}. Eine Vorschau der Werkstattzeichnung des Trägers öffnet sich. Wählen Sie {{ui:PDF herunterladen}}.
12. Drücken Sie {{key:Mod+S}}, um das Modell zu speichern. Der Browser lädt `Untitled.detailcraft.json` herunter.

Benennen Sie das Modell im Feld {{ui:Name}} oben links um, bevor Sie speichern, damit Datei und jeder Export seinen Namen tragen.

## Wie es weitergeht

- [Ein Rundgang durch den Bildschirm](topic:workspace)
- [Raster und Ebenen einrichten](topic:grids-and-levels)
- [In der 3D-Ansicht navigieren](topic:navigate-3d), mit Maus, Trackpad oder Touchscreen
- [Umstieg von anderer Detaillierungssoftware](topic:coming-from), wenn Sie ein großes Detaillierungspaket kennen
- [Diese Hilfe verwenden](common:help)
