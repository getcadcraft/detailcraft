---
title: Rahmen berechnen
summary: Kräfte, Auflagerreaktionen und Verformungen der Träger, Stützen und Aussteifungen wie gezeichnet, unter Lastfällen und Kombinationen, die Sie festlegen. Eine Berechnungshilfe, keine Bemessungsprüfung; die Bemessungsprüfungen sind ein eigener Schritt.
keywords: Berechnung, Tragwerksberechnung, Rahmenberechnung, Steifigkeitsverfahren, Lasten, Lastfall, Kombination, Eigenlast, Eigengewicht, Auflagerreaktionen, Biegemoment, Querkraft, Normalkraft, Verformung, Verformungsfigur, Auflager, gelenkig, eingespannt, Gelenk, Bericht, PDF, CSV, CraftScript, frame3d
from: ba0081bc
---

Der Reiter {{ui:Berechnung}} unten ermittelt die Kräfte in jedem Träger, jeder Stütze und jeder Aussteifung des Modells, die Reaktionen an den Stützenfüßen und wie stark sich die Stäbe biegen, für die Lasten, die Sie angeben.

:::warning
Es ist eine **Berechnungshilfe, keine Bemessungsprüfung**. Die Berechnung wendet keine Bemessungsnorm an: Sie bemisst keine Querschnitte, prüft keine Tragfähigkeiten oder Anschlüsse und wählt keine Lastfaktoren. Ein Ingenieur prüft das Modell, seine Lasten und Lager und entscheidet, was die Zahlen bedeuten. Für Stabnachweise nach ASCE 7 / AISC 360 oder EN 1990 / EN 1993-1-1 siehe [Stahlstäbe nach einer Bemessungsnorm prüfen](topic:design-checks), ein eigener Schritt, der ebenfalls nur eine Hilfe ist.
:::

## Ausführen

1. Öffnen Sie den Reiter {{ui:Berechnung}}.
2. Wählen Sie in der Ansicht einen oder mehrere Stäbe, wählen Sie einen {{ui:Lastfall}}, eine {{ui:Last}} und eine {{ui:Richtung}}, geben Sie den Wert ein und drücken Sie {{ui:Last hinzufügen}}. Eine längs eines Stabs verteilte Last wird in kN/m angegeben, eine Einzellast in kN. {{ui:Nach unten (Schwerkraft)}} ist die übliche Wahl.
3. Drücken Sie {{ui:Berechnung starten}}.

Die Tabelle listet für jeden Stab die größte Normalkraft N, die Querkräfte Vz und Vy, die Biegemomente My und Mz, das Torsionsmoment T und seine Verformung, mit dem größten Moment zuerst; klicken Sie auf den Namen eines Stabs, um ihn auszuwählen. Darunter stehen die Reaktionen an jedem Auflager. {{ui:Am Modell}} zeichnet die Verformungsfigur oder eine Schnittgröße als Diagramm neben jedem Stab, mit ihrem größten Wert an dessen Stelle. Die Ergebnisse sind veraltet, sobald sich das Modell ändert: Starten Sie die Berechnung dann erneut.

Jede Last, jeder Lastfall und jede Einstellung ist ein Rückgängig-Schritt ({{key:Mod+Z}}) und wird in der Modelldatei gespeichert.

## Lastfälle und Kombinationen

Die Berechnung beginnt mit dreien: **Ständig** (das Eigengewicht der Stäbe aus ihren gezeichneten Querschnitten und 7850 kg/m³), **Veränderlich** (leer) und **Ständig + veränderlich**. Fügen Sie eigene Lastfälle (Wind, Schnee …) und Kombinationen hinzu: Eine Kombination addiert die Lastfälle mit den Faktoren, die Sie eingeben. Die Berechnung ist linear, daher wird jeder Lastfall einmal gelöst und Kombinationen sind Summen. Geben Sie die Faktoren selbst ein oder wählen Sie eine Bemessungsnorm und lassen Sie {{ui:Kombinationen bilden}} die Kombinationen der Norm schreiben ([Stahlstäbe nach einer Bemessungsnorm prüfen](topic:design-checks)).

## Woraus der Rahmen besteht

- Träger, Stützen und Aussteifungen, jeweils auf ihrer Arbeitslinie (der Linie, die Sie gezeichnet haben), mit den echten Querschnittswerten aus ihrem Umriss. Platten, Treppen, Fundamente und Schrauben gehören nicht zum Rahmen.
- Ein Stab wird geteilt, wo das Ende eines anderen Stabs auf ihm liegt; ein Träger, der auf halber Höhe an eine Stütze anschließt, verbindet sich dort mit der Stütze.
- **Stützenfüße**: eingespannt (der Anfang) oder gelenkig (festgehalten und gegen Verdrehen gesichert, frei drehbar). Eine Fußplatte bildet immer ein Auflager.
- **Trägerenden**: eine Kopfplatte ist starr, eine Anschlusslasche ist gelenkig. {{ui:Trägerenden ohne Anschluss}} legt den Rest fest. **Aussteifungen** sind an beiden Enden gelenkig.
- Wählen Sie einen Stab, um seinen Enden oder dem Fuß einer Stütze eine eigene Regel zu geben.
- Überall Stahl: E = 200 GPa, G = 77 GPa.

