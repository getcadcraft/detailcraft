---
title: Fundamentprüfungen
summary: Einzelfundamente, kombinierte Fundamente und Plattengründungen auf dem von Ihnen beschriebenen Boden prüfen, dazu Setzung, eine biegsame Platte auf Federn, Pfahlgruppen und Stützmauern. Eine Hilfe für die Prüfung durch einen Ingenieur.
keywords: Gründung, Fundament, kombiniertes Fundament, Platte, Setzung, Bettungsmodul, Federn, Randstütze, Eckstütze, Sohldruck, Gleiten, Kippen, Durchstanzen, einachsige Querkraft, Biegung, Verankerung, Mindestbewehrung, Pfahlgruppe, Stützmauer, ACI 318-19
from: 6961ad52
---

:::warning
Dies sind Erstprüfungen zur Durchsicht durch einen Ingenieur, keine Freigabe der Bemessung. Der zulässige Sohldruck und der Reibungsbeiwert liegen in Ihrer Verantwortung: DetailCraft kennt Ihren Boden nicht.
:::

Der Reiter {{ui:Gründung}} prüft die Fundamente im Modell anhand der Stützenlasten, die Sie ihnen zuweisen.

## Boden beschreiben

Geben Sie den {{ui:Zulässiger Sohldruck}} und den {{ui:Reibungsbeiwert der Sohle}} ein. Beide beginnen mit 0, was „nicht eingegeben“ bedeutet: Die Prüfung zeigt dann den Druck als Hinweis und sagt nicht, dass er besteht. Für die Setzung geben Sie den Elastizitätsmodul des Bodens {{ui:Es}} (MPa), seine Querdehnzahl und die zugelassene Setzung ein (zum Start 25 mm). Für eine biegsame Platte geben Sie einen Bettungsmodul {{ui:ks}} ein. Auch die Auffüllung über dem Fundament, die Wichte des Bodens, die Sicherheitsbeiwerte für Gleiten und Kippen (zum Start 1.5) und die Streckgrenze der Bewehrung finden Sie hier.

## Lasten angeben

Jedes Fundament hat eine Liste von Stützenlasten. Verwenden Sie {{ui:Stützenlast hinzufügen}} und füllen Sie die Gebrauchszeile (für Sohldruck, Gleiten und Kippen) sowie die Bemessungszeile (für die Tragfähigkeitsnachweise) aus: die vertikale Last P nach unten, die horizontalen Kräfte Vx und Vy an der Fundamentoberkante, die Momente Mx und My, die Lage der Stütze auf dem Fundament und ihre Abmessung.

Oder starten Sie den Reiter {{ui:Berechnung}} und drücken Sie {{ui:Stützenlasten aus der Berechnung übernehmen}}: Jede Auflagerstelle auf einem Fundament wird zu einer Stützenlast, aus den Gebrauchs- und Bemessungssätzen, die Sie wählen. Ein positives My belastet die +x-Seite des Fundaments stärker; ein positives Mx belastet die −y-Seite stärker.

## Was geprüft wird

Aus den Gebrauchslasten, mit dem Eigengewicht des Fundaments und der Auffüllung:

- **Sohldruck:** der Druck unter einem starren Fundament. Innerhalb des mittleren Drittels liegt die ganze Sohle auf; außerhalb hebt ein Teil der Sohle ab und der Spitzendruck steigt. Liegt die Resultierende außerhalb der Sohle, ist die Prüfung nicht bestanden.
- **Gleiten:** Reibungsbeiwert mal vertikale Last gegen die horizontale Kraft.
- **Kippen:** der Abstand der Resultierenden vom Rand.
- **Setzung:** die elastische Setzung des mittleren Drucks auf einem Halbraum mit dem von Ihnen angegebenen Modul, in der Mitte und an einer Ecke (Lösung von Timoshenko und Goodier für ein biegsames Rechteck), gegen den Grenzwert. Sie ist eine obere Schranke für ein steifes Fundament und lässt eine Bodenschicht mit begrenzter Tiefe, die Entlastung durch den ausgehobenen Boden und die Konsolidierung außer Acht. Ohne Modul zeigt sie den Druck als Hinweis.

