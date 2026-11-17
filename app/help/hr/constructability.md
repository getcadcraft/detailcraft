---
title: Provjere izvedivosti
summary: Problemi za stvari koje detaljist uoči okom: vijak do kojeg ključ ne dopire, vijci preblizu za nasadni ključ, kutni zavari izvan njihovih granica veličine, zavari do kojih plamenik ne može doći te cijevi koje zadržavaju vodu.
keywords: izvedivost, ključ, nasadni ključ, pristup vijku, zatezanje, veličina zavara, kutni zavar, minimalni zavar, maksimalni zavar, voda, odzračni otvor, odvodni otvor, cinčanje, šuplji profil, problemi
from: 72315151
---

DetailCraft traži četiri vrste problema koje nijedna provjera čvrstoće ne nalazi i navodi ih na panelu {{ui:Problemi}}. To su upozorenja i napomene koje treba pregledati, a ne pogreške: model se i dalje izrađuje.

## Vijak do kojeg ključ ne dopire

Za svaki vijak DetailCraft stavlja nasadni ključ preko glave i preko matice. Nasadni ključ je valjak širine kao matica preko svojih kutova plus zid od 4 mm, dugačak 60 mm. Ako rebro grede, pojasnica, ploča ili spreg stoji unutar tog valjka, problem navodi spoj, koliko vijaka, koji dio smeta i koliko je daleko od vijka.

Nasadni ključ je tipičan udarni nasadni ključ. Običan ključ treba manje prostora, a veći alat više. Zamolite svog povezanog pomoćnika da pokrene `constructability_check` s drugim `socketLength` da vidite kako se odgovor mijenja.

## Vijci preblizu za nasadni ključ

Nasadni ključ preko jednog vijka ne smije dodirivati glavu sljedećeg. Vijci spoja koji su bliži od širine nasadnog ključa plus glave susjeda navode se s pronađenim i potrebnim razmakom.

## Veličine kutnih zavara

AISC 360-16 Tablica J2.4 određuje najmanji kutni zavar prema debljini tanjeg dijela (3 mm do 6.35 mm debljine, 5 mm do 12.7, 6 mm do 19.05, 8 mm iznad), a J2.2b najveći uz rub materijala: ne veći od materijala kada je tanji od 6.35 mm, inače 1.6 mm manji. Spojevi s istom veličinom na istoj debljini navode se kao jedan problem.

Debljina koja se koristi je najtanji dio koji zavar navodi, pa se zavar od 8 mm sa svih strana oko grede s hrbatom od 6.35 mm navodi.

## Voda i odzračni otvori

- **Otvoreni gornji kraj** šupljeg profila koji stoji uspravno ili je nagnut za više od 10° propušta kišu.
- Šuplji profil **zatvoren na oba kraja** treba odzračni i odvodni otvor; vruće cinčanje i tlak zagrijanog zraka oba to traže.

## Može li zavarivač doći do njega

Kutni zavar se radi s plamenikom na pola puta između dviju ploha koje spaja. Za svaki kutni zavar oko cijele površine (čeona ploča, podložna ploča, kutna ploča) provjera uzima obris presjeka štapa na ploči i, svakih 20 mm, vodi putanju plamenika pod kutom od 45° od mjesta gdje mlaznica (zadano polumjer 10 mm) prvi put prolazi pored obje plohe, još 30 mm. Ako putanja naiđe na pojasnicu same grede ili na drugi dio, taj dio zavara navodi se s dijelom i udaljenošću. Ti su brojevi tipični, a ne standardni: pitajte svog izrađivača za postupak i mlaznicu. Zavari duž dvaju rubova (smični lim) nisu locirani i ne provjeravaju se.