Kann der Rahmen sich bewegen, ohne etwas zu biegen – ein Mechanismus, etwa mit gelenkigen Füßen und ohne Aussteifung in einer Richtung –, bricht die Berechnung ab und nennt Ort und Richtung; halten Sie ihn mit einem Auflager, einem steifen Knoten oder einer Aussteifung fest.

## Vorzeichen

N > 0 ist Zug. My > 0 legt die lokale −z-Seite des Stabs auf Zug: Ein Träger, der unter der Schwerkraft durchhängt, hat My > 0. Mz > 0 legt die lokale −y-Seite auf Zug. Die Verformung wird von der geraden Linie zwischen den Stabenden gemessen. Die lokale z-Achse eines Stabs zeigt nach oben (bei einer Stütze: entlang X); seine lokalen Achsen drehen sich mit der Drehung des Stabs.

## Der Bericht

{{ui:Bericht (PDF)}} und {{ui:Bericht (CSV)}} enthalten alles: die Annahmen, auf denen der Rahmen aufgebaut ist, Querschnitte, Lastfälle und Kombinationen, dann für jeden Lastfall und jede Kombination die Reaktionen (mit den Summen der Lasten und Reaktionen, die sich ausgleichen), die Stabkräfte und die Verformungen sowie eine Hüllkurve aller Lastfälle. {{ui:Als CraftScript exportieren}} schreibt denselben Rahmen als Skript für den Arbeitsbereich für Skripte in PartCraft, wo die Bibliotheksfunktion `frame3d` ihn Schritt für Schritt in lesbarem Code löst.

## Verfahren

Das direkte Steifigkeitsverfahren, linear und nach Theorie I. Ordnung, sofern Sie nicht *Theorie II. Ordnung (P-Delta)* ankreuzen: Zwei-Knoten-Balken-Stützen mit Dehnungs-, Torsions- und zwei Biegesteifigkeiten (ohne Schubverformung und ohne Wölbung), Gelenkfreigaben durch statische Kondensation, Lasten längs der Stäbe über deren eigene Formfunktionen. Die Ergebnisse werden mit den klassischen Lehrbuchfällen geprüft (Kragträger, einfache, eingespannte und durchlaufende Träger, ein Portalrahmen, ein Trägerrost unter Torsion, ein Fachwerk).

**Theorie II. Ordnung (P-Delta).** Setzen Sie *Theorie II. Ordnung (P-Delta)* neben {{ui:Berechnung starten}}: Jede Kombination wird erneut gelöst, wobei die Normalkräfte der Stäbe am verformten Rahmen wirken (jeder Stab in 4 Teile geteilt, damit auch die Biegung eines Stabs zwischen seinen Enden zählt), bis sich die Normalkräfte einstellen. Die Ergebniszeile nennt die Anzahl der Durchläufe und wie stark die Ausweichung gewachsen ist; Momente, Verformungen, Bemessungsprüfungen und Bericht verwenden dann diese Ergebnisse. Oberhalb der elastischen Verzweigungslast des Rahmens bricht die Berechnung ab und sagt dies. Sie gilt elastisch mit kleinen Verdrehungen, nur für Biegung, ohne Steifigkeitsabminderung oder fiktive Ersatzlasten (nicht allein das Verfahren der direkten Analyse nach AISC); Platten, Wände und starre Decken bleiben bei Theorie I. Ordnung.

**Eigenfrequenzen (finite Elemente).** Der Block {{ui:Finite Elemente: Eigenfrequenzen}} unter den Ergebnissen ermittelt die niedrigsten Schwingungsformen desselben Modells mit dem Finite-Elemente-Modul: Balken mit ihren Gelenkfreigaben, Platten und Wände als ebene Vierknoten-Schalen, starre Decken, Auflager. Wählen Sie die Anzahl der Schwingungsformen (3, 6, 10 oder 20) und das Plattenelement (die Vierknoten-Schale für dicke oder dünne Platten oder das Element für dünne Platten) und drücken Sie {{ui:Frequenzen ermitteln}}. Die Tabelle gibt die Frequenz jeder Form in Hz, ihre Periode in Sekunden und ihre effektive modale Masse in X, Y und Z als Anteil an der bewegbaren Masse; {{ui:Am Modell anzeigen}} zeichnet jede Form so, wie die Verformungsfigur gezeichnet wird. Die Masse ist die Materialdichte mal das Volumen: Lasten erhöhen die Masse nicht, und ein Material ohne Dichte hat keine Masse. Der Bericht (PDF, CSV) enthält die Tabelle. Sie gilt nur elastisch und für kleine Bewegungen; hier wird keine Erdbeben- oder Windlast nach einer Norm erzeugt. Keine Bemessungsprüfung; Ihr Ingenieur prüft die Ergebnisse.

