---
title: Dateien öffnen, speichern und exportieren
summary: Die DetailCraft-Modelldatei, jeder Export, den sie erzeugt, wohin die Dateien gehen und was sich je nach Browser und Verbindung unterscheidet.
keywords: öffnen, speichern, exportieren, herunterladen, Datei, json, ifc, nc1, dstv, csv, pdf, zip, Formate, importieren
from: 6fbc8e8f
---

DetailCraft hat eine eigene Datei, das Modell, und fünf Exporte. Jedes Speichern und jeder Export ist ein Download. Nichts wird hochgeladen, und nichts wird auf einem Server gespeichert.

## Die Modelldatei

Ein DetailCraft-Modell wird als `<name>.detailcraft.json` gespeichert, wobei `<name>` der Modellname im Bereich {{ui:Modell}} ist. Sie enthält die Raster, Ebenen, Bauteile (mit ihren Bohrungen und Ausklinkungen), Anschlüsse und deren Einstellungen, Fundamente und Ihre eigenen Profile.

Teile, Marken, Schrauben, Schweißnähte und Bewehrungsstäbe werden nicht gespeichert: DetailCraft berechnet sie bei jedem Öffnen aus dem Modell neu. Deshalb ist eine Modelldatei klein.

### Speichern

1. Geben Sie im Feld {{ui:Name}} oben im Bereich {{ui:Modell}} einen Namen ein.
2. Wählen Sie {{ui:Speichern}} in der Gruppe {{ui:Datei}} oder drücken Sie {{key:Mod+S}}.
3. Der Browser lädt `<name>.detailcraft.json` herunter. In der Statusleiste steht „Gespeichert … (heruntergeladen)“, und der Punkt am Anfang des Browser-Tab-Titels verschwindet.

Jedes Speichern ist ein neuer Download. Der Browser überschreibt die geöffnete Datei nicht; je nach Einstellung hängt er eine Nummer an den Namen an, etwa `Rahmen (1).detailcraft.json`, oder er fragt, wo gespeichert werden soll. Wenn Sie eigene Versionen behalten möchten, benennen Sie die Downloads um.

:::chromium
Chrome und Edge speichern im Ordner Downloads, sofern in den Download-Einstellungen des Browsers nicht **Vor dem Herunterladen jeder Datei nachfragen, wo sie gespeichert werden soll** aktiviert ist. Aktivieren Sie es, wenn Sie bei jedem Mal einen Ordner und einen Dateinamen wählen möchten.
:::

:::firefox
Firefox speichert im Ordner Downloads oder fragt jedes Mal nach, wenn in den Einstellungen **Immer nachfragen, wo Dateien gespeichert werden sollen** aktiviert ist.
:::

:::safari
Safari speichert im Ordner Downloads. Um den Ordner zu ändern, öffnen Sie **Safari, Einstellungen, Allgemein, Speicherort für Downloads**.
:::

### Öffnen

1. Wählen Sie {{ui:Öffnen}} in der Gruppe {{ui:Datei}} oder drücken Sie {{key:Mod+O}}.
2. Wählen Sie eine Datei `.detailcraft.json`.

Oder ziehen Sie die Datei aus {{pick:mac=Finder|windows=Explorer|linux=Ihrem Dateimanager}} und legen Sie sie auf der Ansicht ab. Während des Ziehens zeigt die Ansicht „Ziehen Sie ein DetailCraft-Modell hierher, um es zu öffnen“.

Wenn das geöffnete Modell nicht gespeicherte Änderungen hat, fragt DetailCraft vorher nach: {{ui:Abbrechen}}, {{ui:Änderungen verwerfen}} oder {{ui:Zuerst speichern}}.

DetailCraft prüft jedes Feld einer Datei, bevor es sie verwendet. Was nicht verwendbar ist, wird weggelassen, und die Statusleiste nennt es, zum Beispiel „2 Bauteile waren ungültig und wurden weggelassen.“ Ein Modell, das mit einer neueren DetailCraft-Version gespeichert wurde, wird mit einer Meldung abgelehnt, statt halb richtig geöffnet zu werden.

### Was sich öffnen lässt

