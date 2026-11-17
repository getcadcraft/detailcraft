---
title: Umstieg von anderer Detailing-Software
summary: Wie die Gewohnheiten eines vollständigen Detailing-Programms auf DetailCraft übertragbar sind und welche Unterschiede erfahrene Detailer überraschen.
keywords: Umstieg, Migration, vertraut, Arbeitsablauf, Vergleich, Unterschiede, Nummerierung, Komponenten, Katalog, Zeichnungen, Gewohnheiten
from: 39639a5d
---

Wenn Sie in Tekla Structures detaillieren, wird Ihnen das meiste in DetailCraft vertraut vorkommen: Raster, Ebenen, Profile aus einem Katalog, Bauteile und Baugruppen, Verbindungen, Nummerierung, NC-Dateien, IFC. Der Maßstab ist sehr verschieden: Tekla Structures ist ein vollständiges Produktionssystem, und DetailCraft ist eine kleine, frühe Browser-Anwendung, die einige Aufgaben durchgängig erledigt. Diese Seite zeigt, wo Ihre Gewohnheiten übernommen werden können und wo nicht.

:::tip
Wenn Ihre Hände das Menüband von Tekla Structures kennen, wählen Sie in {{ui:Einstellungen}} › {{ui:DetailCraft}} › {{ui:Menus, Tasten und Maus}} den Menüstil {{ui:Stahlbau-Menüband}}: die Registerkarten Modellierung, Detaillierung, Bearbeiten, Zeichnungen, Fertigung und Ansicht, und die mittlere Taste verschiebt die Ansicht. Wenn Sie von AutoCAD kommen und gern Befehle eintippen, fügt {{ui:Klassisches Zeichnen}} eine Befehlszeile hinzu (BEAM, COLUMN, ENDPLATE, ZOOM …). Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).
:::

## Kurzübersicht

| Gewohnt aus | In DetailCraft |
|---|---|
| Raster mit Koordinaten in einem Rasterdialog erstellen | {{ui:Raster}} im linken Bereich: Beschriftungen und die Abstände zwischen den Linien, keine absoluten Koordinaten. Nummerierte Linien verlaufen in der einen Richtung, mit Buchstaben benannte in der anderen |
| Ebenen als Z-Koordinaten der Raster | Eine eigene Liste {{ui:Ebenen}}, Name und Höhe pro Zeile, übernommen mit {{ui:Ebenen übernehmen}} |
| Punkte beliebig mit Fangfunktionen wählen | Klicks rasten nur an Rasterschnittpunkten ein. Punkte abseits des Rasters werden in die {{ui:Enden (x, y, z mm)}} eines Stabs eingetragen |
| Die Befehle für Stütze, Träger und Blech | {{ui:Stütze}} ({{key:C}}), {{ui:Träger}} ({{key:B}}), {{ui:Aussteifung}} ({{key:R}}), {{ui:Blech}} ({{key:P}}), {{ui:Fundament}} ({{key:F}}) |
| Dialog mit Bauteileigenschaften (Doppelklick auf ein Teil) | Ein Klick genügt: Der Bereich {{ui:Eigenschaften}} rechts ist immer aktiv; es gibt keinen Dialog und keine Schaltfläche Ändern oder Übernehmen |
| Lage in der Ebene, Drehung und Tiefeneinstellungen | {{ui:Position}} (Oberkante Stahl, mittig oder unten auf der Linie) und {{ui:Drehung (°)}}. Keine separaten horizontalen Versätze |
| Der Profilkatalog | Eine feste Liste von 2,311 veröffentlichten Größen (AISC W, S, C, L, HSS, Rohr; europäisch IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS und kaltgeformte Hohlprofile), dazu parametrische Bleche und Ihre eigenen Querschnitte über {{ui:Eigenes Profil}} |
| Werkstoffkatalog | Sieben Güten in einer Liste: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Eine Verbindungskomponente und ihren Dialog anwenden | Wählen Sie den Träger und {{ui:Kopfplatten}}. Die Einstellungen erscheinen im Bereich {{ui:Eigenschaften}}. Es gibt nur zwei Verbindungen (Kopfplatte an Stützenflansch, Fußplatte) |
| Automatische Verbindung oder Kopieren eines Knotens auf ähnliche Knoten | Wählen Sie eine Verbindung und {{ui:Auf ähnliche anwenden (n)}} |
| Nummerierung mit Serien und Startnummern | Kein Befehl: Die Marken aktualisieren sich nach jeder Änderung selbst, mit festen Präfixen c, b, br, p und C, B, BR, P |
| Schrauben- und Lochdialoge | Löcher werden nach Seite und Position eingetragen. Schrauben entstehen nur aus Verbindungen |
| Schneid-, Passungs- und Polygon-Schneidewerkzeuge | Ausklinkungen (oben oder unten, an einem der Enden) nur an I-Profilen. Verbindungskürzungen geschehen automatisch |
| Berichte und Vorlagen | Drei feste Berichte in Registerkarten unten und CSV-Downloads |
| Zeichnungserstellung und Zeichnungsliste | Eine Werkstattzeichnung pro Positionsnummer, alle auf einmal erstellt, als Vorschau und dann als eine PDF-Datei oder Blatt für Blatt heruntergeladen. Nichts wird gespeichert oder bearbeitet |
| NC-Dateiexport | {{ui:NC-Dateien}}: eine DSTV-Datei pro Positionsnummer, nur I-Profile und Bleche, gezippt |
| IFC-Export | {{ui:IFC}}: IFC4 des gesamten Modells, mit Bewehrung |
| Bewehrung in jedem Betonbauteil | Bewehrung nur in rechteckigen Einzelfundamenten, mit US-Stabgrößen, mit unterer Matte und Anschlussbewehrung |
| Modell in einem Projektordner, mehrere Benutzer | Eine Datei `.detailcraft.json`, die Sie herunterladen. Ein Benutzer, auf Ihrem Computer |
| Änderungsverlauf | {{key:Mod+Z}} und {{key:Mod+Y}}, bis zu 200 Schritte, bis Sie ein anderes Modell öffnen oder beginnen |

