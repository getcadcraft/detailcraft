---
title: Dateien öffnen, speichern und exportieren
summary: Die Modelldatei von DetailCraft, jeder Export, den es schreibt, wohin die Dateien gehen und was je nach Browser und Verbindung abweicht.
from: bd715ea3
keywords: öffnen, speichern, exportieren, Download, Datei, json, ifc, nc1, dstv, csv, pdf, zip, Formate, importieren
---

DetailCraft hat eine eigene Datei, das Modell, und fünf Exporte. Jedes Speichern und jeder Export ist ein Download. Nichts wird hochgeladen, und nichts bleibt auf einem Server.

## Die Modelldatei

Ein DetailCraft-Modell wird als `<name>.detailcraft.json` gespeichert, wobei `<name>` der Modellname im Bereich {{ui:Modell}} ist. Sie enthält die Raster, Ebenen, Stäbe (mit ihren Bohrungen und Ausklinkungen), Anschlüsse und ihre Einstellungen, Fundamente und Ihre eigenen Profile.

Bauteile, Nummern, Schrauben, Schweißnähte und Stäbe werden nicht gespeichert: DetailCraft ermittelt sie bei jedem Öffnen aus dem Modell neu. Deshalb ist eine Modelldatei klein.

### Speichern

1. Geben Sie oben im Bereich {{ui:Modell}} im Feld {{ui:Name}} einen Namen ein.
2. Wählen Sie in der Gruppe {{ui:Datei}} {{ui:Speichern}} oder drücken Sie {{key:Mod+S}}.
3. Der Browser lädt `<name>.detailcraft.json` herunter. Die Statusleiste meldet „Saved … (downloaded)“, und der Punkt am Anfang des Tab-Titels verschwindet.

Jedes Speichern ist ein neuer Download. Der Browser überschreibt die geöffnete Datei nicht; je nach Einstellung hängt er dem Namen eine Nummer an, etwa `Frame (1).detailcraft.json`, oder fragt, wo gespeichert werden soll. Eigene Versionen behalten Sie, indem Sie die Downloads umbenennen.

:::chromium
Chrome und Edge speichern in Ihren Ordner Downloads, sofern in den Download-Einstellungen des Browsers nicht **Vor dem Herunterladen jeweils nach dem Speicherort fragen** eingeschaltet ist. Schalten Sie es ein, wenn Sie jedes Mal Ordner und Dateinamen wählen wollen.
:::

:::firefox
Firefox speichert in Ihren Ordner Downloads oder fragt jedes Mal, wenn in den Einstellungen **Immer nachfragen, wo Dateien gespeichert werden sollen** eingeschaltet ist.
:::

:::safari
Safari speichert in Ihren Ordner Downloads. Um den Ordner zu ändern, öffnen Sie **Safari, Einstellungen, Allgemein, Ablageort für geladene Dateien**.
:::

### Öffnen

1. Wählen Sie in der Gruppe {{ui:Datei}} {{ui:Öffnen}} oder drücken Sie {{key:Mod+O}}.
2. Wählen Sie eine Datei `.detailcraft.json`.

Oder ziehen Sie die Datei aus {{pick:mac=dem Finder|windows=dem Datei-Explorer|linux=Ihrem Dateimanager}} und legen Sie sie auf der Ansicht ab. Die Ansicht zeigt beim Ziehen „Drop a DetailCraft model to open it“.

Hat das geöffnete Modell nicht gespeicherte Änderungen, fragt DetailCraft zuerst: {{ui:Abbrechen}}, {{ui:Änderungen verwerfen}} oder {{ui:Zuerst speichern}}.

DetailCraft prüft jedes Feld einer Datei, bevor es sie verwendet. Was sich nicht verwenden lässt, wird ausgelassen, und die Statusleiste sagt, was, zum Beispiel „2 members were not valid and left out.“ Ein Modell, das ein neueres DetailCraft gespeichert hat, wird mit einer Meldung abgelehnt, statt halb richtig geöffnet zu werden.

### Was sich öffnen lässt

