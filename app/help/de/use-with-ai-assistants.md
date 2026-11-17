---
title: DetailCraft mit einem KI-Assistenten verwenden
summary: Lassen Sie Ihren eigenen KI-Assistenten oder ein Skript das Modell, seine Teile, Probleme und Kollisionen lesen, Bauteile und Anschlüsse hinzufügen, speichern und exportieren (auch USD): Berechtigungen, Verbindung über CadCraft Studio und das Aktivitätsprotokoll.
keywords: KI, Assistent, Agent, MCP, Model Context Protocol, Skript, Automatisierung, Teile, Kollisionen, Anschlüsse, Berechtigungen, Trennen, Aktivität, rückgängig
from: d624c9a0
---

## Was Sie hier erfahren

Wie Sie einen KI-Assistenten (oder ein selbst geschriebenes Skript) mit DetailCraft arbeiten lassen und entscheiden, was er ändern darf.

DetailCraft hat **keine eigene KI** und sendet nichts irgendwohin. Den Assistenten bringen Sie mit: jedes Programm, das das Model Context Protocol (MCP) spricht. DetailCraft stellt ihm nur Werkzeuge zur Verfügung, und Sie wählen aus, welche.

## Einschalten

1. Öffnen Sie {{ui:Einstellungen}} (das Zahnrad in der App-Leiste oder {{key:Mod+,}}) und wechseln Sie zur Registerkarte {{ui:DetailCraft}}.
2. Setzen Sie unter {{ui:Assistenten}} den Haken bei **KI-Assistenten und Skripten die Nutzung von DetailCraft erlauben**. Bis dahin ist es ausgeschaltet.
3. Wählen Sie, was er darf: **Lesen** ist zu Beginn aktiviert; setzen Sie die Haken bei **Bearbeiten**, **Speichern** oder **Exportieren** nur, wenn Sie sie brauchen.

Werkzeuge außerhalb der von Ihnen gewählten Berechtigungen werden dem Assistenten nicht angeboten. Fragt er trotzdem danach, lehnt DetailCraft ab und schreibt es ins Aktivitätsprotokoll. Den Schalter auszuschalten beendet sofort jede Verbindung.

## Assistenten verbinden

Assistenten verbinden sich über **CadCraft Studio** auf Ihrem Computer: Studio startet einen kleinen Server, den nur dieser Computer erreichen kann, geschützt durch ein Token, das er bei jedem Start erzeugt. Wählen Sie in Studio {{ui:Assistenten verbinden}} und kopieren Sie die Adresse und das Token in Ihren Assistenten (Studio zeigt die genauen Einstellungen zum Einfügen). Geben Sie das Token niemals weiter.

:::note
Ein Browser-Tab kann keine Verbindung für einen Assistenten öffnen: In den Browser-Apps hat der Schalter keine Wirkung, bis Sie CadCraft Studio auf Ihrem Computer verwenden.
:::

## Sie behalten die Kontrolle

- **Jede Änderung ist ein Schritt zum Rückgängigmachen**, als Änderung des Assistenten gekennzeichnet (zum Beispiel „Assistent: Träger hinzufügen“, „Assistent: Knotenbleche hinzufügen“). {{key:Mod+Z}} nimmt die letzte Änderung des Assistenten als Ganzes zurück. Der eigene `undo`-Befehl des Assistenten nimmt nur seine eigenen Schritte zurück, nie Ihre, außer er verlangt das ausdrücklich.
- **Er wartet auf Sie.** Während Sie ein Bauteil platzieren, Teile verschieben oder einfügen, lehnt DetailCraft die Änderungen des Assistenten ab und fordert ihn auf, es erneut zu versuchen.
- **Sie wissen, wenn einer verbunden ist.** Eine Schaltfläche in der App-Leiste nennt den Assistenten, solange er verbunden ist. Klicken Sie darauf, um zu sehen, was er darf, oder um ihn zu **Trennen**.
- **Aktivität.** {{ui:Einstellungen}} › {{ui:DetailCraft}} › {{ui:Assistenten}} › {{ui:Aktivität}} listet jeden Aufruf auf: wann, welches Werkzeug, erledigt oder abgelehnt. {{ui:Protokoll speichern}} behält eine Kopie.

## Was ein Assistent anfordern kann

Alle Längen sind in Millimetern, Punkte `[x, y, z]` mit z nach oben, wie im Modell.

| Werkzeug | Berechtigung | Was es tut |
|---|---|---|
| `app_info`, `model_describe` | Lesen | Das geöffnete Modell: Raster, Ebenen, Phasen, Bauteile nach Typ und Profil, Anschlüsse, Fundamente, Treppen, Teile, Stahlgewicht, Probleme |
| `parts_list` | Lesen | Teilemarken mit Profil, Werkstoff, Schnittlänge, Anzahl, Gewicht, Phase und Baugruppenmarken; nach Typ, Profil, Marke oder Phase |
| `problems_list` | Lesen | Was der Reiter {{ui:Probleme}} auflistet, jeweils mit seinem Gegenstand |
| `clash_check` | Lesen | Die [Kollisionsprüfung](topic:clash-check), mit Toleranz und Phasen |
| `selection_get` | Lesen | Was Sie ausgewählt haben |
| `selection_set` | Bearbeiten | Wählt Bauteile, Anschlüsse, Fundamente oder Treppen (nach ID oder Teilemarke), um sie Ihnen zu zeigen; ändert nichts |
| `member_add` | Bearbeiten | Ein Träger, eine Stütze, eine Strebe oder eine Platte zwischen zwei Punkten |
| `connection_add` | Bearbeiten | Stirnplatten, Schubbleche, Fußplatten, Stöße oder Knotenbleche dort, wo die angegebenen Bauteile zusammentreffen, wie die Schaltflächen unter {{ui:Anschlüsse}} es tun |
| `undo` | Bearbeiten | Nimmt die letzten Schritte des Assistenten zurück |
| `model_save` | Speichern | Das eigene Speichern von DetailCraft |
| `model_export` | Exportieren | IFC, NC-Dateien, Stückliste, Biegeliste, KISS-Datei oder Zuschnittsliste, wie die Schaltflächen unter {{ui:Ausgabe}} sie erzeugen |
| `usd_export` | Exportieren | Das Stahlmodell als USD (.usda, .usdc oder .usdz), wie {{ui:Ausgabe}} › {{ui:USD}} es schreibt (siehe [Stahlmodell als USD exportieren](topic:usd)); in Studio kann es die Datei in einen von Ihnen freigegebenen Ordner schreiben |

## Wenn etwas nicht funktioniert

- **Der Assistent sieht keine DetailCraft-Werkzeuge:** Prüfen Sie, dass der Schalter in diesem Fenster eingeschaltet ist und dass das Fenster in Studio geöffnet ist.
- **„braucht die Berechtigung Bearbeiten“** (oder Speichern, Exportieren): Setzen Sie den Haken unter {{ui:Assistenten}} und fragen Sie dann erneut.
- **„Die Person platziert ein Bauteil“:** Beenden Sie, was Sie gerade tun (oder drücken Sie {{key:Esc}}), dann lassen Sie den Assistenten es erneut versuchen.
- **Fehler „401“ oder „token“:** Das Token hat sich geändert (Studio wurde neu gestartet oder {{ui:Neues Token}}). Kopieren Sie das neue Token in die Einstellungen des Assistenten.

## Siehe auch

- [Rezepte für KI-Assistenten](common:assistants-recipes): Beispiele, jeweils mit den Werkzeugen, die sie aufrufen.
