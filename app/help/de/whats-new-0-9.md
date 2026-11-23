---
title: Neu in 0.9 (früher)
summary: Britische Stahlprofile nach dem Blue Book und ungleichschenklige Winkel, Werkstattzeichnungen für jedes Teil in einem PDF-Satz, Meine Profile für eigene Querschnitte, P-Delta und Eigenfrequenzen, Windlasten nach ASCE 7, seismischer Standort und Kombinationen sowie Live-Cursor mit Folgen.
keywords: neu in 0.9, frühere Version, was ist neu, Versionshinweise, Änderungsprotokoll, 0.9, britischer Stahl, Blue Book, UB, UC, PFC, SHS, RHS, CHS, ungleichschenkliger Winkel, Werkstattzeichnung, Werkstattzeichnungen, Blattsatz, Teilmarke, PDF, Meine Profile, benutzerdefiniertes Profil, P-Delta, Effekte zweiter Ordnung, Eigenfrequenz, Finite Elemente, modale Masse, Windlast, ASCE 7, Erdbeben, Standortklasse, USGS, Lastkombinationen, LRFD, ASD, Live, Cursor, Folgen, Personen, QuickInfos, neu, Version, neue Funktionen, Montage, Kran, Lastdiagramm, Film, Autopilot, Verbindungen, Bewehrung, Bewehrungsdichte, Gründung, Fundament, Bodenplatte, Setzung, Tragwerk, Holz, Leichtbau, Zuschnittliste, Konstruktionsbarkeit, Schweißzugang, Lieferant, Lagerbestand, Lieferzeit, was bricht zuerst, Beton, Decke, Sprachen, Assistent
from: ab0c7f05
---

Dies sind die Änderungen in DetailCraft 0.9 gegenüber 0.8.1. Version 0.9 bringt die britischen Stahlgrößen, eine Werkstattzeichnung für jedes Teil auf einmal, eine größere Registerkarte {{ui:Berechnung}} für Rahmen und eine Ansicht der Cursor der anderen, wenn Sie gemeinsam arbeiten.

## Neu

### Britischer Stahl und Werkstattzeichnungen

- **Britische Stahlgrößen.** Die Profillisten enthalten jetzt 976 Größen aus dem Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS und RHS. Die kaltgeformten Hohlprofile bleiben getrennt (ihre Namen beginnen mit CF). Namen werden familienzuerst geschrieben, etwa UB305x165x40 oder SHS100x100x5.0. Die Eingabe in der Form, wie Zeichnungen sie angeben, funktioniert ebenfalls: 305x165x40 UB, L100x100x10, SHS100x5. Siehe [Profilkatalog](topic:profile-catalog).
- **Ungleichschenklige Winkel.** UEA-Winkel behalten beide Schenkel beim Ein- und Auslesen über IFC und in NC-Dateien. Eine Spiegelung dreht das Teil Ende für Ende.
- **Alle Werkstattzeichnungen auf einmal.** Wählen Sie {{ui:Werkstattzeichnung}} in der Gruppe {{ui:Ausgabe}}, ohne etwas ausgewählt zu haben. Das Fenster listet jede Teilmarke auf und zeigt eine Vorschau jeder davon. {{ui:Alle herunterladen}} speichert ein PDF mit einer Seite pro Marke, jede mit dem Titel „Blatt 3 von 42“. {{ui:PDF herunterladen}} speichert das Blatt, das Sie gerade sehen. U-Profile, Winkel und Hohlprofile erhalten jetzt ebenfalls Blätter. Siehe [Werkstattzeichnungen erstellen](topic:shop-drawings).
- **Meine Profile.** Ein benutzerdefiniertes Profil kann jetzt für jedes neue Modell behalten werden. Lassen Sie im Formular für benutzerdefinierte Profile {{ui:In Meine Profile speichern}} angehakt. Die Liste {{ui:Meine Profile}} darunter hat {{ui:Speichern}}, {{ui:Hier verwenden}} und {{ui:Entfernen}}. Die Liste wird in diesem Browser gespeichert (bis zu 200), nicht in Ihrem Konto. Siehe [Bleche und Profile](topic:plates-and-profiles).

### Berechnung

