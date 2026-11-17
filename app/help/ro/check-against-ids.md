---
title: Verificarea exportului IFC față de IDS-ul clientului
summary: Încărcați fișierul .ids primit și vedeți în Probleme fiecare piesă exportată care nu îl respectă, înainte să trimiteți fișierul IFC.
keywords: ids, specificație de livrare a informațiilor, buildingsmart, cerințe, livrare, verificare, validare, control al calității, export ifc, proprietate, material, achiziții
from: 50d0f785
---

## Ce veți face

Un IDS (Information Delivery Specification, un standard buildingSMART) este lista a ceea ce trebuie să conțină un IFC. DetailCraft verifică IFC-ul pe care l-ar exporta (același fișier pe care îl scrie {{ui:IFC}}) față de IDS-ul primit și listează fiecare piesă care nu îl îndeplinește.

## Pași

1. Deschideți sau desenați modelul.
2. Faceți clic pe {{ui:Verificare față de IDS…}} din grupul {{ui:Ieșire}} al barei de instrumente.
3. Faceți clic pe {{ui:Încărcare fișier .ids…}} și alegeți fișierul. Nu se încarcă nimic.
4. Citiți rezultatul: fiecare specificație cu {{ui:Trece}} sau {{ui:Eșuează}} și pentru câte elemente se aplică.
5. Deschideți {{ui:Probleme}} ({{key:Ctrl+Shift+M}}) și faceți clic pe o eșuare: elementul, racordul, scara sau talpa din care provine este selectat, iar vederea se apropie de el.

## Ce ar trebui să vedeți

- Un avertisment pentru fiecare element exportat și cerință pe care o ratează, cu numele specificației, ce cere IDS-ul și ce are exportul.
- Raportul de verificare (în Probleme) începe cu IDS-ul: titlul, versiunea, autorul și numărătorile fiecărei specificații.

## De reținut

- IDS-ul este salvat în fișierul modelului, deci este verificat din nou când deschideți modelul. Încărcarea sau uitarea lui este un singur pas, care poate fi anulat.
- Fiecare modificare este verificată din nou puțin mai târziu; pe un model mare, verificarea așteaptă ceva mai mult între rulări.
- GlobalIds din export provin din numele modelului și din numerele pieselor din DetailCraft, deci rămân aceleași de la o verificare la alta. Redenumirea modelului dă fiecărui element GlobalIds noi.
- Numerele sunt comparate în unități SI (exportul este în milimetri; lungimile sunt convertite mai întâi în metri).
- Șabloanele din IDS sunt citite ca valoarea întreagă. Un `^` la început și un `$` la sfârșit sunt luate și ele drept „valoarea întreagă”, cum înțeleg de obicei majoritatea fișierelor IDS.

## Urmează

- [Exportul IFC](topic:ifc-export)