Aus den Bemessungs-Stützenlasten allein (ACI 318-19):

- **Biegung** an der Stützenfläche, mit der Mindestbewehrung (0.0018 für 420-MPa-Stäbe) und den Stäben, die Sie gezeichnet haben.
- **Einachsige Querkraft** im Abstand d von der Fläche.
- **Durchstanzen** im Abstand d/2 um jede Stütze, mit dem Moment der Stütze. Liegt eine Stütze nahe am Rand, wird der kritische Schnitt durch den Fundamentrand begrenzt (an einem Rand drei Seiten, an einer Ecke zwei, ACI 318-19 22.6.4.1 und das kleinere αs in Tabelle 22.6.5.2), und das Moment um den eigenen Schwerpunkt des Schnitts enthält die Verschiebung der Last.
- **Verankerung** der Stäbe über die Stützenfläche hinaus, gerade oder mit ihren Haken.
- **Höhe** über der unteren Bewehrungslage (150 mm).

Ein kombiniertes Fundament oder eine Platte wird als starr angenommen; Querkraft und Moment ergeben sich aus der Statik an Schnitten über die volle Breite.

## Eine biegsame Platte auf Federn

Aktivieren Sie {{ui:Dieses Fundament als biegsame Platte auf Federn berechnen}}, wenn das Fundament viele Stützen trägt und das starre Modell zu grob ist. Das Fundament wird zu einer Platte aus Vierknoten-Elementen auf einem Bett aus Federn (dem eingegebenen {{ui:ks}}, an den Knoten konzentriert), wobei die Last jeder Stütze auf die Knoten ihrer eigenen Aufstandsfläche verteilt wird. Eine zweite Tabelle nennt den größten Bodendruck und die größte Setzung (sowie die Differenz zwischen größter und kleinster), das Biegemoment in beiden Richtungen mit der nötigen Bewehrung, Zug an der Oberseite gegen die Festigkeit des unbewehrten Betons (ein Fundament hat keine oberen Stäbe), die einachsige Querkraft im Abstand d von den Stützen und das Durchstanzen mit dem Druck der Federn selbst. Das Netz wird verfeinert, bis eine Stütze drei Elemente breit ist; eine große Platte braucht einige Sekunden. Das Eigengewicht der Platte und der Boden darüber heben sich auf und werden nicht berücksichtigt.

Jede nicht bestandene Prüfung steht mit ihrer Klausel in der Registerkarte {{ui:Probleme}}.

## Pfahlgruppen und Stützmauern

{{ui:Eine Pfahlgruppe hinzufügen}} setzt ein Raster aus Pfählen unter eine starre Kappe: Geben Sie die Last und die Momente sowie das ein, was ein Pfahl auf Druck und auf Zug aufnehmen darf (die Zahlen der Pfahlbemessung, nicht dieses Reiters). Die Reaktion jedes Pfahls ist P/n plus sein Anteil an den Momenten (elastisches Verfahren); der größte Druck und jeder Zug werden geprüft.

{{ui:Eine Stützmauer hinzufügen}} prüft eine Kragwand auf ebener Hinterfüllung, je Meter: aktiver Erddruck nach Rankine, Kippen um die Fußspitze, Gleiten und der Sohldruck. Passiver Erddruck vor der Fußspitze bleibt unberücksichtigt. Ihr Assistent kann dieselben Prüfungen mit `pile_group_check` und `retaining_wall_check` ausführen.

Pfahlgruppen, Wände und der Schalter für die Platte werden in der Modelldatei gespeichert; eine nicht bestandene Prüfung steht unter {{ui:Probleme}}.
