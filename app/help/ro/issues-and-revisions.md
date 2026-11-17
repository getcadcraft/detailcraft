---
title: Emiteri, revizii și jurnalul modificărilor desenelor
summary: Păstrați un singur istoric al emiterilor împreună cu modelul arhitectului: citiți emiterile, înregistrați instrucțiunile de șantier, desenele de execuție și modelele legate față de o emitere și citiți jurnalul modificărilor desenelor.
keywords: emitere, emiteri, revizie, revizii, jurnal modificări, jurnal modificări desene, registru desene, instrucțiune de șantier, desen de execuție, model legat, licitație, execuție, istoric emiteri, desene de execuție, fabricație
from: 4b9a1b7b
---

## Ce veți face

Lucrați cu același istoric al emiterilor ca restul echipei. Vedeți ce foi au plecat la ce revizie și țineți evidența a ceea ce se întâmplă pe șantier față de emiterea căreia îi aparține.

## Pași

1. Deschideți **Emiteri și revizii**.
2. Alegeți **Citire istoric emiteri** și selectați fișierul `.issues.json` salvat din BimCraft sau dintr-o altă aplicație. Emiterile și înregistrările lui se adaugă la cele existente. Nimic nu este înlocuit.
3. Alegeți **Adăugare înregistrare** pentru o instrucțiune de șantier, un desen de execuție, un set de adnotări, un model legat sau o notă. Selectați emiterea de care ține și starea acesteia. Un fișier ales se înregistrează după nume, dimensiune și SHA-256; fișierul rămâne unde se află.
4. **Jurnal modificări desene** arată câte un rând pentru fiecare foaie și câte o coloană pentru fiecare emitere. O revizie între paranteze a fost emisă din nou fără modificări.
5. **Descărcare jurnal (CSV)** salvează emiterile, tabelul foilor și înregistrările. **Salvare istoric emiteri** scrie un fișier pe care îl citesc celelalte aplicații.

## De reținut

- Foile se emit în continuare din {{ui:Desene}}, foaie cu foaie. Aceste emiteri apar aici: foile emise în aceeași zi, cu aceeași notă, formează o singură emitere.
- Înregistrările și emiterile citite se salvează în fișierul modelului. Fiecare modificare poate fi anulată dintr-un singur pas.
- Citirea aceluiași fișier de două ori nu adaugă nimic dublat. Când două exemplare conțin aceeași înregistrare, se păstrează cea mai nouă.
