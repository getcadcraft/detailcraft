---
title: Was ist neu in 0.7 (früher)
summary: Nachweise von Stahl-I-Profilen mit Lastkombinationen nach ASCE 7 oder EN 1990 und Stabnachweise nach AISC 360 oder EN 1993-1-1, USD-Export des Stahlmodells, ein Assistenten-Werkzeug für USD, ein Menüband Stahl mit großen und kleinen Schaltflächen, Bereiche, die sich ordentlich ausblenden lassen, und Dialogfelder, die sich verschieben lassen.
keywords: Was ist neu 0.7, frühere Version, Versionshinweise, Änderungsprotokoll, Änderungen, 0.7, Version, neue Funktionen, Nachweise, Stahlbemessung, Ausnutzung, Lastkombinationen, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Nationaler Anhang, Dachverkehrslast, Durchbiegungsgrenze, usd, usda, usdc, usdz, openusd, Assistent, mcp, Menüband Stahl, Menüband, geteilte Schaltfläche, Einheiten, kompakt, Bereiche, Dialogfelder, Portugiesisch
from: 54a7a8f0
---

Dies sind die Änderungen in DetailCraft 0.7 gegenüber 0.6. Die Rahmenberechnung aus 0.6 hat jetzt einen zweiten Schritt: die Nachweise der Stahlstäbe nach einer Bemessungsnorm.

## Neu

### Gehrungsstöße (0.7.1)

- **Zwei Stahl-I-Profile, die in einem Winkel zusammentreffen**, etwa ein Rahmenknoten oder ein First: beide auswählen, im Menü {{ui:More}} der Gruppe {{ui:Connect}} {{ui:Mitre}} wählen. Beide Enden werden auf der Ebene geschnitten, die den Winkel halbiert. Verschraubte Kopfplatten und Steifen sind im neuen Dialogfeld Gehrung Kontrollkästchen; die nummerierten Felder passen sich beim Eingeben an eine Zeichnung Ihres Stoßes an. Die Gehrung folgt den Stäben, wenn sie sich bewegen, und wirkt sich auf Zeichnungen, NC-Dateien (Schrägschnitte), IFC und die Stückliste aus. Siehe [Gehrungsstöße](topic:mitres).

### Nachweise

