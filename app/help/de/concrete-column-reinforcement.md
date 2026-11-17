---
title: Eine rechteckige Betonstütze bewehren
summary: Ein durchgerechnetes Beispiel für die Bewehrung einer rechteckigen Betonstütze in DetailCraft: platzieren, Längsstäbe und Bügel geben, Nachweise und die Übergreifung darüber lesen, Stabmarken und Werkstattblatt erstellen.
keywords: Betonstütze, rechteckige Stütze, Stützenbewehrung, Längsstäbe, senkrechte Stäbe, Bügel, Querbügel, Querhaken, Übergreifungsstoß, Stoß, Anschlussbewehrung, Bewehrungsgrad, 1 Prozent, 8 Prozent, Bügelabstand, ACI 318-19 25.7.2, EN 1992-1-1 9.5, Werkstattzeichnung, Stabmarken, 8C1, 3C2
from: aee2a3ca
---

Dieses Thema führt eine quadratische Stütze vom Nichts bis zu einem geprüften, gezeichneten und aufgelisteten Detail. Die allgemeinen Regeln für Träger, Decken und Wände stehen unter [Stahlbeton detaillieren](topic:reinforced-concrete); dies ist die Stützenseite davon, mit Zahlen, die Sie nachvollziehen können.

:::warning
DetailCraft detailliert die Stäbe, die Sie ihm geben. Es bemisst sie nicht. Die Stäbe unten sind Startwerte für das Beispiel, keine Empfehlung: Der verantwortliche Ingenieur wählt Größe, Anzahl und Abstand.
:::

## Was hier eine Stütze ist

Eine rechteckige Stütze hat eine Breite (entlang ihrer lokalen x-Achse) und eine Tiefe quer (entlang ihrer lokalen y-Achse), eine lichte Betondeckung bis zu den Bügeln, Längsstäbe an jeder Seite und geschlossene Bügel. Drehen Sie sie, dreht sich das Ganze; die Seiten bleiben „Breitenseite“ und „Tiefenseite“.

- Die Längsstäbe werden als Anzahl an einer Breitenseite und Anzahl an einer Tiefenseite angegeben. Die Eckstäbe zählen für beide, also ergeben 3 und 3 8 Stäbe; 4 und 4 ergeben 12.
- Die Bügel sind geschlossene Rechtecke mit zwei Haken an einer Ecke, 135° oder 90°. Der erste Bügel liegt einen festgelegten Abstand über dem Boden (und unter dem nächsten), die Endbereiche haben einen dichteren Abstand, die Mitte einen weiteren.
- Was die Stäbe oben tun: durchlaufen und mit den Stäben darüber übergreifen, mit 90°-Haken in die Decke einbinden oder unter der Oberkante enden.

## Die Beispielstütze

Eine Stütze 400 × 400 mm, 3600 mm zwischen dem Geschoss darüber und dem darunter, Längsstäbe #8, Bügel #3, 40 mm lichte Betondeckung, f'c 28 MPa, fy 420 MPa, ACI 318-19, innenliegend.

1. Öffnen Sie die Registerkarte {{ui:Beton}} und richten Sie die Rasterlinien und Ebenen ein, auf denen die Stütze steht (linker Bereich).
2. Wählen Sie in {{ui:Nach Raster hinzufügen}} {{ui:Betonstütze}}, wählen Sie den Rasterschnittpunkt und die beiden Ebenen, setzen Sie {{ui:Breite (mm)}} und {{ui:Tiefe quer (mm)}} auf 400 und wählen Sie {{ui:Hinzufügen}}.
3. Setzen Sie im Bereich {{ui:Eigenschaften}}:
   - {{ui:Lichte Betondeckung (mm)}} 40;
   - {{ui:Längsstäbe}} #8, {{ui:Stäbe an einer Breitenseite}} 3, {{ui:Stäbe an einer Tiefenseite}} 3;
   - {{ui:Querbügel}} #3, {{ui:Haken}} 135°, {{ui:Abstand dazwischen (mm)}} 300, {{ui:Länge des Endbereichs (mm)}} 600, {{ui:Abstand in den Endbereichen (mm)}} 150, {{ui:Erster ab Oberfläche (mm)}} 50;
   - {{ui:Stäbe oben}} {{ui:Durchlaufen und mit den Stäben darüber übergreifen}}.

Jede Änderung ist ein Rückgängig-Schritt.

### Was Sie erhalten

