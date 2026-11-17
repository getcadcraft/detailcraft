---
title: Übersichts- und Montagezeichnungen
summary: Grundrisse, Ansichten und je eine Montagezeichnung pro Montagenummer aus dem Modell erstellen, auf Blättern von A4 bis A1 oder ANSI B bis D, mit Revisionsbuchstaben herausgeben und als PDF, DWG oder DXF herunterladen.
keywords: verdeckte Linien, verdeckte Linien entfernen, gestrichelt, Revisionswolke, wolken, Revisionsdreieck, Ankerstangenplan, Ankerstangen, Stangenliste, Fußplattenliste, Absteckung, herausgeben, Revision, Rev, Revisionstabelle, erneut herausgeben, Herausgabeprotokoll, dwg, dxf, CAD-Datei, Zeichnungen exportieren, Zeichnungen, Übersicht, Grundriss, Ansicht, Montagezeichnung, Blattgröße, Papiergröße, a4, a3, a2, a1, ANSI B, ANSI C, ANSI D, Tabloid, 11 x 17, 22 x 34, pdf, drucken, Maßstab, Schriftfeld, Modellverweis
from: 709f8604
---

Wählen Sie {{ui:Drawings}} in der Gruppe {{ui:Output}}. DetailCraft erstellt den ganzen Satz aus dem Modell, so wie es jetzt ist. Nichts wird gespeichert: Ändern Sie das Modell und öffnen Sie {{ui:Drawings}} erneut, dann wird der Satz neu erstellt.

## Was im Satz enthalten ist

- **Grundrisse**, einer je Geschoss, das etwas enthält, von oben gesehen.
- **Ansichten**, eine je Rasterlinie, an der Stäbe innerhalb von 1 m liegen.
- **Der Ankerstangenplan**, wenn das Modell Fußplatten hat: jede Fußplatte von oben mit ihrer Stütze und ihren Ankerstangen, die Raster mit ihren Maßen, ein typisches Detail jedes Stangenbilds (BP1, BP2 …) mit dem Stangenabstand und den Randabständen sowie zwei Listen. Die eine listet die Ankerstangen nach Positionsnummer auf (R1, R2 …: Menge, Durchmesser, Länge, Überstand über der Platte, Einbindetiefe, Güte). Die andere listet die Fußplatten nach Raster auf (Stütze, Bild, Platte, Stangen, Oberkante Platte). Eine Stütze außerhalb des Rasters wird über ihre Koordinaten eingeordnet.
- **Montagezeichnungen**, je eine pro Montagenummer: Vorder-, Draufsicht und Seitenansichten, verkettete Maße zu Löchern und Plattenrändern, die Teileliste, lose Schrauben und Stangen sowie Hinweise zu Schweißnähten und Löchern. Jede geschweißte Platte hat in der Vorderansicht ein Kehlnahtsymbol (AWS A2.4). Der Pfeil zeigt auf die Verbindung. Das Dreieck unterhalb der Bezugslinie bedeutet die Pfeilseite. Die Zahl links davon ist die Schweißnahtgröße in mm. Ein Kreis, wo der Pfeil auf die Linie trifft, bedeutet ringsum.

**Verdeckte Linien.** Grundrisse und Ansichten lassen die Linien eines Teils weg, wenn ein Teil, das ganz davor liegt, es verdeckt (ein von der Seite gesehener Träger hinter einer Stütze). Montagezeichnungen zeichnen eine Platte gestrichelt, wo das Hauptteil sie verdeckt: in der Vorderansicht hinter dem Steg (von der −u-Seite des Teils gesehen), in der Draufsicht unter dem oberen Flansch. Teile, die in gleicher Tiefe liegen oder sich in der Tiefe überlappen, werden beide voll gezeichnet.

Jedes Blatt hat ein Schriftfeld mit der Zeichnungsnummer, dem Maßstab, dem Modellnamen, dem Datum, der Blattnummer mit der Blattgröße und dem Modellverweis. Der Modellverweis ist ein Code aus dem gespeicherten Modell, damit ein Ausdruck dem Modell zugeordnet werden kann, aus dem er stammt.

## Blattgröße wählen

