---
title: Noch nicht umgesetzt
summary: Was diese frühe Version von DetailCraft noch nicht kann und was Sie heute stattdessen tun können.
keywords: Grenzen, Einschränkungen, fehlend, Roadmap, nicht unterstützt, kommt, geplant, Umgehung, To-do
from: ea411885
---

DetailCraft ist eine frühe Version. Diese Seite zeigt, was es noch nicht kann, damit Sie es einplanen können. Nichts hier ist ein Termin.

## Modellierung

| Noch nicht | Stattdessen, heute |
|---|---|
| Ein Ende eines Stabs ziehen (strecken) | {{ui:Anfang}} oder {{ui:Ende}} unter {{ui:Enden (x, y, z mm)}} im Panel {{ui:Eigenschaften}} bearbeiten |
| Ein Auswahlfilter (nur Träger, nur ein Profil) | Ein Fenster ziehen, dann {{key:Shift}}+Klicken, um Teile wieder aus der Auswahl zu nehmen |
| Eine Auswahl anordnen; um eine geneigte Achse drehen; in einer geneigten Ebene spiegeln | Kopieren und versetzt einfügen oder {{ui:Duplizieren}} verwenden; drehen und spiegeln funktionieren im Grundriss ([Mit Fenster wählen, verschieben, drehen, spiegeln, vieles ändern](topic:select-and-change)) |
| Punkte abseits des Rasters beim Klicken | Auf dem Raster platzieren, dann die Endkoordinaten eingeben |
| Ansichten entlang nummerierter Rasterlinien; gespeicherte Ansichten; Arbeitsebenen | {{ui:3D}} verwenden oder {{ui:Nach Raster hinzufügen}} |
| Löcher als echte Schnitte in der 3D-Ansicht | Löcher erscheinen als dunkle Stopfen; in jedem Export sind sie echt |
| Gerundete oder schräge Ausklinkungen, andere Schnitte und Anschlüsse | Nur rechtwinklige Ausklinkungen an I-Profilen |
| Löcher, die Sie an Winkeln und Rundrohren hinzufügen | Winkellöcher kommen nur von [Knotenblechen für Aussteifungen](topic:brace-gussets) |
| Imperiale Eingabe | Millimeter eingeben (25.4 je Zoll) |
| Bearbeiten oder Entfernen eines eigenen Profils | Ein korrigiertes Profil unter einem neuen Namen hinzufügen |

## Treppen

| Noch nicht | Stattdessen, heute |
|---|---|
| Handläufe, Podeste, Fußbleche, Gitterstufen, Wendel- und Zweiläufertreppen | Nur gerade Läufe; siehe [Treppen](topic:stairs) |
| Wangenenden an den Geschossen | Wangen mit rechtwinkligem Schnitt; in Ihrer Werkstattsoftware zuschneiden |

## Verbindungen

DetailCraft erstellt sechs Verbindungen: ein Knotenblech für Aussteifungen (siehe [Knotenbleche für Aussteifungen](topic:brace-gussets)); einen verschraubten Stoß zwischen zwei Teilen eines I-Profils (siehe [Stöße](topic:splices)); eine Gehrung zwischen zwei I-Profilen, die in einem Winkel zusammentreffen, nur geschnitten oder mit verschraubten Stirnplatten (siehe [Gehrungsverbindungen](topic:mitres)); eine bündige oder verlängerte verschraubte Stirnplatte von einem waagerechten, aufrecht stehenden I-Profil-Träger an einen I-Profil-Stützenflansch oder -steg; eine [Anschlusslasche](topic:shear-tabs) von einem Träger (rechtwinklig, schief oder geneigt) an einen Stützenflansch oder -steg; und eine Stützenfußplatte mit vier Ankerstangen.

