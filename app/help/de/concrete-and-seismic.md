---
title: Betonbauteile nachweisen und Erdbebenlasten bilden
summary: Die Bewehrung von Betonträgern und -stützen festlegen, nach ACI 318-19 nachweisen, Ersatzkräfte nach ASCE 7-22 auf starre Decken bilden und die Geschossverschiebung ansehen. Eine Hilfe für einen Ingenieur zur Prüfung.
keywords: Beton, Stahlbeton, ACI 318, ACI 318-19, Bewehrung, Träger, Stütze, Querkraft, Bügel, Erdbeben, Erdbebenlast, Ersatzkraft, ELF, ASCE 7-22, Verschiebung, Geschossverschiebung, Decken, starre Scheibe, Geschossgewicht, Ausnutzung, Tragwerk, Ingenieur
from: 94d3001d
---

Die Blöcke {{ui:Betonbauteile}} und {{ui:Erdbebenlasten}} auf der Registerkarte {{ui:Berechnung}} prüfen Stahlbetonträger und -stützen und bilden die horizontalen Kräfte eines Erdbebens auf den Geschossen eines Rahmens. Beide folgen dem Lauf der Registerkarte {{ui:Berechnung}} und werden mit dem Modell gespeichert.

:::warning
Die Ergebnisse sind **zur Prüfung durch einen Ingenieur** bestimmt: eine Hilfe, bis einer sie geprüft hat. Die Betonnachweise verwenden Kräfte nach Theorie erster Ordnung, außer dass eine Stütze in einem Rahmen, den Sie als unverschieblich bezeichnen, für ihr vergrößertes Moment bemessen wird, ohne Verschieblichkeitsvergrößerung, ohne Torsionsbemessung, ohne Erdbebendetaillierung (ACI Kapitel 18) und ohne Bügeldetaillierung. Die Erdbebenlasten lassen den Redundanzfaktor, den vertikalen Erdbebeneinfluss, die Torsionsverstärkung und P-Delta-Effekte weg. Windlasten sind noch nicht umgesetzt.
:::

## Bauteile zeichnen

Zeichnen Sie Betonbauteile als Rechtecke: Ein Blech-Profil wie `PL400x400` für eine Stütze und `PL300x600` für einen Träger ergibt den Querschnitt. Stützen und Träger werden wie jedes andere Bauteil platziert.

## Querschnitte einrichten

Der Block {{ui:Betonbauteile}} listet jeden Querschnitt auf, den die Bauteile verwenden. Klicken Sie bei denen, die Beton sind, auf {{ui:Als Beton einrichten…}}. DetailCraft liest die Breite **b** (entlang der eigenen y-Achse des Bauteils) und die Höhe **h** (entlang z) aus dem gezeichneten Profil und fragt dann nach:

- der **Betondeckung** bis zur Mitte der Stäbe sowie den **oberen**, **unteren** und **seitlichen** Stäben (wie viele und welcher Durchmesser) für einen Träger oder einem **Stabkorb** (Stäbe entlang b und entlang h, welcher Durchmesser, Wendelbügel) für eine Stütze;
- den **Bügeln**: Schenkel, Durchmesser und Abstand;
- was das Bauteil **darstellt**: einen Träger, eine Stütze oder entschieden nach seinen Kräften (ein senkrechtes Bauteil oder eines mit mehr als 0.10 f′c Ag ist eine Stütze).

Setzen Sie darüber f′c, die Stahlstreckgrenze fy und die Bügelstreckgrenze fyt (höchstens 420 MPa zählen für Querkraft), K und ob der Rahmen verschieblich oder unverschieblich ist. Ein als Beton eingerichteter Querschnitt wird als Beton berechnet: E = 4700 √f′c, 2400 kg/m³, und standardmäßig mit **gerissenen Querschnitten** (Stützen 0.70 Ig, Träger 0.35 Ig; ACI 318-19 Tabelle 6.6.3.1.1(a)). Wählen Sie {{ui:Ungerissene Bruttoquerschnitte}}, um das auszuschalten.

## Kombinationen bilden und prüfen

Geben Sie den Lastfällen ihre Art, dann klicken Sie auf {{ui:Kombinationen bilden}}: ACI 318-19 übernimmt die Tragfähigkeitskombinationen von ASCE 7 (§5.3.1). Klicken Sie auf {{ui:Beton nachweisen}}, und jedes Bauteil erhält eine Ausnutzung, am Modell eingefärbt wie die Stahlnachweise: Biegung und Mindestbewehrung (22.2, 9.6.1.2), Dehnung bei Zugbruch (9.3.3.1), Querkraft mit den Bügeln (22.5, 9.6.3), Bügelabstand sowie Normalkraft mit Moment für Stützen (22.4, mit dem Verfahren nach Bresler für zweiachsige Biegung). Ein Bauteil, dessen gezeichneter Querschnitt vom eingegebenen b × h abweicht, zeigt *teilweise geprüft*, ebenso eine schlanke Stütze oder Torsion über dem Grenzwert: Diese werden nicht bemessen.

Bauteile über ihrer Tragfähigkeit listet {{ui:Probleme}} auf; nehmen Sie eines mit einer Begründung an oder korrigieren Sie den Querschnitt.

## Geschosse und Erdbebenlasten

