---
title: Neuerungen in 0.8 und 0.8.1
summary: Ein Montagefilm aus der Traglasttabelle eines Krans, ein Anschluss-Autopilot, eine Karte der Bewehrungsdichte, Fundamentprüfungen, Rahmen aus Holz und Leichtbauprofilen, Prüfungen zur Bauausführbarkeit und Schweißzugänglichkeit, Lagerbestand von Lieferanten, Was versagt zuerst, eine Live-Neuberechnung, weitere Betonprüfungen und die Korrekturen von 0.8.1.
keywords: Neuerungen, Versionshinweise, Änderungsprotokoll, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Montage, Kran, Traglasttabelle, Film, Autopilot, Anschlüsse, Bewehrung, Bewehrungsdichte, Gründung, Fundament, Matte, Setzung, Rahmenbau, Holz, Leichtbau, Zuschnittsliste, Bauausführbarkeit, Schweißzugänglichkeit, Lieferant, Lagerbestand, Lieferzeit, Was versagt zuerst, Live, Beton, seismisch, Decke, Sprachen, Assistent
from: 6e33e052
---

Dies sind die Änderungen in DetailCraft 0.8 (1. November 2026) und 0.8.1 (2. November 2026) gegenüber 0.7. 0.7 prüfte Stahlbauteile; 0.8 plant die Hubvorgänge, schlägt Anschlüsse vor, prüft die Fundamente und die Bewehrung und rahmt Holz- und Leichtbauwände, Decken und Dächer.

## Neu

### Montage

- **Montageplan und Film.** Beschreiben Sie in der Registerkarte {{ui:Montage}} einen Kran (wo er steht, seinen höchsten Haken, das Anschlagmittel, das nicht in der Tabelle steht) und tragen Sie die Zeilen seiner Traglasttabelle ein. DetailCraft hebt das Modell eine Baugruppe nach der anderen, in Phasenreihenfolge und Lage für Lage, und prüft jeden Hub gegen die Tabelle bei seinem Ausladungsradius und gegen die Reserve, die Sie festlegen. {{ui:Film speichern}} schreibt eine HTML-Datei, die offline in jedem Browser abspielt, auch auf einem Telefon. Hübe, die über der Tabelle liegen, darüber hinausgehen oder zu hoch sind, stehen unter {{ui:Probleme}}. Es ist ein Plan aus Ihren Zahlen, kein Hubplan. Siehe [Montageplan und Film](topic:erection-movie).

### Anschlüsse

- **Anschluss-Autopilot.** Die Registerkarte {{ui:Autopilot}} betrachtet jeden Knoten ohne Anschluss und schlägt anhand der Profile einen vor: Fußplatten, Anschlusslaschen, Kopfplatten für die Träger, die Sie als Momententräger markieren, Stöße und Knotenbleche. Geben Sie eine Gleichlast oder eine Querkraft an einem Ende an, und die Schraubenzahl richtet sich nach der Bemessungsfestigkeit der Schraube. {{ui:Alle hinzufügen}} fügt die Vorschläge als einen Rückgängig-Schritt hinzu. Sie sind Ausgangswerte zur Prüfung, kein Anschlussnachweis.
- **Prüfungen zur Bauausführbarkeit.** {{ui:Probleme}} für eine Schraube, die kein Schlüssel erreicht, Schrauben, die für die Nuss zu dicht beieinander liegen, Kehlnähte außerhalb ihrer Größengrenzen und Hohlprofile, die Wasser halten. Neu ist die Schweißzugänglichkeit: Eine rundum laufende Kehlnaht, die der Brenner eines Schweißers nicht erreicht, wird mit dem Teil, das im Weg ist, und dem betroffenen Anteil der Naht aufgelistet. Siehe [Prüfungen zur Bauausführbarkeit](topic:constructability).

### Gründungen und Bewehrung

- **Fundamentprüfungen.** Die Registerkarte {{ui:Gründung}} prüft Einzelfundamente, kombinierte Fundamente und Plattenfundamente auf dem Baugrund, den Sie beschreiben: Auflagerdruck, Gleiten und Kippen aus Gebrauchslasten; Biegung, Querkraft, Durchstanzen, Verankerung und Mindestbewehrung aus Bemessungslasten (ACI 318-19). Eine Stütze nahe einem Rand oder einer Ecke wird mit dem Querschnitt geprüft, der vom Rand des Fundaments abgeschnitten ist. Die Setzung ergibt sich aus dem Steifemodul des Bodens, ein biegsames Plattenfundament wird auf Federn mit einem Bettungsmodul gelöst, und Pfahlgruppen und Stützwände haben eigene Felder. Stützenlasten können eingegeben oder aus der {{ui:Berechnung}} übernommen werden. Siehe [Fundamentprüfungen](topic:foundation-checks).
- **Karte der Bewehrungsdichte.** Die Registerkarte {{ui:Bewehrungsdichte}} zeichnet für jedes Fundament eine Wärmekarte aus der Draufsicht: wo die Stäbe zu wenig Platz lassen, damit der Beton nach unten gelangt, verglichen mit der Regel für den lichten Stababstand und, wenn Sie sie angeben, dem größten Zuschlagkorn und dem Rüttelkopf. Siehe [Karte der Bewehrungsdichte](topic:rebar-congestion).

### Rahmenbau und Lieferung

