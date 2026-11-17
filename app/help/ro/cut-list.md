---
title: Listă de debitare
summary: Dispuneți grinzile, stâlpii, contravântuirile și limoanele scărilor în lungimi de bară standard, cu lățimea tăieturii fierăstrăului, și aflați câte bare trebuie cumpărate și cât deșeu rezultă.
keywords: listă de debitare, dispunere, nesting, lungime standard, bară, tăietură, fierăstrău, capăt rămas, deșeu, rest, combinare, achiziție, mai multe
from: 81d06ce5
---

Fila {{ui:Listă de debitare}}, sub vizualizare, calculează cum se taie barele liniare ale modelului din bare standard: câte bare de fiecare lungime trebuie cumpărate pentru fiecare profil și material, ce intră pe fiecare bară și cât deșeu rezultă.

## Stabilirea stocului

În partea de sus a filei:

- **Lungimi standard (mm):** lungimile pe care le puteți cumpăra, separate prin spații, de exemplu `6000 12000`, sau barele de 20 ft și 40 ft ca `6096 12192`. Până la opt.
- **Lățimea tăieturii (mm):** cât ia fiecare tăietură (3 la început).
- **Capăt tăiat (mm):** se taie capătul fiecărei bare înainte de prima piesă (0 la început).
- **Păstrare resturi de la (mm):** un rest cel puțin atât de lung revine în stoc; unul mai scurt este deșeu (500 la început).

Acestea sunt păstrate în acest browser, ca celelalte [setări](topic:settings).

## Cum se dispune

- Fiecare grindă, stâlp, contravântuire și limon de scară, după marca piesei și număr; plăcile se taie din tablă și nu sunt dispuse aici.
- Fiecare profil și material separat.
- Cele mai lungi piese întâi, fiecare în prima bară în care încape; o bară nouă începe cu cea mai lungă lungime standard. Apoi fiecare bară este cumpărată ca cea mai scurtă lungime standard care încă ia tăieturile ei.
- Fiecare tăietură ia lățimea tăieturii (niciuna după o tăiere care se termină exact la capătul barei); fiecare bară pierde capătul tăiat.
- O piesă mai lungă decât orice lungime standard este listată sub **Mai lungă decât orice stoc**, nedispusă: îmbinați-o (vezi [Îmbinări](topic:splices)) sau adăugați o lungime standard mai mare.

## Citirea listei

- **Rezumat:** pe profil și material, piesele, barele de cumpărat (de exemplu „2 × 12000, 1 × 6000”), metrii cumpărați și folosiți și deșeul.
- **Bare și tăieturile lor:** fiecare bară, lungimea ei standard, tăieturile ei ca marcă de piesă și lungime, și restul, păstrat sau deșeu.

{{ui:Descărcare CSV}} salvează ambele tabele ca `<name> cut list.csv`.

DetailCraft nu dispune plăcile în foi și nu amestecă profile sau materiale pe aceeași bară.