Eigene Modelldateien (`.json`, bis 50 MB) und IFC-Dateien (`.ifc`, IFC2X3 oder IFC4, bis 200 MB). Eine IFC-Datei wird beim Öffnen oder beim Importieren mit {{ui:IFC importieren}} zu einem neuen Modell aus ihren Trägern, Stützen, Bauteilen, Blechen, Rastern und Ebenen, mit den darin geschnittenen Bohrungen und Ausklinkungen und ihren Schrauben als lose Schrauben; ein Bericht listet auf, was weggelassen wurde. Siehe [IFC-Export](topic:ifc-export#import). DWG-, DXF- oder Modelle anderer Detaillierungsprogramme lassen sich noch nicht öffnen; der Versuch zeigt „DetailCraft öffnet eigene Modelle (.detailcraft.json) und IFC-Dateien (.ifc)."

## Verlorene Arbeit, zuletzt verwendete Dateien, die Desktop-App

- Solange das Modell Änderungen hat, die Sie nicht gespeichert haben, bewahrt DetailCraft eine Kopie in diesem Browser auf. Wenn Tab oder Browser beendet werden, bevor Sie speichern, fragt DetailCraft beim nächsten Öffnen: **Ihre Arbeit wiederherstellen?** Stellen Sie die Kopie wieder her oder verwerfen Sie sie. Siehe [Ihre Arbeit wiederherstellen](common:recover).
- Zuletzt geöffnete Modelle werden auf dem Startbildschirm aufgelistet, sofern der Browser DetailCraft erlaubt, sie erneut zu öffnen. Klicken Sie auf eines, um es erneut zu öffnen.
- In der Desktop-App schreibt {{ui:Speichern}} das Modell zurück in die geöffnete Datei (im Browser lädt es eine Kopie herunter), und ein Doppelklick auf ein DetailCraft-Modell oder eine IFC-Datei öffnet sie in DetailCraft.

## Exporte

Alle Exporte verwenden den Modellnamen. Wählen Sie sie in der Gruppe {{ui:Ausgabe}}.

| Schaltfläche | Datei | Inhalt |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: Geschosse, Raster, jedes Stahlteil als Profilextrusion mit seinen Bohrungen und Ausklinkungen, Baugruppen, Schrauben und Ankerstangen, Fundamente und jeder Bewehrungsstab. Siehe [IFC exportieren](topic:ifc-export). |
| {{ui:NC-Dateien}} | `<name> NC.zip` | Eine DSTV-Datei `.nc1` je Positionsnummer. Siehe [NC-Dateien an die Werkstatt senden](topic:nc-export). |
| {{ui:Stückliste}} | `<name> BOM.csv` | Drei Tabellen in einer Datei: Teile, Baugruppen sowie Schrauben und Ankerstangen. Siehe [Positionsnummern und Stückliste](topic:marks-and-bom). |
| {{ui:Biegeliste}} | `<name> bending schedule.csv` | Jede Stabmarke in den Fundamenten. Siehe [Fundamente und Bewehrung](topic:footings-and-rebar). |
| {{ui:Werkstattzeichnung}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` enthält ein Blatt je Positionsnummer; {{ui:PDF herunterladen}} liefert das angezeigte Blatt (A3, sofern Sie kein anderes Format gewählt haben). Siehe [Werkstattzeichnungen erstellen](topic:shop-drawings). |
| {{ui:Zeichnungen}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` oder `.dxf`, mehrere in `<name> drawings DWG.zip` (oder `DXF.zip`) | Grundrisse, Ansichten und Montagezeichnungen im von Ihnen gewählten Blattformat; DWG und DXF in voller Größe, 1 Einheit = 1 mm auf dem Papier. Siehe [Übersichts- und Montagezeichnungen](topic:drawings). |

### Hinweise zu den CSV-Dateien

- Sie beginnen mit einer Byte-Order-Mark, damit Tabellenkalkulationen Umlaute richtig lesen.
- Eine Zelle, die mit `=`, `+`, `-` oder `@` beginnt (und keine reine Zahl ist), erhält ein vorangestelltes Hochkomma, damit die Tabellenkalkulation sie nie als Formel ausführt.
- Längen sind in Millimetern und Gewichte in Kilogramm angegeben.

### Hinweise zur PDF-Datei

Der Text in der PDF-Datei verwendet die Standardschrift Helvetica. Zeichen, die sie nicht enthält (außerhalb des westeuropäischen Zeichensatzes), werden als „?“ gedruckt, und die Statusleiste zeigt an, wie viele es sind.

## Einheiten

DetailCraft arbeitet durchgehend in Millimetern: Raster, Ebenen, Koordinaten, Profile, Bohrungen und jeder Export. Profilnamen behalten ihre veröffentlichte Form (W12x50 ist eine US-Bezeichnung, auch wenn die Maße in mm angezeigt werden). Eine Eingabe in Zoll gibt es noch nicht.

## Online und offline

Öffnen, Speichern und Exportieren laufen alle im Browser ab und funktionieren daher gleich, mit oder ohne Verbindung, sobald DetailCraft geladen ist.

Um DetailCraft später ohne Verbindung zu verwenden, wählen Sie während Sie online sind in der App-Leiste {{ui:Für Offline speichern}}. Die Schaltfläche zählt hoch („Speichern 3 von 20“) und zeigt dann {{ui:Offline bereit}}. Die gespeicherte Kopie enthält die 3D-Grafikbibliothek (etwa 2,6 MB) und diese Hilfe; daher funktionieren nach dem Speichern die 3D-Ansicht, jeder Export und die Hilfe offline. Details und was weiterhin eine Verbindung braucht: [Offline arbeiten](common:offline).

:::offline
Sie sind offline. Wenn die App-Leiste {{ui:Offline bereit}} anzeigt, funktionieren Öffnen, Speichern und Exportieren wie gewohnt. Wenn nicht, lassen Sie diesen Tab offen, laden Sie ihn nicht neu, bis Sie wieder online sind, und speichern Sie Ihr Modell jetzt.
:::

Cloud-Speicherung ist noch nicht verfügbar, und es gibt noch keine Desktop-Versionen. Sichern Sie Ihre `.detailcraft.json`-Dateien so, wie Sie jede andere Arbeitsdatei sichern. Mehr dazu unter [Wo Ihre Dateien liegen](common:your-files).

## Nicht gespeicherte Arbeit

DetailCraft bewahrt das Modell nur im geöffneten Tab. Wenn Sie den Tab mit nicht gespeicherten Änderungen schließen oder neu laden, fragt der Browser, ob die Seite verlassen werden soll; der Wortlaut stammt vom Browser. Speichern Sie oft mit {{key:Mod+S}}.
