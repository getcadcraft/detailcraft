---
title: Lieferantenbestand und Lieferzeiten
summary: Die Stangen Ihrer Zuschnittsliste mit der Bestandsliste eines Lieferanten abgleichen: Reicht der Bestand, und wie lange dauert die Lieferung?
keywords: Lieferant, Bestand, Lieferzeit, Stahllager, Walzwerk, Verfügbarkeit, Nachlieferung, Stangen, Beschaffung, Lieferung
from: 1373f5a3
---

Die Registerkarte {{ui:Lieferung}} sucht jedes Profil, das die {{ui:Zuschnittsliste}} einkauft, in der Bestandsliste eines Lieferanten. Die Datei bleibt im Modell; nichts wird irgendwohin gesendet.

## Lieferantendatei hinzufügen

Klicken Sie auf {{ui:Eine Lieferantendatei hinzufügen}} und wählen Sie eine CSV-Datei Ihres Lieferanten (durch Komma, Semikolon oder Tabulator getrennt). Sie braucht eine Spalte für den Artikel oder das Profil (Item, Name, Description, Section, SKU) sowie eine für den Bestand (In stock, Quantity, On hand) oder für die Lieferzeit. Die Einheit (each, metres, kilograms, tonnes), der Preis, der Lieferant und ein Wiederauffülldatum werden gelesen, wenn es dafür eine Spalte gibt. Auch Begriffe wie "Out of stock", "In stock", "2-3 weeks" und "backorder" werden erkannt. Bis zu fünf Dateien können gespeichert werden; eine Datei mit demselben Namen ersetzt die bisherige.

## Was Sie sehen

Für jedes Profil, das die Zuschnittsliste einkauft, zeigt die Tabelle den Bedarf des Modells, den Bestand, die Lieferzeit, den Lieferanten und ein Ergebnis:

- **Gedeckt:** genug auf Lager.
- **Zu wenig um:** Der Bestand liegt unter dem Bedarf. Liegt der Bestand unter dem Bedarf und haben Sie eine längste Wartezeit eingestellt, zeigt die Lieferzeit, wie lange der Rest dauert.
- **Zu spät:** Es gibt keine Bestandsangabe, und die Lieferzeit ist länger als die von Ihnen akzeptierte Wartezeit.
- **Keine Bestandsangabe:** Die Datei sagt es nicht.
- **Andere Einheit:** Der Lieferant führt das Profil in einer Einheit, die das Modell nicht angeben kann.

Der Bedarf des Modells wird in Stangen angegeben (aus der verschachtelten Zuschnittsliste mit Ihren Stangenlängen), in Metern eingekaufter Stange und in Kilogramm (Gewicht des Profils je Meter), wobei die Einheit der Datei verwendet wird. Ein Profil wird über seinen Namen zugeordnet („W16 X 26“ und „w16x26“ sind gleich). Profile, die nicht in der Datei stehen, werden aufgelistet.

Fehlmengen und verspätete Profile stehen im Bereich {{ui:Probleme}}. Hier wird nichts bestellt.

## Grenzen

Die Bestandsangaben und Lieferzeiten stammen aus der Datei, Stand des Tages, an dem sie erstellt wurde. Bleche werden nicht verschachtelt und daher nicht nachgeschlagen. Die Datei wird nur gelesen: Jede Anweisung darin ist nur Text.