| Noch nicht | Stattdessen, heute |
|---|---|
| Schiefe oder geneigte Stirnplatten | [Anschlusslaschen](topic:shear-tabs) verwenden, die schiefe und geneigte Träger aufnehmen |
| Winkelanschlüsse (Clip Angles); Stoßfüllbleche und Stöße zwischen verschiedenen Größen; an Träger und Stütze geschweißte Eckknotenbleche, angefaste Knotenbleche | In anderer Software detaillieren oder Bleche und Löcher von Hand als lose Teile hinzufügen; siehe [Stöße](topic:splices), [Knotenbleche für Aussteifungen](topic:brace-gussets) |
| Angefaste oder verjüngte Fußsteifen; Vergusslöcher; die Fundamenttasche für einen Schubknagen | Rechteckige Steifen; siehe [Fußplatten](topic:base-plates) |
| Volouten; geschweißte Gehrungen mit Stumpfnaht; Steifen in einer Flucht mit den Flanschen des anderen Stabs | Eine [Gehrung](topic:mitres) mit Stirnplatten und Stegsteifen oder eine einfache Gehrung; weitere Bleche von Hand als lose Teile hinzufügen |
| Tragfähigkeitsnachweise der Verbindung | Verbindungen mit den Berechnungen Ihres Ingenieurs prüfen; DetailCraft warnt nur bei Randabstand und Abstand |
| Langlöcher | Nur runde Löcher |

## Berechnung

| Noch nicht | Stattdessen, heute |
|---|---|
| Nachweise über Stahl-I-Profile hinaus: Rohre, Winkel, U-Profile, geschweißte Querschnitte, schlanke Teile oder Teile der Klasse 4, Torsion, Verbindungen; Beton: Schlankheit bei Verschiebbarkeit, Torsion, Erdbebenbewehrung, Platten und Wände | Die Registerkarte {{ui:Berechnung}} prüft Stahl-I-Profile nach AISC 360 oder EN 1993-1-1 ([Stahlteile nach einer Bemessungsnorm prüfen](topic:design-checks)); den Rest lässt sie als „nicht geprüft“ markiert; ein Ingenieur prüft alles |
| Knicknachweise, Schwingung | Nur Berechnung nach Theorie II. Ordnung als P-Delta (elastisch); keine Knickanalyse (Modal-, Antwortspektrum-, Zeitverlauf- und Pushover-Analysen sind in der Registerkarte {{ui:Berechnung}} enthalten) |
| Von einem Ingenieur geprüfte Nachweise | Bis dahin sind sie eine Hilfe: prüfen Sie zwei oder drei Teile von Hand oder in der eigenen Software Ihres Ingenieurs, bevor Sie sich darauf verlassen |
| Decken-, Wind- und Schneelasten, für Sie aus Flächen erzeugt | Lasten von Hand auf Stäbe setzen, in kN/m oder kN |
| Stabversätze, Exzentrizitäten, nur auf Zug wirkende Aussteifungen, Bleche und Fundamente im Rahmen | Stäbe werden in ihren Arbeitslinien berechnet; Aussteifungen nehmen Zug und Druck auf |

## Bewehrung

