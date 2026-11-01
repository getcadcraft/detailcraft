---
title: Neu in 0.7
summary: Nachweise für Stahl-I-Profile mit Lastkombinationen nach ASCE 7 oder EN 1990 und Stabnachweisen nach AISC 360 oder EN 1993-1-1, USD-Export des Stahlmodells, ein Assistentenwerkzeug für USD, ein Menüband Stahlbau mit großen und kleinen Schaltflächen, Bereiche, die sich wegräumen lassen, und verschiebbare Dialogfelder.
from: 17d1e0bb
keywords: Neuheiten, was ist neu, Versionshinweise, Änderungsprotokoll, Änderungen, 0.7, Version, neue Funktionen, Nachweise, Stahlbemessung, Ausnutzung, Lastkombinationen, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Nationaler Anhang, Dachnutzlast, Durchbiegungsgrenze, usd, usda, usdc, usdz, openusd, Assistent, mcp, Menüband Stahlbau, Menüband, geteilte Schaltfläche, Einheiten, kompakt, Bereiche, Dialogfelder, Portugiesisch
---

Das hat sich in DetailCraft 0.7 gegenüber 0.6 geändert. Die Rahmenberechnung aus 0.6 hat jetzt einen zweiten Schritt: die Stahlstäbe nach einer Bemessungsnorm nachzuweisen.

## Neu

### Gehrungsanschlüsse (0.7.1)

- **Zwei I-Profile, die in einem Winkel aufeinandertreffen**, etwa ein Rahmeneck oder ein First: Wählen Sie beide, wählen Sie {{ui:Gehrung}} im Menü {{ui:Mehr}} der Gruppe {{ui:Anschlüsse}}, und beide Enden werden auf der Ebene geschnitten, die den Winkel halbiert. Gegeneinander geschraubte Kopfplatten und Stegsteifen sind Kontrollkästchen im neuen Gehrungsdialog, dessen nummerierte Felder zu einer Zeichnung Ihres Anschlusses passen, die beim Tippen entsteht. Die Gehrung folgt den Stäben, wenn sie sich bewegen, und setzt sich in Zeichnungen, NC-Dateien (Schrägschnitte), IFC und Stückliste fort. Siehe [Gehrungsanschlüsse](topic:mitres).

### Nachweise

