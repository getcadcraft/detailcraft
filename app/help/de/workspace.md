---
title: Ein Rundgang durch den Bildschirm
summary: Jede Leiste, jeder Bereich und jede Registerkarte in DetailCraft mit ihrem Namen auf dem Bildschirm und wofür sie gut ist.
from: 454f74fd
keywords: Bildschirm, Layout, Symbolleiste, Bereiche, Eigenschaften, Statusleiste, Berichte, Oberfläche, UI, Registerkarten
---

DetailCraft füllt das Browserfenster unterhalb der Anwendungsleiste. Von oben nach unten: die Symbolleiste, dann drei Spalten (der Bereich {{ui:Modell}}, die Ansicht, der Bereich {{ui:Eigenschaften}}), dann die Berichtsregisterkarten, dann die Statusleiste.

## Die Anwendungsleiste

Die schmale Leiste ganz oben gehört zur CadCraft-Website, nicht zum Modell. Sie zeigt App-Namen und Version, einen Link {{ui:Über DetailCraft}}, {{ui:Hilfe}} (oder {{key:F1}}) für diese Hilfe, {{ui:Für Offline speichern}}, die Schaltfläche für den Bildschirmmodus und den Schalter {{ui:Papier}} / {{ui:Modell}}.

- {{ui:Für Offline speichern}} behält DetailCraft, seine 3D-Ansicht und diese Hilfe in Ihrem Browser, damit es ohne Verbindung startet. Nach dem Speichern zeigt die Schaltfläche {{ui:Offline bereit}}; ein Klick darauf bietet {{ui:Erneut speichern (neueste Version holen)}} oder {{ui:Offline-Kopie entfernen}}. Siehe [Offline arbeiten](common:offline).
- {{ui:Papier}} gibt einen hellen Bildschirm und {{ui:Modell}} einen dunklen. Die 3D-Ansicht folgt sofort; am Modell ändert sich nichts.
- Die Schaltfläche für den Bildschirmmodus und {{key:Ctrl+Shift+F}} schalten zwischen Normalansicht, Vollbild und Vollbild mit ausgeblendeten Leisten um. {{key:Ctrl+Shift+F}} verwendet auf jedem Computer die Control-Taste, auch auf einem Mac. Bei ausgeblendeten Leisten zeigen Sie auf den oberen Bildschirmrand (oder tippen ihn an), um sie zurückzuholen. {{key:Esc}} beendet das Vollbild.

## Die Symbolleiste

Die Symbolleiste hat fünf Gruppen. Bewegen Sie den Zeiger über eine Schaltfläche, um zu sehen, was sie tut und welche Taste sie hat.

| Gruppe | Schaltflächen | Was sie tun |
|---|---|---|
| {{ui:Datei}} | {{ui:Neu}}, {{ui:Öffnen}}, {{ui:IFC importieren}}, {{ui:Speichern}}, {{ui:Beispiel}} | Ein Modell beginnen, eine gespeicherte `.detailcraft.json` oder eine IFC-Datei öffnen, eines speichern oder den Beispielrahmen öffnen |
| {{ui:Platzieren}} | {{ui:Wählen}}, {{ui:Träger}}, {{ui:Stütze}}, {{ui:Aussteifung}}, {{ui:Blech}}, {{ui:Fundament}}, {{ui:Treppe}} | Das Werkzeug, das der nächste Klick in der Ansicht verwendet |
| {{ui:Anschlüsse}} | {{ui:Kopfplatten}}, {{ui:Fußplatte}}, und unter {{ui:Mehr}}: {{ui:Anschlusslaschen}}, {{ui:Stoß}}, {{ui:Knotenblech}}, {{ui:Ähnlich}} | Einen Anschluss an den gewählten Träger, die gewählte Stütze oder Aussteifung setzen oder den gewählten Anschluss auf jeden gleichen Knoten kopieren |
| {{ui:Bearbeiten}} | {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:Mehr}} | In den Änderungen zurück- und vorwärtsgehen; die Auswahl kopieren und einfügen. {{ui:Mehr}} öffnet ein Menü mit {{ui:Ausschneiden}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:An gleicher Position einfügen}}, {{ui:Duplizieren}}, {{ui:Löschen}}, {{ui:Alles auswählen}} und {{ui:Auswahl aufheben}}, jeweils mit seiner Taste |
| {{ui:Ausgabe}} | {{ui:IFC}}, {{ui:NC-Dateien}}, {{ui:Stückliste}}, {{ui:Werkstattzeichnung}}, {{ui:Zeichnungen}}, und unter {{ui:Mehr}}: {{ui:Biegeliste}}, {{ui:Gewichtsbericht nach Phase}}, {{ui:KISS-Datei für Fertigungssoftware}} | Einen Export herunterladen oder die Zeichnungsblätter öffnen |

