---
title: Ein Rundgang durch den Bildschirm
summary: Jede Leiste, jeder Bereich und jede Registerkarte in DetailCraft unter ihrem Bildschirmnamen und mit ihrem Zweck.
keywords: Bildschirm, Layout, Symbolleiste, Bereiche, Eigenschaften, Statusleiste, Berichte, Oberfläche, UI, Registerkarten
from: 94f81073
---

DetailCraft füllt das Browserfenster unterhalb der App-Leiste aus. Von oben nach unten: die Symbolleiste, dann drei Spalten (der Bereich {{ui:Modell}}, die Ansicht, der Bereich {{ui:Eigenschaften}}), dann die Berichtsregisterkarten und schließlich die Statusleiste.

## Die App-Leiste

Die schmale Leiste ganz oben gehört zur CadCraft-Website, nicht zum Modell. Sie zeigt den App-Namen und die Version, einen Link zu {{ui:Über DetailCraft}}, {{ui:Hilfe}} (oder {{key:F1}}) für diese Hilfe, {{ui:Für Offline speichern}}, die Schaltfläche für den Bildschirmmodus und den Umschalter {{ui:Papier}} / {{ui:Modell}}.

- {{ui:Für Offline speichern}} bewahrt DetailCraft, seine 3D-Ansicht und diese Hilfe in Ihrem Browser auf, sodass es ohne Verbindung öffnet. Nach dem Speichern zeigt sie {{ui:Offline bereit}}; klicken Sie dann darauf, um {{ui:Erneut speichern (neueste Version holen)}} oder {{ui:Offline-Kopie entfernen}} zu wählen. Siehe [Offline arbeiten](common:offline).
- {{ui:Papier}} ergibt einen hellen Bildschirm und {{ui:Modell}} einen dunklen. Die 3D-Ansicht folgt sofort; an Ihrem Modell ändert sich nichts.
- Die Schaltfläche für den Bildschirmmodus und {{key:Ctrl+Shift+F}} wechseln durch normal, Vollbild und Vollbild mit ausgeblendeten Leisten. {{key:Ctrl+Shift+F}} verwendet auf jedem Computer die Taste Ctrl, auch auf dem Mac. Bei ausgeblendeten Leisten zeigen Sie auf den oberen Bildschirmrand (oder tippen darauf), um sie zurückzuholen. {{key:Esc}} beendet das Vollbild.

## Die Symbolleiste

Die Symbolleiste hat fünf Gruppen. Fahren Sie mit der Maus über eine Schaltfläche, um zu sehen, was sie tut und welche Taste dazu gehört.

| Gruppe | Schaltflächen | Was sie tun |
|---|---|---|
| {{ui:Datei}} | {{ui:Neu}}, {{ui:Öffnen}}, {{ui:IFC importieren}}, {{ui:Speichern}}, {{ui:Beispiel}} | Ein Modell beginnen, eine gespeicherte `.detailcraft.json` oder eine IFC-Datei öffnen, eines speichern oder den Beispielrahmen öffnen |
| {{ui:Platzieren}} | {{ui:Wählen}}, {{ui:Träger}}, {{ui:Stütze}}, {{ui:Aussteifung}}, {{ui:Blech}}, {{ui:Fundament}}, {{ui:Treppe}} | Das Werkzeug, das der nächste Klick in der Ansicht verwendet |
| {{ui:Anschlüsse}} | {{ui:Kopfplatten}}, {{ui:Fußplatte}} und im Menü {{ui:Mehr}}: {{ui:Anschlusslaschen}}, {{ui:Stoß}}, {{ui:Knotenblech}}, {{ui:Ähnlich}} | Einen Anschluss zum gewählten Träger, zur Stütze oder Aussteifung hinzufügen oder den gewählten Anschluss auf jeden gleichartigen Knoten kopieren |
| {{ui:Bearbeiten}} | {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:Mehr}} | Bearbeitungen rückwärts und vorwärts durchgehen; die Auswahl kopieren und einfügen. {{ui:Mehr}} öffnet ein Menü mit {{ui:Ausschneiden}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:An gleicher Position einfügen}}, {{ui:Duplizieren}}, {{ui:Löschen}}, {{ui:Alles auswählen}} und {{ui:Auswahl aufheben}}, jeweils mit ihrer Taste |
| {{ui:Ausgabe}} | {{ui:IFC}}, {{ui:NC-Dateien}}, {{ui:Stückliste}}, {{ui:Werkstattzeichnung}}, {{ui:Zeichnungen}} und im Menü {{ui:Mehr}}: {{ui:Biegeliste}}, {{ui:Gewichtsbericht nach Phase}}, {{ui:KISS-Datei für Fertigungssoftware}} | Einen Export herunterladen oder die Zeichnungsblätter öffnen |

