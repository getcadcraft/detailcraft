---
title: IFC für die Koordination exportieren
summary: Eine IFC4-Datei des gesamten Modells schreiben (Stahl, Schrauben, Fundamente und Bewehrung), um sie mit Architekten, Fachplanern und anderer Software zu teilen.
keywords: ifc, ifc4, ifc2x3, bim, export, import, IFC importieren, Löcher, Schrauben, lose Schrauben, Öffnungen, Verbindungsmittel, Koordination, Modellaustausch, step, openbim, Kollision, Betrachter
from: cfcb0cd6
---

Der IFC-Export schreibt das gesamte Modell als eine IFC4-Datei, die BIM-Software und IFC-Betrachter öffnen können.

## Exportieren

1. Wählen Sie {{ui:IFC}} in der Gruppe {{ui:Output}}.
2. Der Browser lädt `<name>.ifc` herunter. Die Statusleiste zeigt, was enthalten ist, zum Beispiel „IFC4 exportiert: 25 Teile, 88 Verbindungsmittel, 7 Fundamente, 132 Bewehrungsstäbe.“

Hat das Modell keine Teile, Fundamente oder Bewehrungsstäbe, zeigt die Statusleiste „Noch nichts zum Exportieren.“

## Was in der Datei steht

| In DetailCraft | In der IFC-Datei |
|---|---|
| Jede Ebene | Ein Geschoss (IfcBuildingStorey), unter einem Projekt, Grundstück und Gebäude |
| Raster | Ein IfcGrid mit seinen Achsen und Beschriftungen |
| Stützen, Träger, Aussteifungen | IfcColumn, IfcBeam, IfcMember (Aussteifung), jeweils eine Extrusion einer Standard-Profilform mit den tatsächlichen Maßen |
| Bleche, Kopfplatten, Fußplatten | IfcPlate |
| Löcher und Ausklinkungen | Öffnungen (IfcOpeningElement), aus dem Teil ausgeschnitten |
| Ein Stab und seine angeschweißten Bleche | Eine Baugruppe (IfcElementAssembly), mit der Baugruppenkennzeichnung versehen |
| Schrauben und Ankerstangen | IfcMechanicalFastener mit Durchmesser und Länge |
| Fundamente | IfcFooting (Einzelfundament), mit dem Beton als Material |
| Jeder Stab | IfcReinforcingBar mit Positionsnummer, Durchmesser, Querschnittsfläche und Länge, entlang seiner echten Mittellinie geführt, mit echten Bögen an den Biegungen |

Die Kennzeichnung jedes Teils ist seine Positionsnummer. Jedes Element trägt außerdem einen Eigenschaftssatz „DetailCraft“ mit seinen Kennzeichnungen, dem Profil und dem Gewicht. Jedes Element steht im höchsten Geschoss, das auf oder unter seinem tiefsten Punkt liegt. Materialien werden nach Güte gruppiert.

## Stabile IDs für erneuten Export

Jede IFC-ID (GlobalId) eines Elements wird aus dem Modellnamen und der eigenen ID des Elements im Modell berechnet. Exportieren Sie dasselbe Modell zweimal, stimmen die IDs überein, sodass Software, die Versionen vergleicht, erkennen kann, was sich geändert hat.

:::warning
Wenn Sie das Modell umbenennen, ändert sich jede ID. Behalten Sie den Modellnamen zwischen den Ausgaben eines Projekts bei.
:::

## Prüfen

Die IFC-Dateien von DetailCraft werden in der Testsuite von einem unabhängigen IFC-Leser eingelesen. Programme unterscheiden sich darin, wie sie IFC lesen. Öffnen Sie die Datei deshalb in der Software Ihres Teams, bevor Sie sich darauf verlassen. Die App BimCraft von CadCraft öffnet IFC-Dateien ebenfalls.

## Noch nicht verfügbar

- Verbindungen, Fundamente und Bewehrung aus einer IFC-Datei übernehmen. {{ui:Import IFC}} übernimmt Träger, Stützen, Stäbe, Bleche, Raster, Ebenen, Löcher, Ausklinkungen und Schrauben und listet auf, was es ausgelassen hat.
- Analytische oder statische Berechnungsdaten.
- Alles außer der IFC4-Referenzansicht.

## Importieren

{{ui:Import IFC}} in der Gruppe {{ui:File}} (oder das Ziehen einer `.ifc`-Datei in die Ansicht) erstellt aus einer IFC2X3- oder IFC4-Datei ein neues Modell:

- **Träger, Stützen, Stäbe (Aussteifungen) und Bleche**, deren Körper ein einzelnes extrudiertes Profil ist, das DetailCraft kennt, dem Katalog zugeordnet oder als benutzerdefiniertes Profil übernommen; **Raster** und **Ebenen** aus dem Raster und den Geschossen der Datei.
- **Löcher:** jede runde Öffnung (IfcOpeningElement, die ein übernommenes Teil durchbricht), rechtwinklig zu einer der Flächen des Teils: am Steg oder an den Flanschen eines I- oder U-Profils, an den Wänden eines Rohrs, an einer Platte, an den Schenkeln eines Winkels. Ein Loch durch beide Wände eines Rohrs wird nur einmal übernommen.
- **Ausklinkungen:** eine rechteckige Öffnung, die bei einem I- oder U-Profil die volle Breite von einem Ende aus einnimmt, von oben nach unten oder von unten nach oben.
- **Schrauben:** jedes IfcMechanicalFastener oder IfcFastener mit Durchmesser, Länge, Güte und Art (Schraube oder Ankerstange) als **lose Schraube**. Lose Schrauben werden in der Ansicht, der Stückliste und im IFC-Export angezeigt und bleiben an ihrem Ort, wenn Sie Stäbe verschieben. Der Bereich {{ui:Properties}} zählt sie, wenn nichts ausgewählt ist, und hat {{ui:Remove loose bolts}} für den Fall, dass Sie stattdessen Anschlüsse hinzufügen.

Der Bericht listet alles Übrige nach Klasse auf, mit dem Grund, warum es ausgelassen wurde: Wände und Decken, Fundamente und Bewehrung, geschlitzte Löcher, Löcher in Rundrohren, Anschlüsse (eine IFC-Datei enthält deren Bleche und Schrauben, aber nicht die Regel, die sie erzeugt hat).
