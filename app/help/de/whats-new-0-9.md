---
title: Was ist neu in 0.9
summary: UK-Blue-Book-Stahlprofile und ungleichschenklige Winkel, Werkstattzeichnungen für jedes Teil in einem PDF-Satz, Meine Profile für eigene Querschnitte, P-Delta und Eigenfrequenzen, Windlasten nach ASCE 7, seismischer Standort und Kombinationen sowie Live-Cursor mit Folgen.
keywords: Was ist neu, Versionshinweise, Änderungsprotokoll, 0.9, UK-Stahl, Blue Book, UB, UC, PFC, SHS, RHS, CHS, ungleichschenkliger Winkel, Werkstattzeichnung, Werkstattzeichnungen, Blattsatz, Positionsnummer, PDF, Meine Profile, eigenes Profil, P-Delta, Theorie II. Ordnung, Eigenfrequenz, finite Elemente, modale Masse, Windlast, ASCE 7, Erdbeben, Baugrundklasse, USGS, Lastkombinationen, LRFD, ASD, Live, Cursor, Folgen, Personen, Tooltips, Was ist neu, Versionshinweise, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Montage, Kran, Traglastdiagramm, Film, Autopilot, Anschlüsse, Bewehrung, Bewehrungsdichte, Gründung, Einzelfundament, Plattengründung, Setzung, Rahmenbau, Holz, Leichtbau, Zuschnittsliste, Konstruierbarkeit, Schweißzugänglichkeit, Lieferant, Lager, Lieferzeit, was bricht zuerst, Beton, Erdbeben, Decke, Sprachen, Assistent
from: 4c95a2de
---

Dies sind die Änderungen in DetailCraft 0.9 gegenüber 0.8.1. 0.9 bringt die UK-Stahlprofile, eine Werkstattzeichnung für jedes Teil auf einmal, einen größeren Reiter {{ui:Berechnung}} für Rahmen und die Ansicht der Cursor der anderen, wenn Sie gemeinsam arbeiten.

## Neu

### UK-Stahl und Werkstattzeichnungen

- **UK-Stahlprofile.** Die Profillisten enthalten jetzt 976 Profile aus dem Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS und RHS; die kaltgeformten Hohlprofile sind getrennt geführt (ihre Namen beginnen mit CF). Die Namen werden mit der Profilfamilie zuerst geschrieben, etwa UB305x165x40 oder SHS100x100x5.0; es funktioniert auch, sie so einzugeben, wie Zeichnungen sie nennen: 305x165x40 UB, L100x100x10, SHS100x5. Siehe [Profilkatalog](topic:profile-catalog).
- **Ungleichschenklige Winkel.** UEA-Winkel behalten beide Schenkel beim IFC-Import und -Export und in NC-Dateien; eine Spiegelung dreht das Stück von Ende zu Ende.
- **Alle Werkstattzeichnungen auf einmal.** Wählen Sie {{ui:Shop drawing}} in der Gruppe {{ui:Output}}, ohne etwas auszuwählen. Das Fenster listet jede Positionsnummer auf, zeigt jede davon in der Vorschau an, und {{ui:Alle herunterladen}} speichert ein PDF mit einer Seite je Positionsnummer, jede mit dem Titel „Blatt 3 von 42“. {{ui:Download this sheet}} speichert das gerade angezeigte Blatt. Auch U-Profile, Winkel und Hohlprofile erhalten jetzt Blätter. Siehe [Werkstattzeichnungen erstellen](topic:shop-drawings).
- **Meine Profile.** Ein eigenes Profil kann jetzt für jedes neue Modell gespeichert werden. Lassen Sie im Formular Eigenes Profil {{ui:Keep in My profiles}} angehakt; die Liste {{ui:My profiles}} darunter hat {{ui:Keep}}, {{ui:Use here}} und {{ui:Remove}}. Die Liste wird in diesem Browser gespeichert (bis zu 200), nicht in Ihrem Konto. Siehe [Platten und Profile](topic:plates-and-profiles).

### Berechnung