Die eigenen Modelldateien (`.json`, bis 50 MB) und IFC-Dateien (`.ifc`, IFC2X3 oder IFC4, bis 200 MB). Eine IFC-Datei, geöffnet oder mit {{ui:IFC importieren}} hereingeholt, wird zu einem neuen Modell aus ihren Trägern, Stützen, Stäben, Blechen, Rastern und Ebenen, mit den darin eingeschnittenen Bohrungen und Ausklinkungen und ihren Schrauben als lose Schrauben; ein Bericht listet auf, was ausgelassen wurde. Siehe [IFC-Export](topic:ifc-export#import). DWG, DXF oder das Modell eines anderen Detaillierungsprogramms öffnet es noch nicht; der Versuch zeigt „DetailCraft opens its own models (.detailcraft.json) and IFC files (.ifc).“

## Verlorene Arbeit, zuletzt verwendete Dateien, die Desktop-App

- Solange das Modell nicht gespeicherte Änderungen hat, behält DetailCraft eine Kopie in diesem Browser. Bricht der Tab oder der Browser vor dem Speichern ab, fragt DetailCraft beim nächsten Öffnen **Recover your work?**: die Kopie wiederherstellen oder verwerfen. Siehe [Ihre Arbeit wiederherstellen](common:recover).
- Zuletzt geöffnete Modelle stehen auf dem Startbildschirm, wenn der Browser DetailCraft erlaubt, sie erneut zu öffnen; klicken Sie auf eines, um es wieder zu öffnen.
- In der Desktop-App schreibt {{ui:Speichern}} das Modell zurück in die geöffnete Datei (im Browser lädt es eine Kopie herunter), und ein Doppelklick auf ein DetailCraft-Modell oder eine IFC-Datei öffnet sie in DetailCraft.

## Exporte

Alle Exporte verwenden den Modellnamen. Wählen Sie sie in der Gruppe {{ui:Ausgabe}}.

| Schaltfläche | Datei | Inhalt |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: Geschosse, Raster, jedes Stahlbauteil als Profilextrusion mit seinen Bohrungen und Ausklinkungen, Baugruppen, Schrauben und Ankerstangen, Fundamente und jeder Stab. Siehe [IFC exportieren](topic:ifc-export). |
| {{ui:NC-Dateien}} | `<name> NC.zip` | Eine DSTV-Datei `.nc1` je Positionsnummer. Siehe [NC-Dateien an die Werkstatt senden](topic:nc-export). |
| {{ui:Stückliste}} | `<name> BOM.csv` | Drei Tabellen in einer Datei: Bauteile, Baugruppen sowie Schrauben und Ankerstangen. Siehe [Nummern und Stückliste](topic:marks-and-bom). |
| {{ui:Biegeliste}} | `<name> bending schedule.csv` | Jede Positionsnummer eines Stabs in den Fundamenten. Siehe [Fundamente und Bewehrung](topic:footings-and-rebar). |
| {{ui:Werkstattzeichnung}} | `<name> <mark>.pdf` | Ein Blatt (A3, sofern Sie keine andere Größe gewählt haben) für das gewählte Bauteil (I-Profile und Bleche). Siehe [Eine Werkstattzeichnung erstellen](topic:shop-drawings). |
| {{ui:Zeichnungen}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` oder `.dxf`, mehrere in `<name> drawings DWG.zip` (oder `DXF.zip`) | Die Grundrisse, Ansichten und Baugruppenzeichnungen in der gewählten Blattgröße; DWG und DXF in voller Größe, 1 Einheit = 1 mm auf dem Papier. Siehe [Übersichts- und Baugruppenzeichnungen](topic:drawings). |

### Hinweise zu den CSV-Dateien

- Sie beginnen mit einer Byte-Order-Marke, damit Tabellenkalkulationen Umlaute und Akzente richtig lesen.
- Eine Zelle, die mit `=`, `+`, `-` oder `@` beginnt (und keine einfache Zahl ist), erhält einen vorangestellten Apostroph, damit eine Tabellenkalkulation sie nie als Formel ausführt.
- Längen sind in Millimetern und Gewichte in Kilogramm.

### Hinweise zum PDF

Text im PDF verwendet die Standardschrift Helvetica. Zeichen, die sie nicht hat (außerhalb des westeuropäischen Satzes), werden als „?“ gedruckt, und die Statusleiste sagt, wie viele.

## Einheiten

DetailCraft arbeitet durchgehend in Millimetern: Raster, Ebenen, Koordinaten, Profile, Bohrungen und jeder Export. Profilnamen behalten ihre veröffentlichte Form (W12x50 ist eine US-Bezeichnung, auch wenn ihre Maße in mm gezeigt werden). Eine Eingabe in Zoll gibt es noch nicht.

## Online und offline

Öffnen, Speichern und Exportieren geschehen alle in Ihrem Browser und funktionieren daher, sobald DetailCraft geladen ist, mit und ohne Verbindung gleich.

Um DetailCraft später ohne Verbindung zu nutzen, wählen Sie online in der Anwendungsleiste {{ui:Für Offline speichern}}. Die Schaltfläche zählt hoch („Saving 3 of 20“) und zeigt dann {{ui:Offline bereit}}. Die gespeicherte Kopie enthält die 3D-Grafikbibliothek (etwa 2,6 MB) und diese Hilfe, sodass nach dem Speichern die 3D-Ansicht, jeder Export und die Hilfe offline funktionieren. Einzelheiten und was weiterhin eine Verbindung braucht: [Offline arbeiten](common:offline).

:::offline
Sie sind offline. Zeigt die Anwendungsleiste {{ui:Offline bereit}}, funktionieren Öffnen, Speichern und Exportieren wie gewohnt. Wenn nicht, lassen Sie diesen Tab geöffnet, laden ihn nicht neu, bevor Sie wieder online sind, und speichern Ihr Modell jetzt.
:::

Speichern in der Cloud gibt es noch nicht, und Desktop-Builds ebenfalls nicht. Sichern Sie Ihre Dateien `.detailcraft.json` so wie jede andere Arbeitsdatei. Mehr unter [Wohin Ihre Dateien gehen](common:your-files).

## Nicht gespeicherte Arbeit

DetailCraft hält das Modell nur im geöffneten Tab. Schließen oder laden Sie den Tab mit nicht gespeicherten Änderungen neu, fragt der Browser, ob Sie die Seite verlassen wollen; der Wortlaut ist der des Browsers. Speichern Sie oft mit {{key:Mod+S}}.
