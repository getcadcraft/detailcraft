---
title: Izradi radioničke crteže
summary: Jedan list po oznaci dijela, napravljen odjednom: pregledaj bilo koji od njih i preuzmi jedan list ili cijeli set kao PDF u A4 do A1 ili ANSI B do D, sa rupama, usecima, kotama i naslovnim blokom.
keywords: radionički crtež, radionički crteži, svi dijelovi, serija, cijeli set, crtež jednog dijela, crtež za izradu, pdf, detaljni crtež, crtež komada, štampa
from: d25fe035
---

DetailCraft pravi jedan list po oznaci dijela, za svaku gredu, stub, dijagonalu i lim u modelu, odjednom: ne moraš ih birati jedan po jedan. Identični komadi dijele oznaku, pa dijele i list. Listovi se prave na licu mjesta iz modela; nisu pohranjeni niti se uređuju.

## Napravi cijeli set

1. Izaberi {{ui:Radionički crtež}} u grupi {{ui:Izlaz}}. Ništa ne mora biti odabrano. Kad je dio odabran, prozor se otvara na listu tog dijela. U panelu {{ui:Svojstva}} isto dugme se zove {{ui:Radionički crtež}} za elemente i {{ui:Crtež lima}} za veze.
2. Otvara se pregled, s naslovom prema oznaci dijela, na primjer „Radionički crtež b1“. Prvi spisak pored naslova sadrži svaku oznaku dijela sa njenim profilom, dužinom i količinom: izaberi jednu da vidiš njen list. Drugi spisak mijenja veličinu lista; cijeli set se ponovo pravi na njoj (vidi [Opšti i sklopni crteži](topic:drawings#choose-the-sheet-size)).
3. Izaberi {{ui:Preuzmi sve}} (dugme prikazuje broj listova) za jedan PDF sa stranicom po oznaci dijela, `<name> Shop drawings.pdf`. Svaki list u naslovnom bloku kaže „List 3 od 42“. Ili izaberi {{ui:Preuzmi PDF}} za onaj koji gledaš, `<name> <mark>.pdf`.
4. Zatvori pregled sa × ili {{key:Esc}}.

Ako je {{ui:Radionički crtež}} zasivljeno, model još nema dijelova.

## Šta je na listu

Za I-profil:

- **Izgled**, gledano na hrbat: dio sa usječenim usecima, rupe u hrbatu kao krugovi, a rupe u pojasnicama kao skrivene (isprekidane) linije.
- **Osnova gornje pojasnice**, gledano odozgo, kad bilo koja pojasnica ima rupe. Rupe donje pojasnice se prikazuju isprekidano.
- **Presjek** kroz profil.
- **Kote:** nizovi položaja rupa duž dijela plus ukupna dužina, visine rupa u hrbatu, razmak linija i veličine useka.
- **Spisak rupa:** svaka grupa rupa, na primjer „8 x Ø22 u gornjoj pojasnici“.
- **Var**, kad je dio zavaren za limove.
- **Naslovni blok:** oznaka dijela, oznaka sklopa, profil, materijal, dužina, količina, težina po komadu i ukupna, naziv modela i datum.

Za U-profil, uglovnik ili šuplji presjek list je isti, gledano na hrbat ili na bok: zidovi cijevi su skrivene (isprekidane) linije, a presjek daje debljinu zida.

Za lim: lice lima s rupama, a njegova ivica kao presjek.

## Razmjere

Razmjera se bira sa spiska (od 1:1 do 1:200) da dio stane na list. Dugačak, plitak dio bio bi pretanak za čitanje u jednoj razmjeri, pa kad bi dubina na papiru bila manja od 30 mm, dubina se crta u većoj razmjeri od dužine. Naslov prikaza to tada kaže, na primjer „dužina 1:20, dubina 1:5 (nije u jednoj razmjeri; mjerodavne su kote)“. Veličine uvijek čitaj iz kota, a ne mjerenjem lista.

## Stvari koje treba znati

- Količina je broj dijelova s tom oznakom u modelu. Oznake se mogu ponovo numerisati nakon promjene; vidi [Provjeri oznake i spisak materijala](topic:marks-and-bom).
- Svaki list je jedan dio sam za sebe, bez oznaka zavara; sklopni crteži (sa oznakama zavara) i opšti rasporedi nalaze se u [Crteži](topic:drawings). List se ne može uređivati niti označavati u DetailCraft-u. Da ga označiš, otvori PDF u aplikaciji za označavanje PDF-a, kao što je MarkupCraft.
- Naslovni blok kaže „DetailCraft laboratorijska verzija — milimetri“.
- Tekst koristi standardni PDF font Helvetica. Znakovi izvan zapadnoevropskog skupa štampaju se kao „?“, a statusna traka ih broji.

## Štampanje

Otvori preuzeti PDF u svom pregledaču i štampaj ga na 100% (bez „prilagodi stranici“), na papiru veličine koju si izabrao, ako želiš da navedene razmjere vrijede. Na manjem listu smanji ga i oslanjaj se na kote.
