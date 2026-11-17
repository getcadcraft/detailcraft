---
title: Ein Tragwerk gemeinsam detaillieren mit Live TeamWork
summary: Was sich in DetailCraft ändert, während Sie in einer Live-TeamWork-Sitzung aus CadCraft Studio arbeiten: die Stäbe, Anschlüsse und Fundamente aller in einem Modell, Ihr eigenes Rückgängig und der Beitritt über einen Browser im selben Netzwerk.
keywords: Live, Live TeamWork, Studio Live, gemeinsam, zusammenarbeiten, Sitzung, Live teilen, beitreten, Stäbe, Anschlüsse, Cursor, Zeiger, einander sehen, Namen, Farbe, Auswahl, Rückgängig, Host
from: 22b1de62
---

## Was Sie lernen

Was mit einem Modell geschieht, während mehrere Personen es gleichzeitig detaillieren. CadCraft Studio startet und betritt die Live-TeamWork-Sitzung (Teilen, Beitreten); diese Seite behandelt das Modell selbst.

## Alle arbeiten gleichzeitig

Fügen Sie Stäbe, Anschlüsse, Fundamente, Treppen und Schrauben hinzu und bearbeiten Sie sie wie gewohnt. Ihre eigenen Änderungen erscheinen sofort; die der anderen erscheinen kurz nach dem Ändern.

- **Zwei Personen ändern einen Stab:** Unterschiedliche Einstellungen (die eine das Profil, die andere den Endpunkt) bleiben beide erhalten; dieselbe Einstellung übernimmt die spätere Änderung.
- **Ein Anschluss an einem Stab, den jemand gerade gelöscht hat,** wird zurückgenommen, und die Statusleiste nennt den Grund.
- Raster, Geschosse und Phasen gehen an denjenigen, der sie zuletzt geändert hat.
- Die erzeugte Geometrie, die Positionsnummern und die Liste werden in jedem Fenster aus demselben Modell berechnet, sodass sie übereinstimmen.

## Einander sehen

Jede Person in der Sitzung hat eine eigene Farbe. Sie sehen den Zeiger jeder Person als Pfeil in deren Farbe mit ihrem Namen daneben, auf dem Stab oder der Platte, auf die sie zeigt, und einen gestrichelten Rahmen in ihrer Farbe um die Stäbe, Anschlüsse, Fundamente und Treppen, die sie ausgewählt hat.

Zeiger, Namen und Auswahlen gelten nur für die Sitzung: Sie werden nie in der Datei gespeichert und gehen in niemandes Rückgängig ein. Sie gleiten zu der Stelle, an der sich jede Person gerade befindet, sodass sie auch bei einer langsamen Verbindung flüssig bleiben.

## Rückgängig macht Ihre eigene Arbeit rückgängig

{{key:Mod+Z}} macht Ihre letzte eigene Änderung rückgängig und lässt die der anderen unberührt. Wurde dieselbe Sache seither von jemand anderem geändert, wird nichts rückgängig gemacht, und die Statusleiste nennt die Person.

## Aus einem Browser beitreten

Ein Teammitglied ohne Studio kann mit einem Telefon, Tablet oder Computer im selben Netzwerk den Code scannen, der unter dem Bild des Hosts steht. DetailCraft öffnet sich im Browser und füllt sich mit dem Modell des Hosts, sobald der Host Sie einlässt. Ein Einladungslink ermöglicht es, aus einem anderen Netzwerk beizutreten: Der Host braucht einen Team-Cloud-Plan-Platz für die App; alle anderen treten kostenlos bei, und der Link funktioniert nur, solange die Sitzung des Hosts geöffnet ist.

## Wenn die Sitzung endet

Nur der Host speichert das Modell. Alle anderen behalten eine ungespeicherte Kopie: Speichern Sie sie, wenn Sie sie behalten möchten.
