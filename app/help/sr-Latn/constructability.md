---
title: Provere izvodljivosti
summary: Problemi za ono što detaljer uoči okom: zavrtanj do kog ključ ne dopire, zavrtnji previše blizu za nasadni ključ, ugaoni varovi van granica veličine, varovi do kojih gorionik ne dopire i cevi koje zadržavaju vodu.
keywords: izvodljivost, ključ, nasadni ključ, pristup zavrtnju, zatezanje, veličina vara, ugaoni var, minimalni var, maksimalni var, voda, otvor za odzračivanje, otvor za odvod, cinkovanje, šuplji presek, problemi
from: 72315151
---

DetailCraft traži četiri vrste problema koje nijedna provera čvrstoće ne nalazi, i navodi ih u panelu {{ui:Problemi}}. To su upozorenja i napomene na koje treba obratiti pažnju, a ne greške: model se i dalje pravi.

## Zavrtanj do kog ključ ne dopire

Za svaki zavrtanj DetailCraft stavlja nasadni ključ preko glave i preko matice. Nasadni ključ je valjak širok koliko je matica preko uglova plus zid od 4 mm, dugačak 60 mm. Ako rebro grede, pojasnica, lim ili dijagonala stoji unutar tog valjka, problem navodi spoj, koliko zavrtnja, koji deo smeta i koliko je daleko od zavrtnja.

Nasadni ključ je tipičan udarni nasadni ključ. Običan ključ treba manje prostora, a veći alat više. Zamoli svog povezanog asistenta da pokrene `constructability_check` sa drugačijim `socketLength` da vidiš kako se odgovor menja.

## Zavrtnji preblizu za nasadni ključ

Nasadni ključ preko jednog zavrtnja ne sme da dodiruje glavu sledećeg. Zavrtnji jedne veze koji su bliži od širine nasadnog ključa plus glave susednog navode se sa pronađenim razmakom i potrebnim razmakom.

## Veličine ugaonih varova

AISC 360-16 Tabela J2.4 određuje najmanji ugaoni var prema debljini tanjeg dela (3 mm do debljine 6.35 mm, 5 mm do 12.7, 6 mm do 19.05, 8 mm iznad), a J2.2b najveći duž ivice materijala: ne veći od materijala kada je tanji od 6.35 mm, inače 1.6 mm manji. Veze iste veličine na istoj debljini navode se kao jedan problem.

Debljina koja se koristi je najtanji deo koji var imenuje, pa je var od 8 mm po celom obodu grede sa rebrom od 6.35 mm naveden.

## Voda i otvori

- **Otvoren gornji kraj** šupljeg preseka koji stoji uspravno ili je nagnut za više od 10° propušta kišu.
- Šuplji presek **zatvoren na oba kraja** treba otvor za odzračivanje i otvor za odvod; i vruće cinkovanje i pritisak zagrejanog vazduha to traže.

## Može li zavarivač da dođe

Ugaoni var se radi sa gorionikom na sredini između dve površine koje spaja. Za svaki ugaoni var po obodu (krajnji lim, bazni lim, lim za ugao) provera uzima obris preseka elementa na limu i, na svakih 20 mm, pušta putanju gorionika pod 45° od mesta gde mu mlaznica (poluprečnik 10 mm na početku) prvi put prođe obe površine, još 30 mm. Ako putanja naiđe na sopstvenu pojasnicu grede ili drugi deo, taj deo vara navodi se sa delom i rastojanjem. Ovi brojevi su tipični, a ne iz standarda: pitaj svog izvođača za postupak i mlaznicu. Varovi duž dve ivice (smičuća pločica) nisu locirani i nisu provereni.