Schaltflächen und Menüeinträge, die gerade nicht wirken können, sind ausgegraut, und der Zeiger darüber sagt, warum. {{ui:Kopfplatten}} braucht einen gewählten Träger, {{ui:Fußplatte}} eine gewählte Stütze, {{ui:Ähnlich}} einen gewählten Anschluss, {{ui:Werkstattzeichnung}} ein gewähltes I-Profil oder Blech, {{ui:Kopieren}} einen gewählten Stab oder ein gewähltes Fundament und {{ui:Einfügen}} etwas Kopiertes. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

## Der Bereich Modell (links)

- {{ui:Modell}}: der {{ui:Name}} des Modells. Er benennt jede Datei, die Sie speichern oder exportieren.
- {{ui:Raster}}: die Rasterlinien und ihre Abstände sowie {{ui:Raster übernehmen}}. Siehe [Raster und Ebenen einrichten](topic:grids-and-levels).
- {{ui:Ebenen}}: eine Zeile je Ebene (Name und Höhe in mm), {{ui:Ebene hinzufügen}} und {{ui:Ebenen übernehmen}}.
- {{ui:Eigenes Profil}}: einen eigenen parametrischen Querschnitt erstellen. Geschlossen, bis Sie ihn öffnen.
- {{ui:Positionsnummern}}: jede Positionsnummer im Modell mit Profil, Länge und Anzahl. Klicken Sie auf eine Nummer, um das erste Bauteil damit zu wählen.

{{ui:Raster}}, {{ui:Ebenen}} und {{ui:Eigenes Profil}} lassen sich einklappen: Klicken Sie auf ihre Überschriften.

## Die Ansicht (Mitte)

Die Ansicht zeigt das Modell in 3D. Darüber hat die Ansichtsleiste drei Schaltflächen und eine Liste:

- {{ui:3D}}: das Modell frei drehen.
- {{ui:Grundriss}}: senkrecht von oben auf eine Ebene sehen. Neben den Schaltflächen erscheint eine Liste der Ebenen. Alles, was mehr als 1,5 m über der Ebene liegt, wird weggeschnitten, damit Sie die Ebene klar sehen und anklicken können.
- {{ui:Ansicht}}: gerade auf eine Rasterlinie mit Buchstaben sehen (Raster A, Raster B …). Eine Liste der Raster mit Buchstaben erscheint. Es wird nur der Stahl innerhalb von 1 m um diese Linie gezeigt.
- Die Einpassen-Schaltfläche am rechten Ende der Ansichtsleiste zoomt, bis das ganze Modell sichtbar ist.

Kleine Punkte markieren jeden Rasterschnittpunkt auf jeder Ebene. Solange ein Platzierwerkzeug aktiv ist, leuchtet der Punkt, der dem Zeiger am nächsten liegt, und die Statusleiste nennt ihn, zum Beispiel „A/2 at Level 1“. Farben unterscheiden die Stabarten: Stützen, Träger, Aussteifungen und Bleche haben jeweils eine eigene Farbe, Schrauben und Stangen eine weitere, Fundamente sind durchsichtig und Bewehrung wird als Röhren gezeichnet. Bohrungen erscheinen als dunkle Stopfen; Ausklinkungen sind ausgeschnitten.

Wie Sie drehen, verschieben und zoomen: [In der 3D-Ansicht bewegen](topic:navigate-3d).

Ist das Modell leer, zeigt die Ansicht eine kurze Liste „Start a model“. Sie können auch eine gespeicherte Modelldatei an beliebiger Stelle auf der Ansicht ablegen, um sie zu öffnen.

