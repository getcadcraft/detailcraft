---
title: Montageplan und Montagefilm
summary: Einen Kran und seine Tragfähigkeitstabelle eintragen, jeden Hub in der Reihenfolge der Phasen gegen die Tabelle geprüft sehen und einen Montagefilm speichern, der offline auf jedem Telefon läuft.
keywords: Montage, Kran, Hub, Tragfähigkeitstabelle, Ausladung, Tragfähigkeit, Anschlagmittel, Reihenfolge, Film, Animation, Telefon, offline, Hubplan
from: fa7b0133
---

Die Registerkarte {{ui:Erection}} macht aus dem Modell eine Montageanweisung und prüft jeden Hub gegen einen Kran, den Sie beschreiben. Sie plant aus Zahlen, die Sie eintippen. Es ist kein Hubplan. Den erstellen der Anschläger und der Kranführer.

## Kran beschreiben

Wählen Sie {{ui:Add a crane}} und füllen Sie aus:

- **Kranmitte X und Y:** wo der Kran steht, in Millimetern.
- **Höchster Haken:** wie hoch der Haken höchstens steigen kann, in Millimetern. 0 bedeutet, dass keine Grenze geprüft wird.
- **Flaschenzug und Anschlagmittel nicht in der Tabelle:** Kilogramm, die von der Tabelle abgezogen werden, bevor eine Last hinzugefügt wird, wenn Ihre Tabelle das nicht bereits tut.
- **Tragfähigkeitstabelle:** eine Zeile je Zeile, Ausladung in Metern und dann die Tragfähigkeit in Kilogramm. Kopieren Sie die Zeilen aus der eigenen Tabelle des Krans.

Die Tabelle wird so gelesen, wie eine Tragfähigkeitstabelle gelesen wird: Die für eine Ausladung angegebene Tragfähigkeit gilt bis zu dieser Ausladung. Eine Last bei einer Ausladung zwischen zwei Zeilen erhält die Tragfähigkeit der **weiter entfernten** Zeile, niemals einen Wert dazwischen. Innerhalb der ersten Zeile gilt die Tragfähigkeit der ersten Zeile. Jenseits der letzten Zeile kann der Kran überhaupt nicht heben. Maßgebend für einen Hub ist die größere der Aufnahme- und der Absetzausladung.

Ein zweiter Kran wird genauso hinzugefügt. Jeder Hub geht an den ersten Kran, der ihn innerhalb Ihrer Reserve aufnehmen kann.

## Was der Plan tut

- Ein Hub je Montageeinheit: ein Träger mit seinen Kopfplatten, eine Stütze mit ihrer Fußplatte, eine Treppe.
- Die Reihenfolge folgt zuerst den Phasen, dann Ebene für Ebene: Stützen, die Träger, die sie tragen, Verbände, Platten, Treppen. Ein Teil wird nie vor dem gehoben, was es trägt.
- Jeder Hub zeigt sein Gewicht (das Bruttogewicht des Modells plus {{ui:Anschlagmittel zu jedem Gewicht addiert}}), seine Ausladung, den Anteil der Tabelle, den er nutzt, und die Minute, in der er beginnt.
- {{ui:Höchstanteil der Tabelle je Hub}} ist Ihre Sicherheitsreserve. Ein Hub darüber wird als **Über Ihrer Reserve** markiert. Über der Tabelle heißt er **Über der Tabelle**. Jenseits der letzten Ausladung der Tabelle heißt er **Außerhalb der Tabelle**. Ein Teil, das höher ist als der Haken, heißt **Haken zu tief**.

Öffnungen und Ausklinkungen werden nicht von den Gewichten abgezogen, und Schrauben sind im prozentualen Zuschlag für Anschlagmittel enthalten.

## Probleme

Jeder Hub, der über, außerhalb oder zu hoch liegt oder vor dem Teil gesetzt ist, das ihn trägt, erscheint im Panel {{ui:Problems}}. Ein Träger ohne Anschluss, der ihn trägt, wird als Bedarf an einer temporären Abstützung aufgeführt.

## Montagefilm speichern

{{ui:Save movie}} schreibt eine HTML-Datei. Öffnen Sie sie in jedem Browser, auch auf einem Telefon, ohne Netzwerk und ohne Konto: abspielen und pausieren, den Balken auf eine beliebige Minute ziehen, das Modell mit dem Finger drehen und mit zwei Fingern zoomen. Die Bildunterschrift nennt jeden Hub, sein Gewicht, seine Ausladung und den Anteil der Tabelle. Das Modell wird als einfache Quader gezeichnet. Es zeigt die Reihenfolge und die Hübe, nicht die echten Profile.

Dieselbe Tabelle wird mit der Schaltfläche {{ui:CSV}} als CSV gespeichert. Kran und Tabelle werden in der Modelldatei gespeichert, und jede Änderung ist ein Rückgängig-Schritt.
