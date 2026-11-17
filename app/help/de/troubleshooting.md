---
title: Fehlerbehebung
summary: Was die Meldungen von DetailCraft bedeuten und was zu tun ist, von einer fehlenden 3D-Ansicht bis zu Anschlüssen, die sich nicht erstellen lassen.
keywords: Problem, Fehler, funktioniert nicht, Hilfe, beheben, Meldung, abgelehnt, WebGL, leer, Warnung, kann nicht, Störung
from: f8c3b2b1
---

Die meisten Ablehnungen werden in der Statusleiste unten am Bildschirm oder im Reiter {{ui:Probleme}} erklärt. Lesen Sie diese zuerst. Die Meldungen unten werden so zitiert, wie DetailCraft sie anzeigt.

## Die 3D-Ansicht fehlt

**„Dieser Browser konnte keine 3D-Grafik (WebGL) starten. Modell, Berichte und Exporte funktionieren weiterhin.“**

Der Browser konnte WebGL nicht starten, die 3D-Grafik, mit der DetailCraft zeichnet.

1. Aktualisieren Sie den Browser auf die neueste Version.
2. Schalten Sie die Hardwarebeschleunigung ein und starten Sie den Browser neu (siehe unten).
3. Aktualisieren Sie Ihren Grafiktreiber oder probieren Sie einen anderen Browser. Remotedesktops und virtuelle Maschinen haben oft kein WebGL.
4. Inzwischen können Sie weiterarbeiten: Bauteile mit dem Formular {{ui:Nach Raster hinzufügen}} platzieren, Berichte lesen und exportieren. Nur das Klicken in der Ansicht braucht WebGL.

:::chromium
Um die Hardwarebeschleunigung einzuschalten, öffnen Sie **Einstellungen, System** und schalten **Grafikbeschleunigung verwenden, wenn verfügbar** ein, dann starten Sie neu.
:::

:::firefox
Um die Hardwarebeschleunigung einzuschalten, öffnen Sie **Einstellungen, Allgemein, Leistung**, deaktivieren **Empfohlene Leistungseinstellungen verwenden** und aktivieren **Hardwarebeschleunigung verwenden, wenn verfügbar**. Starten Sie Firefox neu.
:::

:::safari
Safari hat WebGL standardmäßig eingeschaltet. Aktualisieren Sie macOS, wenn die Ansicht trotzdem nicht startet, und prüfen Sie, dass keine Erweiterung es blockiert.
:::

Mehr unter [Browser und Computer](common:browsers).

## Klick in der Ansicht bewirkt nichts

- **Kein Schnittpunkt in der Nähe des Klicks.** Platzierwerkzeuge fangen nur auf Rasterschnittpunkte ein. Ein Klick abseits jedes Punkts bewirkt nichts. Gehen Sie näher heran, bis der Punkt aufleuchtet.
- **Das Werkzeug ist {{ui:Wählen}} und Sie haben in eine leere Stelle geklickt.** Das hebt die Auswahl auf.
- **Sie haben gezogen.** Drücken und Loslassen mit mehr als wenigen Pixeln Abstand gilt als Ziehen: Die Ansicht dreht oder verschiebt sich.
- **Das Teil ist abgeschnitten.** In {{ui:Grundriss}} und {{ui:Ansicht}} ist Stahl außerhalb des Schnitts ausgeblendet und lässt sich nicht anklicken. Wechseln Sie zu {{ui:3D}}.
- **Der Schnittpunkt liegt auf der falschen Ebene.** In {{ui:3D}} können sich Schnittpunkte mehrerer Ebenen auf dem Bildschirm überlappen; der Klick nimmt den nächsten. Verwenden Sie {{ui:Grundriss}} oder {{ui:Ansicht}}.

## Meldungen beim Platzieren

| Meldung | Was zu tun ist |
|---|---|
| Es gibt keine Ebene über Ebene 2, die die Stütze erreichen kann. Legen Sie zuerst eine Ebene an. | Legen Sie in {{ui:Ebenen}} eine Ebene an oder klicken Sie auf eine tiefere Ebene |
| Wählen Sie für das andere Ende einen anderen Schnittpunkt. | Sie haben zweimal denselben Punkt angeklickt |
| Die beiden Enden sind derselbe Punkt. | In {{ui:Nach Raster hinzufügen}} sind die Auswahlen „Von“ und „Bis“ gleich |
| Fügen Sie links Rasterlinien hinzu, um Bauteile zu platzieren. | Das Modell hat in einer Richtung keine Rasterlinien |
| Unbekanntes Profil „…“ | Das Profil ist nicht im Katalog oder unter den eigenen Profilen des Modells. Wählen Sie eines aus der Liste |
| Geben Sie eine Zahl ein. | Ein Zahlenfeld ist leer oder enthält Text |

## Anschlüsse lassen sich nicht erstellen

### „Dieser Träger endet nicht auf einer Stützenachse.“

Stirnplatten brauchen das Trägerende genau auf der Achse einer senkrechten Stütze, zwischen deren Unterkante und Oberkante (innerhalb 1 mm). Prüfen Sie die {{ui:Enden (x, y, z mm)}} des Trägers und die Position der Stütze.

