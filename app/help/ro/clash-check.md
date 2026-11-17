---
title: Verificarea conflictelor
summary: Găsiți barele, plăcile și tălpile care pătrund unele în altele, lăsând afară piesele pe care o îmbinare vrea să le îmbine, și mergeți la fiecare conflict.
keywords: conflict, verificare conflicte, coliziune, interferență, suprapunere, intersectare, conflict dur, coordonare, verificare model
from: 04d72d3b
---

Deschideți fila {{ui:Conflicte}} sub vedere și alegeți {{ui:Verificare acum}}. DetailCraft analizează fiecare pereche de piese din fazele afișate: oțel în oțel și oțel în talpă. Fila listează fiecare conflict, cel mai adânc primul, cu:

- cele două piese, prin marca piesei (sau marca tălpii) și profil;
- **Pătrundere (mm)**: cât de adânc un punct al uneia este în cealaltă, până la fața cea mai apropiată;
- **Aproape de**: intersecția grilei și nivelul la care se află, sau coordonatele sale;
- {{ui:Afișare}}: selectează ambele piese și aduce locul în mijlocul vederii.

Titlul filei arată câte conflicte a găsit ultima verificare. Verificarea nu rulează de la sine: după ce modificați modelul, lista o spune, iar {{ui:Verificare acum}} o rulează din nou.

## Ce nu este un conflict

- Piesele care doar se ating: o placă lipită de o talpă, o placă de bază pe talpa ei, două elemente cap la cap. **Toleranța (mm)** stabilește cât de mult pot pătrunde două piese una în alta înainte să conteze (1 mm la început; până la 50).
- Piesele pe care le leagă o îmbinare: o placă de capăt cu grinda sa și cu talpa stâlpului de care este șurubată, grinda și stâlpul acelui nod, o placă de bază cu stâlpul său, plăcile unei îmbinări de continuitate cu ambele piese, o contravântuire cu guseul ei (fanta unei țevi nu este tăiată în model). Îmbinarea vrea ca ele să se atingă.
- Dintele de forfecare al unei plăci de bază, în talpa de sub el (stă într-un locaș de mortar).
- Șuruburile și tijele de ancorare (trec prin găuri) și armătura.
- Piesele din faze ascunse. Vezi [Faze](topic:phases).

O grindă sau o contravântuire care intră într-un stâlp fără o îmbinare între ele **este** un conflict: nodul încă are nevoie de un racord. Contravântuirea din cadrul-exemplu arată asta: nu are guseu. Selectați-o și alegeți {{ui:Guseu}} ([Guseele contravântuirilor](topic:brace-gussets)) și conflictele ei dispar.

## De reținut

- Pătrunderea măsoară adâncimea în material, deci o bară care intră în inima subțire sau în talpa unui stâlp arată doar câțiva milimetri, chiar dacă intră mult.
- Piesele sunt verificate așa cum sunt tăiate: decupările și tăierea înapoi a unei grinzi la plăcile ei de capăt sunt luate în calcul. Găurile nu.