- **Lastkombinationen aus der Norm.** Im Reiter {{ui:Berechnung}} hat der neue Bereich {{ui:Design checks}} eine {{ui:Design code}}: ASCE 7 + AISC 360 (USA, LRFD) oder EN 1990 + EN 1993-1-1 (Eurocode). Geben Sie jedem Lastfall seine Art an (ständig, Verkehr, die neue Dachverkehrslast, Schnee, Wind, Erdbeben), drücken Sie {{ui:Kombinationen bilden}}, und DetailCraft schreibt die Tragfähigkeits- und Gebrauchstauglichkeitskombinationen der Norm für Ihre Lastfälle. Die Kombinationen, die Sie selbst eingegeben haben, bleiben erhalten. Siehe [Kombinationen bilden](topic:design-checks#make-the-combinations).
- **Werte des Nationalen Anhangs.** Für den Eurocode beginnen die Faktoren bei den empfohlenen Werten; mit {{ui:National Annex values}} tragen Sie die Werte Ihres Landes ein, und sie werden im Modell gespeichert. Siehe [Kombinationen bilden](topic:design-checks#make-the-combinations).
- **Stäbe nachweisen.** {{ui:Check members}} prüft jedes Stahl-I-Profil auf Zug, Druck mit Knicken, Biegung mit seitlichem Biegedrillknicken, Querkraft, Biegung mit Normalkraft und Durchbiegung gegen die {{ui:Deflection limit}}, die Sie festlegen. Die Tabelle zeigt die Ausnutzung jedes Stabes, den maßgebenden Nachweis und dessen Kombination; die Stäbe werden im Modell eingefärbt (blau, grün, ockergelb, rot, grau für nicht geprüft). Siehe [Stäbe nachweisen](topic:design-checks#check-the-members).
- **Im Bericht.** {{ui:Report (PDF)}} und {{ui:Report (CSV)}} enthalten die Ausgaben der Normen, die Einstellungen, die Ausnutzung je Stab und jede verwendete Regel. Siehe [Der Bericht](topic:design-checks#the-report).
- **Eine Hilfe, bis ein Ingenieur sie geprüft hat.** Sie verwendet nur Schnittgrößen nach Theorie I. Ordnung. Rohre, Winkel, U-Profile, geschweißte Profile sowie schlanke oder Klasse-4-Querschnitte werden mit Grund als „nicht geprüft“ angezeigt; Torsion, Anschlüsse und Beton werden nicht geprüft. Siehe [Was nicht geprüft wird](topic:design-checks#what-is-not-checked).

### USD

- **Stahlmodell als USD exportieren.** {{ui:USD}} in der Gruppe {{ui:Output}} schreibt das Modell als {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} oder {{ui:Package (.usdz)}} für Renderprogramme und den Zusammenbau von Szenen: Jede Baugruppe enthält ihre Teile, jedes Teil ist sein Profil entlang seiner Länge mit den ausgeschnittenen Ausklinkungen, und jedes trägt seine Positionsnummer, sein Profil, seine Güte, Länge und sein Gewicht. Schraubenlöcher, Schrauben, Schweißnähte und Fundamente sind nicht in den USD-Netzen enthalten. Siehe [Stahlmodell als USD exportieren](topic:usd).

### KI-Assistenten

- **USD für Assistenten.** Ihr eigener Assistent, verbunden über CadCraft Studio, kann das Modell als USD exportieren (`usd_export`) und es in Studio in einen Ordner schreiben, den Sie freigegeben haben. Siehe [Was ein Assistent anfordern kann](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Geändert

- **Das Menüband Stahl** hat große und kleine Schaltflächen: ein großes {{ui:Beam}} neben kleinen {{ui:Column}}, {{ui:Brace}} und {{ui:Plate}} unter {{ui:Modeling}} › {{ui:Members}}; ein großes {{ui:End plates}} unter {{ui:Detailing}} › {{ui:Connections}}, wobei {{ui:Splice}} und {{ui:Gusset}} sich eine geteilte Schaltfläche teilen; ein großes {{ui:Paste}} unter {{ui:Edit}} › {{ui:Clipboard}}, wobei {{ui:Paste in place}} und {{ui:Duplicate}} hinter dem Pfeil der Gruppe liegen. {{ui:Fabrication}} › {{ui:Exchange}} hat {{ui:Export USD}} neben IFC. Die anderen Menüstile sehen aus wie zuvor. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse#the-three-styles).
- [Den Rahmen berechnen](topic:frame-analysis) verweist jetzt auf die Nachweise, und seine Kombinationen können nach der Norm erzeugt werden.

## In allen Apps

- **Einheiten.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} hat je eine Liste für Länge, Fläche, Volumen, Winkel und Neigung, mit den genauen Größen aus den Definitionen der Einheiten (der US-Vermessungsfuß ist eine eigene Einheit). Schalten Sie Einheiten aus, die Sie nie verwenden, und sie verschwinden aus den Einheitenlisten; markieren Sie eine mit einem Stern, und neue Arbeiten beginnen in ihr. Eine Datei behält immer ihre eigene Einheit. Die eigenen Felder von DetailCraft folgen den Listen noch nicht: Ihre Längen werden weiterhin in Millimetern eingegeben. Siehe [Einheiten, eingegebene Werte und Einheitenlisten](common:unit-lists).
- **Dichteres Layout und Bereiche, die sich ausblenden lassen.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} passt mehr auf den Bildschirm (Touchscreens und Telefone behalten ihre großen Schaltflächen). Jeder seitliche Bereich hat eine schmale Titelleiste: Ziehen Sie sie, um den Bereich anzudocken oder zu lösen, legen Sie ihn auf die Leiste eines anderen Bereichs, um einen Rahmen als Registerkarten zu teilen, fixieren Sie ihn, damit er zum Rand gleitet, oder blenden Sie ihn aus und holen Sie ihn vom Rand zurück. Siehe [Bereiche anordnen](common:arrange-panels#make-the-layout-denser).
- **Dialogfelder lassen sich verschieben.** Ziehen Sie ein Dialogfeld an seiner Titelleiste aus dem Weg der Zeichnung; es kehrt an die Stelle zurück, an der Sie es verlassen haben. Ein Doppelklick auf die Titelleiste zentriert es wieder. Siehe [Dialogfeld verschieben](common:arrange-panels#move-a-dialog).
- **Vorlagen für KI-Assistenten.** Zehn ausgearbeitete Anfragen an Ihren eigenen Assistenten (eine Zeichnung aufräumen, eine Satz drucken, Zeichnungen prüfen, dem Modell Fragen stellen, eine Mengenermittlung summieren, eine Bauteilvariante ausprobieren …), jede mit den Werkzeugen, die sie aufruft, und den nötigen Berechtigungen; jede wird durch unsere Tests wiederholt. Die Apps enthalten keine KI. Siehe [Vorlagen für KI-Assistenten](common:assistants-recipes).
- **Sprachen.** **Português (Portugal)** ist neu unter {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Diese Sprache, **Português (Brasil)**, **Español (México)** und **Bahasa Indonesia** haben jetzt alle Wörter der Apps, als Entwürfe, die noch nicht von einer Muttersprachlerin oder einem Muttersprachler geprüft wurden. Die Hilfethemen sind auf Englisch.
- **CadCraft Studio** nennt den Grund, wenn eine Prüfung auf Aktualisierungen fehlschlägt (noch keine Datei für Ihr System, kein Netzwerk, eine ungültige Signatur), statt nur „Fertig“ anzuzeigen, und blendet eine geschlossene Karte „Was ist neu“ nicht mehr ein, bis eine neuere Version erscheint.

## Noch nicht in dieser Version

- **0.7 ist nicht code-signiert.** Die Signierung und das Microsoft-Store-Paket wurden auf 0.8 verschoben, weil die Zertifikatsprüfung noch nicht abgeschlossen ist. Prüfen Sie den SHA-256-Wert neben jeder Datei auf getcadcraft.com/download. Unter Windows wählen Sie, wenn SmartScreen das Installationsprogramm stoppt, {{ui:Weitere Informationen}} und dann {{ui:Trotzdem ausführen}}. Auf einem Mac klicken Sie beim ersten Mal mit der rechten Maustaste auf CadCraft Studio und wählen {{ui:Öffnen}}. CadCraft Studio ist noch nicht in einem App-Store, und es gibt noch keine Version für iPad oder iPhone.
- Die Listen für Winkel und Neigung unter {{ui:Units}} werden gespeichert, aber noch kein Feld liest sie.
- **Die Nachweise sind noch nicht von einem Ingenieur geprüft.** Unsere Tests vergleichen sie mit gedruckten Tabellenwerten und von Hand durchgerechneten Formeln, noch nicht mit den durchgerechneten Beispielen eines Bemessungshandbuchs. Bis zur Prüfung sind sie eine Hilfe: Prüfen Sie wichtige Stäbe von Hand.
- Die Nachweise verwenden Schnittgrößen nach Theorie I. Ordnung (ohne Effekte nach Theorie II. Ordnung) und prüfen nur I-Profile. Noch nicht umgesetzt: Rohre, Winkel, U-Profile, geschweißte Profile, schlanke Querschnitte (AISC) oder Querschnitte der Klasse 4 (Eurocode) bei Biegung, Torsion, Schubbeulen zusammen mit Biegung, Anschlüsse, Ermüdung, Brand, seismische Detaillierung und Beton. Ein schlanker Querschnitt unter Druck lässt die Druckprüfungen aus, und der Stab wird als „besteht, teilweise geprüft“ angezeigt.
- Die Rahmenberechnung ist weiterhin nach Theorie I. Ordnung und linear, und sie wurde noch nicht von einem Ingenieur bei einem echten Projekt erprobt.
- Schraubenlöcher, Schrauben, Schweißnähte und Fundamente sind nicht im USD-Export enthalten.

Alles Übrige steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet).
