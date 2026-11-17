---
title: Etape
summary: Împărțiți modelul în etape (secvențe de montaj sau livrări), afișați sau ascundeți fiecare etapă, puneți piese într-o etapă și numerotați mărcile pe etapă.
keywords: etapă, etape, panou de etape, secvență de montaj, livrare, lot, secvență, ascundere etapă, afișare etapă, filtru, numerotare, prefix marcă, pe etapă
from: bae506f5
---

O etapă este un grup de piese care sunt fabricate, livrate sau montate împreună: o secvență de montaj, o livrare, un lot. Fiecare bară și fiecare fundație este într-o etapă. O conexiune este în etapa barei sale principale: grinda unei plăci de capăt, stâlpul unei plăci de bază. Un model nou are o etapă.

## Panoul Etape

Secțiunea {{ui:Etape}} din panoul {{ui:Model}} listează fiecare etapă:

- caseta de bifare afișează sau ascunde etapa în vedere;
- numărul și un nume pe care îl puteți scrie (gol = „Etapa 2” și așa mai departe);
- câte piese sunt în ea;
- butonul {{ui:×}} elimină o etapă. Poate pleca doar o etapă goală: mutați întâi piesele ei în altă etapă.

{{ui:Adăugare etapă}} adaugă numărul următor și îl face etapa în care merg piesele noi.

## Puneți piese într-o etapă

- **Piese noi:** {{ui:Piesele noi merg în}} alege etapa în care intră fiecare bară și fiecare fundație pe care le plasați de acum.
- **O piesă:** selectați-o și schimbați {{ui:Etapa}} din panoul {{ui:Proprietăți}}.
- **Mai multe piese:** selectați-le (o fereastră, {{key:Shift}}+clic, {{key:Mod+A}}) și schimbați {{ui:Etapa}} în partea de sus a panoului {{ui:Proprietăți}}. Afișează **Variat** atunci când sunt în etape diferite. O modificare înseamnă un pas de anulare.

Copiile păstrează etapa piesei din care au fost copiate, și atunci când sunt lipite într-un alt model (etapa este adăugată acolo).

## Afișarea și ascunderea etapelor

O etapă ascunsă nu este desenată în vedere, nu poate fi selectată cu clic și nu este prinsă de o fereastră de selecție, iar {{key:Mod+A}} o lasă afară. Ea rămâne în lista de materiale, în rapoarte, în desene și în fiecare export. Ascunderea ține doar de vedere: nu se salvează și nu are anulare.

## Mărci pe etapă

Cu **Numerotare mărci pe etapă** activată (pornește activată) și piese în mai multe etape, fiecare etapă este numerotată separat, iar mărcile încep cu numărul etapei: mărci de piese 1-b1, 2-b1, mărci de ansamblu 2-B1, fundații 2-F1. Două grinzi identice din etape diferite au atunci mărci diferite, pentru că sunt fabricate și expediate în momente diferite. Cu o singură etapă folosită, mărcile nu au prefix. Dezactivați opțiunea ca să numerotați tot modelul ca unul singur, astfel încât piesele identice să aibă aceeași marcă, indiferent de etapă.

Etapa este scrisă în exportul IFC (setul de proprietăți DetailCraft, Phase).

:::note
Modelele cu etape sunt salvate în formatul de fișier 2 al DetailCraft. Versiunea 0.3 a DetailCraft nu le poate deschide; această versiune deschide fișierele mai vechi, cu fiecare piesă în etapa 1.
:::
