---
title: Bohrungen und Ausklinkungen hinzufügen
summary: Bohrungen in Stege, Flansche und Platten eingeben und Flansche an einem Trägerende ausklinken, gemessen vom geschnittenen Ende des Teils.
keywords: Bohrung, Bohrungen, Schraubenbohrung, Ausklinkung, Ausschnitt, Ausklinken, Bohren, Stanzen, Stegbohrung, Flanschbohrung
from: 33d12398
---

Bohrungen und Ausklinkungen werden über ihre Lage eingegeben. Sie gehören zum Stab und bewegen sich mit ihm.

Bohrungen, die von Verbindungen erzeugt werden (Kopfplatten, Fußplatten), werden für Sie hinzugefügt; diese geben Sie nicht ein. Sie sind als „… Bohrungen aus Verbindungen (Verbindung bearbeiten)“ aufgeführt.

## Woher die Positionen gemessen werden

- **x** verläuft entlang des Teils ab seinem **geschnittenen Anfang**: dem Anfangsende nach dem Zurückschneiden durch eine Verbindung. So ist x = 0 das tatsächliche Ende des Stahls, nicht der Rasterpunkt.
- **y** wird über die Fläche von der Mitte des Querschnitts aus gemessen:
   - am **Steg**: nach oben (positiv) oder nach unten von der halben Höhe;
   - an einem **Flansch** oder einer **Platte**: quer über die Breite, von der Mittellinie aus.
- Der Anfang des Stabs ist der erste Punkt, den Sie beim Platzieren angeklickt haben. Die Zeilen {{ui:Enden (x, y, z mm)}} zeigen, welches Ende welches ist.

## Bohrung hinzufügen

1. Wählen Sie den Stab.
2. Wählen Sie im Bereich {{ui:Bohrungen}} des Bereichs {{ui:Eigenschaften}} die {{ui:Fläche}}: {{ui:Steg}}, {{ui:Obergurt}} oder {{ui:Untergurt}} (für ein I-Profil, einen U-Stahl oder ein Rechteckrohr) oder {{ui:Plattenfläche}} (für eine Platte).
3. Geben Sie {{ui:x längs (mm)}}, {{ui:y quer (mm)}} und {{ui:Durchmesser (mm)}} ein. Das Formular beginnt mit x 100, y 0, Durchmesser 22.
4. Wählen Sie {{ui:Bohrung hinzufügen}}.

Die Statusleiste zeigt „Bohrung hinzugefügt. x ist ab dem geschnittenen Anfang; y ab der Querschnittsmitte (Steg: nach oben, Flansch/Platte: quer).“ Die Bohrung erscheint in der Liste und in der Ansicht als dunkler Stopfen durch die Fläche.

Zum Entfernen einer Bohrung wählen Sie das × neben ihr in der Liste.

Winkel und Rundrohre nehmen noch keine Bohrungen auf: Der Bereich {{ui:Bohrungen}} sagt das.

:::note
In der 3D-Ansicht werden Bohrungen als dunkle Stopfen dargestellt, nicht als durch den Stahl geschnittene Löcher. Sie sind echte Bohrungen in den NC-Dateien, den Werkstattzeichnungen und dem IFC-Export.
:::

Eine Bohrung, deren x über ein Ende des Teils hinausliegt, wird in der Registerkarte {{ui:Probleme}} als „eine Bohrung liegt außerhalb des Teils“ angezeigt.

## Ausklinkung hinzufügen

Ausklinkungen gibt es für I-Profile: Sie schneiden den oberen oder unteren Flansch (und die entsprechende Stegtiefe) an einem Ende weg, damit der Träger an einem anderen Stab vorbeikommt.

1. Wählen Sie einen I-Profil-Stab.
2. Wählen Sie im Bereich {{ui:Ausklinkungen}} das {{ui:Ende}} ({{ui:Anfang}} oder {{ui:Ende}}) und die {{ui:Seite}} ({{ui:Oben}} oder {{ui:Unten}}).
3. Geben Sie {{ui:Länge (mm)}} (entlang des Trägers ab diesem Ende) und {{ui:Tiefe (mm)}} (nach unten ab der Oberseite oder nach oben ab der Unterseite) ein. Das Formular beginnt mit 100 x 40.
4. Wählen Sie {{ui:Ausklinkung hinzufügen}}.

Die Ansicht zeigt die Ausklinkung aus dem Stahl herausgeschnitten. Die Liste liest etwa „Oben am Anfang: 100 x 40“. Entfernen Sie sie mit ihrem ×.

Ausklinkungen sind rechteckig: Eine Ausrundung an der inneren Ecke gibt es noch nicht.

## Wie Bohrungen und Ausklinkungen Positionsnummern beeinflussen

Zwei Teile erhalten nur dann dieselbe Positionsnummer, wenn ihre Bohrungen und Ausklinkungen innerhalb von 1 mm übereinstimmen, wobei ein Umdrehen des Teils berücksichtigt wird. Das Hinzufügen einer Bohrung zu einem Träger einer Gruppe gibt ihm eine neue Positionsnummer. Siehe [Regeln für Positionsnummern](topic:mark-rules).