| Teil | Ergebnis |
|---|---|
| Längsstäbe | 8 Stäbe #8 (ein 3 × 3-Ring), je 4375 mm lang: die 3600 mm Stütze plus 775 mm Übergreifung darüber |
| Übergreifung | 757 mm nötig für einen Druckstoß (ACI 318-19 25.5.5.1, fy 420), 775 mm vorhanden: der Bedarf, auf das nächste 25-mm-Maß aufgerundet |
| Bügel | 17 Bügel #3, je mit einer Zuschnittlänge von etwa 1359 mm, im Abstand 150 mm in den beiden 600-mm-Endbereichen und 300 mm dazwischen |
| Bewehrungsgrad | 2.5 % des Bruttoquerschnitts (Grenzen 1 % bis 8 %, ACI 318-19 10.6.1.1) |
| Lichter Abstand der Stäbe | 112 mm (mindestens 40 mm nötig, ACI 318-19 25.2.3) |
| Bügelabstand | 300 mm (erlaubt 400 mm: das Kleinste von 16 Stabdurchmessern, 48 Bügeldurchmessern und der kleineren Seite, ACI 318-19 25.7.2.1) |
| Bügelgröße | #3 (zugelassen bis hinab zu 9.5 mm, ACI 318-19 25.7.2.2) |

Alle diese stehen in der Liste {{ui:Prüfungen}} des Elements; die Übergreifung steht außerdem unter {{ui:Übergreifungen und Verankerung}}.

## Querhaken

Bei einem einzigen umlaufenden Bügel werden nur die Eckstäbe gehalten. ACI 318-19 25.7.2.3 erlaubt, dass ein mittlerer Stab an einer Seite ohne Halterung bleibt, wenn er innerhalb von 150 mm lichtem Abstand zu einem Eckstab liegt. Bei 3 Stäben an einer Seite wie oben ist das erfüllt. Bei 4 oder mehr Stäben an einer Seite nicht, und DetailCraft meldet das als Warnung ({{ui:Prüfungen}} und {{ui:Probleme}}): Querhaken sind nötig. **Querhaken werden noch nicht gezeichnet**: Ergänzen Sie sie von Hand in der Zeichnung oder wählen Sie weniger Stäbe an der Seite.

Für EN 1992-1-1 prüft DetailCraft die Stabgröße (mindestens 8 mm), die Anzahl der Stäbe (mindestens 4), die Stahlfläche (0.2 % bis 4 % des Querschnitts), den lichten Abstand und den Bügelabstand (9.5.2 und 9.5.3).

## Die Übergreifung, das Fundament und die Stütze darunter

- Wo **ein Fundament des Modells unter der Stütze steht**, übergreift die Stütze mit den Anschlussbewehrungen des Fundaments, und diese Übergreifung wird ebenfalls geprüft.
- Wo **eine andere Stütze des Modells darunter steht**, übergreift sie mit den Stäben dieser Stütze.
- Geben Sie Ihre eigene {{ui:Übergreifungslänge (mm, 0 = nach Bedarf)}} an, um dies zu überschreiben; eine kürzere als nötige ist ein Problem und wird in der Tabelle mit * markiert.
- Druckstöße werden standardmäßig verwendet ({{ui:Druckübergreifung}} in den Einstellungen); wählen Sie {{ui:Zugübergreifung}}, wenn die Stütze auf Zug beansprucht sein kann.

## Marken, Liste und Werkstattblatt

Gleiche Stäbe teilen sich eine Marke: Die Längsstäbe der Stütze darüber heißen 8C1, ihre Bügel 17C2 (zuerst die Anzahl, dann der Buchstabe C für Stütze und die laufende Nummer). Sie erscheinen auf der Registerkarte {{ui:Biegeliste}} mit Zuschnittlänge und Gewicht sowie in der CSV aus {{ui:Ausgabe}} › {{ui:Mehr}} › {{ui:Biegeliste}}.

Wählen Sie {{ui:Werkstattzeichnung}} neben der Stütze für ein Blatt mit der Stütze in der Ansicht (jeder Stab, seine Marke, die Bügelbereiche und die Übergreifung bemaßt) und einem Schnitt in der Mitte, gefolgt vom Biegeblatt. Speichern Sie {{ui:Dieses Blatt als PDF}}.

## Was dies nicht tut

- Runde Stützen und Wendeln sowie nicht rechteckige Stützen: noch nicht umgesetzt.
- Eck- und Querhaken im Querschnitt sowie erdbebengerechte Detaillierung (ACI 318-19 Kapitel 18): noch nicht umgesetzt.
- Stöße an frei gewählten Stellen oder versetzt: Alle Stäbe übergreifen in einem Schnitt.
- Ob die Stäbe für die Last ausreichen: Das ist die Bemessung des Ingenieurs.
