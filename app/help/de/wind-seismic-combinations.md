---
title: Wind, seismischer Standort und ASCE 7-Kombinationen
summary: Windlastfälle für ein geschlossenes, starres Gebäude erzeugen, die seismischen Bemessungswerte für einen Standort ermitteln und die ASCE 7-Kombinationen erzeugen, im Reiter Berechnung.
keywords: Wind, Windlast, ASCE 7, Richtungsverfahren, Geländekategorie, Umschließung, Erdbeben, Baugrundklasse, Ss, S1, SDS, SD1, USGS, Bemessungsspektrum, Lastkombinationen, LRFD, ASD, Kzt, Kd, Böengeschwindigkeit
from: 676fcbf3
---

Drei Bereiche im Reiter {{ui:Berechnung}} erstellen die Wind- und Erdbebeneingaben eines Rahmens und kombinieren sie: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} und {{ui:ASCE 7 load combinations}}. Sie sind Hilfen: **keine Nachweisführung nach einer Norm; Ihr Ingenieur prüft die Ergebnisse.**

## Was Sie tun

Erzeugen Sie Windlastfälle für ein geschlossenes, starres Gebäude, übernehmen Sie die seismischen Werte für einen Standort und erzeugen Sie die Kombinationen, die sie verwenden. Das Modell braucht Decken, deshalb führen Sie zuerst die Berechnung aus (siehe [Schnittgrößen, Auflagerkräfte und Verformungen](topic:frame-analysis)).

## Schritte

1. Öffnen Sie den Reiter {{ui:Berechnung}} und wählen Sie {{ui:Ausführen}}, damit Decken und Gebäudegröße bekannt sind. Meldet ein Bereich, dass keine Decken vorhanden sind, wählen Sie darin {{ui:Geschosse finden}}.
2. Wählen Sie unter {{ui:Wind loads (ASCE 7 directional procedure)}} die {{ui:Edition}}, tragen Sie die {{ui:Basic wind speed V}} aus Ihrer Windkarte ein und wählen Sie ihre {{ui:Speed unit}}, danach die {{ui:Exposure}} und die {{ui:Enclosure}}. Kzt, Kd, G, die Geländehöhe, der Cp-Wert auf der Leeseite, die Exzentrizität und die Richtung stehen ebenfalls zur Verfügung.
3. Lesen Sie den Druck auf jeder Decke und die Kraft auf jede Decke in der Tabelle ab, dann wählen Sie {{ui:Make wind cases}}. Die Fälle sind +X, -X, +Y und -Y.
4. Wählen Sie unter {{ui:Seismic site and system (ASCE 7)}} die Edition und tragen Sie Ss und S1 ein (SMS, SM1 und S1 für ASCE 7-22), die Baugrundklasse A bis D, die Risikokategorie und das seismische Lastabtragungssystem. Oder tragen Sie Breiten- und Längengrad ein und wählen Sie {{ui:Look up from USGS (online)}}; der Online-Dienst wird erst abgefragt, wenn Sie die Schaltfläche drücken.
5. Lesen Sie Fa, Fv, SDS und SD1, R, Cd und Omega0 sowie das Bemessungsspektrum ab, dann wählen Sie {{ui:Use in the Seismic block}}. Drücken Sie im seismischen Bereich {{ui:Make seismic cases}} (siehe [Betonbauteile prüfen und Erdbebenlasten erzeugen](topic:concrete-and-seismic)).
6. Wählen Sie unter {{ui:ASCE 7 load combinations}} das {{ui:Method}} (LRFD oder ASD) und wählen Sie {{ui:Make ASCE 7 combinations}}. Führen Sie die Berechnung erneut aus.

## Wissenswertes

- Wind: nur für ein geschlossenes, starres Gebäude mit dem Richtungsverfahren. Ein nachgiebiges Gebäude braucht einen Böenfaktor aus der Norm, den DetailCraft nicht erzeugt.
- Die Baugrundklassen E und F erfordern eine Baugrunduntersuchung und sind nicht umgesetzt.
- Eine Quellenliste am Ende der Bereiche sagt, woher jeder Wert stammt und was weggelassen wurde.
- Die USGS-Abfrage wurde an einem Ersatzdienst getestet, nicht am Live-Dienst.
