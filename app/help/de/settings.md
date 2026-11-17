---
title: DetailCraft-Einstellungen
summary: Neue Stäbe als US- oder europäische Profile starten, festlegen, wie weit Duplizieren eine Kopie versetzt, wählen, ob Kopien ihre Verbindungen mitbringen, und Schrauben in der 3D-Ansicht ein- oder ausblenden.
keywords: Einstellungen, Voreinstellungen, Blattgröße, Papiergröße, Zeichnungen, Optionen, Stahl, AISC, EN, europäische Profile, US-Profile, metrische Profile, Standardprofil, Stahlgüte, S355, A992, Versatz beim Duplizieren, Versatz beim Einfügen, Verbindungen kopieren, Schrauben, Ankerstangen, Schrauben ausblenden, Zurücksetzen
from: e46cea57
---

Öffnen Sie {{ui:Einstellungen}} mit dem Zahnrad in der App-Leiste oder mit {{key:Mod+,}}. Die erste Registerkarte, {{ui:DetailCraft}}, enthält die Einstellungen, die zu dieser App gehören; {{ui:Allgemein}} enthält die, die alle CadCraft-Apps teilen (Design, Symbolleiste, Bereiche). Die Einstellungen von DetailCraft gibt es nur in der App: Sie ändern sie hier, sie wirken sofort, und dieser Browser merkt sie sich. Sie werden nicht in Ihrer Modelldatei gespeichert.

## Neue Stäbe

Mit welchen Profilen und Stahlgüten die Platzierwerkzeuge starten:

| Werkzeug | US-Profile (AISC), A992 | Europäische Profile (EN), S355 |
|---|---|---|
| {{ui:Träger}} | W16x26, A992 | IPE300, S355 |
| {{ui:Stütze}} | W12x50, A992 | HEB200, S355 |
| {{ui:Aussteifung}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Blech}} | A36 | S355 |

Der Start sind US-Profile. Die europäische Wahl nutzt für Aussteifungen ein HEA160, weil der EN-Katalog von DetailCraft noch keine Hohlprofile hat ([Profilkatalog](topic:profile-catalog)). Sie können für das nächste Teil dennoch jedes Profil und jede Stahlgüte im Bereich {{ui:Eigenschaften}} wählen, solange ein Platzierwerkzeug aktiv ist. Stäbe, die bereits im Modell sind, behalten ihr eigenes Profil und ihre Stahlgüte.

## Duplizieren und Einfügen

- **Versatz (mm)**: x, y und z. {{ui:Duplizieren}} ({{key:Mod+D}}) setzt die Kopie so weit vom Original entfernt, und das Formular {{ui:Mit Versatz einfügen (mm, vom Original)}} beginnt damit. Er startet bei 6000, 0, 0: ein 6-m-Feld entlang der nummerierten Raster. Stellen Sie ihn auf Ihren Feldabstand oder auf eine Geschosshöhe in z, um ein Geschoss nach oben zu kopieren.
- **{{ui:Kopfplatten und Fußplatten mit ihren Stäben kopieren}}** (zu Beginn aktiviert): Eine Verbindung wird mit einer Kopie nur kopiert, wenn jeder Stab, den sie verbindet, kopiert wird. Deaktivieren Sie es, um Stäbe und Fundamente ohne ihre Verbindungen zu kopieren, z. B. um an der Kopie eine andere Verbindung zu testen.

Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

## 3D-Ansicht

**{{ui:Schrauben und Ankerstangen anzeigen}}** (zu Beginn aktiviert). Deaktivieren Sie es, um sie in der Ansicht auszublenden und die Löcher und Bleche eines dichten Knotens zu sehen. Ausgeblendete Schrauben können nicht angeklickt werden; klicken Sie auf das Blech, um die Verbindung zu wählen. Stückliste, Zeichnungen und jeder Export enthalten weiterhin jede Schraube und Stange.

## Eckanzeige

Was in der Ecke der 3D-Ansicht erscheint: **ViewCube** (der Start; oben rechts — klicken Sie auf eine Fläche, Kante oder Ecke, um von dort zu sehen, ziehen Sie ihn zum Orbit, ziehen Sie seinen Kompassring, um das Modell zu drehen), **Achsensymbol** (eine kleine X-, Y-, Z-Markierung unten links, die sich mit der Ansicht dreht: X rot, Y grün, Z blau) oder **Keine**. Nur in {{ui:3D}}; {{ui:Grundriss}} und {{ui:Ansicht}} zeigen keines davon. Siehe [Der ViewCube](topic:view-cube).

## Zurücksetzen

{{ui:DetailCraft-Einstellungen zurücksetzen}} unten im Dialogfeld setzt diese auf den Start zurück (US-Profile, Versatz 6000, 0, 0, Verbindungen kopiert, Schrauben angezeigt), zusammen mit den Einstellungen unter {{ui:Allgemein}}.

## Zeichnungen

**Blattgröße**: Die Blattzeichnungen und Werkstattzeichnungen werden im Querformat erstellt: A4, A3 (der Start), A2, A1, ANSI B, ANSI C oder ANSI D. Die Fenster {{ui:Zeichnungen}} und Werkstattzeichnung haben dieselbe Liste. Siehe [Übersichts- und Montagezeichnungen](topic:drawings).

## Bewehrung

- **ASTM-Stabnamen**: #3 bis #11, oder die weichmetrischen #10 bis #36 für dieselben Stäbe.
- **Formcodes der Biegeliste**: S, L, U von DetailCraft; ACI-315-Typen; oder BS-8666-Formcodes. Siehe [Bewehrungsreferenz](topic:rebar-reference).

## Ziehen zum Wählen

**Rechteck** (wie bisher) oder **Lasso**: eine Freihandlinie, wobei {{key:Space}} beim Ziehen zwischen innen, berührend und Zaun umschaltet. Siehe [Mit Fenster wählen](topic:select-and-change#select-with-a-window).