- **Lastkombinationen nach der Norm.** In der Registerkarte {{ui:Berechnung}} hat der neue Block {{ui:Nachweise}} eine {{ui:Bemessungsnorm}}: ASCE 7 + AISC 360 (US, LRFD) oder EN 1990 + EN 1993-1-1 (Eurocode). Geben Sie jedem Lastfall seine Art (Eigenlast, Nutzlast, die neue Dachnutzlast, Schnee, Wind, Erdbeben), drücken Sie {{ui:Kombinationen bilden}}, und DetailCraft schreibt die Kombinationen der Norm für Tragfähigkeit und Gebrauchstauglichkeit aus Ihren Lastfällen. Kombinationen, die Sie selbst eingetippt haben, bleiben. Siehe [Die Kombinationen bilden](topic:design-checks#make-the-combinations).
- **Werte des Nationalen Anhangs.** Beim Eurocode beginnen die Faktoren mit den empfohlenen Werten; mit {{ui:Werte des Nationalen Anhangs}} tippen Sie die Ihres Landes ein, und sie werden im Modell gespeichert. Siehe [Die Kombinationen bilden](topic:design-checks#make-the-combinations).
- **Stäbe nachweisen.** {{ui:Stäbe nachweisen}} weist jedes Stahl-I-Profil nach auf Zug, Druck mit Knicken, Biegung mit Biegedrillknicken, Querkraft, Biegung mit Normalkraft und Durchbiegung gegen die von Ihnen gesetzte {{ui:Durchbiegungsgrenze}}. Die Tabelle zeigt für jeden Stab die Ausnutzung, den maßgebenden Nachweis und seine Kombination, und die Stäbe werden im Modell eingefärbt (blau, grün, ocker, rot, grau für nicht nachgewiesen). Siehe [Die Stäbe nachweisen](topic:design-checks#check-the-members).
- **Im Bericht.** {{ui:Bericht (PDF)}} und {{ui:Bericht (CSV)}} ergänzen die Ausgaben der Normen, die Einstellungen, die Ausnutzung je Stab und jeden verwendeten Abschnitt. Siehe [Der Bericht](topic:design-checks#the-report).
- **Eine Hilfe, bis ein Ingenieur sie geprüft hat.** Es werden nur Schnittgrößen nach Theorie erster Ordnung verwendet. Rohre, Winkel, U-Profile, geschweißte Querschnitte und schlanke Teile oder Teile der Klasse 4 lauten „not checked“ mit Begründung; Torsion, Anschlüsse und Beton werden nicht nachgewiesen. Siehe [Was nicht nachgewiesen wird](topic:design-checks#what-is-not-checked).

### USD

- **Das Stahlmodell als USD exportieren.** {{ui:USD}} in der Gruppe {{ui:Ausgabe}} schreibt das Modell als {{ui:Text (.usda)}}, {{ui:Binär (.usdc)}} oder {{ui:Paket (.usdz)}} für Render-Programme und Szenenaufbau: Jede Baugruppe enthält ihre Bauteile, jedes Bauteil ist sein Querschnitt über seine Länge geführt, mit ausgeschnittenen Ausklinkungen, und jedes trägt Positionsnummer, Profil, Güte, Länge und Gewicht. Schraubenlöcher, Schrauben, Schweißnähte und Fundamente sind nicht in den USD-Netzen. Siehe [Das Stahlmodell als USD exportieren](topic:usd).

### KI-Assistenten

- **USD für Assistenten.** Ihr eigener Assistent, über CadCraft Studio verbunden, kann das Modell als USD exportieren (`usd_export`) und in Studio in einen Ordner schreiben, den Sie erlaubt haben. Siehe [Was ein Assistent anfordern kann](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Geändert

- **Das Menüband Stahlbau** hat große und kleine Schaltflächen: ein großer {{ui:Träger}} neben kleinen {{ui:Stütze}}, {{ui:Aussteifung}} und {{ui:Blech}} unter {{ui:Modellierung}} › {{ui:Stäbe}}; große {{ui:Kopfplatten}} unter {{ui:Detaillierung}} › {{ui:Anschlüsse}}, wobei {{ui:Stoß}} und {{ui:Knotenblech}} sich eine geteilte Schaltfläche teilen; ein großes {{ui:Einfügen}} unter {{ui:Bearbeiten}} › {{ui:Zwischenablage}}, mit {{ui:An gleicher Position einfügen}} und {{ui:Duplizieren}} hinter dem Pfeil der Gruppe. {{ui:Fertigung}} › {{ui:Austausch}} hat {{ui:USD exportieren}} neben IFC. Die anderen Menüstile sehen aus wie bisher. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse#the-three-styles).
- [Den Rahmen berechnen](topic:frame-analysis) verweist jetzt auf die Nachweise, und seine Kombinationen lassen sich nach der Norm bilden.

## In jeder App

- **Einheiten.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Einheiten}} hat je eine Liste für Länge, Fläche, Volumen, Winkel und Neigung, mit den genauen Größen, die die Definitionen der Einheiten ergeben (der US Survey Foot ist eine eigene Einheit). Schalten Sie Einheiten aus, die Sie nie brauchen, und sie verschwinden aus den Einheitenlisten; markieren Sie eine mit dem Stern, und neue Arbeit beginnt in ihr. Eine Datei behält immer ihre eigene Einheit. Die eigenen Felder von DetailCraft folgen den Listen noch nicht: Längen werden weiterhin in Millimetern eingetippt. Siehe [Einheiten, eingetippte Werte und die Einheitenlisten](common:unit-lists).
- **Ein dichteres Layout und Bereiche, die sich wegräumen lassen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Layoutdichte}} › {{ui:Kompakt}} bringt mehr auf den Bildschirm (Touchscreens und Telefone behalten ihre großen Schaltflächen). Jeder seitliche Bereich hat eine schmale Titelleiste: Ziehen Sie sie, um den Bereich anzudocken oder schweben zu lassen, legen Sie sie auf die Leiste eines anderen Bereichs, damit beide sich als Registerkarten einen Rahmen teilen, heften Sie ihn an, damit er an den Rand wegrutscht, oder blenden Sie ihn aus und holen ihn vom Rand zurück. Siehe [Bereiche anordnen](common:arrange-panels#make-the-layout-denser).
- **Dialogfelder lassen sich verschieben.** Ziehen Sie ein Dialogfeld an seiner Titelleiste aus dem Weg der Zeichnung; es kommt dort wieder, wo Sie es gelassen haben. Mit einem Doppelklick auf die Titelleiste zentrieren Sie es erneut. Siehe [Ein Dialogfeld verschieben](common:arrange-panels#move-a-dialog).
- **Rezepte für KI-Assistenten.** Zehn ausgearbeitete Anfragen für Ihren eigenen Assistenten (eine Zeichnung aufräumen, einen Satz plotten, Zeichnungen prüfen, einem Modell Fragen stellen, eine Mengenermittlung summieren, eine Bauteilvariante ausprobieren …), jeweils mit den Werkzeugen, die er aufruft, und den Berechtigungen, die er braucht, und jedes von unseren Tests nachgespielt. Die Apps enthalten keine KI. Siehe [Rezepte für KI-Assistenten](common:assistants-recipes).
- **Sprachen.** **Português (Portugal)** ist neu unter {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Sprache}}. Diese Sprache, **Português (Brasil)**, **Español (México)** und **Bahasa Indonesia** haben jetzt jedes Wort der Apps, als Entwürfe, die noch keine Muttersprachlerin und kein Muttersprachler geprüft hat. Hilfethemen gibt es auf Englisch.
- **CadCraft Studio** nennt den Grund, warum eine Updateprüfung fehlgeschlagen ist (noch keine Datei für Ihr System, kein Netz, eine ungültige Signatur), statt nur „Done“ zu sagen, und bringt eine geschlossene Karte „Neu in …“ nicht mehr zurück, bis es eine neuere Version gibt.

## Noch nicht in dieser Version

- **0.7 ist nicht codesigniert.** Die Signierung und das Paket für den Microsoft Store sind auf 0.8 verschoben, weil die Validierung des Zertifikats noch nicht durch ist. Prüfen Sie die SHA-256-Summe neben jeder Datei auf getcadcraft.com/download. Wenn unter Windows SmartScreen das Installationsprogramm stoppt, wählen Sie {{ui:Weitere Informationen}}, dann {{ui:Trotzdem ausführen}}. Auf einem Mac klicken Sie beim ersten Mal mit der rechten Maustaste auf CadCraft Studio und wählen {{ui:Öffnen}}. CadCraft Studio ist noch in keinem App-Store, und einen Build für iPad oder iPhone gibt es noch nicht.
- Die Listen für Winkel und Neigung unter {{ui:Einheiten}} werden gespeichert, aber noch kein Feld liest sie.
- **Die Nachweise wurden noch nicht von einem Ingenieur geprüft.** Unsere Tests vergleichen sie mit gedruckten Tabellenwerten und von Hand gerechneten Formeln, noch nicht mit den Rechenbeispielen eines Bemessungsleitfadens. Bis zu einer Prüfung sind sie eine Hilfe: Weisen Sie wichtige Stäbe von Hand nach.
- Die Nachweise verwenden Schnittgrößen nach Theorie erster Ordnung (keine Effekte zweiter Ordnung) und weisen nur I-Profile nach. Nicht umgesetzt: Rohre, Winkel, U-Profile, geschweißte Querschnitte, schlanke (AISC) oder Klasse-4-Teile (Eurocode) auf Biegung, Torsion, Schubbeulen zusammen mit Biegung, Anschlüsse, Ermüdung, Brand, Erdbebendetaillierung und Beton. Ein schlankes Teil unter Druck lässt die Drucknachweise aus, und der Stab lautet „passes, partly checked“.
- Die Rahmenberechnung ist weiterhin linear nach Theorie erster Ordnung und wurde noch nicht von einem Ingenieur an einem echten Auftrag erprobt.
- Schraubenlöcher, Schrauben, Schweißnähte und Fundamente sind nicht im USD-Export.

Alles Übrige steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet).