- **Theorie II. Ordnung (P-Delta).** Setzen Sie im Reiter {{ui:Berechnung}} neben Ausführen den Haken bei {{ui:Second order (P-Delta)}}, dann wirken die Normalkräfte am verformten Rahmen. Platten und starre Decken bleiben bei Theorie I. Ordnung, mit einer Warnung. Siehe [Schnittgrößen, Auflagerkräfte und Verformungen](topic:frame-analysis).
- **Eigenfrequenzen.** Der Bereich {{ui:Finite elements: natural frequencies}} unter den Ergebnissen findet die niedrigsten Eigenformen desselben Modells, mit Periode und wirksamer modaler Masse, und zeigt eine Eigenform am Modell. Siehe [Schnittgrößen, Auflagerkräfte und Verformungen](topic:frame-analysis).
- **Windlasten und seismischer Standort.** Drei neue Bereiche im Reiter {{ui:Berechnung}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} und {{ui:ASCE 7 load combinations}}. Siehe [Wind, seismischer Standort und ASCE 7-Kombinationen](topic:wind-seismic-combinations).

### Gemeinsam arbeiten

- **Cursor und Namen.** In einer Live-Sitzung wird der Zeiger jeder Person im Modell mit ihrem Namen und ihrer Farbe gezeichnet, und was sie ausgewählt hat, erhält einen Rahmen.
- **Einer Person folgen.** Öffnen Sie {{ui:People}} in der Sitzung und wählen Sie bei einem Namen {{ui:Follow}}; Ihre Ansicht bewegt sich mit der Ansicht dieser Person. Der Host kann {{ui:Ask everyone to follow me}} wählen. Siehe [Einer Person in einer Live-Sitzung folgen](topic:follow-in-live).

### In allen Apps

- Tooltips sind Bootstrap-Tooltips, die Startkarte mit Tipps hat eine Schaltfläche zum Schließen, Registerkartenleisten lassen sich seitlich scrollen, wenn sie nicht passen, und der Name des Browser-Tabs zeigt das geöffnete Dokument, gefolgt von DetailCraft und CadCraft.

## Behoben

- Ein eigenes Profil ging verloren, wenn Sie ein neues Modell begannen.
- U-Profile, Winkel und Hohlprofile fehlten im Satz der Werkstattzeichnungen.

## Ehrliche Grenzen

- Die Blöcke für Wind, Erdbeben und finite Elemente sind Hilfen zur Prüfung. Ihr Ingenieur prüft die Ergebnisse; sie sind keine Nachweisführung nach einer Norm. Die USGS-Abfrage wurde an einem Ersatzdienst getestet, nicht am Live-Dienst.
- Finite Elemente und P-Delta wurden gegen Handrechnungen und geschlossene Lösungen geprüft, nicht an einem echten Gebäude. Die Knickberechnung ist noch nicht umgesetzt.
- Noch kein britischer Stahlbauer hat die UK-Profile ausprobiert, und NC-Dateien für ungleichschenklige Winkel wurden noch nicht an einer Maschine ausgeführt.
- Der Satz der Werkstattzeichnungen ist nur als PDF verfügbar.
- Andere Sprachen als Englisch sind maschinelle Entwürfe.
- Die Windows-Installationsprogramme sind nicht code-signiert (Weitere Informationen, dann Trotzdem ausführen); das macOS-Disk-Image ist nicht notarisiert (Rechtsklick, dann Öffnen).

Frühere Änderungen stehen in den Versionshinweisen zu 0.8 und 0.8.1 weiter unten auf dieser Seite.

## Früher: 0.8 und 0.8.1

Dies sind die Änderungen in DetailCraft 0.8 (1. November 2026) und 0.8.1 (2. November 2026) gegenüber 0.7. 0.7 hat Stahlstäbe nachgewiesen; 0.8 plant die Hebevorgänge, schlägt Anschlüsse vor, prüft die Gründungen und die Bewehrung und stellt Holz- und Leichtbauwände, -decken und -dächer zusammen.

### Neu

**Montage**

- **Montageplan und Film.** Im Reiter {{ui:Montage}} beschreiben Sie einen Kran (wo er steht, sein höchster Haken, das Anschlagmittel, das nicht im Traglastdiagramm steht) und tragen die Zeilen seines Traglastdiagramms ein. DetailCraft hebt das Modell jeweils eine Baugruppe nach der Phasenfolge und Lage für Lage und prüft jeden Hub gegen das Diagramm bei seinem Ausladungsradius und gegen die Reserve, die Sie festlegen. {{ui:Film speichern}} schreibt eine HTML-Datei, die offline in jedem Browser abläuft, auch auf dem Telefon. Hübe, die über dem Diagramm liegen, außerhalb davon oder zu hoch sind, stehen unter {{ui:Probleme}}. Es ist ein Plan aus Ihren Zahlen, kein Hubplan. Siehe [Montageplan und Film](topic:erection-movie).

