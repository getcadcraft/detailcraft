---
title: Regeln für Positionsnummern
summary: Genau wann zwei Teile oder zwei Baugruppen dieselbe Positionsnummer teilen, wie Positionsnummern vergeben werden und wie Fundament- und Bewehrungsnummern funktionieren.
keywords: Positionsnummern, Nummerierung, Positionsnr., Baugruppen-Positionsnummer, Präfix, Toleranz, identische Teile, Bewehrungsnummern, Fundamentnummern
from: ce02c98e
---

DetailCraft berechnet nach jeder Änderung jede Positionsnummer neu. Nichts wird gespeichert, daher beschreiben die Positionsnummern immer das Modell, wie es jetzt ist. Wie Sie sie verwenden, steht unter [Positionsnummern prüfen und die Stückliste](topic:marks-and-bom).

## Positionsnummern

Zwei Teile teilen sich eine Positionsnummer, wenn all diese übereinstimmen:

1. Der Teiltyp (Träger, Stütze, Aussteifung oder Blech).
2. Der Profilname (ohne Groß- und Kleinschreibung).
3. Das Material (ohne Groß- und Kleinschreibung).
4. Die Schnittlänge, innerhalb von 1 mm.
5. Jede Bohrung: Seite, Lage längs und quer, innerhalb von 1 mm, und Durchmesser innerhalb von 0.1 mm.
6. Jede Ausklinkung: Ende, Seite, Länge und Tiefe, innerhalb von 1 mm.

Der Name des Stabs ({{ui:Name}}) zählt nicht. Auch seine Lage im Modell, seine Drehung und die Richtung, in der es gezeichnet wurde, zählen nicht, solange das Teil selbst gleich ist.

### Gewendete Teile

Ein Teil wird in jeder Drehung verglichen, die seinen Querschnitt auf sich selbst abbildet. Wenn eine davon es einem anderen Teil gleich macht, teilen sie sich eine Positionsnummer.

| Form | Zählende Drehungen |
|---|---|
| I-Profile, rechteckige HSS, Bleche | Stirnseitig gewendet (um die senkrechte Achse), stirnseitig gewendet (um die waagerechte Achse) und auf den Kopf gedreht um die eigene Länge |
| U-Profile | Stirnseitig gewendet nur um die waagerechte Achse, sodass der Steg auf derselben Seite bleibt |
| Winkel, runde HSS | Keine: verglichen, wie eingesetzt |

So passt ein Träger mit einer Bohrung nahe seinem linken Ende zu einem Träger mit derselben Bohrung nahe seinem rechten Ende, und eine Stütze mit Bohrungen in einem Flansch passt zu einer Stütze mit denselben Bohrungen im anderen Flansch.

### Nummerierung

| Typ | Präfix Teil | Präfix Baugruppe |
|---|---|---|
| Stütze | c | C |
| Träger | b | B |
| Aussteifung | br | BR |
| Blech (gesetzt, Kopfplatte oder Fußplatte) | p | P |

Positionsnummern werden innerhalb jedes Präfixes ab 1 nummeriert. Die Reihenfolge: Stützen, dann Träger, Aussteifungen und Bleche; innerhalb eines Typs nach Profilname in natürlicher Reihenfolge (W8x10 vor W12x26); dann längere Teile zuerst.

Da die Nummerierung dieser Reihenfolge folgt, kann das Hinzufügen oder Ändern eines Teils die Nummern anderer verschieben.

## Baugruppen-Positionsnummern

- Jedes Teil, das nicht mit einem anderen Teil verschweißt ist, ist das Hauptteil seiner eigenen Baugruppe.
- Kopfplatten sind an ihren Träger geschweißt und Fußplatten an ihre Stütze, daher gehören sie zur Baugruppe dieses Stabs.
- Zwei Baugruppen teilen sich eine Positionsnummer, wenn ihre Hauptteile dieselbe Teilenummer haben und ihre angehängten Teile an denselben Stellen dieselben Nummern haben (innerhalb von 1 mm), wobei dieselben Drehungen wie beim Hauptteil erlaubt sind.
- Das Baugruppenpräfix folgt dem Hauptteil: Ein Träger mit zwei Kopfplatten ist eine B-Baugruppe.

Mit dem Werkzeug {{ui:Blech}} gesetzte Bleche sind mit nichts verschweißt, daher ist jedes davon eine eigene P-Baugruppe.

## Fundament-Positionsnummern

Fundamente mit gleicher Länge, Breite, Tiefe, Betonangabe, unterer Lage und Anschlussbewehrung teilen sich eine Nummer: F1, F2 … in der Reihenfolge, in der sie gesetzt wurden. Position und Drehung zählen nicht.

## Bewehrungs-Positionsnummern

Stäbe mit gleicher Größe, Form und gleichen Maßen A, B und C (auf den Millimeter gerundet) teilen sich über alle Fundamente hinweg eine Nummer. Die Nummer besteht aus der Stabnummer, F und einem Zähler je Stabgröße: 5F1, 5F2, 6F1. Ein Stab in Längsrichtung und einer in Querrichtung eines quadratischen Fundaments sind derselbe Stab und teilen sich eine Nummer; die Spalte {{ui:Verwendung}} der Bewehrungsliste nennt beide Verwendungen.
