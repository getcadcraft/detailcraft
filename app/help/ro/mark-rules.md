---
title: Reguli pentru mărci
summary: Când două piese sau două ansambluri au aceeași marcă, cum se numerotează mărcile și cum funcționează mărcile de talpă de fundare și de bare.
keywords: mărci, numerotare, marcă piesă, marcă ansamblu, prefix, toleranță, piese identice, mărci de bare, mărci de talpă de fundare
from: ce02c98e
---

DetailCraft recalculează fiecare marcă după fiecare modificare. Nimic nu este stocat, astfel încât mărcile descriu mereu modelul așa cum este acum. Vedeți [Verificarea mărcilor și a listei de materiale](topic:marks-and-bom) pentru cum se folosesc.

## Mărci de piese

Două piese au aceeași marcă de piesă când toate acestea coincid:

1. Tipul piesei (grindă, stâlp, contravântuire sau placă).
2. Numele profilului (fără diferență între majuscule și minuscule).
3. Materialul (fără diferență între majuscule și minuscule).
4. Lungimea de tăiere, în limita de 1 mm.
5. Fiecare gaură: fața, poziția pe lungime și pe transversal, în limita de 1 mm, iar diametrul în limita de 0.1 mm.
6. Fiecare decupare: capătul, latura, lungimea și adâncimea, în limita de 1 mm.

{{ui:Nume}} al barei nu contează. Nici poziția ei în model, nici rotirea, nici sensul în care a fost desenată nu contează, atât timp cât piesa în sine este aceeași.

### Piese întoarse

O piesă este comparată în toate modurile în care poate fi întoarsă astfel încât secțiunea ei să se suprapună peste ea însăși. Dacă oricare dintre ele o face să coincidă cu altă piesă, au aceeași marcă.

| Formă | Întoarceri care contează |
|---|---|
| Profile I, HSS dreptunghiulare, plăci | Capăt la capăt (în jurul axei verticale), capăt la capăt (în jurul axei orizontale) și cu fața în jos în jurul propriei lungimi |
| Profile U | Doar capăt la capăt în jurul axei orizontale, astfel încât inima să rămână de aceeași parte |
| Cornière, HSS rotunde | Niciuna: comparate ca așezate |

Deci o grindă cu o gaură aproape de capătul stâng se potrivește cu o grindă cu aceeași gaură aproape de capătul drept, iar un stâlp cu găuri într-o singură talpă se potrivește cu un stâlp cu aceleași găuri în cealaltă talpă.

### Numerotare

| Tip | Prefix piesă | Prefix ansamblu |
|---|---|---|
| Stâlp | c | C |
| Grindă | b | B |
| Contravântuire | br | BR |
| Placă (plasată, placă de capăt sau de bază) | p | P |

Mărcile se numerotează de la 1 în cadrul fiecărui prefix. Ordinea este: stâlpi, apoi grinzi, contravântuiri și plăci; în cadrul unui tip, după numele profilului în ordine naturală (W8x10 înaintea lui W12x26); apoi piesele mai lungi primele.

Deoarece numerotarea urmează această ordine, adăugarea sau modificarea unei piese poate schimba numerele altora.

## Mărci de ansamblu

- Fiecare piesă care nu este sudată de altă piesă este piesa principală a propriului ansamblu.
- Plăcile de capăt sunt sudate de grinda lor, iar plăcile de bază de stâlpul lor, deci aparțin ansamblului acelei bare.
- Două ansambluri au aceeași marcă atunci când piesele lor principale au aceeași marcă de piesă și piesele atașate au aceleași mărci în aceleași locuri (în limita de 1 mm), admițându-se aceleași întoarceri ca la piesa principală.
- Prefixul ansamblului urmează piesa principală: o grindă cu două plăci de capăt este un ansamblu B.

Plăcile plasate cu instrumentul {{ui:Placă}} nu sunt sudate de nimic, deci fiecare este propriul ansamblu P.

## Mărci de talpă de fundare

Tălpile de fundare cu aceeași lungime, lățime, adâncime, text de beton, plasă de jos și bare de așteptare au aceeași marcă: F1, F2 … în ordinea în care au fost plasate. Poziția și rotirea nu contează.

## Mărci de bare

Barele cu aceeași dimensiune, formă și dimensiunile A, B și C (rotunjite la milimetru) au aceeași marcă în toate tălpile. Marca este numărul barei, F și un contor pentru fiecare dimensiune de bară: 5F1, 5F2, 6F1. O bară pe direcția lungă și una pe direcția scurtă ale unei tălpi pătrate sunt aceeași bară și au aceeași marcă; coloana {{ui:Folosită pentru}} din tabel listează ambele utilizări.
