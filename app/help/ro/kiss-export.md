---
title: Exportați un fișier KISS pentru programe de fabricație
summary: Trimiteți lista de materiale către un program de gestiune a fabricației (MIS) ca fișier KISS 1.1: ansambluri, piese, faze ca secvențe, găuri, decupări și suduri.
keywords: kiss, kss, mis, gestiunea fabricației, control producție, deviz, listă de materiale, bom, export, fabtrol, secvență
from: 30cf3951
---

În grupul {{ui:Ieșire}}, deschideți {{ui:Mai multe}} și alegeți {{ui:Fișier KISS pentru programe de fabricație}}. DetailCraft descarcă `<name>.kss`, un fișier KISS („Keep It Simple, Steel”, versiunea 1.1), formatul text simplu din care majoritatea programelor de gestiune a fabricației importă o listă de materiale.

## Ce conține

- Antetul: un număr de lucrare (primele opt litere și cifre din numele modelului), numele modelului, data și ora și dacă dimensiunile sunt metrice.
- Pentru fiecare marcă de ansamblu: piesa principală (cantitate = câte sunt în ansamblu), o linie de desen (A-B1 și așa mai departe, numărul desenului de ansamblu), o linie de ansamblu (nume, tip, greutate, lungime totală, adâncime și lățime), câte o linie de secvență pentru fiecare [fază](topic:phases) în care se află ansamblul, și linii de manoperă: găuri (câte, diametru, grosime străpunsă), decupări și suduri.
- Apoi fiecare piesă atașată, cu cantitatea **totală** (pe ansamblu × ansambluri), cum cere standardul.
- Șuruburi libere și tije de ancorare pe desenul BOLTS, ansamblul FIELD.
- Fiecare linie indică tipul (W, C, L, HSS, PL sau MI pentru un profil personalizat), dimensiunea, clasa, lungimea de tăiere în milimetri, numele piesei și greutatea.

## Imperial sau metric

În [Setările DetailCraft](topic:settings), **Dimensiuni fișier KISS** alege:

- **Automat** (implicit): imperial când toate barele sunt profile AISC, metric în celelalte cazuri.
- **Imperial**: profile după denumirea lor AISC (W 16X26, HSS 4X4X.250); plăci și șuruburi, pe care DetailCraft le ține în milimetri, până la cel mai apropiat 1/16 in; greutăți în livre.
- **Metric**: profile europene după denumire (IPE300), plăci ca grosime X lățime în milimetri; greutăți în kilograme.

Lungimile sunt mereu în milimetri, cu două zecimale, indiferent de setare: standardul KISS o cere, iar programul care primește fișierul face conversia.

:::note
Clasele sunt scurtate la cele opt caractere ale standardului: A572 Gr 50 devine A572-50. Virgulele din nume devin spații (formatul nu are ghilimele). Verificați un import în programul folosit înainte de a vă baza pe el: fișierele KISS ale DetailCraft sunt verificate aici după standard, nu încă într-un program de fabricație.
:::