Wählen Sie die Größe in der Liste oben im Fenster {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) oder {{ui:ANSI D}} (22 × 34 in). Jedes Blatt ist quer. Der Satz wird sofort auf der neuen Größe erstellt, und dieselbe Größe wird für Werkstattzeichnungen verwendet. Sie steht auch in den [DetailCraft-Einstellungen](topic:settings#drawings), und dieser Browser merkt sie sich.

- Ein größeres Blatt wird in einem größeren Maßstab gezeichnet. Die Maßstäbe sind immer Normmaßstäbe (1:10, 1:20, 1:25, 1:50, 1:100 und so weiter).
- Der Text hat auf jedem Blatt dieselbe Größe, damit er beim Drucken lesbar bleibt.
- Auf einem kleinen Blatt kann eine lange, dünne Montage über ihre Tiefe einen größeren Maßstab bekommen als über ihre Länge. Der Ansichtstitel nennt dann beide Maßstäbe, und dann gelten die Maße.

## Blätter herausgeben und Revisionen

Die Zeile über der Vorschau sagt, wo das gezeigte Blatt steht: **Noch nicht herausgegeben**, **Rev B, herausgegeben … ; seitdem unverändert** oder, in Rot, **Seit Rev B geändert: muss erneut herausgegeben werden**. Die Blattliste markiert herausgegebene Blätter mit ihrer Revision und die Blätter, die erneut herausgegeben werden müssen.

- Geben Sie an, wofür die Herausgabe ist (sie beginnt mit „Zur Fertigung herausgegeben“). Wählen Sie dann {{ui:Issue this sheet}}, oder {{ui:Geänderte Blätter herausgeben}} für jedes Blatt, das neu ist oder seit seiner letzten Herausgabe geändert wurde.
- Die erste Herausgabe eines Blatts ist Revision A, dann B, C und so weiter (I und O werden übersprungen).
- Das Schriftfeld zeigt die Zeichnungsnummer mit ihrer Revision („A-B1  rev B“). Eine Revisionstabelle daneben listet die letzten Herausgaben auf: Revision, Datum und Beschreibung. Auf einem kleinen Blatt zeigt sie so viele, wie hineinpassen.
- Ein Blatt ändert sich, wenn sich das darauf Gezeichnete ändert: ein verschobenes Teil, ein neues Loch, eine neu nummerierte Positionsnummer. Das Datum, die Blattanzahl und die Revisionstabelle selbst zählen nicht. Eine Änderung der Blattgröße ändert jedes Blatt.
- Das Herausgabeprotokoll wird in der Modelldatei gespeichert, und eine Herausgabe ist ein einzelner Schritt zum Rückgängigmachen. Die [KISS-Datei](topic:kiss-export) enthält die letzte Revision jeder Zeichnung.

### Revisionswolken

Ab der zweiten Herausgabe eines Blatts wird jedes Teil oder Fundament, das sich geändert hat, in eine Revisionswolke mit einem Revisionsdreieck gezeichnet, das den Buchstaben trägt.

- Solange sich ein Blatt seit seiner letzten Herausgabe geändert hat, zeigen die Wolken, was sich seitdem geändert hat. Im Dreieck steht die kommende Revision (Rev B herausgegeben und geändert: die Dreiecke zeigen C).
- Sobald Sie es herausgeben, bleiben die Wolken auf dem Blatt dieser Revision, wie in einem gedruckten Satz, bis sich das Blatt erneut ändert.
- Jedes Blatt umwölkt nur die Änderungen, die es zeigt. Grundrisse und Ansichten zeichnen keine Löcher oder Ausklinkungen. Daher umwölken sie einen Stab, der verschoben, gedreht oder in der Größe geändert wurde oder dessen Nummer sich geändert hat. Montagezeichnungen und der Ankerstangenplan umwölken auch neue oder verschobene Löcher und Ausklinkungen.
- Eine neu nummerierte Positionsnummer zählt: Wenn eine Änderung einen Träger zu einer neuen Montage macht, werden in Grundrissen und Ansichten die Träger umwölkt, deren Nummer hochgezählt hat (B1 zu B2).
- Ein gelöschtes Teil hinterlässt nichts zum Umwölken.
- Blätter, die vor der Einführung der Revisionswolken herausgegeben wurden (DetailCraft 0.4), beginnen ab ihrer nächsten Herausgabe mit Wolken.
- Wolken sind in den PDF-, DXF- und DWG-Downloads enthalten und zählen selbst nie als Änderung.

## Herunterladen

Wählen Sie das Format in der Liste neben den Schaltflächen und dann {{ui:Dieses Blatt}} für das gezeigte Blatt oder {{ui:Alle Blätter}} für den ganzen Satz.

- **PDF**: zum Drucken oder Versenden. {{ui:Alle Blätter}} erstellt eine PDF-Datei mit einer Seite je Blatt, jede Seite in der gewählten Größe.
- **DWG**, im Format 2018, 2013, 2010, 2007, 2004 oder 2000: um die Blätter in einem CAD-Programm zu öffnen. Wählen Sie für ein älteres Programm ein älteres Format.
- **DXF (R12)**: die Version, die fast jedes CAD-Programm öffnet.

Ein DWG- oder DXF-Blatt wird in voller Größe gezeichnet: Eine Zeichnungseinheit ist ein Millimeter auf dem Papier. Daher wird es im Maßstab 1:1 gedruckt, und jede Ansicht behält den Maßstab, den ihr Titel angibt. Jeder Stift ist eine eigene Ebene: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID und so weiter, mit seiner Linienstärke (DWG) und seinen Strichen. Wörter sind Text im Textstil DetailCraft (Arial). Maße sind die Linien und Zahlen, die Sie sehen, keine Bemaßungsobjekte. {{ui:Alle Blätter}} legt die DWG- oder DXF-Dateien in ein ZIP-Archiv, eine Datei je Blatt.

:::note
DXF R12 hat keine Linienstärken und keine Füllungen. Die Ebenen behalten ihre Namen. Stellen Sie daher die Stifte beim Plotten nach Ebene ein. Gefüllte Formen werden weggelassen (die Statusleiste sagt, wie viele).
:::

Drucken Sie mit 100 % (ohne „An Seite anpassen“) auf Papier derselben Größe, wenn die angegebenen Maßstäbe stimmen sollen.
