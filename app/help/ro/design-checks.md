---
title: Verificarea barelor din oțel conform unui cod de proiectare
summary: Creați combinații de încărcări conform ASCE 7 sau EN 1990, verificați fiecare profil I din oțel conform AISC 360 sau EN 1993-1-1 și vedeți ce parte din capacitate folosește fiecare bară. Un instrument de ajutor până când un inginer l-a verificat.
keywords: proiectare, verificare de proiectare, proiectare din oțel, utilizare, capacitate, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocod, combinații de încărcări, LRFD, Anexa Națională, flambaj, flambaj lateral-torsional, forfecare, încovoiere, interacțiune, structural, studenți, inginer
from: 15685c4e
---

După ce rulați analiza, blocul {{ui:Verificări de proiectare}} din fila {{ui:Analiză}} transformă forțele sale într-un verdict pentru fiecare bară din oțel: cât din capacitatea sa folosește cea mai nefavorabilă combinație.

:::warning
Este un **instrument de ajutor până când un inginer l-a verificat**. Folosește doar forțe de ordinul întâi (fără efecte de ordinul doi), nu verifică torsiunea, nici piesele zvelte (clasa 4), nici profilele sudate și nici conexiunile, iar ce nu poate verifica lasă deoparte și spune acest lucru. Nu înlocuiește verificarea unui inginer, iar rezultatele sale nu reprezintă o ștampilă.
:::

## Alegerea unui cod

{{ui:Cod de proiectare}} se salvează împreună cu modelul; alegeți una dintre cele două familii:

- **ASCE 7 + AISC 360** (SUA, LRFD): combinațiile de încărcări din ASCE 7-16 §2.3.1 și verificările barelor din ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocod): combinațiile din EN 1990 (ecuația 6.10, sau 6.10a și 6.10b) și verificările barelor din EN 1993-1-1.

Apoi alegeți {{ui:Clasa oțelului}} (A992, A36 și altele; sau S235 până la S450, cu limita de curgere inferioară peste 40 mm).

## Crearea combinațiilor

Atribuiți fiecărui caz de încărcare **tipul** său (permanentă, utilă, utilă pe acoperiș, zăpadă, vânt, seismică) în lista de cazuri, apoi apăsați {{ui:Creare combinații}}. DetailCraft scrie combinațiile codului ca combinații ale cazurilor dumneavoastră: fiecare combinație de rezistență pe care codul o listează pentru tipurile existente și combinații de exploatare pentru deformare. Combinațiile introduse manual rămân; ele nu sunt verificate față de cod. Un caz de tipul {{ui:Altele}} nu este combinat.

Pentru Eurocod, factorii sunt **valorile recomandate** din EN 1990 Anexa A1 (γG 1.35, γQ 1.5, valorile ψ ale încărcărilor utile, de zăpadă și de vânt) și din EN 1993-1-1 (γM0 = γM1 = 1.0). Anexa Națională a țării modifică unii dintre acești factori: deschideți {{ui:Valorile Anexei Naționale}}, introduceți valorile țării și refaceți combinațiile. Ele sunt salvate în model.

## Verificarea barelor

Apăsați {{ui:Verificare bare}}. Pentru fiecare profil I din oțel, tabelul arată **utilizarea** sa (solicitarea față de capacitate: 100 % este limita), dacă trece, ce verificare guvernează și ce combinație. Barele sunt colorate pe model: albastru dacă sunt puțin folosite, verde la aproximativ jumătate, ocru aproape de limită, roșu peste limită, gri dacă nu sunt verificate. Faceți clic pe numele unei bare pentru a o selecta.

Verificările, cu clauza pe care o urmează fiecare (sunt listate în raport):

- întindere, compresiune cu flambaj de încovoiere și de torsiune, încovoiere în jurul ambelor axe cu flambaj lateral-torsional, forfecare și încovoiere cu forță axială;
- deformarea combinațiilor de exploatare față de {{ui:Limită de deformare}} stabilită de dumneavoastră (L/360 la început; o valoare a proiectului, nu a codului).

**Lungimile.** Lungimea reazemată lateral este o fracțiune din fiecare porțiune analizată (1 = nereazemată); reazemele sunt considerate echidistante de la început. Factorii K înmulțesc lungimea pentru flambaj. O îmbinare în care se sprijină altă bară împarte o bară, iar fiecare porțiune este verificată pe propria lungime, ca fiind reazemată acolo.

## Ce nu este verificat

O bară apare **neverificată**, cu motivul, în locul unui număr atunci când secțiunea sa nu este un profil cunoscut de verificări (corniere, canale; tuburile dreptunghiulare și rotunde sunt verificate când pereții lor sunt compacți), când este un profil personalizat (sudat) sau când o parte este zveltă (AISC) ori de clasa 4 (Eurocod) la încovoiere. O parte zveltă la compresiune scoate verificările de compresiune, iar bara apare ca *trece, verificată parțial*. Sudurile din îmbinări au [propria verificare](topic:weld-checks). De asemenea, încă nerealizate sunt: efectele de ordinul doi, torsiunea, flambajul la forfecare împreună cu încovoierea, conexiunile cu șuruburi, oboseala, incendiul și detalierea seismică. Elementele din beton și încărcările seismice au [propriile verificări](topic:concrete-and-seismic). Vezi [Încă nerealizat](topic:not-built-yet).

## Raportul

{{ui:Raport (PDF)}} și {{ui:Raport (CSV)}} primesc tabelele de proiectare după ce ați făcut verificarea: edițiile codurilor, setările și valorile Anexei Naționale, utilizarea pe fiecare bară, fiecare clauză folosită și, pentru fiecare bară, solicitarea, capacitatea și utilizarea fiecărei verificări din combinația care guvernează.