### „Dieser Träger trifft auf einen Stützensteg oder in einem Winkel“

Oder in {{ui:Probleme}}: „Träger, die an einen Stützensteg anschließen, sind noch nicht umgesetzt: Drehen Sie die Stütze um 90° oder verwenden Sie einen anderen Anschluss.“

Der Träger schließt an den Stützensteg an. Wählen Sie die Stütze und stellen Sie {{ui:Drehung (°)}} auf 90, dann versuchen Sie es erneut. Schiefe Anschlüsse sind noch nicht umgesetzt.

### „Stirnplatten werden nur für waagerechte Träger erstellt (dieser Träger ist geneigt).“

Beide Enden des Trägers müssen auf gleicher Höhe liegen.

### „Stirnplatten brauchen den Träger aufrecht (Drehung 0).“

Setzen Sie die {{ui:Drehung (°)}} des Trägers zurück auf 0.

### „Stirnplatten brauchen einen I-Träger.“ / „Stirnplatten brauchen eine I-Stütze.“

Nur I-Profile (W, IPE, HEA, HEB oder ein eigenes I) erhalten Stirnplatten.

### „Das Trägerende liegt nicht mehr auf der Stützenachse.“

Sie haben den Träger oder die Stütze nach dem Hinzufügen des Anschlusses verschoben. Verschieben Sie es zurück oder löschen Sie den Anschluss.

### „Die Anschlüsse schneiden dieses Bauteil auf nichts zurück.“

Die Anschlüsse an beiden Enden schneiden das Bauteil weiter zurück, als es lang ist, zum Beispiel ein sehr kurzer Träger zwischen zwei tiefen Stützen. Prüfen Sie die Enden des Bauteils und die Dicke der Platte.

### „Keine anderen Anschlüsse wie dieser … ohne Verbindung.“

{{ui:Ähnlich}} kopiert nur auf Anschlüsse mit demselben Trägerprofil, demselben Stützenprofil und derselben Anschlussart (Träger an einen Flansch), die noch keinen Anschluss haben.

### „Beide Enden haben bereits Anschlüsse.“ / „Diese Stütze hat bereits eine Fußplatte.“

Wählen Sie den vorhandenen Anschluss zum Ändern aus oder löschen Sie ihn zuerst.

## Warnungen im Reiter „Probleme“

Warnungen verhindern nicht, dass ein Anschluss oder ein Fundament erstellt wird; sie fordern Sie auf, es zu prüfen. Die Rand- und Abstandswarnungen verwenden die Mindestwerte aus EN 1993-1-8, Tabelle 3.3 (Rand 1.2 × Loch, Lochabstand 2.2 × Loch, Wurzelmaß 2.4 × Loch). Wenn Ihr Projekt andere Regeln verwendet, trifft die Warnung möglicherweise nicht zu; DetailCraft bemisst keine Anschlüsse.

„Ein Loch liegt außerhalb des Teils“ bedeutet, dass das x eines Lochs kleiner als 0 oder größer als die Schnittlänge ist. Denken Sie daran, dass x ab dem Schnittanfang gemessen wird, nachdem Anschlüsse das Teil zurückgeschnitten haben.

## Änderungen am Fundament werden abgelehnt

| Meldung | Was zu tun ist |
|---|---|
| Die Betondeckung lässt in diesem Fundament keinen Platz für Bewehrung. | Machen Sie das Fundament größer oder die Betondeckung kleiner |
| Das Fundament ist für zwei Bewehrungslagen innerhalb der Betondeckung zu flach. | Machen Sie es tiefer oder verringern Sie die Betondeckung |
| Die Anschlussbewehrung passt mit 75 mm Betondeckung nicht ins Fundament. | Weniger Anschlüsse, geringerer Abstand oder ein größeres Fundament |
| Der Stababstand muss 50–1000 mm betragen. | Geben Sie einen Abstand in diesem Bereich ein |
| Die Länge muss 300–50000 mm betragen. | Fundamentgrößen haben Grenzen: Länge und Breite 300 bis 50000, Tiefe 150 bis 10000 |

## Raster und Ebenen werden abgelehnt

| Meldung | Was zu tun ist |
|---|---|
| Nummerierte Raster: Geben Sie je Linienpaar einen Abstand an (4). | Zählen Sie Ihre Lücken: Fünf Linien brauchen vier Abstände |
| Raster mit Buchstaben: Abstände müssen positive Millimeter sein. | Keine Nullen, negativen Werte oder Text |
| Nummerierte Raster: Rasterbezeichnungen müssen verschieden sein. | Zwei Linien haben dieselbe Bezeichnung |
| Höchstens 60 Rasterlinien pro Richtung. | Teilen Sie das Modell auf |
| Mindestens eine Ebene behalten. | Sie haben jede Ebenenzeile entfernt |
| Jede Ebene braucht einen Namen. / Zwei Ebenen heißen „…“. | Geben Sie jeder Ebene einen anderen Namen |

## Das Öffnen einer Datei schlägt fehl

