---
title: Themen, Revisionen und Zeichnungs-Änderungsprotokoll
summary: Pflegen Sie einen Themenverlauf zusammen mit dem Architektenmodell: Themen einlesen, Bauanweisungen, Werkstattzeichnungen und verknüpfte Modelle einem Thema zuordnen und das Zeichnungs-Änderungsprotokoll lesen.
keywords: Thema, Themen, Revision, Revisionen, Änderungsprotokoll, Zeichnungs-Änderungsprotokoll, Zeichnungsregister, Bauanweisung, Werkstattzeichnung, verknüpftes Modell, Ausschreibung, Bauausführung, Themenverlauf, Werkstattzeichnungen, Fertigung
from: 4b9a1b7b
---

## Was Sie tun

Arbeiten Sie mit demselben Themenverlauf wie das restliche Team. Sehen Sie, welche Blätter in welcher Revision herausgegeben wurden, und ordnen Sie Vorgänge auf der Baustelle dem Thema zu, zu dem sie gehören.

## Schritte

1. Öffnen Sie **Themen und Revisionen**.
2. Wählen Sie **Themenverlauf einlesen** und die `.issues.json`-Datei, die aus BimCraft oder einer anderen App gespeichert wurde. Ihre Themen und Einträge werden ergänzt. Nichts wird ersetzt.
3. Wählen Sie **Eintrag hinzufügen** für eine Bauanweisung, eine Werkstattzeichnung, einen Markierungssatz, ein verknüpftes Modell oder eine Notiz. Wählen Sie das Thema, zu dem er gehört, und seinen Status. Eine ausgewählte Datei wird mit Name, Größe und SHA-256 erfasst; die Datei bleibt, wo sie ist.
4. **Zeichnungs-Änderungsprotokoll** zeigt eine Zeile für jedes Blatt und eine Spalte für jedes Thema. Eine Revision in Klammern wurde unverändert erneut herausgegeben.
5. **Änderungsprotokoll als CSV herunterladen** speichert die Themen, die Blatttabelle und die Einträge. **Themenverlauf speichern** schreibt eine Datei, die die anderen Apps lesen.

## Gut zu wissen

- Blätter werden weiterhin unter {{ui:Zeichnungen}} blattweise herausgegeben. Diese Ausgaben erscheinen hier: Blätter, die an einem Datum mit einer Notiz herausgegeben wurden, bilden ein Thema.
- Eingelesene Einträge und Themen werden in der Modelldatei gespeichert. Jede Änderung ist ein Schritt für {{ui:Rückgängig}}.
- Das zweimalige Einlesen derselben Datei fügt nichts doppelt hinzu. Enthalten zwei Kopien denselben Eintrag, bleibt die neuere erhalten.