## Unterschiede, die Leute stolpern lassen

### Marken ändern sich von selbst

Es gibt keinen Nummerierungsschritt. Marken werden nach jeder Änderung neu berechnet, sie sind also immer aktuell, können sich aber auch neu nummerieren: Fügen Sie eine Stütze hinzu, und aus c3 von gestern kann c4 werden. Es gibt keinen Nummerierungsverlauf, der alte Marken bewahrt. Schließen Sie das Modell ab und erstellen Sie dann Stückliste, NC-Dateien und Werkstattzeichnungen gemeinsam aus einer gespeicherten Datei.

### Die mittlere Maustaste zoomt; sie verschiebt nicht

In der 3D-Ansicht dreht Linksziehen, Rechtsziehen verschiebt, das Mausrad zoomt, und Ziehen mit der mittleren Taste zoomt ebenfalls. Halten von {{key:Shift}} beim Linksziehen verschiebt ebenfalls. Das Mausrad zoomt zur Mitte der Ansicht, nicht zum Zeiger. Es gibt keine Auswahl eines Drehpunkts: Das Modell dreht sich um die Mitte der Ansicht. Siehe [Navigieren in der 3D-Ansicht](topic:navigate-3d).

### Stützen zeigen standardmäßig in eine Richtung

Bei Drehung 0 verlaufen die Flansche einer Stütze entlang der Richtung der nummerierten Raster. Träger, die zwischen Rasterlinien mit Buchstaben verlaufen, stoßen in den Steg, und Kopfplatten werden dort abgelehnt („Träger, die an einen Stützensteg anschließen, sind noch nicht umgesetzt“). Drehen Sie diese Stützen um 90°, bevor Sie Verbindungen hinzufügen.

### Ansichten nur auf Rasterlinien mit Buchstaben

{{ui:Ansicht}} schaut nur entlang der Rasterlinien mit Buchstaben. Es gibt keine Ansichten entlang nummerierter Linien, keine gespeicherten Ansichten und keine Arbeitsebenen. Verwenden Sie {{ui:3D}} oder {{ui:Nach Raster hinzufügen}} für Rahmen auf nummerierten Linien.

### Auswahl, Kopieren und Verschieben

Wählen Sie mehrere Teile mit {{key:Shift}}+Klick oder {{key:Mod+A}} aus, dann kopieren, ausschneiden, einfügen (an einem Rasterschnittpunkt, mit einem eingegebenen Versatz oder an gleicher Position) und duplizieren Sie sie, Verbindungen eingeschlossen ([Kopieren, Einfügen und Duplizieren](topic:copy-paste)). Es gibt kein Fensterauswählen, keinen Auswahlfilter, kein Verschieben, Spiegeln oder Anordnen, und Eigenschaften werden im Bereich {{ui:Eigenschaften}} jeweils für ein Bauteil geändert.

### Raster ziehen Stäbe nicht mit

Stäbe behalten ihre Koordinaten, wenn Sie den Rasterabstand ändern; nichts bewegt sich mit den Rasterlinien. Ändern Sie das Raster, bevor Sie Stahl setzen, oder bearbeiten Sie danach die Endkoordinaten jedes Stabs.

### Verbindungen werden nicht bemessen

Die beiden Verbindungen setzen Bleche, Löcher, Schrauben und Schweißnähte aus den Zahlen, die Sie angeben. Es gibt keinerlei Bemessungsprüfung, nur Warnungen zu Rand- und Abstandsmaßen (aus EN 1993-1-8 Tabelle 3.3).

### Löcher werden in der 3D-Ansicht nicht geschnitten

Löcher erscheinen als dunkle Stopfen. Sie sind echte Löcher in den NC-Dateien, den Werkstattzeichnungen und der IFC-Datei. Ausklinkungen werden in der Ansicht geschnitten.

### Gewichte sind Bruttogewichte

Das Stahlgewicht zieht keine Löcher oder Ausklinkungen ab, und das Schraubengewicht ist nicht enthalten.

### Nur Millimeter

Alles wird in Millimetern eingegeben und angezeigt, auch bei AISC-Profilen. Profilnamen behalten ihre veröffentlichte Form (W12x50, HSS6x6x1/4).

### Keine Zeichnungen zu verwalten

Es gibt keine Zeichnungsliste, keinen Zeichnungseditor und keine Übersichts- oder Montagezeichnungen. Eine Werkstattzeichnung wird erstellt, wenn Sie sie anfordern, und heruntergeladen. Um sie zu ändern, ändern Sie das Modell und erstellen Sie sie erneut.

### Es läuft im Browser

Speichern lädt eine Datei herunter. Tastenkürzel, die der Browser für sich selbst belegt, können nicht verwendet werden. Ihre Modelle verlassen Ihren Computer nie: Siehe [Wohin Ihre Dateien gehen](common:your-files).

## Was Sie in Ihrer bisherigen Software weiter tun sollten

Heute eignet sich DetailCraft für kleine Rahmen, zum Prüfen einer Idee, zum Lehren oder für NC-Dateien und Werkstattzeichnungen einfacher Träger- und Stützenarbeiten. Komplexe Verbindungen, Übersichtszeichnungen, Montagezeichnungen, Projekte mit mehreren Benutzern und alles, was unter [Was noch nicht umgesetzt ist](topic:not-built-yet) steht, belassen Sie in der Software, die Sie jetzt verwenden.
