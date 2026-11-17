---
title: Tasten und Mausaktionen
summary: Jeder Tastenkürzel sowie alle Maus-, Trackpad- und Touch-Aktionen in DetailCraft, aus dem Code.
keywords: Tastatur, Tastenkürzel, Shortcuts, Tasten, Maus, Trackpad, Touch, Ctrl, Cmd, Spickzettel
from: 05a2dea0
---

Wie Tasten in dieser Hilfe geschrieben werden: [Tasten, Mäuse und Trackpads](common:keys). Auf dem Mac ist {{key:Mod}} die Cmd-Taste; sonst ist es Ctrl.

## Werkzeuge

Diese funktionieren, wenn der Cursor nicht in einem Text- oder Zahlenfeld steht.

| Taste | Funktion |
|---|---|
| {{key:V}} | {{ui:Wählen}} |
| {{key:B}} | {{ui:Träger}} |
| {{key:C}} | {{ui:Stütze}} |
| {{key:R}} | {{ui:Aussteifung}} |
| {{key:P}} | {{ui:Blech}} |
| {{key:F}} | {{ui:Fundament}} |
| {{key:S}} | {{ui:Treppe}} |
| {{key:M}} | Die Auswahl durch Anklicken von zwei Rasterschnittpunkten verschieben ([Per Fenster auswählen, verschieben, drehen, spiegeln, viele ändern](topic:select-and-change)) |
| {{key:Esc}} | Ein gezogenes Auswahlfenster ablegen oder gezogene Teile zurücksetzen; ein Verschieben, den ersten Punkt eines Trägers, einer Aussteifung oder eines Blechs oder ein Einfügen abbrechen; erneut drücken, um zu {{ui:Wählen}} zurückzukehren; in {{ui:Wählen}} die Auswahl aufheben. Bei geöffnetem Menü {{ui:Mehr}} wird es geschlossen |
| {{key:Delete}} oder {{key:Backspace}} | Die Auswahl löschen (alles Ausgewählte in einem Rückgängig-Schritt) |

## Datei und Bearbeiten

| Taste | Funktion |
|---|---|
| {{key:Mod+S}} | Modell speichern (herunterladen). Funktioniert auch während der Eingabe in einem Feld |
| {{key:Mod+O}} | Modell öffnen. Funktioniert auch während der Eingabe in einem Feld |
| {{key:Mod+Z}} | Rückgängig (außerhalb von Textfeldern; innerhalb eines Textfelds macht es Ihre Eingabe rückgängig) |
| {{key:Mod+Y}} oder {{key:Mod+Shift+Z}} | Wiederholen |

## Kopieren und Einfügen