## Der Bereich Eigenschaften (rechts)

Was dieser Bereich zeigt, hängt davon ab, was Sie gerade tun, und seine Überschrift sagt es: „Model“, „Place a beam“, „Beam b2“, „End plate connection“, „Base plate“, „Footing F1“, „3 selected“ oder „Paste“.

- **Nichts gewählt:** eine Zusammenfassung des Modells (Stäbe, Anschlüsse, Fundamente, Bauteile, Nummern, Schrauben, Stahl- und Bewehrungsgewicht, Raster, Ebenen).
- **Ein Platzierwerkzeug aktiv:** die Optionen für das nächste Teil (Profil, Material, Position, Drehung und bei Stützen {{ui:Bis}}), eine Zusammenfassung des gewählten Profils und ein Formular {{ui:Nach Raster hinzufügen}}, um ohne Klick in der Ansicht zu platzieren.
- **Ein Stab gewählt:** sein Name, Profil, Material, Position, Drehung, die Koordinaten seiner beiden Enden, seine Nummern, Zuschnittlänge und sein Gewicht, seine Bohrungen und Ausklinkungen sowie Schaltflächen für Anschlüsse, seine Werkstattzeichnung und {{ui:Löschen}}.
- **Ein Anschluss gewählt:** jede Einstellung für Blech, Schrauben und Schweißnaht, die Schrauben und die Schweißnaht, die er erzeugt, seine Warnungen und {{ui:Auf ähnliche anwenden}}.
- **Ein Fundament gewählt:** seine Position und Größe, die untere Matte, die Anschlussbewehrung und die Stabnummern, die es verwendet.
- **Mehrere Dinge gewählt:** wie viele Stäbe jeder Art, Anschlüsse und Fundamente, ihr Stahlgewicht sowie {{ui:Kopieren}}, {{ui:Duplizieren}} und {{ui:Löschen}}.
- **Einfügen:** was in der Zwischenablage liegt, und Formulare, um mit einem eingetippten Versatz oder auf einen Rasterschnittpunkt einzufügen, den Sie aus Listen wählen.

Zahlenfelder werden wirksam, wenn Sie {{key:Enter}} drücken oder das Feld verlassen. Jede Änderung ist ein Schritt, den Sie rückgängig machen können.

## Die Berichtsregisterkarten (unten)

- {{ui:Probleme}}: alles, was DetailCraft nicht aufbauen konnte oder was Sie prüfen sollen, mit einer Schaltfläche {{ui:Wählen}} in jeder Zeile. Die Registerkarte zeigt die Anzahl in Klammern.
- {{ui:Stückliste}}: Bauteile, Baugruppen sowie Schrauben und Ankerstangen mit Gewichten und einem Link {{ui:CSV herunterladen}}. Klicken Sie auf eine Positionsnummer, um das Bauteil zu wählen.
- {{ui:Biegeliste}}: jede Stabnummer in jedem Fundament, mit einem Link {{ui:CSV herunterladen}}.

Bei fokussierter Registerkarte wechseln {{key:Left}} und {{key:Right}} zwischen den Registerkarten.

## Die Statusleiste

Die Leiste am unteren Rand hat drei Teile: den Rasterschnittpunkt unter dem Zeiger beim Platzieren, die letzte Meldung (was gerade geschehen ist oder warum etwas abgelehnt wurde) und laufende Summen von Bauteilen, Schrauben, Stahlgewicht und Bewehrungsgewicht. Wenn eine Aktion scheinbar nichts bewirkt, lesen Sie zuerst die Meldung hier.

Der Titel des Browser-Tabs beginnt mit einem Punkt (•), solange das Modell nicht gespeicherte Änderungen hat.

## Auf einem schmalen Bildschirm

Unterhalb von etwa 760 Pixeln Breite stapeln sich die Spalten: Symbolleiste, Ansicht, Statusleiste, {{ui:Eigenschaften}}, Berichtsregisterkarten und zuletzt der Bereich {{ui:Modell}}. Scrollen Sie die Seite, um sie zu erreichen. DetailCraft ist für einen Desktop- oder Laptop-Bildschirm ausgelegt; ein Telefon taugt zum Ansehen, nicht zum Detaillieren.
