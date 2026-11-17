---
title: Stahlbetonbalken, -stützen, -decken und -wände detaillieren
summary: Betonbalken, Betonstützen, Decken und Wände nach Raster hinzufügen, mit Stäben, Bügeln und Querhaken versehen, Übergreifungen und Verankerung nach ACI 318-19 oder EN 1992-1-1 prüfen sowie Werkstattzeichnungen und Biegelisten erstellen.
keywords: Stahlbeton, Bewehrung, Balken, Stütze, Decke, Wand, Bügel, Haken, Übergreifung, Übergreifungsstoß, Verankerung, Verankerungslänge, ld, ldh, lbd, Betondeckung, Abstand, Randstäbe, Öffnungen, Matten, Positionsnummern, Biegeliste, bbs, Werkstattzeichnung, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC-Import
from: 3835b7ec
---

Die Registerkarte {{ui:Beton}} unter der Ansicht beschreibt die Bewehrung von Betonbalken, Betonstützen, Decken und Wänden. Sie geben die Maße und die Stäbe vor; DetailCraft platziert jeden Stab, nummeriert ihn, prüft Übergreifungen, Verankerung, Betondeckung und Abstand gegen die Klausel, aus der sie stammen, und zeichnet ihn.

:::warning
DetailCraft detailliert die Stäbe, die Sie angeben. Eine Bemessung findet nicht statt. Jedes Ergebnis ist zur Prüfung durch einen Fachingenieur bestimmt.
:::

## Registerkarte Beton öffnen

Wählen Sie die Registerkarte {{ui:Beton}} unter der Ansicht. In einem Menübandlayout steht {{ui:Beton}} in der Registerkarte {{ui:Modellierung}} neben {{ui:Fundament}}. Mit der Befehlszeile des Zeichenstils geben Sie {{cmd:CONCRETE}} ein.

## Element nach Raster hinzufügen

Betonelemente werden auf die Rasterlinien und Ebenen des Modells gesetzt; richten Sie diese daher zuerst ein (linkes Feld).

1. Wählen Sie unter {{ui:Nach Raster hinzufügen}} das {{ui:Element}}: {{ui:Betonbalken}}, {{ui:Betonstütze}}, {{ui:Decke}} oder {{ui:Wand}}.
2. Wählen Sie die Rasterlinien und Ebenen:
   - ein Balken verläuft von einem Rasterschnittpunkt zum anderen, seine Oberkante auf der Ebene;
   - eine Stütze steht auf einem Schnittpunkt, von einer Ebene zur anderen;
   - eine Decke füllt das Rechteck zwischen zwei nummerierten und zwei mit Buchstaben bezeichneten Rasterlinien, ihre Oberkante auf der Ebene;
   - eine Wand verläuft entlang ihrer Mittellinie von einem Schnittpunkt zum anderen, von einer Ebene zur anderen.
3. Geben Sie die Größe an und wählen Sie {{ui:Hinzufügen}}. Das Element wird ausgewählt, und seine Felder öffnen sich im Bereich {{ui:Eigenschaften}}.

Jedes Element beginnt mit Stäben als Startwerten, nicht als Bemessung: Ändern Sie sie auf die Werte des Ingenieurs.

## Stäbe ändern

Wählen Sie das Element (in der Ansicht oder über seinen Namen in der Registerkarte {{ui:Beton}}). Der Bereich {{ui:Eigenschaften}} zeigt:

| Element | Was Sie festlegen |
|---|---|
| Balken | Breite, Höhe, lichte Betondeckung; obere und untere Stäbe (Größe, Anzahl, gerader Haken oder 90°-Haken an den Enden); Seitenstäbe; Bügel (Größe, 135°- oder 90°-Haken, Abstand des ersten zur Auflagerfläche, Länge und Abstand der Endzone, Abstand dazwischen); Auflagerlängen; Übergreifungslängen |
| Stütze | Breite, Tiefe quer, Drehung, Betondeckung; Längsstäbe auf jeder Seite; Bügel wie beim Balken; was die Stäbe oben tun (Übergreifung mit der Stütze darüber, Haken in die Decke oder Ende) |
| Decke | Dicke, Größe, obere Bewehrung, Betondeckungen; untere Matte und obere Matte in jeder Richtung (Größe und Abstand); U-Bügel um die Ränder; Randstäbe; Öffnungen |
| Wand | Dicke, Betondeckung, eine oder zwei Lagen, horizontale und vertikale Stäbe, U-Bügel an den Enden, vertikale Stäbe mit oder ohne Übergreifung nach oben, Randstäbe, Öffnungen |