Schaltflächen und Menüpunkte, die gerade nicht funktionieren können, sind ausgegraut, und wenn Sie mit der Maus darüber fahren, steht dort der Grund. {{ui:Kopfplatten}} braucht einen gewählten Träger, {{ui:Fußplatte}} eine gewählte Stütze, {{ui:Ähnlich}} einen gewählten Anschluss, {{ui:Werkstattzeichnung}} ein Modell mit Teilen, {{ui:Kopieren}} ein gewähltes Bauteil oder Fundament und {{ui:Einfügen}} etwas Kopiertes. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

## Der Bereich Modell (links)

- {{ui:Modell}}: der Modell-{{ui:Name}}. Er benennt jede Datei, die Sie speichern oder exportieren.
- {{ui:Raster}}: die Rasterlinien und ihre Abstände sowie {{ui:Raster übernehmen}}. Siehe [Raster und Ebenen einrichten](topic:grids-and-levels).
- {{ui:Ebenen}}: eine Zeile je Ebene (Name und Höhe in mm), {{ui:Ebene hinzufügen}} und {{ui:Ebenen übernehmen}}.
- {{ui:Eigenes Profil}}: Erstellen Sie Ihren eigenen parametrischen Querschnitt. Geschlossen, bis Sie es öffnen.
- {{ui:Positionsnummern}}: jede Positionsnummer im Modell mit ihrem Profil, ihrer Länge und Anzahl. Klicken Sie auf eine Marke, um das erste Teil mit dieser Marke zu wählen.

{{ui:Raster}}, {{ui:Ebenen}} und {{ui:Eigenes Profil}} klappen sich ein: Klicken Sie auf ihre Überschriften.

## Die Ansicht (Mitte)

Die Ansicht zeigt das Modell in 3D. Darüber hat die Ansichtsleiste drei Schaltflächen und eine Liste:

- {{ui:3D}}: das Modell frei drehen.
- {{ui:Grundriss}}: senkrecht auf eine Ebene blicken. Neben den Schaltflächen erscheint eine Liste der Ebenen. Alles, was mehr als 1,5 m über der Ebene liegt, wird ausgeblendet, damit Sie die Ebene deutlich sehen und anklicken können.
- {{ui:Ansicht}}: senkrecht auf eine beschriftete Rasterlinie blicken (Raster A, Raster B …). Eine Liste der Buchstabenraster erscheint. Es wird nur der Stahl innerhalb von 1 m zu dieser Linie gezeigt.
- Die Einpassen-Schaltfläche am rechten Ende der Ansichtsleiste zoomt, damit das ganze Modell zu sehen ist.

Kleine Punkte markieren jeden Rasterschnittpunkt auf jeder Ebene. Solange ein Platzierwerkzeug aktiv ist, leuchtet der Punkt, der dem Zeiger am nächsten ist, auf, und die Statusleiste nennt ihn, zum Beispiel „A/2 bei Ebene 1“. Farben unterscheiden die Bauteilarten: Stützen, Träger, Aussteifungen und Bleche haben jeweils eine eigene Farbe, Schrauben und Stäbe eine weitere, Fundamente sind durchsichtig und Bewehrung wird als Röhren gezeichnet. Bohrungen erscheinen als dunkle Stopfen; Ausklinkungen sind ausgeschnitten.

Wie Sie drehen, verschieben und zoomen: [In der 3D-Ansicht navigieren](topic:navigate-3d).

Wenn das Modell leer ist, zeigt die Ansicht eine kurze Liste „Ein Modell beginnen“. Sie können auch eine gespeicherte Modelldatei irgendwo auf der Ansicht ablegen, um sie zu öffnen.

