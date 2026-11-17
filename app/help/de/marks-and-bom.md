---
title: Positionsnummern prüfen und Stückliste
summary: Die Positions- und Baugruppenkennzeichnungen lesen, die DetailCraft jedem Teil gibt, die Stückliste prüfen und sie als CSV herunterladen.
keywords: Kennzeichnung, Nummerierung, Positionsnummer, Baugruppenkennzeichnung, Stücknummer, Stückliste, Materialliste, Gewichte, Schraubenliste, csv, Nummerierung
from: caa2ee80
---

DetailCraft kennzeichnet das Modell selbst. Es gibt keinen Nummerierungsbefehl und nichts auszuführen: Nach jeder Änderung ermittelt DetailCraft, welche Teile dasselbe Stahlteil sind, und vergibt ihnen eine gemeinsame Kennzeichnung.

## Wo die Kennzeichnungen erscheinen

- Die Liste {{ui:Part marks}} im Bereich {{ui:Model}}: jede Kennzeichnung mit Profil, Länge und Anzahl. Klicken Sie eine an, um das erste Teil mit dieser Kennzeichnung auszuwählen.
- Der Bereich {{ui:Properties}} eines ausgewählten Stabs (und die Liste **Positionsnummern** im linken Bereich): {{ui:Part mark}} und {{ui:Assembly}}. Die Überschrift des Bereichs zeigt die Kennzeichnung ebenfalls, zum Beispiel „Träger b1“.
- Der Reiter {{ui:Bill of materials}}, die CSV, die Namen der NC-Dateien, die Werkstattzeichnungen und der IFC-Export (als Kennzeichnung jedes Elements).

## Wie Teile gekennzeichnet werden

- **Positionsnummern:** c für Stützen, b für Träger, br für Aussteifungen, st für Treppenwangen, p für Platten (einschließlich Kopf- und Fußplatten). Dann eine Nummer: c1, c2, b1, p1 … Liegen Teile in mehr als einer Phase, steht eine Phasennummer voran, zum Beispiel 2-b1.
- **Baugruppenkennzeichnungen:** C, B, BR oder P. Eine Baugruppe ist ein Hauptstab mit den daran geschweißten Blechen, etwa ein Träger mit seinen beiden Kopfplatten oder eine Stütze mit ihrer Fußplatte.
- Zwei Teile erhalten dieselbe Kennzeichnung, wenn sie dasselbe Profil, Material und dieselbe Schnittlänge haben sowie dieselben Löcher und Ausklinkungen, jeweils auf 1 mm genau, auch wenn eines gegenüber dem anderen um die Längsachse gedreht oder umgedreht ist.
- Die Nummerierung beginnt mit den Stützen, dann Träger, Aussteifungen und Bleche; innerhalb jeder Gruppe nach Profilname, dann vom längsten zum kürzesten.

Die vollständigen Regeln, einschließlich der Drehungen, die bei U- und Winkelprofilen zählen: [Regeln für Positionsnummern](topic:mark-rules).

:::warning
Kennzeichnungen werden nach jeder Änderung neu ermittelt, sie können sich also neu nummerieren. Das Hinzufügen eines Teils, das Ändern eines Profils oder das Hinzufügen eines Lochs kann b3 zu b4 machen. Betrachten Sie Kennzeichnungen erst als endgültig, wenn das Modell fertig ist, und erstellen Sie Stückliste, NC-Dateien und Werkstattzeichnungen aus demselben gespeicherten Modell.
:::

## Die Stückliste lesen

Öffnen Sie den Reiter {{ui:Bill of materials}} unten. Er hat drei Tabellen.

**Teile**, mit dem gesamten Stahlgewicht in der Überschrift:

| Spalte | Bedeutung |
|---|---|
| Positionsnummer | Klicken Sie darauf, um das erste Teil mit dieser Positionsnummer auszuwählen |
| Typ | Träger, Stütze, Aussteifung, Wange oder Platte |
| Profil | Zum Beispiel W16x26 oder PL20x180 |
| Material | Die Güte, die Sie eingestellt haben |
| Länge (mm) | Schnittlänge nach den Anschlüssen |
| Anzahl | Wie viele |
| Stückgewicht (kg) | Profilmasse pro Meter × Länge |
| Gesamtgewicht (kg) | Stückgewicht × Anzahl |

Die letzte Zeile gibt die Gesamtanzahl und das Gesamtgewicht an.

**Baugruppen:** jede Baugruppenkennzeichnung, ihr Hauptteil, alle ihre Teile (zum Beispiel „b1 + p1 + p1“), Anzahl, Stückgewicht und Gesamtgewicht.

**Schrauben und Ankerstangen:** nach Art, Durchmesser, Länge und Güte gruppiert, mit Anzahl.

:::note
Die Gewichte sind Bruttogewichte: Löcher und Ausklinkungen werden nicht abgezogen. Schrauben, Muttern, Unterlegscheiben und Schweißnähte sind nicht im Stahlgewicht enthalten.
:::

## Herunterladen

Wählen Sie {{ui:Download CSV}} im Reiter oder {{ui:BOM}} in der Gruppe {{ui:Output}}. Die Datei `<name> BOM.csv` enthält die drei Tabellen nacheinander, jede unter ihrem Titel, mit einer Leerzeile dazwischen. Sie lässt sich in jedem Tabellenkalkulationsprogramm öffnen.

## Vor dem Versand prüfen

1. Öffnen Sie den Reiter {{ui:Problems}} und beheben Sie jede Zeile. Ein Anschluss, der nicht gebaut werden konnte, fügt keine Platte, Löcher oder Schrauben hinzu, daher wäre die Stückliste unvollständig.
2. Achten Sie auf unerwartete Kennzeichnungen. Zwei Träger, die Sie für gleich halten, aber mit unterschiedlichen Kennzeichnungen, unterscheiden sich meist durch ein Loch, eine Ausklinkung oder eine Schnittlänge; wählen Sie jeden aus und vergleichen Sie.
3. Speichern Sie das Modell und erstellen Sie alle Exporte aus diesem gespeicherten Stand.
