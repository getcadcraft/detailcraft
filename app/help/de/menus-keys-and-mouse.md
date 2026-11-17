---
title: Menüs, Tasten und Maus
summary: Wählen Sie einen Menüstil, der zu Ihrer Arbeitsweise passt, weisen Sie jedem Befehl eine eigene Taste zu, verschieben Sie Befehle zwischen den Registerkarten des Menübands und legen Sie fest, was das Rad und die Maustasten tun.
keywords: Menüstil, Menüs, Menüband, Symbolleiste, Befehlszeile, Tastenkürzel, Shortcuts, Tasten, anpassen, neu belegen, Maus, Rad, umkehren, Zoomrichtung, mittlere Taste, rechte Taste, Pan, Orbit, Export, Import, Wechsel, vertraut, Klassisches Zeichnen, Stahlbau-Menüband
from: 4132c6e5
---

Die Befehle von DetailCraft sind gleich, egal wie Sie sie erreichen. Ein **Menüstil** bestimmt nur, wo sie auf dem Bildschirm stehen, wie sie dort heißen und mit welchen Tasten sie laufen. Wählen Sie einen in {{ui:Einstellungen}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menüs, Tasten und Maus}}; die Änderung wirkt sofort, und dieser Browser merkt sie sich.

## Die drei Stile

| Stil | Was Sie bekommen |
|---|---|
| {{ui:DetailCraft}} | Die eigene Symbolleiste von DetailCraft (Datei, Platzieren, Anschlüsse, Bearbeiten, Ausgabe) und ihre Einzeltasten: {{key:V}} wählen, {{key:B}} Träger, {{key:C}} Stütze, {{key:R}} Aussteifung, {{key:P}} Blech, {{key:F}} Fundament, {{key:S}} Treppe. Der Start. |
| {{ui:Klassisches Zeichnen}} | Für Leute, die Befehle eintippen: ein kleines Menüband ({{ui:Start}}, {{ui:Ansicht}}, {{ui:Ausgabe}}) und eine Befehlszeile. Tippen Sie BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (Rückgängig), ZOOM, PLAN, 3D, DRAWINGS, NC oder HELP und drücken Sie {{key:Enter}}; {{key:Enter}} ohne Eingabe wiederholt den letzten Befehl, {{key:Esc}} leert ihn. Fangen Sie irgendwo an zu tippen, und die Buchstaben gehen an die Befehlszeile. Die mittlere Taste schwenkt (Pan); in 3D drehen {{key:Shift}} und die mittlere Taste (Orbit). |
| {{ui:Stahlbau-Menüband}} | Registerkarten, wie Stahlbau-Programme sie anordnen: {{ui:Modellierung}} (Stäbe, Beton, Treppen), {{ui:Detaillierung}} (Anschlüsse), {{ui:Bearbeiten}}, {{ui:Zeichnungen}} (Zeichnungen und Berichte), {{ui:Fertigung}} (NC-Dateien, IFC) und {{ui:Ansicht}}, mit einem Menü {{ui:Datei}} und Schnellschaltflächen rechts. Die Einzeltasten bleiben. Die mittlere Taste schwenkt (Pan); in 3D dreht die linke Taste (Orbit). |

Jeder Stil behält {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} und {{key:Mod+A}}. Die Menübänder enthalten außerdem die {{ui:3D}}-, {{ui:Grundriss}}-, {{ui:Ansicht}}- und {{ui:Einpassen}}-Schaltflächen der Ansichtsleiste.

:::tip
Eine Taste, die zum eigenen Layout von DetailCraft gehört, deren Stil aber einem anderen Befehl gegeben hat, tut nichts, und die Statuszeile sagt, wohin ihr Befehl gegangen ist („Im Menüband „Mein Stahlbau-Menüband“ liegt Stütze auf Ctrl+Alt+C“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} und die Pfeile behalten immer ihre Bedeutung, und während ein Stab halb platziert ist oder eine Kopie dem Zeiger folgt, gehören Buchstaben zu DetailCraft.
:::

## Nach Ihrem Geschmack

1. Wählen Sie den Stil, der Ihren Wünschen am nächsten kommt, und klicken Sie dann auf {{ui:Anpassen…}}.
2. Suchen Sie unter {{ui:Tasten und Menüs}} einen Befehl (das Suchfeld hilft). Klicken Sie auf {{ui:Taste hinzufügen}} und drücken Sie die Taste, oder zwei Tasten nacheinander für eine Zwei-Buchstaben-Taste. Klicken Sie auf eine Taste, um sie zu entfernen.
3. Bei einem Menüband verschiebt {{ui:Wo er steht}} den Befehl auf eine andere Registerkarte und einen anderen Bereich, in das Menü {{ui:Datei}} oder zu {{ui:Nur Tasten}}.
4. Unter {{ui:Maus}} legen Sie das Rad, die Tasten, die die Pläne und Ansichten verschieben, und was jede Taste in der 3D-Ansicht tut, fest.
5. Geben Sie ihm einen Namen und klicken Sie auf {{ui:Speichern}}.

Einen integrierten Stil zu speichern erstellt Ihre eigene Kopie („Mein Stahlbau-Menüband“); der eingebaute ändert sich nie. Eine Taste, die zwei Befehlen zugewiesen ist, wird rot angezeigt und muss behoben werden, bevor Sie speichern können.

## Maus

- **Mausrad**: {{ui:Nach oben scrollen vergrößert}} (der Start) oder {{ui:Nach oben scrollen verkleinert}}, und wie schnell. Ein Zusammenziehen auf dem Trackpad zoomt immer in die Richtung, in die sich Ihre Finger bewegen.
- **Pan in Grundriss und Ansicht mit**: der mittleren Taste, der rechten Taste oder beiden. Mit dem Werkzeug {{ui:Wählen}} zieht die linke Taste immer ein Auswahlfenster.
- **Ziehen in der 3D-Ansicht**: {{ui:Eigene pro Ansicht}} behält die Tasten von DetailCraft (links Orbit, Mitte Zoom, rechts Pan). Oder stellen Sie jede Taste auf Orbit, Pan, Zoom oder nichts; {{key:Shift}} mit einer Taste, die Orbit oder Pan ausführt, vertauscht die beiden.

## Mitnehmen

{{ui:Exportieren}} speichert den verwendeten Stil als kleine `.ccinput.json`-Datei; {{ui:Importieren…}} fügt eine hinzu, von einem anderen Computer oder aus dem Team. Eine importierte Datei kann nur auf Befehle von DetailCraft verweisen: Alles andere darin wird weggelassen und in der Statuszeile gezählt. {{ui:Diesen Stil löschen}} entfernt einen eigenen.

:::note
Diese Einstellungen bleiben in diesem Browser. {{ui:Diesen Stil in jeder App verwenden}} unter den Stilkarten sorgt dafür, dass jede App in ihrem passenden Stil öffnet (eigene Symbolleiste, ein Menüband oder Klassisches Zeichnen), mit den Änderungen, die Sie in jeder App vorgenommen haben. DetailCraft hat keinen Menüleisten-Stil: Wird die Menüleiste einer anderen App für alle Apps gewählt, behält DetailCraft seine eigene Symbolleiste.
:::

Siehe auch: [Tastatur und Maus](topic:keyboard) · [DetailCraft-Einstellungen](topic:settings) · [Umstieg von anderer Detaillierungssoftware](topic:coming-from)