- **Effekte zweiter Ordnung (P-Delta).** Aktivieren Sie {{ui:Effekte zweiter Ordnung (P-Delta)}} neben Ausführen in der Registerkarte {{ui:Berechnung}}, dann wirken die Normalkräfte am verformten Rahmen. Bleche und starre Decken bleiben bei erster Ordnung, mit einer Warnung. Siehe [Schnittgrößen, Auflagerreaktionen und Verformungen](topic:frame-analysis).
- **Eigenfrequenzen.** Der Block {{ui:Finite Elemente: Eigenfrequenzen}} unter den Ergebnissen findet die niedrigsten Eigenformen desselben Modells, mit Periode und wirksamer modaler Masse, und zeigt eine Eigenform am Modell. Siehe [Schnittgrößen, Auflagerreaktionen und Verformungen](topic:frame-analysis).
- **Windlasten und seismischer Standort.** Drei neue Blöcke in der Registerkarte {{ui:Berechnung}}: {{ui:Windlasten (ASCE 7, Richtungsverfahren)}}, {{ui:Erdbeben: Standort und System (ASCE 7)}} und {{ui:ASCE 7-Lastkombinationen}}. Siehe [Wind, seismischer Standort und ASCE-7-Kombinationen](topic:wind-seismic-combinations).

### Gemeinsam arbeiten

- **Cursor und Namen.** In einer Live-Sitzung wird der Zeiger jeder Person im Modell mit Name und Farbe gezeichnet. Was sie ausgewählt hat, erhält einen Rahmen.
- **Einer Person folgen.** Öffnen Sie {{ui:Personen}} in der Sitzung und wählen Sie bei einem Namen {{ui:Folgen}}. Ihre Ansicht bewegt sich dann mit der Ansicht dieser Person. Der Host kann {{ui:Alle bitten, mir zu folgen}} wählen. Siehe [Einer Person in einer Live-Sitzung folgen](topic:follow-in-live).

### In allen Apps

- QuickInfos sind Bootstrap-QuickInfos, die Startkarte hat eine Schaltfläche zum Schließen, Registerleisten scrollen seitlich, wenn sie nicht passen, und der Browsertitel nennt das geöffnete Dokument, gefolgt von DetailCraft und CadCraft.

## Behoben

- Ein benutzerdefiniertes Profil ging verloren, wenn Sie ein neues Modell begannen.
- U-Profile, Winkel und Hohlprofile fehlten im Werkstattzeichnungssatz.

## Ehrlich benannte Grenzen

- Die Wind-, Erdbeben- und Finite-Elemente-Blöcke sind Prüfhilfen. Ihre Fachperson prüft die Ergebnisse; sie sind keine Normprüfung. Der USGS-Abruf wurde an einem Ersatz getestet, nicht am Live-Dienst.
- Finite Elemente und P-Delta wurden gegen Handrechnungen und geschlossene Lösungen geprüft, nicht an einem echten Gebäude. Die Beulanalyse ist nicht umgesetzt.
- Noch kein britischer Stahlbauer hat die britischen Größen ausprobiert, und NC-Dateien für ungleichschenklige Winkel wurden nicht auf einer Maschine ausgeführt.
- Der Werkstattzeichnungssatz gibt es nur als PDF.
- Sprachen außer Englisch sind maschinelle Entwürfe.
- Die Windows-Installationsprogramme sind nicht codesigniert (Weitere Informationen, dann Trotzdem ausführen). Das macOS-Disk-Image ist nicht notarisiert (Rechtsklick, dann Öffnen).

Frühere Änderungen stehen in den Hinweisen zu 0.8 und 0.8.1 weiter unten auf dieser Seite.

## Früher: 0.8 und 0.8.1

Dies sind die Änderungen in DetailCraft 0.8 (1. November 2026) und 0.8.1 (2. November 2026) gegenüber 0.7. Version 0.7 hat Stahlstäbe nachgewiesen. Version 0.8 plant die Montagehübe, schlägt Verbindungen vor, prüft Gründungen und Bewehrung und bemisst Holz- und Leichtbauwände, Decken und Dächer.

### Neu

**Montage**

- **Montageplan und Film.** Beschreiben Sie in der Registerkarte {{ui:Montage}} einen Kran (wo er steht, seinen höchsten Haken, das Anschlagmittel, das nicht im Lastdiagramm steht) und tragen Sie die Zeilen seines Lastdiagramms ein. DetailCraft hebt das Modell eine Baugruppe nach der anderen, in Phasenfolge und Lage für Lage, und prüft jeden Hub gegen das Diagramm bei seinem Radius und gegen die Reserve, die Sie festlegen. {{ui:Film speichern}} schreibt eine HTML-Datei, die offline in jedem Browser abspielt, auch auf dem Telefon. Hübe, die über dem Diagramm liegen, darüber hinausgehen oder zu hoch sind, stehen unter {{ui:Probleme}}. Es ist ein Plan aus Ihren Zahlen, kein Hubplan. Siehe [Montageplan und Film](topic:erection-movie).

