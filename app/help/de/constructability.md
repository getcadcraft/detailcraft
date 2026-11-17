---
title: Konstruktionsprüfungen
summary: Probleme für das, was ein Detailer mit dem Auge erkennt: eine Schraube, die ein Schlüssel nicht erreicht, Schrauben zu eng für die Nuss, Kehlnähte außerhalb ihrer Größengrenzen, Schweißnähte, die der Brenner nicht erreicht, und Rohre, die Wasser halten.
keywords: Konstruktion, Schlüssel, Nuss, Schraubenzugang, Anziehen, Schweißnahtgröße, Kehlnaht, Mindestnaht, Höchstnaht, Wasser, Entlüftungsbohrung, Entwässerungsbohrung, Feuerverzinken, Hohlprofil, Probleme
from: 72315151
---

DetailCraft sucht nach vier Arten von Problemen, die keine Festigkeitsprüfung findet, und listet sie im Bereich {{ui:Probleme}} auf. Es sind Warnungen und Hinweise zum Ansehen, keine Fehler: Das Modell wird trotzdem gebaut.

## Eine Schraube, die der Schlüssel nicht erreicht

Für jede Schraube setzt DetailCraft eine Nuss über den Kopf und über die Mutter. Die Nuss ist ein Zylinder, so breit wie die Mutter über die Ecken plus eine Wand von 4 mm, 60 mm lang. Steht ein Trägersteg, ein Flansch, ein Blech oder eine Aussteifung innerhalb dieses Zylinders, nennt das Problem die Verbindung, die Anzahl der Schrauben, welches Teil im Weg ist und wie weit es von der Schraube entfernt liegt.

Die Nuss ist eine typische Schlagnuss. Ein Maulschlüssel braucht weniger Platz, ein größeres Werkzeug mehr. Bitten Sie Ihren verbundenen Assistenten, `constructability_check` mit einer anderen `socketLength` auszuführen, um zu sehen, wie sich die Antwort ändert.

## Schrauben zu eng für die Nuss

Eine Nuss über einer Schraube darf den Kopf der nächsten nicht berühren. Die Schrauben einer Verbindung, die enger liegen als die Breite der Nuss plus der Nachbarkopf, werden mit dem gefundenen und dem nötigen Abstand aufgelistet.

## Kehlnahtgrößen

AISC 360-16 Tabelle J2.4 setzt die kleinste Kehlnaht nach der Dicke des dünneren Teils (3 mm bis 6.35 mm Dicke, 5 mm bis 12.7, 6 mm bis 19.05, 8 mm darüber), und J2.2b die größte entlang einer Materialkante: nicht größer als das Material, wenn es dünner als 6.35 mm ist, sonst 1.6 mm weniger. Verbindungen mit gleicher Größe bei gleicher Dicke werden als ein Problem aufgelistet.

Die verwendete Dicke ist das dünnste Teil, das die Schweißnaht nennt. Daher wird eine rundum laufende 8-mm-Naht an einem Träger mit 6.35-mm-Steg aufgelistet.

## Wasser und Entlüftung

- Ein **offenes oberes Ende** eines Hohlprofils, das senkrecht steht oder um mehr als 10° geneigt ist, lässt Regen hinein.
- Ein Hohlprofil, **an beiden Enden geschlossen**, braucht eine Entlüftungs- und eine Entwässerungsbohrung; Feuerverzinken im Tauchbad und der Druck erhitzter Luft verlangen beide eine solche Bohrung.

## Kann der Schweißer es erreichen

Eine Kehlnaht wird mit dem Brenner auf halber Strecke zwischen den beiden Flächen gelegt, die sie verbindet. Für jede rundum laufende Kehlnaht (eine Kopfplatte, eine Fußplatte, ein Gehrungsblech) nimmt die Prüfung den Querschnittsumriss des Bauteils am Blech und fährt alle 20 mm eine Brennerbahn unter 45° von dort, wo seine Düse (Radius 10 mm zu Beginn) beide Flächen erstmals frei lässt, für weitere 30 mm. Trifft die Bahn auf den eigenen Flansch des Trägers oder ein anderes Teil, wird dieser Anteil der Naht mit dem Teil und dem Abstand aufgelistet. Diese Zahlen sind typisch und keine Vorgabe einer Norm: Fragen Sie Ihren Fertiger nach Verfahren und Düse. Schweißnähte entlang zweier Kanten (eine Anschlusslasche) werden nicht lokalisiert und nicht geprüft.
