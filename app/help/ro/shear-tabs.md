---
title: Plăcuțe de forfecare
summary: Prindeți inima grinzii cu șuruburi de o placă sudată în atelier de talpa sau inima stâlpului, inclusiv acolo unde grinda întâlnește stâlpul oblic în plan sau înclinat.
keywords: plăcuță de forfecare, placă simplă, placă de legătură, îmbinare simplă, îmbinare pe inimă, oblic, înclinat, grindă înclinată, înșurubat, conectare
from: 18afc8ab
---

O plăcuță de forfecare (placă simplă, placă de legătură) este o placă sudată de stâlp în atelier; pe șantier, inima grinzii se înșurubează de ea, cu un rând vertical de șuruburi. DetailCraft plasează plăcuța, taie grinda înapoi față de stâlp, găurește plăcuța și inima grinzii, adaugă șuruburile și cordonul de sudură și avertizează despre distanțele până la margine și despre potrivire.

## Unde funcționează

- O grindă (profil I sau U) al cărei capăt se află pe linia unui stâlp I **vertical**, întâlnind **talpa** sau **inima** lui.
- **Perpendiculară, oblică în plan sau înclinată**: plăcuța urmează inima grinzii, iar grinda este tăiată înapoi astfel încât colțul cel mai apropiat să păstreze spațiul față de stâlp. O grindă care urcă sau coboară peste 60° este refuzată.

## Adăugarea plăcuțelor de forfecare

1. Selectați grinda.
2. În grupul {{ui:Îmbinare}}, deschideți {{ui:Mai multe}} și alegeți {{ui:Plăcuțe de forfecare}} (sau alegeți {{ui:Adăugare plăcuțe de forfecare}} din panoul {{ui:Proprietăți}}).
3. Fiecare capăt liber al grinzii care întâlnește un stâlp primește o plăcuță. Fiecare capăt de grindă ia o singură îmbinare: o plăcuță de forfecare sau o placă de capăt.

Selectați o plăcuță (faceți clic pe ea sau pe un șurub) ca s-o vedeți și s-o modificați. {{ui:Aplicare la similare}} copiază plăcuța, ca plăcuță de forfecare, în fiecare îmbinare asemănătoare care nu are încă o îmbinare.

## Setări (mm)

| Setare | Valoare inițială | Semnificație |
|---|---|---|
| {{ui:Grosime placă (mm)}} | 10 | Grosimea plăcuței |
| {{ui:Lățime placă (mm)}} | 115 | Cât iese plăcuța din fața stâlpului, de-a lungul grinzii |
| Diametru șurub, diametru gaură, clasă șurub | 20, 22, A325 | Ca la plăcile de capăt |
| Rânduri de șuruburi, pas între rânduri | 3, 75 | Șuruburile din rândul vertical |
| Distanța până la margine (șuruburile de sus și de jos) | 38 | De la șuruburile de sus și de jos până la capetele plăcuței; plăcuța are adâncimea rânduri × pas + 2 × această valoare |
| Grupul de șuruburi ridicat cu | 0 | 0 centrează șuruburile pe adâncimea grinzii |
| Spațiu liber față de stâlp | 13 | Spațiul liber dintre stâlp și colțul cel mai apropiat al grinzii |
| Linia șuruburilor față de fața stâlpului | 65 | De-a lungul grinzii, de la fața stâlpului până la șuruburi |
| Adaos la lungimea șurubului | 30 | Adăugat la strângere (plăcuță + inima grinzii), rotunjit în sus la 5 mm |
| Dimensiune cordon de colț | 6 | Pe ambele părți ale plăcuței, până la stâlp |

## De știut

- Plăcuța face parte din ansamblul stâlpului (sudată în atelier); ansamblul grinzii are doar găurile.
- O grindă oblică sau înclinată este tăiată mai în spate decât una perpendiculară, ca să-și păstreze colțul cel mai apropiat spațiul. DetailCraft taie grinzile perpendicular: fabricantul taie capătul potrivit. Muchia plăcuței la stâlp este desenată tot perpendicular.
- DetailCraft nu verifică rezistența. Avertismentele folosesc valorile minime din EN 1993-1-8 Tabelul 3.3 pentru distanțele până la margine și pas, și spun când plăcuța este mai adâncă decât inima grinzii între racordările ei sau când șuruburile sunt prea aproape de capătul tăiat al grinzii.
- [Verificarea conflictelor](topic:clash-check) lasă afară o plăcuță și membrii pe care îi leagă: ei trebuie să se întâlnească.
