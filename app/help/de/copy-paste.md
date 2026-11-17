---
title: Kopieren, Einfügen und Duplizieren
summary: Mehrere Teile wählen, mit ihren Löchern, Ausklinkungen und Anschlüssen kopieren und auf einem Rasterschnittpunkt, mit Versatz, an gleicher Position oder in einer anderen Registerkarte einfügen. Ausschneiden, Duplizieren, Löschen und Alles auswählen.
keywords: kopieren, einfügen, ausschneiden, duplizieren, Zwischenablage, an gleicher Position einfügen, Alles auswählen, Auswahl aufheben, Mehrfachauswahl, Shift-Klick, mehrere, Feld wiederholen, Rahmen kopieren, Versatz, mehrere löschen, Menü Bearbeiten, Mehr-Menü
from: f25f1829
---

Die Gruppe {{ui:Edit}} auf der Symbolleiste enthält {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} und {{ui:Paste}}. Ihr Menü {{ui:More}} enthält den Rest: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} und {{ui:Select none}}, jeweils mit ihrem Tastenkürzel. Eine Schaltfläche oder ein Menüeintrag, der gerade nicht ausgeführt werden kann, ist ausgegraut. Fahren Sie mit dem Mauszeiger darüber, um den Grund zu lesen (zum Beispiel „noch nichts kopiert“).

Jedes Einfügen, Ausschneiden, Duplizieren und Löschen ist ein Schritt: Ein {{key:Mod+Z}} nimmt alles zurück.

## Mehrere Teile wählen

- Klicken Sie ein Teil an, um es zu wählen. Halten Sie {{key:Shift}} (oder {{key:Ctrl}} oder {{key:Mod}}) gedrückt und klicken Sie weitere Teile an, um sie hinzuzufügen. Ein ausgewähltes Teil klicken Sie genauso an, um es wieder zu entfernen.
- {{key:Mod+A}} oder {{ui:Select all}} wählt jeden Stab, jede Verbindung und jedes Fundament.
- {{key:Esc}} oder {{ui:Select none}} hebt die Auswahl auf.

Bei mehreren ausgewählten Objekten trägt das Panel {{ui:Properties}} die Überschrift „4 ausgewählt“ (oder entsprechend viele). Es listet die Stäbe nach Typ, die Anschlüsse, die Fundamente und das Bruttogewicht des Stahls auf und enthält die Schaltflächen {{ui:Copy}}, {{ui:Duplicate}} und {{ui:Delete}}.

## Kopieren

1. Wählen Sie die gewünschten Stäbe und Fundamente.
2. Wählen Sie {{ui:Copy}} oder drücken Sie {{key:Mod+C}}.

Mitkopiert wird:

- Jeder Stab vollständig: Profil, Material, Enden, Lage, Drehung, Name, Löcher und Ausklinkungen. Ein verwendetes benutzerdefiniertes Profil wird ebenfalls kopiert.
- Jedes Fundament vollständig: Abmessungen, Beton, untere Bewehrung und Anschlussbewehrung.
- Kopfplatten und Fußplatten, aber nur, wenn jeder Stab, den ein Anschluss verbindet, mitkopiert wird: Die Kopfplatte eines Trägers braucht den Träger und seine Stütze. Die Statusleiste sagt, wie viele Anschlüsse ausgelassen wurden. Um Anschlüsse absichtlich auszulassen, deaktivieren Sie **Kopfplatten und Fußplatten mit ihren Stäben kopieren** in den [DetailCraft-Einstellungen](topic:settings).

