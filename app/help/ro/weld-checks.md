---
title: Verificarea sudurilor acolo unde se întâlnesc barele
summary: După verificarea de proiectare, testați sudurile de colț și cap la cap de-a lungul fiecărei bare acolo unde se întâlnește cu o altă bară sau cu un reazem, conform AISC 360-16 Capitolul J sau EN 1993-1-8, și vedeți ce grup de sudură este cel mai folosit și sub ce combinație. Un instrument de ajutor până când un inginer l-a verificat.
keywords: sudură, sudури, verificare sudură, cordon de sudură, sudură cap la cap, penetrare totală, AISC 360, EN 1993-1-8, grup de sudură, utilizare, capacitate, îmbinare, conexiune, structural, inginer
from: e8eebbe6
---

Blocul {{ui:Verificări sudură}} din fila {{ui:Analiză}}, sub {{ui:Verificări de proiectare}}, preia forțele ultimului cadru rezolvat și combinațiile de rezistență pe care le-ați creat și verifică sudura de-a lungul fiecărei bare la fiecare îmbinare: unde o bară se întâlnește cu o altă bară sau stă pe un reazem.

:::warning
Este un **instrument de ajutor până când un inginer l-a verificat**. Verifică o sudură realizată pe tot conturul secțiunii, ca un singur grup, din forțele de capăt proprii ale cadrului. Nu citește dimensiunea sau lungimea sudurilor desenate în desenele de execuție și nu verifică șuruburi, plăci, strivirea, forfecarea în bloc sau pârghia. Rezultatele sale nu reprezintă o ștampilă.
:::

## Rularea

1. Rezolvați cadrul în fila {{ui:Analiză}} și alegeți un {{ui:Cod de proiectare}} în {{ui:Verificări de proiectare}}, apoi apăsați {{ui:Creare combinații}} (verificarea sudurii are nevoie de aceleași combinații de rezistență).
2. În {{ui:Verificări sudură}}, stabiliți {{ui:Catet cordon (mm, 0 = peretele, cel mult 8)}}. 0 înseamnă că catetul urmează peretele cel mai subțire al secțiunii, până la 8 mm. Sub codul AISC, {{ui:Rezistența metalului de sudură F_EXX (MPa)}} este rezistența metalului de sudură (482.6 MPa corespunde unui electrod E70). Sub EN 1993, clasa oțelului dă rezistența metalului de sudură și factorul de corelație.
3. Apăsați {{ui:Verificare sudură}}.

Fiecare rând al tabelului este un grup de sudură (un capăt de îmbinare al unei bare). Cifrele: **utilizarea** verificării care guvernează, starea (trece sau eșuează) și ce verificare și ce clauză au guvernat sub ce combinație. Un grup pe care verificarea nu îl poate judeca spune de ce (fără clasă de oțel, fără factor de corelație pentru clasa din EN 1993-1-8 Tabelul 4.1, fără sudură pe acea secțiune) în loc să afișeze un număr.

Dacă modificați catetul sau metalul de sudură ori modificați modelul, tabelul se golește: era pentru valorile vechi. Apăsați din nou {{ui:Verificare sudură}}.

## Ce se verifică

- **ASCE 7 + AISC 360:** metalul de sudură de colț (unghiul sarcinii față de sudură se ia în calcul, J2.4), ruperea la forfecare a metalului de bază (J4.2) și sudurile cap la cap cu penetrare totală (Tabelul J2.5).
- **EN 1990 + EN 1993:** sudurile de colț prin metoda simplificată din EN 1993-1-8 4.5.3.3 și sudurile cap la cap din 4.7.1.
- Avertismente de detaliere față de catetul minim și maxim și lungimea minimă, cu valoarea cu care au fost comparate.

Grupul de sudură este tratat ca o secțiune liniară și este încărcat prin metoda vectorială elastică: fiecare parte a sudurii preia forța din forța axială a barei, din ambele forțe tăietoare, din torsiune și din ambele momente de încovoiere, adunate ca vectori.

## Ce nu se verifică

Sudurile cu penetrare parțială, sudurile de colț înclinate, sudurile prin găuri și fante, sudurile întrerupte, metoda centrului instantaneu, metoda direcțională EN, oboseala și forfecarea în bloc a metalului de bază nu sunt realizate. Unele constante ale standardelor au fost scrise din standarde și nu au fost încă comparate cu un exemplar tipărit; raportul arată de unde provine fiecare cifră ({{ui:Raport (PDF)}} primește tabelele de sudură după ce ați făcut verificarea). Vezi [Verificarea barelor din oțel](topic:design-checks) și [Încă nerealizat](topic:not-built-yet).
