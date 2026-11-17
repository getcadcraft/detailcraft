---
title: Îmbinări de continuitate
summary: Uniți cap la cap două piese ale unei grinzi sau ale unui tronson de stâlp, cu plăci de acoperire înșurubate la tălpi și la inimă.
keywords: îmbinare, îmbinare grindă, îmbinare stâlp, placă de acoperire, placă de îmbinare, placă de talpă, placă de inimă, îmbinare cu șuruburi, joncțiune, tronson, conectare
from: 97d141c2
---

O îmbinare cu șuruburi unește cap la cap două piese ale aceluiași profil I: o placă de acoperire în afara fiecărei tălpi și câte o placă pe fiecare parte a inimii, înșurubate prin ambele piese. DetailCraft taie piesele înapoi până la interval, plasează cele patru plăci, găurește plăcile și ambele piese, adaugă șuruburile și avertizează despre distanțele până la margine, pasuri și potrivire.

## Unde funcționează

- Două grinzi, sau două tronsoane de stâlp, cu **același profil I**, care se întâlnesc **cap la cap, în linie**: capetele la cel mult 50 mm distanță, piesele paralele și pe aceeași linie (în limita de 1 mm). Oricare piesă poate fi desenată în oricare direcție.
- Funcționează piese orizontale, înclinate sau verticale.
- Două piese cu înălțime sau lățime de talpă diferite sunt refuzate, la fel ca profilele U, cornierele și țevile.

## Adăugarea îmbinărilor

1. Desenați cele două piese astfel încât să se întâlnească cap la cap. Pentru a împărți un element deja desenat, desenați-l din nou ca două piese.
2. Selectați una (sau ambele) și alegeți {{ui:Îmbinare de continuitate}} în meniul {{ui:Mai multe}} din grupul {{ui:Îmbinare}}.
3. Fiecare îmbinare liberă a pieselor selectate cu o altă piesă de același profil primește o îmbinare de continuitate. Bara de stare arată câte.

Selectați îmbinarea (faceți clic pe una dintre plăci) ca să îi schimbați setările în panoul din dreapta. {{ui:Aplicare la similare (n)}} copiază îmbinarea în fiecare altă îmbinare liberă dintre piese de același profil.

## Setări (mm)

| Setare | Implicit | Ce face |
|---|---|---|
| Interval între capete | 10 | Fiecare piesă este tăiată înapoi cu jumătate din interval |
| Diametrul șurubului, gaura, clasa, adaosul de lungime | 20, 22, A325, 30 | Ca la plăcile de capăt |
| Grosimea plăcii de talpă | 12 | Placa are lățimea tălpii |
| Rânduri de șuruburi la talpă (pe fiecare parte) | 3 | Rânduri pe lățimea tălpii, pe fiecare parte a îmbinării |
| Pasul șuruburilor la talpă | 75 | De-a lungul piesei |
| Gabaritul șuruburilor la talpă | 0 | Între cele două linii de șuruburi; 0 = lățimea tălpii minus 80 |
| Distanța de capăt la talpă | 40 | De la capătul piesei până la primul șurub și de la ultimul șurub până la capătul plăcii |
| Grosimea plăcii de inimă | 8 | Una de fiecare parte a inimii |
| Rânduri de șuruburi la inimă | 3 | În sus pe inimă, centrate |
| Coloane de șuruburi la inimă (pe fiecare parte) | 2 | De-a lungul piesei, pe fiecare parte a îmbinării |
| Pasul șuruburilor la inimă, în sus pe inimă / de-a lungul piesei | 75, 75 | |
| Distanța de capăt la inimă | 40 | Ca la tălpi |
| Înălțimea plăcii de inimă | 0 | 0 = inima liberă dintre racordări, minus 10 sus și jos |
| Material placă | A36 | Text |

Lungimile plăcilor rezultă din șuruburi: placa de talpă = interval + 2 × (2 × distanța de capăt + (rânduri − 1) × pas); plăcile de inimă la fel, cu coloanele lor. Cu valorile implicite, plăcile de talpă au 470 mm lungime.

## De reținut

- Plăcile aparțin **primei piese desenate** dintre cele două (în proprietățile ei se numește prima piesă): apar pe desenul ei de ansamblu și pleacă o dată cu ea, înșurubate, nu sudate. Desenul de ansamblu al celeilalte piese arată doar găurile ei.
- Șuruburile de la talpă prind talpa și placa ei; șuruburile de la inimă prind inima și ambele plăci de inimă. Lungimile șuruburilor sunt listate separat în proprietăți.
- Avertismentele folosesc aceleași minime EN 1993-1-8 ca celelalte conexiuni (distanța de capăt și de margine 1.2 × gaură, pasul 2.2 × gaură pe lungime și 2.4 × gaură pe transversal), plus o placă de inimă mai adâncă decât inima liberă și șuruburi de talpă prea apropiate de inimă pentru racordare.
- DetailCraft nu dimensionează îmbinarea (fără verificare de rezistență) și nu face plăci de compensare pentru piese cu grosimi diferite.
- Copierea ambelor piese copiază și îmbinarea lor; ștergerea oricăreia dintre piese o șterge și pe ea.
