---
title: Holz- und Leichtbaustahl-Rahmentafeln
summary: Wand-, Decken- und Dachtafeln aus Holz oder Leichtbaustahl mit jedem Einzelteil, einer Zuschnittliste, einer Werkstattzeichnung und dem einzukaufenden Material.
keywords: Rahmenbau, Holz, Bauholz, Holzbau, Leichtbaustahl, kaltgeformt, Ständer, Balken, Sparren, Sturz, Königsständer, Zwischenständer, Kurzständer, Zuschnittliste, Werkstattzeichnung, Tafel
from: 3e38ffb9
---

Der Reiter {{ui:Rahmenbau}} erstellt Tafeln, die Sie beschreiben, und liefert, was eine Zimmererkolonne und ein Holzhandel verlangen. Die Tafeln werden in der Modelldatei gespeichert.

:::warning
Die Maße, der Abstand und die Stürze liegen in Ihrer Verantwortung. DetailCraft prüft nicht, ob ein Ständer bei diesem Abstand diese Wand trägt oder ob ein Sturz diese Öffnung überspannt: Dafür sind die Tabellen Ihrer Norm und Ihr Ingenieur zuständig.
:::

## Eine Tafel hinzufügen

Wählen Sie {{ui:Wand hinzufügen}}, {{ui:Decke hinzufügen}} oder {{ui:Dach hinzufügen}} und füllen Sie dann die Maße in Millimetern aus, das Material (Holz oder Leichtbaustahl) und die Profilgröße des Bauteils. Holzmaße sind die Nennbezeichnungen mit ihren gehobelten Maßen (2×4 entspricht 38 × 89 mm). Stahlständer werden nach Tiefe und Dicke benannt, zum Beispiel `C92-1.2`.

## Wände

Eine Wand hat eine Schwelle unten, einen oder mehrere Rähme oben (bei Stahl eine U-Schiene), Randständer, Ständer im von Ihnen angegebenen Abstand und für jede Öffnung: zwei Königsständer, zwei Zwischenständer, einen Sturz in der gewählten Größe und Lagenzahl sowie Kurzständer über dem Sturz (und unter der Brüstung eines Fensters). Geben Sie jeder Öffnung ihren Abstand vom linken Ende, ihre Breite sowie ihre Ober- und Unterkante als Rohbauöffnung, gemessen ab dem Unterboden; eine Tür hat eine Unterkante von 0.

## Decken und Dächer

Eine Decke hat Deckenbalken quer über ihre Breite entlang ihrer Spannweite, Randbalken an beiden Enden und, falls Sie es ankreuzen, Querholz in Feldmitte. Eine Dachtafel ist ein Giebel: ein Paar Sparren im von Ihnen angegebenen Abstand (ihre Länge schließt den Dachüberstand entlang der Dachfläche ein) und ein Firstbalken.

## Was Sie erhalten

Jede Tafel zeigt ihre Teile in einer maßstäblichen Zeichnung, jedes Teil mit seiner Positionsnummer, dazu eine Zuschnittliste nach Positionsnummer und eine Summe. Die Tabelle {{ui:Einzukaufendes Material}} schachtelt alle Zuschnitte der Tafeln in Lagerlängen, und zwar in die kürzesten, die den Zuschnitt jedes Stabs aufnehmen. {{ui:Werkstattzeichnung speichern (SVG)}} schreibt die Zeichnung; die Schaltfläche {{ui:CSV}} schreibt alle Zuschnittlisten und die Materialliste.

## Eine Tafel im Modell platzieren

Geben Sie unter jeder Tafel an, wo sie liegt (x, y, z in Millimetern und den Winkel), und drücken Sie {{ui:Als Stäbe platzieren}}: Jedes Teil wird zu einem Stab des Modells, mit dem gehobelten Querschnitt seiner Größe und dem Gewicht des Materials (etwa 500 kg/m³ für das Holz, Stahl für die Ständer). Eine Wand verläuft unter dem Winkel ab ihrem unteren linken Ende, mit ihrer Unterseite auf z; die Unterseite der Deckenbalken liegt auf z; die Giebelansicht eines Dachs verläuft unter dem Winkel, mit z an der Oberkante der Wandrähme. Jede Sturzlage ist ein Stab nebenan. Drücken Sie erneut, ersetzen die neuen Stäbe die zuvor platzierten, und {{ui:Platzierte Stäbe entfernen}} nimmt sie heraus; jeder Vorgang ist ein Rückgängig-Schritt. Die Berechnung lässt diese Stäbe aus: Sie sind keine Stahlrahmenstäbe.

## PDF-Blätter

{{ui:PDF-Blätter}} speichert eine A3-Seite für jede Tafel: die Tafel maßstäblich mit jedem Teil beschriftet, die Gesamtmaße, die Zuschnittliste und einen Titelstreifen.

Probleme im Bereich {{ui:Probleme}}: eine Öffnung zu nah am Ende einer Wand oder an einer anderen, ein Sturz, der nicht unter die Rähme passt, ein Teil, das länger ist als das längste Lagermaterial.

Der Bereich {{ui:Probleme}} listet außerdem **Schnittstellen (LOD 350)** für Wandtafeln und Betonwände: eine Öffnung, die über das Ende oder die Oberkante ihrer Wand hinausragt, zwei sich überlappende Öffnungen und eine Öffnung in einer Betonwand, die breiter als 1000 mm ist und keine Öffnungsbewehrung hat. Es sind Hinweise, dieselben Regeln, die die Prüfung in BimCraft ausführt; die Breite ist der Startwert von CadCraft, keine Norm.