Jede Änderung ist ein Rückgängig-Schritt. Eine Änderung, die sich nicht umsetzen lässt, wird abgelehnt, und die Statusleiste nennt den Grund, z. B. „Die Öffnung passt mit ihrer Betondeckung nicht in das Element.“

Bügel sind geschlossen, mit beiden Haken an einer Ecke. Die Stäbe eines Balkens laufen an seinen Enden bis zur fernen Fläche der Betonstütze abzüglich der Betondeckung in die Stütze; wo keine Stütze steht, geben Sie die {{ui:Auflagerlänge am Anfang (mm)}} und am Ende an.

## Übergreifungen und Verankerung

Stäbe, die länger als die {{ui:Lieferlänge Stab (mm)}} sind (anfangs 12000), werden in gleich lange Stücke geschnitten und übergreifend gestoßen. Die Tabelle {{ui:Übergreifungen und Verankerung}} listet jede Übergreifung und jede Verankerung auf: was erforderlich ist, mit der Klausel und ihren Bedingungen, und was das Detail hat.

- Eine Übergreifungslänge von 0 bedeutet „nach Bedarf“: die von der Norm vorgegebene Länge, auf 25 mm aufgerundet.
- Geben Sie stattdessen eine eigene Übergreifungslänge ein. Ist sie kürzer als erforderlich, ist sie ein Problem (siehe unten) und in der Tabelle mit * markiert.
- Die Verankerung wird von der Auflagerfläche bis zum Stabende innerhalb des Auflagers gemessen. Ein Balken ohne bekanntes Auflager meldet dies, statt ihn zu prüfen.
- Eine Stütze auf einem Fundament übergreift sich mit der Anschlussbewehrung des Fundaments, und auf einer anderen Stütze mit deren Stäben: Auch diese Übergreifung wird geprüft.

**ACI 318-19** (SI): gerade Stäbe unter Zug 25.4.2.3 (die Tabelle, mit ψt, ψe, ψg, λ), Standardhaken 25.4.3.1 (ψr 1.6 und ψo 1.25, sofern nicht anders bekannt), Stäbe unter Druck 25.4.9.2, Zugübergreifungen 25.5.2.1 (Klasse B, oder Klasse A in den Einstellungen), Druckübergreifungen 25.5.5.1.

**EN 1992-1-1**: Verankerung 8.4.4 mit fbd aus 8.4.2 (gute oder schlechte Verbundbedingungen), Übergreifungen 8.7.3 mit α6 für jeden Stab, der an einem Querschnitt übergreift. γc, γs und αct beginnen mit den empfohlenen Werten; setzen Sie die Werte Ihres Nationalen Anhangs.

## Die Prüfungen

Jede fehlgeschlagene Prüfung steht im Bereich Probleme der Shell (Quelle {{ui:Bewehrungsprüfungen}}) und in der Liste {{ui:Prüfungen}} des Elements:

| Prüfung | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Betondeckung | Tabelle 20.5.1.3.1, nach Expositionsklasse | Mindestwert Verbund, Tabelle 4.2 (die Dauerhaftigkeitsdeckung geben Sie vor) |
| Lichter Abstand der Stäbe | 25.2.1 (Balken, Decken, Wände), 25.2.3 (Stützen) | 8.2 (2) |
| Bügelabstand | 9.7.6.2.2 | 9.2.2 (6) |
| Mindestbewehrung Balken | 9.6.1.2 | 9.2.1.1 (1) |
| Seitenstäbe von Balken über 900 mm Höhe | 9.7.2.3 | nicht geprüft |
| Stützen: Bewehrungsgrad, Anzahl der Stäbe | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Bügel: Abstand, Größe, Querhaken | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Deckenabstand, Mindestbewehrung | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Wandabstand, Mindestbewehrung, zwei Lagen | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Übergreifungen, Verankerung | wie oben | wie oben |

Die Zuschlagsgröße ist nicht bekannt; der lichte Abstand wird daher ohne sie geprüft.

## Öffnungen, Randstäbe und Randbewehrung

