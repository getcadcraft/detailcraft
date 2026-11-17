---
title: Den IFC-Export gegen die IDS eines Kunden prüfen
summary: Laden Sie die erhaltene .ids-Datei und sehen Sie unter Probleme jedes exportierte Bauteil, das sie nicht erfüllt, bevor Sie die IFC-Datei senden.
keywords: ids, Information Delivery Specification, buildingSMART, Anforderungen, Lieferung, Prüfung, Validierung, QS, IFC-Export, Eigenschaft, Material, Beschaffung
from: 50d0f785
---

## Was Sie tun

Eine IDS (Information Delivery Specification, ein buildingSMART-Standard) ist die Liste dessen, was eine IFC-Datei enthalten muss. DetailCraft prüft die IFC-Datei, die es exportieren würde (dieselbe Datei, die {{ui:IFC}} schreibt), gegen die IDS, die Sie erhalten haben, und listet jedes Bauteil auf, das nicht genügt.

## Schritte

1. Öffnen oder zeichnen Sie Ihr Modell.
2. Klicken Sie auf {{ui:Gegen IDS prüfen…}} in der Gruppe {{ui:Ausgabe}} der Symbolleiste.
3. Klicken Sie auf {{ui:Eine .ids-Datei laden…}} und wählen Sie die Datei. Es wird nichts hochgeladen.
4. Lesen Sie das Ergebnis: jede Anforderung mit {{ui:Bestanden}} oder {{ui:Nicht bestanden}} und die Anzahl der Elemente, auf die sie zutrifft.
5. Öffnen Sie Probleme ({{key:Ctrl+Shift+M}}) und klicken Sie auf einen Fehler: Das Bauteil, die Verbindung, die Treppe oder das Fundament, von dem er stammt, wird ausgewählt, und die Ansicht zoomt darauf.

## Was Sie sehen sollten

- Eine Warnung pro exportiertem Element und Anforderung, die es verfehlt, mit dem Namen der Anforderung, dem, was die IDS verlangt, und dem, was der Export enthält.
- Der Prüfbericht (unter Probleme) beginnt mit der IDS: Titel, Version, Autor und die Anzahl je Anforderung.

## Gut zu wissen

- Die IDS wird in der Modelldatei gespeichert, daher wird sie beim Öffnen des Modells erneut geprüft. Laden oder Vergessen ist ein Schritt, den Sie rückgängig machen können.
- Jede Änderung wird kurz danach erneut geprüft; bei einem großen Modell wartet die Prüfung zwischen den Durchläufen etwas länger.
- Die GlobalIds des Exports stammen aus dem Modellnamen und den Positionsnummern in DetailCraft, bleiben also von einer Prüfung zur nächsten gleich. Das Umbenennen des Modells gibt jedem Element neue GlobalIds.
- Zahlen werden in SI-Einheiten verglichen (der Export ist in Millimetern; Längen werden zuerst in Meter umgerechnet).

- Muster in der IDS werden als ganzer Wert gelesen. Ein `^` am Anfang und ein `$` am Ende gelten ebenfalls als „ganzer Wert“, wie es die meisten IDS-Dateien meinen.

## Weiter

- [IFC exportieren](topic:ifc-export)