**Anschlüsse**

- **Autopilot für Anschlüsse.** Der Reiter {{ui:Autopilot}} betrachtet jeden Stoß ohne Anschluss und schlägt aus den Profilen einen vor: Fußplatten, Aufsattellaschen, Kopfplatten für die als Momententräger markierten Träger, Stöße und Knotenbleche. Geben Sie eine gleichmäßige Last oder eine Querkraft am Ende an, dann folgt die Schraubenzahl der Bemessungsfestigkeit der Schraube. {{ui:Alle hinzufügen}} fügt die Vorschläge als einen Rückgängig-Schritt hinzu. Es sind Ausgangswerte zur Prüfung, keine Anschlussbemessung.
- **Konstruierbarkeitsprüfungen.** {{ui:Probleme}} für eine Schraube, die ein Schraubenschlüssel nicht erreicht, Schrauben, die für die Nuss zu dicht beieinander liegen, Kehlnähte außerhalb ihrer Größengrenzen und Hohlprofile, in denen sich Wasser sammelt. Die Schweißzugänglichkeit ist neu: Eine umlaufende Kehlnaht, die der Brenner eines Schweißers nicht erreicht, wird mit dem Teil, das im Weg ist, und dem betroffenen Anteil der Naht aufgeführt. Siehe [Konstruierbarkeitsprüfungen](topic:constructability).

**Gründungen und Bewehrung**

- **Gründungsprüfungen.** Der Reiter {{ui:Gründung}} prüft Einzelfundamente, kombinierte Fundamente und Plattengründungen auf dem Baugrund, den Sie beschreiben: Sohldruck, Gleiten und Kippen unter Gebrauchslasten; Biegung, Querkraft, Durchstanzen, Verankerung und Mindestbewehrung unter Bemessungslasten (ACI 318-19). Eine Stütze nahe einem Rand oder einer Ecke wird mit dem Querschnitt geprüft, der durch den Rand des Fundaments abgeschnitten ist. Die Setzung ergibt sich aus dem Steifemodul des Bodens; eine biegsame Platte wird auf Federn mit einem Bettungsmodul berechnet, und Pfahlgruppen und Stützwände haben eigene Felder. Stützenlasten lassen sich eintragen oder aus der {{ui:Berechnung}} übernehmen. Siehe [Gründungsprüfungen](topic:foundation-checks).
- **Karte der Bewehrungsdichte.** Der Reiter {{ui:Bewehrungsdichte}} zeichnet eine Wärmekarte jedes Fundaments von oben: wo die Stäbe dem Beton zu wenig Platz lassen, um hinabzugelangen, verglichen mit der Regel für den lichten Abstand und, wenn Sie sie angeben, dem größten Zuschlagkorn und dem Rüttelkopf. Siehe [Karte der Bewehrungsdichte](topic:rebar-congestion).

**Rahmenbau und Lieferung**

- **Holz- und Leichtbaurahmen.** Der Reiter {{ui:Rahmenbau}} stellt Wand-, Decken- und Dachtafeln mit jedem Teil, einer Zuschnittsliste, dem zu kaufenden Material und einer Werkstattzeichnung im Maßstab zusammen. {{ui:Als Stäbe platzieren}} setzt die Teile in das Modell, und {{ui:PDF-Blätter}} speichert ein Blatt für jede Tafel. Die Querschnitte, Abstände und Stürze legen Sie fest: DetailCraft prüft nicht, ob sie die Last tragen. Siehe [Holz- und Leichtbau-Tafeln](topic:framing-panels).
- **Lagerbestand des Lieferanten und Lieferzeiten.** Der Reiter {{ui:Lieferung}} liest die Lagerliste eines Lieferanten (CSV) und zeigt für jeden Querschnitt, den die Zuschnittsliste kauft, ob genug auf Lager ist und wie lang die Wartezeit ist. Fehlmengen und verspätete Querschnitte stehen unter {{ui:Probleme}}. Es wird nichts bestellt. Siehe [Lagerbestand des Lieferanten und Lieferzeiten](topic:supplier-stock).

**Berechnung und Bemessung**