- **Rahmen aus Holz und Leichtbauprofilen.** Die Registerkarte {{ui:Rahmenbau}} rahmt Wand-, Decken- und Dachtafeln mit jedem Einzelteil, einer Zuschnittsliste, dem zu kaufenden Material und einer maßstäblichen Werkstattzeichnung. {{ui:Als Stäbe platzieren}} setzt die Teile ins Modell, und {{ui:PDF-Blätter}} speichert ein Blatt für jede Tafel. Querschnitte, Abstände und Stürze legen Sie fest: DetailCraft prüft nicht, ob sie die Last tragen. Siehe [Rahmen aus Holz und Leichtbauprofilen](topic:framing-panels).
- **Lagerbestand und Lieferzeiten.** Die Registerkarte {{ui:Lieferung}} liest die Lagerliste eines Lieferanten (CSV) und zeigt für jeden Querschnitt, den die Zuschnittsliste kauft, ob genug auf Lager ist und wie lange die Wartezeit dauert. Fehlmengen und verspätete Querschnitte stehen unter {{ui:Probleme}}. Es wird nichts bestellt. Siehe [Lagerbestand und Lieferzeiten](topic:supplier-stock).

### Berechnung und Bemessung

- **Was versagt zuerst?** Auf der Registerkarte {{ui:Berechnung}} findet die Schaltfläche die maßgebende Lastkombination, das schwächste Bauteil, wie weit die Lasten wachsen können, bevor das erste Bauteil seine Grenze erreicht, und den schwächsten Kopfplatten- oder Querkraftanschluss, sofern die Scherfestigkeit seiner Schrauben bekannt ist. Dazu brauchen Sie zuerst die Kombinationen und eine Bemessungsnorm. Lochleibung, Blockscheren, Schweißnähte und Hebelwirkung werden nicht geprüft. Ihr angebundener Assistent kann dasselbe abfragen.
- **Live.** Setzen Sie den Haken bei {{ui:Live: nach jeder Änderung neu lösen}}, dann wird der Rahmen nach jeder Änderung neu berechnet.
- **Beton, weitere.** Eine schlanke Stütze in einem unverschieblichen Rahmen wird für ihr vergrößertes Moment bemessen (ACI 318-19 6.6.4.5). Die seismische Periode kann nach der Methode von Rayleigh aus der Berechnung übernommen werden. Eine Platte aus Blechen erhält den Stahl, den jede Lage aus ihren Momenten braucht, sowie die einachsige Querkraft. Siehe [Betonbauteile prüfen und seismische Lasten erzeugen](topic:concrete-and-seismic).
- **Zur Prüfung durch einen Ingenieur.** Die Ergebnisse für Fundament, Beton und „Was versagt zuerst?“ sind Hilfsmittel. Windlasten sind nicht umgesetzt.

### In allen Apps

- **Sprachen.** Die Hilfe liegt in 54 Sprachen vor. Die Sprachen außer Englisch sind maschinelle Entwürfe, bis eine Muttersprachlerin oder ein Muttersprachler sie gelesen hat; zehn sind neu (Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili, Usbekisch).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} wählt Umbruch, 2 Zeilen oder 1 Zeile. Eine Leiste, die bereits passt, bleibt, wie sie ist; die übrigen lassen sich seitlich scrollen.
- **Eigenschaftenraster.** Die Felder des Fundaments verwenden das gemeinsame Raster: einklappbare Kategorien und eine kompakte Dichte. Eingegebene Rechnungen wie 2*450 funktionieren weiterhin.
- **Eingabegeräte.** Trackpad, Stift, 3D-Maus, Controller und MIDI können die Apps steuern. Siehe [In 3D navigieren](topic:navigate-3d).
- **Probleme-Bereich.** Die Warnungen der oben genannten neuen Prüfungen erscheinen im selben Bereich {{ui:Probleme}} wie bisher.
- **KI-Assistent anbinden.** Ihr eigener Assistent, angebunden über CadCraft Studio, arbeitet mit allen acht Apps und sieht nur, was Sie freigeben. Das Anbinden per Klick, der gehostete Connector und Ihr eigener API-Schlüssel in Studio folgen noch. Siehe [DetailCraft mit einem KI-Assistenten verwenden](topic:use-with-ai-assistants).

## In 0.8.1 behoben

- **Sprachen in Studio.** Studio und die gepackten Ausgaben können die Sprache zur Laufzeit wechseln; bisher gab es nur Englisch. Es ist noch nicht auf allen Plattformen getestet: Sagen Sie uns Bescheid, falls sich die Sprache nicht ändert.
- **Auswahl mit Kreuzen-Fenster.** Die Installationsprogramme von 0.8.1 enthalten das Auswählen per Fenster bereits in der richtigen Form, wie in der Web-Version von 0.8; ein älteres Installationsprogramm tat dies nicht.
- **Tablets im Hochformat.** Freie Rasterhöhe geht an die Zeichenfläche, und das Blattlayout beginnt bei 760 px oder weniger.

## Noch nicht in dieser Version

- **NC an eine Maschine senden** ist nicht freigegeben.
- **Windlasten** für Beton sind nicht umgesetzt, und die Beton- und Fundamentprüfungen sind für einen Ingenieur zur Prüfung bestimmt.
- **Codesignierung.** Die Windows-Installationsprogramme und die macOS-.dmg sind nicht signiert; Windows warnt daher möglicherweise, und macOS verlangt einen Rechtsklick, dann „Öffnen“.

Frühere Änderungen stehen unter [Neuerungen in 0.7](topic:whats-new-0-7).
