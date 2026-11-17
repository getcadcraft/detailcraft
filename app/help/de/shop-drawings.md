---
title: Werkstattzeichnungen erstellen
summary: Ein Blatt pro Positionsnummer, alle auf einmal erstellt. Jedes lässt sich in der Vorschau ansehen, ein Blatt oder den ganzen Satz wird als PDF im Format A4 bis A1 oder ANSI B bis D heruntergeladen, mit Löchern, Ausklinkungen, Bemaßung und Schriftfeld.
keywords: Werkstattzeichnung, Werkstattzeichnungen, alle Teile, Stapel, gesamter Satz, Einzelteilzeichnung, Fertigungszeichnung, pdf, Detailzeichnung, Teilzeichnung, drucken
from: d25fe035
---

DetailCraft erstellt ein Blatt pro Positionsnummer, für jeden Träger, jede Stütze, jede Aussteifung und jede Platte im Modell, alle auf einmal: Sie müssen sie nicht einzeln wählen. Gleich aufgebaute Teile tragen dieselbe Kennzeichnung und teilen sich daher ein Blatt. Die Blätter entstehen direkt aus dem Modell; sie werden nicht gespeichert und nicht bearbeitet.

## Den ganzen Satz erstellen

1. Wählen Sie {{ui:Shop drawing}} in der Gruppe {{ui:Output}}. Es muss nichts ausgewählt sein. Ist ein Teil ausgewählt, öffnet sich das Fenster mit dem Blatt dieses Teils. Im Bereich {{ui:Properties}} heißt dieselbe Schaltfläche für Stäbe {{ui:Shop drawing}} und für Anschlüsse {{ui:Plate drawing}}.
2. Eine Vorschau öffnet sich, mit der Positionsnummer im Titel, zum Beispiel „Werkstattzeichnung b1“. Die erste Liste neben dem Titel enthält jede Positionsnummer mit Profil, Länge und Menge: Wählen Sie eine, um ihr Blatt zu sehen. Die zweite Liste ändert das Blattformat; der ganze Satz wird im neuen Format erneut erstellt (siehe [Übersichts- und Baugruppenzeichnungen](topic:drawings#choose-the-sheet-size)).
3. Wählen Sie {{ui:Download all}} (die Schaltfläche zeigt die Blattanzahl) für ein PDF mit einer Seite pro Positionsnummer, `<name> Shop drawings.pdf`. Jedes Blatt zeigt „Blatt 3 von 42“ in seinem Schriftfeld. Oder wählen Sie {{ui:Download this sheet}} für das gerade angezeigte Blatt, `<name> <mark>.pdf`.
4. Schließen Sie die Vorschau mit dem ×-Zeichen oder {{key:Esc}}.

Ist {{ui:Shop drawing}} ausgegraut, hat das Modell noch keine Teile.

## Was auf dem Blatt steht

Für ein I-Profil:

- **Ansicht** auf den Steg: das Teil mit seinen Ausklinkungen, Löcher im Steg als Kreise und Flanschlöcher als verdeckte (gestrichelte) Linien.
- **Grundriss des oberen Flansches**, von oben gesehen, wenn ein Flansch Löcher hat. Löcher im unteren Flansch werden gestrichelt dargestellt.
- **Schnitt** durch das Profil.
- **Bemaßung:** verkettete Lochpositionen entlang des Teils plus die Gesamtlänge, Lochhöhen im Steg, das Wurzelmaß und die Größen der Ausklinkungen.
- **Lochliste:** jede Lochgruppe, zum Beispiel „8 x Ø22 im oberen Flansch“.
- **Schweißnaht**, wenn an dem Teil Bleche angeschweißt sind.
- **Schriftfeld:** Positionsnummer, Baugruppenkennzeichnung, Profil, Material, Länge, Menge, Gewicht je Stück und gesamt, Modellname und Datum.

Bei einem U-Profil, Winkel oder Hohlprofil ist das Blatt gleich, mit Blick auf den Steg oder die Seite: Die Wände eines Rohrs sind verdeckte (gestrichelte) Linien, und der Schnitt zeigt die Wandstärke.

Bei einer Platte: die Plattenfläche mit ihren Löchern und ihre Kante als Schnitt.

## Maßstäbe

Der Maßstab wird aus einer Liste gewählt (1:1 bis 1:200), damit das Teil auf das Blatt passt. Ein langes, flaches Teil wäre bei einem Maßstab zu dünn zum Lesen. Liegt die Tiefe auf Papier unter 30 mm, wird die Tiefe daher in einem größeren Maßstab gezeichnet als die Länge. Der Ansichtstitel sagt das dann, zum Beispiel „Länge 1:20, Tiefe 1:5 (nicht im selben Maßstab; die Bemaßung gilt)“. Lesen Sie Maße immer aus der Bemaßung ab, nicht durch Messen am Blatt.

## Wissenswertes

- Die Menge ist die Anzahl der Teile mit dieser Kennzeichnung im Modell. Kennzeichnungen können sich nach einer Änderung neu nummerieren; siehe [Positionsnummern prüfen und Stückliste](topic:marks-and-bom).
- Jedes Blatt zeigt ein einzelnes Teil ohne Schweißsymbole. Baugruppenzeichnungen (mit Schweißsymbolen) und Übersichtszeichnungen stehen unter [Zeichnungen](topic:drawings). Das Blatt lässt sich in DetailCraft nicht bearbeiten oder beschriften. Zum Markieren öffnen Sie das PDF in einer PDF-Markierungs-App wie MarkupCraft.
- Das Schriftfeld sagt „DetailCraft-Laborversion — Millimeter“.
- Der Text verwendet die Standard-PDF-Schrift Helvetica. Zeichen außerhalb des westeuropäischen Zeichensatzes werden als „?“ gedruckt, und die Statusleiste zählt sie.

## Drucken

Öffnen Sie das heruntergeladene PDF in Ihrem PDF-Betrachter und drucken Sie es mit 100 % (nicht „an Seite anpassen“) auf Papier im gewählten Format, wenn die angegebenen Maßstäbe stimmen sollen. Auf einem kleineren Blatt skalieren Sie es und verlassen sich auf die Bemaßung.
