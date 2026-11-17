---
title: Îmbinări în gerunj
summary: Uniți două bare cu profil I care se întâlnesc sub un unghi: ambele capete tăiate în planul care înjumătățește unghiul, cu plăci de capăt, șuruburi și rigidizări, dacă doriți.
keywords: gerunj, mitră, îmbinare în gerunj, nod, consolă, cadru portal, coamă, colț, tăiere sub unghi, tăiere oblică, placă de capăt, placă de capăt înșurubată, rigidizare, îmbinare
from: cd8380d4
---

Un gerunj unește două bare cu profil I ale căror capete se întâlnesc sub un unghi, cum ar fi colțul unui cadru portal, o coamă sau două grinzi care fac un colț în plan. DetailCraft taie ambele capete în planul care înjumătățește unghiul dintre ele, astfel încât cele două fețe tăiate se potrivesc. Dacă doriți, adaugă o placă de capăt la fiecare capăt tăiat, înșurubează cele două plăci între ele și pune o pereche de rigidizări de inimă în fiecare bară.

## Unde funcționează

- Două **profile I** (IPE, HEA, HEB, W și similare) ale căror **capete se întâlnesc în același nod**. Oricare bară poate fi desenată în oricare sens.
- Unghiul dintre bare trebuie să fie de cel puțin 15°. Barele aliniate sunt refuzate: folosiți o [îmbinare de continuitate](topic:splices).
- Tăierea simplă (fără plăci) funcționează oricum s-ar întâlni barele. **Plăcile de capăt** cer ca cele două bare să se întâlnească în planul inimilor lor, ca într-un nod de cadru portal sau o coamă. Două grinzi care fac un colț în plan se întâlnesc în planul tălpilor, deci primesc doar tăierea simplă.
- Barele de dimensiuni diferite sunt îmbinate, dar cu avertisment: fețele lor tăiate nu se potrivesc.

## Adăugarea unui gerunj

1. Selectați cele două bare: faceți clic pe una, apoi {{key:Shift}}+clic pe cealaltă.
2. Alegeți {{ui:Gerunj}} din meniul {{ui:Mai multe}} al grupului {{ui:Îmbinare}}. Se deschide caseta de dialog Gerunj.
3. Setați câmpurile numerotate. Desenul de lângă ele se face din valorile introduse, pe măsură ce le scrieți, iar cercurile numerotate arată ce setează fiecare câmp.
4. Alegeți {{ui:Adăugare mitră}}. Dacă ați selectat mai mult de două bare, fiecare îmbinare liberă dintre ele primește același gerunj.

Pentru a schimba mai târziu un gerunj, selectați-l (faceți clic pe una dintre plăcile lui) și alegeți {{ui:Casetă de dialog pentru gerunj, cu previzualizare}} din panoul din dreapta sau modificați setările direct acolo. O tăiere simplă nu are plăci pe care să faceți clic: selectați cele două bare și alegeți din nou {{ui:Gerunj}}, iar caseta de dialog se deschide pe acel gerunj. {{ui:Aplicare la similare (n)}} îl copiază pe fiecare îmbinare liberă dintre bare cu aceleași două profile, la același unghi.

## Câmpurile numerotate (mm)

| Nr. | Setare | Implicit | Ce face |
|---|---|---|---|
| 1 | Spațiu între plăci (sau capetele tăiate) | 0 | Spațiu liber în îmbinare. Fiecare parte păstrează jumătate din el |
| 2 | Plăci de capăt, grosimea plăcii | pornit, 20 | O placă de capăt sudată pe tot conturul fiecărui capăt tăiat. Debifați pentru o tăiere simplă |
| 3 | Rânduri de șuruburi, pas între rânduri, gabarit, rând exterior | 4, 0, 0, oprit | Pasul 0 împarte rândurile uniform între tălpi. Gabaritul 0 = jumătate din lățimea plăcii, cel puțin 2.4 × gaura. Rândul exterior intră în prelungirea plăcii dincolo de talpa exterioară |
| 4 | Placă dincolo de talpa exterioară | 0 | Cât ajung plăcile dincolo de talpa exterioară, de-a lungul tăieturii |
| 5 | Placă dincolo de talpa interioară | 0 | La fel, pe interior |
| 6 | Rigidizări de inimă, distanța dincolo de tăiere | oprit, 50 | O pereche în fiecare bară, pe ambele părți ale inimii, perpendicular pe bară, la această distanță dincolo de capătul ei tăiat |
| 7 | Grosimea rigidizării | 10 | |

Sub {{ui:Șuruburi}}: diametrul șurubului, gaura, clasa și adaosul de lungime (20, 22, A325, 30), ca la plăcile de capăt. Sub {{ui:Plăci și suduri}}: lățimea plăcii (0 = lățimea tălpii), dimensiunea cordonului de sudură de colț (8) și materialul plăcii (A36).

## Ce obțineți

- **Tăieturile.** Capătul fiecărei bare este tăiat în planul ei. Lungimea ei în liste, desene și fișierele NC este **lungimea totală**, de la capătul drept până la cel mai îndepărtat punct al tăieturii.
- **Plăcile** aparțin barei lor: ansamblul fiecărei bare este bara, placa ei de capăt și rigidizările. Șuruburile sunt șuruburi de șantier ale îmbinării: lista de materiale le numără o singură dată, iar desenul de ansamblu al fiecărei bare le listează ca șuruburi libere.
- **Desenele** arată capetele înclinate și plăcile; desenul de execuție al unei bare cu gerunj notează unghiul fiecărei tăieturi față de perpendicular.
- **Fișierele NC** (DSTV) conțin unghiurile tăierilor oblice în antet, cum cere standardul, și contururi care urmează tăietura. Verificați-le în vizualizatorul NC al atelierului înainte de tăiere, ca pentru orice fișier NC.
- **IFC** taie extrudarea fiecărei bare după planul tăieturii, astfel încât alte programe să arate tăietura reală.
- **Mărci:** o bară cu gerunj este o piesă diferită de una cu tăiere dreaptă, de aceeași lungime. Două bare cu aceleași tăieturi au aceeași marcă, cum fac cele două căpriori ai unei coame.

## De reținut

- Gerunjul rămâne activ. Mutați sau redimensionați oricare bară și tăietura, plăcile și șuruburile urmează. Ștergeți una dintre bare, iar gerunjul dispare, iar capătul celeilalte bare redevine drept.
- Avertismentele folosesc aceleași minime EN 1993-1-8 ca celelalte îmbinări (distanța până la capăt și până la margine 1.2 × gaura, pasul 2.2 × gaura, gabaritul 2.4 × gaura), plus rândurile de șuruburi prea apropiate de o talpă, plăcile mai înguste decât tălpile și rigidizările fără loc.
- Valorile sunt valori de pornire, nu un proiect. DetailCraft nu verifică rezistența îmbinării și nu face consolă, gerunj sudat cu sudură cap la cap sau rigidizări în prelungirea tălpilor celeilalte bare.
