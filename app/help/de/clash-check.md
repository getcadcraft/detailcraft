---
title: Kollisionen prüfen
summary: Stäbe, Bleche und Fundamente finden, die ineinander ragen, mit Ausnahme der Teile, die eine Verbindung zusammenführen soll, und zu jeder Kollision springen.
keywords: Kollision, Kollisionsprüfung, Kollision prüfen, Interferenz, Überlappung, Schnitt, harte Kollision, Koordination, Modell prüfen
from: 04d72d3b
---

Öffnen Sie die Registerkarte {{ui:Kollisionen}} unter der Ansicht und wählen Sie {{ui:Jetzt prüfen}}. DetailCraft betrachtet jedes Teilepaar in den angezeigten Phasen: Stahl gegen Stahl und Stahl gegen Fundament. Die Registerkarte listet jede Kollision, die tiefste zuerst, mit:

- den beiden Teilen, nach Positionsnummer (bzw. Fundamentnummer) und Profil;
- **Überlappung (mm)**: wie weit ein Punkt des einen Teils im anderen liegt, bis zur nächsten Fläche;
- **Nahe**: der Rasterschnittpunkt und die Ebene, an dem sie liegt, oder ihre Koordinaten;
- {{ui:Zeigen}}: wählt beide Teile aus und holt den Ort in die Mitte der Ansicht.

Der Titel der Registerkarte zeigt, wie viele Kollisionen die letzte Prüfung gefunden hat. Die Prüfung läuft nicht von selbst: Nach einer Änderung am Modell weist die Liste darauf hin, und {{ui:Jetzt prüfen}} führt sie erneut aus.

## Was keine Kollision ist

- Teile, die sich nur berühren: ein Blech an einem Flansch, eine Fußplatte auf ihrem Fundament, zwei Stäbe Stirn an Stirn. Die **Toleranz (mm)** legt fest, wie weit zwei Teile ineinander ragen dürfen, bevor es zählt (zu Beginn 1 mm; bis 50).
- Teile, die eine Verbindung verbindet: eine Kopfplatte mit ihrem Träger und mit dem Stützenflansch, an dem sie verschraubt ist, der Träger und die Stütze dieses Knotens, eine Fußplatte mit ihrer Stütze, die Laschen eines Stoßes mit beiden Teilen, eine Aussteifung mit ihrem Knotenblech (der Schlitz eines Rohrs wird im Modell nicht geschnitten). Die Verbindung sieht vor, dass sie aufeinandertreffen.
- Die Schubknagge einer Fußplatte im Fundament darunter (sie sitzt in einer Vergusstasche).
- Schrauben und Ankerstangen (sie gehen durch Löcher) sowie Bewehrung.
- Teile in ausgeblendeten Phasen. Siehe [Phasen](topic:phases).

Eine Aussteifung oder ein Träger, der ohne Verbindung in eine Stütze läuft, **ist** eine Kollision: Dieser Knoten braucht noch eine Verbindung. Die Aussteifung des Beispielrahmens zeigt das: Sie hat kein Knotenblech. Wählen Sie sie aus und wählen Sie {{ui:Knotenblech}} ([Knotenbleche für Aussteifungen](topic:brace-gussets)), dann verschwinden ihre Kollisionen.

## Gut zu wissen

- Die Überlappung misst die Tiefe in den Werkstoff. Ein Stab, der in den dünnen Steg oder Flansch einer Stütze läuft, zeigt daher nur wenige Millimeter, selbst wenn er weit hineinläuft.
- Teile werden so geprüft, wie sie geschnitten sind: Ausklinkungen und das Kürzen eines Trägers an seinen Kopfplatten werden berücksichtigt. Löcher nicht.