Ein Geschoss ist eine Ebene, in der der Rahmen durch eine biegesteife Decke (eine **starre Scheibe**) zusammengehalten wird. Klicken Sie im Block {{ui:Erdbebenlasten}} auf {{ui:Geschosse finden}}: Es nimmt die Ebenen, an denen zwei oder mehr Träger zusammenlaufen. Geben Sie dann jedem Geschoss sein **seismisches Gewicht**, eingegeben oder übernommen. {{ui:Gewichte aus Lastfällen übernehmen}} summiert die vertikalen Lasten der Fälle, denen Sie einen Faktor geben (der Eigenlastfall ist 1; addieren Sie 0.25 bei einem Verkehrslastfall für Lagerung oder bei Schnee auf einem flachen Dach, wie ASCE 7-22 12.7.2 verlangt). Die vertikale Last jedes Knotens geht an das Geschoss auf oder über ihm, sodass eine Stütze zwischen zwei Geschossen jedem die Hälfte ihres Gewichts gibt.

Tragen Sie die Entwurfswerte ein: SDS, SD1, S1, R, Ie, Cd, TL, das Tragwerkssystem (für die Periode) und die Risikokategorie. {{ui:Erdbebenlastfälle bilden}} berechnet dann die Periode aus der Gebäudehöhe (12.8.2.1), die Basisscherkraft V = Cs W (12.8.1), verteilt sie nach oben auf die Geschosse (12.8.3) und schreibt vier Lastfälle, in X und Y, mit je 5 % zufälliger Torsion in jeder Richtung (12.8.4.2). Die Geschosskräfte und die Prüfung der Geschossverschiebung (12.8.6, Tabelle 12.12-1, die Verschiebung Cd δxe / Ie gegen 0.020 hsx) erscheinen nach einem Lauf; eine Verschiebung über ihrem Grenzwert ist ebenfalls ein Problem. Klicken Sie erneut auf {{ui:Kombinationen bilden}}, um die Erdbebenlastfälle in die Kombinationen aufzunehmen.

**Die Periode aus der Berechnung.** Die Näherungsperiode Ta ergibt sich aus der Gebäudehöhe. Wenn Sie die Berechnung mit den Erdbebenlastfällen durchgeführt haben, liest {{ui:Periode aus der Berechnung übernehmen}}, wie weit sich jedes Geschoss unter den Kräften verschoben hat, und berechnet die Periode nach dem Rayleigh-Verfahren, T = 2π √(Σ w δ² / (g Σ f δ)), einmal für X und einmal für Y; die Erdbebenlastfälle werden damit neu gebildet. Die verwendete Periode ist nie größer als Cu·Ta (ASCE 7-22 12.8.2), sodass ein weiches Modell die Basisscherkraft nicht unter diesen Wert senken kann. Übernehmen Sie die Periode nach dem zweiten Lauf erneut: Sie stabilisiert sich in ein oder zwei Schritten. Entfernen Sie den Haken bei {{ui:Periode aus der Berechnung}}, um zu Ta zurückzukehren.

**Schlanke Stützen (ACI 318-19 6.6.4.5).** Für einen Rahmen, den Sie als unverschieblich bezeichnen, wird eine Stütze, deren k·ℓu/r über 34 + 12·M1/M2 liegt (höchstens 40), für das vergrößerte Moment Mc = δns · M2 bemessen: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² mit (EI)eff = 0.4 Ec Ig / (1 + βdns), und das Mindestmoment Pu (15 + 0.03 h). βdns (zu Beginn 0.6) ist der Anteil der bemessenen Normalkraft, der dauerhaft wirkt; geben Sie Ihren eigenen Wert ein. Eine Stütze, deren Pu 0.75 Pc erreicht, scheitert an ihrer eigenen Prüfung. Der Bericht listet die Werte jeder schlanken Stütze. In einem **verschieblichen** Rahmen bleibt eine schlanke Stütze „teilweise geprüft“: Ihre Vergrößerung braucht eine Berechnung nach Theorie zweiter Ordnung, die noch nicht umgesetzt ist.

**Platten.** Wenn das Modell Bleche enthält, nimmt ein Block {{ui:Plattenbewehrung}} die Plattenmomente jeder Tragfähigkeitskombination und berechnet nach der Wood-Armer-Regel (Biegung und Verdrehung zusammen) die Bewehrung, die jede Lage je Meter braucht: unten und oben, in x und in y. Sie geben Dicke, Betondeckung und Stäbe an; die Tabelle zeigt Erforderlich gegen Vorhanden sowie die einachsige Querkraft gegen φVc, und eine Lage, die zu wenig hat, ist ein Problem mit ihrem Paragraphen. Durchbiegung, Durchstanzen an Stützen und Randstäbe an Öffnungen sind nicht erfasst, und ein Moment über einer Auflagerung konvergiert bei Vierknotenplatten langsam.

Jedes Geschoss, das Sie auflisten, wird in der Berechnung zu einer starren Scheibe: Seine Träger tragen keine Normalkraft aus der Bewegung des Geschosses. Der CraftScript-Export ist für ein Modell mit Geschossen nicht vorgesehen.

## Der Bericht

{{ui:Bericht (PDF)}} und {{ui:Bericht (CSV)}} erhalten die Betontabellen (Annahmen, Ausnutzung je Bauteil, jeder Paragraph), die Erdbebenparameter und die Basisscherkraft, die Kräfte auf den Geschossen und die Verschiebungstabelle.