**Antwortspektrum, Zeitverlauf und Pushover.** Drei weitere Blöcke liegen unter den Frequenzen und verwenden dasselbe Finite-Elemente-Modell. Die Masse für alle drei ist die Materialdichte plus die nach unten wirkenden Lasten der angekreuzten Lastfälle, jeweils mit einem Faktor, den Sie eingeben (zum Beispiel Ständig mit 1 und Veränderlich mit dem Anteil, den Sie als Masse ansetzen).

{{ui:Antwortspektrum}} liest jede Form aus einem Spektrum ab, das Sie vorgeben (eine Tabelle aus Periode und Beschleunigung oder die Form nach ASCE 7 aus SDS, SD1 und TL; die Schaltfläche {{ui:Werte aus dem Block Erdbeben übernehmen}} kopiert diese Werte aus dem Block Erdbeben) und kombiniert die Formen nach CQC, SRSS, der Zehn-Prozent-Regel oder einer absoluten Summe; danach fasst es die Richtungen X, Y und Z zusammen (100 % + 30 % oder SRSS). Es liefert die Basisscherkraft, Geschossdrifts, Stabendkräfte und eine Formtabelle, die warnt, wenn die verwendeten Formen weniger als 90 % der Masse umfassen. Sie können die Ergebnisse mit einem Faktor oder auf eine Basisscherkraft skalieren, die Sie eingeben; der Block berechnet diese Basisscherkraft nie selbst. Die Ergebnisse haben kein Vorzeichen.

{{ui:Zeitverlauf}} rechnet eine Bodenbeschleunigung mit Modalüberlagerung (exakt für die geraden Linien zwischen den Punkten der Aufzeichnung) oder mit direkter Integration (Newmark-Mittelbeschleunigung mit Rayleigh-Dämpfung). Die Eingabe ist eine erfundene Sinus- oder Impulsfunktion (immer als synthetisch gekennzeichnet), eine Aufzeichnung, die Sie einfügen, oder eine Textdatei, die Sie öffnen (Zeit und Beschleunigung, eine Beschleunigung je Zeile mit einem Schritt, oder eine Datei im PEER-Stil mit einer DT=-Kopfzeile; in g oder m/s²). Sie liefert die Dachverschiebung und die Basisscherkraft über der Zeit, die Drift jeder Ebene und die Hüllkurve der Stabendkräfte. Modelle mit einer sehr langen Aufzeichnung behalten sie nur für die Sitzung.

{{ui:Pushover}} schiebt das Dach seitlich in kleinen Schritten (Muster wie die erste Form oder gleichmäßig), mit plastischen Gelenken an den Enden von Stäben mit I-Querschnitt. Ein Gelenk fließt beim plastischen Moment, das mit wachsender Normalkraft abnimmt (aus dem gezeichneten Querschnitt ermittelt, Ausrundungen vernachlässigt); Verfestigung ist optional, P-Delta ist optional, und eine Kombination mit Eigengewicht kann vorab aufgebracht werden. Sie liefert die Tragfähigkeitskurve (Basisscherkraft über der Dachverschiebung), das erste Gelenk sowie den Zustand und die plastische Verdrehung jedes Gelenks. {{ui:Nichtlineare Zeitverlaufsanalyse ausführen}} führt dieselben Gelenke unter der Aufzeichnung des Blocks Zeitverlauf an kleinen Modellen aus. Gelenke entstehen nur an Stabenden (setzen Sie einen Knoten dort, wo innerhalb eines Feldes ein Gelenk entstehen soll); ein Stab, der an beiden Enden gelöst ist, erhält keine; Fließen und Knicken von Aussteifungen sind nicht modelliert; Platten und Wände bleiben elastisch; Annahmekriterien für Gelenke werden nicht angegeben. Keine Bemessungsprüfung; Ihr Ingenieur prüft die Ergebnisse. Die Einstellungen werden mit dem Modell gespeichert, und der Bericht enthält die Tabellen.

Noch nicht umgesetzt: Knickanalyse, eine Fehlmassenkorrektur für das Antwortspektrum, Skalierung von Aufzeichnungen, Annahmekriterien für Gelenke (die dynamische Antwort ist oben vorhanden), automatisch erzeugte Flächen- und Windlasten (Erdbebenkräfte auf Decken stehen in [Betonbauteile prüfen und Erdbebenlasten erzeugen](topic:concrete-and-seismic)), Stabversätze, nur auf Zug wirkende Aussteifungen. Siehe [Noch nicht umgesetzt](topic:not-built-yet).
