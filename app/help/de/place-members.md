---
title: Stützen, Träger und Aussteifungen platzieren
summary: Profil, Werkstoff und Position wählen, dann Rasterschnittpunkte anklicken oder eingeben, um Stahlstäbe zu platzieren.
keywords: Stütze, Träger, Aussteifung, Stab, platzieren, Profil, Material, Drehung, Position, Versatz, einfügen, nach Raster hinzufügen
from: d6db0dc1
---

Stäbe werden auf Rasterschnittpunkten platziert: eine Stütze auf einem, ein Träger oder eine Aussteifung zwischen zwei. Richten Sie zuerst [Raster und Ebenen](topic:grids-and-levels) ein.

## Werkzeug und seine Optionen wählen

1. Wählen Sie {{ui:Stütze}} ({{key:C}}), {{ui:Träger}} ({{key:B}}) oder {{ui:Aussteifung}} ({{key:R}}) in der Gruppe {{ui:Platzieren}}.
2. Das Panel {{ui:Eigenschaften}} rechts wird zu „Stütze platzieren“ (oder Träger, oder Aussteifung) und zeigt die Optionen für den nächsten Stab:
   - {{ui:Profil}}: aus der Liste wählen. Größen sind nach Katalog gruppiert (W-Profile, U-Profile, Winkel, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS sowie Ihre eigenen Profile). Siehe [Profilkatalog](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 oder S355.
   - {{ui:Position}}: wo der Querschnitt auf der Linie zwischen den zwei Punkten sitzt: {{ui:Stahloberseite auf der Linie}}, {{ui:Mittig auf der Linie}} oder {{ui:Unterseite auf der Linie}}.
   - {{ui:Drehung (°)}}: dreht den Querschnitt um die eigene Achse des Stabs.
   - {{ui:Bis}} (nur Stützen): {{ui:Die nächste Ebene darüber}} oder ein Ebenenname.
3. Unter den Optionen zeigt ein Kasten {{ui:Profil}} die Abmessungen, die Fläche, die Masse je Meter und den Katalog des gewählten Querschnitts.

Die Standardwerte sind W12x50 in A992 für Stützen (mittig), W16x26 in A992 für Träger (Stahloberseite auf der Linie) und HSS6x6x1/4 in A500 Gr C für Aussteifungen (mittig). Die Optionen bleiben gesetzt, bis Sie sie ändern.

## Durch Klicken platzieren

### Eine Stütze

1. Wählen Sie {{ui:Grundriss}} und die Ebene, auf der die Stütze beginnt.
2. Wählen Sie {{ui:Stütze}}.
3. Bewegen Sie den Zeiger nahe an einen Schnittpunkt. Der nächste Punkt leuchtet auf, und die Statusleiste nennt ihn.
4. Klicken Sie. Die Stütze reicht von dieser Ebene bis zur nächsten Ebene darüber (oder bis zur Ebene unter {{ui:Bis}}). Die Statusleiste sagt zum Beispiel „Stütze W12x50 bei A/1, Ebene 1 bis Ebene 2.“
5. Klicken Sie weiter, um mehr zu platzieren. Drücken Sie {{key:Esc}}, wenn Sie fertig sind.

Wenn es über der angeklickten Ebene keine Ebene gibt, zeigt die Statusleiste: „Über Ebene 2 gibt es keine Ebene, bis zu der die Stütze reichen kann. Fügen Sie zuerst eine Ebene hinzu.“

### Ein Träger

1. Wählen Sie {{ui:Grundriss}} und die Ebene des Trägers.
2. Wählen Sie {{ui:Träger}}.
3. Klicken Sie auf den ersten Schnittpunkt. Die Statusleiste sagt „Von A/1 auf Ebene 2. Klicken Sie nun das andere Ende (Esc bricht ab).“ Eine gestrichelte Linie folgt dem Zeiger.
4. Klicken Sie auf den zweiten Schnittpunkt. Der Träger erscheint.
5. Klicken Sie erneut, um den nächsten Träger zu beginnen, oder drücken Sie {{key:Esc}}.

{{key:Esc}} nach dem ersten Klick bricht nur diesen Punkt ab; ein zweites {{key:Esc}} legt das Werkzeug weg.

### Eine Aussteifung

Eine Aussteifung verläuft zwischen zwei Schnittpunkten auf verschiedenen Ebenen, deshalb ist sie in {{ui:Ansicht}} am einfachsten zu platzieren.

1. Wählen Sie {{ui:Ansicht}} und die Rasterlinie mit Buchstaben, auf der die Aussteifung liegt.
2. Wählen Sie {{ui:Aussteifung}}.
3. Klicken Sie das untere Ende, dann das obere Ende.

Ansichten gibt es nur für Rasterlinien mit Buchstaben. Für eine Aussteifung in einem Rahmen entlang einer nummerierten Linie (von A nach B) verwenden Sie {{ui:3D}} oder das Formular {{ui:Nach Raster hinzufügen}} weiter unten.

:::touch
Auf einem Touchscreen tippen Sie nahe am Schnittpunkt: Ein Tipp wählt den nächsten Punkt innerhalb eines kurzen Abstands und tut nichts, wenn kein Punkt in der Nähe ist. Vor dem Tippen gibt es keine Hervorhebung, prüfen Sie daher nach jedem Tipp die Meldung in der Statusleiste. Ein Ziehen mit einem Finger dreht oder verschiebt die Ansicht, statt zu platzieren.
:::

## Nach Raster platzieren, ohne Klicken

Jedes Platzierungswerkzeug hat ein Formular {{ui:Nach Raster hinzufügen}} unten im Panel {{ui:Eigenschaften}}. Es funktioniert nur mit der Tastatur und braucht die 3D-Ansicht nicht.

1. Wählen Sie das Werkzeug, zum Beispiel {{ui:Träger}}.
2. Wählen Sie in {{ui:Nach Raster hinzufügen}} {{ui:Von Raster (Buchstabe)}}, {{ui:Von Raster (Nummer)}} und {{ui:Von Ebene}}.
3. Wählen Sie {{ui:Bis Raster (Buchstabe)}}, {{ui:Bis Raster (Nummer)}} und {{ui:Bis Ebene}}.
4. Wählen Sie {{ui:Hinzufügen}}.

Für eine Stütze oder ein Fundament hat das Formular nur einen Punkt: {{ui:Raster (Buchstabe)}}, {{ui:Raster (Nummer)}} und {{ui:Ebene}}.

## Stab nach dem Platzieren ändern

1. Drücken Sie {{key:Esc}} (oder wählen Sie {{ui:Wählen}}, {{key:V}}) und klicken Sie auf den Stab.
2. Ändern Sie im Panel {{ui:Eigenschaften}} {{ui:Name}}, {{ui:Profil}}, {{ui:Material}}, {{ui:Position}} oder {{ui:Drehung (°)}}.
3. Um ihn zu verschieben, bearbeiten Sie die x-, y- und z-Werte von {{ui:Anfang}} oder {{ui:Ende}} unter {{ui:Enden (x, y, z mm)}}. Unter jedem Ende steht sein Rastername oder, wenn es nicht auf dem Raster liegt, seine Koordinaten.

Jede Änderung ist ein Schritt für Rückgängig. Unter den Feldern sehen Sie die {{ui:Positionsnr.}}, die {{ui:Baugruppe}}, die {{ui:Zuschnittlänge}} und das {{ui:Gewicht}} des Stabs (brutto: Löcher und Ausklinkungen werden nicht abgezogen) sowie aus welchem Katalog das Profil stammt.

Stäbe können noch nicht gezogen oder angeordnet werden. Um einen ähnlichen Stab zu erstellen, kopieren und einfügen Sie ihn oder duplizieren Sie ihn ({{key:Mod+D}}): siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

## Stab löschen

Wählen Sie ihn aus und drücken Sie {{key:Delete}} oder {{key:Backspace}}, oder wählen Sie {{ui:Löschen}}. Verbindungen daran werden ebenfalls entfernt. {{key:Mod+Z}} stellt alles wieder her.

## Wissenswertes

- **Wohin eine Stütze zeigt.** Bei {{ui:Drehung (°)}} 0 zeigen die Flansche einer Stütze entlang x, zu den benachbarten nummerierten Rasterlinien. Ein Träger von Raster 1 zu Raster 2 stößt an einen Flansch; ein Träger von A zu B stößt an den Steg. Stirnplatten werden nur an Flansche gebaut. Wenn Ihre Träger von A nach B verlaufen, geben Sie diesen Stützen eine Drehung von 90.
- **Träger auf einer Ebene hängen darunter**, bei der Standardeinstellung {{ui:Stahloberseite auf der Linie}}. Wählen Sie {{ui:Mittig auf der Linie}}, wenn Ihre Ebenen die Stabmittellinien sind.
- **Stützen laufen von Ebene zu Ebene.** Für eine Stütze über zwei Geschosse stellen Sie {{ui:Bis}} auf die höhere Ebene.
- **Geneigte Träger** sind erlaubt (Enden auf verschiedenen Ebenen wählen), aber Stirnplatten werden daran noch nicht gebaut.

Weiter: [Träger mit Stirnplatten an Stützen anschließen](topic:end-plates).