Ein Anschluss allein kann nicht kopiert werden. Wählen Sie stattdessen seine Stäbe. Um anderen Verbindungen denselben Anschluss zu geben, verwenden Sie {{ui:Similar}} (siehe [Kopfplatten](topic:end-plates#copy-it-to-every-similar-joint)).

Die Kopie bleibt in diesem Browser, bis Sie etwas anderes kopieren. Ein anderer DetailCraft-Tab oder ein anderes Fenster im selben Browser kann sie einfügen. So können Sie einen Rahmen aus einem Modell kopieren und in ein anderes einfügen.

## Auf einen Rasterschnittpunkt einfügen

1. Wählen Sie {{ui:Paste}} oder drücken Sie {{key:Mod+V}}.
2. Bewegen Sie den Zeiger über die Ansicht. Ein gestrichelter Umriss der Kopie folgt dem Rasterschnittpunkt, der dem Zeiger am nächsten liegt.
3. Klicken Sie auf einen Schnittpunkt. Der Basispunkt der Kopie (ihre unterste Ecke: das kleinste x, y und z aller kopierten Teile) landet dort.

Die eingefügten Teile sind danach ausgewählt, sodass Sie an einer anderen Stelle erneut einfügen oder sie ändern können. {{key:Esc}} bricht das Einfügen ab; die Kopie bleibt in der Zwischenablage. {{ui:Plan}} und {{ui:Elevation}} erleichtern es, den richtigen Schnittpunkt zu treffen.

:::tip
Um ein Feld zu wiederholen, wählen Sie die Stäbe des Feldes (oder alles mit {{key:Mod+A}}), kopieren Sie sie und fügen Sie sie ein. Klicken Sie dann auf den Schnittpunkt, der ein Feld entfernt von der Stelle liegt, an der die unterste Ecke der Kopie war.
:::

## Mit der Tastatur einfügen

Während des Einfügens zeigt das Panel {{ui:Properties}}, was in der Zwischenablage liegt, und zwei Formulare:

- {{ui:Paste by offset (mm, from the original)}}: Geben Sie x, y und z ein und wählen Sie {{ui:Paste at this offset}}. Das Formular beginnt mit dem Versatz aus den [DetailCraft-Einstellungen](topic:settings).
- {{ui:Paste onto a grid intersection}}: Wählen Sie ein Buchstabenraster, ein Zahlenraster und ein Geschoss und wählen Sie {{ui:Paste here}}. Der Basispunkt wird dorthin gesetzt.

## An gleicher Position einfügen

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) setzt die Kopie genau an die Koordinaten, von denen sie kopiert wurde. Verwenden Sie es nach {{ui:Cut}} oder um Teile aus einem anderen Modell an derselben Stelle einzufügen. Sind die Originale noch vorhanden, liegt die Kopie darauf, und die Statusleiste warnt Sie. Verschieben Sie dann die Kopien über ihren {{ui:Start}}- und {{ui:End}}-Punkt im Panel {{ui:Properties}} oder machen Sie es rückgängig.

## Duplizieren

{{ui:Duplicate}} ({{key:Mod+D}}) kopiert die Auswahl und fügt sie sofort ein, verschoben um den Versatz aus den [DetailCraft-Einstellungen](topic:settings) (zunächst 6000 mm entlang x). Der Inhalt der Zwischenablage ändert sich dabei nicht. Die Kopien sind danach ausgewählt, sodass ein erneutes Drücken von {{key:Mod+D}} die nächste Kopie aus ihnen erzeugt.

## Ausschneiden und Löschen

- {{ui:Cut}} ({{key:Mod+X}}) kopiert die Auswahl und löscht sie danach. Fügen Sie sie dort ein, wo sie hingehört.
- {{ui:Delete}} ({{key:Delete}} oder {{key:Backspace}}) löscht die Auswahl. Beim Löschen eines Stabs werden auch seine Anschlüsse gelöscht.

## Markierungen nach dem Einfügen

Positions- und Montagenummern werden nie gespeichert. DetailCraft vergibt sie nach jeder Änderung aus dem Modell neu ([Wie Positionsnummern vergeben werden](topic:mark-rules)). Daher gilt:

- Eine Kopie, die dasselbe Teil wie das Original ist (gleiches Profil, gleiche Güte, gleiche Schnittlänge, gleiche Löcher und Ausklinkungen), erhält die Nummer des Originals. Die Anzahl unter {{ui:Part marks}} und in der Stückliste steigt.
- Eine Kopie, die sich unterscheidet, bekommt eine eigene Nummer. Ein ohne Kopfplatten eingefügter Träger wird zum Beispiel nicht zurückgeschnitten und ist daher ein anderes Teil. Die Nummern werden im ganzen Modell neu vergeben, sodass sich auch die Nummern anderer Teile ändern können.

Jeder eingefügte Stab, jedes Loch, jede Ausklinkung, jeder Anschluss und jedes Fundament erhält eine neue ID. Dadurch wird im Modell nichts zwischen einer Kopie und ihrem Original geteilt.

## Wenn die Zwischenablage abgelehnt wird

Der Inhalt der Zwischenablage wird so genau geprüft wie eine Modelldatei, die Sie öffnen: Alles, was kein gültiges DetailCraft-Teil ist, wird verworfen, und die Statusleiste sagt, was. Eine Zwischenablage, die von einer neueren DetailCraft-Version oder von etwas anderem gefüllt wurde, wird mit einer Meldung abgelehnt, und nichts wird eingefügt. Kann ein privates Fenster die Kopie nicht im Browserspeicher halten, funktioniert die Kopie trotzdem in diesem Tab.