| Noch nicht | Stattdessen, heute |
|---|---|
| Runde Stützen, Wendeln, geneigte oder gekrümmte Träger, andere Platten als Rechtecke, Wände, die nicht gerade sind | Rechteckige Träger, Stützen, Platten und Wände ([Stahlbeton detaillieren](topic:reinforced-concrete)) |
| Gekröpfte Stäbe in einer Übergreifung, versetzte Übergreifungen, Übergreifungen an beliebiger Stelle | Übergreifungen in gleichen Abständen, jeder Stab an einem Schnitt übergriffen (ACI Klasse B, EN α6 = 1.5) |
| Eckstäbe an Öffnungen, Durchstanzbewehrung, Erdbebenbewehrung (ACI 318-19 Kapitel 18) | Randstäbe an jeder Seite einer Öffnung; den Rest selbst prüfen |
| Lesen der eigenen Dateien eines Tragwerksprogramms | Aus ihm IFC exportieren: Seine IfcReinforcingBar kommen als Stäbe herein ([Stäbe aus einer IFC-Datei](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Formcodes über gerade, einfach gebogene und U-Formen hinaus; ACI-315-Typen für gerade Stäbe und Stäbe mit einem Haken | Die drei Formen werden als BS 8666 00, 11, 21 oder ACI Typ 2 ausgegeben; siehe [Bewehrungsreferenz](topic:rebar-reference) |
| Metrische Stäbe außer BS 4449 H8–H40 (z. B. CSA 10M–35M) | ASTM-Soft-Metric-Namen #10–#36 oder BS-Stäbe |

## Zeichnungen und Exporte

| Noch nicht | Stattdessen, heute |
|---|---|
| Hochformat-Blätter, A0 und Blätter in eigener Größe; Übersichtsansichten auf schiefen Rastern | Querformat A4 bis A1 sowie ANSI B bis D ([Übersichts- und Montagezeichnungen](topic:drawings)); die PDF auf eine andere Größe skalieren, um sie zu drucken |
| Schweißsymbole auf Einzelteil-Werkstattzeichnungen; andere Symbole als Kehlnähte | Montagezeichnungen enthalten Kehlnahtsymbole; die Werkstattzeichnung gibt die Schweißung als Text an |
| Zeichnung in der App bearbeiten | Modell ändern und Zeichnung neu erstellen; die PDF in einer PDF-App wie MarkupCraft markieren |
| Zeichnungen als DWG mit Bemaßungsobjekten oder das Modell in voller Größe im Modellbereich mit den Blättern als Layouts | Jedes Blatt ist eine DWG oder DXF in voller Größe des Papiers, Bemaßungen als Linien und Zahlen ([Übersichts- und Montagezeichnungen](topic:drawings#download)) |
| NC-Löcher in Rundrohren, Ausklinkungen an Winkeln und Rundrohren in NC-Dateien | Nicht geschrieben; siehe [NC-Datei-Felder](topic:nc1-fields) |
| Fasen, Markierungen und Innenkonturen in NC-Dateien | Heute keine |
| Schraublöcher, Schrauben, Schweißnähte und Fundamente im USD-Export | Sie sind im IFC-, NC- und Stücklisten-Export enthalten; siehe [Stahlmodell als USD exportieren](topic:usd) |
| Übernahme von Verbindungen, Fundamenten, Lang- oder Rechtecklöchern und Löchern in Rundrohren aus einer IFC-Datei | {{ui:IFC importieren}} übernimmt Träger, Stützen, Stäbe, Bleche, Raster, Ebenen, runde Löcher, Ausklinkungen, Schrauben und Bewehrungsstäbe; der Bericht listet auf, was ausgelassen wurde |
| Eigene Berichtslayouts | Die drei CSV-Dateien |

## Panels

| Noch nicht | Stattdessen, heute |
|---|---|
| Die Berichte unten ({{ui:Probleme}}, {{ui:Stückliste}}, {{ui:Biegeliste}}) verschieben | Nur die Panels {{ui:Modell}} und {{ui:Eigenschaften}} lassen sich verschieben. Siehe [Panels anordnen](common:arrange-panels) |

## Zusammenarbeit und Speichern

| Noch nicht | Stattdessen, heute |
|---|---|
| Cloud-Speicherung und Abgleich zwischen Computern | `.detailcraft.json`-Dateien speichern und wie jede andere Datei teilen. Cloud-Speicherung ist noch nicht verfügbar |
| Cursor anderer Personen und Hinweise „wird bearbeitet“ in einer Live-TeamWork-Sitzung; Raster, Ebenen und Phasen nicht einzeln zusammengeführt | Änderungen werden weiterhin zusammengeführt (Raster, Ebenen und Phasen als Ganzes, die spätere Änderung gewinnt); siehe [Ein Tragwerk gemeinsam live bearbeiten](topic:work-live) |
| Einladungslinks zu einer Live-TeamWork-Sitzung über das Internet | Mit einem kurzen Code im selben Netzwerk beitreten |

## Plattformen

- DetailCraft ist für Desktop-, Laptop- und Tablet-Bildschirme gemacht. Es funktioniert auch auf dem Telefon: Das Modell behält den Bildschirm und die Panels, und Berichte öffnen sich als Blätter aus einer Leiste unten, aber für die Panels ist wenig Platz.
- Offline-Nutzung braucht zuerst ein für Offline gespeichertes DetailCraft: mit {{ui:Für Offline speichern}} in der App-Leiste. Sobald dort {{ui:Offline bereit}} steht, funktioniert in dieser Version alles ohne Verbindung. Siehe [Offline arbeiten](common:offline).

Wenn eine dieser Lücken Ihre Arbeit blockiert, teilen Sie es uns über die [Support-Seite](https://getcadcraft.com/support) mit; das hilft uns zu entscheiden, was wir als Nächstes umsetzen.
