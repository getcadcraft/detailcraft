---
title: Einen kopierten Bereich als Referenzbild einfügen
summary: Einen Teil eines PDF-Blattes in MarkupCraft kopieren und in DetailCraft in seiner wahren Größe auf eine Ebene unter den Stahl einfügen, um darüber zu modellieren.
keywords: Bild, Referenzbild, Unterlage, Hintergrund, Bereich kopieren, MarkupCraft, PDF, nachzeichnen, wahre Größe, Maßstab, Deckkraft, Überlagerung
from: 0c48445f
---

Das Werkzeug „Bereich kopieren“ von MarkupCraft kopiert einen Teil eines Blattes als Bild, das seine Größe kennt. Fügen Sie es in DetailCraft ein, dann liegt es flach auf einer Ebene, in seiner wahren Größe, unter dem Raster und dem Stahl, sodass Sie Stäbe über einem Grundriss aus den Zeichnungen platzieren können.

## Einfügen

1. Kopieren Sie in MarkupCraft den Bereich über {{ui:Mehr}} › {{ui:Bereich der Seite kopieren…}}, dann {{ui:Kopieren}} (oder {{ui:Als Überlagerung kopieren}}, wodurch das Papier durchsichtig wird).
2. Drücken Sie in DetailCraft (im selben Browser) {{key:Mod+V}} oder wählen Sie {{ui:Einfügen}}.

Das Bild landet in der Mitte des Rasters auf der Ebene, die im {{ui:Grundriss}} angezeigt wird (in {{ui:3D}} oder einer Ansicht auf der untersten Ebene), und wird ausgewählt. Die Statusleiste zeigt seine Größe an.

- **Wahre Größe:** Hatte das Blatt einen Zeichnungsmaßstab, wird ein Pixel als die Länge gezeichnet, die es auf der Zeichnung darstellt.
- **Papiergröße:** Hatte das Blatt keinen Maßstab, ist das Bild so groß, wie der Bereich auf Papier war, und die Statusleiste sagt dies. Geben Sie in {{ui:Eigenschaften}} einen neuen Wert für **mm pro Pixel** ein, um es zu skalieren.

Ein als Überlagerung kopierter Bereich beginnt mit der Deckkraft, mit der er kopiert wurde.

{{key:Mod+V}} fügt ein, was Sie zuletzt kopiert haben: den Bereich aus MarkupCraft oder Stäbe und Fundamente, die in DetailCraft kopiert wurden. Wurde nach dem Bereich ein anderes Bild in die Zwischenablage kopiert (aus einem anderen Programm), wird nichts eingefügt; kopieren Sie den Bereich erneut.

## Verschieben, ändern und löschen

- Klicken Sie auf das Bild, um es zu wählen (was davor liegt, wird zuerst gewählt). Eine blaue Umrandung zeigt, dass es gewählt ist.
- Ziehen Sie es, um es über die Ebene zu verschieben. Seine Mitte und Ecken rasten auf Rasterschnittpunkten ein.
- Geben Sie in {{ui:Eigenschaften}} ein, wohin seine Mitte soll (x, y) und auf welcher Ebene es liegt (z), sowie seine **mm pro Pixel** und seine **Deckkraft**.
- {{key:Delete}} oder {{ui:Löschen}} entfernt es.

Jedes Einfügen, Verschieben, Ändern und Löschen ist ein Schritt: {{key:Mod+Z}} nimmt ihn zurück.

Das Bild wird in der Modelldatei gespeichert und öffnet sich daher mit dem Modell. Es dient nur als Referenz: Es ist nicht in Zeichnungen, Exporten, der Stückliste oder einer Kopie enthalten.
