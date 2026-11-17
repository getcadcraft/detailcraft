---
title: Bewehrungsreferenz
summary: Stabgrößen, Haken-Maße, Formcodes, Zuschnittlängen und die Spalten der Biegeliste, die DetailCraft verwendet.
keywords: Bewehrung, Stabgrößen, Haken, Biegedurchmesser, Formcodes, Zuschnittlänge, Biegeliste, Stabliste, ASTM A615, ACI 318
from: 1583535e
---

## Stabgrößen

Nach ASTM A615/A615M Tabelle 1 (Bezeichnungen in inch-pound). Millimeter und kg/m sind exakte Umrechnungen der veröffentlichten Zoll- und lb/ft-Werte. Die Listen zeigen jede Größe z. B. als „#5 (15.9 mm)“.

| Stab | Durchmesser (mm) | Masse (kg/m) | Fläche (mm²) | Innerer Biegedurchmesser | 90°-Haken, Schenkel außen bis außen (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

In [DetailCraft-Einstellungen](topic:settings) ({{ui:Bewehrung}}) können **ASTM-Stabnamen** diese Stäbe stattdessen mit ihren weichmetrischen A615M-Namen anzeigen: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (dieselben Stäbe; ACI 315-99 Tabelle 1 führt beide auf).

### Metrische Stäbe (BS 4449)

| Stab | Durchmesser (mm) | kg/m | Mindest-Biegeradius r (mm) | Hakenschenkel = Endüberstand P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Die Masse ist der Nennquerschnitt mal 7850 kg/m³. Radius und Endüberstand sind die Mindestwerte nach BS 8666:2020 (dessen Tabelle der Mindestmaße; der frühere Durchmesser ist 2r). Fundamente mit BS-Stäben erhalten Hakenschenkel der Länge P und Zuschnittlängen nach den unten stehenden BS-8666-Formeln. Wird in den Einstellungen europäischer Stahl gewählt, starten neue Fundamente mit H16-Matten und H20-Anschlussbewehrung in Beton C30/37.

## Haken

ASTM-Stäbe: Standard-90°-Haken nach ACI 318-19 Tabelle 25.3.1: innerer Biegedurchmesser 6 db für #3 bis #8 und 8 db für #9 bis #11, mit einem geraden Anschluss von 12 db hinter der Biegung. Der Hakenschenkel, außen bis außen gemessen, ist der halbe Biegedurchmesser + db + 12 db.

Passt der Haken eines Mattenstabs nicht in die Fundamenttiefe innerhalb der Betondeckung, kürzt DetailCraft den Schenkel passend und listet eine Warnung auf.

## Formen

DetailCraft speichert drei Formen. Die Biegeliste druckt sie als DetailCraft-Codes, als ACI-315-Typen oder als BS-8666-Formcodes: Wählen Sie in [DetailCraft-Einstellungen](topic:settings) ({{ui:Bewehrung}}) **Formcodes der Biegeliste**.

| Code | Form | Maße |
|---|---|---|
| S | Gerade | A = Länge |
| L | Eine 90°-Biegung | A = Hauptschenkel, B = Hakenschenkel, beide außen bis außen |
| U | Zwei 90°-Biegungen auf derselben Seite | A = Mitte, B und C = die beiden Schenkel, außen bis außen |

Mattenstäbe mit aktiviertem {{ui:Endhaken}} sind U, ohne S. Anschlussstäbe mit aktiviertem {{ui:Haken unten}} sind L, ohne S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Abb. 10) |
|---|---|---|
| S | 00, L = A | keine Typnummer |
| L | 11, L = A + B − 0.5r − d | keine Typnummer: die Abbildung hat keinen Stab mit einem Haken |
| U | 21, A und C die Schenkel, B die Mitte: L = A + B + C − r − 2d | Typ 2, Haken A und G, gerades B |

Bei BS-8666- oder ACI-315-Codes folgen die Spalten A, B und C der Biegeliste der Bezeichnung dieser Norm (die Mitte eines U ist B).

## Zuschnittlänge

Bei BS-4449-Stäben ist die Zuschnittlänge die BS-8666-Formel des Formcodes des Stabs (siehe oben). Bei ASTM-Stäben ist sie die genaue Länge der Stabmittellinie: die geraden Teile plus die Biegungen als Bögen mit dem halben Biegedurchmesser plus dem halben Stabdurchmesser. Sie wird nicht aus einer Tabelle von Biegeabzügen berechnet und kann daher um einige Millimeter von einer Biegeliste abweichen, die eine solche verwendet.

## Anordnung

- Untere Matte: Stäbe entlang L bilden die untere Lage, Stäbe entlang B liegen darauf. Jeder Satz wird gleichmäßig über das Fundament innerhalb der Betondeckung verteilt, im angegebenen Abstand oder enger, mit mindestens zwei Stäben.
- Anschlussbewehrung: ein Gitter aus Stäben entlang L und entlang B im angegebenen Abstand, zentriert auf dem Fundament, auf der Matte stehend und oben um den angegebenen Überstand herausragend. Jeder Haken zeigt nach außen.

## Prüfungen

| Prüfung | Regel | Ergebnis |
|---|---|---|
| Platz für Stäbe | Betondeckung auf beiden Seiten lässt Raum für die Stäbe | Abgelehnt, wenn nicht |
| Tiefe für zwei Lagen | Tiefe minus zwei Betondeckungen hält beide Mattenlagen | Abgelehnt, wenn nicht |
| Anschlüsse passen | Das Anschlussgitter passt innerhalb der Betondeckung | Abgelehnt, wenn nicht |
| Lichter Abstand | Mindestens der größere Wert aus 25.4 mm und db (ACI 318-19 25.2.1; Zuschlagsgröße nicht geprüft) | Warnung |
| Hakentiefe | Hakenschenkel passt in die Tiefe innerhalb der Betondeckung | Warnung, Schenkel gekürzt |
| Anschlusshaken | Haken bleiben außerhalb der Betondeckung | Warnung |

## Spalten der Biegeliste

Die Registerkarte {{ui:Biegeliste}} und ihre CSV haben diese Spalten: Positionsnummer, Größe, Form, A (mm), B (mm), C (mm), Anzahl, Zuschnittlänge (mm), Gesamtlänge (m), kg/m, Gewicht je Stück (kg), Gesamtgewicht (kg), Verwendet für. Die letzte Zeile summiert Anzahl, Länge und Gewicht.
