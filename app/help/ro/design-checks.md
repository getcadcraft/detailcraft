---
title: Verificarea barelor din oțel după un cod de proiectare
summary: Creați combinații de încărcări din ASCE 7 sau EN 1990, verificați fiecare profil I din oțel după AISC 360 sau EN 1993-1-1 și vedeți cât din capacitate folosește fiecare bară. Un ajutor până când un inginer îl revizuiește.
keywords: proiectare, verificare de proiectare, proiectare din oțel, utilizare, capacitate, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocod, combinații de încărcări, LRFD, Anexa Națională, flambaj, flambaj lateral-torsional, forfecare, încovoiere, interacțiune, structural, studenți, inginer
from: 66b6d545
---

După ce rulați analiza, blocul {{ui:Verificări de proiectare}} din fila {{ui:Analiză}} transformă forțele sale într-un verdict pentru fiecare bară de oțel: cât din capacitatea sa folosește cea mai nefavorabilă combinație.

:::warning
Este un **ajutor până când un inginer l-a revizuit**. Folosește numai forțele de ordinul întâi (fără efecte de ordinul al doilea), nu verifică torsiunea, piesele zvelte (clasa 4), profilele sudate și nici conexiunile, iar ce nu poate verifica lasă deoparte și spune asta. Nu înlocuiește verificarea unui inginer, iar rezultatele sale nu sunt o ștampilă.
:::

## Alegerea unui cod

{{ui:Cod de proiectare}} este salvat cu modelul; alegeți una din două familii:

- **ASCE 7 + AISC 360** (SUA, LRFD): combinațiile de încărcări din ASCE 7-16 §2.3.1 și verificările barelor din ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocod): combinațiile din EN 1990 (ec. 6.10, sau 6.10a și 6.10b) și verificările barelor din EN 1993-1-1.

Apoi alegeți {{ui:Clasa oțelului}} (A992, A36 și altele; sau S235 până la S450, cu limita inferioară de curgere peste 40 mm).

## Crearea combinațiilor

Dați fiecărui caz de încărcare **tipul** său (permanentă, utilă, utilă pe acoperiș, zăpadă, vânt, seismică) în lista de cazuri, apoi apăsați {{ui:Creare combinații}}. DetailCraft scrie combinațiile codului ca combinații ale cazurilor dumneavoastră: fiecare combinație de rezistență pe care codul o listează pentru tipurile pe care le aveți și combinațiile de exploatare pentru deformație. Cele scrise chiar de dumneavoastră rămân; ele nu sunt verificate față de cod. Un caz de tipul {{ui:Altele}} nu este combinat.

Pentru Eurocod, factorii sunt **valorile recomandate** din EN 1990 Anexa A1 (γG 1,35, γQ 1,5, valorile ψ pentru încărcările utile, zăpadă și vânt) și din EN 1993-1-1 (γM0 = γM1 = 1,0). Anexa Națională a țării dumneavoastră modifică unii dintre ei: deschideți {{ui:Valorile Anexei Naționale}}, introduceți-le pe ale dumneavoastră și refaceți combinațiile. Ele sunt salvate în model.

## Verificarea barelor

Apăsați {{ui:Verificare bare}}. Pentru fiecare profil I din oțel, tabelul arată **utilizarea** sa (cerere față de capacitate: 100 % este limita), dacă trece, ce verificare guvernează și ce combinație. Barele sunt colorate pe model: albastru puțin folosite, verde în jur de jumătate, ocru aproape de limită, roșu peste ea, gri neverificate. Faceți clic pe numele unei bare ca s-o selectați.

Verificările, cu articolul pe care îl urmează fiecare (sunt listate în raport):

- întindere, compresiune cu flambaj de încovoiere și de torsiune, încovoiere pe ambele axe cu flambaj lateral-torsional, forfecare și încovoiere cu forță axială;
- deformația combinațiilor de exploatare față de {{ui:Limită de deformație}} pe care o setați (L/360 la început; o valoare a proiectului, nu o valoare din cod).

**Lungimi.** Lungimea rezemată lateral este o parte din fiecare porțiune analizată (1 = nerezemată); rezemările sunt considerate egal distanțate, pornind de la început. Factorii K înmulțesc lungimea pentru flambaj. O îmbinare în care aterizează o altă bară împarte o bară, iar fiecare porțiune este verificată pe lungimea ei, ca rezemată acolo.

## Ce nu se verifică

O bară apare **nu se verifică**, cu motivul, în loc de o cifră, când secțiunea ei nu este un profil I pe care verificările îl cunosc (tuburi, cornier, profile U), când este o formă personalizată (sudată) sau când o parte este zveltă (AISC) sau de clasa 4 (Eurocod) la încovoiere. O parte zveltă la compresiune scoate verificările de compresiune, iar bara apare ca *trece, verificată parțial*. Tot nerealizat: efectele de ordinul al doilea, torsiunea, flambajul la forfecare împreună cu încovoierea, conexiunile, oboseala, incendiul și detalierea seismică. Elementele din beton și încărcările seismice au [propriile verificări](topic:concrete-and-seismic). Vezi [Încă nerealizat](topic:not-built-yet).

## Raportul

{{ui:Raport (PDF)}} și {{ui:Raport (CSV)}} primesc tabelele de proiectare după ce ați făcut verificarea: edițiile codurilor, setările și valorile Anexei Naționale, utilizarea pe bară, fiecare articol folosit și, pentru fiecare bară, cererea, capacitatea și utilizarea fiecărei verificări din combinația sa determinantă.