## Der Bereich Eigenschaften (rechts)

Was dieser Bereich zeigt, hängt davon ab, was Sie gerade tun, und seine Überschrift sagt es: „Modell“, „Träger platzieren“, „Träger b2“, „Kopfplattenanschluss“, „Fußplatte“, „Fundament F1“, „3 ausgewählt“ oder „Einfügen“.

- **Nichts gewählt:** eine Zusammenfassung des Modells (Bauteile, Anschlüsse, Fundamente, Teile, Marken, Schrauben, Gewicht von Stahl und Bewehrung, Raster, Ebenen).
- **Ein Platzierwerkzeug aktiv:** die Optionen für das nächste Teil (Profil, Material, Position, Drehung und für Stützen {{ui:Bis}}), eine Zusammenfassung des gewählten Profils und ein Formular {{ui:Nach Raster hinzufügen}}, um ohne Klick in der Ansicht zu platzieren.
- **Ein Bauteil gewählt:** sein Name, Profil, Material, Position, Drehung, die Koordinaten seiner beiden Enden, seine Marken, Schnittlänge und Gewicht, seine Bohrungen und Ausklinkungen sowie Schaltflächen für Anschlüsse, seine Werkstattzeichnung und {{ui:Löschen}}.
- **Ein Anschluss gewählt:** jede Einstellung für Platten, Schrauben und Schweißnähte, die Schrauben und Schweißnaht, die er bildet, seine Warnungen und {{ui:Auf ähnliche übernehmen}}.
- **Ein Fundament gewählt:** seine Position und Größe, die untere Matte, die Anschlussbewehrung und die Stabmarken, die es verwendet.
- **Mehrere Dinge gewählt:** wie viele Bauteile jeder Art, Anschlüsse und Fundamente, ihr Stahlgewicht sowie {{ui:Kopieren}}, {{ui:Duplizieren}} und {{ui:Löschen}}.
- **Einfügen:** was in der Zwischenablage liegt und Formulare, um mit einem eingegebenen Versatz oder auf einen Rasterschnittpunkt aus Listen einzufügen.

Zahlenfelder wirken, wenn Sie {{key:Enter}} drücken oder das Feld verlassen. Jede Änderung ist ein Schritt, den Sie rückgängig machen können.

## Die Berichtsregisterkarten (unten)

- {{ui:Probleme}}: alles, was DetailCraft nicht bauen konnte oder was Sie prüfen sollten, mit einer Schaltfläche {{ui:Wählen}} in jeder Zeile. Die Registerkarte zeigt die Anzahl in Klammern.
- {{ui:Stückliste}}: Teile, Baugruppen sowie Schrauben und Ankerstangen mit Gewichten und einem Link {{ui:CSV herunterladen}}. Klicken Sie auf eine Positionsnummer, um dieses Teil zu wählen.
- {{ui:Biegeliste}}: jede Stabmarke in jedem Fundament mit einem Link {{ui:CSV herunterladen}}.

Wenn eine Registerkarte den Fokus hat, wechseln {{key:Left}} und {{key:Right}} zwischen den Registerkarten.

## Die Statusleiste

Die Leiste unten hat drei Teile: den Rasterschnittpunkt unter dem Zeiger beim Platzieren, die letzte Meldung (was gerade geschehen ist oder warum etwas abgelehnt wurde) und laufende Summen der Teile, Schrauben, des Stahlgewichts und des Bewehrungsgewichts. Wenn eine Aktion scheinbar nichts bewirkt, lesen Sie zuerst die Meldung hier.

Der Titel des Browser-Tabs beginnt mit einem Punkt (•), solange das Modell Änderungen hat, die Sie nicht gespeichert haben.

## Auf einem schmalen Bildschirm

Unterhalb von etwa 760 Pixeln Breite stapeln sich die Spalten: Symbolleiste, Ansicht, Statusleiste, {{ui:Eigenschaften}}, Berichtsregisterkarten und zuletzt der Bereich {{ui:Modell}}. Scrollen Sie die Seite, um sie zu erreichen. DetailCraft ist für einen Desktop- oder Laptop-Bildschirm gestaltet; ein Telefon eignet sich zum Ansehen, nicht zum Detaillieren.
