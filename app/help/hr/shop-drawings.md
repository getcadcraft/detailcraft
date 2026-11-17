---
title: Izrada radioničkih crteža
summary: Jedan list po oznaci pozicije, izrađen odjednom: pregledajte bilo koji od njih i preuzmite jedan list ili cijeli skup kao PDF na A4 do A1 ili ANSI B do D, s rupama, izrezima, kotama i zaglavljem crteža.
keywords: radionički crtež, radionički crteži, svi dijelovi, serija, cijeli skup, crtež jednog dijela, crtež za izradu, pdf, detaljni crtež, crtež komada, ispis
from: d25fe035
---

DetailCraft izrađuje jedan list po oznaci pozicije, za svaku gredu, stup, sprega i ploču u modelu, odjednom: ne morate ih odabirati jednu po jednu. Identični komadi dijele oznaku, pa dijele i list. Listovi se izrađuju odmah iz modela; nisu pohranjeni niti uređivani.

## Izrada cijelog skupa

1. Odaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}}. Ništa ne mora biti odabrano. Kad je odabran dio, prozor se otvara na listu tog dijela. Na panelu {{ui:Svojstva}} isti gumb zove se {{ui:Radionički crtež}} za štapove, a {{ui:Crtež ploče}} za spojeve.
2. Otvara se pregled, naslovljen oznakom pozicije, na primjer „Radionički crtež b1“. Prvi popis uz naslov sadrži svaku oznaku pozicije s profilom, duljinom i količinom: odaberite jednu da vidite njezin list. Drugi popis mijenja veličinu lista; cijeli skup se ponovno izrađuje na njoj (vidi [Crteži općeg rasporeda i sklopa](topic:drawings#choose-the-sheet-size)).
3. Odaberite {{ui:Preuzmi sve}} (gumb prikazuje broj listova) za jedan PDF sa stranicom po oznaci pozicije, `<name> Shop drawings.pdf`. Svaki list u zaglavlju crteža kaže „List 3 od 42“. Ili odaberite {{ui:Preuzmi PDF}} za onaj koji gledate, `<name> <mark>.pdf`.
4. Zatvorite pregled gumbom × ili tipkom {{key:Esc}}.

Ako je {{ui:Radionički crtež}} zasivljen, model još nema dijelova.

## Što je na listu

Za I-profil:

- **Pročelje**, gledajući hrbat: dio s izrezima, rupe u hrptu kao krugovi, a rupe u pojasnicama kao skrivene (crtkane) linije.
- **Tlocrt gornje pojasnice**, gledano odozgo, kad bilo koja pojasnica ima rupe. Rupe donje pojasnice prikazuju se crtkano.
- **Presjek** kroz profil.
- **Kote:** lančano pozicionirane rupe duž dijela i ukupna duljina, visine rupa u hrptu, raspon (gauge) i veličine izreza.
- **Popis rupa:** svaka grupa rupa, na primjer „8 x Ø22 u gornjoj pojasnici“.
- **Zavar**, kad dio ima ploče zavarene na sebe.
- **Zaglavlje crteža:** oznaka pozicije, oznaka sklopa, profil, materijal, duljina, količina, težina po komadu i ukupna težina, naziv modela i datum.

Za U-profil, kutnik ili šuplji presjek list je isti, gledano na hrbat ili stranu: stijenke cijevi su skrivene (crtkane) linije, a presjek daje debljinu stijenke.

Za ploču: lice ploče s rupama i njezin rub kao presjek.

## Mjerila

Mjerilo se bira s popisa (od 1:1 do 1:200) tako da dio stane na list. Dugačak, plitak dio bi na jednom mjerilu bio pretanak za čitanje, pa kad bi dubina na papiru bila manja od 30 mm, dubina se crta u većem mjerilu od duljine. Naslov pogleda to tada kaže, na primjer „duljina 1:20, dubina 1:5 (nije u jednom mjerilu; mjerodavne su kote)“. Dimenzije uvijek čitajte iz kota, a ne mjerite list.

## Dobro je znati

- Količina je broj dijelova s tom oznakom u modelu. Oznake se mogu preračunati nakon promjene; vidi [Provjera oznaka i sastavnice](topic:marks-and-bom).
- Svaki list je jedan dio za sebe, bez simbola zavara; sklopni crteži (sa simbolima zavara) i crteži općeg rasporeda nalaze se u [Crteži](topic:drawings). List se u DetailCraft-u ne može uređivati ni komentirati. Za označavanje otvorite PDF u aplikaciji za označavanje PDF-a, na primjer MarkupCraft.
- Zaglavlje crteža kaže „DetailCraft laboratorijska verzija — milimetri“.
- Tekst koristi standardni PDF font Helvetica. Znakovi izvan zapadnoeuropskog skupa ispisuju se kao „?“, a statusna traka ih broji.

## Ispis

Otvorite preuzeti PDF u preglednicima PDF-a i ispišite ga na 100 % (bez „prilagodi stranici“) na papiru odabrane veličine ako želite da navedena mjerila vrijede. Na manjem listu skalirajte ga i oslonite se na kote.
