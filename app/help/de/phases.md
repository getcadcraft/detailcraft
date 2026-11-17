---
title: Phasen
summary: Das Modell in Phasen (Montagefolgen oder Lieferungen) aufteilen, jede Phase ein- und ausblenden, Teile einer Phase zuordnen und Positionsnummern je Phase vergeben.
keywords: Phase, Phasen, Phasenverwaltung, Montagefolge, Lieferung, Los, Reihenfolge, Phase ausblenden, Phase einblenden, Filter, Nummerierung, Positionsnummern-Präfix, je Phase
from: bae506f5
---

Eine Phase ist eine Gruppe von Teilen, die zusammen gefertigt, geliefert oder montiert werden: eine Montagefolge, eine Lieferung, ein Los. Jeder Stab und jedes Fundament liegt in einer Phase. Eine Verbindung liegt in der Phase ihres Hauptteils: der Träger einer Stirnplatte, die Stütze einer Fußplatte. Ein neues Modell hat eine Phase.

## Der Bereich Phasen

Der Bereich {{ui:Phasen}} im Panel {{ui:Modell}} listet jede Phase auf:

- das Kontrollkästchen blendet die Phase in der Ansicht ein oder aus;
- die Nummer und ein Name, den Sie eingeben können (leer = „Phase 2“ und so weiter);
- wie viele Teile darin liegen;
- die Schaltfläche {{ui:×}} entfernt eine Phase. Nur eine leere Phase kann entfernt werden: Verschieben Sie ihre Teile zuerst in eine andere Phase.

{{ui:Phase hinzufügen}} fügt die nächste Nummer hinzu und macht sie zur Phase, in die neue Teile kommen.

## Teile einer Phase zuordnen

- **Neue Teile:** {{ui:Neue Bauteile kommen in}} wählt die Phase, in die jeder Stab und jedes Fundament kommt, das Sie ab jetzt platzieren.
- **Ein Teil:** Wählen Sie es aus und ändern Sie {{ui:Phase}} im Panel {{ui:Eigenschaften}}.
- **Viele Teile:** Wählen Sie sie aus (ein Fenster, {{key:Shift}}+Klicken, {{key:Mod+A}}) und ändern Sie {{ui:Phase}} oben im Panel {{ui:Eigenschaften}}. Dort steht **Verschieden**, wenn sie in verschiedenen Phasen liegen. Eine Änderung ist ein Schritt im Verlauf für Rückgängig.

Kopien behalten die Phase des Teils, von dem sie kopiert wurden, auch wenn sie in ein anderes Modell eingefügt werden (die Phase wird dort hinzugefügt).

## Phasen ein- und ausblenden

Eine ausgeblendete Phase wird nicht in der Ansicht gezeichnet, kann nicht angeklickt oder von einem Auswahlfenster erfasst werden, und {{key:Mod+A}} lässt sie aus. Sie ist weiterhin in der Stückliste, den Berichten, den Zeichnungen und jedem Export enthalten. Ausblenden betrifft nur die Ansicht: Es wird nicht gespeichert und lässt sich nicht rückgängig machen.

## Positionsnummern je Phase

Mit eingeschalteter Option **Positionsnummern je Phase** (sie ist anfangs eingeschaltet) und Teilen in mehr als einer Phase wird jede Phase für sich nummeriert, und ihre Positionsnummern beginnen mit der Phasennummer: Positionsnummern 1-b1, 2-b1, Baugruppen-Nummern 2-B1, Fundamente 2-F1. Zwei gleiche Träger in verschiedenen Phasen haben dann verschiedene Positionsnummern, weil sie zu verschiedenen Zeiten gefertigt und geliefert werden. Wird nur eine Phase verwendet, haben die Positionsnummern kein Präfix. Schalten Sie die Option aus, um das ganze Modell als Einheit zu nummerieren, sodass gleiche Teile unabhängig von ihrer Phase dieselbe Positionsnummer teilen.

Die Phase wird in den IFC-Export geschrieben (Eigenschaftssatz DetailCraft, Phase).

:::note
Modelle mit Phasen werden im Dateiformat 2 von DetailCraft gespeichert. Die Version 0.3 von DetailCraft kann sie nicht öffnen; diese Version öffnet ältere Dateien, wobei jedes Teil in Phase 1 liegt.
:::