Wählen Sie unter einer gewählten Decke oder Wand {{ui:Öffnung hinzufügen}} und legen Sie ihre Lage und Größe fest. Stäbe, die sie kreuzen, enden mit der Betondeckung von ihrem Rand. Randstäbe werden auf jeder Seite in derselben Lage ergänzt, die die Hälfte der Fläche der abgeschnittenen Stäbe aufnehmen, eine Verankerungslänge über die Öffnung hinaus. Das ist die Startregel von DetailCraft, keine Normklausel: Ändern Sie die {{ui:Randstäbe}} auf die Werte des Ingenieurs. Eckstäbe werden nicht ergänzt.

U-Bügel um die freien Ränder einer Decke und an den Enden einer Wand haben Schenkel von je einer Übergreifungslänge.

## Positionsnummern und Biegeliste

Gleiche Stäbe teilen sich eine Positionsnummer: Fundamente behalten F-Nummern (5F1), Balken erhalten B, Stützen C, Decken S und Wände W (7B1, 8C1, 4S2). Die Registerkarte {{ui:Biegeliste}} und ihre CSV listen jetzt jeden Stab des Bauwerks auf, Fundamente zuerst. {{ui:Ausgabe}} › {{ui:Mehr}} › {{ui:Biegeliste}} lädt sie herunter.

## Werkstattzeichnungen

Wählen Sie {{ui:Ausgabe}} › {{ui:Mehr}} › {{ui:Bewehrungszeichnungen}}, {{ui:Bewehrungszeichnungen}} in der Registerkarte {{ui:Beton}} oder {{ui:Werkstattzeichnung}} neben einem Element. Jedes Element erhält ein Blatt mit einer Ansicht (bei einer Decke einem Grundriss), die jeden Stab und seine Positionsnummer zeigt, die Bügel- und Querhakenbereiche und die bemaßten Übergreifungen, sowie einen Schnitt in der Mitte. Anschließend listen Biegelisten-Blätter jede Positionsnummer mit einer Skizze ihrer Form, ihren Maßen, der Anzahl, der Zuschnittlänge und dem Gewicht auf.

Die Blätter werden jedes Mal aus dem Modell erzeugt und nach jeder Änderung neu, solange das Fenster geöffnet ist; das Schriftfeld enthält die Modellreferenz. Speichern Sie {{ui:Dieses Blatt als PDF}} oder {{ui:Alle Blätter als PDF}}.

## Stäbe aus einer IFC-Datei

{{ui:Datei}} › {{ui:IFC importieren}} liest jetzt IfcReinforcingBar: Die entlang ihrer Mittellinie gezogene Scheibe kommt als gerade Schenkel und Biegungen zurück, mit ihrem Durchmesser, ihrer Positionsnummer und dem Element, das sie hält. Die Stäbe bleiben so erhalten, wie sie gelesen wurden (sie werden nicht in Regeln eines Balkens oder einer Decke umgewandelt), werden in der Ansicht gezeigt, in der Biegeliste aufgeführt und mit dem IFC-Export wieder ausgegeben. Der Importbericht nennt, wie viele Stäbe in welchen Größen in wie vielen Elementen gelesen wurden und was aus welchem Grund ausgelassen wurde.

Ein Balken, eine Stütze, eine Decke oder eine Wand dieser Datei, die Stäbe hält oder deren Material Beton ist, wird nicht als Stahl übernommen; der Bericht vermerkt dies. Der eigene IFC-Export von DetailCraft enthält die Definition jedes Betonelements, sodass es als es selbst zurückkommt und seine Stäbe daraus neu erzeugt werden.

:::note
Das Lesen der eigenen Dateien eines Tragwerksprogramms (nicht IFC) ist noch nicht umgesetzt: Exportieren Sie dafür IFC aus diesem Programm.
:::

## Der IFC-Export

Betonbalken, Betonstützen, Decken (mit Öffnungen) und Wände werden als IfcBeam, IfcColumn, IfcSlab und IfcWall exportiert, jeweils mit ihren Stäben als IfcReinforcingBar (Hauptstäbe, Bügel, Randstäbe), die ihnen zugeordnet sind. Jeder Stab ist eine entlang seiner Mittellinie gezogene Scheibe mit echten Bögen an den Biegungen, mit seiner Positionsnummer und seiner Zuschnittlänge.