**Verbindungen**

- **Verbindungs-Autopilot.** Die Registerkarte {{ui:Autopilot}} betrachtet jeden Knoten ohne Verbindung und schlägt eine aus den Querschnitten vor: Fußplatten, Schubschienen, Kopfplatten für die Balken, die Sie als Momentenbalken markieren, Stöße und Knotenbleche. Geben Sie eine gleichmäßige Last oder eine Endquerkraft an, dann folgt die Schraubenzahl der Bemessungsfestigkeit der Schraube. {{ui:Alle hinzufügen}} fügt die Vorschläge als einen Schritt zum Rückgängigmachen hinzu. Es sind Ausgangswerte zur Prüfung, keine Verbindungsbemessung.
- **Konstruktionsprüfungen.** {{ui:Probleme}} für eine Schraube, die ein Schlüssel nicht erreicht, Schrauben, die für die Nuss zu dicht stehen, Kehlnähte außerhalb ihrer Größengrenzen und Hohlprofile, die Wasser halten. Der Schweißzugang ist neu: Eine umlaufende Kehlnaht, die der Brenner eines Schweißers nicht erreicht, wird mit dem Teil aufgelistet, das im Weg ist, und dem Anteil der betroffenen Naht. Siehe [Konstruktionsprüfungen](topic:constructability).

**Gründungen und Bewehrung**

- **Gründungsnachweise.** Die Registerkarte {{ui:Gründung}} prüft Einzelfundamente, kombinierte Fundamente und Bodenplatten auf dem Boden, den Sie beschreiben: Sohldruck, Gleiten und Kippen aus Gebrauchslasten; Biegung, Querkraft, Durchstanzen, Verankerung und Mindestbewehrung aus Bemessungslasten (ACI 318-19). Eine Stütze nahe einem Rand oder einer Ecke wird mit dem Querschnitt nachgewiesen, der durch den Rand des Fundaments abgeschnitten ist. Setzungen ergeben sich aus dem Steifemodul des Bodens. Eine flexible Bodenplatte wird auf Federn aus einem Bettungsmodul gelöst. Pfahlgruppen und Stützwände haben eigene Felder. Stützenlasten können eingegeben oder aus der {{ui:Berechnung}} übernommen werden. Siehe [Gründungsnachweise](topic:foundation-checks).
- **Bewehrungsdichte-Karte.** Die Registerkarte {{ui:Bewehrungsdichte}} zeichnet eine Wärmekarte jedes Fundaments von oben: Wo die Stäbe zu wenig Platz lassen, damit der Beton nach unten gelangt, verglichen mit der Regel für den lichten Abstand und, falls Sie sie angeben, dem größten Zuschlagkorn und dem Rüttelkopf. Siehe [Bewehrungsdichte-Karte](topic:rebar-congestion).

**Rahmenbau und Lieferung**

- **Holz- und Leichtbau-Rahmenbau.** Die Registerkarte {{ui:Rahmenbau}} bildet Wand-, Decken- und Dachfelder mit jedem Teil ab, dazu eine Zuschnittliste, den einzukaufenden Lagerbestand und eine Werkstattzeichnung im Maßstab. {{ui:Als Stäbe platzieren}} setzt die Teile ins Modell, und {{ui:PDF-Blätter}} speichert ein Blatt für jedes Feld. Die Größen, Abstände und Stürze legen Sie fest: DetailCraft prüft nicht, ob sie die Last tragen. Siehe [Holz- und Leichtbau-Rahmenfelder](topic:framing-panels).
- **Lagerbestand des Lieferanten und Lieferzeiten.** Die Registerkarte {{ui:Lieferung}} liest die Lagerliste eines Lieferanten (CSV) und zeigt für jeden Querschnitt, den die Zuschnittliste einkauft, ob genug auf Lager ist und wie lange die Wartezeit dauert. Fehlmengen und späte Querschnitte stehen unter {{ui:Probleme}}. Es wird nichts bestellt. Siehe [Lagerbestand des Lieferanten und Lieferzeiten](topic:supplier-stock).

