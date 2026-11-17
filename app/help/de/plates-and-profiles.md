---
title: Bleche platzieren und eigene Profile hinzufügen
summary: Lose Bleche nach Dicke und Breite platzieren und eigene I-, U-, Winkel-, Rohr- oder Flachstahlquerschnitte definieren.
keywords: Blech, Flachstahl, eigenes Profil, Benutzerprofil, parametrisch, Querschnitt, Form, PL
from: c24c3b51
---

## Ein Blech platzieren

Ein Blech wird wie ein Träger platziert: Es verläuft zwischen zwei Schnittpunkten, mit seiner Breite quer und seiner Dicke nach oben.

1. Wählen Sie {{ui:Blech}} in der Gruppe {{ui:Platzieren}} oder drücken Sie {{key:P}}.
2. Stellen Sie im Panel {{ui:Eigenschaften}} {{ui:Dicke (mm)}} und {{ui:Breite (mm)}} ein. Der Standard ist 20 x 200 in A36.
3. Stellen Sie bei Bedarf {{ui:Material}} und {{ui:Drehung (°)}} ein. Eine Drehung von 90 stellt das Blech hochkant.
4. Klicken Sie auf zwei Schnittpunkte oder verwenden Sie das Formular {{ui:Nach Raster hinzufügen}}.

Der Profilname des Blechs wird als `PL<thickness>x<width>` geschrieben, zum Beispiel PL20x200. Seine Länge ist der Abstand zwischen den beiden Punkten.

Um ein platziertes Blech zu ändern, wählen Sie es aus und ändern Sie {{ui:Dicke (mm)}} oder {{ui:Breite (mm)}}.

Von Ihnen platzierte Bleche sind eigene Teile (Positionsnummer p, Baugruppe P). Stirnplatten und Fußplatten, die von Verbindungen erstellt werden, sind ebenfalls Bleche, aber Sie ändern sie über ihre Verbindung; siehe [Stirnplatten](topic:end-plates).

## Ein eigenes Profil hinzufügen

Wenn der benötigte Querschnitt nicht im Katalog steht, erstellen Sie ihn aus seinen Abmessungen. Ein eigenes Profil gehört zum Modell und wird mit ihm gespeichert. Um es in jedem neuen Modell zu verwenden, bewahren Sie es unter {{ui:Meine Profile}} auf, beschrieben unter „Ein Profil für neue Modelle behalten“ weiter unten.

1. Öffnen Sie im Panel {{ui:Modell}} links {{ui:Eigenes Profil}}.
2. Geben Sie einen {{ui:Name}} ein, zum Beispiel `W8x18-custom` oder `RHS 120x80x5`. Er darf kein Katalogname sein und nicht wie ein Blechname aussehen.
3. Wählen Sie eine {{ui:Form}}: {{ui:I-Profil}}, {{ui:U-Profil}}, {{ui:Gleichschenkliger Winkel}}, {{ui:Rechteckrohr}}, {{ui:Rundrohr}} oder {{ui:Flachstahl}}.
4. Füllen Sie die erscheinenden Abmessungen aus, alle in Millimetern:

| Form | Abmessungen |
|---|---|
| I-Profil | Tiefe d, Flanschbreite bf, Steg tw, Flansch tf, Ausrundungsradius r (darf 0 sein) |
| U-Profil | Tiefe d, Flanschbreite bf, Steg tw, Flansch tf (rechtwinklige Ecken) |
| Gleichschenkliger Winkel | Breite b (je Schenkel), Dicke t |
| Rechteckrohr | Höhe h, Breite b, Dicke t (äußerer Eckradius 2t) |
| Rundrohr | Durchmesser D, Dicke t |
| Flachstahl | Breite b, Dicke t |

5. Lassen Sie {{ui:In Meine Profile speichern}} angehakt, damit es in jedem neuen Modell verfügbar ist (siehe unten), oder entfernen Sie den Haken, um es nur in diesem Modell zu behalten.
6. Wählen Sie {{ui:Profil hinzufügen}}.

Die Statusleiste zeigt: „Profil ‚…‘ hinzugefügt; es steht in jeder Profilliste unter Eigene.“ Es erscheint in der Liste unter dem Formular und am Ende jeder {{ui:Profil}}-Liste.

DetailCraft prüft, ob der Querschnitt bestehen kann. Sie sehen Meldungen wie „Steg und Flansche passen nicht in Tiefe und Breite.“, „Der Ausrundungsradius ist zu groß für den Flansch.“ oder „Die Wand ist zu dick.“ Korrigieren Sie die Zahlen und wählen Sie {{ui:Profil hinzufügen}} erneut.

### Was eigene Profile erhalten

- Masse je Meter aus Fläche × 7850 kg/m³ (Katalogprofile verwenden das veröffentlichte Gewicht).
- Eigene I-Profile erhalten Löcher, Ausklinkungen, Stirnplatten, NC-Dateien und Werkstattzeichnungen wie Katalog-I-Profile.
- Eigene Flachstähle verhalten sich wie Bleche.
- Eigene U-Profile und Rohre erhalten Löcher; Winkel und Rundrohre noch nicht.

Ein eigenes Profil lässt sich in einem Modell nach dem Hinzufügen nicht mehr bearbeiten oder entfernen (verwenden Sie sofort {{key:Mod+Z}}, wenn Sie einen Fehler gemacht haben). Geben Sie einem korrigierten Profil einen neuen Namen.

## Ein Profil für neue Modelle behalten

{{ui:Meine Profile}} unter dem Formular ist Ihre eigene Liste eigener Profile. Sie wird in diesem Browser auf diesem Computer gespeichert, nicht in einer Modelldatei und nicht in Ihrem Konto.

- Ein Profil, das mit angehaktem {{ui:In Meine Profile speichern}} hinzugefügt wird, kommt in die Liste. Jedes neue Modell, auch das, das DetailCraft beim Start öffnet, beginnt mit allen darin in seinen Profillisten.
- Ein Profil, das bereits in einem Modell steht, aber nicht in der Liste, hat daneben eine Schaltfläche {{ui:Speichern}}.
- In einem Modell, dem eines Ihrer Profile fehlt (etwa eine ältere Datei), wählen Sie {{ui:Hier verwenden}}, um es hinzuzufügen.
- {{ui:Entfernen}} nimmt ein Profil aus der Liste. Modelle, die es bereits verwenden, behalten ihre eigene Kopie.
- Ein geöffnetes Modell behält die Profile, die in seiner Datei gespeichert sind. Das Öffnen einer Datei ändert nie Ihre Liste.
- Ein Name, der bereits in der Liste mit anderen Abmessungen steht, wird abgelehnt: Geben Sie dem neuen einen anderen Namen.
- Das Löschen der Website-Daten des Browsers oder die Verwendung eines anderen Browsers oder Computers beginnt mit einer leeren Liste. Ein privates Fenster kann sie nicht behalten; die App weist darauf hin.