| Meldung | Ursache |
|---|---|
| DetailCraft öffnet eigene Modelle (.detailcraft.json). IFC-Import ist noch nicht umgesetzt. | Die Datei ist keine `.json`-Datei |
| Dies ist kein DetailCraft-Modell (nicht JSON). | Die Datei ist beschädigt oder eine andere JSON-Datei |
| Dies ist kein DetailCraft-Modell. | Eine JSON-Datei eines anderen Programms |
| Dieses Modell wurde von einer neueren DetailCraft-Version gespeichert (Format 2). | Öffnen Sie es in der neueren DetailCraft, die es gespeichert hat |
| Diese Datei ist zu groß für ein DetailCraft-Modell. | Über 50 MB |

Wenn eine Datei mit Warnungen wie „2 Bauteile waren nicht gültig und wurden ausgelassen.“ geöffnet wird, ist der Rest des Modells in Ordnung. Überschreiben Sie das Original nicht, bevor Sie geprüft haben, was ausgelassen wurde.

## Exporte

| Meldung | Ursache |
|---|---|
| Noch nichts zu exportieren. | {{ui:IFC}} bei leerem Modell |
| Keine I-Profil- oder Blechteile, für die NC-Dateien geschrieben werden können. | Im Modell nur U-Profile, Winkel oder Rohre |
| Nicht geschrieben (bisher nur I-Profile und Bleche): … | Diese Markierungen sind keine I-Profile oder Bleche; der Rest wurde geschrieben |
| Keine Fundamente, daher keine Bewehrung zu listen. | {{ui:Biegeliste}} ohne Fundamente |
| … Zeichen außerhalb der PDF-Schrift werden als „?“ gedruckt. | Der Modellname oder eine Festigkeitsklasse enthält Zeichen, die die PDF-Schrift nicht hat |

{{ui:Werkstattzeichnung}} ist ausgegraut: Das Modell hat noch keine Teile.

## Downloads erscheinen nicht

Jedes Speichern und jeder Export ist ein Browser-Download. Prüfen Sie die Downloadliste Ihres Browsers. Fragt der Browser vor dem Herunterladen mehrerer Dateien oder blockiert Downloads von dieser Seite, erlauben Sie sie. In Safari prüfen Sie die Downloadschaltfläche in der Symbolleiste.

## Tasten reagieren nicht

- Der Cursor steht in einem Text- oder Zahlenfeld: Werkzeugtasten und {{key:Delete}} werden dort ignoriert, damit Sie tippen können. Drücken Sie {{key:Tab}} oder klicken Sie in die Ansicht.
- Ein Dialogfeld ist offen: Schließen Sie es zuerst.
- Der Browser hat die Tastatur (zum Beispiel die Adressleiste): Klicken Sie in DetailCraft.
- {{key:Ctrl+Shift+F}} verwendet auch auf dem Mac Ctrl.

## Offline-Probleme

Die Schaltfläche {{ui:Für Offline speichern}} in der App-Leiste zeigt, in welchem Zustand die Offline-Kopie ist. Wie das Speichern funktioniert: [Offline arbeiten](common:offline).

| Die Schaltfläche zeigt | Bedeutung | Was zu tun ist |
|---|---|---|
| {{ui:Für Offline speichern}} | In diesem Browser gibt es noch keine Offline-Kopie | Wählen Sie es, solange Sie online sind |
| Speichern: 5 von 20 | Das Speichern läuft | Warten Sie auf {{ui:Offline bereit}}; lassen Sie den Tab offen |
| {{ui:Offline bereit}} | DetailCraft, seine 3D-Ansicht, jeder Export und diese Hilfe funktionieren ohne Verbindung | Nichts. Klicken Sie darauf für {{ui:Erneut speichern (neueste Version holen)}} oder {{ui:Offline-Kopie entfernen}} |
| {{ui:Speichern nicht möglich}} | Einige Dateien wurden nicht heruntergeladen | Prüfen Sie Ihre Verbindung und klicken Sie darauf, um es erneut zu versuchen |
| {{ui:Offline nicht verfügbar}} | Dieses Fenster kann keine Offline-Kopie speichern: Private Fenster und einige verwaltete Computer blockieren das | Verwenden Sie ein normales Fenster oder arbeiten Sie online |

Sind Sie offline und die Schaltfläche zeigt nicht {{ui:Offline bereit}}, laden Sie die Seite nicht neu und schließen Sie den Tab nicht: Was geladen wurde, funktioniert weiter. Speichern Sie Ihr Modell mit {{key:Mod+S}} und warten Sie, bis Sie wieder online sind.

## Nicht gespeicherte Arbeit

Fragt der Browser, ob Sie die Seite verlassen möchten, hat DetailCraft nicht gespeicherte Änderungen. Wählen Sie, auf der Seite zu bleiben, und drücken Sie dann {{key:Mod+S}}. DetailCraft kann ein Modell nach dem Schließen des Tabs nicht wiederherstellen.

## Noch nicht weitergekommen

Notieren Sie, was Sie getan haben und die genaue Meldung, und teilen Sie es uns über die [Support-Seite](https://getcadcraft.com/support) mit.