**Berechnung und Bemessung**

- **Was bricht zuerst?** In der Registerkarte {{ui:Berechnung}} findet die Schaltfläche die Tragfähigkeitskombination, die maßgebend ist, den schwächsten Stab, wie weit die Lasten wachsen können, bevor der erste Stab seine Grenze erreicht, und die schwächste Kopfplatte oder Schubschiene, wo die Schubfestigkeit ihrer Schrauben bekannt ist. Dafür braucht es zuerst die Kombinationen und eine Bemessungsnorm. Lochleibung, Blockscherversagen, Schweißnähte und Hebelwirkung werden nicht geprüft. Ihr verbundener Assistent kann dasselbe fragen.
- **Live.** Aktivieren Sie {{ui:Live: nach jeder Änderung neu lösen}}, und der Rahmen wird nach jeder Änderung neu gelöst.
- **Beton, mehr.** Eine schlanke Stütze in einem unverschieblichen Rahmen wird für ihr vergrößertes Moment bemessen (ACI 318-19 6.6.4.5). Die seismische Periode kann nach dem Verfahren von Rayleigh aus der Berechnung übernommen werden. Eine Platte aus Blechen erhält aus ihren Momenten den Stahl, den jede Lage braucht, sowie die einachsige Querkraft. Siehe [Betonbauteile nachweisen und Erdbebenlasten bilden](topic:concrete-and-seismic).
- **Für eine Fachperson zur Prüfung.** Die Ergebnisse der Gründung, des Betons und von „Was bricht zuerst?“ sind Hilfsmittel. Windlasten sind nicht umgesetzt.

**In allen Apps**

- **Sprachen.** Die Hilfe liegt in 54 Sprachen vor. Die Sprachen außer Englisch sind maschinelle Entwürfe, bis eine Muttersprachlerin oder ein Muttersprachler sie gelesen hat. Zehn sind neu (Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili, Usbekisch).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} wählt Umbruch, 2 Zeilen oder 1 Zeile. Eine Leiste, die schon passt, bleibt, wie sie ist; der Rest scrollt seitlich.
- **Eigenschaftenraster.** Die Felder des Fundaments verwenden das gemeinsame Raster: einklappbare Kategorien und eine kompakte Dichte. Eingetippte Rechnungen wie 2*450 funktionieren weiterhin.
- **Eingabegeräte.** Trackpad, Stift, 3D-Maus, Controller und MIDI können die Apps steuern. Siehe [In 3D navigieren](topic:navigate-3d).
- **Problembereich.** Die Warnungen der neuen Prüfungen oben erscheinen im selben Bereich {{ui:Probleme}} wie bisher.
- **KI-Assistent verbinden.** Ihr eigener Assistent, verbunden über CadCraft Studio, arbeitet mit allen acht Apps und sieht nur, was Sie erlauben. Die Ein-Klick-Verbindung, der gehostete Connector und Ihr eigener API-Schlüssel in Studio sind noch in Arbeit. Siehe [DetailCraft mit einem KI-Assistenten verwenden](topic:use-with-ai-assistants).

### In 0.8.1 behoben

- **Sprachen in Studio.** Studio und die gepackten Ausgaben können die Sprache zur Laufzeit wechseln; vorher waren sie nur auf Englisch. Es ist noch nicht auf allen Plattformen getestet: Sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.
- **Auswahl per Fenster beim Kreuzen.** Die Installationsprogramme von 0.8.1 haben das Auswählen per Fenster, das im Web-Build von 0.8 bereits richtig war. Ein älteres Installationsprogramm hatte es nicht.
- **Tablets im Hochformat.** Überschüssige Rasterhöhe geht an die Zeichenfläche, und das Blattlayout beginnt bei 760 px oder weniger.

### Noch nicht in dieser Version

- **NC an eine Maschine senden** ist nicht freigegeben.
- **Windlasten** für Beton sind nicht umgesetzt. Die Beton- und Gründungsnachweise sind für eine Fachperson zur Prüfung gedacht.
- **Codesignierung.** Die Windows-Installationsprogramme und das macOS-.dmg sind nicht signiert. Windows warnt deshalb möglicherweise, und macOS verlangt einen Rechtsklick, dann Öffnen.

Frühere Änderungen stehen in [Neu in 0.7](topic:whats-new-0-7).
