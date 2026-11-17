---
title: Stocul furnizorului și termenele de livrare
summary: Verificați barele de stoc pe care le cumpără lista de debitare față de lista de stoc a unui furnizor: este suficient și cât durează așteptarea?
keywords: furnizor, stoc, termen de livrare, depozit de oțel, laminor, disponibilitate, restanță, bare, aprovizionare, furnizare
from: 1373f5a3
---

Fila {{ui:Furnizor}} caută fiecare secțiune pe care o cumpără {{ui:Listă de debitare}} în lista de stoc a unui furnizor. Fișierul rămâne în model; nu se trimite nimic nicăieri.

## Adăugarea fișierului furnizorului

Apăsați {{ui:Adăugare fișier de la furnizor}} și alegeți un CSV de la furnizor (separat prin virgulă, punct și virgulă sau tabulator). Are nevoie de o coloană pentru element sau secțiune (Item, Name, Description, Section, SKU) și una pentru stoc (In stock, Quantity, On hand) sau pentru termenul de livrare. Unitatea (each, metres, kilograms, tonnes), prețul, furnizorul și o dată de reaprovizionare sunt citite când există o coloană pentru ele. Sunt înțelese și cuvinte precum "Out of stock", "In stock", "2-3 weeks", "backorder". Pot fi păstrate până la cinci fișiere; adăugarea unui fișier cu același nume îl înlocuiește.

## Ce vedeți

Pentru fiecare secțiune pe care o cumpără lista de debitare, tabelul arată ce necesită modelul, ce este în stoc, termenul de livrare, furnizorul și un rezultat:

- **Acoperit:** suficient în stoc.
- **Lipsă:** stocul este sub necesar. Dacă stocul este sub necesar și ați setat o așteptare maximă, termenul de livrare arată cât durează restul.
- **Prea târziu:** nu există cifră de stoc, iar termenul de livrare este mai lung decât așteptarea acceptată.
- **Fără cifră de stoc:** fișierul nu o spune.
- **Altă unitate:** furnizorul listează secțiunea într-o unitate pe care modelul nu o poate da.

Ce necesită modelul este dat în bare (din lista de debitare dispusă, cu lungimile dvs. de stoc), în metri de bară cumpărată și în kilograme (greutatea secțiunii pe metru), iar unitatea fișierului este folosită. O secțiune se potrivește după nume ("W16 X 26" și "w16x26" sunt la fel). Secțiunile care nu sunt în fișier sunt listate.

Lipsurile și secțiunile întârziate sunt în panoul {{ui:Probleme}}. Nimic de aici nu comandă nimic.

## Limite

Cifrele de stoc și termenele de livrare sunt ale fișierului, de la data la care a fost făcut. Plăcile nu sunt dispuse, deci nu sunt căutate. Fișierul este doar citit: orice instrucțiune din el este doar text.
