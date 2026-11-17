---
title: Pravljenje radioničkih crteža
summary: Jedan list po oznaci dela, napravljen odjednom: pregledaj bilo koji od njih i preuzmi jedan list ili ceo skup kao PDF na A4 do A1 ili ANSI B do D, sa rupama, usecima, kotama i naslovnim blokom.
keywords: radionički crtež, radionički crteži, svi delovi, grupno, ceo skup, crtež pojedinačnog dela, crtež za izradu, pdf, detaljni crtež, crtež komada, štampanje
from: d25fe035
---

DetailCraft pravi jedan list po oznaci dela, za svaku gredu, stub, dijagonalu i lim u modelu, odjednom: ne moraš da ih biraš jedan po jedan. Identični komadi dele oznaku, pa dele i list. Listovi se prave na licu mesta iz modela; ne čuvaju se niti menjaju.

## Pravljenje celog skupa

1. Izaberi {{ui:Radionički crtež}} u grupi {{ui:Izlaz}}. Ništa ne mora da bude izabrano. Sa izabranim delom, prozor se otvara na listu tog dela. Na panelu {{ui:Svojstva}} isto dugme se zove {{ui:Radionički crtež}} za elemente i {{ui:Crtež lima}} za veze.
2. Otvara se pregled, sa naslovom oznake dela, na primer „Radionički crtež b1“. Prvi spisak pored naslova sadrži svaku oznaku dela sa profilom, dužinom i količinom: izaberi jednu da vidiš njen list. Drugi spisak menja veličinu lista; ceo skup se ponovo pravi na njoj (videti [Opšti raspored i sklopni crteži](topic:drawings#choose-the-sheet-size)).
3. Izaberi {{ui:Preuzmi sve}} (dugme prikazuje broj listova) za jedan PDF sa po jednom stranicom za svaku oznaku dela, `<name> Shop drawings.pdf`. Svaki list u naslovnom bloku kaže „List 3 od 42“. Ili izaberi {{ui:Preuzmi PDF}} za onaj koji gledaš, `<name> <mark>.pdf`.
4. Zatvori pregled sa × ili {{key:Esc}}.

Ako je {{ui:Radionički crtež}} zasivljen, model još nema delova.

## Šta je na listu

Za I-profil:

- **Izgled**, gledano na hrbat: deo sa naznačenim usecima, rupe u hrbatu kao krugovi, a rupe u pojasevima kao skrivene (isprekidane) linije.
- **Osnova gornjeg pojasa**, gledano odozgo, kada bilo koji pojas ima rupe. Rupe donjeg pojasa se prikazuju isprekidano.
- **Presek** kroz profil.
- **Kote:** položaji rupa nizom duž dela plus ukupna dužina, visine rupa u hrbatu, poprečni razmak (gauge) i dimenzije useka.
- **Spisak rupa:** svaka grupa rupa, na primer „8 x Ø22 u gornjem pojasu“.
- **Var**, kada su za deo zavareni limovi.
- **Naslovni blok:** oznaka dela, oznaka sklopa, profil, materijal, dužina, količina, težina svakog i ukupno, naziv modela i datum.

Za U-profil, uglovnik ili šuplji profil list je isti, gledano na hrbat ili stranu: zidovi cevi su skrivene (isprekidane) linije, a presek daje debljinu zida.

Za lim: lice lima sa rupama i njegova ivica kao presek.

## Razmere

Razmera se bira sa spiska (od 1:1 do 1:200) tako da deo stane na list. Dugačak, plitak deo bi bio pretanak da se čita u jednoj razmeri, pa kada bi dubina na papiru bila manja od 30 mm, dubina se crta u većoj razmeri nego dužina. Naslov prikaza to tada kaže, na primer „dužina 1:20, dubina 1:5 (nije u jednoj razmeri; važe kote)“. Veličine uvek čitaj iz kota, a ne merenjem lista.

## Šta treba znati

- Količina je broj delova sa tom oznakom u modelu. Oznake se mogu preoznačiti posle promene; videti [Provera oznaka i spiska materijala](topic:marks-and-bom).
- Svaki list je jedan deo sam za sebe, bez oznaka varova; sklopni crteži (sa oznakama varova) i opšti rasporedni crteži su u [Crteži](topic:drawings). List se ne može uređivati ni dopunjavati oznakama u DetailCraft-u. Da ga označiš, otvori PDF u aplikaciji za označavanje PDF-a, kao što je MarkupCraft.
- Naslovni blok kaže „DetailCraft laboratorijska verzija — milimetri“.
- Tekst koristi standardni PDF font Helvetica. Znakovi van zapadnoevropskog skupa štampaju se kao „?“, a statusna traka ih broji.

## Štampanje

Otvori preuzeti PDF u pregledaču PDF-a i štampaj ga na 100% (bez „prilagodi stranici“) na papiru izabrane veličine, ako želiš da navedene razmere važe. Na manjem listu, skaliraj ga i oslanjaj se na kote.
