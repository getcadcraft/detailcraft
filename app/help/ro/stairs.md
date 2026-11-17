---
title: Scări
summary: Plasați o scară dreaptă din oțel după înălțimea de urcare, adâncimea treptei și lățime: două limoane și plăci de treaptă, un ansamblu sudat.
keywords: scară, scări, limon, treaptă, contratreaptă, adâncime treaptă, nas de treaptă, rampă, scară din oțel, ibc 1011, blondel
from: 62fa3845
---

O scară dreaptă din oțel: două limoane (canale cu tălpile spre interior sau benzi plate pe muchie) și o placă de treaptă la fiecare pas, sudate între ele. DetailCraft calculează numărul de contratrepte din înălțimea de urcare, le verifică față de limitele codului de construcție și face scara un singur ansamblu de atelier.

## Plasarea unei scări

1. Alegeți {{ui:Scară}} din grupul {{ui:Plasare}}, sau apăsați {{key:S}}.
2. Setați scara din dreapta: **direcția urcării** (0° urcă pe +x, 90° pe +y), **înălțimea de urcare** (0 = până la următorul nivel), **adâncimea treptei**, **lățimea liberă** dintre limoane, **contratreapta cea mai înaltă admisă**, **limonul**, **grosimea plăcii de treaptă**, **nasul** și materialul.
3. Faceți clic pe o intersecție a grilei: acesta este piciorul primei contratrepte, pe axa centrală a scării.

Bara de stare arată câte contratrepte a făcut. Selectați scara (faceți clic pe un limon sau pe o treaptă) pentru a schimba oricare dintre setări, poziția sau etapa ei; proprietățile arată și contratrepte, trepte, lungimea de parcurs, înclinația și 2 × contratreaptă + adâncimea treptei.

## Ce calculează DetailCraft

- **Contratrepte.** Cât mai puține, astfel încât fiecare să fie la sau sub cea mai înaltă admisă: o înălțime de urcare de 3000 mm la cel mult 178 mm dă 17 contratrepte de 176.5 mm. Există o treaptă mai puțin decât contratrepte (ultimul etaj este ultimul pas).
- **Trepte.** O placă de adâncime pas + nas (280 + 25 = PL6x305 implicit) și lungă cât lățimea liberă, cu partea de sus la înălțimea fiecărei contratrepte, cu muchia din față (nasul) în fața liniei contratreptei.
- **Limoane.** La înclinația scării, de la locul unde se întâlnesc cu parterul până unde se întâlnesc cu etajul superior, chiar în afara lățimii libere, cu muchia de sus cu 50 mm deasupra liniei nasurilor. Tălpile unui canal sunt îndreptate spre scară; o bandă plată, precum PL12x250, stă pe muchie.
- **Sudurile.** Fiecare treaptă de ambele limoane. Treptele și limonul din dreapta sunt sudate de limonul din stânga, astfel că scara primește o singură marcă de ansamblu (ST1) și propriul desen de ansamblu; limoanele primesc mărci de piesă st…, treptele p….
- **Verificări.** Avertismente când o contratreaptă este în afara intervalului de 4 până la 7 in. (102 până la 178 mm) sau când adâncimea treptei este sub 11 in. (279 mm), limitele din IBC 2021 secțiunea 1011.5.2, când 2 × contratreaptă + adâncimea treptei este în afara intervalului 600 până la 650 mm (o regulă de confort uzuală) și când limonul este prea puțin adânc ca să susțină treptele. Un profil de limon necunoscut oprește construirea scării.

## De reținut

- Mutarea, rotirea, oglindirea, copierea, lipirea, ștergerea și etapele funcționează pe o scară ca pe un element. O rotire întoarce urcarea; o oglindire o trimite în sens invers.
- Limoanele se exportă în IFC ca IfcMember, iar treptele ca IfcPlate; ambele merg în fișierele NC și în lista de materiale. Verificarea conflictelor lasă piesele proprii ale scării neatinse (sunt sudate între ele).
- Această scară simplă este o singură rampă cu trepte din placă. Pentru paliere, balustrade cu balustri, trepte din tablă cutată sau din grătar, un set de reguli ales de dumneavoastră, o listă de debitare și desenele găurilor limoanelor, bifați {{ui:Folosiți generatorul de scări din oțel}} în instrumentul Scară (vezi Generatorul de scări din oțel).
- Limoanele sunt tăiate drept: tăieturile lor de capăt la planșee nu sunt făcute.
- DetailCraft nu proiectează scara: limoanele și treptele nu sunt verificate la rezistență sau la săgeată.