Diese funktionieren, wenn der Cursor nicht in einem Text- oder Zahlenfeld steht (dort kopieren, einfügen und markieren Sie Text wie gewohnt). Jedes Einfügen, Ausschneiden, Duplizieren oder Löschen ist ein Rückgängig-Schritt. Mehr: [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

| Taste | Funktion |
|---|---|
| {{key:Mod+C}} | {{ui:Kopieren}} der ausgewählten Stäbe und Fundamente (mit ihren Bohrungen, Ausklinkungen und Anschlüssen) |
| {{key:Mod+X}} | {{ui:Ausschneiden}}: die Auswahl kopieren, dann löschen |
| {{key:Mod+V}} | {{ui:Einfügen}}: die Kopie folgt dem Zeiger; für sie auf einen Rasterschnittpunkt klicken |
| {{key:Mod+Shift+V}} | {{ui:An gleicher Position einfügen}}: an den Koordinaten, von denen kopiert wurde |
| {{key:Mod+D}} | {{ui:Duplizieren}}: sofort eine Kopie, versetzt um den Abstand aus den [DetailCraft-Einstellungen](topic:settings) |
| {{key:Mod+A}} | {{ui:Alles auswählen}}: jeder Stab, jede Verbindung und jedes Fundament |
| {{key:Esc}} | {{ui:Auswahl aufheben}} |

Wenn Sie Text auf der Seite markiert haben (etwa in einer Berichtstabelle) und nichts im Modell, kopiert {{key:Mod+C}} wie üblich den Text.

{{ui:Neu}}, {{ui:Beispiel}} und die Exporte haben keine Tasten; verwenden Sie die Symbolleiste.

Keine dieser Tasten wirkt, während ein Dialog (die Vorschau der Werkstattzeichnung oder eine Frage) geöffnet ist.

## Felder und Bereiche

| Taste | Funktion |
|---|---|
| {{key:Enter}} oder {{key:Tab}} | Einen eingegebenen Wert übernehmen (jede Änderung ist ein Rückgängig-Schritt) |
| {{key:Enter}} in einem Feld von {{ui:Raster}}, {{ui:Ebenen}}, {{ui:Eigenes Profil}}, Bohrung oder Ausklinkung | Dasselbe wie das Drücken der Schaltfläche dieses Formulars |
| {{key:Left}} {{key:Right}} | Zwischen den Registerkarten {{ui:Probleme}}, {{ui:Stückliste}} und {{ui:Biegeliste}} wechseln, wenn eine Registerkarte den Fokus hat |
| {{key:Esc}} | Die Vorschau der Werkstattzeichnung oder einen Fragedialog schließen (wie {{ui:Abbrechen}}) |

## Bildschirm und Hilfe

| Taste | Funktion |
|---|---|
| {{key:Ctrl+Shift+F}} | Wechselt zwischen normal, Vollbild und Vollbild mit ausgeblendeten Leisten. Immer Ctrl, auch auf dem Mac |
| {{key:Mod+,}} | {{ui:Einstellungen}} öffnen ([DetailCraft-Einstellungen](topic:settings)) |
| {{key:Esc}} | Vollbild verlassen |
| {{key:F1}} | Diese Hilfe öffnen |

## Maus

| Aktion | In 3D | In Grundriss und Ansicht |
|---|---|---|
| Klicken | Ein Bauteil auswählen oder am nächsten Schnittpunkt platzieren, wenn ein Platzierwerkzeug aktiv ist (oder dort einfügen, während eingefügt wird) | Dasselbe |
| {{key:Shift}}, {{key:Ctrl}} oder {{key:Mod}} und Klick | Das Bauteil zur Auswahl hinzufügen oder daraus entfernen | Dasselbe |
| Auf ein ausgewähltes Bauteil drücken und ziehen | Die Auswahl über die Ebene verschieben; mit gehaltenem {{key:Mod}} nach oben und unten | Die Auswahl verschieben (in einer Ansicht: entlang und nach oben und unten) |
| Ziehen mit der linken Taste | Das Modell drehen | Mit {{ui:Wählen}}: ein Auswahlfenster (nach rechts: vollständig innerhalb; nach links: berührend). Beim Platzieren: Pan |
| {{key:Shift}} und Ziehen mit der linken Taste | Mit {{ui:Wählen}}: ein Auswahlfenster, zur Auswahl hinzugefügt. Beim Platzieren: Pan | Mit {{ui:Wählen}}: ein Auswahlfenster, zur Auswahl hinzugefügt |
| {{key:Ctrl}} oder {{key:Mod}} und Ziehen mit der linken Taste | Pan | Nichts |
| Ziehen mit der rechten Taste | Pan | Pan |
| Mausrad | Zoom zur Mitte der Ansicht | Zoom |
| Ziehen mit der mittleren Taste | Zoom | Mit {{ui:Wählen}}: Pan. Sonst Zoom |
| Eine Datei `.detailcraft.json` auf die App ziehen | Öffnen | Öffnen |

Ein Klick zählt nur, wenn sich der Zeiger zwischen Drücken und Loslassen um weniger als etwa 5 Pixel bewegt; eine längere Bewegung ist ein Ziehen.

## Trackpad

| Aktion | Funktion |
|---|---|
| Zweifingerwischen nach oben oder unten, oder Zusammenziehen | Zoom |
| Drücken und ziehen | Drehen (3D) oder Pan (Grundriss und Ansicht) |
| {{key:Shift}} und Drücken und Ziehen | Pan in 3D |
| Zweifingerklick | Rechtsklick (in der Ansicht gibt es kein Menü) |

## Touch

Auf einem Tablet oder einem Touchscreen:

| Aktion | Funktion |
|---|---|
| Tippen | Ein Bauteil auswählen oder am nächsten Rasterschnittpunkt platzieren, wenn ein Platzierwerkzeug aktiv ist (ein Tippen innerhalb etwa einer Fingerbreite davon zählt) |
| Langes Drücken auf ein Bauteil | Es zur Auswahl hinzufügen oder daraus entfernen (was {{key:Shift}}+Klick mit der Maus tut) |
| Ein Finger auf einem ausgewählten Bauteil, dann ziehen | Die Auswahl verschieben, und zwar an Rasterschnittpunkte einrastend |
| Ein Finger woanders | Das Modell drehen (3D) oder Pan (Grundriss und Ansicht) |
| Zwei Finger | Zusammenziehen für Zoom, gemeinsam bewegen für Pan |

Schaltflächen, Listen und Felder sind größer, wenn der Bildschirm nur Touch unterstützt. Auswahlfenster brauchen eine Maus; mit Fingern tippen und lang drücken.

## Tasten, die der Browser behält

Einige Kurzbefehle gehören dem Browser, und keine Seite kann sie nutzen, zum Beispiel {{key:Mod+W}} (Tab schließen), {{key:Mod+T}} (neuer Tab) und {{key:Mod+N}} (neues Fenster). Öffnet {{key:Mod+Y}} den Verlauf Ihres Browsers statt zu wiederholen, verwenden Sie {{key:Mod+Shift+Z}}.

Kurzbefehle erreichen DetailCraft nur, wenn die Seite die Tastatur hat. Wenn eine Taste nichts bewirkt oder der Browser sie ausführt, klicken Sie zuerst auf einen leeren Teil des DetailCraft-Fensters (zum Beispiel nach einer Eingabe in der Adressleiste).

## Wo Verschieben zu finden ist

Es gibt keinen Befehl Verschieben: Wählen Sie ein Bauteil aus und ziehen Sie es über die Ebene (halten Sie {{key:Mod}}, um nach oben und unten zu ziehen), oder bearbeiten Sie seinen {{ui:Anfang}} und sein {{ui:Ende}} in {{ui:Eigenschaften}}.