- **Was bricht zuerst?** Im Reiter {{ui:Berechnung}} findet die Schaltfläche die maßgebende Tragfähigkeitskombination, den schwächsten Stab, wie weit die Lasten steigen können, bis der erste Stab seine Grenze erreicht, und den schwächsten Kopfplatten- oder Aufsattellaschen-Anschluss, wenn die Scherfestigkeit seiner Schrauben bekannt ist. Dafür braucht es zuerst die Kombinationen und eine Bemessungsnorm. Lochleibung, Blockscheren, Schweißnähte und Hebelwirkung werden nicht geprüft. Ihr verbundener Assistent kann dasselbe anfordern.
- **Live.** Setzen Sie den Haken bei {{ui:Live: solve again after each edit}}, dann wird der Rahmen nach jeder Änderung neu berechnet.
- **Beton, mehr.** Eine schlanke Stütze in einem unverschieblichen Rahmen wird für ihr vergrößertes Moment bemessen (ACI 318-19 6.6.4.5). Die seismische Periode kann aus der Berechnung nach dem Rayleigh-Verfahren übernommen werden. Eine aus Platten gebildete Decke erhält den Stahl, den jede Lage aus ihren Momenten braucht, sowie die einachsige Querkraft. Siehe [Betonbauteile prüfen und Erdbebenlasten erzeugen](topic:concrete-and-seismic).
- **Für einen Ingenieur zur Prüfung.** Die Ergebnisse von Gründung, Beton und „Was bricht zuerst?“ sind Hilfen. Windlasten sind nicht umgesetzt.

**In allen Apps**

- **Sprachen.** Die Hilfe ist in 54 Sprachen verfügbar. Alle außer Englisch sind maschinelle Entwürfe, bis eine Muttersprachlerin oder ein Muttersprachler sie gelesen hat; zehn sind neu (Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili, Usbekisch).
- **Symbolleistenzeilen.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wählt Umbruch, 2 Zeilen oder 1 Zeile. Eine Leiste, die bereits passt, bleibt, wie sie ist; die übrigen scrollen seitlich.
- **Eigenschaftenraster.** Die Felder des Fundaments verwenden das gemeinsame Raster: einklappbare Kategorien und eine kompakte Dichte. Eingegebene Rechenausdrücke wie 2*450 funktionieren weiterhin.
- **Eingabegeräte.** Trackpad, Stift, 3D-Maus, Controller und MIDI können die Apps steuern. Siehe [In 3D navigieren](topic:navigate-3d).
- **Problemfenster.** Die Warnungen der neuen Prüfungen oben erscheinen im selben Bereich {{ui:Probleme}} wie zuvor.
- **Ihre KI verbinden.** Ihr eigener Assistent, verbunden über CadCraft Studio, funktioniert mit allen acht Apps und sieht nur, was Sie freigeben. Das Verbinden mit einem Klick, der gehostete Connector und Ihr eigener API-Schlüssel in Studio folgen noch. Siehe [DetailCraft mit einem KI-Assistenten verwenden](topic:use-with-ai-assistants).

### Behoben in 0.8.1

- **Sprachen in Studio.** Studio und die gepackten Ausgaben können die Sprache zur Laufzeit wechseln; zuvor gab es nur Englisch. Es ist noch nicht auf allen Plattformen getestet: Sagen Sie uns Bescheid, wenn die Sprache nicht wechselt.
- **Auswahl mit Rahmen (kreuzend).** Die Installationsprogramme von 0.8.1 haben das Auswählen per Fenster bereits so, wie es in der Web-Version von 0.8 richtig war; ein älteres Installationsprogramm hatte es nicht.
- **Tablets im Hochformat.** Freie Rasterhöhe geht an die Zeichenfläche, und das Blattlayout beginnt bei 760 px oder weniger.

### Noch nicht in dieser Version

- **NC-Dateien an eine Maschine senden** ist noch nicht freigegeben.
- **Windlasten** für Beton sind nicht umgesetzt; die Beton- und Gründungsprüfungen sind für einen Ingenieur zur Prüfung bestimmt.
- **Code-Signierung.** Die Windows-Installationsprogramme und die macOS-.dmg sind nicht signiert; daher warnt Windows möglicherweise, und macOS verlangt einen Rechtsklick, dann Öffnen.

Frühere Änderungen stehen in [Was ist neu in 0.7](topic:whats-new-0-7).
