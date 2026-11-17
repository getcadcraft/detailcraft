---
title: Plasarea tălpilor de fundare cu armătură
summary: Plasați tălpi de fundare dreptunghiulare cu plasă inferioară și bare de așteptare, verificați-le și descărcați tabelul de întinderi.
keywords: talpă de fundare, talpă izolată, fundație, armătură, armare, plasă, bare, bare de așteptare, dornuri, tabel de întinderi, listă de bare, beton, cârlige, strat de acoperire
from: 41a048be
---

Acest subiect se referă la tălpi de fundare izolate, dreptunghiulare. Grinzile, stâlpii, planșeele și pereții sunt în [Detaliere beton armat](topic:reinforced-concrete). Fiecare talpă primește o plasă inferioară în ambele direcții și, dacă se doresc, bare de așteptare care ies în sus din ea. Barele sunt de la mărimea US #3 până la #11.

## Plasarea unei tălpi

1. Alegeți {{ui:Plan}} și selectați nivelul vârfului tălpii.
2. Alegeți {{ui:Talpă de fundare}} din grupul {{ui:Plasare}} sau apăsați {{key:F}}.
3. Setați talpa în panoul {{ui:Proprietăți}} (vedeți mai jos) sau păstrați valorile implicite.
4. Faceți clic pe o intersecție de axe. Talpa este centrată pe ea, cu vârful la nivel. Bara de stare arată, de exemplu, „Talpă de fundare 2000 x 2000 x 600 sub A/1.”

Puteți folosi și formularul {{ui:Adăugare după grilă}} din partea de jos a panoului.

Talpa este desenată transparentă, ca să se vadă barele, care sunt desenate ca tuburi pline.

## Setările tălpii

| Câmp | Implicit | Observații |
|---|---|---|
| Lungime L (mm) | 2000 | Pe x; 300 până la 50000 |
| Lățime B (mm) | 2000 | Pe y; 300 până la 50000 |
| Adâncime H (mm) | 600 | 150 până la 10000 |
| Beton | 4000 psi | Text, tipărit în exportul IFC |

**Plasa inferioară**

| Câmp | Implicit | Observații |
|---|---|---|
| Bare lungi | #5 | Bare pe direcția L, în stratul de jos |
| Distanță (mm) | 250 | Cea mai mare distanță admisă; barele sunt repartizate uniform la această distanță sau mai mică |
| Bare scurte | #5 | Bare pe direcția B, așezate peste barele lungi |
| Distanță (mm) | 250 | Ca mai sus |
| Strat de acoperire (mm) | 75 | Strat de acoperire liber pe fiecare față |
| Cârlige la capete | Activ | Întoarce ambele capete ale fiecărei bare din plasă într-un cârlig standard de 90° (forma U); inactiv dă bare drepte (forma S) |

**Bare de așteptare**

| Câmp | Implicit | Observații |
|---|---|---|
| Bare de așteptare | Activ | Dezactivați-le pentru o talpă fără bare de așteptare |
| Bară | #6 | |
| Bare pe L / Bare pe B | 2 / 2 | O rețea de bare, centrată pe talpă |
| Distanță pe L / Distanță pe B | 250 / 250 | Între centrele barelor |
| Ieșire deasupra vârfului | 600 | Cât ies barele deasupra vârfului tălpii |
| Cârlig la bază | Activ | Cârlig de 90° orientat spre exterior, așezat pe plasă (forma L) |

Sub câmpuri, DetailCraft afișează lungimea cârligului pentru barele lungi, de exemplu „Lungimea cârligului pentru #5: 254 mm, de la exterior la exterior.”

## Modificarea unei tălpi plasate

Selectați talpa (faceți clic pe betonul ei, departe de orice stâlp, sau pe una dintre bare). Apar aceleași câmpuri, plus {{ui:Centru x}}, {{ui:Centru y}}, {{ui:Cota de sus z}} și {{ui:Rotire (°)}}. Sub ele, un tabel listează barele acestei talpi, cu marcajele, numărul și lungimile lor, și volumul de beton în metri cubi.

Fiecare modificare este verificată înainte de a fi păstrată. O modificare care nu poate fi realizată este refuzată, iar bara de stare spune de ce, de exemplu „Stratul de acoperire nu lasă loc pentru bare în această talpă.”, „Talpa este prea puțin adâncă pentru două straturi de bare în interiorul stratului de acoperire.” sau „Barele de așteptare nu încap în talpă cu un strat de acoperire de 75 mm.”

Modificările care pot fi realizate, dar necesită o verificare, sunt listate sub talpă și în fila {{ui:Probleme}}:

- „Barele #11 la 59.6 mm lasă mai puțin de 35.8 mm liberi (ACI 318-19 25.2.1).” Spațiul liber între bare trebuie să fie cel puțin egal cu diametrul barei și cel puțin 25.4 mm.
- „Cârligele #5 au nevoie de 254 mm de adâncime; în interiorul stratului de acoperire încap doar 150 mm.” Lungimile cârligelor sunt atunci scurtate ca să încapă, deci nu mai sunt cârlige standard.
- „Cârligele barelor de așteptare pătrund în stratul de acoperire.”
- „Barele de așteptare sunt mai apropiate decât distanța minimă liberă.”

## Marcaje de bare și tabelul de întinderi

Barele identice (aceeași mărime, aceeași formă și aceleași dimensiuni, până la milimetru) au același marcaj de bară pe toate tălpile. Marcajele se scriu `<bar number>F<n>`: 5F1, 5F2 pentru barele #5, 6F1 pentru prima bară #6 și așa mai departe. Tălpile cu aceeași dimensiune, același beton, aceeași plasă și aceleași bare de așteptare au același marcaj de talpă: F1, F2 …

1. Deschideți fila {{ui:Tabel de întinderi}} de jos. Fiecare rând este un marcaj de bară: mărimea, forma, dimensiunile A, B și C, numărul, lungimea de tăiere, lungimea totală, masa pe metru, greutatea fiecărei bare, greutatea totală și pentru ce este folosită bara.
2. Alegeți {{ui:Descărcare CSV}} în filă sau {{ui:Întinderi}} din meniul {{ui:Mai multe}} al grupului {{ui:Ieșire}}, pentru `<name> bending schedule.csv`.

Formele sunt codurile proprii ale DetailCraft, nu ale unui standard: S dreaptă, L o îndoitură, U două îndoituri. Dimensiunile sunt de la exterior la exterior; lungimea de tăiere este lungimea exactă a axului prin îndoituri. Vedeți [Referință armătură](topic:rebar-reference).

## Ce nu verifică DetailCraft

- Lungimile de dezvoltare și de suprapunere și dacă barele de așteptare sunt suficient de lungi pentru stâlpul de deasupra.
- Partea din regula distanței libere care ține de dimensiunea agregatului (nu cunoaște compoziția betonului).
- Orice despre stâlpul sau placa de bază de deasupra: tălpile și oțelul sunt separate.

Vedeți și [Ce este încă nerealizat](topic:not-built-yet).
