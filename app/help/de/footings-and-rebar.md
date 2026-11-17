---
title: Fundamente mit Bewehrung platzieren
summary: Rechteckige Einzelfundamente mit unterer Matte und Anschlussbewehrung platzieren, prüfen und die Biegeliste herunterladen.
keywords: Fundament, Einzelfundament, Gründung, Bewehrung, Bewehrungsstäbe, Matte, Anschlussbewehrung, Dübel, Biegeliste, Stabliste, Beton, Haken, Betondeckung
from: 41a048be
---

Dieses Thema behandelt rechteckige Einzelfundamente. Balken, Stützen, Decken und Wände stehen in [Stahlbeton im Detail](topic:reinforced-concrete). Jedes Fundament erhält eine untere Matte in beide Richtungen und, falls gewünscht, Anschlussbewehrung, die senkrecht daraus hervorsteht. Die Stäbe reichen von US-Größen #3 bis #11.

## Fundament platzieren

1. Wählen Sie {{ui:Grundriss}} und die Ebene der Fundamentoberkante.
2. Wählen Sie {{ui:Fundament}} in der Gruppe {{ui:Platzieren}} oder drücken Sie {{key:F}}.
3. Stellen Sie das Fundament im Bereich {{ui:Eigenschaften}} ein (siehe unten) oder behalten Sie die Standardwerte.
4. Klicken Sie auf einen Rasterschnittpunkt. Das Fundament wird darauf zentriert, mit seiner Oberkante auf der Ebene. Die Statusleiste zeigt zum Beispiel „Fundament 2000 x 2000 x 600 unter A/1.“

Sie können auch das Formular {{ui:Nach Raster hinzufügen}} am unteren Rand des Bereichs verwenden.

Das Fundament wird durchsichtig dargestellt, damit Sie seine Bewehrung sehen, die als volle Röhren gezeichnet wird.

## Fundamenteinstellungen

| Feld | Standard | Hinweise |
|---|---|---|
| Länge L (mm) | 2000 | In x-Richtung; 300 bis 50000 |
| Breite B (mm) | 2000 | In y-Richtung; 300 bis 50000 |
| Höhe H (mm) | 600 | 150 bis 10000 |
| Beton | 4000 psi | Text, wird im IFC-Export ausgegeben |

**Untere Matte**

| Feld | Standard | Hinweise |
|---|---|---|
| Lange Stäbe | #5 | Stäbe in Richtung L, untere Lage |
| Abstand (mm) | 250 | Größter zulässiger Abstand; die Stäbe werden gleichmäßig auf diesem oder einem kleineren Abstand verteilt |
| Kurze Stäbe | #5 | Stäbe in Richtung B, auf den langen Stäben verlegt |
| Abstand (mm) | 250 | Wie oben |
| Betondeckung (mm) | 75 | Lichte Betondeckung an jeder Fläche |
| Endhaken | Ein | Biegt beide Enden jedes Mattenstabs zu einem Standardhaken mit 90° nach oben (Form U); Aus ergibt gerade Stäbe (Form S) |

**Anschlussbewehrung**

| Feld | Standard | Hinweise |
|---|---|---|
| Anschlussbewehrung | Ein | Ausschalten für ein Fundament ohne Anschlussbewehrung |
| Stab | #6 | |
| Stäbe in L / Stäbe in B | 2 / 2 | Ein Raster aus Stäben, zentriert auf dem Fundament |
| Abstand in L / Abstand in B | 250 / 250 | Zwischen den Stabmitten |
| Überstand über Oberkante | 600 | Wie weit die Stäbe über die Fundamentoberkante hinausragen |
| Haken unten | Ein | Ein 90°-Haken nach außen, auf der Matte aufliegend (Form L) |

Unter den Feldern zeigt DetailCraft die Hakenlänge für die langen Stäbe, zum Beispiel „Hakenlänge für #5: 254 mm außen bis außen.“

## Platziertes Fundament ändern

Wählen Sie das Fundament (klicken Sie auf den Beton abseits von Stützen oder auf einen seiner Stäbe). Sie erhalten dieselben Felder plus {{ui:Mitte x}}, {{ui:Mitte y}}, {{ui:Oberkante z}} und {{ui:Drehung (°)}}. Darunter listet eine Tabelle die Stäbe dieses Fundaments mit ihren Positionsnummern, Anzahlen und Längen sowie das Betonvolumen in Kubikmetern.

Jede Änderung wird vor dem Übernehmen geprüft. Eine Änderung, die nicht umgesetzt werden kann, wird abgelehnt, und die Statusleiste nennt den Grund, zum Beispiel „Die Betondeckung lässt keinen Platz für Stäbe in diesem Fundament.“, „Das Fundament ist für zwei Bewehrungslagen innerhalb der Betondeckung zu flach.“ oder „Die Anschlussbewehrung passt mit 75 mm Betondeckung nicht in das Fundament.“

Änderungen, die sich umsetzen lassen, aber eine Prüfung brauchen, werden unter dem Fundament und in der Registerkarte {{ui:Probleme}} aufgelistet:

- „#11-Stäbe mit 59.6 mm lassen weniger als 35.8 mm lichten Abstand (ACI 318-19 25.2.1).“ Der lichte Abstand zwischen den Stäben muss mindestens dem Stabdurchmesser und mindestens 25.4 mm entsprechen.
- „#5-Haken benötigen 254 mm Tiefe; innerhalb der Betondeckung passen nur 150 mm.“ Die Hakenschenkel werden dann gekürzt, um zu passen, und sind daher keine Standardhaken mehr.
- „Die Anschlusshaken reichen in die Betondeckung.“
- „Die Anschlussbewehrung liegt enger als der minimale lichte Abstand.“

## Positionsnummern und Biegeliste

Gleiche Stäbe (gleiche Größe, Form und Maße auf den Millimeter genau) erhalten über alle Fundamente hinweg dieselbe Positionsnummer. Positionsnummern werden als `<Stabnummer>F<n>` geschrieben: 5F1, 5F2 für #5-Stäbe, 6F1 für den ersten #6-Stab usw. Fundamente mit gleicher Größe, gleichem Beton, gleicher Matte und gleicher Anschlussbewehrung teilen sich eine Positionsnummer: F1, F2 …

1. Öffnen Sie unten die Registerkarte {{ui:Biegeliste}}. Jede Zeile ist eine Positionsnummer: Größe, Form, Maße A, B und C, Anzahl, Schnittlänge, Gesamtlänge, Masse je Meter, Gewicht je Stück, Gesamtgewicht und wofür der Stab verwendet wird.
2. Wählen Sie in der Registerkarte {{ui:CSV herunterladen}} oder {{ui:Biegeliste}} im Menü {{ui:Mehr}} der Gruppe {{ui:Ausgabe}}, für `<name> bending schedule.csv`.

Die Formen sind DetailCraft-eigene Codes, keine Norm: S gerade, L einfach gebogen, U zweifach gebogen. Maße sind außen bis außen; die Schnittlänge ist die genaue Mittellinienlänge durch die Biegungen. Siehe [Bewehrungsübersicht](topic:rebar-reference).

## Was DetailCraft nicht prüft

- Verankerungs- und Übergreifungslängen sowie ob die Anschlussbewehrung für die Stütze darüber lang genug ist.
- Den Größtkornanteil der Regel für den lichten Abstand (das Mischungsrezept ist nicht bekannt).
- Alles zur Stütze oder Fußplatte darüber: Fundamente und Stahl sind getrennte Teile.

Siehe auch [Noch nicht umgesetzt](topic:not-built-yet).
